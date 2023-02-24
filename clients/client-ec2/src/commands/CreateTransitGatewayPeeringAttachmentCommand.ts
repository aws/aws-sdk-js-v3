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
  CreateTransitGatewayPeeringAttachmentRequest,
  CreateTransitGatewayPeeringAttachmentRequestFilterSensitiveLog,
  CreateTransitGatewayPeeringAttachmentResult,
  CreateTransitGatewayPeeringAttachmentResultFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_ec2CreateTransitGatewayPeeringAttachmentCommand,
  serializeAws_ec2CreateTransitGatewayPeeringAttachmentCommand,
} from "../protocols/Aws_ec2";

export interface CreateTransitGatewayPeeringAttachmentCommandInput
  extends CreateTransitGatewayPeeringAttachmentRequest {}
export interface CreateTransitGatewayPeeringAttachmentCommandOutput
  extends CreateTransitGatewayPeeringAttachmentResult,
    __MetadataBearer {}

/**
 * <p>Requests a transit gateway peering attachment between the specified transit gateway
 *             (requester) and a peer transit gateway (accepter). The peer transit gateway can be in
 *             your account or a different Amazon Web Services account.</p>
 *          <p>After you create the peering attachment, the owner of the accepter transit gateway
 *             must accept the attachment request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTransitGatewayPeeringAttachmentCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTransitGatewayPeeringAttachmentCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateTransitGatewayPeeringAttachmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTransitGatewayPeeringAttachmentCommandInput} for command's `input` shape.
 * @see {@link CreateTransitGatewayPeeringAttachmentCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class CreateTransitGatewayPeeringAttachmentCommand extends $Command<
  CreateTransitGatewayPeeringAttachmentCommandInput,
  CreateTransitGatewayPeeringAttachmentCommandOutput,
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

  constructor(readonly input: CreateTransitGatewayPeeringAttachmentCommandInput) {
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
  ): Handler<CreateTransitGatewayPeeringAttachmentCommandInput, CreateTransitGatewayPeeringAttachmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateTransitGatewayPeeringAttachmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateTransitGatewayPeeringAttachmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTransitGatewayPeeringAttachmentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateTransitGatewayPeeringAttachmentResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateTransitGatewayPeeringAttachmentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2CreateTransitGatewayPeeringAttachmentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateTransitGatewayPeeringAttachmentCommandOutput> {
    return deserializeAws_ec2CreateTransitGatewayPeeringAttachmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
