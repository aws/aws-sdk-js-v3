// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep3, _mw0, command } from "../commandBuilder";
import type {
  GetBucketMetadataTableConfigurationOutput,
  GetBucketMetadataTableConfigurationRequest,
} from "../models/models_0";
import { GetBucketMetadataTableConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBucketMetadataTableConfigurationCommand}.
 */
export interface GetBucketMetadataTableConfigurationCommandInput extends GetBucketMetadataTableConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketMetadataTableConfigurationCommand}.
 */
export interface GetBucketMetadataTableConfigurationCommandOutput extends GetBucketMetadataTableConfigurationOutput, __MetadataBearer {}

/**
 * > **Important:**
 * >
 * > We recommend that you retrieve your S3 Metadata configurations by using the V2 [GetBucketMetadataTableConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketMetadataTableConfiguration.html) API operation. We no longer recommend using the V1 `GetBucketMetadataTableConfiguration` API operation.
 * >
 * > If you created your S3 Metadata configuration before July 15, 2025, we recommend that you delete and re-create your configuration by using [CreateBucketMetadataConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucketMetadataConfiguration.html) so that you can expire journal table records and create a live inventory table.
 *
 * Retrieves the V1 S3 Metadata configuration for a general purpose bucket. For more information, see [Accelerating data discovery with S3 Metadata](https://docs.aws.amazon.com/AmazonS3/latest/userguide/metadata-tables-overview.html) in the *Amazon S3 User Guide*.
 *
 * > **Note:**
 * >
 * > You can use the V2 `GetBucketMetadataConfiguration` API operation with V1 or V2 metadata table configurations. However, if you try to use the V1 `GetBucketMetadataTableConfiguration` API operation with V2 configurations, you will receive an HTTP `405 Method Not Allowed` error.
 * >
 * > Make sure that you update your processes to use the new V2 API operations (`CreateBucketMetadataConfiguration`, `GetBucketMetadataConfiguration`, and `DeleteBucketMetadataConfiguration`) instead of the V1 API operations.
 *
 * - **Permissions**
 *
 *   To use this operation, you must have the `s3:GetBucketMetadataTableConfiguration` permission. For more information, see [Setting up permissions for configuring metadata tables](https://docs.aws.amazon.com/AmazonS3/latest/userguide/metadata-tables-permissions.html) in the *Amazon S3 User Guide*.
 *
 * The following operations are related to `GetBucketMetadataTableConfiguration`:
 *
 * - [CreateBucketMetadataTableConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucketMetadataTableConfiguration.html)
 * - [DeleteBucketMetadataTableConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketMetadataTableConfiguration.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketMetadataTableConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketMetadataTableConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // GetBucketMetadataTableConfigurationRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetBucketMetadataTableConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketMetadataTableConfigurationOutput
 * //   GetBucketMetadataTableConfigurationResult: { // GetBucketMetadataTableConfigurationResult
 * //     MetadataTableConfigurationResult: { // MetadataTableConfigurationResult
 * //       S3TablesDestinationResult: { // S3TablesDestinationResult
 * //         TableBucketArn: "STRING_VALUE", // required
 * //         TableName: "STRING_VALUE", // required
 * //         TableArn: "STRING_VALUE", // required
 * //         TableNamespace: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     Status: "STRING_VALUE", // required
 * //     Error: { // ErrorDetails
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBucketMetadataTableConfigurationCommandInput - {@link GetBucketMetadataTableConfigurationCommandInput}
 * @returns {@link GetBucketMetadataTableConfigurationCommandOutput}
 * @see {@link GetBucketMetadataTableConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetBucketMetadataTableConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @public
 */
export class GetBucketMetadataTableConfigurationCommand extends command<GetBucketMetadataTableConfigurationCommandInput, GetBucketMetadataTableConfigurationCommandOutput>(
  _ep3,
  _mw0,
  "GetBucketMetadataTableConfiguration",
  GetBucketMetadataTableConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBucketMetadataTableConfigurationRequest;
      output: GetBucketMetadataTableConfigurationOutput;
    };
    sdk: {
      input: GetBucketMetadataTableConfigurationCommandInput;
      output: GetBucketMetadataTableConfigurationCommandOutput;
    };
  };
}
