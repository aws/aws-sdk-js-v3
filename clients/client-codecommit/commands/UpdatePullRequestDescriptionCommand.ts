import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { UpdatePullRequestDescriptionInput, UpdatePullRequestDescriptionOutput } from "../models/models_1";
import {
  deserializeAws_json1_1UpdatePullRequestDescriptionCommand,
  serializeAws_json1_1UpdatePullRequestDescriptionCommand,
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

export type UpdatePullRequestDescriptionCommandInput = UpdatePullRequestDescriptionInput;
export type UpdatePullRequestDescriptionCommandOutput = UpdatePullRequestDescriptionOutput & __MetadataBearer;

/**
 * <p>Replaces the contents of the description of a pull request.</p>
 */
export class UpdatePullRequestDescriptionCommand extends $Command<
  UpdatePullRequestDescriptionCommandInput,
  UpdatePullRequestDescriptionCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdatePullRequestDescriptionCommandInput) {
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
  ): Handler<UpdatePullRequestDescriptionCommandInput, UpdatePullRequestDescriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "UpdatePullRequestDescriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdatePullRequestDescriptionInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdatePullRequestDescriptionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdatePullRequestDescriptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdatePullRequestDescriptionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdatePullRequestDescriptionCommandOutput> {
    return deserializeAws_json1_1UpdatePullRequestDescriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
