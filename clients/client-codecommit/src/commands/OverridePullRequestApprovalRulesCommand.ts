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
import { OverridePullRequestApprovalRulesInput } from "../models/models_1";
import {
  de_OverridePullRequestApprovalRulesCommand,
  se_OverridePullRequestApprovalRulesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link OverridePullRequestApprovalRulesCommand}.
 */
export interface OverridePullRequestApprovalRulesCommandInput extends OverridePullRequestApprovalRulesInput {}
/**
 * @public
 *
 * The output of {@link OverridePullRequestApprovalRulesCommand}.
 */
export interface OverridePullRequestApprovalRulesCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Sets aside (overrides) all approval rule requirements for a specified pull request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, OverridePullRequestApprovalRulesCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, OverridePullRequestApprovalRulesCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const input = { // OverridePullRequestApprovalRulesInput
 *   pullRequestId: "STRING_VALUE", // required
 *   revisionId: "STRING_VALUE", // required
 *   overrideStatus: "OVERRIDE" || "REVOKE", // required
 * };
 * const command = new OverridePullRequestApprovalRulesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param OverridePullRequestApprovalRulesCommandInput - {@link OverridePullRequestApprovalRulesCommandInput}
 * @returns {@link OverridePullRequestApprovalRulesCommandOutput}
 * @see {@link OverridePullRequestApprovalRulesCommandInput} for command's `input` shape.
 * @see {@link OverridePullRequestApprovalRulesCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
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
 * @throws {@link InvalidOverrideStatusException} (client fault)
 *  <p>The override status is not valid. Valid statuses are OVERRIDE and REVOKE.</p>
 *
 * @throws {@link InvalidPullRequestIdException} (client fault)
 *  <p>The pull request ID is not valid. Make sure that you have provided the full ID and that the pull request is in the specified repository, and then try again.</p>
 *
 * @throws {@link InvalidRevisionIdException} (client fault)
 *  <p>The revision ID is not valid. Use GetPullRequest to determine the value.</p>
 *
 * @throws {@link OverrideAlreadySetException} (client fault)
 *  <p>The pull request has already had its approval rules set to override.</p>
 *
 * @throws {@link OverrideStatusRequiredException} (client fault)
 *  <p>An override status is required, but no value was provided. Valid values include OVERRIDE and REVOKE.</p>
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
 * @throws {@link RevisionIdRequiredException} (client fault)
 *  <p>A revision ID is required, but was not provided.</p>
 *
 * @throws {@link RevisionNotCurrentException} (client fault)
 *  <p>The revision ID provided in the request does not match the current revision ID. Use GetPullRequest to retrieve the current revision ID.</p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 */
export class OverridePullRequestApprovalRulesCommand extends $Command<
  OverridePullRequestApprovalRulesCommandInput,
  OverridePullRequestApprovalRulesCommandOutput,
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
  constructor(readonly input: OverridePullRequestApprovalRulesCommandInput) {
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
  ): Handler<OverridePullRequestApprovalRulesCommandInput, OverridePullRequestApprovalRulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, OverridePullRequestApprovalRulesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "OverridePullRequestApprovalRulesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeCommit_20150413",
        operation: "OverridePullRequestApprovalRules",
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
  private serialize(
    input: OverridePullRequestApprovalRulesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_OverridePullRequestApprovalRulesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<OverridePullRequestApprovalRulesCommandOutput> {
    return de_OverridePullRequestApprovalRulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
