// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type {
  CancelAuditMitigationActionsTaskRequest,
  CancelAuditMitigationActionsTaskResponse,
} from "../models/models_0";
import { CancelAuditMitigationActionsTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelAuditMitigationActionsTaskCommand}.
 */
export interface CancelAuditMitigationActionsTaskCommandInput extends CancelAuditMitigationActionsTaskRequest {}
/**
 * @public
 *
 * The output of {@link CancelAuditMitigationActionsTaskCommand}.
 */
export interface CancelAuditMitigationActionsTaskCommandOutput
  extends CancelAuditMitigationActionsTaskResponse,
    __MetadataBearer {}

/**
 * <p>Cancels a mitigation action task that is in progress. If the task
 *       is not
 *       in progress, an InvalidRequestException occurs.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelAuditMitigationActionsTask</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CancelAuditMitigationActionsTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CancelAuditMitigationActionsTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // CancelAuditMitigationActionsTaskRequest
 *   taskId: "STRING_VALUE", // required
 * };
 * const command = new CancelAuditMitigationActionsTaskCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelAuditMitigationActionsTaskCommandInput - {@link CancelAuditMitigationActionsTaskCommandInput}
 * @returns {@link CancelAuditMitigationActionsTaskCommandOutput}
 * @see {@link CancelAuditMitigationActionsTaskCommandInput} for command's `input` shape.
 * @see {@link CancelAuditMitigationActionsTaskCommandOutput} for command's `response` shape.
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
export class CancelAuditMitigationActionsTaskCommand extends $Command
  .classBuilder<
    CancelAuditMitigationActionsTaskCommandInput,
    CancelAuditMitigationActionsTaskCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "CancelAuditMitigationActionsTask", {})
  .n("IoTClient", "CancelAuditMitigationActionsTaskCommand")
  .sc(CancelAuditMitigationActionsTask$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelAuditMitigationActionsTaskRequest;
      output: {};
    };
    sdk: {
      input: CancelAuditMitigationActionsTaskCommandInput;
      output: CancelAuditMitigationActionsTaskCommandOutput;
    };
  };
}
