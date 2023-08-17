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
import { GetCommentReactionsInput, GetCommentReactionsOutput } from "../models/models_0";
import { de_GetCommentReactionsCommand, se_GetCommentReactionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetCommentReactionsCommand}.
 */
export interface GetCommentReactionsCommandInput extends GetCommentReactionsInput {}
/**
 * @public
 *
 * The output of {@link GetCommentReactionsCommand}.
 */
export interface GetCommentReactionsCommandOutput extends GetCommentReactionsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about reactions to a specified comment ID. Reactions from users who have been deleted will not be included in the count.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetCommentReactionsCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetCommentReactionsCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const input = { // GetCommentReactionsInput
 *   commentId: "STRING_VALUE", // required
 *   reactionUserArn: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetCommentReactionsCommand(input);
 * const response = await client.send(command);
 * // { // GetCommentReactionsOutput
 * //   reactionsForComment: [ // ReactionsForCommentList // required
 * //     { // ReactionForComment
 * //       reaction: { // ReactionValueFormats
 * //         emoji: "STRING_VALUE",
 * //         shortCode: "STRING_VALUE",
 * //         unicode: "STRING_VALUE",
 * //       },
 * //       reactionUsers: [ // ReactionUsersList
 * //         "STRING_VALUE",
 * //       ],
 * //       reactionsFromDeletedUsersCount: Number("int"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCommentReactionsCommandInput - {@link GetCommentReactionsCommandInput}
 * @returns {@link GetCommentReactionsCommandOutput}
 * @see {@link GetCommentReactionsCommandInput} for command's `input` shape.
 * @see {@link GetCommentReactionsCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
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
 * @throws {@link InvalidCommentIdException} (client fault)
 *  <p>The comment ID is not in a valid format. Make sure that you have provided the full comment ID.</p>
 *
 * @throws {@link InvalidContinuationTokenException} (client fault)
 *  <p>The specified continuation token is not valid.</p>
 *
 * @throws {@link InvalidMaxResultsException} (client fault)
 *  <p>The specified number of maximum results is not valid.</p>
 *
 * @throws {@link InvalidReactionUserArnException} (client fault)
 *  <p>The Amazon Resource Name (ARN) of the user or identity is not valid.</p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 */
export class GetCommentReactionsCommand extends $Command<
  GetCommentReactionsCommandInput,
  GetCommentReactionsCommandOutput,
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
  constructor(readonly input: GetCommentReactionsCommandInput) {
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
  ): Handler<GetCommentReactionsCommandInput, GetCommentReactionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCommentReactionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "GetCommentReactionsCommand";
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
  private serialize(input: GetCommentReactionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetCommentReactionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCommentReactionsCommandOutput> {
    return de_GetCommentReactionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
