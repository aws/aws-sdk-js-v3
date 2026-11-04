// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep3, _mw3, command } from "../commandBuilder";
import type { CreateBucketMetadataTableConfigurationRequest } from "../models/models_0";
import { CreateBucketMetadataTableConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateBucketMetadataTableConfigurationCommand}.
 */
export interface CreateBucketMetadataTableConfigurationCommandInput extends CreateBucketMetadataTableConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateBucketMetadataTableConfigurationCommand}.
 */
export interface CreateBucketMetadataTableConfigurationCommandOutput extends __MetadataBearer {}

/**
 * > **Important:**
 * >
 * > We recommend that you create your S3 Metadata configurations by using the V2 [CreateBucketMetadataConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucketMetadataConfiguration.html) API operation. We no longer recommend using the V1 `CreateBucketMetadataTableConfiguration` API operation.
 * >
 * > If you created your S3 Metadata configuration before July 15, 2025, we recommend that you delete and re-create your configuration by using [CreateBucketMetadataConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucketMetadataConfiguration.html) so that you can expire journal table records and create a live inventory table.
 *
 * Creates a V1 S3 Metadata configuration for a general purpose bucket. For more information, see [Accelerating data discovery with S3 Metadata](https://docs.aws.amazon.com/AmazonS3/latest/userguide/metadata-tables-overview.html) in the *Amazon S3 User Guide*.
 *
 * - **Permissions**
 *
 *   To use this operation, you must have the following permissions. For more information, see [Setting up permissions for configuring metadata tables](https://docs.aws.amazon.com/AmazonS3/latest/userguide/metadata-tables-permissions.html) in the *Amazon S3 User Guide*.
 *
 *   If you want to encrypt your metadata tables with server-side encryption with Key Management Service (KMS) keys (SSE-KMS), you need additional permissions. For more information, see [Setting up permissions for configuring metadata tables](https://docs.aws.amazon.com/AmazonS3/latest/userguide/metadata-tables-permissions.html) in the *Amazon S3 User Guide*.
 *
 *   If you also want to integrate your table bucket with Amazon Web Services analytics services so that you can query your metadata table, you need additional permissions. For more information, see [Integrating Amazon S3 Tables with Amazon Web Services analytics services](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-integrating-aws.html) in the *Amazon S3 User Guide*.
 *
 *   - `s3:CreateBucketMetadataTableConfiguration`
 *   - `s3tables:CreateNamespace`
 *   - `s3tables:GetTable`
 *   - `s3tables:CreateTable`
 *   - `s3tables:PutTablePolicy`
 *
 * The following operations are related to `CreateBucketMetadataTableConfiguration`:
 *
 * - [DeleteBucketMetadataTableConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketMetadataTableConfiguration.html)
 * - [GetBucketMetadataTableConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketMetadataTableConfiguration.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, CreateBucketMetadataTableConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, CreateBucketMetadataTableConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // CreateBucketMetadataTableConfigurationRequest
 *   Bucket: "STRING_VALUE", // required
 *   ContentMD5: "STRING_VALUE",
 *   ChecksumAlgorithm: "CRC32" || "CRC32C" || "SHA1" || "SHA256" || "CRC64NVME" || "SHA512" || "MD5" || "XXHASH64" || "XXHASH3" || "XXHASH128",
 *   MetadataTableConfiguration: { // MetadataTableConfiguration
 *     S3TablesDestination: { // S3TablesDestination
 *       TableBucketArn: "STRING_VALUE", // required
 *       TableName: "STRING_VALUE", // required
 *     },
 *   },
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new CreateBucketMetadataTableConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateBucketMetadataTableConfigurationCommandInput - {@link CreateBucketMetadataTableConfigurationCommandInput}
 * @returns {@link CreateBucketMetadataTableConfigurationCommandOutput}
 * @see {@link CreateBucketMetadataTableConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateBucketMetadataTableConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @public
 */
export class CreateBucketMetadataTableConfigurationCommand extends command<CreateBucketMetadataTableConfigurationCommandInput, CreateBucketMetadataTableConfigurationCommandOutput>(
  _ep3,
  _mw3,
  "CreateBucketMetadataTableConfiguration",
  CreateBucketMetadataTableConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBucketMetadataTableConfigurationRequest;
      output: {};
    };
    sdk: {
      input: CreateBucketMetadataTableConfigurationCommandInput;
      output: CreateBucketMetadataTableConfigurationCommandOutput;
    };
  };
}
