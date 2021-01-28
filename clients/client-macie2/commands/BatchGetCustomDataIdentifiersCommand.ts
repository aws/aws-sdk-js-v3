import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { BatchGetCustomDataIdentifiersRequest, BatchGetCustomDataIdentifiersResponse } from "../models/models_0";
import {
  deserializeAws_restJson1BatchGetCustomDataIdentifiersCommand,
  serializeAws_restJson1BatchGetCustomDataIdentifiersCommand,
} from "../protocols/Aws_restJson1";
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

export type BatchGetCustomDataIdentifiersCommandInput = BatchGetCustomDataIdentifiersRequest;
export type BatchGetCustomDataIdentifiersCommandOutput = BatchGetCustomDataIdentifiersResponse & __MetadataBearer;

/**
 * <p>Retrieves information about one or more custom data identifiers.</p>
 */
export class BatchGetCustomDataIdentifiersCommand extends $Command<
  BatchGetCustomDataIdentifiersCommandInput,
  BatchGetCustomDataIdentifiersCommandOutput,
  Macie2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchGetCustomDataIdentifiersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Macie2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetCustomDataIdentifiersCommandInput, BatchGetCustomDataIdentifiersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "BatchGetCustomDataIdentifiersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchGetCustomDataIdentifiersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchGetCustomDataIdentifiersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchGetCustomDataIdentifiersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchGetCustomDataIdentifiersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchGetCustomDataIdentifiersCommandOutput> {
    return deserializeAws_restJson1BatchGetCustomDataIdentifiersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
