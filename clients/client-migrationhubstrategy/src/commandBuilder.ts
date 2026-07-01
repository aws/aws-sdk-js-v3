// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type {
  MigrationHubStrategyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "./MigrationHubStrategyClient";


/**
 * @internal
 */
export const command = makeBuilder<MigrationHubStrategyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "AWSMigrationHubStrategyRecommendation", "MigrationHubStrategyClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
