// smithy-typescript generated code
import { getChangeResourceRecordSetsPlugin, getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./Route53Client";


/**
 * @internal
 */
export const command = makeBuilder<Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "AWSDnsV20130401", "Route53Client", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
  getIdNormalizerPlugin(config),
];

/**
 * @internal
 */
export const _mw1 = (Command: any, cs: any, config: any, o: any) => [
  getChangeResourceRecordSetsPlugin(config),
  getIdNormalizerPlugin(config),
];

/**
 * @internal
 */
export const _mw2 = (Command: any, cs: any, config: any, o: any) => [
];
