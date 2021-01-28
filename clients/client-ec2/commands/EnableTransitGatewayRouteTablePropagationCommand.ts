import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  EnableTransitGatewayRouteTablePropagationRequest,
  EnableTransitGatewayRouteTablePropagationResult,
} from "../models/models_4";
import {
  deserializeAws_ec2EnableTransitGatewayRouteTablePropagationCommand,
  serializeAws_ec2EnableTransitGatewayRouteTablePropagationCommand,
} from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type EnableTransitGatewayRouteTablePropagationCommandInput = EnableTransitGatewayRouteTablePropagationRequest;
export type EnableTransitGatewayRouteTablePropagationCommandOutput = EnableTransitGatewayRouteTablePropagationResult &
  __MetadataBearer;

/**
 * <p>Enables the specified attachment to propagate routes to the specified
 *          propagation route table.</p>
 */
export class EnableTransitGatewayRouteTablePropagationCommand extends $Command<
  EnableTransitGatewayRouteTablePropagationCommandInput,
  EnableTransitGatewayRouteTablePropagationCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableTransitGatewayRouteTablePropagationCommandInput) {
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
  ): Handler<
    EnableTransitGatewayRouteTablePropagationCommandInput,
    EnableTransitGatewayRouteTablePropagationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "EnableTransitGatewayRouteTablePropagationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableTransitGatewayRouteTablePropagationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: EnableTransitGatewayRouteTablePropagationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: EnableTransitGatewayRouteTablePropagationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2EnableTransitGatewayRouteTablePropagationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableTransitGatewayRouteTablePropagationCommandOutput> {
    return deserializeAws_ec2EnableTransitGatewayRouteTablePropagationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
