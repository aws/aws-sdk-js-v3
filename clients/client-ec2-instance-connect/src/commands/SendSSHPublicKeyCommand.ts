// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  EC2InstanceConnectClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2InstanceConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SendSSHPublicKeyRequest, SendSSHPublicKeyResponse } from "../models/models_0";
import { de_SendSSHPublicKeyCommand, se_SendSSHPublicKeyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendSSHPublicKeyCommand}.
 */
export interface SendSSHPublicKeyCommandInput extends SendSSHPublicKeyRequest {}
/**
 * @public
 *
 * The output of {@link SendSSHPublicKeyCommand}.
 */
export interface SendSSHPublicKeyCommandOutput extends SendSSHPublicKeyResponse, __MetadataBearer {}

/**
 * <p>Pushes an SSH public key to the specified EC2 instance for use by the specified user.
 *             The key remains for 60 seconds. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Connect-using-EC2-Instance-Connect.html">Connect to
 *                 your Linux instance using EC2 Instance Connect</a> in the <i>Amazon EC2
 *                 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2InstanceConnectClient, SendSSHPublicKeyCommand } from "@aws-sdk/client-ec2-instance-connect"; // ES Modules import
 * // const { EC2InstanceConnectClient, SendSSHPublicKeyCommand } = require("@aws-sdk/client-ec2-instance-connect"); // CommonJS import
 * const client = new EC2InstanceConnectClient(config);
 * const input = { // SendSSHPublicKeyRequest
 *   InstanceId: "STRING_VALUE", // required
 *   InstanceOSUser: "STRING_VALUE", // required
 *   SSHPublicKey: "STRING_VALUE", // required
 *   AvailabilityZone: "STRING_VALUE",
 * };
 * const command = new SendSSHPublicKeyCommand(input);
 * const response = await client.send(command);
 * // { // SendSSHPublicKeyResponse
 * //   RequestId: "STRING_VALUE",
 * //   Success: true || false,
 * // };
 *
 * ```
 *
 * @param SendSSHPublicKeyCommandInput - {@link SendSSHPublicKeyCommandInput}
 * @returns {@link SendSSHPublicKeyCommandOutput}
 * @see {@link SendSSHPublicKeyCommandInput} for command's `input` shape.
 * @see {@link SendSSHPublicKeyCommandOutput} for command's `response` shape.
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
 * @throws {@link EC2InstanceUnavailableException} (server fault)
 *  <p>The instance is currently unavailable. Wait a few minutes and try again.</p>
 *
 * @throws {@link InvalidArgsException} (client fault)
 *  <p>One of the parameters is not valid.</p>
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
 * @public
 * @example To push an SSH key to an EC2 instance
 * ```javascript
 * // The following example pushes a sample SSH public key to the EC2 instance i-abcd1234 in AZ us-west-2b for use by the instance OS user ec2-user.
 * const input = {
 *   "AvailabilityZone": "us-west-2a",
 *   "InstanceId": "i-abcd1234",
 *   "InstanceOSUser": "ec2-user",
 *   "SSHPublicKey": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC3FlHqj2eqCdrGHuA6dRjfZXQ4HX5lXEIRHaNbxEwE5Te7xNF7StwhrDtiV7IdT5fDqbRyGw/szPj3xGkNTVoElCZ2dDFb2qYZ1WLIpZwj/UhO9l2mgfjR56UojjQut5Jvn2KZ1OcyrNO0J83kCaJCV7JoVbXY79FBMUccYNY45zmv9+1FMCfY6i2jdIhwR6+yLk8oubL8lIPyq7X+6b9S0yKCkB7Peml1DvghlybpAIUrC9vofHt6XP4V1i0bImw1IlljQS+DUmULRFSccATDscCX9ajnj7Crhm0HAZC0tBPXpFdHkPwL3yzYo546SCS9LKEwz62ymxxbL9k7h09t"
 * };
 * const command = new SendSSHPublicKeyCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "RequestId": "abcd1234-abcd-1234-abcd-1234abcd1234",
 *   "Success": true
 * }
 * *\/
 * // example id: send-ssh-key-to-an-ec2-instance-1518124883100
 * ```
 *
 */
export class SendSSHPublicKeyCommand extends $Command
  .classBuilder<
    SendSSHPublicKeyCommandInput,
    SendSSHPublicKeyCommandOutput,
    EC2InstanceConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2InstanceConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSEC2InstanceConnectService", "SendSSHPublicKey", {})
  .n("EC2InstanceConnectClient", "SendSSHPublicKeyCommand")
  .f(void 0, void 0)
  .ser(se_SendSSHPublicKeyCommand)
  .de(de_SendSSHPublicKeyCommand)
  .build() {}
