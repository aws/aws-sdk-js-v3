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
import { UpdatePullRequestStatusInput, UpdatePullRequestStatusOutput } from "../models/models_1";
import { de_UpdatePullRequestStatusCommand, se_UpdatePullRequestStatusCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdatePullRequestStatusCommand}.
 */
export interface UpdatePullRequestStatusCommandInput extends UpdatePullRequestStatusInput {}
/**
 * @public
 *
 * The output of {@link UpdatePullRequestStatusCommand}.
 */
export interface UpdatePullRequestStatusCommandOutput extends UpdatePullRequestStatusOutput, __MetadataBearer {}

/**
 * @public
 * <p>Updates the status of a pull request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdatePullRequestStatusCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdatePullRequestStatusCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const input = { // UpdatePullRequestStatusInput
 *   pullRequestId: "STRING_VALUE", // required
 *   pullRequestStatus: "STRING_VALUE", // required
 * };
 * const command = new UpdatePullRequestStatusCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePullRequestStatusOutput
 * //   pullRequest: { // PullRequest
 * //     pullRequestId: "STRING_VALUE",
 * //     title: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     lastActivityDate: new Date("TIMESTAMP"),
 * //     creationDate: new Date("TIMESTAMP"),
 * //     pullRequestStatus: "STRING_VALUE",
 * //     authorArn: "STRING_VALUE",
 * //     pullRequestTargets: [ // PullRequestTargetList
 * //       { // PullRequestTarget
 * //         repositoryName: "STRING_VALUE",
 * //         sourceReference: "STRING_VALUE",
 * //         destinationReference: "STRING_VALUE",
 * //         destinationCommit: "STRING_VALUE",
 * //         sourceCommit: "STRING_VALUE",
 * //         mergeBase: "STRING_VALUE",
 * //         mergeMetadata: { // MergeMetadata
 * //           isMerged: true || false,
 * //           mergedBy: "STRING_VALUE",
 * //           mergeCommitId: "STRING_VALUE",
 * //           mergeOption: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     clientRequestToken: "STRING_VALUE",
 * //     revisionId: "STRING_VALUE",
 * //     approvalRules: [ // ApprovalRulesList
 * //       { // ApprovalRule
 * //         approvalRuleId: "STRING_VALUE",
 * //         approvalRuleName: "STRING_VALUE",
 * //         approvalRuleContent: "STRING_VALUE",
 * //         ruleContentSha256: "STRING_VALUE",
 * //         lastModifiedDate: new Date("TIMESTAMP"),
 * //         creationDate: new Date("TIMESTAMP"),
 * //         lastModifiedUser: "STRING_VALUE",
 * //         originApprovalRuleTemplate: { // OriginApprovalRuleTemplate
 * //           approvalRuleTemplateId: "STRING_VALUE",
 * //           approvalRuleTemplateName: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdatePullRequestStatusCommandInput - {@link UpdatePullRequestStatusCommandInput}
 * @returns {@link UpdatePullRequestStatusCommandOutput}
 * @see {@link UpdatePullRequestStatusCommandInput} for command's `input` shape.
 * @see {@link UpdatePullRequestStatusCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidPullRequestIdException} (client fault)
 *  <p>The pull request ID is not valid. Make sure that you have provided the full ID and that the pull request is in the specified repository, and then try again.</p>
 *
 * @throws {@link InvalidPullRequestStatusException} (client fault)
 *  <p>The pull request status is not valid. The only valid values are <code>OPEN</code> and <code>CLOSED</code>.</p>
 *
 * @throws {@link InvalidPullRequestStatusUpdateException} (client fault)
 *  <p>The pull request status update is not valid. The only valid update is from <code>OPEN</code> to <code>CLOSED</code>.</p>
 *
 * @throws {@link PullRequestDoesNotExistException} (client fault)
 *  <p>The pull request ID could not be found. Make sure that you have specified the correct repository name and pull request ID, and then try again.</p>
 *
 * @throws {@link PullRequestIdRequiredException} (client fault)
 *  <p>A pull request ID is required, but none was provided.</p>
 *
 * @throws {@link PullRequestStatusRequiredException} (client fault)
 *  <p>A pull request status is required, but none was provided.</p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 */
export class UpdatePullRequestStatusCommand extends $Command<
  UpdatePullRequestStatusCommandInput,
  UpdatePullRequestStatusCommandOutput,
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
  constructor(readonly input: UpdatePullRequestStatusCommandInput) {
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
  ): Handler<UpdatePullRequestStatusCommandInput, UpdatePullRequestStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdatePullRequestStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "UpdatePullRequestStatusCommand";
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
  private serialize(input: UpdatePullRequestStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdatePullRequestStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePullRequestStatusCommandOutput> {
    return de_UpdatePullRequestStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
