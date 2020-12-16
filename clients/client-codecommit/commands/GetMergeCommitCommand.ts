import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetMergeCommitInput, GetMergeCommitOutput } from "../models/models_0";
import {
  deserializeAws_json1_1GetMergeCommitCommand,
  serializeAws_json1_1GetMergeCommitCommand,
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

export type GetMergeCommitCommandInput = GetMergeCommitInput;
export type GetMergeCommitCommandOutput = GetMergeCommitOutput & __MetadataBearer;

/**
 * <p>Returns information about a specified merge commit.</p>
 */
export class GetMergeCommitCommand extends $Command<
  GetMergeCommitCommandInput,
  GetMergeCommitCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetMergeCommitCommandInput) {
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
  ): Handler<GetMergeCommitCommandInput, GetMergeCommitCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "GetMergeCommitCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMergeCommitInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetMergeCommitOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMergeCommitCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetMergeCommitCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMergeCommitCommandOutput> {
    return deserializeAws_json1_1GetMergeCommitCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
