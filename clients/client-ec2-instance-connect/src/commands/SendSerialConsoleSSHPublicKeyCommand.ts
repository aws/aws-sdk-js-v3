// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SendSerialConsoleSSHPublicKeyRequest, SendSerialConsoleSSHPublicKeyResponse } from "../models/models_0";
import { SendSerialConsoleSSHPublicKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface SendSerialConsoleSSHPublicKeyCommandOutput extends SendSerialConsoleSSHPublicKeyResponse, __MetadataBearer {}

/**
 * Pushes an SSH public key to the specified EC2 instance. The key remains for 60 seconds, which gives you 60 seconds to establish a serial console connection to the instance using SSH. For more information, see [EC2 Serial Console](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-serial-console.html) in the *Amazon EC2 User Guide*.
 *
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
 *
 * Either your AWS credentials are not valid or you do not have access to the EC2 instance.
 *
 * @throws {@link EC2InstanceNotFoundException} (client fault)
 *
 * The specified instance was not found.
 *
 * @throws {@link EC2InstanceStateInvalidException} (client fault)
 *
 * Unable to connect because the instance is not in a valid state. Connecting to a stopped or terminated instance is not supported. If the instance is stopped, start your instance, and try to connect again.
 *
 * @throws {@link EC2InstanceTypeInvalidException} (client fault)
 *
 * The instance type is not supported for connecting via the serial console. Only Nitro instance types are currently supported.
 *
 * @throws {@link EC2InstanceUnavailableException} (server fault)
 *
 * The instance is currently unavailable. Wait a few minutes and try again.
 *
 * @throws {@link InvalidArgsException} (client fault)
 *
 * One of the parameters is not valid.
 *
 * @throws {@link SerialConsoleAccessDisabledException} (client fault)
 *
 * Your account is not authorized to use the EC2 Serial Console. To authorize your account, run the EnableSerialConsoleAccess API. For more information, see [EnableSerialConsoleAccess](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableSerialConsoleAccess.html) in the *Amazon EC2 API Reference*.
 *
 * @throws {@link SerialConsoleSessionLimitExceededException} (client fault)
 *
 * The instance currently has 1 active serial console session. Only 1 session is supported at a time.
 *
 * @throws {@link SerialConsoleSessionUnavailableException} (server fault)
 *
 * Unable to start a serial console session. Please try again.
 *
 * @throws {@link SerialConsoleSessionUnsupportedException} (client fault)
 *
 * Your instance's BIOS version is unsupported for serial console connection. Reboot your instance to update its BIOS, and then try again to connect.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * The service encountered an error. Follow the instructions in the error message and try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The requests were made too frequently and have been throttled. Wait a while and try again. To increase the limit on your request frequency, contact AWS Support.
 *
 * @throws {@link EC2InstanceConnectServiceException}
 *
 * Base exception class for all service exceptions from EC2InstanceConnect service.
 *
 * @public
 */
export class SendSerialConsoleSSHPublicKeyCommand extends command<SendSerialConsoleSSHPublicKeyCommandInput, SendSerialConsoleSSHPublicKeyCommandOutput>(
  _ep0,
  _mw0,
  "SendSerialConsoleSSHPublicKey",
  SendSerialConsoleSSHPublicKey$
) {
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
