// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSigningProfileRequest, GetSigningProfileResponse } from "../models/models_0";
import { GetSigningProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns information on a specific signing profile.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, GetSigningProfileCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, GetSigningProfileCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * // import type { SignerClientConfig } from "@aws-sdk/client-signer";
 * const config = {}; // type is SignerClientConfig
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
export class GetSigningProfileCommand extends command<GetSigningProfileCommandInput, GetSigningProfileCommandOutput>(
  _ep0,
  _mw0,
  "GetSigningProfile",
  GetSigningProfile$
) {
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
