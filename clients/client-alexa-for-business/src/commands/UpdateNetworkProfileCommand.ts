// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateNetworkProfileRequest,
  UpdateNetworkProfileRequestFilterSensitiveLog,
  UpdateNetworkProfileResponse,
} from "../models/models_0";
import { de_UpdateNetworkProfileCommand, se_UpdateNetworkProfileCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateNetworkProfileCommand}.
 */
export interface UpdateNetworkProfileCommandInput extends UpdateNetworkProfileRequest {}
/**
 * @public
 *
 * The output of {@link UpdateNetworkProfileCommand}.
 */
export interface UpdateNetworkProfileCommandOutput extends UpdateNetworkProfileResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Updates a network profile by the network profile ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, UpdateNetworkProfileCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, UpdateNetworkProfileCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // UpdateNetworkProfileRequest
 *   NetworkProfileArn: "STRING_VALUE", // required
 *   NetworkProfileName: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   CurrentPassword: "STRING_VALUE",
 *   NextPassword: "STRING_VALUE",
 *   CertificateAuthorityArn: "STRING_VALUE",
 *   TrustAnchors: [ // TrustAnchorList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateNetworkProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateNetworkProfileCommandInput - {@link UpdateNetworkProfileCommandInput}
 * @returns {@link UpdateNetworkProfileCommandOutput}
 * @see {@link UpdateNetworkProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateNetworkProfileCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is a concurrent modification of resources.</p>
 *
 * @throws {@link InvalidCertificateAuthorityException} (client fault)
 *  <p>The Certificate Authority can't issue or revoke a certificate.</p>
 *
 * @throws {@link InvalidSecretsManagerResourceException} (client fault)
 *  <p>A password in SecretsManager is in an invalid state.</p>
 *
 * @throws {@link NameInUseException} (client fault)
 *  <p>The name sent in the request is already in use.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class UpdateNetworkProfileCommand extends $Command
  .classBuilder<
    UpdateNetworkProfileCommandInput,
    UpdateNetworkProfileCommandOutput,
    AlexaForBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AlexaForBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AlexaForBusiness", "UpdateNetworkProfile", {})
  .n("AlexaForBusinessClient", "UpdateNetworkProfileCommand")
  .f(UpdateNetworkProfileRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateNetworkProfileCommand)
  .de(de_UpdateNetworkProfileCommand)
  .build() {}
