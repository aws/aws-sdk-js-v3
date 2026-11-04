// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetBucketStatisticsRequest, GetBucketStatisticsResponse } from "../models/models_0";
import { GetBucketStatistics$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBucketStatisticsCommand}.
 */
export interface GetBucketStatisticsCommandInput extends GetBucketStatisticsRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketStatisticsCommand}.
 */
export interface GetBucketStatisticsCommandOutput extends GetBucketStatisticsResponse, __MetadataBearer {}

/**
 * Retrieves (queries) aggregated statistical data about all the S3 buckets that Amazon Macie monitors and analyzes for an account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetBucketStatisticsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetBucketStatisticsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // import type { Macie2ClientConfig } from "@aws-sdk/client-macie2";
 * const config = {}; // type is Macie2ClientConfig
 * const client = new Macie2Client(config);
 * const input = { // GetBucketStatisticsRequest
 *   accountId: "STRING_VALUE",
 * };
 * const command = new GetBucketStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketStatisticsResponse
 * //   bucketCount: Number("long"),
 * //   bucketCountByEffectivePermission: { // BucketCountByEffectivePermission
 * //     publiclyAccessible: Number("long"),
 * //     publiclyReadable: Number("long"),
 * //     publiclyWritable: Number("long"),
 * //     unknown: Number("long"),
 * //   },
 * //   bucketCountByEncryptionType: { // BucketCountByEncryptionType
 * //     kmsManaged: Number("long"),
 * //     s3Managed: Number("long"),
 * //     unencrypted: Number("long"),
 * //     unknown: Number("long"),
 * //   },
 * //   bucketCountByObjectEncryptionRequirement: { // BucketCountPolicyAllowsUnencryptedObjectUploads
 * //     allowsUnencryptedObjectUploads: Number("long"),
 * //     deniesUnencryptedObjectUploads: Number("long"),
 * //     unknown: Number("long"),
 * //   },
 * //   bucketCountBySharedAccessType: { // BucketCountBySharedAccessType
 * //     external: Number("long"),
 * //     internal: Number("long"),
 * //     notShared: Number("long"),
 * //     unknown: Number("long"),
 * //   },
 * //   bucketStatisticsBySensitivity: { // BucketStatisticsBySensitivity
 * //     classificationError: { // SensitivityAggregations
 * //       classifiableSizeInBytes: Number("long"),
 * //       publiclyAccessibleCount: Number("long"),
 * //       totalCount: Number("long"),
 * //       totalSizeInBytes: Number("long"),
 * //     },
 * //     notClassified: {
 * //       classifiableSizeInBytes: Number("long"),
 * //       publiclyAccessibleCount: Number("long"),
 * //       totalCount: Number("long"),
 * //       totalSizeInBytes: Number("long"),
 * //     },
 * //     notSensitive: {
 * //       classifiableSizeInBytes: Number("long"),
 * //       publiclyAccessibleCount: Number("long"),
 * //       totalCount: Number("long"),
 * //       totalSizeInBytes: Number("long"),
 * //     },
 * //     sensitive: {
 * //       classifiableSizeInBytes: Number("long"),
 * //       publiclyAccessibleCount: Number("long"),
 * //       totalCount: Number("long"),
 * //       totalSizeInBytes: Number("long"),
 * //     },
 * //   },
 * //   classifiableObjectCount: Number("long"),
 * //   classifiableSizeInBytes: Number("long"),
 * //   lastUpdated: new Date("TIMESTAMP"),
 * //   objectCount: Number("long"),
 * //   sizeInBytes: Number("long"),
 * //   sizeInBytesCompressed: Number("long"),
 * //   unclassifiableObjectCount: { // ObjectLevelStatistics
 * //     fileType: Number("long"),
 * //     storageClass: Number("long"),
 * //     total: Number("long"),
 * //   },
 * //   unclassifiableObjectSizeInBytes: {
 * //     fileType: Number("long"),
 * //     storageClass: Number("long"),
 * //     total: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBucketStatisticsCommandInput - {@link GetBucketStatisticsCommandInput}
 * @returns {@link GetBucketStatisticsCommandOutput}
 * @see {@link GetBucketStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetBucketStatisticsCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Provides information about an error that occurred due to insufficient access to a specified resource.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Provides information about an error that occurred due to a versioning conflict for a specified resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Provides information about an error that occurred due to an unknown internal server error, exception, or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Provides information about an error that occurred because a specified resource wasn't found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Provides information about an error that occurred due to one or more service quotas for an account.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Provides information about an error that occurred because too many requests were sent during a certain amount of time.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Provides information about an error that occurred due to a syntax error in a request.
 *
 * @throws {@link Macie2ServiceException}
 *
 * Base exception class for all service exceptions from Macie2 service.
 *
 * @public
 */
export class GetBucketStatisticsCommand extends command<GetBucketStatisticsCommandInput, GetBucketStatisticsCommandOutput>(
  _ep0,
  _mw0,
  "GetBucketStatistics",
  GetBucketStatistics$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBucketStatisticsRequest;
      output: GetBucketStatisticsResponse;
    };
    sdk: {
      input: GetBucketStatisticsCommandInput;
      output: GetBucketStatisticsCommandOutput;
    };
  };
}
