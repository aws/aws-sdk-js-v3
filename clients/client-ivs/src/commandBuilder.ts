// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./IvsClient";


/**
 * @internal
 */
export const command = makeBuilder<IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "AmazonInteractiveVideoService", "IvsClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
