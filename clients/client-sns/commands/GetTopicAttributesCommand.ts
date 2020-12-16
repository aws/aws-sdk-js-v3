import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { GetTopicAttributesInput, GetTopicAttributesResponse } from "../models/models_0";
import {
  deserializeAws_queryGetTopicAttributesCommand,
  serializeAws_queryGetTopicAttributesCommand,
} from "../protocols/Aws_query";
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

export type GetTopicAttributesCommandInput = GetTopicAttributesInput;
export type GetTopicAttributesCommandOutput = GetTopicAttributesResponse & __MetadataBearer;

/**
 * <p>Returns all of the properties of a topic. Topic properties returned might differ based
 *             on the authorization of the user.</p>
 */
export class GetTopicAttributesCommand extends $Command<
  GetTopicAttributesCommandInput,
  GetTopicAttributesCommandOutput,
  SNSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetTopicAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTopicAttributesCommandInput, GetTopicAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "GetTopicAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTopicAttributesInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetTopicAttributesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetTopicAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetTopicAttributesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTopicAttributesCommandOutput> {
    return deserializeAws_queryGetTopicAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
