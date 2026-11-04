// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartSigningJobRequest, StartSigningJobResponse } from "../models/models_0";
import { StartSigningJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Initiates a signing job to be performed on the code provided. Signing jobs are viewable by the `ListSigningJobs` operation. Note the following requirements:
 *
 * - You must create an Amazon S3 source bucket. For more information, see [Creating a Bucket](http://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html) in the *Amazon S3 Getting Started Guide*.
 * - Your S3 source bucket must be version enabled.
 * - You must create an S3 destination bucket. AWS Signer uses your S3 destination bucket to write your signed code.
 * - You specify the name of the source and destination buckets when calling the `StartSigningJob` operation.
 * - You must ensure the S3 buckets are from the same Region as the signing profile. Cross-Region signing isn't supported.
 * - You must also specify a request token that identifies your request to Signer.
 *
 * You can call the DescribeSigningJob and the ListSigningJobs actions after you call `StartSigningJob`.
 *
 * For a Java example that shows how to use this action, see [StartSigningJob](https://docs.aws.amazon.com/signer/latest/developerguide/api-startsigningjob.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, StartSigningJobCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, StartSigningJobCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * // import type { SignerClientConfig } from "@aws-sdk/client-signer";
 * const config = {}; // type is SignerClientConfig
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
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * Instead of this error, `TooManyRequestsException` should be used.
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
export class StartSigningJobCommand extends command<StartSigningJobCommandInput, StartSigningJobCommandOutput>(
  _ep0,
  _mw0,
  "StartSigningJob",
  StartSigningJob$
) {
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
