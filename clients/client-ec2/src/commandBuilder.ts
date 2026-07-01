// smithy-typescript generated code
import { getCopySnapshotPresignedUrlPlugin } from "@aws-sdk/middleware-sdk-ec2";
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./EC2Client";
import { commonParams } from "./endpoint/EndpointParameters";


/**
 * @internal
 */
export const command = makeBuilder<EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "AmazonEC2", "EC2Client", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];

/**
 * @internal
 */
export const _mw1 = (Command: any, cs: any, config: any, o: any) => [
  getCopySnapshotPresignedUrlPlugin(config),
];
