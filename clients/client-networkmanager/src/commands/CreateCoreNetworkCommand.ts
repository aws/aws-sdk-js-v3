// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateCoreNetworkRequest, CreateCoreNetworkResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { de_CreateCoreNetworkCommand, se_CreateCoreNetworkCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCoreNetworkCommand}.
 */
export interface CreateCoreNetworkCommandInput extends CreateCoreNetworkRequest {}
/**
 * @public
 *
 * The output of {@link CreateCoreNetworkCommand}.
 */
export interface CreateCoreNetworkCommandOutput extends CreateCoreNetworkResponse, __MetadataBearer {}

/**
 * <p>Creates a core network as part of your global network, and optionally, with a core network policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, CreateCoreNetworkCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, CreateCoreNetworkCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // CreateCoreNetworkRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   PolicyDocument: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateCoreNetworkCommand(input);
 * const response = await client.send(command);
 * // { // CreateCoreNetworkResponse
 * //   CoreNetwork: { // CoreNetwork
 * //     GlobalNetworkId: "STRING_VALUE",
 * //     CoreNetworkId: "STRING_VALUE",
 * //     CoreNetworkArn: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     State: "CREATING" || "UPDATING" || "AVAILABLE" || "DELETING",
 * //     Segments: [ // CoreNetworkSegmentList
 * //       { // CoreNetworkSegment
 * //         Name: "STRING_VALUE",
 * //         EdgeLocations: [ // ExternalRegionCodeList
 * //           "STRING_VALUE",
 * //         ],
 * //         SharedSegments: [ // ConstrainedStringList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     NetworkFunctionGroups: [ // CoreNetworkNetworkFunctionGroupList
 * //       { // CoreNetworkNetworkFunctionGroup
 * //         Name: "STRING_VALUE",
 * //         EdgeLocations: [
 * //           "STRING_VALUE",
 * //         ],
 * //         Segments: { // ServiceInsertionSegments
 * //           SendVia: [
 * //             "STRING_VALUE",
 * //           ],
 * //           SendTo: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     ],
 * //     Edges: [ // CoreNetworkEdgeList
 * //       { // CoreNetworkEdge
 * //         EdgeLocation: "STRING_VALUE",
 * //         Asn: Number("long"),
 * //         InsideCidrBlocks: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateCoreNetworkCommandInput - {@link CreateCoreNetworkCommandInput}
 * @returns {@link CreateCoreNetworkCommandOutput}
 * @see {@link CreateCoreNetworkCommandInput} for command's `input` shape.
 * @see {@link CreateCoreNetworkCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict processing the request. Updating or deleting the resource can
 *             cause an inconsistent state.</p>
 *
 * @throws {@link CoreNetworkPolicyException} (client fault)
 *  <p>Describes a core network policy exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal error.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A service limit was exceeded.</p>
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
export class CreateCoreNetworkCommand extends $Command
  .classBuilder<
    CreateCoreNetworkCommandInput,
    CreateCoreNetworkCommandOutput,
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
  .s("NetworkManager", "CreateCoreNetwork", {})
  .n("NetworkManagerClient", "CreateCoreNetworkCommand")
  .f(void 0, void 0)
  .ser(se_CreateCoreNetworkCommand)
  .de(de_CreateCoreNetworkCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCoreNetworkRequest;
      output: CreateCoreNetworkResponse;
    };
    sdk: {
      input: CreateCoreNetworkCommandInput;
      output: CreateCoreNetworkCommandOutput;
    };
  };
}
