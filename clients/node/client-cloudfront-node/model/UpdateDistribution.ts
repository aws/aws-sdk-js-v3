import { UpdateDistributionInput } from "./UpdateDistributionInput";
import { UpdateDistributionOutput } from "./UpdateDistributionOutput";
import { AccessDenied } from "./AccessDenied";
import { CNAMEAlreadyExists } from "./CNAMEAlreadyExists";
import { IllegalUpdate } from "./IllegalUpdate";
import { InvalidIfMatchVersion } from "./InvalidIfMatchVersion";
import { MissingBody } from "./MissingBody";
import { NoSuchDistribution } from "./NoSuchDistribution";
import { PreconditionFailed } from "./PreconditionFailed";
import { TooManyDistributionCNAMEs } from "./TooManyDistributionCNAMEs";
import { InvalidDefaultRootObject } from "./InvalidDefaultRootObject";
import { InvalidRelativePath } from "./InvalidRelativePath";
import { InvalidErrorCode } from "./InvalidErrorCode";
import { InvalidResponseCode } from "./InvalidResponseCode";
import { InvalidArgument } from "./InvalidArgument";
import { InvalidOriginAccessIdentity } from "./InvalidOriginAccessIdentity";
import { TooManyTrustedSigners } from "./TooManyTrustedSigners";
import { TrustedSignerDoesNotExist } from "./TrustedSignerDoesNotExist";
import { InvalidViewerCertificate } from "./InvalidViewerCertificate";
import { InvalidMinimumProtocolVersion } from "./InvalidMinimumProtocolVersion";
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

export const UpdateDistribution2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateDistribution2019_03_26",
  http: {
    method: "PUT",
    requestUri: "/2019-03-26/distribution/{Id}/config"
  },
  input: {
    shape: UpdateDistributionInput
  },
  output: {
    shape: UpdateDistributionOutput
  },
  errors: [
    {
      shape: AccessDenied
    },
    {
      shape: CNAMEAlreadyExists
    },
    {
      shape: IllegalUpdate
    },
    {
      shape: InvalidIfMatchVersion
    },
    {
      shape: MissingBody
    },
    {
      shape: NoSuchDistribution
    },
    {
      shape: PreconditionFailed
    },
    {
      shape: TooManyDistributionCNAMEs
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
      shape: InvalidOriginAccessIdentity
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
