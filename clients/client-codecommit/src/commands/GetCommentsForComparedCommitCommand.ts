// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import {
  GetCommentsForComparedCommitInput,
  GetCommentsForComparedCommitInputFilterSensitiveLog,
  GetCommentsForComparedCommitOutput,
  GetCommentsForComparedCommitOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetCommentsForComparedCommitCommand,
  serializeAws_json1_1GetCommentsForComparedCommitCommand,
} from "../protocols/Aws_json1_1";

export interface GetCommentsForComparedCommitCommandInput extends GetCommentsForComparedCommitInput {}
export interface GetCommentsForComparedCommitCommandOutput
  extends GetCommentsForComparedCommitOutput,
    __MetadataBearer {}

/**
 * <p>Returns information about comments made on the comparison between two commits.</p>
 *         <note>
 *             <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of
 *             reactions from active identities, use GetCommentReactions.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetCommentsForComparedCommitCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetCommentsForComparedCommitCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new GetCommentsForComparedCommitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCommentsForComparedCommitCommandInput} for command's `input` shape.
 * @see {@link GetCommentsForComparedCommitCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 */
export class GetCommentsForComparedCommitCommand extends $Command<
  GetCommentsForComparedCommitCommandInput,
  GetCommentsForComparedCommitCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: GetCommentsForComparedCommitCommandInput) {
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
  ): Handler<GetCommentsForComparedCommitCommandInput, GetCommentsForComparedCommitCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCommentsForComparedCommitCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "GetCommentsForComparedCommitCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCommentsForComparedCommitInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetCommentsForComparedCommitOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCommentsForComparedCommitCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCommentsForComparedCommitCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetCommentsForComparedCommitCommandOutput> {
    return deserializeAws_json1_1GetCommentsForComparedCommitCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
