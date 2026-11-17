// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRemoteSourceActionJobsRequest, ListRemoteSourceActionJobsResponse } from "../models/models_0";
import { ListRemoteSourceActionJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRemoteSourceActionJobsCommand}.
 */
export interface ListRemoteSourceActionJobsCommandInput extends ListRemoteSourceActionJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListRemoteSourceActionJobsCommand}.
 */
export interface ListRemoteSourceActionJobsCommandOutput extends ListRemoteSourceActionJobsResponse, __MetadataBearer {}

/**
 * <p>Lists the source action jobs in the account, with optional filtering.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, ListRemoteSourceActionJobsCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, ListRemoteSourceActionJobsCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // ListRemoteSourceActionJobsRequest
 *   filters: { // ListRemoteSourceActionJobsRequestFilters
 *     remoteSourceActionJobIDs: [ // RemoteSourceActionJobIDsFilter
 *       "STRING_VALUE",
 *     ],
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   accountID: "STRING_VALUE",
 * };
 * const command = new ListRemoteSourceActionJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListRemoteSourceActionJobsResponse
 * //   items: [ // RemoteSourceActionJobsList
 * //     { // RemoteSourceActionJob
 * //       remoteSourceActionJobID: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       sourceServerArns: [ // SourceServerArns
 * //         "STRING_VALUE",
 * //       ],
 * //       remoteSourceActionArns: [ // RemoteSourceActionArns
 * //         "STRING_VALUE",
 * //       ],
 * //       connectorArn: "STRING_VALUE",
 * //       startedAt: new Date("TIMESTAMP"),
 * //       endedAt: new Date("TIMESTAMP"),
 * //       statusReason: "STRING_VALUE",
 * //       tags: { // TagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRemoteSourceActionJobsCommandInput - {@link ListRemoteSourceActionJobsCommandInput}
 * @returns {@link ListRemoteSourceActionJobsCommandOutput}
 * @see {@link ListRemoteSourceActionJobsCommandInput} for command's `input` shape.
 * @see {@link ListRemoteSourceActionJobsCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @public
 */
export class ListRemoteSourceActionJobsCommand extends command<ListRemoteSourceActionJobsCommandInput, ListRemoteSourceActionJobsCommandOutput>(
  _ep0,
  _mw0,
  "ListRemoteSourceActionJobs",
  ListRemoteSourceActionJobs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRemoteSourceActionJobsRequest;
      output: ListRemoteSourceActionJobsResponse;
    };
    sdk: {
      input: ListRemoteSourceActionJobsCommandInput;
      output: ListRemoteSourceActionJobsCommandOutput;
    };
  };
}
