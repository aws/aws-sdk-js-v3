import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DisableTransitGatewayRouteTablePropagationRequest,
  DisableTransitGatewayRouteTablePropagationResult,
} from "../models/models_3";
import {
  deserializeAws_ec2DisableTransitGatewayRouteTablePropagationCommand,
  serializeAws_ec2DisableTransitGatewayRouteTablePropagationCommand,
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

export type DisableTransitGatewayRouteTablePropagationCommandInput = DisableTransitGatewayRouteTablePropagationRequest;
export type DisableTransitGatewayRouteTablePropagationCommandOutput = DisableTransitGatewayRouteTablePropagationResult &
  __MetadataBearer;

/**
 * <p>Disables the specified resource attachment from propagating routes to the specified
 *          propagation route table.</p>
 */
export class DisableTransitGatewayRouteTablePropagationCommand extends $Command<
  DisableTransitGatewayRouteTablePropagationCommandInput,
  DisableTransitGatewayRouteTablePropagationCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisableTransitGatewayRouteTablePropagationCommandInput) {
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
    DisableTransitGatewayRouteTablePropagationCommandInput,
    DisableTransitGatewayRouteTablePropagationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisableTransitGatewayRouteTablePropagationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableTransitGatewayRouteTablePropagationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisableTransitGatewayRouteTablePropagationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisableTransitGatewayRouteTablePropagationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DisableTransitGatewayRouteTablePropagationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisableTransitGatewayRouteTablePropagationCommandOutput> {
    return deserializeAws_ec2DisableTransitGatewayRouteTablePropagationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
