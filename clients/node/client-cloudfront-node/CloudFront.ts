import { CloudFrontClient } from "./CloudFrontClient";
import { AccessDenied } from "./types/AccessDenied";
import { BatchTooLarge } from "./types/BatchTooLarge";
import { CNAMEAlreadyExists } from "./types/CNAMEAlreadyExists";
import { CannotChangeImmutablePublicKeyFields } from "./types/CannotChangeImmutablePublicKeyFields";
import { CloudFrontOriginAccessIdentityAlreadyExists } from "./types/CloudFrontOriginAccessIdentityAlreadyExists";
import { CloudFrontOriginAccessIdentityInUse } from "./types/CloudFrontOriginAccessIdentityInUse";
import { CreateCloudFrontOriginAccessIdentityInput } from "./types/CreateCloudFrontOriginAccessIdentityInput";
import { CreateCloudFrontOriginAccessIdentityOutput } from "./types/CreateCloudFrontOriginAccessIdentityOutput";
import { CreateDistributionInput } from "./types/CreateDistributionInput";
import { CreateDistributionOutput } from "./types/CreateDistributionOutput";
import { CreateDistributionWithTagsInput } from "./types/CreateDistributionWithTagsInput";
import { CreateDistributionWithTagsOutput } from "./types/CreateDistributionWithTagsOutput";
import { CreateFieldLevelEncryptionConfigInput } from "./types/CreateFieldLevelEncryptionConfigInput";
import { CreateFieldLevelEncryptionConfigOutput } from "./types/CreateFieldLevelEncryptionConfigOutput";
import { CreateFieldLevelEncryptionProfileInput } from "./types/CreateFieldLevelEncryptionProfileInput";
import { CreateFieldLevelEncryptionProfileOutput } from "./types/CreateFieldLevelEncryptionProfileOutput";
import { CreateInvalidationInput } from "./types/CreateInvalidationInput";
import { CreateInvalidationOutput } from "./types/CreateInvalidationOutput";
import { CreatePublicKeyInput } from "./types/CreatePublicKeyInput";
import { CreatePublicKeyOutput } from "./types/CreatePublicKeyOutput";
import { CreateStreamingDistributionInput } from "./types/CreateStreamingDistributionInput";
import { CreateStreamingDistributionOutput } from "./types/CreateStreamingDistributionOutput";
import { CreateStreamingDistributionWithTagsInput } from "./types/CreateStreamingDistributionWithTagsInput";
import { CreateStreamingDistributionWithTagsOutput } from "./types/CreateStreamingDistributionWithTagsOutput";
import { DeleteCloudFrontOriginAccessIdentityInput } from "./types/DeleteCloudFrontOriginAccessIdentityInput";
import { DeleteCloudFrontOriginAccessIdentityOutput } from "./types/DeleteCloudFrontOriginAccessIdentityOutput";
import { DeleteDistributionInput } from "./types/DeleteDistributionInput";
import { DeleteDistributionOutput } from "./types/DeleteDistributionOutput";
import { DeleteFieldLevelEncryptionConfigInput } from "./types/DeleteFieldLevelEncryptionConfigInput";
import { DeleteFieldLevelEncryptionConfigOutput } from "./types/DeleteFieldLevelEncryptionConfigOutput";
import { DeleteFieldLevelEncryptionProfileInput } from "./types/DeleteFieldLevelEncryptionProfileInput";
import { DeleteFieldLevelEncryptionProfileOutput } from "./types/DeleteFieldLevelEncryptionProfileOutput";
import { DeletePublicKeyInput } from "./types/DeletePublicKeyInput";
import { DeletePublicKeyOutput } from "./types/DeletePublicKeyOutput";
import { DeleteStreamingDistributionInput } from "./types/DeleteStreamingDistributionInput";
import { DeleteStreamingDistributionOutput } from "./types/DeleteStreamingDistributionOutput";
import { DistributionAlreadyExists } from "./types/DistributionAlreadyExists";
import { DistributionNotDisabled } from "./types/DistributionNotDisabled";
import { FieldLevelEncryptionConfigAlreadyExists } from "./types/FieldLevelEncryptionConfigAlreadyExists";
import { FieldLevelEncryptionConfigInUse } from "./types/FieldLevelEncryptionConfigInUse";
import { FieldLevelEncryptionProfileAlreadyExists } from "./types/FieldLevelEncryptionProfileAlreadyExists";
import { FieldLevelEncryptionProfileInUse } from "./types/FieldLevelEncryptionProfileInUse";
import { FieldLevelEncryptionProfileSizeExceeded } from "./types/FieldLevelEncryptionProfileSizeExceeded";
import { GetCloudFrontOriginAccessIdentityConfigInput } from "./types/GetCloudFrontOriginAccessIdentityConfigInput";
import { GetCloudFrontOriginAccessIdentityConfigOutput } from "./types/GetCloudFrontOriginAccessIdentityConfigOutput";
import { GetCloudFrontOriginAccessIdentityInput } from "./types/GetCloudFrontOriginAccessIdentityInput";
import { GetCloudFrontOriginAccessIdentityOutput } from "./types/GetCloudFrontOriginAccessIdentityOutput";
import { GetDistributionConfigInput } from "./types/GetDistributionConfigInput";
import { GetDistributionConfigOutput } from "./types/GetDistributionConfigOutput";
import { GetDistributionInput } from "./types/GetDistributionInput";
import { GetDistributionOutput } from "./types/GetDistributionOutput";
import { GetFieldLevelEncryptionConfigInput } from "./types/GetFieldLevelEncryptionConfigInput";
import { GetFieldLevelEncryptionConfigOutput } from "./types/GetFieldLevelEncryptionConfigOutput";
import { GetFieldLevelEncryptionInput } from "./types/GetFieldLevelEncryptionInput";
import { GetFieldLevelEncryptionOutput } from "./types/GetFieldLevelEncryptionOutput";
import { GetFieldLevelEncryptionProfileConfigInput } from "./types/GetFieldLevelEncryptionProfileConfigInput";
import { GetFieldLevelEncryptionProfileConfigOutput } from "./types/GetFieldLevelEncryptionProfileConfigOutput";
import { GetFieldLevelEncryptionProfileInput } from "./types/GetFieldLevelEncryptionProfileInput";
import { GetFieldLevelEncryptionProfileOutput } from "./types/GetFieldLevelEncryptionProfileOutput";
import { GetInvalidationInput } from "./types/GetInvalidationInput";
import { GetInvalidationOutput } from "./types/GetInvalidationOutput";
import { GetPublicKeyConfigInput } from "./types/GetPublicKeyConfigInput";
import { GetPublicKeyConfigOutput } from "./types/GetPublicKeyConfigOutput";
import { GetPublicKeyInput } from "./types/GetPublicKeyInput";
import { GetPublicKeyOutput } from "./types/GetPublicKeyOutput";
import { GetStreamingDistributionConfigInput } from "./types/GetStreamingDistributionConfigInput";
import { GetStreamingDistributionConfigOutput } from "./types/GetStreamingDistributionConfigOutput";
import { GetStreamingDistributionInput } from "./types/GetStreamingDistributionInput";
import { GetStreamingDistributionOutput } from "./types/GetStreamingDistributionOutput";
import { IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior } from "./types/IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior";
import { IllegalUpdate } from "./types/IllegalUpdate";
import { InconsistentQuantities } from "./types/InconsistentQuantities";
import { InvalidArgument } from "./types/InvalidArgument";
import { InvalidDefaultRootObject } from "./types/InvalidDefaultRootObject";
import { InvalidErrorCode } from "./types/InvalidErrorCode";
import { InvalidForwardCookies } from "./types/InvalidForwardCookies";
import { InvalidGeoRestrictionParameter } from "./types/InvalidGeoRestrictionParameter";
import { InvalidHeadersForS3Origin } from "./types/InvalidHeadersForS3Origin";
import { InvalidIfMatchVersion } from "./types/InvalidIfMatchVersion";
import { InvalidLambdaFunctionAssociation } from "./types/InvalidLambdaFunctionAssociation";
import { InvalidLocationCode } from "./types/InvalidLocationCode";
import { InvalidMinimumProtocolVersion } from "./types/InvalidMinimumProtocolVersion";
import { InvalidOrigin } from "./types/InvalidOrigin";
import { InvalidOriginAccessIdentity } from "./types/InvalidOriginAccessIdentity";
import { InvalidOriginKeepaliveTimeout } from "./types/InvalidOriginKeepaliveTimeout";
import { InvalidOriginReadTimeout } from "./types/InvalidOriginReadTimeout";
import { InvalidProtocolSettings } from "./types/InvalidProtocolSettings";
import { InvalidQueryStringParameters } from "./types/InvalidQueryStringParameters";
import { InvalidRelativePath } from "./types/InvalidRelativePath";
import { InvalidRequiredProtocol } from "./types/InvalidRequiredProtocol";
import { InvalidResponseCode } from "./types/InvalidResponseCode";
import { InvalidTTLOrder } from "./types/InvalidTTLOrder";
import { InvalidTagging } from "./types/InvalidTagging";
import { InvalidViewerCertificate } from "./types/InvalidViewerCertificate";
import { InvalidWebACLId } from "./types/InvalidWebACLId";
import { ListCloudFrontOriginAccessIdentitiesInput } from "./types/ListCloudFrontOriginAccessIdentitiesInput";
import { ListCloudFrontOriginAccessIdentitiesOutput } from "./types/ListCloudFrontOriginAccessIdentitiesOutput";
import { ListDistributionsByWebACLIdInput } from "./types/ListDistributionsByWebACLIdInput";
import { ListDistributionsByWebACLIdOutput } from "./types/ListDistributionsByWebACLIdOutput";
import { ListDistributionsInput } from "./types/ListDistributionsInput";
import { ListDistributionsOutput } from "./types/ListDistributionsOutput";
import { ListFieldLevelEncryptionConfigsInput } from "./types/ListFieldLevelEncryptionConfigsInput";
import { ListFieldLevelEncryptionConfigsOutput } from "./types/ListFieldLevelEncryptionConfigsOutput";
import { ListFieldLevelEncryptionProfilesInput } from "./types/ListFieldLevelEncryptionProfilesInput";
import { ListFieldLevelEncryptionProfilesOutput } from "./types/ListFieldLevelEncryptionProfilesOutput";
import { ListInvalidationsInput } from "./types/ListInvalidationsInput";
import { ListInvalidationsOutput } from "./types/ListInvalidationsOutput";
import { ListPublicKeysInput } from "./types/ListPublicKeysInput";
import { ListPublicKeysOutput } from "./types/ListPublicKeysOutput";
import { ListStreamingDistributionsInput } from "./types/ListStreamingDistributionsInput";
import { ListStreamingDistributionsOutput } from "./types/ListStreamingDistributionsOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { MissingBody } from "./types/MissingBody";
import { NoSuchCloudFrontOriginAccessIdentity } from "./types/NoSuchCloudFrontOriginAccessIdentity";
import { NoSuchDistribution } from "./types/NoSuchDistribution";
import { NoSuchFieldLevelEncryptionConfig } from "./types/NoSuchFieldLevelEncryptionConfig";
import { NoSuchFieldLevelEncryptionProfile } from "./types/NoSuchFieldLevelEncryptionProfile";
import { NoSuchInvalidation } from "./types/NoSuchInvalidation";
import { NoSuchOrigin } from "./types/NoSuchOrigin";
import { NoSuchPublicKey } from "./types/NoSuchPublicKey";
import { NoSuchResource } from "./types/NoSuchResource";
import { NoSuchStreamingDistribution } from "./types/NoSuchStreamingDistribution";
import { PreconditionFailed } from "./types/PreconditionFailed";
import { PublicKeyAlreadyExists } from "./types/PublicKeyAlreadyExists";
import { PublicKeyInUse } from "./types/PublicKeyInUse";
import { QueryArgProfileEmpty } from "./types/QueryArgProfileEmpty";
import { StreamingDistributionAlreadyExists } from "./types/StreamingDistributionAlreadyExists";
import { StreamingDistributionNotDisabled } from "./types/StreamingDistributionNotDisabled";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { TooManyCacheBehaviors } from "./types/TooManyCacheBehaviors";
import { TooManyCertificates } from "./types/TooManyCertificates";
import { TooManyCloudFrontOriginAccessIdentities } from "./types/TooManyCloudFrontOriginAccessIdentities";
import { TooManyCookieNamesInWhiteList } from "./types/TooManyCookieNamesInWhiteList";
import { TooManyDistributionCNAMEs } from "./types/TooManyDistributionCNAMEs";
import { TooManyDistributions } from "./types/TooManyDistributions";
import { TooManyDistributionsAssociatedToFieldLevelEncryptionConfig } from "./types/TooManyDistributionsAssociatedToFieldLevelEncryptionConfig";
import { TooManyDistributionsWithLambdaAssociations } from "./types/TooManyDistributionsWithLambdaAssociations";
import { TooManyFieldLevelEncryptionConfigs } from "./types/TooManyFieldLevelEncryptionConfigs";
import { TooManyFieldLevelEncryptionContentTypeProfiles } from "./types/TooManyFieldLevelEncryptionContentTypeProfiles";
import { TooManyFieldLevelEncryptionEncryptionEntities } from "./types/TooManyFieldLevelEncryptionEncryptionEntities";
import { TooManyFieldLevelEncryptionFieldPatterns } from "./types/TooManyFieldLevelEncryptionFieldPatterns";
import { TooManyFieldLevelEncryptionProfiles } from "./types/TooManyFieldLevelEncryptionProfiles";
import { TooManyFieldLevelEncryptionQueryArgProfiles } from "./types/TooManyFieldLevelEncryptionQueryArgProfiles";
import { TooManyHeadersInForwardedValues } from "./types/TooManyHeadersInForwardedValues";
import { TooManyInvalidationsInProgress } from "./types/TooManyInvalidationsInProgress";
import { TooManyLambdaFunctionAssociations } from "./types/TooManyLambdaFunctionAssociations";
import { TooManyOriginCustomHeaders } from "./types/TooManyOriginCustomHeaders";
import { TooManyOriginGroupsPerDistribution } from "./types/TooManyOriginGroupsPerDistribution";
import { TooManyOrigins } from "./types/TooManyOrigins";
import { TooManyPublicKeys } from "./types/TooManyPublicKeys";
import { TooManyQueryStringParameters } from "./types/TooManyQueryStringParameters";
import { TooManyStreamingDistributionCNAMEs } from "./types/TooManyStreamingDistributionCNAMEs";
import { TooManyStreamingDistributions } from "./types/TooManyStreamingDistributions";
import { TooManyTrustedSigners } from "./types/TooManyTrustedSigners";
import { TrustedSignerDoesNotExist } from "./types/TrustedSignerDoesNotExist";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateCloudFrontOriginAccessIdentityInput } from "./types/UpdateCloudFrontOriginAccessIdentityInput";
import { UpdateCloudFrontOriginAccessIdentityOutput } from "./types/UpdateCloudFrontOriginAccessIdentityOutput";
import { UpdateDistributionInput } from "./types/UpdateDistributionInput";
import { UpdateDistributionOutput } from "./types/UpdateDistributionOutput";
import { UpdateFieldLevelEncryptionConfigInput } from "./types/UpdateFieldLevelEncryptionConfigInput";
import { UpdateFieldLevelEncryptionConfigOutput } from "./types/UpdateFieldLevelEncryptionConfigOutput";
import { UpdateFieldLevelEncryptionProfileInput } from "./types/UpdateFieldLevelEncryptionProfileInput";
import { UpdateFieldLevelEncryptionProfileOutput } from "./types/UpdateFieldLevelEncryptionProfileOutput";
import { UpdatePublicKeyInput } from "./types/UpdatePublicKeyInput";
import { UpdatePublicKeyOutput } from "./types/UpdatePublicKeyOutput";
import { UpdateStreamingDistributionInput } from "./types/UpdateStreamingDistributionInput";
import { UpdateStreamingDistributionOutput } from "./types/UpdateStreamingDistributionOutput";
import { CreateCloudFrontOriginAccessIdentityCommand } from "./commands/CreateCloudFrontOriginAccessIdentityCommand";
import { CreateDistributionCommand } from "./commands/CreateDistributionCommand";
import { CreateDistributionWithTagsCommand } from "./commands/CreateDistributionWithTagsCommand";
import { CreateFieldLevelEncryptionConfigCommand } from "./commands/CreateFieldLevelEncryptionConfigCommand";
import { CreateFieldLevelEncryptionProfileCommand } from "./commands/CreateFieldLevelEncryptionProfileCommand";
import { CreateInvalidationCommand } from "./commands/CreateInvalidationCommand";
import { CreatePublicKeyCommand } from "./commands/CreatePublicKeyCommand";
import { CreateStreamingDistributionCommand } from "./commands/CreateStreamingDistributionCommand";
import { CreateStreamingDistributionWithTagsCommand } from "./commands/CreateStreamingDistributionWithTagsCommand";
import { DeleteCloudFrontOriginAccessIdentityCommand } from "./commands/DeleteCloudFrontOriginAccessIdentityCommand";
import { DeleteDistributionCommand } from "./commands/DeleteDistributionCommand";
import { DeleteFieldLevelEncryptionConfigCommand } from "./commands/DeleteFieldLevelEncryptionConfigCommand";
import { DeleteFieldLevelEncryptionProfileCommand } from "./commands/DeleteFieldLevelEncryptionProfileCommand";
import { DeletePublicKeyCommand } from "./commands/DeletePublicKeyCommand";
import { DeleteStreamingDistributionCommand } from "./commands/DeleteStreamingDistributionCommand";
import { GetCloudFrontOriginAccessIdentityCommand } from "./commands/GetCloudFrontOriginAccessIdentityCommand";
import { GetCloudFrontOriginAccessIdentityConfigCommand } from "./commands/GetCloudFrontOriginAccessIdentityConfigCommand";
import { GetDistributionCommand } from "./commands/GetDistributionCommand";
import { GetDistributionConfigCommand } from "./commands/GetDistributionConfigCommand";
import { GetFieldLevelEncryptionCommand } from "./commands/GetFieldLevelEncryptionCommand";
import { GetFieldLevelEncryptionConfigCommand } from "./commands/GetFieldLevelEncryptionConfigCommand";
import { GetFieldLevelEncryptionProfileCommand } from "./commands/GetFieldLevelEncryptionProfileCommand";
import { GetFieldLevelEncryptionProfileConfigCommand } from "./commands/GetFieldLevelEncryptionProfileConfigCommand";
import { GetInvalidationCommand } from "./commands/GetInvalidationCommand";
import { GetPublicKeyCommand } from "./commands/GetPublicKeyCommand";
import { GetPublicKeyConfigCommand } from "./commands/GetPublicKeyConfigCommand";
import { GetStreamingDistributionCommand } from "./commands/GetStreamingDistributionCommand";
import { GetStreamingDistributionConfigCommand } from "./commands/GetStreamingDistributionConfigCommand";
import { ListCloudFrontOriginAccessIdentitiesCommand } from "./commands/ListCloudFrontOriginAccessIdentitiesCommand";
import { ListDistributionsByWebACLIdCommand } from "./commands/ListDistributionsByWebACLIdCommand";
import { ListDistributionsCommand } from "./commands/ListDistributionsCommand";
import { ListFieldLevelEncryptionConfigsCommand } from "./commands/ListFieldLevelEncryptionConfigsCommand";
import { ListFieldLevelEncryptionProfilesCommand } from "./commands/ListFieldLevelEncryptionProfilesCommand";
import { ListInvalidationsCommand } from "./commands/ListInvalidationsCommand";
import { ListPublicKeysCommand } from "./commands/ListPublicKeysCommand";
import { ListStreamingDistributionsCommand } from "./commands/ListStreamingDistributionsCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateCloudFrontOriginAccessIdentityCommand } from "./commands/UpdateCloudFrontOriginAccessIdentityCommand";
import { UpdateDistributionCommand } from "./commands/UpdateDistributionCommand";
import { UpdateFieldLevelEncryptionConfigCommand } from "./commands/UpdateFieldLevelEncryptionConfigCommand";
import { UpdateFieldLevelEncryptionProfileCommand } from "./commands/UpdateFieldLevelEncryptionProfileCommand";
import { UpdatePublicKeyCommand } from "./commands/UpdatePublicKeyCommand";
import { UpdateStreamingDistributionCommand } from "./commands/UpdateStreamingDistributionCommand";

