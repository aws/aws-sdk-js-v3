// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { UpdateCommentInput, UpdateCommentOutput } from "../models/models_1";
import { de_UpdateCommentCommand, se_UpdateCommentCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateCommentCommand}.
 */
export interface UpdateCommentCommandInput extends UpdateCommentInput {}
/**
 * @public
 *
 * The output of {@link UpdateCommentCommand}.
 */
export interface UpdateCommentCommandOutput extends UpdateCommentOutput, __MetadataBearer {}

/**
 * @public
 * <p>Replaces the contents of a comment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdateCommentCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdateCommentCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const input = { // UpdateCommentInput
 *   commentId: "STRING_VALUE", // required
 *   content: "STRING_VALUE", // required
 * };
 * const command = new UpdateCommentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCommentOutput
 * //   comment: { // Comment
 * //     commentId: "STRING_VALUE",
 * //     content: "STRING_VALUE",
 * //     inReplyTo: "STRING_VALUE",
 * //     creationDate: new Date("TIMESTAMP"),
 * //     lastModifiedDate: new Date("TIMESTAMP"),
 * //     authorArn: "STRING_VALUE",
 * //     deleted: true || false,
 * //     clientRequestToken: "STRING_VALUE",
 * //     callerReactions: [ // CallerReactions
 * //       "STRING_VALUE",
 * //     ],
 * //     reactionCounts: { // ReactionCountsMap
 * //       "<keys>": Number("int"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateCommentCommandInput - {@link UpdateCommentCommandInput}
 * @returns {@link UpdateCommentCommandOutput}
 * @see {@link UpdateCommentCommandInput} for command's `input` shape.
 * @see {@link UpdateCommentCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link CommentContentRequiredException} (client fault)
 *  <p>The comment is empty. You must provide some content for a comment. The content cannot be null.</p>
 *
 * @throws {@link CommentContentSizeLimitExceededException} (client fault)
 *  <p>The comment is too large. Comments are limited to 1,000 characters.</p>
 *
 * @throws {@link CommentDeletedException} (client fault)
 *  <p>This comment has already been deleted. You cannot edit or delete a deleted comment.</p>
 *
 * @throws {@link CommentDoesNotExistException} (client fault)
 *  <p>No comment exists with the provided ID. Verify that you have used the correct ID, and
 *             then try again.</p>
 *
 * @throws {@link CommentIdRequiredException} (client fault)
 *  <p>The comment ID is missing or null. A comment ID is required.</p>
 *
 * @throws {@link CommentNotCreatedByCallerException} (client fault)
 *  <p>You cannot modify or delete this comment. Only comment authors can modify or delete their comments.</p>
 *
 * @throws {@link InvalidCommentIdException} (client fault)
 *  <p>The comment ID is not in a valid format. Make sure that you have provided the full comment ID.</p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 */
export class UpdateCommentCommand extends $Command<
  UpdateCommentCommandInput,
  UpdateCommentCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: UpdateCommentCommandInput) {
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
  ): Handler<UpdateCommentCommandInput, UpdateCommentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateCommentCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "UpdateCommentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: UpdateCommentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateCommentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateCommentCommandOutput> {
    return de_UpdateCommentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
