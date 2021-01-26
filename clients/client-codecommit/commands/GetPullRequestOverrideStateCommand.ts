import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetPullRequestOverrideStateInput, GetPullRequestOverrideStateOutput } from "../models/models_0";
import {
  deserializeAws_json1_1GetPullRequestOverrideStateCommand,
  serializeAws_json1_1GetPullRequestOverrideStateCommand,
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

export type GetPullRequestOverrideStateCommandInput = GetPullRequestOverrideStateInput;
export type GetPullRequestOverrideStateCommandOutput = GetPullRequestOverrideStateOutput & __MetadataBearer;

/**
 * <p>Returns information about whether approval rules have been set aside (overridden) for a
 *             pull request, and if so, the Amazon Resource Name (ARN) of the user or identity that overrode the rules and their requirements for the pull request.</p>
 */
export class GetPullRequestOverrideStateCommand extends $Command<
  GetPullRequestOverrideStateCommandInput,
  GetPullRequestOverrideStateCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetPullRequestOverrideStateCommandInput) {
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
  ): Handler<GetPullRequestOverrideStateCommandInput, GetPullRequestOverrideStateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "GetPullRequestOverrideStateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPullRequestOverrideStateInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetPullRequestOverrideStateOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPullRequestOverrideStateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetPullRequestOverrideStateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetPullRequestOverrideStateCommandOutput> {
    return deserializeAws_json1_1GetPullRequestOverrideStateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
