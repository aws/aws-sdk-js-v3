// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeGuruReviewerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruReviewerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListCodeReviewsRequest, ListCodeReviewsResponse } from "../models/models_0";
import { de_ListCodeReviewsCommand, se_ListCodeReviewsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCodeReviewsCommand}.
 */
export interface ListCodeReviewsCommandInput extends ListCodeReviewsRequest {}
/**
 * @public
 *
 * The output of {@link ListCodeReviewsCommand}.
 */
export interface ListCodeReviewsCommandOutput extends ListCodeReviewsResponse, __MetadataBearer {}

/**
 * <p>Lists all the code reviews that the customer has created in the past 90 days.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, ListCodeReviewsCommand } from "@aws-sdk/client-codeguru-reviewer"; // ES Modules import
 * // const { CodeGuruReviewerClient, ListCodeReviewsCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CodeGuruReviewerClient(config);
 * const input = { // ListCodeReviewsRequest
 *   ProviderTypes: [ // ProviderTypes
 *     "CodeCommit" || "GitHub" || "Bitbucket" || "GitHubEnterpriseServer" || "S3Bucket",
 *   ],
 *   States: [ // JobStates
 *     "Completed" || "Pending" || "Failed" || "Deleting",
 *   ],
 *   RepositoryNames: [ // RepositoryNames
 *     "STRING_VALUE",
 *   ],
 *   Type: "PullRequest" || "RepositoryAnalysis", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCodeReviewsCommand(input);
 * const response = await client.send(command);
 * // { // ListCodeReviewsResponse
 * //   CodeReviewSummaries: [ // CodeReviewSummaries
 * //     { // CodeReviewSummary
 * //       Name: "STRING_VALUE",
 * //       CodeReviewArn: "STRING_VALUE",
 * //       RepositoryName: "STRING_VALUE",
 * //       Owner: "STRING_VALUE",
 * //       ProviderType: "CodeCommit" || "GitHub" || "Bitbucket" || "GitHubEnterpriseServer" || "S3Bucket",
 * //       State: "Completed" || "Pending" || "Failed" || "Deleting",
 * //       CreatedTimeStamp: new Date("TIMESTAMP"),
 * //       LastUpdatedTimeStamp: new Date("TIMESTAMP"),
 * //       Type: "PullRequest" || "RepositoryAnalysis",
 * //       PullRequestId: "STRING_VALUE",
 * //       MetricsSummary: { // MetricsSummary
 * //         MeteredLinesOfCodeCount: Number("long"),
 * //         SuppressedLinesOfCodeCount: Number("long"),
 * //         FindingsCount: Number("long"),
 * //       },
 * //       SourceCodeType: { // SourceCodeType
 * //         CommitDiff: { // CommitDiffSourceCodeType
 * //           SourceCommit: "STRING_VALUE",
 * //           DestinationCommit: "STRING_VALUE",
 * //           MergeBaseCommit: "STRING_VALUE",
 * //         },
 * //         RepositoryHead: { // RepositoryHeadSourceCodeType
 * //           BranchName: "STRING_VALUE", // required
 * //         },
 * //         BranchDiff: { // BranchDiffSourceCodeType
 * //           SourceBranchName: "STRING_VALUE", // required
 * //           DestinationBranchName: "STRING_VALUE", // required
 * //         },
 * //         S3BucketRepository: { // S3BucketRepository
 * //           Name: "STRING_VALUE", // required
 * //           Details: { // S3RepositoryDetails
 * //             BucketName: "STRING_VALUE",
 * //             CodeArtifacts: { // CodeArtifacts
 * //               SourceCodeArtifactsObjectKey: "STRING_VALUE", // required
 * //               BuildArtifactsObjectKey: "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //         RequestMetadata: { // RequestMetadata
 * //           RequestId: "STRING_VALUE",
 * //           Requester: "STRING_VALUE",
 * //           EventInfo: { // EventInfo
 * //             Name: "STRING_VALUE",
 * //             State: "STRING_VALUE",
 * //           },
 * //           VendorName: "GitHub" || "GitLab" || "NativeS3",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCodeReviewsCommandInput - {@link ListCodeReviewsCommandInput}
 * @returns {@link ListCodeReviewsCommandOutput}
 * @see {@link ListCodeReviewsCommandInput} for command's `input` shape.
 * @see {@link ListCodeReviewsCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruReviewerClientResolvedConfig | config} for CodeGuruReviewerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
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
 * @public
 */
export class ListCodeReviewsCommand extends $Command
  .classBuilder<
    ListCodeReviewsCommandInput,
    ListCodeReviewsCommandOutput,
    CodeGuruReviewerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeGuruReviewerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGuruFrontendService", "ListCodeReviews", {})
  .n("CodeGuruReviewerClient", "ListCodeReviewsCommand")
  .f(void 0, void 0)
  .ser(se_ListCodeReviewsCommand)
  .de(de_ListCodeReviewsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCodeReviewsRequest;
      output: ListCodeReviewsResponse;
    };
    sdk: {
      input: ListCodeReviewsCommandInput;
      output: ListCodeReviewsCommandOutput;
    };
  };
}
