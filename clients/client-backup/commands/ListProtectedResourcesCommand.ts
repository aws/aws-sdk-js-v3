import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { ListProtectedResourcesInput, ListProtectedResourcesOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListProtectedResourcesCommand,
  serializeAws_restJson1ListProtectedResourcesCommand,
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

export type ListProtectedResourcesCommandInput = ListProtectedResourcesInput;
export type ListProtectedResourcesCommandOutput = ListProtectedResourcesOutput & __MetadataBearer;

/**
 * <p>Returns an array of resources successfully backed up by AWS Backup, including the time
 *          the resource was saved, an Amazon Resource Name (ARN) of the resource, and a resource
 *          type.</p>
 */
export class ListProtectedResourcesCommand extends $Command<
  ListProtectedResourcesCommandInput,
  ListProtectedResourcesCommandOutput,
  BackupClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListProtectedResourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListProtectedResourcesCommandInput, ListProtectedResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "ListProtectedResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListProtectedResourcesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListProtectedResourcesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListProtectedResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListProtectedResourcesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListProtectedResourcesCommandOutput> {
    return deserializeAws_restJson1ListProtectedResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
