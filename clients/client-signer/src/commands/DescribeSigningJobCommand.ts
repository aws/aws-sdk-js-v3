// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSigningJobRequest, DescribeSigningJobResponse } from "../models/models_0";
import { de_DescribeSigningJobCommand, se_DescribeSigningJobCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSigningJobCommand}.
 */
export interface DescribeSigningJobCommandInput extends DescribeSigningJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSigningJobCommand}.
 */
export interface DescribeSigningJobCommandOutput extends DescribeSigningJobResponse, __MetadataBearer {}

/**
 * <p>Returns information about a specific code signing job. You specify the job by using the
 * 				<code>jobId</code> value that is returned by the <a>StartSigningJob</a>
 * 			operation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, DescribeSigningJobCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, DescribeSigningJobCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const input = { // DescribeSigningJobRequest
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeSigningJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSigningJobResponse
 * //   jobId: "STRING_VALUE",
 * //   source: { // Source
 * //     s3: { // S3Source
 * //       bucketName: "STRING_VALUE", // required
 * //       key: "STRING_VALUE", // required
 * //       version: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   signingMaterial: { // SigningMaterial
 * //     certificateArn: "STRING_VALUE", // required
 * //   },
 * //   platformId: "STRING_VALUE",
 * //   platformDisplayName: "STRING_VALUE",
 * //   profileName: "STRING_VALUE",
 * //   profileVersion: "STRING_VALUE",
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
 * //   createdAt: new Date("TIMESTAMP"),
 * //   completedAt: new Date("TIMESTAMP"),
 * //   signatureExpiresAt: new Date("TIMESTAMP"),
 * //   requestedBy: "STRING_VALUE",
 * //   status: "InProgress" || "Failed" || "Succeeded",
 * //   statusReason: "STRING_VALUE",
 * //   revocationRecord: { // SigningJobRevocationRecord
 * //     reason: "STRING_VALUE",
 * //     revokedAt: new Date("TIMESTAMP"),
 * //     revokedBy: "STRING_VALUE",
 * //   },
 * //   signedObject: { // SignedObject
 * //     s3: { // S3SignedObject
 * //       bucketName: "STRING_VALUE",
 * //       key: "STRING_VALUE",
 * //     },
 * //   },
 * //   jobOwner: "STRING_VALUE",
 * //   jobInvoker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSigningJobCommandInput - {@link DescribeSigningJobCommandInput}
 * @returns {@link DescribeSigningJobCommandOutput}
 * @see {@link DescribeSigningJobCommandInput} for command's `input` shape.
 * @see {@link DescribeSigningJobCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DescribeSigningJobCommand extends $Command
  .classBuilder<
    DescribeSigningJobCommandInput,
    DescribeSigningJobCommandOutput,
    SignerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SignerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WallabyService", "DescribeSigningJob", {})
  .n("SignerClient", "DescribeSigningJobCommand")
  .f(void 0, void 0)
  .ser(se_DescribeSigningJobCommand)
  .de(de_DescribeSigningJobCommand)
  .build() {}
