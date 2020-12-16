import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  GetTransitGatewayAttachmentPropagationsRequest,
  GetTransitGatewayAttachmentPropagationsResult,
} from "../models/models_4";
import {
  deserializeAws_ec2GetTransitGatewayAttachmentPropagationsCommand,
  serializeAws_ec2GetTransitGatewayAttachmentPropagationsCommand,
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

export type GetTransitGatewayAttachmentPropagationsCommandInput = GetTransitGatewayAttachmentPropagationsRequest;
export type GetTransitGatewayAttachmentPropagationsCommandOutput = GetTransitGatewayAttachmentPropagationsResult &
  __MetadataBearer;

/**
 * <p>Lists the route tables to which the specified resource attachment propagates routes.</p>
 */
export class GetTransitGatewayAttachmentPropagationsCommand extends $Command<
  GetTransitGatewayAttachmentPropagationsCommandInput,
  GetTransitGatewayAttachmentPropagationsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetTransitGatewayAttachmentPropagationsCommandInput) {
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
    GetTransitGatewayAttachmentPropagationsCommandInput,
    GetTransitGatewayAttachmentPropagationsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetTransitGatewayAttachmentPropagationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTransitGatewayAttachmentPropagationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetTransitGatewayAttachmentPropagationsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetTransitGatewayAttachmentPropagationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2GetTransitGatewayAttachmentPropagationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetTransitGatewayAttachmentPropagationsCommandOutput> {
    return deserializeAws_ec2GetTransitGatewayAttachmentPropagationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
