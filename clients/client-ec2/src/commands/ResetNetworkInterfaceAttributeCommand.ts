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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  ResetNetworkInterfaceAttributeRequest,
  ResetNetworkInterfaceAttributeRequestFilterSensitiveLog,
} from "../models/models_6";
import {
  deserializeAws_ec2ResetNetworkInterfaceAttributeCommand,
  serializeAws_ec2ResetNetworkInterfaceAttributeCommand,
} from "../protocols/Aws_ec2";

export interface ResetNetworkInterfaceAttributeCommandInput extends ResetNetworkInterfaceAttributeRequest {}
export interface ResetNetworkInterfaceAttributeCommandOutput extends __MetadataBearer {}

/**
 * <p>Resets a network interface attribute. You can specify only one attribute at a time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ResetNetworkInterfaceAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ResetNetworkInterfaceAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ResetNetworkInterfaceAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetNetworkInterfaceAttributeCommandInput} for command's `input` shape.
 * @see {@link ResetNetworkInterfaceAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class ResetNetworkInterfaceAttributeCommand extends $Command<
  ResetNetworkInterfaceAttributeCommandInput,
  ResetNetworkInterfaceAttributeCommandOutput,
  EC2ClientResolvedConfig
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

  constructor(readonly input: ResetNetworkInterfaceAttributeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResetNetworkInterfaceAttributeCommandInput, ResetNetworkInterfaceAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ResetNetworkInterfaceAttributeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ResetNetworkInterfaceAttributeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResetNetworkInterfaceAttributeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ResetNetworkInterfaceAttributeCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2ResetNetworkInterfaceAttributeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ResetNetworkInterfaceAttributeCommandOutput> {
    return deserializeAws_ec2ResetNetworkInterfaceAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
