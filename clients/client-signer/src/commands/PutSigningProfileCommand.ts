// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { PutSigningProfileRequest, PutSigningProfileResponse } from "../models/models_0";
import { PutSigningProfile } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutSigningProfileCommand}.
 */
export interface PutSigningProfileCommandInput extends PutSigningProfileRequest {}
/**
 * @public
 *
 * The output of {@link PutSigningProfileCommand}.
 */
export interface PutSigningProfileCommandOutput extends PutSigningProfileResponse, __MetadataBearer {}

/**
 * <p>Creates a signing profile. A signing profile is a code-signing template that can be used to
 * 			carry out a pre-defined signing job.
 * 			</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, PutSigningProfileCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, PutSigningProfileCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * // import type { SignerClientConfig } from "@aws-sdk/client-signer";
 * const config = {}; // type is SignerClientConfig
 * const client = new SignerClient(config);
 * const input = { // PutSigningProfileRequest
 *   profileName: "STRING_VALUE", // required
 *   signingMaterial: { // SigningMaterial
 *     certificateArn: "STRING_VALUE", // required
 *   },
 *   signatureValidityPeriod: { // SignatureValidityPeriod
 *     value: Number("int"),
 *     type: "DAYS" || "MONTHS" || "YEARS",
 *   },
 *   platformId: "STRING_VALUE", // required
 *   overrides: { // SigningPlatformOverrides
 *     signingConfiguration: { // SigningConfigurationOverrides
 *       encryptionAlgorithm: "RSA" || "ECDSA",
 *       hashAlgorithm: "SHA1" || "SHA256",
 *     },
 *     signingImageFormat: "JSON" || "JSONEmbedded" || "JSONDetached",
 *   },
 *   signingParameters: { // SigningParameters
 *     "<keys>": "STRING_VALUE",
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new PutSigningProfileCommand(input);
 * const response = await client.send(command);
 * // { // PutSigningProfileResponse
 * //   arn: "STRING_VALUE",
 * //   profileVersion: "STRING_VALUE",
 * //   profileVersionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutSigningProfileCommandInput - {@link PutSigningProfileCommandInput}
 * @returns {@link PutSigningProfileCommandOutput}
 * @see {@link PutSigningProfileCommandInput} for command's `input` shape.
 * @see {@link PutSigningProfileCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>You signing certificate could not be validated.</p>
 *
 * @throws {@link SignerServiceException}
 * <p>Base exception class for all service exceptions from Signer service.</p>
 *
 *
 * @public
 */
export class PutSigningProfileCommand extends $Command
  .classBuilder<
    PutSigningProfileCommandInput,
    PutSigningProfileCommandOutput,
    SignerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SignerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WallabyService", "PutSigningProfile", {})
  .n("SignerClient", "PutSigningProfileCommand")
  .sc(PutSigningProfile)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutSigningProfileRequest;
      output: PutSigningProfileResponse;
    };
    sdk: {
      input: PutSigningProfileCommandInput;
      output: PutSigningProfileCommandOutput;
    };
  };
}
