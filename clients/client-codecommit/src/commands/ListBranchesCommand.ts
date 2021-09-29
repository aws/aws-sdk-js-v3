import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { ListBranchesInput, ListBranchesOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListBranchesCommand,
  serializeAws_json1_1ListBranchesCommand,
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

export interface ListBranchesCommandInput extends ListBranchesInput {}
export interface ListBranchesCommandOutput extends ListBranchesOutput, __MetadataBearer {}

/**
 * <p>Gets information about one or more branches in a repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, ListBranchesCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, ListBranchesCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new ListBranchesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBranchesCommandInput} for command's `input` shape.
 * @see {@link ListBranchesCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListBranchesCommand extends $Command<
  ListBranchesCommandInput,
  ListBranchesCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListBranchesCommandInput) {
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
  ): Handler<ListBranchesCommandInput, ListBranchesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "ListBranchesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListBranchesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListBranchesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListBranchesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListBranchesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBranchesCommandOutput> {
    return deserializeAws_json1_1ListBranchesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
