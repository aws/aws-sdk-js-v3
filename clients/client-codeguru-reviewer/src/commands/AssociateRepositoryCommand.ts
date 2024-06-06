// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeGuruReviewerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruReviewerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateRepositoryRequest, AssociateRepositoryResponse } from "../models/models_0";
import { de_AssociateRepositoryCommand, se_AssociateRepositoryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateRepositoryCommand}.
 */
export interface AssociateRepositoryCommandInput extends AssociateRepositoryRequest {}
/**
 * @public
 *
 * The output of {@link AssociateRepositoryCommand}.
 */
export interface AssociateRepositoryCommandOutput extends AssociateRepositoryResponse, __MetadataBearer {}

/**
 * <p>Use to associate an Amazon Web Services CodeCommit repository or a repository managed by Amazon Web Services
 *          CodeStar Connections with Amazon CodeGuru Reviewer. When you associate a repository, CodeGuru Reviewer reviews
 *          source code changes in the repository's pull requests and provides automatic
 *          recommendations. You can view recommendations using the CodeGuru Reviewer console. For more
 *          information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/recommendations.html">Recommendations in
 *             Amazon CodeGuru Reviewer</a> in the <i>Amazon CodeGuru Reviewer User Guide.</i>
 *          </p>
 *          <p>If you associate a CodeCommit or S3 repository, it must be in the same Amazon Web Services Region and
 *          Amazon Web Services account where its CodeGuru Reviewer code reviews are configured.</p>
 *          <p>Bitbucket and GitHub Enterprise Server repositories are managed by Amazon Web Services CodeStar
 *          Connections to connect to CodeGuru Reviewer. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/getting-started-associate-repository.html">Associate a
 *             repository</a> in the <i>Amazon CodeGuru Reviewer User Guide.</i>
 *          </p>
 *          <note>
 *             <p>You cannot use the CodeGuru Reviewer SDK or the Amazon Web Services CLI to associate a GitHub repository with
 *             Amazon CodeGuru Reviewer. To associate a GitHub repository, use the console. For more information, see
 *                <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/getting-started-with-guru.html">Getting started with
 *                CodeGuru Reviewer</a> in the <i>CodeGuru Reviewer User Guide.</i>
 *             </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, AssociateRepositoryCommand } from "@aws-sdk/client-codeguru-reviewer"; // ES Modules import
 * // const { CodeGuruReviewerClient, AssociateRepositoryCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * const client = new CodeGuruReviewerClient(config);
 * const input = { // AssociateRepositoryRequest
 *   Repository: { // Repository
 *     CodeCommit: { // CodeCommitRepository
 *       Name: "STRING_VALUE", // required
 *     },
 *     Bitbucket: { // ThirdPartySourceRepository
 *       Name: "STRING_VALUE", // required
 *       ConnectionArn: "STRING_VALUE", // required
 *       Owner: "STRING_VALUE", // required
 *     },
 *     GitHubEnterpriseServer: {
 *       Name: "STRING_VALUE", // required
 *       ConnectionArn: "STRING_VALUE", // required
 *       Owner: "STRING_VALUE", // required
 *     },
 *     S3Bucket: { // S3Repository
 *       Name: "STRING_VALUE", // required
 *       BucketName: "STRING_VALUE", // required
 *     },
 *   },
 *   ClientRequestToken: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   KMSKeyDetails: { // KMSKeyDetails
 *     KMSKeyId: "STRING_VALUE",
 *     EncryptionOption: "AWS_OWNED_CMK" || "CUSTOMER_MANAGED_CMK",
 *   },
 * };
 * const command = new AssociateRepositoryCommand(input);
 * const response = await client.send(command);
 * // { // AssociateRepositoryResponse
 * //   RepositoryAssociation: { // RepositoryAssociation
 * //     AssociationId: "STRING_VALUE",
 * //     AssociationArn: "STRING_VALUE",
 * //     ConnectionArn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Owner: "STRING_VALUE",
 * //     ProviderType: "CodeCommit" || "GitHub" || "Bitbucket" || "GitHubEnterpriseServer" || "S3Bucket",
 * //     State: "Associated" || "Associating" || "Failed" || "Disassociating" || "Disassociated",
 * //     StateReason: "STRING_VALUE",
 * //     LastUpdatedTimeStamp: new Date("TIMESTAMP"),
 * //     CreatedTimeStamp: new Date("TIMESTAMP"),
 * //     KMSKeyDetails: { // KMSKeyDetails
 * //       KMSKeyId: "STRING_VALUE",
 * //       EncryptionOption: "AWS_OWNED_CMK" || "CUSTOMER_MANAGED_CMK",
 * //     },
 * //     S3RepositoryDetails: { // S3RepositoryDetails
 * //       BucketName: "STRING_VALUE",
 * //       CodeArtifacts: { // CodeArtifacts
 * //         SourceCodeArtifactsObjectKey: "STRING_VALUE", // required
 * //         BuildArtifactsObjectKey: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateRepositoryCommandInput - {@link AssociateRepositoryCommandInput}
 * @returns {@link AssociateRepositoryCommandOutput}
 * @see {@link AssociateRepositoryCommandInput} for command's `input` shape.
 * @see {@link AssociateRepositoryCommandOutput} for command's `response` shape.
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
export class AssociateRepositoryCommand extends $Command
  .classBuilder<
    AssociateRepositoryCommandInput,
    AssociateRepositoryCommandOutput,
    CodeGuruReviewerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CodeGuruReviewerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGuruFrontendService", "AssociateRepository", {})
  .n("CodeGuruReviewerClient", "AssociateRepositoryCommand")
  .f(void 0, void 0)
  .ser(se_AssociateRepositoryCommand)
  .de(de_AssociateRepositoryCommand)
  .build() {}
