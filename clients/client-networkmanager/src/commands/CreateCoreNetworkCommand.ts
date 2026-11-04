// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateCoreNetworkRequest, CreateCoreNetworkResponse } from "../models/models_0";
import { CreateCoreNetwork$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a core network as part of your global network, and optionally, with a core network policy.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict processing the request. Updating or deleting the resource can cause an inconsistent state.
 *
 * @throws {@link CoreNetworkPolicyException} (client fault)
 *
 * Describes a core network policy exception.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal error.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * A service limit was exceeded.
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
export class CreateCoreNetworkCommand extends command<CreateCoreNetworkCommandInput, CreateCoreNetworkCommandOutput>(
  _ep0,
  _mw0,
  "CreateCoreNetwork",
  CreateCoreNetwork$
) {
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
