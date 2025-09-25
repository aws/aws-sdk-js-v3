// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { StartAuditMitigationActionsTaskRequest, StartAuditMitigationActionsTaskResponse } from "../models/models_2";
import { StartAuditMitigationActionsTask } from "../schemas/schemas_19_MitigationActions";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartAuditMitigationActionsTaskCommand}.
 */
export interface StartAuditMitigationActionsTaskCommandInput extends StartAuditMitigationActionsTaskRequest {}
/**
 * @public
 *
 * The output of {@link StartAuditMitigationActionsTaskCommand}.
 */
export interface StartAuditMitigationActionsTaskCommandOutput
  extends StartAuditMitigationActionsTaskResponse,
    __MetadataBearer {}

/**
 * <p>Starts a task that applies a set of mitigation actions to the specified target.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartAuditMitigationActionsTask</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, StartAuditMitigationActionsTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, StartAuditMitigationActionsTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // StartAuditMitigationActionsTaskRequest
 *   taskId: "STRING_VALUE", // required
 *   target: { // AuditMitigationActionsTaskTarget
 *     auditTaskId: "STRING_VALUE",
 *     findingIds: [ // FindingIds
 *       "STRING_VALUE",
 *     ],
 *     auditCheckToReasonCodeFilter: { // AuditCheckToReasonCodeFilter
 *       "<keys>": [ // ReasonForNonComplianceCodes
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   auditCheckToActionsMapping: { // AuditCheckToActionsMapping // required
 *     "<keys>": [ // MitigationActionNameList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   clientRequestToken: "STRING_VALUE", // required
 * };
 * const command = new StartAuditMitigationActionsTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartAuditMitigationActionsTaskResponse
 * //   taskId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartAuditMitigationActionsTaskCommandInput - {@link StartAuditMitigationActionsTaskCommandInput}
 * @returns {@link StartAuditMitigationActionsTaskCommandOutput}
 * @see {@link StartAuditMitigationActionsTaskCommandInput} for command's `input` shape.
 * @see {@link StartAuditMitigationActionsTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit has been exceeded.</p>
 *
 * @throws {@link TaskAlreadyExistsException} (client fault)
 *  <p>
 *             This exception occurs if you attempt to start a task with the same task-id as an existing task but with a different clientRequestToken.
 *         </p>
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
export class StartAuditMitigationActionsTaskCommand extends $Command
  .classBuilder<
    StartAuditMitigationActionsTaskCommandInput,
    StartAuditMitigationActionsTaskCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "StartAuditMitigationActionsTask", {})
  .n("IoTClient", "StartAuditMitigationActionsTaskCommand")
  .sc(StartAuditMitigationActionsTask)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartAuditMitigationActionsTaskRequest;
      output: StartAuditMitigationActionsTaskResponse;
    };
    sdk: {
      input: StartAuditMitigationActionsTaskCommandInput;
      output: StartAuditMitigationActionsTaskCommandOutput;
    };
  };
}
