// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRepositoryAssociationsRequest, ListRepositoryAssociationsResponse } from "../models/models_0";
import { ListRepositoryAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns a list of [RepositoryAssociationSummary](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html) objects that contain summary information about a repository association. You can filter the returned list by [ProviderType](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-ProviderType), [Name](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Name), [State](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-State), and [Owner](https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Owner).
 *
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
 *
 * The server encountered an internal error and is unable to complete the request.
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
export class ListRepositoryAssociationsCommand extends command<ListRepositoryAssociationsCommandInput, ListRepositoryAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "ListRepositoryAssociations",
  ListRepositoryAssociations$
) {
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
