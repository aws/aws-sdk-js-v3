// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ConfigureAccessPointRequest,
  ConfigureAccessPointRequestFilterSensitiveLog,
  ConfigureAccessPointResponse,
  ConfigureAccessPointResponseFilterSensitiveLog,
} from "../models/models_0";
import { PrivateNetworksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PrivateNetworksClient";
import { de_ConfigureAccessPointCommand, se_ConfigureAccessPointCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ConfigureAccessPointCommand}.
 */
export interface ConfigureAccessPointCommandInput extends ConfigureAccessPointRequest {}
/**
 * @public
 *
 * The output of {@link ConfigureAccessPointCommand}.
 */
export interface ConfigureAccessPointCommandOutput extends ConfigureAccessPointResponse, __MetadataBearer {}

/**
 * <p>Configures the specified network resource. </p>
 *          <p> Use this action to specify the geographic position of the hardware. You must provide
 *             Certified Professional Installer (CPI) credentials in the request so that we can obtain
 *             spectrum grants. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/radio-units.html">Radio units</a> in the
 *                     <i>Amazon Web Services Private 5G User Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PrivateNetworksClient, ConfigureAccessPointCommand } from "@aws-sdk/client-privatenetworks"; // ES Modules import
 * // const { PrivateNetworksClient, ConfigureAccessPointCommand } = require("@aws-sdk/client-privatenetworks"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new PrivateNetworksClient(config);
 * const input = { // ConfigureAccessPointRequest
 *   accessPointArn: "STRING_VALUE", // required
 *   position: { // Position
 *     latitude: Number("double"),
 *     longitude: Number("double"),
 *     elevation: Number("double"),
 *     elevationUnit: "STRING_VALUE",
 *     elevationReference: "STRING_VALUE",
 *   },
 *   cpiUsername: "STRING_VALUE",
 *   cpiUserId: "STRING_VALUE",
 *   cpiUserPassword: "STRING_VALUE",
 *   cpiSecretKey: "STRING_VALUE",
 * };
 * const command = new ConfigureAccessPointCommand(input);
 * const response = await client.send(command);
 * // { // ConfigureAccessPointResponse
 * //   accessPoint: { // NetworkResource
 * //     networkResourceArn: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     type: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     statusReason: "STRING_VALUE",
 * //     vendor: "STRING_VALUE",
 * //     model: "STRING_VALUE",
 * //     serialNumber: "STRING_VALUE",
 * //     health: "STRING_VALUE",
 * //     networkArn: "STRING_VALUE",
 * //     networkSiteArn: "STRING_VALUE",
 * //     orderArn: "STRING_VALUE",
 * //     attributes: [ // NameValuePairs
 * //       { // NameValuePair
 * //         name: "STRING_VALUE", // required
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     position: { // Position
 * //       latitude: Number("double"),
 * //       longitude: Number("double"),
 * //       elevation: Number("double"),
 * //       elevationUnit: "STRING_VALUE",
 * //       elevationReference: "STRING_VALUE",
 * //     },
 * //     createdAt: new Date("TIMESTAMP"),
 * //     returnInformation: { // ReturnInformation
 * //       shippingAddress: { // Address
 * //         city: "STRING_VALUE", // required
 * //         company: "STRING_VALUE",
 * //         country: "STRING_VALUE", // required
 * //         name: "STRING_VALUE", // required
 * //         phoneNumber: "STRING_VALUE",
 * //         postalCode: "STRING_VALUE", // required
 * //         stateOrProvince: "STRING_VALUE", // required
 * //         street1: "STRING_VALUE", // required
 * //         street2: "STRING_VALUE",
 * //         street3: "STRING_VALUE",
 * //         emailAddress: "STRING_VALUE",
 * //       },
 * //       returnReason: "STRING_VALUE",
 * //       replacementOrderArn: "STRING_VALUE",
 * //       shippingLabel: "STRING_VALUE",
 * //     },
 * //     commitmentInformation: { // CommitmentInformation
 * //       commitmentConfiguration: { // CommitmentConfiguration
 * //         commitmentLength: "STRING_VALUE", // required
 * //         automaticRenewal: true || false, // required
 * //       },
 * //       startAt: new Date("TIMESTAMP"),
 * //       expiresOn: new Date("TIMESTAMP"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param ConfigureAccessPointCommandInput - {@link ConfigureAccessPointCommandInput}
 * @returns {@link ConfigureAccessPointCommandOutput}
 * @see {@link ConfigureAccessPointCommandInput} for command's `input` shape.
 * @see {@link ConfigureAccessPointCommandOutput} for command's `response` shape.
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
export class ConfigureAccessPointCommand extends $Command
  .classBuilder<
    ConfigureAccessPointCommandInput,
    ConfigureAccessPointCommandOutput,
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
  .s("E5GNetworkControllerLambda", "ConfigureAccessPoint", {})
  .n("PrivateNetworksClient", "ConfigureAccessPointCommand")
  .f(ConfigureAccessPointRequestFilterSensitiveLog, ConfigureAccessPointResponseFilterSensitiveLog)
  .ser(se_ConfigureAccessPointCommand)
  .de(de_ConfigureAccessPointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ConfigureAccessPointRequest;
      output: ConfigureAccessPointResponse;
    };
    sdk: {
      input: ConfigureAccessPointCommandInput;
      output: ConfigureAccessPointCommandOutput;
    };
  };
}
