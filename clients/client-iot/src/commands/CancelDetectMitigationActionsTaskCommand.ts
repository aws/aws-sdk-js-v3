// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  CancelDetectMitigationActionsTaskRequest,
  CancelDetectMitigationActionsTaskResponse,
} from "../models/models_0";
import {
  de_CancelDetectMitigationActionsTaskCommand,
  se_CancelDetectMitigationActionsTaskCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelDetectMitigationActionsTaskCommand}.
 */
export interface CancelDetectMitigationActionsTaskCommandInput extends CancelDetectMitigationActionsTaskRequest {}
/**
 * @public
 *
 * The output of {@link CancelDetectMitigationActionsTaskCommand}.
 */
export interface CancelDetectMitigationActionsTaskCommandOutput
  extends CancelDetectMitigationActionsTaskResponse,
    __MetadataBearer {}

/**
 * <p>
 *         Cancels a Device Defender ML Detect mitigation action.
 *       </p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelDetectMitigationActionsTask</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CancelDetectMitigationActionsTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CancelDetectMitigationActionsTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTClient(config);
 * const input = { // CancelDetectMitigationActionsTaskRequest
 *   taskId: "STRING_VALUE", // required
 * };
 * const command = new CancelDetectMitigationActionsTaskCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelDetectMitigationActionsTaskCommandInput - {@link CancelDetectMitigationActionsTaskCommandInput}
 * @returns {@link CancelDetectMitigationActionsTaskCommandOutput}
 * @see {@link CancelDetectMitigationActionsTaskCommandInput} for command's `input` shape.
 * @see {@link CancelDetectMitigationActionsTaskCommandOutput} for command's `response` shape.
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
 * @public
 */
export class CancelDetectMitigationActionsTaskCommand extends $Command
  .classBuilder<
    CancelDetectMitigationActionsTaskCommandInput,
    CancelDetectMitigationActionsTaskCommandOutput,
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
  .s("AWSIotService", "CancelDetectMitigationActionsTask", {})
  .n("IoTClient", "CancelDetectMitigationActionsTaskCommand")
  .f(void 0, void 0)
  .ser(se_CancelDetectMitigationActionsTaskCommand)
  .de(de_CancelDetectMitigationActionsTaskCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelDetectMitigationActionsTaskRequest;
      output: {};
    };
    sdk: {
      input: CancelDetectMitigationActionsTaskCommandInput;
      output: CancelDetectMitigationActionsTaskCommandOutput;
    };
  };
}
