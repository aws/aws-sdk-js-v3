// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw1, command } from "../commandBuilder";
import type { PutJobTaggingRequest, PutJobTaggingResult } from "../models/models_0";
import { PutJobTagging$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Sets the supplied tag-set on an S3 Batch Operations job.
 *
 * A tag is a key-value pair. You can associate S3 Batch Operations tags with any job by sending a PUT request against the tagging subresource that is associated with the job. To modify the existing tag set, you can either replace the existing tag set entirely, or make changes within the existing tag set by retrieving the existing tag set using [GetJobTagging](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetJobTagging.html), modify that tag set, and use this operation to replace the tag set with the one you modified. For more information, see [Controlling access and labeling jobs using tags](https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-managing-jobs.html#batch-ops-job-tags) in the *Amazon S3 User Guide*.
 *
 * > **Note:**
 * >
 * > - If you send this request with an empty tag set, Amazon S3 deletes the existing tag set on the Batch Operations job. If you use this method, you are charged for a Tier 1 Request (PUT). For more information, see [Amazon S3 pricing](http://aws.amazon.com/s3/pricing/).
 * > - For deleting existing tags for your Batch Operations job, a [DeleteJobTagging](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteJobTagging.html) request is preferred because it achieves the same result without incurring charges.
 * > - A few things to consider about using tags:
 * >
 * >   - Amazon S3 limits the maximum number of tags to 50 tags per job.
 * >   - You can associate up to 50 tags with a job as long as they have unique tag keys.
 * >   - A tag key can be up to 128 Unicode characters in length, and tag values can be up to 256 Unicode characters in length.
 * >   - The key and values are case sensitive.
 * >   - For tagging-related restrictions related to characters and encodings, see [User-Defined Tag Restrictions](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html) in the *Billing and Cost Management User Guide*.
 *
 * - **Permissions**
 *
 *   To use the `PutJobTagging` operation, you must have permission to perform the `s3:PutJobTagging` action.
 *
 * Related actions include:
 *
 * - [CreateJob](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html)
 * - [GetJobTagging](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetJobTagging.html)
 * - [DeleteJobTagging](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteJobTagging.html)
 *
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
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * @throws {@link TooManyTagsException} (client fault)
 *
 * Amazon S3 throws this exception if you have too many tags in your tag set.
 *
 * @throws {@link S3ControlServiceException}
 *
 * Base exception class for all service exceptions from S3Control service.
 *
 * @public
 */
export class PutJobTaggingCommand extends command<PutJobTaggingCommandInput, PutJobTaggingCommandOutput>(
  _ep0,
  _mw1,
  "PutJobTagging",
  PutJobTagging$
) {
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
