// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type {
  KeyspacesStreamsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "./KeyspacesStreamsClient";


/**
 * @internal
 */
export const command = makeBuilder<KeyspacesStreamsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "KeyspacesStreams", "KeyspacesStreamsClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
