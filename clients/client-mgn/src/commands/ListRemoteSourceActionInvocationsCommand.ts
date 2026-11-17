// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListRemoteSourceActionInvocationsRequest,
  ListRemoteSourceActionInvocationsResponse,
} from "../models/models_0";
import { ListRemoteSourceActionInvocations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRemoteSourceActionInvocationsCommand}.
 */
export interface ListRemoteSourceActionInvocationsCommandInput extends ListRemoteSourceActionInvocationsRequest {}
/**
 * @public
 *
 * The output of {@link ListRemoteSourceActionInvocationsCommand}.
 */
export interface ListRemoteSourceActionInvocationsCommandOutput extends ListRemoteSourceActionInvocationsResponse, __MetadataBearer {}

/**
 * <p>Lists the invocations of a source action job, one for each source server and source action, with optional filtering.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, ListRemoteSourceActionInvocationsCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, ListRemoteSourceActionInvocationsCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // ListRemoteSourceActionInvocationsRequest
 *   remoteSourceActionJobID: "STRING_VALUE", // required
 *   filters: { // ListRemoteSourceActionInvocationsRequestFilters
 *     sourceServerArns: [ // SourceServerArnsFilter
 *       "STRING_VALUE",
 *     ],
 *     remoteSourceActionArns: [ // RemoteSourceActionArnsFilter
 *       "STRING_VALUE",
 *     ],
 *     statuses: [ // RemoteSourceActionInvocationStatusesFilter
 *       "STRING_VALUE",
 *     ],
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   accountID: "STRING_VALUE",
 * };
 * const command = new ListRemoteSourceActionInvocationsCommand(input);
 * const response = await client.send(command);
 * // { // ListRemoteSourceActionInvocationsResponse
 * //   items: [ // RemoteSourceActionInvocationsList
 * //     { // RemoteSourceActionInvocation
 * //       sourceServerArn: "STRING_VALUE",
 * //       remoteSourceActionArn: "STRING_VALUE",
 * //       ssmCommandInvocationID: "STRING_VALUE",
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
 * @param ListRemoteSourceActionInvocationsCommandInput - {@link ListRemoteSourceActionInvocationsCommandInput}
 * @returns {@link ListRemoteSourceActionInvocationsCommandOutput}
 * @see {@link ListRemoteSourceActionInvocationsCommandInput} for command's `input` shape.
 * @see {@link ListRemoteSourceActionInvocationsCommandOutput} for command's `response` shape.
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
export class ListRemoteSourceActionInvocationsCommand extends command<ListRemoteSourceActionInvocationsCommandInput, ListRemoteSourceActionInvocationsCommandOutput>(
  _ep0,
  _mw0,
  "ListRemoteSourceActionInvocations",
  ListRemoteSourceActionInvocations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRemoteSourceActionInvocationsRequest;
      output: ListRemoteSourceActionInvocationsResponse;
    };
    sdk: {
      input: ListRemoteSourceActionInvocationsCommandInput;
      output: ListRemoteSourceActionInvocationsCommandOutput;
    };
  };
}
