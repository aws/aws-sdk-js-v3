// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteCoreNetworkRequest, DeleteCoreNetworkResponse } from "../models/models_0";
import { DeleteCoreNetwork$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteCoreNetworkCommand}.
 */
export interface DeleteCoreNetworkCommandInput extends DeleteCoreNetworkRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCoreNetworkCommand}.
 */
export interface DeleteCoreNetworkCommandOutput extends DeleteCoreNetworkResponse, __MetadataBearer {}

/**
 * Deletes a core network along with all core network policies. This can only be done if there are no attachments on a core network.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DeleteCoreNetworkCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DeleteCoreNetworkCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // DeleteCoreNetworkRequest
 *   CoreNetworkId: "STRING_VALUE", // required
 * };
 * const command = new DeleteCoreNetworkCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCoreNetworkResponse
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
 * @param DeleteCoreNetworkCommandInput - {@link DeleteCoreNetworkCommandInput}
 * @returns {@link DeleteCoreNetworkCommandOutput}
 * @see {@link DeleteCoreNetworkCommandInput} for command's `input` shape.
 * @see {@link DeleteCoreNetworkCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict processing the request. Updating or deleting the resource can cause an inconsistent state.
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
export class DeleteCoreNetworkCommand extends command<DeleteCoreNetworkCommandInput, DeleteCoreNetworkCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCoreNetwork",
  DeleteCoreNetwork$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCoreNetworkRequest;
      output: DeleteCoreNetworkResponse;
    };
    sdk: {
      input: DeleteCoreNetworkCommandInput;
      output: DeleteCoreNetworkCommandOutput;
    };
  };
}
