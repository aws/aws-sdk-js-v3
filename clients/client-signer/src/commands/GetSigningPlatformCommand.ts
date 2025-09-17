// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetSigningPlatformRequest, GetSigningPlatformResponse } from "../models/models_0";
import { de_GetSigningPlatformCommand, se_GetSigningPlatformCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSigningPlatformCommand}.
 */
export interface GetSigningPlatformCommandInput extends GetSigningPlatformRequest {}
/**
 * @public
 *
 * The output of {@link GetSigningPlatformCommand}.
 */
export interface GetSigningPlatformCommandOutput extends GetSigningPlatformResponse, __MetadataBearer {}

/**
 * <p>Returns information on a specific signing platform.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, GetSigningPlatformCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, GetSigningPlatformCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * // import type { SignerClientConfig } from "@aws-sdk/client-signer";
 * const config = {}; // type is SignerClientConfig
 * const client = new SignerClient(config);
 * const input = { // GetSigningPlatformRequest
 *   platformId: "STRING_VALUE", // required
 * };
 * const command = new GetSigningPlatformCommand(input);
 * const response = await client.send(command);
 * // { // GetSigningPlatformResponse
 * //   platformId: "STRING_VALUE",
 * //   displayName: "STRING_VALUE",
 * //   partner: "STRING_VALUE",
 * //   target: "STRING_VALUE",
 * //   category: "AWSIoT",
 * //   signingConfiguration: { // SigningConfiguration
 * //     encryptionAlgorithmOptions: { // EncryptionAlgorithmOptions
 * //       allowedValues: [ // EncryptionAlgorithms // required
 * //         "RSA" || "ECDSA",
 * //       ],
 * //       defaultValue: "RSA" || "ECDSA", // required
 * //     },
 * //     hashAlgorithmOptions: { // HashAlgorithmOptions
 * //       allowedValues: [ // HashAlgorithms // required
 * //         "SHA1" || "SHA256",
 * //       ],
 * //       defaultValue: "SHA1" || "SHA256", // required
 * //     },
 * //   },
 * //   signingImageFormat: { // SigningImageFormat
 * //     supportedFormats: [ // ImageFormats // required
 * //       "JSON" || "JSONEmbedded" || "JSONDetached",
 * //     ],
 * //     defaultFormat: "JSON" || "JSONEmbedded" || "JSONDetached", // required
 * //   },
 * //   maxSizeInMB: Number("int"),
 * //   revocationSupported: true || false,
 * // };
 *
 * ```
 *
 * @param GetSigningPlatformCommandInput - {@link GetSigningPlatformCommandInput}
 * @returns {@link GetSigningPlatformCommandOutput}
 * @see {@link GetSigningPlatformCommandInput} for command's `input` shape.
 * @see {@link GetSigningPlatformCommandOutput} for command's `response` shape.
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
export class GetSigningPlatformCommand extends $Command
  .classBuilder<
    GetSigningPlatformCommandInput,
    GetSigningPlatformCommandOutput,
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
  .s("WallabyService", "GetSigningPlatform", {})
  .n("SignerClient", "GetSigningPlatformCommand")
  .f(void 0, void 0)
  .ser(se_GetSigningPlatformCommand)
  .de(de_GetSigningPlatformCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSigningPlatformRequest;
      output: GetSigningPlatformResponse;
    };
    sdk: {
      input: GetSigningPlatformCommandInput;
      output: GetSigningPlatformCommandOutput;
    };
  };
}
