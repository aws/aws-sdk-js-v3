// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListDetectMitigationActionsTasksRequest,
  ListDetectMitigationActionsTasksResponse,
} from "../models/models_1";
import { ListDetectMitigationActionsTasks$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface ListDetectMitigationActionsTasksCommandOutput extends ListDetectMitigationActionsTasksResponse, __MetadataBearer {}

/**
 * > **Note:** The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * List of Device Defender ML Detect mitigation actions tasks.
 *
 * Requires permission to access the [ListDetectMitigationActionsTasks](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
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
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
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
export class ListDetectMitigationActionsTasksCommand extends command<ListDetectMitigationActionsTasksCommandInput, ListDetectMitigationActionsTasksCommandOutput>(
  _ep0,
  _mw0,
  "ListDetectMitigationActionsTasks",
  ListDetectMitigationActionsTasks$
) {
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
