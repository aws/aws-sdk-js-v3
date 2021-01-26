import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { MergePullRequestBySquashInput, MergePullRequestBySquashOutput } from "../models/models_1";
import {
  deserializeAws_json1_1MergePullRequestBySquashCommand,
  serializeAws_json1_1MergePullRequestBySquashCommand,
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

export type MergePullRequestBySquashCommandInput = MergePullRequestBySquashInput;
export type MergePullRequestBySquashCommandOutput = MergePullRequestBySquashOutput & __MetadataBearer;

/**
 * <p>Attempts to merge the source commit of a pull request into the specified destination
 *             branch for that pull request at the specified commit using the squash merge strategy. If the merge is successful, it closes the pull request.</p>
 */
export class MergePullRequestBySquashCommand extends $Command<
  MergePullRequestBySquashCommandInput,
  MergePullRequestBySquashCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: MergePullRequestBySquashCommandInput) {
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
  ): Handler<MergePullRequestBySquashCommandInput, MergePullRequestBySquashCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "MergePullRequestBySquashCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: MergePullRequestBySquashInput.filterSensitiveLog,
      outputFilterSensitiveLog: MergePullRequestBySquashOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: MergePullRequestBySquashCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1MergePullRequestBySquashCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<MergePullRequestBySquashCommandOutput> {
    return deserializeAws_json1_1MergePullRequestBySquashCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
