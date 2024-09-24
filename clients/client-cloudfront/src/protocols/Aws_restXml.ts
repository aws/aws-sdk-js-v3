// smithy-typescript generated code
import { loadRestXmlErrorCode, parseXmlBody as parseBody, parseXmlErrorBody as parseErrorBody } from "@aws-sdk/core";
import { XmlNode as __XmlNode, XmlText as __XmlText } from "@aws-sdk/xml-builder";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  isSerializableHeaderValue,
  map,
  parseBoolean as __parseBoolean,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  strictParseFloat as __strictParseFloat,
  strictParseInt32 as __strictParseInt32,
  strictParseLong as __strictParseLong,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { AssociateAliasCommandInput, AssociateAliasCommandOutput } from "../commands/AssociateAliasCommand";
import { CopyDistributionCommandInput, CopyDistributionCommandOutput } from "../commands/CopyDistributionCommand";
import { CreateCachePolicyCommandInput, CreateCachePolicyCommandOutput } from "../commands/CreateCachePolicyCommand";
import {
  CreateCloudFrontOriginAccessIdentityCommandInput,
  CreateCloudFrontOriginAccessIdentityCommandOutput,
} from "../commands/CreateCloudFrontOriginAccessIdentityCommand";
import {
  CreateContinuousDeploymentPolicyCommandInput,
  CreateContinuousDeploymentPolicyCommandOutput,
} from "../commands/CreateContinuousDeploymentPolicyCommand";
import { CreateDistributionCommandInput, CreateDistributionCommandOutput } from "../commands/CreateDistributionCommand";
import {
  CreateDistributionWithTagsCommandInput,
  CreateDistributionWithTagsCommandOutput,
} from "../commands/CreateDistributionWithTagsCommand";
import {
  CreateFieldLevelEncryptionConfigCommandInput,
  CreateFieldLevelEncryptionConfigCommandOutput,
} from "../commands/CreateFieldLevelEncryptionConfigCommand";
import {
  CreateFieldLevelEncryptionProfileCommandInput,
  CreateFieldLevelEncryptionProfileCommandOutput,
} from "../commands/CreateFieldLevelEncryptionProfileCommand";
import { CreateFunctionCommandInput, CreateFunctionCommandOutput } from "../commands/CreateFunctionCommand";
import { CreateInvalidationCommandInput, CreateInvalidationCommandOutput } from "../commands/CreateInvalidationCommand";
import { CreateKeyGroupCommandInput, CreateKeyGroupCommandOutput } from "../commands/CreateKeyGroupCommand";
import {
  CreateKeyValueStoreCommandInput,
  CreateKeyValueStoreCommandOutput,
} from "../commands/CreateKeyValueStoreCommand";
import {
  CreateMonitoringSubscriptionCommandInput,
  CreateMonitoringSubscriptionCommandOutput,
} from "../commands/CreateMonitoringSubscriptionCommand";
import {
  CreateOriginAccessControlCommandInput,
  CreateOriginAccessControlCommandOutput,
} from "../commands/CreateOriginAccessControlCommand";
import {
  CreateOriginRequestPolicyCommandInput,
  CreateOriginRequestPolicyCommandOutput,
} from "../commands/CreateOriginRequestPolicyCommand";
import { CreatePublicKeyCommandInput, CreatePublicKeyCommandOutput } from "../commands/CreatePublicKeyCommand";
import {
  CreateRealtimeLogConfigCommandInput,
  CreateRealtimeLogConfigCommandOutput,
} from "../commands/CreateRealtimeLogConfigCommand";
import {
  CreateResponseHeadersPolicyCommandInput,
  CreateResponseHeadersPolicyCommandOutput,
} from "../commands/CreateResponseHeadersPolicyCommand";
import {
  CreateStreamingDistributionCommandInput,
  CreateStreamingDistributionCommandOutput,
} from "../commands/CreateStreamingDistributionCommand";
import {
  CreateStreamingDistributionWithTagsCommandInput,
  CreateStreamingDistributionWithTagsCommandOutput,
} from "../commands/CreateStreamingDistributionWithTagsCommand";
import { DeleteCachePolicyCommandInput, DeleteCachePolicyCommandOutput } from "../commands/DeleteCachePolicyCommand";
import {
  DeleteCloudFrontOriginAccessIdentityCommandInput,
  DeleteCloudFrontOriginAccessIdentityCommandOutput,
} from "../commands/DeleteCloudFrontOriginAccessIdentityCommand";
import {
  DeleteContinuousDeploymentPolicyCommandInput,
  DeleteContinuousDeploymentPolicyCommandOutput,
} from "../commands/DeleteContinuousDeploymentPolicyCommand";
import { DeleteDistributionCommandInput, DeleteDistributionCommandOutput } from "../commands/DeleteDistributionCommand";
import {
  DeleteFieldLevelEncryptionConfigCommandInput,
  DeleteFieldLevelEncryptionConfigCommandOutput,
} from "../commands/DeleteFieldLevelEncryptionConfigCommand";
import {
  DeleteFieldLevelEncryptionProfileCommandInput,
  DeleteFieldLevelEncryptionProfileCommandOutput,
} from "../commands/DeleteFieldLevelEncryptionProfileCommand";
import { DeleteFunctionCommandInput, DeleteFunctionCommandOutput } from "../commands/DeleteFunctionCommand";
import { DeleteKeyGroupCommandInput, DeleteKeyGroupCommandOutput } from "../commands/DeleteKeyGroupCommand";
import {
  DeleteKeyValueStoreCommandInput,
  DeleteKeyValueStoreCommandOutput,
} from "../commands/DeleteKeyValueStoreCommand";
import {
  DeleteMonitoringSubscriptionCommandInput,
  DeleteMonitoringSubscriptionCommandOutput,
} from "../commands/DeleteMonitoringSubscriptionCommand";
import {
  DeleteOriginAccessControlCommandInput,
  DeleteOriginAccessControlCommandOutput,
} from "../commands/DeleteOriginAccessControlCommand";
import {
  DeleteOriginRequestPolicyCommandInput,
  DeleteOriginRequestPolicyCommandOutput,
} from "../commands/DeleteOriginRequestPolicyCommand";
import { DeletePublicKeyCommandInput, DeletePublicKeyCommandOutput } from "../commands/DeletePublicKeyCommand";
import {
  DeleteRealtimeLogConfigCommandInput,
  DeleteRealtimeLogConfigCommandOutput,
} from "../commands/DeleteRealtimeLogConfigCommand";
import {
  DeleteResponseHeadersPolicyCommandInput,
  DeleteResponseHeadersPolicyCommandOutput,
} from "../commands/DeleteResponseHeadersPolicyCommand";
import {
  DeleteStreamingDistributionCommandInput,
  DeleteStreamingDistributionCommandOutput,
} from "../commands/DeleteStreamingDistributionCommand";
import { DescribeFunctionCommandInput, DescribeFunctionCommandOutput } from "../commands/DescribeFunctionCommand";
import {
  DescribeKeyValueStoreCommandInput,
  DescribeKeyValueStoreCommandOutput,
} from "../commands/DescribeKeyValueStoreCommand";
import { GetCachePolicyCommandInput, GetCachePolicyCommandOutput } from "../commands/GetCachePolicyCommand";
import {
  GetCachePolicyConfigCommandInput,
  GetCachePolicyConfigCommandOutput,
} from "../commands/GetCachePolicyConfigCommand";
import {
  GetCloudFrontOriginAccessIdentityCommandInput,
  GetCloudFrontOriginAccessIdentityCommandOutput,
} from "../commands/GetCloudFrontOriginAccessIdentityCommand";
import {
  GetCloudFrontOriginAccessIdentityConfigCommandInput,
  GetCloudFrontOriginAccessIdentityConfigCommandOutput,
} from "../commands/GetCloudFrontOriginAccessIdentityConfigCommand";
import {
  GetContinuousDeploymentPolicyCommandInput,
  GetContinuousDeploymentPolicyCommandOutput,
} from "../commands/GetContinuousDeploymentPolicyCommand";
import {
  GetContinuousDeploymentPolicyConfigCommandInput,
  GetContinuousDeploymentPolicyConfigCommandOutput,
} from "../commands/GetContinuousDeploymentPolicyConfigCommand";
import { GetDistributionCommandInput, GetDistributionCommandOutput } from "../commands/GetDistributionCommand";
import {
  GetDistributionConfigCommandInput,
  GetDistributionConfigCommandOutput,
} from "../commands/GetDistributionConfigCommand";
import {
  GetFieldLevelEncryptionCommandInput,
  GetFieldLevelEncryptionCommandOutput,
} from "../commands/GetFieldLevelEncryptionCommand";
import {
  GetFieldLevelEncryptionConfigCommandInput,
  GetFieldLevelEncryptionConfigCommandOutput,
} from "../commands/GetFieldLevelEncryptionConfigCommand";
import {
  GetFieldLevelEncryptionProfileCommandInput,
  GetFieldLevelEncryptionProfileCommandOutput,
} from "../commands/GetFieldLevelEncryptionProfileCommand";
import {
  GetFieldLevelEncryptionProfileConfigCommandInput,
  GetFieldLevelEncryptionProfileConfigCommandOutput,
} from "../commands/GetFieldLevelEncryptionProfileConfigCommand";
import { GetFunctionCommandInput, GetFunctionCommandOutput } from "../commands/GetFunctionCommand";
import { GetInvalidationCommandInput, GetInvalidationCommandOutput } from "../commands/GetInvalidationCommand";
import { GetKeyGroupCommandInput, GetKeyGroupCommandOutput } from "../commands/GetKeyGroupCommand";
import { GetKeyGroupConfigCommandInput, GetKeyGroupConfigCommandOutput } from "../commands/GetKeyGroupConfigCommand";
import {
  GetMonitoringSubscriptionCommandInput,
  GetMonitoringSubscriptionCommandOutput,
} from "../commands/GetMonitoringSubscriptionCommand";
import {
  GetOriginAccessControlCommandInput,
  GetOriginAccessControlCommandOutput,
} from "../commands/GetOriginAccessControlCommand";
import {
  GetOriginAccessControlConfigCommandInput,
  GetOriginAccessControlConfigCommandOutput,
} from "../commands/GetOriginAccessControlConfigCommand";
import {
  GetOriginRequestPolicyCommandInput,
  GetOriginRequestPolicyCommandOutput,
} from "../commands/GetOriginRequestPolicyCommand";
import {
  GetOriginRequestPolicyConfigCommandInput,
  GetOriginRequestPolicyConfigCommandOutput,
} from "../commands/GetOriginRequestPolicyConfigCommand";
import { GetPublicKeyCommandInput, GetPublicKeyCommandOutput } from "../commands/GetPublicKeyCommand";
import { GetPublicKeyConfigCommandInput, GetPublicKeyConfigCommandOutput } from "../commands/GetPublicKeyConfigCommand";
import {
  GetRealtimeLogConfigCommandInput,
  GetRealtimeLogConfigCommandOutput,
} from "../commands/GetRealtimeLogConfigCommand";
import {
  GetResponseHeadersPolicyCommandInput,
  GetResponseHeadersPolicyCommandOutput,
} from "../commands/GetResponseHeadersPolicyCommand";
import {
  GetResponseHeadersPolicyConfigCommandInput,
  GetResponseHeadersPolicyConfigCommandOutput,
} from "../commands/GetResponseHeadersPolicyConfigCommand";
import {
  GetStreamingDistributionCommandInput,
  GetStreamingDistributionCommandOutput,
} from "../commands/GetStreamingDistributionCommand";
import {
  GetStreamingDistributionConfigCommandInput,
  GetStreamingDistributionConfigCommandOutput,
} from "../commands/GetStreamingDistributionConfigCommand";
import { ListCachePoliciesCommandInput, ListCachePoliciesCommandOutput } from "../commands/ListCachePoliciesCommand";
import {
  ListCloudFrontOriginAccessIdentitiesCommandInput,
  ListCloudFrontOriginAccessIdentitiesCommandOutput,
} from "../commands/ListCloudFrontOriginAccessIdentitiesCommand";
import {
  ListConflictingAliasesCommandInput,
  ListConflictingAliasesCommandOutput,
} from "../commands/ListConflictingAliasesCommand";
import {
  ListContinuousDeploymentPoliciesCommandInput,
  ListContinuousDeploymentPoliciesCommandOutput,
} from "../commands/ListContinuousDeploymentPoliciesCommand";
import {
  ListDistributionsByCachePolicyIdCommandInput,
  ListDistributionsByCachePolicyIdCommandOutput,
} from "../commands/ListDistributionsByCachePolicyIdCommand";
import {
  ListDistributionsByKeyGroupCommandInput,
  ListDistributionsByKeyGroupCommandOutput,
} from "../commands/ListDistributionsByKeyGroupCommand";
import {
  ListDistributionsByOriginRequestPolicyIdCommandInput,
  ListDistributionsByOriginRequestPolicyIdCommandOutput,
} from "../commands/ListDistributionsByOriginRequestPolicyIdCommand";
import {
  ListDistributionsByRealtimeLogConfigCommandInput,
  ListDistributionsByRealtimeLogConfigCommandOutput,
} from "../commands/ListDistributionsByRealtimeLogConfigCommand";
import {
  ListDistributionsByResponseHeadersPolicyIdCommandInput,
  ListDistributionsByResponseHeadersPolicyIdCommandOutput,
} from "../commands/ListDistributionsByResponseHeadersPolicyIdCommand";
import {
  ListDistributionsByWebACLIdCommandInput,
  ListDistributionsByWebACLIdCommandOutput,
} from "../commands/ListDistributionsByWebACLIdCommand";
import { ListDistributionsCommandInput, ListDistributionsCommandOutput } from "../commands/ListDistributionsCommand";
import {
  ListFieldLevelEncryptionConfigsCommandInput,
  ListFieldLevelEncryptionConfigsCommandOutput,
} from "../commands/ListFieldLevelEncryptionConfigsCommand";
import {
  ListFieldLevelEncryptionProfilesCommandInput,
  ListFieldLevelEncryptionProfilesCommandOutput,
} from "../commands/ListFieldLevelEncryptionProfilesCommand";
import { ListFunctionsCommandInput, ListFunctionsCommandOutput } from "../commands/ListFunctionsCommand";
import { ListInvalidationsCommandInput, ListInvalidationsCommandOutput } from "../commands/ListInvalidationsCommand";
import { ListKeyGroupsCommandInput, ListKeyGroupsCommandOutput } from "../commands/ListKeyGroupsCommand";
import { ListKeyValueStoresCommandInput, ListKeyValueStoresCommandOutput } from "../commands/ListKeyValueStoresCommand";
import {
  ListOriginAccessControlsCommandInput,
  ListOriginAccessControlsCommandOutput,
} from "../commands/ListOriginAccessControlsCommand";
import {
  ListOriginRequestPoliciesCommandInput,
  ListOriginRequestPoliciesCommandOutput,
} from "../commands/ListOriginRequestPoliciesCommand";
import { ListPublicKeysCommandInput, ListPublicKeysCommandOutput } from "../commands/ListPublicKeysCommand";
import {
  ListRealtimeLogConfigsCommandInput,
  ListRealtimeLogConfigsCommandOutput,
} from "../commands/ListRealtimeLogConfigsCommand";
import {
  ListResponseHeadersPoliciesCommandInput,
  ListResponseHeadersPoliciesCommandOutput,
} from "../commands/ListResponseHeadersPoliciesCommand";
import {
  ListStreamingDistributionsCommandInput,
  ListStreamingDistributionsCommandOutput,
} from "../commands/ListStreamingDistributionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PublishFunctionCommandInput, PublishFunctionCommandOutput } from "../commands/PublishFunctionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { TestFunctionCommandInput, TestFunctionCommandOutput } from "../commands/TestFunctionCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateCachePolicyCommandInput, UpdateCachePolicyCommandOutput } from "../commands/UpdateCachePolicyCommand";
import {
  UpdateCloudFrontOriginAccessIdentityCommandInput,
  UpdateCloudFrontOriginAccessIdentityCommandOutput,
} from "../commands/UpdateCloudFrontOriginAccessIdentityCommand";
import {
  UpdateContinuousDeploymentPolicyCommandInput,
  UpdateContinuousDeploymentPolicyCommandOutput,
} from "../commands/UpdateContinuousDeploymentPolicyCommand";
import { UpdateDistributionCommandInput, UpdateDistributionCommandOutput } from "../commands/UpdateDistributionCommand";
import {
  UpdateDistributionWithStagingConfigCommandInput,
  UpdateDistributionWithStagingConfigCommandOutput,
} from "../commands/UpdateDistributionWithStagingConfigCommand";
import {
  UpdateFieldLevelEncryptionConfigCommandInput,
  UpdateFieldLevelEncryptionConfigCommandOutput,
} from "../commands/UpdateFieldLevelEncryptionConfigCommand";
import {
  UpdateFieldLevelEncryptionProfileCommandInput,
  UpdateFieldLevelEncryptionProfileCommandOutput,
} from "../commands/UpdateFieldLevelEncryptionProfileCommand";
import { UpdateFunctionCommandInput, UpdateFunctionCommandOutput } from "../commands/UpdateFunctionCommand";
import { UpdateKeyGroupCommandInput, UpdateKeyGroupCommandOutput } from "../commands/UpdateKeyGroupCommand";
import {
  UpdateKeyValueStoreCommandInput,
  UpdateKeyValueStoreCommandOutput,
} from "../commands/UpdateKeyValueStoreCommand";
import {
  UpdateOriginAccessControlCommandInput,
  UpdateOriginAccessControlCommandOutput,
} from "../commands/UpdateOriginAccessControlCommand";
import {
  UpdateOriginRequestPolicyCommandInput,
  UpdateOriginRequestPolicyCommandOutput,
} from "../commands/UpdateOriginRequestPolicyCommand";
import { UpdatePublicKeyCommandInput, UpdatePublicKeyCommandOutput } from "../commands/UpdatePublicKeyCommand";
import {
  UpdateRealtimeLogConfigCommandInput,
  UpdateRealtimeLogConfigCommandOutput,
} from "../commands/UpdateRealtimeLogConfigCommand";
import {
  UpdateResponseHeadersPolicyCommandInput,
  UpdateResponseHeadersPolicyCommandOutput,
} from "../commands/UpdateResponseHeadersPolicyCommand";
import {
  UpdateStreamingDistributionCommandInput,
  UpdateStreamingDistributionCommandOutput,
} from "../commands/UpdateStreamingDistributionCommand";
import { CloudFrontServiceException as __BaseException } from "../models/CloudFrontServiceException";
import {
  AccessDenied,
  ActiveTrustedKeyGroups,
  ActiveTrustedSigners,
  Aliases,
  AliasICPRecordal,
  AllowedMethods,
  BatchTooLarge,
  CacheBehavior,
  CacheBehaviors,
  CachedMethods,
  CachePolicy,
  CachePolicyAlreadyExists,
  CachePolicyConfig,
  CachePolicyCookiesConfig,
  CachePolicyHeadersConfig,
  CachePolicyInUse,
  CachePolicyList,
  CachePolicyQueryStringsConfig,
  CachePolicySummary,
  CannotChangeImmutablePublicKeyFields,
  CannotDeleteEntityWhileInUse,
  CloudFrontOriginAccessIdentity,
  CloudFrontOriginAccessIdentityAlreadyExists,
  CloudFrontOriginAccessIdentityConfig,
  CNAMEAlreadyExists,
  ContentTypeProfile,
  ContentTypeProfileConfig,
  ContentTypeProfiles,
  ContinuousDeploymentPolicy,
  ContinuousDeploymentPolicyAlreadyExists,
  ContinuousDeploymentPolicyConfig,
  ContinuousDeploymentPolicyInUse,
  ContinuousDeploymentSingleHeaderConfig,
  ContinuousDeploymentSingleWeightConfig,
  CookieNames,
  CookiePreference,
  CustomErrorResponse,
  CustomErrorResponses,
  CustomHeaders,
  CustomOriginConfig,
  DefaultCacheBehavior,
  Distribution,
  DistributionAlreadyExists,
  DistributionConfig,
  DistributionConfigWithTags,
  EncryptionEntities,
  EncryptionEntity,
  EndPoint,
  EntityAlreadyExists,
  EntityLimitExceeded,
  EntitySizeLimitExceeded,
  FieldLevelEncryption,
  FieldLevelEncryptionConfig,
  FieldLevelEncryptionConfigAlreadyExists,
  FieldLevelEncryptionProfile,
  FieldLevelEncryptionProfileAlreadyExists,
  FieldLevelEncryptionProfileConfig,
  FieldLevelEncryptionProfileSizeExceeded,
  FieldPatterns,
  ForwardedValues,
  FunctionAlreadyExists,
  FunctionAssociation,
  FunctionAssociations,
  FunctionConfig,
  FunctionMetadata,
  FunctionSizeLimitExceeded,
  FunctionSummary,
  GeoRestriction,
  Headers,
  IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior,
  IllegalOriginAccessConfiguration,
  IllegalUpdate,
  ImportSource,
  InconsistentQuantities,
  InvalidArgument,
  Invalidation,
  InvalidationBatch,
  InvalidDefaultRootObject,
  InvalidDomainNameForOriginAccessControl,
  InvalidErrorCode,
  InvalidForwardCookies,
  InvalidFunctionAssociation,
  InvalidGeoRestrictionParameter,
  InvalidHeadersForS3Origin,
  InvalidIfMatchVersion,
  InvalidLambdaFunctionAssociation,
  InvalidLocationCode,
  InvalidMinimumProtocolVersion,
  InvalidOrigin,
  InvalidOriginAccessControl,
  InvalidOriginAccessIdentity,
  InvalidOriginKeepaliveTimeout,
  InvalidOriginReadTimeout,
  InvalidProtocolSettings,
  InvalidQueryStringParameters,
  InvalidRelativePath,
  InvalidRequiredProtocol,
  InvalidResponseCode,
  InvalidTagging,
  InvalidTTLOrder,
  InvalidViewerCertificate,
  InvalidWebACLId,
  KeyGroup,
  KeyGroupAlreadyExists,
  KeyGroupConfig,
  KeyPairIds,
  KeyValueStore,
  KeyValueStoreAssociation,
  KeyValueStoreAssociations,
  KGKeyPairIds,
  KinesisStreamConfig,
  LambdaFunctionAssociation,
  LambdaFunctionAssociations,
  LoggingConfig,
  Method,
  MissingBody,
  MonitoringSubscription,
  MonitoringSubscriptionAlreadyExists,
  NoSuchCachePolicy,
  NoSuchContinuousDeploymentPolicy,
  NoSuchDistribution,
  NoSuchFieldLevelEncryptionConfig,
  NoSuchFieldLevelEncryptionProfile,
  NoSuchOrigin,
  NoSuchOriginRequestPolicy,
  NoSuchPublicKey,
  NoSuchRealtimeLogConfig,
  NoSuchResponseHeadersPolicy,
  Origin,
  OriginAccessControl,
  OriginAccessControlAlreadyExists,
  OriginAccessControlConfig,
  OriginCustomHeader,
  OriginGroup,
  OriginGroupFailoverCriteria,
  OriginGroupMember,
  OriginGroupMembers,
  OriginGroups,
  OriginRequestPolicy,
  OriginRequestPolicyAlreadyExists,
  OriginRequestPolicyConfig,
  OriginRequestPolicyCookiesConfig,
  OriginRequestPolicyHeadersConfig,
  OriginRequestPolicyQueryStringsConfig,
  Origins,
  OriginShield,
  OriginSslProtocols,
  ParametersInCacheKeyAndForwardedToOrigin,
  Paths,
  PreconditionFailed,
  PublicKey,
  PublicKeyAlreadyExists,
  PublicKeyConfig,
  QueryArgProfile,
  QueryArgProfileConfig,
  QueryArgProfileEmpty,
  QueryArgProfiles,
  QueryStringCacheKeys,
  QueryStringNames,
  RealtimeLogConfig,
  RealtimeLogConfigAlreadyExists,
  RealtimeLogConfigOwnerMismatch,
  RealtimeMetricsSubscriptionConfig,
  ResponseHeadersPolicyAccessControlAllowHeaders,
  ResponseHeadersPolicyAccessControlAllowMethods,
  ResponseHeadersPolicyAccessControlAllowMethodsValues,
  ResponseHeadersPolicyAccessControlAllowOrigins,
  ResponseHeadersPolicyAccessControlExposeHeaders,
  ResponseHeadersPolicyContentSecurityPolicy,
  ResponseHeadersPolicyContentTypeOptions,
  ResponseHeadersPolicyCorsConfig,
  ResponseHeadersPolicyCustomHeader,
  ResponseHeadersPolicyCustomHeadersConfig,
  ResponseHeadersPolicyRemoveHeader,
  ResponseHeadersPolicyRemoveHeadersConfig,
  Restrictions,
  S3OriginConfig,
  SessionStickinessConfig,
  Signer,
  SslProtocol,
  StagingDistributionDnsNames,
  StagingDistributionInUse,
  StatusCodes,
  Tag,
  Tags,
  TooManyCacheBehaviors,
  TooManyCachePolicies,
  TooManyCertificates,
  TooManyCloudFrontOriginAccessIdentities,
  TooManyContinuousDeploymentPolicies,
  TooManyCookieNamesInWhiteList,
  TooManyCookiesInCachePolicy,
  TooManyCookiesInOriginRequestPolicy,
  TooManyDistributionCNAMEs,
  TooManyDistributions,
  TooManyDistributionsAssociatedToCachePolicy,
  TooManyDistributionsAssociatedToFieldLevelEncryptionConfig,
  TooManyDistributionsAssociatedToKeyGroup,
  TooManyDistributionsAssociatedToOriginAccessControl,
  TooManyDistributionsAssociatedToOriginRequestPolicy,
  TooManyDistributionsAssociatedToResponseHeadersPolicy,
  TooManyDistributionsWithFunctionAssociations,
  TooManyDistributionsWithLambdaAssociations,
  TooManyDistributionsWithSingleFunctionARN,
  TooManyFieldLevelEncryptionConfigs,
  TooManyFieldLevelEncryptionContentTypeProfiles,
  TooManyFieldLevelEncryptionEncryptionEntities,
  TooManyFieldLevelEncryptionFieldPatterns,
  TooManyFieldLevelEncryptionProfiles,
  TooManyFieldLevelEncryptionQueryArgProfiles,
  TooManyFunctionAssociations,
  TooManyFunctions,
  TooManyHeadersInCachePolicy,
  TooManyHeadersInForwardedValues,
  TooManyHeadersInOriginRequestPolicy,
  TooManyInvalidationsInProgress,
  TooManyKeyGroups,
  TooManyKeyGroupsAssociatedToDistribution,
  TooManyLambdaFunctionAssociations,
  TooManyOriginAccessControls,
  TooManyOriginCustomHeaders,
  TooManyOriginGroupsPerDistribution,
  TooManyOriginRequestPolicies,
  TooManyOrigins,
  TooManyPublicKeys,
  TooManyPublicKeysInKeyGroup,
  TooManyQueryStringParameters,
  TooManyQueryStringsInCachePolicy,
  TooManyQueryStringsInOriginRequestPolicy,
  TooManyRealtimeLogConfigs,
  TooManyTrustedSigners,
  TrafficConfig,
  TrustedKeyGroupDoesNotExist,
  TrustedKeyGroups,
  TrustedSignerDoesNotExist,
  TrustedSigners,
  UnsupportedOperation,
  ViewerCertificate,
} from "../models/models_0";
import {
  CloudFrontOriginAccessIdentityInUse,
  CloudFrontOriginAccessIdentityList,
  CloudFrontOriginAccessIdentitySummary,
  ConflictingAlias,
  ConflictingAliasesList,
  ContinuousDeploymentPolicyList,
  ContinuousDeploymentPolicySummary,
  DistributionIdList,
  DistributionList,
  DistributionNotDisabled,
  DistributionSummary,
  EntityNotFound,
  FieldLevelEncryptionConfigInUse,
  FieldLevelEncryptionList,
  FieldLevelEncryptionProfileInUse,
  FieldLevelEncryptionProfileList,
  FieldLevelEncryptionProfileSummary,
  FieldLevelEncryptionSummary,
  FunctionInUse,
  FunctionList,
  IllegalDelete,
  InvalidationList,
  InvalidationSummary,
  KeyGroupList,
  KeyGroupSummary,
  KeyValueStoreList,
  NoSuchCloudFrontOriginAccessIdentity,
  NoSuchFunctionExists,
  NoSuchInvalidation,
  NoSuchMonitoringSubscription,
  NoSuchOriginAccessControl,
  NoSuchResource,
  NoSuchStreamingDistribution,
  OriginAccessControlInUse,
  OriginAccessControlList,
  OriginAccessControlSummary,
  OriginRequestPolicyInUse,
  OriginRequestPolicyList,
  OriginRequestPolicySummary,
  PublicKeyInUse,
  PublicKeyList,
  PublicKeySummary,
  RealtimeLogConfigInUse,
  RealtimeLogConfigs,
  ResourceInUse,
  ResponseHeadersPolicy,
  ResponseHeadersPolicyAlreadyExists,
  ResponseHeadersPolicyConfig,
  ResponseHeadersPolicyFrameOptions,
  ResponseHeadersPolicyInUse,
  ResponseHeadersPolicyList,
  ResponseHeadersPolicyReferrerPolicy,
  ResponseHeadersPolicySecurityHeadersConfig,
  ResponseHeadersPolicyServerTimingHeadersConfig,
  ResponseHeadersPolicyStrictTransportSecurity,
  ResponseHeadersPolicySummary,
  ResponseHeadersPolicyXSSProtection,
  S3Origin,
  StreamingDistribution,
  StreamingDistributionAlreadyExists,
  StreamingDistributionConfig,
  StreamingDistributionConfigWithTags,
  StreamingDistributionList,
  StreamingDistributionNotDisabled,
  StreamingDistributionSummary,
  StreamingLoggingConfig,
  TagKeys,
  TestFunctionFailed,
  TestResult,
  TooLongCSPInResponseHeadersPolicy,
  TooManyCustomHeadersInResponseHeadersPolicy,
  TooManyRemoveHeadersInResponseHeadersPolicy,
  TooManyResponseHeadersPolicies,
  TooManyStreamingDistributionCNAMEs,
  TooManyStreamingDistributions,
} from "../models/models_1";

/**
 * serializeAws_restXmlAssociateAliasCommand
 */
export const se_AssociateAliasCommand = async (
  input: AssociateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/distribution/{TargetDistributionId}/associate-alias");
  b.p("TargetDistributionId", () => input.TargetDistributionId!, "{TargetDistributionId}", false);
  const query: any = map({
    [_A]: [, __expectNonNull(input[_A]!, `Alias`)],
  });
  let body: any;
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlCopyDistributionCommand
 */
export const se_CopyDistributionCommand = async (
  input: CopyDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_s]: [() => isSerializableHeaderValue(input[_S]), () => input[_S]!.toString()],
    [_im]: input[_IM]!,
  });
  b.bp("/2020-05-31/distribution/{PrimaryDistributionId}/copy");
  b.p("PrimaryDistributionId", () => input.PrimaryDistributionId!, "{PrimaryDistributionId}", false);
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_CDR);
  bn.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
  if (input[_CR] != null) {
    bn.c(__XmlNode.of(_st, input[_CR]).n(_CR));
  }
  if (input[_E] != null) {
    bn.c(__XmlNode.of(_b, String(input[_E])).n(_E));
  }
  body += bn.toString();
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlCreateCachePolicyCommand
 */
