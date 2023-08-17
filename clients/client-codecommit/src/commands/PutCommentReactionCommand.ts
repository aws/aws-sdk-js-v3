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
import { PutCommentReactionInput } from "../models/models_1";
import { de_PutCommentReactionCommand, se_PutCommentReactionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutCommentReactionCommand}.
 */
export interface PutCommentReactionCommandInput extends PutCommentReactionInput {}
/**
 * @public
 *
 * The output of {@link PutCommentReactionCommand}.
 */
export interface PutCommentReactionCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Adds or updates a reaction to a specified comment for the user whose identity is used to make the request. You can only add or
 *         update a reaction for yourself. You cannot add, modify, or delete a reaction for another user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, PutCommentReactionCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, PutCommentReactionCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const input = { // PutCommentReactionInput
 *   commentId: "STRING_VALUE", // required
 *   reactionValue: "STRING_VALUE", // required
 * };
 * const command = new PutCommentReactionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutCommentReactionCommandInput - {@link PutCommentReactionCommandInput}
 * @returns {@link PutCommentReactionCommandOutput}
 * @see {@link PutCommentReactionCommandInput} for command's `input` shape.
 * @see {@link PutCommentReactionCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidReactionValueException} (client fault)
 *  <p>The value of the reaction is not valid. For more information, see the <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit User Guide</a>.</p>
 *
 * @throws {@link ReactionLimitExceededException} (client fault)
 *  <p>The number of reactions has been exceeded. Reactions are limited to one reaction per user for each individual comment ID.</p>
 *
 * @throws {@link ReactionValueRequiredException} (client fault)
 *  <p>A reaction value is required. </p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 */
export class PutCommentReactionCommand extends $Command<
  PutCommentReactionCommandInput,
  PutCommentReactionCommandOutput,
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
  constructor(readonly input: PutCommentReactionCommandInput) {
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
  ): Handler<PutCommentReactionCommandInput, PutCommentReactionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutCommentReactionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "PutCommentReactionCommand";
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
  private serialize(input: PutCommentReactionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutCommentReactionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutCommentReactionCommandOutput> {
    return de_PutCommentReactionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
