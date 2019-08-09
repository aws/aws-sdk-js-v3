import { CreateDistributionInput } from "./CreateDistributionInput";
import { CreateDistributionOutput } from "./CreateDistributionOutput";
import { CNAMEAlreadyExists } from "./CNAMEAlreadyExists";
import { DistributionAlreadyExists } from "./DistributionAlreadyExists";
import { InvalidOrigin } from "./InvalidOrigin";
import { InvalidOriginAccessIdentity } from "./InvalidOriginAccessIdentity";
import { AccessDenied } from "./AccessDenied";
import { TooManyTrustedSigners } from "./TooManyTrustedSigners";
import { TrustedSignerDoesNotExist } from "./TrustedSignerDoesNotExist";
import { InvalidViewerCertificate } from "./InvalidViewerCertificate";
import { InvalidMinimumProtocolVersion } from "./InvalidMinimumProtocolVersion";
import { MissingBody } from "./MissingBody";
import { TooManyDistributionCNAMEs } from "./TooManyDistributionCNAMEs";
import { TooManyDistributions } from "./TooManyDistributions";
import { InvalidDefaultRootObject } from "./InvalidDefaultRootObject";
import { InvalidRelativePath } from "./InvalidRelativePath";
import { InvalidErrorCode } from "./InvalidErrorCode";
import { InvalidResponseCode } from "./InvalidResponseCode";
import { InvalidArgument } from "./InvalidArgument";
import { InvalidRequiredProtocol } from "./InvalidRequiredProtocol";
import { NoSuchOrigin } from "./NoSuchOrigin";
import { TooManyOrigins } from "./TooManyOrigins";
import { TooManyOriginGroupsPerDistribution } from "./TooManyOriginGroupsPerDistribution";
import { TooManyCacheBehaviors } from "./TooManyCacheBehaviors";
import { TooManyCookieNamesInWhiteList } from "./TooManyCookieNamesInWhiteList";
import { InvalidForwardCookies } from "./InvalidForwardCookies";
import { TooManyHeadersInForwardedValues } from "./TooManyHeadersInForwardedValues";
import { InvalidHeadersForS3Origin } from "./InvalidHeadersForS3Origin";
import { InconsistentQuantities } from "./InconsistentQuantities";
import { TooManyCertificates } from "./TooManyCertificates";
import { InvalidLocationCode } from "./InvalidLocationCode";
import { InvalidGeoRestrictionParameter } from "./InvalidGeoRestrictionParameter";
import { InvalidProtocolSettings } from "./InvalidProtocolSettings";
import { InvalidTTLOrder } from "./InvalidTTLOrder";
import { InvalidWebACLId } from "./InvalidWebACLId";
import { TooManyOriginCustomHeaders } from "./TooManyOriginCustomHeaders";
import { TooManyQueryStringParameters } from "./TooManyQueryStringParameters";
import { InvalidQueryStringParameters } from "./InvalidQueryStringParameters";
import { TooManyDistributionsWithLambdaAssociations } from "./TooManyDistributionsWithLambdaAssociations";
import { TooManyLambdaFunctionAssociations } from "./TooManyLambdaFunctionAssociations";
import { InvalidLambdaFunctionAssociation } from "./InvalidLambdaFunctionAssociation";
import { InvalidOriginReadTimeout } from "./InvalidOriginReadTimeout";
import { InvalidOriginKeepaliveTimeout } from "./InvalidOriginKeepaliveTimeout";
import { NoSuchFieldLevelEncryptionConfig } from "./NoSuchFieldLevelEncryptionConfig";
import { IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior } from "./IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior";
import { TooManyDistributionsAssociatedToFieldLevelEncryptionConfig } from "./TooManyDistributionsAssociatedToFieldLevelEncryptionConfig";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateDistribution2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDistribution2019_03_26",
  http: {
    method: "POST",
    requestUri: "/2019-03-26/distribution"
  },
  input: {
    shape: CreateDistributionInput
  },
  output: {
    shape: CreateDistributionOutput
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
