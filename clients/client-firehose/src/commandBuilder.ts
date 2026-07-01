// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./FirehoseClient";


/**
 * @internal
 */
export const command = makeBuilder<FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "Firehose_20150804", "FirehoseClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
