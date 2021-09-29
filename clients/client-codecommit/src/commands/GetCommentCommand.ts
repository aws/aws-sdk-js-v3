import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetCommentInput, GetCommentOutput } from "../models/models_0";
import {
  deserializeAws_json1_1GetCommentCommand,
  serializeAws_json1_1GetCommentCommand,
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

export interface GetCommentCommandInput extends GetCommentInput {}
export interface GetCommentCommandOutput extends GetCommentOutput, __MetadataBearer {}

/**
 * <p>Returns the content of a comment made on a change, file, or commit in a repository. </p>
 *             <note>
 *             <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of
 *         reactions from active identities, use GetCommentReactions.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetCommentCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetCommentCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new GetCommentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCommentCommandInput} for command's `input` shape.
 * @see {@link GetCommentCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetCommentCommand extends $Command<
  GetCommentCommandInput,
  GetCommentCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCommentCommandInput) {
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
  ): Handler<GetCommentCommandInput, GetCommentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "GetCommentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCommentInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetCommentOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCommentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCommentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCommentCommandOutput> {
    return deserializeAws_json1_1GetCommentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
