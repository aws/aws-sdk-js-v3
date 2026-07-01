// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./MediaLiveClient";


/**
 * @internal
 */
export const command = makeBuilder<MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "MediaLive", "MediaLiveClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
