// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import type {
  ElasticBeanstalkClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "./ElasticBeanstalkClient";
import { commonParams } from "./endpoint/EndpointParameters";


/**
 * @internal
 */
export const command = makeBuilder<ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "AWSElasticBeanstalkService", "ElasticBeanstalkClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
