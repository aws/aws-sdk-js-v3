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
export type UpdateDistributionExceptionsUnion =
  | AccessDenied
  | CNAMEAlreadyExists
  | IllegalUpdate
  | InvalidIfMatchVersion
  | MissingBody
  | NoSuchDistribution
  | PreconditionFailed
  | TooManyDistributionCNAMEs
  | InvalidDefaultRootObject
  | InvalidRelativePath
  | InvalidErrorCode
  | InvalidResponseCode
  | InvalidArgument
  | InvalidOriginAccessIdentity
  | TooManyTrustedSigners
  | TrustedSignerDoesNotExist
  | InvalidViewerCertificate
  | InvalidMinimumProtocolVersion
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
