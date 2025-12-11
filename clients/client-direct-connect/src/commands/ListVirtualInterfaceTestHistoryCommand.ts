// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListVirtualInterfaceTestHistoryRequest,
  ListVirtualInterfaceTestHistoryResponse,
} from "../models/models_0";
import { ListVirtualInterfaceTestHistory } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListVirtualInterfaceTestHistoryCommand}.
 */
export interface ListVirtualInterfaceTestHistoryCommandInput extends ListVirtualInterfaceTestHistoryRequest {}
/**
 * @public
 *
 * The output of {@link ListVirtualInterfaceTestHistoryCommand}.
 */
export interface ListVirtualInterfaceTestHistoryCommandOutput
  extends ListVirtualInterfaceTestHistoryResponse,
    __MetadataBearer {}

/**
 * <p>Lists the virtual interface failover test history.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, ListVirtualInterfaceTestHistoryCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, ListVirtualInterfaceTestHistoryCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // ListVirtualInterfaceTestHistoryRequest
 *   testId: "STRING_VALUE",
 *   virtualInterfaceId: "STRING_VALUE",
 *   bgpPeers: [ // BGPPeerIdList
 *     "STRING_VALUE",
 *   ],
 *   status: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListVirtualInterfaceTestHistoryCommand(input);
 * const response = await client.send(command);
 * // { // ListVirtualInterfaceTestHistoryResponse
 * //   virtualInterfaceTestHistory: [ // VirtualInterfaceTestHistoryList
 * //     { // VirtualInterfaceTestHistory
 * //       testId: "STRING_VALUE",
 * //       virtualInterfaceId: "STRING_VALUE",
 * //       bgpPeers: [ // BGPPeerIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       status: "STRING_VALUE",
 * //       ownerAccount: "STRING_VALUE",
 * //       testDurationInMinutes: Number("int"),
 * //       startTime: new Date("TIMESTAMP"),
 * //       endTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListVirtualInterfaceTestHistoryCommandInput - {@link ListVirtualInterfaceTestHistoryCommandInput}
 * @returns {@link ListVirtualInterfaceTestHistoryCommandOutput}
 * @see {@link ListVirtualInterfaceTestHistoryCommandInput} for command's `input` shape.
 * @see {@link ListVirtualInterfaceTestHistoryCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 * @throws {@link DirectConnectClientException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link DirectConnectServerException} (server fault)
 *  <p>A server-side error occurred.</p>
 *
 * @throws {@link DirectConnectServiceException}
 * <p>Base exception class for all service exceptions from DirectConnect service.</p>
 *
 *
 * @public
 */
export class ListVirtualInterfaceTestHistoryCommand extends $Command
  .classBuilder<
    ListVirtualInterfaceTestHistoryCommandInput,
    ListVirtualInterfaceTestHistoryCommandOutput,
    DirectConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OvertureService", "ListVirtualInterfaceTestHistory", {})
  .n("DirectConnectClient", "ListVirtualInterfaceTestHistoryCommand")
  .sc(ListVirtualInterfaceTestHistory)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVirtualInterfaceTestHistoryRequest;
      output: ListVirtualInterfaceTestHistoryResponse;
    };
    sdk: {
      input: ListVirtualInterfaceTestHistoryCommandInput;
      output: ListVirtualInterfaceTestHistoryCommandOutput;
    };
  };
}
