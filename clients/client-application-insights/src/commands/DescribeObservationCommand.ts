// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApplicationInsightsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationInsightsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeObservationRequest, DescribeObservationResponse } from "../models/models_0";
import { DescribeObservation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeObservationCommand}.
 */
export interface DescribeObservationCommandInput extends DescribeObservationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeObservationCommand}.
 */
export interface DescribeObservationCommandOutput extends DescribeObservationResponse, __MetadataBearer {}

/**
 * <p>Describes an anomaly or error with the application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, DescribeObservationCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, DescribeObservationCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * // import type { ApplicationInsightsClientConfig } from "@aws-sdk/client-application-insights";
 * const config = {}; // type is ApplicationInsightsClientConfig
 * const client = new ApplicationInsightsClient(config);
 * const input = { // DescribeObservationRequest
 *   ObservationId: "STRING_VALUE", // required
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new DescribeObservationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeObservationResponse
 * //   Observation: { // Observation
 * //     Id: "STRING_VALUE",
 * //     StartTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     SourceType: "STRING_VALUE",
 * //     SourceARN: "STRING_VALUE",
 * //     LogGroup: "STRING_VALUE",
 * //     LineTime: new Date("TIMESTAMP"),
 * //     LogText: "STRING_VALUE",
 * //     LogFilter: "ERROR" || "WARN" || "INFO",
 * //     MetricNamespace: "STRING_VALUE",
 * //     MetricName: "STRING_VALUE",
 * //     Unit: "STRING_VALUE",
 * //     Value: Number("double"),
 * //     CloudWatchEventId: "STRING_VALUE",
 * //     CloudWatchEventSource: "EC2" || "CODE_DEPLOY" || "HEALTH" || "RDS",
 * //     CloudWatchEventDetailType: "STRING_VALUE",
 * //     HealthEventArn: "STRING_VALUE",
 * //     HealthService: "STRING_VALUE",
 * //     HealthEventTypeCode: "STRING_VALUE",
 * //     HealthEventTypeCategory: "STRING_VALUE",
 * //     HealthEventDescription: "STRING_VALUE",
 * //     CodeDeployDeploymentId: "STRING_VALUE",
 * //     CodeDeployDeploymentGroup: "STRING_VALUE",
 * //     CodeDeployState: "STRING_VALUE",
 * //     CodeDeployApplication: "STRING_VALUE",
 * //     CodeDeployInstanceGroupId: "STRING_VALUE",
 * //     Ec2State: "STRING_VALUE",
 * //     RdsEventCategories: "STRING_VALUE",
 * //     RdsEventMessage: "STRING_VALUE",
 * //     S3EventName: "STRING_VALUE",
 * //     StatesExecutionArn: "STRING_VALUE",
 * //     StatesArn: "STRING_VALUE",
 * //     StatesStatus: "STRING_VALUE",
 * //     StatesInput: "STRING_VALUE",
 * //     EbsEvent: "STRING_VALUE",
 * //     EbsResult: "STRING_VALUE",
 * //     EbsCause: "STRING_VALUE",
 * //     EbsRequestId: "STRING_VALUE",
 * //     XRayFaultPercent: Number("int"),
 * //     XRayThrottlePercent: Number("int"),
 * //     XRayErrorPercent: Number("int"),
 * //     XRayRequestCount: Number("int"),
 * //     XRayRequestAverageLatency: Number("long"),
 * //     XRayNodeName: "STRING_VALUE",
 * //     XRayNodeType: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeObservationCommandInput - {@link DescribeObservationCommandInput}
 * @returns {@link DescribeObservationCommandOutput}
 * @see {@link DescribeObservationCommandInput} for command's `input` shape.
 * @see {@link DescribeObservationCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for ApplicationInsightsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource does not exist in the customer account.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The parameter is not valid.</p>
 *
 * @throws {@link ApplicationInsightsServiceException}
 * <p>Base exception class for all service exceptions from ApplicationInsights service.</p>
 *
 *
 * @public
 */
export class DescribeObservationCommand extends $Command
  .classBuilder<
    DescribeObservationCommandInput,
    DescribeObservationCommandOutput,
    ApplicationInsightsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationInsightsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EC2WindowsBarleyService", "DescribeObservation", {})
  .n("ApplicationInsightsClient", "DescribeObservationCommand")
  .sc(DescribeObservation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeObservationRequest;
      output: DescribeObservationResponse;
    };
    sdk: {
      input: DescribeObservationCommandInput;
      output: DescribeObservationCommandOutput;
    };
  };
}
