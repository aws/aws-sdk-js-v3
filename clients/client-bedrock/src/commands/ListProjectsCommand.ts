// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListProjectsRequest, ListProjectsResponse } from "../models/models_1";
import { ListProjects$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListProjectsCommand}.
 */
export interface ListProjectsCommandInput extends ListProjectsRequest {}
/**
 * @public
 *
 * The output of {@link ListProjectsCommand}.
 */
export interface ListProjectsCommandOutput extends ListProjectsResponse, __MetadataBearer {}

/**
 * <p>Lists the account's projects. Results are paginated: when the response includes <code>nextToken</code>, pass it in the next request to fetch the following page. Page size is 1-100, default 20. By default every project is returned regardless of status; set <code>statusFilter</code> to list only active or only archived projects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, ListProjectsCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, ListProjectsCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // ListProjectsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   statusFilter: "active" || "archived",
 * };
 * const command = new ListProjectsCommand(input);
 * const response = await client.send(command);
 * // { // ListProjectsResponse
 * //   projectSummaries: [ // ProjectSummaryList // required
 * //     { // ProjectSummary
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       status: "active" || "archived", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       archivedAt: new Date("TIMESTAMP"),
 * //       dataRetention: { // ProjectDataRetention
 * //         mode: "default" || "none" || "aws_review" || "provider_data_share" || "inherit", // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProjectsCommandInput - {@link ListProjectsCommandInput}
 * @returns {@link ListProjectsCommandOutput}
 * @see {@link ListProjectsCommandInput} for command's `input` shape.
 * @see {@link ListProjectsCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 *
 * @public
 */
export class ListProjectsCommand extends command<ListProjectsCommandInput, ListProjectsCommandOutput>(
  _ep0,
  _mw0,
  "ListProjects",
  ListProjects$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProjectsRequest;
      output: ListProjectsResponse;
    };
    sdk: {
      input: ListProjectsCommandInput;
      output: ListProjectsCommandOutput;
    };
  };
}
