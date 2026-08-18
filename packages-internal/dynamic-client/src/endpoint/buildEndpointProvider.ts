import { EndpointCache, resolveEndpoint } from "@smithy/core/endpoints";
import type { EndpointParams, EndpointV2, Logger, RuleSetObject } from "@smithy/types";

import type { AstShape } from "../ast/types";

/**
 * An endpoint provider compatible with `resolveEndpointConfig`.
 *
 * @internal
 */
export type EndpointProvider = (params: EndpointParams, context?: { logger?: Logger }) => EndpointV2;

/**
 * Builds an endpoint provider for a service from its endpoint traits:
 *
 * - `smithy.rules#endpointRuleSet` → the rules-engine resolver.
 * - otherwise → a passthrough provider that requires a caller-supplied
 *   `endpoint` (the endpoint middleware uses that value directly, so the
 *   provider only runs, and throws, when no endpoint was configured).
 *
 * Note: the `smithy.rules#endpointBdd` trait is not used because the BDD
 * conditions and results in the AST are in the full rule-object format, but
 * `BinaryDecisionDiagram` expects a pre-compiled tuple format that is
 * produced at codegen time. The rule-set engine handles the raw AST form.
 *
 * @param service - the service shape.
 *
 * @returns an endpoint provider.
 *
 * @internal
 */
export function buildEndpointProvider(service: AstShape): EndpointProvider {
  const traits = service.traits ?? {};

  const ruleSet = traits["smithy.rules#endpointRuleSet"] as RuleSetObject | undefined;
  if (ruleSet) {
    const cache = new EndpointCache({ size: 50, params: ["endpoint"] });
    return (params, context = {}) =>
      cache.get(params, () => resolveEndpoint(ruleSet, { endpointParams: params, logger: context.logger }));
  }

  // TODO: the dynamic client should emplace a default endpointRuleSet when a
  // model has none, rather than falling back to this passthrough provider.
  // Mirror smithy-typescript's AddDefaultEndpointRuleSet (basic SDK::Endpoint
  // ruleset) and AddDefaultAwsEndpointRuleSet (regional AWS flavor keyed on the
  // service's endpointPrefix) so endpoint resolution always runs through the
  // rules engine and honors the caller-supplied `Endpoint` builtin uniformly.
  return (params) => {
    const endpoint = params?.endpoint;
    if (typeof endpoint === "string" && endpoint.length > 0) {
      return { url: new URL(endpoint), properties: {}, headers: {} };
    }
    if (endpoint && typeof endpoint === "object" && "url" in endpoint) {
      return endpoint as unknown as EndpointV2;
    }
    throw new Error(
      "@smithy/dynamic-client - no endpoint could be resolved. The model has no endpoint rules; configure `endpoint` on the client."
    );
  };
}
