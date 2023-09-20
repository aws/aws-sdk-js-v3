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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { DeletePullRequestApprovalRuleInput, DeletePullRequestApprovalRuleOutput } from "../models/models_0";
import {
  de_DeletePullRequestApprovalRuleCommand,
  se_DeletePullRequestApprovalRuleCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeletePullRequestApprovalRuleCommand}.
 */
export interface DeletePullRequestApprovalRuleCommandInput extends DeletePullRequestApprovalRuleInput {}
/**
 * @public
 *
 * The output of {@link DeletePullRequestApprovalRuleCommand}.
 */
export interface DeletePullRequestApprovalRuleCommandOutput
  extends DeletePullRequestApprovalRuleOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Deletes an approval rule from a specified pull request. Approval rules can be deleted from a pull request only if the pull request is open, and if the
 *             approval rule was created specifically for a pull request and not generated from an approval rule template associated with the repository where the
 *             pull request was created. You cannot delete an approval rule from a merged or closed pull request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, DeletePullRequestApprovalRuleCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, DeletePullRequestApprovalRuleCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const input = { // DeletePullRequestApprovalRuleInput
 *   pullRequestId: "STRING_VALUE", // required
 *   approvalRuleName: "STRING_VALUE", // required
 * };
 * const command = new DeletePullRequestApprovalRuleCommand(input);
 * const response = await client.send(command);
 * // { // DeletePullRequestApprovalRuleOutput
 * //   approvalRuleId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeletePullRequestApprovalRuleCommandInput - {@link DeletePullRequestApprovalRuleCommandInput}
 * @returns {@link DeletePullRequestApprovalRuleCommandOutput}
 * @see {@link DeletePullRequestApprovalRuleCommandInput} for command's `input` shape.
 * @see {@link DeletePullRequestApprovalRuleCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link ApprovalRuleNameRequiredException} (client fault)
 *  <p>An approval rule name is required, but was not specified.</p>
 *
 * @throws {@link CannotDeleteApprovalRuleFromTemplateException} (client fault)
 *  <p>The approval rule cannot be deleted from the pull request because it was created by an
 *             approval rule template and applied to the pull request automatically.</p>
 *
 * @throws {@link EncryptionIntegrityChecksFailedException} (server fault)
 *  <p>An encryption integrity check failed.</p>
 *
 * @throws {@link EncryptionKeyAccessDeniedException} (client fault)
 *  <p>An encryption key could not be accessed.</p>
 *
 * @throws {@link EncryptionKeyDisabledException} (client fault)
 *  <p>The encryption key is disabled.</p>
 *
 * @throws {@link EncryptionKeyNotFoundException} (client fault)
 *  <p>No encryption key was found.</p>
 *
 * @throws {@link EncryptionKeyUnavailableException} (client fault)
 *  <p>The encryption key is not available.</p>
 *
 * @throws {@link InvalidApprovalRuleNameException} (client fault)
 *  <p>The name for the approval rule is not valid.</p>
 *
 * @throws {@link InvalidPullRequestIdException} (client fault)
 *  <p>The pull request ID is not valid. Make sure that you have provided the full ID and that the pull request is in the specified repository, and then try again.</p>
 *
 * @throws {@link PullRequestAlreadyClosedException} (client fault)
 *  <p>The pull request status cannot be updated because it is already closed.</p>
 *
 * @throws {@link PullRequestDoesNotExistException} (client fault)
 *  <p>The pull request ID could not be found. Make sure that you have specified the correct repository name and pull request ID, and then try again.</p>
 *
 * @throws {@link PullRequestIdRequiredException} (client fault)
 *  <p>A pull request ID is required, but none was provided.</p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 */
export class DeletePullRequestApprovalRuleCommand extends $Command<
  DeletePullRequestApprovalRuleCommandInput,
  DeletePullRequestApprovalRuleCommandOutput,
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
  constructor(readonly input: DeletePullRequestApprovalRuleCommandInput) {
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
  ): Handler<DeletePullRequestApprovalRuleCommandInput, DeletePullRequestApprovalRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeletePullRequestApprovalRuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "DeletePullRequestApprovalRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeCommit_20150413",
        operation: "DeletePullRequestApprovalRule",
      },
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
  private serialize(input: DeletePullRequestApprovalRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeletePullRequestApprovalRuleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeletePullRequestApprovalRuleCommandOutput> {
    return de_DeletePullRequestApprovalRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
