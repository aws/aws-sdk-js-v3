// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDistributionRequest, CreateDistributionResult } from "../models/models_0";
import { CreateDistribution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDistributionCommand}.
 */
export interface CreateDistributionCommandInput extends CreateDistributionRequest {}
/**
 * @public
 *
 * The output of {@link CreateDistributionCommand}.
 */
export interface CreateDistributionCommandOutput extends CreateDistributionResult, __MetadataBearer {}

/**
 * Creates a CloudFront distribution.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateDistributionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateDistributionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // CreateDistributionRequest
 *   DistributionConfig: { // DistributionConfig
 *     CallerReference: "STRING_VALUE", // required
 *     Aliases: { // Aliases
 *       Quantity: Number("int"), // required
 *       Items: [ // AliasList
 *         "STRING_VALUE",
 *       ],
 *     },
 *     DefaultRootObject: "STRING_VALUE",
 *     Origins: { // Origins
 *       Quantity: Number("int"), // required
 *       Items: [ // OriginList // required
 *         { // Origin
 *           Id: "STRING_VALUE", // required
 *           DomainName: "STRING_VALUE", // required
 *           OriginPath: "STRING_VALUE",
 *           CustomHeaders: { // CustomHeaders
 *             Quantity: Number("int"), // required
 *             Items: [ // OriginCustomHeadersList
 *               { // OriginCustomHeader
 *                 HeaderName: "STRING_VALUE", // required
 *                 HeaderValue: "STRING_VALUE", // required
 *               },
 *             ],
 *           },
 *           S3OriginConfig: { // S3OriginConfig
 *             OriginAccessIdentity: "STRING_VALUE", // required
 *             OriginReadTimeout: Number("int"),
 *           },
 *           CustomOriginConfig: { // CustomOriginConfig
 *             HTTPPort: Number("int"), // required
 *             HTTPSPort: Number("int"), // required
 *             OriginProtocolPolicy: "http-only" || "match-viewer" || "https-only", // required
 *             OriginSslProtocols: { // OriginSslProtocols
 *               Quantity: Number("int"), // required
 *               Items: [ // SslProtocolsList // required
 *                 "SSLv3" || "TLSv1" || "TLSv1.1" || "TLSv1.2",
 *               ],
 *             },
 *             OriginReadTimeout: Number("int"),
 *             OriginKeepaliveTimeout: Number("int"),
 *             IpAddressType: "ipv4" || "ipv6" || "dualstack",
 *             OriginMtlsConfig: { // OriginMtlsConfig
 *               ClientCertificateArn: "STRING_VALUE", // required
 *             },
 *           },
 *           VpcOriginConfig: { // VpcOriginConfig
 *             VpcOriginId: "STRING_VALUE", // required
 *             OwnerAccountId: "STRING_VALUE",
 *             OriginReadTimeout: Number("int"),
 *             OriginKeepaliveTimeout: Number("int"),
 *           },
 *           ConnectionAttempts: Number("int"),
 *           ConnectionTimeout: Number("int"),
 *           ResponseCompletionTimeout: Number("int"),
 *           OriginShield: { // OriginShield
 *             Enabled: true || false, // required
 *             OriginShieldRegion: "STRING_VALUE",
 *           },
 *           OriginAccessControlId: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *     OriginGroups: { // OriginGroups
 *       Quantity: Number("int"), // required
 *       Items: [ // OriginGroupList
 *         { // OriginGroup
 *           Id: "STRING_VALUE", // required
 *           FailoverCriteria: { // OriginGroupFailoverCriteria
 *             StatusCodes: { // StatusCodes
 *               Quantity: Number("int"), // required
 *               Items: [ // StatusCodeList // required
 *                 Number("int"),
 *               ],
 *             },
 *           },
 *           Members: { // OriginGroupMembers
 *             Quantity: Number("int"), // required
 *             Items: [ // OriginGroupMemberList // required
 *               { // OriginGroupMember
 *                 OriginId: "STRING_VALUE", // required
 *               },
 *             ],
 *           },
 *           SelectionCriteria: "default" || "media-quality-based",
 *         },
 *       ],
 *     },
 *     DefaultCacheBehavior: { // DefaultCacheBehavior
 *       TargetOriginId: "STRING_VALUE", // required
 *       TrustedSigners: { // TrustedSigners
 *         Enabled: true || false, // required
 *         Quantity: Number("int"), // required
 *         Items: [ // AwsAccountNumberList
 *           "STRING_VALUE",
 *         ],
 *       },
 *       TrustedKeyGroups: { // TrustedKeyGroups
 *         Enabled: true || false, // required
 *         Quantity: Number("int"), // required
 *         Items: [ // TrustedKeyGroupIdList
 *           "STRING_VALUE",
 *         ],
 *       },
 *       ViewerProtocolPolicy: "allow-all" || "https-only" || "redirect-to-https", // required
 *       AllowedMethods: { // AllowedMethods
 *         Quantity: Number("int"), // required
 *         Items: [ // MethodsList // required
 *           "GET" || "HEAD" || "POST" || "PUT" || "PATCH" || "OPTIONS" || "DELETE",
 *         ],
 *         CachedMethods: { // CachedMethods
 *           Quantity: Number("int"), // required
 *           Items: [ // required
 *             "GET" || "HEAD" || "POST" || "PUT" || "PATCH" || "OPTIONS" || "DELETE",
 *           ],
 *         },
 *       },
 *       SmoothStreaming: true || false,
 *       Compress: true || false,
 *       LambdaFunctionAssociations: { // LambdaFunctionAssociations
 *         Quantity: Number("int"), // required
 *         Items: [ // LambdaFunctionAssociationList
 *           { // LambdaFunctionAssociation
 *             LambdaFunctionARN: "STRING_VALUE", // required
 *             EventType: "viewer-request" || "viewer-response" || "origin-request" || "origin-response", // required
 *             IncludeBody: true || false,
 *           },
 *         ],
 *       },
 *       FunctionAssociations: { // FunctionAssociations
 *         Quantity: Number("int"), // required
 *         Items: [ // FunctionAssociationList
 *           { // FunctionAssociation
 *             FunctionARN: "STRING_VALUE", // required
 *             EventType: "viewer-request" || "viewer-response" || "origin-request" || "origin-response", // required
 *           },
 *         ],
 *       },
 *       FieldLevelEncryptionId: "STRING_VALUE",
 *       RealtimeLogConfigArn: "STRING_VALUE",
 *       CachePolicyId: "STRING_VALUE",
 *       OriginRequestPolicyId: "STRING_VALUE",
 *       ResponseHeadersPolicyId: "STRING_VALUE",
 *       GrpcConfig: { // GrpcConfig
 *         Enabled: true || false, // required
 *       },
 *       ForwardedValues: { // ForwardedValues
 *         QueryString: true || false, // required
 *         Cookies: { // CookiePreference
 *           Forward: "none" || "whitelist" || "all", // required
 *           WhitelistedNames: { // CookieNames
 *             Quantity: Number("int"), // required
 *             Items: [ // CookieNameList
 *               "STRING_VALUE",
 *             ],
 *           },
 *         },
 *         Headers: { // Headers
 *           Quantity: Number("int"), // required
 *           Items: [ // HeaderList
 *             "STRING_VALUE",
 *           ],
 *         },
 *         QueryStringCacheKeys: { // QueryStringCacheKeys
 *           Quantity: Number("int"), // required
 *           Items: [ // QueryStringCacheKeysList
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *       MinTTL: Number("long"),
 *       DefaultTTL: Number("long"),
 *       MaxTTL: Number("long"),
 *     },
 *     CacheBehaviors: { // CacheBehaviors
 *       Quantity: Number("int"), // required
 *       Items: [ // CacheBehaviorList
 *         { // CacheBehavior
 *           PathPattern: "STRING_VALUE", // required
 *           TargetOriginId: "STRING_VALUE", // required
 *           TrustedSigners: {
 *             Enabled: true || false, // required
 *             Quantity: Number("int"), // required
 *             Items: [
 *               "STRING_VALUE",
 *             ],
 *           },
 *           TrustedKeyGroups: {
 *             Enabled: true || false, // required
 *             Quantity: Number("int"), // required
 *             Items: [
 *               "STRING_VALUE",
 *             ],
 *           },
 *           ViewerProtocolPolicy: "allow-all" || "https-only" || "redirect-to-https", // required
 *           AllowedMethods: {
 *             Quantity: Number("int"), // required
 *             Items: "<MethodsList>", // required
 *             CachedMethods: {
 *               Quantity: Number("int"), // required
 *               Items: "<MethodsList>", // required
 *             },
 *           },
 *           SmoothStreaming: true || false,
 *           Compress: true || false,
 *           LambdaFunctionAssociations: {
 *             Quantity: Number("int"), // required
 *             Items: [
 *               {
 *                 LambdaFunctionARN: "STRING_VALUE", // required
 *                 EventType: "viewer-request" || "viewer-response" || "origin-request" || "origin-response", // required
 *                 IncludeBody: true || false,
 *               },
 *             ],
 *           },
 *           FunctionAssociations: {
 *             Quantity: Number("int"), // required
 *             Items: [
 *               {
 *                 FunctionARN: "STRING_VALUE", // required
 *                 EventType: "viewer-request" || "viewer-response" || "origin-request" || "origin-response", // required
 *               },
 *             ],
 *           },
 *           FieldLevelEncryptionId: "STRING_VALUE",
 *           RealtimeLogConfigArn: "STRING_VALUE",
 *           CachePolicyId: "STRING_VALUE",
 *           OriginRequestPolicyId: "STRING_VALUE",
 *           ResponseHeadersPolicyId: "STRING_VALUE",
 *           GrpcConfig: {
 *             Enabled: true || false, // required
 *           },
 *           ForwardedValues: {
 *             QueryString: true || false, // required
 *             Cookies: {
 *               Forward: "none" || "whitelist" || "all", // required
 *               WhitelistedNames: {
 *                 Quantity: Number("int"), // required
 *                 Items: [
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *             },
 *             Headers: {
 *               Quantity: Number("int"), // required
 *               Items: [
 *                 "STRING_VALUE",
 *               ],
 *             },
 *             QueryStringCacheKeys: {
 *               Quantity: Number("int"), // required
 *               Items: [
 *                 "STRING_VALUE",
 *               ],
 *             },
 *           },
 *           MinTTL: Number("long"),
 *           DefaultTTL: Number("long"),
 *           MaxTTL: Number("long"),
 *         },
 *       ],
 *     },
 *     CustomErrorResponses: { // CustomErrorResponses
 *       Quantity: Number("int"), // required
 *       Items: [ // CustomErrorResponseList
 *         { // CustomErrorResponse
 *           ErrorCode: Number("int"), // required
 *           ResponsePagePath: "STRING_VALUE",
 *           ResponseCode: "STRING_VALUE",
 *           ErrorCachingMinTTL: Number("long"),
 *         },
 *       ],
 *     },
 *     Comment: "STRING_VALUE", // required
 *     Logging: { // LoggingConfig
 *       Enabled: true || false,
 *       IncludeCookies: true || false,
 *       Bucket: "STRING_VALUE",
 *       Prefix: "STRING_VALUE",
 *     },
 *     PriceClass: "PriceClass_100" || "PriceClass_200" || "PriceClass_All" || "None",
 *     Enabled: true || false, // required
 *     ViewerCertificate: { // ViewerCertificate
 *       CloudFrontDefaultCertificate: true || false,
 *       IAMCertificateId: "STRING_VALUE",
 *       ACMCertificateArn: "STRING_VALUE",
 *       SSLSupportMethod: "sni-only" || "vip" || "static-ip",
 *       MinimumProtocolVersion: "SSLv3" || "TLSv1" || "TLSv1_2016" || "TLSv1.1_2016" || "TLSv1.2_2018" || "TLSv1.2_2019" || "TLSv1.2_2021" || "TLSv1.3_2025" || "TLSv1.2_2025",
 *       Certificate: "STRING_VALUE",
 *       CertificateSource: "cloudfront" || "iam" || "acm",
 *     },
 *     Restrictions: { // Restrictions
 *       GeoRestriction: { // GeoRestriction
 *         RestrictionType: "blacklist" || "whitelist" || "none", // required
 *         Quantity: Number("int"), // required
 *         Items: [ // LocationList
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *     WebACLId: "STRING_VALUE",
 *     HttpVersion: "http1.1" || "http2" || "http3" || "http2and3",
 *     IsIPV6Enabled: true || false,
 *     ContinuousDeploymentPolicyId: "STRING_VALUE",
 *     Staging: true || false,
 *     AnycastIpListId: "STRING_VALUE",
 *     TenantConfig: { // TenantConfig
 *       ParameterDefinitions: [ // ParameterDefinitions
 *         { // ParameterDefinition
 *           Name: "STRING_VALUE", // required
 *           Definition: { // ParameterDefinitionSchema
 *             StringSchema: { // StringSchemaConfig
 *               Comment: "STRING_VALUE",
 *               DefaultValue: "STRING_VALUE",
 *               Required: true || false, // required
 *             },
 *           },
 *         },
 *       ],
 *     },
 *     ConnectionMode: "direct" || "tenant-only",
 *     ViewerMtlsConfig: { // ViewerMtlsConfig
 *       Mode: "required" || "optional" || "passthrough",
 *       TrustStoreConfig: { // TrustStoreConfig
 *         TrustStoreId: "STRING_VALUE", // required
 *         AdvertiseTrustStoreCaNames: true || false,
 *         IgnoreCertificateExpiry: true || false,
 *       },
 *     },
 *     ConnectionFunctionAssociation: { // ConnectionFunctionAssociation
 *       Id: "STRING_VALUE", // required
 *     },
 *     CacheTagConfig: { // CacheTagConfig
 *       HeaderName: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new CreateDistributionCommand(input);
 * const response = await client.send(command);
 * // { // CreateDistributionResult
 * //   Distribution: { // Distribution
 * //     Id: "STRING_VALUE", // required
 * //     ARN: "STRING_VALUE", // required
 * //     Status: "STRING_VALUE", // required
 * //     LastModifiedTime: new Date("TIMESTAMP"), // required
 * //     InProgressInvalidationBatches: Number("int"), // required
 * //     DomainName: "STRING_VALUE", // required
 * //     ActiveTrustedSigners: { // ActiveTrustedSigners
 * //       Enabled: true || false, // required
 * //       Quantity: Number("int"), // required
 * //       Items: [ // SignerList
 * //         { // Signer
 * //           AwsAccountNumber: "STRING_VALUE",
 * //           KeyPairIds: { // KeyPairIds
 * //             Quantity: Number("int"), // required
 * //             Items: [ // KeyPairIdList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //     },
 * //     ActiveTrustedKeyGroups: { // ActiveTrustedKeyGroups
 * //       Enabled: true || false, // required
 * //       Quantity: Number("int"), // required
 * //       Items: [ // KGKeyPairIdsList
 * //         { // KGKeyPairIds
 * //           KeyGroupId: "STRING_VALUE",
 * //           KeyPairIds: {
 * //             Quantity: Number("int"), // required
 * //             Items: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //     },
 * //     DistributionConfig: { // DistributionConfig
 * //       CallerReference: "STRING_VALUE", // required
 * //       Aliases: { // Aliases
 * //         Quantity: Number("int"), // required
 * //         Items: [ // AliasList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       DefaultRootObject: "STRING_VALUE",
 * //       Origins: { // Origins
 * //         Quantity: Number("int"), // required
 * //         Items: [ // OriginList // required
 * //           { // Origin
 * //             Id: "STRING_VALUE", // required
 * //             DomainName: "STRING_VALUE", // required
 * //             OriginPath: "STRING_VALUE",
 * //             CustomHeaders: { // CustomHeaders
 * //               Quantity: Number("int"), // required
 * //               Items: [ // OriginCustomHeadersList
 * //                 { // OriginCustomHeader
 * //                   HeaderName: "STRING_VALUE", // required
 * //                   HeaderValue: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //             },
 * //             S3OriginConfig: { // S3OriginConfig
 * //               OriginAccessIdentity: "STRING_VALUE", // required
 * //               OriginReadTimeout: Number("int"),
 * //             },
 * //             CustomOriginConfig: { // CustomOriginConfig
 * //               HTTPPort: Number("int"), // required
 * //               HTTPSPort: Number("int"), // required
 * //               OriginProtocolPolicy: "http-only" || "match-viewer" || "https-only", // required
 * //               OriginSslProtocols: { // OriginSslProtocols
 * //                 Quantity: Number("int"), // required
 * //                 Items: [ // SslProtocolsList // required
 * //                   "SSLv3" || "TLSv1" || "TLSv1.1" || "TLSv1.2",
 * //                 ],
 * //               },
 * //               OriginReadTimeout: Number("int"),
 * //               OriginKeepaliveTimeout: Number("int"),
 * //               IpAddressType: "ipv4" || "ipv6" || "dualstack",
 * //               OriginMtlsConfig: { // OriginMtlsConfig
 * //                 ClientCertificateArn: "STRING_VALUE", // required
 * //               },
 * //             },
 * //             VpcOriginConfig: { // VpcOriginConfig
 * //               VpcOriginId: "STRING_VALUE", // required
 * //               OwnerAccountId: "STRING_VALUE",
 * //               OriginReadTimeout: Number("int"),
 * //               OriginKeepaliveTimeout: Number("int"),
 * //             },
 * //             ConnectionAttempts: Number("int"),
 * //             ConnectionTimeout: Number("int"),
 * //             ResponseCompletionTimeout: Number("int"),
 * //             OriginShield: { // OriginShield
 * //               Enabled: true || false, // required
 * //               OriginShieldRegion: "STRING_VALUE",
 * //             },
 * //             OriginAccessControlId: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       OriginGroups: { // OriginGroups
 * //         Quantity: Number("int"), // required
 * //         Items: [ // OriginGroupList
 * //           { // OriginGroup
 * //             Id: "STRING_VALUE", // required
 * //             FailoverCriteria: { // OriginGroupFailoverCriteria
 * //               StatusCodes: { // StatusCodes
 * //                 Quantity: Number("int"), // required
 * //                 Items: [ // StatusCodeList // required
 * //                   Number("int"),
 * //                 ],
 * //               },
 * //             },
 * //             Members: { // OriginGroupMembers
 * //               Quantity: Number("int"), // required
 * //               Items: [ // OriginGroupMemberList // required
 * //                 { // OriginGroupMember
 * //                   OriginId: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //             },
 * //             SelectionCriteria: "default" || "media-quality-based",
 * //           },
 * //         ],
 * //       },
 * //       DefaultCacheBehavior: { // DefaultCacheBehavior
 * //         TargetOriginId: "STRING_VALUE", // required
 * //         TrustedSigners: { // TrustedSigners
 * //           Enabled: true || false, // required
 * //           Quantity: Number("int"), // required
 * //           Items: [ // AwsAccountNumberList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         TrustedKeyGroups: { // TrustedKeyGroups
 * //           Enabled: true || false, // required
 * //           Quantity: Number("int"), // required
 * //           Items: [ // TrustedKeyGroupIdList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         ViewerProtocolPolicy: "allow-all" || "https-only" || "redirect-to-https", // required
 * //         AllowedMethods: { // AllowedMethods
 * //           Quantity: Number("int"), // required
 * //           Items: [ // MethodsList // required
 * //             "GET" || "HEAD" || "POST" || "PUT" || "PATCH" || "OPTIONS" || "DELETE",
 * //           ],
 * //           CachedMethods: { // CachedMethods
 * //             Quantity: Number("int"), // required
 * //             Items: [ // required
 * //               "GET" || "HEAD" || "POST" || "PUT" || "PATCH" || "OPTIONS" || "DELETE",
 * //             ],
 * //           },
 * //         },
 * //         SmoothStreaming: true || false,
 * //         Compress: true || false,
 * //         LambdaFunctionAssociations: { // LambdaFunctionAssociations
 * //           Quantity: Number("int"), // required
 * //           Items: [ // LambdaFunctionAssociationList
 * //             { // LambdaFunctionAssociation
 * //               LambdaFunctionARN: "STRING_VALUE", // required
 * //               EventType: "viewer-request" || "viewer-response" || "origin-request" || "origin-response", // required
 * //               IncludeBody: true || false,
 * //             },
 * //           ],
 * //         },
 * //         FunctionAssociations: { // FunctionAssociations
 * //           Quantity: Number("int"), // required
 * //           Items: [ // FunctionAssociationList
 * //             { // FunctionAssociation
 * //               FunctionARN: "STRING_VALUE", // required
 * //               EventType: "viewer-request" || "viewer-response" || "origin-request" || "origin-response", // required
 * //             },
 * //           ],
 * //         },
 * //         FieldLevelEncryptionId: "STRING_VALUE",
 * //         RealtimeLogConfigArn: "STRING_VALUE",
 * //         CachePolicyId: "STRING_VALUE",
 * //         OriginRequestPolicyId: "STRING_VALUE",
 * //         ResponseHeadersPolicyId: "STRING_VALUE",
 * //         GrpcConfig: { // GrpcConfig
 * //           Enabled: true || false, // required
 * //         },
 * //         ForwardedValues: { // ForwardedValues
 * //           QueryString: true || false, // required
 * //           Cookies: { // CookiePreference
 * //             Forward: "none" || "whitelist" || "all", // required
 * //             WhitelistedNames: { // CookieNames
 * //               Quantity: Number("int"), // required
 * //               Items: [ // CookieNameList
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           },
 * //           Headers: { // Headers
 * //             Quantity: Number("int"), // required
 * //             Items: [ // HeaderList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           QueryStringCacheKeys: { // QueryStringCacheKeys
 * //             Quantity: Number("int"), // required
 * //             Items: [ // QueryStringCacheKeysList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //         MinTTL: Number("long"),
 * //         DefaultTTL: Number("long"),
 * //         MaxTTL: Number("long"),
 * //       },
 * //       CacheBehaviors: { // CacheBehaviors
 * //         Quantity: Number("int"), // required
 * //         Items: [ // CacheBehaviorList
 * //           { // CacheBehavior
 * //             PathPattern: "STRING_VALUE", // required
 * //             TargetOriginId: "STRING_VALUE", // required
 * //             TrustedSigners: {
 * //               Enabled: true || false, // required
 * //               Quantity: Number("int"), // required
 * //               Items: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             TrustedKeyGroups: {
 * //               Enabled: true || false, // required
 * //               Quantity: Number("int"), // required
 * //               Items: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             ViewerProtocolPolicy: "allow-all" || "https-only" || "redirect-to-https", // required
 * //             AllowedMethods: {
 * //               Quantity: Number("int"), // required
 * //               Items: "<MethodsList>", // required
 * //               CachedMethods: {
 * //                 Quantity: Number("int"), // required
 * //                 Items: "<MethodsList>", // required
 * //               },
 * //             },
 * //             SmoothStreaming: true || false,
 * //             Compress: true || false,
 * //             LambdaFunctionAssociations: {
 * //               Quantity: Number("int"), // required
 * //               Items: [
 * //                 {
 * //                   LambdaFunctionARN: "STRING_VALUE", // required
 * //                   EventType: "viewer-request" || "viewer-response" || "origin-request" || "origin-response", // required
 * //                   IncludeBody: true || false,
 * //                 },
 * //               ],
 * //             },
 * //             FunctionAssociations: {
 * //               Quantity: Number("int"), // required
 * //               Items: [
 * //                 {
 * //                   FunctionARN: "STRING_VALUE", // required
 * //                   EventType: "viewer-request" || "viewer-response" || "origin-request" || "origin-response", // required
 * //                 },
 * //               ],
 * //             },
 * //             FieldLevelEncryptionId: "STRING_VALUE",
 * //             RealtimeLogConfigArn: "STRING_VALUE",
 * //             CachePolicyId: "STRING_VALUE",
 * //             OriginRequestPolicyId: "STRING_VALUE",
 * //             ResponseHeadersPolicyId: "STRING_VALUE",
 * //             GrpcConfig: {
 * //               Enabled: true || false, // required
 * //             },
 * //             ForwardedValues: {
 * //               QueryString: true || false, // required
 * //               Cookies: {
 * //                 Forward: "none" || "whitelist" || "all", // required
 * //                 WhitelistedNames: {
 * //                   Quantity: Number("int"), // required
 * //                   Items: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               },
 * //               Headers: {
 * //                 Quantity: Number("int"), // required
 * //                 Items: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //               QueryStringCacheKeys: {
 * //                 Quantity: Number("int"), // required
 * //                 Items: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //             },
 * //             MinTTL: Number("long"),
 * //             DefaultTTL: Number("long"),
 * //             MaxTTL: Number("long"),
 * //           },
 * //         ],
 * //       },
 * //       CustomErrorResponses: { // CustomErrorResponses
 * //         Quantity: Number("int"), // required
 * //         Items: [ // CustomErrorResponseList
 * //           { // CustomErrorResponse
 * //             ErrorCode: Number("int"), // required
 * //             ResponsePagePath: "STRING_VALUE",
 * //             ResponseCode: "STRING_VALUE",
 * //             ErrorCachingMinTTL: Number("long"),
 * //           },
 * //         ],
 * //       },
 * //       Comment: "STRING_VALUE", // required
 * //       Logging: { // LoggingConfig
 * //         Enabled: true || false,
 * //         IncludeCookies: true || false,
 * //         Bucket: "STRING_VALUE",
 * //         Prefix: "STRING_VALUE",
 * //       },
 * //       PriceClass: "PriceClass_100" || "PriceClass_200" || "PriceClass_All" || "None",
 * //       Enabled: true || false, // required
 * //       ViewerCertificate: { // ViewerCertificate
 * //         CloudFrontDefaultCertificate: true || false,
 * //         IAMCertificateId: "STRING_VALUE",
 * //         ACMCertificateArn: "STRING_VALUE",
 * //         SSLSupportMethod: "sni-only" || "vip" || "static-ip",
 * //         MinimumProtocolVersion: "SSLv3" || "TLSv1" || "TLSv1_2016" || "TLSv1.1_2016" || "TLSv1.2_2018" || "TLSv1.2_2019" || "TLSv1.2_2021" || "TLSv1.3_2025" || "TLSv1.2_2025",
 * //         Certificate: "STRING_VALUE",
 * //         CertificateSource: "cloudfront" || "iam" || "acm",
 * //       },
 * //       Restrictions: { // Restrictions
 * //         GeoRestriction: { // GeoRestriction
 * //           RestrictionType: "blacklist" || "whitelist" || "none", // required
 * //           Quantity: Number("int"), // required
 * //           Items: [ // LocationList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       WebACLId: "STRING_VALUE",
 * //       HttpVersion: "http1.1" || "http2" || "http3" || "http2and3",
 * //       IsIPV6Enabled: true || false,
 * //       ContinuousDeploymentPolicyId: "STRING_VALUE",
 * //       Staging: true || false,
 * //       AnycastIpListId: "STRING_VALUE",
 * //       TenantConfig: { // TenantConfig
 * //         ParameterDefinitions: [ // ParameterDefinitions
 * //           { // ParameterDefinition
 * //             Name: "STRING_VALUE", // required
 * //             Definition: { // ParameterDefinitionSchema
 * //               StringSchema: { // StringSchemaConfig
 * //                 Comment: "STRING_VALUE",
 * //                 DefaultValue: "STRING_VALUE",
 * //                 Required: true || false, // required
 * //               },
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       ConnectionMode: "direct" || "tenant-only",
 * //       ViewerMtlsConfig: { // ViewerMtlsConfig
 * //         Mode: "required" || "optional" || "passthrough",
 * //         TrustStoreConfig: { // TrustStoreConfig
 * //           TrustStoreId: "STRING_VALUE", // required
 * //           AdvertiseTrustStoreCaNames: true || false,
 * //           IgnoreCertificateExpiry: true || false,
 * //         },
 * //       },
 * //       ConnectionFunctionAssociation: { // ConnectionFunctionAssociation
 * //         Id: "STRING_VALUE", // required
 * //       },
 * //       CacheTagConfig: { // CacheTagConfig
 * //         HeaderName: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     AliasICPRecordals: [ // AliasICPRecordals
 * //       { // AliasICPRecordal
 * //         CNAME: "STRING_VALUE",
 * //         ICPRecordalStatus: "APPROVED" || "SUSPENDED" || "PENDING",
 * //       },
 * //     ],
 * //   },
 * //   Location: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDistributionCommandInput - {@link CreateDistributionCommandInput}
 * @returns {@link CreateDistributionCommandOutput}
 * @see {@link CreateDistributionCommandInput} for command's `input` shape.
 * @see {@link CreateDistributionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *
 * Access denied.
 *
 * @throws {@link CNAMEAlreadyExists} (client fault)
 *
 * The CNAME specified is already defined for CloudFront.
 *
 * @throws {@link ContinuousDeploymentPolicyInUse} (client fault)
 *
 * You cannot delete a continuous deployment policy that is associated with a primary distribution.
 *
 * @throws {@link DistributionAlreadyExists} (client fault)
 *
 * The caller reference you attempted to create the distribution with is associated with another distribution.
 *
 * @throws {@link EntityLimitExceeded} (client fault)
 *
 * The entity limit has been exceeded.
 *
 * @throws {@link EntityNotFound} (client fault)
 *
 * The entity was not found.
 *
 * @throws {@link IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior} (client fault)
 *
 * The specified configuration for field-level encryption can't be associated with the specified cache behavior.
 *
 * @throws {@link IllegalOriginAccessConfiguration} (client fault)
 *
 * An origin cannot contain both an origin access control (OAC) and an origin access identity (OAI).
 *
 * @throws {@link InconsistentQuantities} (client fault)
 *
 * The value of `Quantity` and the size of `Items` don't match.
 *
 * @throws {@link InvalidArgument} (client fault)
 *
 * An argument is invalid.
 *
 * @throws {@link InvalidDefaultRootObject} (client fault)
 *
 * The default root object file name is too big or contains an invalid character.
 *
 * @throws {@link InvalidDomainNameForOriginAccessControl} (client fault)
 *
 * An origin access control is associated with an origin whose domain name is not supported.
 *
 * @throws {@link InvalidErrorCode} (client fault)
 *
 * An invalid error code was specified.
 *
 * @throws {@link InvalidForwardCookies} (client fault)
 *
 * Your request contains forward cookies option which doesn't match with the expectation for the `whitelisted` list of cookie names. Either list of cookie names has been specified when not allowed or list of cookie names is missing when expected.
 *
 * @throws {@link InvalidFunctionAssociation} (client fault)
 *
 * A CloudFront function association is invalid.
 *
 * @throws {@link InvalidGeoRestrictionParameter} (client fault)
 *
 * The specified geo restriction parameter is not valid.
 *
 * @throws {@link InvalidHeadersForS3Origin} (client fault)
 *
 * The headers specified are not valid for an Amazon S3 origin.
 *
 * @throws {@link InvalidLambdaFunctionAssociation} (client fault)
 *
 * The specified Lambda@Edge function association is invalid.
 *
 * @throws {@link InvalidLocationCode} (client fault)
 *
 * The location code specified is not valid.
 *
 * @throws {@link InvalidMinimumProtocolVersion} (client fault)
 *
 * The minimum protocol version specified is not valid.
 *
 * @throws {@link InvalidOrigin} (client fault)
 *
 * The Amazon S3 origin server specified does not refer to a valid Amazon S3 bucket.
 *
 * @throws {@link InvalidOriginAccessControl} (client fault)
 *
 * The origin access control is not valid.
 *
 * @throws {@link InvalidOriginAccessIdentity} (client fault)
 *
 * The origin access identity is not valid or doesn't exist.
 *
 * @throws {@link InvalidOriginKeepaliveTimeout} (client fault)
 *
 * The keep alive timeout specified for the origin is not valid.
 *
 * @throws {@link InvalidOriginReadTimeout} (client fault)
 *
 * The read timeout specified for the origin is not valid.
 *
 * @throws {@link InvalidProtocolSettings} (client fault)
 *
 * You cannot specify SSLv3 as the minimum protocol version if you only want to support only clients that support Server Name Indication (SNI).
 *
 * @throws {@link InvalidQueryStringParameters} (client fault)
 *
 * The query string parameters specified are not valid.
 *
 * @throws {@link InvalidRelativePath} (client fault)
 *
 * The relative path is too big, is not URL-encoded, or does not begin with a slash (/).
 *
 * @throws {@link InvalidRequiredProtocol} (client fault)
 *
 * This operation requires the HTTPS protocol. Ensure that you specify the HTTPS protocol in your request, or omit the `RequiredProtocols` element from your distribution configuration.
 *
 * @throws {@link InvalidResponseCode} (client fault)
 *
 * A response code is not valid.
 *
 * @throws {@link InvalidTTLOrder} (client fault)
 *
 * The TTL order specified is not valid.
 *
 * @throws {@link InvalidViewerCertificate} (client fault)
 *
 * A viewer certificate specified is not valid.
 *
 * @throws {@link InvalidWebACLId} (client fault)
 *
 * A web ACL ID specified is not valid. To specify a web ACL created using the latest version of WAF, use the ACL ARN, for example `arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/473e64fd-f30b-4765-81a0-62ad96dd167a`. To specify a web ACL created using WAF Classic, use the ACL ID, for example `473e64fd-f30b-4765-81a0-62ad96dd167a`.
 *
 * @throws {@link MissingBody} (client fault)
 *
 * This operation requires a body. Ensure that the body is present and the `Content-Type` header is set.
 *
 * @throws {@link NoSuchCachePolicy} (client fault)
 *
 * The cache policy does not exist.
 *
 * @throws {@link NoSuchContinuousDeploymentPolicy} (client fault)
 *
 * The continuous deployment policy doesn't exist.
 *
 * @throws {@link NoSuchFieldLevelEncryptionConfig} (client fault)
 *
 * The specified configuration for field-level encryption doesn't exist.
 *
 * @throws {@link NoSuchOrigin} (client fault)
 *
 * No origin exists with the specified `Origin Id`.
 *
 * @throws {@link NoSuchOriginRequestPolicy} (client fault)
 *
 * The origin request policy does not exist.
 *
 * @throws {@link NoSuchRealtimeLogConfig} (client fault)
 *
 * The real-time log configuration does not exist.
 *
 * @throws {@link NoSuchResponseHeadersPolicy} (client fault)
 *
 * The response headers policy does not exist.
 *
 * @throws {@link RealtimeLogConfigOwnerMismatch} (client fault)
 *
 * The specified real-time log configuration belongs to a different Amazon Web Services account.
 *
 * @throws {@link TooManyCacheBehaviors} (client fault)
 *
 * You cannot create more cache behaviors for the distribution.
 *
 * @throws {@link TooManyCertificates} (client fault)
 *
 * You cannot create anymore custom SSL/TLS certificates.
 *
 * @throws {@link TooManyCookieNamesInWhiteList} (client fault)
 *
 * Your request contains more cookie names in the whitelist than are allowed per cache behavior.
 *
 * @throws {@link TooManyDistributionCNAMEs} (client fault)
 *
 * Your request contains more CNAMEs than are allowed per distribution.
 *
 * @throws {@link TooManyDistributions} (client fault)
 *
 * Processing your request would cause you to exceed the maximum number of distributions allowed.
 *
 * @throws {@link TooManyDistributionsAssociatedToCachePolicy} (client fault)
 *
 * The maximum number of distributions have been associated with the specified cache policy. For more information, see [Quotas](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html) (formerly known as limits) in the *Amazon CloudFront Developer Guide*.
 *
 * @throws {@link TooManyDistributionsAssociatedToFieldLevelEncryptionConfig} (client fault)
 *
 * The maximum number of distributions have been associated with the specified configuration for field-level encryption.
 *
 * @throws {@link TooManyDistributionsAssociatedToKeyGroup} (client fault)
 *
 * The number of distributions that reference this key group is more than the maximum allowed. For more information, see [Quotas](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html) (formerly known as limits) in the *Amazon CloudFront Developer Guide*.
 *
 * @throws {@link TooManyDistributionsAssociatedToOriginAccessControl} (client fault)
 *
 * The maximum number of distributions have been associated with the specified origin access control.
 *
 * For more information, see [Quotas](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html) (formerly known as limits) in the *Amazon CloudFront Developer Guide*.
 *
 * @throws {@link TooManyDistributionsAssociatedToOriginRequestPolicy} (client fault)
 *
 * The maximum number of distributions have been associated with the specified origin request policy. For more information, see [Quotas](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html) (formerly known as limits) in the *Amazon CloudFront Developer Guide*.
 *
 * @throws {@link TooManyDistributionsAssociatedToResponseHeadersPolicy} (client fault)
 *
 * The maximum number of distributions have been associated with the specified response headers policy.
 *
 * For more information, see [Quotas](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html) (formerly known as limits) in the *Amazon CloudFront Developer Guide*.
 *
 * @throws {@link TooManyDistributionsWithFunctionAssociations} (client fault)
 *
 * You have reached the maximum number of distributions that are associated with a CloudFront function. For more information, see [Quotas](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html) (formerly known as limits) in the *Amazon CloudFront Developer Guide*.
 *
 * @throws {@link TooManyDistributionsWithLambdaAssociations} (client fault)
 *
 * Processing your request would cause the maximum number of distributions with Lambda@Edge function associations per owner to be exceeded.
 *
 * @throws {@link TooManyDistributionsWithSingleFunctionARN} (client fault)
 *
 * The maximum number of distributions have been associated with the specified Lambda@Edge function.
 *
 * @throws {@link TooManyFunctionAssociations} (client fault)
 *
 * You have reached the maximum number of CloudFront function associations for this distribution. For more information, see [Quotas](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html) (formerly known as limits) in the *Amazon CloudFront Developer Guide*.
 *
 * @throws {@link TooManyHeadersInForwardedValues} (client fault)
 *
 * Your request contains too many headers in forwarded values.
 *
 * @throws {@link TooManyKeyGroupsAssociatedToDistribution} (client fault)
 *
 * The number of key groups referenced by this distribution is more than the maximum allowed. For more information, see [Quotas](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html) (formerly known as limits) in the *Amazon CloudFront Developer Guide*.
 *
 * @throws {@link TooManyLambdaFunctionAssociations} (client fault)
 *
 * Your request contains more Lambda@Edge function associations than are allowed per distribution.
 *
 * @throws {@link TooManyOriginCustomHeaders} (client fault)
 *
 * Your request contains too many origin custom headers.
 *
 * @throws {@link TooManyOriginGroupsPerDistribution} (client fault)
 *
 * Processing your request would cause you to exceed the maximum number of origin groups allowed.
 *
 * @throws {@link TooManyOrigins} (client fault)
 *
 * You cannot create more origins for the distribution.
 *
 * @throws {@link TooManyQueryStringParameters} (client fault)
 *
 * Your request contains too many query string parameters.
 *
 * @throws {@link TooManyTrustedSigners} (client fault)
 *
 * Your request contains more trusted signers than are allowed per distribution.
 *
 * @throws {@link TrustedKeyGroupDoesNotExist} (client fault)
 *
 * The specified key group does not exist.
 *
 * @throws {@link TrustedSignerDoesNotExist} (client fault)
 *
 * One or more of your trusted signers don't exist.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class CreateDistributionCommand extends command<CreateDistributionCommandInput, CreateDistributionCommandOutput>(
  _ep0,
  _mw0,
  "CreateDistribution",
  CreateDistribution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDistributionRequest;
      output: CreateDistributionResult;
    };
    sdk: {
      input: CreateDistributionCommandInput;
      output: CreateDistributionCommandOutput;
    };
  };
}
