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
import { DescribePullRequestEventsInput, DescribePullRequestEventsOutput } from "../models/models_0";
import { de_DescribePullRequestEventsCommand, se_DescribePullRequestEventsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribePullRequestEventsCommand}.
 */
export interface DescribePullRequestEventsCommandInput extends DescribePullRequestEventsInput {}
/**
 * @public
 *
 * The output of {@link DescribePullRequestEventsCommand}.
 */
export interface DescribePullRequestEventsCommandOutput extends DescribePullRequestEventsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about one or more pull request events.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, DescribePullRequestEventsCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, DescribePullRequestEventsCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const input = { // DescribePullRequestEventsInput
 *   pullRequestId: "STRING_VALUE", // required
 *   pullRequestEventType: "PULL_REQUEST_CREATED" || "PULL_REQUEST_STATUS_CHANGED" || "PULL_REQUEST_SOURCE_REFERENCE_UPDATED" || "PULL_REQUEST_MERGE_STATE_CHANGED" || "PULL_REQUEST_APPROVAL_RULE_CREATED" || "PULL_REQUEST_APPROVAL_RULE_UPDATED" || "PULL_REQUEST_APPROVAL_RULE_DELETED" || "PULL_REQUEST_APPROVAL_RULE_OVERRIDDEN" || "PULL_REQUEST_APPROVAL_STATE_CHANGED",
 *   actorArn: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new DescribePullRequestEventsCommand(input);
 * const response = await client.send(command);
 * // { // DescribePullRequestEventsOutput
 * //   pullRequestEvents: [ // PullRequestEventList // required
 * //     { // PullRequestEvent
 * //       pullRequestId: "STRING_VALUE",
 * //       eventDate: new Date("TIMESTAMP"),
 * //       pullRequestEventType: "PULL_REQUEST_CREATED" || "PULL_REQUEST_STATUS_CHANGED" || "PULL_REQUEST_SOURCE_REFERENCE_UPDATED" || "PULL_REQUEST_MERGE_STATE_CHANGED" || "PULL_REQUEST_APPROVAL_RULE_CREATED" || "PULL_REQUEST_APPROVAL_RULE_UPDATED" || "PULL_REQUEST_APPROVAL_RULE_DELETED" || "PULL_REQUEST_APPROVAL_RULE_OVERRIDDEN" || "PULL_REQUEST_APPROVAL_STATE_CHANGED",
 * //       actorArn: "STRING_VALUE",
 * //       pullRequestCreatedEventMetadata: { // PullRequestCreatedEventMetadata
 * //         repositoryName: "STRING_VALUE",
 * //         sourceCommitId: "STRING_VALUE",
 * //         destinationCommitId: "STRING_VALUE",
 * //         mergeBase: "STRING_VALUE",
 * //       },
 * //       pullRequestStatusChangedEventMetadata: { // PullRequestStatusChangedEventMetadata
 * //         pullRequestStatus: "OPEN" || "CLOSED",
 * //       },
 * //       pullRequestSourceReferenceUpdatedEventMetadata: { // PullRequestSourceReferenceUpdatedEventMetadata
 * //         repositoryName: "STRING_VALUE",
 * //         beforeCommitId: "STRING_VALUE",
 * //         afterCommitId: "STRING_VALUE",
 * //         mergeBase: "STRING_VALUE",
 * //       },
 * //       pullRequestMergedStateChangedEventMetadata: { // PullRequestMergedStateChangedEventMetadata
 * //         repositoryName: "STRING_VALUE",
 * //         destinationReference: "STRING_VALUE",
 * //         mergeMetadata: { // MergeMetadata
 * //           isMerged: true || false,
 * //           mergedBy: "STRING_VALUE",
 * //           mergeCommitId: "STRING_VALUE",
 * //           mergeOption: "FAST_FORWARD_MERGE" || "SQUASH_MERGE" || "THREE_WAY_MERGE",
 * //         },
 * //       },
 * //       approvalRuleEventMetadata: { // ApprovalRuleEventMetadata
 * //         approvalRuleName: "STRING_VALUE",
 * //         approvalRuleId: "STRING_VALUE",
 * //         approvalRuleContent: "STRING_VALUE",
 * //       },
 * //       approvalStateChangedEventMetadata: { // ApprovalStateChangedEventMetadata
 * //         revisionId: "STRING_VALUE",
 * //         approvalStatus: "APPROVE" || "REVOKE",
 * //       },
 * //       approvalRuleOverriddenEventMetadata: { // ApprovalRuleOverriddenEventMetadata
 * //         revisionId: "STRING_VALUE",
 * //         overrideStatus: "OVERRIDE" || "REVOKE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribePullRequestEventsCommandInput - {@link DescribePullRequestEventsCommandInput}
 * @returns {@link DescribePullRequestEventsCommandOutput}
 * @see {@link DescribePullRequestEventsCommandInput} for command's `input` shape.
 * @see {@link DescribePullRequestEventsCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link ActorDoesNotExistException} (client fault)
 *  <p>The specified Amazon Resource Name (ARN) does not exist in the Amazon Web Services account.</p>
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
 * @throws {@link InvalidActorArnException} (client fault)
 *  <p>The Amazon Resource Name (ARN) is not valid. Make sure that you have provided the full ARN for the user who initiated the change for the pull request,
 *             and then try again.</p>
 *
 * @throws {@link InvalidContinuationTokenException} (client fault)
 *  <p>The specified continuation token is not valid.</p>
 *
 * @throws {@link InvalidMaxResultsException} (client fault)
 *  <p>The specified number of maximum results is not valid.</p>
 *
 * @throws {@link InvalidPullRequestEventTypeException} (client fault)
 *  <p>The pull request event type is not valid. </p>
 *
 * @throws {@link InvalidPullRequestIdException} (client fault)
 *  <p>The pull request ID is not valid. Make sure that you have provided the full ID and that the pull request is in the specified repository, and then try again.</p>
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
export class DescribePullRequestEventsCommand extends $Command<
  DescribePullRequestEventsCommandInput,
  DescribePullRequestEventsCommandOutput,
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
  constructor(readonly input: DescribePullRequestEventsCommandInput) {
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
  ): Handler<DescribePullRequestEventsCommandInput, DescribePullRequestEventsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePullRequestEventsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "DescribePullRequestEventsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeCommit_20150413",
        operation: "DescribePullRequestEvents",
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
  private serialize(input: DescribePullRequestEventsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribePullRequestEventsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribePullRequestEventsCommandOutput> {
    return de_DescribePullRequestEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
