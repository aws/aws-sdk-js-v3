// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListCoreNetworkPolicyVersionsRequest, ListCoreNetworkPolicyVersionsResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  de_ListCoreNetworkPolicyVersionsCommand,
  se_ListCoreNetworkPolicyVersionsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface ListCoreNetworkPolicyVersionsCommandOutput
  extends ListCoreNetworkPolicyVersionsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of core network policy versions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, ListCoreNetworkPolicyVersionsCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, ListCoreNetworkPolicyVersionsCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints.</p>
 *
 * @throws {@link NetworkManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkManager service.</p>
 *
 *
 * @public
 */
export class ListCoreNetworkPolicyVersionsCommand extends $Command
  .classBuilder<
    ListCoreNetworkPolicyVersionsCommandInput,
    ListCoreNetworkPolicyVersionsCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("NetworkManager", "ListCoreNetworkPolicyVersions", {})
  .n("NetworkManagerClient", "ListCoreNetworkPolicyVersionsCommand")
  .f(void 0, void 0)
  .ser(se_ListCoreNetworkPolicyVersionsCommand)
  .de(de_ListCoreNetworkPolicyVersionsCommand)
  .build() {
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
