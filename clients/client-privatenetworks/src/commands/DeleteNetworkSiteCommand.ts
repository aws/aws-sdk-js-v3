// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteNetworkSiteRequest, DeleteNetworkSiteResponse } from "../models/models_0";
import { PrivateNetworksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PrivateNetworksClient";
import { de_DeleteNetworkSiteCommand, se_DeleteNetworkSiteCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteNetworkSiteCommand}.
 */
export interface DeleteNetworkSiteCommandInput extends DeleteNetworkSiteRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNetworkSiteCommand}.
 */
export interface DeleteNetworkSiteCommandOutput extends DeleteNetworkSiteResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified network site. Return the hardware after you delete the network
 *             site. You are responsible for minimum charges. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/hardware-maintenance.html">Hardware
 *                 returns</a> in the <i>Amazon Web Services Private 5G User
 *             Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PrivateNetworksClient, DeleteNetworkSiteCommand } from "@aws-sdk/client-privatenetworks"; // ES Modules import
 * // const { PrivateNetworksClient, DeleteNetworkSiteCommand } = require("@aws-sdk/client-privatenetworks"); // CommonJS import
 * const client = new PrivateNetworksClient(config);
 * const input = { // DeleteNetworkSiteRequest
 *   networkSiteArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteNetworkSiteCommand(input);
 * const response = await client.send(command);
 * // { // DeleteNetworkSiteResponse
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
 * // };
 *
 * ```
 *
 * @param DeleteNetworkSiteCommandInput - {@link DeleteNetworkSiteCommandInput}
 * @returns {@link DeleteNetworkSiteCommandOutput}
 * @see {@link DeleteNetworkSiteCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkSiteCommandOutput} for command's `response` shape.
 * @see {@link PrivateNetworksClientResolvedConfig | config} for PrivateNetworksClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permission to perform this operation.</p>
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
 *
 * @public
 */
export class DeleteNetworkSiteCommand extends $Command
  .classBuilder<
    DeleteNetworkSiteCommandInput,
    DeleteNetworkSiteCommandOutput,
    PrivateNetworksClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PrivateNetworksClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("E5GNetworkControllerLambda", "DeleteNetworkSite", {})
  .n("PrivateNetworksClient", "DeleteNetworkSiteCommand")
  .f(void 0, void 0)
  .ser(se_DeleteNetworkSiteCommand)
  .de(de_DeleteNetworkSiteCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteNetworkSiteRequest;
      output: DeleteNetworkSiteResponse;
    };
    sdk: {
      input: DeleteNetworkSiteCommandInput;
      output: DeleteNetworkSiteCommandOutput;
    };
  };
}
