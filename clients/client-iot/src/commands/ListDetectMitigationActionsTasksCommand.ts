// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type {
  ListDetectMitigationActionsTasksRequest,
  ListDetectMitigationActionsTasksResponse,
} from "../models/models_1";
import { ListDetectMitigationActionsTasks$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDetectMitigationActionsTasksCommand}.
 */
export interface ListDetectMitigationActionsTasksCommandInput extends ListDetectMitigationActionsTasksRequest {}
/**
 * @public
 *
 * The output of {@link ListDetectMitigationActionsTasksCommand}.
 */
export interface ListDetectMitigationActionsTasksCommandOutput
  extends ListDetectMitigationActionsTasksResponse,
    __MetadataBearer {}

/**
 * <p>
 *       List of Device Defender ML Detect mitigation actions tasks.
 *     </p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListDetectMitigationActionsTasks</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListDetectMitigationActionsTasksCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListDetectMitigationActionsTasksCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListDetectMitigationActionsTasksRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   startTime: new Date("TIMESTAMP"), // required
 *   endTime: new Date("TIMESTAMP"), // required
 * };
 * const command = new ListDetectMitigationActionsTasksCommand(input);
 * const response = await client.send(command);
 * // { // ListDetectMitigationActionsTasksResponse
 * //   tasks: [ // DetectMitigationActionsTaskSummaryList
 * //     { // DetectMitigationActionsTaskSummary
 * //       taskId: "STRING_VALUE",
 * //       taskStatus: "IN_PROGRESS" || "SUCCESSFUL" || "FAILED" || "CANCELED",
 * //       taskStartTime: new Date("TIMESTAMP"),
 * //       taskEndTime: new Date("TIMESTAMP"),
 * //       target: { // DetectMitigationActionsTaskTarget
 * //         violationIds: [ // TargetViolationIdsForDetectMitigationActions
 * //           "STRING_VALUE",
 * //         ],
 * //         securityProfileName: "STRING_VALUE",
 * //         behaviorName: "STRING_VALUE",
 * //       },
 * //       violationEventOccurrenceRange: { // ViolationEventOccurrenceRange
 * //         startTime: new Date("TIMESTAMP"), // required
 * //         endTime: new Date("TIMESTAMP"), // required
 * //       },
 * //       onlyActiveViolationsIncluded: true || false,
 * //       suppressedAlertsIncluded: true || false,
 * //       actionsDefinition: [ // MitigationActionList
 * //         { // MitigationAction
 * //           name: "STRING_VALUE",
 * //           id: "STRING_VALUE",
 * //           roleArn: "STRING_VALUE",
 * //           actionParams: { // MitigationActionParams
 * //             updateDeviceCertificateParams: { // UpdateDeviceCertificateParams
 * //               action: "DEACTIVATE", // required
 * //             },
 * //             updateCACertificateParams: { // UpdateCACertificateParams
 * //               action: "DEACTIVATE", // required
 * //             },
 * //             addThingsToThingGroupParams: { // AddThingsToThingGroupParams
 * //               thingGroupNames: [ // ThingGroupNames // required
 * //                 "STRING_VALUE",
 * //               ],
 * //               overrideDynamicGroups: true || false,
 * //             },
 * //             replaceDefaultPolicyVersionParams: { // ReplaceDefaultPolicyVersionParams
 * //               templateName: "BLANK_POLICY", // required
 * //             },
 * //             enableIoTLoggingParams: { // EnableIoTLoggingParams
 * //               roleArnForLogging: "STRING_VALUE", // required
 * //               logLevel: "DEBUG" || "INFO" || "ERROR" || "WARN" || "DISABLED", // required
 * //             },
 * //             publishFindingToSnsParams: { // PublishFindingToSnsParams
 * //               topicArn: "STRING_VALUE", // required
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       taskStatistics: { // DetectMitigationActionsTaskStatistics
 * //         actionsExecuted: Number("long"),
 * //         actionsSkipped: Number("long"),
 * //         actionsFailed: Number("long"),
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDetectMitigationActionsTasksCommandInput - {@link ListDetectMitigationActionsTasksCommandInput}
 * @returns {@link ListDetectMitigationActionsTasksCommandOutput}
 * @see {@link ListDetectMitigationActionsTasksCommandInput} for command's `input` shape.
 * @see {@link ListDetectMitigationActionsTasksCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
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
export class ListDetectMitigationActionsTasksCommand extends $Command
  .classBuilder<
    ListDetectMitigationActionsTasksCommandInput,
    ListDetectMitigationActionsTasksCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "ListDetectMitigationActionsTasks", {})
  .n("IoTClient", "ListDetectMitigationActionsTasksCommand")
  .sc(ListDetectMitigationActionsTasks$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDetectMitigationActionsTasksRequest;
      output: ListDetectMitigationActionsTasksResponse;
    };
    sdk: {
      input: ListDetectMitigationActionsTasksCommandInput;
      output: ListDetectMitigationActionsTasksCommandOutput;
    };
  };
}
