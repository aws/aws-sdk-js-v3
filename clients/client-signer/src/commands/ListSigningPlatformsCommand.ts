// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListSigningPlatformsRequest, ListSigningPlatformsResponse } from "../models/models_0";
import { de_ListSigningPlatformsCommand, se_ListSigningPlatformsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists all signing platforms available in AWS Signer that match the request parameters. If
 * 			additional jobs remain to be listed, Signer returns a <code>nextToken</code> value.
 * 			Use this value in subsequent calls to <code>ListSigningJobs</code> to fetch the
 * 			remaining values. You can continue calling <code>ListSigningJobs</code> with your
 * 				<code>maxResults</code> parameter and with new values that Signer returns in the
 * 				<code>nextToken</code> parameter until all of your signing jobs have been
 * 			returned.</p>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An internal error occurred.</p>
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
export class ListSigningPlatformsCommand extends $Command
  .classBuilder<
    ListSigningPlatformsCommandInput,
    ListSigningPlatformsCommandOutput,
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
  .s("WallabyService", "ListSigningPlatforms", {})
  .n("SignerClient", "ListSigningPlatformsCommand")
  .f(void 0, void 0)
  .ser(se_ListSigningPlatformsCommand)
  .de(de_ListSigningPlatformsCommand)
  .build() {
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
