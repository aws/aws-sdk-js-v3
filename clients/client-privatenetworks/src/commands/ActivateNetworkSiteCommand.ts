// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ActivateNetworkSiteRequest,
  ActivateNetworkSiteRequestFilterSensitiveLog,
  ActivateNetworkSiteResponse,
} from "../models/models_0";
import { PrivateNetworksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PrivateNetworksClient";
import { de_ActivateNetworkSiteCommand, se_ActivateNetworkSiteCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ActivateNetworkSiteCommand}.
 */
export interface ActivateNetworkSiteCommandInput extends ActivateNetworkSiteRequest {}
/**
 * @public
 *
 * The output of {@link ActivateNetworkSiteCommand}.
 */
export interface ActivateNetworkSiteCommandOutput extends ActivateNetworkSiteResponse, __MetadataBearer {}

/**
 * <p>Activates the specified network site.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PrivateNetworksClient, ActivateNetworkSiteCommand } from "@aws-sdk/client-privatenetworks"; // ES Modules import
 * // const { PrivateNetworksClient, ActivateNetworkSiteCommand } = require("@aws-sdk/client-privatenetworks"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new PrivateNetworksClient(config);
 * const input = { // ActivateNetworkSiteRequest
 *   networkSiteArn: "STRING_VALUE", // required
 *   shippingAddress: { // Address
 *     city: "STRING_VALUE", // required
 *     company: "STRING_VALUE",
 *     country: "STRING_VALUE", // required
 *     name: "STRING_VALUE", // required
 *     phoneNumber: "STRING_VALUE",
 *     postalCode: "STRING_VALUE", // required
 *     stateOrProvince: "STRING_VALUE", // required
 *     street1: "STRING_VALUE", // required
 *     street2: "STRING_VALUE",
 *     street3: "STRING_VALUE",
 *     emailAddress: "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 *   commitmentConfiguration: { // CommitmentConfiguration
 *     commitmentLength: "STRING_VALUE", // required
 *     automaticRenewal: true || false, // required
 *   },
 * };
 * const command = new ActivateNetworkSiteCommand(input);
 * const response = await client.send(command);
 * // { // ActivateNetworkSiteResponse
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
 * @param ActivateNetworkSiteCommandInput - {@link ActivateNetworkSiteCommandInput}
 * @returns {@link ActivateNetworkSiteCommandOutput}
 * @see {@link ActivateNetworkSiteCommandInput} for command's `input` shape.
 * @see {@link ActivateNetworkSiteCommandOutput} for command's `response` shape.
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
export class ActivateNetworkSiteCommand extends $Command
  .classBuilder<
    ActivateNetworkSiteCommandInput,
    ActivateNetworkSiteCommandOutput,
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
  .s("E5GNetworkControllerLambda", "ActivateNetworkSite", {})
  .n("PrivateNetworksClient", "ActivateNetworkSiteCommand")
  .f(ActivateNetworkSiteRequestFilterSensitiveLog, void 0)
  .ser(se_ActivateNetworkSiteCommand)
  .de(de_ActivateNetworkSiteCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ActivateNetworkSiteRequest;
      output: ActivateNetworkSiteResponse;
    };
    sdk: {
      input: ActivateNetworkSiteCommandInput;
      output: ActivateNetworkSiteCommandOutput;
    };
  };
}
