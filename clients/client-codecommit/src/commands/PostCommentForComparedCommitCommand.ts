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
  PostCommentForComparedCommitInput,
  PostCommentForComparedCommitInputFilterSensitiveLog,
  PostCommentForComparedCommitOutput,
  PostCommentForComparedCommitOutputFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1PostCommentForComparedCommitCommand,
  serializeAws_json1_1PostCommentForComparedCommitCommand,
} from "../protocols/Aws_json1_1";

export interface PostCommentForComparedCommitCommandInput extends PostCommentForComparedCommitInput {}
export interface PostCommentForComparedCommitCommandOutput
  extends PostCommentForComparedCommitOutput,
    __MetadataBearer {}

/**
 * <p>Posts a comment on the comparison between two commits.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, PostCommentForComparedCommitCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, PostCommentForComparedCommitCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new PostCommentForComparedCommitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PostCommentForComparedCommitCommandInput} for command's `input` shape.
 * @see {@link PostCommentForComparedCommitCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 */
export class PostCommentForComparedCommitCommand extends $Command<
  PostCommentForComparedCommitCommandInput,
  PostCommentForComparedCommitCommandOutput,
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

  constructor(readonly input: PostCommentForComparedCommitCommandInput) {
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
  ): Handler<PostCommentForComparedCommitCommandInput, PostCommentForComparedCommitCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PostCommentForComparedCommitCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "PostCommentForComparedCommitCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PostCommentForComparedCommitInputFilterSensitiveLog,
      outputFilterSensitiveLog: PostCommentForComparedCommitOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PostCommentForComparedCommitCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PostCommentForComparedCommitCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PostCommentForComparedCommitCommandOutput> {
    return deserializeAws_json1_1PostCommentForComparedCommitCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
