// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { GetFindingsRequest, GetFindingsResponse } from "../models/models_0";
import { GetFindings } from "../schemas/schemas_1_Get";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFindingsCommand}.
 */
export interface GetFindingsCommandInput extends GetFindingsRequest {}
/**
 * @public
 *
 * The output of {@link GetFindingsCommand}.
 */
export interface GetFindingsCommandOutput extends GetFindingsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the details of one or more findings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetFindingsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetFindingsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // import type { Macie2ClientConfig } from "@aws-sdk/client-macie2";
 * const config = {}; // type is Macie2ClientConfig
 * const client = new Macie2Client(config);
 * const input = { // GetFindingsRequest
 *   findingIds: [ // __listOf__string // required
 *     "STRING_VALUE",
 *   ],
 *   sortCriteria: { // SortCriteria
 *     attributeName: "STRING_VALUE",
 *     orderBy: "ASC" || "DESC",
 *   },
 * };
 * const command = new GetFindingsCommand(input);
 * const response = await client.send(command);
 * // { // GetFindingsResponse
 * //   findings: [ // __listOfFinding
 * //     { // Finding
 * //       accountId: "STRING_VALUE",
 * //       archived: true || false,
 * //       category: "CLASSIFICATION" || "POLICY",
 * //       classificationDetails: { // ClassificationDetails
 * //         detailedResultsLocation: "STRING_VALUE",
 * //         jobArn: "STRING_VALUE",
 * //         jobId: "STRING_VALUE",
 * //         originType: "SENSITIVE_DATA_DISCOVERY_JOB" || "AUTOMATED_SENSITIVE_DATA_DISCOVERY",
 * //         result: { // ClassificationResult
 * //           additionalOccurrences: true || false,
 * //           customDataIdentifiers: { // CustomDataIdentifiers
 * //             detections: [ // CustomDetections
 * //               { // CustomDetection
 * //                 arn: "STRING_VALUE",
 * //                 count: Number("long"),
 * //                 name: "STRING_VALUE",
 * //                 occurrences: { // Occurrences
 * //                   cells: [ // Cells
 * //                     { // Cell
 * //                       cellReference: "STRING_VALUE",
 * //                       column: Number("long"),
 * //                       columnName: "STRING_VALUE",
 * //                       row: Number("long"),
 * //                     },
 * //                   ],
 * //                   lineRanges: [ // Ranges
 * //                     { // Range
 * //                       end: Number("long"),
 * //                       start: Number("long"),
 * //                       startColumn: Number("long"),
 * //                     },
 * //                   ],
 * //                   offsetRanges: [
 * //                     {
 * //                       end: Number("long"),
 * //                       start: Number("long"),
 * //                       startColumn: Number("long"),
 * //                     },
 * //                   ],
 * //                   pages: [ // Pages
 * //                     { // Page
 * //                       lineRange: {
 * //                         end: Number("long"),
 * //                         start: Number("long"),
 * //                         startColumn: Number("long"),
 * //                       },
 * //                       offsetRange: {
 * //                         end: Number("long"),
 * //                         start: Number("long"),
 * //                         startColumn: Number("long"),
 * //                       },
 * //                       pageNumber: Number("long"),
 * //                     },
 * //                   ],
 * //                   records: [ // Records
 * //                     { // Record
 * //                       jsonPath: "STRING_VALUE",
 * //                       recordIndex: Number("long"),
 * //                     },
 * //                   ],
 * //                 },
 * //               },
 * //             ],
 * //             totalCount: Number("long"),
 * //           },
 * //           mimeType: "STRING_VALUE",
 * //           sensitiveData: [ // SensitiveData
 * //             { // SensitiveDataItem
 * //               category: "FINANCIAL_INFORMATION" || "PERSONAL_INFORMATION" || "CREDENTIALS" || "CUSTOM_IDENTIFIER",
 * //               detections: [ // DefaultDetections
 * //                 { // DefaultDetection
 * //                   count: Number("long"),
 * //                   occurrences: {
 * //                     cells: [
 * //                       {
 * //                         cellReference: "STRING_VALUE",
 * //                         column: Number("long"),
 * //                         columnName: "STRING_VALUE",
 * //                         row: Number("long"),
 * //                       },
 * //                     ],
 * //                     lineRanges: [
 * //                       {
 * //                         end: Number("long"),
 * //                         start: Number("long"),
 * //                         startColumn: Number("long"),
 * //                       },
 * //                     ],
 * //                     offsetRanges: [
 * //                       "<Range>",
 * //                     ],
 * //                     pages: [
 * //                       {
 * //                         lineRange: "<Range>",
 * //                         offsetRange: "<Range>",
 * //                         pageNumber: Number("long"),
 * //                       },
 * //                     ],
 * //                     records: [
 * //                       {
 * //                         jsonPath: "STRING_VALUE",
 * //                         recordIndex: Number("long"),
 * //                       },
 * //                     ],
 * //                   },
 * //                   type: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               totalCount: Number("long"),
 * //             },
 * //           ],
 * //           sizeClassified: Number("long"),
 * //           status: { // ClassificationResultStatus
 * //             code: "STRING_VALUE",
 * //             reason: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       count: Number("long"),
 * //       createdAt: new Date("TIMESTAMP"),
 * //       description: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       partition: "STRING_VALUE",
 * //       policyDetails: { // PolicyDetails
 * //         action: { // FindingAction
 * //           actionType: "AWS_API_CALL",
 * //           apiCallDetails: { // ApiCallDetails
 * //             api: "STRING_VALUE",
 * //             apiServiceName: "STRING_VALUE",
 * //             firstSeen: new Date("TIMESTAMP"),
 * //             lastSeen: new Date("TIMESTAMP"),
 * //           },
 * //         },
 * //         actor: { // FindingActor
 * //           domainDetails: { // DomainDetails
 * //             domainName: "STRING_VALUE",
 * //           },
 * //           ipAddressDetails: { // IpAddressDetails
 * //             ipAddressV4: "STRING_VALUE",
 * //             ipCity: { // IpCity
 * //               name: "STRING_VALUE",
 * //             },
 * //             ipCountry: { // IpCountry
 * //               code: "STRING_VALUE",
 * //               name: "STRING_VALUE",
 * //             },
 * //             ipGeoLocation: { // IpGeoLocation
 * //               lat: Number("double"),
 * //               lon: Number("double"),
 * //             },
 * //             ipOwner: { // IpOwner
 * //               asn: "STRING_VALUE",
 * //               asnOrg: "STRING_VALUE",
 * //               isp: "STRING_VALUE",
 * //               org: "STRING_VALUE",
 * //             },
 * //           },
 * //           userIdentity: { // UserIdentity
 * //             assumedRole: { // AssumedRole
 * //               accessKeyId: "STRING_VALUE",
 * //               accountId: "STRING_VALUE",
 * //               arn: "STRING_VALUE",
 * //               principalId: "STRING_VALUE",
 * //               sessionContext: { // SessionContext
 * //                 attributes: { // SessionContextAttributes
 * //                   creationDate: new Date("TIMESTAMP"),
 * //                   mfaAuthenticated: true || false,
 * //                 },
 * //                 sessionIssuer: { // SessionIssuer
 * //                   accountId: "STRING_VALUE",
 * //                   arn: "STRING_VALUE",
 * //                   principalId: "STRING_VALUE",
 * //                   type: "STRING_VALUE",
 * //                   userName: "STRING_VALUE",
 * //                 },
 * //               },
 * //             },
 * //             awsAccount: { // AwsAccount
 * //               accountId: "STRING_VALUE",
 * //               principalId: "STRING_VALUE",
 * //             },
 * //             awsService: { // AwsService
 * //               invokedBy: "STRING_VALUE",
 * //             },
 * //             federatedUser: { // FederatedUser
 * //               accessKeyId: "STRING_VALUE",
 * //               accountId: "STRING_VALUE",
 * //               arn: "STRING_VALUE",
 * //               principalId: "STRING_VALUE",
 * //               sessionContext: {
 * //                 attributes: {
 * //                   creationDate: new Date("TIMESTAMP"),
 * //                   mfaAuthenticated: true || false,
 * //                 },
 * //                 sessionIssuer: {
 * //                   accountId: "STRING_VALUE",
 * //                   arn: "STRING_VALUE",
 * //                   principalId: "STRING_VALUE",
 * //                   type: "STRING_VALUE",
 * //                   userName: "STRING_VALUE",
 * //                 },
 * //               },
 * //             },
 * //             iamUser: { // IamUser
 * //               accountId: "STRING_VALUE",
 * //               arn: "STRING_VALUE",
 * //               principalId: "STRING_VALUE",
 * //               userName: "STRING_VALUE",
 * //             },
 * //             root: { // UserIdentityRoot
 * //               accountId: "STRING_VALUE",
 * //               arn: "STRING_VALUE",
 * //               principalId: "STRING_VALUE",
 * //             },
 * //             type: "AssumedRole" || "IAMUser" || "FederatedUser" || "Root" || "AWSAccount" || "AWSService",
 * //           },
 * //         },
 * //       },
 * //       region: "STRING_VALUE",
 * //       resourcesAffected: { // ResourcesAffected
 * //         s3Bucket: { // S3Bucket
 * //           allowsUnencryptedObjectUploads: "TRUE" || "FALSE" || "UNKNOWN",
 * //           arn: "STRING_VALUE",
 * //           createdAt: new Date("TIMESTAMP"),
 * //           defaultServerSideEncryption: { // ServerSideEncryption
 * //             encryptionType: "NONE" || "AES256" || "aws:kms" || "UNKNOWN" || "aws:kms:dsse",
 * //             kmsMasterKeyId: "STRING_VALUE",
 * //           },
 * //           name: "STRING_VALUE",
 * //           owner: { // S3BucketOwner
 * //             displayName: "STRING_VALUE",
 * //             id: "STRING_VALUE",
 * //           },
 * //           publicAccess: { // BucketPublicAccess
 * //             effectivePermission: "PUBLIC" || "NOT_PUBLIC" || "UNKNOWN",
 * //             permissionConfiguration: { // BucketPermissionConfiguration
 * //               accountLevelPermissions: { // AccountLevelPermissions
 * //                 blockPublicAccess: { // BlockPublicAccess
 * //                   blockPublicAcls: true || false,
 * //                   blockPublicPolicy: true || false,
 * //                   ignorePublicAcls: true || false,
 * //                   restrictPublicBuckets: true || false,
 * //                 },
 * //               },
 * //               bucketLevelPermissions: { // BucketLevelPermissions
 * //                 accessControlList: { // AccessControlList
 * //                   allowsPublicReadAccess: true || false,
 * //                   allowsPublicWriteAccess: true || false,
 * //                 },
 * //                 blockPublicAccess: {
 * //                   blockPublicAcls: true || false,
 * //                   blockPublicPolicy: true || false,
 * //                   ignorePublicAcls: true || false,
 * //                   restrictPublicBuckets: true || false,
 * //                 },
 * //                 bucketPolicy: { // BucketPolicy
 * //                   allowsPublicReadAccess: true || false,
 * //                   allowsPublicWriteAccess: true || false,
 * //                 },
 * //               },
 * //             },
 * //           },
 * //           tags: [ // KeyValuePairList
 * //             { // KeyValuePair
 * //               key: "STRING_VALUE",
 * //               value: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //         s3Object: { // S3Object
 * //           bucketArn: "STRING_VALUE",
 * //           eTag: "STRING_VALUE",
 * //           extension: "STRING_VALUE",
 * //           key: "STRING_VALUE",
 * //           lastModified: new Date("TIMESTAMP"),
 * //           path: "STRING_VALUE",
 * //           publicAccess: true || false,
 * //           serverSideEncryption: {
 * //             encryptionType: "NONE" || "AES256" || "aws:kms" || "UNKNOWN" || "aws:kms:dsse",
 * //             kmsMasterKeyId: "STRING_VALUE",
 * //           },
 * //           size: Number("long"),
 * //           storageClass: "STANDARD" || "REDUCED_REDUNDANCY" || "STANDARD_IA" || "INTELLIGENT_TIERING" || "DEEP_ARCHIVE" || "ONEZONE_IA" || "GLACIER" || "GLACIER_IR" || "OUTPOSTS",
 * //           tags: [
 * //             {
 * //               key: "STRING_VALUE",
 * //               value: "STRING_VALUE",
 * //             },
 * //           ],
 * //           versionId: "STRING_VALUE",
 * //         },
 * //       },
 * //       sample: true || false,
 * //       schemaVersion: "STRING_VALUE",
 * //       severity: { // Severity
 * //         description: "Low" || "Medium" || "High",
 * //         score: Number("long"),
 * //       },
 * //       title: "STRING_VALUE",
 * //       type: "SensitiveData:S3Object/Multiple" || "SensitiveData:S3Object/Financial" || "SensitiveData:S3Object/Personal" || "SensitiveData:S3Object/Credentials" || "SensitiveData:S3Object/CustomIdentifier" || "Policy:IAMUser/S3BucketPublic" || "Policy:IAMUser/S3BucketSharedExternally" || "Policy:IAMUser/S3BucketReplicatedExternally" || "Policy:IAMUser/S3BucketEncryptionDisabled" || "Policy:IAMUser/S3BlockPublicAccessDisabled" || "Policy:IAMUser/S3BucketSharedWithCloudFront",
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetFindingsCommandInput - {@link GetFindingsCommandInput}
 * @returns {@link GetFindingsCommandOutput}
 * @see {@link GetFindingsCommandInput} for command's `input` shape.
 * @see {@link GetFindingsCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Provides information about an error that occurred due to insufficient access to a specified resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Provides information about an error that occurred due to a versioning conflict for a specified resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Provides information about an error that occurred due to an unknown internal server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Provides information about an error that occurred because a specified resource wasn't found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Provides information about an error that occurred due to one or more service quotas for an account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Provides information about an error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Provides information about an error that occurred due to a syntax error in a request.</p>
 *
 * @throws {@link Macie2ServiceException}
 * <p>Base exception class for all service exceptions from Macie2 service.</p>
 *
 *
 * @public
 */
export class GetFindingsCommand extends $Command
  .classBuilder<
    GetFindingsCommandInput,
    GetFindingsCommandOutput,
    Macie2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Macie2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Macie2", "GetFindings", {})
  .n("Macie2Client", "GetFindingsCommand")
  .sc(GetFindings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFindingsRequest;
      output: GetFindingsResponse;
    };
    sdk: {
      input: GetFindingsCommandInput;
      output: GetFindingsCommandOutput;
    };
  };
}
