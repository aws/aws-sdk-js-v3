// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRemoteSourceActionsRequest, ListRemoteSourceActionsResponse } from "../models/models_0";
import { ListRemoteSourceActions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRemoteSourceActionsCommand}.
 */
export interface ListRemoteSourceActionsCommandInput extends ListRemoteSourceActionsRequest {}
/**
 * @public
 *
 * The output of {@link ListRemoteSourceActionsCommand}.
 */
export interface ListRemoteSourceActionsCommandOutput extends ListRemoteSourceActionsResponse, __MetadataBearer {}

/**
 * <p>Lists the source actions in the account, with optional filtering.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, ListRemoteSourceActionsCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, ListRemoteSourceActionsCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // ListRemoteSourceActionsRequest
 *   filters: { // ListRemoteSourceActionsRequestFilters
 *     remoteSourceActionIDs: [ // RemoteSourceActionIDsFilter
 *       "STRING_VALUE",
 *     ],
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   accountID: "STRING_VALUE",
 * };
 * const command = new ListRemoteSourceActionsCommand(input);
 * const response = await client.send(command);
 * // { // ListRemoteSourceActionsResponse
 * //   items: [ // RemoteSourceActionsList
 * //     { // RemoteSourceAction
 * //       remoteSourceActionID: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       ssmParameterName: "STRING_VALUE",
 * //       timeoutSeconds: Number("int"),
 * //       operatingSystem: "STRING_VALUE",
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
 * @param ListRemoteSourceActionsCommandInput - {@link ListRemoteSourceActionsCommandInput}
 * @returns {@link ListRemoteSourceActionsCommandOutput}
 * @see {@link ListRemoteSourceActionsCommandInput} for command's `input` shape.
 * @see {@link ListRemoteSourceActionsCommandOutput} for command's `response` shape.
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
export class ListRemoteSourceActionsCommand extends command<ListRemoteSourceActionsCommandInput, ListRemoteSourceActionsCommandOutput>(
  _ep0,
  _mw0,
  "ListRemoteSourceActions",
  ListRemoteSourceActions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRemoteSourceActionsRequest;
      output: ListRemoteSourceActionsResponse;
    };
    sdk: {
      input: ListRemoteSourceActionsCommandInput;
      output: ListRemoteSourceActionsCommandOutput;
    };
  };
}
