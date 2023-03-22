// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import {
  UpdateDistributionWithStagingConfigRequest,
  UpdateDistributionWithStagingConfigRequestFilterSensitiveLog,
  UpdateDistributionWithStagingConfigResult,
  UpdateDistributionWithStagingConfigResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restXmlUpdateDistributionWithStagingConfigCommand,
  serializeAws_restXmlUpdateDistributionWithStagingConfigCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 *
 * The input for {@link UpdateDistributionWithStagingConfigCommand}.
 */
export interface UpdateDistributionWithStagingConfigCommandInput extends UpdateDistributionWithStagingConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDistributionWithStagingConfigCommand}.
 */
export interface UpdateDistributionWithStagingConfigCommandOutput
  extends UpdateDistributionWithStagingConfigResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Copies the staging distribution's configuration to its corresponding primary
 * 			distribution. The primary distribution retains its <code>Aliases</code> (also known as
 * 			alternate domain names or CNAMEs) and <code>ContinuousDeploymentPolicyId</code> value,
 * 			but otherwise its configuration is overwritten to match the staging distribution.</p>
 *          <p>You can use this operation in a continuous deployment workflow after you have tested
 * 			configuration changes on the staging distribution. After using a continuous deployment
 * 			policy to move a portion of your domain name's traffic to the staging distribution and
 * 			verifying that it works as intended, you can use this operation to copy the staging
 * 			distribution's configuration to the primary distribution. This action will disable the
 * 			continuous deployment policy and move your domain's traffic back to the primary distribution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateDistributionWithStagingConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateDistributionWithStagingConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new UpdateDistributionWithStagingConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateDistributionWithStagingConfigCommandInput - {@link UpdateDistributionWithStagingConfigCommandInput}
 * @returns {@link UpdateDistributionWithStagingConfigCommandOutput}
 * @see {@link UpdateDistributionWithStagingConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateDistributionWithStagingConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link CNAMEAlreadyExists} (client fault)
 *  <p>The CNAME specified is already defined for CloudFront.</p>
 *
 * @throws {@link IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior} (client fault)
 *  <p>The specified configuration for field-level encryption can't be associated with the
 * 			specified cache behavior.</p>
 *
 * @throws {@link IllegalUpdate} (client fault)
 *  <p>The update contains modifications that are not allowed.</p>
 *
 * @throws {@link InconsistentQuantities} (client fault)
 *  <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't
 * 			match.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link InvalidDefaultRootObject} (client fault)
 *  <p>The default root object file name is too big or contains an invalid character.</p>
 *
 * @throws {@link InvalidErrorCode} (client fault)
 *  <p>An invalid error code was specified.</p>
 *
 * @throws {@link InvalidForwardCookies} (client fault)
 *  <p>Your request contains forward cookies option which doesn't match with the expectation
 * 			for the <code>whitelisted</code> list of cookie names. Either list of cookie names has
 * 			been specified when not allowed or list of cookie names is missing when expected.</p>
 *
 * @throws {@link InvalidFunctionAssociation} (client fault)
 *  <p>A CloudFront function association is invalid.</p>
 *
 * @throws {@link InvalidGeoRestrictionParameter} (client fault)
 *  <p>The specified geo restriction parameter is not valid.</p>
 *
 * @throws {@link InvalidHeadersForS3Origin} (client fault)
 *  <p>The headers specified are not valid for an Amazon S3 origin.</p>
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *  <p>The <code>If-Match</code> version is missing or not valid.</p>
 *
 * @throws {@link InvalidLambdaFunctionAssociation} (client fault)
 *  <p>The specified Lambda@Edge function association is invalid.</p>
 *
 * @throws {@link InvalidLocationCode} (client fault)
 *  <p>The location code specified is not valid.</p>
 *
 * @throws {@link InvalidMinimumProtocolVersion} (client fault)
 *  <p>The minimum protocol version specified is not valid.</p>
 *
 * @throws {@link InvalidOriginAccessControl} (client fault)
 *  <p>The origin access control is not valid.</p>
 *
 * @throws {@link InvalidOriginAccessIdentity} (client fault)
 *  <p>The origin access identity is not valid or doesn't exist.</p>
 *
 * @throws {@link InvalidOriginKeepaliveTimeout} (client fault)
 *  <p>The keep alive timeout specified for the origin is not valid.</p>
 *
 * @throws {@link InvalidOriginReadTimeout} (client fault)
 *  <p>The read timeout specified for the origin is not valid.</p>
 *
 * @throws {@link InvalidQueryStringParameters} (client fault)
 *  <p>The query string parameters specified are not valid.</p>
 *
 * @throws {@link InvalidRelativePath} (client fault)
 *  <p>The relative path is too big, is not URL-encoded, or does not begin with a slash
 * 			(/).</p>
 *
 * @throws {@link InvalidRequiredProtocol} (client fault)
 *  <p>This operation requires the HTTPS protocol. Ensure that you specify the HTTPS protocol
 * 			in your request, or omit the <code>RequiredProtocols</code> element from your
 * 			distribution configuration.</p>
 *
 * @throws {@link InvalidResponseCode} (client fault)
 *  <p>A response code is not valid.</p>
 *
 * @throws {@link InvalidTTLOrder} (client fault)
 *  <p>The TTL order specified is not valid.</p>
 *
 * @throws {@link InvalidViewerCertificate} (client fault)
 *  <p>A viewer certificate specified is not valid.</p>
 *
 * @throws {@link InvalidWebACLId} (client fault)
 *  <p>A web ACL ID specified is not valid. To specify a web ACL created using the latest
 * 			version of WAF, use the ACL ARN, for example
 * 				<code>arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/473e64fd-f30b-4765-81a0-62ad96dd167a</code>.
 * 			To specify a web ACL created using WAF Classic, use the ACL ID, for example
 * 				<code>473e64fd-f30b-4765-81a0-62ad96dd167a</code>.</p>
 *
 * @throws {@link MissingBody} (client fault)
 *  <p>This operation requires a body. Ensure that the body is present and the
 * 				<code>Content-Type</code> header is set.</p>
 *
 * @throws {@link NoSuchCachePolicy} (client fault)
 *  <p>The cache policy does not exist.</p>
 *
 * @throws {@link NoSuchDistribution} (client fault)
 *  <p>The specified distribution does not exist.</p>
 *
 * @throws {@link NoSuchFieldLevelEncryptionConfig} (client fault)
 *  <p>The specified configuration for field-level encryption doesn't exist.</p>
 *
 * @throws {@link NoSuchOrigin} (client fault)
 *  <p>No origin exists with the specified <code>Origin Id</code>.</p>
 *
 * @throws {@link NoSuchOriginRequestPolicy} (client fault)
 *  <p>The origin request policy does not exist.</p>
 *
 * @throws {@link NoSuchRealtimeLogConfig} (client fault)
 *  <p>The real-time log configuration does not exist.</p>
 *
 * @throws {@link NoSuchResponseHeadersPolicy} (client fault)
 *  <p>The response headers policy does not exist.</p>
 *
 * @throws {@link PreconditionFailed} (client fault)
 *  <p>The precondition in one or more of the request fields evaluated to
 * 			<code>false</code>.</p>
 *
 * @throws {@link RealtimeLogConfigOwnerMismatch} (client fault)
 *  <p>The specified real-time log configuration belongs to a different Amazon Web Services account.</p>
 *
 * @throws {@link TooManyCacheBehaviors} (client fault)
 *  <p>You cannot create more cache behaviors for the distribution.</p>
 *
 * @throws {@link TooManyCertificates} (client fault)
 *  <p>You cannot create anymore custom SSL/TLS certificates.</p>
 *
 * @throws {@link TooManyCookieNamesInWhiteList} (client fault)
 *  <p>Your request contains more cookie names in the whitelist than are allowed per cache
 * 			behavior.</p>
 *
 * @throws {@link TooManyDistributionCNAMEs} (client fault)
 *  <p>Your request contains more CNAMEs than are allowed per distribution.</p>
 *
 * @throws {@link TooManyDistributionsAssociatedToCachePolicy} (client fault)
 *  <p>The maximum number of distributions have been associated with the specified cache
 * 			policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link TooManyDistributionsAssociatedToFieldLevelEncryptionConfig} (client fault)
 *  <p>The maximum number of distributions have been associated with the specified
 * 			configuration for field-level encryption.</p>
 *
 * @throws {@link TooManyDistributionsAssociatedToKeyGroup} (client fault)
 *  <p>The number of distributions that reference this key group is more than the maximum
 * 			allowed. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link TooManyDistributionsAssociatedToOriginRequestPolicy} (client fault)
 *  <p>The maximum number of distributions have been associated with the specified origin
 * 			request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link TooManyDistributionsAssociatedToResponseHeadersPolicy} (client fault)
 *  <p>The maximum number of distributions have been associated with the specified response
 * 			headers policy.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link TooManyDistributionsWithFunctionAssociations} (client fault)
 *  <p>You have reached the maximum number of distributions that are associated with a CloudFront
 * 			function. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link TooManyDistributionsWithLambdaAssociations} (client fault)
 *  <p>Processing your request would cause the maximum number of distributions with
 * 			Lambda@Edge function associations per owner to be exceeded.</p>
 *
 * @throws {@link TooManyDistributionsWithSingleFunctionARN} (client fault)
 *  <p>The maximum number of distributions have been associated with the specified
 * 			Lambda@Edge function.</p>
 *
 * @throws {@link TooManyFunctionAssociations} (client fault)
 *  <p>You have reached the maximum number of CloudFront function associations for this
 * 			distribution. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link TooManyHeadersInForwardedValues} (client fault)
 *  <p>Your request contains too many headers in forwarded values.</p>
 *
 * @throws {@link TooManyKeyGroupsAssociatedToDistribution} (client fault)
 *  <p>The number of key groups referenced by this distribution is more than the maximum
 * 			allowed. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link TooManyLambdaFunctionAssociations} (client fault)
 *  <p>Your request contains more Lambda@Edge function associations than are allowed per
 * 			distribution.</p>
 *
 * @throws {@link TooManyOriginCustomHeaders} (client fault)
 *  <p>Your request contains too many origin custom headers.</p>
 *
 * @throws {@link TooManyOriginGroupsPerDistribution} (client fault)
 *  <p>Processing your request would cause you to exceed the maximum number of origin groups
 * 			allowed.</p>
 *
 * @throws {@link TooManyOrigins} (client fault)
 *  <p>You cannot create more origins for the distribution.</p>
 *
 * @throws {@link TooManyQueryStringParameters} (client fault)
 *  <p>Your request contains too many query string parameters.</p>
 *
 * @throws {@link TooManyTrustedSigners} (client fault)
 *  <p>Your request contains more trusted signers than are allowed per distribution.</p>
 *
 * @throws {@link TrustedKeyGroupDoesNotExist} (client fault)
 *  <p>The specified key group does not exist.</p>
 *
 * @throws {@link TrustedSignerDoesNotExist} (client fault)
 *  <p>One or more of your trusted signers don't exist.</p>
 *
 *
 */
export class UpdateDistributionWithStagingConfigCommand extends $Command<
  UpdateDistributionWithStagingConfigCommandInput,
  UpdateDistributionWithStagingConfigCommandOutput,
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
  constructor(readonly input: UpdateDistributionWithStagingConfigCommandInput) {
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
  ): Handler<UpdateDistributionWithStagingConfigCommandInput, UpdateDistributionWithStagingConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDistributionWithStagingConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "UpdateDistributionWithStagingConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDistributionWithStagingConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateDistributionWithStagingConfigResultFilterSensitiveLog,
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
  private serialize(
    input: UpdateDistributionWithStagingConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlUpdateDistributionWithStagingConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateDistributionWithStagingConfigCommandOutput> {
    return deserializeAws_restXmlUpdateDistributionWithStagingConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