export const se_CreateCachePolicyCommand = async (
  input: CreateCachePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/2020-05-31/cache-policy");
  let body: any;
  let contents: any;
  if (input.CachePolicyConfig !== undefined) {
    contents = se_CachePolicyConfig(input.CachePolicyConfig, context);
    body = _ve;
    contents.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlCreateCloudFrontOriginAccessIdentityCommand
 */
export const se_CreateCloudFrontOriginAccessIdentityCommand = async (
  input: CreateCloudFrontOriginAccessIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/2020-05-31/origin-access-identity/cloudfront");
  let body: any;
  let contents: any;
  if (input.CloudFrontOriginAccessIdentityConfig !== undefined) {
    contents = se_CloudFrontOriginAccessIdentityConfig(input.CloudFrontOriginAccessIdentityConfig, context);
    body = _ve;
    contents.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlCreateContinuousDeploymentPolicyCommand
 */
export const se_CreateContinuousDeploymentPolicyCommand = async (
  input: CreateContinuousDeploymentPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/2020-05-31/continuous-deployment-policy");
  let body: any;
  let contents: any;
  if (input.ContinuousDeploymentPolicyConfig !== undefined) {
    contents = se_ContinuousDeploymentPolicyConfig(input.ContinuousDeploymentPolicyConfig, context);
    body = _ve;
    contents.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlCreateDistributionCommand
 */
export const se_CreateDistributionCommand = async (
  input: CreateDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/2020-05-31/distribution");
  let body: any;
  let contents: any;
  if (input.DistributionConfig !== undefined) {
    contents = se_DistributionConfig(input.DistributionConfig, context);
    body = _ve;
    contents.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlCreateDistributionWithTagsCommand
 */
export const se_CreateDistributionWithTagsCommand = async (
  input: CreateDistributionWithTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/2020-05-31/distribution");
  const query: any = map({
    [_WT]: [, ""],
  });
  let body: any;
  let contents: any;
  if (input.DistributionConfigWithTags !== undefined) {
    contents = se_DistributionConfigWithTags(input.DistributionConfigWithTags, context);
    body = _ve;
    contents.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlCreateFieldLevelEncryptionConfigCommand
 */
export const se_CreateFieldLevelEncryptionConfigCommand = async (
  input: CreateFieldLevelEncryptionConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/2020-05-31/field-level-encryption");
  let body: any;
  let contents: any;
  if (input.FieldLevelEncryptionConfig !== undefined) {
    contents = se_FieldLevelEncryptionConfig(input.FieldLevelEncryptionConfig, context);
    body = _ve;
    contents.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlCreateFieldLevelEncryptionProfileCommand
 */
export const se_CreateFieldLevelEncryptionProfileCommand = async (
  input: CreateFieldLevelEncryptionProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/2020-05-31/field-level-encryption-profile");
  let body: any;
  let contents: any;
  if (input.FieldLevelEncryptionProfileConfig !== undefined) {
    contents = se_FieldLevelEncryptionProfileConfig(input.FieldLevelEncryptionProfileConfig, context);
    body = _ve;
    contents.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlCreateFunctionCommand
 */
export const se_CreateFunctionCommand = async (
  input: CreateFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/2020-05-31/function");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_CFR);
  bn.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
  if (input[_FC] != null) {
    bn.c(__XmlNode.of(_FB, context.base64Encoder(input[_FC])).n(_FC));
  }
  if (input[_FCu] != null) {
    bn.c(se_FunctionConfig(input[_FCu], context).n(_FCu));
  }
  if (input[_N] != null) {
    bn.c(__XmlNode.of(_FN, input[_N]).n(_N));
  }
  body += bn.toString();
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlCreateInvalidationCommand
 */
export const se_CreateInvalidationCommand = async (
  input: CreateInvalidationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/2020-05-31/distribution/{DistributionId}/invalidation");
  b.p("DistributionId", () => input.DistributionId!, "{DistributionId}", false);
  let body: any;
  let contents: any;
  if (input.InvalidationBatch !== undefined) {
    contents = se_InvalidationBatch(input.InvalidationBatch, context);
    body = _ve;
    contents.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlCreateKeyGroupCommand
 */
export const se_CreateKeyGroupCommand = async (
  input: CreateKeyGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/2020-05-31/key-group");
  let body: any;
  let contents: any;
  if (input.KeyGroupConfig !== undefined) {
    contents = se_KeyGroupConfig(input.KeyGroupConfig, context);
    body = _ve;
    contents.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlCreateKeyValueStoreCommand
 */
export const se_CreateKeyValueStoreCommand = async (
  input: CreateKeyValueStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/2020-05-31/key-value-store");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_CKVSR);
  bn.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
  if (input[_C] != null) {
    bn.c(__XmlNode.of(_KVSC, input[_C]).n(_C));
  }
  if (input[_IS] != null) {
    bn.c(se_ImportSource(input[_IS], context).n(_IS));
  }
  if (input[_N] != null) {
    bn.c(__XmlNode.of(_KVSN, input[_N]).n(_N));
  }
  body += bn.toString();
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlCreateMonitoringSubscriptionCommand
 */
export const se_CreateMonitoringSubscriptionCommand = async (
  input: CreateMonitoringSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/2020-05-31/distributions/{DistributionId}/monitoring-subscription");
  b.p("DistributionId", () => input.DistributionId!, "{DistributionId}", false);
  let body: any;
  let contents: any;
  if (input.MonitoringSubscription !== undefined) {
    contents = se_MonitoringSubscription(input.MonitoringSubscription, context);
    body = _ve;
    contents.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlCreateOriginAccessControlCommand
 */
export const se_CreateOriginAccessControlCommand = async (
  input: CreateOriginAccessControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/2020-05-31/origin-access-control");
  let body: any;
  let contents: any;
  if (input.OriginAccessControlConfig !== undefined) {
    contents = se_OriginAccessControlConfig(input.OriginAccessControlConfig, context);
    body = _ve;
    contents.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlCreateOriginRequestPolicyCommand
 */
export const se_CreateOriginRequestPolicyCommand = async (
  input: CreateOriginRequestPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/2020-05-31/origin-request-policy");
  let body: any;
  let contents: any;
  if (input.OriginRequestPolicyConfig !== undefined) {
    contents = se_OriginRequestPolicyConfig(input.OriginRequestPolicyConfig, context);
    body = _ve;
    contents.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlCreatePublicKeyCommand
 */
export const se_CreatePublicKeyCommand = async (
  input: CreatePublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/2020-05-31/public-key");
  let body: any;
  let contents: any;
  if (input.PublicKeyConfig !== undefined) {
    contents = se_PublicKeyConfig(input.PublicKeyConfig, context);
    body = _ve;
    contents.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlCreateRealtimeLogConfigCommand
 */
export const se_CreateRealtimeLogConfigCommand = async (
  input: CreateRealtimeLogConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/2020-05-31/realtime-log-config");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_CRLCR);
  bn.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
  bn.lc(input, "EndPoints", "EndPoints", () => se_EndPointList(input[_EP]!, context));
  bn.lc(input, "Fields", "Fields", () => se_FieldList(input[_F]!, context));
  if (input[_N] != null) {
    bn.c(__XmlNode.of(_st, input[_N]).n(_N));
  }
  if (input[_SR] != null) {
    bn.c(__XmlNode.of(_l, String(input[_SR])).n(_SR));
  }
  body += bn.toString();
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlCreateResponseHeadersPolicyCommand
 */
export const se_CreateResponseHeadersPolicyCommand = async (
  input: CreateResponseHeadersPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/2020-05-31/response-headers-policy");
  let body: any;
  let contents: any;
  if (input.ResponseHeadersPolicyConfig !== undefined) {
    contents = se_ResponseHeadersPolicyConfig(input.ResponseHeadersPolicyConfig, context);
    body = _ve;
    contents.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlCreateStreamingDistributionCommand
 */
export const se_CreateStreamingDistributionCommand = async (
  input: CreateStreamingDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/2020-05-31/streaming-distribution");
  let body: any;
  let contents: any;
  if (input.StreamingDistributionConfig !== undefined) {
    contents = se_StreamingDistributionConfig(input.StreamingDistributionConfig, context);
    body = _ve;
    contents.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlCreateStreamingDistributionWithTagsCommand
 */
export const se_CreateStreamingDistributionWithTagsCommand = async (
  input: CreateStreamingDistributionWithTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/2020-05-31/streaming-distribution");
  const query: any = map({
    [_WT]: [, ""],
  });
  let body: any;
  let contents: any;
  if (input.StreamingDistributionConfigWithTags !== undefined) {
    contents = se_StreamingDistributionConfigWithTags(input.StreamingDistributionConfigWithTags, context);
    body = _ve;
    contents.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteCachePolicyCommand
 */
export const se_DeleteCachePolicyCommand = async (
  input: DeleteCachePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_im]: input[_IM]!,
  });
  b.bp("/2020-05-31/cache-policy/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteCloudFrontOriginAccessIdentityCommand
 */
export const se_DeleteCloudFrontOriginAccessIdentityCommand = async (
  input: DeleteCloudFrontOriginAccessIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_im]: input[_IM]!,
  });
  b.bp("/2020-05-31/origin-access-identity/cloudfront/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteContinuousDeploymentPolicyCommand
 */
export const se_DeleteContinuousDeploymentPolicyCommand = async (
  input: DeleteContinuousDeploymentPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_im]: input[_IM]!,
  });
  b.bp("/2020-05-31/continuous-deployment-policy/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteDistributionCommand
 */
export const se_DeleteDistributionCommand = async (
  input: DeleteDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_im]: input[_IM]!,
  });
  b.bp("/2020-05-31/distribution/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteFieldLevelEncryptionConfigCommand
 */
export const se_DeleteFieldLevelEncryptionConfigCommand = async (
  input: DeleteFieldLevelEncryptionConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_im]: input[_IM]!,
  });
  b.bp("/2020-05-31/field-level-encryption/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteFieldLevelEncryptionProfileCommand
 */
export const se_DeleteFieldLevelEncryptionProfileCommand = async (
  input: DeleteFieldLevelEncryptionProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_im]: input[_IM]!,
  });
  b.bp("/2020-05-31/field-level-encryption-profile/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteFunctionCommand
 */
export const se_DeleteFunctionCommand = async (
  input: DeleteFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_im]: input[_IM]!,
  });
  b.bp("/2020-05-31/function/{Name}");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteKeyGroupCommand
 */
export const se_DeleteKeyGroupCommand = async (
  input: DeleteKeyGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_im]: input[_IM]!,
  });
  b.bp("/2020-05-31/key-group/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteKeyValueStoreCommand
 */
export const se_DeleteKeyValueStoreCommand = async (
  input: DeleteKeyValueStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_im]: input[_IM]!,
  });
  b.bp("/2020-05-31/key-value-store/{Name}");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteMonitoringSubscriptionCommand
 */
export const se_DeleteMonitoringSubscriptionCommand = async (
  input: DeleteMonitoringSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/distributions/{DistributionId}/monitoring-subscription");
  b.p("DistributionId", () => input.DistributionId!, "{DistributionId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteOriginAccessControlCommand
 */
export const se_DeleteOriginAccessControlCommand = async (
  input: DeleteOriginAccessControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_im]: input[_IM]!,
  });
  b.bp("/2020-05-31/origin-access-control/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteOriginRequestPolicyCommand
 */
export const se_DeleteOriginRequestPolicyCommand = async (
  input: DeleteOriginRequestPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_im]: input[_IM]!,
  });
  b.bp("/2020-05-31/origin-request-policy/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeletePublicKeyCommand
 */
export const se_DeletePublicKeyCommand = async (
  input: DeletePublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_im]: input[_IM]!,
  });
  b.bp("/2020-05-31/public-key/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteRealtimeLogConfigCommand
 */
export const se_DeleteRealtimeLogConfigCommand = async (
  input: DeleteRealtimeLogConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/2020-05-31/delete-realtime-log-config");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_DRLCR);
  bn.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
  if (input[_ARN] != null) {
    bn.c(__XmlNode.of(_st, input[_ARN]).n(_ARN));
  }
  if (input[_N] != null) {
    bn.c(__XmlNode.of(_st, input[_N]).n(_N));
  }
  body += bn.toString();
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteResponseHeadersPolicyCommand
 */
export const se_DeleteResponseHeadersPolicyCommand = async (
  input: DeleteResponseHeadersPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_im]: input[_IM]!,
  });
  b.bp("/2020-05-31/response-headers-policy/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteStreamingDistributionCommand
 */
export const se_DeleteStreamingDistributionCommand = async (
  input: DeleteStreamingDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_im]: input[_IM]!,
  });
  b.bp("/2020-05-31/streaming-distribution/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDescribeFunctionCommand
 */
export const se_DescribeFunctionCommand = async (
  input: DescribeFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/function/{Name}/describe");
  b.p("Name", () => input.Name!, "{Name}", false);
  const query: any = map({
    [_St]: [, input[_St]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDescribeKeyValueStoreCommand
 */
export const se_DescribeKeyValueStoreCommand = async (
  input: DescribeKeyValueStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/key-value-store/{Name}");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetCachePolicyCommand
 */
export const se_GetCachePolicyCommand = async (
  input: GetCachePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/cache-policy/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetCachePolicyConfigCommand
 */
export const se_GetCachePolicyConfigCommand = async (
  input: GetCachePolicyConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/cache-policy/{Id}/config");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetCloudFrontOriginAccessIdentityCommand
 */
export const se_GetCloudFrontOriginAccessIdentityCommand = async (
  input: GetCloudFrontOriginAccessIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/origin-access-identity/cloudfront/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetCloudFrontOriginAccessIdentityConfigCommand
 */
export const se_GetCloudFrontOriginAccessIdentityConfigCommand = async (
  input: GetCloudFrontOriginAccessIdentityConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/origin-access-identity/cloudfront/{Id}/config");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetContinuousDeploymentPolicyCommand
 */
export const se_GetContinuousDeploymentPolicyCommand = async (
  input: GetContinuousDeploymentPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/continuous-deployment-policy/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetContinuousDeploymentPolicyConfigCommand
 */
export const se_GetContinuousDeploymentPolicyConfigCommand = async (
  input: GetContinuousDeploymentPolicyConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/continuous-deployment-policy/{Id}/config");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetDistributionCommand
 */
export const se_GetDistributionCommand = async (
  input: GetDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/distribution/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetDistributionConfigCommand
 */
export const se_GetDistributionConfigCommand = async (
  input: GetDistributionConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/distribution/{Id}/config");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetFieldLevelEncryptionCommand
 */
export const se_GetFieldLevelEncryptionCommand = async (
  input: GetFieldLevelEncryptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/field-level-encryption/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetFieldLevelEncryptionConfigCommand
 */
export const se_GetFieldLevelEncryptionConfigCommand = async (
  input: GetFieldLevelEncryptionConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/field-level-encryption/{Id}/config");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetFieldLevelEncryptionProfileCommand
 */
export const se_GetFieldLevelEncryptionProfileCommand = async (
  input: GetFieldLevelEncryptionProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/field-level-encryption-profile/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetFieldLevelEncryptionProfileConfigCommand
 */
export const se_GetFieldLevelEncryptionProfileConfigCommand = async (
  input: GetFieldLevelEncryptionProfileConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/field-level-encryption-profile/{Id}/config");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetFunctionCommand
 */
export const se_GetFunctionCommand = async (
  input: GetFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/function/{Name}");
  b.p("Name", () => input.Name!, "{Name}", false);
  const query: any = map({
    [_St]: [, input[_St]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetInvalidationCommand
 */
export const se_GetInvalidationCommand = async (
  input: GetInvalidationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/distribution/{DistributionId}/invalidation/{Id}");
  b.p("DistributionId", () => input.DistributionId!, "{DistributionId}", false);
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetKeyGroupCommand
 */
export const se_GetKeyGroupCommand = async (
  input: GetKeyGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/key-group/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetKeyGroupConfigCommand
 */
export const se_GetKeyGroupConfigCommand = async (
  input: GetKeyGroupConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/key-group/{Id}/config");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetMonitoringSubscriptionCommand
 */
export const se_GetMonitoringSubscriptionCommand = async (
  input: GetMonitoringSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/distributions/{DistributionId}/monitoring-subscription");
  b.p("DistributionId", () => input.DistributionId!, "{DistributionId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetOriginAccessControlCommand
 */
export const se_GetOriginAccessControlCommand = async (
  input: GetOriginAccessControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/origin-access-control/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetOriginAccessControlConfigCommand
 */
export const se_GetOriginAccessControlConfigCommand = async (
  input: GetOriginAccessControlConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/origin-access-control/{Id}/config");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetOriginRequestPolicyCommand
 */
export const se_GetOriginRequestPolicyCommand = async (
  input: GetOriginRequestPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/origin-request-policy/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetOriginRequestPolicyConfigCommand
 */
export const se_GetOriginRequestPolicyConfigCommand = async (
  input: GetOriginRequestPolicyConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/origin-request-policy/{Id}/config");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetPublicKeyCommand
 */
export const se_GetPublicKeyCommand = async (
  input: GetPublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/public-key/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetPublicKeyConfigCommand
 */
export const se_GetPublicKeyConfigCommand = async (
  input: GetPublicKeyConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/public-key/{Id}/config");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetRealtimeLogConfigCommand
 */
export const se_GetRealtimeLogConfigCommand = async (
  input: GetRealtimeLogConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/2020-05-31/get-realtime-log-config");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_GRLCR);
  bn.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
  if (input[_ARN] != null) {
    bn.c(__XmlNode.of(_st, input[_ARN]).n(_ARN));
  }
  if (input[_N] != null) {
    bn.c(__XmlNode.of(_st, input[_N]).n(_N));
  }
  body += bn.toString();
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetResponseHeadersPolicyCommand
 */
export const se_GetResponseHeadersPolicyCommand = async (
  input: GetResponseHeadersPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/response-headers-policy/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetResponseHeadersPolicyConfigCommand
 */
export const se_GetResponseHeadersPolicyConfigCommand = async (
  input: GetResponseHeadersPolicyConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/response-headers-policy/{Id}/config");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetStreamingDistributionCommand
 */
export const se_GetStreamingDistributionCommand = async (
  input: GetStreamingDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/streaming-distribution/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetStreamingDistributionConfigCommand
 */
export const se_GetStreamingDistributionConfigCommand = async (
  input: GetStreamingDistributionConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/streaming-distribution/{Id}/config");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListCachePoliciesCommand
 */
export const se_ListCachePoliciesCommand = async (
  input: ListCachePoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/cache-policy");
  const query: any = map({
    [_T]: [, input[_T]!],
    [_M]: [, input[_M]!],
    [_MI]: [() => input.MaxItems !== void 0, () => input[_MI]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListCloudFrontOriginAccessIdentitiesCommand
 */
export const se_ListCloudFrontOriginAccessIdentitiesCommand = async (
  input: ListCloudFrontOriginAccessIdentitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/origin-access-identity/cloudfront");
  const query: any = map({
    [_M]: [, input[_M]!],
    [_MI]: [() => input.MaxItems !== void 0, () => input[_MI]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListConflictingAliasesCommand
 */
export const se_ListConflictingAliasesCommand = async (
  input: ListConflictingAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/conflicting-alias");
  const query: any = map({
    [_DI]: [, __expectNonNull(input[_DI]!, `DistributionId`)],
    [_A]: [, __expectNonNull(input[_A]!, `Alias`)],
    [_M]: [, input[_M]!],
    [_MI]: [() => input.MaxItems !== void 0, () => input[_MI]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListContinuousDeploymentPoliciesCommand
 */
export const se_ListContinuousDeploymentPoliciesCommand = async (
  input: ListContinuousDeploymentPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/continuous-deployment-policy");
  const query: any = map({
    [_M]: [, input[_M]!],
    [_MI]: [() => input.MaxItems !== void 0, () => input[_MI]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListDistributionsCommand
 */
export const se_ListDistributionsCommand = async (
  input: ListDistributionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/distribution");
  const query: any = map({
    [_M]: [, input[_M]!],
    [_MI]: [() => input.MaxItems !== void 0, () => input[_MI]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListDistributionsByCachePolicyIdCommand
 */
export const se_ListDistributionsByCachePolicyIdCommand = async (
  input: ListDistributionsByCachePolicyIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/distributionsByCachePolicyId/{CachePolicyId}");
  b.p("CachePolicyId", () => input.CachePolicyId!, "{CachePolicyId}", false);
  const query: any = map({
    [_M]: [, input[_M]!],
    [_MI]: [() => input.MaxItems !== void 0, () => input[_MI]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListDistributionsByKeyGroupCommand
 */
export const se_ListDistributionsByKeyGroupCommand = async (
  input: ListDistributionsByKeyGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/distributionsByKeyGroupId/{KeyGroupId}");
  b.p("KeyGroupId", () => input.KeyGroupId!, "{KeyGroupId}", false);
  const query: any = map({
    [_M]: [, input[_M]!],
    [_MI]: [() => input.MaxItems !== void 0, () => input[_MI]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListDistributionsByOriginRequestPolicyIdCommand
 */
export const se_ListDistributionsByOriginRequestPolicyIdCommand = async (
  input: ListDistributionsByOriginRequestPolicyIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/distributionsByOriginRequestPolicyId/{OriginRequestPolicyId}");
  b.p("OriginRequestPolicyId", () => input.OriginRequestPolicyId!, "{OriginRequestPolicyId}", false);
  const query: any = map({
    [_M]: [, input[_M]!],
    [_MI]: [() => input.MaxItems !== void 0, () => input[_MI]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListDistributionsByRealtimeLogConfigCommand
 */
export const se_ListDistributionsByRealtimeLogConfigCommand = async (
  input: ListDistributionsByRealtimeLogConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/2020-05-31/distributionsByRealtimeLogConfig");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_LDBRLCR);
  bn.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
  if (input[_M] != null) {
    bn.c(__XmlNode.of(_st, input[_M]).n(_M));
  }
  if (input[_MI] != null) {
    bn.c(__XmlNode.of(_i, String(input[_MI])).n(_MI));
  }
  if (input[_RLCA] != null) {
    bn.c(__XmlNode.of(_st, input[_RLCA]).n(_RLCA));
  }
  if (input[_RLCN] != null) {
    bn.c(__XmlNode.of(_st, input[_RLCN]).n(_RLCN));
  }
  body += bn.toString();
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListDistributionsByResponseHeadersPolicyIdCommand
 */
export const se_ListDistributionsByResponseHeadersPolicyIdCommand = async (
  input: ListDistributionsByResponseHeadersPolicyIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/distributionsByResponseHeadersPolicyId/{ResponseHeadersPolicyId}");
  b.p("ResponseHeadersPolicyId", () => input.ResponseHeadersPolicyId!, "{ResponseHeadersPolicyId}", false);
  const query: any = map({
    [_M]: [, input[_M]!],
    [_MI]: [() => input.MaxItems !== void 0, () => input[_MI]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListDistributionsByWebACLIdCommand
 */
export const se_ListDistributionsByWebACLIdCommand = async (
  input: ListDistributionsByWebACLIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/distributionsByWebACLId/{WebACLId}");
  b.p("WebACLId", () => input.WebACLId!, "{WebACLId}", false);
  const query: any = map({
    [_M]: [, input[_M]!],
    [_MI]: [() => input.MaxItems !== void 0, () => input[_MI]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListFieldLevelEncryptionConfigsCommand
 */
export const se_ListFieldLevelEncryptionConfigsCommand = async (
  input: ListFieldLevelEncryptionConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/field-level-encryption");
  const query: any = map({
    [_M]: [, input[_M]!],
    [_MI]: [() => input.MaxItems !== void 0, () => input[_MI]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListFieldLevelEncryptionProfilesCommand
 */
export const se_ListFieldLevelEncryptionProfilesCommand = async (
  input: ListFieldLevelEncryptionProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/field-level-encryption-profile");
  const query: any = map({
    [_M]: [, input[_M]!],
    [_MI]: [() => input.MaxItems !== void 0, () => input[_MI]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListFunctionsCommand
 */
export const se_ListFunctionsCommand = async (
  input: ListFunctionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/function");
  const query: any = map({
    [_M]: [, input[_M]!],
    [_MI]: [() => input.MaxItems !== void 0, () => input[_MI]!.toString()],
    [_St]: [, input[_St]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListInvalidationsCommand
 */
export const se_ListInvalidationsCommand = async (
  input: ListInvalidationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/distribution/{DistributionId}/invalidation");
  b.p("DistributionId", () => input.DistributionId!, "{DistributionId}", false);
  const query: any = map({
    [_M]: [, input[_M]!],
    [_MI]: [() => input.MaxItems !== void 0, () => input[_MI]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListKeyGroupsCommand
 */
export const se_ListKeyGroupsCommand = async (
  input: ListKeyGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/key-group");
  const query: any = map({
    [_M]: [, input[_M]!],
    [_MI]: [() => input.MaxItems !== void 0, () => input[_MI]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListKeyValueStoresCommand
 */
export const se_ListKeyValueStoresCommand = async (
  input: ListKeyValueStoresCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/key-value-store");
  const query: any = map({
    [_M]: [, input[_M]!],
    [_MI]: [() => input.MaxItems !== void 0, () => input[_MI]!.toString()],
    [_Sta]: [, input[_Sta]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListOriginAccessControlsCommand
 */
export const se_ListOriginAccessControlsCommand = async (
  input: ListOriginAccessControlsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/origin-access-control");
  const query: any = map({
    [_M]: [, input[_M]!],
    [_MI]: [() => input.MaxItems !== void 0, () => input[_MI]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListOriginRequestPoliciesCommand
 */
export const se_ListOriginRequestPoliciesCommand = async (
  input: ListOriginRequestPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/origin-request-policy");
  const query: any = map({
    [_T]: [, input[_T]!],
    [_M]: [, input[_M]!],
    [_MI]: [() => input.MaxItems !== void 0, () => input[_MI]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListPublicKeysCommand
 */
export const se_ListPublicKeysCommand = async (
  input: ListPublicKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/public-key");
  const query: any = map({
    [_M]: [, input[_M]!],
    [_MI]: [() => input.MaxItems !== void 0, () => input[_MI]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListRealtimeLogConfigsCommand
 */
export const se_ListRealtimeLogConfigsCommand = async (
  input: ListRealtimeLogConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/realtime-log-config");
  const query: any = map({
    [_MI]: [() => input.MaxItems !== void 0, () => input[_MI]!.toString()],
    [_M]: [, input[_M]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListResponseHeadersPoliciesCommand
 */
export const se_ListResponseHeadersPoliciesCommand = async (
  input: ListResponseHeadersPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/response-headers-policy");
  const query: any = map({
    [_T]: [, input[_T]!],
    [_M]: [, input[_M]!],
    [_MI]: [() => input.MaxItems !== void 0, () => input[_MI]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListStreamingDistributionsCommand
 */
export const se_ListStreamingDistributionsCommand = async (
  input: ListStreamingDistributionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/streaming-distribution");
  const query: any = map({
    [_M]: [, input[_M]!],
    [_MI]: [() => input.MaxItems !== void 0, () => input[_MI]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-05-31/tagging");
  const query: any = map({
    [_R]: [, __expectNonNull(input[_R]!, `Resource`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPublishFunctionCommand
 */
export const se_PublishFunctionCommand = async (
  input: PublishFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_im]: input[_IM]!,
  });
  b.bp("/2020-05-31/function/{Name}/publish");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlTagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/2020-05-31/tagging");
  const query: any = map({
    [_O]: [, "Tag"],
    [_R]: [, __expectNonNull(input[_R]!, `Resource`)],
  });
  let body: any;
  let contents: any;
  if (input.Tags !== undefined) {
    contents = se_Tags(input.Tags, context);
    body = _ve;
    contents.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlTestFunctionCommand
 */
export const se_TestFunctionCommand = async (
  input: TestFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_im]: input[_IM]!,
  });
  b.bp("/2020-05-31/function/{Name}/test");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_TFR);
  bn.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
  if (input[_EO] != null) {
    bn.c(__XmlNode.of(_FEO, context.base64Encoder(input[_EO])).n(_EO));
  }
  if (input[_St] != null) {
    bn.c(__XmlNode.of(_FS, input[_St]).n(_St));
  }
  body += bn.toString();
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlUntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/2020-05-31/tagging");
  const query: any = map({
    [_O]: [, "Untag"],
    [_R]: [, __expectNonNull(input[_R]!, `Resource`)],
  });
  let body: any;
  let contents: any;
  if (input.TagKeys !== undefined) {
    contents = se_TagKeys(input.TagKeys, context);
    body = _ve;
    contents.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlUpdateCachePolicyCommand
 */
export const se_UpdateCachePolicyCommand = async (
  input: UpdateCachePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_im]: input[_IM]!,
  });
  b.bp("/2020-05-31/cache-policy/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  let contents: any;
  if (input.CachePolicyConfig !== undefined) {
    contents = se_CachePolicyConfig(input.CachePolicyConfig, context);
    body = _ve;
    contents.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommand
 */
export const se_UpdateCloudFrontOriginAccessIdentityCommand = async (
  input: UpdateCloudFrontOriginAccessIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_im]: input[_IM]!,
  });
  b.bp("/2020-05-31/origin-access-identity/cloudfront/{Id}/config");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  let contents: any;
  if (input.CloudFrontOriginAccessIdentityConfig !== undefined) {
    contents = se_CloudFrontOriginAccessIdentityConfig(input.CloudFrontOriginAccessIdentityConfig, context);
    body = _ve;
    contents.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlUpdateContinuousDeploymentPolicyCommand
 */
export const se_UpdateContinuousDeploymentPolicyCommand = async (
  input: UpdateContinuousDeploymentPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_im]: input[_IM]!,
  });
  b.bp("/2020-05-31/continuous-deployment-policy/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  let contents: any;
  if (input.ContinuousDeploymentPolicyConfig !== undefined) {
    contents = se_ContinuousDeploymentPolicyConfig(input.ContinuousDeploymentPolicyConfig, context);
    body = _ve;
    contents.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlUpdateDistributionCommand
 */
export const se_UpdateDistributionCommand = async (
  input: UpdateDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_im]: input[_IM]!,
  });
  b.bp("/2020-05-31/distribution/{Id}/config");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  let contents: any;
  if (input.DistributionConfig !== undefined) {
    contents = se_DistributionConfig(input.DistributionConfig, context);
    body = _ve;
    contents.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlUpdateDistributionWithStagingConfigCommand
 */
export const se_UpdateDistributionWithStagingConfigCommand = async (
  input: UpdateDistributionWithStagingConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_im]: input[_IM]!,
  });
  b.bp("/2020-05-31/distribution/{Id}/promote-staging-config");
  b.p("Id", () => input.Id!, "{Id}", false);
  const query: any = map({
    [_SDI]: [, input[_SDI]!],
  });
  let body: any;
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlUpdateFieldLevelEncryptionConfigCommand
 */
export const se_UpdateFieldLevelEncryptionConfigCommand = async (
  input: UpdateFieldLevelEncryptionConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_im]: input[_IM]!,
  });
  b.bp("/2020-05-31/field-level-encryption/{Id}/config");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  let contents: any;
  if (input.FieldLevelEncryptionConfig !== undefined) {
    contents = se_FieldLevelEncryptionConfig(input.FieldLevelEncryptionConfig, context);
    body = _ve;
    contents.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlUpdateFieldLevelEncryptionProfileCommand
 */
export const se_UpdateFieldLevelEncryptionProfileCommand = async (
  input: UpdateFieldLevelEncryptionProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_im]: input[_IM]!,
  });
  b.bp("/2020-05-31/field-level-encryption-profile/{Id}/config");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  let contents: any;
  if (input.FieldLevelEncryptionProfileConfig !== undefined) {
    contents = se_FieldLevelEncryptionProfileConfig(input.FieldLevelEncryptionProfileConfig, context);
    body = _ve;
    contents.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlUpdateFunctionCommand
 */
export const se_UpdateFunctionCommand = async (
  input: UpdateFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_im]: input[_IM]!,
  });
  b.bp("/2020-05-31/function/{Name}");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_UFR);
  bn.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
  if (input[_FC] != null) {
    bn.c(__XmlNode.of(_FB, context.base64Encoder(input[_FC])).n(_FC));
  }
  if (input[_FCu] != null) {
    bn.c(se_FunctionConfig(input[_FCu], context).n(_FCu));
  }
  body += bn.toString();
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlUpdateKeyGroupCommand
 */
export const se_UpdateKeyGroupCommand = async (
  input: UpdateKeyGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_im]: input[_IM]!,
  });
  b.bp("/2020-05-31/key-group/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  let contents: any;
  if (input.KeyGroupConfig !== undefined) {
    contents = se_KeyGroupConfig(input.KeyGroupConfig, context);
    body = _ve;
    contents.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlUpdateKeyValueStoreCommand
 */
export const se_UpdateKeyValueStoreCommand = async (
  input: UpdateKeyValueStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_im]: input[_IM]!,
  });
  b.bp("/2020-05-31/key-value-store/{Name}");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_UKVSR);
  bn.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
  if (input[_C] != null) {
    bn.c(__XmlNode.of(_KVSC, input[_C]).n(_C));
  }
  body += bn.toString();
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlUpdateOriginAccessControlCommand
 */
export const se_UpdateOriginAccessControlCommand = async (
  input: UpdateOriginAccessControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_im]: input[_IM]!,
  });
  b.bp("/2020-05-31/origin-access-control/{Id}/config");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  let contents: any;
  if (input.OriginAccessControlConfig !== undefined) {
    contents = se_OriginAccessControlConfig(input.OriginAccessControlConfig, context);
    body = _ve;
    contents.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlUpdateOriginRequestPolicyCommand
 */
export const se_UpdateOriginRequestPolicyCommand = async (
  input: UpdateOriginRequestPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_im]: input[_IM]!,
  });
  b.bp("/2020-05-31/origin-request-policy/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  let contents: any;
  if (input.OriginRequestPolicyConfig !== undefined) {
    contents = se_OriginRequestPolicyConfig(input.OriginRequestPolicyConfig, context);
    body = _ve;
    contents.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlUpdatePublicKeyCommand
 */
export const se_UpdatePublicKeyCommand = async (
  input: UpdatePublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_im]: input[_IM]!,
  });
  b.bp("/2020-05-31/public-key/{Id}/config");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  let contents: any;
  if (input.PublicKeyConfig !== undefined) {
    contents = se_PublicKeyConfig(input.PublicKeyConfig, context);
    body = _ve;
    contents.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlUpdateRealtimeLogConfigCommand
 */
export const se_UpdateRealtimeLogConfigCommand = async (
  input: UpdateRealtimeLogConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/2020-05-31/realtime-log-config");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_URLCR);
  bn.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
  if (input[_ARN] != null) {
    bn.c(__XmlNode.of(_st, input[_ARN]).n(_ARN));
  }
  bn.lc(input, "EndPoints", "EndPoints", () => se_EndPointList(input[_EP]!, context));
  bn.lc(input, "Fields", "Fields", () => se_FieldList(input[_F]!, context));
  if (input[_N] != null) {
    bn.c(__XmlNode.of(_st, input[_N]).n(_N));
  }
  if (input[_SR] != null) {
    bn.c(__XmlNode.of(_l, String(input[_SR])).n(_SR));
  }
  body += bn.toString();
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlUpdateResponseHeadersPolicyCommand
 */
export const se_UpdateResponseHeadersPolicyCommand = async (
  input: UpdateResponseHeadersPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_im]: input[_IM]!,
  });
  b.bp("/2020-05-31/response-headers-policy/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  let contents: any;
  if (input.ResponseHeadersPolicyConfig !== undefined) {
    contents = se_ResponseHeadersPolicyConfig(input.ResponseHeadersPolicyConfig, context);
    body = _ve;
    contents.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlUpdateStreamingDistributionCommand
 */
export const se_UpdateStreamingDistributionCommand = async (
  input: UpdateStreamingDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_im]: input[_IM]!,
  });
  b.bp("/2020-05-31/streaming-distribution/{Id}/config");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  let contents: any;
  if (input.StreamingDistributionConfig !== undefined) {
    contents = se_StreamingDistributionConfig(input.StreamingDistributionConfig, context);
    body = _ve;
    contents.a("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restXmlAssociateAliasCommand
 */
export const de_AssociateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlCopyDistributionCommand
 */
export const de_CopyDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyDistributionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_L]: [, output.headers[_lo]],
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.Distribution = de_Distribution(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreateCachePolicyCommand
 */
export const de_CreateCachePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCachePolicyCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_L]: [, output.headers[_lo]],
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CachePolicy = de_CachePolicy(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreateCloudFrontOriginAccessIdentityCommand
 */
export const de_CreateCloudFrontOriginAccessIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCloudFrontOriginAccessIdentityCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_L]: [, output.headers[_lo]],
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CloudFrontOriginAccessIdentity = de_CloudFrontOriginAccessIdentity(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreateContinuousDeploymentPolicyCommand
 */
export const de_CreateContinuousDeploymentPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContinuousDeploymentPolicyCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_L]: [, output.headers[_lo]],
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ContinuousDeploymentPolicy = de_ContinuousDeploymentPolicy(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreateDistributionCommand
 */
export const de_CreateDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDistributionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_L]: [, output.headers[_lo]],
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.Distribution = de_Distribution(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreateDistributionWithTagsCommand
 */
export const de_CreateDistributionWithTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDistributionWithTagsCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_L]: [, output.headers[_lo]],
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.Distribution = de_Distribution(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreateFieldLevelEncryptionConfigCommand
 */
export const de_CreateFieldLevelEncryptionConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFieldLevelEncryptionConfigCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_L]: [, output.headers[_lo]],
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FieldLevelEncryption = de_FieldLevelEncryption(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreateFieldLevelEncryptionProfileCommand
 */
export const de_CreateFieldLevelEncryptionProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFieldLevelEncryptionProfileCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_L]: [, output.headers[_lo]],
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FieldLevelEncryptionProfile = de_FieldLevelEncryptionProfile(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreateFunctionCommand
 */
export const de_CreateFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFunctionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_L]: [, output.headers[_lo]],
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FunctionSummary = de_FunctionSummary(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreateInvalidationCommand
 */
export const de_CreateInvalidationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInvalidationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_L]: [, output.headers[_lo]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.Invalidation = de_Invalidation(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreateKeyGroupCommand
 */
export const de_CreateKeyGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKeyGroupCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_L]: [, output.headers[_lo]],
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.KeyGroup = de_KeyGroup(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreateKeyValueStoreCommand
 */
export const de_CreateKeyValueStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKeyValueStoreCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
    [_L]: [, output.headers[_lo]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.KeyValueStore = de_KeyValueStore(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreateMonitoringSubscriptionCommand
 */
export const de_CreateMonitoringSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMonitoringSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.MonitoringSubscription = de_MonitoringSubscription(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreateOriginAccessControlCommand
 */
export const de_CreateOriginAccessControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOriginAccessControlCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_L]: [, output.headers[_lo]],
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.OriginAccessControl = de_OriginAccessControl(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreateOriginRequestPolicyCommand
 */
export const de_CreateOriginRequestPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOriginRequestPolicyCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_L]: [, output.headers[_lo]],
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.OriginRequestPolicy = de_OriginRequestPolicy(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreatePublicKeyCommand
 */
export const de_CreatePublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePublicKeyCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_L]: [, output.headers[_lo]],
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.PublicKey = de_PublicKey(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreateRealtimeLogConfigCommand
 */
export const de_CreateRealtimeLogConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRealtimeLogConfigCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_RLC] != null) {
    contents[_RLC] = de_RealtimeLogConfig(data[_RLC], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCreateResponseHeadersPolicyCommand
 */
export const de_CreateResponseHeadersPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResponseHeadersPolicyCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_L]: [, output.headers[_lo]],
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ResponseHeadersPolicy = de_ResponseHeadersPolicy(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreateStreamingDistributionCommand
 */
export const de_CreateStreamingDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamingDistributionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_L]: [, output.headers[_lo]],
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.StreamingDistribution = de_StreamingDistribution(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreateStreamingDistributionWithTagsCommand
 */
export const de_CreateStreamingDistributionWithTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamingDistributionWithTagsCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_L]: [, output.headers[_lo]],
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.StreamingDistribution = de_StreamingDistribution(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteCachePolicyCommand
 */
export const de_DeleteCachePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCachePolicyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteCloudFrontOriginAccessIdentityCommand
 */
export const de_DeleteCloudFrontOriginAccessIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCloudFrontOriginAccessIdentityCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteContinuousDeploymentPolicyCommand
 */
export const de_DeleteContinuousDeploymentPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContinuousDeploymentPolicyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteDistributionCommand
 */
export const de_DeleteDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDistributionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteFieldLevelEncryptionConfigCommand
 */
export const de_DeleteFieldLevelEncryptionConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFieldLevelEncryptionConfigCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteFieldLevelEncryptionProfileCommand
 */
export const de_DeleteFieldLevelEncryptionProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFieldLevelEncryptionProfileCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteFunctionCommand
 */
export const de_DeleteFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteKeyGroupCommand
 */
export const de_DeleteKeyGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKeyGroupCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteKeyValueStoreCommand
 */
export const de_DeleteKeyValueStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKeyValueStoreCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteMonitoringSubscriptionCommand
 */
export const de_DeleteMonitoringSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMonitoringSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteOriginAccessControlCommand
 */
export const de_DeleteOriginAccessControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOriginAccessControlCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteOriginRequestPolicyCommand
 */
export const de_DeleteOriginRequestPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOriginRequestPolicyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeletePublicKeyCommand
 */
export const de_DeletePublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePublicKeyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteRealtimeLogConfigCommand
 */
export const de_DeleteRealtimeLogConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRealtimeLogConfigCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteResponseHeadersPolicyCommand
 */
export const de_DeleteResponseHeadersPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResponseHeadersPolicyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteStreamingDistributionCommand
 */
export const de_DeleteStreamingDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStreamingDistributionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDescribeFunctionCommand
 */
export const de_DescribeFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FunctionSummary = de_FunctionSummary(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlDescribeKeyValueStoreCommand
 */
export const de_DescribeKeyValueStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeKeyValueStoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.KeyValueStore = de_KeyValueStore(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetCachePolicyCommand
 */
export const de_GetCachePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCachePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CachePolicy = de_CachePolicy(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetCachePolicyConfigCommand
 */
export const de_GetCachePolicyConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCachePolicyConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CachePolicyConfig = de_CachePolicyConfig(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetCloudFrontOriginAccessIdentityCommand
 */
export const de_GetCloudFrontOriginAccessIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCloudFrontOriginAccessIdentityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CloudFrontOriginAccessIdentity = de_CloudFrontOriginAccessIdentity(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetCloudFrontOriginAccessIdentityConfigCommand
 */
export const de_GetCloudFrontOriginAccessIdentityConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCloudFrontOriginAccessIdentityConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CloudFrontOriginAccessIdentityConfig = de_CloudFrontOriginAccessIdentityConfig(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetContinuousDeploymentPolicyCommand
 */
export const de_GetContinuousDeploymentPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContinuousDeploymentPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ContinuousDeploymentPolicy = de_ContinuousDeploymentPolicy(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetContinuousDeploymentPolicyConfigCommand
 */
export const de_GetContinuousDeploymentPolicyConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContinuousDeploymentPolicyConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ContinuousDeploymentPolicyConfig = de_ContinuousDeploymentPolicyConfig(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetDistributionCommand
 */
export const de_GetDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDistributionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.Distribution = de_Distribution(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetDistributionConfigCommand
 */
export const de_GetDistributionConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDistributionConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.DistributionConfig = de_DistributionConfig(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetFieldLevelEncryptionCommand
 */
export const de_GetFieldLevelEncryptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFieldLevelEncryptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FieldLevelEncryption = de_FieldLevelEncryption(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetFieldLevelEncryptionConfigCommand
 */
export const de_GetFieldLevelEncryptionConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFieldLevelEncryptionConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FieldLevelEncryptionConfig = de_FieldLevelEncryptionConfig(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetFieldLevelEncryptionProfileCommand
 */
export const de_GetFieldLevelEncryptionProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFieldLevelEncryptionProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FieldLevelEncryptionProfile = de_FieldLevelEncryptionProfile(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetFieldLevelEncryptionProfileConfigCommand
 */
export const de_GetFieldLevelEncryptionProfileConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFieldLevelEncryptionProfileConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FieldLevelEncryptionProfileConfig = de_FieldLevelEncryptionProfileConfig(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetFunctionCommand
 */
export const de_GetFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
    [_CT]: [, output.headers[_ct]],
  });
  const data: any = await collectBody(output.body, context);
  contents.FunctionCode = data;
  return contents;
};

/**
 * deserializeAws_restXmlGetInvalidationCommand
 */
export const de_GetInvalidationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInvalidationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.Invalidation = de_Invalidation(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetKeyGroupCommand
 */
export const de_GetKeyGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.KeyGroup = de_KeyGroup(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetKeyGroupConfigCommand
 */
export const de_GetKeyGroupConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyGroupConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.KeyGroupConfig = de_KeyGroupConfig(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetMonitoringSubscriptionCommand
 */
export const de_GetMonitoringSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMonitoringSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.MonitoringSubscription = de_MonitoringSubscription(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetOriginAccessControlCommand
 */
export const de_GetOriginAccessControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOriginAccessControlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.OriginAccessControl = de_OriginAccessControl(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetOriginAccessControlConfigCommand
 */
export const de_GetOriginAccessControlConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOriginAccessControlConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.OriginAccessControlConfig = de_OriginAccessControlConfig(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetOriginRequestPolicyCommand
 */
export const de_GetOriginRequestPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOriginRequestPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.OriginRequestPolicy = de_OriginRequestPolicy(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetOriginRequestPolicyConfigCommand
 */
export const de_GetOriginRequestPolicyConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOriginRequestPolicyConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.OriginRequestPolicyConfig = de_OriginRequestPolicyConfig(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetPublicKeyCommand
 */
export const de_GetPublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPublicKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.PublicKey = de_PublicKey(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetPublicKeyConfigCommand
 */
export const de_GetPublicKeyConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPublicKeyConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.PublicKeyConfig = de_PublicKeyConfig(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetRealtimeLogConfigCommand
 */
export const de_GetRealtimeLogConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRealtimeLogConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_RLC] != null) {
    contents[_RLC] = de_RealtimeLogConfig(data[_RLC], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetResponseHeadersPolicyCommand
 */
export const de_GetResponseHeadersPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResponseHeadersPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ResponseHeadersPolicy = de_ResponseHeadersPolicy(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetResponseHeadersPolicyConfigCommand
 */
export const de_GetResponseHeadersPolicyConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResponseHeadersPolicyConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ResponseHeadersPolicyConfig = de_ResponseHeadersPolicyConfig(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetStreamingDistributionCommand
 */
export const de_GetStreamingDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStreamingDistributionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.StreamingDistribution = de_StreamingDistribution(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetStreamingDistributionConfigCommand
 */
export const de_GetStreamingDistributionConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStreamingDistributionConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.StreamingDistributionConfig = de_StreamingDistributionConfig(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListCachePoliciesCommand
 */
export const de_ListCachePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCachePoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CachePolicyList = de_CachePolicyList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListCloudFrontOriginAccessIdentitiesCommand
 */
export const de_ListCloudFrontOriginAccessIdentitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCloudFrontOriginAccessIdentitiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CloudFrontOriginAccessIdentityList = de_CloudFrontOriginAccessIdentityList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListConflictingAliasesCommand
 */
export const de_ListConflictingAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConflictingAliasesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ConflictingAliasesList = de_ConflictingAliasesList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListContinuousDeploymentPoliciesCommand
 */
export const de_ListContinuousDeploymentPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContinuousDeploymentPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ContinuousDeploymentPolicyList = de_ContinuousDeploymentPolicyList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListDistributionsCommand
 */
export const de_ListDistributionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.DistributionList = de_DistributionList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListDistributionsByCachePolicyIdCommand
 */
export const de_ListDistributionsByCachePolicyIdCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionsByCachePolicyIdCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.DistributionIdList = de_DistributionIdList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListDistributionsByKeyGroupCommand
 */
export const de_ListDistributionsByKeyGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionsByKeyGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.DistributionIdList = de_DistributionIdList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListDistributionsByOriginRequestPolicyIdCommand
 */
export const de_ListDistributionsByOriginRequestPolicyIdCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionsByOriginRequestPolicyIdCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.DistributionIdList = de_DistributionIdList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListDistributionsByRealtimeLogConfigCommand
 */
export const de_ListDistributionsByRealtimeLogConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionsByRealtimeLogConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.DistributionList = de_DistributionList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListDistributionsByResponseHeadersPolicyIdCommand
 */
export const de_ListDistributionsByResponseHeadersPolicyIdCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionsByResponseHeadersPolicyIdCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.DistributionIdList = de_DistributionIdList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListDistributionsByWebACLIdCommand
 */
export const de_ListDistributionsByWebACLIdCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionsByWebACLIdCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.DistributionList = de_DistributionList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListFieldLevelEncryptionConfigsCommand
 */
export const de_ListFieldLevelEncryptionConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFieldLevelEncryptionConfigsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FieldLevelEncryptionList = de_FieldLevelEncryptionList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListFieldLevelEncryptionProfilesCommand
 */
export const de_ListFieldLevelEncryptionProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFieldLevelEncryptionProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FieldLevelEncryptionProfileList = de_FieldLevelEncryptionProfileList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListFunctionsCommand
 */
export const de_ListFunctionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FunctionList = de_FunctionList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListInvalidationsCommand
 */
export const de_ListInvalidationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInvalidationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.InvalidationList = de_InvalidationList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListKeyGroupsCommand
 */
export const de_ListKeyGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKeyGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.KeyGroupList = de_KeyGroupList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListKeyValueStoresCommand
 */
export const de_ListKeyValueStoresCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKeyValueStoresCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.KeyValueStoreList = de_KeyValueStoreList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListOriginAccessControlsCommand
 */
export const de_ListOriginAccessControlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOriginAccessControlsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.OriginAccessControlList = de_OriginAccessControlList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListOriginRequestPoliciesCommand
 */
export const de_ListOriginRequestPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOriginRequestPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.OriginRequestPolicyList = de_OriginRequestPolicyList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListPublicKeysCommand
 */
export const de_ListPublicKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPublicKeysCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.PublicKeyList = de_PublicKeyList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListRealtimeLogConfigsCommand
 */
export const de_ListRealtimeLogConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRealtimeLogConfigsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.RealtimeLogConfigs = de_RealtimeLogConfigs(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListResponseHeadersPoliciesCommand
 */
export const de_ListResponseHeadersPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResponseHeadersPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ResponseHeadersPolicyList = de_ResponseHeadersPolicyList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListStreamingDistributionsCommand
 */
export const de_ListStreamingDistributionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamingDistributionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.StreamingDistributionList = de_StreamingDistributionList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.Tags = de_Tags(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlPublishFunctionCommand
 */
export const de_PublishFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FunctionSummary = de_FunctionSummary(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlTagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlTestFunctionCommand
 */
export const de_TestFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.TestResult = de_TestResult(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlUntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlUpdateCachePolicyCommand
 */
export const de_UpdateCachePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCachePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CachePolicy = de_CachePolicy(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommand
 */
export const de_UpdateCloudFrontOriginAccessIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCloudFrontOriginAccessIdentityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CloudFrontOriginAccessIdentity = de_CloudFrontOriginAccessIdentity(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlUpdateContinuousDeploymentPolicyCommand
 */
export const de_UpdateContinuousDeploymentPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContinuousDeploymentPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ContinuousDeploymentPolicy = de_ContinuousDeploymentPolicy(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlUpdateDistributionCommand
 */
export const de_UpdateDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDistributionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.Distribution = de_Distribution(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlUpdateDistributionWithStagingConfigCommand
 */
export const de_UpdateDistributionWithStagingConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDistributionWithStagingConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.Distribution = de_Distribution(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlUpdateFieldLevelEncryptionConfigCommand
 */
export const de_UpdateFieldLevelEncryptionConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFieldLevelEncryptionConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FieldLevelEncryption = de_FieldLevelEncryption(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlUpdateFieldLevelEncryptionProfileCommand
 */
export const de_UpdateFieldLevelEncryptionProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFieldLevelEncryptionProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FieldLevelEncryptionProfile = de_FieldLevelEncryptionProfile(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlUpdateFunctionCommand
 */
export const de_UpdateFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_et]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FunctionSummary = de_FunctionSummary(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlUpdateKeyGroupCommand
 */
export const de_UpdateKeyGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateKeyGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.KeyGroup = de_KeyGroup(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlUpdateKeyValueStoreCommand
 */
export const de_UpdateKeyValueStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateKeyValueStoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.KeyValueStore = de_KeyValueStore(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlUpdateOriginAccessControlCommand
 */
export const de_UpdateOriginAccessControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOriginAccessControlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.OriginAccessControl = de_OriginAccessControl(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlUpdateOriginRequestPolicyCommand
 */
export const de_UpdateOriginRequestPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOriginRequestPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.OriginRequestPolicy = de_OriginRequestPolicy(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlUpdatePublicKeyCommand
 */
export const de_UpdatePublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePublicKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.PublicKey = de_PublicKey(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlUpdateRealtimeLogConfigCommand
 */
export const de_UpdateRealtimeLogConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRealtimeLogConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_RLC] != null) {
    contents[_RLC] = de_RealtimeLogConfig(data[_RLC], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlUpdateResponseHeadersPolicyCommand
 */
export const de_UpdateResponseHeadersPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResponseHeadersPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ResponseHeadersPolicy = de_ResponseHeadersPolicy(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlUpdateStreamingDistributionCommand
 */
export const de_UpdateStreamingDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStreamingDistributionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_ET]: [, output.headers[_e]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.StreamingDistribution = de_StreamingDistribution(data, context);
  return contents;
};

/**
 * deserialize_Aws_restXmlCommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "IllegalUpdate":
    case "com.amazonaws.cloudfront#IllegalUpdate":
      throw await de_IllegalUpdateRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "NoSuchDistribution":
    case "com.amazonaws.cloudfront#NoSuchDistribution":
      throw await de_NoSuchDistributionRes(parsedOutput, context);
    case "TooManyDistributionCNAMEs":
    case "com.amazonaws.cloudfront#TooManyDistributionCNAMEs":
      throw await de_TooManyDistributionCNAMEsRes(parsedOutput, context);
    case "CNAMEAlreadyExists":
    case "com.amazonaws.cloudfront#CNAMEAlreadyExists":
      throw await de_CNAMEAlreadyExistsRes(parsedOutput, context);
    case "DistributionAlreadyExists":
    case "com.amazonaws.cloudfront#DistributionAlreadyExists":
      throw await de_DistributionAlreadyExistsRes(parsedOutput, context);
    case "IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
    case "com.amazonaws.cloudfront#IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
      throw await de_IllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorRes(parsedOutput, context);
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await de_InconsistentQuantitiesRes(parsedOutput, context);
    case "InvalidDefaultRootObject":
    case "com.amazonaws.cloudfront#InvalidDefaultRootObject":
      throw await de_InvalidDefaultRootObjectRes(parsedOutput, context);
    case "InvalidErrorCode":
    case "com.amazonaws.cloudfront#InvalidErrorCode":
      throw await de_InvalidErrorCodeRes(parsedOutput, context);
    case "InvalidForwardCookies":
    case "com.amazonaws.cloudfront#InvalidForwardCookies":
      throw await de_InvalidForwardCookiesRes(parsedOutput, context);
    case "InvalidFunctionAssociation":
    case "com.amazonaws.cloudfront#InvalidFunctionAssociation":
      throw await de_InvalidFunctionAssociationRes(parsedOutput, context);
    case "InvalidGeoRestrictionParameter":
    case "com.amazonaws.cloudfront#InvalidGeoRestrictionParameter":
      throw await de_InvalidGeoRestrictionParameterRes(parsedOutput, context);
    case "InvalidHeadersForS3Origin":
    case "com.amazonaws.cloudfront#InvalidHeadersForS3Origin":
      throw await de_InvalidHeadersForS3OriginRes(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
    case "InvalidLambdaFunctionAssociation":
    case "com.amazonaws.cloudfront#InvalidLambdaFunctionAssociation":
      throw await de_InvalidLambdaFunctionAssociationRes(parsedOutput, context);
    case "InvalidLocationCode":
    case "com.amazonaws.cloudfront#InvalidLocationCode":
      throw await de_InvalidLocationCodeRes(parsedOutput, context);
    case "InvalidMinimumProtocolVersion":
    case "com.amazonaws.cloudfront#InvalidMinimumProtocolVersion":
      throw await de_InvalidMinimumProtocolVersionRes(parsedOutput, context);
    case "InvalidOrigin":
    case "com.amazonaws.cloudfront#InvalidOrigin":
      throw await de_InvalidOriginRes(parsedOutput, context);
    case "InvalidOriginAccessControl":
    case "com.amazonaws.cloudfront#InvalidOriginAccessControl":
      throw await de_InvalidOriginAccessControlRes(parsedOutput, context);
    case "InvalidOriginAccessIdentity":
    case "com.amazonaws.cloudfront#InvalidOriginAccessIdentity":
      throw await de_InvalidOriginAccessIdentityRes(parsedOutput, context);
    case "InvalidOriginKeepaliveTimeout":
    case "com.amazonaws.cloudfront#InvalidOriginKeepaliveTimeout":
      throw await de_InvalidOriginKeepaliveTimeoutRes(parsedOutput, context);
    case "InvalidOriginReadTimeout":
    case "com.amazonaws.cloudfront#InvalidOriginReadTimeout":
      throw await de_InvalidOriginReadTimeoutRes(parsedOutput, context);
    case "InvalidProtocolSettings":
    case "com.amazonaws.cloudfront#InvalidProtocolSettings":
      throw await de_InvalidProtocolSettingsRes(parsedOutput, context);
    case "InvalidQueryStringParameters":
    case "com.amazonaws.cloudfront#InvalidQueryStringParameters":
      throw await de_InvalidQueryStringParametersRes(parsedOutput, context);
    case "InvalidRelativePath":
    case "com.amazonaws.cloudfront#InvalidRelativePath":
      throw await de_InvalidRelativePathRes(parsedOutput, context);
    case "InvalidRequiredProtocol":
    case "com.amazonaws.cloudfront#InvalidRequiredProtocol":
      throw await de_InvalidRequiredProtocolRes(parsedOutput, context);
    case "InvalidResponseCode":
    case "com.amazonaws.cloudfront#InvalidResponseCode":
      throw await de_InvalidResponseCodeRes(parsedOutput, context);
    case "InvalidTTLOrder":
    case "com.amazonaws.cloudfront#InvalidTTLOrder":
      throw await de_InvalidTTLOrderRes(parsedOutput, context);
    case "InvalidViewerCertificate":
    case "com.amazonaws.cloudfront#InvalidViewerCertificate":
      throw await de_InvalidViewerCertificateRes(parsedOutput, context);
    case "InvalidWebACLId":
    case "com.amazonaws.cloudfront#InvalidWebACLId":
      throw await de_InvalidWebACLIdRes(parsedOutput, context);
    case "MissingBody":
    case "com.amazonaws.cloudfront#MissingBody":
      throw await de_MissingBodyRes(parsedOutput, context);
    case "NoSuchCachePolicy":
    case "com.amazonaws.cloudfront#NoSuchCachePolicy":
      throw await de_NoSuchCachePolicyRes(parsedOutput, context);
    case "NoSuchFieldLevelEncryptionConfig":
    case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionConfig":
      throw await de_NoSuchFieldLevelEncryptionConfigRes(parsedOutput, context);
    case "NoSuchOrigin":
    case "com.amazonaws.cloudfront#NoSuchOrigin":
      throw await de_NoSuchOriginRes(parsedOutput, context);
    case "NoSuchOriginRequestPolicy":
    case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
      throw await de_NoSuchOriginRequestPolicyRes(parsedOutput, context);
    case "NoSuchRealtimeLogConfig":
    case "com.amazonaws.cloudfront#NoSuchRealtimeLogConfig":
      throw await de_NoSuchRealtimeLogConfigRes(parsedOutput, context);
    case "NoSuchResponseHeadersPolicy":
    case "com.amazonaws.cloudfront#NoSuchResponseHeadersPolicy":
      throw await de_NoSuchResponseHeadersPolicyRes(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await de_PreconditionFailedRes(parsedOutput, context);
    case "RealtimeLogConfigOwnerMismatch":
    case "com.amazonaws.cloudfront#RealtimeLogConfigOwnerMismatch":
      throw await de_RealtimeLogConfigOwnerMismatchRes(parsedOutput, context);
    case "TooManyCacheBehaviors":
    case "com.amazonaws.cloudfront#TooManyCacheBehaviors":
      throw await de_TooManyCacheBehaviorsRes(parsedOutput, context);
    case "TooManyCertificates":
    case "com.amazonaws.cloudfront#TooManyCertificates":
      throw await de_TooManyCertificatesRes(parsedOutput, context);
    case "TooManyCookieNamesInWhiteList":
    case "com.amazonaws.cloudfront#TooManyCookieNamesInWhiteList":
      throw await de_TooManyCookieNamesInWhiteListRes(parsedOutput, context);
    case "TooManyDistributions":
    case "com.amazonaws.cloudfront#TooManyDistributions":
      throw await de_TooManyDistributionsRes(parsedOutput, context);
    case "TooManyDistributionsAssociatedToCachePolicy":
    case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToCachePolicy":
      throw await de_TooManyDistributionsAssociatedToCachePolicyRes(parsedOutput, context);
    case "TooManyDistributionsAssociatedToFieldLevelEncryptionConfig":
    case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToFieldLevelEncryptionConfig":
      throw await de_TooManyDistributionsAssociatedToFieldLevelEncryptionConfigRes(parsedOutput, context);
    case "TooManyDistributionsAssociatedToKeyGroup":
    case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToKeyGroup":
      throw await de_TooManyDistributionsAssociatedToKeyGroupRes(parsedOutput, context);
    case "TooManyDistributionsAssociatedToOriginAccessControl":
    case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToOriginAccessControl":
      throw await de_TooManyDistributionsAssociatedToOriginAccessControlRes(parsedOutput, context);
    case "TooManyDistributionsAssociatedToOriginRequestPolicy":
    case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToOriginRequestPolicy":
      throw await de_TooManyDistributionsAssociatedToOriginRequestPolicyRes(parsedOutput, context);
    case "TooManyDistributionsAssociatedToResponseHeadersPolicy":
    case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToResponseHeadersPolicy":
      throw await de_TooManyDistributionsAssociatedToResponseHeadersPolicyRes(parsedOutput, context);
    case "TooManyDistributionsWithFunctionAssociations":
    case "com.amazonaws.cloudfront#TooManyDistributionsWithFunctionAssociations":
      throw await de_TooManyDistributionsWithFunctionAssociationsRes(parsedOutput, context);
    case "TooManyDistributionsWithLambdaAssociations":
    case "com.amazonaws.cloudfront#TooManyDistributionsWithLambdaAssociations":
      throw await de_TooManyDistributionsWithLambdaAssociationsRes(parsedOutput, context);
    case "TooManyDistributionsWithSingleFunctionARN":
    case "com.amazonaws.cloudfront#TooManyDistributionsWithSingleFunctionARN":
      throw await de_TooManyDistributionsWithSingleFunctionARNRes(parsedOutput, context);
    case "TooManyFunctionAssociations":
    case "com.amazonaws.cloudfront#TooManyFunctionAssociations":
      throw await de_TooManyFunctionAssociationsRes(parsedOutput, context);
    case "TooManyHeadersInForwardedValues":
    case "com.amazonaws.cloudfront#TooManyHeadersInForwardedValues":
      throw await de_TooManyHeadersInForwardedValuesRes(parsedOutput, context);
    case "TooManyKeyGroupsAssociatedToDistribution":
    case "com.amazonaws.cloudfront#TooManyKeyGroupsAssociatedToDistribution":
      throw await de_TooManyKeyGroupsAssociatedToDistributionRes(parsedOutput, context);
    case "TooManyLambdaFunctionAssociations":
    case "com.amazonaws.cloudfront#TooManyLambdaFunctionAssociations":
      throw await de_TooManyLambdaFunctionAssociationsRes(parsedOutput, context);
    case "TooManyOriginCustomHeaders":
    case "com.amazonaws.cloudfront#TooManyOriginCustomHeaders":
      throw await de_TooManyOriginCustomHeadersRes(parsedOutput, context);
    case "TooManyOriginGroupsPerDistribution":
    case "com.amazonaws.cloudfront#TooManyOriginGroupsPerDistribution":
      throw await de_TooManyOriginGroupsPerDistributionRes(parsedOutput, context);
    case "TooManyOrigins":
    case "com.amazonaws.cloudfront#TooManyOrigins":
      throw await de_TooManyOriginsRes(parsedOutput, context);
    case "TooManyQueryStringParameters":
    case "com.amazonaws.cloudfront#TooManyQueryStringParameters":
      throw await de_TooManyQueryStringParametersRes(parsedOutput, context);
    case "TooManyTrustedSigners":
    case "com.amazonaws.cloudfront#TooManyTrustedSigners":
      throw await de_TooManyTrustedSignersRes(parsedOutput, context);
    case "TrustedKeyGroupDoesNotExist":
    case "com.amazonaws.cloudfront#TrustedKeyGroupDoesNotExist":
      throw await de_TrustedKeyGroupDoesNotExistRes(parsedOutput, context);
    case "TrustedSignerDoesNotExist":
    case "com.amazonaws.cloudfront#TrustedSignerDoesNotExist":
      throw await de_TrustedSignerDoesNotExistRes(parsedOutput, context);
    case "CachePolicyAlreadyExists":
    case "com.amazonaws.cloudfront#CachePolicyAlreadyExists":
      throw await de_CachePolicyAlreadyExistsRes(parsedOutput, context);
    case "TooManyCachePolicies":
    case "com.amazonaws.cloudfront#TooManyCachePolicies":
      throw await de_TooManyCachePoliciesRes(parsedOutput, context);
    case "TooManyCookiesInCachePolicy":
    case "com.amazonaws.cloudfront#TooManyCookiesInCachePolicy":
      throw await de_TooManyCookiesInCachePolicyRes(parsedOutput, context);
    case "TooManyHeadersInCachePolicy":
    case "com.amazonaws.cloudfront#TooManyHeadersInCachePolicy":
      throw await de_TooManyHeadersInCachePolicyRes(parsedOutput, context);
    case "TooManyQueryStringsInCachePolicy":
    case "com.amazonaws.cloudfront#TooManyQueryStringsInCachePolicy":
      throw await de_TooManyQueryStringsInCachePolicyRes(parsedOutput, context);
    case "CloudFrontOriginAccessIdentityAlreadyExists":
    case "com.amazonaws.cloudfront#CloudFrontOriginAccessIdentityAlreadyExists":
      throw await de_CloudFrontOriginAccessIdentityAlreadyExistsRes(parsedOutput, context);
    case "TooManyCloudFrontOriginAccessIdentities":
    case "com.amazonaws.cloudfront#TooManyCloudFrontOriginAccessIdentities":
      throw await de_TooManyCloudFrontOriginAccessIdentitiesRes(parsedOutput, context);
    case "ContinuousDeploymentPolicyAlreadyExists":
    case "com.amazonaws.cloudfront#ContinuousDeploymentPolicyAlreadyExists":
      throw await de_ContinuousDeploymentPolicyAlreadyExistsRes(parsedOutput, context);
    case "StagingDistributionInUse":
    case "com.amazonaws.cloudfront#StagingDistributionInUse":
      throw await de_StagingDistributionInUseRes(parsedOutput, context);
    case "TooManyContinuousDeploymentPolicies":
    case "com.amazonaws.cloudfront#TooManyContinuousDeploymentPolicies":
      throw await de_TooManyContinuousDeploymentPoliciesRes(parsedOutput, context);
    case "ContinuousDeploymentPolicyInUse":
    case "com.amazonaws.cloudfront#ContinuousDeploymentPolicyInUse":
      throw await de_ContinuousDeploymentPolicyInUseRes(parsedOutput, context);
    case "IllegalOriginAccessConfiguration":
    case "com.amazonaws.cloudfront#IllegalOriginAccessConfiguration":
      throw await de_IllegalOriginAccessConfigurationRes(parsedOutput, context);
    case "InvalidDomainNameForOriginAccessControl":
    case "com.amazonaws.cloudfront#InvalidDomainNameForOriginAccessControl":
      throw await de_InvalidDomainNameForOriginAccessControlRes(parsedOutput, context);
    case "NoSuchContinuousDeploymentPolicy":
    case "com.amazonaws.cloudfront#NoSuchContinuousDeploymentPolicy":
      throw await de_NoSuchContinuousDeploymentPolicyRes(parsedOutput, context);
    case "InvalidTagging":
    case "com.amazonaws.cloudfront#InvalidTagging":
      throw await de_InvalidTaggingRes(parsedOutput, context);
    case "FieldLevelEncryptionConfigAlreadyExists":
    case "com.amazonaws.cloudfront#FieldLevelEncryptionConfigAlreadyExists":
      throw await de_FieldLevelEncryptionConfigAlreadyExistsRes(parsedOutput, context);
    case "NoSuchFieldLevelEncryptionProfile":
    case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionProfile":
      throw await de_NoSuchFieldLevelEncryptionProfileRes(parsedOutput, context);
    case "QueryArgProfileEmpty":
    case "com.amazonaws.cloudfront#QueryArgProfileEmpty":
      throw await de_QueryArgProfileEmptyRes(parsedOutput, context);
    case "TooManyFieldLevelEncryptionConfigs":
    case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionConfigs":
      throw await de_TooManyFieldLevelEncryptionConfigsRes(parsedOutput, context);
    case "TooManyFieldLevelEncryptionContentTypeProfiles":
    case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionContentTypeProfiles":
      throw await de_TooManyFieldLevelEncryptionContentTypeProfilesRes(parsedOutput, context);
    case "TooManyFieldLevelEncryptionQueryArgProfiles":
    case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionQueryArgProfiles":
      throw await de_TooManyFieldLevelEncryptionQueryArgProfilesRes(parsedOutput, context);
    case "FieldLevelEncryptionProfileAlreadyExists":
    case "com.amazonaws.cloudfront#FieldLevelEncryptionProfileAlreadyExists":
      throw await de_FieldLevelEncryptionProfileAlreadyExistsRes(parsedOutput, context);
    case "FieldLevelEncryptionProfileSizeExceeded":
    case "com.amazonaws.cloudfront#FieldLevelEncryptionProfileSizeExceeded":
      throw await de_FieldLevelEncryptionProfileSizeExceededRes(parsedOutput, context);
    case "NoSuchPublicKey":
    case "com.amazonaws.cloudfront#NoSuchPublicKey":
      throw await de_NoSuchPublicKeyRes(parsedOutput, context);
    case "TooManyFieldLevelEncryptionEncryptionEntities":
    case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionEncryptionEntities":
      throw await de_TooManyFieldLevelEncryptionEncryptionEntitiesRes(parsedOutput, context);
    case "TooManyFieldLevelEncryptionFieldPatterns":
    case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionFieldPatterns":
      throw await de_TooManyFieldLevelEncryptionFieldPatternsRes(parsedOutput, context);
    case "TooManyFieldLevelEncryptionProfiles":
    case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionProfiles":
      throw await de_TooManyFieldLevelEncryptionProfilesRes(parsedOutput, context);
    case "FunctionAlreadyExists":
    case "com.amazonaws.cloudfront#FunctionAlreadyExists":
      throw await de_FunctionAlreadyExistsRes(parsedOutput, context);
    case "FunctionSizeLimitExceeded":
    case "com.amazonaws.cloudfront#FunctionSizeLimitExceeded":
      throw await de_FunctionSizeLimitExceededRes(parsedOutput, context);
    case "TooManyFunctions":
    case "com.amazonaws.cloudfront#TooManyFunctions":
      throw await de_TooManyFunctionsRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.cloudfront#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
    case "BatchTooLarge":
    case "com.amazonaws.cloudfront#BatchTooLarge":
      throw await de_BatchTooLargeRes(parsedOutput, context);
    case "TooManyInvalidationsInProgress":
    case "com.amazonaws.cloudfront#TooManyInvalidationsInProgress":
      throw await de_TooManyInvalidationsInProgressRes(parsedOutput, context);
    case "KeyGroupAlreadyExists":
    case "com.amazonaws.cloudfront#KeyGroupAlreadyExists":
      throw await de_KeyGroupAlreadyExistsRes(parsedOutput, context);
    case "TooManyKeyGroups":
    case "com.amazonaws.cloudfront#TooManyKeyGroups":
      throw await de_TooManyKeyGroupsRes(parsedOutput, context);
    case "TooManyPublicKeysInKeyGroup":
    case "com.amazonaws.cloudfront#TooManyPublicKeysInKeyGroup":
      throw await de_TooManyPublicKeysInKeyGroupRes(parsedOutput, context);
    case "EntityAlreadyExists":
    case "com.amazonaws.cloudfront#EntityAlreadyExists":
      throw await de_EntityAlreadyExistsRes(parsedOutput, context);
    case "EntityLimitExceeded":
    case "com.amazonaws.cloudfront#EntityLimitExceeded":
      throw await de_EntityLimitExceededRes(parsedOutput, context);
    case "EntitySizeLimitExceeded":
    case "com.amazonaws.cloudfront#EntitySizeLimitExceeded":
      throw await de_EntitySizeLimitExceededRes(parsedOutput, context);
    case "MonitoringSubscriptionAlreadyExists":
    case "com.amazonaws.cloudfront#MonitoringSubscriptionAlreadyExists":
      throw await de_MonitoringSubscriptionAlreadyExistsRes(parsedOutput, context);
    case "OriginAccessControlAlreadyExists":
    case "com.amazonaws.cloudfront#OriginAccessControlAlreadyExists":
      throw await de_OriginAccessControlAlreadyExistsRes(parsedOutput, context);
    case "TooManyOriginAccessControls":
    case "com.amazonaws.cloudfront#TooManyOriginAccessControls":
      throw await de_TooManyOriginAccessControlsRes(parsedOutput, context);
    case "OriginRequestPolicyAlreadyExists":
    case "com.amazonaws.cloudfront#OriginRequestPolicyAlreadyExists":
      throw await de_OriginRequestPolicyAlreadyExistsRes(parsedOutput, context);
    case "TooManyCookiesInOriginRequestPolicy":
    case "com.amazonaws.cloudfront#TooManyCookiesInOriginRequestPolicy":
      throw await de_TooManyCookiesInOriginRequestPolicyRes(parsedOutput, context);
    case "TooManyHeadersInOriginRequestPolicy":
    case "com.amazonaws.cloudfront#TooManyHeadersInOriginRequestPolicy":
      throw await de_TooManyHeadersInOriginRequestPolicyRes(parsedOutput, context);
    case "TooManyOriginRequestPolicies":
    case "com.amazonaws.cloudfront#TooManyOriginRequestPolicies":
      throw await de_TooManyOriginRequestPoliciesRes(parsedOutput, context);
    case "TooManyQueryStringsInOriginRequestPolicy":
    case "com.amazonaws.cloudfront#TooManyQueryStringsInOriginRequestPolicy":
      throw await de_TooManyQueryStringsInOriginRequestPolicyRes(parsedOutput, context);
    case "PublicKeyAlreadyExists":
    case "com.amazonaws.cloudfront#PublicKeyAlreadyExists":
      throw await de_PublicKeyAlreadyExistsRes(parsedOutput, context);
    case "TooManyPublicKeys":
    case "com.amazonaws.cloudfront#TooManyPublicKeys":
      throw await de_TooManyPublicKeysRes(parsedOutput, context);
    case "RealtimeLogConfigAlreadyExists":
    case "com.amazonaws.cloudfront#RealtimeLogConfigAlreadyExists":
      throw await de_RealtimeLogConfigAlreadyExistsRes(parsedOutput, context);
    case "TooManyRealtimeLogConfigs":
    case "com.amazonaws.cloudfront#TooManyRealtimeLogConfigs":
      throw await de_TooManyRealtimeLogConfigsRes(parsedOutput, context);
    case "ResponseHeadersPolicyAlreadyExists":
    case "com.amazonaws.cloudfront#ResponseHeadersPolicyAlreadyExists":
      throw await de_ResponseHeadersPolicyAlreadyExistsRes(parsedOutput, context);
    case "TooLongCSPInResponseHeadersPolicy":
    case "com.amazonaws.cloudfront#TooLongCSPInResponseHeadersPolicy":
      throw await de_TooLongCSPInResponseHeadersPolicyRes(parsedOutput, context);
    case "TooManyCustomHeadersInResponseHeadersPolicy":
    case "com.amazonaws.cloudfront#TooManyCustomHeadersInResponseHeadersPolicy":
      throw await de_TooManyCustomHeadersInResponseHeadersPolicyRes(parsedOutput, context);
    case "TooManyRemoveHeadersInResponseHeadersPolicy":
    case "com.amazonaws.cloudfront#TooManyRemoveHeadersInResponseHeadersPolicy":
      throw await de_TooManyRemoveHeadersInResponseHeadersPolicyRes(parsedOutput, context);
    case "TooManyResponseHeadersPolicies":
    case "com.amazonaws.cloudfront#TooManyResponseHeadersPolicies":
      throw await de_TooManyResponseHeadersPoliciesRes(parsedOutput, context);
    case "StreamingDistributionAlreadyExists":
    case "com.amazonaws.cloudfront#StreamingDistributionAlreadyExists":
      throw await de_StreamingDistributionAlreadyExistsRes(parsedOutput, context);
    case "TooManyStreamingDistributionCNAMEs":
    case "com.amazonaws.cloudfront#TooManyStreamingDistributionCNAMEs":
      throw await de_TooManyStreamingDistributionCNAMEsRes(parsedOutput, context);
    case "TooManyStreamingDistributions":
    case "com.amazonaws.cloudfront#TooManyStreamingDistributions":
      throw await de_TooManyStreamingDistributionsRes(parsedOutput, context);
    case "CachePolicyInUse":
    case "com.amazonaws.cloudfront#CachePolicyInUse":
      throw await de_CachePolicyInUseRes(parsedOutput, context);
    case "IllegalDelete":
    case "com.amazonaws.cloudfront#IllegalDelete":
      throw await de_IllegalDeleteRes(parsedOutput, context);
    case "CloudFrontOriginAccessIdentityInUse":
    case "com.amazonaws.cloudfront#CloudFrontOriginAccessIdentityInUse":
      throw await de_CloudFrontOriginAccessIdentityInUseRes(parsedOutput, context);
    case "NoSuchCloudFrontOriginAccessIdentity":
    case "com.amazonaws.cloudfront#NoSuchCloudFrontOriginAccessIdentity":
      throw await de_NoSuchCloudFrontOriginAccessIdentityRes(parsedOutput, context);
    case "DistributionNotDisabled":
    case "com.amazonaws.cloudfront#DistributionNotDisabled":
      throw await de_DistributionNotDisabledRes(parsedOutput, context);
    case "FieldLevelEncryptionConfigInUse":
    case "com.amazonaws.cloudfront#FieldLevelEncryptionConfigInUse":
      throw await de_FieldLevelEncryptionConfigInUseRes(parsedOutput, context);
    case "FieldLevelEncryptionProfileInUse":
    case "com.amazonaws.cloudfront#FieldLevelEncryptionProfileInUse":
      throw await de_FieldLevelEncryptionProfileInUseRes(parsedOutput, context);
    case "FunctionInUse":
    case "com.amazonaws.cloudfront#FunctionInUse":
      throw await de_FunctionInUseRes(parsedOutput, context);
    case "NoSuchFunctionExists":
    case "com.amazonaws.cloudfront#NoSuchFunctionExists":
      throw await de_NoSuchFunctionExistsRes(parsedOutput, context);
    case "NoSuchResource":
    case "com.amazonaws.cloudfront#NoSuchResource":
      throw await de_NoSuchResourceRes(parsedOutput, context);
    case "ResourceInUse":
    case "com.amazonaws.cloudfront#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "CannotDeleteEntityWhileInUse":
    case "com.amazonaws.cloudfront#CannotDeleteEntityWhileInUse":
      throw await de_CannotDeleteEntityWhileInUseRes(parsedOutput, context);
    case "EntityNotFound":
    case "com.amazonaws.cloudfront#EntityNotFound":
      throw await de_EntityNotFoundRes(parsedOutput, context);
    case "NoSuchMonitoringSubscription":
    case "com.amazonaws.cloudfront#NoSuchMonitoringSubscription":
      throw await de_NoSuchMonitoringSubscriptionRes(parsedOutput, context);
    case "NoSuchOriginAccessControl":
    case "com.amazonaws.cloudfront#NoSuchOriginAccessControl":
      throw await de_NoSuchOriginAccessControlRes(parsedOutput, context);
    case "OriginAccessControlInUse":
    case "com.amazonaws.cloudfront#OriginAccessControlInUse":
      throw await de_OriginAccessControlInUseRes(parsedOutput, context);
    case "OriginRequestPolicyInUse":
    case "com.amazonaws.cloudfront#OriginRequestPolicyInUse":
      throw await de_OriginRequestPolicyInUseRes(parsedOutput, context);
    case "PublicKeyInUse":
    case "com.amazonaws.cloudfront#PublicKeyInUse":
      throw await de_PublicKeyInUseRes(parsedOutput, context);
    case "RealtimeLogConfigInUse":
    case "com.amazonaws.cloudfront#RealtimeLogConfigInUse":
      throw await de_RealtimeLogConfigInUseRes(parsedOutput, context);
    case "ResponseHeadersPolicyInUse":
    case "com.amazonaws.cloudfront#ResponseHeadersPolicyInUse":
      throw await de_ResponseHeadersPolicyInUseRes(parsedOutput, context);
    case "NoSuchStreamingDistribution":
    case "com.amazonaws.cloudfront#NoSuchStreamingDistribution":
      throw await de_NoSuchStreamingDistributionRes(parsedOutput, context);
    case "StreamingDistributionNotDisabled":
    case "com.amazonaws.cloudfront#StreamingDistributionNotDisabled":
      throw await de_StreamingDistributionNotDisabledRes(parsedOutput, context);
    case "NoSuchInvalidation":
    case "com.amazonaws.cloudfront#NoSuchInvalidation":
      throw await de_NoSuchInvalidationRes(parsedOutput, context);
    case "TestFunctionFailed":
    case "com.amazonaws.cloudfront#TestFunctionFailed":
      throw await de_TestFunctionFailedRes(parsedOutput, context);
    case "CannotChangeImmutablePublicKeyFields":
    case "com.amazonaws.cloudfront#CannotChangeImmutablePublicKeyFields":
      throw await de_CannotChangeImmutablePublicKeyFieldsRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restXmlAccessDeniedRes
 */
const de_AccessDeniedRes = async (parsedOutput: any, context: __SerdeContext): Promise<AccessDenied> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new AccessDenied({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlBatchTooLargeRes
 */
const de_BatchTooLargeRes = async (parsedOutput: any, context: __SerdeContext): Promise<BatchTooLarge> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new BatchTooLarge({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlCachePolicyAlreadyExistsRes
 */
const de_CachePolicyAlreadyExistsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CachePolicyAlreadyExists> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new CachePolicyAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlCachePolicyInUseRes
 */
const de_CachePolicyInUseRes = async (parsedOutput: any, context: __SerdeContext): Promise<CachePolicyInUse> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new CachePolicyInUse({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlCannotChangeImmutablePublicKeyFieldsRes
 */
const de_CannotChangeImmutablePublicKeyFieldsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CannotChangeImmutablePublicKeyFields> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new CannotChangeImmutablePublicKeyFields({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlCannotDeleteEntityWhileInUseRes
 */
const de_CannotDeleteEntityWhileInUseRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CannotDeleteEntityWhileInUse> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new CannotDeleteEntityWhileInUse({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlCloudFrontOriginAccessIdentityAlreadyExistsRes
 */
const de_CloudFrontOriginAccessIdentityAlreadyExistsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudFrontOriginAccessIdentityAlreadyExists> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new CloudFrontOriginAccessIdentityAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlCloudFrontOriginAccessIdentityInUseRes
 */
const de_CloudFrontOriginAccessIdentityInUseRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudFrontOriginAccessIdentityInUse> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new CloudFrontOriginAccessIdentityInUse({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlCNAMEAlreadyExistsRes
 */
const de_CNAMEAlreadyExistsRes = async (parsedOutput: any, context: __SerdeContext): Promise<CNAMEAlreadyExists> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new CNAMEAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlContinuousDeploymentPolicyAlreadyExistsRes
 */
const de_ContinuousDeploymentPolicyAlreadyExistsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ContinuousDeploymentPolicyAlreadyExists> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new ContinuousDeploymentPolicyAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlContinuousDeploymentPolicyInUseRes
 */
const de_ContinuousDeploymentPolicyInUseRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ContinuousDeploymentPolicyInUse> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new ContinuousDeploymentPolicyInUse({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlDistributionAlreadyExistsRes
 */
const de_DistributionAlreadyExistsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DistributionAlreadyExists> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new DistributionAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlDistributionNotDisabledRes
 */
const de_DistributionNotDisabledRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DistributionNotDisabled> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new DistributionNotDisabled({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlEntityAlreadyExistsRes
 */
const de_EntityAlreadyExistsRes = async (parsedOutput: any, context: __SerdeContext): Promise<EntityAlreadyExists> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new EntityAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlEntityLimitExceededRes
 */
const de_EntityLimitExceededRes = async (parsedOutput: any, context: __SerdeContext): Promise<EntityLimitExceeded> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new EntityLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlEntityNotFoundRes
 */
const de_EntityNotFoundRes = async (parsedOutput: any, context: __SerdeContext): Promise<EntityNotFound> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new EntityNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlEntitySizeLimitExceededRes
 */
const de_EntitySizeLimitExceededRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EntitySizeLimitExceeded> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new EntitySizeLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlFieldLevelEncryptionConfigAlreadyExistsRes
 */
const de_FieldLevelEncryptionConfigAlreadyExistsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FieldLevelEncryptionConfigAlreadyExists> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new FieldLevelEncryptionConfigAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlFieldLevelEncryptionConfigInUseRes
 */
const de_FieldLevelEncryptionConfigInUseRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FieldLevelEncryptionConfigInUse> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new FieldLevelEncryptionConfigInUse({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlFieldLevelEncryptionProfileAlreadyExistsRes
 */
const de_FieldLevelEncryptionProfileAlreadyExistsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FieldLevelEncryptionProfileAlreadyExists> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new FieldLevelEncryptionProfileAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlFieldLevelEncryptionProfileInUseRes
 */
const de_FieldLevelEncryptionProfileInUseRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FieldLevelEncryptionProfileInUse> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new FieldLevelEncryptionProfileInUse({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlFieldLevelEncryptionProfileSizeExceededRes
 */
const de_FieldLevelEncryptionProfileSizeExceededRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FieldLevelEncryptionProfileSizeExceeded> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new FieldLevelEncryptionProfileSizeExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlFunctionAlreadyExistsRes
 */
const de_FunctionAlreadyExistsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FunctionAlreadyExists> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new FunctionAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlFunctionInUseRes
 */
const de_FunctionInUseRes = async (parsedOutput: any, context: __SerdeContext): Promise<FunctionInUse> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new FunctionInUse({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlFunctionSizeLimitExceededRes
 */
const de_FunctionSizeLimitExceededRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FunctionSizeLimitExceeded> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new FunctionSizeLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlIllegalDeleteRes
 */
const de_IllegalDeleteRes = async (parsedOutput: any, context: __SerdeContext): Promise<IllegalDelete> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new IllegalDelete({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlIllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorRes
 */
const de_IllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlIllegalOriginAccessConfigurationRes
 */
const de_IllegalOriginAccessConfigurationRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IllegalOriginAccessConfiguration> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new IllegalOriginAccessConfiguration({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlIllegalUpdateRes
 */
const de_IllegalUpdateRes = async (parsedOutput: any, context: __SerdeContext): Promise<IllegalUpdate> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new IllegalUpdate({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInconsistentQuantitiesRes
 */
const de_InconsistentQuantitiesRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InconsistentQuantities> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new InconsistentQuantities({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidArgumentRes
 */
const de_InvalidArgumentRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidArgument> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new InvalidArgument({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidDefaultRootObjectRes
 */
const de_InvalidDefaultRootObjectRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDefaultRootObject> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new InvalidDefaultRootObject({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidDomainNameForOriginAccessControlRes
 */
const de_InvalidDomainNameForOriginAccessControlRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDomainNameForOriginAccessControl> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new InvalidDomainNameForOriginAccessControl({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidErrorCodeRes
 */
const de_InvalidErrorCodeRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidErrorCode> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new InvalidErrorCode({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidForwardCookiesRes
 */
const de_InvalidForwardCookiesRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidForwardCookies> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new InvalidForwardCookies({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidFunctionAssociationRes
 */
const de_InvalidFunctionAssociationRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidFunctionAssociation> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new InvalidFunctionAssociation({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidGeoRestrictionParameterRes
 */
const de_InvalidGeoRestrictionParameterRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGeoRestrictionParameter> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new InvalidGeoRestrictionParameter({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidHeadersForS3OriginRes
 */
const de_InvalidHeadersForS3OriginRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidHeadersForS3Origin> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new InvalidHeadersForS3Origin({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidIfMatchVersionRes
 */
const de_InvalidIfMatchVersionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidIfMatchVersion> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new InvalidIfMatchVersion({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidLambdaFunctionAssociationRes
 */
const de_InvalidLambdaFunctionAssociationRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLambdaFunctionAssociation> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new InvalidLambdaFunctionAssociation({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidLocationCodeRes
 */
const de_InvalidLocationCodeRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidLocationCode> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new InvalidLocationCode({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidMinimumProtocolVersionRes
 */
const de_InvalidMinimumProtocolVersionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidMinimumProtocolVersion> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new InvalidMinimumProtocolVersion({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidOriginRes
 */
const de_InvalidOriginRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidOrigin> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new InvalidOrigin({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidOriginAccessControlRes
 */
const de_InvalidOriginAccessControlRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOriginAccessControl> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new InvalidOriginAccessControl({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidOriginAccessIdentityRes
 */
const de_InvalidOriginAccessIdentityRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOriginAccessIdentity> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new InvalidOriginAccessIdentity({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidOriginKeepaliveTimeoutRes
 */
const de_InvalidOriginKeepaliveTimeoutRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOriginKeepaliveTimeout> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new InvalidOriginKeepaliveTimeout({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidOriginReadTimeoutRes
 */
const de_InvalidOriginReadTimeoutRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOriginReadTimeout> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new InvalidOriginReadTimeout({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidProtocolSettingsRes
 */
const de_InvalidProtocolSettingsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidProtocolSettings> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new InvalidProtocolSettings({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidQueryStringParametersRes
 */
const de_InvalidQueryStringParametersRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidQueryStringParameters> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new InvalidQueryStringParameters({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidRelativePathRes
 */
const de_InvalidRelativePathRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidRelativePath> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new InvalidRelativePath({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidRequiredProtocolRes
 */
const de_InvalidRequiredProtocolRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequiredProtocol> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new InvalidRequiredProtocol({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidResponseCodeRes
 */
const de_InvalidResponseCodeRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidResponseCode> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new InvalidResponseCode({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidTaggingRes
 */
const de_InvalidTaggingRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidTagging> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new InvalidTagging({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidTTLOrderRes
 */
const de_InvalidTTLOrderRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidTTLOrder> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new InvalidTTLOrder({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidViewerCertificateRes
 */
const de_InvalidViewerCertificateRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidViewerCertificate> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new InvalidViewerCertificate({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidWebACLIdRes
 */
const de_InvalidWebACLIdRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidWebACLId> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new InvalidWebACLId({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlKeyGroupAlreadyExistsRes
 */
const de_KeyGroupAlreadyExistsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KeyGroupAlreadyExists> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new KeyGroupAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlMissingBodyRes
 */
const de_MissingBodyRes = async (parsedOutput: any, context: __SerdeContext): Promise<MissingBody> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new MissingBody({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlMonitoringSubscriptionAlreadyExistsRes
 */
const de_MonitoringSubscriptionAlreadyExistsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MonitoringSubscriptionAlreadyExists> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new MonitoringSubscriptionAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlNoSuchCachePolicyRes
 */
const de_NoSuchCachePolicyRes = async (parsedOutput: any, context: __SerdeContext): Promise<NoSuchCachePolicy> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new NoSuchCachePolicy({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlNoSuchCloudFrontOriginAccessIdentityRes
 */
const de_NoSuchCloudFrontOriginAccessIdentityRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchCloudFrontOriginAccessIdentity> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new NoSuchCloudFrontOriginAccessIdentity({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlNoSuchContinuousDeploymentPolicyRes
 */
const de_NoSuchContinuousDeploymentPolicyRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchContinuousDeploymentPolicy> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new NoSuchContinuousDeploymentPolicy({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlNoSuchDistributionRes
 */
const de_NoSuchDistributionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NoSuchDistribution> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new NoSuchDistribution({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlNoSuchFieldLevelEncryptionConfigRes
 */
const de_NoSuchFieldLevelEncryptionConfigRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchFieldLevelEncryptionConfig> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new NoSuchFieldLevelEncryptionConfig({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlNoSuchFieldLevelEncryptionProfileRes
 */
const de_NoSuchFieldLevelEncryptionProfileRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchFieldLevelEncryptionProfile> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new NoSuchFieldLevelEncryptionProfile({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlNoSuchFunctionExistsRes
 */
const de_NoSuchFunctionExistsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchFunctionExists> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new NoSuchFunctionExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlNoSuchInvalidationRes
 */
const de_NoSuchInvalidationRes = async (parsedOutput: any, context: __SerdeContext): Promise<NoSuchInvalidation> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new NoSuchInvalidation({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlNoSuchMonitoringSubscriptionRes
 */
const de_NoSuchMonitoringSubscriptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchMonitoringSubscription> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new NoSuchMonitoringSubscription({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlNoSuchOriginRes
 */
const de_NoSuchOriginRes = async (parsedOutput: any, context: __SerdeContext): Promise<NoSuchOrigin> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new NoSuchOrigin({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlNoSuchOriginAccessControlRes
 */
const de_NoSuchOriginAccessControlRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchOriginAccessControl> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new NoSuchOriginAccessControl({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlNoSuchOriginRequestPolicyRes
 */
const de_NoSuchOriginRequestPolicyRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchOriginRequestPolicy> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new NoSuchOriginRequestPolicy({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlNoSuchPublicKeyRes
 */
const de_NoSuchPublicKeyRes = async (parsedOutput: any, context: __SerdeContext): Promise<NoSuchPublicKey> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new NoSuchPublicKey({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlNoSuchRealtimeLogConfigRes
 */
const de_NoSuchRealtimeLogConfigRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchRealtimeLogConfig> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new NoSuchRealtimeLogConfig({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlNoSuchResourceRes
 */
const de_NoSuchResourceRes = async (parsedOutput: any, context: __SerdeContext): Promise<NoSuchResource> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new NoSuchResource({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlNoSuchResponseHeadersPolicyRes
 */
const de_NoSuchResponseHeadersPolicyRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchResponseHeadersPolicy> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new NoSuchResponseHeadersPolicy({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlNoSuchStreamingDistributionRes
 */
const de_NoSuchStreamingDistributionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchStreamingDistribution> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new NoSuchStreamingDistribution({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlOriginAccessControlAlreadyExistsRes
 */
const de_OriginAccessControlAlreadyExistsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OriginAccessControlAlreadyExists> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new OriginAccessControlAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlOriginAccessControlInUseRes
 */
const de_OriginAccessControlInUseRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OriginAccessControlInUse> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new OriginAccessControlInUse({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlOriginRequestPolicyAlreadyExistsRes
 */
const de_OriginRequestPolicyAlreadyExistsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OriginRequestPolicyAlreadyExists> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new OriginRequestPolicyAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlOriginRequestPolicyInUseRes
 */
const de_OriginRequestPolicyInUseRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OriginRequestPolicyInUse> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new OriginRequestPolicyInUse({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlPreconditionFailedRes
 */
const de_PreconditionFailedRes = async (parsedOutput: any, context: __SerdeContext): Promise<PreconditionFailed> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new PreconditionFailed({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlPublicKeyAlreadyExistsRes
 */
const de_PublicKeyAlreadyExistsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PublicKeyAlreadyExists> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new PublicKeyAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlPublicKeyInUseRes
 */
const de_PublicKeyInUseRes = async (parsedOutput: any, context: __SerdeContext): Promise<PublicKeyInUse> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new PublicKeyInUse({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlQueryArgProfileEmptyRes
 */
const de_QueryArgProfileEmptyRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<QueryArgProfileEmpty> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new QueryArgProfileEmpty({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlRealtimeLogConfigAlreadyExistsRes
 */
const de_RealtimeLogConfigAlreadyExistsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RealtimeLogConfigAlreadyExists> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new RealtimeLogConfigAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlRealtimeLogConfigInUseRes
 */
const de_RealtimeLogConfigInUseRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RealtimeLogConfigInUse> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new RealtimeLogConfigInUse({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlRealtimeLogConfigOwnerMismatchRes
 */
const de_RealtimeLogConfigOwnerMismatchRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RealtimeLogConfigOwnerMismatch> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new RealtimeLogConfigOwnerMismatch({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlResourceInUseRes
 */
const de_ResourceInUseRes = async (parsedOutput: any, context: __SerdeContext): Promise<ResourceInUse> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new ResourceInUse({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlResponseHeadersPolicyAlreadyExistsRes
 */
const de_ResponseHeadersPolicyAlreadyExistsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResponseHeadersPolicyAlreadyExists> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new ResponseHeadersPolicyAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlResponseHeadersPolicyInUseRes
 */
const de_ResponseHeadersPolicyInUseRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResponseHeadersPolicyInUse> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new ResponseHeadersPolicyInUse({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlStagingDistributionInUseRes
 */
const de_StagingDistributionInUseRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StagingDistributionInUse> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new StagingDistributionInUse({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlStreamingDistributionAlreadyExistsRes
 */
const de_StreamingDistributionAlreadyExistsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StreamingDistributionAlreadyExists> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new StreamingDistributionAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlStreamingDistributionNotDisabledRes
 */
const de_StreamingDistributionNotDisabledRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StreamingDistributionNotDisabled> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new StreamingDistributionNotDisabled({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTestFunctionFailedRes
 */
const de_TestFunctionFailedRes = async (parsedOutput: any, context: __SerdeContext): Promise<TestFunctionFailed> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TestFunctionFailed({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooLongCSPInResponseHeadersPolicyRes
 */
const de_TooLongCSPInResponseHeadersPolicyRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooLongCSPInResponseHeadersPolicy> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooLongCSPInResponseHeadersPolicy({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyCacheBehaviorsRes
 */
const de_TooManyCacheBehaviorsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyCacheBehaviors> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyCacheBehaviors({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyCachePoliciesRes
 */
const de_TooManyCachePoliciesRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyCachePolicies> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyCachePolicies({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyCertificatesRes
 */
const de_TooManyCertificatesRes = async (parsedOutput: any, context: __SerdeContext): Promise<TooManyCertificates> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyCertificates({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyCloudFrontOriginAccessIdentitiesRes
 */
const de_TooManyCloudFrontOriginAccessIdentitiesRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyCloudFrontOriginAccessIdentities> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyCloudFrontOriginAccessIdentities({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyContinuousDeploymentPoliciesRes
 */
const de_TooManyContinuousDeploymentPoliciesRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyContinuousDeploymentPolicies> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyContinuousDeploymentPolicies({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyCookieNamesInWhiteListRes
 */
const de_TooManyCookieNamesInWhiteListRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyCookieNamesInWhiteList> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyCookieNamesInWhiteList({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyCookiesInCachePolicyRes
 */
const de_TooManyCookiesInCachePolicyRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyCookiesInCachePolicy> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyCookiesInCachePolicy({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyCookiesInOriginRequestPolicyRes
 */
const de_TooManyCookiesInOriginRequestPolicyRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyCookiesInOriginRequestPolicy> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyCookiesInOriginRequestPolicy({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyCustomHeadersInResponseHeadersPolicyRes
 */
const de_TooManyCustomHeadersInResponseHeadersPolicyRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyCustomHeadersInResponseHeadersPolicy> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyCustomHeadersInResponseHeadersPolicy({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyDistributionCNAMEsRes
 */
const de_TooManyDistributionCNAMEsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyDistributionCNAMEs> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyDistributionCNAMEs({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyDistributionsRes
 */
const de_TooManyDistributionsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyDistributions> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyDistributions({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyDistributionsAssociatedToCachePolicyRes
 */
const de_TooManyDistributionsAssociatedToCachePolicyRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyDistributionsAssociatedToCachePolicy> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyDistributionsAssociatedToCachePolicy({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyDistributionsAssociatedToFieldLevelEncryptionConfigRes
 */
const de_TooManyDistributionsAssociatedToFieldLevelEncryptionConfigRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyDistributionsAssociatedToFieldLevelEncryptionConfig> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyDistributionsAssociatedToFieldLevelEncryptionConfig({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyDistributionsAssociatedToKeyGroupRes
 */
const de_TooManyDistributionsAssociatedToKeyGroupRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyDistributionsAssociatedToKeyGroup> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyDistributionsAssociatedToKeyGroup({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyDistributionsAssociatedToOriginAccessControlRes
 */
const de_TooManyDistributionsAssociatedToOriginAccessControlRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyDistributionsAssociatedToOriginAccessControl> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyDistributionsAssociatedToOriginAccessControl({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyDistributionsAssociatedToOriginRequestPolicyRes
 */
const de_TooManyDistributionsAssociatedToOriginRequestPolicyRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyDistributionsAssociatedToOriginRequestPolicy> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyDistributionsAssociatedToOriginRequestPolicy({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyDistributionsAssociatedToResponseHeadersPolicyRes
 */
const de_TooManyDistributionsAssociatedToResponseHeadersPolicyRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyDistributionsAssociatedToResponseHeadersPolicy> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyDistributionsAssociatedToResponseHeadersPolicy({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyDistributionsWithFunctionAssociationsRes
 */
const de_TooManyDistributionsWithFunctionAssociationsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyDistributionsWithFunctionAssociations> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyDistributionsWithFunctionAssociations({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyDistributionsWithLambdaAssociationsRes
 */
const de_TooManyDistributionsWithLambdaAssociationsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyDistributionsWithLambdaAssociations> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyDistributionsWithLambdaAssociations({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyDistributionsWithSingleFunctionARNRes
 */
const de_TooManyDistributionsWithSingleFunctionARNRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyDistributionsWithSingleFunctionARN> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyDistributionsWithSingleFunctionARN({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyFieldLevelEncryptionConfigsRes
 */
const de_TooManyFieldLevelEncryptionConfigsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyFieldLevelEncryptionConfigs> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyFieldLevelEncryptionConfigs({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyFieldLevelEncryptionContentTypeProfilesRes
 */
const de_TooManyFieldLevelEncryptionContentTypeProfilesRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyFieldLevelEncryptionContentTypeProfiles> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyFieldLevelEncryptionContentTypeProfiles({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyFieldLevelEncryptionEncryptionEntitiesRes
 */
const de_TooManyFieldLevelEncryptionEncryptionEntitiesRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyFieldLevelEncryptionEncryptionEntities> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyFieldLevelEncryptionEncryptionEntities({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyFieldLevelEncryptionFieldPatternsRes
 */
const de_TooManyFieldLevelEncryptionFieldPatternsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyFieldLevelEncryptionFieldPatterns> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyFieldLevelEncryptionFieldPatterns({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyFieldLevelEncryptionProfilesRes
 */
const de_TooManyFieldLevelEncryptionProfilesRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyFieldLevelEncryptionProfiles> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyFieldLevelEncryptionProfiles({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyFieldLevelEncryptionQueryArgProfilesRes
 */
const de_TooManyFieldLevelEncryptionQueryArgProfilesRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyFieldLevelEncryptionQueryArgProfiles> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyFieldLevelEncryptionQueryArgProfiles({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyFunctionAssociationsRes
 */
const de_TooManyFunctionAssociationsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyFunctionAssociations> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyFunctionAssociations({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyFunctionsRes
 */
const de_TooManyFunctionsRes = async (parsedOutput: any, context: __SerdeContext): Promise<TooManyFunctions> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyFunctions({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyHeadersInCachePolicyRes
 */
const de_TooManyHeadersInCachePolicyRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyHeadersInCachePolicy> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyHeadersInCachePolicy({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyHeadersInForwardedValuesRes
 */
const de_TooManyHeadersInForwardedValuesRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyHeadersInForwardedValues> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyHeadersInForwardedValues({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyHeadersInOriginRequestPolicyRes
 */
const de_TooManyHeadersInOriginRequestPolicyRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyHeadersInOriginRequestPolicy> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyHeadersInOriginRequestPolicy({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyInvalidationsInProgressRes
 */
const de_TooManyInvalidationsInProgressRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyInvalidationsInProgress> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyInvalidationsInProgress({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyKeyGroupsRes
 */
const de_TooManyKeyGroupsRes = async (parsedOutput: any, context: __SerdeContext): Promise<TooManyKeyGroups> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyKeyGroups({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyKeyGroupsAssociatedToDistributionRes
 */
const de_TooManyKeyGroupsAssociatedToDistributionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyKeyGroupsAssociatedToDistribution> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyKeyGroupsAssociatedToDistribution({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyLambdaFunctionAssociationsRes
 */
const de_TooManyLambdaFunctionAssociationsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyLambdaFunctionAssociations> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyLambdaFunctionAssociations({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyOriginAccessControlsRes
 */
const de_TooManyOriginAccessControlsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyOriginAccessControls> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyOriginAccessControls({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyOriginCustomHeadersRes
 */
const de_TooManyOriginCustomHeadersRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyOriginCustomHeaders> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyOriginCustomHeaders({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyOriginGroupsPerDistributionRes
 */
const de_TooManyOriginGroupsPerDistributionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyOriginGroupsPerDistribution> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyOriginGroupsPerDistribution({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyOriginRequestPoliciesRes
 */
const de_TooManyOriginRequestPoliciesRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyOriginRequestPolicies> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyOriginRequestPolicies({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyOriginsRes
 */
const de_TooManyOriginsRes = async (parsedOutput: any, context: __SerdeContext): Promise<TooManyOrigins> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyOrigins({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyPublicKeysRes
 */
const de_TooManyPublicKeysRes = async (parsedOutput: any, context: __SerdeContext): Promise<TooManyPublicKeys> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyPublicKeys({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyPublicKeysInKeyGroupRes
 */
const de_TooManyPublicKeysInKeyGroupRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyPublicKeysInKeyGroup> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyPublicKeysInKeyGroup({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyQueryStringParametersRes
 */
const de_TooManyQueryStringParametersRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyQueryStringParameters> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyQueryStringParameters({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyQueryStringsInCachePolicyRes
 */
const de_TooManyQueryStringsInCachePolicyRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyQueryStringsInCachePolicy> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyQueryStringsInCachePolicy({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyQueryStringsInOriginRequestPolicyRes
 */
const de_TooManyQueryStringsInOriginRequestPolicyRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyQueryStringsInOriginRequestPolicy> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyQueryStringsInOriginRequestPolicy({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyRealtimeLogConfigsRes
 */
const de_TooManyRealtimeLogConfigsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRealtimeLogConfigs> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyRealtimeLogConfigs({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyRemoveHeadersInResponseHeadersPolicyRes
 */
const de_TooManyRemoveHeadersInResponseHeadersPolicyRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRemoveHeadersInResponseHeadersPolicy> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyRemoveHeadersInResponseHeadersPolicy({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyResponseHeadersPoliciesRes
 */
const de_TooManyResponseHeadersPoliciesRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyResponseHeadersPolicies> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyResponseHeadersPolicies({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyStreamingDistributionCNAMEsRes
 */
const de_TooManyStreamingDistributionCNAMEsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyStreamingDistributionCNAMEs> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyStreamingDistributionCNAMEs({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyStreamingDistributionsRes
 */
const de_TooManyStreamingDistributionsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyStreamingDistributions> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyStreamingDistributions({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyTrustedSignersRes
 */
const de_TooManyTrustedSignersRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTrustedSigners> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyTrustedSigners({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTrustedKeyGroupDoesNotExistRes
 */
const de_TrustedKeyGroupDoesNotExistRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TrustedKeyGroupDoesNotExist> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TrustedKeyGroupDoesNotExist({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTrustedSignerDoesNotExistRes
 */
const de_TrustedSignerDoesNotExistRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TrustedSignerDoesNotExist> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TrustedSignerDoesNotExist({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlUnsupportedOperationRes
 */
const de_UnsupportedOperationRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperation> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new UnsupportedOperation({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * serializeAws_restXmlAccessControlAllowHeadersList
 */
const se_AccessControlAllowHeadersList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_st, entry);
      return n.n(_H);
    });
};

/**
 * serializeAws_restXmlAccessControlAllowMethodsList
 */
const se_AccessControlAllowMethodsList = (
  input: ResponseHeadersPolicyAccessControlAllowMethodsValues[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_RHPACAMV, entry);
      return n.n(_Met);
    });
};

/**
 * serializeAws_restXmlAccessControlAllowOriginsList
 */
const se_AccessControlAllowOriginsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_st, entry);
      return n.n(_Or);
    });
};

/**
 * serializeAws_restXmlAccessControlExposeHeadersList
 */
const se_AccessControlExposeHeadersList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_st, entry);
      return n.n(_H);
    });
};

/**
 * serializeAws_restXmlAliases
 */
const se_Aliases = (input: Aliases, context: __SerdeContext): any => {
  const bn = new __XmlNode(_Al);
  if (input[_Q] != null) {
    bn.c(__XmlNode.of(_i, String(input[_Q])).n(_Q));
  }
  bn.lc(input, "Items", "Items", () => se_AliasList(input[_I]!, context));
  return bn;
};

/**
 * serializeAws_restXmlAliasList
 */
const se_AliasList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_st, entry);
      return n.n(_CNAME);
    });
};

/**
 * serializeAws_restXmlAllowedMethods
 */
const se_AllowedMethods = (input: AllowedMethods, context: __SerdeContext): any => {
  const bn = new __XmlNode(_AM);
  if (input[_Q] != null) {
    bn.c(__XmlNode.of(_i, String(input[_Q])).n(_Q));
  }
  bn.lc(input, "Items", "Items", () => se_MethodsList(input[_I]!, context));
  if (input[_CM] != null) {
    bn.c(se_CachedMethods(input[_CM], context).n(_CM));
  }
  return bn;
};

/**
 * serializeAws_restXmlAwsAccountNumberList
 */
const se_AwsAccountNumberList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_st, entry);
      return n.n(_AAN);
    });
};

/**
 * serializeAws_restXmlCacheBehavior
 */
const se_CacheBehavior = (input: CacheBehavior, context: __SerdeContext): any => {
  const bn = new __XmlNode(_CB);
  if (input[_PP] != null) {
    bn.c(__XmlNode.of(_st, input[_PP]).n(_PP));
  }
  if (input[_TOI] != null) {
    bn.c(__XmlNode.of(_st, input[_TOI]).n(_TOI));
  }
  if (input[_TS] != null) {
    bn.c(se_TrustedSigners(input[_TS], context).n(_TS));
  }
  if (input[_TKG] != null) {
    bn.c(se_TrustedKeyGroups(input[_TKG], context).n(_TKG));
  }
  bn.cc(input, _VPP);
  if (input[_AM] != null) {
    bn.c(se_AllowedMethods(input[_AM], context).n(_AM));
  }
  if (input[_SS] != null) {
    bn.c(__XmlNode.of(_b, String(input[_SS])).n(_SS));
  }
  if (input[_Co] != null) {
    bn.c(__XmlNode.of(_b, String(input[_Co])).n(_Co));
  }
  if (input[_LFA] != null) {
    bn.c(se_LambdaFunctionAssociations(input[_LFA], context).n(_LFA));
  }
  if (input[_FA] != null) {
    bn.c(se_FunctionAssociations(input[_FA], context).n(_FA));
  }
  if (input[_FLEI] != null) {
    bn.c(__XmlNode.of(_st, input[_FLEI]).n(_FLEI));
  }
  if (input[_RLCA] != null) {
    bn.c(__XmlNode.of(_st, input[_RLCA]).n(_RLCA));
  }
  if (input[_CPI] != null) {
    bn.c(__XmlNode.of(_st, input[_CPI]).n(_CPI));
  }
  if (input[_ORPI] != null) {
    bn.c(__XmlNode.of(_st, input[_ORPI]).n(_ORPI));
  }
  if (input[_RHPI] != null) {
    bn.c(__XmlNode.of(_st, input[_RHPI]).n(_RHPI));
  }
  if (input[_FV] != null) {
    bn.c(se_ForwardedValues(input[_FV], context).n(_FV));
  }
  if (input[_MTTL] != null) {
    bn.c(__XmlNode.of(_l, String(input[_MTTL])).n(_MTTL));
  }
  if (input[_DTTL] != null) {
    bn.c(__XmlNode.of(_l, String(input[_DTTL])).n(_DTTL));
  }
  if (input[_MTTLa] != null) {
    bn.c(__XmlNode.of(_l, String(input[_MTTLa])).n(_MTTLa));
  }
  return bn;
};

/**
 * serializeAws_restXmlCacheBehaviorList
 */
const se_CacheBehaviorList = (input: CacheBehavior[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_CacheBehavior(entry, context);
      return n.n(_CB);
    });
};

/**
 * serializeAws_restXmlCacheBehaviors
 */
const se_CacheBehaviors = (input: CacheBehaviors, context: __SerdeContext): any => {
  const bn = new __XmlNode(_CBa);
  if (input[_Q] != null) {
    bn.c(__XmlNode.of(_i, String(input[_Q])).n(_Q));
  }
  bn.lc(input, "Items", "Items", () => se_CacheBehaviorList(input[_I]!, context));
  return bn;
};

/**
 * serializeAws_restXmlCachedMethods
 */
const se_CachedMethods = (input: CachedMethods, context: __SerdeContext): any => {
  const bn = new __XmlNode(_CM);
  if (input[_Q] != null) {
    bn.c(__XmlNode.of(_i, String(input[_Q])).n(_Q));
  }
  bn.lc(input, "Items", "Items", () => se_MethodsList(input[_I]!, context));
  return bn;
};

/**
 * serializeAws_restXmlCachePolicyConfig
 */
const se_CachePolicyConfig = (input: CachePolicyConfig, context: __SerdeContext): any => {
  const bn = new __XmlNode(_CPC);
  if (input[_C] != null) {
    bn.c(__XmlNode.of(_st, input[_C]).n(_C));
  }
  if (input[_N] != null) {
    bn.c(__XmlNode.of(_st, input[_N]).n(_N));
  }
  if (input[_DTTL] != null) {
    bn.c(__XmlNode.of(_l, String(input[_DTTL])).n(_DTTL));
  }
  if (input[_MTTLa] != null) {
    bn.c(__XmlNode.of(_l, String(input[_MTTLa])).n(_MTTLa));
  }
  if (input[_MTTL] != null) {
    bn.c(__XmlNode.of(_l, String(input[_MTTL])).n(_MTTL));
  }
  if (input[_PICKAFTO] != null) {
    bn.c(se_ParametersInCacheKeyAndForwardedToOrigin(input[_PICKAFTO], context).n(_PICKAFTO));
  }
  return bn;
};

/**
 * serializeAws_restXmlCachePolicyCookiesConfig
 */
const se_CachePolicyCookiesConfig = (input: CachePolicyCookiesConfig, context: __SerdeContext): any => {
  const bn = new __XmlNode(_CPCC);
  if (input[_CBo] != null) {
    bn.c(__XmlNode.of(_CPCB, input[_CBo]).n(_CBo));
  }
  if (input[_Coo] != null) {
    bn.c(se_CookieNames(input[_Coo], context).n(_Coo));
  }
  return bn;
};

/**
 * serializeAws_restXmlCachePolicyHeadersConfig
 */
const se_CachePolicyHeadersConfig = (input: CachePolicyHeadersConfig, context: __SerdeContext): any => {
  const bn = new __XmlNode(_CPHC);
  if (input[_HB] != null) {
    bn.c(__XmlNode.of(_CPHB, input[_HB]).n(_HB));
  }
  if (input[_He] != null) {
    bn.c(se_Headers(input[_He], context).n(_He));
  }
  return bn;
};

/**
 * serializeAws_restXmlCachePolicyQueryStringsConfig
 */
const se_CachePolicyQueryStringsConfig = (input: CachePolicyQueryStringsConfig, context: __SerdeContext): any => {
  const bn = new __XmlNode(_CPQSC);
  if (input[_QSB] != null) {
    bn.c(__XmlNode.of(_CPQSB, input[_QSB]).n(_QSB));
  }
  if (input[_QS] != null) {
    bn.c(se_QueryStringNames(input[_QS], context).n(_QS));
  }
  return bn;
};

/**
 * serializeAws_restXmlCloudFrontOriginAccessIdentityConfig
 */
const se_CloudFrontOriginAccessIdentityConfig = (
  input: CloudFrontOriginAccessIdentityConfig,
  context: __SerdeContext
): any => {
  const bn = new __XmlNode(_CFOAIC);
  if (input[_CR] != null) {
    bn.c(__XmlNode.of(_st, input[_CR]).n(_CR));
  }
  if (input[_C] != null) {
    bn.c(__XmlNode.of(_st, input[_C]).n(_C));
  }
  return bn;
};

/**
 * serializeAws_restXmlContentTypeProfile
 */
const se_ContentTypeProfile = (input: ContentTypeProfile, context: __SerdeContext): any => {
  const bn = new __XmlNode(_CTP);
  bn.cc(input, _Fo);
  if (input[_PI] != null) {
    bn.c(__XmlNode.of(_st, input[_PI]).n(_PI));
  }
  if (input[_CT] != null) {
    bn.c(__XmlNode.of(_st, input[_CT]).n(_CT));
  }
  return bn;
};

/**
 * serializeAws_restXmlContentTypeProfileConfig
 */
const se_ContentTypeProfileConfig = (input: ContentTypeProfileConfig, context: __SerdeContext): any => {
  const bn = new __XmlNode(_CTPC);
  if (input[_FWCTIU] != null) {
    bn.c(__XmlNode.of(_b, String(input[_FWCTIU])).n(_FWCTIU));
  }
  if (input[_CTPo] != null) {
    bn.c(se_ContentTypeProfiles(input[_CTPo], context).n(_CTPo));
  }
  return bn;
};

/**
 * serializeAws_restXmlContentTypeProfileList
 */
const se_ContentTypeProfileList = (input: ContentTypeProfile[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_ContentTypeProfile(entry, context);
      return n.n(_CTP);
    });
};

/**
 * serializeAws_restXmlContentTypeProfiles
 */
const se_ContentTypeProfiles = (input: ContentTypeProfiles, context: __SerdeContext): any => {
  const bn = new __XmlNode(_CTPo);
  if (input[_Q] != null) {
    bn.c(__XmlNode.of(_i, String(input[_Q])).n(_Q));
  }
  bn.lc(input, "Items", "Items", () => se_ContentTypeProfileList(input[_I]!, context));
  return bn;
};

/**
 * serializeAws_restXmlContinuousDeploymentPolicyConfig
 */
const se_ContinuousDeploymentPolicyConfig = (input: ContinuousDeploymentPolicyConfig, context: __SerdeContext): any => {
  const bn = new __XmlNode(_CDPC);
  if (input[_SDDN] != null) {
    bn.c(se_StagingDistributionDnsNames(input[_SDDN], context).n(_SDDN));
  }
  if (input[_E] != null) {
    bn.c(__XmlNode.of(_b, String(input[_E])).n(_E));
  }
  if (input[_TC] != null) {
    bn.c(se_TrafficConfig(input[_TC], context).n(_TC));
  }
  return bn;
};

/**
 * serializeAws_restXmlContinuousDeploymentSingleHeaderConfig
 */
const se_ContinuousDeploymentSingleHeaderConfig = (
  input: ContinuousDeploymentSingleHeaderConfig,
  context: __SerdeContext
): any => {
  const bn = new __XmlNode(_CDSHC);
  if (input[_H] != null) {
    bn.c(__XmlNode.of(_st, input[_H]).n(_H));
  }
  if (input[_V] != null) {
    bn.c(__XmlNode.of(_st, input[_V]).n(_V));
  }
  return bn;
};

/**
 * serializeAws_restXmlContinuousDeploymentSingleWeightConfig
 */
const se_ContinuousDeploymentSingleWeightConfig = (
  input: ContinuousDeploymentSingleWeightConfig,
  context: __SerdeContext
): any => {
  const bn = new __XmlNode(_CDSWC);
  if (input[_W] != null) {
    bn.c(__XmlNode.of(_f, String(input[_W])).n(_W));
  }
  if (input[_SSC] != null) {
    bn.c(se_SessionStickinessConfig(input[_SSC], context).n(_SSC));
  }
  return bn;
};

/**
 * serializeAws_restXmlCookieNameList
 */
const se_CookieNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_st, entry);
      return n.n(_N);
    });
};

/**
 * serializeAws_restXmlCookieNames
 */
const se_CookieNames = (input: CookieNames, context: __SerdeContext): any => {
  const bn = new __XmlNode(_CN);
  if (input[_Q] != null) {
    bn.c(__XmlNode.of(_i, String(input[_Q])).n(_Q));
  }
  bn.lc(input, "Items", "Items", () => se_CookieNameList(input[_I]!, context));
  return bn;
};

/**
 * serializeAws_restXmlCookiePreference
 */
const se_CookiePreference = (input: CookiePreference, context: __SerdeContext): any => {
  const bn = new __XmlNode(_CP);
  if (input[_For] != null) {
    bn.c(__XmlNode.of(_ISt, input[_For]).n(_For));
  }
  if (input[_WN] != null) {
    bn.c(se_CookieNames(input[_WN], context).n(_WN));
  }
  return bn;
};

/**
 * serializeAws_restXmlCustomErrorResponse
 */
const se_CustomErrorResponse = (input: CustomErrorResponse, context: __SerdeContext): any => {
  const bn = new __XmlNode(_CER);
  if (input[_EC] != null) {
    bn.c(__XmlNode.of(_i, String(input[_EC])).n(_EC));
  }
  if (input[_RPP] != null) {
    bn.c(__XmlNode.of(_st, input[_RPP]).n(_RPP));
  }
  if (input[_RC] != null) {
    bn.c(__XmlNode.of(_st, input[_RC]).n(_RC));
  }
  if (input[_ECMTTL] != null) {
    bn.c(__XmlNode.of(_l, String(input[_ECMTTL])).n(_ECMTTL));
  }
  return bn;
};

/**
 * serializeAws_restXmlCustomErrorResponseList
 */
const se_CustomErrorResponseList = (input: CustomErrorResponse[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_CustomErrorResponse(entry, context);
      return n.n(_CER);
    });
};

/**
 * serializeAws_restXmlCustomErrorResponses
 */
const se_CustomErrorResponses = (input: CustomErrorResponses, context: __SerdeContext): any => {
  const bn = new __XmlNode(_CERu);
  if (input[_Q] != null) {
    bn.c(__XmlNode.of(_i, String(input[_Q])).n(_Q));
  }
  bn.lc(input, "Items", "Items", () => se_CustomErrorResponseList(input[_I]!, context));
  return bn;
};

/**
 * serializeAws_restXmlCustomHeaders
 */
const se_CustomHeaders = (input: CustomHeaders, context: __SerdeContext): any => {
  const bn = new __XmlNode(_CH);
  if (input[_Q] != null) {
    bn.c(__XmlNode.of(_i, String(input[_Q])).n(_Q));
  }
  bn.lc(input, "Items", "Items", () => se_OriginCustomHeadersList(input[_I]!, context));
  return bn;
};

/**
 * serializeAws_restXmlCustomOriginConfig
 */
const se_CustomOriginConfig = (input: CustomOriginConfig, context: __SerdeContext): any => {
  const bn = new __XmlNode(_COC);
  if (input[_HTTPP] != null) {
    bn.c(__XmlNode.of(_i, String(input[_HTTPP])).n(_HTTPP));
  }
  if (input[_HTTPSP] != null) {
    bn.c(__XmlNode.of(_i, String(input[_HTTPSP])).n(_HTTPSP));
  }
  bn.cc(input, _OPP);
  if (input[_OSP] != null) {
    bn.c(se_OriginSslProtocols(input[_OSP], context).n(_OSP));
  }
  if (input[_ORT] != null) {
    bn.c(__XmlNode.of(_i, String(input[_ORT])).n(_ORT));
  }
  if (input[_OKT] != null) {
    bn.c(__XmlNode.of(_i, String(input[_OKT])).n(_OKT));
  }
  return bn;
};

/**
 * serializeAws_restXmlDefaultCacheBehavior
 */
const se_DefaultCacheBehavior = (input: DefaultCacheBehavior, context: __SerdeContext): any => {
  const bn = new __XmlNode(_DCB);
  if (input[_TOI] != null) {
    bn.c(__XmlNode.of(_st, input[_TOI]).n(_TOI));
  }
  if (input[_TS] != null) {
    bn.c(se_TrustedSigners(input[_TS], context).n(_TS));
  }
  if (input[_TKG] != null) {
    bn.c(se_TrustedKeyGroups(input[_TKG], context).n(_TKG));
  }
  bn.cc(input, _VPP);
  if (input[_AM] != null) {
    bn.c(se_AllowedMethods(input[_AM], context).n(_AM));
  }
  if (input[_SS] != null) {
    bn.c(__XmlNode.of(_b, String(input[_SS])).n(_SS));
  }
  if (input[_Co] != null) {
    bn.c(__XmlNode.of(_b, String(input[_Co])).n(_Co));
  }
  if (input[_LFA] != null) {
    bn.c(se_LambdaFunctionAssociations(input[_LFA], context).n(_LFA));
  }
  if (input[_FA] != null) {
    bn.c(se_FunctionAssociations(input[_FA], context).n(_FA));
  }
  if (input[_FLEI] != null) {
    bn.c(__XmlNode.of(_st, input[_FLEI]).n(_FLEI));
  }
  if (input[_RLCA] != null) {
    bn.c(__XmlNode.of(_st, input[_RLCA]).n(_RLCA));
  }
  if (input[_CPI] != null) {
    bn.c(__XmlNode.of(_st, input[_CPI]).n(_CPI));
  }
  if (input[_ORPI] != null) {
    bn.c(__XmlNode.of(_st, input[_ORPI]).n(_ORPI));
  }
  if (input[_RHPI] != null) {
    bn.c(__XmlNode.of(_st, input[_RHPI]).n(_RHPI));
  }
  if (input[_FV] != null) {
    bn.c(se_ForwardedValues(input[_FV], context).n(_FV));
  }
  if (input[_MTTL] != null) {
    bn.c(__XmlNode.of(_l, String(input[_MTTL])).n(_MTTL));
  }
  if (input[_DTTL] != null) {
    bn.c(__XmlNode.of(_l, String(input[_DTTL])).n(_DTTL));
  }
  if (input[_MTTLa] != null) {
    bn.c(__XmlNode.of(_l, String(input[_MTTLa])).n(_MTTLa));
  }
  return bn;
};

/**
 * serializeAws_restXmlDistributionConfig
 */
const se_DistributionConfig = (input: DistributionConfig, context: __SerdeContext): any => {
  const bn = new __XmlNode(_DC);
  if (input[_CR] != null) {
    bn.c(__XmlNode.of(_st, input[_CR]).n(_CR));
  }
  if (input[_Al] != null) {
    bn.c(se_Aliases(input[_Al], context).n(_Al));
  }
  if (input[_DRO] != null) {
    bn.c(__XmlNode.of(_st, input[_DRO]).n(_DRO));
  }
  if (input[_Ori] != null) {
    bn.c(se_Origins(input[_Ori], context).n(_Ori));
  }
  if (input[_OG] != null) {
    bn.c(se_OriginGroups(input[_OG], context).n(_OG));
  }
  if (input[_DCB] != null) {
    bn.c(se_DefaultCacheBehavior(input[_DCB], context).n(_DCB));
  }
  if (input[_CBa] != null) {
    bn.c(se_CacheBehaviors(input[_CBa], context).n(_CBa));
  }
  if (input[_CERu] != null) {
    bn.c(se_CustomErrorResponses(input[_CERu], context).n(_CERu));
  }
  if (input[_C] != null) {
    bn.c(__XmlNode.of(_CTo, input[_C]).n(_C));
  }
  if (input[_Lo] != null) {
    bn.c(se_LoggingConfig(input[_Lo], context).n(_Lo));
  }
  bn.cc(input, _PC);
  if (input[_E] != null) {
    bn.c(__XmlNode.of(_b, String(input[_E])).n(_E));
  }
  if (input[_VC] != null) {
    bn.c(se_ViewerCertificate(input[_VC], context).n(_VC));
  }
  if (input[_Re] != null) {
    bn.c(se_Restrictions(input[_Re], context).n(_Re));
  }
  if (input[_WACLI] != null) {
    bn.c(__XmlNode.of(_st, input[_WACLI]).n(_WACLI));
  }
  bn.cc(input, _HV);
  if (input[_IIPVE] != null) {
    bn.c(__XmlNode.of(_b, String(input[_IIPVE])).n(_IIPVE));
  }
  if (input[_CDPI] != null) {
    bn.c(__XmlNode.of(_st, input[_CDPI]).n(_CDPI));
  }
  if (input[_S] != null) {
    bn.c(__XmlNode.of(_b, String(input[_S])).n(_S));
  }
  return bn;
};

/**
 * serializeAws_restXmlDistributionConfigWithTags
 */
const se_DistributionConfigWithTags = (input: DistributionConfigWithTags, context: __SerdeContext): any => {
  const bn = new __XmlNode(_DCWT);
  if (input[_DC] != null) {
    bn.c(se_DistributionConfig(input[_DC], context).n(_DC));
  }
  if (input[_Ta] != null) {
    bn.c(se_Tags(input[_Ta], context).n(_Ta));
  }
  return bn;
};

/**
 * serializeAws_restXmlEncryptionEntities
 */
const se_EncryptionEntities = (input: EncryptionEntities, context: __SerdeContext): any => {
  const bn = new __XmlNode(_EE);
  if (input[_Q] != null) {
    bn.c(__XmlNode.of(_i, String(input[_Q])).n(_Q));
  }
  bn.lc(input, "Items", "Items", () => se_EncryptionEntityList(input[_I]!, context));
  return bn;
};

/**
 * serializeAws_restXmlEncryptionEntity
 */
const se_EncryptionEntity = (input: EncryptionEntity, context: __SerdeContext): any => {
  const bn = new __XmlNode(_EEn);
  if (input[_PKI] != null) {
    bn.c(__XmlNode.of(_st, input[_PKI]).n(_PKI));
  }
  if (input[_PIr] != null) {
    bn.c(__XmlNode.of(_st, input[_PIr]).n(_PIr));
  }
  if (input[_FP] != null) {
    bn.c(se_FieldPatterns(input[_FP], context).n(_FP));
  }
  return bn;
};

/**
 * serializeAws_restXmlEncryptionEntityList
 */
const se_EncryptionEntityList = (input: EncryptionEntity[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_EncryptionEntity(entry, context);
      return n.n(_EEn);
    });
};

/**
 * serializeAws_restXmlEndPoint
 */
const se_EndPoint = (input: EndPoint, context: __SerdeContext): any => {
  const bn = new __XmlNode(_EPn);
  if (input[_ST] != null) {
    bn.c(__XmlNode.of(_st, input[_ST]).n(_ST));
  }
  if (input[_KSC] != null) {
    bn.c(se_KinesisStreamConfig(input[_KSC], context).n(_KSC));
  }
  return bn;
};

/**
 * serializeAws_restXmlEndPointList
 */
const se_EndPointList = (input: EndPoint[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_EndPoint(entry, context);
      return n.n(_m);
    });
};

/**
 * serializeAws_restXmlFieldLevelEncryptionConfig
 */
const se_FieldLevelEncryptionConfig = (input: FieldLevelEncryptionConfig, context: __SerdeContext): any => {
  const bn = new __XmlNode(_FLEC);
  if (input[_CR] != null) {
    bn.c(__XmlNode.of(_st, input[_CR]).n(_CR));
  }
  if (input[_C] != null) {
    bn.c(__XmlNode.of(_st, input[_C]).n(_C));
  }
  if (input[_QAPC] != null) {
    bn.c(se_QueryArgProfileConfig(input[_QAPC], context).n(_QAPC));
  }
  if (input[_CTPC] != null) {
    bn.c(se_ContentTypeProfileConfig(input[_CTPC], context).n(_CTPC));
  }
  return bn;
};

/**
 * serializeAws_restXmlFieldLevelEncryptionProfileConfig
 */
const se_FieldLevelEncryptionProfileConfig = (
  input: FieldLevelEncryptionProfileConfig,
  context: __SerdeContext
): any => {
  const bn = new __XmlNode(_FLEPC);
  if (input[_N] != null) {
    bn.c(__XmlNode.of(_st, input[_N]).n(_N));
  }
  if (input[_CR] != null) {
    bn.c(__XmlNode.of(_st, input[_CR]).n(_CR));
  }
  if (input[_C] != null) {
    bn.c(__XmlNode.of(_st, input[_C]).n(_C));
  }
  if (input[_EE] != null) {
    bn.c(se_EncryptionEntities(input[_EE], context).n(_EE));
  }
  return bn;
};

/**
 * serializeAws_restXmlFieldList
 */
const se_FieldList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_st, entry);
      return n.n(_Fi);
    });
};

/**
 * serializeAws_restXmlFieldPatternList
 */
const se_FieldPatternList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_st, entry);
      return n.n(_FPi);
    });
};

/**
 * serializeAws_restXmlFieldPatterns
 */
const se_FieldPatterns = (input: FieldPatterns, context: __SerdeContext): any => {
  const bn = new __XmlNode(_FP);
  if (input[_Q] != null) {
    bn.c(__XmlNode.of(_i, String(input[_Q])).n(_Q));
  }
  bn.lc(input, "Items", "Items", () => se_FieldPatternList(input[_I]!, context));
  return bn;
};

/**
 * serializeAws_restXmlForwardedValues
 */
const se_ForwardedValues = (input: ForwardedValues, context: __SerdeContext): any => {
  const bn = new __XmlNode(_FV);
  if (input[_QSu] != null) {
    bn.c(__XmlNode.of(_b, String(input[_QSu])).n(_QSu));
  }
  if (input[_Coo] != null) {
    bn.c(se_CookiePreference(input[_Coo], context).n(_Coo));
  }
  if (input[_He] != null) {
    bn.c(se_Headers(input[_He], context).n(_He));
  }
  if (input[_QSCK] != null) {
    bn.c(se_QueryStringCacheKeys(input[_QSCK], context).n(_QSCK));
  }
  return bn;
};

/**
 * serializeAws_restXmlFunctionAssociation
 */
const se_FunctionAssociation = (input: FunctionAssociation, context: __SerdeContext): any => {
  const bn = new __XmlNode(_FAu);
  bn.cc(input, _FARN);
  bn.cc(input, _ETv);
  return bn;
};

/**
 * serializeAws_restXmlFunctionAssociationList
 */
const se_FunctionAssociationList = (input: FunctionAssociation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_FunctionAssociation(entry, context);
      return n.n(_FAu);
    });
};

/**
 * serializeAws_restXmlFunctionAssociations
 */
const se_FunctionAssociations = (input: FunctionAssociations, context: __SerdeContext): any => {
  const bn = new __XmlNode(_FA);
  if (input[_Q] != null) {
    bn.c(__XmlNode.of(_i, String(input[_Q])).n(_Q));
  }
  bn.lc(input, "Items", "Items", () => se_FunctionAssociationList(input[_I]!, context));
  return bn;
};

/**
 * serializeAws_restXmlFunctionConfig
 */
const se_FunctionConfig = (input: FunctionConfig, context: __SerdeContext): any => {
  const bn = new __XmlNode(_FCu);
  if (input[_C] != null) {
    bn.c(__XmlNode.of(_st, input[_C]).n(_C));
  }
  if (input[_Ru] != null) {
    bn.c(__XmlNode.of(_FR, input[_Ru]).n(_Ru));
  }
  if (input[_KVSA] != null) {
    bn.c(se_KeyValueStoreAssociations(input[_KVSA], context).n(_KVSA));
  }
  return bn;
};

/**
 * serializeAws_restXmlGeoRestriction
 */
const se_GeoRestriction = (input: GeoRestriction, context: __SerdeContext): any => {
  const bn = new __XmlNode(_GR);
  if (input[_RT] != null) {
    bn.c(__XmlNode.of(_GRT, input[_RT]).n(_RT));
  }
  if (input[_Q] != null) {
    bn.c(__XmlNode.of(_i, String(input[_Q])).n(_Q));
  }
  bn.lc(input, "Items", "Items", () => se_LocationList(input[_I]!, context));
  return bn;
};

/**
 * serializeAws_restXmlHeaderList
 */
const se_HeaderList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_st, entry);
      return n.n(_N);
    });
};

/**
 * serializeAws_restXmlHeaders
 */
const se_Headers = (input: Headers, context: __SerdeContext): any => {
  const bn = new __XmlNode(_He);
  if (input[_Q] != null) {
    bn.c(__XmlNode.of(_i, String(input[_Q])).n(_Q));
  }
  bn.lc(input, "Items", "Items", () => se_HeaderList(input[_I]!, context));
  return bn;
};

/**
 * serializeAws_restXmlImportSource
 */
const se_ImportSource = (input: ImportSource, context: __SerdeContext): any => {
  const bn = new __XmlNode(_IS);
  if (input[_STo] != null) {
    bn.c(__XmlNode.of(_IST, input[_STo]).n(_STo));
  }
  if (input[_SARN] != null) {
    bn.c(__XmlNode.of(_st, input[_SARN]).n(_SARN));
  }
  return bn;
};

/**
 * serializeAws_restXmlInvalidationBatch
 */
const se_InvalidationBatch = (input: InvalidationBatch, context: __SerdeContext): any => {
  const bn = new __XmlNode(_IB);
  if (input[_P] != null) {
    bn.c(se_Paths(input[_P], context).n(_P));
  }
  if (input[_CR] != null) {
    bn.c(__XmlNode.of(_st, input[_CR]).n(_CR));
  }
  return bn;
};

/**
 * serializeAws_restXmlKeyGroupConfig
 */
const se_KeyGroupConfig = (input: KeyGroupConfig, context: __SerdeContext): any => {
  const bn = new __XmlNode(_KGC);
  if (input[_N] != null) {
    bn.c(__XmlNode.of(_st, input[_N]).n(_N));
  }
  bn.lc(input, "Items", "Items", () => se_PublicKeyIdList(input[_I]!, context));
  if (input[_C] != null) {
    bn.c(__XmlNode.of(_st, input[_C]).n(_C));
  }
  return bn;
};

/**
 * serializeAws_restXmlKeyValueStoreAssociation
 */
const se_KeyValueStoreAssociation = (input: KeyValueStoreAssociation, context: __SerdeContext): any => {
  const bn = new __XmlNode(_KVSAe);
  bn.cc(input, _KVSARN);
  return bn;
};

/**
 * serializeAws_restXmlKeyValueStoreAssociationList
 */
const se_KeyValueStoreAssociationList = (input: KeyValueStoreAssociation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_KeyValueStoreAssociation(entry, context);
      return n.n(_KVSAe);
    });
};

/**
 * serializeAws_restXmlKeyValueStoreAssociations
 */
const se_KeyValueStoreAssociations = (input: KeyValueStoreAssociations, context: __SerdeContext): any => {
  const bn = new __XmlNode(_KVSA);
  if (input[_Q] != null) {
    bn.c(__XmlNode.of(_i, String(input[_Q])).n(_Q));
  }
  bn.lc(input, "Items", "Items", () => se_KeyValueStoreAssociationList(input[_I]!, context));
  return bn;
};

/**
 * serializeAws_restXmlKinesisStreamConfig
 */
const se_KinesisStreamConfig = (input: KinesisStreamConfig, context: __SerdeContext): any => {
  const bn = new __XmlNode(_KSC);
  if (input[_RARN] != null) {
    bn.c(__XmlNode.of(_st, input[_RARN]).n(_RARN));
  }
  if (input[_SARNt] != null) {
    bn.c(__XmlNode.of(_st, input[_SARNt]).n(_SARNt));
  }
  return bn;
};

/**
 * serializeAws_restXmlLambdaFunctionAssociation
 */
const se_LambdaFunctionAssociation = (input: LambdaFunctionAssociation, context: __SerdeContext): any => {
  const bn = new __XmlNode(_LFAa);
  bn.cc(input, _LFARN);
  bn.cc(input, _ETv);
  if (input[_IBn] != null) {
    bn.c(__XmlNode.of(_b, String(input[_IBn])).n(_IBn));
  }
  return bn;
};

/**
 * serializeAws_restXmlLambdaFunctionAssociationList
 */
const se_LambdaFunctionAssociationList = (input: LambdaFunctionAssociation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_LambdaFunctionAssociation(entry, context);
      return n.n(_LFAa);
    });
};

/**
 * serializeAws_restXmlLambdaFunctionAssociations
 */
const se_LambdaFunctionAssociations = (input: LambdaFunctionAssociations, context: __SerdeContext): any => {
  const bn = new __XmlNode(_LFA);
  if (input[_Q] != null) {
    bn.c(__XmlNode.of(_i, String(input[_Q])).n(_Q));
  }
  bn.lc(input, "Items", "Items", () => se_LambdaFunctionAssociationList(input[_I]!, context));
  return bn;
};

/**
 * serializeAws_restXmlLocationList
 */
const se_LocationList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_st, entry);
      return n.n(_L);
    });
};

/**
 * serializeAws_restXmlLoggingConfig
 */
const se_LoggingConfig = (input: LoggingConfig, context: __SerdeContext): any => {
  const bn = new __XmlNode(_LC);
  if (input[_E] != null) {
    bn.c(__XmlNode.of(_b, String(input[_E])).n(_E));
  }
  if (input[_IC] != null) {
    bn.c(__XmlNode.of(_b, String(input[_IC])).n(_IC));
  }
  if (input[_B] != null) {
    bn.c(__XmlNode.of(_st, input[_B]).n(_B));
  }
  if (input[_Pr] != null) {
    bn.c(__XmlNode.of(_st, input[_Pr]).n(_Pr));
  }
  return bn;
};

/**
 * serializeAws_restXmlMethodsList
 */
const se_MethodsList = (input: Method[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_Met, entry);
      return n.n(_Met);
    });
};

/**
 * serializeAws_restXmlMonitoringSubscription
 */
const se_MonitoringSubscription = (input: MonitoringSubscription, context: __SerdeContext): any => {
  const bn = new __XmlNode(_MS);
  if (input[_RMSC] != null) {
    bn.c(se_RealtimeMetricsSubscriptionConfig(input[_RMSC], context).n(_RMSC));
  }
  return bn;
};

/**
 * serializeAws_restXmlOrigin
 */
const se_Origin = (input: Origin, context: __SerdeContext): any => {
  const bn = new __XmlNode(_Or);
  if (input[_Id] != null) {
    bn.c(__XmlNode.of(_st, input[_Id]).n(_Id));
  }
  if (input[_DN] != null) {
    bn.c(__XmlNode.of(_st, input[_DN]).n(_DN));
  }
  if (input[_OP] != null) {
    bn.c(__XmlNode.of(_st, input[_OP]).n(_OP));
  }
  if (input[_CH] != null) {
    bn.c(se_CustomHeaders(input[_CH], context).n(_CH));
  }
  if (input[_SOC] != null) {
    bn.c(se_S3OriginConfig(input[_SOC], context).n(_SOC));
  }
  if (input[_COC] != null) {
    bn.c(se_CustomOriginConfig(input[_COC], context).n(_COC));
  }
  if (input[_CA] != null) {
    bn.c(__XmlNode.of(_i, String(input[_CA])).n(_CA));
  }
  if (input[_CTon] != null) {
    bn.c(__XmlNode.of(_i, String(input[_CTon])).n(_CTon));
  }
  if (input[_OS] != null) {
    bn.c(se_OriginShield(input[_OS], context).n(_OS));
  }
  if (input[_OACI] != null) {
    bn.c(__XmlNode.of(_st, input[_OACI]).n(_OACI));
  }
  return bn;
};

/**
 * serializeAws_restXmlOriginAccessControlConfig
 */
const se_OriginAccessControlConfig = (input: OriginAccessControlConfig, context: __SerdeContext): any => {
  const bn = new __XmlNode(_OACC);
  if (input[_N] != null) {
    bn.c(__XmlNode.of(_st, input[_N]).n(_N));
  }
  if (input[_D] != null) {
    bn.c(__XmlNode.of(_st, input[_D]).n(_D));
  }
  if (input[_SP] != null) {
    bn.c(__XmlNode.of(_OACSP, input[_SP]).n(_SP));
  }
  if (input[_SB] != null) {
    bn.c(__XmlNode.of(_OACSB, input[_SB]).n(_SB));
  }
  if (input[_OACOT] != null) {
    bn.c(__XmlNode.of(_OACOTr, input[_OACOT]).n(_OACOT));
  }
  return bn;
};

/**
 * serializeAws_restXmlOriginCustomHeader
 */
const se_OriginCustomHeader = (input: OriginCustomHeader, context: __SerdeContext): any => {
  const bn = new __XmlNode(_OCH);
  if (input[_HN] != null) {
    bn.c(__XmlNode.of(_st, input[_HN]).n(_HN));
  }
  if (input[_HVe] != null) {
    bn.c(__XmlNode.of(_sST, input[_HVe]).n(_HVe));
  }
  return bn;
};

/**
 * serializeAws_restXmlOriginCustomHeadersList
 */
const se_OriginCustomHeadersList = (input: OriginCustomHeader[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_OriginCustomHeader(entry, context);
      return n.n(_OCH);
    });
};

/**
 * serializeAws_restXmlOriginGroup
 */
const se_OriginGroup = (input: OriginGroup, context: __SerdeContext): any => {
  const bn = new __XmlNode(_OGr);
  if (input[_Id] != null) {
    bn.c(__XmlNode.of(_st, input[_Id]).n(_Id));
  }
  if (input[_FCa] != null) {
    bn.c(se_OriginGroupFailoverCriteria(input[_FCa], context).n(_FCa));
  }
  if (input[_Mem] != null) {
    bn.c(se_OriginGroupMembers(input[_Mem], context).n(_Mem));
  }
  return bn;
};

/**
 * serializeAws_restXmlOriginGroupFailoverCriteria
 */
const se_OriginGroupFailoverCriteria = (input: OriginGroupFailoverCriteria, context: __SerdeContext): any => {
  const bn = new __XmlNode(_OGFC);
  if (input[_SC] != null) {
    bn.c(se_StatusCodes(input[_SC], context).n(_SC));
  }
  return bn;
};

/**
 * serializeAws_restXmlOriginGroupList
 */
const se_OriginGroupList = (input: OriginGroup[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_OriginGroup(entry, context);
      return n.n(_OGr);
    });
};

/**
 * serializeAws_restXmlOriginGroupMember
 */
const se_OriginGroupMember = (input: OriginGroupMember, context: __SerdeContext): any => {
  const bn = new __XmlNode(_OGM);
  if (input[_OI] != null) {
    bn.c(__XmlNode.of(_st, input[_OI]).n(_OI));
  }
  return bn;
};

/**
 * serializeAws_restXmlOriginGroupMemberList
 */
const se_OriginGroupMemberList = (input: OriginGroupMember[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_OriginGroupMember(entry, context);
      return n.n(_OGM);
    });
};

/**
 * serializeAws_restXmlOriginGroupMembers
 */
const se_OriginGroupMembers = (input: OriginGroupMembers, context: __SerdeContext): any => {
  const bn = new __XmlNode(_OGMr);
  if (input[_Q] != null) {
    bn.c(__XmlNode.of(_i, String(input[_Q])).n(_Q));
  }
  bn.lc(input, "Items", "Items", () => se_OriginGroupMemberList(input[_I]!, context));
  return bn;
};

/**
 * serializeAws_restXmlOriginGroups
 */
const se_OriginGroups = (input: OriginGroups, context: __SerdeContext): any => {
  const bn = new __XmlNode(_OG);
  if (input[_Q] != null) {
    bn.c(__XmlNode.of(_i, String(input[_Q])).n(_Q));
  }
  bn.lc(input, "Items", "Items", () => se_OriginGroupList(input[_I]!, context));
  return bn;
};

/**
 * serializeAws_restXmlOriginList
 */
const se_OriginList = (input: Origin[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_Origin(entry, context);
      return n.n(_Or);
    });
};

/**
 * serializeAws_restXmlOriginRequestPolicyConfig
 */
const se_OriginRequestPolicyConfig = (input: OriginRequestPolicyConfig, context: __SerdeContext): any => {
  const bn = new __XmlNode(_ORPC);
  if (input[_C] != null) {
    bn.c(__XmlNode.of(_st, input[_C]).n(_C));
  }
  if (input[_N] != null) {
    bn.c(__XmlNode.of(_st, input[_N]).n(_N));
  }
  if (input[_HC] != null) {
    bn.c(se_OriginRequestPolicyHeadersConfig(input[_HC], context).n(_HC));
  }
  if (input[_CC] != null) {
    bn.c(se_OriginRequestPolicyCookiesConfig(input[_CC], context).n(_CC));
  }
  if (input[_QSC] != null) {
    bn.c(se_OriginRequestPolicyQueryStringsConfig(input[_QSC], context).n(_QSC));
  }
  return bn;
};

/**
 * serializeAws_restXmlOriginRequestPolicyCookiesConfig
 */
const se_OriginRequestPolicyCookiesConfig = (input: OriginRequestPolicyCookiesConfig, context: __SerdeContext): any => {
  const bn = new __XmlNode(_ORPCC);
  if (input[_CBo] != null) {
    bn.c(__XmlNode.of(_ORPCB, input[_CBo]).n(_CBo));
  }
  if (input[_Coo] != null) {
    bn.c(se_CookieNames(input[_Coo], context).n(_Coo));
  }
  return bn;
};

/**
 * serializeAws_restXmlOriginRequestPolicyHeadersConfig
 */
const se_OriginRequestPolicyHeadersConfig = (input: OriginRequestPolicyHeadersConfig, context: __SerdeContext): any => {
  const bn = new __XmlNode(_ORPHC);
  if (input[_HB] != null) {
    bn.c(__XmlNode.of(_ORPHB, input[_HB]).n(_HB));
  }
  if (input[_He] != null) {
    bn.c(se_Headers(input[_He], context).n(_He));
  }
  return bn;
};

/**
 * serializeAws_restXmlOriginRequestPolicyQueryStringsConfig
 */
const se_OriginRequestPolicyQueryStringsConfig = (
  input: OriginRequestPolicyQueryStringsConfig,
  context: __SerdeContext
): any => {
  const bn = new __XmlNode(_ORPQSC);
  if (input[_QSB] != null) {
    bn.c(__XmlNode.of(_ORPQSB, input[_QSB]).n(_QSB));
  }
  if (input[_QS] != null) {
    bn.c(se_QueryStringNames(input[_QS], context).n(_QS));
  }
  return bn;
};

/**
 * serializeAws_restXmlOrigins
 */
const se_Origins = (input: Origins, context: __SerdeContext): any => {
  const bn = new __XmlNode(_Ori);
  if (input[_Q] != null) {
    bn.c(__XmlNode.of(_i, String(input[_Q])).n(_Q));
  }
  bn.lc(input, "Items", "Items", () => se_OriginList(input[_I]!, context));
  return bn;
};

/**
 * serializeAws_restXmlOriginShield
 */
const se_OriginShield = (input: OriginShield, context: __SerdeContext): any => {
  const bn = new __XmlNode(_OS);
  if (input[_E] != null) {
    bn.c(__XmlNode.of(_b, String(input[_E])).n(_E));
  }
  bn.cc(input, _OSR);
  return bn;
};

/**
 * serializeAws_restXmlOriginSslProtocols
 */
const se_OriginSslProtocols = (input: OriginSslProtocols, context: __SerdeContext): any => {
  const bn = new __XmlNode(_OSP);
  if (input[_Q] != null) {
    bn.c(__XmlNode.of(_i, String(input[_Q])).n(_Q));
  }
  bn.lc(input, "Items", "Items", () => se_SslProtocolsList(input[_I]!, context));
  return bn;
};

/**
 * serializeAws_restXmlParametersInCacheKeyAndForwardedToOrigin
 */
const se_ParametersInCacheKeyAndForwardedToOrigin = (
  input: ParametersInCacheKeyAndForwardedToOrigin,
  context: __SerdeContext
): any => {
  const bn = new __XmlNode(_PICKAFTO);
  if (input[_EAEG] != null) {
    bn.c(__XmlNode.of(_b, String(input[_EAEG])).n(_EAEG));
  }
  if (input[_EAEB] != null) {
    bn.c(__XmlNode.of(_b, String(input[_EAEB])).n(_EAEB));
  }
  if (input[_HC] != null) {
    bn.c(se_CachePolicyHeadersConfig(input[_HC], context).n(_HC));
  }
  if (input[_CC] != null) {
    bn.c(se_CachePolicyCookiesConfig(input[_CC], context).n(_CC));
  }
  if (input[_QSC] != null) {
    bn.c(se_CachePolicyQueryStringsConfig(input[_QSC], context).n(_QSC));
  }
  return bn;
};

/**
 * serializeAws_restXmlPathList
 */
const se_PathList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_st, entry);
      return n.n(_Pa);
    });
};

/**
 * serializeAws_restXmlPaths
 */
const se_Paths = (input: Paths, context: __SerdeContext): any => {
  const bn = new __XmlNode(_P);
  if (input[_Q] != null) {
    bn.c(__XmlNode.of(_i, String(input[_Q])).n(_Q));
  }
  bn.lc(input, "Items", "Items", () => se_PathList(input[_I]!, context));
  return bn;
};

/**
 * serializeAws_restXmlPublicKeyConfig
 */
const se_PublicKeyConfig = (input: PublicKeyConfig, context: __SerdeContext): any => {
  const bn = new __XmlNode(_PKC);
  if (input[_CR] != null) {
    bn.c(__XmlNode.of(_st, input[_CR]).n(_CR));
  }
  if (input[_N] != null) {
    bn.c(__XmlNode.of(_st, input[_N]).n(_N));
  }
  if (input[_EK] != null) {
    bn.c(__XmlNode.of(_st, input[_EK]).n(_EK));
  }
  if (input[_C] != null) {
    bn.c(__XmlNode.of(_st, input[_C]).n(_C));
  }
  return bn;
};

/**
 * serializeAws_restXmlPublicKeyIdList
 */
const se_PublicKeyIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_st, entry);
      return n.n(_PK);
    });
};

/**
 * serializeAws_restXmlQueryArgProfile
 */
const se_QueryArgProfile = (input: QueryArgProfile, context: __SerdeContext): any => {
  const bn = new __XmlNode(_QAP);
  if (input[_QA] != null) {
    bn.c(__XmlNode.of(_st, input[_QA]).n(_QA));
  }
  if (input[_PI] != null) {
    bn.c(__XmlNode.of(_st, input[_PI]).n(_PI));
  }
  return bn;
};

/**
 * serializeAws_restXmlQueryArgProfileConfig
 */
const se_QueryArgProfileConfig = (input: QueryArgProfileConfig, context: __SerdeContext): any => {
  const bn = new __XmlNode(_QAPC);
  if (input[_FWQAPIU] != null) {
    bn.c(__XmlNode.of(_b, String(input[_FWQAPIU])).n(_FWQAPIU));
  }
  if (input[_QAPu] != null) {
    bn.c(se_QueryArgProfiles(input[_QAPu], context).n(_QAPu));
  }
  return bn;
};

/**
 * serializeAws_restXmlQueryArgProfileList
 */
const se_QueryArgProfileList = (input: QueryArgProfile[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_QueryArgProfile(entry, context);
      return n.n(_QAP);
    });
};

/**
 * serializeAws_restXmlQueryArgProfiles
 */
const se_QueryArgProfiles = (input: QueryArgProfiles, context: __SerdeContext): any => {
  const bn = new __XmlNode(_QAPu);
  if (input[_Q] != null) {
    bn.c(__XmlNode.of(_i, String(input[_Q])).n(_Q));
  }
  bn.lc(input, "Items", "Items", () => se_QueryArgProfileList(input[_I]!, context));
  return bn;
};

/**
 * serializeAws_restXmlQueryStringCacheKeys
 */
const se_QueryStringCacheKeys = (input: QueryStringCacheKeys, context: __SerdeContext): any => {
  const bn = new __XmlNode(_QSCK);
  if (input[_Q] != null) {
    bn.c(__XmlNode.of(_i, String(input[_Q])).n(_Q));
  }
  bn.lc(input, "Items", "Items", () => se_QueryStringCacheKeysList(input[_I]!, context));
  return bn;
};

/**
 * serializeAws_restXmlQueryStringCacheKeysList
 */
const se_QueryStringCacheKeysList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_st, entry);
      return n.n(_N);
    });
};

/**
 * serializeAws_restXmlQueryStringNames
 */
const se_QueryStringNames = (input: QueryStringNames, context: __SerdeContext): any => {
  const bn = new __XmlNode(_QSN);
  if (input[_Q] != null) {
    bn.c(__XmlNode.of(_i, String(input[_Q])).n(_Q));
  }
  bn.lc(input, "Items", "Items", () => se_QueryStringNamesList(input[_I]!, context));
  return bn;
};

/**
 * serializeAws_restXmlQueryStringNamesList
 */
const se_QueryStringNamesList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_st, entry);
      return n.n(_N);
    });
};

/**
 * serializeAws_restXmlRealtimeMetricsSubscriptionConfig
 */
const se_RealtimeMetricsSubscriptionConfig = (
  input: RealtimeMetricsSubscriptionConfig,
  context: __SerdeContext
): any => {
  const bn = new __XmlNode(_RMSC);
  bn.cc(input, _RMSS);
  return bn;
};

/**
 * serializeAws_restXmlResponseHeadersPolicyAccessControlAllowHeaders
 */
const se_ResponseHeadersPolicyAccessControlAllowHeaders = (
  input: ResponseHeadersPolicyAccessControlAllowHeaders,
  context: __SerdeContext
): any => {
  const bn = new __XmlNode(_RHPACAH);
  if (input[_Q] != null) {
    bn.c(__XmlNode.of(_i, String(input[_Q])).n(_Q));
  }
  bn.lc(input, "Items", "Items", () => se_AccessControlAllowHeadersList(input[_I]!, context));
  return bn;
};

/**
 * serializeAws_restXmlResponseHeadersPolicyAccessControlAllowMethods
 */
const se_ResponseHeadersPolicyAccessControlAllowMethods = (
  input: ResponseHeadersPolicyAccessControlAllowMethods,
  context: __SerdeContext
): any => {
  const bn = new __XmlNode(_RHPACAM);
  if (input[_Q] != null) {
    bn.c(__XmlNode.of(_i, String(input[_Q])).n(_Q));
  }
  bn.lc(input, "Items", "Items", () => se_AccessControlAllowMethodsList(input[_I]!, context));
  return bn;
};

/**
 * serializeAws_restXmlResponseHeadersPolicyAccessControlAllowOrigins
 */
const se_ResponseHeadersPolicyAccessControlAllowOrigins = (
  input: ResponseHeadersPolicyAccessControlAllowOrigins,
  context: __SerdeContext
): any => {
  const bn = new __XmlNode(_RHPACAO);
  if (input[_Q] != null) {
    bn.c(__XmlNode.of(_i, String(input[_Q])).n(_Q));
  }
  bn.lc(input, "Items", "Items", () => se_AccessControlAllowOriginsList(input[_I]!, context));
  return bn;
};

/**
 * serializeAws_restXmlResponseHeadersPolicyAccessControlExposeHeaders
 */
const se_ResponseHeadersPolicyAccessControlExposeHeaders = (
  input: ResponseHeadersPolicyAccessControlExposeHeaders,
  context: __SerdeContext
): any => {
  const bn = new __XmlNode(_RHPACEH);
  if (input[_Q] != null) {
    bn.c(__XmlNode.of(_i, String(input[_Q])).n(_Q));
  }
  bn.lc(input, "Items", "Items", () => se_AccessControlExposeHeadersList(input[_I]!, context));
  return bn;
};

/**
 * serializeAws_restXmlResponseHeadersPolicyConfig
 */
const se_ResponseHeadersPolicyConfig = (input: ResponseHeadersPolicyConfig, context: __SerdeContext): any => {
  const bn = new __XmlNode(_RHPC);
  if (input[_C] != null) {
    bn.c(__XmlNode.of(_st, input[_C]).n(_C));
  }
  if (input[_N] != null) {
    bn.c(__XmlNode.of(_st, input[_N]).n(_N));
  }
  if (input[_CCo] != null) {
    bn.c(se_ResponseHeadersPolicyCorsConfig(input[_CCo], context).n(_CCo));
  }
  if (input[_SHC] != null) {
    bn.c(se_ResponseHeadersPolicySecurityHeadersConfig(input[_SHC], context).n(_SHC));
  }
  if (input[_STHC] != null) {
    bn.c(se_ResponseHeadersPolicyServerTimingHeadersConfig(input[_STHC], context).n(_STHC));
  }
  if (input[_CHC] != null) {
    bn.c(se_ResponseHeadersPolicyCustomHeadersConfig(input[_CHC], context).n(_CHC));
  }
  if (input[_RHC] != null) {
    bn.c(se_ResponseHeadersPolicyRemoveHeadersConfig(input[_RHC], context).n(_RHC));
  }
  return bn;
};

/**
 * serializeAws_restXmlResponseHeadersPolicyContentSecurityPolicy
 */
const se_ResponseHeadersPolicyContentSecurityPolicy = (
  input: ResponseHeadersPolicyContentSecurityPolicy,
  context: __SerdeContext
): any => {
  const bn = new __XmlNode(_RHPCSP);
  if (input[_Ov] != null) {
    bn.c(__XmlNode.of(_b, String(input[_Ov])).n(_Ov));
  }
  if (input[_CSP] != null) {
    bn.c(__XmlNode.of(_st, input[_CSP]).n(_CSP));
  }
  return bn;
};

/**
 * serializeAws_restXmlResponseHeadersPolicyContentTypeOptions
 */
const se_ResponseHeadersPolicyContentTypeOptions = (
  input: ResponseHeadersPolicyContentTypeOptions,
  context: __SerdeContext
): any => {
  const bn = new __XmlNode(_RHPCTO);
  if (input[_Ov] != null) {
    bn.c(__XmlNode.of(_b, String(input[_Ov])).n(_Ov));
  }
  return bn;
};

/**
 * serializeAws_restXmlResponseHeadersPolicyCorsConfig
 */
const se_ResponseHeadersPolicyCorsConfig = (input: ResponseHeadersPolicyCorsConfig, context: __SerdeContext): any => {
  const bn = new __XmlNode(_RHPCC);
  if (input[_ACAO] != null) {
    bn.c(se_ResponseHeadersPolicyAccessControlAllowOrigins(input[_ACAO], context).n(_ACAO));
  }
  if (input[_ACAH] != null) {
    bn.c(se_ResponseHeadersPolicyAccessControlAllowHeaders(input[_ACAH], context).n(_ACAH));
  }
  if (input[_ACAM] != null) {
    bn.c(se_ResponseHeadersPolicyAccessControlAllowMethods(input[_ACAM], context).n(_ACAM));
  }
  if (input[_ACAC] != null) {
    bn.c(__XmlNode.of(_b, String(input[_ACAC])).n(_ACAC));
  }
  if (input[_ACEH] != null) {
    bn.c(se_ResponseHeadersPolicyAccessControlExposeHeaders(input[_ACEH], context).n(_ACEH));
  }
  if (input[_ACMAS] != null) {
    bn.c(__XmlNode.of(_i, String(input[_ACMAS])).n(_ACMAS));
  }
  if (input[_OO] != null) {
    bn.c(__XmlNode.of(_b, String(input[_OO])).n(_OO));
  }
  return bn;
};

/**
 * serializeAws_restXmlResponseHeadersPolicyCustomHeader
 */
const se_ResponseHeadersPolicyCustomHeader = (
  input: ResponseHeadersPolicyCustomHeader,
  context: __SerdeContext
): any => {
  const bn = new __XmlNode(_RHPCH);
  if (input[_H] != null) {
    bn.c(__XmlNode.of(_st, input[_H]).n(_H));
  }
  if (input[_V] != null) {
    bn.c(__XmlNode.of(_st, input[_V]).n(_V));
  }
  if (input[_Ov] != null) {
    bn.c(__XmlNode.of(_b, String(input[_Ov])).n(_Ov));
  }
  return bn;
};

/**
 * serializeAws_restXmlResponseHeadersPolicyCustomHeaderList
 */
const se_ResponseHeadersPolicyCustomHeaderList = (
  input: ResponseHeadersPolicyCustomHeader[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_ResponseHeadersPolicyCustomHeader(entry, context);
      return n.n(_RHPCH);
    });
};

/**
 * serializeAws_restXmlResponseHeadersPolicyCustomHeadersConfig
 */
const se_ResponseHeadersPolicyCustomHeadersConfig = (
  input: ResponseHeadersPolicyCustomHeadersConfig,
  context: __SerdeContext
): any => {
  const bn = new __XmlNode(_RHPCHC);
  if (input[_Q] != null) {
    bn.c(__XmlNode.of(_i, String(input[_Q])).n(_Q));
  }
  bn.lc(input, "Items", "Items", () => se_ResponseHeadersPolicyCustomHeaderList(input[_I]!, context));
  return bn;
};

/**
 * serializeAws_restXmlResponseHeadersPolicyFrameOptions
 */
const se_ResponseHeadersPolicyFrameOptions = (
  input: ResponseHeadersPolicyFrameOptions,
  context: __SerdeContext
): any => {
  const bn = new __XmlNode(_RHPFO);
  if (input[_Ov] != null) {
    bn.c(__XmlNode.of(_b, String(input[_Ov])).n(_Ov));
  }
  if (input[_FO] != null) {
    bn.c(__XmlNode.of(_FOL, input[_FO]).n(_FO));
  }
  return bn;
};

/**
 * serializeAws_restXmlResponseHeadersPolicyReferrerPolicy
 */
const se_ResponseHeadersPolicyReferrerPolicy = (
  input: ResponseHeadersPolicyReferrerPolicy,
  context: __SerdeContext
): any => {
  const bn = new __XmlNode(_RHPRP);
  if (input[_Ov] != null) {
    bn.c(__XmlNode.of(_b, String(input[_Ov])).n(_Ov));
  }
  if (input[_RP] != null) {
    bn.c(__XmlNode.of(_RPL, input[_RP]).n(_RP));
  }
  return bn;
};

/**
 * serializeAws_restXmlResponseHeadersPolicyRemoveHeader
 */
const se_ResponseHeadersPolicyRemoveHeader = (
  input: ResponseHeadersPolicyRemoveHeader,
  context: __SerdeContext
): any => {
  const bn = new __XmlNode(_RHPRH);
  if (input[_H] != null) {
    bn.c(__XmlNode.of(_st, input[_H]).n(_H));
  }
  return bn;
};

/**
 * serializeAws_restXmlResponseHeadersPolicyRemoveHeaderList
 */
const se_ResponseHeadersPolicyRemoveHeaderList = (
  input: ResponseHeadersPolicyRemoveHeader[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_ResponseHeadersPolicyRemoveHeader(entry, context);
      return n.n(_RHPRH);
    });
};

/**
 * serializeAws_restXmlResponseHeadersPolicyRemoveHeadersConfig
 */
const se_ResponseHeadersPolicyRemoveHeadersConfig = (
  input: ResponseHeadersPolicyRemoveHeadersConfig,
  context: __SerdeContext
): any => {
  const bn = new __XmlNode(_RHPRHC);
  if (input[_Q] != null) {
    bn.c(__XmlNode.of(_i, String(input[_Q])).n(_Q));
  }
  bn.lc(input, "Items", "Items", () => se_ResponseHeadersPolicyRemoveHeaderList(input[_I]!, context));
  return bn;
};

/**
 * serializeAws_restXmlResponseHeadersPolicySecurityHeadersConfig
 */
const se_ResponseHeadersPolicySecurityHeadersConfig = (
  input: ResponseHeadersPolicySecurityHeadersConfig,
  context: __SerdeContext
): any => {
  const bn = new __XmlNode(_RHPSHC);
  if (input[_XSSP] != null) {
    bn.c(se_ResponseHeadersPolicyXSSProtection(input[_XSSP], context).n(_XSSP));
  }
  if (input[_FOr] != null) {
    bn.c(se_ResponseHeadersPolicyFrameOptions(input[_FOr], context).n(_FOr));
  }
  if (input[_RP] != null) {
    bn.c(se_ResponseHeadersPolicyReferrerPolicy(input[_RP], context).n(_RP));
  }
  if (input[_CSP] != null) {
    bn.c(se_ResponseHeadersPolicyContentSecurityPolicy(input[_CSP], context).n(_CSP));
  }
  if (input[_CTO] != null) {
    bn.c(se_ResponseHeadersPolicyContentTypeOptions(input[_CTO], context).n(_CTO));
  }
  if (input[_STS] != null) {
    bn.c(se_ResponseHeadersPolicyStrictTransportSecurity(input[_STS], context).n(_STS));
  }
  return bn;
};

/**
 * serializeAws_restXmlResponseHeadersPolicyServerTimingHeadersConfig
 */
const se_ResponseHeadersPolicyServerTimingHeadersConfig = (
  input: ResponseHeadersPolicyServerTimingHeadersConfig,
  context: __SerdeContext
): any => {
  const bn = new __XmlNode(_RHPSTHC);
  if (input[_E] != null) {
    bn.c(__XmlNode.of(_b, String(input[_E])).n(_E));
  }
  if (input[_SR] != null) {
    bn.c(__XmlNode.of(_SR, String(input[_SR])).n(_SR));
  }
  return bn;
};

/**
 * serializeAws_restXmlResponseHeadersPolicyStrictTransportSecurity
 */
const se_ResponseHeadersPolicyStrictTransportSecurity = (
  input: ResponseHeadersPolicyStrictTransportSecurity,
  context: __SerdeContext
): any => {
  const bn = new __XmlNode(_RHPSTS);
  if (input[_Ov] != null) {
    bn.c(__XmlNode.of(_b, String(input[_Ov])).n(_Ov));
  }
  if (input[_ISn] != null) {
    bn.c(__XmlNode.of(_b, String(input[_ISn])).n(_ISn));
  }
  if (input[_Pre] != null) {
    bn.c(__XmlNode.of(_b, String(input[_Pre])).n(_Pre));
  }
  if (input[_ACMAS] != null) {
    bn.c(__XmlNode.of(_i, String(input[_ACMAS])).n(_ACMAS));
  }
  return bn;
};

/**
 * serializeAws_restXmlResponseHeadersPolicyXSSProtection
 */
const se_ResponseHeadersPolicyXSSProtection = (
  input: ResponseHeadersPolicyXSSProtection,
  context: __SerdeContext
): any => {
  const bn = new __XmlNode(_RHPXSSP);
  if (input[_Ov] != null) {
    bn.c(__XmlNode.of(_b, String(input[_Ov])).n(_Ov));
  }
  if (input[_Pro] != null) {
    bn.c(__XmlNode.of(_b, String(input[_Pro])).n(_Pro));
  }
  if (input[_MB] != null) {
    bn.c(__XmlNode.of(_b, String(input[_MB])).n(_MB));
  }
  if (input[_RU] != null) {
    bn.c(__XmlNode.of(_st, input[_RU]).n(_RU));
  }
  return bn;
};

/**
 * serializeAws_restXmlRestrictions
 */
const se_Restrictions = (input: Restrictions, context: __SerdeContext): any => {
  const bn = new __XmlNode(_Re);
  if (input[_GR] != null) {
    bn.c(se_GeoRestriction(input[_GR], context).n(_GR));
  }
  return bn;
};

/**
 * serializeAws_restXmlS3Origin
 */
const se_S3Origin = (input: S3Origin, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SO);
  if (input[_DN] != null) {
    bn.c(__XmlNode.of(_st, input[_DN]).n(_DN));
  }
  if (input[_OAI] != null) {
    bn.c(__XmlNode.of(_st, input[_OAI]).n(_OAI));
  }
  return bn;
};

/**
 * serializeAws_restXmlS3OriginConfig
 */
const se_S3OriginConfig = (input: S3OriginConfig, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SOC);
  if (input[_OAI] != null) {
    bn.c(__XmlNode.of(_st, input[_OAI]).n(_OAI));
  }
  return bn;
};

/**
 * serializeAws_restXmlSessionStickinessConfig
 */
const se_SessionStickinessConfig = (input: SessionStickinessConfig, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SSC);
  if (input[_ITTL] != null) {
    bn.c(__XmlNode.of(_i, String(input[_ITTL])).n(_ITTL));
  }
  if (input[_MTTLax] != null) {
    bn.c(__XmlNode.of(_i, String(input[_MTTLax])).n(_MTTLax));
  }
  return bn;
};

/**
 * serializeAws_restXmlSslProtocolsList
 */
const se_SslProtocolsList = (input: SslProtocol[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_SPs, entry);
      return n.n(_SPs);
    });
};

/**
 * serializeAws_restXmlStagingDistributionDnsNameList
 */
const se_StagingDistributionDnsNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_st, entry);
      return n.n(_DNn);
    });
};

/**
 * serializeAws_restXmlStagingDistributionDnsNames
 */
const se_StagingDistributionDnsNames = (input: StagingDistributionDnsNames, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SDDN);
  if (input[_Q] != null) {
    bn.c(__XmlNode.of(_i, String(input[_Q])).n(_Q));
  }
  bn.lc(input, "Items", "Items", () => se_StagingDistributionDnsNameList(input[_I]!, context));
  return bn;
};

/**
 * serializeAws_restXmlStatusCodeList
 */
const se_StatusCodeList = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_i, String(entry));
      return n.n(_SCt);
    });
};

/**
 * serializeAws_restXmlStatusCodes
 */
const se_StatusCodes = (input: StatusCodes, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SC);
  if (input[_Q] != null) {
    bn.c(__XmlNode.of(_i, String(input[_Q])).n(_Q));
  }
  bn.lc(input, "Items", "Items", () => se_StatusCodeList(input[_I]!, context));
  return bn;
};

/**
 * serializeAws_restXmlStreamingDistributionConfig
 */
const se_StreamingDistributionConfig = (input: StreamingDistributionConfig, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SDC);
  if (input[_CR] != null) {
    bn.c(__XmlNode.of(_st, input[_CR]).n(_CR));
  }
  if (input[_SO] != null) {
    bn.c(se_S3Origin(input[_SO], context).n(_SO));
  }
  if (input[_Al] != null) {
    bn.c(se_Aliases(input[_Al], context).n(_Al));
  }
  if (input[_C] != null) {
    bn.c(__XmlNode.of(_st, input[_C]).n(_C));
  }
  if (input[_Lo] != null) {
    bn.c(se_StreamingLoggingConfig(input[_Lo], context).n(_Lo));
  }
  if (input[_TS] != null) {
    bn.c(se_TrustedSigners(input[_TS], context).n(_TS));
  }
  bn.cc(input, _PC);
  if (input[_E] != null) {
    bn.c(__XmlNode.of(_b, String(input[_E])).n(_E));
  }
  return bn;
};

/**
 * serializeAws_restXmlStreamingDistributionConfigWithTags
 */
const se_StreamingDistributionConfigWithTags = (
  input: StreamingDistributionConfigWithTags,
  context: __SerdeContext
): any => {
  const bn = new __XmlNode(_SDCWT);
  if (input[_SDC] != null) {
    bn.c(se_StreamingDistributionConfig(input[_SDC], context).n(_SDC));
  }
  if (input[_Ta] != null) {
    bn.c(se_Tags(input[_Ta], context).n(_Ta));
  }
  return bn;
};

/**
 * serializeAws_restXmlStreamingLoggingConfig
 */
const se_StreamingLoggingConfig = (input: StreamingLoggingConfig, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SLC);
  if (input[_E] != null) {
    bn.c(__XmlNode.of(_b, String(input[_E])).n(_E));
  }
  if (input[_B] != null) {
    bn.c(__XmlNode.of(_st, input[_B]).n(_B));
  }
  if (input[_Pr] != null) {
    bn.c(__XmlNode.of(_st, input[_Pr]).n(_Pr));
  }
  return bn;
};

/**
 * serializeAws_restXmlTag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  const bn = new __XmlNode(_Tag);
  if (input[_K] != null) {
    bn.c(__XmlNode.of(_TK, input[_K]).n(_K));
  }
  if (input[_V] != null) {
    bn.c(__XmlNode.of(_TV, input[_V]).n(_V));
  }
  return bn;
};

/**
 * serializeAws_restXmlTagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_TK, entry);
      return n.n(_K);
    });
};

/**
 * serializeAws_restXmlTagKeys
 */
const se_TagKeys = (input: TagKeys, context: __SerdeContext): any => {
  const bn = new __XmlNode(_TKa);
  bn.lc(input, "Items", "Items", () => se_TagKeyList(input[_I]!, context));
  return bn;
};

/**
 * serializeAws_restXmlTagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_Tag(entry, context);
      return n.n(_Tag);
    });
};

/**
 * serializeAws_restXmlTags
 */
const se_Tags = (input: Tags, context: __SerdeContext): any => {
  const bn = new __XmlNode(_Ta);
  bn.lc(input, "Items", "Items", () => se_TagList(input[_I]!, context));
  return bn;
};

/**
 * serializeAws_restXmlTrafficConfig
 */
const se_TrafficConfig = (input: TrafficConfig, context: __SerdeContext): any => {
  const bn = new __XmlNode(_TC);
  if (input[_SWC] != null) {
    bn.c(se_ContinuousDeploymentSingleWeightConfig(input[_SWC], context).n(_SWC));
  }
  if (input[_SHCi] != null) {
    bn.c(se_ContinuousDeploymentSingleHeaderConfig(input[_SHCi], context).n(_SHCi));
  }
  if (input[_T] != null) {
    bn.c(__XmlNode.of(_CDPT, input[_T]).n(_T));
  }
  return bn;
};

/**
 * serializeAws_restXmlTrustedKeyGroupIdList
 */
const se_TrustedKeyGroupIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_st, entry);
      return n.n(_KG);
    });
};

/**
 * serializeAws_restXmlTrustedKeyGroups
 */
const se_TrustedKeyGroups = (input: TrustedKeyGroups, context: __SerdeContext): any => {
  const bn = new __XmlNode(_TKG);
  if (input[_E] != null) {
    bn.c(__XmlNode.of(_b, String(input[_E])).n(_E));
  }
  if (input[_Q] != null) {
    bn.c(__XmlNode.of(_i, String(input[_Q])).n(_Q));
  }
  bn.lc(input, "Items", "Items", () => se_TrustedKeyGroupIdList(input[_I]!, context));
  return bn;
};

/**
 * serializeAws_restXmlTrustedSigners
 */
const se_TrustedSigners = (input: TrustedSigners, context: __SerdeContext): any => {
  const bn = new __XmlNode(_TS);
  if (input[_E] != null) {
    bn.c(__XmlNode.of(_b, String(input[_E])).n(_E));
  }
  if (input[_Q] != null) {
    bn.c(__XmlNode.of(_i, String(input[_Q])).n(_Q));
  }
  bn.lc(input, "Items", "Items", () => se_AwsAccountNumberList(input[_I]!, context));
  return bn;
};

/**
 * serializeAws_restXmlViewerCertificate
 */
const se_ViewerCertificate = (input: ViewerCertificate, context: __SerdeContext): any => {
  const bn = new __XmlNode(_VC);
  if (input[_CFDC] != null) {
    bn.c(__XmlNode.of(_b, String(input[_CFDC])).n(_CFDC));
  }
  if (input[_IAMCI] != null) {
    bn.c(__XmlNode.of(_st, input[_IAMCI]).n(_IAMCI));
  }
  if (input[_ACMCA] != null) {
    bn.c(__XmlNode.of(_st, input[_ACMCA]).n(_ACMCA));
  }
  bn.cc(input, _SSLSM);
  bn.cc(input, _MPV);
  if (input[_Ce] != null) {
    bn.c(__XmlNode.of(_st, input[_Ce]).n(_Ce));
  }
  bn.cc(input, _CS);
  return bn;
};

/**
 * deserializeAws_restXmlAccessControlAllowHeadersList
 */
const de_AccessControlAllowHeadersList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlAccessControlAllowMethodsList
 */
const de_AccessControlAllowMethodsList = (
  output: any,
  context: __SerdeContext
): ResponseHeadersPolicyAccessControlAllowMethodsValues[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlAccessControlAllowOriginsList
 */
const de_AccessControlAllowOriginsList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlAccessControlExposeHeadersList
 */
const de_AccessControlExposeHeadersList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlActiveTrustedKeyGroups
 */
const de_ActiveTrustedKeyGroups = (output: any, context: __SerdeContext): ActiveTrustedKeyGroups => {
  const contents: any = {};
  if (output[_E] != null) {
    contents[_E] = __parseBoolean(output[_E]);
  }
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_KG] != null) {
    contents[_I] = de_KGKeyPairIdsList(__getArrayIfSingleItem(output[_I][_KG]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlActiveTrustedSigners
 */
const de_ActiveTrustedSigners = (output: any, context: __SerdeContext): ActiveTrustedSigners => {
  const contents: any = {};
  if (output[_E] != null) {
    contents[_E] = __parseBoolean(output[_E]);
  }
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_Si] != null) {
    contents[_I] = de_SignerList(__getArrayIfSingleItem(output[_I][_Si]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlAliases
 */
const de_Aliases = (output: any, context: __SerdeContext): Aliases => {
  const contents: any = {};
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_CNAME] != null) {
    contents[_I] = de_AliasList(__getArrayIfSingleItem(output[_I][_CNAME]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlAliasICPRecordal
 */
const de_AliasICPRecordal = (output: any, context: __SerdeContext): AliasICPRecordal => {
  const contents: any = {};
  if (output[_CNAME] != null) {
    contents[_CNAME] = __expectString(output[_CNAME]);
  }
  if (output[_ICPRS] != null) {
    contents[_ICPRS] = __expectString(output[_ICPRS]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlAliasICPRecordals
 */
const de_AliasICPRecordals = (output: any, context: __SerdeContext): AliasICPRecordal[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AliasICPRecordal(entry, context);
    });
};

/**
 * deserializeAws_restXmlAliasList
 */
const de_AliasList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlAllowedMethods
 */
const de_AllowedMethods = (output: any, context: __SerdeContext): AllowedMethods => {
  const contents: any = {};
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_Met] != null) {
    contents[_I] = de_MethodsList(__getArrayIfSingleItem(output[_I][_Met]), context);
  }
  if (output[_CM] != null) {
    contents[_CM] = de_CachedMethods(output[_CM], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlAwsAccountNumberList
 */
const de_AwsAccountNumberList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlCacheBehavior
 */
const de_CacheBehavior = (output: any, context: __SerdeContext): CacheBehavior => {
  const contents: any = {};
  if (output[_PP] != null) {
    contents[_PP] = __expectString(output[_PP]);
  }
  if (output[_TOI] != null) {
    contents[_TOI] = __expectString(output[_TOI]);
  }
  if (output[_TS] != null) {
    contents[_TS] = de_TrustedSigners(output[_TS], context);
  }
  if (output[_TKG] != null) {
    contents[_TKG] = de_TrustedKeyGroups(output[_TKG], context);
  }
  if (output[_VPP] != null) {
    contents[_VPP] = __expectString(output[_VPP]);
  }
  if (output[_AM] != null) {
    contents[_AM] = de_AllowedMethods(output[_AM], context);
  }
  if (output[_SS] != null) {
    contents[_SS] = __parseBoolean(output[_SS]);
  }
  if (output[_Co] != null) {
    contents[_Co] = __parseBoolean(output[_Co]);
  }
  if (output[_LFA] != null) {
    contents[_LFA] = de_LambdaFunctionAssociations(output[_LFA], context);
  }
  if (output[_FA] != null) {
    contents[_FA] = de_FunctionAssociations(output[_FA], context);
  }
  if (output[_FLEI] != null) {
    contents[_FLEI] = __expectString(output[_FLEI]);
  }
  if (output[_RLCA] != null) {
    contents[_RLCA] = __expectString(output[_RLCA]);
  }
  if (output[_CPI] != null) {
    contents[_CPI] = __expectString(output[_CPI]);
  }
  if (output[_ORPI] != null) {
    contents[_ORPI] = __expectString(output[_ORPI]);
  }
  if (output[_RHPI] != null) {
    contents[_RHPI] = __expectString(output[_RHPI]);
  }
  if (output[_FV] != null) {
    contents[_FV] = de_ForwardedValues(output[_FV], context);
  }
  if (output[_MTTL] != null) {
    contents[_MTTL] = __strictParseLong(output[_MTTL]) as number;
  }
  if (output[_DTTL] != null) {
    contents[_DTTL] = __strictParseLong(output[_DTTL]) as number;
  }
  if (output[_MTTLa] != null) {
    contents[_MTTLa] = __strictParseLong(output[_MTTLa]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlCacheBehaviorList
 */
const de_CacheBehaviorList = (output: any, context: __SerdeContext): CacheBehavior[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CacheBehavior(entry, context);
    });
};

/**
 * deserializeAws_restXmlCacheBehaviors
 */
const de_CacheBehaviors = (output: any, context: __SerdeContext): CacheBehaviors => {
  const contents: any = {};
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_CB] != null) {
    contents[_I] = de_CacheBehaviorList(__getArrayIfSingleItem(output[_I][_CB]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCachedMethods
 */
const de_CachedMethods = (output: any, context: __SerdeContext): CachedMethods => {
  const contents: any = {};
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_Met] != null) {
    contents[_I] = de_MethodsList(__getArrayIfSingleItem(output[_I][_Met]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCachePolicy
 */
const de_CachePolicy = (output: any, context: __SerdeContext): CachePolicy => {
  const contents: any = {};
  if (output[_Id] != null) {
    contents[_Id] = __expectString(output[_Id]);
  }
  if (output[_LMT] != null) {
    contents[_LMT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LMT]));
  }
  if (output[_CPC] != null) {
    contents[_CPC] = de_CachePolicyConfig(output[_CPC], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCachePolicyConfig
 */
const de_CachePolicyConfig = (output: any, context: __SerdeContext): CachePolicyConfig => {
  const contents: any = {};
  if (output[_C] != null) {
    contents[_C] = __expectString(output[_C]);
  }
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_DTTL] != null) {
    contents[_DTTL] = __strictParseLong(output[_DTTL]) as number;
  }
  if (output[_MTTLa] != null) {
    contents[_MTTLa] = __strictParseLong(output[_MTTLa]) as number;
  }
  if (output[_MTTL] != null) {
    contents[_MTTL] = __strictParseLong(output[_MTTL]) as number;
  }
  if (output[_PICKAFTO] != null) {
    contents[_PICKAFTO] = de_ParametersInCacheKeyAndForwardedToOrigin(output[_PICKAFTO], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCachePolicyCookiesConfig
 */
const de_CachePolicyCookiesConfig = (output: any, context: __SerdeContext): CachePolicyCookiesConfig => {
  const contents: any = {};
  if (output[_CBo] != null) {
    contents[_CBo] = __expectString(output[_CBo]);
  }
  if (output[_Coo] != null) {
    contents[_Coo] = de_CookieNames(output[_Coo], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCachePolicyHeadersConfig
 */
const de_CachePolicyHeadersConfig = (output: any, context: __SerdeContext): CachePolicyHeadersConfig => {
  const contents: any = {};
  if (output[_HB] != null) {
    contents[_HB] = __expectString(output[_HB]);
  }
  if (output[_He] != null) {
    contents[_He] = de_Headers(output[_He], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCachePolicyList
 */
const de_CachePolicyList = (output: any, context: __SerdeContext): CachePolicyList => {
  const contents: any = {};
  if (output[_NM] != null) {
    contents[_NM] = __expectString(output[_NM]);
  }
  if (output[_MI] != null) {
    contents[_MI] = __strictParseInt32(output[_MI]) as number;
  }
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_CPS] != null) {
    contents[_I] = de_CachePolicySummaryList(__getArrayIfSingleItem(output[_I][_CPS]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCachePolicyQueryStringsConfig
 */
const de_CachePolicyQueryStringsConfig = (output: any, context: __SerdeContext): CachePolicyQueryStringsConfig => {
  const contents: any = {};
  if (output[_QSB] != null) {
    contents[_QSB] = __expectString(output[_QSB]);
  }
  if (output[_QS] != null) {
    contents[_QS] = de_QueryStringNames(output[_QS], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCachePolicySummary
 */
const de_CachePolicySummary = (output: any, context: __SerdeContext): CachePolicySummary => {
  const contents: any = {};
  if (output[_T] != null) {
    contents[_T] = __expectString(output[_T]);
  }
  if (output[_CPa] != null) {
    contents[_CPa] = de_CachePolicy(output[_CPa], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCachePolicySummaryList
 */
const de_CachePolicySummaryList = (output: any, context: __SerdeContext): CachePolicySummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CachePolicySummary(entry, context);
    });
};

/**
 * deserializeAws_restXmlCloudFrontOriginAccessIdentity
 */
const de_CloudFrontOriginAccessIdentity = (output: any, context: __SerdeContext): CloudFrontOriginAccessIdentity => {
  const contents: any = {};
  if (output[_Id] != null) {
    contents[_Id] = __expectString(output[_Id]);
  }
  if (output[_SCUI] != null) {
    contents[_SCUI] = __expectString(output[_SCUI]);
  }
  if (output[_CFOAIC] != null) {
    contents[_CFOAIC] = de_CloudFrontOriginAccessIdentityConfig(output[_CFOAIC], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCloudFrontOriginAccessIdentityConfig
 */
const de_CloudFrontOriginAccessIdentityConfig = (
  output: any,
  context: __SerdeContext
): CloudFrontOriginAccessIdentityConfig => {
  const contents: any = {};
  if (output[_CR] != null) {
    contents[_CR] = __expectString(output[_CR]);
  }
  if (output[_C] != null) {
    contents[_C] = __expectString(output[_C]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCloudFrontOriginAccessIdentityList
 */
const de_CloudFrontOriginAccessIdentityList = (
  output: any,
  context: __SerdeContext
): CloudFrontOriginAccessIdentityList => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (output[_NM] != null) {
    contents[_NM] = __expectString(output[_NM]);
  }
  if (output[_MI] != null) {
    contents[_MI] = __strictParseInt32(output[_MI]) as number;
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_CFOAIS] != null) {
    contents[_I] = de_CloudFrontOriginAccessIdentitySummaryList(__getArrayIfSingleItem(output[_I][_CFOAIS]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCloudFrontOriginAccessIdentitySummary
 */
const de_CloudFrontOriginAccessIdentitySummary = (
  output: any,
  context: __SerdeContext
): CloudFrontOriginAccessIdentitySummary => {
  const contents: any = {};
  if (output[_Id] != null) {
    contents[_Id] = __expectString(output[_Id]);
  }
  if (output[_SCUI] != null) {
    contents[_SCUI] = __expectString(output[_SCUI]);
  }
  if (output[_C] != null) {
    contents[_C] = __expectString(output[_C]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCloudFrontOriginAccessIdentitySummaryList
 */
const de_CloudFrontOriginAccessIdentitySummaryList = (
  output: any,
  context: __SerdeContext
): CloudFrontOriginAccessIdentitySummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CloudFrontOriginAccessIdentitySummary(entry, context);
    });
};

/**
 * deserializeAws_restXmlConflictingAlias
 */
const de_ConflictingAlias = (output: any, context: __SerdeContext): ConflictingAlias => {
  const contents: any = {};
  if (output[_A] != null) {
    contents[_A] = __expectString(output[_A]);
  }
  if (output[_DI] != null) {
    contents[_DI] = __expectString(output[_DI]);
  }
  if (output[_AI] != null) {
    contents[_AI] = __expectString(output[_AI]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlConflictingAliases
 */
const de_ConflictingAliases = (output: any, context: __SerdeContext): ConflictingAlias[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ConflictingAlias(entry, context);
    });
};

/**
 * deserializeAws_restXmlConflictingAliasesList
 */
const de_ConflictingAliasesList = (output: any, context: __SerdeContext): ConflictingAliasesList => {
  const contents: any = {};
  if (output[_NM] != null) {
    contents[_NM] = __expectString(output[_NM]);
  }
  if (output[_MI] != null) {
    contents[_MI] = __strictParseInt32(output[_MI]) as number;
  }
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_CAo] != null) {
    contents[_I] = de_ConflictingAliases(__getArrayIfSingleItem(output[_I][_CAo]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlContentTypeProfile
 */
const de_ContentTypeProfile = (output: any, context: __SerdeContext): ContentTypeProfile => {
  const contents: any = {};
  if (output[_Fo] != null) {
    contents[_Fo] = __expectString(output[_Fo]);
  }
  if (output[_PI] != null) {
    contents[_PI] = __expectString(output[_PI]);
  }
  if (output[_CT] != null) {
    contents[_CT] = __expectString(output[_CT]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlContentTypeProfileConfig
 */
const de_ContentTypeProfileConfig = (output: any, context: __SerdeContext): ContentTypeProfileConfig => {
  const contents: any = {};
  if (output[_FWCTIU] != null) {
    contents[_FWCTIU] = __parseBoolean(output[_FWCTIU]);
  }
  if (output[_CTPo] != null) {
    contents[_CTPo] = de_ContentTypeProfiles(output[_CTPo], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlContentTypeProfileList
 */
const de_ContentTypeProfileList = (output: any, context: __SerdeContext): ContentTypeProfile[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ContentTypeProfile(entry, context);
    });
};

/**
 * deserializeAws_restXmlContentTypeProfiles
 */
const de_ContentTypeProfiles = (output: any, context: __SerdeContext): ContentTypeProfiles => {
  const contents: any = {};
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_CTP] != null) {
    contents[_I] = de_ContentTypeProfileList(__getArrayIfSingleItem(output[_I][_CTP]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlContinuousDeploymentPolicy
 */
const de_ContinuousDeploymentPolicy = (output: any, context: __SerdeContext): ContinuousDeploymentPolicy => {
  const contents: any = {};
  if (output[_Id] != null) {
    contents[_Id] = __expectString(output[_Id]);
  }
  if (output[_LMT] != null) {
    contents[_LMT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LMT]));
  }
  if (output[_CDPC] != null) {
    contents[_CDPC] = de_ContinuousDeploymentPolicyConfig(output[_CDPC], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlContinuousDeploymentPolicyConfig
 */
const de_ContinuousDeploymentPolicyConfig = (
  output: any,
  context: __SerdeContext
): ContinuousDeploymentPolicyConfig => {
  const contents: any = {};
  if (output[_SDDN] != null) {
    contents[_SDDN] = de_StagingDistributionDnsNames(output[_SDDN], context);
  }
  if (output[_E] != null) {
    contents[_E] = __parseBoolean(output[_E]);
  }
  if (output[_TC] != null) {
    contents[_TC] = de_TrafficConfig(output[_TC], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlContinuousDeploymentPolicyList
 */
const de_ContinuousDeploymentPolicyList = (output: any, context: __SerdeContext): ContinuousDeploymentPolicyList => {
  const contents: any = {};
  if (output[_NM] != null) {
    contents[_NM] = __expectString(output[_NM]);
  }
  if (output[_MI] != null) {
    contents[_MI] = __strictParseInt32(output[_MI]) as number;
  }
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_CDPS] != null) {
    contents[_I] = de_ContinuousDeploymentPolicySummaryList(__getArrayIfSingleItem(output[_I][_CDPS]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlContinuousDeploymentPolicySummary
 */
const de_ContinuousDeploymentPolicySummary = (
  output: any,
  context: __SerdeContext
): ContinuousDeploymentPolicySummary => {
  const contents: any = {};
  if (output[_CDP] != null) {
    contents[_CDP] = de_ContinuousDeploymentPolicy(output[_CDP], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlContinuousDeploymentPolicySummaryList
 */
const de_ContinuousDeploymentPolicySummaryList = (
  output: any,
  context: __SerdeContext
): ContinuousDeploymentPolicySummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ContinuousDeploymentPolicySummary(entry, context);
    });
};

/**
 * deserializeAws_restXmlContinuousDeploymentSingleHeaderConfig
 */
const de_ContinuousDeploymentSingleHeaderConfig = (
  output: any,
  context: __SerdeContext
): ContinuousDeploymentSingleHeaderConfig => {
  const contents: any = {};
  if (output[_H] != null) {
    contents[_H] = __expectString(output[_H]);
  }
  if (output[_V] != null) {
    contents[_V] = __expectString(output[_V]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlContinuousDeploymentSingleWeightConfig
 */
const de_ContinuousDeploymentSingleWeightConfig = (
  output: any,
  context: __SerdeContext
): ContinuousDeploymentSingleWeightConfig => {
  const contents: any = {};
  if (output[_W] != null) {
    contents[_W] = __strictParseFloat(output[_W]) as number;
  }
  if (output[_SSC] != null) {
    contents[_SSC] = de_SessionStickinessConfig(output[_SSC], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCookieNameList
 */
const de_CookieNameList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlCookieNames
 */
const de_CookieNames = (output: any, context: __SerdeContext): CookieNames => {
  const contents: any = {};
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_N] != null) {
    contents[_I] = de_CookieNameList(__getArrayIfSingleItem(output[_I][_N]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCookiePreference
 */
const de_CookiePreference = (output: any, context: __SerdeContext): CookiePreference => {
  const contents: any = {};
  if (output[_For] != null) {
    contents[_For] = __expectString(output[_For]);
  }
  if (output[_WN] != null) {
    contents[_WN] = de_CookieNames(output[_WN], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCustomErrorResponse
 */
const de_CustomErrorResponse = (output: any, context: __SerdeContext): CustomErrorResponse => {
  const contents: any = {};
  if (output[_EC] != null) {
    contents[_EC] = __strictParseInt32(output[_EC]) as number;
  }
  if (output[_RPP] != null) {
    contents[_RPP] = __expectString(output[_RPP]);
  }
  if (output[_RC] != null) {
    contents[_RC] = __expectString(output[_RC]);
  }
  if (output[_ECMTTL] != null) {
    contents[_ECMTTL] = __strictParseLong(output[_ECMTTL]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlCustomErrorResponseList
 */
const de_CustomErrorResponseList = (output: any, context: __SerdeContext): CustomErrorResponse[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CustomErrorResponse(entry, context);
    });
};

/**
 * deserializeAws_restXmlCustomErrorResponses
 */
const de_CustomErrorResponses = (output: any, context: __SerdeContext): CustomErrorResponses => {
  const contents: any = {};
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_CER] != null) {
    contents[_I] = de_CustomErrorResponseList(__getArrayIfSingleItem(output[_I][_CER]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCustomHeaders
 */
const de_CustomHeaders = (output: any, context: __SerdeContext): CustomHeaders => {
  const contents: any = {};
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_OCH] != null) {
    contents[_I] = de_OriginCustomHeadersList(__getArrayIfSingleItem(output[_I][_OCH]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCustomOriginConfig
 */
const de_CustomOriginConfig = (output: any, context: __SerdeContext): CustomOriginConfig => {
  const contents: any = {};
  if (output[_HTTPP] != null) {
    contents[_HTTPP] = __strictParseInt32(output[_HTTPP]) as number;
  }
  if (output[_HTTPSP] != null) {
    contents[_HTTPSP] = __strictParseInt32(output[_HTTPSP]) as number;
  }
  if (output[_OPP] != null) {
    contents[_OPP] = __expectString(output[_OPP]);
  }
  if (output[_OSP] != null) {
    contents[_OSP] = de_OriginSslProtocols(output[_OSP], context);
  }
  if (output[_ORT] != null) {
    contents[_ORT] = __strictParseInt32(output[_ORT]) as number;
  }
  if (output[_OKT] != null) {
    contents[_OKT] = __strictParseInt32(output[_OKT]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlDefaultCacheBehavior
 */
const de_DefaultCacheBehavior = (output: any, context: __SerdeContext): DefaultCacheBehavior => {
  const contents: any = {};
  if (output[_TOI] != null) {
    contents[_TOI] = __expectString(output[_TOI]);
  }
  if (output[_TS] != null) {
    contents[_TS] = de_TrustedSigners(output[_TS], context);
  }
  if (output[_TKG] != null) {
    contents[_TKG] = de_TrustedKeyGroups(output[_TKG], context);
  }
  if (output[_VPP] != null) {
    contents[_VPP] = __expectString(output[_VPP]);
  }
  if (output[_AM] != null) {
    contents[_AM] = de_AllowedMethods(output[_AM], context);
  }
  if (output[_SS] != null) {
    contents[_SS] = __parseBoolean(output[_SS]);
  }
  if (output[_Co] != null) {
    contents[_Co] = __parseBoolean(output[_Co]);
  }
  if (output[_LFA] != null) {
    contents[_LFA] = de_LambdaFunctionAssociations(output[_LFA], context);
  }
  if (output[_FA] != null) {
    contents[_FA] = de_FunctionAssociations(output[_FA], context);
  }
  if (output[_FLEI] != null) {
    contents[_FLEI] = __expectString(output[_FLEI]);
  }
  if (output[_RLCA] != null) {
    contents[_RLCA] = __expectString(output[_RLCA]);
  }
  if (output[_CPI] != null) {
    contents[_CPI] = __expectString(output[_CPI]);
  }
  if (output[_ORPI] != null) {
    contents[_ORPI] = __expectString(output[_ORPI]);
  }
  if (output[_RHPI] != null) {
    contents[_RHPI] = __expectString(output[_RHPI]);
  }
  if (output[_FV] != null) {
    contents[_FV] = de_ForwardedValues(output[_FV], context);
  }
  if (output[_MTTL] != null) {
    contents[_MTTL] = __strictParseLong(output[_MTTL]) as number;
  }
  if (output[_DTTL] != null) {
    contents[_DTTL] = __strictParseLong(output[_DTTL]) as number;
  }
  if (output[_MTTLa] != null) {
    contents[_MTTLa] = __strictParseLong(output[_MTTLa]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlDistribution
 */
const de_Distribution = (output: any, context: __SerdeContext): Distribution => {
  const contents: any = {};
  if (output[_Id] != null) {
    contents[_Id] = __expectString(output[_Id]);
  }
  if (output[_ARN] != null) {
    contents[_ARN] = __expectString(output[_ARN]);
  }
  if (output[_Sta] != null) {
    contents[_Sta] = __expectString(output[_Sta]);
  }
  if (output[_LMT] != null) {
    contents[_LMT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LMT]));
  }
  if (output[_IPIB] != null) {
    contents[_IPIB] = __strictParseInt32(output[_IPIB]) as number;
  }
  if (output[_DN] != null) {
    contents[_DN] = __expectString(output[_DN]);
  }
  if (output[_ATS] != null) {
    contents[_ATS] = de_ActiveTrustedSigners(output[_ATS], context);
  }
  if (output[_ATKG] != null) {
    contents[_ATKG] = de_ActiveTrustedKeyGroups(output[_ATKG], context);
  }
  if (output[_DC] != null) {
    contents[_DC] = de_DistributionConfig(output[_DC], context);
  }
  if (output.AliasICPRecordals === "") {
    contents[_AICPR] = [];
  } else if (output[_AICPR] != null && output[_AICPR][_AICPRl] != null) {
    contents[_AICPR] = de_AliasICPRecordals(__getArrayIfSingleItem(output[_AICPR][_AICPRl]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlDistributionConfig
 */
const de_DistributionConfig = (output: any, context: __SerdeContext): DistributionConfig => {
  const contents: any = {};
  if (output[_CR] != null) {
    contents[_CR] = __expectString(output[_CR]);
  }
  if (output[_Al] != null) {
    contents[_Al] = de_Aliases(output[_Al], context);
  }
  if (output[_DRO] != null) {
    contents[_DRO] = __expectString(output[_DRO]);
  }
  if (output[_Ori] != null) {
    contents[_Ori] = de_Origins(output[_Ori], context);
  }
  if (output[_OG] != null) {
    contents[_OG] = de_OriginGroups(output[_OG], context);
  }
  if (output[_DCB] != null) {
    contents[_DCB] = de_DefaultCacheBehavior(output[_DCB], context);
  }
  if (output[_CBa] != null) {
    contents[_CBa] = de_CacheBehaviors(output[_CBa], context);
  }
  if (output[_CERu] != null) {
    contents[_CERu] = de_CustomErrorResponses(output[_CERu], context);
  }
  if (output[_C] != null) {
    contents[_C] = __expectString(output[_C]);
  }
  if (output[_Lo] != null) {
    contents[_Lo] = de_LoggingConfig(output[_Lo], context);
  }
  if (output[_PC] != null) {
    contents[_PC] = __expectString(output[_PC]);
  }
  if (output[_E] != null) {
    contents[_E] = __parseBoolean(output[_E]);
  }
  if (output[_VC] != null) {
    contents[_VC] = de_ViewerCertificate(output[_VC], context);
  }
  if (output[_Re] != null) {
    contents[_Re] = de_Restrictions(output[_Re], context);
  }
  if (output[_WACLI] != null) {
    contents[_WACLI] = __expectString(output[_WACLI]);
  }
  if (output[_HV] != null) {
    contents[_HV] = __expectString(output[_HV]);
  }
  if (output[_IIPVE] != null) {
    contents[_IIPVE] = __parseBoolean(output[_IIPVE]);
  }
  if (output[_CDPI] != null) {
    contents[_CDPI] = __expectString(output[_CDPI]);
  }
  if (output[_S] != null) {
    contents[_S] = __parseBoolean(output[_S]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlDistributionIdList
 */
const de_DistributionIdList = (output: any, context: __SerdeContext): DistributionIdList => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (output[_NM] != null) {
    contents[_NM] = __expectString(output[_NM]);
  }
  if (output[_MI] != null) {
    contents[_MI] = __strictParseInt32(output[_MI]) as number;
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_DI] != null) {
    contents[_I] = de_DistributionIdListSummary(__getArrayIfSingleItem(output[_I][_DI]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlDistributionIdListSummary
 */
const de_DistributionIdListSummary = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlDistributionList
 */
const de_DistributionList = (output: any, context: __SerdeContext): DistributionList => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (output[_NM] != null) {
    contents[_NM] = __expectString(output[_NM]);
  }
  if (output[_MI] != null) {
    contents[_MI] = __strictParseInt32(output[_MI]) as number;
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_DS] != null) {
    contents[_I] = de_DistributionSummaryList(__getArrayIfSingleItem(output[_I][_DS]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlDistributionSummary
 */
const de_DistributionSummary = (output: any, context: __SerdeContext): DistributionSummary => {
  const contents: any = {};
  if (output[_Id] != null) {
    contents[_Id] = __expectString(output[_Id]);
  }
  if (output[_ARN] != null) {
    contents[_ARN] = __expectString(output[_ARN]);
  }
  if (output[_Sta] != null) {
    contents[_Sta] = __expectString(output[_Sta]);
  }
  if (output[_LMT] != null) {
    contents[_LMT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LMT]));
  }
  if (output[_DN] != null) {
    contents[_DN] = __expectString(output[_DN]);
  }
  if (output[_Al] != null) {
    contents[_Al] = de_Aliases(output[_Al], context);
  }
  if (output[_Ori] != null) {
    contents[_Ori] = de_Origins(output[_Ori], context);
  }
  if (output[_OG] != null) {
    contents[_OG] = de_OriginGroups(output[_OG], context);
  }
  if (output[_DCB] != null) {
    contents[_DCB] = de_DefaultCacheBehavior(output[_DCB], context);
  }
  if (output[_CBa] != null) {
    contents[_CBa] = de_CacheBehaviors(output[_CBa], context);
  }
  if (output[_CERu] != null) {
    contents[_CERu] = de_CustomErrorResponses(output[_CERu], context);
  }
  if (output[_C] != null) {
    contents[_C] = __expectString(output[_C]);
  }
  if (output[_PC] != null) {
    contents[_PC] = __expectString(output[_PC]);
  }
  if (output[_E] != null) {
    contents[_E] = __parseBoolean(output[_E]);
  }
  if (output[_VC] != null) {
    contents[_VC] = de_ViewerCertificate(output[_VC], context);
  }
  if (output[_Re] != null) {
    contents[_Re] = de_Restrictions(output[_Re], context);
  }
  if (output[_WACLI] != null) {
    contents[_WACLI] = __expectString(output[_WACLI]);
  }
  if (output[_HV] != null) {
    contents[_HV] = __expectString(output[_HV]);
  }
  if (output[_IIPVE] != null) {
    contents[_IIPVE] = __parseBoolean(output[_IIPVE]);
  }
  if (output.AliasICPRecordals === "") {
    contents[_AICPR] = [];
  } else if (output[_AICPR] != null && output[_AICPR][_AICPRl] != null) {
    contents[_AICPR] = de_AliasICPRecordals(__getArrayIfSingleItem(output[_AICPR][_AICPRl]), context);
  }
  if (output[_S] != null) {
    contents[_S] = __parseBoolean(output[_S]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlDistributionSummaryList
 */
const de_DistributionSummaryList = (output: any, context: __SerdeContext): DistributionSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DistributionSummary(entry, context);
    });
};

/**
 * deserializeAws_restXmlEncryptionEntities
 */
const de_EncryptionEntities = (output: any, context: __SerdeContext): EncryptionEntities => {
  const contents: any = {};
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_EEn] != null) {
    contents[_I] = de_EncryptionEntityList(__getArrayIfSingleItem(output[_I][_EEn]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlEncryptionEntity
 */
const de_EncryptionEntity = (output: any, context: __SerdeContext): EncryptionEntity => {
  const contents: any = {};
  if (output[_PKI] != null) {
    contents[_PKI] = __expectString(output[_PKI]);
  }
  if (output[_PIr] != null) {
    contents[_PIr] = __expectString(output[_PIr]);
  }
  if (output[_FP] != null) {
    contents[_FP] = de_FieldPatterns(output[_FP], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlEncryptionEntityList
 */
const de_EncryptionEntityList = (output: any, context: __SerdeContext): EncryptionEntity[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EncryptionEntity(entry, context);
    });
};

/**
 * deserializeAws_restXmlEndPoint
 */
const de_EndPoint = (output: any, context: __SerdeContext): EndPoint => {
  const contents: any = {};
  if (output[_ST] != null) {
    contents[_ST] = __expectString(output[_ST]);
  }
  if (output[_KSC] != null) {
    contents[_KSC] = de_KinesisStreamConfig(output[_KSC], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlEndPointList
 */
const de_EndPointList = (output: any, context: __SerdeContext): EndPoint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EndPoint(entry, context);
    });
};

/**
 * deserializeAws_restXmlFieldLevelEncryption
 */
const de_FieldLevelEncryption = (output: any, context: __SerdeContext): FieldLevelEncryption => {
  const contents: any = {};
  if (output[_Id] != null) {
    contents[_Id] = __expectString(output[_Id]);
  }
  if (output[_LMT] != null) {
    contents[_LMT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LMT]));
  }
  if (output[_FLEC] != null) {
    contents[_FLEC] = de_FieldLevelEncryptionConfig(output[_FLEC], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlFieldLevelEncryptionConfig
 */
const de_FieldLevelEncryptionConfig = (output: any, context: __SerdeContext): FieldLevelEncryptionConfig => {
  const contents: any = {};
  if (output[_CR] != null) {
    contents[_CR] = __expectString(output[_CR]);
  }
  if (output[_C] != null) {
    contents[_C] = __expectString(output[_C]);
  }
  if (output[_QAPC] != null) {
    contents[_QAPC] = de_QueryArgProfileConfig(output[_QAPC], context);
  }
  if (output[_CTPC] != null) {
    contents[_CTPC] = de_ContentTypeProfileConfig(output[_CTPC], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlFieldLevelEncryptionList
 */
const de_FieldLevelEncryptionList = (output: any, context: __SerdeContext): FieldLevelEncryptionList => {
  const contents: any = {};
  if (output[_NM] != null) {
    contents[_NM] = __expectString(output[_NM]);
  }
  if (output[_MI] != null) {
    contents[_MI] = __strictParseInt32(output[_MI]) as number;
  }
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_FLES] != null) {
    contents[_I] = de_FieldLevelEncryptionSummaryList(__getArrayIfSingleItem(output[_I][_FLES]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlFieldLevelEncryptionProfile
 */
const de_FieldLevelEncryptionProfile = (output: any, context: __SerdeContext): FieldLevelEncryptionProfile => {
  const contents: any = {};
  if (output[_Id] != null) {
    contents[_Id] = __expectString(output[_Id]);
  }
  if (output[_LMT] != null) {
    contents[_LMT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LMT]));
  }
  if (output[_FLEPC] != null) {
    contents[_FLEPC] = de_FieldLevelEncryptionProfileConfig(output[_FLEPC], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlFieldLevelEncryptionProfileConfig
 */
const de_FieldLevelEncryptionProfileConfig = (
  output: any,
  context: __SerdeContext
): FieldLevelEncryptionProfileConfig => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_CR] != null) {
    contents[_CR] = __expectString(output[_CR]);
  }
  if (output[_C] != null) {
    contents[_C] = __expectString(output[_C]);
  }
  if (output[_EE] != null) {
    contents[_EE] = de_EncryptionEntities(output[_EE], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlFieldLevelEncryptionProfileList
 */
const de_FieldLevelEncryptionProfileList = (output: any, context: __SerdeContext): FieldLevelEncryptionProfileList => {
  const contents: any = {};
  if (output[_NM] != null) {
    contents[_NM] = __expectString(output[_NM]);
  }
  if (output[_MI] != null) {
    contents[_MI] = __strictParseInt32(output[_MI]) as number;
  }
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_FLEPS] != null) {
    contents[_I] = de_FieldLevelEncryptionProfileSummaryList(__getArrayIfSingleItem(output[_I][_FLEPS]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlFieldLevelEncryptionProfileSummary
 */
const de_FieldLevelEncryptionProfileSummary = (
  output: any,
  context: __SerdeContext
): FieldLevelEncryptionProfileSummary => {
  const contents: any = {};
  if (output[_Id] != null) {
    contents[_Id] = __expectString(output[_Id]);
  }
  if (output[_LMT] != null) {
    contents[_LMT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LMT]));
  }
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_EE] != null) {
    contents[_EE] = de_EncryptionEntities(output[_EE], context);
  }
  if (output[_C] != null) {
    contents[_C] = __expectString(output[_C]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlFieldLevelEncryptionProfileSummaryList
 */
const de_FieldLevelEncryptionProfileSummaryList = (
  output: any,
  context: __SerdeContext
): FieldLevelEncryptionProfileSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FieldLevelEncryptionProfileSummary(entry, context);
    });
};

/**
 * deserializeAws_restXmlFieldLevelEncryptionSummary
 */
const de_FieldLevelEncryptionSummary = (output: any, context: __SerdeContext): FieldLevelEncryptionSummary => {
  const contents: any = {};
  if (output[_Id] != null) {
    contents[_Id] = __expectString(output[_Id]);
  }
  if (output[_LMT] != null) {
    contents[_LMT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LMT]));
  }
  if (output[_C] != null) {
    contents[_C] = __expectString(output[_C]);
  }
  if (output[_QAPC] != null) {
    contents[_QAPC] = de_QueryArgProfileConfig(output[_QAPC], context);
  }
  if (output[_CTPC] != null) {
    contents[_CTPC] = de_ContentTypeProfileConfig(output[_CTPC], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlFieldLevelEncryptionSummaryList
 */
const de_FieldLevelEncryptionSummaryList = (output: any, context: __SerdeContext): FieldLevelEncryptionSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FieldLevelEncryptionSummary(entry, context);
    });
};

/**
 * deserializeAws_restXmlFieldList
 */
const de_FieldList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlFieldPatternList
 */
const de_FieldPatternList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlFieldPatterns
 */
const de_FieldPatterns = (output: any, context: __SerdeContext): FieldPatterns => {
  const contents: any = {};
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_FPi] != null) {
    contents[_I] = de_FieldPatternList(__getArrayIfSingleItem(output[_I][_FPi]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlForwardedValues
 */
const de_ForwardedValues = (output: any, context: __SerdeContext): ForwardedValues => {
  const contents: any = {};
  if (output[_QSu] != null) {
    contents[_QSu] = __parseBoolean(output[_QSu]);
  }
  if (output[_Coo] != null) {
    contents[_Coo] = de_CookiePreference(output[_Coo], context);
  }
  if (output[_He] != null) {
    contents[_He] = de_Headers(output[_He], context);
  }
  if (output[_QSCK] != null) {
    contents[_QSCK] = de_QueryStringCacheKeys(output[_QSCK], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlFunctionAssociation
 */
const de_FunctionAssociation = (output: any, context: __SerdeContext): FunctionAssociation => {
  const contents: any = {};
  if (output[_FARN] != null) {
    contents[_FARN] = __expectString(output[_FARN]);
  }
  if (output[_ETv] != null) {
    contents[_ETv] = __expectString(output[_ETv]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlFunctionAssociationList
 */
const de_FunctionAssociationList = (output: any, context: __SerdeContext): FunctionAssociation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FunctionAssociation(entry, context);
    });
};

/**
 * deserializeAws_restXmlFunctionAssociations
 */
const de_FunctionAssociations = (output: any, context: __SerdeContext): FunctionAssociations => {
  const contents: any = {};
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_FAu] != null) {
    contents[_I] = de_FunctionAssociationList(__getArrayIfSingleItem(output[_I][_FAu]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlFunctionConfig
 */
const de_FunctionConfig = (output: any, context: __SerdeContext): FunctionConfig => {
  const contents: any = {};
  if (output[_C] != null) {
    contents[_C] = __expectString(output[_C]);
  }
  if (output[_Ru] != null) {
    contents[_Ru] = __expectString(output[_Ru]);
  }
  if (output[_KVSA] != null) {
    contents[_KVSA] = de_KeyValueStoreAssociations(output[_KVSA], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlFunctionExecutionLogList
 */
const de_FunctionExecutionLogList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlFunctionList
 */
const de_FunctionList = (output: any, context: __SerdeContext): FunctionList => {
  const contents: any = {};
  if (output[_NM] != null) {
    contents[_NM] = __expectString(output[_NM]);
  }
  if (output[_MI] != null) {
    contents[_MI] = __strictParseInt32(output[_MI]) as number;
  }
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_FSu] != null) {
    contents[_I] = de_FunctionSummaryList(__getArrayIfSingleItem(output[_I][_FSu]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlFunctionMetadata
 */
const de_FunctionMetadata = (output: any, context: __SerdeContext): FunctionMetadata => {
  const contents: any = {};
  if (output[_FARN] != null) {
    contents[_FARN] = __expectString(output[_FARN]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_CTr] != null) {
    contents[_CTr] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CTr]));
  }
  if (output[_LMT] != null) {
    contents[_LMT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LMT]));
  }
  return contents;
};

/**
 * deserializeAws_restXmlFunctionSummary
 */
const de_FunctionSummary = (output: any, context: __SerdeContext): FunctionSummary => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_Sta] != null) {
    contents[_Sta] = __expectString(output[_Sta]);
  }
  if (output[_FCu] != null) {
    contents[_FCu] = de_FunctionConfig(output[_FCu], context);
  }
  if (output[_FM] != null) {
    contents[_FM] = de_FunctionMetadata(output[_FM], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlFunctionSummaryList
 */
const de_FunctionSummaryList = (output: any, context: __SerdeContext): FunctionSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FunctionSummary(entry, context);
    });
};

/**
 * deserializeAws_restXmlGeoRestriction
 */
const de_GeoRestriction = (output: any, context: __SerdeContext): GeoRestriction => {
  const contents: any = {};
  if (output[_RT] != null) {
    contents[_RT] = __expectString(output[_RT]);
  }
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_L] != null) {
    contents[_I] = de_LocationList(__getArrayIfSingleItem(output[_I][_L]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlHeaderList
 */
const de_HeaderList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlHeaders
 */
const de_Headers = (output: any, context: __SerdeContext): Headers => {
  const contents: any = {};
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_N] != null) {
    contents[_I] = de_HeaderList(__getArrayIfSingleItem(output[_I][_N]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlInvalidation
 */
const de_Invalidation = (output: any, context: __SerdeContext): Invalidation => {
  const contents: any = {};
  if (output[_Id] != null) {
    contents[_Id] = __expectString(output[_Id]);
  }
  if (output[_Sta] != null) {
    contents[_Sta] = __expectString(output[_Sta]);
  }
  if (output[_CTre] != null) {
    contents[_CTre] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CTre]));
  }
  if (output[_IB] != null) {
    contents[_IB] = de_InvalidationBatch(output[_IB], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlInvalidationBatch
 */
const de_InvalidationBatch = (output: any, context: __SerdeContext): InvalidationBatch => {
  const contents: any = {};
  if (output[_P] != null) {
    contents[_P] = de_Paths(output[_P], context);
  }
  if (output[_CR] != null) {
    contents[_CR] = __expectString(output[_CR]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlInvalidationList
 */
const de_InvalidationList = (output: any, context: __SerdeContext): InvalidationList => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (output[_NM] != null) {
    contents[_NM] = __expectString(output[_NM]);
  }
  if (output[_MI] != null) {
    contents[_MI] = __strictParseInt32(output[_MI]) as number;
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_ISnv] != null) {
    contents[_I] = de_InvalidationSummaryList(__getArrayIfSingleItem(output[_I][_ISnv]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlInvalidationSummary
 */
const de_InvalidationSummary = (output: any, context: __SerdeContext): InvalidationSummary => {
  const contents: any = {};
  if (output[_Id] != null) {
    contents[_Id] = __expectString(output[_Id]);
  }
  if (output[_CTre] != null) {
    contents[_CTre] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CTre]));
  }
  if (output[_Sta] != null) {
    contents[_Sta] = __expectString(output[_Sta]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlInvalidationSummaryList
 */
const de_InvalidationSummaryList = (output: any, context: __SerdeContext): InvalidationSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InvalidationSummary(entry, context);
    });
};

/**
 * deserializeAws_restXmlKeyGroup
 */
const de_KeyGroup = (output: any, context: __SerdeContext): KeyGroup => {
  const contents: any = {};
  if (output[_Id] != null) {
    contents[_Id] = __expectString(output[_Id]);
  }
  if (output[_LMT] != null) {
    contents[_LMT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LMT]));
  }
  if (output[_KGC] != null) {
    contents[_KGC] = de_KeyGroupConfig(output[_KGC], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlKeyGroupConfig
 */
const de_KeyGroupConfig = (output: any, context: __SerdeContext): KeyGroupConfig => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_PK] != null) {
    contents[_I] = de_PublicKeyIdList(__getArrayIfSingleItem(output[_I][_PK]), context);
  }
  if (output[_C] != null) {
    contents[_C] = __expectString(output[_C]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlKeyGroupList
 */
const de_KeyGroupList = (output: any, context: __SerdeContext): KeyGroupList => {
  const contents: any = {};
  if (output[_NM] != null) {
    contents[_NM] = __expectString(output[_NM]);
  }
  if (output[_MI] != null) {
    contents[_MI] = __strictParseInt32(output[_MI]) as number;
  }
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_KGS] != null) {
    contents[_I] = de_KeyGroupSummaryList(__getArrayIfSingleItem(output[_I][_KGS]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlKeyGroupSummary
 */
const de_KeyGroupSummary = (output: any, context: __SerdeContext): KeyGroupSummary => {
  const contents: any = {};
  if (output[_KG] != null) {
    contents[_KG] = de_KeyGroup(output[_KG], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlKeyGroupSummaryList
 */
const de_KeyGroupSummaryList = (output: any, context: __SerdeContext): KeyGroupSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_KeyGroupSummary(entry, context);
    });
};

/**
 * deserializeAws_restXmlKeyPairIdList
 */
const de_KeyPairIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlKeyPairIds
 */
const de_KeyPairIds = (output: any, context: __SerdeContext): KeyPairIds => {
  const contents: any = {};
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_KPI] != null) {
    contents[_I] = de_KeyPairIdList(__getArrayIfSingleItem(output[_I][_KPI]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlKeyValueStore
 */
const de_KeyValueStore = (output: any, context: __SerdeContext): KeyValueStore => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_Id] != null) {
    contents[_Id] = __expectString(output[_Id]);
  }
  if (output[_C] != null) {
    contents[_C] = __expectString(output[_C]);
  }
  if (output[_ARN] != null) {
    contents[_ARN] = __expectString(output[_ARN]);
  }
  if (output[_Sta] != null) {
    contents[_Sta] = __expectString(output[_Sta]);
  }
  if (output[_LMT] != null) {
    contents[_LMT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LMT]));
  }
  return contents;
};

/**
 * deserializeAws_restXmlKeyValueStoreAssociation
 */
const de_KeyValueStoreAssociation = (output: any, context: __SerdeContext): KeyValueStoreAssociation => {
  const contents: any = {};
  if (output[_KVSARN] != null) {
    contents[_KVSARN] = __expectString(output[_KVSARN]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlKeyValueStoreAssociationList
 */
const de_KeyValueStoreAssociationList = (output: any, context: __SerdeContext): KeyValueStoreAssociation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_KeyValueStoreAssociation(entry, context);
    });
};

/**
 * deserializeAws_restXmlKeyValueStoreAssociations
 */
const de_KeyValueStoreAssociations = (output: any, context: __SerdeContext): KeyValueStoreAssociations => {
  const contents: any = {};
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_KVSAe] != null) {
    contents[_I] = de_KeyValueStoreAssociationList(__getArrayIfSingleItem(output[_I][_KVSAe]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlKeyValueStoreList
 */
const de_KeyValueStoreList = (output: any, context: __SerdeContext): KeyValueStoreList => {
  const contents: any = {};
  if (output[_NM] != null) {
    contents[_NM] = __expectString(output[_NM]);
  }
  if (output[_MI] != null) {
    contents[_MI] = __strictParseInt32(output[_MI]) as number;
  }
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_KVS] != null) {
    contents[_I] = de_KeyValueStoreSummaryList(__getArrayIfSingleItem(output[_I][_KVS]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlKeyValueStoreSummaryList
 */
const de_KeyValueStoreSummaryList = (output: any, context: __SerdeContext): KeyValueStore[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_KeyValueStore(entry, context);
    });
};

/**
 * deserializeAws_restXmlKGKeyPairIds
 */
const de_KGKeyPairIds = (output: any, context: __SerdeContext): KGKeyPairIds => {
  const contents: any = {};
  if (output[_KGI] != null) {
    contents[_KGI] = __expectString(output[_KGI]);
  }
  if (output[_KPIe] != null) {
    contents[_KPIe] = de_KeyPairIds(output[_KPIe], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlKGKeyPairIdsList
 */
const de_KGKeyPairIdsList = (output: any, context: __SerdeContext): KGKeyPairIds[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_KGKeyPairIds(entry, context);
    });
};

/**
 * deserializeAws_restXmlKinesisStreamConfig
 */
const de_KinesisStreamConfig = (output: any, context: __SerdeContext): KinesisStreamConfig => {
  const contents: any = {};
  if (output[_RARN] != null) {
    contents[_RARN] = __expectString(output[_RARN]);
  }
  if (output[_SARNt] != null) {
    contents[_SARNt] = __expectString(output[_SARNt]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlLambdaFunctionAssociation
 */
const de_LambdaFunctionAssociation = (output: any, context: __SerdeContext): LambdaFunctionAssociation => {
  const contents: any = {};
  if (output[_LFARN] != null) {
    contents[_LFARN] = __expectString(output[_LFARN]);
  }
  if (output[_ETv] != null) {
    contents[_ETv] = __expectString(output[_ETv]);
  }
  if (output[_IBn] != null) {
    contents[_IBn] = __parseBoolean(output[_IBn]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlLambdaFunctionAssociationList
 */
const de_LambdaFunctionAssociationList = (output: any, context: __SerdeContext): LambdaFunctionAssociation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LambdaFunctionAssociation(entry, context);
    });
};

/**
 * deserializeAws_restXmlLambdaFunctionAssociations
 */
const de_LambdaFunctionAssociations = (output: any, context: __SerdeContext): LambdaFunctionAssociations => {
  const contents: any = {};
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_LFAa] != null) {
    contents[_I] = de_LambdaFunctionAssociationList(__getArrayIfSingleItem(output[_I][_LFAa]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlLocationList
 */
const de_LocationList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlLoggingConfig
 */
const de_LoggingConfig = (output: any, context: __SerdeContext): LoggingConfig => {
  const contents: any = {};
  if (output[_E] != null) {
    contents[_E] = __parseBoolean(output[_E]);
  }
  if (output[_IC] != null) {
    contents[_IC] = __parseBoolean(output[_IC]);
  }
  if (output[_B] != null) {
    contents[_B] = __expectString(output[_B]);
  }
  if (output[_Pr] != null) {
    contents[_Pr] = __expectString(output[_Pr]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlMethodsList
 */
const de_MethodsList = (output: any, context: __SerdeContext): Method[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlMonitoringSubscription
 */
const de_MonitoringSubscription = (output: any, context: __SerdeContext): MonitoringSubscription => {
  const contents: any = {};
  if (output[_RMSC] != null) {
    contents[_RMSC] = de_RealtimeMetricsSubscriptionConfig(output[_RMSC], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlOrigin
 */
const de_Origin = (output: any, context: __SerdeContext): Origin => {
  const contents: any = {};
  if (output[_Id] != null) {
    contents[_Id] = __expectString(output[_Id]);
  }
  if (output[_DN] != null) {
    contents[_DN] = __expectString(output[_DN]);
  }
  if (output[_OP] != null) {
    contents[_OP] = __expectString(output[_OP]);
  }
  if (output[_CH] != null) {
    contents[_CH] = de_CustomHeaders(output[_CH], context);
  }
  if (output[_SOC] != null) {
    contents[_SOC] = de_S3OriginConfig(output[_SOC], context);
  }
  if (output[_COC] != null) {
    contents[_COC] = de_CustomOriginConfig(output[_COC], context);
  }
  if (output[_CA] != null) {
    contents[_CA] = __strictParseInt32(output[_CA]) as number;
  }
  if (output[_CTon] != null) {
    contents[_CTon] = __strictParseInt32(output[_CTon]) as number;
  }
  if (output[_OS] != null) {
    contents[_OS] = de_OriginShield(output[_OS], context);
  }
  if (output[_OACI] != null) {
    contents[_OACI] = __expectString(output[_OACI]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlOriginAccessControl
 */
const de_OriginAccessControl = (output: any, context: __SerdeContext): OriginAccessControl => {
  const contents: any = {};
  if (output[_Id] != null) {
    contents[_Id] = __expectString(output[_Id]);
  }
  if (output[_OACC] != null) {
    contents[_OACC] = de_OriginAccessControlConfig(output[_OACC], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlOriginAccessControlConfig
 */
const de_OriginAccessControlConfig = (output: any, context: __SerdeContext): OriginAccessControlConfig => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_SP] != null) {
    contents[_SP] = __expectString(output[_SP]);
  }
  if (output[_SB] != null) {
    contents[_SB] = __expectString(output[_SB]);
  }
  if (output[_OACOT] != null) {
    contents[_OACOT] = __expectString(output[_OACOT]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlOriginAccessControlList
 */
const de_OriginAccessControlList = (output: any, context: __SerdeContext): OriginAccessControlList => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (output[_NM] != null) {
    contents[_NM] = __expectString(output[_NM]);
  }
  if (output[_MI] != null) {
    contents[_MI] = __strictParseInt32(output[_MI]) as number;
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_OACS] != null) {
    contents[_I] = de_OriginAccessControlSummaryList(__getArrayIfSingleItem(output[_I][_OACS]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlOriginAccessControlSummary
 */
const de_OriginAccessControlSummary = (output: any, context: __SerdeContext): OriginAccessControlSummary => {
  const contents: any = {};
  if (output[_Id] != null) {
    contents[_Id] = __expectString(output[_Id]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_SP] != null) {
    contents[_SP] = __expectString(output[_SP]);
  }
  if (output[_SB] != null) {
    contents[_SB] = __expectString(output[_SB]);
  }
  if (output[_OACOT] != null) {
    contents[_OACOT] = __expectString(output[_OACOT]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlOriginAccessControlSummaryList
 */
const de_OriginAccessControlSummaryList = (output: any, context: __SerdeContext): OriginAccessControlSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OriginAccessControlSummary(entry, context);
    });
};

/**
 * deserializeAws_restXmlOriginCustomHeader
 */
const de_OriginCustomHeader = (output: any, context: __SerdeContext): OriginCustomHeader => {
  const contents: any = {};
  if (output[_HN] != null) {
    contents[_HN] = __expectString(output[_HN]);
  }
  if (output[_HVe] != null) {
    contents[_HVe] = __expectString(output[_HVe]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlOriginCustomHeadersList
 */
const de_OriginCustomHeadersList = (output: any, context: __SerdeContext): OriginCustomHeader[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OriginCustomHeader(entry, context);
    });
};

/**
 * deserializeAws_restXmlOriginGroup
 */
const de_OriginGroup = (output: any, context: __SerdeContext): OriginGroup => {
  const contents: any = {};
  if (output[_Id] != null) {
    contents[_Id] = __expectString(output[_Id]);
  }
  if (output[_FCa] != null) {
    contents[_FCa] = de_OriginGroupFailoverCriteria(output[_FCa], context);
  }
  if (output[_Mem] != null) {
    contents[_Mem] = de_OriginGroupMembers(output[_Mem], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlOriginGroupFailoverCriteria
 */
const de_OriginGroupFailoverCriteria = (output: any, context: __SerdeContext): OriginGroupFailoverCriteria => {
  const contents: any = {};
  if (output[_SC] != null) {
    contents[_SC] = de_StatusCodes(output[_SC], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlOriginGroupList
 */
const de_OriginGroupList = (output: any, context: __SerdeContext): OriginGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OriginGroup(entry, context);
    });
};

/**
 * deserializeAws_restXmlOriginGroupMember
 */
const de_OriginGroupMember = (output: any, context: __SerdeContext): OriginGroupMember => {
  const contents: any = {};
  if (output[_OI] != null) {
    contents[_OI] = __expectString(output[_OI]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlOriginGroupMemberList
 */
const de_OriginGroupMemberList = (output: any, context: __SerdeContext): OriginGroupMember[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OriginGroupMember(entry, context);
    });
};

/**
 * deserializeAws_restXmlOriginGroupMembers
 */
const de_OriginGroupMembers = (output: any, context: __SerdeContext): OriginGroupMembers => {
  const contents: any = {};
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_OGM] != null) {
    contents[_I] = de_OriginGroupMemberList(__getArrayIfSingleItem(output[_I][_OGM]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlOriginGroups
 */
const de_OriginGroups = (output: any, context: __SerdeContext): OriginGroups => {
  const contents: any = {};
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_OGr] != null) {
    contents[_I] = de_OriginGroupList(__getArrayIfSingleItem(output[_I][_OGr]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlOriginList
 */
const de_OriginList = (output: any, context: __SerdeContext): Origin[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Origin(entry, context);
    });
};

/**
 * deserializeAws_restXmlOriginRequestPolicy
 */
const de_OriginRequestPolicy = (output: any, context: __SerdeContext): OriginRequestPolicy => {
  const contents: any = {};
  if (output[_Id] != null) {
    contents[_Id] = __expectString(output[_Id]);
  }
  if (output[_LMT] != null) {
    contents[_LMT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LMT]));
  }
  if (output[_ORPC] != null) {
    contents[_ORPC] = de_OriginRequestPolicyConfig(output[_ORPC], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlOriginRequestPolicyConfig
 */
const de_OriginRequestPolicyConfig = (output: any, context: __SerdeContext): OriginRequestPolicyConfig => {
  const contents: any = {};
  if (output[_C] != null) {
    contents[_C] = __expectString(output[_C]);
  }
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_HC] != null) {
    contents[_HC] = de_OriginRequestPolicyHeadersConfig(output[_HC], context);
  }
  if (output[_CC] != null) {
    contents[_CC] = de_OriginRequestPolicyCookiesConfig(output[_CC], context);
  }
  if (output[_QSC] != null) {
    contents[_QSC] = de_OriginRequestPolicyQueryStringsConfig(output[_QSC], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlOriginRequestPolicyCookiesConfig
 */
const de_OriginRequestPolicyCookiesConfig = (
  output: any,
  context: __SerdeContext
): OriginRequestPolicyCookiesConfig => {
  const contents: any = {};
  if (output[_CBo] != null) {
    contents[_CBo] = __expectString(output[_CBo]);
  }
  if (output[_Coo] != null) {
    contents[_Coo] = de_CookieNames(output[_Coo], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlOriginRequestPolicyHeadersConfig
 */
const de_OriginRequestPolicyHeadersConfig = (
  output: any,
  context: __SerdeContext
): OriginRequestPolicyHeadersConfig => {
  const contents: any = {};
  if (output[_HB] != null) {
    contents[_HB] = __expectString(output[_HB]);
  }
  if (output[_He] != null) {
    contents[_He] = de_Headers(output[_He], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlOriginRequestPolicyList
 */
const de_OriginRequestPolicyList = (output: any, context: __SerdeContext): OriginRequestPolicyList => {
  const contents: any = {};
  if (output[_NM] != null) {
    contents[_NM] = __expectString(output[_NM]);
  }
  if (output[_MI] != null) {
    contents[_MI] = __strictParseInt32(output[_MI]) as number;
  }
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_ORPS] != null) {
    contents[_I] = de_OriginRequestPolicySummaryList(__getArrayIfSingleItem(output[_I][_ORPS]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlOriginRequestPolicyQueryStringsConfig
 */
const de_OriginRequestPolicyQueryStringsConfig = (
  output: any,
  context: __SerdeContext
): OriginRequestPolicyQueryStringsConfig => {
  const contents: any = {};
  if (output[_QSB] != null) {
    contents[_QSB] = __expectString(output[_QSB]);
  }
  if (output[_QS] != null) {
    contents[_QS] = de_QueryStringNames(output[_QS], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlOriginRequestPolicySummary
 */
const de_OriginRequestPolicySummary = (output: any, context: __SerdeContext): OriginRequestPolicySummary => {
  const contents: any = {};
  if (output[_T] != null) {
    contents[_T] = __expectString(output[_T]);
  }
  if (output[_ORP] != null) {
    contents[_ORP] = de_OriginRequestPolicy(output[_ORP], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlOriginRequestPolicySummaryList
 */
const de_OriginRequestPolicySummaryList = (output: any, context: __SerdeContext): OriginRequestPolicySummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OriginRequestPolicySummary(entry, context);
    });
};

/**
 * deserializeAws_restXmlOrigins
 */
const de_Origins = (output: any, context: __SerdeContext): Origins => {
  const contents: any = {};
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_Or] != null) {
    contents[_I] = de_OriginList(__getArrayIfSingleItem(output[_I][_Or]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlOriginShield
 */
const de_OriginShield = (output: any, context: __SerdeContext): OriginShield => {
  const contents: any = {};
  if (output[_E] != null) {
    contents[_E] = __parseBoolean(output[_E]);
  }
  if (output[_OSR] != null) {
    contents[_OSR] = __expectString(output[_OSR]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlOriginSslProtocols
 */
const de_OriginSslProtocols = (output: any, context: __SerdeContext): OriginSslProtocols => {
  const contents: any = {};
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_SPs] != null) {
    contents[_I] = de_SslProtocolsList(__getArrayIfSingleItem(output[_I][_SPs]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlParametersInCacheKeyAndForwardedToOrigin
 */
const de_ParametersInCacheKeyAndForwardedToOrigin = (
  output: any,
  context: __SerdeContext
): ParametersInCacheKeyAndForwardedToOrigin => {
  const contents: any = {};
  if (output[_EAEG] != null) {
    contents[_EAEG] = __parseBoolean(output[_EAEG]);
  }
  if (output[_EAEB] != null) {
    contents[_EAEB] = __parseBoolean(output[_EAEB]);
  }
  if (output[_HC] != null) {
    contents[_HC] = de_CachePolicyHeadersConfig(output[_HC], context);
  }
  if (output[_CC] != null) {
    contents[_CC] = de_CachePolicyCookiesConfig(output[_CC], context);
  }
  if (output[_QSC] != null) {
    contents[_QSC] = de_CachePolicyQueryStringsConfig(output[_QSC], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlPathList
 */
const de_PathList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlPaths
 */
const de_Paths = (output: any, context: __SerdeContext): Paths => {
  const contents: any = {};
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_Pa] != null) {
    contents[_I] = de_PathList(__getArrayIfSingleItem(output[_I][_Pa]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlPublicKey
 */
const de_PublicKey = (output: any, context: __SerdeContext): PublicKey => {
  const contents: any = {};
  if (output[_Id] != null) {
    contents[_Id] = __expectString(output[_Id]);
  }
  if (output[_CTr] != null) {
    contents[_CTr] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CTr]));
  }
  if (output[_PKC] != null) {
    contents[_PKC] = de_PublicKeyConfig(output[_PKC], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlPublicKeyConfig
 */
const de_PublicKeyConfig = (output: any, context: __SerdeContext): PublicKeyConfig => {
  const contents: any = {};
  if (output[_CR] != null) {
    contents[_CR] = __expectString(output[_CR]);
  }
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_EK] != null) {
    contents[_EK] = __expectString(output[_EK]);
  }
  if (output[_C] != null) {
    contents[_C] = __expectString(output[_C]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlPublicKeyIdList
 */
const de_PublicKeyIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlPublicKeyList
 */
const de_PublicKeyList = (output: any, context: __SerdeContext): PublicKeyList => {
  const contents: any = {};
  if (output[_NM] != null) {
    contents[_NM] = __expectString(output[_NM]);
  }
  if (output[_MI] != null) {
    contents[_MI] = __strictParseInt32(output[_MI]) as number;
  }
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_PKS] != null) {
    contents[_I] = de_PublicKeySummaryList(__getArrayIfSingleItem(output[_I][_PKS]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlPublicKeySummary
 */
const de_PublicKeySummary = (output: any, context: __SerdeContext): PublicKeySummary => {
  const contents: any = {};
  if (output[_Id] != null) {
    contents[_Id] = __expectString(output[_Id]);
  }
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_CTr] != null) {
    contents[_CTr] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CTr]));
  }
  if (output[_EK] != null) {
    contents[_EK] = __expectString(output[_EK]);
  }
  if (output[_C] != null) {
    contents[_C] = __expectString(output[_C]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlPublicKeySummaryList
 */
const de_PublicKeySummaryList = (output: any, context: __SerdeContext): PublicKeySummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PublicKeySummary(entry, context);
    });
};

/**
 * deserializeAws_restXmlQueryArgProfile
 */
const de_QueryArgProfile = (output: any, context: __SerdeContext): QueryArgProfile => {
  const contents: any = {};
  if (output[_QA] != null) {
    contents[_QA] = __expectString(output[_QA]);
  }
  if (output[_PI] != null) {
    contents[_PI] = __expectString(output[_PI]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlQueryArgProfileConfig
 */
const de_QueryArgProfileConfig = (output: any, context: __SerdeContext): QueryArgProfileConfig => {
  const contents: any = {};
  if (output[_FWQAPIU] != null) {
    contents[_FWQAPIU] = __parseBoolean(output[_FWQAPIU]);
  }
  if (output[_QAPu] != null) {
    contents[_QAPu] = de_QueryArgProfiles(output[_QAPu], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlQueryArgProfileList
 */
const de_QueryArgProfileList = (output: any, context: __SerdeContext): QueryArgProfile[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_QueryArgProfile(entry, context);
    });
};

/**
 * deserializeAws_restXmlQueryArgProfiles
 */
const de_QueryArgProfiles = (output: any, context: __SerdeContext): QueryArgProfiles => {
  const contents: any = {};
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_QAP] != null) {
    contents[_I] = de_QueryArgProfileList(__getArrayIfSingleItem(output[_I][_QAP]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlQueryStringCacheKeys
 */
const de_QueryStringCacheKeys = (output: any, context: __SerdeContext): QueryStringCacheKeys => {
  const contents: any = {};
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_N] != null) {
    contents[_I] = de_QueryStringCacheKeysList(__getArrayIfSingleItem(output[_I][_N]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlQueryStringCacheKeysList
 */
const de_QueryStringCacheKeysList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlQueryStringNames
 */
const de_QueryStringNames = (output: any, context: __SerdeContext): QueryStringNames => {
  const contents: any = {};
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_N] != null) {
    contents[_I] = de_QueryStringNamesList(__getArrayIfSingleItem(output[_I][_N]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlQueryStringNamesList
 */
const de_QueryStringNamesList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlRealtimeLogConfig
 */
const de_RealtimeLogConfig = (output: any, context: __SerdeContext): RealtimeLogConfig => {
  const contents: any = {};
  if (output[_ARN] != null) {
    contents[_ARN] = __expectString(output[_ARN]);
  }
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_SR] != null) {
    contents[_SR] = __strictParseLong(output[_SR]) as number;
  }
  if (output.EndPoints === "") {
    contents[_EP] = [];
  } else if (output[_EP] != null && output[_EP][_m] != null) {
    contents[_EP] = de_EndPointList(__getArrayIfSingleItem(output[_EP][_m]), context);
  }
  if (output.Fields === "") {
    contents[_F] = [];
  } else if (output[_F] != null && output[_F][_Fi] != null) {
    contents[_F] = de_FieldList(__getArrayIfSingleItem(output[_F][_Fi]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlRealtimeLogConfigList
 */
const de_RealtimeLogConfigList = (output: any, context: __SerdeContext): RealtimeLogConfig[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RealtimeLogConfig(entry, context);
    });
};

/**
 * deserializeAws_restXmlRealtimeLogConfigs
 */
const de_RealtimeLogConfigs = (output: any, context: __SerdeContext): RealtimeLogConfigs => {
  const contents: any = {};
  if (output[_MI] != null) {
    contents[_MI] = __strictParseInt32(output[_MI]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_m] != null) {
    contents[_I] = de_RealtimeLogConfigList(__getArrayIfSingleItem(output[_I][_m]), context);
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (output[_NM] != null) {
    contents[_NM] = __expectString(output[_NM]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlRealtimeMetricsSubscriptionConfig
 */
const de_RealtimeMetricsSubscriptionConfig = (
  output: any,
  context: __SerdeContext
): RealtimeMetricsSubscriptionConfig => {
  const contents: any = {};
  if (output[_RMSS] != null) {
    contents[_RMSS] = __expectString(output[_RMSS]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlResponseHeadersPolicy
 */
const de_ResponseHeadersPolicy = (output: any, context: __SerdeContext): ResponseHeadersPolicy => {
  const contents: any = {};
  if (output[_Id] != null) {
    contents[_Id] = __expectString(output[_Id]);
  }
  if (output[_LMT] != null) {
    contents[_LMT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LMT]));
  }
  if (output[_RHPC] != null) {
    contents[_RHPC] = de_ResponseHeadersPolicyConfig(output[_RHPC], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlResponseHeadersPolicyAccessControlAllowHeaders
 */
const de_ResponseHeadersPolicyAccessControlAllowHeaders = (
  output: any,
  context: __SerdeContext
): ResponseHeadersPolicyAccessControlAllowHeaders => {
  const contents: any = {};
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_H] != null) {
    contents[_I] = de_AccessControlAllowHeadersList(__getArrayIfSingleItem(output[_I][_H]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlResponseHeadersPolicyAccessControlAllowMethods
 */
const de_ResponseHeadersPolicyAccessControlAllowMethods = (
  output: any,
  context: __SerdeContext
): ResponseHeadersPolicyAccessControlAllowMethods => {
  const contents: any = {};
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_Met] != null) {
    contents[_I] = de_AccessControlAllowMethodsList(__getArrayIfSingleItem(output[_I][_Met]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlResponseHeadersPolicyAccessControlAllowOrigins
 */
const de_ResponseHeadersPolicyAccessControlAllowOrigins = (
  output: any,
  context: __SerdeContext
): ResponseHeadersPolicyAccessControlAllowOrigins => {
  const contents: any = {};
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_Or] != null) {
    contents[_I] = de_AccessControlAllowOriginsList(__getArrayIfSingleItem(output[_I][_Or]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlResponseHeadersPolicyAccessControlExposeHeaders
 */
const de_ResponseHeadersPolicyAccessControlExposeHeaders = (
  output: any,
  context: __SerdeContext
): ResponseHeadersPolicyAccessControlExposeHeaders => {
  const contents: any = {};
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_H] != null) {
    contents[_I] = de_AccessControlExposeHeadersList(__getArrayIfSingleItem(output[_I][_H]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlResponseHeadersPolicyConfig
 */
const de_ResponseHeadersPolicyConfig = (output: any, context: __SerdeContext): ResponseHeadersPolicyConfig => {
  const contents: any = {};
  if (output[_C] != null) {
    contents[_C] = __expectString(output[_C]);
  }
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_CCo] != null) {
    contents[_CCo] = de_ResponseHeadersPolicyCorsConfig(output[_CCo], context);
  }
  if (output[_SHC] != null) {
    contents[_SHC] = de_ResponseHeadersPolicySecurityHeadersConfig(output[_SHC], context);
  }
  if (output[_STHC] != null) {
    contents[_STHC] = de_ResponseHeadersPolicyServerTimingHeadersConfig(output[_STHC], context);
  }
  if (output[_CHC] != null) {
    contents[_CHC] = de_ResponseHeadersPolicyCustomHeadersConfig(output[_CHC], context);
  }
  if (output[_RHC] != null) {
    contents[_RHC] = de_ResponseHeadersPolicyRemoveHeadersConfig(output[_RHC], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlResponseHeadersPolicyContentSecurityPolicy
 */
const de_ResponseHeadersPolicyContentSecurityPolicy = (
  output: any,
  context: __SerdeContext
): ResponseHeadersPolicyContentSecurityPolicy => {
  const contents: any = {};
  if (output[_Ov] != null) {
    contents[_Ov] = __parseBoolean(output[_Ov]);
  }
  if (output[_CSP] != null) {
    contents[_CSP] = __expectString(output[_CSP]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlResponseHeadersPolicyContentTypeOptions
 */
const de_ResponseHeadersPolicyContentTypeOptions = (
  output: any,
  context: __SerdeContext
): ResponseHeadersPolicyContentTypeOptions => {
  const contents: any = {};
  if (output[_Ov] != null) {
    contents[_Ov] = __parseBoolean(output[_Ov]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlResponseHeadersPolicyCorsConfig
 */
const de_ResponseHeadersPolicyCorsConfig = (output: any, context: __SerdeContext): ResponseHeadersPolicyCorsConfig => {
  const contents: any = {};
  if (output[_ACAO] != null) {
    contents[_ACAO] = de_ResponseHeadersPolicyAccessControlAllowOrigins(output[_ACAO], context);
  }
  if (output[_ACAH] != null) {
    contents[_ACAH] = de_ResponseHeadersPolicyAccessControlAllowHeaders(output[_ACAH], context);
  }
  if (output[_ACAM] != null) {
    contents[_ACAM] = de_ResponseHeadersPolicyAccessControlAllowMethods(output[_ACAM], context);
  }
  if (output[_ACAC] != null) {
    contents[_ACAC] = __parseBoolean(output[_ACAC]);
  }
  if (output[_ACEH] != null) {
    contents[_ACEH] = de_ResponseHeadersPolicyAccessControlExposeHeaders(output[_ACEH], context);
  }
  if (output[_ACMAS] != null) {
    contents[_ACMAS] = __strictParseInt32(output[_ACMAS]) as number;
  }
  if (output[_OO] != null) {
    contents[_OO] = __parseBoolean(output[_OO]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlResponseHeadersPolicyCustomHeader
 */
const de_ResponseHeadersPolicyCustomHeader = (
  output: any,
  context: __SerdeContext
): ResponseHeadersPolicyCustomHeader => {
  const contents: any = {};
  if (output[_H] != null) {
    contents[_H] = __expectString(output[_H]);
  }
  if (output[_V] != null) {
    contents[_V] = __expectString(output[_V]);
  }
  if (output[_Ov] != null) {
    contents[_Ov] = __parseBoolean(output[_Ov]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlResponseHeadersPolicyCustomHeaderList
 */
const de_ResponseHeadersPolicyCustomHeaderList = (
  output: any,
  context: __SerdeContext
): ResponseHeadersPolicyCustomHeader[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ResponseHeadersPolicyCustomHeader(entry, context);
    });
};

/**
 * deserializeAws_restXmlResponseHeadersPolicyCustomHeadersConfig
 */
const de_ResponseHeadersPolicyCustomHeadersConfig = (
  output: any,
  context: __SerdeContext
): ResponseHeadersPolicyCustomHeadersConfig => {
  const contents: any = {};
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_RHPCH] != null) {
    contents[_I] = de_ResponseHeadersPolicyCustomHeaderList(__getArrayIfSingleItem(output[_I][_RHPCH]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlResponseHeadersPolicyFrameOptions
 */
const de_ResponseHeadersPolicyFrameOptions = (
  output: any,
  context: __SerdeContext
): ResponseHeadersPolicyFrameOptions => {
  const contents: any = {};
  if (output[_Ov] != null) {
    contents[_Ov] = __parseBoolean(output[_Ov]);
  }
  if (output[_FO] != null) {
    contents[_FO] = __expectString(output[_FO]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlResponseHeadersPolicyList
 */
const de_ResponseHeadersPolicyList = (output: any, context: __SerdeContext): ResponseHeadersPolicyList => {
  const contents: any = {};
  if (output[_NM] != null) {
    contents[_NM] = __expectString(output[_NM]);
  }
  if (output[_MI] != null) {
    contents[_MI] = __strictParseInt32(output[_MI]) as number;
  }
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_RHPS] != null) {
    contents[_I] = de_ResponseHeadersPolicySummaryList(__getArrayIfSingleItem(output[_I][_RHPS]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlResponseHeadersPolicyReferrerPolicy
 */
const de_ResponseHeadersPolicyReferrerPolicy = (
  output: any,
  context: __SerdeContext
): ResponseHeadersPolicyReferrerPolicy => {
  const contents: any = {};
  if (output[_Ov] != null) {
    contents[_Ov] = __parseBoolean(output[_Ov]);
  }
  if (output[_RP] != null) {
    contents[_RP] = __expectString(output[_RP]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlResponseHeadersPolicyRemoveHeader
 */
const de_ResponseHeadersPolicyRemoveHeader = (
  output: any,
  context: __SerdeContext
): ResponseHeadersPolicyRemoveHeader => {
  const contents: any = {};
  if (output[_H] != null) {
    contents[_H] = __expectString(output[_H]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlResponseHeadersPolicyRemoveHeaderList
 */
const de_ResponseHeadersPolicyRemoveHeaderList = (
  output: any,
  context: __SerdeContext
): ResponseHeadersPolicyRemoveHeader[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ResponseHeadersPolicyRemoveHeader(entry, context);
    });
};

/**
 * deserializeAws_restXmlResponseHeadersPolicyRemoveHeadersConfig
 */
const de_ResponseHeadersPolicyRemoveHeadersConfig = (
  output: any,
  context: __SerdeContext
): ResponseHeadersPolicyRemoveHeadersConfig => {
  const contents: any = {};
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_RHPRH] != null) {
    contents[_I] = de_ResponseHeadersPolicyRemoveHeaderList(__getArrayIfSingleItem(output[_I][_RHPRH]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlResponseHeadersPolicySecurityHeadersConfig
 */
const de_ResponseHeadersPolicySecurityHeadersConfig = (
  output: any,
  context: __SerdeContext
): ResponseHeadersPolicySecurityHeadersConfig => {
  const contents: any = {};
  if (output[_XSSP] != null) {
    contents[_XSSP] = de_ResponseHeadersPolicyXSSProtection(output[_XSSP], context);
  }
  if (output[_FOr] != null) {
    contents[_FOr] = de_ResponseHeadersPolicyFrameOptions(output[_FOr], context);
  }
  if (output[_RP] != null) {
    contents[_RP] = de_ResponseHeadersPolicyReferrerPolicy(output[_RP], context);
  }
  if (output[_CSP] != null) {
    contents[_CSP] = de_ResponseHeadersPolicyContentSecurityPolicy(output[_CSP], context);
  }
  if (output[_CTO] != null) {
    contents[_CTO] = de_ResponseHeadersPolicyContentTypeOptions(output[_CTO], context);
  }
  if (output[_STS] != null) {
    contents[_STS] = de_ResponseHeadersPolicyStrictTransportSecurity(output[_STS], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlResponseHeadersPolicyServerTimingHeadersConfig
 */
const de_ResponseHeadersPolicyServerTimingHeadersConfig = (
  output: any,
  context: __SerdeContext
): ResponseHeadersPolicyServerTimingHeadersConfig => {
  const contents: any = {};
  if (output[_E] != null) {
    contents[_E] = __parseBoolean(output[_E]);
  }
  if (output[_SR] != null) {
    contents[_SR] = __strictParseFloat(output[_SR]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlResponseHeadersPolicyStrictTransportSecurity
 */
const de_ResponseHeadersPolicyStrictTransportSecurity = (
  output: any,
  context: __SerdeContext
): ResponseHeadersPolicyStrictTransportSecurity => {
  const contents: any = {};
  if (output[_Ov] != null) {
    contents[_Ov] = __parseBoolean(output[_Ov]);
  }
  if (output[_ISn] != null) {
    contents[_ISn] = __parseBoolean(output[_ISn]);
  }
  if (output[_Pre] != null) {
    contents[_Pre] = __parseBoolean(output[_Pre]);
  }
  if (output[_ACMAS] != null) {
    contents[_ACMAS] = __strictParseInt32(output[_ACMAS]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlResponseHeadersPolicySummary
 */
const de_ResponseHeadersPolicySummary = (output: any, context: __SerdeContext): ResponseHeadersPolicySummary => {
  const contents: any = {};
  if (output[_T] != null) {
    contents[_T] = __expectString(output[_T]);
  }
  if (output[_RHP] != null) {
    contents[_RHP] = de_ResponseHeadersPolicy(output[_RHP], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlResponseHeadersPolicySummaryList
 */
const de_ResponseHeadersPolicySummaryList = (output: any, context: __SerdeContext): ResponseHeadersPolicySummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ResponseHeadersPolicySummary(entry, context);
    });
};

/**
 * deserializeAws_restXmlResponseHeadersPolicyXSSProtection
 */
const de_ResponseHeadersPolicyXSSProtection = (
  output: any,
  context: __SerdeContext
): ResponseHeadersPolicyXSSProtection => {
  const contents: any = {};
  if (output[_Ov] != null) {
    contents[_Ov] = __parseBoolean(output[_Ov]);
  }
  if (output[_Pro] != null) {
    contents[_Pro] = __parseBoolean(output[_Pro]);
  }
  if (output[_MB] != null) {
    contents[_MB] = __parseBoolean(output[_MB]);
  }
  if (output[_RU] != null) {
    contents[_RU] = __expectString(output[_RU]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlRestrictions
 */
const de_Restrictions = (output: any, context: __SerdeContext): Restrictions => {
  const contents: any = {};
  if (output[_GR] != null) {
    contents[_GR] = de_GeoRestriction(output[_GR], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3Origin
 */
const de_S3Origin = (output: any, context: __SerdeContext): S3Origin => {
  const contents: any = {};
  if (output[_DN] != null) {
    contents[_DN] = __expectString(output[_DN]);
  }
  if (output[_OAI] != null) {
    contents[_OAI] = __expectString(output[_OAI]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3OriginConfig
 */
const de_S3OriginConfig = (output: any, context: __SerdeContext): S3OriginConfig => {
  const contents: any = {};
  if (output[_OAI] != null) {
    contents[_OAI] = __expectString(output[_OAI]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlSessionStickinessConfig
 */
const de_SessionStickinessConfig = (output: any, context: __SerdeContext): SessionStickinessConfig => {
  const contents: any = {};
  if (output[_ITTL] != null) {
    contents[_ITTL] = __strictParseInt32(output[_ITTL]) as number;
  }
  if (output[_MTTLax] != null) {
    contents[_MTTLax] = __strictParseInt32(output[_MTTLax]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlSigner
 */
const de_Signer = (output: any, context: __SerdeContext): Signer => {
  const contents: any = {};
  if (output[_AAN] != null) {
    contents[_AAN] = __expectString(output[_AAN]);
  }
  if (output[_KPIe] != null) {
    contents[_KPIe] = de_KeyPairIds(output[_KPIe], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlSignerList
 */
const de_SignerList = (output: any, context: __SerdeContext): Signer[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Signer(entry, context);
    });
};

/**
 * deserializeAws_restXmlSslProtocolsList
 */
const de_SslProtocolsList = (output: any, context: __SerdeContext): SslProtocol[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlStagingDistributionDnsNameList
 */
const de_StagingDistributionDnsNameList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlStagingDistributionDnsNames
 */
const de_StagingDistributionDnsNames = (output: any, context: __SerdeContext): StagingDistributionDnsNames => {
  const contents: any = {};
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_DNn] != null) {
    contents[_I] = de_StagingDistributionDnsNameList(__getArrayIfSingleItem(output[_I][_DNn]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlStatusCodeList
 */
const de_StatusCodeList = (output: any, context: __SerdeContext): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __strictParseInt32(entry) as number;
    });
};

/**
 * deserializeAws_restXmlStatusCodes
 */
const de_StatusCodes = (output: any, context: __SerdeContext): StatusCodes => {
  const contents: any = {};
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_SCt] != null) {
    contents[_I] = de_StatusCodeList(__getArrayIfSingleItem(output[_I][_SCt]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlStreamingDistribution
 */
const de_StreamingDistribution = (output: any, context: __SerdeContext): StreamingDistribution => {
  const contents: any = {};
  if (output[_Id] != null) {
    contents[_Id] = __expectString(output[_Id]);
  }
  if (output[_ARN] != null) {
    contents[_ARN] = __expectString(output[_ARN]);
  }
  if (output[_Sta] != null) {
    contents[_Sta] = __expectString(output[_Sta]);
  }
  if (output[_LMT] != null) {
    contents[_LMT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LMT]));
  }
  if (output[_DN] != null) {
    contents[_DN] = __expectString(output[_DN]);
  }
  if (output[_ATS] != null) {
    contents[_ATS] = de_ActiveTrustedSigners(output[_ATS], context);
  }
  if (output[_SDC] != null) {
    contents[_SDC] = de_StreamingDistributionConfig(output[_SDC], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlStreamingDistributionConfig
 */
const de_StreamingDistributionConfig = (output: any, context: __SerdeContext): StreamingDistributionConfig => {
  const contents: any = {};
  if (output[_CR] != null) {
    contents[_CR] = __expectString(output[_CR]);
  }
  if (output[_SO] != null) {
    contents[_SO] = de_S3Origin(output[_SO], context);
  }
  if (output[_Al] != null) {
    contents[_Al] = de_Aliases(output[_Al], context);
  }
  if (output[_C] != null) {
    contents[_C] = __expectString(output[_C]);
  }
  if (output[_Lo] != null) {
    contents[_Lo] = de_StreamingLoggingConfig(output[_Lo], context);
  }
  if (output[_TS] != null) {
    contents[_TS] = de_TrustedSigners(output[_TS], context);
  }
  if (output[_PC] != null) {
    contents[_PC] = __expectString(output[_PC]);
  }
  if (output[_E] != null) {
    contents[_E] = __parseBoolean(output[_E]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlStreamingDistributionList
 */
const de_StreamingDistributionList = (output: any, context: __SerdeContext): StreamingDistributionList => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (output[_NM] != null) {
    contents[_NM] = __expectString(output[_NM]);
  }
  if (output[_MI] != null) {
    contents[_MI] = __strictParseInt32(output[_MI]) as number;
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_SDS] != null) {
    contents[_I] = de_StreamingDistributionSummaryList(__getArrayIfSingleItem(output[_I][_SDS]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlStreamingDistributionSummary
 */
const de_StreamingDistributionSummary = (output: any, context: __SerdeContext): StreamingDistributionSummary => {
  const contents: any = {};
  if (output[_Id] != null) {
    contents[_Id] = __expectString(output[_Id]);
  }
  if (output[_ARN] != null) {
    contents[_ARN] = __expectString(output[_ARN]);
  }
  if (output[_Sta] != null) {
    contents[_Sta] = __expectString(output[_Sta]);
  }
  if (output[_LMT] != null) {
    contents[_LMT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LMT]));
  }
  if (output[_DN] != null) {
    contents[_DN] = __expectString(output[_DN]);
  }
  if (output[_SO] != null) {
    contents[_SO] = de_S3Origin(output[_SO], context);
  }
  if (output[_Al] != null) {
    contents[_Al] = de_Aliases(output[_Al], context);
  }
  if (output[_TS] != null) {
    contents[_TS] = de_TrustedSigners(output[_TS], context);
  }
  if (output[_C] != null) {
    contents[_C] = __expectString(output[_C]);
  }
  if (output[_PC] != null) {
    contents[_PC] = __expectString(output[_PC]);
  }
  if (output[_E] != null) {
    contents[_E] = __parseBoolean(output[_E]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlStreamingDistributionSummaryList
 */
const de_StreamingDistributionSummaryList = (output: any, context: __SerdeContext): StreamingDistributionSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StreamingDistributionSummary(entry, context);
    });
};

/**
 * deserializeAws_restXmlStreamingLoggingConfig
 */
const de_StreamingLoggingConfig = (output: any, context: __SerdeContext): StreamingLoggingConfig => {
  const contents: any = {};
  if (output[_E] != null) {
    contents[_E] = __parseBoolean(output[_E]);
  }
  if (output[_B] != null) {
    contents[_B] = __expectString(output[_B]);
  }
  if (output[_Pr] != null) {
    contents[_Pr] = __expectString(output[_Pr]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlTag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  const contents: any = {};
  if (output[_K] != null) {
    contents[_K] = __expectString(output[_K]);
  }
  if (output[_V] != null) {
    contents[_V] = __expectString(output[_V]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlTagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Tag(entry, context);
    });
};

/**
 * deserializeAws_restXmlTags
 */
const de_Tags = (output: any, context: __SerdeContext): Tags => {
  const contents: any = {};
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_Tag] != null) {
    contents[_I] = de_TagList(__getArrayIfSingleItem(output[_I][_Tag]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlTestResult
 */
const de_TestResult = (output: any, context: __SerdeContext): TestResult => {
  const contents: any = {};
  if (output[_FSu] != null) {
    contents[_FSu] = de_FunctionSummary(output[_FSu], context);
  }
  if (output[_CU] != null) {
    contents[_CU] = __expectString(output[_CU]);
  }
  if (output.FunctionExecutionLogs === "") {
    contents[_FEL] = [];
  } else if (output[_FEL] != null && output[_FEL][_m] != null) {
    contents[_FEL] = de_FunctionExecutionLogList(__getArrayIfSingleItem(output[_FEL][_m]), context);
  }
  if (output[_FEM] != null) {
    contents[_FEM] = __expectString(output[_FEM]);
  }
  if (output[_FOu] != null) {
    contents[_FOu] = __expectString(output[_FOu]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlTrafficConfig
 */
const de_TrafficConfig = (output: any, context: __SerdeContext): TrafficConfig => {
  const contents: any = {};
  if (output[_SWC] != null) {
    contents[_SWC] = de_ContinuousDeploymentSingleWeightConfig(output[_SWC], context);
  }
  if (output[_SHCi] != null) {
    contents[_SHCi] = de_ContinuousDeploymentSingleHeaderConfig(output[_SHCi], context);
  }
  if (output[_T] != null) {
    contents[_T] = __expectString(output[_T]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlTrustedKeyGroupIdList
 */
const de_TrustedKeyGroupIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlTrustedKeyGroups
 */
const de_TrustedKeyGroups = (output: any, context: __SerdeContext): TrustedKeyGroups => {
  const contents: any = {};
  if (output[_E] != null) {
    contents[_E] = __parseBoolean(output[_E]);
  }
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_KG] != null) {
    contents[_I] = de_TrustedKeyGroupIdList(__getArrayIfSingleItem(output[_I][_KG]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlTrustedSigners
 */
const de_TrustedSigners = (output: any, context: __SerdeContext): TrustedSigners => {
  const contents: any = {};
  if (output[_E] != null) {
    contents[_E] = __parseBoolean(output[_E]);
  }
  if (output[_Q] != null) {
    contents[_Q] = __strictParseInt32(output[_Q]) as number;
  }
  if (output.Items === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_AAN] != null) {
    contents[_I] = de_AwsAccountNumberList(__getArrayIfSingleItem(output[_I][_AAN]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlViewerCertificate
 */
const de_ViewerCertificate = (output: any, context: __SerdeContext): ViewerCertificate => {
  const contents: any = {};
  if (output[_CFDC] != null) {
    contents[_CFDC] = __parseBoolean(output[_CFDC]);
  }
  if (output[_IAMCI] != null) {
    contents[_IAMCI] = __expectString(output[_IAMCI]);
  }
  if (output[_ACMCA] != null) {
    contents[_ACMCA] = __expectString(output[_ACMCA]);
  }
  if (output[_SSLSM] != null) {
    contents[_SSLSM] = __expectString(output[_SSLSM]);
  }
  if (output[_MPV] != null) {
    contents[_MPV] = __expectString(output[_MPV]);
  }
  if (output[_Ce] != null) {
    contents[_Ce] = __expectString(output[_Ce]);
  }
  if (output[_CS] != null) {
    contents[_CS] = __expectString(output[_CS]);
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const _A = "Alias";
const _AAN = "AwsAccountNumber";
const _ACAC = "AccessControlAllowCredentials";
const _ACAH = "AccessControlAllowHeaders";
const _ACAM = "AccessControlAllowMethods";
const _ACAO = "AccessControlAllowOrigins";
const _ACEH = "AccessControlExposeHeaders";
const _ACMAS = "AccessControlMaxAgeSec";
const _ACMCA = "ACMCertificateArn";
const _AI = "AccountId";
const _AICPR = "AliasICPRecordals";
const _AICPRl = "AliasICPRecordal";
const _AM = "AllowedMethods";
const _ARN = "ARN";
const _ATKG = "ActiveTrustedKeyGroups";
const _ATS = "ActiveTrustedSigners";
const _Al = "Aliases";
const _B = "Bucket";
const _C = "Comment";
const _CA = "ConnectionAttempts";
const _CAo = "ConflictingAlias";
const _CB = "CacheBehavior";
const _CBa = "CacheBehaviors";
const _CBo = "CookieBehavior";
const _CC = "CookiesConfig";
const _CCo = "CorsConfig";
const _CDP = "ContinuousDeploymentPolicy";
const _CDPC = "ContinuousDeploymentPolicyConfig";
const _CDPI = "ContinuousDeploymentPolicyId";
const _CDPS = "ContinuousDeploymentPolicySummary";
const _CDPT = "ContinuousDeploymentPolicyType";
const _CDR = "CopyDistributionRequest";
const _CDSHC = "ContinuousDeploymentSingleHeaderConfig";
const _CDSWC = "ContinuousDeploymentSingleWeightConfig";
const _CER = "CustomErrorResponse";
const _CERu = "CustomErrorResponses";
const _CFDC = "CloudFrontDefaultCertificate";
const _CFOAIC = "CloudFrontOriginAccessIdentityConfig";
const _CFOAIS = "CloudFrontOriginAccessIdentitySummary";
const _CFR = "CreateFunctionRequest";
const _CH = "CustomHeaders";
const _CHC = "CustomHeadersConfig";
const _CKVSR = "CreateKeyValueStoreRequest";
const _CM = "CachedMethods";
const _CN = "CookieNames";
const _CNAME = "CNAME";
const _COC = "CustomOriginConfig";
const _CP = "CookiePreference";
const _CPC = "CachePolicyConfig";
const _CPCB = "CachePolicyCookieBehavior";
const _CPCC = "CachePolicyCookiesConfig";
const _CPHB = "CachePolicyHeaderBehavior";
const _CPHC = "CachePolicyHeadersConfig";
const _CPI = "CachePolicyId";
const _CPQSB = "CachePolicyQueryStringBehavior";
const _CPQSC = "CachePolicyQueryStringsConfig";
const _CPS = "CachePolicySummary";
const _CPa = "CachePolicy";
const _CR = "CallerReference";
const _CRLCR = "CreateRealtimeLogConfigRequest";
const _CS = "CertificateSource";
const _CSP = "ContentSecurityPolicy";
const _CT = "ContentType";
const _CTO = "ContentTypeOptions";
const _CTP = "ContentTypeProfile";
const _CTPC = "ContentTypeProfileConfig";
const _CTPo = "ContentTypeProfiles";
const _CTo = "CommentType";
const _CTon = "ConnectionTimeout";
const _CTr = "CreatedTime";
const _CTre = "CreateTime";
const _CU = "ComputeUtilization";
const _Ce = "Certificate";
const _Co = "Compress";
const _Coo = "Cookies";
const _D = "Description";
const _DC = "DistributionConfig";
const _DCB = "DefaultCacheBehavior";
const _DCWT = "DistributionConfigWithTags";
const _DI = "DistributionId";
const _DN = "DomainName";
const _DNn = "DnsName";
const _DRLCR = "DeleteRealtimeLogConfigRequest";
const _DRO = "DefaultRootObject";
const _DS = "DistributionSummary";
const _DTTL = "DefaultTTL";
const _E = "Enabled";
const _EAEB = "EnableAcceptEncodingBrotli";
const _EAEG = "EnableAcceptEncodingGzip";
const _EC = "ErrorCode";
const _ECMTTL = "ErrorCachingMinTTL";
const _EE = "EncryptionEntities";
const _EEn = "EncryptionEntity";
const _EK = "EncodedKey";
const _EO = "EventObject";
const _EP = "EndPoints";
const _EPn = "EndPoint";
const _ET = "ETag";
const _ETv = "EventType";
const _F = "Fields";
const _FA = "FunctionAssociations";
const _FARN = "FunctionARN";
const _FAu = "FunctionAssociation";
const _FB = "FunctionBlob";
const _FC = "FunctionCode";
const _FCa = "FailoverCriteria";
const _FCu = "FunctionConfig";
const _FEL = "FunctionExecutionLogs";
const _FEM = "FunctionErrorMessage";
const _FEO = "FunctionEventObject";
const _FLEC = "FieldLevelEncryptionConfig";
const _FLEI = "FieldLevelEncryptionId";
const _FLEPC = "FieldLevelEncryptionProfileConfig";
const _FLEPS = "FieldLevelEncryptionProfileSummary";
const _FLES = "FieldLevelEncryptionSummary";
const _FM = "FunctionMetadata";
const _FN = "FunctionName";
const _FO = "FrameOption";
const _FOL = "FrameOptionsList";
const _FOr = "FrameOptions";
const _FOu = "FunctionOutput";
const _FP = "FieldPatterns";
const _FPi = "FieldPattern";
const _FR = "FunctionRuntime";
const _FS = "FunctionStage";
const _FSu = "FunctionSummary";
const _FV = "ForwardedValues";
const _FWCTIU = "ForwardWhenContentTypeIsUnknown";
const _FWQAPIU = "ForwardWhenQueryArgProfileIsUnknown";
const _Fi = "Field";
const _Fo = "Format";
const _For = "Forward";
const _GR = "GeoRestriction";
const _GRLCR = "GetRealtimeLogConfigRequest";
const _GRT = "GeoRestrictionType";
const _H = "Header";
const _HB = "HeaderBehavior";
const _HC = "HeadersConfig";
const _HN = "HeaderName";
const _HTTPP = "HTTPPort";
const _HTTPSP = "HTTPSPort";
const _HV = "HttpVersion";
const _HVe = "HeaderValue";
const _He = "Headers";
const _I = "Items";
const _IAMCI = "IAMCertificateId";
const _IB = "InvalidationBatch";
const _IBn = "IncludeBody";
const _IC = "IncludeCookies";
const _ICPRS = "ICPRecordalStatus";
const _IIPVE = "IsIPV6Enabled";
const _IM = "IfMatch";
const _IPIB = "InProgressInvalidationBatches";
const _IS = "ImportSource";
const _IST = "ImportSourceType";
const _ISn = "IncludeSubdomains";
const _ISnv = "InvalidationSummary";
const _ISt = "ItemSelection";
const _IT = "IsTruncated";
const _ITTL = "IdleTTL";
const _Id = "Id";
const _K = "Key";
const _KG = "KeyGroup";
const _KGC = "KeyGroupConfig";
const _KGI = "KeyGroupId";
const _KGS = "KeyGroupSummary";
const _KPI = "KeyPairId";
const _KPIe = "KeyPairIds";
const _KSC = "KinesisStreamConfig";
const _KVS = "KeyValueStore";
const _KVSA = "KeyValueStoreAssociations";
const _KVSARN = "KeyValueStoreARN";
const _KVSAe = "KeyValueStoreAssociation";
const _KVSC = "KeyValueStoreComment";
const _KVSN = "KeyValueStoreName";
const _L = "Location";
const _LC = "LoggingConfig";
const _LDBRLCR = "ListDistributionsByRealtimeLogConfigRequest";
const _LFA = "LambdaFunctionAssociations";
const _LFARN = "LambdaFunctionARN";
const _LFAa = "LambdaFunctionAssociation";
const _LMT = "LastModifiedTime";
const _Lo = "Logging";
const _M = "Marker";
const _MB = "ModeBlock";
const _MI = "MaxItems";
const _MPV = "MinimumProtocolVersion";
const _MS = "MonitoringSubscription";
const _MTTL = "MinTTL";
const _MTTLa = "MaxTTL";
const _MTTLax = "MaximumTTL";
const _Me = "Message";
const _Mem = "Members";
const _Met = "Method";
const _N = "Name";
const _NM = "NextMarker";
const _O = "Operation";
const _OACC = "OriginAccessControlConfig";
const _OACI = "OriginAccessControlId";
const _OACOT = "OriginAccessControlOriginType";
const _OACOTr = "OriginAccessControlOriginTypes";
const _OACS = "OriginAccessControlSummary";
const _OACSB = "OriginAccessControlSigningBehaviors";
const _OACSP = "OriginAccessControlSigningProtocols";
const _OAI = "OriginAccessIdentity";
const _OCH = "OriginCustomHeader";
const _OG = "OriginGroups";
const _OGFC = "OriginGroupFailoverCriteria";
const _OGM = "OriginGroupMember";
const _OGMr = "OriginGroupMembers";
const _OGr = "OriginGroup";
const _OI = "OriginId";
const _OKT = "OriginKeepaliveTimeout";
const _OO = "OriginOverride";
const _OP = "OriginPath";
const _OPP = "OriginProtocolPolicy";
const _ORP = "OriginRequestPolicy";
const _ORPC = "OriginRequestPolicyConfig";
const _ORPCB = "OriginRequestPolicyCookieBehavior";
const _ORPCC = "OriginRequestPolicyCookiesConfig";
const _ORPHB = "OriginRequestPolicyHeaderBehavior";
const _ORPHC = "OriginRequestPolicyHeadersConfig";
const _ORPI = "OriginRequestPolicyId";
const _ORPQSB = "OriginRequestPolicyQueryStringBehavior";
const _ORPQSC = "OriginRequestPolicyQueryStringsConfig";
const _ORPS = "OriginRequestPolicySummary";
const _ORT = "OriginReadTimeout";
const _OS = "OriginShield";
const _OSP = "OriginSslProtocols";
const _OSR = "OriginShieldRegion";
const _Or = "Origin";
const _Ori = "Origins";
const _Ov = "Override";
const _P = "Paths";
const _PC = "PriceClass";
const _PI = "ProfileId";
const _PICKAFTO = "ParametersInCacheKeyAndForwardedToOrigin";
const _PIr = "ProviderId";
const _PK = "PublicKey";
const _PKC = "PublicKeyConfig";
const _PKI = "PublicKeyId";
const _PKS = "PublicKeySummary";
const _PP = "PathPattern";
const _Pa = "Path";
const _Pr = "Prefix";
const _Pre = "Preload";
const _Pro = "Protection";
const _Q = "Quantity";
const _QA = "QueryArg";
const _QAP = "QueryArgProfile";
const _QAPC = "QueryArgProfileConfig";
const _QAPu = "QueryArgProfiles";
const _QS = "QueryStrings";
const _QSB = "QueryStringBehavior";
const _QSC = "QueryStringsConfig";
const _QSCK = "QueryStringCacheKeys";
const _QSN = "QueryStringNames";
const _QSu = "QueryString";
const _R = "Resource";
const _RARN = "RoleARN";
const _RC = "ResponseCode";
const _RHC = "RemoveHeadersConfig";
const _RHP = "ResponseHeadersPolicy";
const _RHPACAH = "ResponseHeadersPolicyAccessControlAllowHeaders";
const _RHPACAM = "ResponseHeadersPolicyAccessControlAllowMethods";
const _RHPACAMV = "ResponseHeadersPolicyAccessControlAllowMethodsValues";
const _RHPACAO = "ResponseHeadersPolicyAccessControlAllowOrigins";
const _RHPACEH = "ResponseHeadersPolicyAccessControlExposeHeaders";
const _RHPC = "ResponseHeadersPolicyConfig";
const _RHPCC = "ResponseHeadersPolicyCorsConfig";
const _RHPCH = "ResponseHeadersPolicyCustomHeader";
const _RHPCHC = "ResponseHeadersPolicyCustomHeadersConfig";
const _RHPCSP = "ResponseHeadersPolicyContentSecurityPolicy";
const _RHPCTO = "ResponseHeadersPolicyContentTypeOptions";
const _RHPFO = "ResponseHeadersPolicyFrameOptions";
const _RHPI = "ResponseHeadersPolicyId";
const _RHPRH = "ResponseHeadersPolicyRemoveHeader";
const _RHPRHC = "ResponseHeadersPolicyRemoveHeadersConfig";
const _RHPRP = "ResponseHeadersPolicyReferrerPolicy";
const _RHPS = "ResponseHeadersPolicySummary";
const _RHPSHC = "ResponseHeadersPolicySecurityHeadersConfig";
const _RHPSTHC = "ResponseHeadersPolicyServerTimingHeadersConfig";
const _RHPSTS = "ResponseHeadersPolicyStrictTransportSecurity";
const _RHPXSSP = "ResponseHeadersPolicyXSSProtection";
const _RLC = "RealtimeLogConfig";
const _RLCA = "RealtimeLogConfigArn";
const _RLCN = "RealtimeLogConfigName";
const _RMSC = "RealtimeMetricsSubscriptionConfig";
const _RMSS = "RealtimeMetricsSubscriptionStatus";
const _RP = "ReferrerPolicy";
const _RPL = "ReferrerPolicyList";
const _RPP = "ResponsePagePath";
const _RT = "RestrictionType";
const _RU = "ReportUri";
const _Re = "Restrictions";
const _Ru = "Runtime";
const _S = "Staging";
const _SARN = "SourceARN";
const _SARNt = "StreamARN";
const _SB = "SigningBehavior";
const _SC = "StatusCodes";
const _SCUI = "S3CanonicalUserId";
const _SCt = "StatusCode";
const _SDC = "StreamingDistributionConfig";
const _SDCWT = "StreamingDistributionConfigWithTags";
const _SDDN = "StagingDistributionDnsNames";
const _SDI = "StagingDistributionId";
const _SDS = "StreamingDistributionSummary";
const _SHC = "SecurityHeadersConfig";
const _SHCi = "SingleHeaderConfig";
const _SLC = "StreamingLoggingConfig";
const _SO = "S3Origin";
const _SOC = "S3OriginConfig";
const _SP = "SigningProtocol";
const _SPs = "SslProtocol";
const _SR = "SamplingRate";
const _SS = "SmoothStreaming";
const _SSC = "SessionStickinessConfig";
const _SSLSM = "SSLSupportMethod";
const _ST = "StreamType";
const _STHC = "ServerTimingHeadersConfig";
const _STS = "StrictTransportSecurity";
const _STo = "SourceType";
const _SWC = "SingleWeightConfig";
const _Si = "Signer";
const _St = "Stage";
const _Sta = "Status";
const _T = "Type";
const _TC = "TrafficConfig";
const _TFR = "TestFunctionRequest";
const _TK = "TagKey";
const _TKG = "TrustedKeyGroups";
const _TKa = "TagKeys";
const _TOI = "TargetOriginId";
const _TS = "TrustedSigners";
const _TV = "TagValue";
const _Ta = "Tags";
const _Tag = "Tag";
const _UFR = "UpdateFunctionRequest";
const _UKVSR = "UpdateKeyValueStoreRequest";
const _URLCR = "UpdateRealtimeLogConfigRequest";
const _V = "Value";
const _VC = "ViewerCertificate";
const _VPP = "ViewerProtocolPolicy";
const _W = "Weight";
const _WACLI = "WebACLId";
const _WN = "WhitelistedNames";
const _WT = "WithTags";
const _XSSP = "XSSProtection";
const _b = "boolean";
const _ct = "content-type";
const _e = "etag";
const _et = "ettag";
const _f = "float";
const _i = "integer";
const _im = "if-match";
const _l = "long";
const _lo = "location";
const _m = "member";
const _s = "staging";
const _sST = "sensitiveStringType";
const _st = "string";
const _ve = '<?xml version="1.0" encoding="UTF-8"?>';
