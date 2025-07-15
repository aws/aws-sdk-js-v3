// smithy-typescript generated code
import { getThrow200ExceptionsPlugin } from "@aws-sdk/middleware-sdk-s3";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetBucketTaggingOutput, GetBucketTaggingRequest } from "../models/models_0";
import { de_GetBucketTaggingCommand, se_GetBucketTaggingCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBucketTaggingCommand}.
 */
export interface GetBucketTaggingCommandInput extends GetBucketTaggingRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketTaggingCommand}.
 */
export interface GetBucketTaggingCommandOutput extends GetBucketTaggingOutput, __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is not supported for directory buckets.</p>
 *          </note>
 *          <p>Returns the tag set associated with the bucket.</p>
 *          <p>To use this operation, you must have permission to perform the <code>s3:GetBucketTagging</code>
 *       action. By default, the bucket owner has this permission and can grant this permission to others.</p>
 *          <p>
 *             <code>GetBucketTagging</code> has the following special error:</p>
 *          <ul>
 *             <li>
 *                <p>Error code: <code>NoSuchTagSet</code>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Description: There is no tag set associated with the bucket.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>The following operations are related to <code>GetBucketTagging</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketTagging.html">PutBucketTagging</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketTagging.html">DeleteBucketTagging</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketTaggingCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketTaggingCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // GetBucketTaggingRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetBucketTaggingCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketTaggingOutput
 * //   TagSet: [ // TagSet // required
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetBucketTaggingCommandInput - {@link GetBucketTaggingCommandInput}
 * @returns {@link GetBucketTaggingCommandOutput}
 * @see {@link GetBucketTaggingCommandInput} for command's `input` shape.
 * @see {@link GetBucketTaggingCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 *
 * @example To get tag set associated with a bucket
 * ```javascript
 * // The following example returns tag set associated with a bucket
 * const input = {
 *   Bucket: "examplebucket"
 * };
 * const command = new GetBucketTaggingCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   TagSet: [
 *     {
 *       Key: "key1",
 *       Value: "value1"
 *     },
 *     {
 *       Key: "key2",
 *       Value: "value2"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetBucketTaggingCommand extends $Command
  .classBuilder<
    GetBucketTaggingCommandInput,
    GetBucketTaggingCommandOutput,
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
  .s("AmazonS3", "GetBucketTagging", {})
  .n("S3Client", "GetBucketTaggingCommand")
  .f(void 0, void 0)
  .ser(se_GetBucketTaggingCommand)
  .de(de_GetBucketTaggingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBucketTaggingRequest;
      output: GetBucketTaggingOutput;
    };
    sdk: {
      input: GetBucketTaggingCommandInput;
      output: GetBucketTaggingCommandOutput;
    };
  };
}
