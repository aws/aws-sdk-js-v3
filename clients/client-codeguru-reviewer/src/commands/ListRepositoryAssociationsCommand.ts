// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CodeGuruReviewerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodeGuruReviewerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListRepositoryAssociationsRequest, ListRepositoryAssociationsResponse } from "../models/models_0";
import { ListRepositoryAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRepositoryAssociationsCommand}.
 */
export interface ListRepositoryAssociationsCommandInput extends ListRepositoryAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListRepositoryAssociationsCommand}.
 */
export interface ListRepositoryAssociationsCommandOutput extends ListRepositoryAssociationsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html">RepositoryAssociationSummary</a> objects that contain summary information about a
 *          repository association. You can filter the returned list by <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-ProviderType">ProviderType</a>, <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Name">Name</a>, <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-State">State</a>, and <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Owner">Owner</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, ListRepositoryAssociationsCommand } from "@aws-sdk/client-codeguru-reviewer"; // ES Modules import
 * // const { CodeGuruReviewerClient, ListRepositoryAssociationsCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * // import type { CodeGuruReviewerClientConfig } from "@aws-sdk/client-codeguru-reviewer";
 * const config = {}; // type is CodeGuruReviewerClientConfig
 * const client = new CodeGuruReviewerClient(config);
 * const input = { // ListRepositoryAssociationsRequest
 *   ProviderTypes: [ // ProviderTypes
 *     "CodeCommit" || "GitHub" || "Bitbucket" || "GitHubEnterpriseServer" || "S3Bucket",
 *   ],
 *   States: [ // RepositoryAssociationStates
 *     "Associated" || "Associating" || "Failed" || "Disassociating" || "Disassociated",
 *   ],
 *   Names: [ // Names
 *     "STRING_VALUE",
 *   ],
 *   Owners: [ // Owners
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListRepositoryAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListRepositoryAssociationsResponse
 * //   RepositoryAssociationSummaries: [ // RepositoryAssociationSummaries
 * //     { // RepositoryAssociationSummary
 * //       AssociationArn: "STRING_VALUE",
 * //       ConnectionArn: "STRING_VALUE",
 * //       LastUpdatedTimeStamp: new Date("TIMESTAMP"),
 * //       AssociationId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Owner: "STRING_VALUE",
 * //       ProviderType: "CodeCommit" || "GitHub" || "Bitbucket" || "GitHubEnterpriseServer" || "S3Bucket",
 * //       State: "Associated" || "Associating" || "Failed" || "Disassociating" || "Disassociated",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRepositoryAssociationsCommandInput - {@link ListRepositoryAssociationsCommandInput}
 * @returns {@link ListRepositoryAssociationsCommandOutput}
 * @see {@link ListRepositoryAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListRepositoryAssociationsCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruReviewerClientResolvedConfig | config} for CodeGuruReviewerClient's `config` shape.
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
 *
 * @public
 */
export class ListRepositoryAssociationsCommand extends $Command
  .classBuilder<
    ListRepositoryAssociationsCommandInput,
    ListRepositoryAssociationsCommandOutput,
    CodeGuruReviewerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeGuruReviewerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGuruFrontendService", "ListRepositoryAssociations", {})
  .n("CodeGuruReviewerClient", "ListRepositoryAssociationsCommand")
  .sc(ListRepositoryAssociations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRepositoryAssociationsRequest;
      output: ListRepositoryAssociationsResponse;
    };
    sdk: {
      input: ListRepositoryAssociationsCommandInput;
      output: ListRepositoryAssociationsCommandOutput;
    };
  };
}
