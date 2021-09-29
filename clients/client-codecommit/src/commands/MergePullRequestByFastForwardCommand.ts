import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { MergePullRequestByFastForwardInput, MergePullRequestByFastForwardOutput } from "../models/models_1";
import {
  deserializeAws_json1_1MergePullRequestByFastForwardCommand,
  serializeAws_json1_1MergePullRequestByFastForwardCommand,
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

export interface MergePullRequestByFastForwardCommandInput extends MergePullRequestByFastForwardInput {}
export interface MergePullRequestByFastForwardCommandOutput
  extends MergePullRequestByFastForwardOutput,
    __MetadataBearer {}

/**
 * <p>Attempts to merge the source commit of a pull request into the specified destination
 *             branch for that pull request at the specified commit using the fast-forward merge strategy. If the merge is successful, it closes the pull request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, MergePullRequestByFastForwardCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, MergePullRequestByFastForwardCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new MergePullRequestByFastForwardCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link MergePullRequestByFastForwardCommandInput} for command's `input` shape.
 * @see {@link MergePullRequestByFastForwardCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class MergePullRequestByFastForwardCommand extends $Command<
  MergePullRequestByFastForwardCommandInput,
  MergePullRequestByFastForwardCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: MergePullRequestByFastForwardCommandInput) {
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
  ): Handler<MergePullRequestByFastForwardCommandInput, MergePullRequestByFastForwardCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "MergePullRequestByFastForwardCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: MergePullRequestByFastForwardInput.filterSensitiveLog,
      outputFilterSensitiveLog: MergePullRequestByFastForwardOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: MergePullRequestByFastForwardCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1MergePullRequestByFastForwardCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<MergePullRequestByFastForwardCommandOutput> {
    return deserializeAws_json1_1MergePullRequestByFastForwardCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
