// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAccessPreviewRequest, GetAccessPreviewResponse } from "../models/models_0";
import { de_GetAccessPreviewCommand, se_GetAccessPreviewCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccessPreviewCommand}.
 */
export interface GetAccessPreviewCommandInput extends GetAccessPreviewRequest {}
/**
 * @public
 *
 * The output of {@link GetAccessPreviewCommand}.
 */
export interface GetAccessPreviewCommandOutput extends GetAccessPreviewResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about an access preview for the specified analyzer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, GetAccessPreviewCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, GetAccessPreviewCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const input = { // GetAccessPreviewRequest
 *   accessPreviewId: "STRING_VALUE", // required
 *   analyzerArn: "STRING_VALUE", // required
 * };
 * const command = new GetAccessPreviewCommand(input);
 * const response = await client.send(command);
 * // { // GetAccessPreviewResponse
 * //   accessPreview: { // AccessPreview
 * //     id: "STRING_VALUE", // required
 * //     analyzerArn: "STRING_VALUE", // required
 * //     configurations: { // ConfigurationsMap // required
 * //       "<keys>": { // Configuration Union: only one key present
 * //         ebsSnapshot: { // EbsSnapshotConfiguration
 * //           userIds: [ // EbsUserIdList
 * //             "STRING_VALUE",
 * //           ],
 * //           groups: [ // EbsGroupList
 * //             "STRING_VALUE",
 * //           ],
 * //           kmsKeyId: "STRING_VALUE",
 * //         },
 * //         ecrRepository: { // EcrRepositoryConfiguration
 * //           repositoryPolicy: "STRING_VALUE",
 * //         },
 * //         iamRole: { // IamRoleConfiguration
 * //           trustPolicy: "STRING_VALUE",
 * //         },
 * //         efsFileSystem: { // EfsFileSystemConfiguration
 * //           fileSystemPolicy: "STRING_VALUE",
 * //         },
 * //         kmsKey: { // KmsKeyConfiguration
 * //           keyPolicies: { // KmsKeyPoliciesMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           grants: [ // KmsGrantConfigurationsList
 * //             { // KmsGrantConfiguration
 * //               operations: [ // KmsGrantOperationsList // required
 * //                 "STRING_VALUE",
 * //               ],
 * //               granteePrincipal: "STRING_VALUE", // required
 * //               retiringPrincipal: "STRING_VALUE",
 * //               constraints: { // KmsGrantConstraints
 * //                 encryptionContextEquals: { // KmsConstraintsMap
 * //                   "<keys>": "STRING_VALUE",
 * //                 },
 * //                 encryptionContextSubset: {
 * //                   "<keys>": "STRING_VALUE",
 * //                 },
 * //               },
 * //               issuingAccount: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //         rdsDbClusterSnapshot: { // RdsDbClusterSnapshotConfiguration
 * //           attributes: { // RdsDbClusterSnapshotAttributesMap
 * //             "<keys>": { // RdsDbClusterSnapshotAttributeValue Union: only one key present
 * //               accountIds: [ // RdsDbClusterSnapshotAccountIdsList
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           },
 * //           kmsKeyId: "STRING_VALUE",
 * //         },
 * //         rdsDbSnapshot: { // RdsDbSnapshotConfiguration
 * //           attributes: { // RdsDbSnapshotAttributesMap
 * //             "<keys>": { // RdsDbSnapshotAttributeValue Union: only one key present
 * //               accountIds: [ // RdsDbSnapshotAccountIdsList
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           },
 * //           kmsKeyId: "STRING_VALUE",
 * //         },
 * //         secretsManagerSecret: { // SecretsManagerSecretConfiguration
 * //           kmsKeyId: "STRING_VALUE",
 * //           secretPolicy: "STRING_VALUE",
 * //         },
 * //         s3Bucket: { // S3BucketConfiguration
 * //           bucketPolicy: "STRING_VALUE",
 * //           bucketAclGrants: [ // S3BucketAclGrantConfigurationsList
 * //             { // S3BucketAclGrantConfiguration
 * //               permission: "STRING_VALUE", // required
 * //               grantee: { // AclGrantee Union: only one key present
 * //                 id: "STRING_VALUE",
 * //                 uri: "STRING_VALUE",
 * //               },
 * //             },
 * //           ],
 * //           bucketPublicAccessBlock: { // S3PublicAccessBlockConfiguration
 * //             ignorePublicAcls: true || false, // required
 * //             restrictPublicBuckets: true || false, // required
 * //           },
 * //           accessPoints: { // S3AccessPointConfigurationsMap
 * //             "<keys>": { // S3AccessPointConfiguration
 * //               accessPointPolicy: "STRING_VALUE",
 * //               publicAccessBlock: {
 * //                 ignorePublicAcls: true || false, // required
 * //                 restrictPublicBuckets: true || false, // required
 * //               },
 * //               networkOrigin: { // NetworkOriginConfiguration Union: only one key present
 * //                 vpcConfiguration: { // VpcConfiguration
 * //                   vpcId: "STRING_VALUE", // required
 * //                 },
 * //                 internetConfiguration: {},
 * //               },
 * //             },
 * //           },
 * //         },
 * //         snsTopic: { // SnsTopicConfiguration
 * //           topicPolicy: "STRING_VALUE",
 * //         },
 * //         sqsQueue: { // SqsQueueConfiguration
 * //           queuePolicy: "STRING_VALUE",
 * //         },
 * //         s3ExpressDirectoryBucket: { // S3ExpressDirectoryBucketConfiguration
 * //           bucketPolicy: "STRING_VALUE",
 * //         },
 * //         dynamodbStream: { // DynamodbStreamConfiguration
 * //           streamPolicy: "STRING_VALUE",
 * //         },
 * //         dynamodbTable: { // DynamodbTableConfiguration
 * //           tablePolicy: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     status: "STRING_VALUE", // required
 * //     statusReason: { // AccessPreviewStatusReason
 * //       code: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAccessPreviewCommandInput - {@link GetAccessPreviewCommandInput}
 * @returns {@link GetAccessPreviewCommandOutput}
 * @see {@link GetAccessPreviewCommandInput} for command's `input` shape.
 * @see {@link GetAccessPreviewCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Throttling limit exceeded error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation exception error.</p>
 *
 * @throws {@link AccessAnalyzerServiceException}
 * <p>Base exception class for all service exceptions from AccessAnalyzer service.</p>
 *
 * @public
 */
export class GetAccessPreviewCommand extends $Command
  .classBuilder<
    GetAccessPreviewCommandInput,
    GetAccessPreviewCommandOutput,
    AccessAnalyzerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AccessAnalyzerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AccessAnalyzer", "GetAccessPreview", {})
  .n("AccessAnalyzerClient", "GetAccessPreviewCommand")
  .f(void 0, void 0)
  .ser(se_GetAccessPreviewCommand)
  .de(de_GetAccessPreviewCommand)
  .build() {}
