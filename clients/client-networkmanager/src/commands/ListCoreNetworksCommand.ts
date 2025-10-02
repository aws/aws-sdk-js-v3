// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListCoreNetworksRequest, ListCoreNetworksResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { de_ListCoreNetworksCommand, se_ListCoreNetworksCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCoreNetworksCommand}.
 */
export interface ListCoreNetworksCommandInput extends ListCoreNetworksRequest {}
/**
 * @public
 *
 * The output of {@link ListCoreNetworksCommand}.
 */
export interface ListCoreNetworksCommandOutput extends ListCoreNetworksResponse, __MetadataBearer {}

/**
 * <p>Returns a list of owned and shared core networks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, ListCoreNetworksCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, ListCoreNetworksCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // ListCoreNetworksRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCoreNetworksCommand(input);
 * const response = await client.send(command);
 * // { // ListCoreNetworksResponse
 * //   CoreNetworks: [ // CoreNetworkSummaryList
 * //     { // CoreNetworkSummary
 * //       CoreNetworkId: "STRING_VALUE",
 * //       CoreNetworkArn: "STRING_VALUE",
 * //       GlobalNetworkId: "STRING_VALUE",
 * //       OwnerAccountId: "STRING_VALUE",
 * //       State: "CREATING" || "UPDATING" || "AVAILABLE" || "DELETING",
 * //       Description: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCoreNetworksCommandInput - {@link ListCoreNetworksCommandInput}
 * @returns {@link ListCoreNetworksCommandOutput}
 * @see {@link ListCoreNetworksCommandInput} for command's `input` shape.
 * @see {@link ListCoreNetworksCommandOutput} for command's `response` shape.
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
export class ListCoreNetworksCommand extends $Command
  .classBuilder<
    ListCoreNetworksCommandInput,
    ListCoreNetworksCommandOutput,
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
  .s("NetworkManager", "ListCoreNetworks", {})
  .n("NetworkManagerClient", "ListCoreNetworksCommand")
  .f(void 0, void 0)
  .ser(se_ListCoreNetworksCommand)
  .de(de_ListCoreNetworksCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCoreNetworksRequest;
      output: ListCoreNetworksResponse;
    };
    sdk: {
      input: ListCoreNetworksCommandInput;
      output: ListCoreNetworksCommandOutput;
    };
  };
}
