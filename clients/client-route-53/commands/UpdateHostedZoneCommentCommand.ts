import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { UpdateHostedZoneCommentRequest, UpdateHostedZoneCommentResponse } from "../models/models_0";
import {
  deserializeAws_restXmlUpdateHostedZoneCommentCommand,
  serializeAws_restXmlUpdateHostedZoneCommentCommand,
} from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
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

export type UpdateHostedZoneCommentCommandInput = UpdateHostedZoneCommentRequest;
export type UpdateHostedZoneCommentCommandOutput = UpdateHostedZoneCommentResponse & __MetadataBearer;

/**
 * <p>Updates the comment for a specified hosted zone.</p>
 */
export class UpdateHostedZoneCommentCommand extends $Command<
  UpdateHostedZoneCommentCommandInput,
  UpdateHostedZoneCommentCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateHostedZoneCommentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateHostedZoneCommentCommandInput, UpdateHostedZoneCommentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "UpdateHostedZoneCommentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateHostedZoneCommentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateHostedZoneCommentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateHostedZoneCommentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlUpdateHostedZoneCommentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateHostedZoneCommentCommandOutput> {
    return deserializeAws_restXmlUpdateHostedZoneCommentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
