// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSigningPlatformsRequest, ListSigningPlatformsResponse } from "../models/models_0";
import { ListSigningPlatforms$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSigningPlatformsCommand}.
 */
export interface ListSigningPlatformsCommandInput extends ListSigningPlatformsRequest {}
/**
 * @public
 *
 * The output of {@link ListSigningPlatformsCommand}.
 */
export interface ListSigningPlatformsCommandOutput extends ListSigningPlatformsResponse, __MetadataBearer {}

/**
 * Lists all signing platforms available in AWS Signer that match the request parameters. If additional jobs remain to be listed, Signer returns a `nextToken` value. Use this value in subsequent calls to `ListSigningJobs` to fetch the remaining values. You can continue calling `ListSigningJobs` with your `maxResults` parameter and with new values that Signer returns in the `nextToken` parameter until all of your signing jobs have been returned.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, ListSigningPlatformsCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, ListSigningPlatformsCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * // import type { SignerClientConfig } from "@aws-sdk/client-signer";
 * const config = {}; // type is SignerClientConfig
 * const client = new SignerClient(config);
 * const input = { // ListSigningPlatformsRequest
 *   category: "STRING_VALUE",
 *   partner: "STRING_VALUE",
 *   target: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSigningPlatformsCommand(input);
 * const response = await client.send(command);
 * // { // ListSigningPlatformsResponse
 * //   platforms: [ // SigningPlatforms
 * //     { // SigningPlatform
 * //       platformId: "STRING_VALUE",
 * //       displayName: "STRING_VALUE",
 * //       partner: "STRING_VALUE",
 * //       target: "STRING_VALUE",
 * //       category: "AWSIoT",
 * //       signingConfiguration: { // SigningConfiguration
 * //         encryptionAlgorithmOptions: { // EncryptionAlgorithmOptions
 * //           allowedValues: [ // EncryptionAlgorithms // required
 * //             "RSA" || "ECDSA",
 * //           ],
 * //           defaultValue: "RSA" || "ECDSA", // required
 * //         },
 * //         hashAlgorithmOptions: { // HashAlgorithmOptions
 * //           allowedValues: [ // HashAlgorithms // required
 * //             "SHA1" || "SHA256",
 * //           ],
 * //           defaultValue: "SHA1" || "SHA256", // required
 * //         },
 * //       },
 * //       signingImageFormat: { // SigningImageFormat
 * //         supportedFormats: [ // ImageFormats // required
 * //           "JSON" || "JSONEmbedded" || "JSONDetached",
 * //         ],
 * //         defaultFormat: "JSON" || "JSONEmbedded" || "JSONDetached", // required
 * //       },
 * //       maxSizeInMB: Number("int"),
 * //       revocationSupported: true || false,
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSigningPlatformsCommandInput - {@link ListSigningPlatformsCommandInput}
 * @returns {@link ListSigningPlatformsCommandOutput}
 * @see {@link ListSigningPlatformsCommandInput} for command's `input` shape.
 * @see {@link ListSigningPlatformsCommandOutput} for command's `response` shape.
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
export class ListSigningPlatformsCommand extends command<ListSigningPlatformsCommandInput, ListSigningPlatformsCommandOutput>(
  _ep0,
  _mw0,
  "ListSigningPlatforms",
  ListSigningPlatforms$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSigningPlatformsRequest;
      output: ListSigningPlatformsResponse;
    };
    sdk: {
      input: ListSigningPlatformsCommandInput;
      output: ListSigningPlatformsCommandOutput;
    };
  };
}
