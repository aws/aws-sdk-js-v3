// smithy-typescript generated code
import { getThrow200ExceptionsPlugin } from "@aws-sdk/middleware-sdk-s3";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListBucketsOutput, ListBucketsRequest } from "../models/models_0";
import { de_ListBucketsCommand, se_ListBucketsCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBucketsCommand}.
 */
export interface ListBucketsCommandInput extends ListBucketsRequest {}
/**
 * @public
 *
 * The output of {@link ListBucketsCommand}.
 */
export interface ListBucketsCommandOutput extends ListBucketsOutput, __MetadataBearer {}

/**
 * <important>
 *             <p>End of support notice: Beginning October 1, 2025, Amazon S3 will stop returning <code>DisplayName</code>. Update your applications to use canonical IDs (unique identifier for
 *  Amazon Web Services accounts), Amazon Web Services account ID (12 digit identifier) or IAM ARNs (full resource naming) as a direct replacement of <code>DisplayName</code>.
 * </p>
 *             <p>This change affects the following Amazon Web Services Regions: US East (N. Virginia) Region, US West (N. California) Region, US West (Oregon) Region, Asia Pacific (Singapore) Region, Asia Pacific (Sydney) Region,
 *  Asia Pacific (Tokyo) Region, Europe (Ireland) Region, and South America (São Paulo) Region.</p>
 *          </important>
 *          <note>
 *             <p>This operation is not supported for directory buckets.</p>
 *          </note>
 *          <p>Returns a list of all buckets owned by the authenticated sender of the request. To grant IAM
 *       permission to use this operation, you must add the <code>s3:ListAllMyBuckets</code> policy action. </p>
 *          <p>For information about Amazon S3 buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html">Creating, configuring, and working with Amazon S3
 *         buckets</a>.</p>
 *          <important>
 *             <p>We strongly recommend using only paginated <code>ListBuckets</code> requests. Unpaginated
 *           <code>ListBuckets</code> requests are only supported for Amazon Web Services accounts set to the default general
 *         purpose bucket quota of 10,000. If you have an approved general purpose bucket quota above 10,000, you
 *         must send paginated <code>ListBuckets</code> requests to list your account’s buckets. All unpaginated
 *           <code>ListBuckets</code> requests will be rejected for Amazon Web Services accounts with a general purpose bucket
 *         quota greater than 10,000. </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, ListBucketsCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, ListBucketsCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // ListBucketsRequest
 *   MaxBuckets: Number("int"),
 *   ContinuationToken: "STRING_VALUE",
 *   Prefix: "STRING_VALUE",
 *   BucketRegion: "STRING_VALUE",
 * };
 * const command = new ListBucketsCommand(input);
 * const response = await client.send(command);
 * // { // ListBucketsOutput
 * //   Buckets: [ // Buckets
 * //     { // Bucket
 * //       Name: "STRING_VALUE",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       BucketRegion: "STRING_VALUE",
 * //       BucketArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Owner: { // Owner
 * //     DisplayName: "STRING_VALUE",
 * //     ID: "STRING_VALUE",
 * //   },
 * //   ContinuationToken: "STRING_VALUE",
 * //   Prefix: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBucketsCommandInput - {@link ListBucketsCommandInput}
 * @returns {@link ListBucketsCommandOutput}
 * @see {@link ListBucketsCommandInput} for command's `input` shape.
 * @see {@link ListBucketsCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 *
 * @example To list all buckets
 * ```javascript
 * // The following example returns all the buckets owned by the sender of this request.
 * const input = { /* empty *\/ };
 * const command = new ListBucketsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Buckets: [
 *     {
 *       CreationDate: "2012-02-15T21:03:02.000Z",
 *       Name: "examplebucket"
 *     },
 *     {
 *       CreationDate: "2011-07-24T19:33:50.000Z",
 *       Name: "examplebucket2"
 *     },
 *     {
 *       CreationDate: "2010-12-17T00:56:49.000Z",
 *       Name: "examplebucket3"
 *     }
 *   ],
 *   Owner: {
 *     DisplayName: "own-display-name",
 *     ID: "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListBucketsCommand extends $Command
  .classBuilder<
    ListBucketsCommandInput,
    ListBucketsCommandOutput,
    S3ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: S3ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getThrow200ExceptionsPlugin(config),
    ];
  })
  .s("AmazonS3", "ListBuckets", {})
  .n("S3Client", "ListBucketsCommand")
  .f(void 0, void 0)
  .ser(se_ListBucketsCommand)
  .de(de_ListBucketsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBucketsRequest;
      output: ListBucketsOutput;
    };
    sdk: {
      input: ListBucketsCommandInput;
      output: ListBucketsCommandOutput;
    };
  };
}
