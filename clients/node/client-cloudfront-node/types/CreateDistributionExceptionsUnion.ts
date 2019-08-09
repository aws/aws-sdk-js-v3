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
export type CreateDistributionExceptionsUnion =
  | CNAMEAlreadyExists
  | DistributionAlreadyExists
  | InvalidOrigin
  | InvalidOriginAccessIdentity
  | AccessDenied
  | TooManyTrustedSigners
  | TrustedSignerDoesNotExist
  | InvalidViewerCertificate
  | InvalidMinimumProtocolVersion
  | MissingBody
  | TooManyDistributionCNAMEs
  | TooManyDistributions
  | InvalidDefaultRootObject
  | InvalidRelativePath
  | InvalidErrorCode
  | InvalidResponseCode
  | InvalidArgument
  | InvalidRequiredProtocol
  | NoSuchOrigin
  | TooManyOrigins
  | TooManyOriginGroupsPerDistribution
  | TooManyCacheBehaviors
  | TooManyCookieNamesInWhiteList
  | InvalidForwardCookies
  | TooManyHeadersInForwardedValues
  | InvalidHeadersForS3Origin
  | InconsistentQuantities
  | TooManyCertificates
  | InvalidLocationCode
  | InvalidGeoRestrictionParameter
  | InvalidProtocolSettings
  | InvalidTTLOrder
  | InvalidWebACLId
  | TooManyOriginCustomHeaders
  | TooManyQueryStringParameters
  | InvalidQueryStringParameters
  | TooManyDistributionsWithLambdaAssociations
  | TooManyLambdaFunctionAssociations
  | InvalidLambdaFunctionAssociation
  | InvalidOriginReadTimeout
  | InvalidOriginKeepaliveTimeout
  | NoSuchFieldLevelEncryptionConfig
  | IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior
  | TooManyDistributionsAssociatedToFieldLevelEncryptionConfig;
