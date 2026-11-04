// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutSigningProfileRequest, PutSigningProfileResponse } from "../models/models_0";
import { PutSigningProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a signing profile. A signing profile is a code-signing template that can be used to carry out a pre-defined signing job.
 *
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
 * @throws {@link ValidationException} (client fault)
 *
 * You signing certificate could not be validated.
 *
 * @throws {@link SignerServiceException}
 *
 * Base exception class for all service exceptions from Signer service.
 *
 * @public
 */
export class PutSigningProfileCommand extends command<PutSigningProfileCommandInput, PutSigningProfileCommandOutput>(
  _ep0,
  _mw0,
  "PutSigningProfile",
  PutSigningProfile$
) {
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
