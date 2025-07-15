// smithy-typescript generated code
import { getThrow200ExceptionsPlugin } from "@aws-sdk/middleware-sdk-s3";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetBucketOwnershipControlsOutput, GetBucketOwnershipControlsRequest } from "../models/models_0";
import { de_GetBucketOwnershipControlsCommand, se_GetBucketOwnershipControlsCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBucketOwnershipControlsCommand}.
 */
export interface GetBucketOwnershipControlsCommandInput extends GetBucketOwnershipControlsRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketOwnershipControlsCommand}.
 */
export interface GetBucketOwnershipControlsCommandOutput extends GetBucketOwnershipControlsOutput, __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is not supported for directory buckets.</p>
 *          </note>
 *          <p>Retrieves <code>OwnershipControls</code> for an Amazon S3 bucket. To use this operation, you must have
 *       the <code>s3:GetBucketOwnershipControls</code> permission. For more information about Amazon S3 permissions,
 *       see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html">Specifying
 *         permissions in a policy</a>. </p>
 *          <note>
 *             <p>A bucket doesn't have <code>OwnershipControls</code> settings in the following cases:</p>
 *             <ul>
 *                <li>
 *                   <p>The bucket was created before the <code>BucketOwnerEnforced</code> ownership setting was
 *             introduced and you've never explicitly applied this value</p>
 *                </li>
 *                <li>
 *                   <p>You've manually deleted the bucket ownership control value using the
 *               <code>DeleteBucketOwnershipControls</code> API operation.</p>
 *                </li>
 *             </ul>
 *             <p>By default, Amazon S3 sets <code>OwnershipControls</code> for all newly created buckets.</p>
 *          </note>
 *          <p>For information about Amazon S3 Object Ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Using Object Ownership</a>. </p>
 *          <p>The following operations are related to <code>GetBucketOwnershipControls</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>PutBucketOwnershipControls</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteBucketOwnershipControls</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketOwnershipControlsCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketOwnershipControlsCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // GetBucketOwnershipControlsRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetBucketOwnershipControlsCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketOwnershipControlsOutput
 * //   OwnershipControls: { // OwnershipControls
 * //     Rules: [ // OwnershipControlsRules // required
 * //       { // OwnershipControlsRule
 * //         ObjectOwnership: "BucketOwnerPreferred" || "ObjectWriter" || "BucketOwnerEnforced", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBucketOwnershipControlsCommandInput - {@link GetBucketOwnershipControlsCommandInput}
 * @returns {@link GetBucketOwnershipControlsCommandOutput}
 * @see {@link GetBucketOwnershipControlsCommandInput} for command's `input` shape.
 * @see {@link GetBucketOwnershipControlsCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 *
 * @public
 */
export class GetBucketOwnershipControlsCommand extends $Command
  .classBuilder<
    GetBucketOwnershipControlsCommandInput,
    GetBucketOwnershipControlsCommandOutput,
    S3ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getThrow200ExceptionsPlugin(config),
    ];
  })
  .s("AmazonS3", "GetBucketOwnershipControls", {})
  .n("S3Client", "GetBucketOwnershipControlsCommand")
  .f(void 0, void 0)
  .ser(se_GetBucketOwnershipControlsCommand)
  .de(de_GetBucketOwnershipControlsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBucketOwnershipControlsRequest;
      output: GetBucketOwnershipControlsOutput;
    };
    sdk: {
      input: GetBucketOwnershipControlsCommandInput;
      output: GetBucketOwnershipControlsCommandOutput;
    };
  };
}
