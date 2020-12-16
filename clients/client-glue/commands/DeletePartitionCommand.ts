import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeletePartitionRequest, DeletePartitionResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeletePartitionCommand,
  serializeAws_json1_1DeletePartitionCommand,
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

export type DeletePartitionCommandInput = DeletePartitionRequest;
export type DeletePartitionCommandOutput = DeletePartitionResponse & __MetadataBearer;

/**
 * <p>Deletes a specified partition.</p>
 */
export class DeletePartitionCommand extends $Command<
  DeletePartitionCommandInput,
  DeletePartitionCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeletePartitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeletePartitionCommandInput, DeletePartitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "DeletePartitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeletePartitionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeletePartitionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeletePartitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeletePartitionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeletePartitionCommandOutput> {
    return deserializeAws_json1_1DeletePartitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
