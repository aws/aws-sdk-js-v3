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
  RejectTransitGatewayPeeringAttachmentRequest,
  RejectTransitGatewayPeeringAttachmentRequestFilterSensitiveLog,
  RejectTransitGatewayPeeringAttachmentResult,
  RejectTransitGatewayPeeringAttachmentResultFilterSensitiveLog,
} from "../models/models_6";
import {
  deserializeAws_ec2RejectTransitGatewayPeeringAttachmentCommand,
  serializeAws_ec2RejectTransitGatewayPeeringAttachmentCommand,
} from "../protocols/Aws_ec2";

export interface RejectTransitGatewayPeeringAttachmentCommandInput
  extends RejectTransitGatewayPeeringAttachmentRequest {}
export interface RejectTransitGatewayPeeringAttachmentCommandOutput
  extends RejectTransitGatewayPeeringAttachmentResult,
    __MetadataBearer {}

/**
 * <p>Rejects a transit gateway peering attachment request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RejectTransitGatewayPeeringAttachmentCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RejectTransitGatewayPeeringAttachmentCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RejectTransitGatewayPeeringAttachmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectTransitGatewayPeeringAttachmentCommandInput} for command's `input` shape.
 * @see {@link RejectTransitGatewayPeeringAttachmentCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class RejectTransitGatewayPeeringAttachmentCommand extends $Command<
  RejectTransitGatewayPeeringAttachmentCommandInput,
  RejectTransitGatewayPeeringAttachmentCommandOutput,
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

  constructor(readonly input: RejectTransitGatewayPeeringAttachmentCommandInput) {
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
  ): Handler<RejectTransitGatewayPeeringAttachmentCommandInput, RejectTransitGatewayPeeringAttachmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RejectTransitGatewayPeeringAttachmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RejectTransitGatewayPeeringAttachmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RejectTransitGatewayPeeringAttachmentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RejectTransitGatewayPeeringAttachmentResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RejectTransitGatewayPeeringAttachmentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2RejectTransitGatewayPeeringAttachmentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RejectTransitGatewayPeeringAttachmentCommandOutput> {
    return deserializeAws_ec2RejectTransitGatewayPeeringAttachmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
