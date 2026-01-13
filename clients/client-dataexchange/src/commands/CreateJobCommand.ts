// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateJobRequest, CreateJobResponse } from "../models/models_0";
import { CreateJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateJobCommand}.
 */
export interface CreateJobCommandInput extends CreateJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateJobCommand}.
 */
export interface CreateJobCommandOutput extends CreateJobResponse, __MetadataBearer {}

/**
 * <p>This operation creates a job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, CreateJobCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, CreateJobCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * // import type { DataExchangeClientConfig } from "@aws-sdk/client-dataexchange";
 * const config = {}; // type is DataExchangeClientConfig
 * const client = new DataExchangeClient(config);
 * const input = { // CreateJobRequest
 *   Details: { // RequestDetails
 *     ExportAssetToSignedUrl: { // ExportAssetToSignedUrlRequestDetails
 *       AssetId: "STRING_VALUE", // required
 *       DataSetId: "STRING_VALUE", // required
 *       RevisionId: "STRING_VALUE", // required
 *     },
 *     ExportAssetsToS3: { // ExportAssetsToS3RequestDetails
 *       AssetDestinations: [ // ListOfAssetDestinationEntry // required
 *         { // AssetDestinationEntry
 *           AssetId: "STRING_VALUE", // required
 *           Bucket: "STRING_VALUE", // required
 *           Key: "STRING_VALUE",
 *         },
 *       ],
 *       DataSetId: "STRING_VALUE", // required
 *       Encryption: { // ExportServerSideEncryption
 *         KmsKeyArn: "STRING_VALUE",
 *         Type: "STRING_VALUE", // required
 *       },
 *       RevisionId: "STRING_VALUE", // required
 *     },
 *     ExportRevisionsToS3: { // ExportRevisionsToS3RequestDetails
 *       DataSetId: "STRING_VALUE", // required
 *       Encryption: {
 *         KmsKeyArn: "STRING_VALUE",
 *         Type: "STRING_VALUE", // required
 *       },
 *       RevisionDestinations: [ // ListOfRevisionDestinationEntry // required
 *         { // RevisionDestinationEntry
 *           Bucket: "STRING_VALUE", // required
 *           KeyPattern: "STRING_VALUE",
 *           RevisionId: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *     ImportAssetFromSignedUrl: { // ImportAssetFromSignedUrlRequestDetails
 *       AssetName: "STRING_VALUE", // required
 *       DataSetId: "STRING_VALUE", // required
 *       Md5Hash: "STRING_VALUE", // required
 *       RevisionId: "STRING_VALUE", // required
 *     },
 *     ImportAssetsFromS3: { // ImportAssetsFromS3RequestDetails
 *       AssetSources: [ // ListOfAssetSourceEntry // required
 *         { // AssetSourceEntry
 *           Bucket: "STRING_VALUE", // required
 *           Key: "STRING_VALUE", // required
 *         },
 *       ],
 *       DataSetId: "STRING_VALUE", // required
 *       RevisionId: "STRING_VALUE", // required
 *     },
 *     ImportAssetsFromRedshiftDataShares: { // ImportAssetsFromRedshiftDataSharesRequestDetails
 *       AssetSources: [ // ListOfRedshiftDataShareAssetSourceEntry // required
 *         { // RedshiftDataShareAssetSourceEntry
 *           DataShareArn: "STRING_VALUE", // required
 *         },
 *       ],
 *       DataSetId: "STRING_VALUE", // required
 *       RevisionId: "STRING_VALUE", // required
 *     },
 *     ImportAssetFromApiGatewayApi: { // ImportAssetFromApiGatewayApiRequestDetails
 *       ApiDescription: "STRING_VALUE",
 *       ApiId: "STRING_VALUE", // required
 *       ApiKey: "STRING_VALUE",
 *       ApiName: "STRING_VALUE", // required
 *       ApiSpecificationMd5Hash: "STRING_VALUE", // required
 *       DataSetId: "STRING_VALUE", // required
 *       ProtocolType: "STRING_VALUE", // required
 *       RevisionId: "STRING_VALUE", // required
 *       Stage: "STRING_VALUE", // required
 *     },
 *     CreateS3DataAccessFromS3Bucket: { // CreateS3DataAccessFromS3BucketRequestDetails
 *       AssetSource: { // S3DataAccessAssetSourceEntry
 *         Bucket: "STRING_VALUE", // required
 *         KeyPrefixes: [ // ListOf__string
 *           "STRING_VALUE",
 *         ],
 *         Keys: [
 *           "STRING_VALUE",
 *         ],
 *         KmsKeysToGrant: [ // ListOfKmsKeysToGrant
 *           { // KmsKeyToGrant
 *             KmsKeyArn: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *       DataSetId: "STRING_VALUE", // required
 *       RevisionId: "STRING_VALUE", // required
 *     },
 *     ImportAssetsFromLakeFormationTagPolicy: { // ImportAssetsFromLakeFormationTagPolicyRequestDetails
 *       CatalogId: "STRING_VALUE", // required
 *       Database: { // DatabaseLFTagPolicyAndPermissions
 *         Expression: [ // ListOfLFTags // required
 *           { // LFTag
 *             TagKey: "STRING_VALUE", // required
 *             TagValues: [ // ListOfLFTagValues // required
 *               "STRING_VALUE",
 *             ],
 *           },
 *         ],
 *         Permissions: [ // ListOfDatabaseLFTagPolicyPermissions // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *       Table: { // TableLFTagPolicyAndPermissions
 *         Expression: [ // required
 *           {
 *             TagKey: "STRING_VALUE", // required
 *             TagValues: [ // required
 *               "STRING_VALUE",
 *             ],
 *           },
 *         ],
 *         Permissions: [ // ListOfTableTagPolicyLFPermissions // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *       RoleArn: "STRING_VALUE", // required
 *       DataSetId: "STRING_VALUE", // required
 *       RevisionId: "STRING_VALUE", // required
 *     },
 *   },
 *   Type: "STRING_VALUE", // required
 * };
 * const command = new CreateJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateJobResponse
 * //   Arn: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   Details: { // ResponseDetails
 * //     ExportAssetToSignedUrl: { // ExportAssetToSignedUrlResponseDetails
 * //       AssetId: "STRING_VALUE", // required
 * //       DataSetId: "STRING_VALUE", // required
 * //       RevisionId: "STRING_VALUE", // required
 * //       SignedUrl: "STRING_VALUE",
 * //       SignedUrlExpiresAt: new Date("TIMESTAMP"),
 * //     },
 * //     ExportAssetsToS3: { // ExportAssetsToS3ResponseDetails
 * //       AssetDestinations: [ // ListOfAssetDestinationEntry // required
 * //         { // AssetDestinationEntry
 * //           AssetId: "STRING_VALUE", // required
 * //           Bucket: "STRING_VALUE", // required
 * //           Key: "STRING_VALUE",
 * //         },
 * //       ],
 * //       DataSetId: "STRING_VALUE", // required
 * //       Encryption: { // ExportServerSideEncryption
 * //         KmsKeyArn: "STRING_VALUE",
 * //         Type: "STRING_VALUE", // required
 * //       },
 * //       RevisionId: "STRING_VALUE", // required
 * //     },
 * //     ExportRevisionsToS3: { // ExportRevisionsToS3ResponseDetails
 * //       DataSetId: "STRING_VALUE", // required
 * //       Encryption: {
 * //         KmsKeyArn: "STRING_VALUE",
 * //         Type: "STRING_VALUE", // required
 * //       },
 * //       RevisionDestinations: [ // ListOfRevisionDestinationEntry // required
 * //         { // RevisionDestinationEntry
 * //           Bucket: "STRING_VALUE", // required
 * //           KeyPattern: "STRING_VALUE",
 * //           RevisionId: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       EventActionArn: "STRING_VALUE",
 * //     },
 * //     ImportAssetFromSignedUrl: { // ImportAssetFromSignedUrlResponseDetails
 * //       AssetName: "STRING_VALUE", // required
 * //       DataSetId: "STRING_VALUE", // required
 * //       Md5Hash: "STRING_VALUE",
 * //       RevisionId: "STRING_VALUE", // required
 * //       SignedUrl: "STRING_VALUE",
 * //       SignedUrlExpiresAt: new Date("TIMESTAMP"),
 * //     },
 * //     ImportAssetsFromS3: { // ImportAssetsFromS3ResponseDetails
 * //       AssetSources: [ // ListOfAssetSourceEntry // required
 * //         { // AssetSourceEntry
 * //           Bucket: "STRING_VALUE", // required
 * //           Key: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       DataSetId: "STRING_VALUE", // required
 * //       RevisionId: "STRING_VALUE", // required
 * //     },
 * //     ImportAssetsFromRedshiftDataShares: { // ImportAssetsFromRedshiftDataSharesResponseDetails
 * //       AssetSources: [ // ListOfRedshiftDataShareAssetSourceEntry // required
 * //         { // RedshiftDataShareAssetSourceEntry
 * //           DataShareArn: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       DataSetId: "STRING_VALUE", // required
 * //       RevisionId: "STRING_VALUE", // required
 * //     },
 * //     ImportAssetFromApiGatewayApi: { // ImportAssetFromApiGatewayApiResponseDetails
 * //       ApiDescription: "STRING_VALUE",
 * //       ApiId: "STRING_VALUE", // required
 * //       ApiKey: "STRING_VALUE",
 * //       ApiName: "STRING_VALUE", // required
 * //       ApiSpecificationMd5Hash: "STRING_VALUE", // required
 * //       ApiSpecificationUploadUrl: "STRING_VALUE", // required
 * //       ApiSpecificationUploadUrlExpiresAt: new Date("TIMESTAMP"), // required
 * //       DataSetId: "STRING_VALUE", // required
 * //       ProtocolType: "STRING_VALUE", // required
 * //       RevisionId: "STRING_VALUE", // required
 * //       Stage: "STRING_VALUE", // required
 * //     },
 * //     CreateS3DataAccessFromS3Bucket: { // CreateS3DataAccessFromS3BucketResponseDetails
 * //       AssetSource: { // S3DataAccessAssetSourceEntry
 * //         Bucket: "STRING_VALUE", // required
 * //         KeyPrefixes: [ // ListOf__string
 * //           "STRING_VALUE",
 * //         ],
 * //         Keys: [
 * //           "STRING_VALUE",
 * //         ],
 * //         KmsKeysToGrant: [ // ListOfKmsKeysToGrant
 * //           { // KmsKeyToGrant
 * //             KmsKeyArn: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       DataSetId: "STRING_VALUE", // required
 * //       RevisionId: "STRING_VALUE", // required
 * //     },
 * //     ImportAssetsFromLakeFormationTagPolicy: { // ImportAssetsFromLakeFormationTagPolicyResponseDetails
 * //       CatalogId: "STRING_VALUE", // required
 * //       Database: { // DatabaseLFTagPolicyAndPermissions
 * //         Expression: [ // ListOfLFTags // required
 * //           { // LFTag
 * //             TagKey: "STRING_VALUE", // required
 * //             TagValues: [ // ListOfLFTagValues // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //         Permissions: [ // ListOfDatabaseLFTagPolicyPermissions // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       Table: { // TableLFTagPolicyAndPermissions
 * //         Expression: [ // required
 * //           {
 * //             TagKey: "STRING_VALUE", // required
 * //             TagValues: [ // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //         Permissions: [ // ListOfTableTagPolicyLFPermissions // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       RoleArn: "STRING_VALUE", // required
 * //       DataSetId: "STRING_VALUE", // required
 * //       RevisionId: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   Errors: [ // ListOfJobError
 * //     { // JobError
 * //       Code: "STRING_VALUE", // required
 * //       Details: { // Details
 * //         ImportAssetFromSignedUrlJobErrorDetails: { // ImportAssetFromSignedUrlJobErrorDetails
 * //           AssetName: "STRING_VALUE", // required
 * //         },
 * //         ImportAssetsFromS3JobErrorDetails: [
 * //           {
 * //             Bucket: "STRING_VALUE", // required
 * //             Key: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       LimitName: "STRING_VALUE",
 * //       LimitValue: Number("double"),
 * //       Message: "STRING_VALUE", // required
 * //       ResourceId: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Id: "STRING_VALUE",
 * //   State: "STRING_VALUE",
 * //   Type: "STRING_VALUE",
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateJobCommandInput - {@link CreateJobCommandInput}
 * @returns {@link CreateJobCommandOutput}
 * @see {@link CreateJobCommandInput} for command's `input` shape.
 * @see {@link CreateJobCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for DataExchangeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to the resource is denied.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request couldn't be completed because it conflicted with the current state of the
 *          resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception occurred with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource couldn't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was invalid.</p>
 *
 * @throws {@link DataExchangeServiceException}
 * <p>Base exception class for all service exceptions from DataExchange service.</p>
 *
 *
 * @public
 */
export class CreateJobCommand extends $Command
  .classBuilder<
    CreateJobCommandInput,
    CreateJobCommandOutput,
    DataExchangeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataExchangeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataExchange", "CreateJob", {})
  .n("DataExchangeClient", "CreateJobCommand")
  .sc(CreateJob$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateJobRequest;
      output: CreateJobResponse;
    };
    sdk: {
      input: CreateJobCommandInput;
      output: CreateJobCommandOutput;
    };
  };
}
