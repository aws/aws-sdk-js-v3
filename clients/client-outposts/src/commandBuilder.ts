// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./OutpostsClient";


/**
 * @internal
 */
export const command = makeBuilder<OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "OutpostsOlafService", "OutpostsClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
