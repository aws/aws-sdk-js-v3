// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  EC2InstanceConnectClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2InstanceConnectClient";
import { SendSSHPublicKeyRequest, SendSSHPublicKeyResponse } from "../models/models_0";
import { de_SendSSHPublicKeyCommand, se_SendSSHPublicKeyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
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
export class SendSSHPublicKeyCommand extends $Command<
  SendSSHPublicKeyCommandInput,
  SendSSHPublicKeyCommandOutput,
  EC2InstanceConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: SendSSHPublicKeyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2InstanceConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendSSHPublicKeyCommandInput, SendSSHPublicKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SendSSHPublicKeyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2InstanceConnectClient";
    const commandName = "SendSSHPublicKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSEC2InstanceConnectService",
        operation: "SendSSHPublicKey",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: SendSSHPublicKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SendSSHPublicKeyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendSSHPublicKeyCommandOutput> {
    return de_SendSSHPublicKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
