// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  DescribeAuditMitigationActionsTaskRequest,
  DescribeAuditMitigationActionsTaskResponse,
} from "../models/models_1";
import { DescribeAuditMitigationActionsTask } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAuditMitigationActionsTaskCommand}.
 */
export interface DescribeAuditMitigationActionsTaskCommandInput extends DescribeAuditMitigationActionsTaskRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAuditMitigationActionsTaskCommand}.
 */
export interface DescribeAuditMitigationActionsTaskCommandOutput
  extends DescribeAuditMitigationActionsTaskResponse,
    __MetadataBearer {}

/**
 * <p>Gets information about an audit mitigation task that is used to apply mitigation actions to a set of audit findings. Properties include the actions being applied, the audit checks to which they're being applied, the task status, and aggregated task statistics.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeAuditMitigationActionsTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeAuditMitigationActionsTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DescribeAuditMitigationActionsTaskRequest
 *   taskId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAuditMitigationActionsTaskCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAuditMitigationActionsTaskResponse
 * //   taskStatus: "IN_PROGRESS" || "COMPLETED" || "FAILED" || "CANCELED",
 * //   startTime: new Date("TIMESTAMP"),
 * //   endTime: new Date("TIMESTAMP"),
 * //   taskStatistics: { // AuditMitigationActionsTaskStatistics
 * //     "<keys>": { // TaskStatisticsForAuditCheck
 * //       totalFindingsCount: Number("long"),
 * //       failedFindingsCount: Number("long"),
 * //       succeededFindingsCount: Number("long"),
 * //       skippedFindingsCount: Number("long"),
 * //       canceledFindingsCount: Number("long"),
 * //     },
 * //   },
 * //   target: { // AuditMitigationActionsTaskTarget
 * //     auditTaskId: "STRING_VALUE",
 * //     findingIds: [ // FindingIds
 * //       "STRING_VALUE",
 * //     ],
 * //     auditCheckToReasonCodeFilter: { // AuditCheckToReasonCodeFilter
 * //       "<keys>": [ // ReasonForNonComplianceCodes
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * //   auditCheckToActionsMapping: { // AuditCheckToActionsMapping
 * //     "<keys>": [ // MitigationActionNameList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   actionsDefinition: [ // MitigationActionList
 * //     { // MitigationAction
 * //       name: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       roleArn: "STRING_VALUE",
 * //       actionParams: { // MitigationActionParams
 * //         updateDeviceCertificateParams: { // UpdateDeviceCertificateParams
 * //           action: "DEACTIVATE", // required
 * //         },
 * //         updateCACertificateParams: { // UpdateCACertificateParams
 * //           action: "DEACTIVATE", // required
 * //         },
 * //         addThingsToThingGroupParams: { // AddThingsToThingGroupParams
 * //           thingGroupNames: [ // ThingGroupNames // required
 * //             "STRING_VALUE",
 * //           ],
 * //           overrideDynamicGroups: true || false,
 * //         },
 * //         replaceDefaultPolicyVersionParams: { // ReplaceDefaultPolicyVersionParams
 * //           templateName: "BLANK_POLICY", // required
 * //         },
 * //         enableIoTLoggingParams: { // EnableIoTLoggingParams
 * //           roleArnForLogging: "STRING_VALUE", // required
 * //           logLevel: "DEBUG" || "INFO" || "ERROR" || "WARN" || "DISABLED", // required
 * //         },
 * //         publishFindingToSnsParams: { // PublishFindingToSnsParams
 * //           topicArn: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeAuditMitigationActionsTaskCommandInput - {@link DescribeAuditMitigationActionsTaskCommandInput}
 * @returns {@link DescribeAuditMitigationActionsTaskCommandOutput}
 * @see {@link DescribeAuditMitigationActionsTaskCommandInput} for command's `input` shape.
 * @see {@link DescribeAuditMitigationActionsTaskCommandOutput} for command's `response` shape.
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
export class DescribeAuditMitigationActionsTaskCommand extends $Command
  .classBuilder<
    DescribeAuditMitigationActionsTaskCommandInput,
    DescribeAuditMitigationActionsTaskCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "DescribeAuditMitigationActionsTask", {})
  .n("IoTClient", "DescribeAuditMitigationActionsTaskCommand")
  .sc(DescribeAuditMitigationActionsTask)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAuditMitigationActionsTaskRequest;
      output: DescribeAuditMitigationActionsTaskResponse;
    };
    sdk: {
      input: DescribeAuditMitigationActionsTaskCommandInput;
      output: DescribeAuditMitigationActionsTaskCommandOutput;
    };
  };
}
