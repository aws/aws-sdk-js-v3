import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetMergeConflictsInput, GetMergeConflictsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1GetMergeConflictsCommand,
  serializeAws_json1_1GetMergeConflictsCommand,
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

export type GetMergeConflictsCommandInput = GetMergeConflictsInput;
export type GetMergeConflictsCommandOutput = GetMergeConflictsOutput & __MetadataBearer;

/**
 * <p>Returns information about merge conflicts between the before and after commit IDs for a pull request in a repository.</p>
 */
export class GetMergeConflictsCommand extends $Command<
  GetMergeConflictsCommandInput,
  GetMergeConflictsCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetMergeConflictsCommandInput) {
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
  ): Handler<GetMergeConflictsCommandInput, GetMergeConflictsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "GetMergeConflictsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMergeConflictsInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetMergeConflictsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMergeConflictsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetMergeConflictsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMergeConflictsCommandOutput> {
    return deserializeAws_json1_1GetMergeConflictsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
