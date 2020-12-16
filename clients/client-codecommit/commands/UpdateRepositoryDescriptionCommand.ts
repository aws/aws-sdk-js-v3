import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { UpdateRepositoryDescriptionInput } from "../models/models_1";
import {
  deserializeAws_json1_1UpdateRepositoryDescriptionCommand,
  serializeAws_json1_1UpdateRepositoryDescriptionCommand,
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

export type UpdateRepositoryDescriptionCommandInput = UpdateRepositoryDescriptionInput;
export type UpdateRepositoryDescriptionCommandOutput = __MetadataBearer;

/**
 * <p>Sets or changes the comment or description for a repository.</p>
 *         <note>
 *             <p>The description field for a repository accepts all HTML characters and all valid
 *                 Unicode characters. Applications that do not HTML-encode the description and display
 *                 it in a webpage can expose users to potentially malicious code. Make sure that you
 *                 HTML-encode the description field in any application that uses this API to display
 *                 the repository description on a webpage.</p>
 *          </note>
 */
export class UpdateRepositoryDescriptionCommand extends $Command<
  UpdateRepositoryDescriptionCommandInput,
  UpdateRepositoryDescriptionCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateRepositoryDescriptionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCommitClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRepositoryDescriptionCommandInput, UpdateRepositoryDescriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "UpdateRepositoryDescriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRepositoryDescriptionInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateRepositoryDescriptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateRepositoryDescriptionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateRepositoryDescriptionCommandOutput> {
    return deserializeAws_json1_1UpdateRepositoryDescriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
