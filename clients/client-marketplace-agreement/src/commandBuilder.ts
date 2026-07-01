// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type {
  MarketplaceAgreementClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "./MarketplaceAgreementClient";


/**
 * @internal
 */
export const command = makeBuilder<MarketplaceAgreementClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "AWSMPCommerceService_v20200301", "MarketplaceAgreementClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
