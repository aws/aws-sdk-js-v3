// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSigningPlatformRequest, GetSigningPlatformResponse } from "../models/models_0";
import { GetSigningPlatform$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns information on a specific signing platform.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *
 * An internal error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A specified resource could not be found.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The allowed number of job-signing requests has been exceeded.
 *
 * This error supersedes the error `ThrottlingException`.
 *
 * @throws {@link SignerServiceException}
 *
 * Base exception class for all service exceptions from Signer service.
 *
 * @public
 */
export class GetSigningPlatformCommand extends command<GetSigningPlatformCommandInput, GetSigningPlatformCommandOutput>(
  _ep0,
  _mw0,
  "GetSigningPlatform",
  GetSigningPlatform$
) {
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
