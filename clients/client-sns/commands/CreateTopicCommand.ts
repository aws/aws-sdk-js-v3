import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { CreateTopicInput, CreateTopicResponse } from "../models/models_0";
import { deserializeAws_queryCreateTopicCommand, serializeAws_queryCreateTopicCommand } from "../protocols/Aws_query";
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

export type CreateTopicCommandInput = CreateTopicInput;
export type CreateTopicCommandOutput = CreateTopicResponse & __MetadataBearer;

/**
 * <p>Creates a topic to which notifications can be published. Users can create at most
 *             100,000 standard topics (at most 1,000 FIFO topics). For more information, see <a href="http://aws.amazon.com/sns/">https://aws.amazon.com/sns</a>. This action is idempotent, so if the requester
 *             already owns a topic with the specified name, that topic's ARN is returned without
 *             creating a new topic.</p>
 */
export class CreateTopicCommand extends $Command<
  CreateTopicCommandInput,
  CreateTopicCommandOutput,
  SNSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateTopicCommandInput) {
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
  ): Handler<CreateTopicCommandInput, CreateTopicCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "CreateTopicCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTopicInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTopicResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTopicCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateTopicCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTopicCommandOutput> {
    return deserializeAws_queryCreateTopicCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
