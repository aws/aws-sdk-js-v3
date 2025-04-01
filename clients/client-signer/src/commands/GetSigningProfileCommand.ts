// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetSigningProfileRequest, GetSigningProfileResponse } from "../models/models_0";
import { de_GetSigningProfileCommand, se_GetSigningProfileCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSigningProfileCommand}.
 */
export interface GetSigningProfileCommandInput extends GetSigningProfileRequest {}
/**
 * @public
 *
 * The output of {@link GetSigningProfileCommand}.
 */
export interface GetSigningProfileCommandOutput extends GetSigningProfileResponse, __MetadataBearer {}

/**
 * <p>Returns information on a specific signing profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, GetSigningProfileCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, GetSigningProfileCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const input = { // GetSigningProfileRequest
 *   profileName: "STRING_VALUE", // required
 *   profileOwner: "STRING_VALUE",
 * };
 * const command = new GetSigningProfileCommand(input);
 * const response = await client.send(command);
 * // { // GetSigningProfileResponse
 * //   profileName: "STRING_VALUE",
 * //   profileVersion: "STRING_VALUE",
 * //   profileVersionArn: "STRING_VALUE",
 * //   revocationRecord: { // SigningProfileRevocationRecord
 * //     revocationEffectiveFrom: new Date("TIMESTAMP"),
 * //     revokedAt: new Date("TIMESTAMP"),
 * //     revokedBy: "STRING_VALUE",
 * //   },
 * //   signingMaterial: { // SigningMaterial
 * //     certificateArn: "STRING_VALUE", // required
 * //   },
 * //   platformId: "STRING_VALUE",
 * //   platformDisplayName: "STRING_VALUE",
 * //   signatureValidityPeriod: { // SignatureValidityPeriod
 * //     value: Number("int"),
 * //     type: "DAYS" || "MONTHS" || "YEARS",
 * //   },
 * //   overrides: { // SigningPlatformOverrides
 * //     signingConfiguration: { // SigningConfigurationOverrides
 * //       encryptionAlgorithm: "RSA" || "ECDSA",
 * //       hashAlgorithm: "SHA1" || "SHA256",
 * //     },
 * //     signingImageFormat: "JSON" || "JSONEmbedded" || "JSONDetached",
 * //   },
 * //   signingParameters: { // SigningParameters
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   status: "Active" || "Canceled" || "Revoked",
 * //   statusReason: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSigningProfileCommandInput - {@link GetSigningProfileCommandInput}
 * @returns {@link GetSigningProfileCommandOutput}
 * @see {@link GetSigningProfileCommandInput} for command's `input` shape.
 * @see {@link GetSigningProfileCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for SignerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A specified resource could not be found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The allowed number of job-signing requests has been exceeded.</p>
 * 		       <p>This error supersedes the error <code>ThrottlingException</code>.</p>
 *
 * @throws {@link SignerServiceException}
 * <p>Base exception class for all service exceptions from Signer service.</p>
 *
 *
 * @public
 */
export class GetSigningProfileCommand extends $Command
  .classBuilder<
    GetSigningProfileCommandInput,
    GetSigningProfileCommandOutput,
    SignerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SignerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WallabyService", "GetSigningProfile", {})
  .n("SignerClient", "GetSigningProfileCommand")
  .f(void 0, void 0)
  .ser(se_GetSigningProfileCommand)
  .de(de_GetSigningProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSigningProfileRequest;
      output: GetSigningProfileResponse;
    };
    sdk: {
      input: GetSigningProfileCommandInput;
      output: GetSigningProfileCommandOutput;
    };
  };
}
