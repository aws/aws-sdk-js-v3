// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateNetworkSitePlanRequest,
  UpdateNetworkSiteResponse,
  UpdateNetworkSiteResponseFilterSensitiveLog,
} from "../models/models_0";
import { PrivateNetworksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PrivateNetworksClient";
import { de_UpdateNetworkSitePlanCommand, se_UpdateNetworkSitePlanCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateNetworkSitePlanCommand}.
 */
export interface UpdateNetworkSitePlanCommandInput extends UpdateNetworkSitePlanRequest {}
/**
 * @public
 *
 * The output of {@link UpdateNetworkSitePlanCommand}.
 */
export interface UpdateNetworkSitePlanCommandOutput extends UpdateNetworkSiteResponse, __MetadataBearer {}

/**
 * <p>Updates the specified network site plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PrivateNetworksClient, UpdateNetworkSitePlanCommand } from "@aws-sdk/client-privatenetworks"; // ES Modules import
 * // const { PrivateNetworksClient, UpdateNetworkSitePlanCommand } = require("@aws-sdk/client-privatenetworks"); // CommonJS import
 * const client = new PrivateNetworksClient(config);
 * const input = { // UpdateNetworkSitePlanRequest
 *   networkSiteArn: "STRING_VALUE", // required
 *   pendingPlan: { // SitePlan
 *     resourceDefinitions: [ // NetworkResourceDefinitions
 *       { // NetworkResourceDefinition
 *         type: "STRING_VALUE", // required
 *         options: [ // Options
 *           { // NameValuePair
 *             name: "STRING_VALUE", // required
 *             value: "STRING_VALUE",
 *           },
 *         ],
 *         count: Number("int"), // required
 *       },
 *     ],
 *     options: [
 *       {
 *         name: "STRING_VALUE", // required
 *         value: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateNetworkSitePlanCommand(input);
 * const response = await client.send(command);
 * // { // UpdateNetworkSiteResponse
 * //   networkSite: { // NetworkSite
 * //     networkSiteArn: "STRING_VALUE", // required
 * //     networkSiteName: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     status: "STRING_VALUE", // required
 * //     statusReason: "STRING_VALUE",
 * //     networkArn: "STRING_VALUE", // required
 * //     pendingPlan: { // SitePlan
 * //       resourceDefinitions: [ // NetworkResourceDefinitions
 * //         { // NetworkResourceDefinition
 * //           type: "STRING_VALUE", // required
 * //           options: [ // Options
 * //             { // NameValuePair
 * //               name: "STRING_VALUE", // required
 * //               value: "STRING_VALUE",
 * //             },
 * //           ],
 * //           count: Number("int"), // required
 * //         },
 * //       ],
 * //       options: [
 * //         {
 * //           name: "STRING_VALUE", // required
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     currentPlan: {
 * //       resourceDefinitions: [
 * //         {
 * //           type: "STRING_VALUE", // required
 * //           options: [
 * //             {
 * //               name: "STRING_VALUE", // required
 * //               value: "STRING_VALUE",
 * //             },
 * //           ],
 * //           count: Number("int"), // required
 * //         },
 * //       ],
 * //       options: [
 * //         {
 * //           name: "STRING_VALUE", // required
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     createdAt: new Date("TIMESTAMP"),
 * //     availabilityZone: "STRING_VALUE",
 * //     availabilityZoneId: "STRING_VALUE",
 * //   },
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateNetworkSitePlanCommandInput - {@link UpdateNetworkSitePlanCommandInput}
 * @returns {@link UpdateNetworkSitePlanCommandOutput}
 * @see {@link UpdateNetworkSitePlanCommandInput} for command's `input` shape.
 * @see {@link UpdateNetworkSitePlanCommandOutput} for command's `response` shape.
 * @see {@link PrivateNetworksClientResolvedConfig | config} for PrivateNetworksClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Information about an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation.</p>
 *
 * @throws {@link PrivateNetworksServiceException}
 * <p>Base exception class for all service exceptions from PrivateNetworks service.</p>
 *
 * @public
 */
export class UpdateNetworkSitePlanCommand extends $Command
  .classBuilder<
    UpdateNetworkSitePlanCommandInput,
    UpdateNetworkSitePlanCommandOutput,
    PrivateNetworksClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: PrivateNetworksClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("E5GNetworkControllerLambda", "UpdateNetworkSitePlan", {})
  .n("PrivateNetworksClient", "UpdateNetworkSitePlanCommand")
  .f(void 0, UpdateNetworkSiteResponseFilterSensitiveLog)
  .ser(se_UpdateNetworkSitePlanCommand)
  .de(de_UpdateNetworkSitePlanCommand)
  .build() {}
