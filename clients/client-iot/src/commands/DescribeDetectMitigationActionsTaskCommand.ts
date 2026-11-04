// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeDetectMitigationActionsTaskRequest,
  DescribeDetectMitigationActionsTaskResponse,
} from "../models/models_1";
import { DescribeDetectMitigationActionsTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DescribeDetectMitigationActionsTaskCommandOutput extends DescribeDetectMitigationActionsTaskResponse, __MetadataBearer {}

/**
 * > **Note:** The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * Gets information about a Device Defender ML Detect mitigation action.
 *
 * Requires permission to access the [DescribeDetectMitigationActionsTask](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
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
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class DescribeDetectMitigationActionsTaskCommand extends command<DescribeDetectMitigationActionsTaskCommandInput, DescribeDetectMitigationActionsTaskCommandOutput>(
  _ep0,
  _mw0,
  "DescribeDetectMitigationActionsTask",
  DescribeDetectMitigationActionsTask$
) {
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
