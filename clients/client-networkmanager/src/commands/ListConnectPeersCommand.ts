// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListConnectPeersRequest, ListConnectPeersResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { ListConnectPeers } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListConnectPeersCommand}.
 */
export interface ListConnectPeersCommandInput extends ListConnectPeersRequest {}
/**
 * @public
 *
 * The output of {@link ListConnectPeersCommand}.
 */
export interface ListConnectPeersCommandOutput extends ListConnectPeersResponse, __MetadataBearer {}

/**
 * <p>Returns a list of core network Connect peers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, ListConnectPeersCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, ListConnectPeersCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // ListConnectPeersRequest
 *   CoreNetworkId: "STRING_VALUE",
 *   ConnectAttachmentId: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListConnectPeersCommand(input);
 * const response = await client.send(command);
 * // { // ListConnectPeersResponse
 * //   ConnectPeers: [ // ConnectPeerSummaryList
 * //     { // ConnectPeerSummary
 * //       CoreNetworkId: "STRING_VALUE",
 * //       ConnectAttachmentId: "STRING_VALUE",
 * //       ConnectPeerId: "STRING_VALUE",
 * //       EdgeLocation: "STRING_VALUE",
 * //       ConnectPeerState: "CREATING" || "FAILED" || "AVAILABLE" || "DELETING",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       SubnetArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConnectPeersCommandInput - {@link ListConnectPeersCommandInput}
 * @returns {@link ListConnectPeersCommandOutput}
 * @see {@link ListConnectPeersCommandInput} for command's `input` shape.
 * @see {@link ListConnectPeersCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal error.</p>
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
export class ListConnectPeersCommand extends $Command
  .classBuilder<
    ListConnectPeersCommandInput,
    ListConnectPeersCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkManager", "ListConnectPeers", {})
  .n("NetworkManagerClient", "ListConnectPeersCommand")
  .sc(ListConnectPeers)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConnectPeersRequest;
      output: ListConnectPeersResponse;
    };
    sdk: {
      input: ListConnectPeersCommandInput;
      output: ListConnectPeersCommandOutput;
    };
  };
}
