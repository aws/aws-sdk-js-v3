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

import { CodeGuruReviewerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruReviewerClient";
import { CreateCodeReviewRequest, CreateCodeReviewResponse } from "../models/models_0";
import { de_CreateCodeReviewCommand, se_CreateCodeReviewCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateCodeReviewCommand}.
 */
export interface CreateCodeReviewCommandInput extends CreateCodeReviewRequest {}
/**
 * @public
 *
 * The output of {@link CreateCodeReviewCommand}.
 */
export interface CreateCodeReviewCommandOutput extends CreateCodeReviewResponse, __MetadataBearer {}

/**
 * @public
 * <p>Use to create a code review with a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReviewType.html">CodeReviewType</a> of
 *             <code>RepositoryAnalysis</code>. This type of code review analyzes all code under a
 *          specified branch in an associated repository. <code>PullRequest</code> code reviews are
 *          automatically triggered by a pull request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, CreateCodeReviewCommand } from "@aws-sdk/client-codeguru-reviewer"; // ES Modules import
 * // const { CodeGuruReviewerClient, CreateCodeReviewCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * const client = new CodeGuruReviewerClient(config);
 * const input = { // CreateCodeReviewRequest
 *   Name: "STRING_VALUE", // required
 *   RepositoryAssociationArn: "STRING_VALUE", // required
 *   Type: { // CodeReviewType
 *     RepositoryAnalysis: { // RepositoryAnalysis
 *       RepositoryHead: { // RepositoryHeadSourceCodeType
 *         BranchName: "STRING_VALUE", // required
 *       },
 *       SourceCodeType: { // SourceCodeType
 *         CommitDiff: { // CommitDiffSourceCodeType
 *           SourceCommit: "STRING_VALUE",
 *           DestinationCommit: "STRING_VALUE",
 *           MergeBaseCommit: "STRING_VALUE",
 *         },
 *         RepositoryHead: {
 *           BranchName: "STRING_VALUE", // required
 *         },
 *         BranchDiff: { // BranchDiffSourceCodeType
 *           SourceBranchName: "STRING_VALUE", // required
 *           DestinationBranchName: "STRING_VALUE", // required
 *         },
 *         S3BucketRepository: { // S3BucketRepository
 *           Name: "STRING_VALUE", // required
 *           Details: { // S3RepositoryDetails
 *             BucketName: "STRING_VALUE",
 *             CodeArtifacts: { // CodeArtifacts
 *               SourceCodeArtifactsObjectKey: "STRING_VALUE", // required
 *               BuildArtifactsObjectKey: "STRING_VALUE",
 *             },
 *           },
 *         },
 *         RequestMetadata: { // RequestMetadata
 *           RequestId: "STRING_VALUE",
 *           Requester: "STRING_VALUE",
 *           EventInfo: { // EventInfo
 *             Name: "STRING_VALUE",
 *             State: "STRING_VALUE",
 *           },
 *           VendorName: "GitHub" || "GitLab" || "NativeS3",
 *         },
 *       },
 *     },
 *     AnalysisTypes: [ // AnalysisTypes
 *       "Security" || "CodeQuality",
 *     ],
 *   },
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new CreateCodeReviewCommand(input);
 * const response = await client.send(command);
 * // { // CreateCodeReviewResponse
 * //   CodeReview: { // CodeReview
 * //     Name: "STRING_VALUE",
 * //     CodeReviewArn: "STRING_VALUE",
 * //     RepositoryName: "STRING_VALUE",
 * //     Owner: "STRING_VALUE",
 * //     ProviderType: "CodeCommit" || "GitHub" || "Bitbucket" || "GitHubEnterpriseServer" || "S3Bucket",
 * //     State: "Completed" || "Pending" || "Failed" || "Deleting",
 * //     StateReason: "STRING_VALUE",
 * //     CreatedTimeStamp: new Date("TIMESTAMP"),
 * //     LastUpdatedTimeStamp: new Date("TIMESTAMP"),
 * //     Type: "PullRequest" || "RepositoryAnalysis",
 * //     PullRequestId: "STRING_VALUE",
 * //     SourceCodeType: { // SourceCodeType
 * //       CommitDiff: { // CommitDiffSourceCodeType
 * //         SourceCommit: "STRING_VALUE",
 * //         DestinationCommit: "STRING_VALUE",
 * //         MergeBaseCommit: "STRING_VALUE",
 * //       },
 * //       RepositoryHead: { // RepositoryHeadSourceCodeType
 * //         BranchName: "STRING_VALUE", // required
 * //       },
 * //       BranchDiff: { // BranchDiffSourceCodeType
 * //         SourceBranchName: "STRING_VALUE", // required
 * //         DestinationBranchName: "STRING_VALUE", // required
 * //       },
 * //       S3BucketRepository: { // S3BucketRepository
 * //         Name: "STRING_VALUE", // required
 * //         Details: { // S3RepositoryDetails
 * //           BucketName: "STRING_VALUE",
 * //           CodeArtifacts: { // CodeArtifacts
 * //             SourceCodeArtifactsObjectKey: "STRING_VALUE", // required
 * //             BuildArtifactsObjectKey: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       RequestMetadata: { // RequestMetadata
 * //         RequestId: "STRING_VALUE",
 * //         Requester: "STRING_VALUE",
 * //         EventInfo: { // EventInfo
 * //           Name: "STRING_VALUE",
 * //           State: "STRING_VALUE",
 * //         },
 * //         VendorName: "GitHub" || "GitLab" || "NativeS3",
 * //       },
 * //     },
 * //     AssociationArn: "STRING_VALUE",
 * //     Metrics: { // Metrics
 * //       MeteredLinesOfCodeCount: Number("long"),
 * //       SuppressedLinesOfCodeCount: Number("long"),
 * //       FindingsCount: Number("long"),
 * //     },
 * //     AnalysisTypes: [ // AnalysisTypes
 * //       "Security" || "CodeQuality",
 * //     ],
 * //     ConfigFileState: "Present" || "Absent" || "PresentWithErrors",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateCodeReviewCommandInput - {@link CreateCodeReviewCommandInput}
 * @returns {@link CreateCodeReviewCommandOutput}
 * @see {@link CreateCodeReviewCommandInput} for command's `input` shape.
 * @see {@link CreateCodeReviewCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruReviewerClientResolvedConfig | config} for CodeGuruReviewerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service
 *          resource associated with the request. Resolve the conflict before retrying this request.
 *       </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource specified in the request was not found. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CodeGuruReviewerServiceException}
 * <p>Base exception class for all service exceptions from CodeGuruReviewer service.</p>
 *
 */
export class CreateCodeReviewCommand extends $Command<
  CreateCodeReviewCommandInput,
  CreateCodeReviewCommandOutput,
  CodeGuruReviewerClientResolvedConfig
> {
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
  constructor(readonly input: CreateCodeReviewCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeGuruReviewerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCodeReviewCommandInput, CreateCodeReviewCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCodeReviewCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruReviewerClient";
    const commandName = "CreateCodeReviewCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGuruFrontendService",
        operation: "CreateCodeReview",
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
  private serialize(input: CreateCodeReviewCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateCodeReviewCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCodeReviewCommandOutput> {
    return de_CreateCodeReviewCommand(output, context);
  }
}
