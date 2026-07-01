// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type {
  IoTJobsDataPlaneClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "./IoTJobsDataPlaneClient";


/**
 * @internal
 */
export const command = makeBuilder<IoTJobsDataPlaneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "IotLaserThingJobManagerExternalService", "IoTJobsDataPlaneClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
