// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeRepositoryAssociationRequest, DescribeRepositoryAssociationResponse } from "../models/models_0";
import { DescribeRepositoryAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DescribeRepositoryAssociationCommandOutput extends DescribeRepositoryAssociationResponse, __MetadataBearer {}

/**
 * Returns a [RepositoryAssociation](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html) object that contains information about the requested repository association.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, DescribeRepositoryAssociationCommand } from "@aws-sdk/client-codeguru-reviewer"; // ES Modules import
 * // const { CodeGuruReviewerClient, DescribeRepositoryAssociationCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * // import type { CodeGuruReviewerClientConfig } from "@aws-sdk/client-codeguru-reviewer";
 * const config = {}; // type is CodeGuruReviewerClientConfig
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The server encountered an internal error and is unable to complete the request.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource specified in the request was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the specified constraints.
 *
 * @throws {@link CodeGuruReviewerServiceException}
 *
 * Base exception class for all service exceptions from CodeGuruReviewer service.
 *
 * @public
 */
export class DescribeRepositoryAssociationCommand extends command<DescribeRepositoryAssociationCommandInput, DescribeRepositoryAssociationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeRepositoryAssociation",
  DescribeRepositoryAssociation$
) {
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
