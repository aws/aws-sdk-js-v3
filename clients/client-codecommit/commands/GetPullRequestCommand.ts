import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetPullRequestInput, GetPullRequestOutput } from "../models/models_0";
import {
  deserializeAws_json1_1GetPullRequestCommand,
  serializeAws_json1_1GetPullRequestCommand,
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

export type GetPullRequestCommandInput = GetPullRequestInput;
export type GetPullRequestCommandOutput = GetPullRequestOutput & __MetadataBearer;

/**
 * <p>Gets information about a pull request in a specified repository.</p>
 */
export class GetPullRequestCommand extends $Command<
  GetPullRequestCommandInput,
  GetPullRequestCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetPullRequestCommandInput) {
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
  ): Handler<GetPullRequestCommandInput, GetPullRequestCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "GetPullRequestCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPullRequestInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetPullRequestOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPullRequestCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetPullRequestCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPullRequestCommandOutput> {
    return deserializeAws_json1_1GetPullRequestCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
