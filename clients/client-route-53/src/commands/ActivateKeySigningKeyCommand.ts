// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ActivateKeySigningKeyRequest, ActivateKeySigningKeyResponse } from "../models/models_0";
import { de_ActivateKeySigningKeyCommand, se_ActivateKeySigningKeyCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ActivateKeySigningKeyCommand}.
 */
export interface ActivateKeySigningKeyCommandInput extends ActivateKeySigningKeyRequest {}
/**
 * @public
 *
 * The output of {@link ActivateKeySigningKeyCommand}.
 */
export interface ActivateKeySigningKeyCommandOutput extends ActivateKeySigningKeyResponse, __MetadataBearer {}

/**
 * <p>Activates a key-signing key (KSK) so that it can be used for signing by DNSSEC. This
 * 			operation changes the KSK status to <code>ACTIVE</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ActivateKeySigningKeyCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ActivateKeySigningKeyCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // ActivateKeySigningKeyRequest
 *   HostedZoneId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new ActivateKeySigningKeyCommand(input);
 * const response = await client.send(command);
 * // { // ActivateKeySigningKeyResponse
 * //   ChangeInfo: { // ChangeInfo
 * //     Id: "STRING_VALUE", // required
 * //     Status: "PENDING" || "INSYNC", // required
 * //     SubmittedAt: new Date("TIMESTAMP"), // required
 * //     Comment: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ActivateKeySigningKeyCommandInput - {@link ActivateKeySigningKeyCommandInput}
 * @returns {@link ActivateKeySigningKeyCommandOutput}
 * @see {@link ActivateKeySigningKeyCommandInput} for command's `input` shape.
 * @see {@link ActivateKeySigningKeyCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link ConcurrentModification} (client fault)
 *  <p>Another user submitted a request to create, update, or delete the object at the same
 * 			time that you did. Retry the request. </p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link InvalidKeySigningKeyStatus} (client fault)
 *  <p>The key-signing key (KSK) status isn't valid or another KSK has the status
 * 				<code>INTERNAL_FAILURE</code>.</p>
 *
 * @throws {@link InvalidKMSArn} (client fault)
 *  <p>The KeyManagementServiceArn that you specified isn't valid to use with DNSSEC
 * 			signing.</p>
 *
 * @throws {@link InvalidSigningStatus} (client fault)
 *  <p>Your hosted zone status isn't valid for this operation. In the hosted zone, change the
 * 			status to enable <code>DNSSEC</code> or disable <code>DNSSEC</code>.</p>
 *
 * @throws {@link NoSuchKeySigningKey} (client fault)
 *  <p>The specified key-signing key (KSK) doesn't exist.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 * @public
 */
export class ActivateKeySigningKeyCommand extends $Command
  .classBuilder<
    ActivateKeySigningKeyCommandInput,
    ActivateKeySigningKeyCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getIdNormalizerPlugin(config),
    ];
  })
  .s("AWSDnsV20130401", "ActivateKeySigningKey", {})
  .n("Route53Client", "ActivateKeySigningKeyCommand")
  .f(void 0, void 0)
  .ser(se_ActivateKeySigningKeyCommand)
  .de(de_ActivateKeySigningKeyCommand)
  .build() {}
