// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListRemoteSourceActionInvocationResultsRequest,
  ListRemoteSourceActionInvocationResultsResponse,
} from "../models/models_0";
import { ListRemoteSourceActionInvocationResults$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRemoteSourceActionInvocationResultsCommand}.
 */
export interface ListRemoteSourceActionInvocationResultsCommandInput extends ListRemoteSourceActionInvocationResultsRequest {}
/**
 * @public
 *
 * The output of {@link ListRemoteSourceActionInvocationResultsCommand}.
 */
export interface ListRemoteSourceActionInvocationResultsCommandOutput extends ListRemoteSourceActionInvocationResultsResponse, __MetadataBearer {}

/**
 * <p>Lists the latest invocation result of each source action that ran on a source server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, ListRemoteSourceActionInvocationResultsCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, ListRemoteSourceActionInvocationResultsCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // ListRemoteSourceActionInvocationResultsRequest
 *   sourceServerID: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   accountID: "STRING_VALUE",
 * };
 * const command = new ListRemoteSourceActionInvocationResultsCommand(input);
 * const response = await client.send(command);
 * // { // ListRemoteSourceActionInvocationResultsResponse
 * //   items: [ // RemoteSourceActionInvocationResultsList
 * //     { // RemoteSourceActionInvocationResult
 * //       remoteSourceActionID: "STRING_VALUE",
 * //       connectorOwnerAccountID: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       startedAt: new Date("TIMESTAMP"),
 * //       endedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRemoteSourceActionInvocationResultsCommandInput - {@link ListRemoteSourceActionInvocationResultsCommandInput}
 * @returns {@link ListRemoteSourceActionInvocationResultsCommandOutput}
 * @see {@link ListRemoteSourceActionInvocationResultsCommandInput} for command's `input` shape.
 * @see {@link ListRemoteSourceActionInvocationResultsCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
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
export class ListRemoteSourceActionInvocationResultsCommand extends command<ListRemoteSourceActionInvocationResultsCommandInput, ListRemoteSourceActionInvocationResultsCommandOutput>(
  _ep0,
  _mw0,
  "ListRemoteSourceActionInvocationResults",
  ListRemoteSourceActionInvocationResults$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRemoteSourceActionInvocationResultsRequest;
      output: ListRemoteSourceActionInvocationResultsResponse;
    };
    sdk: {
      input: ListRemoteSourceActionInvocationResultsCommandInput;
      output: ListRemoteSourceActionInvocationResultsCommandOutput;
    };
  };
}
