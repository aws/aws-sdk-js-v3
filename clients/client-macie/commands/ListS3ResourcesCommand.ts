import { MacieClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MacieClient";
import { ListS3ResourcesRequest, ListS3ResourcesResult } from "../models/models_0";
import {
  deserializeAws_json1_1ListS3ResourcesCommand,
  serializeAws_json1_1ListS3ResourcesCommand,
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

export type ListS3ResourcesCommandInput = ListS3ResourcesRequest;
export type ListS3ResourcesCommandOutput = ListS3ResourcesResult & __MetadataBearer;

/**
 * <p>Lists all the S3 resources associated with Amazon Macie Classic. If memberAccountId
 *       isn't specified, the action lists the S3 resources associated with Amazon Macie Classic for
 *       the current master account. If memberAccountId is specified, the action lists the S3 resources
 *       associated with Amazon Macie Classic for the specified member account. </p>
 */
export class ListS3ResourcesCommand extends $Command<
  ListS3ResourcesCommandInput,
  ListS3ResourcesCommandOutput,
  MacieClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListS3ResourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MacieClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListS3ResourcesCommandInput, ListS3ResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MacieClient";
    const commandName = "ListS3ResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListS3ResourcesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListS3ResourcesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListS3ResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListS3ResourcesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListS3ResourcesCommandOutput> {
    return deserializeAws_json1_1ListS3ResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
