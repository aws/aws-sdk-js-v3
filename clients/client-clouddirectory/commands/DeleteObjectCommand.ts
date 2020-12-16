import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { DeleteObjectRequest, DeleteObjectResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteObjectCommand,
  serializeAws_restJson1DeleteObjectCommand,
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

export type DeleteObjectCommandInput = DeleteObjectRequest;
export type DeleteObjectCommandOutput = DeleteObjectResponse & __MetadataBearer;

/**
 * <p>Deletes an object and its associated attributes. Only objects with no children and no
 *       parents can be deleted. The maximum number of attributes that can be deleted during an object deletion is 30. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Amazon Cloud Directory Limits</a>.</p>
 */
export class DeleteObjectCommand extends $Command<
  DeleteObjectCommandInput,
  DeleteObjectCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteObjectCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteObjectCommandInput, DeleteObjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "DeleteObjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteObjectRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteObjectResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteObjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteObjectCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteObjectCommandOutput> {
    return deserializeAws_restJson1DeleteObjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
