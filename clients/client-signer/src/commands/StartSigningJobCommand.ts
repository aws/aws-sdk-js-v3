// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartSigningJobRequest, StartSigningJobResponse } from "../models/models_0";
import { de_StartSigningJobCommand, se_StartSigningJobCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartSigningJobCommand}.
 */
export interface StartSigningJobCommandInput extends StartSigningJobRequest {}
/**
 * @public
 *
 * The output of {@link StartSigningJobCommand}.
 */
export interface StartSigningJobCommandOutput extends StartSigningJobResponse, __MetadataBearer {}

/**
 * <p>Initiates a signing job to be performed on the code provided. Signing jobs are
 * 			viewable by the <code>ListSigningJobs</code> operation for two years after they are
 * 			performed. Note the following requirements: </p>
 * 		       <ul>
 *             <li>
 * 				           <p> You must create an Amazon S3 source bucket. For more information, see <a href="http://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html">Creating a Bucket</a> in the
 * 						<i>Amazon S3 Getting Started Guide</i>. </p>
 * 			         </li>
 *             <li>
 * 				           <p>Your S3 source bucket must be version enabled.</p>
 * 			         </li>
 *             <li>
 * 				           <p>You must create an S3 destination bucket. AWS Signer uses your S3 destination bucket to
 * 					write your signed code.</p>
 * 			         </li>
 *             <li>
 * 				           <p>You specify the name of the source and destination buckets when calling the
 * 						<code>StartSigningJob</code> operation.</p>
 * 			         </li>
 *             <li>
 * 				           <p>You must ensure the S3 buckets are from the same Region as the signing profile. Cross-Region signing isn't supported.</p>
 * 			         </li>
 *             <li>
 * 				           <p>You must also specify a request token that identifies your request to Signer.</p>
 * 			         </li>
 *          </ul>
 * 		       <p>You can call the <a>DescribeSigningJob</a> and the <a>ListSigningJobs</a> actions after you call
 * 			<code>StartSigningJob</code>.</p>
 * 		       <p>For a Java example that shows how to use this action, see <a href="https://docs.aws.amazon.com/signer/latest/developerguide/api-startsigningjob.html">StartSigningJob</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, StartSigningJobCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, StartSigningJobCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const input = { // StartSigningJobRequest
 *   source: { // Source
 *     s3: { // S3Source
 *       bucketName: "STRING_VALUE", // required
 *       key: "STRING_VALUE", // required
 *       version: "STRING_VALUE", // required
 *     },
 *   },
 *   destination: { // Destination
 *     s3: { // S3Destination
 *       bucketName: "STRING_VALUE",
 *       prefix: "STRING_VALUE",
 *     },
 *   },
 *   profileName: "STRING_VALUE", // required
 *   clientRequestToken: "STRING_VALUE", // required
 *   profileOwner: "STRING_VALUE",
 * };
 * const command = new StartSigningJobCommand(input);
 * const response = await client.send(command);
 * // { // StartSigningJobResponse
 * //   jobId: "STRING_VALUE",
 * //   jobOwner: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartSigningJobCommandInput - {@link StartSigningJobCommandInput}
 * @returns {@link StartSigningJobCommandOutput}
 * @see {@link StartSigningJobCommandInput} for command's `input` shape.
 * @see {@link StartSigningJobCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 * 		       <p>Instead of this error, <code>TooManyRequestsException</code> should be used.</p>
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
export class StartSigningJobCommand extends $Command
  .classBuilder<
    StartSigningJobCommandInput,
    StartSigningJobCommandOutput,
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
  .s("WallabyService", "StartSigningJob", {})
  .n("SignerClient", "StartSigningJobCommand")
  .f(void 0, void 0)
  .ser(se_StartSigningJobCommand)
  .de(de_StartSigningJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartSigningJobRequest;
      output: StartSigningJobResponse;
    };
    sdk: {
      input: StartSigningJobCommandInput;
      output: StartSigningJobCommandOutput;
    };
  };
}
