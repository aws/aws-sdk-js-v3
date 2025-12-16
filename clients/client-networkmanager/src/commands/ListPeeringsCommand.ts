// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListPeeringsRequest, ListPeeringsResponse } from "../models/models_0";
import type {
  NetworkManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkManagerClient";
import { ListPeerings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPeeringsCommand}.
 */
export interface ListPeeringsCommandInput extends ListPeeringsRequest {}
/**
 * @public
 *
 * The output of {@link ListPeeringsCommand}.
 */
export interface ListPeeringsCommandOutput extends ListPeeringsResponse, __MetadataBearer {}

/**
 * <p>Lists the peerings for a core network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, ListPeeringsCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, ListPeeringsCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // ListPeeringsRequest
 *   CoreNetworkId: "STRING_VALUE",
 *   PeeringType: "TRANSIT_GATEWAY",
 *   EdgeLocation: "STRING_VALUE",
 *   State: "CREATING" || "FAILED" || "AVAILABLE" || "DELETING",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListPeeringsCommand(input);
 * const response = await client.send(command);
 * // { // ListPeeringsResponse
 * //   Peerings: [ // PeeringList
 * //     { // Peering
 * //       CoreNetworkId: "STRING_VALUE",
 * //       CoreNetworkArn: "STRING_VALUE",
 * //       PeeringId: "STRING_VALUE",
 * //       OwnerAccountId: "STRING_VALUE",
 * //       PeeringType: "TRANSIT_GATEWAY",
 * //       State: "CREATING" || "FAILED" || "AVAILABLE" || "DELETING",
 * //       EdgeLocation: "STRING_VALUE",
 * //       ResourceArn: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       LastModificationErrors: [ // PeeringErrorList
 * //         { // PeeringError
 * //           Code: "TRANSIT_GATEWAY_NOT_FOUND" || "TRANSIT_GATEWAY_PEERS_LIMIT_EXCEEDED" || "MISSING_PERMISSIONS" || "INTERNAL_ERROR" || "EDGE_LOCATION_PEER_DUPLICATE" || "INVALID_TRANSIT_GATEWAY_STATE",
 * //           Message: "STRING_VALUE",
 * //           ResourceArn: "STRING_VALUE",
 * //           RequestId: "STRING_VALUE",
 * //           MissingPermissionsContext: { // PermissionsErrorContext
 * //             MissingPermission: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPeeringsCommandInput - {@link ListPeeringsCommandInput}
 * @returns {@link ListPeeringsCommandOutput}
 * @see {@link ListPeeringsCommandInput} for command's `input` shape.
 * @see {@link ListPeeringsCommandOutput} for command's `response` shape.
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
export class ListPeeringsCommand extends $Command
  .classBuilder<
    ListPeeringsCommandInput,
    ListPeeringsCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkManager", "ListPeerings", {})
  .n("NetworkManagerClient", "ListPeeringsCommand")
  .sc(ListPeerings$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPeeringsRequest;
      output: ListPeeringsResponse;
    };
    sdk: {
      input: ListPeeringsCommandInput;
      output: ListPeeringsCommandOutput;
    };
  };
}
