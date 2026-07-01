// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import type {
  CostAndUsageReportServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "./CostAndUsageReportServiceClient";
import { commonParams } from "./endpoint/EndpointParameters";


/**
 * @internal
 */
export const command = makeBuilder<CostAndUsageReportServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "AWSOrigamiServiceGatewayService", "CostAndUsageReportServiceClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
