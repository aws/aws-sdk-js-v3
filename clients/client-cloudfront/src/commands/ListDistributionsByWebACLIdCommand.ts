// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import {
  ListDistributionsByWebACLIdRequest,
  ListDistributionsByWebACLIdResult,
  ListDistributionsByWebACLIdResultFilterSensitiveLog,
} from "../models/models_1";
import { de_ListDistributionsByWebACLIdCommand, se_ListDistributionsByWebACLIdCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDistributionsByWebACLIdCommand}.
 */
export interface ListDistributionsByWebACLIdCommandInput extends ListDistributionsByWebACLIdRequest {}
/**
 * @public
 *
 * The output of {@link ListDistributionsByWebACLIdCommand}.
 */
export interface ListDistributionsByWebACLIdCommandOutput extends ListDistributionsByWebACLIdResult, __MetadataBearer {}

/**
 * @public
 * <p>List the distributions that are associated with a specified WAF web ACL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListDistributionsByWebACLIdCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListDistributionsByWebACLIdCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // ListDistributionsByWebACLIdRequest
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 *   WebACLId: "STRING_VALUE", // required
 * };
 * const command = new ListDistributionsByWebACLIdCommand(input);
 * const response = await client.send(command);
 * // { // ListDistributionsByWebACLIdResult
 * //   DistributionList: { // DistributionList
 * //     Marker: "STRING_VALUE", // required
 * //     NextMarker: "STRING_VALUE",
 * //     MaxItems: Number("int"), // required
 * //     IsTruncated: true || false, // required
 * //     Quantity: Number("int"), // required
 * //     Items: [ // DistributionSummaryList
 * //       { // DistributionSummary
 * //         Id: "STRING_VALUE", // required
 * //         ARN: "STRING_VALUE", // required
 * //         Status: "STRING_VALUE", // required
 * //         LastModifiedTime: new Date("TIMESTAMP"), // required
 * //         DomainName: "STRING_VALUE", // required
 * //         Aliases: { // Aliases
 * //           Quantity: Number("int"), // required
 * //           Items: [ // AliasList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         Origins: { // Origins
 * //           Quantity: Number("int"), // required
 * //           Items: [ // OriginList // required
 * //             { // Origin
 * //               Id: "STRING_VALUE", // required
 * //               DomainName: "STRING_VALUE", // required
 * //               OriginPath: "STRING_VALUE",
 * //               CustomHeaders: { // CustomHeaders
 * //                 Quantity: Number("int"), // required
 * //                 Items: [ // OriginCustomHeadersList
 * //                   { // OriginCustomHeader
 * //                     HeaderName: "STRING_VALUE", // required
 * //                     HeaderValue: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //               },
 * //               S3OriginConfig: { // S3OriginConfig
 * //                 OriginAccessIdentity: "STRING_VALUE", // required
 * //               },
 * //               CustomOriginConfig: { // CustomOriginConfig
 * //                 HTTPPort: Number("int"), // required
 * //                 HTTPSPort: Number("int"), // required
 * //                 OriginProtocolPolicy: "http-only" || "match-viewer" || "https-only", // required
 * //                 OriginSslProtocols: { // OriginSslProtocols
 * //                   Quantity: Number("int"), // required
 * //                   Items: [ // SslProtocolsList // required
 * //                     "SSLv3" || "TLSv1" || "TLSv1.1" || "TLSv1.2",
 * //                   ],
 * //                 },
 * //                 OriginReadTimeout: Number("int"),
 * //                 OriginKeepaliveTimeout: Number("int"),
 * //               },
 * //               ConnectionAttempts: Number("int"),
 * //               ConnectionTimeout: Number("int"),
 * //               OriginShield: { // OriginShield
 * //                 Enabled: true || false, // required
 * //                 OriginShieldRegion: "STRING_VALUE",
 * //               },
 * //               OriginAccessControlId: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //         OriginGroups: { // OriginGroups
 * //           Quantity: Number("int"), // required
 * //           Items: [ // OriginGroupList
 * //             { // OriginGroup
 * //               Id: "STRING_VALUE", // required
 * //               FailoverCriteria: { // OriginGroupFailoverCriteria
 * //                 StatusCodes: { // StatusCodes
 * //                   Quantity: Number("int"), // required
 * //                   Items: [ // StatusCodeList // required
 * //                     Number("int"),
 * //                   ],
 * //                 },
 * //               },
 * //               Members: { // OriginGroupMembers
 * //                 Quantity: Number("int"), // required
 * //                 Items: [ // OriginGroupMemberList // required
 * //                   { // OriginGroupMember
 * //                     OriginId: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //               },
 * //             },
 * //           ],
 * //         },
 * //         DefaultCacheBehavior: { // DefaultCacheBehavior
 * //           TargetOriginId: "STRING_VALUE", // required
 * //           TrustedSigners: { // TrustedSigners
 * //             Enabled: true || false, // required
 * //             Quantity: Number("int"), // required
 * //             Items: [ // AwsAccountNumberList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           TrustedKeyGroups: { // TrustedKeyGroups
 * //             Enabled: true || false, // required
 * //             Quantity: Number("int"), // required
 * //             Items: [ // TrustedKeyGroupIdList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           ViewerProtocolPolicy: "allow-all" || "https-only" || "redirect-to-https", // required
 * //           AllowedMethods: { // AllowedMethods
 * //             Quantity: Number("int"), // required
 * //             Items: [ // MethodsList // required
 * //               "GET" || "HEAD" || "POST" || "PUT" || "PATCH" || "OPTIONS" || "DELETE",
 * //             ],
 * //             CachedMethods: { // CachedMethods
 * //               Quantity: Number("int"), // required
 * //               Items: [ // required
 * //                 "GET" || "HEAD" || "POST" || "PUT" || "PATCH" || "OPTIONS" || "DELETE",
 * //               ],
 * //             },
 * //           },
 * //           SmoothStreaming: true || false,
 * //           Compress: true || false,
 * //           LambdaFunctionAssociations: { // LambdaFunctionAssociations
 * //             Quantity: Number("int"), // required
 * //             Items: [ // LambdaFunctionAssociationList
 * //               { // LambdaFunctionAssociation
 * //                 LambdaFunctionARN: "STRING_VALUE", // required
 * //                 EventType: "viewer-request" || "viewer-response" || "origin-request" || "origin-response", // required
 * //                 IncludeBody: true || false,
 * //               },
 * //             ],
 * //           },
 * //           FunctionAssociations: { // FunctionAssociations
 * //             Quantity: Number("int"), // required
 * //             Items: [ // FunctionAssociationList
 * //               { // FunctionAssociation
 * //                 FunctionARN: "STRING_VALUE", // required
 * //                 EventType: "viewer-request" || "viewer-response" || "origin-request" || "origin-response", // required
 * //               },
 * //             ],
 * //           },
 * //           FieldLevelEncryptionId: "STRING_VALUE",
 * //           RealtimeLogConfigArn: "STRING_VALUE",
 * //           CachePolicyId: "STRING_VALUE",
 * //           OriginRequestPolicyId: "STRING_VALUE",
 * //           ResponseHeadersPolicyId: "STRING_VALUE",
 * //           ForwardedValues: { // ForwardedValues
 * //             QueryString: true || false, // required
 * //             Cookies: { // CookiePreference
 * //               Forward: "none" || "whitelist" || "all", // required
 * //               WhitelistedNames: { // CookieNames
 * //                 Quantity: Number("int"), // required
 * //                 Items: [ // CookieNameList
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //             },
 * //             Headers: { // Headers
 * //               Quantity: Number("int"), // required
 * //               Items: [ // HeaderList
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             QueryStringCacheKeys: { // QueryStringCacheKeys
 * //               Quantity: Number("int"), // required
 * //               Items: [ // QueryStringCacheKeysList
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           },
 * //           MinTTL: Number("long"),
 * //           DefaultTTL: Number("long"),
 * //           MaxTTL: Number("long"),
 * //         },
 * //         CacheBehaviors: { // CacheBehaviors
 * //           Quantity: Number("int"), // required
 * //           Items: [ // CacheBehaviorList
 * //             { // CacheBehavior
 * //               PathPattern: "STRING_VALUE", // required
 * //               TargetOriginId: "STRING_VALUE", // required
 * //               TrustedSigners: {
 * //                 Enabled: true || false, // required
 * //                 Quantity: Number("int"), // required
 * //                 Items: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //               TrustedKeyGroups: {
 * //                 Enabled: true || false, // required
 * //                 Quantity: Number("int"), // required
 * //                 Items: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //               ViewerProtocolPolicy: "allow-all" || "https-only" || "redirect-to-https", // required
 * //               AllowedMethods: {
 * //                 Quantity: Number("int"), // required
 * //                 Items: "<MethodsList>", // required
 * //                 CachedMethods: {
 * //                   Quantity: Number("int"), // required
 * //                   Items: "<MethodsList>", // required
 * //                 },
 * //               },
 * //               SmoothStreaming: true || false,
 * //               Compress: true || false,
 * //               LambdaFunctionAssociations: {
 * //                 Quantity: Number("int"), // required
 * //                 Items: [
 * //                   {
 * //                     LambdaFunctionARN: "STRING_VALUE", // required
 * //                     EventType: "viewer-request" || "viewer-response" || "origin-request" || "origin-response", // required
 * //                     IncludeBody: true || false,
 * //                   },
 * //                 ],
 * //               },
 * //               FunctionAssociations: {
 * //                 Quantity: Number("int"), // required
 * //                 Items: [
 * //                   {
 * //                     FunctionARN: "STRING_VALUE", // required
 * //                     EventType: "viewer-request" || "viewer-response" || "origin-request" || "origin-response", // required
 * //                   },
 * //                 ],
 * //               },
 * //               FieldLevelEncryptionId: "STRING_VALUE",
 * //               RealtimeLogConfigArn: "STRING_VALUE",
 * //               CachePolicyId: "STRING_VALUE",
 * //               OriginRequestPolicyId: "STRING_VALUE",
 * //               ResponseHeadersPolicyId: "STRING_VALUE",
 * //               ForwardedValues: {
 * //                 QueryString: true || false, // required
 * //                 Cookies: {
 * //                   Forward: "none" || "whitelist" || "all", // required
 * //                   WhitelistedNames: {
 * //                     Quantity: Number("int"), // required
 * //                     Items: [
 * //                       "STRING_VALUE",
 * //                     ],
 * //                   },
 * //                 },
 * //                 Headers: {
 * //                   Quantity: Number("int"), // required
 * //                   Items: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //                 QueryStringCacheKeys: {
 * //                   Quantity: Number("int"), // required
 * //                   Items: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               },
 * //               MinTTL: Number("long"),
 * //               DefaultTTL: Number("long"),
 * //               MaxTTL: Number("long"),
 * //             },
 * //           ],
 * //         },
 * //         CustomErrorResponses: { // CustomErrorResponses
 * //           Quantity: Number("int"), // required
 * //           Items: [ // CustomErrorResponseList
 * //             { // CustomErrorResponse
 * //               ErrorCode: Number("int"), // required
 * //               ResponsePagePath: "STRING_VALUE",
 * //               ResponseCode: "STRING_VALUE",
 * //               ErrorCachingMinTTL: Number("long"),
 * //             },
 * //           ],
 * //         },
 * //         Comment: "STRING_VALUE", // required
 * //         PriceClass: "PriceClass_100" || "PriceClass_200" || "PriceClass_All", // required
 * //         Enabled: true || false, // required
 * //         ViewerCertificate: { // ViewerCertificate
 * //           CloudFrontDefaultCertificate: true || false,
 * //           IAMCertificateId: "STRING_VALUE",
 * //           ACMCertificateArn: "STRING_VALUE",
 * //           SSLSupportMethod: "sni-only" || "vip" || "static-ip",
 * //           MinimumProtocolVersion: "SSLv3" || "TLSv1" || "TLSv1_2016" || "TLSv1.1_2016" || "TLSv1.2_2018" || "TLSv1.2_2019" || "TLSv1.2_2021",
 * //           Certificate: "STRING_VALUE",
 * //           CertificateSource: "cloudfront" || "iam" || "acm",
 * //         },
 * //         Restrictions: { // Restrictions
 * //           GeoRestriction: { // GeoRestriction
 * //             RestrictionType: "blacklist" || "whitelist" || "none", // required
 * //             Quantity: Number("int"), // required
 * //             Items: [ // LocationList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //         WebACLId: "STRING_VALUE", // required
 * //         HttpVersion: "http1.1" || "http2" || "http3" || "http2and3", // required
 * //         IsIPV6Enabled: true || false, // required
 * //         AliasICPRecordals: [ // AliasICPRecordals
 * //           { // AliasICPRecordal
 * //             CNAME: "STRING_VALUE",
 * //             ICPRecordalStatus: "APPROVED" || "SUSPENDED" || "PENDING",
 * //           },
 * //         ],
 * //         Staging: true || false, // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ListDistributionsByWebACLIdCommandInput - {@link ListDistributionsByWebACLIdCommandInput}
 * @returns {@link ListDistributionsByWebACLIdCommandOutput}
 * @see {@link ListDistributionsByWebACLIdCommandInput} for command's `input` shape.
 * @see {@link ListDistributionsByWebACLIdCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link InvalidWebACLId} (client fault)
 *  <p>A web ACL ID specified is not valid. To specify a web ACL created using the latest
 * 			version of WAF, use the ACL ARN, for example
 * 				<code>arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/473e64fd-f30b-4765-81a0-62ad96dd167a</code>.
 * 			To specify a web ACL created using WAF Classic, use the ACL ID, for example
 * 				<code>473e64fd-f30b-4765-81a0-62ad96dd167a</code>.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 */
export class ListDistributionsByWebACLIdCommand extends $Command<
  ListDistributionsByWebACLIdCommandInput,
  ListDistributionsByWebACLIdCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ListDistributionsByWebACLIdCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDistributionsByWebACLIdCommandInput, ListDistributionsByWebACLIdCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDistributionsByWebACLIdCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "ListDistributionsByWebACLIdCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListDistributionsByWebACLIdResultFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "Cloudfront2020_05_31",
        operation: "ListDistributionsByWebACLId",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ListDistributionsByWebACLIdCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListDistributionsByWebACLIdCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDistributionsByWebACLIdCommandOutput> {
    return de_ListDistributionsByWebACLIdCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
