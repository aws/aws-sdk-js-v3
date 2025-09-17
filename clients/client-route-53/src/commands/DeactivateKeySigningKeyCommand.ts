// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeactivateKeySigningKeyRequest, DeactivateKeySigningKeyResponse } from "../models/models_0";
import { de_DeactivateKeySigningKeyCommand, se_DeactivateKeySigningKeyCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeactivateKeySigningKeyCommand}.
 */
export interface DeactivateKeySigningKeyCommandInput extends DeactivateKeySigningKeyRequest {}
/**
 * @public
 *
 * The output of {@link DeactivateKeySigningKeyCommand}.
 */
export interface DeactivateKeySigningKeyCommandOutput extends DeactivateKeySigningKeyResponse, __MetadataBearer {}

/**
 * <p>Deactivates a key-signing key (KSK) so that it will not be used for signing by DNSSEC.
 * 			This operation changes the KSK status to <code>INACTIVE</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeactivateKeySigningKeyCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeactivateKeySigningKeyCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // DeactivateKeySigningKeyRequest
 *   HostedZoneId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeactivateKeySigningKeyCommand(input);
 * const response = await client.send(command);
 * // { // DeactivateKeySigningKeyResponse
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
 * @param DeactivateKeySigningKeyCommandInput - {@link DeactivateKeySigningKeyCommandInput}
 * @returns {@link DeactivateKeySigningKeyCommandOutput}
 * @see {@link DeactivateKeySigningKeyCommandInput} for command's `input` shape.
 * @see {@link DeactivateKeySigningKeyCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidSigningStatus} (client fault)
 *  <p>Your hosted zone status isn't valid for this operation. In the hosted zone, change the
 * 			status to enable <code>DNSSEC</code> or disable <code>DNSSEC</code>.</p>
 *
 * @throws {@link KeySigningKeyInParentDSRecord} (client fault)
 *  <p>The key-signing key (KSK) is specified in a parent DS record.</p>
 *
 * @throws {@link KeySigningKeyInUse} (client fault)
 *  <p>The key-signing key (KSK) that you specified can't be deactivated because it's the
 * 			only KSK for a currently-enabled DNSSEC. Disable DNSSEC signing, or add or enable
 * 			another KSK.</p>
 *
 * @throws {@link NoSuchKeySigningKey} (client fault)
 *  <p>The specified key-signing key (KSK) doesn't exist.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class DeactivateKeySigningKeyCommand extends $Command
  .classBuilder<
    DeactivateKeySigningKeyCommandInput,
    DeactivateKeySigningKeyCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getIdNormalizerPlugin(config),
    ];
  })
  .s("AWSDnsV20130401", "DeactivateKeySigningKey", {})
  .n("Route53Client", "DeactivateKeySigningKeyCommand")
  .f(void 0, void 0)
  .ser(se_DeactivateKeySigningKeyCommand)
  .de(de_DeactivateKeySigningKeyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeactivateKeySigningKeyRequest;
      output: DeactivateKeySigningKeyResponse;
    };
    sdk: {
      input: DeactivateKeySigningKeyCommandInput;
      output: DeactivateKeySigningKeyCommandOutput;
    };
  };
}
