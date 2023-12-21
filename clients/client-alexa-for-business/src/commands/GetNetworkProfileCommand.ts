// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetNetworkProfileRequest,
  GetNetworkProfileResponse,
  GetNetworkProfileResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetNetworkProfileCommand, se_GetNetworkProfileCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetNetworkProfileCommand}.
 */
export interface GetNetworkProfileCommandInput extends GetNetworkProfileRequest {}
/**
 * @public
 *
 * The output of {@link GetNetworkProfileCommand}.
 */
export interface GetNetworkProfileCommandOutput extends GetNetworkProfileResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Gets the network profile details by the network profile ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, GetNetworkProfileCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, GetNetworkProfileCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // GetNetworkProfileRequest
 *   NetworkProfileArn: "STRING_VALUE", // required
 * };
 * const command = new GetNetworkProfileCommand(input);
 * const response = await client.send(command);
 * // { // GetNetworkProfileResponse
 * //   NetworkProfile: { // NetworkProfile
 * //     NetworkProfileArn: "STRING_VALUE",
 * //     NetworkProfileName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Ssid: "STRING_VALUE",
 * //     SecurityType: "OPEN" || "WEP" || "WPA_PSK" || "WPA2_PSK" || "WPA2_ENTERPRISE",
 * //     EapMethod: "EAP_TLS",
 * //     CurrentPassword: "STRING_VALUE",
 * //     NextPassword: "STRING_VALUE",
 * //     CertificateAuthorityArn: "STRING_VALUE",
 * //     TrustAnchors: [ // TrustAnchorList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetNetworkProfileCommandInput - {@link GetNetworkProfileCommandInput}
 * @returns {@link GetNetworkProfileCommandOutput}
 * @see {@link GetNetworkProfileCommandInput} for command's `input` shape.
 * @see {@link GetNetworkProfileCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link InvalidSecretsManagerResourceException} (client fault)
 *  <p>A password in SecretsManager is in an invalid state.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class GetNetworkProfileCommand extends $Command
  .classBuilder<
    GetNetworkProfileCommandInput,
    GetNetworkProfileCommandOutput,
    AlexaForBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any /*Command*/, Command: any /*static*/, config: AlexaForBusinessClientResolvedConfig) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AlexaForBusiness", "GetNetworkProfile", {})
  .n("AlexaForBusinessClient", "GetNetworkProfileCommand")
  .f(void 0, GetNetworkProfileResponseFilterSensitiveLog)
  .ser(se_GetNetworkProfileCommand)
  .de(de_GetNetworkProfileCommand)
  .build() {}
