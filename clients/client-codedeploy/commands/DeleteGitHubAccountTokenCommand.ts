import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { DeleteGitHubAccountTokenInput, DeleteGitHubAccountTokenOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteGitHubAccountTokenCommand,
  serializeAws_json1_1DeleteGitHubAccountTokenCommand,
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

export type DeleteGitHubAccountTokenCommandInput = DeleteGitHubAccountTokenInput;
export type DeleteGitHubAccountTokenCommandOutput = DeleteGitHubAccountTokenOutput & __MetadataBearer;

/**
 * <p>Deletes a GitHub account connection.</p>
 */
export class DeleteGitHubAccountTokenCommand extends $Command<
  DeleteGitHubAccountTokenCommandInput,
  DeleteGitHubAccountTokenCommandOutput,
  CodeDeployClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteGitHubAccountTokenCommandInput) {
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
  ): Handler<DeleteGitHubAccountTokenCommandInput, DeleteGitHubAccountTokenCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "DeleteGitHubAccountTokenCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteGitHubAccountTokenInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteGitHubAccountTokenOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteGitHubAccountTokenCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteGitHubAccountTokenCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteGitHubAccountTokenCommandOutput> {
    return deserializeAws_json1_1DeleteGitHubAccountTokenCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