export class CloudFront extends CloudFrontClient {
  /**
   * <p>Creates a new origin access identity. If you're using Amazon S3 for your origin, you can use an origin access identity to require users to access your content using a CloudFront URL instead of the Amazon S3 URL. For more information about how to use origin access identities, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CloudFrontOriginAccessIdentityAlreadyExists} <p>If the <code>CallerReference</code> is a value you already sent in a previous request to create an identity but the content of the <code>CloudFrontOriginAccessIdentityConfig</code> is different from the original request, CloudFront returns a <code>CloudFrontOriginAccessIdentityAlreadyExists</code> error. </p>
   *   - {MissingBody} <p>This operation requires a body. Ensure that the body is present and the <code>Content-Type</code> header is set.</p>
   *   - {TooManyCloudFrontOriginAccessIdentities} <p>Processing your request would cause you to exceed the maximum number of origin access identities allowed.</p>
   *   - {InvalidArgument} <p>The argument is invalid.</p>
   *   - {InconsistentQuantities} <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't match.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createCloudFrontOriginAccessIdentity(
    args: CreateCloudFrontOriginAccessIdentityInput
  ): Promise<CreateCloudFrontOriginAccessIdentityOutput>;
  public createCloudFrontOriginAccessIdentity(
    args: CreateCloudFrontOriginAccessIdentityInput,
    cb: (err: any, data?: CreateCloudFrontOriginAccessIdentityOutput) => void
  ): void;
  public createCloudFrontOriginAccessIdentity(
    args: CreateCloudFrontOriginAccessIdentityInput,
    cb?: (err: any, data?: CreateCloudFrontOriginAccessIdentityOutput) => void
  ): Promise<CreateCloudFrontOriginAccessIdentityOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateCloudFrontOriginAccessIdentityCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new web distribution. You create a CloudFront distribution to tell CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery. Send a <code>POST</code> request to the <code>/<i>CloudFront API version</i>/distribution</code>/<code>distribution ID</code> resource.</p> <important> <p>When you update a distribution, there are more required fields than when you create a distribution. When you update your distribution by using <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html">UpdateDistribution</a>, follow the steps included in the documentation to get the current configuration and then make your updates. This helps to make sure that you include all of the required fields. To view a summary, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-overview-required-fields.html">Required Fields for Create Distribution and Update Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {CNAMEAlreadyExists} <p>The CNAME specified is already defined for CloudFront.</p>
   *   - {DistributionAlreadyExists} <p>The caller reference you attempted to create the distribution with is associated with another distribution.</p>
   *   - {InvalidOrigin} <p>The Amazon S3 origin server specified does not refer to a valid Amazon S3 bucket.</p>
   *   - {InvalidOriginAccessIdentity} <p>The origin access identity is not valid or doesn't exist.</p>
   *   - {AccessDenied} <p>Access denied.</p>
   *   - {TooManyTrustedSigners} <p>Your request contains more trusted signers than are allowed per distribution.</p>
   *   - {TrustedSignerDoesNotExist} <p>One or more of your trusted signers don't exist.</p>
   *   - {InvalidViewerCertificate} <p>A viewer certificate specified in the response body is not valid.</p>
   *   - {InvalidMinimumProtocolVersion} <p>The minimum protocol version specified is not valid.</p>
   *   - {MissingBody} <p>This operation requires a body. Ensure that the body is present and the <code>Content-Type</code> header is set.</p>
   *   - {TooManyDistributionCNAMEs} <p>Your request contains more CNAMEs than are allowed per distribution.</p>
   *   - {TooManyDistributions} <p>Processing your request would cause you to exceed the maximum number of distributions allowed.</p>
   *   - {InvalidDefaultRootObject} <p>The default root object file name is too big or contains an invalid character.</p>
   *   - {InvalidRelativePath} <p>The relative path is too big, is not URL-encoded, or does not begin with a slash (/).</p>
   *   - {InvalidErrorCode} <p>An invalid error code was specified.</p>
   *   - {InvalidResponseCode} <p>A response code specified in the response body is not valid.</p>
   *   - {InvalidArgument} <p>The argument is invalid.</p>
   *   - {InvalidRequiredProtocol} <p>This operation requires the HTTPS protocol. Ensure that you specify the HTTPS protocol in your request, or omit the <code>RequiredProtocols</code> element from your distribution configuration.</p>
   *   - {NoSuchOrigin} <p>No origin exists with the specified <code>Origin Id</code>. </p>
   *   - {TooManyOrigins} <p>You cannot create more origins for the distribution.</p>
   *   - {TooManyOriginGroupsPerDistribution} <p>Processing your request would cause you to exceed the maximum number of origin groups allowed.</p>
   *   - {TooManyCacheBehaviors} <p>You cannot create more cache behaviors for the distribution.</p>
   *   - {TooManyCookieNamesInWhiteList} <p>Your request contains more cookie names in the whitelist than are allowed per cache behavior.</p>
   *   - {InvalidForwardCookies} <p>Your request contains forward cookies option which doesn't match with the expectation for the <code>whitelisted</code> list of cookie names. Either list of cookie names has been specified when not allowed or list of cookie names is missing when expected.</p>
   *   - {TooManyHeadersInForwardedValues} <p>Your request contains too many headers in forwarded values.</p>
   *   - {InvalidHeadersForS3Origin} <p>The headers specified are not valid for an Amazon S3 origin.</p>
   *   - {InconsistentQuantities} <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't match.</p>
   *   - {TooManyCertificates} <p>You cannot create anymore custom SSL/TLS certificates.</p>
   *   - {InvalidLocationCode} <p>The location code specified is not valid.</p>
   *   - {InvalidGeoRestrictionParameter} <p>The specified geo restriction parameter is not valid.</p>
   *   - {InvalidProtocolSettings} <p>You cannot specify SSLv3 as the minimum protocol version if you only want to support only clients that support Server Name Indication (SNI).</p>
   *   - {InvalidTTLOrder} <p>TTL order specified in the response body is not valid.</p>
   *   - {InvalidWebACLId} <p>A web ACL id specified in the response body is not valid.</p>
   *   - {TooManyOriginCustomHeaders} <p>Your request contains too many origin custom headers.</p>
   *   - {TooManyQueryStringParameters} <p>Your request contains too many query string parameters.</p>
   *   - {InvalidQueryStringParameters} <p>Query string parameters specified in the response body are not valid.</p>
   *   - {TooManyDistributionsWithLambdaAssociations} <p>Processing your request would cause the maximum number of distributions with Lambda function associations per owner to be exceeded.</p>
   *   - {TooManyLambdaFunctionAssociations} <p>Your request contains more Lambda function associations than are allowed per distribution.</p>
   *   - {InvalidLambdaFunctionAssociation} <p>The specified Lambda function association is invalid.</p>
   *   - {InvalidOriginReadTimeout} <p>The read timeout specified for the origin is not valid.</p>
   *   - {InvalidOriginKeepaliveTimeout} <p>The keep alive timeout specified for the origin is not valid.</p>
   *   - {NoSuchFieldLevelEncryptionConfig} <p>The specified configuration for field-level encryption doesn't exist.</p>
   *   - {IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior} <p>The specified configuration for field-level encryption can't be associated with the specified cache behavior.</p>
   *   - {TooManyDistributionsAssociatedToFieldLevelEncryptionConfig} <p>The maximum number of distributions have been associated with the specified configuration for field-level encryption.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDistribution(
    args: CreateDistributionInput
  ): Promise<CreateDistributionOutput>;
  public createDistribution(
    args: CreateDistributionInput,
    cb: (err: any, data?: CreateDistributionOutput) => void
  ): void;
  public createDistribution(
    args: CreateDistributionInput,
    cb?: (err: any, data?: CreateDistributionOutput) => void
  ): Promise<CreateDistributionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDistributionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Create a new distribution with tags.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CNAMEAlreadyExists} <p>The CNAME specified is already defined for CloudFront.</p>
   *   - {DistributionAlreadyExists} <p>The caller reference you attempted to create the distribution with is associated with another distribution.</p>
   *   - {InvalidOrigin} <p>The Amazon S3 origin server specified does not refer to a valid Amazon S3 bucket.</p>
   *   - {InvalidOriginAccessIdentity} <p>The origin access identity is not valid or doesn't exist.</p>
   *   - {AccessDenied} <p>Access denied.</p>
   *   - {TooManyTrustedSigners} <p>Your request contains more trusted signers than are allowed per distribution.</p>
   *   - {TrustedSignerDoesNotExist} <p>One or more of your trusted signers don't exist.</p>
   *   - {InvalidViewerCertificate} <p>A viewer certificate specified in the response body is not valid.</p>
   *   - {InvalidMinimumProtocolVersion} <p>The minimum protocol version specified is not valid.</p>
   *   - {MissingBody} <p>This operation requires a body. Ensure that the body is present and the <code>Content-Type</code> header is set.</p>
   *   - {TooManyDistributionCNAMEs} <p>Your request contains more CNAMEs than are allowed per distribution.</p>
   *   - {TooManyDistributions} <p>Processing your request would cause you to exceed the maximum number of distributions allowed.</p>
   *   - {InvalidDefaultRootObject} <p>The default root object file name is too big or contains an invalid character.</p>
   *   - {InvalidRelativePath} <p>The relative path is too big, is not URL-encoded, or does not begin with a slash (/).</p>
   *   - {InvalidErrorCode} <p>An invalid error code was specified.</p>
   *   - {InvalidResponseCode} <p>A response code specified in the response body is not valid.</p>
   *   - {InvalidArgument} <p>The argument is invalid.</p>
   *   - {InvalidRequiredProtocol} <p>This operation requires the HTTPS protocol. Ensure that you specify the HTTPS protocol in your request, or omit the <code>RequiredProtocols</code> element from your distribution configuration.</p>
   *   - {NoSuchOrigin} <p>No origin exists with the specified <code>Origin Id</code>. </p>
   *   - {TooManyOrigins} <p>You cannot create more origins for the distribution.</p>
   *   - {TooManyOriginGroupsPerDistribution} <p>Processing your request would cause you to exceed the maximum number of origin groups allowed.</p>
   *   - {TooManyCacheBehaviors} <p>You cannot create more cache behaviors for the distribution.</p>
   *   - {TooManyCookieNamesInWhiteList} <p>Your request contains more cookie names in the whitelist than are allowed per cache behavior.</p>
   *   - {InvalidForwardCookies} <p>Your request contains forward cookies option which doesn't match with the expectation for the <code>whitelisted</code> list of cookie names. Either list of cookie names has been specified when not allowed or list of cookie names is missing when expected.</p>
   *   - {TooManyHeadersInForwardedValues} <p>Your request contains too many headers in forwarded values.</p>
   *   - {InvalidHeadersForS3Origin} <p>The headers specified are not valid for an Amazon S3 origin.</p>
   *   - {InconsistentQuantities} <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't match.</p>
   *   - {TooManyCertificates} <p>You cannot create anymore custom SSL/TLS certificates.</p>
   *   - {InvalidLocationCode} <p>The location code specified is not valid.</p>
   *   - {InvalidGeoRestrictionParameter} <p>The specified geo restriction parameter is not valid.</p>
   *   - {InvalidProtocolSettings} <p>You cannot specify SSLv3 as the minimum protocol version if you only want to support only clients that support Server Name Indication (SNI).</p>
   *   - {InvalidTTLOrder} <p>TTL order specified in the response body is not valid.</p>
   *   - {InvalidWebACLId} <p>A web ACL id specified in the response body is not valid.</p>
   *   - {TooManyOriginCustomHeaders} <p>Your request contains too many origin custom headers.</p>
   *   - {InvalidTagging} <p>Tagging specified in the response body is not valid.</p>
   *   - {TooManyQueryStringParameters} <p>Your request contains too many query string parameters.</p>
   *   - {InvalidQueryStringParameters} <p>Query string parameters specified in the response body are not valid.</p>
   *   - {TooManyDistributionsWithLambdaAssociations} <p>Processing your request would cause the maximum number of distributions with Lambda function associations per owner to be exceeded.</p>
   *   - {TooManyLambdaFunctionAssociations} <p>Your request contains more Lambda function associations than are allowed per distribution.</p>
   *   - {InvalidLambdaFunctionAssociation} <p>The specified Lambda function association is invalid.</p>
   *   - {InvalidOriginReadTimeout} <p>The read timeout specified for the origin is not valid.</p>
   *   - {InvalidOriginKeepaliveTimeout} <p>The keep alive timeout specified for the origin is not valid.</p>
   *   - {NoSuchFieldLevelEncryptionConfig} <p>The specified configuration for field-level encryption doesn't exist.</p>
   *   - {IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior} <p>The specified configuration for field-level encryption can't be associated with the specified cache behavior.</p>
   *   - {TooManyDistributionsAssociatedToFieldLevelEncryptionConfig} <p>The maximum number of distributions have been associated with the specified configuration for field-level encryption.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDistributionWithTags(
    args: CreateDistributionWithTagsInput
  ): Promise<CreateDistributionWithTagsOutput>;
  public createDistributionWithTags(
    args: CreateDistributionWithTagsInput,
    cb: (err: any, data?: CreateDistributionWithTagsOutput) => void
  ): void;
  public createDistributionWithTags(
    args: CreateDistributionWithTagsInput,
    cb?: (err: any, data?: CreateDistributionWithTagsOutput) => void
  ): Promise<CreateDistributionWithTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDistributionWithTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Create a new field-level encryption configuration.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InconsistentQuantities} <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't match.</p>
   *   - {InvalidArgument} <p>The argument is invalid.</p>
   *   - {NoSuchFieldLevelEncryptionProfile} <p>The specified profile for field-level encryption doesn't exist.</p>
   *   - {FieldLevelEncryptionConfigAlreadyExists} <p>The specified configuration for field-level encryption already exists.</p>
   *   - {TooManyFieldLevelEncryptionConfigs} <p>The maximum number of configurations for field-level encryption have been created.</p>
   *   - {TooManyFieldLevelEncryptionQueryArgProfiles} <p>The maximum number of query arg profiles for field-level encryption have been created.</p>
   *   - {TooManyFieldLevelEncryptionContentTypeProfiles} <p>The maximum number of content type profiles for field-level encryption have been created.</p>
   *   - {QueryArgProfileEmpty} <p>No profile specified for the field-level encryption query argument.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createFieldLevelEncryptionConfig(
    args: CreateFieldLevelEncryptionConfigInput
  ): Promise<CreateFieldLevelEncryptionConfigOutput>;
  public createFieldLevelEncryptionConfig(
    args: CreateFieldLevelEncryptionConfigInput,
    cb: (err: any, data?: CreateFieldLevelEncryptionConfigOutput) => void
  ): void;
  public createFieldLevelEncryptionConfig(
    args: CreateFieldLevelEncryptionConfigInput,
    cb?: (err: any, data?: CreateFieldLevelEncryptionConfigOutput) => void
  ): Promise<CreateFieldLevelEncryptionConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateFieldLevelEncryptionConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Create a field-level encryption profile.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InconsistentQuantities} <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't match.</p>
   *   - {InvalidArgument} <p>The argument is invalid.</p>
   *   - {NoSuchPublicKey} <p>The specified public key doesn't exist.</p>
   *   - {FieldLevelEncryptionProfileAlreadyExists} <p>The specified profile for field-level encryption already exists.</p>
   *   - {FieldLevelEncryptionProfileSizeExceeded} <p>The maximum size of a profile for field-level encryption was exceeded.</p>
   *   - {TooManyFieldLevelEncryptionProfiles} <p>The maximum number of profiles for field-level encryption have been created.</p>
   *   - {TooManyFieldLevelEncryptionEncryptionEntities} <p>The maximum number of encryption entities for field-level encryption have been created.</p>
   *   - {TooManyFieldLevelEncryptionFieldPatterns} <p>The maximum number of field patterns for field-level encryption have been created.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createFieldLevelEncryptionProfile(
    args: CreateFieldLevelEncryptionProfileInput
  ): Promise<CreateFieldLevelEncryptionProfileOutput>;
  public createFieldLevelEncryptionProfile(
    args: CreateFieldLevelEncryptionProfileInput,
    cb: (err: any, data?: CreateFieldLevelEncryptionProfileOutput) => void
  ): void;
  public createFieldLevelEncryptionProfile(
    args: CreateFieldLevelEncryptionProfileInput,
    cb?: (err: any, data?: CreateFieldLevelEncryptionProfileOutput) => void
  ): Promise<CreateFieldLevelEncryptionProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateFieldLevelEncryptionProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Create a new invalidation. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDenied} <p>Access denied.</p>
   *   - {MissingBody} <p>This operation requires a body. Ensure that the body is present and the <code>Content-Type</code> header is set.</p>
   *   - {InvalidArgument} <p>The argument is invalid.</p>
   *   - {NoSuchDistribution} <p>The specified distribution does not exist.</p>
   *   - {BatchTooLarge} <p>Invalidation batch specified is too large.</p>
   *   - {TooManyInvalidationsInProgress} <p>You have exceeded the maximum number of allowable InProgress invalidation batch requests, or invalidation objects.</p>
   *   - {InconsistentQuantities} <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't match.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createInvalidation(
    args: CreateInvalidationInput
  ): Promise<CreateInvalidationOutput>;
  public createInvalidation(
    args: CreateInvalidationInput,
    cb: (err: any, data?: CreateInvalidationOutput) => void
  ): void;
  public createInvalidation(
    args: CreateInvalidationInput,
    cb?: (err: any, data?: CreateInvalidationOutput) => void
  ): Promise<CreateInvalidationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateInvalidationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Add a new public key to CloudFront to use, for example, for field-level encryption. You can add a maximum of 10 public keys with one AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {PublicKeyAlreadyExists} <p>The specified public key already exists.</p>
   *   - {InvalidArgument} <p>The argument is invalid.</p>
   *   - {TooManyPublicKeys} <p>The maximum number of public keys for field-level encryption have been created. To create a new public key, delete one of the existing keys.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createPublicKey(
    args: CreatePublicKeyInput
  ): Promise<CreatePublicKeyOutput>;
  public createPublicKey(
    args: CreatePublicKeyInput,
    cb: (err: any, data?: CreatePublicKeyOutput) => void
  ): void;
  public createPublicKey(
    args: CreatePublicKeyInput,
    cb?: (err: any, data?: CreatePublicKeyOutput) => void
  ): Promise<CreatePublicKeyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreatePublicKeyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new RTMP distribution. An RTMP distribution is similar to a web distribution, but an RTMP distribution streams media files using the Adobe Real-Time Messaging Protocol (RTMP) instead of serving files using HTTP. </p> <p>To create a new distribution, submit a <code>POST</code> request to the <i>CloudFront API version</i>/distribution resource. The request body must include a document with a <i>StreamingDistributionConfig</i> element. The response echoes the <code>StreamingDistributionConfig</code> element and returns other information about the RTMP distribution.</p> <p>To get the status of your request, use the <i>GET StreamingDistribution</i> API action. When the value of <code>Enabled</code> is <code>true</code> and the value of <code>Status</code> is <code>Deployed</code>, your distribution is ready. A distribution usually deploys in less than 15 minutes.</p> <p>For more information about web distributions, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-rtmp.html">Working with RTMP Distributions</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <important> <p>Beginning with the 2012-05-05 version of the CloudFront API, we made substantial changes to the format of the XML document that you include in the request body when you create or update a web distribution or an RTMP distribution, and when you invalidate objects. With previous versions of the API, we discovered that it was too easy to accidentally delete one or more values for an element that accepts multiple values, for example, CNAMEs and trusted signers. Our changes for the 2012-05-05 release are intended to prevent these accidental deletions and to notify you when there's a mismatch between the number of values you say you're specifying in the <code>Quantity</code> element and the number of values specified.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {CNAMEAlreadyExists} <p>The CNAME specified is already defined for CloudFront.</p>
   *   - {StreamingDistributionAlreadyExists} <p>The caller reference you attempted to create the streaming distribution with is associated with another distribution</p>
   *   - {InvalidOrigin} <p>The Amazon S3 origin server specified does not refer to a valid Amazon S3 bucket.</p>
   *   - {InvalidOriginAccessIdentity} <p>The origin access identity is not valid or doesn't exist.</p>
   *   - {AccessDenied} <p>Access denied.</p>
   *   - {TooManyTrustedSigners} <p>Your request contains more trusted signers than are allowed per distribution.</p>
   *   - {TrustedSignerDoesNotExist} <p>One or more of your trusted signers don't exist.</p>
   *   - {MissingBody} <p>This operation requires a body. Ensure that the body is present and the <code>Content-Type</code> header is set.</p>
   *   - {TooManyStreamingDistributionCNAMEs} <p>Your request contains more CNAMEs than are allowed per distribution.</p>
   *   - {TooManyStreamingDistributions} <p>Processing your request would cause you to exceed the maximum number of streaming distributions allowed.</p>
   *   - {InvalidArgument} <p>The argument is invalid.</p>
   *   - {InconsistentQuantities} <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't match.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createStreamingDistribution(
    args: CreateStreamingDistributionInput
  ): Promise<CreateStreamingDistributionOutput>;
  public createStreamingDistribution(
    args: CreateStreamingDistributionInput,
    cb: (err: any, data?: CreateStreamingDistributionOutput) => void
  ): void;
  public createStreamingDistribution(
    args: CreateStreamingDistributionInput,
    cb?: (err: any, data?: CreateStreamingDistributionOutput) => void
  ): Promise<CreateStreamingDistributionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateStreamingDistributionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Create a new streaming distribution with tags.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CNAMEAlreadyExists} <p>The CNAME specified is already defined for CloudFront.</p>
   *   - {StreamingDistributionAlreadyExists} <p>The caller reference you attempted to create the streaming distribution with is associated with another distribution</p>
   *   - {InvalidOrigin} <p>The Amazon S3 origin server specified does not refer to a valid Amazon S3 bucket.</p>
   *   - {InvalidOriginAccessIdentity} <p>The origin access identity is not valid or doesn't exist.</p>
   *   - {AccessDenied} <p>Access denied.</p>
   *   - {TooManyTrustedSigners} <p>Your request contains more trusted signers than are allowed per distribution.</p>
   *   - {TrustedSignerDoesNotExist} <p>One or more of your trusted signers don't exist.</p>
   *   - {MissingBody} <p>This operation requires a body. Ensure that the body is present and the <code>Content-Type</code> header is set.</p>
   *   - {TooManyStreamingDistributionCNAMEs} <p>Your request contains more CNAMEs than are allowed per distribution.</p>
   *   - {TooManyStreamingDistributions} <p>Processing your request would cause you to exceed the maximum number of streaming distributions allowed.</p>
   *   - {InvalidArgument} <p>The argument is invalid.</p>
   *   - {InconsistentQuantities} <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't match.</p>
   *   - {InvalidTagging} <p>Tagging specified in the response body is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createStreamingDistributionWithTags(
    args: CreateStreamingDistributionWithTagsInput
  ): Promise<CreateStreamingDistributionWithTagsOutput>;
  public createStreamingDistributionWithTags(
    args: CreateStreamingDistributionWithTagsInput,
    cb: (err: any, data?: CreateStreamingDistributionWithTagsOutput) => void
  ): void;
  public createStreamingDistributionWithTags(
    args: CreateStreamingDistributionWithTagsInput,
    cb?: (err: any, data?: CreateStreamingDistributionWithTagsOutput) => void
  ): Promise<CreateStreamingDistributionWithTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateStreamingDistributionWithTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Delete an origin access identity. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDenied} <p>Access denied.</p>
   *   - {InvalidIfMatchVersion} <p>The <code>If-Match</code> version is missing or not valid for the distribution.</p>
   *   - {NoSuchCloudFrontOriginAccessIdentity} <p>The specified origin access identity does not exist.</p>
   *   - {PreconditionFailed} <p>The precondition given in one or more of the request-header fields evaluated to <code>false</code>. </p>
   *   - {CloudFrontOriginAccessIdentityInUse} <p>The Origin Access Identity specified is already in use.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteCloudFrontOriginAccessIdentity(
    args: DeleteCloudFrontOriginAccessIdentityInput
  ): Promise<DeleteCloudFrontOriginAccessIdentityOutput>;
  public deleteCloudFrontOriginAccessIdentity(
    args: DeleteCloudFrontOriginAccessIdentityInput,
    cb: (err: any, data?: DeleteCloudFrontOriginAccessIdentityOutput) => void
  ): void;
  public deleteCloudFrontOriginAccessIdentity(
    args: DeleteCloudFrontOriginAccessIdentityInput,
    cb?: (err: any, data?: DeleteCloudFrontOriginAccessIdentityOutput) => void
  ): Promise<DeleteCloudFrontOriginAccessIdentityOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteCloudFrontOriginAccessIdentityCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Delete a distribution. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDenied} <p>Access denied.</p>
   *   - {DistributionNotDisabled} <p>The specified CloudFront distribution is not disabled. You must disable the distribution before you can delete it.</p>
   *   - {InvalidIfMatchVersion} <p>The <code>If-Match</code> version is missing or not valid for the distribution.</p>
   *   - {NoSuchDistribution} <p>The specified distribution does not exist.</p>
   *   - {PreconditionFailed} <p>The precondition given in one or more of the request-header fields evaluated to <code>false</code>. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDistribution(
    args: DeleteDistributionInput
  ): Promise<DeleteDistributionOutput>;
  public deleteDistribution(
    args: DeleteDistributionInput,
    cb: (err: any, data?: DeleteDistributionOutput) => void
  ): void;
  public deleteDistribution(
    args: DeleteDistributionInput,
    cb?: (err: any, data?: DeleteDistributionOutput) => void
  ): Promise<DeleteDistributionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDistributionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Remove a field-level encryption configuration.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDenied} <p>Access denied.</p>
   *   - {InvalidIfMatchVersion} <p>The <code>If-Match</code> version is missing or not valid for the distribution.</p>
   *   - {NoSuchFieldLevelEncryptionConfig} <p>The specified configuration for field-level encryption doesn't exist.</p>
   *   - {PreconditionFailed} <p>The precondition given in one or more of the request-header fields evaluated to <code>false</code>. </p>
   *   - {FieldLevelEncryptionConfigInUse} <p>The specified configuration for field-level encryption is in use.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteFieldLevelEncryptionConfig(
    args: DeleteFieldLevelEncryptionConfigInput
  ): Promise<DeleteFieldLevelEncryptionConfigOutput>;
  public deleteFieldLevelEncryptionConfig(
    args: DeleteFieldLevelEncryptionConfigInput,
    cb: (err: any, data?: DeleteFieldLevelEncryptionConfigOutput) => void
  ): void;
  public deleteFieldLevelEncryptionConfig(
    args: DeleteFieldLevelEncryptionConfigInput,
    cb?: (err: any, data?: DeleteFieldLevelEncryptionConfigOutput) => void
  ): Promise<DeleteFieldLevelEncryptionConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteFieldLevelEncryptionConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Remove a field-level encryption profile.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDenied} <p>Access denied.</p>
   *   - {InvalidIfMatchVersion} <p>The <code>If-Match</code> version is missing or not valid for the distribution.</p>
   *   - {NoSuchFieldLevelEncryptionProfile} <p>The specified profile for field-level encryption doesn't exist.</p>
   *   - {PreconditionFailed} <p>The precondition given in one or more of the request-header fields evaluated to <code>false</code>. </p>
   *   - {FieldLevelEncryptionProfileInUse} <p>The specified profile for field-level encryption is in use.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteFieldLevelEncryptionProfile(
    args: DeleteFieldLevelEncryptionProfileInput
  ): Promise<DeleteFieldLevelEncryptionProfileOutput>;
  public deleteFieldLevelEncryptionProfile(
    args: DeleteFieldLevelEncryptionProfileInput,
    cb: (err: any, data?: DeleteFieldLevelEncryptionProfileOutput) => void
  ): void;
  public deleteFieldLevelEncryptionProfile(
    args: DeleteFieldLevelEncryptionProfileInput,
    cb?: (err: any, data?: DeleteFieldLevelEncryptionProfileOutput) => void
  ): Promise<DeleteFieldLevelEncryptionProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteFieldLevelEncryptionProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Remove a public key you previously added to CloudFront.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDenied} <p>Access denied.</p>
   *   - {PublicKeyInUse} <p>The specified public key is in use. </p>
   *   - {InvalidIfMatchVersion} <p>The <code>If-Match</code> version is missing or not valid for the distribution.</p>
   *   - {NoSuchPublicKey} <p>The specified public key doesn't exist.</p>
   *   - {PreconditionFailed} <p>The precondition given in one or more of the request-header fields evaluated to <code>false</code>. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deletePublicKey(
    args: DeletePublicKeyInput
  ): Promise<DeletePublicKeyOutput>;
  public deletePublicKey(
    args: DeletePublicKeyInput,
    cb: (err: any, data?: DeletePublicKeyOutput) => void
  ): void;
  public deletePublicKey(
    args: DeletePublicKeyInput,
    cb?: (err: any, data?: DeletePublicKeyOutput) => void
  ): Promise<DeletePublicKeyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeletePublicKeyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Delete a streaming distribution. To delete an RTMP distribution using the CloudFront API, perform the following steps.</p> <p> <b>To delete an RTMP distribution using the CloudFront API</b>:</p> <ol> <li> <p>Disable the RTMP distribution.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to get the current configuration and the <code>Etag</code> header for the distribution. </p> </li> <li> <p>Update the XML document that was returned in the response to your <code>GET Streaming Distribution Config</code> request to change the value of <code>Enabled</code> to <code>false</code>.</p> </li> <li> <p>Submit a <code>PUT Streaming Distribution Config</code> request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Then set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to the <code>PUT Streaming Distribution Config</code> request to confirm that the distribution was successfully disabled.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> </li> <li> <p>Submit a <code>DELETE Streaming Distribution</code> request. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to your <code>DELETE Streaming Distribution</code> request to confirm that the distribution was successfully deleted.</p> </li> </ol> <p>For information about deleting a distribution using the CloudFront console, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDenied} <p>Access denied.</p>
   *   - {StreamingDistributionNotDisabled} <p>The specified CloudFront distribution is not disabled. You must disable the distribution before you can delete it.</p>
   *   - {InvalidIfMatchVersion} <p>The <code>If-Match</code> version is missing or not valid for the distribution.</p>
   *   - {NoSuchStreamingDistribution} <p>The specified streaming distribution does not exist.</p>
   *   - {PreconditionFailed} <p>The precondition given in one or more of the request-header fields evaluated to <code>false</code>. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteStreamingDistribution(
    args: DeleteStreamingDistributionInput
  ): Promise<DeleteStreamingDistributionOutput>;
  public deleteStreamingDistribution(
    args: DeleteStreamingDistributionInput,
    cb: (err: any, data?: DeleteStreamingDistributionOutput) => void
  ): void;
  public deleteStreamingDistribution(
    args: DeleteStreamingDistributionInput,
    cb?: (err: any, data?: DeleteStreamingDistributionOutput) => void
  ): Promise<DeleteStreamingDistributionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteStreamingDistributionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Get the information about an origin access identity. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchCloudFrontOriginAccessIdentity} <p>The specified origin access identity does not exist.</p>
   *   - {AccessDenied} <p>Access denied.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getCloudFrontOriginAccessIdentity(
    args: GetCloudFrontOriginAccessIdentityInput
  ): Promise<GetCloudFrontOriginAccessIdentityOutput>;
  public getCloudFrontOriginAccessIdentity(
    args: GetCloudFrontOriginAccessIdentityInput,
    cb: (err: any, data?: GetCloudFrontOriginAccessIdentityOutput) => void
  ): void;
  public getCloudFrontOriginAccessIdentity(
    args: GetCloudFrontOriginAccessIdentityInput,
    cb?: (err: any, data?: GetCloudFrontOriginAccessIdentityOutput) => void
  ): Promise<GetCloudFrontOriginAccessIdentityOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetCloudFrontOriginAccessIdentityCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Get the configuration information about an origin access identity. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchCloudFrontOriginAccessIdentity} <p>The specified origin access identity does not exist.</p>
   *   - {AccessDenied} <p>Access denied.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getCloudFrontOriginAccessIdentityConfig(
    args: GetCloudFrontOriginAccessIdentityConfigInput
  ): Promise<GetCloudFrontOriginAccessIdentityConfigOutput>;
  public getCloudFrontOriginAccessIdentityConfig(
    args: GetCloudFrontOriginAccessIdentityConfigInput,
    cb: (err: any, data?: GetCloudFrontOriginAccessIdentityConfigOutput) => void
  ): void;
  public getCloudFrontOriginAccessIdentityConfig(
    args: GetCloudFrontOriginAccessIdentityConfigInput,
    cb?: (
      err: any,
      data?: GetCloudFrontOriginAccessIdentityConfigOutput
    ) => void
  ): Promise<GetCloudFrontOriginAccessIdentityConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetCloudFrontOriginAccessIdentityConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Get the information about a distribution.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchDistribution} <p>The specified distribution does not exist.</p>
   *   - {AccessDenied} <p>Access denied.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDistribution(
    args: GetDistributionInput
  ): Promise<GetDistributionOutput>;
  public getDistribution(
    args: GetDistributionInput,
    cb: (err: any, data?: GetDistributionOutput) => void
  ): void;
  public getDistribution(
    args: GetDistributionInput,
    cb?: (err: any, data?: GetDistributionOutput) => void
  ): Promise<GetDistributionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDistributionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Get the configuration information about a distribution. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchDistribution} <p>The specified distribution does not exist.</p>
   *   - {AccessDenied} <p>Access denied.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDistributionConfig(
    args: GetDistributionConfigInput
  ): Promise<GetDistributionConfigOutput>;
  public getDistributionConfig(
    args: GetDistributionConfigInput,
    cb: (err: any, data?: GetDistributionConfigOutput) => void
  ): void;
  public getDistributionConfig(
    args: GetDistributionConfigInput,
    cb?: (err: any, data?: GetDistributionConfigOutput) => void
  ): Promise<GetDistributionConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDistributionConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Get the field-level encryption configuration information.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDenied} <p>Access denied.</p>
   *   - {NoSuchFieldLevelEncryptionConfig} <p>The specified configuration for field-level encryption doesn't exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getFieldLevelEncryption(
    args: GetFieldLevelEncryptionInput
  ): Promise<GetFieldLevelEncryptionOutput>;
  public getFieldLevelEncryption(
    args: GetFieldLevelEncryptionInput,
    cb: (err: any, data?: GetFieldLevelEncryptionOutput) => void
  ): void;
  public getFieldLevelEncryption(
    args: GetFieldLevelEncryptionInput,
    cb?: (err: any, data?: GetFieldLevelEncryptionOutput) => void
  ): Promise<GetFieldLevelEncryptionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetFieldLevelEncryptionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Get the field-level encryption configuration information.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDenied} <p>Access denied.</p>
   *   - {NoSuchFieldLevelEncryptionConfig} <p>The specified configuration for field-level encryption doesn't exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getFieldLevelEncryptionConfig(
    args: GetFieldLevelEncryptionConfigInput
  ): Promise<GetFieldLevelEncryptionConfigOutput>;
  public getFieldLevelEncryptionConfig(
    args: GetFieldLevelEncryptionConfigInput,
    cb: (err: any, data?: GetFieldLevelEncryptionConfigOutput) => void
  ): void;
  public getFieldLevelEncryptionConfig(
    args: GetFieldLevelEncryptionConfigInput,
    cb?: (err: any, data?: GetFieldLevelEncryptionConfigOutput) => void
  ): Promise<GetFieldLevelEncryptionConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetFieldLevelEncryptionConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Get the field-level encryption profile information.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDenied} <p>Access denied.</p>
   *   - {NoSuchFieldLevelEncryptionProfile} <p>The specified profile for field-level encryption doesn't exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getFieldLevelEncryptionProfile(
    args: GetFieldLevelEncryptionProfileInput
  ): Promise<GetFieldLevelEncryptionProfileOutput>;
  public getFieldLevelEncryptionProfile(
    args: GetFieldLevelEncryptionProfileInput,
    cb: (err: any, data?: GetFieldLevelEncryptionProfileOutput) => void
  ): void;
  public getFieldLevelEncryptionProfile(
    args: GetFieldLevelEncryptionProfileInput,
    cb?: (err: any, data?: GetFieldLevelEncryptionProfileOutput) => void
  ): Promise<GetFieldLevelEncryptionProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetFieldLevelEncryptionProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Get the field-level encryption profile configuration information.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDenied} <p>Access denied.</p>
   *   - {NoSuchFieldLevelEncryptionProfile} <p>The specified profile for field-level encryption doesn't exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getFieldLevelEncryptionProfileConfig(
    args: GetFieldLevelEncryptionProfileConfigInput
  ): Promise<GetFieldLevelEncryptionProfileConfigOutput>;
  public getFieldLevelEncryptionProfileConfig(
    args: GetFieldLevelEncryptionProfileConfigInput,
    cb: (err: any, data?: GetFieldLevelEncryptionProfileConfigOutput) => void
  ): void;
  public getFieldLevelEncryptionProfileConfig(
    args: GetFieldLevelEncryptionProfileConfigInput,
    cb?: (err: any, data?: GetFieldLevelEncryptionProfileConfigOutput) => void
  ): Promise<GetFieldLevelEncryptionProfileConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetFieldLevelEncryptionProfileConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Get the information about an invalidation. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchInvalidation} <p>The specified invalidation does not exist.</p>
   *   - {NoSuchDistribution} <p>The specified distribution does not exist.</p>
   *   - {AccessDenied} <p>Access denied.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getInvalidation(
    args: GetInvalidationInput
  ): Promise<GetInvalidationOutput>;
  public getInvalidation(
    args: GetInvalidationInput,
    cb: (err: any, data?: GetInvalidationOutput) => void
  ): void;
  public getInvalidation(
    args: GetInvalidationInput,
    cb?: (err: any, data?: GetInvalidationOutput) => void
  ): Promise<GetInvalidationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetInvalidationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Get the public key information.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDenied} <p>Access denied.</p>
   *   - {NoSuchPublicKey} <p>The specified public key doesn't exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getPublicKey(args: GetPublicKeyInput): Promise<GetPublicKeyOutput>;
  public getPublicKey(
    args: GetPublicKeyInput,
    cb: (err: any, data?: GetPublicKeyOutput) => void
  ): void;
  public getPublicKey(
    args: GetPublicKeyInput,
    cb?: (err: any, data?: GetPublicKeyOutput) => void
  ): Promise<GetPublicKeyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetPublicKeyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Return public key configuration informaation</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDenied} <p>Access denied.</p>
   *   - {NoSuchPublicKey} <p>The specified public key doesn't exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getPublicKeyConfig(
    args: GetPublicKeyConfigInput
  ): Promise<GetPublicKeyConfigOutput>;
  public getPublicKeyConfig(
    args: GetPublicKeyConfigInput,
    cb: (err: any, data?: GetPublicKeyConfigOutput) => void
  ): void;
  public getPublicKeyConfig(
    args: GetPublicKeyConfigInput,
    cb?: (err: any, data?: GetPublicKeyConfigOutput) => void
  ): Promise<GetPublicKeyConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetPublicKeyConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about a specified RTMP distribution, including the distribution configuration.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchStreamingDistribution} <p>The specified streaming distribution does not exist.</p>
   *   - {AccessDenied} <p>Access denied.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getStreamingDistribution(
    args: GetStreamingDistributionInput
  ): Promise<GetStreamingDistributionOutput>;
  public getStreamingDistribution(
    args: GetStreamingDistributionInput,
    cb: (err: any, data?: GetStreamingDistributionOutput) => void
  ): void;
  public getStreamingDistribution(
    args: GetStreamingDistributionInput,
    cb?: (err: any, data?: GetStreamingDistributionOutput) => void
  ): Promise<GetStreamingDistributionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetStreamingDistributionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Get the configuration information about a streaming distribution. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchStreamingDistribution} <p>The specified streaming distribution does not exist.</p>
   *   - {AccessDenied} <p>Access denied.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getStreamingDistributionConfig(
    args: GetStreamingDistributionConfigInput
  ): Promise<GetStreamingDistributionConfigOutput>;
  public getStreamingDistributionConfig(
    args: GetStreamingDistributionConfigInput,
    cb: (err: any, data?: GetStreamingDistributionConfigOutput) => void
  ): void;
  public getStreamingDistributionConfig(
    args: GetStreamingDistributionConfigInput,
    cb?: (err: any, data?: GetStreamingDistributionConfigOutput) => void
  ): Promise<GetStreamingDistributionConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetStreamingDistributionConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists origin access identities.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidArgument} <p>The argument is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listCloudFrontOriginAccessIdentities(
    args: ListCloudFrontOriginAccessIdentitiesInput
  ): Promise<ListCloudFrontOriginAccessIdentitiesOutput>;
  public listCloudFrontOriginAccessIdentities(
    args: ListCloudFrontOriginAccessIdentitiesInput,
    cb: (err: any, data?: ListCloudFrontOriginAccessIdentitiesOutput) => void
  ): void;
  public listCloudFrontOriginAccessIdentities(
    args: ListCloudFrontOriginAccessIdentitiesInput,
    cb?: (err: any, data?: ListCloudFrontOriginAccessIdentitiesOutput) => void
  ): Promise<ListCloudFrontOriginAccessIdentitiesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListCloudFrontOriginAccessIdentitiesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>List CloudFront distributions.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidArgument} <p>The argument is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDistributions(
    args: ListDistributionsInput
  ): Promise<ListDistributionsOutput>;
  public listDistributions(
    args: ListDistributionsInput,
    cb: (err: any, data?: ListDistributionsOutput) => void
  ): void;
  public listDistributions(
    args: ListDistributionsInput,
    cb?: (err: any, data?: ListDistributionsOutput) => void
  ): Promise<ListDistributionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDistributionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>List the distributions that are associated with a specified AWS WAF web ACL. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidArgument} <p>The argument is invalid.</p>
   *   - {InvalidWebACLId} <p>A web ACL id specified in the response body is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDistributionsByWebACLId(
    args: ListDistributionsByWebACLIdInput
  ): Promise<ListDistributionsByWebACLIdOutput>;
  public listDistributionsByWebACLId(
    args: ListDistributionsByWebACLIdInput,
    cb: (err: any, data?: ListDistributionsByWebACLIdOutput) => void
  ): void;
  public listDistributionsByWebACLId(
    args: ListDistributionsByWebACLIdInput,
    cb?: (err: any, data?: ListDistributionsByWebACLIdOutput) => void
  ): Promise<ListDistributionsByWebACLIdOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDistributionsByWebACLIdCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>List all field-level encryption configurations that have been created in CloudFront for this account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidArgument} <p>The argument is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listFieldLevelEncryptionConfigs(
    args: ListFieldLevelEncryptionConfigsInput
  ): Promise<ListFieldLevelEncryptionConfigsOutput>;
  public listFieldLevelEncryptionConfigs(
    args: ListFieldLevelEncryptionConfigsInput,
    cb: (err: any, data?: ListFieldLevelEncryptionConfigsOutput) => void
  ): void;
  public listFieldLevelEncryptionConfigs(
    args: ListFieldLevelEncryptionConfigsInput,
    cb?: (err: any, data?: ListFieldLevelEncryptionConfigsOutput) => void
  ): Promise<ListFieldLevelEncryptionConfigsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListFieldLevelEncryptionConfigsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Request a list of field-level encryption profiles that have been created in CloudFront for this account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidArgument} <p>The argument is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listFieldLevelEncryptionProfiles(
    args: ListFieldLevelEncryptionProfilesInput
  ): Promise<ListFieldLevelEncryptionProfilesOutput>;
  public listFieldLevelEncryptionProfiles(
    args: ListFieldLevelEncryptionProfilesInput,
    cb: (err: any, data?: ListFieldLevelEncryptionProfilesOutput) => void
  ): void;
  public listFieldLevelEncryptionProfiles(
    args: ListFieldLevelEncryptionProfilesInput,
    cb?: (err: any, data?: ListFieldLevelEncryptionProfilesOutput) => void
  ): Promise<ListFieldLevelEncryptionProfilesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListFieldLevelEncryptionProfilesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists invalidation batches. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidArgument} <p>The argument is invalid.</p>
   *   - {NoSuchDistribution} <p>The specified distribution does not exist.</p>
   *   - {AccessDenied} <p>Access denied.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listInvalidations(
    args: ListInvalidationsInput
  ): Promise<ListInvalidationsOutput>;
  public listInvalidations(
    args: ListInvalidationsInput,
    cb: (err: any, data?: ListInvalidationsOutput) => void
  ): void;
  public listInvalidations(
    args: ListInvalidationsInput,
    cb?: (err: any, data?: ListInvalidationsOutput) => void
  ): Promise<ListInvalidationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListInvalidationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>List all public keys that have been added to CloudFront for this account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidArgument} <p>The argument is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listPublicKeys(
    args: ListPublicKeysInput
  ): Promise<ListPublicKeysOutput>;
  public listPublicKeys(
    args: ListPublicKeysInput,
    cb: (err: any, data?: ListPublicKeysOutput) => void
  ): void;
  public listPublicKeys(
    args: ListPublicKeysInput,
    cb?: (err: any, data?: ListPublicKeysOutput) => void
  ): Promise<ListPublicKeysOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListPublicKeysCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>List streaming distributions. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidArgument} <p>The argument is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listStreamingDistributions(
    args: ListStreamingDistributionsInput
  ): Promise<ListStreamingDistributionsOutput>;
  public listStreamingDistributions(
    args: ListStreamingDistributionsInput,
    cb: (err: any, data?: ListStreamingDistributionsOutput) => void
  ): void;
  public listStreamingDistributions(
    args: ListStreamingDistributionsInput,
    cb?: (err: any, data?: ListStreamingDistributionsOutput) => void
  ): Promise<ListStreamingDistributionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListStreamingDistributionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>List tags for a CloudFront resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDenied} <p>Access denied.</p>
   *   - {InvalidArgument} <p>The argument is invalid.</p>
   *   - {InvalidTagging} <p>Tagging specified in the response body is not valid.</p>
   *   - {NoSuchResource} <p>A resource that was specified is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Add tags to a CloudFront resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDenied} <p>Access denied.</p>
   *   - {InvalidArgument} <p>The argument is invalid.</p>
   *   - {InvalidTagging} <p>Tagging specified in the response body is not valid.</p>
   *   - {NoSuchResource} <p>A resource that was specified is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Remove tags from a CloudFront resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDenied} <p>Access denied.</p>
   *   - {InvalidArgument} <p>The argument is invalid.</p>
   *   - {InvalidTagging} <p>Tagging specified in the response body is not valid.</p>
   *   - {NoSuchResource} <p>A resource that was specified is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Update an origin access identity. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDenied} <p>Access denied.</p>
   *   - {IllegalUpdate} <p>Origin and <code>CallerReference</code> cannot be updated. </p>
   *   - {InvalidIfMatchVersion} <p>The <code>If-Match</code> version is missing or not valid for the distribution.</p>
   *   - {MissingBody} <p>This operation requires a body. Ensure that the body is present and the <code>Content-Type</code> header is set.</p>
   *   - {NoSuchCloudFrontOriginAccessIdentity} <p>The specified origin access identity does not exist.</p>
   *   - {PreconditionFailed} <p>The precondition given in one or more of the request-header fields evaluated to <code>false</code>. </p>
   *   - {InvalidArgument} <p>The argument is invalid.</p>
   *   - {InconsistentQuantities} <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't match.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateCloudFrontOriginAccessIdentity(
    args: UpdateCloudFrontOriginAccessIdentityInput
  ): Promise<UpdateCloudFrontOriginAccessIdentityOutput>;
  public updateCloudFrontOriginAccessIdentity(
    args: UpdateCloudFrontOriginAccessIdentityInput,
    cb: (err: any, data?: UpdateCloudFrontOriginAccessIdentityOutput) => void
  ): void;
  public updateCloudFrontOriginAccessIdentity(
    args: UpdateCloudFrontOriginAccessIdentityInput,
    cb?: (err: any, data?: UpdateCloudFrontOriginAccessIdentityOutput) => void
  ): Promise<UpdateCloudFrontOriginAccessIdentityOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateCloudFrontOriginAccessIdentityCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the configuration for a web distribution. </p> <important> <p>When you update a distribution, there are more required fields than when you create a distribution. When you update your distribution by using this API action, follow the steps here to get the current configuration and then make your updates, to make sure that you include all of the required fields. To view a summary, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-overview-required-fields.html">Required Fields for Create Distribution and Update Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </important> <p>The update process includes getting the current distribution configuration, updating the XML document that is returned to make your changes, and then submitting an <code>UpdateDistribution</code> request to make the updates.</p> <p>For information about updating a distribution using the CloudFront console instead, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-creating-console.html">Creating a Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p> <b>To update a web distribution using the CloudFront API</b> </p> <ol> <li> <p>Submit a <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetDistributionConfig.html">GetDistributionConfig</a> request to get the current configuration and an <code>Etag</code> header for the distribution.</p> <note> <p>If you update the distribution again, you must get a new <code>Etag</code> header.</p> </note> </li> <li> <p>Update the XML document that was returned in the response to your <code>GetDistributionConfig</code> request to include your changes. </p> <important> <p>When you edit the XML file, be aware of the following:</p> <ul> <li> <p>You must strip out the ETag parameter that is returned.</p> </li> <li> <p>Additional fields are required when you update a distribution. There may be fields included in the XML file for features that you haven't configured for your distribution. This is expected and required to successfully update the distribution.</p> </li> <li> <p>You can't change the value of <code>CallerReference</code>. If you try to change this value, CloudFront returns an <code>IllegalUpdate</code> error. </p> </li> <li> <p>The new configuration replaces the existing configuration; the values that you specify in an <code>UpdateDistribution</code> request are not merged into your existing configuration. When you add, delete, or replace values in an element that allows multiple values (for example, <code>CNAME</code>), you must specify all of the values that you want to appear in the updated distribution. In addition, you must update the corresponding <code>Quantity</code> element.</p> </li> </ul> </important> </li> <li> <p>Submit an <code>UpdateDistribution</code> request to update the configuration for your distribution:</p> <ul> <li> <p>In the request body, include the XML document that you updated in Step 2. The request body must include an XML document with a <code>DistributionConfig</code> element.</p> </li> <li> <p>Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GetDistributionConfig</code> request in Step 1.</p> </li> </ul> </li> <li> <p>Review the response to the <code>UpdateDistribution</code> request to confirm that the configuration was successfully updated.</p> </li> <li> <p>Optional: Submit a <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetDistribution.html">GetDistribution</a> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> </li> </ol>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDenied} <p>Access denied.</p>
   *   - {CNAMEAlreadyExists} <p>The CNAME specified is already defined for CloudFront.</p>
   *   - {IllegalUpdate} <p>Origin and <code>CallerReference</code> cannot be updated. </p>
   *   - {InvalidIfMatchVersion} <p>The <code>If-Match</code> version is missing or not valid for the distribution.</p>
   *   - {MissingBody} <p>This operation requires a body. Ensure that the body is present and the <code>Content-Type</code> header is set.</p>
   *   - {NoSuchDistribution} <p>The specified distribution does not exist.</p>
   *   - {PreconditionFailed} <p>The precondition given in one or more of the request-header fields evaluated to <code>false</code>. </p>
   *   - {TooManyDistributionCNAMEs} <p>Your request contains more CNAMEs than are allowed per distribution.</p>
   *   - {InvalidDefaultRootObject} <p>The default root object file name is too big or contains an invalid character.</p>
   *   - {InvalidRelativePath} <p>The relative path is too big, is not URL-encoded, or does not begin with a slash (/).</p>
   *   - {InvalidErrorCode} <p>An invalid error code was specified.</p>
   *   - {InvalidResponseCode} <p>A response code specified in the response body is not valid.</p>
   *   - {InvalidArgument} <p>The argument is invalid.</p>
   *   - {InvalidOriginAccessIdentity} <p>The origin access identity is not valid or doesn't exist.</p>
   *   - {TooManyTrustedSigners} <p>Your request contains more trusted signers than are allowed per distribution.</p>
   *   - {TrustedSignerDoesNotExist} <p>One or more of your trusted signers don't exist.</p>
   *   - {InvalidViewerCertificate} <p>A viewer certificate specified in the response body is not valid.</p>
   *   - {InvalidMinimumProtocolVersion} <p>The minimum protocol version specified is not valid.</p>
   *   - {InvalidRequiredProtocol} <p>This operation requires the HTTPS protocol. Ensure that you specify the HTTPS protocol in your request, or omit the <code>RequiredProtocols</code> element from your distribution configuration.</p>
   *   - {NoSuchOrigin} <p>No origin exists with the specified <code>Origin Id</code>. </p>
   *   - {TooManyOrigins} <p>You cannot create more origins for the distribution.</p>
   *   - {TooManyOriginGroupsPerDistribution} <p>Processing your request would cause you to exceed the maximum number of origin groups allowed.</p>
   *   - {TooManyCacheBehaviors} <p>You cannot create more cache behaviors for the distribution.</p>
   *   - {TooManyCookieNamesInWhiteList} <p>Your request contains more cookie names in the whitelist than are allowed per cache behavior.</p>
   *   - {InvalidForwardCookies} <p>Your request contains forward cookies option which doesn't match with the expectation for the <code>whitelisted</code> list of cookie names. Either list of cookie names has been specified when not allowed or list of cookie names is missing when expected.</p>
   *   - {TooManyHeadersInForwardedValues} <p>Your request contains too many headers in forwarded values.</p>
   *   - {InvalidHeadersForS3Origin} <p>The headers specified are not valid for an Amazon S3 origin.</p>
   *   - {InconsistentQuantities} <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't match.</p>
   *   - {TooManyCertificates} <p>You cannot create anymore custom SSL/TLS certificates.</p>
   *   - {InvalidLocationCode} <p>The location code specified is not valid.</p>
   *   - {InvalidGeoRestrictionParameter} <p>The specified geo restriction parameter is not valid.</p>
   *   - {InvalidTTLOrder} <p>TTL order specified in the response body is not valid.</p>
   *   - {InvalidWebACLId} <p>A web ACL id specified in the response body is not valid.</p>
   *   - {TooManyOriginCustomHeaders} <p>Your request contains too many origin custom headers.</p>
   *   - {TooManyQueryStringParameters} <p>Your request contains too many query string parameters.</p>
   *   - {InvalidQueryStringParameters} <p>Query string parameters specified in the response body are not valid.</p>
   *   - {TooManyDistributionsWithLambdaAssociations} <p>Processing your request would cause the maximum number of distributions with Lambda function associations per owner to be exceeded.</p>
   *   - {TooManyLambdaFunctionAssociations} <p>Your request contains more Lambda function associations than are allowed per distribution.</p>
   *   - {InvalidLambdaFunctionAssociation} <p>The specified Lambda function association is invalid.</p>
   *   - {InvalidOriginReadTimeout} <p>The read timeout specified for the origin is not valid.</p>
   *   - {InvalidOriginKeepaliveTimeout} <p>The keep alive timeout specified for the origin is not valid.</p>
   *   - {NoSuchFieldLevelEncryptionConfig} <p>The specified configuration for field-level encryption doesn't exist.</p>
   *   - {IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior} <p>The specified configuration for field-level encryption can't be associated with the specified cache behavior.</p>
   *   - {TooManyDistributionsAssociatedToFieldLevelEncryptionConfig} <p>The maximum number of distributions have been associated with the specified configuration for field-level encryption.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateDistribution(
    args: UpdateDistributionInput
  ): Promise<UpdateDistributionOutput>;
  public updateDistribution(
    args: UpdateDistributionInput,
    cb: (err: any, data?: UpdateDistributionOutput) => void
  ): void;
  public updateDistribution(
    args: UpdateDistributionInput,
    cb?: (err: any, data?: UpdateDistributionOutput) => void
  ): Promise<UpdateDistributionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateDistributionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Update a field-level encryption configuration. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDenied} <p>Access denied.</p>
   *   - {IllegalUpdate} <p>Origin and <code>CallerReference</code> cannot be updated. </p>
   *   - {InconsistentQuantities} <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't match.</p>
   *   - {InvalidArgument} <p>The argument is invalid.</p>
   *   - {InvalidIfMatchVersion} <p>The <code>If-Match</code> version is missing or not valid for the distribution.</p>
   *   - {NoSuchFieldLevelEncryptionProfile} <p>The specified profile for field-level encryption doesn't exist.</p>
   *   - {NoSuchFieldLevelEncryptionConfig} <p>The specified configuration for field-level encryption doesn't exist.</p>
   *   - {PreconditionFailed} <p>The precondition given in one or more of the request-header fields evaluated to <code>false</code>. </p>
   *   - {TooManyFieldLevelEncryptionQueryArgProfiles} <p>The maximum number of query arg profiles for field-level encryption have been created.</p>
   *   - {TooManyFieldLevelEncryptionContentTypeProfiles} <p>The maximum number of content type profiles for field-level encryption have been created.</p>
   *   - {QueryArgProfileEmpty} <p>No profile specified for the field-level encryption query argument.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateFieldLevelEncryptionConfig(
    args: UpdateFieldLevelEncryptionConfigInput
  ): Promise<UpdateFieldLevelEncryptionConfigOutput>;
  public updateFieldLevelEncryptionConfig(
    args: UpdateFieldLevelEncryptionConfigInput,
    cb: (err: any, data?: UpdateFieldLevelEncryptionConfigOutput) => void
  ): void;
  public updateFieldLevelEncryptionConfig(
    args: UpdateFieldLevelEncryptionConfigInput,
    cb?: (err: any, data?: UpdateFieldLevelEncryptionConfigOutput) => void
  ): Promise<UpdateFieldLevelEncryptionConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateFieldLevelEncryptionConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Update a field-level encryption profile. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDenied} <p>Access denied.</p>
   *   - {FieldLevelEncryptionProfileAlreadyExists} <p>The specified profile for field-level encryption already exists.</p>
   *   - {IllegalUpdate} <p>Origin and <code>CallerReference</code> cannot be updated. </p>
   *   - {InconsistentQuantities} <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't match.</p>
   *   - {InvalidArgument} <p>The argument is invalid.</p>
   *   - {InvalidIfMatchVersion} <p>The <code>If-Match</code> version is missing or not valid for the distribution.</p>
   *   - {NoSuchPublicKey} <p>The specified public key doesn't exist.</p>
   *   - {NoSuchFieldLevelEncryptionProfile} <p>The specified profile for field-level encryption doesn't exist.</p>
   *   - {PreconditionFailed} <p>The precondition given in one or more of the request-header fields evaluated to <code>false</code>. </p>
   *   - {FieldLevelEncryptionProfileSizeExceeded} <p>The maximum size of a profile for field-level encryption was exceeded.</p>
   *   - {TooManyFieldLevelEncryptionEncryptionEntities} <p>The maximum number of encryption entities for field-level encryption have been created.</p>
   *   - {TooManyFieldLevelEncryptionFieldPatterns} <p>The maximum number of field patterns for field-level encryption have been created.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateFieldLevelEncryptionProfile(
    args: UpdateFieldLevelEncryptionProfileInput
  ): Promise<UpdateFieldLevelEncryptionProfileOutput>;
  public updateFieldLevelEncryptionProfile(
    args: UpdateFieldLevelEncryptionProfileInput,
    cb: (err: any, data?: UpdateFieldLevelEncryptionProfileOutput) => void
  ): void;
  public updateFieldLevelEncryptionProfile(
    args: UpdateFieldLevelEncryptionProfileInput,
    cb?: (err: any, data?: UpdateFieldLevelEncryptionProfileOutput) => void
  ): Promise<UpdateFieldLevelEncryptionProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateFieldLevelEncryptionProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Update public key information. Note that the only value you can change is the comment.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDenied} <p>Access denied.</p>
   *   - {CannotChangeImmutablePublicKeyFields} <p>You can't change the value of a public key.</p>
   *   - {InvalidArgument} <p>The argument is invalid.</p>
   *   - {InvalidIfMatchVersion} <p>The <code>If-Match</code> version is missing or not valid for the distribution.</p>
   *   - {IllegalUpdate} <p>Origin and <code>CallerReference</code> cannot be updated. </p>
   *   - {NoSuchPublicKey} <p>The specified public key doesn't exist.</p>
   *   - {PreconditionFailed} <p>The precondition given in one or more of the request-header fields evaluated to <code>false</code>. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updatePublicKey(
    args: UpdatePublicKeyInput
  ): Promise<UpdatePublicKeyOutput>;
  public updatePublicKey(
    args: UpdatePublicKeyInput,
    cb: (err: any, data?: UpdatePublicKeyOutput) => void
  ): void;
  public updatePublicKey(
    args: UpdatePublicKeyInput,
    cb?: (err: any, data?: UpdatePublicKeyOutput) => void
  ): Promise<UpdatePublicKeyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdatePublicKeyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Update a streaming distribution. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDenied} <p>Access denied.</p>
   *   - {CNAMEAlreadyExists} <p>The CNAME specified is already defined for CloudFront.</p>
   *   - {IllegalUpdate} <p>Origin and <code>CallerReference</code> cannot be updated. </p>
   *   - {InvalidIfMatchVersion} <p>The <code>If-Match</code> version is missing or not valid for the distribution.</p>
   *   - {MissingBody} <p>This operation requires a body. Ensure that the body is present and the <code>Content-Type</code> header is set.</p>
   *   - {NoSuchStreamingDistribution} <p>The specified streaming distribution does not exist.</p>
   *   - {PreconditionFailed} <p>The precondition given in one or more of the request-header fields evaluated to <code>false</code>. </p>
   *   - {TooManyStreamingDistributionCNAMEs} <p>Your request contains more CNAMEs than are allowed per distribution.</p>
   *   - {InvalidArgument} <p>The argument is invalid.</p>
   *   - {InvalidOriginAccessIdentity} <p>The origin access identity is not valid or doesn't exist.</p>
   *   - {TooManyTrustedSigners} <p>Your request contains more trusted signers than are allowed per distribution.</p>
   *   - {TrustedSignerDoesNotExist} <p>One or more of your trusted signers don't exist.</p>
   *   - {InconsistentQuantities} <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't match.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateStreamingDistribution(
    args: UpdateStreamingDistributionInput
  ): Promise<UpdateStreamingDistributionOutput>;
  public updateStreamingDistribution(
    args: UpdateStreamingDistributionInput,
    cb: (err: any, data?: UpdateStreamingDistributionOutput) => void
  ): void;
  public updateStreamingDistribution(
    args: UpdateStreamingDistributionInput,
    cb?: (err: any, data?: UpdateStreamingDistributionOutput) => void
  ): Promise<UpdateStreamingDistributionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateStreamingDistributionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
