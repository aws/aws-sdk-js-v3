import { CreateDistributionWithTagsInput } from "../shapes/CreateDistributionWithTagsInput";
import { CreateDistributionWithTagsOutput } from "../shapes/CreateDistributionWithTagsOutput";
import { CNAMEAlreadyExists } from "../shapes/CNAMEAlreadyExists";
import { DistributionAlreadyExists } from "../shapes/DistributionAlreadyExists";
import { InvalidOrigin } from "../shapes/InvalidOrigin";
import { InvalidOriginAccessIdentity } from "../shapes/InvalidOriginAccessIdentity";
import { AccessDenied } from "../shapes/AccessDenied";
import { TooManyTrustedSigners } from "../shapes/TooManyTrustedSigners";
import { TrustedSignerDoesNotExist } from "../shapes/TrustedSignerDoesNotExist";
import { InvalidViewerCertificate } from "../shapes/InvalidViewerCertificate";
import { InvalidMinimumProtocolVersion } from "../shapes/InvalidMinimumProtocolVersion";
import { MissingBody } from "../shapes/MissingBody";
import { TooManyDistributionCNAMEs } from "../shapes/TooManyDistributionCNAMEs";
import { TooManyDistributions } from "../shapes/TooManyDistributions";
import { InvalidDefaultRootObject } from "../shapes/InvalidDefaultRootObject";
import { InvalidRelativePath } from "../shapes/InvalidRelativePath";
import { InvalidErrorCode } from "../shapes/InvalidErrorCode";
import { InvalidResponseCode } from "../shapes/InvalidResponseCode";
import { InvalidArgument } from "../shapes/InvalidArgument";
import { InvalidRequiredProtocol } from "../shapes/InvalidRequiredProtocol";
import { NoSuchOrigin } from "../shapes/NoSuchOrigin";
import { TooManyOrigins } from "../shapes/TooManyOrigins";
import { TooManyOriginGroupsPerDistribution } from "../shapes/TooManyOriginGroupsPerDistribution";
import { TooManyCacheBehaviors } from "../shapes/TooManyCacheBehaviors";
import { TooManyCookieNamesInWhiteList } from "../shapes/TooManyCookieNamesInWhiteList";
import { InvalidForwardCookies } from "../shapes/InvalidForwardCookies";
import { TooManyHeadersInForwardedValues } from "../shapes/TooManyHeadersInForwardedValues";
import { InvalidHeadersForS3Origin } from "../shapes/InvalidHeadersForS3Origin";
import { InconsistentQuantities } from "../shapes/InconsistentQuantities";
import { TooManyCertificates } from "../shapes/TooManyCertificates";
import { InvalidLocationCode } from "../shapes/InvalidLocationCode";
import { InvalidGeoRestrictionParameter } from "../shapes/InvalidGeoRestrictionParameter";
import { InvalidProtocolSettings } from "../shapes/InvalidProtocolSettings";
import { InvalidTTLOrder } from "../shapes/InvalidTTLOrder";
import { InvalidWebACLId } from "../shapes/InvalidWebACLId";
import { TooManyOriginCustomHeaders } from "../shapes/TooManyOriginCustomHeaders";
import { InvalidTagging } from "../shapes/InvalidTagging";
import { TooManyQueryStringParameters } from "../shapes/TooManyQueryStringParameters";
import { InvalidQueryStringParameters } from "../shapes/InvalidQueryStringParameters";
import { TooManyDistributionsWithLambdaAssociations } from "../shapes/TooManyDistributionsWithLambdaAssociations";
import { TooManyLambdaFunctionAssociations } from "../shapes/TooManyLambdaFunctionAssociations";
import { InvalidLambdaFunctionAssociation } from "../shapes/InvalidLambdaFunctionAssociation";
import { InvalidOriginReadTimeout } from "../shapes/InvalidOriginReadTimeout";
import { InvalidOriginKeepaliveTimeout } from "../shapes/InvalidOriginKeepaliveTimeout";
import { NoSuchFieldLevelEncryptionConfig } from "../shapes/NoSuchFieldLevelEncryptionConfig";
import { IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior } from "../shapes/IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior";
import { TooManyDistributionsAssociatedToFieldLevelEncryptionConfig } from "../shapes/TooManyDistributionsAssociatedToFieldLevelEncryptionConfig";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateDistributionWithTags: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDistributionWithTags",
  http: {
    method: "POST",
    requestUri: "/2019-03-26/distribution?WithTags"
  },
  input: {
    shape: CreateDistributionWithTagsInput
  },
  output: {
    shape: CreateDistributionWithTagsOutput
  },
  errors: [
    {
      shape: CNAMEAlreadyExists
    },
    {
      shape: DistributionAlreadyExists
    },
    {
      shape: InvalidOrigin
    },
    {
      shape: InvalidOriginAccessIdentity
    },
    {
      shape: AccessDenied
    },
    {
      shape: TooManyTrustedSigners
    },
    {
      shape: TrustedSignerDoesNotExist
    },
    {
      shape: InvalidViewerCertificate
    },
    {
      shape: InvalidMinimumProtocolVersion
    },
    {
      shape: MissingBody
    },
    {
      shape: TooManyDistributionCNAMEs
    },
    {
      shape: TooManyDistributions
    },
    {
      shape: InvalidDefaultRootObject
    },
    {
      shape: InvalidRelativePath
    },
    {
      shape: InvalidErrorCode
    },
    {
      shape: InvalidResponseCode
    },
    {
      shape: InvalidArgument
    },
    {
      shape: InvalidRequiredProtocol
    },
    {
      shape: NoSuchOrigin
    },
    {
      shape: TooManyOrigins
    },
    {
      shape: TooManyOriginGroupsPerDistribution
    },
    {
      shape: TooManyCacheBehaviors
    },
    {
      shape: TooManyCookieNamesInWhiteList
    },
    {
      shape: InvalidForwardCookies
    },
    {
      shape: TooManyHeadersInForwardedValues
    },
    {
      shape: InvalidHeadersForS3Origin
    },
    {
      shape: InconsistentQuantities
    },
    {
      shape: TooManyCertificates
    },
    {
      shape: InvalidLocationCode
    },
    {
      shape: InvalidGeoRestrictionParameter
    },
    {
      shape: InvalidProtocolSettings
    },
    {
      shape: InvalidTTLOrder
    },
    {
      shape: InvalidWebACLId
    },
    {
      shape: TooManyOriginCustomHeaders
    },
    {
      shape: InvalidTagging
    },
    {
      shape: TooManyQueryStringParameters
    },
    {
      shape: InvalidQueryStringParameters
    },
    {
      shape: TooManyDistributionsWithLambdaAssociations
    },
    {
      shape: TooManyLambdaFunctionAssociations
    },
    {
      shape: InvalidLambdaFunctionAssociation
    },
    {
      shape: InvalidOriginReadTimeout
    },
    {
      shape: InvalidOriginKeepaliveTimeout
    },
    {
      shape: NoSuchFieldLevelEncryptionConfig
    },
    {
      shape: IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior
    },
    {
      shape: TooManyDistributionsAssociatedToFieldLevelEncryptionConfig
    }
  ]
};
