// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  EC2InstanceConnectClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2InstanceConnectClient";
import {
  SendSSHPublicKeyRequest,
  SendSSHPublicKeyRequestFilterSensitiveLog,
  SendSSHPublicKeyResponse,
  SendSSHPublicKeyResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1SendSSHPublicKeyCommand,
  serializeAws_json1_1SendSSHPublicKeyCommand,
} from "../protocols/Aws_json1_1";

export interface SendSSHPublicKeyCommandInput extends SendSSHPublicKeyRequest {}
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
 * const command = new SendSSHPublicKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendSSHPublicKeyCommandInput} for command's `input` shape.
 * @see {@link SendSSHPublicKeyCommandOutput} for command's `response` shape.
 * @see {@link EC2InstanceConnectClientResolvedConfig | config} for EC2InstanceConnectClient's `config` shape.
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
      inputFilterSensitiveLog: SendSSHPublicKeyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SendSSHPublicKeyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendSSHPublicKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SendSSHPublicKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendSSHPublicKeyCommandOutput> {
    return deserializeAws_json1_1SendSSHPublicKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
