// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSiteRequest, CreateSiteResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { CreateSite } from "../schemas/schemas_6_Site";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSiteCommand}.
 */
export interface CreateSiteCommandInput extends CreateSiteRequest {}
/**
 * @public
 *
 * The output of {@link CreateSiteCommand}.
 */
export interface CreateSiteCommandOutput extends CreateSiteResponse, __MetadataBearer {}

/**
 * <p>Creates a new site in a global network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, CreateSiteCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, CreateSiteCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // CreateSiteRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Location: { // Location
 *     Address: "STRING_VALUE",
 *     Latitude: "STRING_VALUE",
 *     Longitude: "STRING_VALUE",
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateSiteCommand(input);
 * const response = await client.send(command);
 * // { // CreateSiteResponse
 * //   Site: { // Site
 * //     SiteId: "STRING_VALUE",
 * //     SiteArn: "STRING_VALUE",
 * //     GlobalNetworkId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Location: { // Location
 * //       Address: "STRING_VALUE",
 * //       Latitude: "STRING_VALUE",
 * //       Longitude: "STRING_VALUE",
 * //     },
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     State: "PENDING" || "AVAILABLE" || "DELETING" || "UPDATING",
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
 * @param CreateSiteCommandInput - {@link CreateSiteCommandInput}
 * @returns {@link CreateSiteCommandOutput}
 * @see {@link CreateSiteCommandInput} for command's `input` shape.
 * @see {@link CreateSiteCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict processing the request. Updating or deleting the resource can
 *             cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
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
export class CreateSiteCommand extends $Command
  .classBuilder<
    CreateSiteCommandInput,
    CreateSiteCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkManager", "CreateSite", {})
  .n("NetworkManagerClient", "CreateSiteCommand")
  .sc(CreateSite)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSiteRequest;
      output: CreateSiteResponse;
    };
    sdk: {
      input: CreateSiteCommandInput;
      output: CreateSiteCommandOutput;
    };
  };
}
