// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type {
  MarketplaceCatalogClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "./MarketplaceCatalogClient";


/**
 * @internal
 */
export const command = makeBuilder<MarketplaceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "AWSMPSeymour", "MarketplaceCatalogClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
