import { decideEndpoint, EndpointCache, resolveEndpoint } from "@smithy/core/endpoints";
import type { EndpointParams, EndpointV2, Logger, RuleSetObject } from "@smithy/types";

import type { AstShape } from "../ast/types";
import { buildBdd, type EndpointBddTrait } from "./bdd";
import { getDefaultEndpointRuleSet } from "./defaultEndpointRuleSet";

/**
 * An endpoint provider compatible with `resolveEndpointConfig`.
 *
 * @internal
 */
export type EndpointProvider = (params: EndpointParams, context?: { logger?: Logger }) => EndpointV2;

/**
 * Builds an endpoint provider for a service from its endpoint traits, in
 * priority order.
 *
 * @param service - the service shape.
 *
 * @returns an endpoint provider.
 *
 * @internal
 */
export function buildEndpointProvider(service: AstShape): EndpointProvider {
  const traits = service.traits ?? {};

  const bddTrait = traits["smithy.rules#endpointBdd"] as EndpointBddTrait | undefined;
  if (bddTrait) {
    const bdd = buildBdd(bddTrait);
    const cache = new EndpointCache({ size: 50, params: cacheKeyParams(bddTrait.parameters) });
    return (params, context = {}) =>
      cache.get(params, () => decideEndpoint(bdd, { endpointParams: params, logger: context.logger }));
  }

  // A model with no endpoint trait is normalized onto a default rule-set so it
  // uses the same resolver code path as a model that ships one.
  const ruleSet =
    (traits["smithy.rules#endpointRuleSet"] as RuleSetObject | undefined) ?? getDefaultEndpointRuleSet(service);
  const cache = new EndpointCache({ size: 50, params: cacheKeyParams(ruleSet.parameters) });
  return (params, context = {}) =>
    cache.get(params, () => resolveEndpoint(ruleSet, { endpointParams: params, logger: context.logger }));
}

/**
 * Derives the {@link EndpointCache} key parameter list from a model's endpoint
 * parameters map.
 *
 * @internal
 */
function cacheKeyParams(parameters: Record<string, unknown> | undefined): string[] {
  return parameters ? Object.keys(parameters) : [];
}
