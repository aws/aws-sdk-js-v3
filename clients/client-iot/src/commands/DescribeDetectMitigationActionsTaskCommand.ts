// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  DescribeDetectMitigationActionsTaskRequest,
  DescribeDetectMitigationActionsTaskResponse,
} from "../models/models_1";
import {
  de_DescribeDetectMitigationActionsTaskCommand,
  se_DescribeDetectMitigationActionsTaskCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDetectMitigationActionsTaskCommand}.
 */
export interface DescribeDetectMitigationActionsTaskCommandInput extends DescribeDetectMitigationActionsTaskRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDetectMitigationActionsTaskCommand}.
 */
export interface DescribeDetectMitigationActionsTaskCommandOutput
  extends DescribeDetectMitigationActionsTaskResponse,
    __MetadataBearer {}

/**
 * <p>
 *       Gets information about a Device Defender ML Detect mitigation action.
 *     </p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeDetectMitigationActionsTask</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeDetectMitigationActionsTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeDetectMitigationActionsTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DescribeDetectMitigationActionsTaskRequest
 *   taskId: "STRING_VALUE", // required
 * };
 * const command = new DescribeDetectMitigationActionsTaskCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDetectMitigationActionsTaskResponse
 * //   taskSummary: { // DetectMitigationActionsTaskSummary
 * //     taskId: "STRING_VALUE",
 * //     taskStatus: "IN_PROGRESS" || "SUCCESSFUL" || "FAILED" || "CANCELED",
 * //     taskStartTime: new Date("TIMESTAMP"),
 * //     taskEndTime: new Date("TIMESTAMP"),
 * //     target: { // DetectMitigationActionsTaskTarget
 * //       violationIds: [ // TargetViolationIdsForDetectMitigationActions
 * //         "STRING_VALUE",
 * //       ],
 * //       securityProfileName: "STRING_VALUE",
 * //       behaviorName: "STRING_VALUE",
 * //     },
 * //     violationEventOccurrenceRange: { // ViolationEventOccurrenceRange
 * //       startTime: new Date("TIMESTAMP"), // required
 * //       endTime: new Date("TIMESTAMP"), // required
 * //     },
 * //     onlyActiveViolationsIncluded: true || false,
 * //     suppressedAlertsIncluded: true || false,
 * //     actionsDefinition: [ // MitigationActionList
 * //       { // MitigationAction
 * //         name: "STRING_VALUE",
 * //         id: "STRING_VALUE",
 * //         roleArn: "STRING_VALUE",
 * //         actionParams: { // MitigationActionParams
 * //           updateDeviceCertificateParams: { // UpdateDeviceCertificateParams
 * //             action: "DEACTIVATE", // required
 * //           },
 * //           updateCACertificateParams: { // UpdateCACertificateParams
 * //             action: "DEACTIVATE", // required
 * //           },
 * //           addThingsToThingGroupParams: { // AddThingsToThingGroupParams
 * //             thingGroupNames: [ // ThingGroupNames // required
 * //               "STRING_VALUE",
 * //             ],
 * //             overrideDynamicGroups: true || false,
 * //           },
 * //           replaceDefaultPolicyVersionParams: { // ReplaceDefaultPolicyVersionParams
 * //             templateName: "BLANK_POLICY", // required
 * //           },
 * //           enableIoTLoggingParams: { // EnableIoTLoggingParams
 * //             roleArnForLogging: "STRING_VALUE", // required
 * //             logLevel: "DEBUG" || "INFO" || "ERROR" || "WARN" || "DISABLED", // required
 * //           },
 * //           publishFindingToSnsParams: { // PublishFindingToSnsParams
 * //             topicArn: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       },
 * //     ],
 * //     taskStatistics: { // DetectMitigationActionsTaskStatistics
 * //       actionsExecuted: Number("long"),
 * //       actionsSkipped: Number("long"),
 * //       actionsFailed: Number("long"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDetectMitigationActionsTaskCommandInput - {@link DescribeDetectMitigationActionsTaskCommandInput}
 * @returns {@link DescribeDetectMitigationActionsTaskCommandOutput}
 * @see {@link DescribeDetectMitigationActionsTaskCommandInput} for command's `input` shape.
 * @see {@link DescribeDetectMitigationActionsTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class DescribeDetectMitigationActionsTaskCommand extends $Command
  .classBuilder<
    DescribeDetectMitigationActionsTaskCommandInput,
    DescribeDetectMitigationActionsTaskCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "DescribeDetectMitigationActionsTask", {})
  .n("IoTClient", "DescribeDetectMitigationActionsTaskCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDetectMitigationActionsTaskCommand)
  .de(de_DescribeDetectMitigationActionsTaskCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDetectMitigationActionsTaskRequest;
      output: DescribeDetectMitigationActionsTaskResponse;
    };
    sdk: {
      input: DescribeDetectMitigationActionsTaskCommandInput;
      output: DescribeDetectMitigationActionsTaskCommandOutput;
    };
  };
}
