// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { MediaPackageV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./MediaPackageV2Client";


/**
 * @internal
 */
export const command = makeBuilder<MediaPackageV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "mediapackagev2", "MediaPackageV2Client", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
