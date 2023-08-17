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
} from "@smithy/types";

import {
  EC2InstanceConnectClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2InstanceConnectClient";
import { SendSerialConsoleSSHPublicKeyRequest, SendSerialConsoleSSHPublicKeyResponse } from "../models/models_0";
import {
  de_SendSerialConsoleSSHPublicKeyCommand,
  se_SendSerialConsoleSSHPublicKeyCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Pushes an SSH public key to the specified EC2 instance. The key remains for 60
 *             seconds, which gives you 60 seconds to establish a serial console connection to the
 *             instance using SSH. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-serial-console.html">EC2 Serial Console</a> in
 *             the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2InstanceConnectClient, SendSerialConsoleSSHPublicKeyCommand } from "@aws-sdk/client-ec2-instance-connect"; // ES Modules import
 * // const { EC2InstanceConnectClient, SendSerialConsoleSSHPublicKeyCommand } = require("@aws-sdk/client-ec2-instance-connect"); // CommonJS import
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
 */
export class SendSerialConsoleSSHPublicKeyCommand extends $Command<
  SendSerialConsoleSSHPublicKeyCommandInput,
  SendSerialConsoleSSHPublicKeyCommandOutput,
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
  constructor(readonly input: SendSerialConsoleSSHPublicKeyCommandInput) {
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
  ): Handler<SendSerialConsoleSSHPublicKeyCommandInput, SendSerialConsoleSSHPublicKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SendSerialConsoleSSHPublicKeyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2InstanceConnectClient";
    const commandName = "SendSerialConsoleSSHPublicKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: SendSerialConsoleSSHPublicKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SendSerialConsoleSSHPublicKeyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SendSerialConsoleSSHPublicKeyCommandOutput> {
    return de_SendSerialConsoleSSHPublicKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
