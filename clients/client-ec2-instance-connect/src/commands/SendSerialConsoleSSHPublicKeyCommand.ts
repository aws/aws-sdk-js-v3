// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  EC2InstanceConnectClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2InstanceConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { SendSerialConsoleSSHPublicKeyRequest, SendSerialConsoleSSHPublicKeyResponse } from "../models/models_0";
import { SendSerialConsoleSSHPublicKey } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendSerialConsoleSSHPublicKeyCommand}.
 */
export interface SendSerialConsoleSSHPublicKeyCommandInput extends SendSerialConsoleSSHPublicKeyRequest {}
/**
 * @public
 *
 * The output of {@link SendSerialConsoleSSHPublicKeyCommand}.
 */
export interface SendSerialConsoleSSHPublicKeyCommandOutput
  extends SendSerialConsoleSSHPublicKeyResponse,
    __MetadataBearer {}

/**
 * <p>Pushes an SSH public key to the specified EC2 instance. The key remains for 60
 *             seconds, which gives you 60 seconds to establish a serial console connection to the
 *             instance using SSH. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-serial-console.html">EC2 Serial Console</a> in
 *             the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2InstanceConnectClient, SendSerialConsoleSSHPublicKeyCommand } from "@aws-sdk/client-ec2-instance-connect"; // ES Modules import
 * // const { EC2InstanceConnectClient, SendSerialConsoleSSHPublicKeyCommand } = require("@aws-sdk/client-ec2-instance-connect"); // CommonJS import
 * // import type { EC2InstanceConnectClientConfig } from "@aws-sdk/client-ec2-instance-connect";
 * const config = {}; // type is EC2InstanceConnectClientConfig
 * const client = new EC2InstanceConnectClient(config);
 * const input = { // SendSerialConsoleSSHPublicKeyRequest
 *   InstanceId: "STRING_VALUE", // required
 *   SerialPort: Number("int"),
 *   SSHPublicKey: "STRING_VALUE", // required
 * };
 * const command = new SendSerialConsoleSSHPublicKeyCommand(input);
 * const response = await client.send(command);
 * // { // SendSerialConsoleSSHPublicKeyResponse
 * //   RequestId: "STRING_VALUE",
 * //   Success: true || false,
 * // };
 *
 * ```
 *
 * @param SendSerialConsoleSSHPublicKeyCommandInput - {@link SendSerialConsoleSSHPublicKeyCommandInput}
 * @returns {@link SendSerialConsoleSSHPublicKeyCommandOutput}
 * @see {@link SendSerialConsoleSSHPublicKeyCommandInput} for command's `input` shape.
 * @see {@link SendSerialConsoleSSHPublicKeyCommandOutput} for command's `response` shape.
 * @see {@link EC2InstanceConnectClientResolvedConfig | config} for EC2InstanceConnectClient's `config` shape.
 *
 * @throws {@link AuthException} (client fault)
 *  <p>Either your AWS credentials are not valid or you do not have access to the EC2 instance.</p>
 *
 * @throws {@link EC2InstanceNotFoundException} (client fault)
 *  <p>The specified instance was not found.</p>
 *
 * @throws {@link EC2InstanceStateInvalidException} (client fault)
 *  <p>Unable to connect because the instance is not in a valid state.
 *             Connecting to a stopped or terminated instance is not supported. If the instance is stopped,
 *             start your instance, and try to connect again.</p>
 *
 * @throws {@link EC2InstanceTypeInvalidException} (client fault)
 *  <p>The instance type is not supported for connecting via the serial console. Only Nitro
 *             instance types are currently supported.</p>
 *
 * @throws {@link EC2InstanceUnavailableException} (server fault)
 *  <p>The instance is currently unavailable. Wait a few minutes and try again.</p>
 *
 * @throws {@link InvalidArgsException} (client fault)
 *  <p>One of the parameters is not valid.</p>
 *
 * @throws {@link SerialConsoleAccessDisabledException} (client fault)
 *  <p>Your account is not authorized to use the EC2 Serial Console. To authorize your
 *             account, run the EnableSerialConsoleAccess API. For more information, see
 *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableSerialConsoleAccess.html">EnableSerialConsoleAccess</a> in the <i>Amazon EC2 API Reference</i>.</p>
 *
 * @throws {@link SerialConsoleSessionLimitExceededException} (client fault)
 *  <p>The instance currently has 1 active serial console session. Only 1 session is supported at a time.</p>
 *
 * @throws {@link SerialConsoleSessionUnavailableException} (server fault)
 *  <p>Unable to start a serial console session. Please try again.</p>
 *
 * @throws {@link SerialConsoleSessionUnsupportedException} (client fault)
 *  <p>Your instance's BIOS version is unsupported for serial console connection. Reboot your instance to update its BIOS, and then try again to connect.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>The service encountered an error. Follow the instructions in the error message and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The requests were made too frequently and have been throttled. Wait a while and try again.
 *             To increase the limit on your request frequency, contact AWS Support.</p>
 *
 * @throws {@link EC2InstanceConnectServiceException}
 * <p>Base exception class for all service exceptions from EC2InstanceConnect service.</p>
 *
 *
 * @public
 */
export class SendSerialConsoleSSHPublicKeyCommand extends $Command
  .classBuilder<
    SendSerialConsoleSSHPublicKeyCommandInput,
    SendSerialConsoleSSHPublicKeyCommandOutput,
    EC2InstanceConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2InstanceConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSEC2InstanceConnectService", "SendSerialConsoleSSHPublicKey", {})
  .n("EC2InstanceConnectClient", "SendSerialConsoleSSHPublicKeyCommand")
  .sc(SendSerialConsoleSSHPublicKey)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendSerialConsoleSSHPublicKeyRequest;
      output: SendSerialConsoleSSHPublicKeyResponse;
    };
    sdk: {
      input: SendSerialConsoleSSHPublicKeyCommandInput;
      output: SendSerialConsoleSSHPublicKeyCommandOutput;
    };
  };
}
