// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeGuruReviewerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruReviewerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeRepositoryAssociationRequest, DescribeRepositoryAssociationResponse } from "../models/models_0";
import {
  de_DescribeRepositoryAssociationCommand,
  se_DescribeRepositoryAssociationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRepositoryAssociationCommand}.
 */
export interface DescribeRepositoryAssociationCommandInput extends DescribeRepositoryAssociationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRepositoryAssociationCommand}.
 */
export interface DescribeRepositoryAssociationCommandOutput
  extends DescribeRepositoryAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Returns a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object that contains information about the requested
 *          repository association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, DescribeRepositoryAssociationCommand } from "@aws-sdk/client-codeguru-reviewer"; // ES Modules import
 * // const { CodeGuruReviewerClient, DescribeRepositoryAssociationCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * const client = new CodeGuruReviewerClient(config);
 * const input = { // DescribeRepositoryAssociationRequest
 *   AssociationArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeRepositoryAssociationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRepositoryAssociationResponse
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
 * @param DescribeRepositoryAssociationCommandInput - {@link DescribeRepositoryAssociationCommandInput}
 * @returns {@link DescribeRepositoryAssociationCommandOutput}
 * @see {@link DescribeRepositoryAssociationCommandInput} for command's `input` shape.
 * @see {@link DescribeRepositoryAssociationCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruReviewerClientResolvedConfig | config} for CodeGuruReviewerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found.</p>
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
 *
 * @public
 */
export class DescribeRepositoryAssociationCommand extends $Command
  .classBuilder<
    DescribeRepositoryAssociationCommandInput,
    DescribeRepositoryAssociationCommandOutput,
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
  .s("AWSGuruFrontendService", "DescribeRepositoryAssociation", {})
  .n("CodeGuruReviewerClient", "DescribeRepositoryAssociationCommand")
  .f(void 0, void 0)
  .ser(se_DescribeRepositoryAssociationCommand)
  .de(de_DescribeRepositoryAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRepositoryAssociationRequest;
      output: DescribeRepositoryAssociationResponse;
    };
    sdk: {
      input: DescribeRepositoryAssociationCommandInput;
      output: DescribeRepositoryAssociationCommandOutput;
    };
  };
}
