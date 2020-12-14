import {
  KinesisAnalyticsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsV2Client";
import { DeleteApplicationOutputRequest, DeleteApplicationOutputResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteApplicationOutputCommand,
  serializeAws_json1_1DeleteApplicationOutputCommand,
} from "../protocols/Aws_json1_1";
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

export type DeleteApplicationOutputCommandInput = DeleteApplicationOutputRequest;
export type DeleteApplicationOutputCommandOutput = DeleteApplicationOutputResponse & __MetadataBearer;

/**
 * <p>Deletes the output destination configuration from your SQL-based Kinesis Data Analytics application's configuration.
 *       Kinesis Data Analytics will no longer write data from
 *       the corresponding in-application stream to the external output destination.</p>
 */
export class DeleteApplicationOutputCommand extends $Command<
  DeleteApplicationOutputCommandInput,
  DeleteApplicationOutputCommandOutput,
  KinesisAnalyticsV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteApplicationOutputCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisAnalyticsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteApplicationOutputCommandInput, DeleteApplicationOutputCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisAnalyticsV2Client";
    const commandName = "DeleteApplicationOutputCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteApplicationOutputRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteApplicationOutputResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteApplicationOutputCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteApplicationOutputCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteApplicationOutputCommandOutput> {
    return deserializeAws_json1_1DeleteApplicationOutputCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
