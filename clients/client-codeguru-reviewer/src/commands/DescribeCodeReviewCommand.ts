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

import { CodeGuruReviewerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruReviewerClient";
import { DescribeCodeReviewRequest, DescribeCodeReviewResponse } from "../models/models_0";
import { de_DescribeCodeReviewCommand, se_DescribeCodeReviewCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeCodeReviewCommand}.
 */
export interface DescribeCodeReviewCommandInput extends DescribeCodeReviewRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCodeReviewCommand}.
 */
export interface DescribeCodeReviewCommandOutput extends DescribeCodeReviewResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the metadata associated with the code review along with its status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, DescribeCodeReviewCommand } from "@aws-sdk/client-codeguru-reviewer"; // ES Modules import
 * // const { CodeGuruReviewerClient, DescribeCodeReviewCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * const client = new CodeGuruReviewerClient(config);
 * const input = { // DescribeCodeReviewRequest
 *   CodeReviewArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeCodeReviewCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCodeReviewResponse
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
 * @param DescribeCodeReviewCommandInput - {@link DescribeCodeReviewCommandInput}
 * @returns {@link DescribeCodeReviewCommandOutput}
 * @see {@link DescribeCodeReviewCommandInput} for command's `input` shape.
 * @see {@link DescribeCodeReviewCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruReviewerClientResolvedConfig | config} for CodeGuruReviewerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
export class DescribeCodeReviewCommand extends $Command<
  DescribeCodeReviewCommandInput,
  DescribeCodeReviewCommandOutput,
  CodeGuruReviewerClientResolvedConfig
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
  constructor(readonly input: DescribeCodeReviewCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeGuruReviewerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeCodeReviewCommandInput, DescribeCodeReviewCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeCodeReviewCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruReviewerClient";
    const commandName = "DescribeCodeReviewCommand";
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
  private serialize(input: DescribeCodeReviewCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeCodeReviewCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCodeReviewCommandOutput> {
    return de_DescribeCodeReviewCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
