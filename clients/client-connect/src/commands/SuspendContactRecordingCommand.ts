// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SuspendContactRecordingRequest, SuspendContactRecordingResponse } from "../models/models_2";
import { de_SuspendContactRecordingCommand, se_SuspendContactRecordingCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SuspendContactRecordingCommand}.
 */
export interface SuspendContactRecordingCommandInput extends SuspendContactRecordingRequest {}
/**
 * @public
 *
 * The output of {@link SuspendContactRecordingCommand}.
 */
export interface SuspendContactRecordingCommandOutput extends SuspendContactRecordingResponse, __MetadataBearer {}

/**
 * <p>When a contact is being recorded, this API suspends recording whatever is selected in the
 *    flow configuration: call, screen, or both. If only call recording or only screen recording is
 *    enabled, then it would be suspended. For example, you might suspend the screen recording while
 *    collecting sensitive information, such as a credit card number. Then use ResumeContactRecording
 *    to restart recording the screen.</p>
 *          <p>The period of time that the recording is suspended is filled with silence in the final
 *    recording.</p>
 *          <p>Voice and screen recordings are supported.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SuspendContactRecordingCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SuspendContactRecordingCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ConnectClient(config);
 * const input = { // SuspendContactRecordingRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 *   InitialContactId: "STRING_VALUE", // required
 *   ContactRecordingType: "AGENT" || "IVR" || "SCREEN",
 * };
 * const command = new SuspendContactRecordingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SuspendContactRecordingCommandInput - {@link SuspendContactRecordingCommandInput}
 * @returns {@link SuspendContactRecordingCommandOutput}
 * @see {@link SuspendContactRecordingCommandInput} for command's `input` shape.
 * @see {@link SuspendContactRecordingCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 * @public
 */
export class SuspendContactRecordingCommand extends $Command
  .classBuilder<
    SuspendContactRecordingCommandInput,
    SuspendContactRecordingCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "SuspendContactRecording", {})
  .n("ConnectClient", "SuspendContactRecordingCommand")
  .f(void 0, void 0)
  .ser(se_SuspendContactRecordingCommand)
  .de(de_SuspendContactRecordingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SuspendContactRecordingRequest;
      output: {};
    };
    sdk: {
      input: SuspendContactRecordingCommandInput;
      output: SuspendContactRecordingCommandOutput;
    };
  };
}
