// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep3, _mw0, command } from "../commandBuilder";
import type { GetBucketAnalyticsConfigurationOutput, GetBucketAnalyticsConfigurationRequest } from "../models/models_0";
import { GetBucketAnalyticsConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBucketAnalyticsConfigurationCommand}.
 */
export interface GetBucketAnalyticsConfigurationCommandInput extends GetBucketAnalyticsConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketAnalyticsConfigurationCommand}.
 */
export interface GetBucketAnalyticsConfigurationCommandOutput extends GetBucketAnalyticsConfigurationOutput, __MetadataBearer {}

/**
 * > **Note:** This operation is not supported for directory buckets.
 *
 * This implementation of the GET action returns an analytics configuration (identified by the analytics configuration ID) from the bucket.
 *
 * To use this operation, you must have permissions to perform the `s3:GetAnalyticsConfiguration` action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see [Permissions Related to Bucket Subresource Operations](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources) and [Managing Access Permissions to Your Amazon S3 Resources](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html) in the *Amazon S3 User Guide*.
 *
 * For information about Amazon S3 analytics feature, see [Amazon S3 Analytics – Storage Class Analysis](https://docs.aws.amazon.com/AmazonS3/latest/dev/analytics-storage-class.html) in the *Amazon S3 User Guide*.
 *
 * The following operations are related to `GetBucketAnalyticsConfiguration`:
 *
 * - [DeleteBucketAnalyticsConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketAnalyticsConfiguration.html)
 * - [ListBucketAnalyticsConfigurations](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketAnalyticsConfigurations.html)
 * - [PutBucketAnalyticsConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAnalyticsConfiguration.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketAnalyticsConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketAnalyticsConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // GetBucketAnalyticsConfigurationRequest
 *   Bucket: "STRING_VALUE", // required
 *   Id: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetBucketAnalyticsConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketAnalyticsConfigurationOutput
 * //   AnalyticsConfiguration: { // AnalyticsConfiguration
 * //     Id: "STRING_VALUE", // required
 * //     Filter: { // AnalyticsFilter Union: only one key present
 * //       Prefix: "STRING_VALUE",
 * //       Tag: { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //       And: { // AnalyticsAndOperator
 * //         Prefix: "STRING_VALUE",
 * //         Tags: [ // TagSet
 * //           {
 * //             Key: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //     StorageClassAnalysis: { // StorageClassAnalysis
 * //       DataExport: { // StorageClassAnalysisDataExport
 * //         OutputSchemaVersion: "V_1", // required
 * //         Destination: { // AnalyticsExportDestination
 * //           S3BucketDestination: { // AnalyticsS3BucketDestination
 * //             Format: "CSV", // required
 * //             BucketAccountId: "STRING_VALUE",
 * //             Bucket: "STRING_VALUE", // required
 * //             Prefix: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBucketAnalyticsConfigurationCommandInput - {@link GetBucketAnalyticsConfigurationCommandInput}
 * @returns {@link GetBucketAnalyticsConfigurationCommandOutput}
 * @see {@link GetBucketAnalyticsConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetBucketAnalyticsConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @public
 */
export class GetBucketAnalyticsConfigurationCommand extends command<GetBucketAnalyticsConfigurationCommandInput, GetBucketAnalyticsConfigurationCommandOutput>(
  _ep3,
  _mw0,
  "GetBucketAnalyticsConfiguration",
  GetBucketAnalyticsConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBucketAnalyticsConfigurationRequest;
      output: GetBucketAnalyticsConfigurationOutput;
    };
    sdk: {
      input: GetBucketAnalyticsConfigurationCommandInput;
      output: GetBucketAnalyticsConfigurationCommandOutput;
    };
  };
}
