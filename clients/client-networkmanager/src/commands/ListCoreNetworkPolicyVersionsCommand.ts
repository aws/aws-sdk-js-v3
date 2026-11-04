// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCoreNetworkPolicyVersionsRequest, ListCoreNetworkPolicyVersionsResponse } from "../models/models_0";
import { ListCoreNetworkPolicyVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCoreNetworkPolicyVersionsCommand}.
 */
export interface ListCoreNetworkPolicyVersionsCommandInput extends ListCoreNetworkPolicyVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListCoreNetworkPolicyVersionsCommand}.
 */
export interface ListCoreNetworkPolicyVersionsCommandOutput extends ListCoreNetworkPolicyVersionsResponse, __MetadataBearer {}

/**
 * Returns a list of core network policy versions.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, ListCoreNetworkPolicyVersionsCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, ListCoreNetworkPolicyVersionsCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // ListCoreNetworkPolicyVersionsRequest
 *   CoreNetworkId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCoreNetworkPolicyVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListCoreNetworkPolicyVersionsResponse
 * //   CoreNetworkPolicyVersions: [ // CoreNetworkPolicyVersionList
 * //     { // CoreNetworkPolicyVersion
 * //       CoreNetworkId: "STRING_VALUE",
 * //       PolicyVersionId: Number("int"),
 * //       Alias: "LIVE" || "LATEST",
 * //       Description: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       ChangeSetState: "PENDING_GENERATION" || "FAILED_GENERATION" || "READY_TO_EXECUTE" || "EXECUTING" || "EXECUTION_SUCCEEDED" || "OUT_OF_DATE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCoreNetworkPolicyVersionsCommandInput - {@link ListCoreNetworkPolicyVersionsCommandInput}
 * @returns {@link ListCoreNetworkPolicyVersionsCommandOutput}
 * @see {@link ListCoreNetworkPolicyVersionsCommandInput} for command's `input` shape.
 * @see {@link ListCoreNetworkPolicyVersionsCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource could not be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints.
 *
 * @throws {@link NetworkManagerServiceException}
 *
 * Base exception class for all service exceptions from NetworkManager service.
 *
 * @public
 */
export class ListCoreNetworkPolicyVersionsCommand extends command<ListCoreNetworkPolicyVersionsCommandInput, ListCoreNetworkPolicyVersionsCommandOutput>(
  _ep0,
  _mw0,
  "ListCoreNetworkPolicyVersions",
  ListCoreNetworkPolicyVersions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCoreNetworkPolicyVersionsRequest;
      output: ListCoreNetworkPolicyVersionsResponse;
    };
    sdk: {
      input: ListCoreNetworkPolicyVersionsCommandInput;
      output: ListCoreNetworkPolicyVersionsCommandOutput;
    };
  };
}
