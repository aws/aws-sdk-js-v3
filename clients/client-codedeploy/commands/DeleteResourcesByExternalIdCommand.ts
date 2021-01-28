import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { DeleteResourcesByExternalIdInput, DeleteResourcesByExternalIdOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteResourcesByExternalIdCommand,
  serializeAws_json1_1DeleteResourcesByExternalIdCommand,
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

export type DeleteResourcesByExternalIdCommandInput = DeleteResourcesByExternalIdInput;
export type DeleteResourcesByExternalIdCommandOutput = DeleteResourcesByExternalIdOutput & __MetadataBearer;

/**
 * <p>Deletes resources linked to an external ID.</p>
 */
export class DeleteResourcesByExternalIdCommand extends $Command<
  DeleteResourcesByExternalIdCommandInput,
  DeleteResourcesByExternalIdCommandOutput,
  CodeDeployClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteResourcesByExternalIdCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeDeployClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteResourcesByExternalIdCommandInput, DeleteResourcesByExternalIdCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "DeleteResourcesByExternalIdCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteResourcesByExternalIdInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteResourcesByExternalIdOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteResourcesByExternalIdCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteResourcesByExternalIdCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteResourcesByExternalIdCommandOutput> {
    return deserializeAws_json1_1DeleteResourcesByExternalIdCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
