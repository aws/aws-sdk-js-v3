import { MacieClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MacieClient";
import { UpdateS3ResourcesRequest, UpdateS3ResourcesResult } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateS3ResourcesCommand,
  serializeAws_json1_1UpdateS3ResourcesCommand,
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

export type UpdateS3ResourcesCommandInput = UpdateS3ResourcesRequest;
export type UpdateS3ResourcesCommandOutput = UpdateS3ResourcesResult & __MetadataBearer;

/**
 * <p>Updates the classification types for the specified S3 resources. If memberAccountId
 *       isn't specified, the action updates the classification types of the S3 resources associated
 *       with Amazon Macie Classic for the current master account. If memberAccountId is specified, the
 *       action updates the classification types of the S3 resources associated with Amazon Macie
 *       Classic for the specified member account. </p>
 */
export class UpdateS3ResourcesCommand extends $Command<
  UpdateS3ResourcesCommandInput,
  UpdateS3ResourcesCommandOutput,
  MacieClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateS3ResourcesCommandInput) {
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
  ): Handler<UpdateS3ResourcesCommandInput, UpdateS3ResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MacieClient";
    const commandName = "UpdateS3ResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateS3ResourcesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateS3ResourcesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateS3ResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateS3ResourcesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateS3ResourcesCommandOutput> {
    return deserializeAws_json1_1UpdateS3ResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
