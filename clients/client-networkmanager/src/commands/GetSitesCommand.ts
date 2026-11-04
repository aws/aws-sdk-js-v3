// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSitesRequest, GetSitesResponse } from "../models/models_0";
import { GetSites$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSitesCommand}.
 */
export interface GetSitesCommandInput extends GetSitesRequest {}
/**
 * @public
 *
 * The output of {@link GetSitesCommand}.
 */
export interface GetSitesCommandOutput extends GetSitesResponse, __MetadataBearer {}

/**
 * Gets information about one or more of your sites in a global network.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetSitesCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetSitesCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // GetSitesRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   SiteIds: [ // SiteIdList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetSitesCommand(input);
 * const response = await client.send(command);
 * // { // GetSitesResponse
 * //   Sites: [ // SiteList
 * //     { // Site
 * //       SiteId: "STRING_VALUE",
 * //       SiteArn: "STRING_VALUE",
 * //       GlobalNetworkId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Location: { // Location
 * //         Address: "STRING_VALUE",
 * //         Latitude: "STRING_VALUE",
 * //         Longitude: "STRING_VALUE",
 * //       },
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       State: "PENDING" || "AVAILABLE" || "DELETING" || "UPDATING",
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
 * @param GetSitesCommandInput - {@link GetSitesCommandInput}
 * @returns {@link GetSitesCommandOutput}
 * @see {@link GetSitesCommandInput} for command's `input` shape.
 * @see {@link GetSitesCommandOutput} for command's `response` shape.
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
export class GetSitesCommand extends command<GetSitesCommandInput, GetSitesCommandOutput>(
  _ep0,
  _mw0,
  "GetSites",
  GetSites$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSitesRequest;
      output: GetSitesResponse;
    };
    sdk: {
      input: GetSitesCommandInput;
      output: GetSitesCommandOutput;
    };
  };
}
