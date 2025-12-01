// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateKeySigningKeyRequest, CreateKeySigningKeyResponse } from "../models/models_0";
import type { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { CreateKeySigningKey } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateKeySigningKeyCommand}.
 */
export interface CreateKeySigningKeyCommandInput extends CreateKeySigningKeyRequest {}
/**
 * @public
 *
 * The output of {@link CreateKeySigningKeyCommand}.
 */
export interface CreateKeySigningKeyCommandOutput extends CreateKeySigningKeyResponse, __MetadataBearer {}

/**
 * <p>Creates a new key-signing key (KSK) associated with a hosted zone. You can only have
 * 			two KSKs per hosted zone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, CreateKeySigningKeyCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, CreateKeySigningKeyCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // CreateKeySigningKeyRequest
 *   CallerReference: "STRING_VALUE", // required
 *   HostedZoneId: "STRING_VALUE", // required
 *   KeyManagementServiceArn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Status: "STRING_VALUE", // required
 * };
 * const command = new CreateKeySigningKeyCommand(input);
 * const response = await client.send(command);
 * // { // CreateKeySigningKeyResponse
 * //   ChangeInfo: { // ChangeInfo
 * //     Id: "STRING_VALUE", // required
 * //     Status: "PENDING" || "INSYNC", // required
 * //     SubmittedAt: new Date("TIMESTAMP"), // required
 * //     Comment: "STRING_VALUE",
 * //   },
 * //   KeySigningKey: { // KeySigningKey
 * //     Name: "STRING_VALUE",
 * //     KmsArn: "STRING_VALUE",
 * //     Flag: Number("int"),
 * //     SigningAlgorithmMnemonic: "STRING_VALUE",
 * //     SigningAlgorithmType: Number("int"),
 * //     DigestAlgorithmMnemonic: "STRING_VALUE",
 * //     DigestAlgorithmType: Number("int"),
 * //     KeyTag: Number("int"),
 * //     DigestValue: "STRING_VALUE",
 * //     PublicKey: "STRING_VALUE",
 * //     DSRecord: "STRING_VALUE",
 * //     DNSKEYRecord: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     StatusMessage: "STRING_VALUE",
 * //     CreatedDate: new Date("TIMESTAMP"),
 * //     LastModifiedDate: new Date("TIMESTAMP"),
 * //   },
 * //   Location: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateKeySigningKeyCommandInput - {@link CreateKeySigningKeyCommandInput}
 * @returns {@link CreateKeySigningKeyCommandOutput}
 * @see {@link CreateKeySigningKeyCommandInput} for command's `input` shape.
 * @see {@link CreateKeySigningKeyCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link ConcurrentModification} (client fault)
 *  <p>Another user submitted a request to create, update, or delete the object at the same
 * 			time that you did. Retry the request. </p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>Parameter name is not valid.</p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link InvalidKeySigningKeyName} (client fault)
 *  <p>The key-signing key (KSK) name that you specified isn't a valid name.</p>
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
 * @throws {@link KeySigningKeyAlreadyExists} (client fault)
 *  <p>You've already created a key-signing key (KSK) with this name or with the same customer managed key ARN.</p>
 *
 * @throws {@link NoSuchHostedZone} (client fault)
 *  <p>No hosted zone exists with the ID that you specified.</p>
 *
 * @throws {@link TooManyKeySigningKeys} (client fault)
 *  <p>You've reached the limit for the number of key-signing keys (KSKs). Remove at least
 * 			one KSK, and then try again.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class CreateKeySigningKeyCommand extends $Command
  .classBuilder<
    CreateKeySigningKeyCommandInput,
    CreateKeySigningKeyCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions()), getIdNormalizerPlugin(config)];
  })
  .s("AWSDnsV20130401", "CreateKeySigningKey", {})
  .n("Route53Client", "CreateKeySigningKeyCommand")
  .sc(CreateKeySigningKey)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateKeySigningKeyRequest;
      output: CreateKeySigningKeyResponse;
    };
    sdk: {
      input: CreateKeySigningKeyCommandInput;
      output: CreateKeySigningKeyCommandOutput;
    };
  };
}
