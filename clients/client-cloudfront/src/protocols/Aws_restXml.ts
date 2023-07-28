// smithy-typescript generated code
import { XmlNode as __XmlNode, XmlText as __XmlText } from "@aws-sdk/xml-builder";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
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
import { XMLParser } from "fast-xml-parser";

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
  ResponseHeadersPolicy,
  ResponseHeadersPolicyAccessControlAllowHeaders,
  ResponseHeadersPolicyAccessControlAllowMethods,
  ResponseHeadersPolicyAccessControlAllowMethodsValues,
  ResponseHeadersPolicyAccessControlAllowOrigins,
  ResponseHeadersPolicyAccessControlExposeHeaders,
  ResponseHeadersPolicyConfig,
  ResponseHeadersPolicyContentSecurityPolicy,
  ResponseHeadersPolicyContentTypeOptions,
  ResponseHeadersPolicyCorsConfig,
  ResponseHeadersPolicyCustomHeader,
  ResponseHeadersPolicyCustomHeadersConfig,
  ResponseHeadersPolicyFrameOptions,
  ResponseHeadersPolicyReferrerPolicy,
  ResponseHeadersPolicyRemoveHeader,
  ResponseHeadersPolicyRemoveHeadersConfig,
  ResponseHeadersPolicySecurityHeadersConfig,
  ResponseHeadersPolicyServerTimingHeadersConfig,
  ResponseHeadersPolicyStrictTransportSecurity,
  ResponseHeadersPolicyXSSProtection,
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
  ResponseHeadersPolicyAlreadyExists,
  ResponseHeadersPolicyInUse,
  ResponseHeadersPolicyList,
  ResponseHeadersPolicySummary,
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
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/distribution/{TargetDistributionId}/associate-alias";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TargetDistributionId",
    () => input.TargetDistributionId!,
    "{TargetDistributionId}",
    false
  );
  const query: any = map({
    Alias: [, __expectNonNull(input.Alias!, `Alias`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlCopyDistributionCommand
 */
export const se_CopyDistributionCommand = async (
  input: CopyDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    staging: [() => isSerializableHeaderValue(input.Staging), () => input.Staging!.toString()],
    "if-match": input.IfMatch!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/distribution/{PrimaryDistributionId}/copy";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "PrimaryDistributionId",
    () => input.PrimaryDistributionId!,
    "{PrimaryDistributionId}",
    false
  );
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("CopyDistributionRequest");
  bodyNode.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
  if (input.CallerReference !== undefined) {
    const node = __XmlNode.of("string", input.CallerReference).withName("CallerReference");
    bodyNode.addChildNode(node);
  }
  if (input.Enabled !== undefined) {
    const node = __XmlNode.of("boolean", String(input.Enabled)).withName("Enabled");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlCreateCachePolicyCommand
 */
export const se_CreateCachePolicyCommand = async (
  input: CreateCachePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/cache-policy";
  let body: any;
  if (input.CachePolicyConfig !== undefined) {
    body = se_CachePolicyConfig(input.CachePolicyConfig, context);
  }
  let contents: any;
  if (input.CachePolicyConfig !== undefined) {
    contents = se_CachePolicyConfig(input.CachePolicyConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlCreateCloudFrontOriginAccessIdentityCommand
 */
export const se_CreateCloudFrontOriginAccessIdentityCommand = async (
  input: CreateCloudFrontOriginAccessIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/origin-access-identity/cloudfront";
  let body: any;
  if (input.CloudFrontOriginAccessIdentityConfig !== undefined) {
    body = se_CloudFrontOriginAccessIdentityConfig(input.CloudFrontOriginAccessIdentityConfig, context);
  }
  let contents: any;
  if (input.CloudFrontOriginAccessIdentityConfig !== undefined) {
    contents = se_CloudFrontOriginAccessIdentityConfig(input.CloudFrontOriginAccessIdentityConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlCreateContinuousDeploymentPolicyCommand
 */
export const se_CreateContinuousDeploymentPolicyCommand = async (
  input: CreateContinuousDeploymentPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/continuous-deployment-policy";
  let body: any;
  if (input.ContinuousDeploymentPolicyConfig !== undefined) {
    body = se_ContinuousDeploymentPolicyConfig(input.ContinuousDeploymentPolicyConfig, context);
  }
  let contents: any;
  if (input.ContinuousDeploymentPolicyConfig !== undefined) {
    contents = se_ContinuousDeploymentPolicyConfig(input.ContinuousDeploymentPolicyConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlCreateDistributionCommand
 */
export const se_CreateDistributionCommand = async (
  input: CreateDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/distribution";
  let body: any;
  if (input.DistributionConfig !== undefined) {
    body = se_DistributionConfig(input.DistributionConfig, context);
  }
  let contents: any;
  if (input.DistributionConfig !== undefined) {
    contents = se_DistributionConfig(input.DistributionConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlCreateDistributionWithTagsCommand
 */
export const se_CreateDistributionWithTagsCommand = async (
  input: CreateDistributionWithTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/distribution";
  const query: any = map({
    WithTags: [, ""],
  });
  let body: any;
  if (input.DistributionConfigWithTags !== undefined) {
    body = se_DistributionConfigWithTags(input.DistributionConfigWithTags, context);
  }
  let contents: any;
  if (input.DistributionConfigWithTags !== undefined) {
    contents = se_DistributionConfigWithTags(input.DistributionConfigWithTags, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlCreateFieldLevelEncryptionConfigCommand
 */
export const se_CreateFieldLevelEncryptionConfigCommand = async (
  input: CreateFieldLevelEncryptionConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/field-level-encryption";
  let body: any;
  if (input.FieldLevelEncryptionConfig !== undefined) {
    body = se_FieldLevelEncryptionConfig(input.FieldLevelEncryptionConfig, context);
  }
  let contents: any;
  if (input.FieldLevelEncryptionConfig !== undefined) {
    contents = se_FieldLevelEncryptionConfig(input.FieldLevelEncryptionConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlCreateFieldLevelEncryptionProfileCommand
 */
export const se_CreateFieldLevelEncryptionProfileCommand = async (
  input: CreateFieldLevelEncryptionProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/field-level-encryption-profile";
  let body: any;
  if (input.FieldLevelEncryptionProfileConfig !== undefined) {
    body = se_FieldLevelEncryptionProfileConfig(input.FieldLevelEncryptionProfileConfig, context);
  }
  let contents: any;
  if (input.FieldLevelEncryptionProfileConfig !== undefined) {
    contents = se_FieldLevelEncryptionProfileConfig(input.FieldLevelEncryptionProfileConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlCreateFunctionCommand
 */
export const se_CreateFunctionCommand = async (
  input: CreateFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/function";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("CreateFunctionRequest");
  bodyNode.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
  if (input.FunctionCode !== undefined) {
    const node = __XmlNode.of("FunctionBlob", context.base64Encoder(input.FunctionCode)).withName("FunctionCode");
    bodyNode.addChildNode(node);
  }
  if (input.FunctionConfig !== undefined) {
    const node = se_FunctionConfig(input.FunctionConfig, context).withName("FunctionConfig");
    bodyNode.addChildNode(node);
  }
  if (input.Name !== undefined) {
    const node = __XmlNode.of("FunctionName", input.Name).withName("Name");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlCreateInvalidationCommand
 */
export const se_CreateInvalidationCommand = async (
  input: CreateInvalidationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/distribution/{DistributionId}/invalidation";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "DistributionId",
    () => input.DistributionId!,
    "{DistributionId}",
    false
  );
  let body: any;
  if (input.InvalidationBatch !== undefined) {
    body = se_InvalidationBatch(input.InvalidationBatch, context);
  }
  let contents: any;
  if (input.InvalidationBatch !== undefined) {
    contents = se_InvalidationBatch(input.InvalidationBatch, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlCreateKeyGroupCommand
 */
export const se_CreateKeyGroupCommand = async (
  input: CreateKeyGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/key-group";
  let body: any;
  if (input.KeyGroupConfig !== undefined) {
    body = se_KeyGroupConfig(input.KeyGroupConfig, context);
  }
  let contents: any;
  if (input.KeyGroupConfig !== undefined) {
    contents = se_KeyGroupConfig(input.KeyGroupConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlCreateMonitoringSubscriptionCommand
 */
export const se_CreateMonitoringSubscriptionCommand = async (
  input: CreateMonitoringSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/distributions/{DistributionId}/monitoring-subscription";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "DistributionId",
    () => input.DistributionId!,
    "{DistributionId}",
    false
  );
  let body: any;
  if (input.MonitoringSubscription !== undefined) {
    body = se_MonitoringSubscription(input.MonitoringSubscription, context);
  }
  let contents: any;
  if (input.MonitoringSubscription !== undefined) {
    contents = se_MonitoringSubscription(input.MonitoringSubscription, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlCreateOriginAccessControlCommand
 */
export const se_CreateOriginAccessControlCommand = async (
  input: CreateOriginAccessControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/origin-access-control";
  let body: any;
  if (input.OriginAccessControlConfig !== undefined) {
    body = se_OriginAccessControlConfig(input.OriginAccessControlConfig, context);
  }
  let contents: any;
  if (input.OriginAccessControlConfig !== undefined) {
    contents = se_OriginAccessControlConfig(input.OriginAccessControlConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlCreateOriginRequestPolicyCommand
 */
export const se_CreateOriginRequestPolicyCommand = async (
  input: CreateOriginRequestPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/origin-request-policy";
  let body: any;
  if (input.OriginRequestPolicyConfig !== undefined) {
    body = se_OriginRequestPolicyConfig(input.OriginRequestPolicyConfig, context);
  }
  let contents: any;
  if (input.OriginRequestPolicyConfig !== undefined) {
    contents = se_OriginRequestPolicyConfig(input.OriginRequestPolicyConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlCreatePublicKeyCommand
 */
export const se_CreatePublicKeyCommand = async (
  input: CreatePublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/public-key";
  let body: any;
  if (input.PublicKeyConfig !== undefined) {
    body = se_PublicKeyConfig(input.PublicKeyConfig, context);
  }
  let contents: any;
  if (input.PublicKeyConfig !== undefined) {
    contents = se_PublicKeyConfig(input.PublicKeyConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlCreateRealtimeLogConfigCommand
 */
export const se_CreateRealtimeLogConfigCommand = async (
  input: CreateRealtimeLogConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/realtime-log-config";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("CreateRealtimeLogConfigRequest");
  bodyNode.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
  if (input.EndPoints !== undefined) {
    const nodes = se_EndPointList(input.EndPoints, context);
    const containerNode = new __XmlNode("EndPoints");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.Fields !== undefined) {
    const nodes = se_FieldList(input.Fields, context);
    const containerNode = new __XmlNode("Fields");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.Name !== undefined) {
    const node = __XmlNode.of("string", input.Name).withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.SamplingRate !== undefined) {
    const node = __XmlNode.of("long", String(input.SamplingRate)).withName("SamplingRate");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlCreateResponseHeadersPolicyCommand
 */
export const se_CreateResponseHeadersPolicyCommand = async (
  input: CreateResponseHeadersPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/response-headers-policy";
  let body: any;
  if (input.ResponseHeadersPolicyConfig !== undefined) {
    body = se_ResponseHeadersPolicyConfig(input.ResponseHeadersPolicyConfig, context);
  }
  let contents: any;
  if (input.ResponseHeadersPolicyConfig !== undefined) {
    contents = se_ResponseHeadersPolicyConfig(input.ResponseHeadersPolicyConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlCreateStreamingDistributionCommand
 */
export const se_CreateStreamingDistributionCommand = async (
  input: CreateStreamingDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/streaming-distribution";
  let body: any;
  if (input.StreamingDistributionConfig !== undefined) {
    body = se_StreamingDistributionConfig(input.StreamingDistributionConfig, context);
  }
  let contents: any;
  if (input.StreamingDistributionConfig !== undefined) {
    contents = se_StreamingDistributionConfig(input.StreamingDistributionConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlCreateStreamingDistributionWithTagsCommand
 */
export const se_CreateStreamingDistributionWithTagsCommand = async (
  input: CreateStreamingDistributionWithTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/streaming-distribution";
  const query: any = map({
    WithTags: [, ""],
  });
  let body: any;
  if (input.StreamingDistributionConfigWithTags !== undefined) {
    body = se_StreamingDistributionConfigWithTags(input.StreamingDistributionConfigWithTags, context);
  }
  let contents: any;
  if (input.StreamingDistributionConfigWithTags !== undefined) {
    contents = se_StreamingDistributionConfigWithTags(input.StreamingDistributionConfigWithTags, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlDeleteCachePolicyCommand
 */
export const se_DeleteCachePolicyCommand = async (
  input: DeleteCachePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "if-match": input.IfMatch!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/cache-policy/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlDeleteCloudFrontOriginAccessIdentityCommand
 */
export const se_DeleteCloudFrontOriginAccessIdentityCommand = async (
  input: DeleteCloudFrontOriginAccessIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "if-match": input.IfMatch!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/origin-access-identity/cloudfront/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlDeleteContinuousDeploymentPolicyCommand
 */
export const se_DeleteContinuousDeploymentPolicyCommand = async (
  input: DeleteContinuousDeploymentPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "if-match": input.IfMatch!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/continuous-deployment-policy/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlDeleteDistributionCommand
 */
export const se_DeleteDistributionCommand = async (
  input: DeleteDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "if-match": input.IfMatch!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/distribution/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlDeleteFieldLevelEncryptionConfigCommand
 */
export const se_DeleteFieldLevelEncryptionConfigCommand = async (
  input: DeleteFieldLevelEncryptionConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "if-match": input.IfMatch!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/field-level-encryption/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlDeleteFieldLevelEncryptionProfileCommand
 */
export const se_DeleteFieldLevelEncryptionProfileCommand = async (
  input: DeleteFieldLevelEncryptionProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "if-match": input.IfMatch!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/field-level-encryption-profile/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlDeleteFunctionCommand
 */
export const se_DeleteFunctionCommand = async (
  input: DeleteFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "if-match": input.IfMatch!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/function/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlDeleteKeyGroupCommand
 */
export const se_DeleteKeyGroupCommand = async (
  input: DeleteKeyGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "if-match": input.IfMatch!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/key-group/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlDeleteMonitoringSubscriptionCommand
 */
export const se_DeleteMonitoringSubscriptionCommand = async (
  input: DeleteMonitoringSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/distributions/{DistributionId}/monitoring-subscription";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "DistributionId",
    () => input.DistributionId!,
    "{DistributionId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlDeleteOriginAccessControlCommand
 */
export const se_DeleteOriginAccessControlCommand = async (
  input: DeleteOriginAccessControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "if-match": input.IfMatch!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/origin-access-control/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlDeleteOriginRequestPolicyCommand
 */
export const se_DeleteOriginRequestPolicyCommand = async (
  input: DeleteOriginRequestPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "if-match": input.IfMatch!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/origin-request-policy/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlDeletePublicKeyCommand
 */
export const se_DeletePublicKeyCommand = async (
  input: DeletePublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "if-match": input.IfMatch!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/public-key/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlDeleteRealtimeLogConfigCommand
 */
export const se_DeleteRealtimeLogConfigCommand = async (
  input: DeleteRealtimeLogConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/delete-realtime-log-config";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("DeleteRealtimeLogConfigRequest");
  bodyNode.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
  if (input.ARN !== undefined) {
    const node = __XmlNode.of("string", input.ARN).withName("ARN");
    bodyNode.addChildNode(node);
  }
  if (input.Name !== undefined) {
    const node = __XmlNode.of("string", input.Name).withName("Name");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlDeleteResponseHeadersPolicyCommand
 */
export const se_DeleteResponseHeadersPolicyCommand = async (
  input: DeleteResponseHeadersPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "if-match": input.IfMatch!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/response-headers-policy/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlDeleteStreamingDistributionCommand
 */
export const se_DeleteStreamingDistributionCommand = async (
  input: DeleteStreamingDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "if-match": input.IfMatch!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/streaming-distribution/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlDescribeFunctionCommand
 */
export const se_DescribeFunctionCommand = async (
  input: DescribeFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/function/{Name}/describe";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  const query: any = map({
    Stage: [, input.Stage!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlGetCachePolicyCommand
 */
export const se_GetCachePolicyCommand = async (
  input: GetCachePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/cache-policy/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetCachePolicyConfigCommand
 */
export const se_GetCachePolicyConfigCommand = async (
  input: GetCachePolicyConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/cache-policy/{Id}/config";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetCloudFrontOriginAccessIdentityCommand
 */
export const se_GetCloudFrontOriginAccessIdentityCommand = async (
  input: GetCloudFrontOriginAccessIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/origin-access-identity/cloudfront/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetCloudFrontOriginAccessIdentityConfigCommand
 */
export const se_GetCloudFrontOriginAccessIdentityConfigCommand = async (
  input: GetCloudFrontOriginAccessIdentityConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/origin-access-identity/cloudfront/{Id}/config";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetContinuousDeploymentPolicyCommand
 */
export const se_GetContinuousDeploymentPolicyCommand = async (
  input: GetContinuousDeploymentPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/continuous-deployment-policy/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetContinuousDeploymentPolicyConfigCommand
 */
export const se_GetContinuousDeploymentPolicyConfigCommand = async (
  input: GetContinuousDeploymentPolicyConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/continuous-deployment-policy/{Id}/config";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetDistributionCommand
 */
export const se_GetDistributionCommand = async (
  input: GetDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/distribution/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetDistributionConfigCommand
 */
export const se_GetDistributionConfigCommand = async (
  input: GetDistributionConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/distribution/{Id}/config";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetFieldLevelEncryptionCommand
 */
export const se_GetFieldLevelEncryptionCommand = async (
  input: GetFieldLevelEncryptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/field-level-encryption/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetFieldLevelEncryptionConfigCommand
 */
export const se_GetFieldLevelEncryptionConfigCommand = async (
  input: GetFieldLevelEncryptionConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/field-level-encryption/{Id}/config";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetFieldLevelEncryptionProfileCommand
 */
export const se_GetFieldLevelEncryptionProfileCommand = async (
  input: GetFieldLevelEncryptionProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/field-level-encryption-profile/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetFieldLevelEncryptionProfileConfigCommand
 */
export const se_GetFieldLevelEncryptionProfileConfigCommand = async (
  input: GetFieldLevelEncryptionProfileConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/field-level-encryption-profile/{Id}/config";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetFunctionCommand
 */
export const se_GetFunctionCommand = async (
  input: GetFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/function/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  const query: any = map({
    Stage: [, input.Stage!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlGetInvalidationCommand
 */
export const se_GetInvalidationCommand = async (
  input: GetInvalidationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/distribution/{DistributionId}/invalidation/{Id}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "DistributionId",
    () => input.DistributionId!,
    "{DistributionId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetKeyGroupCommand
 */
export const se_GetKeyGroupCommand = async (
  input: GetKeyGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/key-group/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetKeyGroupConfigCommand
 */
export const se_GetKeyGroupConfigCommand = async (
  input: GetKeyGroupConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/key-group/{Id}/config";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetMonitoringSubscriptionCommand
 */
export const se_GetMonitoringSubscriptionCommand = async (
  input: GetMonitoringSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/distributions/{DistributionId}/monitoring-subscription";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "DistributionId",
    () => input.DistributionId!,
    "{DistributionId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetOriginAccessControlCommand
 */
export const se_GetOriginAccessControlCommand = async (
  input: GetOriginAccessControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/origin-access-control/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetOriginAccessControlConfigCommand
 */
export const se_GetOriginAccessControlConfigCommand = async (
  input: GetOriginAccessControlConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/origin-access-control/{Id}/config";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetOriginRequestPolicyCommand
 */
export const se_GetOriginRequestPolicyCommand = async (
  input: GetOriginRequestPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/origin-request-policy/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetOriginRequestPolicyConfigCommand
 */
export const se_GetOriginRequestPolicyConfigCommand = async (
  input: GetOriginRequestPolicyConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/origin-request-policy/{Id}/config";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetPublicKeyCommand
 */
export const se_GetPublicKeyCommand = async (
  input: GetPublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/public-key/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetPublicKeyConfigCommand
 */
export const se_GetPublicKeyConfigCommand = async (
  input: GetPublicKeyConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/public-key/{Id}/config";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetRealtimeLogConfigCommand
 */
export const se_GetRealtimeLogConfigCommand = async (
  input: GetRealtimeLogConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/get-realtime-log-config";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("GetRealtimeLogConfigRequest");
  bodyNode.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
  if (input.ARN !== undefined) {
    const node = __XmlNode.of("string", input.ARN).withName("ARN");
    bodyNode.addChildNode(node);
  }
  if (input.Name !== undefined) {
    const node = __XmlNode.of("string", input.Name).withName("Name");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetResponseHeadersPolicyCommand
 */
export const se_GetResponseHeadersPolicyCommand = async (
  input: GetResponseHeadersPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/response-headers-policy/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetResponseHeadersPolicyConfigCommand
 */
export const se_GetResponseHeadersPolicyConfigCommand = async (
  input: GetResponseHeadersPolicyConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/response-headers-policy/{Id}/config";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetStreamingDistributionCommand
 */
export const se_GetStreamingDistributionCommand = async (
  input: GetStreamingDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/streaming-distribution/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetStreamingDistributionConfigCommand
 */
export const se_GetStreamingDistributionConfigCommand = async (
  input: GetStreamingDistributionConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/streaming-distribution/{Id}/config";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlListCachePoliciesCommand
 */
export const se_ListCachePoliciesCommand = async (
  input: ListCachePoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/cache-policy";
  const query: any = map({
    Type: [, input.Type!],
    Marker: [, input.Marker!],
    MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlListCloudFrontOriginAccessIdentitiesCommand
 */
export const se_ListCloudFrontOriginAccessIdentitiesCommand = async (
  input: ListCloudFrontOriginAccessIdentitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/origin-access-identity/cloudfront";
  const query: any = map({
    Marker: [, input.Marker!],
    MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlListConflictingAliasesCommand
 */
export const se_ListConflictingAliasesCommand = async (
  input: ListConflictingAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/conflicting-alias";
  const query: any = map({
    DistributionId: [, __expectNonNull(input.DistributionId!, `DistributionId`)],
    Alias: [, __expectNonNull(input.Alias!, `Alias`)],
    Marker: [, input.Marker!],
    MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlListContinuousDeploymentPoliciesCommand
 */
export const se_ListContinuousDeploymentPoliciesCommand = async (
  input: ListContinuousDeploymentPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/continuous-deployment-policy";
  const query: any = map({
    Marker: [, input.Marker!],
    MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlListDistributionsCommand
 */
export const se_ListDistributionsCommand = async (
  input: ListDistributionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/distribution";
  const query: any = map({
    Marker: [, input.Marker!],
    MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlListDistributionsByCachePolicyIdCommand
 */
export const se_ListDistributionsByCachePolicyIdCommand = async (
  input: ListDistributionsByCachePolicyIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/distributionsByCachePolicyId/{CachePolicyId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CachePolicyId",
    () => input.CachePolicyId!,
    "{CachePolicyId}",
    false
  );
  const query: any = map({
    Marker: [, input.Marker!],
    MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlListDistributionsByKeyGroupCommand
 */
export const se_ListDistributionsByKeyGroupCommand = async (
  input: ListDistributionsByKeyGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/distributionsByKeyGroupId/{KeyGroupId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "KeyGroupId", () => input.KeyGroupId!, "{KeyGroupId}", false);
  const query: any = map({
    Marker: [, input.Marker!],
    MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlListDistributionsByOriginRequestPolicyIdCommand
 */
export const se_ListDistributionsByOriginRequestPolicyIdCommand = async (
  input: ListDistributionsByOriginRequestPolicyIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/distributionsByOriginRequestPolicyId/{OriginRequestPolicyId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "OriginRequestPolicyId",
    () => input.OriginRequestPolicyId!,
    "{OriginRequestPolicyId}",
    false
  );
  const query: any = map({
    Marker: [, input.Marker!],
    MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlListDistributionsByRealtimeLogConfigCommand
 */
export const se_ListDistributionsByRealtimeLogConfigCommand = async (
  input: ListDistributionsByRealtimeLogConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/distributionsByRealtimeLogConfig";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("ListDistributionsByRealtimeLogConfigRequest");
  bodyNode.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
  if (input.Marker !== undefined) {
    const node = __XmlNode.of("string", input.Marker).withName("Marker");
    bodyNode.addChildNode(node);
  }
  if (input.MaxItems !== undefined) {
    const node = __XmlNode.of("Integer", String(input.MaxItems)).withName("MaxItems");
    bodyNode.addChildNode(node);
  }
  if (input.RealtimeLogConfigArn !== undefined) {
    const node = __XmlNode.of("string", input.RealtimeLogConfigArn).withName("RealtimeLogConfigArn");
    bodyNode.addChildNode(node);
  }
  if (input.RealtimeLogConfigName !== undefined) {
    const node = __XmlNode.of("string", input.RealtimeLogConfigName).withName("RealtimeLogConfigName");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlListDistributionsByResponseHeadersPolicyIdCommand
 */
export const se_ListDistributionsByResponseHeadersPolicyIdCommand = async (
  input: ListDistributionsByResponseHeadersPolicyIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/distributionsByResponseHeadersPolicyId/{ResponseHeadersPolicyId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ResponseHeadersPolicyId",
    () => input.ResponseHeadersPolicyId!,
    "{ResponseHeadersPolicyId}",
    false
  );
  const query: any = map({
    Marker: [, input.Marker!],
    MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlListDistributionsByWebACLIdCommand
 */
export const se_ListDistributionsByWebACLIdCommand = async (
  input: ListDistributionsByWebACLIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/distributionsByWebACLId/{WebACLId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "WebACLId", () => input.WebACLId!, "{WebACLId}", false);
  const query: any = map({
    Marker: [, input.Marker!],
    MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlListFieldLevelEncryptionConfigsCommand
 */
export const se_ListFieldLevelEncryptionConfigsCommand = async (
  input: ListFieldLevelEncryptionConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/field-level-encryption";
  const query: any = map({
    Marker: [, input.Marker!],
    MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlListFieldLevelEncryptionProfilesCommand
 */
export const se_ListFieldLevelEncryptionProfilesCommand = async (
  input: ListFieldLevelEncryptionProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/field-level-encryption-profile";
  const query: any = map({
    Marker: [, input.Marker!],
    MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlListFunctionsCommand
 */
export const se_ListFunctionsCommand = async (
  input: ListFunctionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/function";
  const query: any = map({
    Marker: [, input.Marker!],
    MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
    Stage: [, input.Stage!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlListInvalidationsCommand
 */
export const se_ListInvalidationsCommand = async (
  input: ListInvalidationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/distribution/{DistributionId}/invalidation";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "DistributionId",
    () => input.DistributionId!,
    "{DistributionId}",
    false
  );
  const query: any = map({
    Marker: [, input.Marker!],
    MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlListKeyGroupsCommand
 */
export const se_ListKeyGroupsCommand = async (
  input: ListKeyGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/key-group";
  const query: any = map({
    Marker: [, input.Marker!],
    MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlListOriginAccessControlsCommand
 */
export const se_ListOriginAccessControlsCommand = async (
  input: ListOriginAccessControlsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/origin-access-control";
  const query: any = map({
    Marker: [, input.Marker!],
    MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlListOriginRequestPoliciesCommand
 */
export const se_ListOriginRequestPoliciesCommand = async (
  input: ListOriginRequestPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/origin-request-policy";
  const query: any = map({
    Type: [, input.Type!],
    Marker: [, input.Marker!],
    MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlListPublicKeysCommand
 */
export const se_ListPublicKeysCommand = async (
  input: ListPublicKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/public-key";
  const query: any = map({
    Marker: [, input.Marker!],
    MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlListRealtimeLogConfigsCommand
 */
export const se_ListRealtimeLogConfigsCommand = async (
  input: ListRealtimeLogConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/realtime-log-config";
  const query: any = map({
    MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
    Marker: [, input.Marker!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlListResponseHeadersPoliciesCommand
 */
export const se_ListResponseHeadersPoliciesCommand = async (
  input: ListResponseHeadersPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/response-headers-policy";
  const query: any = map({
    Type: [, input.Type!],
    Marker: [, input.Marker!],
    MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlListStreamingDistributionsCommand
 */
export const se_ListStreamingDistributionsCommand = async (
  input: ListStreamingDistributionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/streaming-distribution";
  const query: any = map({
    Marker: [, input.Marker!],
    MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/tagging";
  const query: any = map({
    Resource: [, __expectNonNull(input.Resource!, `Resource`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlPublishFunctionCommand
 */
export const se_PublishFunctionCommand = async (
  input: PublishFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "if-match": input.IfMatch!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/function/{Name}/publish";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlTagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/tagging";
  const query: any = map({
    Operation: [, "Tag"],
    Resource: [, __expectNonNull(input.Resource!, `Resource`)],
  });
  let body: any;
  if (input.Tags !== undefined) {
    body = se_Tags(input.Tags, context);
  }
  let contents: any;
  if (input.Tags !== undefined) {
    contents = se_Tags(input.Tags, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlTestFunctionCommand
 */
export const se_TestFunctionCommand = async (
  input: TestFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "if-match": input.IfMatch!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/function/{Name}/test";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("TestFunctionRequest");
  bodyNode.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
  if (input.EventObject !== undefined) {
    const node = __XmlNode.of("FunctionEventObject", context.base64Encoder(input.EventObject)).withName("EventObject");
    bodyNode.addChildNode(node);
  }
  if (input.Stage !== undefined) {
    const node = __XmlNode.of("FunctionStage", input.Stage).withName("Stage");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlUntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/tagging";
  const query: any = map({
    Operation: [, "Untag"],
    Resource: [, __expectNonNull(input.Resource!, `Resource`)],
  });
  let body: any;
  if (input.TagKeys !== undefined) {
    body = se_TagKeys(input.TagKeys, context);
  }
  let contents: any;
  if (input.TagKeys !== undefined) {
    contents = se_TagKeys(input.TagKeys, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlUpdateCachePolicyCommand
 */
export const se_UpdateCachePolicyCommand = async (
  input: UpdateCachePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "if-match": input.IfMatch!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/cache-policy/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  if (input.CachePolicyConfig !== undefined) {
    body = se_CachePolicyConfig(input.CachePolicyConfig, context);
  }
  let contents: any;
  if (input.CachePolicyConfig !== undefined) {
    contents = se_CachePolicyConfig(input.CachePolicyConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommand
 */
export const se_UpdateCloudFrontOriginAccessIdentityCommand = async (
  input: UpdateCloudFrontOriginAccessIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "if-match": input.IfMatch!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/origin-access-identity/cloudfront/{Id}/config";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  if (input.CloudFrontOriginAccessIdentityConfig !== undefined) {
    body = se_CloudFrontOriginAccessIdentityConfig(input.CloudFrontOriginAccessIdentityConfig, context);
  }
  let contents: any;
  if (input.CloudFrontOriginAccessIdentityConfig !== undefined) {
    contents = se_CloudFrontOriginAccessIdentityConfig(input.CloudFrontOriginAccessIdentityConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlUpdateContinuousDeploymentPolicyCommand
 */
export const se_UpdateContinuousDeploymentPolicyCommand = async (
  input: UpdateContinuousDeploymentPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "if-match": input.IfMatch!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/continuous-deployment-policy/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  if (input.ContinuousDeploymentPolicyConfig !== undefined) {
    body = se_ContinuousDeploymentPolicyConfig(input.ContinuousDeploymentPolicyConfig, context);
  }
  let contents: any;
  if (input.ContinuousDeploymentPolicyConfig !== undefined) {
    contents = se_ContinuousDeploymentPolicyConfig(input.ContinuousDeploymentPolicyConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlUpdateDistributionCommand
 */
export const se_UpdateDistributionCommand = async (
  input: UpdateDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "if-match": input.IfMatch!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/distribution/{Id}/config";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  if (input.DistributionConfig !== undefined) {
    body = se_DistributionConfig(input.DistributionConfig, context);
  }
  let contents: any;
  if (input.DistributionConfig !== undefined) {
    contents = se_DistributionConfig(input.DistributionConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlUpdateDistributionWithStagingConfigCommand
 */
export const se_UpdateDistributionWithStagingConfigCommand = async (
  input: UpdateDistributionWithStagingConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "if-match": input.IfMatch!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/distribution/{Id}/promote-staging-config";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  const query: any = map({
    StagingDistributionId: [, input.StagingDistributionId!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlUpdateFieldLevelEncryptionConfigCommand
 */
export const se_UpdateFieldLevelEncryptionConfigCommand = async (
  input: UpdateFieldLevelEncryptionConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "if-match": input.IfMatch!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/field-level-encryption/{Id}/config";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  if (input.FieldLevelEncryptionConfig !== undefined) {
    body = se_FieldLevelEncryptionConfig(input.FieldLevelEncryptionConfig, context);
  }
  let contents: any;
  if (input.FieldLevelEncryptionConfig !== undefined) {
    contents = se_FieldLevelEncryptionConfig(input.FieldLevelEncryptionConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlUpdateFieldLevelEncryptionProfileCommand
 */
export const se_UpdateFieldLevelEncryptionProfileCommand = async (
  input: UpdateFieldLevelEncryptionProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "if-match": input.IfMatch!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/field-level-encryption-profile/{Id}/config";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  if (input.FieldLevelEncryptionProfileConfig !== undefined) {
    body = se_FieldLevelEncryptionProfileConfig(input.FieldLevelEncryptionProfileConfig, context);
  }
  let contents: any;
  if (input.FieldLevelEncryptionProfileConfig !== undefined) {
    contents = se_FieldLevelEncryptionProfileConfig(input.FieldLevelEncryptionProfileConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlUpdateFunctionCommand
 */
export const se_UpdateFunctionCommand = async (
  input: UpdateFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "if-match": input.IfMatch!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/function/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("UpdateFunctionRequest");
  bodyNode.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
  if (input.FunctionCode !== undefined) {
    const node = __XmlNode.of("FunctionBlob", context.base64Encoder(input.FunctionCode)).withName("FunctionCode");
    bodyNode.addChildNode(node);
  }
  if (input.FunctionConfig !== undefined) {
    const node = se_FunctionConfig(input.FunctionConfig, context).withName("FunctionConfig");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlUpdateKeyGroupCommand
 */
export const se_UpdateKeyGroupCommand = async (
  input: UpdateKeyGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "if-match": input.IfMatch!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/key-group/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  if (input.KeyGroupConfig !== undefined) {
    body = se_KeyGroupConfig(input.KeyGroupConfig, context);
  }
  let contents: any;
  if (input.KeyGroupConfig !== undefined) {
    contents = se_KeyGroupConfig(input.KeyGroupConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlUpdateOriginAccessControlCommand
 */
export const se_UpdateOriginAccessControlCommand = async (
  input: UpdateOriginAccessControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "if-match": input.IfMatch!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/origin-access-control/{Id}/config";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  if (input.OriginAccessControlConfig !== undefined) {
    body = se_OriginAccessControlConfig(input.OriginAccessControlConfig, context);
  }
  let contents: any;
  if (input.OriginAccessControlConfig !== undefined) {
    contents = se_OriginAccessControlConfig(input.OriginAccessControlConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlUpdateOriginRequestPolicyCommand
 */
export const se_UpdateOriginRequestPolicyCommand = async (
  input: UpdateOriginRequestPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "if-match": input.IfMatch!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/origin-request-policy/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  if (input.OriginRequestPolicyConfig !== undefined) {
    body = se_OriginRequestPolicyConfig(input.OriginRequestPolicyConfig, context);
  }
  let contents: any;
  if (input.OriginRequestPolicyConfig !== undefined) {
    contents = se_OriginRequestPolicyConfig(input.OriginRequestPolicyConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlUpdatePublicKeyCommand
 */
export const se_UpdatePublicKeyCommand = async (
  input: UpdatePublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "if-match": input.IfMatch!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/public-key/{Id}/config";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  if (input.PublicKeyConfig !== undefined) {
    body = se_PublicKeyConfig(input.PublicKeyConfig, context);
  }
  let contents: any;
  if (input.PublicKeyConfig !== undefined) {
    contents = se_PublicKeyConfig(input.PublicKeyConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlUpdateRealtimeLogConfigCommand
 */
export const se_UpdateRealtimeLogConfigCommand = async (
  input: UpdateRealtimeLogConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/realtime-log-config";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("UpdateRealtimeLogConfigRequest");
  bodyNode.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
  if (input.ARN !== undefined) {
    const node = __XmlNode.of("string", input.ARN).withName("ARN");
    bodyNode.addChildNode(node);
  }
  if (input.EndPoints !== undefined) {
    const nodes = se_EndPointList(input.EndPoints, context);
    const containerNode = new __XmlNode("EndPoints");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.Fields !== undefined) {
    const nodes = se_FieldList(input.Fields, context);
    const containerNode = new __XmlNode("Fields");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.Name !== undefined) {
    const node = __XmlNode.of("string", input.Name).withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.SamplingRate !== undefined) {
    const node = __XmlNode.of("long", String(input.SamplingRate)).withName("SamplingRate");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlUpdateResponseHeadersPolicyCommand
 */
export const se_UpdateResponseHeadersPolicyCommand = async (
  input: UpdateResponseHeadersPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "if-match": input.IfMatch!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/response-headers-policy/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  if (input.ResponseHeadersPolicyConfig !== undefined) {
    body = se_ResponseHeadersPolicyConfig(input.ResponseHeadersPolicyConfig, context);
  }
  let contents: any;
  if (input.ResponseHeadersPolicyConfig !== undefined) {
    contents = se_ResponseHeadersPolicyConfig(input.ResponseHeadersPolicyConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlUpdateStreamingDistributionCommand
 */
export const se_UpdateStreamingDistributionCommand = async (
  input: UpdateStreamingDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "if-match": input.IfMatch!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/streaming-distribution/{Id}/config";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  if (input.StreamingDistributionConfig !== undefined) {
    body = se_StreamingDistributionConfig(input.StreamingDistributionConfig, context);
  }
  let contents: any;
  if (input.StreamingDistributionConfig !== undefined) {
    contents = se_StreamingDistributionConfig(input.StreamingDistributionConfig, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restXmlAssociateAliasCommand
 */
export const de_AssociateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateAliasCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlAssociateAliasCommandError
 */
const de_AssociateAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateAliasCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlCopyDistributionCommand
 */
export const de_CopyDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyDistributionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CopyDistributionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Location: [, output.headers["location"]],
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.Distribution = de_Distribution(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlCopyDistributionCommandError
 */
const de_CopyDistributionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyDistributionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
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
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
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
    case "NoSuchDistribution":
    case "com.amazonaws.cloudfront#NoSuchDistribution":
      throw await de_NoSuchDistributionRes(parsedOutput, context);
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
    case "TooManyDistributionCNAMEs":
    case "com.amazonaws.cloudfront#TooManyDistributionCNAMEs":
      throw await de_TooManyDistributionCNAMEsRes(parsedOutput, context);
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlCreateCachePolicyCommand
 */
export const de_CreateCachePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCachePolicyCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateCachePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Location: [, output.headers["location"]],
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CachePolicy = de_CachePolicy(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreateCachePolicyCommandError
 */
const de_CreateCachePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCachePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "CachePolicyAlreadyExists":
    case "com.amazonaws.cloudfront#CachePolicyAlreadyExists":
      throw await de_CachePolicyAlreadyExistsRes(parsedOutput, context);
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await de_InconsistentQuantitiesRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlCreateCloudFrontOriginAccessIdentityCommand
 */
export const de_CreateCloudFrontOriginAccessIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCloudFrontOriginAccessIdentityCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateCloudFrontOriginAccessIdentityCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Location: [, output.headers["location"]],
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CloudFrontOriginAccessIdentity = de_CloudFrontOriginAccessIdentity(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreateCloudFrontOriginAccessIdentityCommandError
 */
const de_CreateCloudFrontOriginAccessIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCloudFrontOriginAccessIdentityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudFrontOriginAccessIdentityAlreadyExists":
    case "com.amazonaws.cloudfront#CloudFrontOriginAccessIdentityAlreadyExists":
      throw await de_CloudFrontOriginAccessIdentityAlreadyExistsRes(parsedOutput, context);
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await de_InconsistentQuantitiesRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "MissingBody":
    case "com.amazonaws.cloudfront#MissingBody":
      throw await de_MissingBodyRes(parsedOutput, context);
    case "TooManyCloudFrontOriginAccessIdentities":
    case "com.amazonaws.cloudfront#TooManyCloudFrontOriginAccessIdentities":
      throw await de_TooManyCloudFrontOriginAccessIdentitiesRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlCreateContinuousDeploymentPolicyCommand
 */
export const de_CreateContinuousDeploymentPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContinuousDeploymentPolicyCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateContinuousDeploymentPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Location: [, output.headers["location"]],
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ContinuousDeploymentPolicy = de_ContinuousDeploymentPolicy(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreateContinuousDeploymentPolicyCommandError
 */
const de_CreateContinuousDeploymentPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContinuousDeploymentPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "ContinuousDeploymentPolicyAlreadyExists":
    case "com.amazonaws.cloudfront#ContinuousDeploymentPolicyAlreadyExists":
      throw await de_ContinuousDeploymentPolicyAlreadyExistsRes(parsedOutput, context);
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await de_InconsistentQuantitiesRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "StagingDistributionInUse":
    case "com.amazonaws.cloudfront#StagingDistributionInUse":
      throw await de_StagingDistributionInUseRes(parsedOutput, context);
    case "TooManyContinuousDeploymentPolicies":
    case "com.amazonaws.cloudfront#TooManyContinuousDeploymentPolicies":
      throw await de_TooManyContinuousDeploymentPoliciesRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlCreateDistributionCommand
 */
export const de_CreateDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDistributionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateDistributionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Location: [, output.headers["location"]],
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.Distribution = de_Distribution(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreateDistributionCommandError
 */
const de_CreateDistributionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDistributionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "CNAMEAlreadyExists":
    case "com.amazonaws.cloudfront#CNAMEAlreadyExists":
      throw await de_CNAMEAlreadyExistsRes(parsedOutput, context);
    case "ContinuousDeploymentPolicyInUse":
    case "com.amazonaws.cloudfront#ContinuousDeploymentPolicyInUse":
      throw await de_ContinuousDeploymentPolicyInUseRes(parsedOutput, context);
    case "DistributionAlreadyExists":
    case "com.amazonaws.cloudfront#DistributionAlreadyExists":
      throw await de_DistributionAlreadyExistsRes(parsedOutput, context);
    case "IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
    case "com.amazonaws.cloudfront#IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
      throw await de_IllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorRes(parsedOutput, context);
    case "IllegalOriginAccessConfiguration":
    case "com.amazonaws.cloudfront#IllegalOriginAccessConfiguration":
      throw await de_IllegalOriginAccessConfigurationRes(parsedOutput, context);
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await de_InconsistentQuantitiesRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "InvalidDefaultRootObject":
    case "com.amazonaws.cloudfront#InvalidDefaultRootObject":
      throw await de_InvalidDefaultRootObjectRes(parsedOutput, context);
    case "InvalidDomainNameForOriginAccessControl":
    case "com.amazonaws.cloudfront#InvalidDomainNameForOriginAccessControl":
      throw await de_InvalidDomainNameForOriginAccessControlRes(parsedOutput, context);
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
    case "NoSuchContinuousDeploymentPolicy":
    case "com.amazonaws.cloudfront#NoSuchContinuousDeploymentPolicy":
      throw await de_NoSuchContinuousDeploymentPolicyRes(parsedOutput, context);
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
    case "TooManyDistributionCNAMEs":
    case "com.amazonaws.cloudfront#TooManyDistributionCNAMEs":
      throw await de_TooManyDistributionCNAMEsRes(parsedOutput, context);
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlCreateDistributionWithTagsCommand
 */
export const de_CreateDistributionWithTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDistributionWithTagsCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateDistributionWithTagsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Location: [, output.headers["location"]],
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.Distribution = de_Distribution(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreateDistributionWithTagsCommandError
 */
const de_CreateDistributionWithTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDistributionWithTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "CNAMEAlreadyExists":
    case "com.amazonaws.cloudfront#CNAMEAlreadyExists":
      throw await de_CNAMEAlreadyExistsRes(parsedOutput, context);
    case "ContinuousDeploymentPolicyInUse":
    case "com.amazonaws.cloudfront#ContinuousDeploymentPolicyInUse":
      throw await de_ContinuousDeploymentPolicyInUseRes(parsedOutput, context);
    case "DistributionAlreadyExists":
    case "com.amazonaws.cloudfront#DistributionAlreadyExists":
      throw await de_DistributionAlreadyExistsRes(parsedOutput, context);
    case "IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
    case "com.amazonaws.cloudfront#IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
      throw await de_IllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorRes(parsedOutput, context);
    case "IllegalOriginAccessConfiguration":
    case "com.amazonaws.cloudfront#IllegalOriginAccessConfiguration":
      throw await de_IllegalOriginAccessConfigurationRes(parsedOutput, context);
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await de_InconsistentQuantitiesRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "InvalidDefaultRootObject":
    case "com.amazonaws.cloudfront#InvalidDefaultRootObject":
      throw await de_InvalidDefaultRootObjectRes(parsedOutput, context);
    case "InvalidDomainNameForOriginAccessControl":
    case "com.amazonaws.cloudfront#InvalidDomainNameForOriginAccessControl":
      throw await de_InvalidDomainNameForOriginAccessControlRes(parsedOutput, context);
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
    case "InvalidTagging":
    case "com.amazonaws.cloudfront#InvalidTagging":
      throw await de_InvalidTaggingRes(parsedOutput, context);
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
    case "NoSuchContinuousDeploymentPolicy":
    case "com.amazonaws.cloudfront#NoSuchContinuousDeploymentPolicy":
      throw await de_NoSuchContinuousDeploymentPolicyRes(parsedOutput, context);
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
    case "TooManyDistributionCNAMEs":
    case "com.amazonaws.cloudfront#TooManyDistributionCNAMEs":
      throw await de_TooManyDistributionCNAMEsRes(parsedOutput, context);
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlCreateFieldLevelEncryptionConfigCommand
 */
export const de_CreateFieldLevelEncryptionConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFieldLevelEncryptionConfigCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateFieldLevelEncryptionConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Location: [, output.headers["location"]],
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FieldLevelEncryption = de_FieldLevelEncryption(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreateFieldLevelEncryptionConfigCommandError
 */
const de_CreateFieldLevelEncryptionConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFieldLevelEncryptionConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "FieldLevelEncryptionConfigAlreadyExists":
    case "com.amazonaws.cloudfront#FieldLevelEncryptionConfigAlreadyExists":
      throw await de_FieldLevelEncryptionConfigAlreadyExistsRes(parsedOutput, context);
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await de_InconsistentQuantitiesRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlCreateFieldLevelEncryptionProfileCommand
 */
export const de_CreateFieldLevelEncryptionProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFieldLevelEncryptionProfileCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateFieldLevelEncryptionProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Location: [, output.headers["location"]],
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FieldLevelEncryptionProfile = de_FieldLevelEncryptionProfile(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreateFieldLevelEncryptionProfileCommandError
 */
const de_CreateFieldLevelEncryptionProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFieldLevelEncryptionProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "FieldLevelEncryptionProfileAlreadyExists":
    case "com.amazonaws.cloudfront#FieldLevelEncryptionProfileAlreadyExists":
      throw await de_FieldLevelEncryptionProfileAlreadyExistsRes(parsedOutput, context);
    case "FieldLevelEncryptionProfileSizeExceeded":
    case "com.amazonaws.cloudfront#FieldLevelEncryptionProfileSizeExceeded":
      throw await de_FieldLevelEncryptionProfileSizeExceededRes(parsedOutput, context);
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await de_InconsistentQuantitiesRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlCreateFunctionCommand
 */
export const de_CreateFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFunctionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateFunctionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Location: [, output.headers["location"]],
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FunctionSummary = de_FunctionSummary(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreateFunctionCommandError
 */
const de_CreateFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "FunctionAlreadyExists":
    case "com.amazonaws.cloudfront#FunctionAlreadyExists":
      throw await de_FunctionAlreadyExistsRes(parsedOutput, context);
    case "FunctionSizeLimitExceeded":
    case "com.amazonaws.cloudfront#FunctionSizeLimitExceeded":
      throw await de_FunctionSizeLimitExceededRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "TooManyFunctions":
    case "com.amazonaws.cloudfront#TooManyFunctions":
      throw await de_TooManyFunctionsRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.cloudfront#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlCreateInvalidationCommand
 */
export const de_CreateInvalidationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInvalidationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateInvalidationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Location: [, output.headers["location"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.Invalidation = de_Invalidation(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreateInvalidationCommandError
 */
const de_CreateInvalidationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInvalidationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "BatchTooLarge":
    case "com.amazonaws.cloudfront#BatchTooLarge":
      throw await de_BatchTooLargeRes(parsedOutput, context);
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await de_InconsistentQuantitiesRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "MissingBody":
    case "com.amazonaws.cloudfront#MissingBody":
      throw await de_MissingBodyRes(parsedOutput, context);
    case "NoSuchDistribution":
    case "com.amazonaws.cloudfront#NoSuchDistribution":
      throw await de_NoSuchDistributionRes(parsedOutput, context);
    case "TooManyInvalidationsInProgress":
    case "com.amazonaws.cloudfront#TooManyInvalidationsInProgress":
      throw await de_TooManyInvalidationsInProgressRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlCreateKeyGroupCommand
 */
export const de_CreateKeyGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKeyGroupCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateKeyGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Location: [, output.headers["location"]],
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.KeyGroup = de_KeyGroup(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreateKeyGroupCommandError
 */
const de_CreateKeyGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKeyGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "KeyGroupAlreadyExists":
    case "com.amazonaws.cloudfront#KeyGroupAlreadyExists":
      throw await de_KeyGroupAlreadyExistsRes(parsedOutput, context);
    case "TooManyKeyGroups":
    case "com.amazonaws.cloudfront#TooManyKeyGroups":
      throw await de_TooManyKeyGroupsRes(parsedOutput, context);
    case "TooManyPublicKeysInKeyGroup":
    case "com.amazonaws.cloudfront#TooManyPublicKeysInKeyGroup":
      throw await de_TooManyPublicKeysInKeyGroupRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlCreateMonitoringSubscriptionCommand
 */
export const de_CreateMonitoringSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMonitoringSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateMonitoringSubscriptionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.MonitoringSubscription = de_MonitoringSubscription(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreateMonitoringSubscriptionCommandError
 */
const de_CreateMonitoringSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMonitoringSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "MonitoringSubscriptionAlreadyExists":
    case "com.amazonaws.cloudfront#MonitoringSubscriptionAlreadyExists":
      throw await de_MonitoringSubscriptionAlreadyExistsRes(parsedOutput, context);
    case "NoSuchDistribution":
    case "com.amazonaws.cloudfront#NoSuchDistribution":
      throw await de_NoSuchDistributionRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.cloudfront#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlCreateOriginAccessControlCommand
 */
export const de_CreateOriginAccessControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOriginAccessControlCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateOriginAccessControlCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Location: [, output.headers["location"]],
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.OriginAccessControl = de_OriginAccessControl(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreateOriginAccessControlCommandError
 */
const de_CreateOriginAccessControlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOriginAccessControlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "OriginAccessControlAlreadyExists":
    case "com.amazonaws.cloudfront#OriginAccessControlAlreadyExists":
      throw await de_OriginAccessControlAlreadyExistsRes(parsedOutput, context);
    case "TooManyOriginAccessControls":
    case "com.amazonaws.cloudfront#TooManyOriginAccessControls":
      throw await de_TooManyOriginAccessControlsRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlCreateOriginRequestPolicyCommand
 */
export const de_CreateOriginRequestPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOriginRequestPolicyCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateOriginRequestPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Location: [, output.headers["location"]],
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.OriginRequestPolicy = de_OriginRequestPolicy(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreateOriginRequestPolicyCommandError
 */
const de_CreateOriginRequestPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOriginRequestPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await de_InconsistentQuantitiesRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlCreatePublicKeyCommand
 */
export const de_CreatePublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePublicKeyCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreatePublicKeyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Location: [, output.headers["location"]],
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.PublicKey = de_PublicKey(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreatePublicKeyCommandError
 */
const de_CreatePublicKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePublicKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "PublicKeyAlreadyExists":
    case "com.amazonaws.cloudfront#PublicKeyAlreadyExists":
      throw await de_PublicKeyAlreadyExistsRes(parsedOutput, context);
    case "TooManyPublicKeys":
    case "com.amazonaws.cloudfront#TooManyPublicKeys":
      throw await de_TooManyPublicKeysRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlCreateRealtimeLogConfigCommand
 */
export const de_CreateRealtimeLogConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRealtimeLogConfigCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateRealtimeLogConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["RealtimeLogConfig"] !== undefined) {
    contents.RealtimeLogConfig = de_RealtimeLogConfig(data["RealtimeLogConfig"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCreateRealtimeLogConfigCommandError
 */
const de_CreateRealtimeLogConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRealtimeLogConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "RealtimeLogConfigAlreadyExists":
    case "com.amazonaws.cloudfront#RealtimeLogConfigAlreadyExists":
      throw await de_RealtimeLogConfigAlreadyExistsRes(parsedOutput, context);
    case "TooManyRealtimeLogConfigs":
    case "com.amazonaws.cloudfront#TooManyRealtimeLogConfigs":
      throw await de_TooManyRealtimeLogConfigsRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlCreateResponseHeadersPolicyCommand
 */
export const de_CreateResponseHeadersPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResponseHeadersPolicyCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateResponseHeadersPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Location: [, output.headers["location"]],
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ResponseHeadersPolicy = de_ResponseHeadersPolicy(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreateResponseHeadersPolicyCommandError
 */
const de_CreateResponseHeadersPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResponseHeadersPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await de_InconsistentQuantitiesRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlCreateStreamingDistributionCommand
 */
export const de_CreateStreamingDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamingDistributionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateStreamingDistributionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Location: [, output.headers["location"]],
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.StreamingDistribution = de_StreamingDistribution(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreateStreamingDistributionCommandError
 */
const de_CreateStreamingDistributionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamingDistributionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "CNAMEAlreadyExists":
    case "com.amazonaws.cloudfront#CNAMEAlreadyExists":
      throw await de_CNAMEAlreadyExistsRes(parsedOutput, context);
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await de_InconsistentQuantitiesRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "InvalidOrigin":
    case "com.amazonaws.cloudfront#InvalidOrigin":
      throw await de_InvalidOriginRes(parsedOutput, context);
    case "InvalidOriginAccessControl":
    case "com.amazonaws.cloudfront#InvalidOriginAccessControl":
      throw await de_InvalidOriginAccessControlRes(parsedOutput, context);
    case "InvalidOriginAccessIdentity":
    case "com.amazonaws.cloudfront#InvalidOriginAccessIdentity":
      throw await de_InvalidOriginAccessIdentityRes(parsedOutput, context);
    case "MissingBody":
    case "com.amazonaws.cloudfront#MissingBody":
      throw await de_MissingBodyRes(parsedOutput, context);
    case "StreamingDistributionAlreadyExists":
    case "com.amazonaws.cloudfront#StreamingDistributionAlreadyExists":
      throw await de_StreamingDistributionAlreadyExistsRes(parsedOutput, context);
    case "TooManyStreamingDistributionCNAMEs":
    case "com.amazonaws.cloudfront#TooManyStreamingDistributionCNAMEs":
      throw await de_TooManyStreamingDistributionCNAMEsRes(parsedOutput, context);
    case "TooManyStreamingDistributions":
    case "com.amazonaws.cloudfront#TooManyStreamingDistributions":
      throw await de_TooManyStreamingDistributionsRes(parsedOutput, context);
    case "TooManyTrustedSigners":
    case "com.amazonaws.cloudfront#TooManyTrustedSigners":
      throw await de_TooManyTrustedSignersRes(parsedOutput, context);
    case "TrustedSignerDoesNotExist":
    case "com.amazonaws.cloudfront#TrustedSignerDoesNotExist":
      throw await de_TrustedSignerDoesNotExistRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlCreateStreamingDistributionWithTagsCommand
 */
export const de_CreateStreamingDistributionWithTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamingDistributionWithTagsCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateStreamingDistributionWithTagsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Location: [, output.headers["location"]],
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.StreamingDistribution = de_StreamingDistribution(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreateStreamingDistributionWithTagsCommandError
 */
const de_CreateStreamingDistributionWithTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamingDistributionWithTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "CNAMEAlreadyExists":
    case "com.amazonaws.cloudfront#CNAMEAlreadyExists":
      throw await de_CNAMEAlreadyExistsRes(parsedOutput, context);
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await de_InconsistentQuantitiesRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "InvalidOrigin":
    case "com.amazonaws.cloudfront#InvalidOrigin":
      throw await de_InvalidOriginRes(parsedOutput, context);
    case "InvalidOriginAccessControl":
    case "com.amazonaws.cloudfront#InvalidOriginAccessControl":
      throw await de_InvalidOriginAccessControlRes(parsedOutput, context);
    case "InvalidOriginAccessIdentity":
    case "com.amazonaws.cloudfront#InvalidOriginAccessIdentity":
      throw await de_InvalidOriginAccessIdentityRes(parsedOutput, context);
    case "InvalidTagging":
    case "com.amazonaws.cloudfront#InvalidTagging":
      throw await de_InvalidTaggingRes(parsedOutput, context);
    case "MissingBody":
    case "com.amazonaws.cloudfront#MissingBody":
      throw await de_MissingBodyRes(parsedOutput, context);
    case "StreamingDistributionAlreadyExists":
    case "com.amazonaws.cloudfront#StreamingDistributionAlreadyExists":
      throw await de_StreamingDistributionAlreadyExistsRes(parsedOutput, context);
    case "TooManyStreamingDistributionCNAMEs":
    case "com.amazonaws.cloudfront#TooManyStreamingDistributionCNAMEs":
      throw await de_TooManyStreamingDistributionCNAMEsRes(parsedOutput, context);
    case "TooManyStreamingDistributions":
    case "com.amazonaws.cloudfront#TooManyStreamingDistributions":
      throw await de_TooManyStreamingDistributionsRes(parsedOutput, context);
    case "TooManyTrustedSigners":
    case "com.amazonaws.cloudfront#TooManyTrustedSigners":
      throw await de_TooManyTrustedSignersRes(parsedOutput, context);
    case "TrustedSignerDoesNotExist":
    case "com.amazonaws.cloudfront#TrustedSignerDoesNotExist":
      throw await de_TrustedSignerDoesNotExistRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlDeleteCachePolicyCommand
 */
export const de_DeleteCachePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCachePolicyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteCachePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteCachePolicyCommandError
 */
const de_DeleteCachePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCachePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "CachePolicyInUse":
    case "com.amazonaws.cloudfront#CachePolicyInUse":
      throw await de_CachePolicyInUseRes(parsedOutput, context);
    case "IllegalDelete":
    case "com.amazonaws.cloudfront#IllegalDelete":
      throw await de_IllegalDeleteRes(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
    case "NoSuchCachePolicy":
    case "com.amazonaws.cloudfront#NoSuchCachePolicy":
      throw await de_NoSuchCachePolicyRes(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await de_PreconditionFailedRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlDeleteCloudFrontOriginAccessIdentityCommand
 */
export const de_DeleteCloudFrontOriginAccessIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCloudFrontOriginAccessIdentityCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteCloudFrontOriginAccessIdentityCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteCloudFrontOriginAccessIdentityCommandError
 */
const de_DeleteCloudFrontOriginAccessIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCloudFrontOriginAccessIdentityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "CloudFrontOriginAccessIdentityInUse":
    case "com.amazonaws.cloudfront#CloudFrontOriginAccessIdentityInUse":
      throw await de_CloudFrontOriginAccessIdentityInUseRes(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
    case "NoSuchCloudFrontOriginAccessIdentity":
    case "com.amazonaws.cloudfront#NoSuchCloudFrontOriginAccessIdentity":
      throw await de_NoSuchCloudFrontOriginAccessIdentityRes(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await de_PreconditionFailedRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlDeleteContinuousDeploymentPolicyCommand
 */
export const de_DeleteContinuousDeploymentPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContinuousDeploymentPolicyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteContinuousDeploymentPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteContinuousDeploymentPolicyCommandError
 */
const de_DeleteContinuousDeploymentPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContinuousDeploymentPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "ContinuousDeploymentPolicyInUse":
    case "com.amazonaws.cloudfront#ContinuousDeploymentPolicyInUse":
      throw await de_ContinuousDeploymentPolicyInUseRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
    case "NoSuchContinuousDeploymentPolicy":
    case "com.amazonaws.cloudfront#NoSuchContinuousDeploymentPolicy":
      throw await de_NoSuchContinuousDeploymentPolicyRes(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await de_PreconditionFailedRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlDeleteDistributionCommand
 */
export const de_DeleteDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDistributionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteDistributionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteDistributionCommandError
 */
const de_DeleteDistributionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDistributionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "DistributionNotDisabled":
    case "com.amazonaws.cloudfront#DistributionNotDisabled":
      throw await de_DistributionNotDisabledRes(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
    case "NoSuchDistribution":
    case "com.amazonaws.cloudfront#NoSuchDistribution":
      throw await de_NoSuchDistributionRes(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await de_PreconditionFailedRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlDeleteFieldLevelEncryptionConfigCommand
 */
export const de_DeleteFieldLevelEncryptionConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFieldLevelEncryptionConfigCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteFieldLevelEncryptionConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteFieldLevelEncryptionConfigCommandError
 */
const de_DeleteFieldLevelEncryptionConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFieldLevelEncryptionConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "FieldLevelEncryptionConfigInUse":
    case "com.amazonaws.cloudfront#FieldLevelEncryptionConfigInUse":
      throw await de_FieldLevelEncryptionConfigInUseRes(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
    case "NoSuchFieldLevelEncryptionConfig":
    case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionConfig":
      throw await de_NoSuchFieldLevelEncryptionConfigRes(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await de_PreconditionFailedRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlDeleteFieldLevelEncryptionProfileCommand
 */
export const de_DeleteFieldLevelEncryptionProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFieldLevelEncryptionProfileCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteFieldLevelEncryptionProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteFieldLevelEncryptionProfileCommandError
 */
const de_DeleteFieldLevelEncryptionProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFieldLevelEncryptionProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "FieldLevelEncryptionProfileInUse":
    case "com.amazonaws.cloudfront#FieldLevelEncryptionProfileInUse":
      throw await de_FieldLevelEncryptionProfileInUseRes(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
    case "NoSuchFieldLevelEncryptionProfile":
    case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionProfile":
      throw await de_NoSuchFieldLevelEncryptionProfileRes(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await de_PreconditionFailedRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlDeleteFunctionCommand
 */
export const de_DeleteFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteFunctionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteFunctionCommandError
 */
const de_DeleteFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "FunctionInUse":
    case "com.amazonaws.cloudfront#FunctionInUse":
      throw await de_FunctionInUseRes(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
    case "NoSuchFunctionExists":
    case "com.amazonaws.cloudfront#NoSuchFunctionExists":
      throw await de_NoSuchFunctionExistsRes(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await de_PreconditionFailedRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.cloudfront#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlDeleteKeyGroupCommand
 */
export const de_DeleteKeyGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKeyGroupCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteKeyGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteKeyGroupCommandError
 */
const de_DeleteKeyGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKeyGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
    case "NoSuchResource":
    case "com.amazonaws.cloudfront#NoSuchResource":
      throw await de_NoSuchResourceRes(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await de_PreconditionFailedRes(parsedOutput, context);
    case "ResourceInUse":
    case "com.amazonaws.cloudfront#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlDeleteMonitoringSubscriptionCommand
 */
export const de_DeleteMonitoringSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMonitoringSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteMonitoringSubscriptionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteMonitoringSubscriptionCommandError
 */
const de_DeleteMonitoringSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMonitoringSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "NoSuchDistribution":
    case "com.amazonaws.cloudfront#NoSuchDistribution":
      throw await de_NoSuchDistributionRes(parsedOutput, context);
    case "NoSuchMonitoringSubscription":
    case "com.amazonaws.cloudfront#NoSuchMonitoringSubscription":
      throw await de_NoSuchMonitoringSubscriptionRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.cloudfront#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlDeleteOriginAccessControlCommand
 */
export const de_DeleteOriginAccessControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOriginAccessControlCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteOriginAccessControlCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteOriginAccessControlCommandError
 */
const de_DeleteOriginAccessControlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOriginAccessControlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
    case "NoSuchOriginAccessControl":
    case "com.amazonaws.cloudfront#NoSuchOriginAccessControl":
      throw await de_NoSuchOriginAccessControlRes(parsedOutput, context);
    case "OriginAccessControlInUse":
    case "com.amazonaws.cloudfront#OriginAccessControlInUse":
      throw await de_OriginAccessControlInUseRes(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await de_PreconditionFailedRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlDeleteOriginRequestPolicyCommand
 */
export const de_DeleteOriginRequestPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOriginRequestPolicyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteOriginRequestPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteOriginRequestPolicyCommandError
 */
const de_DeleteOriginRequestPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOriginRequestPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "IllegalDelete":
    case "com.amazonaws.cloudfront#IllegalDelete":
      throw await de_IllegalDeleteRes(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
    case "NoSuchOriginRequestPolicy":
    case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
      throw await de_NoSuchOriginRequestPolicyRes(parsedOutput, context);
    case "OriginRequestPolicyInUse":
    case "com.amazonaws.cloudfront#OriginRequestPolicyInUse":
      throw await de_OriginRequestPolicyInUseRes(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await de_PreconditionFailedRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlDeletePublicKeyCommand
 */
export const de_DeletePublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePublicKeyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeletePublicKeyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeletePublicKeyCommandError
 */
const de_DeletePublicKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePublicKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
    case "NoSuchPublicKey":
    case "com.amazonaws.cloudfront#NoSuchPublicKey":
      throw await de_NoSuchPublicKeyRes(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await de_PreconditionFailedRes(parsedOutput, context);
    case "PublicKeyInUse":
    case "com.amazonaws.cloudfront#PublicKeyInUse":
      throw await de_PublicKeyInUseRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlDeleteRealtimeLogConfigCommand
 */
export const de_DeleteRealtimeLogConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRealtimeLogConfigCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteRealtimeLogConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteRealtimeLogConfigCommandError
 */
const de_DeleteRealtimeLogConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRealtimeLogConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "NoSuchRealtimeLogConfig":
    case "com.amazonaws.cloudfront#NoSuchRealtimeLogConfig":
      throw await de_NoSuchRealtimeLogConfigRes(parsedOutput, context);
    case "RealtimeLogConfigInUse":
    case "com.amazonaws.cloudfront#RealtimeLogConfigInUse":
      throw await de_RealtimeLogConfigInUseRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlDeleteResponseHeadersPolicyCommand
 */
export const de_DeleteResponseHeadersPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResponseHeadersPolicyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteResponseHeadersPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteResponseHeadersPolicyCommandError
 */
const de_DeleteResponseHeadersPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResponseHeadersPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "IllegalDelete":
    case "com.amazonaws.cloudfront#IllegalDelete":
      throw await de_IllegalDeleteRes(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
    case "NoSuchResponseHeadersPolicy":
    case "com.amazonaws.cloudfront#NoSuchResponseHeadersPolicy":
      throw await de_NoSuchResponseHeadersPolicyRes(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await de_PreconditionFailedRes(parsedOutput, context);
    case "ResponseHeadersPolicyInUse":
    case "com.amazonaws.cloudfront#ResponseHeadersPolicyInUse":
      throw await de_ResponseHeadersPolicyInUseRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlDeleteStreamingDistributionCommand
 */
export const de_DeleteStreamingDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStreamingDistributionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteStreamingDistributionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteStreamingDistributionCommandError
 */
const de_DeleteStreamingDistributionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStreamingDistributionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
    case "NoSuchStreamingDistribution":
    case "com.amazonaws.cloudfront#NoSuchStreamingDistribution":
      throw await de_NoSuchStreamingDistributionRes(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await de_PreconditionFailedRes(parsedOutput, context);
    case "StreamingDistributionNotDisabled":
    case "com.amazonaws.cloudfront#StreamingDistributionNotDisabled":
      throw await de_StreamingDistributionNotDisabledRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlDescribeFunctionCommand
 */
export const de_DescribeFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeFunctionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FunctionSummary = de_FunctionSummary(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlDescribeFunctionCommandError
 */
const de_DescribeFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchFunctionExists":
    case "com.amazonaws.cloudfront#NoSuchFunctionExists":
      throw await de_NoSuchFunctionExistsRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.cloudfront#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlGetCachePolicyCommand
 */
export const de_GetCachePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCachePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCachePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CachePolicy = de_CachePolicy(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetCachePolicyCommandError
 */
const de_GetCachePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCachePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "NoSuchCachePolicy":
    case "com.amazonaws.cloudfront#NoSuchCachePolicy":
      throw await de_NoSuchCachePolicyRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlGetCachePolicyConfigCommand
 */
export const de_GetCachePolicyConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCachePolicyConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCachePolicyConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CachePolicyConfig = de_CachePolicyConfig(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetCachePolicyConfigCommandError
 */
const de_GetCachePolicyConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCachePolicyConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "NoSuchCachePolicy":
    case "com.amazonaws.cloudfront#NoSuchCachePolicy":
      throw await de_NoSuchCachePolicyRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlGetCloudFrontOriginAccessIdentityCommand
 */
export const de_GetCloudFrontOriginAccessIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCloudFrontOriginAccessIdentityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCloudFrontOriginAccessIdentityCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CloudFrontOriginAccessIdentity = de_CloudFrontOriginAccessIdentity(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetCloudFrontOriginAccessIdentityCommandError
 */
const de_GetCloudFrontOriginAccessIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCloudFrontOriginAccessIdentityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "NoSuchCloudFrontOriginAccessIdentity":
    case "com.amazonaws.cloudfront#NoSuchCloudFrontOriginAccessIdentity":
      throw await de_NoSuchCloudFrontOriginAccessIdentityRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlGetCloudFrontOriginAccessIdentityConfigCommand
 */
export const de_GetCloudFrontOriginAccessIdentityConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCloudFrontOriginAccessIdentityConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCloudFrontOriginAccessIdentityConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CloudFrontOriginAccessIdentityConfig = de_CloudFrontOriginAccessIdentityConfig(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetCloudFrontOriginAccessIdentityConfigCommandError
 */
const de_GetCloudFrontOriginAccessIdentityConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCloudFrontOriginAccessIdentityConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "NoSuchCloudFrontOriginAccessIdentity":
    case "com.amazonaws.cloudfront#NoSuchCloudFrontOriginAccessIdentity":
      throw await de_NoSuchCloudFrontOriginAccessIdentityRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlGetContinuousDeploymentPolicyCommand
 */
export const de_GetContinuousDeploymentPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContinuousDeploymentPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetContinuousDeploymentPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ContinuousDeploymentPolicy = de_ContinuousDeploymentPolicy(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetContinuousDeploymentPolicyCommandError
 */
const de_GetContinuousDeploymentPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContinuousDeploymentPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "NoSuchContinuousDeploymentPolicy":
    case "com.amazonaws.cloudfront#NoSuchContinuousDeploymentPolicy":
      throw await de_NoSuchContinuousDeploymentPolicyRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlGetContinuousDeploymentPolicyConfigCommand
 */
export const de_GetContinuousDeploymentPolicyConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContinuousDeploymentPolicyConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetContinuousDeploymentPolicyConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ContinuousDeploymentPolicyConfig = de_ContinuousDeploymentPolicyConfig(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetContinuousDeploymentPolicyConfigCommandError
 */
const de_GetContinuousDeploymentPolicyConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContinuousDeploymentPolicyConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "NoSuchContinuousDeploymentPolicy":
    case "com.amazonaws.cloudfront#NoSuchContinuousDeploymentPolicy":
      throw await de_NoSuchContinuousDeploymentPolicyRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlGetDistributionCommand
 */
export const de_GetDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDistributionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDistributionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.Distribution = de_Distribution(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetDistributionCommandError
 */
const de_GetDistributionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDistributionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "NoSuchDistribution":
    case "com.amazonaws.cloudfront#NoSuchDistribution":
      throw await de_NoSuchDistributionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlGetDistributionConfigCommand
 */
export const de_GetDistributionConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDistributionConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDistributionConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.DistributionConfig = de_DistributionConfig(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetDistributionConfigCommandError
 */
const de_GetDistributionConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDistributionConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "NoSuchDistribution":
    case "com.amazonaws.cloudfront#NoSuchDistribution":
      throw await de_NoSuchDistributionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlGetFieldLevelEncryptionCommand
 */
export const de_GetFieldLevelEncryptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFieldLevelEncryptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetFieldLevelEncryptionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FieldLevelEncryption = de_FieldLevelEncryption(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetFieldLevelEncryptionCommandError
 */
const de_GetFieldLevelEncryptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFieldLevelEncryptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "NoSuchFieldLevelEncryptionConfig":
    case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionConfig":
      throw await de_NoSuchFieldLevelEncryptionConfigRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlGetFieldLevelEncryptionConfigCommand
 */
export const de_GetFieldLevelEncryptionConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFieldLevelEncryptionConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetFieldLevelEncryptionConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FieldLevelEncryptionConfig = de_FieldLevelEncryptionConfig(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetFieldLevelEncryptionConfigCommandError
 */
const de_GetFieldLevelEncryptionConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFieldLevelEncryptionConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "NoSuchFieldLevelEncryptionConfig":
    case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionConfig":
      throw await de_NoSuchFieldLevelEncryptionConfigRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlGetFieldLevelEncryptionProfileCommand
 */
export const de_GetFieldLevelEncryptionProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFieldLevelEncryptionProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetFieldLevelEncryptionProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FieldLevelEncryptionProfile = de_FieldLevelEncryptionProfile(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetFieldLevelEncryptionProfileCommandError
 */
const de_GetFieldLevelEncryptionProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFieldLevelEncryptionProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "NoSuchFieldLevelEncryptionProfile":
    case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionProfile":
      throw await de_NoSuchFieldLevelEncryptionProfileRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlGetFieldLevelEncryptionProfileConfigCommand
 */
export const de_GetFieldLevelEncryptionProfileConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFieldLevelEncryptionProfileConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetFieldLevelEncryptionProfileConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FieldLevelEncryptionProfileConfig = de_FieldLevelEncryptionProfileConfig(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetFieldLevelEncryptionProfileConfigCommandError
 */
const de_GetFieldLevelEncryptionProfileConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFieldLevelEncryptionProfileConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "NoSuchFieldLevelEncryptionProfile":
    case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionProfile":
      throw await de_NoSuchFieldLevelEncryptionProfileRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlGetFunctionCommand
 */
export const de_GetFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetFunctionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
    ContentType: [, output.headers["content-type"]],
  });
  const data: any = await collectBody(output.body, context);
  contents.FunctionCode = data;
  return contents;
};

/**
 * deserializeAws_restXmlGetFunctionCommandError
 */
const de_GetFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchFunctionExists":
    case "com.amazonaws.cloudfront#NoSuchFunctionExists":
      throw await de_NoSuchFunctionExistsRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.cloudfront#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlGetInvalidationCommand
 */
export const de_GetInvalidationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInvalidationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetInvalidationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.Invalidation = de_Invalidation(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetInvalidationCommandError
 */
const de_GetInvalidationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInvalidationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "NoSuchDistribution":
    case "com.amazonaws.cloudfront#NoSuchDistribution":
      throw await de_NoSuchDistributionRes(parsedOutput, context);
    case "NoSuchInvalidation":
    case "com.amazonaws.cloudfront#NoSuchInvalidation":
      throw await de_NoSuchInvalidationRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlGetKeyGroupCommand
 */
export const de_GetKeyGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetKeyGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.KeyGroup = de_KeyGroup(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetKeyGroupCommandError
 */
const de_GetKeyGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchResource":
    case "com.amazonaws.cloudfront#NoSuchResource":
      throw await de_NoSuchResourceRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlGetKeyGroupConfigCommand
 */
export const de_GetKeyGroupConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyGroupConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetKeyGroupConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.KeyGroupConfig = de_KeyGroupConfig(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetKeyGroupConfigCommandError
 */
const de_GetKeyGroupConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyGroupConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchResource":
    case "com.amazonaws.cloudfront#NoSuchResource":
      throw await de_NoSuchResourceRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlGetMonitoringSubscriptionCommand
 */
export const de_GetMonitoringSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMonitoringSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetMonitoringSubscriptionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.MonitoringSubscription = de_MonitoringSubscription(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetMonitoringSubscriptionCommandError
 */
const de_GetMonitoringSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMonitoringSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "NoSuchDistribution":
    case "com.amazonaws.cloudfront#NoSuchDistribution":
      throw await de_NoSuchDistributionRes(parsedOutput, context);
    case "NoSuchMonitoringSubscription":
    case "com.amazonaws.cloudfront#NoSuchMonitoringSubscription":
      throw await de_NoSuchMonitoringSubscriptionRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.cloudfront#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlGetOriginAccessControlCommand
 */
export const de_GetOriginAccessControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOriginAccessControlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetOriginAccessControlCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.OriginAccessControl = de_OriginAccessControl(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetOriginAccessControlCommandError
 */
const de_GetOriginAccessControlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOriginAccessControlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "NoSuchOriginAccessControl":
    case "com.amazonaws.cloudfront#NoSuchOriginAccessControl":
      throw await de_NoSuchOriginAccessControlRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlGetOriginAccessControlConfigCommand
 */
export const de_GetOriginAccessControlConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOriginAccessControlConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetOriginAccessControlConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.OriginAccessControlConfig = de_OriginAccessControlConfig(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetOriginAccessControlConfigCommandError
 */
const de_GetOriginAccessControlConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOriginAccessControlConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "NoSuchOriginAccessControl":
    case "com.amazonaws.cloudfront#NoSuchOriginAccessControl":
      throw await de_NoSuchOriginAccessControlRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlGetOriginRequestPolicyCommand
 */
export const de_GetOriginRequestPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOriginRequestPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetOriginRequestPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.OriginRequestPolicy = de_OriginRequestPolicy(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetOriginRequestPolicyCommandError
 */
const de_GetOriginRequestPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOriginRequestPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "NoSuchOriginRequestPolicy":
    case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
      throw await de_NoSuchOriginRequestPolicyRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlGetOriginRequestPolicyConfigCommand
 */
export const de_GetOriginRequestPolicyConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOriginRequestPolicyConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetOriginRequestPolicyConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.OriginRequestPolicyConfig = de_OriginRequestPolicyConfig(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetOriginRequestPolicyConfigCommandError
 */
const de_GetOriginRequestPolicyConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOriginRequestPolicyConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "NoSuchOriginRequestPolicy":
    case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
      throw await de_NoSuchOriginRequestPolicyRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlGetPublicKeyCommand
 */
export const de_GetPublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPublicKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetPublicKeyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.PublicKey = de_PublicKey(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetPublicKeyCommandError
 */
const de_GetPublicKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPublicKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "NoSuchPublicKey":
    case "com.amazonaws.cloudfront#NoSuchPublicKey":
      throw await de_NoSuchPublicKeyRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlGetPublicKeyConfigCommand
 */
export const de_GetPublicKeyConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPublicKeyConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetPublicKeyConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.PublicKeyConfig = de_PublicKeyConfig(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetPublicKeyConfigCommandError
 */
const de_GetPublicKeyConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPublicKeyConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "NoSuchPublicKey":
    case "com.amazonaws.cloudfront#NoSuchPublicKey":
      throw await de_NoSuchPublicKeyRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlGetRealtimeLogConfigCommand
 */
export const de_GetRealtimeLogConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRealtimeLogConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetRealtimeLogConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["RealtimeLogConfig"] !== undefined) {
    contents.RealtimeLogConfig = de_RealtimeLogConfig(data["RealtimeLogConfig"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetRealtimeLogConfigCommandError
 */
const de_GetRealtimeLogConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRealtimeLogConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "NoSuchRealtimeLogConfig":
    case "com.amazonaws.cloudfront#NoSuchRealtimeLogConfig":
      throw await de_NoSuchRealtimeLogConfigRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlGetResponseHeadersPolicyCommand
 */
export const de_GetResponseHeadersPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResponseHeadersPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetResponseHeadersPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ResponseHeadersPolicy = de_ResponseHeadersPolicy(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetResponseHeadersPolicyCommandError
 */
const de_GetResponseHeadersPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResponseHeadersPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "NoSuchResponseHeadersPolicy":
    case "com.amazonaws.cloudfront#NoSuchResponseHeadersPolicy":
      throw await de_NoSuchResponseHeadersPolicyRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlGetResponseHeadersPolicyConfigCommand
 */
export const de_GetResponseHeadersPolicyConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResponseHeadersPolicyConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetResponseHeadersPolicyConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ResponseHeadersPolicyConfig = de_ResponseHeadersPolicyConfig(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetResponseHeadersPolicyConfigCommandError
 */
const de_GetResponseHeadersPolicyConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResponseHeadersPolicyConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "NoSuchResponseHeadersPolicy":
    case "com.amazonaws.cloudfront#NoSuchResponseHeadersPolicy":
      throw await de_NoSuchResponseHeadersPolicyRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlGetStreamingDistributionCommand
 */
export const de_GetStreamingDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStreamingDistributionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetStreamingDistributionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.StreamingDistribution = de_StreamingDistribution(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetStreamingDistributionCommandError
 */
const de_GetStreamingDistributionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStreamingDistributionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "NoSuchStreamingDistribution":
    case "com.amazonaws.cloudfront#NoSuchStreamingDistribution":
      throw await de_NoSuchStreamingDistributionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlGetStreamingDistributionConfigCommand
 */
export const de_GetStreamingDistributionConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStreamingDistributionConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetStreamingDistributionConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.StreamingDistributionConfig = de_StreamingDistributionConfig(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetStreamingDistributionConfigCommandError
 */
const de_GetStreamingDistributionConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStreamingDistributionConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "NoSuchStreamingDistribution":
    case "com.amazonaws.cloudfront#NoSuchStreamingDistribution":
      throw await de_NoSuchStreamingDistributionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlListCachePoliciesCommand
 */
export const de_ListCachePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCachePoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListCachePoliciesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CachePolicyList = de_CachePolicyList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListCachePoliciesCommandError
 */
const de_ListCachePoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCachePoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "NoSuchCachePolicy":
    case "com.amazonaws.cloudfront#NoSuchCachePolicy":
      throw await de_NoSuchCachePolicyRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlListCloudFrontOriginAccessIdentitiesCommand
 */
export const de_ListCloudFrontOriginAccessIdentitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCloudFrontOriginAccessIdentitiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListCloudFrontOriginAccessIdentitiesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CloudFrontOriginAccessIdentityList = de_CloudFrontOriginAccessIdentityList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListCloudFrontOriginAccessIdentitiesCommandError
 */
const de_ListCloudFrontOriginAccessIdentitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCloudFrontOriginAccessIdentitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlListConflictingAliasesCommand
 */
export const de_ListConflictingAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConflictingAliasesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListConflictingAliasesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ConflictingAliasesList = de_ConflictingAliasesList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListConflictingAliasesCommandError
 */
const de_ListConflictingAliasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConflictingAliasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "NoSuchDistribution":
    case "com.amazonaws.cloudfront#NoSuchDistribution":
      throw await de_NoSuchDistributionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlListContinuousDeploymentPoliciesCommand
 */
export const de_ListContinuousDeploymentPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContinuousDeploymentPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListContinuousDeploymentPoliciesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ContinuousDeploymentPolicyList = de_ContinuousDeploymentPolicyList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListContinuousDeploymentPoliciesCommandError
 */
const de_ListContinuousDeploymentPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContinuousDeploymentPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "NoSuchContinuousDeploymentPolicy":
    case "com.amazonaws.cloudfront#NoSuchContinuousDeploymentPolicy":
      throw await de_NoSuchContinuousDeploymentPolicyRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlListDistributionsCommand
 */
export const de_ListDistributionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDistributionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.DistributionList = de_DistributionList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListDistributionsCommandError
 */
const de_ListDistributionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlListDistributionsByCachePolicyIdCommand
 */
export const de_ListDistributionsByCachePolicyIdCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionsByCachePolicyIdCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDistributionsByCachePolicyIdCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.DistributionIdList = de_DistributionIdList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListDistributionsByCachePolicyIdCommandError
 */
const de_ListDistributionsByCachePolicyIdCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionsByCachePolicyIdCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "NoSuchCachePolicy":
    case "com.amazonaws.cloudfront#NoSuchCachePolicy":
      throw await de_NoSuchCachePolicyRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlListDistributionsByKeyGroupCommand
 */
export const de_ListDistributionsByKeyGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionsByKeyGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDistributionsByKeyGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.DistributionIdList = de_DistributionIdList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListDistributionsByKeyGroupCommandError
 */
const de_ListDistributionsByKeyGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionsByKeyGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "NoSuchResource":
    case "com.amazonaws.cloudfront#NoSuchResource":
      throw await de_NoSuchResourceRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlListDistributionsByOriginRequestPolicyIdCommand
 */
export const de_ListDistributionsByOriginRequestPolicyIdCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionsByOriginRequestPolicyIdCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDistributionsByOriginRequestPolicyIdCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.DistributionIdList = de_DistributionIdList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListDistributionsByOriginRequestPolicyIdCommandError
 */
const de_ListDistributionsByOriginRequestPolicyIdCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionsByOriginRequestPolicyIdCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "NoSuchOriginRequestPolicy":
    case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
      throw await de_NoSuchOriginRequestPolicyRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlListDistributionsByRealtimeLogConfigCommand
 */
export const de_ListDistributionsByRealtimeLogConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionsByRealtimeLogConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDistributionsByRealtimeLogConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.DistributionList = de_DistributionList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListDistributionsByRealtimeLogConfigCommandError
 */
const de_ListDistributionsByRealtimeLogConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionsByRealtimeLogConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlListDistributionsByResponseHeadersPolicyIdCommand
 */
export const de_ListDistributionsByResponseHeadersPolicyIdCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionsByResponseHeadersPolicyIdCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDistributionsByResponseHeadersPolicyIdCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.DistributionIdList = de_DistributionIdList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListDistributionsByResponseHeadersPolicyIdCommandError
 */
const de_ListDistributionsByResponseHeadersPolicyIdCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionsByResponseHeadersPolicyIdCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "NoSuchResponseHeadersPolicy":
    case "com.amazonaws.cloudfront#NoSuchResponseHeadersPolicy":
      throw await de_NoSuchResponseHeadersPolicyRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlListDistributionsByWebACLIdCommand
 */
export const de_ListDistributionsByWebACLIdCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionsByWebACLIdCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDistributionsByWebACLIdCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.DistributionList = de_DistributionList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListDistributionsByWebACLIdCommandError
 */
const de_ListDistributionsByWebACLIdCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionsByWebACLIdCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "InvalidWebACLId":
    case "com.amazonaws.cloudfront#InvalidWebACLId":
      throw await de_InvalidWebACLIdRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlListFieldLevelEncryptionConfigsCommand
 */
export const de_ListFieldLevelEncryptionConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFieldLevelEncryptionConfigsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListFieldLevelEncryptionConfigsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FieldLevelEncryptionList = de_FieldLevelEncryptionList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListFieldLevelEncryptionConfigsCommandError
 */
const de_ListFieldLevelEncryptionConfigsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFieldLevelEncryptionConfigsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlListFieldLevelEncryptionProfilesCommand
 */
export const de_ListFieldLevelEncryptionProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFieldLevelEncryptionProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListFieldLevelEncryptionProfilesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FieldLevelEncryptionProfileList = de_FieldLevelEncryptionProfileList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListFieldLevelEncryptionProfilesCommandError
 */
const de_ListFieldLevelEncryptionProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFieldLevelEncryptionProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlListFunctionsCommand
 */
export const de_ListFunctionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListFunctionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FunctionList = de_FunctionList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListFunctionsCommandError
 */
const de_ListFunctionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.cloudfront#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlListInvalidationsCommand
 */
export const de_ListInvalidationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInvalidationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListInvalidationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.InvalidationList = de_InvalidationList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListInvalidationsCommandError
 */
const de_ListInvalidationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInvalidationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "NoSuchDistribution":
    case "com.amazonaws.cloudfront#NoSuchDistribution":
      throw await de_NoSuchDistributionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlListKeyGroupsCommand
 */
export const de_ListKeyGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKeyGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListKeyGroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.KeyGroupList = de_KeyGroupList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListKeyGroupsCommandError
 */
const de_ListKeyGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKeyGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlListOriginAccessControlsCommand
 */
export const de_ListOriginAccessControlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOriginAccessControlsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListOriginAccessControlsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.OriginAccessControlList = de_OriginAccessControlList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListOriginAccessControlsCommandError
 */
const de_ListOriginAccessControlsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOriginAccessControlsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlListOriginRequestPoliciesCommand
 */
export const de_ListOriginRequestPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOriginRequestPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListOriginRequestPoliciesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.OriginRequestPolicyList = de_OriginRequestPolicyList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListOriginRequestPoliciesCommandError
 */
const de_ListOriginRequestPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOriginRequestPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "NoSuchOriginRequestPolicy":
    case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
      throw await de_NoSuchOriginRequestPolicyRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlListPublicKeysCommand
 */
export const de_ListPublicKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPublicKeysCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPublicKeysCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.PublicKeyList = de_PublicKeyList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListPublicKeysCommandError
 */
const de_ListPublicKeysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPublicKeysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlListRealtimeLogConfigsCommand
 */
export const de_ListRealtimeLogConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRealtimeLogConfigsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListRealtimeLogConfigsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.RealtimeLogConfigs = de_RealtimeLogConfigs(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListRealtimeLogConfigsCommandError
 */
const de_ListRealtimeLogConfigsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRealtimeLogConfigsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "NoSuchRealtimeLogConfig":
    case "com.amazonaws.cloudfront#NoSuchRealtimeLogConfig":
      throw await de_NoSuchRealtimeLogConfigRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlListResponseHeadersPoliciesCommand
 */
export const de_ListResponseHeadersPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResponseHeadersPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListResponseHeadersPoliciesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ResponseHeadersPolicyList = de_ResponseHeadersPolicyList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListResponseHeadersPoliciesCommandError
 */
const de_ListResponseHeadersPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResponseHeadersPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "NoSuchResponseHeadersPolicy":
    case "com.amazonaws.cloudfront#NoSuchResponseHeadersPolicy":
      throw await de_NoSuchResponseHeadersPolicyRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlListStreamingDistributionsCommand
 */
export const de_ListStreamingDistributionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamingDistributionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListStreamingDistributionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.StreamingDistributionList = de_StreamingDistributionList(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListStreamingDistributionsCommandError
 */
const de_ListStreamingDistributionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamingDistributionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.Tags = de_Tags(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "InvalidTagging":
    case "com.amazonaws.cloudfront#InvalidTagging":
      throw await de_InvalidTaggingRes(parsedOutput, context);
    case "NoSuchResource":
    case "com.amazonaws.cloudfront#NoSuchResource":
      throw await de_NoSuchResourceRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlPublishFunctionCommand
 */
export const de_PublishFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PublishFunctionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FunctionSummary = de_FunctionSummary(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlPublishFunctionCommandError
 */
const de_PublishFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
    case "NoSuchFunctionExists":
    case "com.amazonaws.cloudfront#NoSuchFunctionExists":
      throw await de_NoSuchFunctionExistsRes(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await de_PreconditionFailedRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.cloudfront#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlTagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlTagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "InvalidTagging":
    case "com.amazonaws.cloudfront#InvalidTagging":
      throw await de_InvalidTaggingRes(parsedOutput, context);
    case "NoSuchResource":
    case "com.amazonaws.cloudfront#NoSuchResource":
      throw await de_NoSuchResourceRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlTestFunctionCommand
 */
export const de_TestFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TestFunctionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.TestResult = de_TestResult(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlTestFunctionCommandError
 */
const de_TestFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
    case "NoSuchFunctionExists":
    case "com.amazonaws.cloudfront#NoSuchFunctionExists":
      throw await de_NoSuchFunctionExistsRes(parsedOutput, context);
    case "TestFunctionFailed":
    case "com.amazonaws.cloudfront#TestFunctionFailed":
      throw await de_TestFunctionFailedRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.cloudfront#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlUntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlUntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "InvalidTagging":
    case "com.amazonaws.cloudfront#InvalidTagging":
      throw await de_InvalidTaggingRes(parsedOutput, context);
    case "NoSuchResource":
    case "com.amazonaws.cloudfront#NoSuchResource":
      throw await de_NoSuchResourceRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlUpdateCachePolicyCommand
 */
export const de_UpdateCachePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCachePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateCachePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CachePolicy = de_CachePolicy(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlUpdateCachePolicyCommandError
 */
const de_UpdateCachePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCachePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "CachePolicyAlreadyExists":
    case "com.amazonaws.cloudfront#CachePolicyAlreadyExists":
      throw await de_CachePolicyAlreadyExistsRes(parsedOutput, context);
    case "IllegalUpdate":
    case "com.amazonaws.cloudfront#IllegalUpdate":
      throw await de_IllegalUpdateRes(parsedOutput, context);
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await de_InconsistentQuantitiesRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
    case "NoSuchCachePolicy":
    case "com.amazonaws.cloudfront#NoSuchCachePolicy":
      throw await de_NoSuchCachePolicyRes(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await de_PreconditionFailedRes(parsedOutput, context);
    case "TooManyCookiesInCachePolicy":
    case "com.amazonaws.cloudfront#TooManyCookiesInCachePolicy":
      throw await de_TooManyCookiesInCachePolicyRes(parsedOutput, context);
    case "TooManyHeadersInCachePolicy":
    case "com.amazonaws.cloudfront#TooManyHeadersInCachePolicy":
      throw await de_TooManyHeadersInCachePolicyRes(parsedOutput, context);
    case "TooManyQueryStringsInCachePolicy":
    case "com.amazonaws.cloudfront#TooManyQueryStringsInCachePolicy":
      throw await de_TooManyQueryStringsInCachePolicyRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommand
 */
export const de_UpdateCloudFrontOriginAccessIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCloudFrontOriginAccessIdentityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateCloudFrontOriginAccessIdentityCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CloudFrontOriginAccessIdentity = de_CloudFrontOriginAccessIdentity(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommandError
 */
const de_UpdateCloudFrontOriginAccessIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCloudFrontOriginAccessIdentityCommandOutput> => {
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
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await de_InconsistentQuantitiesRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
    case "MissingBody":
    case "com.amazonaws.cloudfront#MissingBody":
      throw await de_MissingBodyRes(parsedOutput, context);
    case "NoSuchCloudFrontOriginAccessIdentity":
    case "com.amazonaws.cloudfront#NoSuchCloudFrontOriginAccessIdentity":
      throw await de_NoSuchCloudFrontOriginAccessIdentityRes(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await de_PreconditionFailedRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlUpdateContinuousDeploymentPolicyCommand
 */
export const de_UpdateContinuousDeploymentPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContinuousDeploymentPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateContinuousDeploymentPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ContinuousDeploymentPolicy = de_ContinuousDeploymentPolicy(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlUpdateContinuousDeploymentPolicyCommandError
 */
const de_UpdateContinuousDeploymentPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContinuousDeploymentPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await de_InconsistentQuantitiesRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
    case "NoSuchContinuousDeploymentPolicy":
    case "com.amazonaws.cloudfront#NoSuchContinuousDeploymentPolicy":
      throw await de_NoSuchContinuousDeploymentPolicyRes(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await de_PreconditionFailedRes(parsedOutput, context);
    case "StagingDistributionInUse":
    case "com.amazonaws.cloudfront#StagingDistributionInUse":
      throw await de_StagingDistributionInUseRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlUpdateDistributionCommand
 */
export const de_UpdateDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDistributionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateDistributionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.Distribution = de_Distribution(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlUpdateDistributionCommandError
 */
const de_UpdateDistributionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDistributionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "CNAMEAlreadyExists":
    case "com.amazonaws.cloudfront#CNAMEAlreadyExists":
      throw await de_CNAMEAlreadyExistsRes(parsedOutput, context);
    case "ContinuousDeploymentPolicyInUse":
    case "com.amazonaws.cloudfront#ContinuousDeploymentPolicyInUse":
      throw await de_ContinuousDeploymentPolicyInUseRes(parsedOutput, context);
    case "IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
    case "com.amazonaws.cloudfront#IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
      throw await de_IllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorRes(parsedOutput, context);
    case "IllegalOriginAccessConfiguration":
    case "com.amazonaws.cloudfront#IllegalOriginAccessConfiguration":
      throw await de_IllegalOriginAccessConfigurationRes(parsedOutput, context);
    case "IllegalUpdate":
    case "com.amazonaws.cloudfront#IllegalUpdate":
      throw await de_IllegalUpdateRes(parsedOutput, context);
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await de_InconsistentQuantitiesRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "InvalidDefaultRootObject":
    case "com.amazonaws.cloudfront#InvalidDefaultRootObject":
      throw await de_InvalidDefaultRootObjectRes(parsedOutput, context);
    case "InvalidDomainNameForOriginAccessControl":
    case "com.amazonaws.cloudfront#InvalidDomainNameForOriginAccessControl":
      throw await de_InvalidDomainNameForOriginAccessControlRes(parsedOutput, context);
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
    case "NoSuchContinuousDeploymentPolicy":
    case "com.amazonaws.cloudfront#NoSuchContinuousDeploymentPolicy":
      throw await de_NoSuchContinuousDeploymentPolicyRes(parsedOutput, context);
    case "NoSuchDistribution":
    case "com.amazonaws.cloudfront#NoSuchDistribution":
      throw await de_NoSuchDistributionRes(parsedOutput, context);
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
    case "StagingDistributionInUse":
    case "com.amazonaws.cloudfront#StagingDistributionInUse":
      throw await de_StagingDistributionInUseRes(parsedOutput, context);
    case "TooManyCacheBehaviors":
    case "com.amazonaws.cloudfront#TooManyCacheBehaviors":
      throw await de_TooManyCacheBehaviorsRes(parsedOutput, context);
    case "TooManyCertificates":
    case "com.amazonaws.cloudfront#TooManyCertificates":
      throw await de_TooManyCertificatesRes(parsedOutput, context);
    case "TooManyCookieNamesInWhiteList":
    case "com.amazonaws.cloudfront#TooManyCookieNamesInWhiteList":
      throw await de_TooManyCookieNamesInWhiteListRes(parsedOutput, context);
    case "TooManyDistributionCNAMEs":
    case "com.amazonaws.cloudfront#TooManyDistributionCNAMEs":
      throw await de_TooManyDistributionCNAMEsRes(parsedOutput, context);
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlUpdateDistributionWithStagingConfigCommand
 */
export const de_UpdateDistributionWithStagingConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDistributionWithStagingConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateDistributionWithStagingConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.Distribution = de_Distribution(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlUpdateDistributionWithStagingConfigCommandError
 */
const de_UpdateDistributionWithStagingConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDistributionWithStagingConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "CNAMEAlreadyExists":
    case "com.amazonaws.cloudfront#CNAMEAlreadyExists":
      throw await de_CNAMEAlreadyExistsRes(parsedOutput, context);
    case "IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
    case "com.amazonaws.cloudfront#IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
      throw await de_IllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorRes(parsedOutput, context);
    case "IllegalUpdate":
    case "com.amazonaws.cloudfront#IllegalUpdate":
      throw await de_IllegalUpdateRes(parsedOutput, context);
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await de_InconsistentQuantitiesRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
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
    case "NoSuchDistribution":
    case "com.amazonaws.cloudfront#NoSuchDistribution":
      throw await de_NoSuchDistributionRes(parsedOutput, context);
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
    case "TooManyDistributionCNAMEs":
    case "com.amazonaws.cloudfront#TooManyDistributionCNAMEs":
      throw await de_TooManyDistributionCNAMEsRes(parsedOutput, context);
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlUpdateFieldLevelEncryptionConfigCommand
 */
export const de_UpdateFieldLevelEncryptionConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFieldLevelEncryptionConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateFieldLevelEncryptionConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FieldLevelEncryption = de_FieldLevelEncryption(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlUpdateFieldLevelEncryptionConfigCommandError
 */
const de_UpdateFieldLevelEncryptionConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFieldLevelEncryptionConfigCommandOutput> => {
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
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await de_InconsistentQuantitiesRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
    case "NoSuchFieldLevelEncryptionConfig":
    case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionConfig":
      throw await de_NoSuchFieldLevelEncryptionConfigRes(parsedOutput, context);
    case "NoSuchFieldLevelEncryptionProfile":
    case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionProfile":
      throw await de_NoSuchFieldLevelEncryptionProfileRes(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await de_PreconditionFailedRes(parsedOutput, context);
    case "QueryArgProfileEmpty":
    case "com.amazonaws.cloudfront#QueryArgProfileEmpty":
      throw await de_QueryArgProfileEmptyRes(parsedOutput, context);
    case "TooManyFieldLevelEncryptionContentTypeProfiles":
    case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionContentTypeProfiles":
      throw await de_TooManyFieldLevelEncryptionContentTypeProfilesRes(parsedOutput, context);
    case "TooManyFieldLevelEncryptionQueryArgProfiles":
    case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionQueryArgProfiles":
      throw await de_TooManyFieldLevelEncryptionQueryArgProfilesRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlUpdateFieldLevelEncryptionProfileCommand
 */
export const de_UpdateFieldLevelEncryptionProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFieldLevelEncryptionProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateFieldLevelEncryptionProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FieldLevelEncryptionProfile = de_FieldLevelEncryptionProfile(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlUpdateFieldLevelEncryptionProfileCommandError
 */
const de_UpdateFieldLevelEncryptionProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFieldLevelEncryptionProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "FieldLevelEncryptionProfileAlreadyExists":
    case "com.amazonaws.cloudfront#FieldLevelEncryptionProfileAlreadyExists":
      throw await de_FieldLevelEncryptionProfileAlreadyExistsRes(parsedOutput, context);
    case "FieldLevelEncryptionProfileSizeExceeded":
    case "com.amazonaws.cloudfront#FieldLevelEncryptionProfileSizeExceeded":
      throw await de_FieldLevelEncryptionProfileSizeExceededRes(parsedOutput, context);
    case "IllegalUpdate":
    case "com.amazonaws.cloudfront#IllegalUpdate":
      throw await de_IllegalUpdateRes(parsedOutput, context);
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await de_InconsistentQuantitiesRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
    case "NoSuchFieldLevelEncryptionProfile":
    case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionProfile":
      throw await de_NoSuchFieldLevelEncryptionProfileRes(parsedOutput, context);
    case "NoSuchPublicKey":
    case "com.amazonaws.cloudfront#NoSuchPublicKey":
      throw await de_NoSuchPublicKeyRes(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await de_PreconditionFailedRes(parsedOutput, context);
    case "TooManyFieldLevelEncryptionEncryptionEntities":
    case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionEncryptionEntities":
      throw await de_TooManyFieldLevelEncryptionEncryptionEntitiesRes(parsedOutput, context);
    case "TooManyFieldLevelEncryptionFieldPatterns":
    case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionFieldPatterns":
      throw await de_TooManyFieldLevelEncryptionFieldPatternsRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlUpdateFunctionCommand
 */
export const de_UpdateFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateFunctionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["ettag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FunctionSummary = de_FunctionSummary(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlUpdateFunctionCommandError
 */
const de_UpdateFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "FunctionSizeLimitExceeded":
    case "com.amazonaws.cloudfront#FunctionSizeLimitExceeded":
      throw await de_FunctionSizeLimitExceededRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
    case "NoSuchFunctionExists":
    case "com.amazonaws.cloudfront#NoSuchFunctionExists":
      throw await de_NoSuchFunctionExistsRes(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await de_PreconditionFailedRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.cloudfront#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlUpdateKeyGroupCommand
 */
export const de_UpdateKeyGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateKeyGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateKeyGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.KeyGroup = de_KeyGroup(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlUpdateKeyGroupCommandError
 */
const de_UpdateKeyGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateKeyGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
    case "KeyGroupAlreadyExists":
    case "com.amazonaws.cloudfront#KeyGroupAlreadyExists":
      throw await de_KeyGroupAlreadyExistsRes(parsedOutput, context);
    case "NoSuchResource":
    case "com.amazonaws.cloudfront#NoSuchResource":
      throw await de_NoSuchResourceRes(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await de_PreconditionFailedRes(parsedOutput, context);
    case "TooManyPublicKeysInKeyGroup":
    case "com.amazonaws.cloudfront#TooManyPublicKeysInKeyGroup":
      throw await de_TooManyPublicKeysInKeyGroupRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlUpdateOriginAccessControlCommand
 */
export const de_UpdateOriginAccessControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOriginAccessControlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateOriginAccessControlCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.OriginAccessControl = de_OriginAccessControl(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlUpdateOriginAccessControlCommandError
 */
const de_UpdateOriginAccessControlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOriginAccessControlCommandOutput> => {
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
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
    case "NoSuchOriginAccessControl":
    case "com.amazonaws.cloudfront#NoSuchOriginAccessControl":
      throw await de_NoSuchOriginAccessControlRes(parsedOutput, context);
    case "OriginAccessControlAlreadyExists":
    case "com.amazonaws.cloudfront#OriginAccessControlAlreadyExists":
      throw await de_OriginAccessControlAlreadyExistsRes(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await de_PreconditionFailedRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlUpdateOriginRequestPolicyCommand
 */
export const de_UpdateOriginRequestPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOriginRequestPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateOriginRequestPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.OriginRequestPolicy = de_OriginRequestPolicy(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlUpdateOriginRequestPolicyCommandError
 */
const de_UpdateOriginRequestPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOriginRequestPolicyCommandOutput> => {
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
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await de_InconsistentQuantitiesRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
    case "NoSuchOriginRequestPolicy":
    case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
      throw await de_NoSuchOriginRequestPolicyRes(parsedOutput, context);
    case "OriginRequestPolicyAlreadyExists":
    case "com.amazonaws.cloudfront#OriginRequestPolicyAlreadyExists":
      throw await de_OriginRequestPolicyAlreadyExistsRes(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await de_PreconditionFailedRes(parsedOutput, context);
    case "TooManyCookiesInOriginRequestPolicy":
    case "com.amazonaws.cloudfront#TooManyCookiesInOriginRequestPolicy":
      throw await de_TooManyCookiesInOriginRequestPolicyRes(parsedOutput, context);
    case "TooManyHeadersInOriginRequestPolicy":
    case "com.amazonaws.cloudfront#TooManyHeadersInOriginRequestPolicy":
      throw await de_TooManyHeadersInOriginRequestPolicyRes(parsedOutput, context);
    case "TooManyQueryStringsInOriginRequestPolicy":
    case "com.amazonaws.cloudfront#TooManyQueryStringsInOriginRequestPolicy":
      throw await de_TooManyQueryStringsInOriginRequestPolicyRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlUpdatePublicKeyCommand
 */
export const de_UpdatePublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePublicKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdatePublicKeyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.PublicKey = de_PublicKey(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlUpdatePublicKeyCommandError
 */
const de_UpdatePublicKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePublicKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "CannotChangeImmutablePublicKeyFields":
    case "com.amazonaws.cloudfront#CannotChangeImmutablePublicKeyFields":
      throw await de_CannotChangeImmutablePublicKeyFieldsRes(parsedOutput, context);
    case "IllegalUpdate":
    case "com.amazonaws.cloudfront#IllegalUpdate":
      throw await de_IllegalUpdateRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
    case "NoSuchPublicKey":
    case "com.amazonaws.cloudfront#NoSuchPublicKey":
      throw await de_NoSuchPublicKeyRes(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await de_PreconditionFailedRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlUpdateRealtimeLogConfigCommand
 */
export const de_UpdateRealtimeLogConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRealtimeLogConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateRealtimeLogConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["RealtimeLogConfig"] !== undefined) {
    contents.RealtimeLogConfig = de_RealtimeLogConfig(data["RealtimeLogConfig"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlUpdateRealtimeLogConfigCommandError
 */
const de_UpdateRealtimeLogConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRealtimeLogConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "NoSuchRealtimeLogConfig":
    case "com.amazonaws.cloudfront#NoSuchRealtimeLogConfig":
      throw await de_NoSuchRealtimeLogConfigRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlUpdateResponseHeadersPolicyCommand
 */
export const de_UpdateResponseHeadersPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResponseHeadersPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateResponseHeadersPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ResponseHeadersPolicy = de_ResponseHeadersPolicy(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlUpdateResponseHeadersPolicyCommandError
 */
const de_UpdateResponseHeadersPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResponseHeadersPolicyCommandOutput> => {
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
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await de_InconsistentQuantitiesRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
    case "NoSuchResponseHeadersPolicy":
    case "com.amazonaws.cloudfront#NoSuchResponseHeadersPolicy":
      throw await de_NoSuchResponseHeadersPolicyRes(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await de_PreconditionFailedRes(parsedOutput, context);
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlUpdateStreamingDistributionCommand
 */
export const de_UpdateStreamingDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStreamingDistributionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateStreamingDistributionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ETag: [, output.headers["etag"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.StreamingDistribution = de_StreamingDistribution(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlUpdateStreamingDistributionCommandError
 */
const de_UpdateStreamingDistributionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStreamingDistributionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await de_AccessDeniedRes(parsedOutput, context);
    case "CNAMEAlreadyExists":
    case "com.amazonaws.cloudfront#CNAMEAlreadyExists":
      throw await de_CNAMEAlreadyExistsRes(parsedOutput, context);
    case "IllegalUpdate":
    case "com.amazonaws.cloudfront#IllegalUpdate":
      throw await de_IllegalUpdateRes(parsedOutput, context);
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await de_InconsistentQuantitiesRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
    case "InvalidOriginAccessControl":
    case "com.amazonaws.cloudfront#InvalidOriginAccessControl":
      throw await de_InvalidOriginAccessControlRes(parsedOutput, context);
    case "InvalidOriginAccessIdentity":
    case "com.amazonaws.cloudfront#InvalidOriginAccessIdentity":
      throw await de_InvalidOriginAccessIdentityRes(parsedOutput, context);
    case "MissingBody":
    case "com.amazonaws.cloudfront#MissingBody":
      throw await de_MissingBodyRes(parsedOutput, context);
    case "NoSuchStreamingDistribution":
    case "com.amazonaws.cloudfront#NoSuchStreamingDistribution":
      throw await de_NoSuchStreamingDistributionRes(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await de_PreconditionFailedRes(parsedOutput, context);
    case "TooManyStreamingDistributionCNAMEs":
    case "com.amazonaws.cloudfront#TooManyStreamingDistributionCNAMEs":
      throw await de_TooManyStreamingDistributionCNAMEsRes(parsedOutput, context);
    case "TooManyTrustedSigners":
    case "com.amazonaws.cloudfront#TooManyTrustedSigners":
      throw await de_TooManyTrustedSignersRes(parsedOutput, context);
    case "TrustedSignerDoesNotExist":
    case "com.amazonaws.cloudfront#TrustedSignerDoesNotExist":
      throw await de_TrustedSignerDoesNotExistRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restXmlAccessDeniedRes
 */
const de_AccessDeniedRes = async (parsedOutput: any, context: __SerdeContext): Promise<AccessDenied> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
  }
  const exception = new CannotChangeImmutablePublicKeyFields({
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
  }
  const exception = new DistributionNotDisabled({
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
      const node = __XmlNode.of("string", entry);
      return node.withName("Header");
    });
};

/**
 * serializeAws_restXmlAccessControlAllowMethodsList
 */
const se_AccessControlAllowMethodsList = (
  input: (ResponseHeadersPolicyAccessControlAllowMethodsValues | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("ResponseHeadersPolicyAccessControlAllowMethodsValues", entry);
      return node.withName("Method");
    });
};

/**
 * serializeAws_restXmlAccessControlAllowOriginsList
 */
const se_AccessControlAllowOriginsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("string", entry);
      return node.withName("Origin");
    });
};

/**
 * serializeAws_restXmlAccessControlExposeHeadersList
 */
const se_AccessControlExposeHeadersList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("string", entry);
      return node.withName("Header");
    });
};

/**
 * serializeAws_restXmlAliases
 */
const se_Aliases = (input: Aliases, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Aliases");
  if (input.Quantity != null) {
    const node = __XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items != null) {
    const nodes = se_AliasList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlAliasList
 */
const se_AliasList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("string", entry);
      return node.withName("CNAME");
    });
};

/**
 * serializeAws_restXmlAllowedMethods
 */
const se_AllowedMethods = (input: AllowedMethods, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("AllowedMethods");
  if (input.Quantity != null) {
    const node = __XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items != null) {
    const nodes = se_MethodsList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.CachedMethods != null) {
    const node = se_CachedMethods(input.CachedMethods, context).withName("CachedMethods");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlAwsAccountNumberList
 */
const se_AwsAccountNumberList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("string", entry);
      return node.withName("AwsAccountNumber");
    });
};

/**
 * serializeAws_restXmlCacheBehavior
 */
const se_CacheBehavior = (input: CacheBehavior, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CacheBehavior");
  if (input.PathPattern != null) {
    const node = __XmlNode.of("string", input.PathPattern).withName("PathPattern");
    bodyNode.addChildNode(node);
  }
  if (input.TargetOriginId != null) {
    const node = __XmlNode.of("string", input.TargetOriginId).withName("TargetOriginId");
    bodyNode.addChildNode(node);
  }
  if (input.TrustedSigners != null) {
    const node = se_TrustedSigners(input.TrustedSigners, context).withName("TrustedSigners");
    bodyNode.addChildNode(node);
  }
  if (input.TrustedKeyGroups != null) {
    const node = se_TrustedKeyGroups(input.TrustedKeyGroups, context).withName("TrustedKeyGroups");
    bodyNode.addChildNode(node);
  }
  if (input.ViewerProtocolPolicy != null) {
    const node = __XmlNode.of("ViewerProtocolPolicy", input.ViewerProtocolPolicy).withName("ViewerProtocolPolicy");
    bodyNode.addChildNode(node);
  }
  if (input.AllowedMethods != null) {
    const node = se_AllowedMethods(input.AllowedMethods, context).withName("AllowedMethods");
    bodyNode.addChildNode(node);
  }
  if (input.SmoothStreaming != null) {
    const node = __XmlNode.of("boolean", String(input.SmoothStreaming)).withName("SmoothStreaming");
    bodyNode.addChildNode(node);
  }
  if (input.Compress != null) {
    const node = __XmlNode.of("boolean", String(input.Compress)).withName("Compress");
    bodyNode.addChildNode(node);
  }
  if (input.LambdaFunctionAssociations != null) {
    const node = se_LambdaFunctionAssociations(input.LambdaFunctionAssociations, context).withName(
      "LambdaFunctionAssociations"
    );
    bodyNode.addChildNode(node);
  }
  if (input.FunctionAssociations != null) {
    const node = se_FunctionAssociations(input.FunctionAssociations, context).withName("FunctionAssociations");
    bodyNode.addChildNode(node);
  }
  if (input.FieldLevelEncryptionId != null) {
    const node = __XmlNode.of("string", input.FieldLevelEncryptionId).withName("FieldLevelEncryptionId");
    bodyNode.addChildNode(node);
  }
  if (input.RealtimeLogConfigArn != null) {
    const node = __XmlNode.of("string", input.RealtimeLogConfigArn).withName("RealtimeLogConfigArn");
    bodyNode.addChildNode(node);
  }
  if (input.CachePolicyId != null) {
    const node = __XmlNode.of("string", input.CachePolicyId).withName("CachePolicyId");
    bodyNode.addChildNode(node);
  }
  if (input.OriginRequestPolicyId != null) {
    const node = __XmlNode.of("string", input.OriginRequestPolicyId).withName("OriginRequestPolicyId");
    bodyNode.addChildNode(node);
  }
  if (input.ResponseHeadersPolicyId != null) {
    const node = __XmlNode.of("string", input.ResponseHeadersPolicyId).withName("ResponseHeadersPolicyId");
    bodyNode.addChildNode(node);
  }
  if (input.ForwardedValues != null) {
    const node = se_ForwardedValues(input.ForwardedValues, context).withName("ForwardedValues");
    bodyNode.addChildNode(node);
  }
  if (input.MinTTL != null) {
    const node = __XmlNode.of("long", String(input.MinTTL)).withName("MinTTL");
    bodyNode.addChildNode(node);
  }
  if (input.DefaultTTL != null) {
    const node = __XmlNode.of("long", String(input.DefaultTTL)).withName("DefaultTTL");
    bodyNode.addChildNode(node);
  }
  if (input.MaxTTL != null) {
    const node = __XmlNode.of("long", String(input.MaxTTL)).withName("MaxTTL");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlCacheBehaviorList
 */
const se_CacheBehaviorList = (input: CacheBehavior[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_CacheBehavior(entry, context);
      return node.withName("CacheBehavior");
    });
};

/**
 * serializeAws_restXmlCacheBehaviors
 */
const se_CacheBehaviors = (input: CacheBehaviors, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CacheBehaviors");
  if (input.Quantity != null) {
    const node = __XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items != null) {
    const nodes = se_CacheBehaviorList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlCachedMethods
 */
const se_CachedMethods = (input: CachedMethods, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CachedMethods");
  if (input.Quantity != null) {
    const node = __XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items != null) {
    const nodes = se_MethodsList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlCachePolicyConfig
 */
const se_CachePolicyConfig = (input: CachePolicyConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CachePolicyConfig");
  if (input.Comment != null) {
    const node = __XmlNode.of("string", input.Comment).withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.Name != null) {
    const node = __XmlNode.of("string", input.Name).withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.DefaultTTL != null) {
    const node = __XmlNode.of("long", String(input.DefaultTTL)).withName("DefaultTTL");
    bodyNode.addChildNode(node);
  }
  if (input.MaxTTL != null) {
    const node = __XmlNode.of("long", String(input.MaxTTL)).withName("MaxTTL");
    bodyNode.addChildNode(node);
  }
  if (input.MinTTL != null) {
    const node = __XmlNode.of("long", String(input.MinTTL)).withName("MinTTL");
    bodyNode.addChildNode(node);
  }
  if (input.ParametersInCacheKeyAndForwardedToOrigin != null) {
    const node = se_ParametersInCacheKeyAndForwardedToOrigin(
      input.ParametersInCacheKeyAndForwardedToOrigin,
      context
    ).withName("ParametersInCacheKeyAndForwardedToOrigin");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlCachePolicyCookiesConfig
 */
const se_CachePolicyCookiesConfig = (input: CachePolicyCookiesConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CachePolicyCookiesConfig");
  if (input.CookieBehavior != null) {
    const node = __XmlNode.of("CachePolicyCookieBehavior", input.CookieBehavior).withName("CookieBehavior");
    bodyNode.addChildNode(node);
  }
  if (input.Cookies != null) {
    const node = se_CookieNames(input.Cookies, context).withName("Cookies");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlCachePolicyHeadersConfig
 */
const se_CachePolicyHeadersConfig = (input: CachePolicyHeadersConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CachePolicyHeadersConfig");
  if (input.HeaderBehavior != null) {
    const node = __XmlNode.of("CachePolicyHeaderBehavior", input.HeaderBehavior).withName("HeaderBehavior");
    bodyNode.addChildNode(node);
  }
  if (input.Headers != null) {
    const node = se_Headers(input.Headers, context).withName("Headers");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlCachePolicyQueryStringsConfig
 */
const se_CachePolicyQueryStringsConfig = (input: CachePolicyQueryStringsConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CachePolicyQueryStringsConfig");
  if (input.QueryStringBehavior != null) {
    const node = __XmlNode
      .of("CachePolicyQueryStringBehavior", input.QueryStringBehavior)
      .withName("QueryStringBehavior");
    bodyNode.addChildNode(node);
  }
  if (input.QueryStrings != null) {
    const node = se_QueryStringNames(input.QueryStrings, context).withName("QueryStrings");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlCloudFrontOriginAccessIdentityConfig
 */
const se_CloudFrontOriginAccessIdentityConfig = (
  input: CloudFrontOriginAccessIdentityConfig,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("CloudFrontOriginAccessIdentityConfig");
  if (input.CallerReference != null) {
    const node = __XmlNode.of("string", input.CallerReference).withName("CallerReference");
    bodyNode.addChildNode(node);
  }
  if (input.Comment != null) {
    const node = __XmlNode.of("string", input.Comment).withName("Comment");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlContentTypeProfile
 */
const se_ContentTypeProfile = (input: ContentTypeProfile, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ContentTypeProfile");
  if (input.Format != null) {
    const node = __XmlNode.of("Format", input.Format).withName("Format");
    bodyNode.addChildNode(node);
  }
  if (input.ProfileId != null) {
    const node = __XmlNode.of("string", input.ProfileId).withName("ProfileId");
    bodyNode.addChildNode(node);
  }
  if (input.ContentType != null) {
    const node = __XmlNode.of("string", input.ContentType).withName("ContentType");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlContentTypeProfileConfig
 */
const se_ContentTypeProfileConfig = (input: ContentTypeProfileConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ContentTypeProfileConfig");
  if (input.ForwardWhenContentTypeIsUnknown != null) {
    const node = __XmlNode
      .of("boolean", String(input.ForwardWhenContentTypeIsUnknown))
      .withName("ForwardWhenContentTypeIsUnknown");
    bodyNode.addChildNode(node);
  }
  if (input.ContentTypeProfiles != null) {
    const node = se_ContentTypeProfiles(input.ContentTypeProfiles, context).withName("ContentTypeProfiles");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlContentTypeProfileList
 */
const se_ContentTypeProfileList = (input: ContentTypeProfile[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_ContentTypeProfile(entry, context);
      return node.withName("ContentTypeProfile");
    });
};

/**
 * serializeAws_restXmlContentTypeProfiles
 */
const se_ContentTypeProfiles = (input: ContentTypeProfiles, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ContentTypeProfiles");
  if (input.Quantity != null) {
    const node = __XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items != null) {
    const nodes = se_ContentTypeProfileList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlContinuousDeploymentPolicyConfig
 */
const se_ContinuousDeploymentPolicyConfig = (input: ContinuousDeploymentPolicyConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ContinuousDeploymentPolicyConfig");
  if (input.StagingDistributionDnsNames != null) {
    const node = se_StagingDistributionDnsNames(input.StagingDistributionDnsNames, context).withName(
      "StagingDistributionDnsNames"
    );
    bodyNode.addChildNode(node);
  }
  if (input.Enabled != null) {
    const node = __XmlNode.of("boolean", String(input.Enabled)).withName("Enabled");
    bodyNode.addChildNode(node);
  }
  if (input.TrafficConfig != null) {
    const node = se_TrafficConfig(input.TrafficConfig, context).withName("TrafficConfig");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlContinuousDeploymentSingleHeaderConfig
 */
const se_ContinuousDeploymentSingleHeaderConfig = (
  input: ContinuousDeploymentSingleHeaderConfig,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ContinuousDeploymentSingleHeaderConfig");
  if (input.Header != null) {
    const node = __XmlNode.of("string", input.Header).withName("Header");
    bodyNode.addChildNode(node);
  }
  if (input.Value != null) {
    const node = __XmlNode.of("string", input.Value).withName("Value");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlContinuousDeploymentSingleWeightConfig
 */
const se_ContinuousDeploymentSingleWeightConfig = (
  input: ContinuousDeploymentSingleWeightConfig,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ContinuousDeploymentSingleWeightConfig");
  if (input.Weight != null) {
    const node = __XmlNode.of("float", String(input.Weight)).withName("Weight");
    bodyNode.addChildNode(node);
  }
  if (input.SessionStickinessConfig != null) {
    const node = se_SessionStickinessConfig(input.SessionStickinessConfig, context).withName("SessionStickinessConfig");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlCookieNameList
 */
const se_CookieNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("string", entry);
      return node.withName("Name");
    });
};

/**
 * serializeAws_restXmlCookieNames
 */
const se_CookieNames = (input: CookieNames, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CookieNames");
  if (input.Quantity != null) {
    const node = __XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items != null) {
    const nodes = se_CookieNameList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlCookiePreference
 */
const se_CookiePreference = (input: CookiePreference, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CookiePreference");
  if (input.Forward != null) {
    const node = __XmlNode.of("ItemSelection", input.Forward).withName("Forward");
    bodyNode.addChildNode(node);
  }
  if (input.WhitelistedNames != null) {
    const node = se_CookieNames(input.WhitelistedNames, context).withName("WhitelistedNames");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlCustomErrorResponse
 */
const se_CustomErrorResponse = (input: CustomErrorResponse, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CustomErrorResponse");
  if (input.ErrorCode != null) {
    const node = __XmlNode.of("integer", String(input.ErrorCode)).withName("ErrorCode");
    bodyNode.addChildNode(node);
  }
  if (input.ResponsePagePath != null) {
    const node = __XmlNode.of("string", input.ResponsePagePath).withName("ResponsePagePath");
    bodyNode.addChildNode(node);
  }
  if (input.ResponseCode != null) {
    const node = __XmlNode.of("string", input.ResponseCode).withName("ResponseCode");
    bodyNode.addChildNode(node);
  }
  if (input.ErrorCachingMinTTL != null) {
    const node = __XmlNode.of("long", String(input.ErrorCachingMinTTL)).withName("ErrorCachingMinTTL");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlCustomErrorResponseList
 */
const se_CustomErrorResponseList = (input: CustomErrorResponse[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_CustomErrorResponse(entry, context);
      return node.withName("CustomErrorResponse");
    });
};

/**
 * serializeAws_restXmlCustomErrorResponses
 */
const se_CustomErrorResponses = (input: CustomErrorResponses, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CustomErrorResponses");
  if (input.Quantity != null) {
    const node = __XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items != null) {
    const nodes = se_CustomErrorResponseList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlCustomHeaders
 */
const se_CustomHeaders = (input: CustomHeaders, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CustomHeaders");
  if (input.Quantity != null) {
    const node = __XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items != null) {
    const nodes = se_OriginCustomHeadersList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlCustomOriginConfig
 */
const se_CustomOriginConfig = (input: CustomOriginConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CustomOriginConfig");
  if (input.HTTPPort != null) {
    const node = __XmlNode.of("integer", String(input.HTTPPort)).withName("HTTPPort");
    bodyNode.addChildNode(node);
  }
  if (input.HTTPSPort != null) {
    const node = __XmlNode.of("integer", String(input.HTTPSPort)).withName("HTTPSPort");
    bodyNode.addChildNode(node);
  }
  if (input.OriginProtocolPolicy != null) {
    const node = __XmlNode.of("OriginProtocolPolicy", input.OriginProtocolPolicy).withName("OriginProtocolPolicy");
    bodyNode.addChildNode(node);
  }
  if (input.OriginSslProtocols != null) {
    const node = se_OriginSslProtocols(input.OriginSslProtocols, context).withName("OriginSslProtocols");
    bodyNode.addChildNode(node);
  }
  if (input.OriginReadTimeout != null) {
    const node = __XmlNode.of("integer", String(input.OriginReadTimeout)).withName("OriginReadTimeout");
    bodyNode.addChildNode(node);
  }
  if (input.OriginKeepaliveTimeout != null) {
    const node = __XmlNode.of("integer", String(input.OriginKeepaliveTimeout)).withName("OriginKeepaliveTimeout");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlDefaultCacheBehavior
 */
const se_DefaultCacheBehavior = (input: DefaultCacheBehavior, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("DefaultCacheBehavior");
  if (input.TargetOriginId != null) {
    const node = __XmlNode.of("string", input.TargetOriginId).withName("TargetOriginId");
    bodyNode.addChildNode(node);
  }
  if (input.TrustedSigners != null) {
    const node = se_TrustedSigners(input.TrustedSigners, context).withName("TrustedSigners");
    bodyNode.addChildNode(node);
  }
  if (input.TrustedKeyGroups != null) {
    const node = se_TrustedKeyGroups(input.TrustedKeyGroups, context).withName("TrustedKeyGroups");
    bodyNode.addChildNode(node);
  }
  if (input.ViewerProtocolPolicy != null) {
    const node = __XmlNode.of("ViewerProtocolPolicy", input.ViewerProtocolPolicy).withName("ViewerProtocolPolicy");
    bodyNode.addChildNode(node);
  }
  if (input.AllowedMethods != null) {
    const node = se_AllowedMethods(input.AllowedMethods, context).withName("AllowedMethods");
    bodyNode.addChildNode(node);
  }
  if (input.SmoothStreaming != null) {
    const node = __XmlNode.of("boolean", String(input.SmoothStreaming)).withName("SmoothStreaming");
    bodyNode.addChildNode(node);
  }
  if (input.Compress != null) {
    const node = __XmlNode.of("boolean", String(input.Compress)).withName("Compress");
    bodyNode.addChildNode(node);
  }
  if (input.LambdaFunctionAssociations != null) {
    const node = se_LambdaFunctionAssociations(input.LambdaFunctionAssociations, context).withName(
      "LambdaFunctionAssociations"
    );
    bodyNode.addChildNode(node);
  }
  if (input.FunctionAssociations != null) {
    const node = se_FunctionAssociations(input.FunctionAssociations, context).withName("FunctionAssociations");
    bodyNode.addChildNode(node);
  }
  if (input.FieldLevelEncryptionId != null) {
    const node = __XmlNode.of("string", input.FieldLevelEncryptionId).withName("FieldLevelEncryptionId");
    bodyNode.addChildNode(node);
  }
  if (input.RealtimeLogConfigArn != null) {
    const node = __XmlNode.of("string", input.RealtimeLogConfigArn).withName("RealtimeLogConfigArn");
    bodyNode.addChildNode(node);
  }
  if (input.CachePolicyId != null) {
    const node = __XmlNode.of("string", input.CachePolicyId).withName("CachePolicyId");
    bodyNode.addChildNode(node);
  }
  if (input.OriginRequestPolicyId != null) {
    const node = __XmlNode.of("string", input.OriginRequestPolicyId).withName("OriginRequestPolicyId");
    bodyNode.addChildNode(node);
  }
  if (input.ResponseHeadersPolicyId != null) {
    const node = __XmlNode.of("string", input.ResponseHeadersPolicyId).withName("ResponseHeadersPolicyId");
    bodyNode.addChildNode(node);
  }
  if (input.ForwardedValues != null) {
    const node = se_ForwardedValues(input.ForwardedValues, context).withName("ForwardedValues");
    bodyNode.addChildNode(node);
  }
  if (input.MinTTL != null) {
    const node = __XmlNode.of("long", String(input.MinTTL)).withName("MinTTL");
    bodyNode.addChildNode(node);
  }
  if (input.DefaultTTL != null) {
    const node = __XmlNode.of("long", String(input.DefaultTTL)).withName("DefaultTTL");
    bodyNode.addChildNode(node);
  }
  if (input.MaxTTL != null) {
    const node = __XmlNode.of("long", String(input.MaxTTL)).withName("MaxTTL");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlDistributionConfig
 */
const se_DistributionConfig = (input: DistributionConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("DistributionConfig");
  if (input.CallerReference != null) {
    const node = __XmlNode.of("string", input.CallerReference).withName("CallerReference");
    bodyNode.addChildNode(node);
  }
  if (input.Aliases != null) {
    const node = se_Aliases(input.Aliases, context).withName("Aliases");
    bodyNode.addChildNode(node);
  }
  if (input.DefaultRootObject != null) {
    const node = __XmlNode.of("string", input.DefaultRootObject).withName("DefaultRootObject");
    bodyNode.addChildNode(node);
  }
  if (input.Origins != null) {
    const node = se_Origins(input.Origins, context).withName("Origins");
    bodyNode.addChildNode(node);
  }
  if (input.OriginGroups != null) {
    const node = se_OriginGroups(input.OriginGroups, context).withName("OriginGroups");
    bodyNode.addChildNode(node);
  }
  if (input.DefaultCacheBehavior != null) {
    const node = se_DefaultCacheBehavior(input.DefaultCacheBehavior, context).withName("DefaultCacheBehavior");
    bodyNode.addChildNode(node);
  }
  if (input.CacheBehaviors != null) {
    const node = se_CacheBehaviors(input.CacheBehaviors, context).withName("CacheBehaviors");
    bodyNode.addChildNode(node);
  }
  if (input.CustomErrorResponses != null) {
    const node = se_CustomErrorResponses(input.CustomErrorResponses, context).withName("CustomErrorResponses");
    bodyNode.addChildNode(node);
  }
  if (input.Comment != null) {
    const node = __XmlNode.of("CommentType", input.Comment).withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.Logging != null) {
    const node = se_LoggingConfig(input.Logging, context).withName("Logging");
    bodyNode.addChildNode(node);
  }
  if (input.PriceClass != null) {
    const node = __XmlNode.of("PriceClass", input.PriceClass).withName("PriceClass");
    bodyNode.addChildNode(node);
  }
  if (input.Enabled != null) {
    const node = __XmlNode.of("boolean", String(input.Enabled)).withName("Enabled");
    bodyNode.addChildNode(node);
  }
  if (input.ViewerCertificate != null) {
    const node = se_ViewerCertificate(input.ViewerCertificate, context).withName("ViewerCertificate");
    bodyNode.addChildNode(node);
  }
  if (input.Restrictions != null) {
    const node = se_Restrictions(input.Restrictions, context).withName("Restrictions");
    bodyNode.addChildNode(node);
  }
  if (input.WebACLId != null) {
    const node = __XmlNode.of("string", input.WebACLId).withName("WebACLId");
    bodyNode.addChildNode(node);
  }
  if (input.HttpVersion != null) {
    const node = __XmlNode.of("HttpVersion", input.HttpVersion).withName("HttpVersion");
    bodyNode.addChildNode(node);
  }
  if (input.IsIPV6Enabled != null) {
    const node = __XmlNode.of("boolean", String(input.IsIPV6Enabled)).withName("IsIPV6Enabled");
    bodyNode.addChildNode(node);
  }
  if (input.ContinuousDeploymentPolicyId != null) {
    const node = __XmlNode.of("string", input.ContinuousDeploymentPolicyId).withName("ContinuousDeploymentPolicyId");
    bodyNode.addChildNode(node);
  }
  if (input.Staging != null) {
    const node = __XmlNode.of("boolean", String(input.Staging)).withName("Staging");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlDistributionConfigWithTags
 */
const se_DistributionConfigWithTags = (input: DistributionConfigWithTags, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("DistributionConfigWithTags");
  if (input.DistributionConfig != null) {
    const node = se_DistributionConfig(input.DistributionConfig, context).withName("DistributionConfig");
    bodyNode.addChildNode(node);
  }
  if (input.Tags != null) {
    const node = se_Tags(input.Tags, context).withName("Tags");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlEncryptionEntities
 */
const se_EncryptionEntities = (input: EncryptionEntities, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("EncryptionEntities");
  if (input.Quantity != null) {
    const node = __XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items != null) {
    const nodes = se_EncryptionEntityList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlEncryptionEntity
 */
const se_EncryptionEntity = (input: EncryptionEntity, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("EncryptionEntity");
  if (input.PublicKeyId != null) {
    const node = __XmlNode.of("string", input.PublicKeyId).withName("PublicKeyId");
    bodyNode.addChildNode(node);
  }
  if (input.ProviderId != null) {
    const node = __XmlNode.of("string", input.ProviderId).withName("ProviderId");
    bodyNode.addChildNode(node);
  }
  if (input.FieldPatterns != null) {
    const node = se_FieldPatterns(input.FieldPatterns, context).withName("FieldPatterns");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlEncryptionEntityList
 */
const se_EncryptionEntityList = (input: EncryptionEntity[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_EncryptionEntity(entry, context);
      return node.withName("EncryptionEntity");
    });
};

/**
 * serializeAws_restXmlEndPoint
 */
const se_EndPoint = (input: EndPoint, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("EndPoint");
  if (input.StreamType != null) {
    const node = __XmlNode.of("string", input.StreamType).withName("StreamType");
    bodyNode.addChildNode(node);
  }
  if (input.KinesisStreamConfig != null) {
    const node = se_KinesisStreamConfig(input.KinesisStreamConfig, context).withName("KinesisStreamConfig");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlEndPointList
 */
const se_EndPointList = (input: EndPoint[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_EndPoint(entry, context);
      return node.withName("member");
    });
};

/**
 * serializeAws_restXmlFieldLevelEncryptionConfig
 */
const se_FieldLevelEncryptionConfig = (input: FieldLevelEncryptionConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("FieldLevelEncryptionConfig");
  if (input.CallerReference != null) {
    const node = __XmlNode.of("string", input.CallerReference).withName("CallerReference");
    bodyNode.addChildNode(node);
  }
  if (input.Comment != null) {
    const node = __XmlNode.of("string", input.Comment).withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.QueryArgProfileConfig != null) {
    const node = se_QueryArgProfileConfig(input.QueryArgProfileConfig, context).withName("QueryArgProfileConfig");
    bodyNode.addChildNode(node);
  }
  if (input.ContentTypeProfileConfig != null) {
    const node = se_ContentTypeProfileConfig(input.ContentTypeProfileConfig, context).withName(
      "ContentTypeProfileConfig"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlFieldLevelEncryptionProfileConfig
 */
const se_FieldLevelEncryptionProfileConfig = (
  input: FieldLevelEncryptionProfileConfig,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("FieldLevelEncryptionProfileConfig");
  if (input.Name != null) {
    const node = __XmlNode.of("string", input.Name).withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.CallerReference != null) {
    const node = __XmlNode.of("string", input.CallerReference).withName("CallerReference");
    bodyNode.addChildNode(node);
  }
  if (input.Comment != null) {
    const node = __XmlNode.of("string", input.Comment).withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.EncryptionEntities != null) {
    const node = se_EncryptionEntities(input.EncryptionEntities, context).withName("EncryptionEntities");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlFieldList
 */
const se_FieldList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("string", entry);
      return node.withName("Field");
    });
};

/**
 * serializeAws_restXmlFieldPatternList
 */
const se_FieldPatternList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("string", entry);
      return node.withName("FieldPattern");
    });
};

/**
 * serializeAws_restXmlFieldPatterns
 */
const se_FieldPatterns = (input: FieldPatterns, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("FieldPatterns");
  if (input.Quantity != null) {
    const node = __XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items != null) {
    const nodes = se_FieldPatternList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlForwardedValues
 */
const se_ForwardedValues = (input: ForwardedValues, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ForwardedValues");
  if (input.QueryString != null) {
    const node = __XmlNode.of("boolean", String(input.QueryString)).withName("QueryString");
    bodyNode.addChildNode(node);
  }
  if (input.Cookies != null) {
    const node = se_CookiePreference(input.Cookies, context).withName("Cookies");
    bodyNode.addChildNode(node);
  }
  if (input.Headers != null) {
    const node = se_Headers(input.Headers, context).withName("Headers");
    bodyNode.addChildNode(node);
  }
  if (input.QueryStringCacheKeys != null) {
    const node = se_QueryStringCacheKeys(input.QueryStringCacheKeys, context).withName("QueryStringCacheKeys");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlFunctionAssociation
 */
const se_FunctionAssociation = (input: FunctionAssociation, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("FunctionAssociation");
  if (input.FunctionARN != null) {
    const node = __XmlNode.of("FunctionARN", input.FunctionARN).withName("FunctionARN");
    bodyNode.addChildNode(node);
  }
  if (input.EventType != null) {
    const node = __XmlNode.of("EventType", input.EventType).withName("EventType");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlFunctionAssociationList
 */
const se_FunctionAssociationList = (input: FunctionAssociation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_FunctionAssociation(entry, context);
      return node.withName("FunctionAssociation");
    });
};

/**
 * serializeAws_restXmlFunctionAssociations
 */
const se_FunctionAssociations = (input: FunctionAssociations, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("FunctionAssociations");
  if (input.Quantity != null) {
    const node = __XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items != null) {
    const nodes = se_FunctionAssociationList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlFunctionConfig
 */
const se_FunctionConfig = (input: FunctionConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("FunctionConfig");
  if (input.Comment != null) {
    const node = __XmlNode.of("string", input.Comment).withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.Runtime != null) {
    const node = __XmlNode.of("FunctionRuntime", input.Runtime).withName("Runtime");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlGeoRestriction
 */
const se_GeoRestriction = (input: GeoRestriction, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("GeoRestriction");
  if (input.RestrictionType != null) {
    const node = __XmlNode.of("GeoRestrictionType", input.RestrictionType).withName("RestrictionType");
    bodyNode.addChildNode(node);
  }
  if (input.Quantity != null) {
    const node = __XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items != null) {
    const nodes = se_LocationList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlHeaderList
 */
const se_HeaderList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("string", entry);
      return node.withName("Name");
    });
};

/**
 * serializeAws_restXmlHeaders
 */
const se_Headers = (input: Headers, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Headers");
  if (input.Quantity != null) {
    const node = __XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items != null) {
    const nodes = se_HeaderList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlInvalidationBatch
 */
const se_InvalidationBatch = (input: InvalidationBatch, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("InvalidationBatch");
  if (input.Paths != null) {
    const node = se_Paths(input.Paths, context).withName("Paths");
    bodyNode.addChildNode(node);
  }
  if (input.CallerReference != null) {
    const node = __XmlNode.of("string", input.CallerReference).withName("CallerReference");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlKeyGroupConfig
 */
const se_KeyGroupConfig = (input: KeyGroupConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("KeyGroupConfig");
  if (input.Name != null) {
    const node = __XmlNode.of("string", input.Name).withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.Items != null) {
    const nodes = se_PublicKeyIdList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.Comment != null) {
    const node = __XmlNode.of("string", input.Comment).withName("Comment");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlKinesisStreamConfig
 */
const se_KinesisStreamConfig = (input: KinesisStreamConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("KinesisStreamConfig");
  if (input.RoleARN != null) {
    const node = __XmlNode.of("string", input.RoleARN).withName("RoleARN");
    bodyNode.addChildNode(node);
  }
  if (input.StreamARN != null) {
    const node = __XmlNode.of("string", input.StreamARN).withName("StreamARN");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlLambdaFunctionAssociation
 */
const se_LambdaFunctionAssociation = (input: LambdaFunctionAssociation, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("LambdaFunctionAssociation");
  if (input.LambdaFunctionARN != null) {
    const node = __XmlNode.of("LambdaFunctionARN", input.LambdaFunctionARN).withName("LambdaFunctionARN");
    bodyNode.addChildNode(node);
  }
  if (input.EventType != null) {
    const node = __XmlNode.of("EventType", input.EventType).withName("EventType");
    bodyNode.addChildNode(node);
  }
  if (input.IncludeBody != null) {
    const node = __XmlNode.of("boolean", String(input.IncludeBody)).withName("IncludeBody");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlLambdaFunctionAssociationList
 */
const se_LambdaFunctionAssociationList = (input: LambdaFunctionAssociation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_LambdaFunctionAssociation(entry, context);
      return node.withName("LambdaFunctionAssociation");
    });
};

/**
 * serializeAws_restXmlLambdaFunctionAssociations
 */
const se_LambdaFunctionAssociations = (input: LambdaFunctionAssociations, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("LambdaFunctionAssociations");
  if (input.Quantity != null) {
    const node = __XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items != null) {
    const nodes = se_LambdaFunctionAssociationList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlLocationList
 */
const se_LocationList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("string", entry);
      return node.withName("Location");
    });
};

/**
 * serializeAws_restXmlLoggingConfig
 */
const se_LoggingConfig = (input: LoggingConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("LoggingConfig");
  if (input.Enabled != null) {
    const node = __XmlNode.of("boolean", String(input.Enabled)).withName("Enabled");
    bodyNode.addChildNode(node);
  }
  if (input.IncludeCookies != null) {
    const node = __XmlNode.of("boolean", String(input.IncludeCookies)).withName("IncludeCookies");
    bodyNode.addChildNode(node);
  }
  if (input.Bucket != null) {
    const node = __XmlNode.of("string", input.Bucket).withName("Bucket");
    bodyNode.addChildNode(node);
  }
  if (input.Prefix != null) {
    const node = __XmlNode.of("string", input.Prefix).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlMethodsList
 */
const se_MethodsList = (input: (Method | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("Method", entry);
      return node.withName("Method");
    });
};

/**
 * serializeAws_restXmlMonitoringSubscription
 */
const se_MonitoringSubscription = (input: MonitoringSubscription, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("MonitoringSubscription");
  if (input.RealtimeMetricsSubscriptionConfig != null) {
    const node = se_RealtimeMetricsSubscriptionConfig(input.RealtimeMetricsSubscriptionConfig, context).withName(
      "RealtimeMetricsSubscriptionConfig"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlOrigin
 */
const se_Origin = (input: Origin, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Origin");
  if (input.Id != null) {
    const node = __XmlNode.of("string", input.Id).withName("Id");
    bodyNode.addChildNode(node);
  }
  if (input.DomainName != null) {
    const node = __XmlNode.of("string", input.DomainName).withName("DomainName");
    bodyNode.addChildNode(node);
  }
  if (input.OriginPath != null) {
    const node = __XmlNode.of("string", input.OriginPath).withName("OriginPath");
    bodyNode.addChildNode(node);
  }
  if (input.CustomHeaders != null) {
    const node = se_CustomHeaders(input.CustomHeaders, context).withName("CustomHeaders");
    bodyNode.addChildNode(node);
  }
  if (input.S3OriginConfig != null) {
    const node = se_S3OriginConfig(input.S3OriginConfig, context).withName("S3OriginConfig");
    bodyNode.addChildNode(node);
  }
  if (input.CustomOriginConfig != null) {
    const node = se_CustomOriginConfig(input.CustomOriginConfig, context).withName("CustomOriginConfig");
    bodyNode.addChildNode(node);
  }
  if (input.ConnectionAttempts != null) {
    const node = __XmlNode.of("integer", String(input.ConnectionAttempts)).withName("ConnectionAttempts");
    bodyNode.addChildNode(node);
  }
  if (input.ConnectionTimeout != null) {
    const node = __XmlNode.of("integer", String(input.ConnectionTimeout)).withName("ConnectionTimeout");
    bodyNode.addChildNode(node);
  }
  if (input.OriginShield != null) {
    const node = se_OriginShield(input.OriginShield, context).withName("OriginShield");
    bodyNode.addChildNode(node);
  }
  if (input.OriginAccessControlId != null) {
    const node = __XmlNode.of("string", input.OriginAccessControlId).withName("OriginAccessControlId");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlOriginAccessControlConfig
 */
const se_OriginAccessControlConfig = (input: OriginAccessControlConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("OriginAccessControlConfig");
  if (input.Name != null) {
    const node = __XmlNode.of("string", input.Name).withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.Description != null) {
    const node = __XmlNode.of("string", input.Description).withName("Description");
    bodyNode.addChildNode(node);
  }
  if (input.SigningProtocol != null) {
    const node = __XmlNode.of("OriginAccessControlSigningProtocols", input.SigningProtocol).withName("SigningProtocol");
    bodyNode.addChildNode(node);
  }
  if (input.SigningBehavior != null) {
    const node = __XmlNode.of("OriginAccessControlSigningBehaviors", input.SigningBehavior).withName("SigningBehavior");
    bodyNode.addChildNode(node);
  }
  if (input.OriginAccessControlOriginType != null) {
    const node = __XmlNode
      .of("OriginAccessControlOriginTypes", input.OriginAccessControlOriginType)
      .withName("OriginAccessControlOriginType");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlOriginCustomHeader
 */
const se_OriginCustomHeader = (input: OriginCustomHeader, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("OriginCustomHeader");
  if (input.HeaderName != null) {
    const node = __XmlNode.of("string", input.HeaderName).withName("HeaderName");
    bodyNode.addChildNode(node);
  }
  if (input.HeaderValue != null) {
    const node = __XmlNode.of("sensitiveStringType", input.HeaderValue).withName("HeaderValue");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlOriginCustomHeadersList
 */
const se_OriginCustomHeadersList = (input: OriginCustomHeader[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_OriginCustomHeader(entry, context);
      return node.withName("OriginCustomHeader");
    });
};

/**
 * serializeAws_restXmlOriginGroup
 */
const se_OriginGroup = (input: OriginGroup, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("OriginGroup");
  if (input.Id != null) {
    const node = __XmlNode.of("string", input.Id).withName("Id");
    bodyNode.addChildNode(node);
  }
  if (input.FailoverCriteria != null) {
    const node = se_OriginGroupFailoverCriteria(input.FailoverCriteria, context).withName("FailoverCriteria");
    bodyNode.addChildNode(node);
  }
  if (input.Members != null) {
    const node = se_OriginGroupMembers(input.Members, context).withName("Members");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlOriginGroupFailoverCriteria
 */
const se_OriginGroupFailoverCriteria = (input: OriginGroupFailoverCriteria, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("OriginGroupFailoverCriteria");
  if (input.StatusCodes != null) {
    const node = se_StatusCodes(input.StatusCodes, context).withName("StatusCodes");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlOriginGroupList
 */
const se_OriginGroupList = (input: OriginGroup[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_OriginGroup(entry, context);
      return node.withName("OriginGroup");
    });
};

/**
 * serializeAws_restXmlOriginGroupMember
 */
const se_OriginGroupMember = (input: OriginGroupMember, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("OriginGroupMember");
  if (input.OriginId != null) {
    const node = __XmlNode.of("string", input.OriginId).withName("OriginId");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlOriginGroupMemberList
 */
const se_OriginGroupMemberList = (input: OriginGroupMember[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_OriginGroupMember(entry, context);
      return node.withName("OriginGroupMember");
    });
};

/**
 * serializeAws_restXmlOriginGroupMembers
 */
const se_OriginGroupMembers = (input: OriginGroupMembers, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("OriginGroupMembers");
  if (input.Quantity != null) {
    const node = __XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items != null) {
    const nodes = se_OriginGroupMemberList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlOriginGroups
 */
const se_OriginGroups = (input: OriginGroups, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("OriginGroups");
  if (input.Quantity != null) {
    const node = __XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items != null) {
    const nodes = se_OriginGroupList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlOriginList
 */
const se_OriginList = (input: Origin[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_Origin(entry, context);
      return node.withName("Origin");
    });
};

/**
 * serializeAws_restXmlOriginRequestPolicyConfig
 */
const se_OriginRequestPolicyConfig = (input: OriginRequestPolicyConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("OriginRequestPolicyConfig");
  if (input.Comment != null) {
    const node = __XmlNode.of("string", input.Comment).withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.Name != null) {
    const node = __XmlNode.of("string", input.Name).withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.HeadersConfig != null) {
    const node = se_OriginRequestPolicyHeadersConfig(input.HeadersConfig, context).withName("HeadersConfig");
    bodyNode.addChildNode(node);
  }
  if (input.CookiesConfig != null) {
    const node = se_OriginRequestPolicyCookiesConfig(input.CookiesConfig, context).withName("CookiesConfig");
    bodyNode.addChildNode(node);
  }
  if (input.QueryStringsConfig != null) {
    const node = se_OriginRequestPolicyQueryStringsConfig(input.QueryStringsConfig, context).withName(
      "QueryStringsConfig"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlOriginRequestPolicyCookiesConfig
 */
const se_OriginRequestPolicyCookiesConfig = (input: OriginRequestPolicyCookiesConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("OriginRequestPolicyCookiesConfig");
  if (input.CookieBehavior != null) {
    const node = __XmlNode.of("OriginRequestPolicyCookieBehavior", input.CookieBehavior).withName("CookieBehavior");
    bodyNode.addChildNode(node);
  }
  if (input.Cookies != null) {
    const node = se_CookieNames(input.Cookies, context).withName("Cookies");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlOriginRequestPolicyHeadersConfig
 */
const se_OriginRequestPolicyHeadersConfig = (input: OriginRequestPolicyHeadersConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("OriginRequestPolicyHeadersConfig");
  if (input.HeaderBehavior != null) {
    const node = __XmlNode.of("OriginRequestPolicyHeaderBehavior", input.HeaderBehavior).withName("HeaderBehavior");
    bodyNode.addChildNode(node);
  }
  if (input.Headers != null) {
    const node = se_Headers(input.Headers, context).withName("Headers");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlOriginRequestPolicyQueryStringsConfig
 */
const se_OriginRequestPolicyQueryStringsConfig = (
  input: OriginRequestPolicyQueryStringsConfig,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("OriginRequestPolicyQueryStringsConfig");
  if (input.QueryStringBehavior != null) {
    const node = __XmlNode
      .of("OriginRequestPolicyQueryStringBehavior", input.QueryStringBehavior)
      .withName("QueryStringBehavior");
    bodyNode.addChildNode(node);
  }
  if (input.QueryStrings != null) {
    const node = se_QueryStringNames(input.QueryStrings, context).withName("QueryStrings");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlOrigins
 */
const se_Origins = (input: Origins, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Origins");
  if (input.Quantity != null) {
    const node = __XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items != null) {
    const nodes = se_OriginList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlOriginShield
 */
const se_OriginShield = (input: OriginShield, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("OriginShield");
  if (input.Enabled != null) {
    const node = __XmlNode.of("boolean", String(input.Enabled)).withName("Enabled");
    bodyNode.addChildNode(node);
  }
  if (input.OriginShieldRegion != null) {
    const node = __XmlNode.of("OriginShieldRegion", input.OriginShieldRegion).withName("OriginShieldRegion");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlOriginSslProtocols
 */
const se_OriginSslProtocols = (input: OriginSslProtocols, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("OriginSslProtocols");
  if (input.Quantity != null) {
    const node = __XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items != null) {
    const nodes = se_SslProtocolsList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlParametersInCacheKeyAndForwardedToOrigin
 */
const se_ParametersInCacheKeyAndForwardedToOrigin = (
  input: ParametersInCacheKeyAndForwardedToOrigin,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ParametersInCacheKeyAndForwardedToOrigin");
  if (input.EnableAcceptEncodingGzip != null) {
    const node = __XmlNode.of("boolean", String(input.EnableAcceptEncodingGzip)).withName("EnableAcceptEncodingGzip");
    bodyNode.addChildNode(node);
  }
  if (input.EnableAcceptEncodingBrotli != null) {
    const node = __XmlNode
      .of("boolean", String(input.EnableAcceptEncodingBrotli))
      .withName("EnableAcceptEncodingBrotli");
    bodyNode.addChildNode(node);
  }
  if (input.HeadersConfig != null) {
    const node = se_CachePolicyHeadersConfig(input.HeadersConfig, context).withName("HeadersConfig");
    bodyNode.addChildNode(node);
  }
  if (input.CookiesConfig != null) {
    const node = se_CachePolicyCookiesConfig(input.CookiesConfig, context).withName("CookiesConfig");
    bodyNode.addChildNode(node);
  }
  if (input.QueryStringsConfig != null) {
    const node = se_CachePolicyQueryStringsConfig(input.QueryStringsConfig, context).withName("QueryStringsConfig");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlPathList
 */
const se_PathList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("string", entry);
      return node.withName("Path");
    });
};

/**
 * serializeAws_restXmlPaths
 */
const se_Paths = (input: Paths, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Paths");
  if (input.Quantity != null) {
    const node = __XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items != null) {
    const nodes = se_PathList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlPublicKeyConfig
 */
const se_PublicKeyConfig = (input: PublicKeyConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("PublicKeyConfig");
  if (input.CallerReference != null) {
    const node = __XmlNode.of("string", input.CallerReference).withName("CallerReference");
    bodyNode.addChildNode(node);
  }
  if (input.Name != null) {
    const node = __XmlNode.of("string", input.Name).withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.EncodedKey != null) {
    const node = __XmlNode.of("string", input.EncodedKey).withName("EncodedKey");
    bodyNode.addChildNode(node);
  }
  if (input.Comment != null) {
    const node = __XmlNode.of("string", input.Comment).withName("Comment");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlPublicKeyIdList
 */
const se_PublicKeyIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("string", entry);
      return node.withName("PublicKey");
    });
};

/**
 * serializeAws_restXmlQueryArgProfile
 */
const se_QueryArgProfile = (input: QueryArgProfile, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("QueryArgProfile");
  if (input.QueryArg != null) {
    const node = __XmlNode.of("string", input.QueryArg).withName("QueryArg");
    bodyNode.addChildNode(node);
  }
  if (input.ProfileId != null) {
    const node = __XmlNode.of("string", input.ProfileId).withName("ProfileId");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlQueryArgProfileConfig
 */
const se_QueryArgProfileConfig = (input: QueryArgProfileConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("QueryArgProfileConfig");
  if (input.ForwardWhenQueryArgProfileIsUnknown != null) {
    const node = __XmlNode
      .of("boolean", String(input.ForwardWhenQueryArgProfileIsUnknown))
      .withName("ForwardWhenQueryArgProfileIsUnknown");
    bodyNode.addChildNode(node);
  }
  if (input.QueryArgProfiles != null) {
    const node = se_QueryArgProfiles(input.QueryArgProfiles, context).withName("QueryArgProfiles");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlQueryArgProfileList
 */
const se_QueryArgProfileList = (input: QueryArgProfile[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_QueryArgProfile(entry, context);
      return node.withName("QueryArgProfile");
    });
};

/**
 * serializeAws_restXmlQueryArgProfiles
 */
const se_QueryArgProfiles = (input: QueryArgProfiles, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("QueryArgProfiles");
  if (input.Quantity != null) {
    const node = __XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items != null) {
    const nodes = se_QueryArgProfileList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlQueryStringCacheKeys
 */
const se_QueryStringCacheKeys = (input: QueryStringCacheKeys, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("QueryStringCacheKeys");
  if (input.Quantity != null) {
    const node = __XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items != null) {
    const nodes = se_QueryStringCacheKeysList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlQueryStringCacheKeysList
 */
const se_QueryStringCacheKeysList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("string", entry);
      return node.withName("Name");
    });
};

/**
 * serializeAws_restXmlQueryStringNames
 */
const se_QueryStringNames = (input: QueryStringNames, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("QueryStringNames");
  if (input.Quantity != null) {
    const node = __XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items != null) {
    const nodes = se_QueryStringNamesList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlQueryStringNamesList
 */
const se_QueryStringNamesList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("string", entry);
      return node.withName("Name");
    });
};

/**
 * serializeAws_restXmlRealtimeMetricsSubscriptionConfig
 */
const se_RealtimeMetricsSubscriptionConfig = (
  input: RealtimeMetricsSubscriptionConfig,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("RealtimeMetricsSubscriptionConfig");
  if (input.RealtimeMetricsSubscriptionStatus != null) {
    const node = __XmlNode
      .of("RealtimeMetricsSubscriptionStatus", input.RealtimeMetricsSubscriptionStatus)
      .withName("RealtimeMetricsSubscriptionStatus");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlResponseHeadersPolicyAccessControlAllowHeaders
 */
const se_ResponseHeadersPolicyAccessControlAllowHeaders = (
  input: ResponseHeadersPolicyAccessControlAllowHeaders,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ResponseHeadersPolicyAccessControlAllowHeaders");
  if (input.Quantity != null) {
    const node = __XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items != null) {
    const nodes = se_AccessControlAllowHeadersList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlResponseHeadersPolicyAccessControlAllowMethods
 */
const se_ResponseHeadersPolicyAccessControlAllowMethods = (
  input: ResponseHeadersPolicyAccessControlAllowMethods,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ResponseHeadersPolicyAccessControlAllowMethods");
  if (input.Quantity != null) {
    const node = __XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items != null) {
    const nodes = se_AccessControlAllowMethodsList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlResponseHeadersPolicyAccessControlAllowOrigins
 */
const se_ResponseHeadersPolicyAccessControlAllowOrigins = (
  input: ResponseHeadersPolicyAccessControlAllowOrigins,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ResponseHeadersPolicyAccessControlAllowOrigins");
  if (input.Quantity != null) {
    const node = __XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items != null) {
    const nodes = se_AccessControlAllowOriginsList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlResponseHeadersPolicyAccessControlExposeHeaders
 */
const se_ResponseHeadersPolicyAccessControlExposeHeaders = (
  input: ResponseHeadersPolicyAccessControlExposeHeaders,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ResponseHeadersPolicyAccessControlExposeHeaders");
  if (input.Quantity != null) {
    const node = __XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items != null) {
    const nodes = se_AccessControlExposeHeadersList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlResponseHeadersPolicyConfig
 */
const se_ResponseHeadersPolicyConfig = (input: ResponseHeadersPolicyConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ResponseHeadersPolicyConfig");
  if (input.Comment != null) {
    const node = __XmlNode.of("string", input.Comment).withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.Name != null) {
    const node = __XmlNode.of("string", input.Name).withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.CorsConfig != null) {
    const node = se_ResponseHeadersPolicyCorsConfig(input.CorsConfig, context).withName("CorsConfig");
    bodyNode.addChildNode(node);
  }
  if (input.SecurityHeadersConfig != null) {
    const node = se_ResponseHeadersPolicySecurityHeadersConfig(input.SecurityHeadersConfig, context).withName(
      "SecurityHeadersConfig"
    );
    bodyNode.addChildNode(node);
  }
  if (input.ServerTimingHeadersConfig != null) {
    const node = se_ResponseHeadersPolicyServerTimingHeadersConfig(input.ServerTimingHeadersConfig, context).withName(
      "ServerTimingHeadersConfig"
    );
    bodyNode.addChildNode(node);
  }
  if (input.CustomHeadersConfig != null) {
    const node = se_ResponseHeadersPolicyCustomHeadersConfig(input.CustomHeadersConfig, context).withName(
      "CustomHeadersConfig"
    );
    bodyNode.addChildNode(node);
  }
  if (input.RemoveHeadersConfig != null) {
    const node = se_ResponseHeadersPolicyRemoveHeadersConfig(input.RemoveHeadersConfig, context).withName(
      "RemoveHeadersConfig"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlResponseHeadersPolicyContentSecurityPolicy
 */
const se_ResponseHeadersPolicyContentSecurityPolicy = (
  input: ResponseHeadersPolicyContentSecurityPolicy,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ResponseHeadersPolicyContentSecurityPolicy");
  if (input.Override != null) {
    const node = __XmlNode.of("boolean", String(input.Override)).withName("Override");
    bodyNode.addChildNode(node);
  }
  if (input.ContentSecurityPolicy != null) {
    const node = __XmlNode.of("string", input.ContentSecurityPolicy).withName("ContentSecurityPolicy");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlResponseHeadersPolicyContentTypeOptions
 */
const se_ResponseHeadersPolicyContentTypeOptions = (
  input: ResponseHeadersPolicyContentTypeOptions,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ResponseHeadersPolicyContentTypeOptions");
  if (input.Override != null) {
    const node = __XmlNode.of("boolean", String(input.Override)).withName("Override");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlResponseHeadersPolicyCorsConfig
 */
const se_ResponseHeadersPolicyCorsConfig = (input: ResponseHeadersPolicyCorsConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ResponseHeadersPolicyCorsConfig");
  if (input.AccessControlAllowOrigins != null) {
    const node = se_ResponseHeadersPolicyAccessControlAllowOrigins(input.AccessControlAllowOrigins, context).withName(
      "AccessControlAllowOrigins"
    );
    bodyNode.addChildNode(node);
  }
  if (input.AccessControlAllowHeaders != null) {
    const node = se_ResponseHeadersPolicyAccessControlAllowHeaders(input.AccessControlAllowHeaders, context).withName(
      "AccessControlAllowHeaders"
    );
    bodyNode.addChildNode(node);
  }
  if (input.AccessControlAllowMethods != null) {
    const node = se_ResponseHeadersPolicyAccessControlAllowMethods(input.AccessControlAllowMethods, context).withName(
      "AccessControlAllowMethods"
    );
    bodyNode.addChildNode(node);
  }
  if (input.AccessControlAllowCredentials != null) {
    const node = __XmlNode
      .of("boolean", String(input.AccessControlAllowCredentials))
      .withName("AccessControlAllowCredentials");
    bodyNode.addChildNode(node);
  }
  if (input.AccessControlExposeHeaders != null) {
    const node = se_ResponseHeadersPolicyAccessControlExposeHeaders(input.AccessControlExposeHeaders, context).withName(
      "AccessControlExposeHeaders"
    );
    bodyNode.addChildNode(node);
  }
  if (input.AccessControlMaxAgeSec != null) {
    const node = __XmlNode.of("integer", String(input.AccessControlMaxAgeSec)).withName("AccessControlMaxAgeSec");
    bodyNode.addChildNode(node);
  }
  if (input.OriginOverride != null) {
    const node = __XmlNode.of("boolean", String(input.OriginOverride)).withName("OriginOverride");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlResponseHeadersPolicyCustomHeader
 */
const se_ResponseHeadersPolicyCustomHeader = (
  input: ResponseHeadersPolicyCustomHeader,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ResponseHeadersPolicyCustomHeader");
  if (input.Header != null) {
    const node = __XmlNode.of("string", input.Header).withName("Header");
    bodyNode.addChildNode(node);
  }
  if (input.Value != null) {
    const node = __XmlNode.of("string", input.Value).withName("Value");
    bodyNode.addChildNode(node);
  }
  if (input.Override != null) {
    const node = __XmlNode.of("boolean", String(input.Override)).withName("Override");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
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
      const node = se_ResponseHeadersPolicyCustomHeader(entry, context);
      return node.withName("ResponseHeadersPolicyCustomHeader");
    });
};

/**
 * serializeAws_restXmlResponseHeadersPolicyCustomHeadersConfig
 */
const se_ResponseHeadersPolicyCustomHeadersConfig = (
  input: ResponseHeadersPolicyCustomHeadersConfig,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ResponseHeadersPolicyCustomHeadersConfig");
  if (input.Quantity != null) {
    const node = __XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items != null) {
    const nodes = se_ResponseHeadersPolicyCustomHeaderList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlResponseHeadersPolicyFrameOptions
 */
const se_ResponseHeadersPolicyFrameOptions = (
  input: ResponseHeadersPolicyFrameOptions,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ResponseHeadersPolicyFrameOptions");
  if (input.Override != null) {
    const node = __XmlNode.of("boolean", String(input.Override)).withName("Override");
    bodyNode.addChildNode(node);
  }
  if (input.FrameOption != null) {
    const node = __XmlNode.of("FrameOptionsList", input.FrameOption).withName("FrameOption");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlResponseHeadersPolicyReferrerPolicy
 */
const se_ResponseHeadersPolicyReferrerPolicy = (
  input: ResponseHeadersPolicyReferrerPolicy,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ResponseHeadersPolicyReferrerPolicy");
  if (input.Override != null) {
    const node = __XmlNode.of("boolean", String(input.Override)).withName("Override");
    bodyNode.addChildNode(node);
  }
  if (input.ReferrerPolicy != null) {
    const node = __XmlNode.of("ReferrerPolicyList", input.ReferrerPolicy).withName("ReferrerPolicy");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlResponseHeadersPolicyRemoveHeader
 */
const se_ResponseHeadersPolicyRemoveHeader = (
  input: ResponseHeadersPolicyRemoveHeader,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ResponseHeadersPolicyRemoveHeader");
  if (input.Header != null) {
    const node = __XmlNode.of("string", input.Header).withName("Header");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
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
      const node = se_ResponseHeadersPolicyRemoveHeader(entry, context);
      return node.withName("ResponseHeadersPolicyRemoveHeader");
    });
};

/**
 * serializeAws_restXmlResponseHeadersPolicyRemoveHeadersConfig
 */
const se_ResponseHeadersPolicyRemoveHeadersConfig = (
  input: ResponseHeadersPolicyRemoveHeadersConfig,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ResponseHeadersPolicyRemoveHeadersConfig");
  if (input.Quantity != null) {
    const node = __XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items != null) {
    const nodes = se_ResponseHeadersPolicyRemoveHeaderList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlResponseHeadersPolicySecurityHeadersConfig
 */
const se_ResponseHeadersPolicySecurityHeadersConfig = (
  input: ResponseHeadersPolicySecurityHeadersConfig,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ResponseHeadersPolicySecurityHeadersConfig");
  if (input.XSSProtection != null) {
    const node = se_ResponseHeadersPolicyXSSProtection(input.XSSProtection, context).withName("XSSProtection");
    bodyNode.addChildNode(node);
  }
  if (input.FrameOptions != null) {
    const node = se_ResponseHeadersPolicyFrameOptions(input.FrameOptions, context).withName("FrameOptions");
    bodyNode.addChildNode(node);
  }
  if (input.ReferrerPolicy != null) {
    const node = se_ResponseHeadersPolicyReferrerPolicy(input.ReferrerPolicy, context).withName("ReferrerPolicy");
    bodyNode.addChildNode(node);
  }
  if (input.ContentSecurityPolicy != null) {
    const node = se_ResponseHeadersPolicyContentSecurityPolicy(input.ContentSecurityPolicy, context).withName(
      "ContentSecurityPolicy"
    );
    bodyNode.addChildNode(node);
  }
  if (input.ContentTypeOptions != null) {
    const node = se_ResponseHeadersPolicyContentTypeOptions(input.ContentTypeOptions, context).withName(
      "ContentTypeOptions"
    );
    bodyNode.addChildNode(node);
  }
  if (input.StrictTransportSecurity != null) {
    const node = se_ResponseHeadersPolicyStrictTransportSecurity(input.StrictTransportSecurity, context).withName(
      "StrictTransportSecurity"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlResponseHeadersPolicyServerTimingHeadersConfig
 */
const se_ResponseHeadersPolicyServerTimingHeadersConfig = (
  input: ResponseHeadersPolicyServerTimingHeadersConfig,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ResponseHeadersPolicyServerTimingHeadersConfig");
  if (input.Enabled != null) {
    const node = __XmlNode.of("boolean", String(input.Enabled)).withName("Enabled");
    bodyNode.addChildNode(node);
  }
  if (input.SamplingRate != null) {
    const node = __XmlNode.of("SamplingRate", String(input.SamplingRate)).withName("SamplingRate");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlResponseHeadersPolicyStrictTransportSecurity
 */
const se_ResponseHeadersPolicyStrictTransportSecurity = (
  input: ResponseHeadersPolicyStrictTransportSecurity,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ResponseHeadersPolicyStrictTransportSecurity");
  if (input.Override != null) {
    const node = __XmlNode.of("boolean", String(input.Override)).withName("Override");
    bodyNode.addChildNode(node);
  }
  if (input.IncludeSubdomains != null) {
    const node = __XmlNode.of("boolean", String(input.IncludeSubdomains)).withName("IncludeSubdomains");
    bodyNode.addChildNode(node);
  }
  if (input.Preload != null) {
    const node = __XmlNode.of("boolean", String(input.Preload)).withName("Preload");
    bodyNode.addChildNode(node);
  }
  if (input.AccessControlMaxAgeSec != null) {
    const node = __XmlNode.of("integer", String(input.AccessControlMaxAgeSec)).withName("AccessControlMaxAgeSec");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlResponseHeadersPolicyXSSProtection
 */
const se_ResponseHeadersPolicyXSSProtection = (
  input: ResponseHeadersPolicyXSSProtection,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ResponseHeadersPolicyXSSProtection");
  if (input.Override != null) {
    const node = __XmlNode.of("boolean", String(input.Override)).withName("Override");
    bodyNode.addChildNode(node);
  }
  if (input.Protection != null) {
    const node = __XmlNode.of("boolean", String(input.Protection)).withName("Protection");
    bodyNode.addChildNode(node);
  }
  if (input.ModeBlock != null) {
    const node = __XmlNode.of("boolean", String(input.ModeBlock)).withName("ModeBlock");
    bodyNode.addChildNode(node);
  }
  if (input.ReportUri != null) {
    const node = __XmlNode.of("string", input.ReportUri).withName("ReportUri");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlRestrictions
 */
const se_Restrictions = (input: Restrictions, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Restrictions");
  if (input.GeoRestriction != null) {
    const node = se_GeoRestriction(input.GeoRestriction, context).withName("GeoRestriction");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlS3Origin
 */
const se_S3Origin = (input: S3Origin, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3Origin");
  if (input.DomainName != null) {
    const node = __XmlNode.of("string", input.DomainName).withName("DomainName");
    bodyNode.addChildNode(node);
  }
  if (input.OriginAccessIdentity != null) {
    const node = __XmlNode.of("string", input.OriginAccessIdentity).withName("OriginAccessIdentity");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlS3OriginConfig
 */
const se_S3OriginConfig = (input: S3OriginConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3OriginConfig");
  if (input.OriginAccessIdentity != null) {
    const node = __XmlNode.of("string", input.OriginAccessIdentity).withName("OriginAccessIdentity");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlSessionStickinessConfig
 */
const se_SessionStickinessConfig = (input: SessionStickinessConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("SessionStickinessConfig");
  if (input.IdleTTL != null) {
    const node = __XmlNode.of("integer", String(input.IdleTTL)).withName("IdleTTL");
    bodyNode.addChildNode(node);
  }
  if (input.MaximumTTL != null) {
    const node = __XmlNode.of("integer", String(input.MaximumTTL)).withName("MaximumTTL");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlSslProtocolsList
 */
const se_SslProtocolsList = (input: (SslProtocol | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("SslProtocol", entry);
      return node.withName("SslProtocol");
    });
};

/**
 * serializeAws_restXmlStagingDistributionDnsNameList
 */
const se_StagingDistributionDnsNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("string", entry);
      return node.withName("DnsName");
    });
};

/**
 * serializeAws_restXmlStagingDistributionDnsNames
 */
const se_StagingDistributionDnsNames = (input: StagingDistributionDnsNames, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("StagingDistributionDnsNames");
  if (input.Quantity != null) {
    const node = __XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items != null) {
    const nodes = se_StagingDistributionDnsNameList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlStatusCodeList
 */
const se_StatusCodeList = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("integer", String(entry));
      return node.withName("StatusCode");
    });
};

/**
 * serializeAws_restXmlStatusCodes
 */
const se_StatusCodes = (input: StatusCodes, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("StatusCodes");
  if (input.Quantity != null) {
    const node = __XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items != null) {
    const nodes = se_StatusCodeList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlStreamingDistributionConfig
 */
const se_StreamingDistributionConfig = (input: StreamingDistributionConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("StreamingDistributionConfig");
  if (input.CallerReference != null) {
    const node = __XmlNode.of("string", input.CallerReference).withName("CallerReference");
    bodyNode.addChildNode(node);
  }
  if (input.S3Origin != null) {
    const node = se_S3Origin(input.S3Origin, context).withName("S3Origin");
    bodyNode.addChildNode(node);
  }
  if (input.Aliases != null) {
    const node = se_Aliases(input.Aliases, context).withName("Aliases");
    bodyNode.addChildNode(node);
  }
  if (input.Comment != null) {
    const node = __XmlNode.of("string", input.Comment).withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.Logging != null) {
    const node = se_StreamingLoggingConfig(input.Logging, context).withName("Logging");
    bodyNode.addChildNode(node);
  }
  if (input.TrustedSigners != null) {
    const node = se_TrustedSigners(input.TrustedSigners, context).withName("TrustedSigners");
    bodyNode.addChildNode(node);
  }
  if (input.PriceClass != null) {
    const node = __XmlNode.of("PriceClass", input.PriceClass).withName("PriceClass");
    bodyNode.addChildNode(node);
  }
  if (input.Enabled != null) {
    const node = __XmlNode.of("boolean", String(input.Enabled)).withName("Enabled");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlStreamingDistributionConfigWithTags
 */
const se_StreamingDistributionConfigWithTags = (
  input: StreamingDistributionConfigWithTags,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("StreamingDistributionConfigWithTags");
  if (input.StreamingDistributionConfig != null) {
    const node = se_StreamingDistributionConfig(input.StreamingDistributionConfig, context).withName(
      "StreamingDistributionConfig"
    );
    bodyNode.addChildNode(node);
  }
  if (input.Tags != null) {
    const node = se_Tags(input.Tags, context).withName("Tags");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlStreamingLoggingConfig
 */
const se_StreamingLoggingConfig = (input: StreamingLoggingConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("StreamingLoggingConfig");
  if (input.Enabled != null) {
    const node = __XmlNode.of("boolean", String(input.Enabled)).withName("Enabled");
    bodyNode.addChildNode(node);
  }
  if (input.Bucket != null) {
    const node = __XmlNode.of("string", input.Bucket).withName("Bucket");
    bodyNode.addChildNode(node);
  }
  if (input.Prefix != null) {
    const node = __XmlNode.of("string", input.Prefix).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlTag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Tag");
  if (input.Key != null) {
    const node = __XmlNode.of("TagKey", input.Key).withName("Key");
    bodyNode.addChildNode(node);
  }
  if (input.Value != null) {
    const node = __XmlNode.of("TagValue", input.Value).withName("Value");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlTagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("TagKey", entry);
      return node.withName("Key");
    });
};

/**
 * serializeAws_restXmlTagKeys
 */
const se_TagKeys = (input: TagKeys, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("TagKeys");
  if (input.Items != null) {
    const nodes = se_TagKeyList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlTagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_Tag(entry, context);
      return node.withName("Tag");
    });
};

/**
 * serializeAws_restXmlTags
 */
const se_Tags = (input: Tags, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Tags");
  if (input.Items != null) {
    const nodes = se_TagList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlTrafficConfig
 */
const se_TrafficConfig = (input: TrafficConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("TrafficConfig");
  if (input.SingleWeightConfig != null) {
    const node = se_ContinuousDeploymentSingleWeightConfig(input.SingleWeightConfig, context).withName(
      "SingleWeightConfig"
    );
    bodyNode.addChildNode(node);
  }
  if (input.SingleHeaderConfig != null) {
    const node = se_ContinuousDeploymentSingleHeaderConfig(input.SingleHeaderConfig, context).withName(
      "SingleHeaderConfig"
    );
    bodyNode.addChildNode(node);
  }
  if (input.Type != null) {
    const node = __XmlNode.of("ContinuousDeploymentPolicyType", input.Type).withName("Type");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlTrustedKeyGroupIdList
 */
const se_TrustedKeyGroupIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("string", entry);
      return node.withName("KeyGroup");
    });
};

/**
 * serializeAws_restXmlTrustedKeyGroups
 */
const se_TrustedKeyGroups = (input: TrustedKeyGroups, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("TrustedKeyGroups");
  if (input.Enabled != null) {
    const node = __XmlNode.of("boolean", String(input.Enabled)).withName("Enabled");
    bodyNode.addChildNode(node);
  }
  if (input.Quantity != null) {
    const node = __XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items != null) {
    const nodes = se_TrustedKeyGroupIdList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlTrustedSigners
 */
const se_TrustedSigners = (input: TrustedSigners, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("TrustedSigners");
  if (input.Enabled != null) {
    const node = __XmlNode.of("boolean", String(input.Enabled)).withName("Enabled");
    bodyNode.addChildNode(node);
  }
  if (input.Quantity != null) {
    const node = __XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items != null) {
    const nodes = se_AwsAccountNumberList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlViewerCertificate
 */
const se_ViewerCertificate = (input: ViewerCertificate, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ViewerCertificate");
  if (input.CloudFrontDefaultCertificate != null) {
    const node = __XmlNode
      .of("boolean", String(input.CloudFrontDefaultCertificate))
      .withName("CloudFrontDefaultCertificate");
    bodyNode.addChildNode(node);
  }
  if (input.IAMCertificateId != null) {
    const node = __XmlNode.of("string", input.IAMCertificateId).withName("IAMCertificateId");
    bodyNode.addChildNode(node);
  }
  if (input.ACMCertificateArn != null) {
    const node = __XmlNode.of("string", input.ACMCertificateArn).withName("ACMCertificateArn");
    bodyNode.addChildNode(node);
  }
  if (input.SSLSupportMethod != null) {
    const node = __XmlNode.of("SSLSupportMethod", input.SSLSupportMethod).withName("SSLSupportMethod");
    bodyNode.addChildNode(node);
  }
  if (input.MinimumProtocolVersion != null) {
    const node = __XmlNode
      .of("MinimumProtocolVersion", input.MinimumProtocolVersion)
      .withName("MinimumProtocolVersion");
    bodyNode.addChildNode(node);
  }
  if (input.Certificate != null) {
    const node = __XmlNode.of("string", input.Certificate).withName("Certificate");
    bodyNode.addChildNode(node);
  }
  if (input.CertificateSource != null) {
    const node = __XmlNode.of("CertificateSource", input.CertificateSource).withName("CertificateSource");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
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
): (ResponseHeadersPolicyAccessControlAllowMethodsValues | string)[] => {
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
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["KeyGroup"] !== undefined) {
    contents.Items = de_KGKeyPairIdsList(__getArrayIfSingleItem(output["Items"]["KeyGroup"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlActiveTrustedSigners
 */
const de_ActiveTrustedSigners = (output: any, context: __SerdeContext): ActiveTrustedSigners => {
  const contents: any = {};
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["Signer"] !== undefined) {
    contents.Items = de_SignerList(__getArrayIfSingleItem(output["Items"]["Signer"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlAliases
 */
const de_Aliases = (output: any, context: __SerdeContext): Aliases => {
  const contents: any = {};
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["CNAME"] !== undefined) {
    contents.Items = de_AliasList(__getArrayIfSingleItem(output["Items"]["CNAME"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlAliasICPRecordal
 */
const de_AliasICPRecordal = (output: any, context: __SerdeContext): AliasICPRecordal => {
  const contents: any = {};
  if (output["CNAME"] !== undefined) {
    contents.CNAME = __expectString(output["CNAME"]);
  }
  if (output["ICPRecordalStatus"] !== undefined) {
    contents.ICPRecordalStatus = __expectString(output["ICPRecordalStatus"]);
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
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["Method"] !== undefined) {
    contents.Items = de_MethodsList(__getArrayIfSingleItem(output["Items"]["Method"]), context);
  }
  if (output["CachedMethods"] !== undefined) {
    contents.CachedMethods = de_CachedMethods(output["CachedMethods"], context);
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
  if (output["PathPattern"] !== undefined) {
    contents.PathPattern = __expectString(output["PathPattern"]);
  }
  if (output["TargetOriginId"] !== undefined) {
    contents.TargetOriginId = __expectString(output["TargetOriginId"]);
  }
  if (output["TrustedSigners"] !== undefined) {
    contents.TrustedSigners = de_TrustedSigners(output["TrustedSigners"], context);
  }
  if (output["TrustedKeyGroups"] !== undefined) {
    contents.TrustedKeyGroups = de_TrustedKeyGroups(output["TrustedKeyGroups"], context);
  }
  if (output["ViewerProtocolPolicy"] !== undefined) {
    contents.ViewerProtocolPolicy = __expectString(output["ViewerProtocolPolicy"]);
  }
  if (output["AllowedMethods"] !== undefined) {
    contents.AllowedMethods = de_AllowedMethods(output["AllowedMethods"], context);
  }
  if (output["SmoothStreaming"] !== undefined) {
    contents.SmoothStreaming = __parseBoolean(output["SmoothStreaming"]);
  }
  if (output["Compress"] !== undefined) {
    contents.Compress = __parseBoolean(output["Compress"]);
  }
  if (output["LambdaFunctionAssociations"] !== undefined) {
    contents.LambdaFunctionAssociations = de_LambdaFunctionAssociations(output["LambdaFunctionAssociations"], context);
  }
  if (output["FunctionAssociations"] !== undefined) {
    contents.FunctionAssociations = de_FunctionAssociations(output["FunctionAssociations"], context);
  }
  if (output["FieldLevelEncryptionId"] !== undefined) {
    contents.FieldLevelEncryptionId = __expectString(output["FieldLevelEncryptionId"]);
  }
  if (output["RealtimeLogConfigArn"] !== undefined) {
    contents.RealtimeLogConfigArn = __expectString(output["RealtimeLogConfigArn"]);
  }
  if (output["CachePolicyId"] !== undefined) {
    contents.CachePolicyId = __expectString(output["CachePolicyId"]);
  }
  if (output["OriginRequestPolicyId"] !== undefined) {
    contents.OriginRequestPolicyId = __expectString(output["OriginRequestPolicyId"]);
  }
  if (output["ResponseHeadersPolicyId"] !== undefined) {
    contents.ResponseHeadersPolicyId = __expectString(output["ResponseHeadersPolicyId"]);
  }
  if (output["ForwardedValues"] !== undefined) {
    contents.ForwardedValues = de_ForwardedValues(output["ForwardedValues"], context);
  }
  if (output["MinTTL"] !== undefined) {
    contents.MinTTL = __strictParseLong(output["MinTTL"]) as number;
  }
  if (output["DefaultTTL"] !== undefined) {
    contents.DefaultTTL = __strictParseLong(output["DefaultTTL"]) as number;
  }
  if (output["MaxTTL"] !== undefined) {
    contents.MaxTTL = __strictParseLong(output["MaxTTL"]) as number;
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
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["CacheBehavior"] !== undefined) {
    contents.Items = de_CacheBehaviorList(__getArrayIfSingleItem(output["Items"]["CacheBehavior"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCachedMethods
 */
const de_CachedMethods = (output: any, context: __SerdeContext): CachedMethods => {
  const contents: any = {};
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["Method"] !== undefined) {
    contents.Items = de_MethodsList(__getArrayIfSingleItem(output["Items"]["Method"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCachePolicy
 */
const de_CachePolicy = (output: any, context: __SerdeContext): CachePolicy => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["LastModifiedTime"] !== undefined) {
    contents.LastModifiedTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastModifiedTime"]));
  }
  if (output["CachePolicyConfig"] !== undefined) {
    contents.CachePolicyConfig = de_CachePolicyConfig(output["CachePolicyConfig"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCachePolicyConfig
 */
const de_CachePolicyConfig = (output: any, context: __SerdeContext): CachePolicyConfig => {
  const contents: any = {};
  if (output["Comment"] !== undefined) {
    contents.Comment = __expectString(output["Comment"]);
  }
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["DefaultTTL"] !== undefined) {
    contents.DefaultTTL = __strictParseLong(output["DefaultTTL"]) as number;
  }
  if (output["MaxTTL"] !== undefined) {
    contents.MaxTTL = __strictParseLong(output["MaxTTL"]) as number;
  }
  if (output["MinTTL"] !== undefined) {
    contents.MinTTL = __strictParseLong(output["MinTTL"]) as number;
  }
  if (output["ParametersInCacheKeyAndForwardedToOrigin"] !== undefined) {
    contents.ParametersInCacheKeyAndForwardedToOrigin = de_ParametersInCacheKeyAndForwardedToOrigin(
      output["ParametersInCacheKeyAndForwardedToOrigin"],
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restXmlCachePolicyCookiesConfig
 */
const de_CachePolicyCookiesConfig = (output: any, context: __SerdeContext): CachePolicyCookiesConfig => {
  const contents: any = {};
  if (output["CookieBehavior"] !== undefined) {
    contents.CookieBehavior = __expectString(output["CookieBehavior"]);
  }
  if (output["Cookies"] !== undefined) {
    contents.Cookies = de_CookieNames(output["Cookies"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCachePolicyHeadersConfig
 */
const de_CachePolicyHeadersConfig = (output: any, context: __SerdeContext): CachePolicyHeadersConfig => {
  const contents: any = {};
  if (output["HeaderBehavior"] !== undefined) {
    contents.HeaderBehavior = __expectString(output["HeaderBehavior"]);
  }
  if (output["Headers"] !== undefined) {
    contents.Headers = de_Headers(output["Headers"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCachePolicyList
 */
const de_CachePolicyList = (output: any, context: __SerdeContext): CachePolicyList => {
  const contents: any = {};
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = __expectString(output["NextMarker"]);
  }
  if (output["MaxItems"] !== undefined) {
    contents.MaxItems = __strictParseInt32(output["MaxItems"]) as number;
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["CachePolicySummary"] !== undefined) {
    contents.Items = de_CachePolicySummaryList(__getArrayIfSingleItem(output["Items"]["CachePolicySummary"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCachePolicyQueryStringsConfig
 */
const de_CachePolicyQueryStringsConfig = (output: any, context: __SerdeContext): CachePolicyQueryStringsConfig => {
  const contents: any = {};
  if (output["QueryStringBehavior"] !== undefined) {
    contents.QueryStringBehavior = __expectString(output["QueryStringBehavior"]);
  }
  if (output["QueryStrings"] !== undefined) {
    contents.QueryStrings = de_QueryStringNames(output["QueryStrings"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCachePolicySummary
 */
const de_CachePolicySummary = (output: any, context: __SerdeContext): CachePolicySummary => {
  const contents: any = {};
  if (output["Type"] !== undefined) {
    contents.Type = __expectString(output["Type"]);
  }
  if (output["CachePolicy"] !== undefined) {
    contents.CachePolicy = de_CachePolicy(output["CachePolicy"], context);
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
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["S3CanonicalUserId"] !== undefined) {
    contents.S3CanonicalUserId = __expectString(output["S3CanonicalUserId"]);
  }
  if (output["CloudFrontOriginAccessIdentityConfig"] !== undefined) {
    contents.CloudFrontOriginAccessIdentityConfig = de_CloudFrontOriginAccessIdentityConfig(
      output["CloudFrontOriginAccessIdentityConfig"],
      context
    );
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
  if (output["CallerReference"] !== undefined) {
    contents.CallerReference = __expectString(output["CallerReference"]);
  }
  if (output["Comment"] !== undefined) {
    contents.Comment = __expectString(output["Comment"]);
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
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = __expectString(output["NextMarker"]);
  }
  if (output["MaxItems"] !== undefined) {
    contents.MaxItems = __strictParseInt32(output["MaxItems"]) as number;
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["CloudFrontOriginAccessIdentitySummary"] !== undefined) {
    contents.Items = de_CloudFrontOriginAccessIdentitySummaryList(
      __getArrayIfSingleItem(output["Items"]["CloudFrontOriginAccessIdentitySummary"]),
      context
    );
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
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["S3CanonicalUserId"] !== undefined) {
    contents.S3CanonicalUserId = __expectString(output["S3CanonicalUserId"]);
  }
  if (output["Comment"] !== undefined) {
    contents.Comment = __expectString(output["Comment"]);
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
  if (output["Alias"] !== undefined) {
    contents.Alias = __expectString(output["Alias"]);
  }
  if (output["DistributionId"] !== undefined) {
    contents.DistributionId = __expectString(output["DistributionId"]);
  }
  if (output["AccountId"] !== undefined) {
    contents.AccountId = __expectString(output["AccountId"]);
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
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = __expectString(output["NextMarker"]);
  }
  if (output["MaxItems"] !== undefined) {
    contents.MaxItems = __strictParseInt32(output["MaxItems"]) as number;
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["ConflictingAlias"] !== undefined) {
    contents.Items = de_ConflictingAliases(__getArrayIfSingleItem(output["Items"]["ConflictingAlias"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlContentTypeProfile
 */
const de_ContentTypeProfile = (output: any, context: __SerdeContext): ContentTypeProfile => {
  const contents: any = {};
  if (output["Format"] !== undefined) {
    contents.Format = __expectString(output["Format"]);
  }
  if (output["ProfileId"] !== undefined) {
    contents.ProfileId = __expectString(output["ProfileId"]);
  }
  if (output["ContentType"] !== undefined) {
    contents.ContentType = __expectString(output["ContentType"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlContentTypeProfileConfig
 */
const de_ContentTypeProfileConfig = (output: any, context: __SerdeContext): ContentTypeProfileConfig => {
  const contents: any = {};
  if (output["ForwardWhenContentTypeIsUnknown"] !== undefined) {
    contents.ForwardWhenContentTypeIsUnknown = __parseBoolean(output["ForwardWhenContentTypeIsUnknown"]);
  }
  if (output["ContentTypeProfiles"] !== undefined) {
    contents.ContentTypeProfiles = de_ContentTypeProfiles(output["ContentTypeProfiles"], context);
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
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["ContentTypeProfile"] !== undefined) {
    contents.Items = de_ContentTypeProfileList(__getArrayIfSingleItem(output["Items"]["ContentTypeProfile"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlContinuousDeploymentPolicy
 */
const de_ContinuousDeploymentPolicy = (output: any, context: __SerdeContext): ContinuousDeploymentPolicy => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["LastModifiedTime"] !== undefined) {
    contents.LastModifiedTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastModifiedTime"]));
  }
  if (output["ContinuousDeploymentPolicyConfig"] !== undefined) {
    contents.ContinuousDeploymentPolicyConfig = de_ContinuousDeploymentPolicyConfig(
      output["ContinuousDeploymentPolicyConfig"],
      context
    );
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
  if (output["StagingDistributionDnsNames"] !== undefined) {
    contents.StagingDistributionDnsNames = de_StagingDistributionDnsNames(
      output["StagingDistributionDnsNames"],
      context
    );
  }
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  if (output["TrafficConfig"] !== undefined) {
    contents.TrafficConfig = de_TrafficConfig(output["TrafficConfig"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlContinuousDeploymentPolicyList
 */
const de_ContinuousDeploymentPolicyList = (output: any, context: __SerdeContext): ContinuousDeploymentPolicyList => {
  const contents: any = {};
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = __expectString(output["NextMarker"]);
  }
  if (output["MaxItems"] !== undefined) {
    contents.MaxItems = __strictParseInt32(output["MaxItems"]) as number;
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["ContinuousDeploymentPolicySummary"] !== undefined) {
    contents.Items = de_ContinuousDeploymentPolicySummaryList(
      __getArrayIfSingleItem(output["Items"]["ContinuousDeploymentPolicySummary"]),
      context
    );
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
  if (output["ContinuousDeploymentPolicy"] !== undefined) {
    contents.ContinuousDeploymentPolicy = de_ContinuousDeploymentPolicy(output["ContinuousDeploymentPolicy"], context);
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
  if (output["Header"] !== undefined) {
    contents.Header = __expectString(output["Header"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
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
  if (output["Weight"] !== undefined) {
    contents.Weight = __strictParseFloat(output["Weight"]) as number;
  }
  if (output["SessionStickinessConfig"] !== undefined) {
    contents.SessionStickinessConfig = de_SessionStickinessConfig(output["SessionStickinessConfig"], context);
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
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["Name"] !== undefined) {
    contents.Items = de_CookieNameList(__getArrayIfSingleItem(output["Items"]["Name"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCookiePreference
 */
const de_CookiePreference = (output: any, context: __SerdeContext): CookiePreference => {
  const contents: any = {};
  if (output["Forward"] !== undefined) {
    contents.Forward = __expectString(output["Forward"]);
  }
  if (output["WhitelistedNames"] !== undefined) {
    contents.WhitelistedNames = de_CookieNames(output["WhitelistedNames"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCustomErrorResponse
 */
const de_CustomErrorResponse = (output: any, context: __SerdeContext): CustomErrorResponse => {
  const contents: any = {};
  if (output["ErrorCode"] !== undefined) {
    contents.ErrorCode = __strictParseInt32(output["ErrorCode"]) as number;
  }
  if (output["ResponsePagePath"] !== undefined) {
    contents.ResponsePagePath = __expectString(output["ResponsePagePath"]);
  }
  if (output["ResponseCode"] !== undefined) {
    contents.ResponseCode = __expectString(output["ResponseCode"]);
  }
  if (output["ErrorCachingMinTTL"] !== undefined) {
    contents.ErrorCachingMinTTL = __strictParseLong(output["ErrorCachingMinTTL"]) as number;
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
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["CustomErrorResponse"] !== undefined) {
    contents.Items = de_CustomErrorResponseList(
      __getArrayIfSingleItem(output["Items"]["CustomErrorResponse"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restXmlCustomHeaders
 */
const de_CustomHeaders = (output: any, context: __SerdeContext): CustomHeaders => {
  const contents: any = {};
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["OriginCustomHeader"] !== undefined) {
    contents.Items = de_OriginCustomHeadersList(__getArrayIfSingleItem(output["Items"]["OriginCustomHeader"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCustomOriginConfig
 */
const de_CustomOriginConfig = (output: any, context: __SerdeContext): CustomOriginConfig => {
  const contents: any = {};
  if (output["HTTPPort"] !== undefined) {
    contents.HTTPPort = __strictParseInt32(output["HTTPPort"]) as number;
  }
  if (output["HTTPSPort"] !== undefined) {
    contents.HTTPSPort = __strictParseInt32(output["HTTPSPort"]) as number;
  }
  if (output["OriginProtocolPolicy"] !== undefined) {
    contents.OriginProtocolPolicy = __expectString(output["OriginProtocolPolicy"]);
  }
  if (output["OriginSslProtocols"] !== undefined) {
    contents.OriginSslProtocols = de_OriginSslProtocols(output["OriginSslProtocols"], context);
  }
  if (output["OriginReadTimeout"] !== undefined) {
    contents.OriginReadTimeout = __strictParseInt32(output["OriginReadTimeout"]) as number;
  }
  if (output["OriginKeepaliveTimeout"] !== undefined) {
    contents.OriginKeepaliveTimeout = __strictParseInt32(output["OriginKeepaliveTimeout"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlDefaultCacheBehavior
 */
const de_DefaultCacheBehavior = (output: any, context: __SerdeContext): DefaultCacheBehavior => {
  const contents: any = {};
  if (output["TargetOriginId"] !== undefined) {
    contents.TargetOriginId = __expectString(output["TargetOriginId"]);
  }
  if (output["TrustedSigners"] !== undefined) {
    contents.TrustedSigners = de_TrustedSigners(output["TrustedSigners"], context);
  }
  if (output["TrustedKeyGroups"] !== undefined) {
    contents.TrustedKeyGroups = de_TrustedKeyGroups(output["TrustedKeyGroups"], context);
  }
  if (output["ViewerProtocolPolicy"] !== undefined) {
    contents.ViewerProtocolPolicy = __expectString(output["ViewerProtocolPolicy"]);
  }
  if (output["AllowedMethods"] !== undefined) {
    contents.AllowedMethods = de_AllowedMethods(output["AllowedMethods"], context);
  }
  if (output["SmoothStreaming"] !== undefined) {
    contents.SmoothStreaming = __parseBoolean(output["SmoothStreaming"]);
  }
  if (output["Compress"] !== undefined) {
    contents.Compress = __parseBoolean(output["Compress"]);
  }
  if (output["LambdaFunctionAssociations"] !== undefined) {
    contents.LambdaFunctionAssociations = de_LambdaFunctionAssociations(output["LambdaFunctionAssociations"], context);
  }
  if (output["FunctionAssociations"] !== undefined) {
    contents.FunctionAssociations = de_FunctionAssociations(output["FunctionAssociations"], context);
  }
  if (output["FieldLevelEncryptionId"] !== undefined) {
    contents.FieldLevelEncryptionId = __expectString(output["FieldLevelEncryptionId"]);
  }
  if (output["RealtimeLogConfigArn"] !== undefined) {
    contents.RealtimeLogConfigArn = __expectString(output["RealtimeLogConfigArn"]);
  }
  if (output["CachePolicyId"] !== undefined) {
    contents.CachePolicyId = __expectString(output["CachePolicyId"]);
  }
  if (output["OriginRequestPolicyId"] !== undefined) {
    contents.OriginRequestPolicyId = __expectString(output["OriginRequestPolicyId"]);
  }
  if (output["ResponseHeadersPolicyId"] !== undefined) {
    contents.ResponseHeadersPolicyId = __expectString(output["ResponseHeadersPolicyId"]);
  }
  if (output["ForwardedValues"] !== undefined) {
    contents.ForwardedValues = de_ForwardedValues(output["ForwardedValues"], context);
  }
  if (output["MinTTL"] !== undefined) {
    contents.MinTTL = __strictParseLong(output["MinTTL"]) as number;
  }
  if (output["DefaultTTL"] !== undefined) {
    contents.DefaultTTL = __strictParseLong(output["DefaultTTL"]) as number;
  }
  if (output["MaxTTL"] !== undefined) {
    contents.MaxTTL = __strictParseLong(output["MaxTTL"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlDistribution
 */
const de_Distribution = (output: any, context: __SerdeContext): Distribution => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["ARN"] !== undefined) {
    contents.ARN = __expectString(output["ARN"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["LastModifiedTime"] !== undefined) {
    contents.LastModifiedTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastModifiedTime"]));
  }
  if (output["InProgressInvalidationBatches"] !== undefined) {
    contents.InProgressInvalidationBatches = __strictParseInt32(output["InProgressInvalidationBatches"]) as number;
  }
  if (output["DomainName"] !== undefined) {
    contents.DomainName = __expectString(output["DomainName"]);
  }
  if (output["ActiveTrustedSigners"] !== undefined) {
    contents.ActiveTrustedSigners = de_ActiveTrustedSigners(output["ActiveTrustedSigners"], context);
  }
  if (output["ActiveTrustedKeyGroups"] !== undefined) {
    contents.ActiveTrustedKeyGroups = de_ActiveTrustedKeyGroups(output["ActiveTrustedKeyGroups"], context);
  }
  if (output["DistributionConfig"] !== undefined) {
    contents.DistributionConfig = de_DistributionConfig(output["DistributionConfig"], context);
  }
  if (output.AliasICPRecordals === "") {
    contents.AliasICPRecordals = [];
  } else if (
    output["AliasICPRecordals"] !== undefined &&
    output["AliasICPRecordals"]["AliasICPRecordal"] !== undefined
  ) {
    contents.AliasICPRecordals = de_AliasICPRecordals(
      __getArrayIfSingleItem(output["AliasICPRecordals"]["AliasICPRecordal"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restXmlDistributionConfig
 */
const de_DistributionConfig = (output: any, context: __SerdeContext): DistributionConfig => {
  const contents: any = {};
  if (output["CallerReference"] !== undefined) {
    contents.CallerReference = __expectString(output["CallerReference"]);
  }
  if (output["Aliases"] !== undefined) {
    contents.Aliases = de_Aliases(output["Aliases"], context);
  }
  if (output["DefaultRootObject"] !== undefined) {
    contents.DefaultRootObject = __expectString(output["DefaultRootObject"]);
  }
  if (output["Origins"] !== undefined) {
    contents.Origins = de_Origins(output["Origins"], context);
  }
  if (output["OriginGroups"] !== undefined) {
    contents.OriginGroups = de_OriginGroups(output["OriginGroups"], context);
  }
  if (output["DefaultCacheBehavior"] !== undefined) {
    contents.DefaultCacheBehavior = de_DefaultCacheBehavior(output["DefaultCacheBehavior"], context);
  }
  if (output["CacheBehaviors"] !== undefined) {
    contents.CacheBehaviors = de_CacheBehaviors(output["CacheBehaviors"], context);
  }
  if (output["CustomErrorResponses"] !== undefined) {
    contents.CustomErrorResponses = de_CustomErrorResponses(output["CustomErrorResponses"], context);
  }
  if (output["Comment"] !== undefined) {
    contents.Comment = __expectString(output["Comment"]);
  }
  if (output["Logging"] !== undefined) {
    contents.Logging = de_LoggingConfig(output["Logging"], context);
  }
  if (output["PriceClass"] !== undefined) {
    contents.PriceClass = __expectString(output["PriceClass"]);
  }
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  if (output["ViewerCertificate"] !== undefined) {
    contents.ViewerCertificate = de_ViewerCertificate(output["ViewerCertificate"], context);
  }
  if (output["Restrictions"] !== undefined) {
    contents.Restrictions = de_Restrictions(output["Restrictions"], context);
  }
  if (output["WebACLId"] !== undefined) {
    contents.WebACLId = __expectString(output["WebACLId"]);
  }
  if (output["HttpVersion"] !== undefined) {
    contents.HttpVersion = __expectString(output["HttpVersion"]);
  }
  if (output["IsIPV6Enabled"] !== undefined) {
    contents.IsIPV6Enabled = __parseBoolean(output["IsIPV6Enabled"]);
  }
  if (output["ContinuousDeploymentPolicyId"] !== undefined) {
    contents.ContinuousDeploymentPolicyId = __expectString(output["ContinuousDeploymentPolicyId"]);
  }
  if (output["Staging"] !== undefined) {
    contents.Staging = __parseBoolean(output["Staging"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlDistributionIdList
 */
const de_DistributionIdList = (output: any, context: __SerdeContext): DistributionIdList => {
  const contents: any = {};
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = __expectString(output["NextMarker"]);
  }
  if (output["MaxItems"] !== undefined) {
    contents.MaxItems = __strictParseInt32(output["MaxItems"]) as number;
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["DistributionId"] !== undefined) {
    contents.Items = de_DistributionIdListSummary(__getArrayIfSingleItem(output["Items"]["DistributionId"]), context);
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
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = __expectString(output["NextMarker"]);
  }
  if (output["MaxItems"] !== undefined) {
    contents.MaxItems = __strictParseInt32(output["MaxItems"]) as number;
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["DistributionSummary"] !== undefined) {
    contents.Items = de_DistributionSummaryList(
      __getArrayIfSingleItem(output["Items"]["DistributionSummary"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restXmlDistributionSummary
 */
const de_DistributionSummary = (output: any, context: __SerdeContext): DistributionSummary => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["ARN"] !== undefined) {
    contents.ARN = __expectString(output["ARN"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["LastModifiedTime"] !== undefined) {
    contents.LastModifiedTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastModifiedTime"]));
  }
  if (output["DomainName"] !== undefined) {
    contents.DomainName = __expectString(output["DomainName"]);
  }
  if (output["Aliases"] !== undefined) {
    contents.Aliases = de_Aliases(output["Aliases"], context);
  }
  if (output["Origins"] !== undefined) {
    contents.Origins = de_Origins(output["Origins"], context);
  }
  if (output["OriginGroups"] !== undefined) {
    contents.OriginGroups = de_OriginGroups(output["OriginGroups"], context);
  }
  if (output["DefaultCacheBehavior"] !== undefined) {
    contents.DefaultCacheBehavior = de_DefaultCacheBehavior(output["DefaultCacheBehavior"], context);
  }
  if (output["CacheBehaviors"] !== undefined) {
    contents.CacheBehaviors = de_CacheBehaviors(output["CacheBehaviors"], context);
  }
  if (output["CustomErrorResponses"] !== undefined) {
    contents.CustomErrorResponses = de_CustomErrorResponses(output["CustomErrorResponses"], context);
  }
  if (output["Comment"] !== undefined) {
    contents.Comment = __expectString(output["Comment"]);
  }
  if (output["PriceClass"] !== undefined) {
    contents.PriceClass = __expectString(output["PriceClass"]);
  }
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  if (output["ViewerCertificate"] !== undefined) {
    contents.ViewerCertificate = de_ViewerCertificate(output["ViewerCertificate"], context);
  }
  if (output["Restrictions"] !== undefined) {
    contents.Restrictions = de_Restrictions(output["Restrictions"], context);
  }
  if (output["WebACLId"] !== undefined) {
    contents.WebACLId = __expectString(output["WebACLId"]);
  }
  if (output["HttpVersion"] !== undefined) {
    contents.HttpVersion = __expectString(output["HttpVersion"]);
  }
  if (output["IsIPV6Enabled"] !== undefined) {
    contents.IsIPV6Enabled = __parseBoolean(output["IsIPV6Enabled"]);
  }
  if (output.AliasICPRecordals === "") {
    contents.AliasICPRecordals = [];
  } else if (
    output["AliasICPRecordals"] !== undefined &&
    output["AliasICPRecordals"]["AliasICPRecordal"] !== undefined
  ) {
    contents.AliasICPRecordals = de_AliasICPRecordals(
      __getArrayIfSingleItem(output["AliasICPRecordals"]["AliasICPRecordal"]),
      context
    );
  }
  if (output["Staging"] !== undefined) {
    contents.Staging = __parseBoolean(output["Staging"]);
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
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["EncryptionEntity"] !== undefined) {
    contents.Items = de_EncryptionEntityList(__getArrayIfSingleItem(output["Items"]["EncryptionEntity"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlEncryptionEntity
 */
const de_EncryptionEntity = (output: any, context: __SerdeContext): EncryptionEntity => {
  const contents: any = {};
  if (output["PublicKeyId"] !== undefined) {
    contents.PublicKeyId = __expectString(output["PublicKeyId"]);
  }
  if (output["ProviderId"] !== undefined) {
    contents.ProviderId = __expectString(output["ProviderId"]);
  }
  if (output["FieldPatterns"] !== undefined) {
    contents.FieldPatterns = de_FieldPatterns(output["FieldPatterns"], context);
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
  if (output["StreamType"] !== undefined) {
    contents.StreamType = __expectString(output["StreamType"]);
  }
  if (output["KinesisStreamConfig"] !== undefined) {
    contents.KinesisStreamConfig = de_KinesisStreamConfig(output["KinesisStreamConfig"], context);
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
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["LastModifiedTime"] !== undefined) {
    contents.LastModifiedTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastModifiedTime"]));
  }
  if (output["FieldLevelEncryptionConfig"] !== undefined) {
    contents.FieldLevelEncryptionConfig = de_FieldLevelEncryptionConfig(output["FieldLevelEncryptionConfig"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlFieldLevelEncryptionConfig
 */
const de_FieldLevelEncryptionConfig = (output: any, context: __SerdeContext): FieldLevelEncryptionConfig => {
  const contents: any = {};
  if (output["CallerReference"] !== undefined) {
    contents.CallerReference = __expectString(output["CallerReference"]);
  }
  if (output["Comment"] !== undefined) {
    contents.Comment = __expectString(output["Comment"]);
  }
  if (output["QueryArgProfileConfig"] !== undefined) {
    contents.QueryArgProfileConfig = de_QueryArgProfileConfig(output["QueryArgProfileConfig"], context);
  }
  if (output["ContentTypeProfileConfig"] !== undefined) {
    contents.ContentTypeProfileConfig = de_ContentTypeProfileConfig(output["ContentTypeProfileConfig"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlFieldLevelEncryptionList
 */
const de_FieldLevelEncryptionList = (output: any, context: __SerdeContext): FieldLevelEncryptionList => {
  const contents: any = {};
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = __expectString(output["NextMarker"]);
  }
  if (output["MaxItems"] !== undefined) {
    contents.MaxItems = __strictParseInt32(output["MaxItems"]) as number;
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["FieldLevelEncryptionSummary"] !== undefined) {
    contents.Items = de_FieldLevelEncryptionSummaryList(
      __getArrayIfSingleItem(output["Items"]["FieldLevelEncryptionSummary"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restXmlFieldLevelEncryptionProfile
 */
const de_FieldLevelEncryptionProfile = (output: any, context: __SerdeContext): FieldLevelEncryptionProfile => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["LastModifiedTime"] !== undefined) {
    contents.LastModifiedTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastModifiedTime"]));
  }
  if (output["FieldLevelEncryptionProfileConfig"] !== undefined) {
    contents.FieldLevelEncryptionProfileConfig = de_FieldLevelEncryptionProfileConfig(
      output["FieldLevelEncryptionProfileConfig"],
      context
    );
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
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["CallerReference"] !== undefined) {
    contents.CallerReference = __expectString(output["CallerReference"]);
  }
  if (output["Comment"] !== undefined) {
    contents.Comment = __expectString(output["Comment"]);
  }
  if (output["EncryptionEntities"] !== undefined) {
    contents.EncryptionEntities = de_EncryptionEntities(output["EncryptionEntities"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlFieldLevelEncryptionProfileList
 */
const de_FieldLevelEncryptionProfileList = (output: any, context: __SerdeContext): FieldLevelEncryptionProfileList => {
  const contents: any = {};
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = __expectString(output["NextMarker"]);
  }
  if (output["MaxItems"] !== undefined) {
    contents.MaxItems = __strictParseInt32(output["MaxItems"]) as number;
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["FieldLevelEncryptionProfileSummary"] !== undefined) {
    contents.Items = de_FieldLevelEncryptionProfileSummaryList(
      __getArrayIfSingleItem(output["Items"]["FieldLevelEncryptionProfileSummary"]),
      context
    );
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
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["LastModifiedTime"] !== undefined) {
    contents.LastModifiedTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastModifiedTime"]));
  }
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["EncryptionEntities"] !== undefined) {
    contents.EncryptionEntities = de_EncryptionEntities(output["EncryptionEntities"], context);
  }
  if (output["Comment"] !== undefined) {
    contents.Comment = __expectString(output["Comment"]);
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
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["LastModifiedTime"] !== undefined) {
    contents.LastModifiedTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastModifiedTime"]));
  }
  if (output["Comment"] !== undefined) {
    contents.Comment = __expectString(output["Comment"]);
  }
  if (output["QueryArgProfileConfig"] !== undefined) {
    contents.QueryArgProfileConfig = de_QueryArgProfileConfig(output["QueryArgProfileConfig"], context);
  }
  if (output["ContentTypeProfileConfig"] !== undefined) {
    contents.ContentTypeProfileConfig = de_ContentTypeProfileConfig(output["ContentTypeProfileConfig"], context);
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
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["FieldPattern"] !== undefined) {
    contents.Items = de_FieldPatternList(__getArrayIfSingleItem(output["Items"]["FieldPattern"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlForwardedValues
 */
const de_ForwardedValues = (output: any, context: __SerdeContext): ForwardedValues => {
  const contents: any = {};
  if (output["QueryString"] !== undefined) {
    contents.QueryString = __parseBoolean(output["QueryString"]);
  }
  if (output["Cookies"] !== undefined) {
    contents.Cookies = de_CookiePreference(output["Cookies"], context);
  }
  if (output["Headers"] !== undefined) {
    contents.Headers = de_Headers(output["Headers"], context);
  }
  if (output["QueryStringCacheKeys"] !== undefined) {
    contents.QueryStringCacheKeys = de_QueryStringCacheKeys(output["QueryStringCacheKeys"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlFunctionAssociation
 */
const de_FunctionAssociation = (output: any, context: __SerdeContext): FunctionAssociation => {
  const contents: any = {};
  if (output["FunctionARN"] !== undefined) {
    contents.FunctionARN = __expectString(output["FunctionARN"]);
  }
  if (output["EventType"] !== undefined) {
    contents.EventType = __expectString(output["EventType"]);
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
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["FunctionAssociation"] !== undefined) {
    contents.Items = de_FunctionAssociationList(
      __getArrayIfSingleItem(output["Items"]["FunctionAssociation"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restXmlFunctionConfig
 */
const de_FunctionConfig = (output: any, context: __SerdeContext): FunctionConfig => {
  const contents: any = {};
  if (output["Comment"] !== undefined) {
    contents.Comment = __expectString(output["Comment"]);
  }
  if (output["Runtime"] !== undefined) {
    contents.Runtime = __expectString(output["Runtime"]);
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
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = __expectString(output["NextMarker"]);
  }
  if (output["MaxItems"] !== undefined) {
    contents.MaxItems = __strictParseInt32(output["MaxItems"]) as number;
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["FunctionSummary"] !== undefined) {
    contents.Items = de_FunctionSummaryList(__getArrayIfSingleItem(output["Items"]["FunctionSummary"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlFunctionMetadata
 */
const de_FunctionMetadata = (output: any, context: __SerdeContext): FunctionMetadata => {
  const contents: any = {};
  if (output["FunctionARN"] !== undefined) {
    contents.FunctionARN = __expectString(output["FunctionARN"]);
  }
  if (output["Stage"] !== undefined) {
    contents.Stage = __expectString(output["Stage"]);
  }
  if (output["CreatedTime"] !== undefined) {
    contents.CreatedTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreatedTime"]));
  }
  if (output["LastModifiedTime"] !== undefined) {
    contents.LastModifiedTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastModifiedTime"]));
  }
  return contents;
};

/**
 * deserializeAws_restXmlFunctionSummary
 */
const de_FunctionSummary = (output: any, context: __SerdeContext): FunctionSummary => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["FunctionConfig"] !== undefined) {
    contents.FunctionConfig = de_FunctionConfig(output["FunctionConfig"], context);
  }
  if (output["FunctionMetadata"] !== undefined) {
    contents.FunctionMetadata = de_FunctionMetadata(output["FunctionMetadata"], context);
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
  if (output["RestrictionType"] !== undefined) {
    contents.RestrictionType = __expectString(output["RestrictionType"]);
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["Location"] !== undefined) {
    contents.Items = de_LocationList(__getArrayIfSingleItem(output["Items"]["Location"]), context);
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
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["Name"] !== undefined) {
    contents.Items = de_HeaderList(__getArrayIfSingleItem(output["Items"]["Name"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlInvalidation
 */
const de_Invalidation = (output: any, context: __SerdeContext): Invalidation => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["CreateTime"] !== undefined) {
    contents.CreateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreateTime"]));
  }
  if (output["InvalidationBatch"] !== undefined) {
    contents.InvalidationBatch = de_InvalidationBatch(output["InvalidationBatch"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlInvalidationBatch
 */
const de_InvalidationBatch = (output: any, context: __SerdeContext): InvalidationBatch => {
  const contents: any = {};
  if (output["Paths"] !== undefined) {
    contents.Paths = de_Paths(output["Paths"], context);
  }
  if (output["CallerReference"] !== undefined) {
    contents.CallerReference = __expectString(output["CallerReference"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlInvalidationList
 */
const de_InvalidationList = (output: any, context: __SerdeContext): InvalidationList => {
  const contents: any = {};
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = __expectString(output["NextMarker"]);
  }
  if (output["MaxItems"] !== undefined) {
    contents.MaxItems = __strictParseInt32(output["MaxItems"]) as number;
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["InvalidationSummary"] !== undefined) {
    contents.Items = de_InvalidationSummaryList(
      __getArrayIfSingleItem(output["Items"]["InvalidationSummary"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restXmlInvalidationSummary
 */
const de_InvalidationSummary = (output: any, context: __SerdeContext): InvalidationSummary => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["CreateTime"] !== undefined) {
    contents.CreateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreateTime"]));
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
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
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["LastModifiedTime"] !== undefined) {
    contents.LastModifiedTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastModifiedTime"]));
  }
  if (output["KeyGroupConfig"] !== undefined) {
    contents.KeyGroupConfig = de_KeyGroupConfig(output["KeyGroupConfig"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlKeyGroupConfig
 */
const de_KeyGroupConfig = (output: any, context: __SerdeContext): KeyGroupConfig => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["PublicKey"] !== undefined) {
    contents.Items = de_PublicKeyIdList(__getArrayIfSingleItem(output["Items"]["PublicKey"]), context);
  }
  if (output["Comment"] !== undefined) {
    contents.Comment = __expectString(output["Comment"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlKeyGroupList
 */
const de_KeyGroupList = (output: any, context: __SerdeContext): KeyGroupList => {
  const contents: any = {};
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = __expectString(output["NextMarker"]);
  }
  if (output["MaxItems"] !== undefined) {
    contents.MaxItems = __strictParseInt32(output["MaxItems"]) as number;
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["KeyGroupSummary"] !== undefined) {
    contents.Items = de_KeyGroupSummaryList(__getArrayIfSingleItem(output["Items"]["KeyGroupSummary"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlKeyGroupSummary
 */
const de_KeyGroupSummary = (output: any, context: __SerdeContext): KeyGroupSummary => {
  const contents: any = {};
  if (output["KeyGroup"] !== undefined) {
    contents.KeyGroup = de_KeyGroup(output["KeyGroup"], context);
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
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["KeyPairId"] !== undefined) {
    contents.Items = de_KeyPairIdList(__getArrayIfSingleItem(output["Items"]["KeyPairId"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlKGKeyPairIds
 */
const de_KGKeyPairIds = (output: any, context: __SerdeContext): KGKeyPairIds => {
  const contents: any = {};
  if (output["KeyGroupId"] !== undefined) {
    contents.KeyGroupId = __expectString(output["KeyGroupId"]);
  }
  if (output["KeyPairIds"] !== undefined) {
    contents.KeyPairIds = de_KeyPairIds(output["KeyPairIds"], context);
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
  if (output["RoleARN"] !== undefined) {
    contents.RoleARN = __expectString(output["RoleARN"]);
  }
  if (output["StreamARN"] !== undefined) {
    contents.StreamARN = __expectString(output["StreamARN"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlLambdaFunctionAssociation
 */
const de_LambdaFunctionAssociation = (output: any, context: __SerdeContext): LambdaFunctionAssociation => {
  const contents: any = {};
  if (output["LambdaFunctionARN"] !== undefined) {
    contents.LambdaFunctionARN = __expectString(output["LambdaFunctionARN"]);
  }
  if (output["EventType"] !== undefined) {
    contents.EventType = __expectString(output["EventType"]);
  }
  if (output["IncludeBody"] !== undefined) {
    contents.IncludeBody = __parseBoolean(output["IncludeBody"]);
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
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["LambdaFunctionAssociation"] !== undefined) {
    contents.Items = de_LambdaFunctionAssociationList(
      __getArrayIfSingleItem(output["Items"]["LambdaFunctionAssociation"]),
      context
    );
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
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  if (output["IncludeCookies"] !== undefined) {
    contents.IncludeCookies = __parseBoolean(output["IncludeCookies"]);
  }
  if (output["Bucket"] !== undefined) {
    contents.Bucket = __expectString(output["Bucket"]);
  }
  if (output["Prefix"] !== undefined) {
    contents.Prefix = __expectString(output["Prefix"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlMethodsList
 */
const de_MethodsList = (output: any, context: __SerdeContext): (Method | string)[] => {
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
  if (output["RealtimeMetricsSubscriptionConfig"] !== undefined) {
    contents.RealtimeMetricsSubscriptionConfig = de_RealtimeMetricsSubscriptionConfig(
      output["RealtimeMetricsSubscriptionConfig"],
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restXmlOrigin
 */
const de_Origin = (output: any, context: __SerdeContext): Origin => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["DomainName"] !== undefined) {
    contents.DomainName = __expectString(output["DomainName"]);
  }
  if (output["OriginPath"] !== undefined) {
    contents.OriginPath = __expectString(output["OriginPath"]);
  }
  if (output["CustomHeaders"] !== undefined) {
    contents.CustomHeaders = de_CustomHeaders(output["CustomHeaders"], context);
  }
  if (output["S3OriginConfig"] !== undefined) {
    contents.S3OriginConfig = de_S3OriginConfig(output["S3OriginConfig"], context);
  }
  if (output["CustomOriginConfig"] !== undefined) {
    contents.CustomOriginConfig = de_CustomOriginConfig(output["CustomOriginConfig"], context);
  }
  if (output["ConnectionAttempts"] !== undefined) {
    contents.ConnectionAttempts = __strictParseInt32(output["ConnectionAttempts"]) as number;
  }
  if (output["ConnectionTimeout"] !== undefined) {
    contents.ConnectionTimeout = __strictParseInt32(output["ConnectionTimeout"]) as number;
  }
  if (output["OriginShield"] !== undefined) {
    contents.OriginShield = de_OriginShield(output["OriginShield"], context);
  }
  if (output["OriginAccessControlId"] !== undefined) {
    contents.OriginAccessControlId = __expectString(output["OriginAccessControlId"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlOriginAccessControl
 */
const de_OriginAccessControl = (output: any, context: __SerdeContext): OriginAccessControl => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["OriginAccessControlConfig"] !== undefined) {
    contents.OriginAccessControlConfig = de_OriginAccessControlConfig(output["OriginAccessControlConfig"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlOriginAccessControlConfig
 */
const de_OriginAccessControlConfig = (output: any, context: __SerdeContext): OriginAccessControlConfig => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["SigningProtocol"] !== undefined) {
    contents.SigningProtocol = __expectString(output["SigningProtocol"]);
  }
  if (output["SigningBehavior"] !== undefined) {
    contents.SigningBehavior = __expectString(output["SigningBehavior"]);
  }
  if (output["OriginAccessControlOriginType"] !== undefined) {
    contents.OriginAccessControlOriginType = __expectString(output["OriginAccessControlOriginType"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlOriginAccessControlList
 */
const de_OriginAccessControlList = (output: any, context: __SerdeContext): OriginAccessControlList => {
  const contents: any = {};
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = __expectString(output["NextMarker"]);
  }
  if (output["MaxItems"] !== undefined) {
    contents.MaxItems = __strictParseInt32(output["MaxItems"]) as number;
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["OriginAccessControlSummary"] !== undefined) {
    contents.Items = de_OriginAccessControlSummaryList(
      __getArrayIfSingleItem(output["Items"]["OriginAccessControlSummary"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restXmlOriginAccessControlSummary
 */
const de_OriginAccessControlSummary = (output: any, context: __SerdeContext): OriginAccessControlSummary => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["SigningProtocol"] !== undefined) {
    contents.SigningProtocol = __expectString(output["SigningProtocol"]);
  }
  if (output["SigningBehavior"] !== undefined) {
    contents.SigningBehavior = __expectString(output["SigningBehavior"]);
  }
  if (output["OriginAccessControlOriginType"] !== undefined) {
    contents.OriginAccessControlOriginType = __expectString(output["OriginAccessControlOriginType"]);
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
  if (output["HeaderName"] !== undefined) {
    contents.HeaderName = __expectString(output["HeaderName"]);
  }
  if (output["HeaderValue"] !== undefined) {
    contents.HeaderValue = __expectString(output["HeaderValue"]);
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
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["FailoverCriteria"] !== undefined) {
    contents.FailoverCriteria = de_OriginGroupFailoverCriteria(output["FailoverCriteria"], context);
  }
  if (output["Members"] !== undefined) {
    contents.Members = de_OriginGroupMembers(output["Members"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlOriginGroupFailoverCriteria
 */
const de_OriginGroupFailoverCriteria = (output: any, context: __SerdeContext): OriginGroupFailoverCriteria => {
  const contents: any = {};
  if (output["StatusCodes"] !== undefined) {
    contents.StatusCodes = de_StatusCodes(output["StatusCodes"], context);
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
  if (output["OriginId"] !== undefined) {
    contents.OriginId = __expectString(output["OriginId"]);
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
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["OriginGroupMember"] !== undefined) {
    contents.Items = de_OriginGroupMemberList(__getArrayIfSingleItem(output["Items"]["OriginGroupMember"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlOriginGroups
 */
const de_OriginGroups = (output: any, context: __SerdeContext): OriginGroups => {
  const contents: any = {};
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["OriginGroup"] !== undefined) {
    contents.Items = de_OriginGroupList(__getArrayIfSingleItem(output["Items"]["OriginGroup"]), context);
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
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["LastModifiedTime"] !== undefined) {
    contents.LastModifiedTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastModifiedTime"]));
  }
  if (output["OriginRequestPolicyConfig"] !== undefined) {
    contents.OriginRequestPolicyConfig = de_OriginRequestPolicyConfig(output["OriginRequestPolicyConfig"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlOriginRequestPolicyConfig
 */
const de_OriginRequestPolicyConfig = (output: any, context: __SerdeContext): OriginRequestPolicyConfig => {
  const contents: any = {};
  if (output["Comment"] !== undefined) {
    contents.Comment = __expectString(output["Comment"]);
  }
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["HeadersConfig"] !== undefined) {
    contents.HeadersConfig = de_OriginRequestPolicyHeadersConfig(output["HeadersConfig"], context);
  }
  if (output["CookiesConfig"] !== undefined) {
    contents.CookiesConfig = de_OriginRequestPolicyCookiesConfig(output["CookiesConfig"], context);
  }
  if (output["QueryStringsConfig"] !== undefined) {
    contents.QueryStringsConfig = de_OriginRequestPolicyQueryStringsConfig(output["QueryStringsConfig"], context);
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
  if (output["CookieBehavior"] !== undefined) {
    contents.CookieBehavior = __expectString(output["CookieBehavior"]);
  }
  if (output["Cookies"] !== undefined) {
    contents.Cookies = de_CookieNames(output["Cookies"], context);
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
  if (output["HeaderBehavior"] !== undefined) {
    contents.HeaderBehavior = __expectString(output["HeaderBehavior"]);
  }
  if (output["Headers"] !== undefined) {
    contents.Headers = de_Headers(output["Headers"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlOriginRequestPolicyList
 */
const de_OriginRequestPolicyList = (output: any, context: __SerdeContext): OriginRequestPolicyList => {
  const contents: any = {};
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = __expectString(output["NextMarker"]);
  }
  if (output["MaxItems"] !== undefined) {
    contents.MaxItems = __strictParseInt32(output["MaxItems"]) as number;
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["OriginRequestPolicySummary"] !== undefined) {
    contents.Items = de_OriginRequestPolicySummaryList(
      __getArrayIfSingleItem(output["Items"]["OriginRequestPolicySummary"]),
      context
    );
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
  if (output["QueryStringBehavior"] !== undefined) {
    contents.QueryStringBehavior = __expectString(output["QueryStringBehavior"]);
  }
  if (output["QueryStrings"] !== undefined) {
    contents.QueryStrings = de_QueryStringNames(output["QueryStrings"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlOriginRequestPolicySummary
 */
const de_OriginRequestPolicySummary = (output: any, context: __SerdeContext): OriginRequestPolicySummary => {
  const contents: any = {};
  if (output["Type"] !== undefined) {
    contents.Type = __expectString(output["Type"]);
  }
  if (output["OriginRequestPolicy"] !== undefined) {
    contents.OriginRequestPolicy = de_OriginRequestPolicy(output["OriginRequestPolicy"], context);
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
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["Origin"] !== undefined) {
    contents.Items = de_OriginList(__getArrayIfSingleItem(output["Items"]["Origin"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlOriginShield
 */
const de_OriginShield = (output: any, context: __SerdeContext): OriginShield => {
  const contents: any = {};
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  if (output["OriginShieldRegion"] !== undefined) {
    contents.OriginShieldRegion = __expectString(output["OriginShieldRegion"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlOriginSslProtocols
 */
const de_OriginSslProtocols = (output: any, context: __SerdeContext): OriginSslProtocols => {
  const contents: any = {};
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["SslProtocol"] !== undefined) {
    contents.Items = de_SslProtocolsList(__getArrayIfSingleItem(output["Items"]["SslProtocol"]), context);
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
  if (output["EnableAcceptEncodingGzip"] !== undefined) {
    contents.EnableAcceptEncodingGzip = __parseBoolean(output["EnableAcceptEncodingGzip"]);
  }
  if (output["EnableAcceptEncodingBrotli"] !== undefined) {
    contents.EnableAcceptEncodingBrotli = __parseBoolean(output["EnableAcceptEncodingBrotli"]);
  }
  if (output["HeadersConfig"] !== undefined) {
    contents.HeadersConfig = de_CachePolicyHeadersConfig(output["HeadersConfig"], context);
  }
  if (output["CookiesConfig"] !== undefined) {
    contents.CookiesConfig = de_CachePolicyCookiesConfig(output["CookiesConfig"], context);
  }
  if (output["QueryStringsConfig"] !== undefined) {
    contents.QueryStringsConfig = de_CachePolicyQueryStringsConfig(output["QueryStringsConfig"], context);
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
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["Path"] !== undefined) {
    contents.Items = de_PathList(__getArrayIfSingleItem(output["Items"]["Path"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlPublicKey
 */
const de_PublicKey = (output: any, context: __SerdeContext): PublicKey => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["CreatedTime"] !== undefined) {
    contents.CreatedTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreatedTime"]));
  }
  if (output["PublicKeyConfig"] !== undefined) {
    contents.PublicKeyConfig = de_PublicKeyConfig(output["PublicKeyConfig"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlPublicKeyConfig
 */
const de_PublicKeyConfig = (output: any, context: __SerdeContext): PublicKeyConfig => {
  const contents: any = {};
  if (output["CallerReference"] !== undefined) {
    contents.CallerReference = __expectString(output["CallerReference"]);
  }
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["EncodedKey"] !== undefined) {
    contents.EncodedKey = __expectString(output["EncodedKey"]);
  }
  if (output["Comment"] !== undefined) {
    contents.Comment = __expectString(output["Comment"]);
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
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = __expectString(output["NextMarker"]);
  }
  if (output["MaxItems"] !== undefined) {
    contents.MaxItems = __strictParseInt32(output["MaxItems"]) as number;
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["PublicKeySummary"] !== undefined) {
    contents.Items = de_PublicKeySummaryList(__getArrayIfSingleItem(output["Items"]["PublicKeySummary"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlPublicKeySummary
 */
const de_PublicKeySummary = (output: any, context: __SerdeContext): PublicKeySummary => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["CreatedTime"] !== undefined) {
    contents.CreatedTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreatedTime"]));
  }
  if (output["EncodedKey"] !== undefined) {
    contents.EncodedKey = __expectString(output["EncodedKey"]);
  }
  if (output["Comment"] !== undefined) {
    contents.Comment = __expectString(output["Comment"]);
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
  if (output["QueryArg"] !== undefined) {
    contents.QueryArg = __expectString(output["QueryArg"]);
  }
  if (output["ProfileId"] !== undefined) {
    contents.ProfileId = __expectString(output["ProfileId"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlQueryArgProfileConfig
 */
const de_QueryArgProfileConfig = (output: any, context: __SerdeContext): QueryArgProfileConfig => {
  const contents: any = {};
  if (output["ForwardWhenQueryArgProfileIsUnknown"] !== undefined) {
    contents.ForwardWhenQueryArgProfileIsUnknown = __parseBoolean(output["ForwardWhenQueryArgProfileIsUnknown"]);
  }
  if (output["QueryArgProfiles"] !== undefined) {
    contents.QueryArgProfiles = de_QueryArgProfiles(output["QueryArgProfiles"], context);
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
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["QueryArgProfile"] !== undefined) {
    contents.Items = de_QueryArgProfileList(__getArrayIfSingleItem(output["Items"]["QueryArgProfile"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlQueryStringCacheKeys
 */
const de_QueryStringCacheKeys = (output: any, context: __SerdeContext): QueryStringCacheKeys => {
  const contents: any = {};
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["Name"] !== undefined) {
    contents.Items = de_QueryStringCacheKeysList(__getArrayIfSingleItem(output["Items"]["Name"]), context);
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
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["Name"] !== undefined) {
    contents.Items = de_QueryStringNamesList(__getArrayIfSingleItem(output["Items"]["Name"]), context);
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
  if (output["ARN"] !== undefined) {
    contents.ARN = __expectString(output["ARN"]);
  }
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["SamplingRate"] !== undefined) {
    contents.SamplingRate = __strictParseLong(output["SamplingRate"]) as number;
  }
  if (output.EndPoints === "") {
    contents.EndPoints = [];
  } else if (output["EndPoints"] !== undefined && output["EndPoints"]["member"] !== undefined) {
    contents.EndPoints = de_EndPointList(__getArrayIfSingleItem(output["EndPoints"]["member"]), context);
  }
  if (output.Fields === "") {
    contents.Fields = [];
  } else if (output["Fields"] !== undefined && output["Fields"]["Field"] !== undefined) {
    contents.Fields = de_FieldList(__getArrayIfSingleItem(output["Fields"]["Field"]), context);
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
  if (output["MaxItems"] !== undefined) {
    contents.MaxItems = __strictParseInt32(output["MaxItems"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["member"] !== undefined) {
    contents.Items = de_RealtimeLogConfigList(__getArrayIfSingleItem(output["Items"]["member"]), context);
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = __expectString(output["NextMarker"]);
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
  if (output["RealtimeMetricsSubscriptionStatus"] !== undefined) {
    contents.RealtimeMetricsSubscriptionStatus = __expectString(output["RealtimeMetricsSubscriptionStatus"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlResponseHeadersPolicy
 */
const de_ResponseHeadersPolicy = (output: any, context: __SerdeContext): ResponseHeadersPolicy => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["LastModifiedTime"] !== undefined) {
    contents.LastModifiedTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastModifiedTime"]));
  }
  if (output["ResponseHeadersPolicyConfig"] !== undefined) {
    contents.ResponseHeadersPolicyConfig = de_ResponseHeadersPolicyConfig(
      output["ResponseHeadersPolicyConfig"],
      context
    );
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
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["Header"] !== undefined) {
    contents.Items = de_AccessControlAllowHeadersList(__getArrayIfSingleItem(output["Items"]["Header"]), context);
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
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["Method"] !== undefined) {
    contents.Items = de_AccessControlAllowMethodsList(__getArrayIfSingleItem(output["Items"]["Method"]), context);
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
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["Origin"] !== undefined) {
    contents.Items = de_AccessControlAllowOriginsList(__getArrayIfSingleItem(output["Items"]["Origin"]), context);
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
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["Header"] !== undefined) {
    contents.Items = de_AccessControlExposeHeadersList(__getArrayIfSingleItem(output["Items"]["Header"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlResponseHeadersPolicyConfig
 */
const de_ResponseHeadersPolicyConfig = (output: any, context: __SerdeContext): ResponseHeadersPolicyConfig => {
  const contents: any = {};
  if (output["Comment"] !== undefined) {
    contents.Comment = __expectString(output["Comment"]);
  }
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["CorsConfig"] !== undefined) {
    contents.CorsConfig = de_ResponseHeadersPolicyCorsConfig(output["CorsConfig"], context);
  }
  if (output["SecurityHeadersConfig"] !== undefined) {
    contents.SecurityHeadersConfig = de_ResponseHeadersPolicySecurityHeadersConfig(
      output["SecurityHeadersConfig"],
      context
    );
  }
  if (output["ServerTimingHeadersConfig"] !== undefined) {
    contents.ServerTimingHeadersConfig = de_ResponseHeadersPolicyServerTimingHeadersConfig(
      output["ServerTimingHeadersConfig"],
      context
    );
  }
  if (output["CustomHeadersConfig"] !== undefined) {
    contents.CustomHeadersConfig = de_ResponseHeadersPolicyCustomHeadersConfig(output["CustomHeadersConfig"], context);
  }
  if (output["RemoveHeadersConfig"] !== undefined) {
    contents.RemoveHeadersConfig = de_ResponseHeadersPolicyRemoveHeadersConfig(output["RemoveHeadersConfig"], context);
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
  if (output["Override"] !== undefined) {
    contents.Override = __parseBoolean(output["Override"]);
  }
  if (output["ContentSecurityPolicy"] !== undefined) {
    contents.ContentSecurityPolicy = __expectString(output["ContentSecurityPolicy"]);
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
  if (output["Override"] !== undefined) {
    contents.Override = __parseBoolean(output["Override"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlResponseHeadersPolicyCorsConfig
 */
const de_ResponseHeadersPolicyCorsConfig = (output: any, context: __SerdeContext): ResponseHeadersPolicyCorsConfig => {
  const contents: any = {};
  if (output["AccessControlAllowOrigins"] !== undefined) {
    contents.AccessControlAllowOrigins = de_ResponseHeadersPolicyAccessControlAllowOrigins(
      output["AccessControlAllowOrigins"],
      context
    );
  }
  if (output["AccessControlAllowHeaders"] !== undefined) {
    contents.AccessControlAllowHeaders = de_ResponseHeadersPolicyAccessControlAllowHeaders(
      output["AccessControlAllowHeaders"],
      context
    );
  }
  if (output["AccessControlAllowMethods"] !== undefined) {
    contents.AccessControlAllowMethods = de_ResponseHeadersPolicyAccessControlAllowMethods(
      output["AccessControlAllowMethods"],
      context
    );
  }
  if (output["AccessControlAllowCredentials"] !== undefined) {
    contents.AccessControlAllowCredentials = __parseBoolean(output["AccessControlAllowCredentials"]);
  }
  if (output["AccessControlExposeHeaders"] !== undefined) {
    contents.AccessControlExposeHeaders = de_ResponseHeadersPolicyAccessControlExposeHeaders(
      output["AccessControlExposeHeaders"],
      context
    );
  }
  if (output["AccessControlMaxAgeSec"] !== undefined) {
    contents.AccessControlMaxAgeSec = __strictParseInt32(output["AccessControlMaxAgeSec"]) as number;
  }
  if (output["OriginOverride"] !== undefined) {
    contents.OriginOverride = __parseBoolean(output["OriginOverride"]);
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
  if (output["Header"] !== undefined) {
    contents.Header = __expectString(output["Header"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  if (output["Override"] !== undefined) {
    contents.Override = __parseBoolean(output["Override"]);
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
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["ResponseHeadersPolicyCustomHeader"] !== undefined) {
    contents.Items = de_ResponseHeadersPolicyCustomHeaderList(
      __getArrayIfSingleItem(output["Items"]["ResponseHeadersPolicyCustomHeader"]),
      context
    );
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
  if (output["Override"] !== undefined) {
    contents.Override = __parseBoolean(output["Override"]);
  }
  if (output["FrameOption"] !== undefined) {
    contents.FrameOption = __expectString(output["FrameOption"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlResponseHeadersPolicyList
 */
const de_ResponseHeadersPolicyList = (output: any, context: __SerdeContext): ResponseHeadersPolicyList => {
  const contents: any = {};
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = __expectString(output["NextMarker"]);
  }
  if (output["MaxItems"] !== undefined) {
    contents.MaxItems = __strictParseInt32(output["MaxItems"]) as number;
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["ResponseHeadersPolicySummary"] !== undefined) {
    contents.Items = de_ResponseHeadersPolicySummaryList(
      __getArrayIfSingleItem(output["Items"]["ResponseHeadersPolicySummary"]),
      context
    );
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
  if (output["Override"] !== undefined) {
    contents.Override = __parseBoolean(output["Override"]);
  }
  if (output["ReferrerPolicy"] !== undefined) {
    contents.ReferrerPolicy = __expectString(output["ReferrerPolicy"]);
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
  if (output["Header"] !== undefined) {
    contents.Header = __expectString(output["Header"]);
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
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["ResponseHeadersPolicyRemoveHeader"] !== undefined) {
    contents.Items = de_ResponseHeadersPolicyRemoveHeaderList(
      __getArrayIfSingleItem(output["Items"]["ResponseHeadersPolicyRemoveHeader"]),
      context
    );
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
  if (output["XSSProtection"] !== undefined) {
    contents.XSSProtection = de_ResponseHeadersPolicyXSSProtection(output["XSSProtection"], context);
  }
  if (output["FrameOptions"] !== undefined) {
    contents.FrameOptions = de_ResponseHeadersPolicyFrameOptions(output["FrameOptions"], context);
  }
  if (output["ReferrerPolicy"] !== undefined) {
    contents.ReferrerPolicy = de_ResponseHeadersPolicyReferrerPolicy(output["ReferrerPolicy"], context);
  }
  if (output["ContentSecurityPolicy"] !== undefined) {
    contents.ContentSecurityPolicy = de_ResponseHeadersPolicyContentSecurityPolicy(
      output["ContentSecurityPolicy"],
      context
    );
  }
  if (output["ContentTypeOptions"] !== undefined) {
    contents.ContentTypeOptions = de_ResponseHeadersPolicyContentTypeOptions(output["ContentTypeOptions"], context);
  }
  if (output["StrictTransportSecurity"] !== undefined) {
    contents.StrictTransportSecurity = de_ResponseHeadersPolicyStrictTransportSecurity(
      output["StrictTransportSecurity"],
      context
    );
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
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  if (output["SamplingRate"] !== undefined) {
    contents.SamplingRate = __strictParseFloat(output["SamplingRate"]) as number;
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
  if (output["Override"] !== undefined) {
    contents.Override = __parseBoolean(output["Override"]);
  }
  if (output["IncludeSubdomains"] !== undefined) {
    contents.IncludeSubdomains = __parseBoolean(output["IncludeSubdomains"]);
  }
  if (output["Preload"] !== undefined) {
    contents.Preload = __parseBoolean(output["Preload"]);
  }
  if (output["AccessControlMaxAgeSec"] !== undefined) {
    contents.AccessControlMaxAgeSec = __strictParseInt32(output["AccessControlMaxAgeSec"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlResponseHeadersPolicySummary
 */
const de_ResponseHeadersPolicySummary = (output: any, context: __SerdeContext): ResponseHeadersPolicySummary => {
  const contents: any = {};
  if (output["Type"] !== undefined) {
    contents.Type = __expectString(output["Type"]);
  }
  if (output["ResponseHeadersPolicy"] !== undefined) {
    contents.ResponseHeadersPolicy = de_ResponseHeadersPolicy(output["ResponseHeadersPolicy"], context);
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
  if (output["Override"] !== undefined) {
    contents.Override = __parseBoolean(output["Override"]);
  }
  if (output["Protection"] !== undefined) {
    contents.Protection = __parseBoolean(output["Protection"]);
  }
  if (output["ModeBlock"] !== undefined) {
    contents.ModeBlock = __parseBoolean(output["ModeBlock"]);
  }
  if (output["ReportUri"] !== undefined) {
    contents.ReportUri = __expectString(output["ReportUri"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlRestrictions
 */
const de_Restrictions = (output: any, context: __SerdeContext): Restrictions => {
  const contents: any = {};
  if (output["GeoRestriction"] !== undefined) {
    contents.GeoRestriction = de_GeoRestriction(output["GeoRestriction"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3Origin
 */
const de_S3Origin = (output: any, context: __SerdeContext): S3Origin => {
  const contents: any = {};
  if (output["DomainName"] !== undefined) {
    contents.DomainName = __expectString(output["DomainName"]);
  }
  if (output["OriginAccessIdentity"] !== undefined) {
    contents.OriginAccessIdentity = __expectString(output["OriginAccessIdentity"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3OriginConfig
 */
const de_S3OriginConfig = (output: any, context: __SerdeContext): S3OriginConfig => {
  const contents: any = {};
  if (output["OriginAccessIdentity"] !== undefined) {
    contents.OriginAccessIdentity = __expectString(output["OriginAccessIdentity"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlSessionStickinessConfig
 */
const de_SessionStickinessConfig = (output: any, context: __SerdeContext): SessionStickinessConfig => {
  const contents: any = {};
  if (output["IdleTTL"] !== undefined) {
    contents.IdleTTL = __strictParseInt32(output["IdleTTL"]) as number;
  }
  if (output["MaximumTTL"] !== undefined) {
    contents.MaximumTTL = __strictParseInt32(output["MaximumTTL"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlSigner
 */
const de_Signer = (output: any, context: __SerdeContext): Signer => {
  const contents: any = {};
  if (output["AwsAccountNumber"] !== undefined) {
    contents.AwsAccountNumber = __expectString(output["AwsAccountNumber"]);
  }
  if (output["KeyPairIds"] !== undefined) {
    contents.KeyPairIds = de_KeyPairIds(output["KeyPairIds"], context);
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
const de_SslProtocolsList = (output: any, context: __SerdeContext): (SslProtocol | string)[] => {
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
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["DnsName"] !== undefined) {
    contents.Items = de_StagingDistributionDnsNameList(__getArrayIfSingleItem(output["Items"]["DnsName"]), context);
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
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["StatusCode"] !== undefined) {
    contents.Items = de_StatusCodeList(__getArrayIfSingleItem(output["Items"]["StatusCode"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlStreamingDistribution
 */
const de_StreamingDistribution = (output: any, context: __SerdeContext): StreamingDistribution => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["ARN"] !== undefined) {
    contents.ARN = __expectString(output["ARN"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["LastModifiedTime"] !== undefined) {
    contents.LastModifiedTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastModifiedTime"]));
  }
  if (output["DomainName"] !== undefined) {
    contents.DomainName = __expectString(output["DomainName"]);
  }
  if (output["ActiveTrustedSigners"] !== undefined) {
    contents.ActiveTrustedSigners = de_ActiveTrustedSigners(output["ActiveTrustedSigners"], context);
  }
  if (output["StreamingDistributionConfig"] !== undefined) {
    contents.StreamingDistributionConfig = de_StreamingDistributionConfig(
      output["StreamingDistributionConfig"],
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restXmlStreamingDistributionConfig
 */
const de_StreamingDistributionConfig = (output: any, context: __SerdeContext): StreamingDistributionConfig => {
  const contents: any = {};
  if (output["CallerReference"] !== undefined) {
    contents.CallerReference = __expectString(output["CallerReference"]);
  }
  if (output["S3Origin"] !== undefined) {
    contents.S3Origin = de_S3Origin(output["S3Origin"], context);
  }
  if (output["Aliases"] !== undefined) {
    contents.Aliases = de_Aliases(output["Aliases"], context);
  }
  if (output["Comment"] !== undefined) {
    contents.Comment = __expectString(output["Comment"]);
  }
  if (output["Logging"] !== undefined) {
    contents.Logging = de_StreamingLoggingConfig(output["Logging"], context);
  }
  if (output["TrustedSigners"] !== undefined) {
    contents.TrustedSigners = de_TrustedSigners(output["TrustedSigners"], context);
  }
  if (output["PriceClass"] !== undefined) {
    contents.PriceClass = __expectString(output["PriceClass"]);
  }
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlStreamingDistributionList
 */
const de_StreamingDistributionList = (output: any, context: __SerdeContext): StreamingDistributionList => {
  const contents: any = {};
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = __expectString(output["NextMarker"]);
  }
  if (output["MaxItems"] !== undefined) {
    contents.MaxItems = __strictParseInt32(output["MaxItems"]) as number;
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["StreamingDistributionSummary"] !== undefined) {
    contents.Items = de_StreamingDistributionSummaryList(
      __getArrayIfSingleItem(output["Items"]["StreamingDistributionSummary"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restXmlStreamingDistributionSummary
 */
const de_StreamingDistributionSummary = (output: any, context: __SerdeContext): StreamingDistributionSummary => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["ARN"] !== undefined) {
    contents.ARN = __expectString(output["ARN"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["LastModifiedTime"] !== undefined) {
    contents.LastModifiedTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastModifiedTime"]));
  }
  if (output["DomainName"] !== undefined) {
    contents.DomainName = __expectString(output["DomainName"]);
  }
  if (output["S3Origin"] !== undefined) {
    contents.S3Origin = de_S3Origin(output["S3Origin"], context);
  }
  if (output["Aliases"] !== undefined) {
    contents.Aliases = de_Aliases(output["Aliases"], context);
  }
  if (output["TrustedSigners"] !== undefined) {
    contents.TrustedSigners = de_TrustedSigners(output["TrustedSigners"], context);
  }
  if (output["Comment"] !== undefined) {
    contents.Comment = __expectString(output["Comment"]);
  }
  if (output["PriceClass"] !== undefined) {
    contents.PriceClass = __expectString(output["PriceClass"]);
  }
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
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
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  if (output["Bucket"] !== undefined) {
    contents.Bucket = __expectString(output["Bucket"]);
  }
  if (output["Prefix"] !== undefined) {
    contents.Prefix = __expectString(output["Prefix"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlTag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  const contents: any = {};
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
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
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["Tag"] !== undefined) {
    contents.Items = de_TagList(__getArrayIfSingleItem(output["Items"]["Tag"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlTestResult
 */
const de_TestResult = (output: any, context: __SerdeContext): TestResult => {
  const contents: any = {};
  if (output["FunctionSummary"] !== undefined) {
    contents.FunctionSummary = de_FunctionSummary(output["FunctionSummary"], context);
  }
  if (output["ComputeUtilization"] !== undefined) {
    contents.ComputeUtilization = __expectString(output["ComputeUtilization"]);
  }
  if (output.FunctionExecutionLogs === "") {
    contents.FunctionExecutionLogs = [];
  } else if (output["FunctionExecutionLogs"] !== undefined && output["FunctionExecutionLogs"]["member"] !== undefined) {
    contents.FunctionExecutionLogs = de_FunctionExecutionLogList(
      __getArrayIfSingleItem(output["FunctionExecutionLogs"]["member"]),
      context
    );
  }
  if (output["FunctionErrorMessage"] !== undefined) {
    contents.FunctionErrorMessage = __expectString(output["FunctionErrorMessage"]);
  }
  if (output["FunctionOutput"] !== undefined) {
    contents.FunctionOutput = __expectString(output["FunctionOutput"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlTrafficConfig
 */
const de_TrafficConfig = (output: any, context: __SerdeContext): TrafficConfig => {
  const contents: any = {};
  if (output["SingleWeightConfig"] !== undefined) {
    contents.SingleWeightConfig = de_ContinuousDeploymentSingleWeightConfig(output["SingleWeightConfig"], context);
  }
  if (output["SingleHeaderConfig"] !== undefined) {
    contents.SingleHeaderConfig = de_ContinuousDeploymentSingleHeaderConfig(output["SingleHeaderConfig"], context);
  }
  if (output["Type"] !== undefined) {
    contents.Type = __expectString(output["Type"]);
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
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["KeyGroup"] !== undefined) {
    contents.Items = de_TrustedKeyGroupIdList(__getArrayIfSingleItem(output["Items"]["KeyGroup"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlTrustedSigners
 */
const de_TrustedSigners = (output: any, context: __SerdeContext): TrustedSigners => {
  const contents: any = {};
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["AwsAccountNumber"] !== undefined) {
    contents.Items = de_AwsAccountNumberList(__getArrayIfSingleItem(output["Items"]["AwsAccountNumber"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlViewerCertificate
 */
const de_ViewerCertificate = (output: any, context: __SerdeContext): ViewerCertificate => {
  const contents: any = {};
  if (output["CloudFrontDefaultCertificate"] !== undefined) {
    contents.CloudFrontDefaultCertificate = __parseBoolean(output["CloudFrontDefaultCertificate"]);
  }
  if (output["IAMCertificateId"] !== undefined) {
    contents.IAMCertificateId = __expectString(output["IAMCertificateId"]);
  }
  if (output["ACMCertificateArn"] !== undefined) {
    contents.ACMCertificateArn = __expectString(output["ACMCertificateArn"]);
  }
  if (output["SSLSupportMethod"] !== undefined) {
    contents.SSLSupportMethod = __expectString(output["SSLSupportMethod"]);
  }
  if (output["MinimumProtocolVersion"] !== undefined) {
    contents.MinimumProtocolVersion = __expectString(output["MinimumProtocolVersion"]);
  }
  if (output["Certificate"] !== undefined) {
    contents.Certificate = __expectString(output["Certificate"]);
  }
  if (output["CertificateSource"] !== undefined) {
    contents.CertificateSource = __expectString(output["CertificateSource"]);
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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      const parser = new XMLParser({
        attributeNamePrefix: "",
        htmlEntities: true,
        ignoreAttributes: false,
        ignoreDeclaration: true,
        parseTagValue: false,
        trimValues: false,
        tagValueProcessor: (_: any, val: any) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
      });
      parser.addEntity("#xD", "\r");
      parser.addEntity("#10", "\n");
      const parsedObj = parser.parse(encoded);
      const textNodeName = "#text";
      const key = Object.keys(parsedObj)[0];
      const parsedObjToReturn = parsedObj[key];
      if (parsedObjToReturn[textNodeName]) {
        parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
        delete parsedObjToReturn[textNodeName];
      }
      return __getValueFromTextNode(parsedObjToReturn);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  if (value.Error) {
    value.Error.message = value.Error.message ?? value.Error.Message;
  }
  return value;
};

const loadRestXmlErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  if (data.Error?.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
};
