// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutJobTaggingRequest, PutJobTaggingResult } from "../models/models_1";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { PutJobTagging } from "../schemas/schemas_2_Bucket";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutJobTaggingCommand}.
 */
export interface PutJobTaggingCommandInput extends PutJobTaggingRequest {}
/**
 * @public
 *
 * The output of {@link PutJobTaggingCommand}.
 */
export interface PutJobTaggingCommandOutput extends PutJobTaggingResult, __MetadataBearer {}

/**
 * <p>Sets the supplied tag-set on an S3 Batch Operations job.</p>
 *          <p>A tag is a key-value pair. You can associate S3 Batch Operations tags with any job by sending
 *          a PUT request against the tagging subresource that is associated with the job. To modify
 *          the existing tag set, you can either replace the existing tag set entirely, or make changes
 *          within the existing tag set by retrieving the existing tag set using <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetJobTagging.html">GetJobTagging</a>, modify that tag set, and use this operation to replace the tag
 *          set with the one you modified. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-managing-jobs.html#batch-ops-job-tags">Controlling
 *             access and labeling jobs using tags</a> in the <i>Amazon S3 User Guide</i>. </p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>If you send this request with an empty tag set, Amazon S3 deletes the existing
 *                   tag set on the Batch Operations job. If you use this method, you are charged for a Tier
 *                   1 Request (PUT). For more information, see <a href="http://aws.amazon.com/s3/pricing/">Amazon S3 pricing</a>.</p>
 *                </li>
 *                <li>
 *                   <p>For deleting existing tags for your Batch Operations job, a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteJobTagging.html">DeleteJobTagging</a> request is preferred because it achieves the same
 *                   result without incurring charges.</p>
 *                </li>
 *                <li>
 *                   <p>A few things to consider about using tags:</p>
 *                   <ul>
 *                      <li>
 *                         <p>Amazon S3 limits the maximum number of tags to 50 tags per job.</p>
 *                      </li>
 *                      <li>
 *                         <p>You can associate up to 50 tags with a job as long as they have unique
 *                         tag keys.</p>
 *                      </li>
 *                      <li>
 *                         <p>A tag key can be up to 128 Unicode characters in length, and tag values
 *                         can be up to 256 Unicode characters in length.</p>
 *                      </li>
 *                      <li>
 *                         <p>The key and values are case sensitive.</p>
 *                      </li>
 *                      <li>
 *                         <p>For tagging-related restrictions related to characters and encodings, see
 *                            <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>Billing and Cost Management User Guide</i>.</p>
 *                      </li>
 *                   </ul>
 *                </li>
 *             </ul>
 *          </note>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>To use the <code>PutJobTagging</code> operation, you must have permission to
 *                   perform the <code>s3:PutJobTagging</code> action.</p>
 *             </dd>
 *          </dl>
 *          <p>Related actions include:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetJobTagging.html">GetJobTagging</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteJobTagging.html">DeleteJobTagging</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, PutJobTaggingCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, PutJobTaggingCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // PutJobTaggingRequest
 *   AccountId: "STRING_VALUE",
 *   JobId: "STRING_VALUE", // required
 *   Tags: [ // S3TagSet // required
 *     { // S3Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new PutJobTaggingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutJobTaggingCommandInput - {@link PutJobTaggingCommandInput}
 * @returns {@link PutJobTaggingCommandOutput}
 * @see {@link PutJobTaggingCommandInput} for command's `input` shape.
 * @see {@link PutJobTaggingCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p></p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p></p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p></p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>Amazon S3 throws this exception if you have too many tags in your tag set.</p>
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class PutJobTaggingCommand extends $Command
  .classBuilder<
    PutJobTaggingCommandInput,
    PutJobTaggingCommandOutput,
    S3ControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    RequiresAccountId: { type: "staticContextParams", value: true },
    AccountId: { type: "contextParams", name: "AccountId" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions()), getProcessArnablesPlugin(config)];
  })
  .s("AWSS3ControlServiceV20180820", "PutJobTagging", {})
  .n("S3ControlClient", "PutJobTaggingCommand")
  .sc(PutJobTagging)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutJobTaggingRequest;
      output: {};
    };
    sdk: {
      input: PutJobTaggingCommandInput;
      output: PutJobTaggingCommandOutput;
    };
  };
}
