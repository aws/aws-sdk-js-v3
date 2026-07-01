// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import type {
  ConnectContactLensClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "./ConnectContactLensClient";
import { commonParams } from "./endpoint/EndpointParameters";


/**
 * @internal
 */
export const command = makeBuilder<ConnectContactLensClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "AmazonConnectContactLens", "ConnectContactLensClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
