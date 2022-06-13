// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
  parseBoolean as __parseBoolean,
  parseRfc3339DateTime as __parseRfc3339DateTime,
  strictParseFloat as __strictParseFloat,
  strictParseInt32 as __strictParseInt32,
  strictParseLong as __strictParseLong,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { XmlNode as __XmlNode, XmlText as __XmlText } from "@aws-sdk/xml-builder";
import { decodeHTML } from "entities";
import { parse as xmlParse } from "fast-xml-parser";

import { AssociateAliasCommandInput, AssociateAliasCommandOutput } from "../commands/AssociateAliasCommand";
import { CreateCachePolicyCommandInput, CreateCachePolicyCommandOutput } from "../commands/CreateCachePolicyCommand";
import {
  CreateCloudFrontOriginAccessIdentityCommandInput,
  CreateCloudFrontOriginAccessIdentityCommandOutput,
} from "../commands/CreateCloudFrontOriginAccessIdentityCommand";
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
import { UpdateDistributionCommandInput, UpdateDistributionCommandOutput } from "../commands/UpdateDistributionCommand";
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
  CloudFrontOriginAccessIdentityInUse,
  CNAMEAlreadyExists,
  ContentTypeProfile,
  ContentTypeProfileConfig,
  ContentTypeProfiles,
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
  DistributionNotDisabled,
  EncryptionEntities,
  EncryptionEntity,
  EndPoint,
  FieldLevelEncryption,
  FieldLevelEncryptionConfig,
  FieldLevelEncryptionConfigAlreadyExists,
  FieldLevelEncryptionConfigInUse,
  FieldLevelEncryptionProfile,
  FieldLevelEncryptionProfileAlreadyExists,
  FieldLevelEncryptionProfileConfig,
  FieldLevelEncryptionProfileInUse,
  FieldLevelEncryptionProfileSizeExceeded,
  FieldPatterns,
  ForwardedValues,
  FunctionAlreadyExists,
  FunctionAssociation,
  FunctionAssociations,
  FunctionConfig,
  FunctionInUse,
  FunctionMetadata,
  FunctionSizeLimitExceeded,
  FunctionSummary,
  GeoRestriction,
  Headers,
  IllegalDelete,
  IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior,
  IllegalUpdate,
  InconsistentQuantities,
  InvalidArgument,
  Invalidation,
  InvalidationBatch,
  InvalidDefaultRootObject,
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
  NoSuchCachePolicy,
  NoSuchCloudFrontOriginAccessIdentity,
  NoSuchDistribution,
  NoSuchFieldLevelEncryptionConfig,
  NoSuchFieldLevelEncryptionProfile,
  NoSuchFunctionExists,
  NoSuchOrigin,
  NoSuchOriginRequestPolicy,
  NoSuchPublicKey,
  NoSuchRealtimeLogConfig,
  NoSuchResource,
  NoSuchResponseHeadersPolicy,
  Origin,
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
  ResponseHeadersPolicyAlreadyExists,
  ResponseHeadersPolicyConfig,
  ResponseHeadersPolicyContentSecurityPolicy,
  ResponseHeadersPolicyContentTypeOptions,
  ResponseHeadersPolicyCorsConfig,
  ResponseHeadersPolicyCustomHeader,
  ResponseHeadersPolicyCustomHeadersConfig,
  ResponseHeadersPolicyFrameOptions,
  ResponseHeadersPolicyReferrerPolicy,
  ResponseHeadersPolicySecurityHeadersConfig,
  ResponseHeadersPolicyServerTimingHeadersConfig,
  ResponseHeadersPolicyStrictTransportSecurity,
  ResponseHeadersPolicyXSSProtection,
  Restrictions,
  S3Origin,
  S3OriginConfig,
  Signer,
  SslProtocol,
  StatusCodes,
  StreamingDistribution,
  StreamingDistributionAlreadyExists,
  StreamingDistributionConfig,
  StreamingDistributionConfigWithTags,
  StreamingLoggingConfig,
  Tag,
  Tags,
  TooLongCSPInResponseHeadersPolicy,
  TooManyCacheBehaviors,
  TooManyCachePolicies,
  TooManyCertificates,
  TooManyCloudFrontOriginAccessIdentities,
  TooManyCookieNamesInWhiteList,
  TooManyCookiesInCachePolicy,
  TooManyCookiesInOriginRequestPolicy,
  TooManyCustomHeadersInResponseHeadersPolicy,
  TooManyDistributionCNAMEs,
  TooManyDistributions,
  TooManyDistributionsAssociatedToCachePolicy,
  TooManyDistributionsAssociatedToFieldLevelEncryptionConfig,
  TooManyDistributionsAssociatedToKeyGroup,
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
  TooManyResponseHeadersPolicies,
  TooManyStreamingDistributionCNAMEs,
  TooManyStreamingDistributions,
  TooManyTrustedSigners,
  TrustedKeyGroupDoesNotExist,
  TrustedKeyGroups,
  TrustedSignerDoesNotExist,
  TrustedSigners,
  UnsupportedOperation,
  ViewerCertificate,
} from "../models/models_0";
import {
  CloudFrontOriginAccessIdentityList,
  CloudFrontOriginAccessIdentitySummary,
  ConflictingAlias,
  ConflictingAliasesList,
  DistributionIdList,
  DistributionList,
  DistributionSummary,
  FieldLevelEncryptionList,
  FieldLevelEncryptionProfileList,
  FieldLevelEncryptionProfileSummary,
  FieldLevelEncryptionSummary,
  FunctionList,
  InvalidationList,
  InvalidationSummary,
  KeyGroupList,
  KeyGroupSummary,
  NoSuchInvalidation,
  NoSuchStreamingDistribution,
  OriginRequestPolicyInUse,
  OriginRequestPolicyList,
  OriginRequestPolicySummary,
  PublicKeyInUse,
  PublicKeyList,
  PublicKeySummary,
  RealtimeLogConfigInUse,
  RealtimeLogConfigs,
  ResourceInUse,
  ResponseHeadersPolicyInUse,
  ResponseHeadersPolicyList,
  ResponseHeadersPolicySummary,
  StreamingDistributionList,
  StreamingDistributionNotDisabled,
  StreamingDistributionSummary,
  TagKeys,
  TestFunctionFailed,
  TestResult,
} from "../models/models_1";

export const serializeAws_restXmlAssociateAliasCommand = async (
  input: AssociateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/distribution/{TargetDistributionId}/associate-alias";
  if (input.TargetDistributionId !== undefined) {
    const labelValue: string = input.TargetDistributionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TargetDistributionId.");
    }
    resolvedPath = resolvedPath.replace("{TargetDistributionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TargetDistributionId.");
  }
  const query: any = {
    ...(input.Alias !== undefined && { Alias: input.Alias }),
  };
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

export const serializeAws_restXmlCreateCachePolicyCommand = async (
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
    body = serializeAws_restXmlCachePolicyConfig(input.CachePolicyConfig, context);
  }
  let contents: any;
  if (input.CachePolicyConfig !== undefined) {
    contents = serializeAws_restXmlCachePolicyConfig(input.CachePolicyConfig, context);
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

export const serializeAws_restXmlCreateCloudFrontOriginAccessIdentityCommand = async (
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
    body = serializeAws_restXmlCloudFrontOriginAccessIdentityConfig(
      input.CloudFrontOriginAccessIdentityConfig,
      context
    );
  }
  let contents: any;
  if (input.CloudFrontOriginAccessIdentityConfig !== undefined) {
    contents = serializeAws_restXmlCloudFrontOriginAccessIdentityConfig(
      input.CloudFrontOriginAccessIdentityConfig,
      context
    );
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

export const serializeAws_restXmlCreateDistributionCommand = async (
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
    body = serializeAws_restXmlDistributionConfig(input.DistributionConfig, context);
  }
  let contents: any;
  if (input.DistributionConfig !== undefined) {
    contents = serializeAws_restXmlDistributionConfig(input.DistributionConfig, context);
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

export const serializeAws_restXmlCreateDistributionWithTagsCommand = async (
  input: CreateDistributionWithTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/distribution";
  const query: any = {
    WithTags: "",
  };
  let body: any;
  if (input.DistributionConfigWithTags !== undefined) {
    body = serializeAws_restXmlDistributionConfigWithTags(input.DistributionConfigWithTags, context);
  }
  let contents: any;
  if (input.DistributionConfigWithTags !== undefined) {
    contents = serializeAws_restXmlDistributionConfigWithTags(input.DistributionConfigWithTags, context);
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

export const serializeAws_restXmlCreateFieldLevelEncryptionConfigCommand = async (
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
    body = serializeAws_restXmlFieldLevelEncryptionConfig(input.FieldLevelEncryptionConfig, context);
  }
  let contents: any;
  if (input.FieldLevelEncryptionConfig !== undefined) {
    contents = serializeAws_restXmlFieldLevelEncryptionConfig(input.FieldLevelEncryptionConfig, context);
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

export const serializeAws_restXmlCreateFieldLevelEncryptionProfileCommand = async (
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
    body = serializeAws_restXmlFieldLevelEncryptionProfileConfig(input.FieldLevelEncryptionProfileConfig, context);
  }
  let contents: any;
  if (input.FieldLevelEncryptionProfileConfig !== undefined) {
    contents = serializeAws_restXmlFieldLevelEncryptionProfileConfig(input.FieldLevelEncryptionProfileConfig, context);
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

export const serializeAws_restXmlCreateFunctionCommand = async (
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
    const node = new __XmlNode("FunctionBlob")
      .addChildNode(new __XmlText(context.base64Encoder(input.FunctionCode)))
      .withName("FunctionCode");
    bodyNode.addChildNode(node);
  }
  if (input.FunctionConfig !== undefined) {
    const node = serializeAws_restXmlFunctionConfig(input.FunctionConfig, context).withName("FunctionConfig");
    bodyNode.addChildNode(node);
  }
  if (input.Name !== undefined) {
    const node = new __XmlNode("FunctionName").addChildNode(new __XmlText(input.Name)).withName("Name");
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

export const serializeAws_restXmlCreateInvalidationCommand = async (
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
  if (input.DistributionId !== undefined) {
    const labelValue: string = input.DistributionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DistributionId.");
    }
    resolvedPath = resolvedPath.replace("{DistributionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DistributionId.");
  }
  let body: any;
  if (input.InvalidationBatch !== undefined) {
    body = serializeAws_restXmlInvalidationBatch(input.InvalidationBatch, context);
  }
  let contents: any;
  if (input.InvalidationBatch !== undefined) {
    contents = serializeAws_restXmlInvalidationBatch(input.InvalidationBatch, context);
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

export const serializeAws_restXmlCreateKeyGroupCommand = async (
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
    body = serializeAws_restXmlKeyGroupConfig(input.KeyGroupConfig, context);
  }
  let contents: any;
  if (input.KeyGroupConfig !== undefined) {
    contents = serializeAws_restXmlKeyGroupConfig(input.KeyGroupConfig, context);
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

export const serializeAws_restXmlCreateMonitoringSubscriptionCommand = async (
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
  if (input.DistributionId !== undefined) {
    const labelValue: string = input.DistributionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DistributionId.");
    }
    resolvedPath = resolvedPath.replace("{DistributionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DistributionId.");
  }
  let body: any;
  if (input.MonitoringSubscription !== undefined) {
    body = serializeAws_restXmlMonitoringSubscription(input.MonitoringSubscription, context);
  }
  let contents: any;
  if (input.MonitoringSubscription !== undefined) {
    contents = serializeAws_restXmlMonitoringSubscription(input.MonitoringSubscription, context);
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

export const serializeAws_restXmlCreateOriginRequestPolicyCommand = async (
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
    body = serializeAws_restXmlOriginRequestPolicyConfig(input.OriginRequestPolicyConfig, context);
  }
  let contents: any;
  if (input.OriginRequestPolicyConfig !== undefined) {
    contents = serializeAws_restXmlOriginRequestPolicyConfig(input.OriginRequestPolicyConfig, context);
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

export const serializeAws_restXmlCreatePublicKeyCommand = async (
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
    body = serializeAws_restXmlPublicKeyConfig(input.PublicKeyConfig, context);
  }
  let contents: any;
  if (input.PublicKeyConfig !== undefined) {
    contents = serializeAws_restXmlPublicKeyConfig(input.PublicKeyConfig, context);
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

export const serializeAws_restXmlCreateRealtimeLogConfigCommand = async (
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
    const nodes = serializeAws_restXmlEndPointList(input.EndPoints, context);
    const containerNode = new __XmlNode("EndPoints");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.Fields !== undefined) {
    const nodes = serializeAws_restXmlFieldList(input.Fields, context);
    const containerNode = new __XmlNode("Fields");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.Name !== undefined) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.Name)).withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.SamplingRate !== undefined) {
    const node = new __XmlNode("long").addChildNode(new __XmlText(String(input.SamplingRate))).withName("SamplingRate");
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

export const serializeAws_restXmlCreateResponseHeadersPolicyCommand = async (
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
    body = serializeAws_restXmlResponseHeadersPolicyConfig(input.ResponseHeadersPolicyConfig, context);
  }
  let contents: any;
  if (input.ResponseHeadersPolicyConfig !== undefined) {
    contents = serializeAws_restXmlResponseHeadersPolicyConfig(input.ResponseHeadersPolicyConfig, context);
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

export const serializeAws_restXmlCreateStreamingDistributionCommand = async (
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
    body = serializeAws_restXmlStreamingDistributionConfig(input.StreamingDistributionConfig, context);
  }
  let contents: any;
  if (input.StreamingDistributionConfig !== undefined) {
    contents = serializeAws_restXmlStreamingDistributionConfig(input.StreamingDistributionConfig, context);
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

export const serializeAws_restXmlCreateStreamingDistributionWithTagsCommand = async (
  input: CreateStreamingDistributionWithTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/streaming-distribution";
  const query: any = {
    WithTags: "",
  };
  let body: any;
  if (input.StreamingDistributionConfigWithTags !== undefined) {
    body = serializeAws_restXmlStreamingDistributionConfigWithTags(input.StreamingDistributionConfigWithTags, context);
  }
  let contents: any;
  if (input.StreamingDistributionConfigWithTags !== undefined) {
    contents = serializeAws_restXmlStreamingDistributionConfigWithTags(
      input.StreamingDistributionConfigWithTags,
      context
    );
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

export const serializeAws_restXmlDeleteCachePolicyCommand = async (
  input: DeleteCachePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/cache-policy/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
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

export const serializeAws_restXmlDeleteCloudFrontOriginAccessIdentityCommand = async (
  input: DeleteCloudFrontOriginAccessIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/origin-access-identity/cloudfront/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
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

export const serializeAws_restXmlDeleteDistributionCommand = async (
  input: DeleteDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/distribution/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
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

export const serializeAws_restXmlDeleteFieldLevelEncryptionConfigCommand = async (
  input: DeleteFieldLevelEncryptionConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/field-level-encryption/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
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

export const serializeAws_restXmlDeleteFieldLevelEncryptionProfileCommand = async (
  input: DeleteFieldLevelEncryptionProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/field-level-encryption-profile/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
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

export const serializeAws_restXmlDeleteFunctionCommand = async (
  input: DeleteFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/function/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
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

export const serializeAws_restXmlDeleteKeyGroupCommand = async (
  input: DeleteKeyGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/key-group/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
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

export const serializeAws_restXmlDeleteMonitoringSubscriptionCommand = async (
  input: DeleteMonitoringSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/distributions/{DistributionId}/monitoring-subscription";
  if (input.DistributionId !== undefined) {
    const labelValue: string = input.DistributionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DistributionId.");
    }
    resolvedPath = resolvedPath.replace("{DistributionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DistributionId.");
  }
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

export const serializeAws_restXmlDeleteOriginRequestPolicyCommand = async (
  input: DeleteOriginRequestPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/origin-request-policy/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
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

export const serializeAws_restXmlDeletePublicKeyCommand = async (
  input: DeletePublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/public-key/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
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

export const serializeAws_restXmlDeleteRealtimeLogConfigCommand = async (
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
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.ARN)).withName("ARN");
    bodyNode.addChildNode(node);
  }
  if (input.Name !== undefined) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.Name)).withName("Name");
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

export const serializeAws_restXmlDeleteResponseHeadersPolicyCommand = async (
  input: DeleteResponseHeadersPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/response-headers-policy/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
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

export const serializeAws_restXmlDeleteStreamingDistributionCommand = async (
  input: DeleteStreamingDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/streaming-distribution/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
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

export const serializeAws_restXmlDescribeFunctionCommand = async (
  input: DescribeFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/function/{Name}/describe";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  const query: any = {
    ...(input.Stage !== undefined && { Stage: input.Stage }),
  };
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

export const serializeAws_restXmlGetCachePolicyCommand = async (
  input: GetCachePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/cache-policy/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
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

export const serializeAws_restXmlGetCachePolicyConfigCommand = async (
  input: GetCachePolicyConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/cache-policy/{Id}/config";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
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

export const serializeAws_restXmlGetCloudFrontOriginAccessIdentityCommand = async (
  input: GetCloudFrontOriginAccessIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/origin-access-identity/cloudfront/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
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

export const serializeAws_restXmlGetCloudFrontOriginAccessIdentityConfigCommand = async (
  input: GetCloudFrontOriginAccessIdentityConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/origin-access-identity/cloudfront/{Id}/config";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
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

export const serializeAws_restXmlGetDistributionCommand = async (
  input: GetDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/distribution/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
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

export const serializeAws_restXmlGetDistributionConfigCommand = async (
  input: GetDistributionConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/distribution/{Id}/config";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
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

export const serializeAws_restXmlGetFieldLevelEncryptionCommand = async (
  input: GetFieldLevelEncryptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/field-level-encryption/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
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

export const serializeAws_restXmlGetFieldLevelEncryptionConfigCommand = async (
  input: GetFieldLevelEncryptionConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/field-level-encryption/{Id}/config";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
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

export const serializeAws_restXmlGetFieldLevelEncryptionProfileCommand = async (
  input: GetFieldLevelEncryptionProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/field-level-encryption-profile/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
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

export const serializeAws_restXmlGetFieldLevelEncryptionProfileConfigCommand = async (
  input: GetFieldLevelEncryptionProfileConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/field-level-encryption-profile/{Id}/config";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
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

export const serializeAws_restXmlGetFunctionCommand = async (
  input: GetFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/function/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  const query: any = {
    ...(input.Stage !== undefined && { Stage: input.Stage }),
  };
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

export const serializeAws_restXmlGetInvalidationCommand = async (
  input: GetInvalidationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/distribution/{DistributionId}/invalidation/{Id}";
  if (input.DistributionId !== undefined) {
    const labelValue: string = input.DistributionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DistributionId.");
    }
    resolvedPath = resolvedPath.replace("{DistributionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DistributionId.");
  }
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
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

export const serializeAws_restXmlGetKeyGroupCommand = async (
  input: GetKeyGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/key-group/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
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

export const serializeAws_restXmlGetKeyGroupConfigCommand = async (
  input: GetKeyGroupConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/key-group/{Id}/config";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
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

export const serializeAws_restXmlGetMonitoringSubscriptionCommand = async (
  input: GetMonitoringSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/distributions/{DistributionId}/monitoring-subscription";
  if (input.DistributionId !== undefined) {
    const labelValue: string = input.DistributionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DistributionId.");
    }
    resolvedPath = resolvedPath.replace("{DistributionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DistributionId.");
  }
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

export const serializeAws_restXmlGetOriginRequestPolicyCommand = async (
  input: GetOriginRequestPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/origin-request-policy/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
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

export const serializeAws_restXmlGetOriginRequestPolicyConfigCommand = async (
  input: GetOriginRequestPolicyConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/origin-request-policy/{Id}/config";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
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

export const serializeAws_restXmlGetPublicKeyCommand = async (
  input: GetPublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/public-key/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
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

export const serializeAws_restXmlGetPublicKeyConfigCommand = async (
  input: GetPublicKeyConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/public-key/{Id}/config";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
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

export const serializeAws_restXmlGetRealtimeLogConfigCommand = async (
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
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.ARN)).withName("ARN");
    bodyNode.addChildNode(node);
  }
  if (input.Name !== undefined) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.Name)).withName("Name");
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

export const serializeAws_restXmlGetResponseHeadersPolicyCommand = async (
  input: GetResponseHeadersPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/response-headers-policy/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
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

export const serializeAws_restXmlGetResponseHeadersPolicyConfigCommand = async (
  input: GetResponseHeadersPolicyConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/response-headers-policy/{Id}/config";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
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

export const serializeAws_restXmlGetStreamingDistributionCommand = async (
  input: GetStreamingDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/streaming-distribution/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
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

export const serializeAws_restXmlGetStreamingDistributionConfigCommand = async (
  input: GetStreamingDistributionConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/streaming-distribution/{Id}/config";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
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

export const serializeAws_restXmlListCachePoliciesCommand = async (
  input: ListCachePoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/cache-policy";
  const query: any = {
    ...(input.Type !== undefined && { Type: input.Type }),
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
  };
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

export const serializeAws_restXmlListCloudFrontOriginAccessIdentitiesCommand = async (
  input: ListCloudFrontOriginAccessIdentitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/origin-access-identity/cloudfront";
  const query: any = {
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
  };
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

export const serializeAws_restXmlListConflictingAliasesCommand = async (
  input: ListConflictingAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/conflicting-alias";
  const query: any = {
    ...(input.DistributionId !== undefined && { DistributionId: input.DistributionId }),
    ...(input.Alias !== undefined && { Alias: input.Alias }),
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
  };
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

export const serializeAws_restXmlListDistributionsCommand = async (
  input: ListDistributionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/distribution";
  const query: any = {
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
  };
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

export const serializeAws_restXmlListDistributionsByCachePolicyIdCommand = async (
  input: ListDistributionsByCachePolicyIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/distributionsByCachePolicyId/{CachePolicyId}";
  if (input.CachePolicyId !== undefined) {
    const labelValue: string = input.CachePolicyId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CachePolicyId.");
    }
    resolvedPath = resolvedPath.replace("{CachePolicyId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CachePolicyId.");
  }
  const query: any = {
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
  };
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

export const serializeAws_restXmlListDistributionsByKeyGroupCommand = async (
  input: ListDistributionsByKeyGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/distributionsByKeyGroupId/{KeyGroupId}";
  if (input.KeyGroupId !== undefined) {
    const labelValue: string = input.KeyGroupId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: KeyGroupId.");
    }
    resolvedPath = resolvedPath.replace("{KeyGroupId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: KeyGroupId.");
  }
  const query: any = {
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
  };
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

export const serializeAws_restXmlListDistributionsByOriginRequestPolicyIdCommand = async (
  input: ListDistributionsByOriginRequestPolicyIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/distributionsByOriginRequestPolicyId/{OriginRequestPolicyId}";
  if (input.OriginRequestPolicyId !== undefined) {
    const labelValue: string = input.OriginRequestPolicyId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: OriginRequestPolicyId.");
    }
    resolvedPath = resolvedPath.replace("{OriginRequestPolicyId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: OriginRequestPolicyId.");
  }
  const query: any = {
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
  };
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

export const serializeAws_restXmlListDistributionsByRealtimeLogConfigCommand = async (
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
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.Marker)).withName("Marker");
    bodyNode.addChildNode(node);
  }
  if (input.MaxItems !== undefined) {
    const node = new __XmlNode("Integer").addChildNode(new __XmlText(String(input.MaxItems))).withName("MaxItems");
    bodyNode.addChildNode(node);
  }
  if (input.RealtimeLogConfigArn !== undefined) {
    const node = new __XmlNode("string")
      .addChildNode(new __XmlText(input.RealtimeLogConfigArn))
      .withName("RealtimeLogConfigArn");
    bodyNode.addChildNode(node);
  }
  if (input.RealtimeLogConfigName !== undefined) {
    const node = new __XmlNode("string")
      .addChildNode(new __XmlText(input.RealtimeLogConfigName))
      .withName("RealtimeLogConfigName");
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

export const serializeAws_restXmlListDistributionsByResponseHeadersPolicyIdCommand = async (
  input: ListDistributionsByResponseHeadersPolicyIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/distributionsByResponseHeadersPolicyId/{ResponseHeadersPolicyId}";
  if (input.ResponseHeadersPolicyId !== undefined) {
    const labelValue: string = input.ResponseHeadersPolicyId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResponseHeadersPolicyId.");
    }
    resolvedPath = resolvedPath.replace("{ResponseHeadersPolicyId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResponseHeadersPolicyId.");
  }
  const query: any = {
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
  };
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

export const serializeAws_restXmlListDistributionsByWebACLIdCommand = async (
  input: ListDistributionsByWebACLIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/distributionsByWebACLId/{WebACLId}";
  if (input.WebACLId !== undefined) {
    const labelValue: string = input.WebACLId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: WebACLId.");
    }
    resolvedPath = resolvedPath.replace("{WebACLId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: WebACLId.");
  }
  const query: any = {
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
  };
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

export const serializeAws_restXmlListFieldLevelEncryptionConfigsCommand = async (
  input: ListFieldLevelEncryptionConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/field-level-encryption";
  const query: any = {
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
  };
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

export const serializeAws_restXmlListFieldLevelEncryptionProfilesCommand = async (
  input: ListFieldLevelEncryptionProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/field-level-encryption-profile";
  const query: any = {
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
  };
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

export const serializeAws_restXmlListFunctionsCommand = async (
  input: ListFunctionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/function";
  const query: any = {
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
    ...(input.Stage !== undefined && { Stage: input.Stage }),
  };
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

export const serializeAws_restXmlListInvalidationsCommand = async (
  input: ListInvalidationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/distribution/{DistributionId}/invalidation";
  if (input.DistributionId !== undefined) {
    const labelValue: string = input.DistributionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DistributionId.");
    }
    resolvedPath = resolvedPath.replace("{DistributionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DistributionId.");
  }
  const query: any = {
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
  };
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

export const serializeAws_restXmlListKeyGroupsCommand = async (
  input: ListKeyGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/key-group";
  const query: any = {
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
  };
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

export const serializeAws_restXmlListOriginRequestPoliciesCommand = async (
  input: ListOriginRequestPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/origin-request-policy";
  const query: any = {
    ...(input.Type !== undefined && { Type: input.Type }),
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
  };
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

export const serializeAws_restXmlListPublicKeysCommand = async (
  input: ListPublicKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/public-key";
  const query: any = {
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
  };
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

export const serializeAws_restXmlListRealtimeLogConfigsCommand = async (
  input: ListRealtimeLogConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/realtime-log-config";
  const query: any = {
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
    ...(input.Marker !== undefined && { Marker: input.Marker }),
  };
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

export const serializeAws_restXmlListResponseHeadersPoliciesCommand = async (
  input: ListResponseHeadersPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/response-headers-policy";
  const query: any = {
    ...(input.Type !== undefined && { Type: input.Type }),
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
  };
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

export const serializeAws_restXmlListStreamingDistributionsCommand = async (
  input: ListStreamingDistributionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/streaming-distribution";
  const query: any = {
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
  };
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

export const serializeAws_restXmlListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/tagging";
  const query: any = {
    ...(input.Resource !== undefined && { Resource: input.Resource }),
  };
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

export const serializeAws_restXmlPublishFunctionCommand = async (
  input: PublishFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/function/{Name}/publish";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
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

export const serializeAws_restXmlTagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/tagging";
  const query: any = {
    Operation: "Tag",
    ...(input.Resource !== undefined && { Resource: input.Resource }),
  };
  let body: any;
  if (input.Tags !== undefined) {
    body = serializeAws_restXmlTags(input.Tags, context);
  }
  let contents: any;
  if (input.Tags !== undefined) {
    contents = serializeAws_restXmlTags(input.Tags, context);
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

export const serializeAws_restXmlTestFunctionCommand = async (
  input: TestFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/function/{Name}/test";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("TestFunctionRequest");
  bodyNode.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
  if (input.EventObject !== undefined) {
    const node = new __XmlNode("FunctionEventObject")
      .addChildNode(new __XmlText(context.base64Encoder(input.EventObject)))
      .withName("EventObject");
    bodyNode.addChildNode(node);
  }
  if (input.Stage !== undefined) {
    const node = new __XmlNode("FunctionStage").addChildNode(new __XmlText(input.Stage)).withName("Stage");
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

export const serializeAws_restXmlUntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/tagging";
  const query: any = {
    Operation: "Untag",
    ...(input.Resource !== undefined && { Resource: input.Resource }),
  };
  let body: any;
  if (input.TagKeys !== undefined) {
    body = serializeAws_restXmlTagKeys(input.TagKeys, context);
  }
  let contents: any;
  if (input.TagKeys !== undefined) {
    contents = serializeAws_restXmlTagKeys(input.TagKeys, context);
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

export const serializeAws_restXmlUpdateCachePolicyCommand = async (
  input: UpdateCachePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/cache-policy/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body: any;
  if (input.CachePolicyConfig !== undefined) {
    body = serializeAws_restXmlCachePolicyConfig(input.CachePolicyConfig, context);
  }
  let contents: any;
  if (input.CachePolicyConfig !== undefined) {
    contents = serializeAws_restXmlCachePolicyConfig(input.CachePolicyConfig, context);
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

export const serializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommand = async (
  input: UpdateCloudFrontOriginAccessIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/origin-access-identity/cloudfront/{Id}/config";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body: any;
  if (input.CloudFrontOriginAccessIdentityConfig !== undefined) {
    body = serializeAws_restXmlCloudFrontOriginAccessIdentityConfig(
      input.CloudFrontOriginAccessIdentityConfig,
      context
    );
  }
  let contents: any;
  if (input.CloudFrontOriginAccessIdentityConfig !== undefined) {
    contents = serializeAws_restXmlCloudFrontOriginAccessIdentityConfig(
      input.CloudFrontOriginAccessIdentityConfig,
      context
    );
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

export const serializeAws_restXmlUpdateDistributionCommand = async (
  input: UpdateDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/distribution/{Id}/config";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body: any;
  if (input.DistributionConfig !== undefined) {
    body = serializeAws_restXmlDistributionConfig(input.DistributionConfig, context);
  }
  let contents: any;
  if (input.DistributionConfig !== undefined) {
    contents = serializeAws_restXmlDistributionConfig(input.DistributionConfig, context);
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

export const serializeAws_restXmlUpdateFieldLevelEncryptionConfigCommand = async (
  input: UpdateFieldLevelEncryptionConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/field-level-encryption/{Id}/config";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body: any;
  if (input.FieldLevelEncryptionConfig !== undefined) {
    body = serializeAws_restXmlFieldLevelEncryptionConfig(input.FieldLevelEncryptionConfig, context);
  }
  let contents: any;
  if (input.FieldLevelEncryptionConfig !== undefined) {
    contents = serializeAws_restXmlFieldLevelEncryptionConfig(input.FieldLevelEncryptionConfig, context);
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

export const serializeAws_restXmlUpdateFieldLevelEncryptionProfileCommand = async (
  input: UpdateFieldLevelEncryptionProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/field-level-encryption-profile/{Id}/config";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body: any;
  if (input.FieldLevelEncryptionProfileConfig !== undefined) {
    body = serializeAws_restXmlFieldLevelEncryptionProfileConfig(input.FieldLevelEncryptionProfileConfig, context);
  }
  let contents: any;
  if (input.FieldLevelEncryptionProfileConfig !== undefined) {
    contents = serializeAws_restXmlFieldLevelEncryptionProfileConfig(input.FieldLevelEncryptionProfileConfig, context);
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

export const serializeAws_restXmlUpdateFunctionCommand = async (
  input: UpdateFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/function/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("UpdateFunctionRequest");
  bodyNode.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
  if (input.FunctionCode !== undefined) {
    const node = new __XmlNode("FunctionBlob")
      .addChildNode(new __XmlText(context.base64Encoder(input.FunctionCode)))
      .withName("FunctionCode");
    bodyNode.addChildNode(node);
  }
  if (input.FunctionConfig !== undefined) {
    const node = serializeAws_restXmlFunctionConfig(input.FunctionConfig, context).withName("FunctionConfig");
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

export const serializeAws_restXmlUpdateKeyGroupCommand = async (
  input: UpdateKeyGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/key-group/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body: any;
  if (input.KeyGroupConfig !== undefined) {
    body = serializeAws_restXmlKeyGroupConfig(input.KeyGroupConfig, context);
  }
  let contents: any;
  if (input.KeyGroupConfig !== undefined) {
    contents = serializeAws_restXmlKeyGroupConfig(input.KeyGroupConfig, context);
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

export const serializeAws_restXmlUpdateOriginRequestPolicyCommand = async (
  input: UpdateOriginRequestPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/origin-request-policy/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body: any;
  if (input.OriginRequestPolicyConfig !== undefined) {
    body = serializeAws_restXmlOriginRequestPolicyConfig(input.OriginRequestPolicyConfig, context);
  }
  let contents: any;
  if (input.OriginRequestPolicyConfig !== undefined) {
    contents = serializeAws_restXmlOriginRequestPolicyConfig(input.OriginRequestPolicyConfig, context);
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

export const serializeAws_restXmlUpdatePublicKeyCommand = async (
  input: UpdatePublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/public-key/{Id}/config";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body: any;
  if (input.PublicKeyConfig !== undefined) {
    body = serializeAws_restXmlPublicKeyConfig(input.PublicKeyConfig, context);
  }
  let contents: any;
  if (input.PublicKeyConfig !== undefined) {
    contents = serializeAws_restXmlPublicKeyConfig(input.PublicKeyConfig, context);
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

export const serializeAws_restXmlUpdateRealtimeLogConfigCommand = async (
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
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.ARN)).withName("ARN");
    bodyNode.addChildNode(node);
  }
  if (input.EndPoints !== undefined) {
    const nodes = serializeAws_restXmlEndPointList(input.EndPoints, context);
    const containerNode = new __XmlNode("EndPoints");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.Fields !== undefined) {
    const nodes = serializeAws_restXmlFieldList(input.Fields, context);
    const containerNode = new __XmlNode("Fields");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.Name !== undefined) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.Name)).withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.SamplingRate !== undefined) {
    const node = new __XmlNode("long").addChildNode(new __XmlText(String(input.SamplingRate))).withName("SamplingRate");
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

export const serializeAws_restXmlUpdateResponseHeadersPolicyCommand = async (
  input: UpdateResponseHeadersPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/response-headers-policy/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body: any;
  if (input.ResponseHeadersPolicyConfig !== undefined) {
    body = serializeAws_restXmlResponseHeadersPolicyConfig(input.ResponseHeadersPolicyConfig, context);
  }
  let contents: any;
  if (input.ResponseHeadersPolicyConfig !== undefined) {
    contents = serializeAws_restXmlResponseHeadersPolicyConfig(input.ResponseHeadersPolicyConfig, context);
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

export const serializeAws_restXmlUpdateStreamingDistributionCommand = async (
  input: UpdateStreamingDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
    ...(isSerializableHeaderValue(input.IfMatch) && { "if-match": input.IfMatch! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-05-31/streaming-distribution/{Id}/config";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body: any;
  if (input.StreamingDistributionConfig !== undefined) {
    body = serializeAws_restXmlStreamingDistributionConfig(input.StreamingDistributionConfig, context);
  }
  let contents: any;
  if (input.StreamingDistributionConfig !== undefined) {
    contents = serializeAws_restXmlStreamingDistributionConfig(input.StreamingDistributionConfig, context);
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

export const deserializeAws_restXmlAssociateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlAssociateAliasCommandError(output, context);
  }
  const contents: AssociateAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlAssociateAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "IllegalUpdate":
    case "com.amazonaws.cloudfront#IllegalUpdate":
      throw await deserializeAws_restXmlIllegalUpdateResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "NoSuchDistribution":
    case "com.amazonaws.cloudfront#NoSuchDistribution":
      throw await deserializeAws_restXmlNoSuchDistributionResponse(parsedOutput, context);
    case "TooManyDistributionCNAMEs":
    case "com.amazonaws.cloudfront#TooManyDistributionCNAMEs":
      throw await deserializeAws_restXmlTooManyDistributionCNAMEsResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlCreateCachePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCachePolicyCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateCachePolicyCommandError(output, context);
  }
  const contents: CreateCachePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    CachePolicy: undefined,
    ETag: undefined,
    Location: undefined,
  };
  if (output.headers["location"] !== undefined) {
    contents.Location = output.headers["location"];
  }
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CachePolicy = deserializeAws_restXmlCachePolicy(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlCreateCachePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCachePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "CachePolicyAlreadyExists":
    case "com.amazonaws.cloudfront#CachePolicyAlreadyExists":
      throw await deserializeAws_restXmlCachePolicyAlreadyExistsResponse(parsedOutput, context);
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "TooManyCachePolicies":
    case "com.amazonaws.cloudfront#TooManyCachePolicies":
      throw await deserializeAws_restXmlTooManyCachePoliciesResponse(parsedOutput, context);
    case "TooManyCookiesInCachePolicy":
    case "com.amazonaws.cloudfront#TooManyCookiesInCachePolicy":
      throw await deserializeAws_restXmlTooManyCookiesInCachePolicyResponse(parsedOutput, context);
    case "TooManyHeadersInCachePolicy":
    case "com.amazonaws.cloudfront#TooManyHeadersInCachePolicy":
      throw await deserializeAws_restXmlTooManyHeadersInCachePolicyResponse(parsedOutput, context);
    case "TooManyQueryStringsInCachePolicy":
    case "com.amazonaws.cloudfront#TooManyQueryStringsInCachePolicy":
      throw await deserializeAws_restXmlTooManyQueryStringsInCachePolicyResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlCreateCloudFrontOriginAccessIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCloudFrontOriginAccessIdentityCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateCloudFrontOriginAccessIdentityCommandError(output, context);
  }
  const contents: CreateCloudFrontOriginAccessIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
    CloudFrontOriginAccessIdentity: undefined,
    ETag: undefined,
    Location: undefined,
  };
  if (output.headers["location"] !== undefined) {
    contents.Location = output.headers["location"];
  }
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CloudFrontOriginAccessIdentity = deserializeAws_restXmlCloudFrontOriginAccessIdentity(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlCreateCloudFrontOriginAccessIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCloudFrontOriginAccessIdentityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudFrontOriginAccessIdentityAlreadyExists":
    case "com.amazonaws.cloudfront#CloudFrontOriginAccessIdentityAlreadyExists":
      throw await deserializeAws_restXmlCloudFrontOriginAccessIdentityAlreadyExistsResponse(parsedOutput, context);
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "MissingBody":
    case "com.amazonaws.cloudfront#MissingBody":
      throw await deserializeAws_restXmlMissingBodyResponse(parsedOutput, context);
    case "TooManyCloudFrontOriginAccessIdentities":
    case "com.amazonaws.cloudfront#TooManyCloudFrontOriginAccessIdentities":
      throw await deserializeAws_restXmlTooManyCloudFrontOriginAccessIdentitiesResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlCreateDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDistributionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateDistributionCommandError(output, context);
  }
  const contents: CreateDistributionCommandOutput = {
    $metadata: deserializeMetadata(output),
    Distribution: undefined,
    ETag: undefined,
    Location: undefined,
  };
  if (output.headers["location"] !== undefined) {
    contents.Location = output.headers["location"];
  }
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.Distribution = deserializeAws_restXmlDistribution(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlCreateDistributionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDistributionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "CNAMEAlreadyExists":
    case "com.amazonaws.cloudfront#CNAMEAlreadyExists":
      throw await deserializeAws_restXmlCNAMEAlreadyExistsResponse(parsedOutput, context);
    case "DistributionAlreadyExists":
    case "com.amazonaws.cloudfront#DistributionAlreadyExists":
      throw await deserializeAws_restXmlDistributionAlreadyExistsResponse(parsedOutput, context);
    case "IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
    case "com.amazonaws.cloudfront#IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
      throw await deserializeAws_restXmlIllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorResponse(
        parsedOutput,
        context
      );
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "InvalidDefaultRootObject":
    case "com.amazonaws.cloudfront#InvalidDefaultRootObject":
      throw await deserializeAws_restXmlInvalidDefaultRootObjectResponse(parsedOutput, context);
    case "InvalidErrorCode":
    case "com.amazonaws.cloudfront#InvalidErrorCode":
      throw await deserializeAws_restXmlInvalidErrorCodeResponse(parsedOutput, context);
    case "InvalidForwardCookies":
    case "com.amazonaws.cloudfront#InvalidForwardCookies":
      throw await deserializeAws_restXmlInvalidForwardCookiesResponse(parsedOutput, context);
    case "InvalidFunctionAssociation":
    case "com.amazonaws.cloudfront#InvalidFunctionAssociation":
      throw await deserializeAws_restXmlInvalidFunctionAssociationResponse(parsedOutput, context);
    case "InvalidGeoRestrictionParameter":
    case "com.amazonaws.cloudfront#InvalidGeoRestrictionParameter":
      throw await deserializeAws_restXmlInvalidGeoRestrictionParameterResponse(parsedOutput, context);
    case "InvalidHeadersForS3Origin":
    case "com.amazonaws.cloudfront#InvalidHeadersForS3Origin":
      throw await deserializeAws_restXmlInvalidHeadersForS3OriginResponse(parsedOutput, context);
    case "InvalidLambdaFunctionAssociation":
    case "com.amazonaws.cloudfront#InvalidLambdaFunctionAssociation":
      throw await deserializeAws_restXmlInvalidLambdaFunctionAssociationResponse(parsedOutput, context);
    case "InvalidLocationCode":
    case "com.amazonaws.cloudfront#InvalidLocationCode":
      throw await deserializeAws_restXmlInvalidLocationCodeResponse(parsedOutput, context);
    case "InvalidMinimumProtocolVersion":
    case "com.amazonaws.cloudfront#InvalidMinimumProtocolVersion":
      throw await deserializeAws_restXmlInvalidMinimumProtocolVersionResponse(parsedOutput, context);
    case "InvalidOrigin":
    case "com.amazonaws.cloudfront#InvalidOrigin":
      throw await deserializeAws_restXmlInvalidOriginResponse(parsedOutput, context);
    case "InvalidOriginAccessIdentity":
    case "com.amazonaws.cloudfront#InvalidOriginAccessIdentity":
      throw await deserializeAws_restXmlInvalidOriginAccessIdentityResponse(parsedOutput, context);
    case "InvalidOriginKeepaliveTimeout":
    case "com.amazonaws.cloudfront#InvalidOriginKeepaliveTimeout":
      throw await deserializeAws_restXmlInvalidOriginKeepaliveTimeoutResponse(parsedOutput, context);
    case "InvalidOriginReadTimeout":
    case "com.amazonaws.cloudfront#InvalidOriginReadTimeout":
      throw await deserializeAws_restXmlInvalidOriginReadTimeoutResponse(parsedOutput, context);
    case "InvalidProtocolSettings":
    case "com.amazonaws.cloudfront#InvalidProtocolSettings":
      throw await deserializeAws_restXmlInvalidProtocolSettingsResponse(parsedOutput, context);
    case "InvalidQueryStringParameters":
    case "com.amazonaws.cloudfront#InvalidQueryStringParameters":
      throw await deserializeAws_restXmlInvalidQueryStringParametersResponse(parsedOutput, context);
    case "InvalidRelativePath":
    case "com.amazonaws.cloudfront#InvalidRelativePath":
      throw await deserializeAws_restXmlInvalidRelativePathResponse(parsedOutput, context);
    case "InvalidRequiredProtocol":
    case "com.amazonaws.cloudfront#InvalidRequiredProtocol":
      throw await deserializeAws_restXmlInvalidRequiredProtocolResponse(parsedOutput, context);
    case "InvalidResponseCode":
    case "com.amazonaws.cloudfront#InvalidResponseCode":
      throw await deserializeAws_restXmlInvalidResponseCodeResponse(parsedOutput, context);
    case "InvalidTTLOrder":
    case "com.amazonaws.cloudfront#InvalidTTLOrder":
      throw await deserializeAws_restXmlInvalidTTLOrderResponse(parsedOutput, context);
    case "InvalidViewerCertificate":
    case "com.amazonaws.cloudfront#InvalidViewerCertificate":
      throw await deserializeAws_restXmlInvalidViewerCertificateResponse(parsedOutput, context);
    case "InvalidWebACLId":
    case "com.amazonaws.cloudfront#InvalidWebACLId":
      throw await deserializeAws_restXmlInvalidWebACLIdResponse(parsedOutput, context);
    case "MissingBody":
    case "com.amazonaws.cloudfront#MissingBody":
      throw await deserializeAws_restXmlMissingBodyResponse(parsedOutput, context);
    case "NoSuchCachePolicy":
    case "com.amazonaws.cloudfront#NoSuchCachePolicy":
      throw await deserializeAws_restXmlNoSuchCachePolicyResponse(parsedOutput, context);
    case "NoSuchFieldLevelEncryptionConfig":
    case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionConfig":
      throw await deserializeAws_restXmlNoSuchFieldLevelEncryptionConfigResponse(parsedOutput, context);
    case "NoSuchOrigin":
    case "com.amazonaws.cloudfront#NoSuchOrigin":
      throw await deserializeAws_restXmlNoSuchOriginResponse(parsedOutput, context);
    case "NoSuchOriginRequestPolicy":
    case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
      throw await deserializeAws_restXmlNoSuchOriginRequestPolicyResponse(parsedOutput, context);
    case "NoSuchRealtimeLogConfig":
    case "com.amazonaws.cloudfront#NoSuchRealtimeLogConfig":
      throw await deserializeAws_restXmlNoSuchRealtimeLogConfigResponse(parsedOutput, context);
    case "NoSuchResponseHeadersPolicy":
    case "com.amazonaws.cloudfront#NoSuchResponseHeadersPolicy":
      throw await deserializeAws_restXmlNoSuchResponseHeadersPolicyResponse(parsedOutput, context);
    case "RealtimeLogConfigOwnerMismatch":
    case "com.amazonaws.cloudfront#RealtimeLogConfigOwnerMismatch":
      throw await deserializeAws_restXmlRealtimeLogConfigOwnerMismatchResponse(parsedOutput, context);
    case "TooManyCacheBehaviors":
    case "com.amazonaws.cloudfront#TooManyCacheBehaviors":
      throw await deserializeAws_restXmlTooManyCacheBehaviorsResponse(parsedOutput, context);
    case "TooManyCertificates":
    case "com.amazonaws.cloudfront#TooManyCertificates":
      throw await deserializeAws_restXmlTooManyCertificatesResponse(parsedOutput, context);
    case "TooManyCookieNamesInWhiteList":
    case "com.amazonaws.cloudfront#TooManyCookieNamesInWhiteList":
      throw await deserializeAws_restXmlTooManyCookieNamesInWhiteListResponse(parsedOutput, context);
    case "TooManyDistributionCNAMEs":
    case "com.amazonaws.cloudfront#TooManyDistributionCNAMEs":
      throw await deserializeAws_restXmlTooManyDistributionCNAMEsResponse(parsedOutput, context);
    case "TooManyDistributions":
    case "com.amazonaws.cloudfront#TooManyDistributions":
      throw await deserializeAws_restXmlTooManyDistributionsResponse(parsedOutput, context);
    case "TooManyDistributionsAssociatedToCachePolicy":
    case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToCachePolicy":
      throw await deserializeAws_restXmlTooManyDistributionsAssociatedToCachePolicyResponse(parsedOutput, context);
    case "TooManyDistributionsAssociatedToFieldLevelEncryptionConfig":
    case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToFieldLevelEncryptionConfig":
      throw await deserializeAws_restXmlTooManyDistributionsAssociatedToFieldLevelEncryptionConfigResponse(
        parsedOutput,
        context
      );
    case "TooManyDistributionsAssociatedToKeyGroup":
    case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToKeyGroup":
      throw await deserializeAws_restXmlTooManyDistributionsAssociatedToKeyGroupResponse(parsedOutput, context);
    case "TooManyDistributionsAssociatedToOriginRequestPolicy":
    case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToOriginRequestPolicy":
      throw await deserializeAws_restXmlTooManyDistributionsAssociatedToOriginRequestPolicyResponse(
        parsedOutput,
        context
      );
    case "TooManyDistributionsAssociatedToResponseHeadersPolicy":
    case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToResponseHeadersPolicy":
      throw await deserializeAws_restXmlTooManyDistributionsAssociatedToResponseHeadersPolicyResponse(
        parsedOutput,
        context
      );
    case "TooManyDistributionsWithFunctionAssociations":
    case "com.amazonaws.cloudfront#TooManyDistributionsWithFunctionAssociations":
      throw await deserializeAws_restXmlTooManyDistributionsWithFunctionAssociationsResponse(parsedOutput, context);
    case "TooManyDistributionsWithLambdaAssociations":
    case "com.amazonaws.cloudfront#TooManyDistributionsWithLambdaAssociations":
      throw await deserializeAws_restXmlTooManyDistributionsWithLambdaAssociationsResponse(parsedOutput, context);
    case "TooManyDistributionsWithSingleFunctionARN":
    case "com.amazonaws.cloudfront#TooManyDistributionsWithSingleFunctionARN":
      throw await deserializeAws_restXmlTooManyDistributionsWithSingleFunctionARNResponse(parsedOutput, context);
    case "TooManyFunctionAssociations":
    case "com.amazonaws.cloudfront#TooManyFunctionAssociations":
      throw await deserializeAws_restXmlTooManyFunctionAssociationsResponse(parsedOutput, context);
    case "TooManyHeadersInForwardedValues":
    case "com.amazonaws.cloudfront#TooManyHeadersInForwardedValues":
      throw await deserializeAws_restXmlTooManyHeadersInForwardedValuesResponse(parsedOutput, context);
    case "TooManyKeyGroupsAssociatedToDistribution":
    case "com.amazonaws.cloudfront#TooManyKeyGroupsAssociatedToDistribution":
      throw await deserializeAws_restXmlTooManyKeyGroupsAssociatedToDistributionResponse(parsedOutput, context);
    case "TooManyLambdaFunctionAssociations":
    case "com.amazonaws.cloudfront#TooManyLambdaFunctionAssociations":
      throw await deserializeAws_restXmlTooManyLambdaFunctionAssociationsResponse(parsedOutput, context);
    case "TooManyOriginCustomHeaders":
    case "com.amazonaws.cloudfront#TooManyOriginCustomHeaders":
      throw await deserializeAws_restXmlTooManyOriginCustomHeadersResponse(parsedOutput, context);
    case "TooManyOriginGroupsPerDistribution":
    case "com.amazonaws.cloudfront#TooManyOriginGroupsPerDistribution":
      throw await deserializeAws_restXmlTooManyOriginGroupsPerDistributionResponse(parsedOutput, context);
    case "TooManyOrigins":
    case "com.amazonaws.cloudfront#TooManyOrigins":
      throw await deserializeAws_restXmlTooManyOriginsResponse(parsedOutput, context);
    case "TooManyQueryStringParameters":
    case "com.amazonaws.cloudfront#TooManyQueryStringParameters":
      throw await deserializeAws_restXmlTooManyQueryStringParametersResponse(parsedOutput, context);
    case "TooManyTrustedSigners":
    case "com.amazonaws.cloudfront#TooManyTrustedSigners":
      throw await deserializeAws_restXmlTooManyTrustedSignersResponse(parsedOutput, context);
    case "TrustedKeyGroupDoesNotExist":
    case "com.amazonaws.cloudfront#TrustedKeyGroupDoesNotExist":
      throw await deserializeAws_restXmlTrustedKeyGroupDoesNotExistResponse(parsedOutput, context);
    case "TrustedSignerDoesNotExist":
    case "com.amazonaws.cloudfront#TrustedSignerDoesNotExist":
      throw await deserializeAws_restXmlTrustedSignerDoesNotExistResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlCreateDistributionWithTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDistributionWithTagsCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateDistributionWithTagsCommandError(output, context);
  }
  const contents: CreateDistributionWithTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Distribution: undefined,
    ETag: undefined,
    Location: undefined,
  };
  if (output.headers["location"] !== undefined) {
    contents.Location = output.headers["location"];
  }
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.Distribution = deserializeAws_restXmlDistribution(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlCreateDistributionWithTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDistributionWithTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "CNAMEAlreadyExists":
    case "com.amazonaws.cloudfront#CNAMEAlreadyExists":
      throw await deserializeAws_restXmlCNAMEAlreadyExistsResponse(parsedOutput, context);
    case "DistributionAlreadyExists":
    case "com.amazonaws.cloudfront#DistributionAlreadyExists":
      throw await deserializeAws_restXmlDistributionAlreadyExistsResponse(parsedOutput, context);
    case "IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
    case "com.amazonaws.cloudfront#IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
      throw await deserializeAws_restXmlIllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorResponse(
        parsedOutput,
        context
      );
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "InvalidDefaultRootObject":
    case "com.amazonaws.cloudfront#InvalidDefaultRootObject":
      throw await deserializeAws_restXmlInvalidDefaultRootObjectResponse(parsedOutput, context);
    case "InvalidErrorCode":
    case "com.amazonaws.cloudfront#InvalidErrorCode":
      throw await deserializeAws_restXmlInvalidErrorCodeResponse(parsedOutput, context);
    case "InvalidForwardCookies":
    case "com.amazonaws.cloudfront#InvalidForwardCookies":
      throw await deserializeAws_restXmlInvalidForwardCookiesResponse(parsedOutput, context);
    case "InvalidFunctionAssociation":
    case "com.amazonaws.cloudfront#InvalidFunctionAssociation":
      throw await deserializeAws_restXmlInvalidFunctionAssociationResponse(parsedOutput, context);
    case "InvalidGeoRestrictionParameter":
    case "com.amazonaws.cloudfront#InvalidGeoRestrictionParameter":
      throw await deserializeAws_restXmlInvalidGeoRestrictionParameterResponse(parsedOutput, context);
    case "InvalidHeadersForS3Origin":
    case "com.amazonaws.cloudfront#InvalidHeadersForS3Origin":
      throw await deserializeAws_restXmlInvalidHeadersForS3OriginResponse(parsedOutput, context);
    case "InvalidLambdaFunctionAssociation":
    case "com.amazonaws.cloudfront#InvalidLambdaFunctionAssociation":
      throw await deserializeAws_restXmlInvalidLambdaFunctionAssociationResponse(parsedOutput, context);
    case "InvalidLocationCode":
    case "com.amazonaws.cloudfront#InvalidLocationCode":
      throw await deserializeAws_restXmlInvalidLocationCodeResponse(parsedOutput, context);
    case "InvalidMinimumProtocolVersion":
    case "com.amazonaws.cloudfront#InvalidMinimumProtocolVersion":
      throw await deserializeAws_restXmlInvalidMinimumProtocolVersionResponse(parsedOutput, context);
    case "InvalidOrigin":
    case "com.amazonaws.cloudfront#InvalidOrigin":
      throw await deserializeAws_restXmlInvalidOriginResponse(parsedOutput, context);
    case "InvalidOriginAccessIdentity":
    case "com.amazonaws.cloudfront#InvalidOriginAccessIdentity":
      throw await deserializeAws_restXmlInvalidOriginAccessIdentityResponse(parsedOutput, context);
    case "InvalidOriginKeepaliveTimeout":
    case "com.amazonaws.cloudfront#InvalidOriginKeepaliveTimeout":
      throw await deserializeAws_restXmlInvalidOriginKeepaliveTimeoutResponse(parsedOutput, context);
    case "InvalidOriginReadTimeout":
    case "com.amazonaws.cloudfront#InvalidOriginReadTimeout":
      throw await deserializeAws_restXmlInvalidOriginReadTimeoutResponse(parsedOutput, context);
    case "InvalidProtocolSettings":
    case "com.amazonaws.cloudfront#InvalidProtocolSettings":
      throw await deserializeAws_restXmlInvalidProtocolSettingsResponse(parsedOutput, context);
    case "InvalidQueryStringParameters":
    case "com.amazonaws.cloudfront#InvalidQueryStringParameters":
      throw await deserializeAws_restXmlInvalidQueryStringParametersResponse(parsedOutput, context);
    case "InvalidRelativePath":
    case "com.amazonaws.cloudfront#InvalidRelativePath":
      throw await deserializeAws_restXmlInvalidRelativePathResponse(parsedOutput, context);
    case "InvalidRequiredProtocol":
    case "com.amazonaws.cloudfront#InvalidRequiredProtocol":
      throw await deserializeAws_restXmlInvalidRequiredProtocolResponse(parsedOutput, context);
    case "InvalidResponseCode":
    case "com.amazonaws.cloudfront#InvalidResponseCode":
      throw await deserializeAws_restXmlInvalidResponseCodeResponse(parsedOutput, context);
    case "InvalidTagging":
    case "com.amazonaws.cloudfront#InvalidTagging":
      throw await deserializeAws_restXmlInvalidTaggingResponse(parsedOutput, context);
    case "InvalidTTLOrder":
    case "com.amazonaws.cloudfront#InvalidTTLOrder":
      throw await deserializeAws_restXmlInvalidTTLOrderResponse(parsedOutput, context);
    case "InvalidViewerCertificate":
    case "com.amazonaws.cloudfront#InvalidViewerCertificate":
      throw await deserializeAws_restXmlInvalidViewerCertificateResponse(parsedOutput, context);
    case "InvalidWebACLId":
    case "com.amazonaws.cloudfront#InvalidWebACLId":
      throw await deserializeAws_restXmlInvalidWebACLIdResponse(parsedOutput, context);
    case "MissingBody":
    case "com.amazonaws.cloudfront#MissingBody":
      throw await deserializeAws_restXmlMissingBodyResponse(parsedOutput, context);
    case "NoSuchCachePolicy":
    case "com.amazonaws.cloudfront#NoSuchCachePolicy":
      throw await deserializeAws_restXmlNoSuchCachePolicyResponse(parsedOutput, context);
    case "NoSuchFieldLevelEncryptionConfig":
    case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionConfig":
      throw await deserializeAws_restXmlNoSuchFieldLevelEncryptionConfigResponse(parsedOutput, context);
    case "NoSuchOrigin":
    case "com.amazonaws.cloudfront#NoSuchOrigin":
      throw await deserializeAws_restXmlNoSuchOriginResponse(parsedOutput, context);
    case "NoSuchOriginRequestPolicy":
    case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
      throw await deserializeAws_restXmlNoSuchOriginRequestPolicyResponse(parsedOutput, context);
    case "NoSuchRealtimeLogConfig":
    case "com.amazonaws.cloudfront#NoSuchRealtimeLogConfig":
      throw await deserializeAws_restXmlNoSuchRealtimeLogConfigResponse(parsedOutput, context);
    case "NoSuchResponseHeadersPolicy":
    case "com.amazonaws.cloudfront#NoSuchResponseHeadersPolicy":
      throw await deserializeAws_restXmlNoSuchResponseHeadersPolicyResponse(parsedOutput, context);
    case "RealtimeLogConfigOwnerMismatch":
    case "com.amazonaws.cloudfront#RealtimeLogConfigOwnerMismatch":
      throw await deserializeAws_restXmlRealtimeLogConfigOwnerMismatchResponse(parsedOutput, context);
    case "TooManyCacheBehaviors":
    case "com.amazonaws.cloudfront#TooManyCacheBehaviors":
      throw await deserializeAws_restXmlTooManyCacheBehaviorsResponse(parsedOutput, context);
    case "TooManyCertificates":
    case "com.amazonaws.cloudfront#TooManyCertificates":
      throw await deserializeAws_restXmlTooManyCertificatesResponse(parsedOutput, context);
    case "TooManyCookieNamesInWhiteList":
    case "com.amazonaws.cloudfront#TooManyCookieNamesInWhiteList":
      throw await deserializeAws_restXmlTooManyCookieNamesInWhiteListResponse(parsedOutput, context);
    case "TooManyDistributionCNAMEs":
    case "com.amazonaws.cloudfront#TooManyDistributionCNAMEs":
      throw await deserializeAws_restXmlTooManyDistributionCNAMEsResponse(parsedOutput, context);
    case "TooManyDistributions":
    case "com.amazonaws.cloudfront#TooManyDistributions":
      throw await deserializeAws_restXmlTooManyDistributionsResponse(parsedOutput, context);
    case "TooManyDistributionsAssociatedToCachePolicy":
    case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToCachePolicy":
      throw await deserializeAws_restXmlTooManyDistributionsAssociatedToCachePolicyResponse(parsedOutput, context);
    case "TooManyDistributionsAssociatedToFieldLevelEncryptionConfig":
    case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToFieldLevelEncryptionConfig":
      throw await deserializeAws_restXmlTooManyDistributionsAssociatedToFieldLevelEncryptionConfigResponse(
        parsedOutput,
        context
      );
    case "TooManyDistributionsAssociatedToKeyGroup":
    case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToKeyGroup":
      throw await deserializeAws_restXmlTooManyDistributionsAssociatedToKeyGroupResponse(parsedOutput, context);
    case "TooManyDistributionsAssociatedToOriginRequestPolicy":
    case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToOriginRequestPolicy":
      throw await deserializeAws_restXmlTooManyDistributionsAssociatedToOriginRequestPolicyResponse(
        parsedOutput,
        context
      );
    case "TooManyDistributionsAssociatedToResponseHeadersPolicy":
    case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToResponseHeadersPolicy":
      throw await deserializeAws_restXmlTooManyDistributionsAssociatedToResponseHeadersPolicyResponse(
        parsedOutput,
        context
      );
    case "TooManyDistributionsWithFunctionAssociations":
    case "com.amazonaws.cloudfront#TooManyDistributionsWithFunctionAssociations":
      throw await deserializeAws_restXmlTooManyDistributionsWithFunctionAssociationsResponse(parsedOutput, context);
    case "TooManyDistributionsWithLambdaAssociations":
    case "com.amazonaws.cloudfront#TooManyDistributionsWithLambdaAssociations":
      throw await deserializeAws_restXmlTooManyDistributionsWithLambdaAssociationsResponse(parsedOutput, context);
    case "TooManyDistributionsWithSingleFunctionARN":
    case "com.amazonaws.cloudfront#TooManyDistributionsWithSingleFunctionARN":
      throw await deserializeAws_restXmlTooManyDistributionsWithSingleFunctionARNResponse(parsedOutput, context);
    case "TooManyFunctionAssociations":
    case "com.amazonaws.cloudfront#TooManyFunctionAssociations":
      throw await deserializeAws_restXmlTooManyFunctionAssociationsResponse(parsedOutput, context);
    case "TooManyHeadersInForwardedValues":
    case "com.amazonaws.cloudfront#TooManyHeadersInForwardedValues":
      throw await deserializeAws_restXmlTooManyHeadersInForwardedValuesResponse(parsedOutput, context);
    case "TooManyKeyGroupsAssociatedToDistribution":
    case "com.amazonaws.cloudfront#TooManyKeyGroupsAssociatedToDistribution":
      throw await deserializeAws_restXmlTooManyKeyGroupsAssociatedToDistributionResponse(parsedOutput, context);
    case "TooManyLambdaFunctionAssociations":
    case "com.amazonaws.cloudfront#TooManyLambdaFunctionAssociations":
      throw await deserializeAws_restXmlTooManyLambdaFunctionAssociationsResponse(parsedOutput, context);
    case "TooManyOriginCustomHeaders":
    case "com.amazonaws.cloudfront#TooManyOriginCustomHeaders":
      throw await deserializeAws_restXmlTooManyOriginCustomHeadersResponse(parsedOutput, context);
    case "TooManyOriginGroupsPerDistribution":
    case "com.amazonaws.cloudfront#TooManyOriginGroupsPerDistribution":
      throw await deserializeAws_restXmlTooManyOriginGroupsPerDistributionResponse(parsedOutput, context);
    case "TooManyOrigins":
    case "com.amazonaws.cloudfront#TooManyOrigins":
      throw await deserializeAws_restXmlTooManyOriginsResponse(parsedOutput, context);
    case "TooManyQueryStringParameters":
    case "com.amazonaws.cloudfront#TooManyQueryStringParameters":
      throw await deserializeAws_restXmlTooManyQueryStringParametersResponse(parsedOutput, context);
    case "TooManyTrustedSigners":
    case "com.amazonaws.cloudfront#TooManyTrustedSigners":
      throw await deserializeAws_restXmlTooManyTrustedSignersResponse(parsedOutput, context);
    case "TrustedKeyGroupDoesNotExist":
    case "com.amazonaws.cloudfront#TrustedKeyGroupDoesNotExist":
      throw await deserializeAws_restXmlTrustedKeyGroupDoesNotExistResponse(parsedOutput, context);
    case "TrustedSignerDoesNotExist":
    case "com.amazonaws.cloudfront#TrustedSignerDoesNotExist":
      throw await deserializeAws_restXmlTrustedSignerDoesNotExistResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlCreateFieldLevelEncryptionConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFieldLevelEncryptionConfigCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateFieldLevelEncryptionConfigCommandError(output, context);
  }
  const contents: CreateFieldLevelEncryptionConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    FieldLevelEncryption: undefined,
    Location: undefined,
  };
  if (output.headers["location"] !== undefined) {
    contents.Location = output.headers["location"];
  }
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FieldLevelEncryption = deserializeAws_restXmlFieldLevelEncryption(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlCreateFieldLevelEncryptionConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFieldLevelEncryptionConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "FieldLevelEncryptionConfigAlreadyExists":
    case "com.amazonaws.cloudfront#FieldLevelEncryptionConfigAlreadyExists":
      throw await deserializeAws_restXmlFieldLevelEncryptionConfigAlreadyExistsResponse(parsedOutput, context);
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "NoSuchFieldLevelEncryptionProfile":
    case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionProfile":
      throw await deserializeAws_restXmlNoSuchFieldLevelEncryptionProfileResponse(parsedOutput, context);
    case "QueryArgProfileEmpty":
    case "com.amazonaws.cloudfront#QueryArgProfileEmpty":
      throw await deserializeAws_restXmlQueryArgProfileEmptyResponse(parsedOutput, context);
    case "TooManyFieldLevelEncryptionConfigs":
    case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionConfigs":
      throw await deserializeAws_restXmlTooManyFieldLevelEncryptionConfigsResponse(parsedOutput, context);
    case "TooManyFieldLevelEncryptionContentTypeProfiles":
    case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionContentTypeProfiles":
      throw await deserializeAws_restXmlTooManyFieldLevelEncryptionContentTypeProfilesResponse(parsedOutput, context);
    case "TooManyFieldLevelEncryptionQueryArgProfiles":
    case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionQueryArgProfiles":
      throw await deserializeAws_restXmlTooManyFieldLevelEncryptionQueryArgProfilesResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlCreateFieldLevelEncryptionProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFieldLevelEncryptionProfileCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateFieldLevelEncryptionProfileCommandError(output, context);
  }
  const contents: CreateFieldLevelEncryptionProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    FieldLevelEncryptionProfile: undefined,
    Location: undefined,
  };
  if (output.headers["location"] !== undefined) {
    contents.Location = output.headers["location"];
  }
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FieldLevelEncryptionProfile = deserializeAws_restXmlFieldLevelEncryptionProfile(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlCreateFieldLevelEncryptionProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFieldLevelEncryptionProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "FieldLevelEncryptionProfileAlreadyExists":
    case "com.amazonaws.cloudfront#FieldLevelEncryptionProfileAlreadyExists":
      throw await deserializeAws_restXmlFieldLevelEncryptionProfileAlreadyExistsResponse(parsedOutput, context);
    case "FieldLevelEncryptionProfileSizeExceeded":
    case "com.amazonaws.cloudfront#FieldLevelEncryptionProfileSizeExceeded":
      throw await deserializeAws_restXmlFieldLevelEncryptionProfileSizeExceededResponse(parsedOutput, context);
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "NoSuchPublicKey":
    case "com.amazonaws.cloudfront#NoSuchPublicKey":
      throw await deserializeAws_restXmlNoSuchPublicKeyResponse(parsedOutput, context);
    case "TooManyFieldLevelEncryptionEncryptionEntities":
    case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionEncryptionEntities":
      throw await deserializeAws_restXmlTooManyFieldLevelEncryptionEncryptionEntitiesResponse(parsedOutput, context);
    case "TooManyFieldLevelEncryptionFieldPatterns":
    case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionFieldPatterns":
      throw await deserializeAws_restXmlTooManyFieldLevelEncryptionFieldPatternsResponse(parsedOutput, context);
    case "TooManyFieldLevelEncryptionProfiles":
    case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionProfiles":
      throw await deserializeAws_restXmlTooManyFieldLevelEncryptionProfilesResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlCreateFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFunctionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateFunctionCommandError(output, context);
  }
  const contents: CreateFunctionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    FunctionSummary: undefined,
    Location: undefined,
  };
  if (output.headers["location"] !== undefined) {
    contents.Location = output.headers["location"];
  }
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FunctionSummary = deserializeAws_restXmlFunctionSummary(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlCreateFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "FunctionAlreadyExists":
    case "com.amazonaws.cloudfront#FunctionAlreadyExists":
      throw await deserializeAws_restXmlFunctionAlreadyExistsResponse(parsedOutput, context);
    case "FunctionSizeLimitExceeded":
    case "com.amazonaws.cloudfront#FunctionSizeLimitExceeded":
      throw await deserializeAws_restXmlFunctionSizeLimitExceededResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "TooManyFunctions":
    case "com.amazonaws.cloudfront#TooManyFunctions":
      throw await deserializeAws_restXmlTooManyFunctionsResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.cloudfront#UnsupportedOperation":
      throw await deserializeAws_restXmlUnsupportedOperationResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlCreateInvalidationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInvalidationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateInvalidationCommandError(output, context);
  }
  const contents: CreateInvalidationCommandOutput = {
    $metadata: deserializeMetadata(output),
    Invalidation: undefined,
    Location: undefined,
  };
  if (output.headers["location"] !== undefined) {
    contents.Location = output.headers["location"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.Invalidation = deserializeAws_restXmlInvalidation(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlCreateInvalidationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInvalidationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "BatchTooLarge":
    case "com.amazonaws.cloudfront#BatchTooLarge":
      throw await deserializeAws_restXmlBatchTooLargeResponse(parsedOutput, context);
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "MissingBody":
    case "com.amazonaws.cloudfront#MissingBody":
      throw await deserializeAws_restXmlMissingBodyResponse(parsedOutput, context);
    case "NoSuchDistribution":
    case "com.amazonaws.cloudfront#NoSuchDistribution":
      throw await deserializeAws_restXmlNoSuchDistributionResponse(parsedOutput, context);
    case "TooManyInvalidationsInProgress":
    case "com.amazonaws.cloudfront#TooManyInvalidationsInProgress":
      throw await deserializeAws_restXmlTooManyInvalidationsInProgressResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlCreateKeyGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKeyGroupCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateKeyGroupCommandError(output, context);
  }
  const contents: CreateKeyGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    KeyGroup: undefined,
    Location: undefined,
  };
  if (output.headers["location"] !== undefined) {
    contents.Location = output.headers["location"];
  }
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.KeyGroup = deserializeAws_restXmlKeyGroup(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlCreateKeyGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKeyGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "KeyGroupAlreadyExists":
    case "com.amazonaws.cloudfront#KeyGroupAlreadyExists":
      throw await deserializeAws_restXmlKeyGroupAlreadyExistsResponse(parsedOutput, context);
    case "TooManyKeyGroups":
    case "com.amazonaws.cloudfront#TooManyKeyGroups":
      throw await deserializeAws_restXmlTooManyKeyGroupsResponse(parsedOutput, context);
    case "TooManyPublicKeysInKeyGroup":
    case "com.amazonaws.cloudfront#TooManyPublicKeysInKeyGroup":
      throw await deserializeAws_restXmlTooManyPublicKeysInKeyGroupResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlCreateMonitoringSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMonitoringSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateMonitoringSubscriptionCommandError(output, context);
  }
  const contents: CreateMonitoringSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    MonitoringSubscription: undefined,
  };
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.MonitoringSubscription = deserializeAws_restXmlMonitoringSubscription(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlCreateMonitoringSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMonitoringSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "NoSuchDistribution":
    case "com.amazonaws.cloudfront#NoSuchDistribution":
      throw await deserializeAws_restXmlNoSuchDistributionResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.cloudfront#UnsupportedOperation":
      throw await deserializeAws_restXmlUnsupportedOperationResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlCreateOriginRequestPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOriginRequestPolicyCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateOriginRequestPolicyCommandError(output, context);
  }
  const contents: CreateOriginRequestPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    Location: undefined,
    OriginRequestPolicy: undefined,
  };
  if (output.headers["location"] !== undefined) {
    contents.Location = output.headers["location"];
  }
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.OriginRequestPolicy = deserializeAws_restXmlOriginRequestPolicy(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlCreateOriginRequestPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOriginRequestPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "OriginRequestPolicyAlreadyExists":
    case "com.amazonaws.cloudfront#OriginRequestPolicyAlreadyExists":
      throw await deserializeAws_restXmlOriginRequestPolicyAlreadyExistsResponse(parsedOutput, context);
    case "TooManyCookiesInOriginRequestPolicy":
    case "com.amazonaws.cloudfront#TooManyCookiesInOriginRequestPolicy":
      throw await deserializeAws_restXmlTooManyCookiesInOriginRequestPolicyResponse(parsedOutput, context);
    case "TooManyHeadersInOriginRequestPolicy":
    case "com.amazonaws.cloudfront#TooManyHeadersInOriginRequestPolicy":
      throw await deserializeAws_restXmlTooManyHeadersInOriginRequestPolicyResponse(parsedOutput, context);
    case "TooManyOriginRequestPolicies":
    case "com.amazonaws.cloudfront#TooManyOriginRequestPolicies":
      throw await deserializeAws_restXmlTooManyOriginRequestPoliciesResponse(parsedOutput, context);
    case "TooManyQueryStringsInOriginRequestPolicy":
    case "com.amazonaws.cloudfront#TooManyQueryStringsInOriginRequestPolicy":
      throw await deserializeAws_restXmlTooManyQueryStringsInOriginRequestPolicyResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlCreatePublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePublicKeyCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreatePublicKeyCommandError(output, context);
  }
  const contents: CreatePublicKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    Location: undefined,
    PublicKey: undefined,
  };
  if (output.headers["location"] !== undefined) {
    contents.Location = output.headers["location"];
  }
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.PublicKey = deserializeAws_restXmlPublicKey(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlCreatePublicKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePublicKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "PublicKeyAlreadyExists":
    case "com.amazonaws.cloudfront#PublicKeyAlreadyExists":
      throw await deserializeAws_restXmlPublicKeyAlreadyExistsResponse(parsedOutput, context);
    case "TooManyPublicKeys":
    case "com.amazonaws.cloudfront#TooManyPublicKeys":
      throw await deserializeAws_restXmlTooManyPublicKeysResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlCreateRealtimeLogConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRealtimeLogConfigCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateRealtimeLogConfigCommandError(output, context);
  }
  const contents: CreateRealtimeLogConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    RealtimeLogConfig: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["RealtimeLogConfig"] !== undefined) {
    contents.RealtimeLogConfig = deserializeAws_restXmlRealtimeLogConfig(data["RealtimeLogConfig"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlCreateRealtimeLogConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRealtimeLogConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "RealtimeLogConfigAlreadyExists":
    case "com.amazonaws.cloudfront#RealtimeLogConfigAlreadyExists":
      throw await deserializeAws_restXmlRealtimeLogConfigAlreadyExistsResponse(parsedOutput, context);
    case "TooManyRealtimeLogConfigs":
    case "com.amazonaws.cloudfront#TooManyRealtimeLogConfigs":
      throw await deserializeAws_restXmlTooManyRealtimeLogConfigsResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlCreateResponseHeadersPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResponseHeadersPolicyCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateResponseHeadersPolicyCommandError(output, context);
  }
  const contents: CreateResponseHeadersPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    Location: undefined,
    ResponseHeadersPolicy: undefined,
  };
  if (output.headers["location"] !== undefined) {
    contents.Location = output.headers["location"];
  }
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ResponseHeadersPolicy = deserializeAws_restXmlResponseHeadersPolicy(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlCreateResponseHeadersPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResponseHeadersPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "ResponseHeadersPolicyAlreadyExists":
    case "com.amazonaws.cloudfront#ResponseHeadersPolicyAlreadyExists":
      throw await deserializeAws_restXmlResponseHeadersPolicyAlreadyExistsResponse(parsedOutput, context);
    case "TooLongCSPInResponseHeadersPolicy":
    case "com.amazonaws.cloudfront#TooLongCSPInResponseHeadersPolicy":
      throw await deserializeAws_restXmlTooLongCSPInResponseHeadersPolicyResponse(parsedOutput, context);
    case "TooManyCustomHeadersInResponseHeadersPolicy":
    case "com.amazonaws.cloudfront#TooManyCustomHeadersInResponseHeadersPolicy":
      throw await deserializeAws_restXmlTooManyCustomHeadersInResponseHeadersPolicyResponse(parsedOutput, context);
    case "TooManyResponseHeadersPolicies":
    case "com.amazonaws.cloudfront#TooManyResponseHeadersPolicies":
      throw await deserializeAws_restXmlTooManyResponseHeadersPoliciesResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlCreateStreamingDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamingDistributionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateStreamingDistributionCommandError(output, context);
  }
  const contents: CreateStreamingDistributionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    Location: undefined,
    StreamingDistribution: undefined,
  };
  if (output.headers["location"] !== undefined) {
    contents.Location = output.headers["location"];
  }
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.StreamingDistribution = deserializeAws_restXmlStreamingDistribution(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlCreateStreamingDistributionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamingDistributionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "CNAMEAlreadyExists":
    case "com.amazonaws.cloudfront#CNAMEAlreadyExists":
      throw await deserializeAws_restXmlCNAMEAlreadyExistsResponse(parsedOutput, context);
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "InvalidOrigin":
    case "com.amazonaws.cloudfront#InvalidOrigin":
      throw await deserializeAws_restXmlInvalidOriginResponse(parsedOutput, context);
    case "InvalidOriginAccessIdentity":
    case "com.amazonaws.cloudfront#InvalidOriginAccessIdentity":
      throw await deserializeAws_restXmlInvalidOriginAccessIdentityResponse(parsedOutput, context);
    case "MissingBody":
    case "com.amazonaws.cloudfront#MissingBody":
      throw await deserializeAws_restXmlMissingBodyResponse(parsedOutput, context);
    case "StreamingDistributionAlreadyExists":
    case "com.amazonaws.cloudfront#StreamingDistributionAlreadyExists":
      throw await deserializeAws_restXmlStreamingDistributionAlreadyExistsResponse(parsedOutput, context);
    case "TooManyStreamingDistributionCNAMEs":
    case "com.amazonaws.cloudfront#TooManyStreamingDistributionCNAMEs":
      throw await deserializeAws_restXmlTooManyStreamingDistributionCNAMEsResponse(parsedOutput, context);
    case "TooManyStreamingDistributions":
    case "com.amazonaws.cloudfront#TooManyStreamingDistributions":
      throw await deserializeAws_restXmlTooManyStreamingDistributionsResponse(parsedOutput, context);
    case "TooManyTrustedSigners":
    case "com.amazonaws.cloudfront#TooManyTrustedSigners":
      throw await deserializeAws_restXmlTooManyTrustedSignersResponse(parsedOutput, context);
    case "TrustedSignerDoesNotExist":
    case "com.amazonaws.cloudfront#TrustedSignerDoesNotExist":
      throw await deserializeAws_restXmlTrustedSignerDoesNotExistResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlCreateStreamingDistributionWithTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamingDistributionWithTagsCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateStreamingDistributionWithTagsCommandError(output, context);
  }
  const contents: CreateStreamingDistributionWithTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    Location: undefined,
    StreamingDistribution: undefined,
  };
  if (output.headers["location"] !== undefined) {
    contents.Location = output.headers["location"];
  }
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.StreamingDistribution = deserializeAws_restXmlStreamingDistribution(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlCreateStreamingDistributionWithTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamingDistributionWithTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "CNAMEAlreadyExists":
    case "com.amazonaws.cloudfront#CNAMEAlreadyExists":
      throw await deserializeAws_restXmlCNAMEAlreadyExistsResponse(parsedOutput, context);
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "InvalidOrigin":
    case "com.amazonaws.cloudfront#InvalidOrigin":
      throw await deserializeAws_restXmlInvalidOriginResponse(parsedOutput, context);
    case "InvalidOriginAccessIdentity":
    case "com.amazonaws.cloudfront#InvalidOriginAccessIdentity":
      throw await deserializeAws_restXmlInvalidOriginAccessIdentityResponse(parsedOutput, context);
    case "InvalidTagging":
    case "com.amazonaws.cloudfront#InvalidTagging":
      throw await deserializeAws_restXmlInvalidTaggingResponse(parsedOutput, context);
    case "MissingBody":
    case "com.amazonaws.cloudfront#MissingBody":
      throw await deserializeAws_restXmlMissingBodyResponse(parsedOutput, context);
    case "StreamingDistributionAlreadyExists":
    case "com.amazonaws.cloudfront#StreamingDistributionAlreadyExists":
      throw await deserializeAws_restXmlStreamingDistributionAlreadyExistsResponse(parsedOutput, context);
    case "TooManyStreamingDistributionCNAMEs":
    case "com.amazonaws.cloudfront#TooManyStreamingDistributionCNAMEs":
      throw await deserializeAws_restXmlTooManyStreamingDistributionCNAMEsResponse(parsedOutput, context);
    case "TooManyStreamingDistributions":
    case "com.amazonaws.cloudfront#TooManyStreamingDistributions":
      throw await deserializeAws_restXmlTooManyStreamingDistributionsResponse(parsedOutput, context);
    case "TooManyTrustedSigners":
    case "com.amazonaws.cloudfront#TooManyTrustedSigners":
      throw await deserializeAws_restXmlTooManyTrustedSignersResponse(parsedOutput, context);
    case "TrustedSignerDoesNotExist":
    case "com.amazonaws.cloudfront#TrustedSignerDoesNotExist":
      throw await deserializeAws_restXmlTrustedSignerDoesNotExistResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlDeleteCachePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCachePolicyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteCachePolicyCommandError(output, context);
  }
  const contents: DeleteCachePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteCachePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCachePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "CachePolicyInUse":
    case "com.amazonaws.cloudfront#CachePolicyInUse":
      throw await deserializeAws_restXmlCachePolicyInUseResponse(parsedOutput, context);
    case "IllegalDelete":
    case "com.amazonaws.cloudfront#IllegalDelete":
      throw await deserializeAws_restXmlIllegalDeleteResponse(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context);
    case "NoSuchCachePolicy":
    case "com.amazonaws.cloudfront#NoSuchCachePolicy":
      throw await deserializeAws_restXmlNoSuchCachePolicyResponse(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlDeleteCloudFrontOriginAccessIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCloudFrontOriginAccessIdentityCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteCloudFrontOriginAccessIdentityCommandError(output, context);
  }
  const contents: DeleteCloudFrontOriginAccessIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteCloudFrontOriginAccessIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCloudFrontOriginAccessIdentityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "CloudFrontOriginAccessIdentityInUse":
    case "com.amazonaws.cloudfront#CloudFrontOriginAccessIdentityInUse":
      throw await deserializeAws_restXmlCloudFrontOriginAccessIdentityInUseResponse(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context);
    case "NoSuchCloudFrontOriginAccessIdentity":
    case "com.amazonaws.cloudfront#NoSuchCloudFrontOriginAccessIdentity":
      throw await deserializeAws_restXmlNoSuchCloudFrontOriginAccessIdentityResponse(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlDeleteDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDistributionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteDistributionCommandError(output, context);
  }
  const contents: DeleteDistributionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteDistributionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDistributionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "DistributionNotDisabled":
    case "com.amazonaws.cloudfront#DistributionNotDisabled":
      throw await deserializeAws_restXmlDistributionNotDisabledResponse(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context);
    case "NoSuchDistribution":
    case "com.amazonaws.cloudfront#NoSuchDistribution":
      throw await deserializeAws_restXmlNoSuchDistributionResponse(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlDeleteFieldLevelEncryptionConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFieldLevelEncryptionConfigCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteFieldLevelEncryptionConfigCommandError(output, context);
  }
  const contents: DeleteFieldLevelEncryptionConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteFieldLevelEncryptionConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFieldLevelEncryptionConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "FieldLevelEncryptionConfigInUse":
    case "com.amazonaws.cloudfront#FieldLevelEncryptionConfigInUse":
      throw await deserializeAws_restXmlFieldLevelEncryptionConfigInUseResponse(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context);
    case "NoSuchFieldLevelEncryptionConfig":
    case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionConfig":
      throw await deserializeAws_restXmlNoSuchFieldLevelEncryptionConfigResponse(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlDeleteFieldLevelEncryptionProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFieldLevelEncryptionProfileCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteFieldLevelEncryptionProfileCommandError(output, context);
  }
  const contents: DeleteFieldLevelEncryptionProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteFieldLevelEncryptionProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFieldLevelEncryptionProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "FieldLevelEncryptionProfileInUse":
    case "com.amazonaws.cloudfront#FieldLevelEncryptionProfileInUse":
      throw await deserializeAws_restXmlFieldLevelEncryptionProfileInUseResponse(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context);
    case "NoSuchFieldLevelEncryptionProfile":
    case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionProfile":
      throw await deserializeAws_restXmlNoSuchFieldLevelEncryptionProfileResponse(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlDeleteFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteFunctionCommandError(output, context);
  }
  const contents: DeleteFunctionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "FunctionInUse":
    case "com.amazonaws.cloudfront#FunctionInUse":
      throw await deserializeAws_restXmlFunctionInUseResponse(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context);
    case "NoSuchFunctionExists":
    case "com.amazonaws.cloudfront#NoSuchFunctionExists":
      throw await deserializeAws_restXmlNoSuchFunctionExistsResponse(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.cloudfront#UnsupportedOperation":
      throw await deserializeAws_restXmlUnsupportedOperationResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlDeleteKeyGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKeyGroupCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteKeyGroupCommandError(output, context);
  }
  const contents: DeleteKeyGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteKeyGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKeyGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context);
    case "NoSuchResource":
    case "com.amazonaws.cloudfront#NoSuchResource":
      throw await deserializeAws_restXmlNoSuchResourceResponse(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context);
    case "ResourceInUse":
    case "com.amazonaws.cloudfront#ResourceInUse":
      throw await deserializeAws_restXmlResourceInUseResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlDeleteMonitoringSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMonitoringSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteMonitoringSubscriptionCommandError(output, context);
  }
  const contents: DeleteMonitoringSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteMonitoringSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMonitoringSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "NoSuchDistribution":
    case "com.amazonaws.cloudfront#NoSuchDistribution":
      throw await deserializeAws_restXmlNoSuchDistributionResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.cloudfront#UnsupportedOperation":
      throw await deserializeAws_restXmlUnsupportedOperationResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlDeleteOriginRequestPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOriginRequestPolicyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteOriginRequestPolicyCommandError(output, context);
  }
  const contents: DeleteOriginRequestPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteOriginRequestPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOriginRequestPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "IllegalDelete":
    case "com.amazonaws.cloudfront#IllegalDelete":
      throw await deserializeAws_restXmlIllegalDeleteResponse(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context);
    case "NoSuchOriginRequestPolicy":
    case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
      throw await deserializeAws_restXmlNoSuchOriginRequestPolicyResponse(parsedOutput, context);
    case "OriginRequestPolicyInUse":
    case "com.amazonaws.cloudfront#OriginRequestPolicyInUse":
      throw await deserializeAws_restXmlOriginRequestPolicyInUseResponse(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlDeletePublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePublicKeyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeletePublicKeyCommandError(output, context);
  }
  const contents: DeletePublicKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeletePublicKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePublicKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context);
    case "NoSuchPublicKey":
    case "com.amazonaws.cloudfront#NoSuchPublicKey":
      throw await deserializeAws_restXmlNoSuchPublicKeyResponse(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context);
    case "PublicKeyInUse":
    case "com.amazonaws.cloudfront#PublicKeyInUse":
      throw await deserializeAws_restXmlPublicKeyInUseResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlDeleteRealtimeLogConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRealtimeLogConfigCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteRealtimeLogConfigCommandError(output, context);
  }
  const contents: DeleteRealtimeLogConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteRealtimeLogConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRealtimeLogConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "NoSuchRealtimeLogConfig":
    case "com.amazonaws.cloudfront#NoSuchRealtimeLogConfig":
      throw await deserializeAws_restXmlNoSuchRealtimeLogConfigResponse(parsedOutput, context);
    case "RealtimeLogConfigInUse":
    case "com.amazonaws.cloudfront#RealtimeLogConfigInUse":
      throw await deserializeAws_restXmlRealtimeLogConfigInUseResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlDeleteResponseHeadersPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResponseHeadersPolicyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteResponseHeadersPolicyCommandError(output, context);
  }
  const contents: DeleteResponseHeadersPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteResponseHeadersPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResponseHeadersPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "IllegalDelete":
    case "com.amazonaws.cloudfront#IllegalDelete":
      throw await deserializeAws_restXmlIllegalDeleteResponse(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context);
    case "NoSuchResponseHeadersPolicy":
    case "com.amazonaws.cloudfront#NoSuchResponseHeadersPolicy":
      throw await deserializeAws_restXmlNoSuchResponseHeadersPolicyResponse(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context);
    case "ResponseHeadersPolicyInUse":
    case "com.amazonaws.cloudfront#ResponseHeadersPolicyInUse":
      throw await deserializeAws_restXmlResponseHeadersPolicyInUseResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlDeleteStreamingDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStreamingDistributionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteStreamingDistributionCommandError(output, context);
  }
  const contents: DeleteStreamingDistributionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteStreamingDistributionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStreamingDistributionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context);
    case "NoSuchStreamingDistribution":
    case "com.amazonaws.cloudfront#NoSuchStreamingDistribution":
      throw await deserializeAws_restXmlNoSuchStreamingDistributionResponse(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context);
    case "StreamingDistributionNotDisabled":
    case "com.amazonaws.cloudfront#StreamingDistributionNotDisabled":
      throw await deserializeAws_restXmlStreamingDistributionNotDisabledResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlDescribeFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDescribeFunctionCommandError(output, context);
  }
  const contents: DescribeFunctionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    FunctionSummary: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FunctionSummary = deserializeAws_restXmlFunctionSummary(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDescribeFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchFunctionExists":
    case "com.amazonaws.cloudfront#NoSuchFunctionExists":
      throw await deserializeAws_restXmlNoSuchFunctionExistsResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.cloudfront#UnsupportedOperation":
      throw await deserializeAws_restXmlUnsupportedOperationResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlGetCachePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCachePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetCachePolicyCommandError(output, context);
  }
  const contents: GetCachePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    CachePolicy: undefined,
    ETag: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CachePolicy = deserializeAws_restXmlCachePolicy(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetCachePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCachePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "NoSuchCachePolicy":
    case "com.amazonaws.cloudfront#NoSuchCachePolicy":
      throw await deserializeAws_restXmlNoSuchCachePolicyResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlGetCachePolicyConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCachePolicyConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetCachePolicyConfigCommandError(output, context);
  }
  const contents: GetCachePolicyConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    CachePolicyConfig: undefined,
    ETag: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CachePolicyConfig = deserializeAws_restXmlCachePolicyConfig(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetCachePolicyConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCachePolicyConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "NoSuchCachePolicy":
    case "com.amazonaws.cloudfront#NoSuchCachePolicy":
      throw await deserializeAws_restXmlNoSuchCachePolicyResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlGetCloudFrontOriginAccessIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCloudFrontOriginAccessIdentityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetCloudFrontOriginAccessIdentityCommandError(output, context);
  }
  const contents: GetCloudFrontOriginAccessIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
    CloudFrontOriginAccessIdentity: undefined,
    ETag: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CloudFrontOriginAccessIdentity = deserializeAws_restXmlCloudFrontOriginAccessIdentity(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetCloudFrontOriginAccessIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCloudFrontOriginAccessIdentityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "NoSuchCloudFrontOriginAccessIdentity":
    case "com.amazonaws.cloudfront#NoSuchCloudFrontOriginAccessIdentity":
      throw await deserializeAws_restXmlNoSuchCloudFrontOriginAccessIdentityResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlGetCloudFrontOriginAccessIdentityConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCloudFrontOriginAccessIdentityConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetCloudFrontOriginAccessIdentityConfigCommandError(output, context);
  }
  const contents: GetCloudFrontOriginAccessIdentityConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    CloudFrontOriginAccessIdentityConfig: undefined,
    ETag: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CloudFrontOriginAccessIdentityConfig = deserializeAws_restXmlCloudFrontOriginAccessIdentityConfig(
    data,
    context
  );
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetCloudFrontOriginAccessIdentityConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCloudFrontOriginAccessIdentityConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "NoSuchCloudFrontOriginAccessIdentity":
    case "com.amazonaws.cloudfront#NoSuchCloudFrontOriginAccessIdentity":
      throw await deserializeAws_restXmlNoSuchCloudFrontOriginAccessIdentityResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlGetDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDistributionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetDistributionCommandError(output, context);
  }
  const contents: GetDistributionCommandOutput = {
    $metadata: deserializeMetadata(output),
    Distribution: undefined,
    ETag: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.Distribution = deserializeAws_restXmlDistribution(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetDistributionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDistributionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "NoSuchDistribution":
    case "com.amazonaws.cloudfront#NoSuchDistribution":
      throw await deserializeAws_restXmlNoSuchDistributionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlGetDistributionConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDistributionConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetDistributionConfigCommandError(output, context);
  }
  const contents: GetDistributionConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    DistributionConfig: undefined,
    ETag: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.DistributionConfig = deserializeAws_restXmlDistributionConfig(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetDistributionConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDistributionConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "NoSuchDistribution":
    case "com.amazonaws.cloudfront#NoSuchDistribution":
      throw await deserializeAws_restXmlNoSuchDistributionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlGetFieldLevelEncryptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFieldLevelEncryptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetFieldLevelEncryptionCommandError(output, context);
  }
  const contents: GetFieldLevelEncryptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    FieldLevelEncryption: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FieldLevelEncryption = deserializeAws_restXmlFieldLevelEncryption(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetFieldLevelEncryptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFieldLevelEncryptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "NoSuchFieldLevelEncryptionConfig":
    case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionConfig":
      throw await deserializeAws_restXmlNoSuchFieldLevelEncryptionConfigResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlGetFieldLevelEncryptionConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFieldLevelEncryptionConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetFieldLevelEncryptionConfigCommandError(output, context);
  }
  const contents: GetFieldLevelEncryptionConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    FieldLevelEncryptionConfig: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FieldLevelEncryptionConfig = deserializeAws_restXmlFieldLevelEncryptionConfig(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetFieldLevelEncryptionConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFieldLevelEncryptionConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "NoSuchFieldLevelEncryptionConfig":
    case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionConfig":
      throw await deserializeAws_restXmlNoSuchFieldLevelEncryptionConfigResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlGetFieldLevelEncryptionProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFieldLevelEncryptionProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetFieldLevelEncryptionProfileCommandError(output, context);
  }
  const contents: GetFieldLevelEncryptionProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    FieldLevelEncryptionProfile: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FieldLevelEncryptionProfile = deserializeAws_restXmlFieldLevelEncryptionProfile(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetFieldLevelEncryptionProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFieldLevelEncryptionProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "NoSuchFieldLevelEncryptionProfile":
    case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionProfile":
      throw await deserializeAws_restXmlNoSuchFieldLevelEncryptionProfileResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlGetFieldLevelEncryptionProfileConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFieldLevelEncryptionProfileConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetFieldLevelEncryptionProfileConfigCommandError(output, context);
  }
  const contents: GetFieldLevelEncryptionProfileConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    FieldLevelEncryptionProfileConfig: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FieldLevelEncryptionProfileConfig = deserializeAws_restXmlFieldLevelEncryptionProfileConfig(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetFieldLevelEncryptionProfileConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFieldLevelEncryptionProfileConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "NoSuchFieldLevelEncryptionProfile":
    case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionProfile":
      throw await deserializeAws_restXmlNoSuchFieldLevelEncryptionProfileResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlGetFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetFunctionCommandError(output, context);
  }
  const contents: GetFunctionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ContentType: undefined,
    ETag: undefined,
    FunctionCode: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  if (output.headers["content-type"] !== undefined) {
    contents.ContentType = output.headers["content-type"];
  }
  const data: any = await collectBody(output.body, context);
  contents.FunctionCode = data;
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchFunctionExists":
    case "com.amazonaws.cloudfront#NoSuchFunctionExists":
      throw await deserializeAws_restXmlNoSuchFunctionExistsResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.cloudfront#UnsupportedOperation":
      throw await deserializeAws_restXmlUnsupportedOperationResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlGetInvalidationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInvalidationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetInvalidationCommandError(output, context);
  }
  const contents: GetInvalidationCommandOutput = {
    $metadata: deserializeMetadata(output),
    Invalidation: undefined,
  };
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.Invalidation = deserializeAws_restXmlInvalidation(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetInvalidationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInvalidationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "NoSuchDistribution":
    case "com.amazonaws.cloudfront#NoSuchDistribution":
      throw await deserializeAws_restXmlNoSuchDistributionResponse(parsedOutput, context);
    case "NoSuchInvalidation":
    case "com.amazonaws.cloudfront#NoSuchInvalidation":
      throw await deserializeAws_restXmlNoSuchInvalidationResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlGetKeyGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetKeyGroupCommandError(output, context);
  }
  const contents: GetKeyGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    KeyGroup: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.KeyGroup = deserializeAws_restXmlKeyGroup(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetKeyGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchResource":
    case "com.amazonaws.cloudfront#NoSuchResource":
      throw await deserializeAws_restXmlNoSuchResourceResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlGetKeyGroupConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyGroupConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetKeyGroupConfigCommandError(output, context);
  }
  const contents: GetKeyGroupConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    KeyGroupConfig: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.KeyGroupConfig = deserializeAws_restXmlKeyGroupConfig(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetKeyGroupConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyGroupConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchResource":
    case "com.amazonaws.cloudfront#NoSuchResource":
      throw await deserializeAws_restXmlNoSuchResourceResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlGetMonitoringSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMonitoringSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetMonitoringSubscriptionCommandError(output, context);
  }
  const contents: GetMonitoringSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    MonitoringSubscription: undefined,
  };
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.MonitoringSubscription = deserializeAws_restXmlMonitoringSubscription(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetMonitoringSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMonitoringSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "NoSuchDistribution":
    case "com.amazonaws.cloudfront#NoSuchDistribution":
      throw await deserializeAws_restXmlNoSuchDistributionResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.cloudfront#UnsupportedOperation":
      throw await deserializeAws_restXmlUnsupportedOperationResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlGetOriginRequestPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOriginRequestPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetOriginRequestPolicyCommandError(output, context);
  }
  const contents: GetOriginRequestPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    OriginRequestPolicy: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.OriginRequestPolicy = deserializeAws_restXmlOriginRequestPolicy(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetOriginRequestPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOriginRequestPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "NoSuchOriginRequestPolicy":
    case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
      throw await deserializeAws_restXmlNoSuchOriginRequestPolicyResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlGetOriginRequestPolicyConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOriginRequestPolicyConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetOriginRequestPolicyConfigCommandError(output, context);
  }
  const contents: GetOriginRequestPolicyConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    OriginRequestPolicyConfig: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.OriginRequestPolicyConfig = deserializeAws_restXmlOriginRequestPolicyConfig(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetOriginRequestPolicyConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOriginRequestPolicyConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "NoSuchOriginRequestPolicy":
    case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
      throw await deserializeAws_restXmlNoSuchOriginRequestPolicyResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlGetPublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPublicKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetPublicKeyCommandError(output, context);
  }
  const contents: GetPublicKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    PublicKey: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.PublicKey = deserializeAws_restXmlPublicKey(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetPublicKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPublicKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "NoSuchPublicKey":
    case "com.amazonaws.cloudfront#NoSuchPublicKey":
      throw await deserializeAws_restXmlNoSuchPublicKeyResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlGetPublicKeyConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPublicKeyConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetPublicKeyConfigCommandError(output, context);
  }
  const contents: GetPublicKeyConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    PublicKeyConfig: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.PublicKeyConfig = deserializeAws_restXmlPublicKeyConfig(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetPublicKeyConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPublicKeyConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "NoSuchPublicKey":
    case "com.amazonaws.cloudfront#NoSuchPublicKey":
      throw await deserializeAws_restXmlNoSuchPublicKeyResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlGetRealtimeLogConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRealtimeLogConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetRealtimeLogConfigCommandError(output, context);
  }
  const contents: GetRealtimeLogConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    RealtimeLogConfig: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["RealtimeLogConfig"] !== undefined) {
    contents.RealtimeLogConfig = deserializeAws_restXmlRealtimeLogConfig(data["RealtimeLogConfig"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetRealtimeLogConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRealtimeLogConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "NoSuchRealtimeLogConfig":
    case "com.amazonaws.cloudfront#NoSuchRealtimeLogConfig":
      throw await deserializeAws_restXmlNoSuchRealtimeLogConfigResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlGetResponseHeadersPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResponseHeadersPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetResponseHeadersPolicyCommandError(output, context);
  }
  const contents: GetResponseHeadersPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    ResponseHeadersPolicy: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ResponseHeadersPolicy = deserializeAws_restXmlResponseHeadersPolicy(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetResponseHeadersPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResponseHeadersPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "NoSuchResponseHeadersPolicy":
    case "com.amazonaws.cloudfront#NoSuchResponseHeadersPolicy":
      throw await deserializeAws_restXmlNoSuchResponseHeadersPolicyResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlGetResponseHeadersPolicyConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResponseHeadersPolicyConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetResponseHeadersPolicyConfigCommandError(output, context);
  }
  const contents: GetResponseHeadersPolicyConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    ResponseHeadersPolicyConfig: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ResponseHeadersPolicyConfig = deserializeAws_restXmlResponseHeadersPolicyConfig(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetResponseHeadersPolicyConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResponseHeadersPolicyConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "NoSuchResponseHeadersPolicy":
    case "com.amazonaws.cloudfront#NoSuchResponseHeadersPolicy":
      throw await deserializeAws_restXmlNoSuchResponseHeadersPolicyResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlGetStreamingDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStreamingDistributionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetStreamingDistributionCommandError(output, context);
  }
  const contents: GetStreamingDistributionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    StreamingDistribution: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.StreamingDistribution = deserializeAws_restXmlStreamingDistribution(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetStreamingDistributionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStreamingDistributionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "NoSuchStreamingDistribution":
    case "com.amazonaws.cloudfront#NoSuchStreamingDistribution":
      throw await deserializeAws_restXmlNoSuchStreamingDistributionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlGetStreamingDistributionConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStreamingDistributionConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetStreamingDistributionConfigCommandError(output, context);
  }
  const contents: GetStreamingDistributionConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    StreamingDistributionConfig: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.StreamingDistributionConfig = deserializeAws_restXmlStreamingDistributionConfig(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetStreamingDistributionConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStreamingDistributionConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "NoSuchStreamingDistribution":
    case "com.amazonaws.cloudfront#NoSuchStreamingDistribution":
      throw await deserializeAws_restXmlNoSuchStreamingDistributionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlListCachePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCachePoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListCachePoliciesCommandError(output, context);
  }
  const contents: ListCachePoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    CachePolicyList: undefined,
  };
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CachePolicyList = deserializeAws_restXmlCachePolicyList(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListCachePoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCachePoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "NoSuchCachePolicy":
    case "com.amazonaws.cloudfront#NoSuchCachePolicy":
      throw await deserializeAws_restXmlNoSuchCachePolicyResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlListCloudFrontOriginAccessIdentitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCloudFrontOriginAccessIdentitiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListCloudFrontOriginAccessIdentitiesCommandError(output, context);
  }
  const contents: ListCloudFrontOriginAccessIdentitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    CloudFrontOriginAccessIdentityList: undefined,
  };
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CloudFrontOriginAccessIdentityList = deserializeAws_restXmlCloudFrontOriginAccessIdentityList(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListCloudFrontOriginAccessIdentitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCloudFrontOriginAccessIdentitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlListConflictingAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConflictingAliasesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListConflictingAliasesCommandError(output, context);
  }
  const contents: ListConflictingAliasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ConflictingAliasesList: undefined,
  };
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ConflictingAliasesList = deserializeAws_restXmlConflictingAliasesList(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListConflictingAliasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConflictingAliasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "NoSuchDistribution":
    case "com.amazonaws.cloudfront#NoSuchDistribution":
      throw await deserializeAws_restXmlNoSuchDistributionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlListDistributionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListDistributionsCommandError(output, context);
  }
  const contents: ListDistributionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    DistributionList: undefined,
  };
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.DistributionList = deserializeAws_restXmlDistributionList(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListDistributionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlListDistributionsByCachePolicyIdCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionsByCachePolicyIdCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListDistributionsByCachePolicyIdCommandError(output, context);
  }
  const contents: ListDistributionsByCachePolicyIdCommandOutput = {
    $metadata: deserializeMetadata(output),
    DistributionIdList: undefined,
  };
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.DistributionIdList = deserializeAws_restXmlDistributionIdList(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListDistributionsByCachePolicyIdCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionsByCachePolicyIdCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "NoSuchCachePolicy":
    case "com.amazonaws.cloudfront#NoSuchCachePolicy":
      throw await deserializeAws_restXmlNoSuchCachePolicyResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlListDistributionsByKeyGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionsByKeyGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListDistributionsByKeyGroupCommandError(output, context);
  }
  const contents: ListDistributionsByKeyGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    DistributionIdList: undefined,
  };
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.DistributionIdList = deserializeAws_restXmlDistributionIdList(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListDistributionsByKeyGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionsByKeyGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "NoSuchResource":
    case "com.amazonaws.cloudfront#NoSuchResource":
      throw await deserializeAws_restXmlNoSuchResourceResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlListDistributionsByOriginRequestPolicyIdCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionsByOriginRequestPolicyIdCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListDistributionsByOriginRequestPolicyIdCommandError(output, context);
  }
  const contents: ListDistributionsByOriginRequestPolicyIdCommandOutput = {
    $metadata: deserializeMetadata(output),
    DistributionIdList: undefined,
  };
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.DistributionIdList = deserializeAws_restXmlDistributionIdList(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListDistributionsByOriginRequestPolicyIdCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionsByOriginRequestPolicyIdCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "NoSuchOriginRequestPolicy":
    case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
      throw await deserializeAws_restXmlNoSuchOriginRequestPolicyResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlListDistributionsByRealtimeLogConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionsByRealtimeLogConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListDistributionsByRealtimeLogConfigCommandError(output, context);
  }
  const contents: ListDistributionsByRealtimeLogConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    DistributionList: undefined,
  };
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.DistributionList = deserializeAws_restXmlDistributionList(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListDistributionsByRealtimeLogConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionsByRealtimeLogConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlListDistributionsByResponseHeadersPolicyIdCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionsByResponseHeadersPolicyIdCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListDistributionsByResponseHeadersPolicyIdCommandError(output, context);
  }
  const contents: ListDistributionsByResponseHeadersPolicyIdCommandOutput = {
    $metadata: deserializeMetadata(output),
    DistributionIdList: undefined,
  };
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.DistributionIdList = deserializeAws_restXmlDistributionIdList(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListDistributionsByResponseHeadersPolicyIdCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionsByResponseHeadersPolicyIdCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "NoSuchResponseHeadersPolicy":
    case "com.amazonaws.cloudfront#NoSuchResponseHeadersPolicy":
      throw await deserializeAws_restXmlNoSuchResponseHeadersPolicyResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlListDistributionsByWebACLIdCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionsByWebACLIdCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListDistributionsByWebACLIdCommandError(output, context);
  }
  const contents: ListDistributionsByWebACLIdCommandOutput = {
    $metadata: deserializeMetadata(output),
    DistributionList: undefined,
  };
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.DistributionList = deserializeAws_restXmlDistributionList(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListDistributionsByWebACLIdCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionsByWebACLIdCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "InvalidWebACLId":
    case "com.amazonaws.cloudfront#InvalidWebACLId":
      throw await deserializeAws_restXmlInvalidWebACLIdResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlListFieldLevelEncryptionConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFieldLevelEncryptionConfigsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListFieldLevelEncryptionConfigsCommandError(output, context);
  }
  const contents: ListFieldLevelEncryptionConfigsCommandOutput = {
    $metadata: deserializeMetadata(output),
    FieldLevelEncryptionList: undefined,
  };
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FieldLevelEncryptionList = deserializeAws_restXmlFieldLevelEncryptionList(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListFieldLevelEncryptionConfigsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFieldLevelEncryptionConfigsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlListFieldLevelEncryptionProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFieldLevelEncryptionProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListFieldLevelEncryptionProfilesCommandError(output, context);
  }
  const contents: ListFieldLevelEncryptionProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    FieldLevelEncryptionProfileList: undefined,
  };
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FieldLevelEncryptionProfileList = deserializeAws_restXmlFieldLevelEncryptionProfileList(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListFieldLevelEncryptionProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFieldLevelEncryptionProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlListFunctionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListFunctionsCommandError(output, context);
  }
  const contents: ListFunctionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    FunctionList: undefined,
  };
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FunctionList = deserializeAws_restXmlFunctionList(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListFunctionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.cloudfront#UnsupportedOperation":
      throw await deserializeAws_restXmlUnsupportedOperationResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlListInvalidationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInvalidationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListInvalidationsCommandError(output, context);
  }
  const contents: ListInvalidationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    InvalidationList: undefined,
  };
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.InvalidationList = deserializeAws_restXmlInvalidationList(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListInvalidationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInvalidationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "NoSuchDistribution":
    case "com.amazonaws.cloudfront#NoSuchDistribution":
      throw await deserializeAws_restXmlNoSuchDistributionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlListKeyGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKeyGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListKeyGroupsCommandError(output, context);
  }
  const contents: ListKeyGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    KeyGroupList: undefined,
  };
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.KeyGroupList = deserializeAws_restXmlKeyGroupList(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListKeyGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKeyGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlListOriginRequestPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOriginRequestPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListOriginRequestPoliciesCommandError(output, context);
  }
  const contents: ListOriginRequestPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    OriginRequestPolicyList: undefined,
  };
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.OriginRequestPolicyList = deserializeAws_restXmlOriginRequestPolicyList(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListOriginRequestPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOriginRequestPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "NoSuchOriginRequestPolicy":
    case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
      throw await deserializeAws_restXmlNoSuchOriginRequestPolicyResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlListPublicKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPublicKeysCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListPublicKeysCommandError(output, context);
  }
  const contents: ListPublicKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    PublicKeyList: undefined,
  };
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.PublicKeyList = deserializeAws_restXmlPublicKeyList(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListPublicKeysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPublicKeysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlListRealtimeLogConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRealtimeLogConfigsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListRealtimeLogConfigsCommandError(output, context);
  }
  const contents: ListRealtimeLogConfigsCommandOutput = {
    $metadata: deserializeMetadata(output),
    RealtimeLogConfigs: undefined,
  };
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.RealtimeLogConfigs = deserializeAws_restXmlRealtimeLogConfigs(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListRealtimeLogConfigsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRealtimeLogConfigsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "NoSuchRealtimeLogConfig":
    case "com.amazonaws.cloudfront#NoSuchRealtimeLogConfig":
      throw await deserializeAws_restXmlNoSuchRealtimeLogConfigResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlListResponseHeadersPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResponseHeadersPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListResponseHeadersPoliciesCommandError(output, context);
  }
  const contents: ListResponseHeadersPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ResponseHeadersPolicyList: undefined,
  };
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ResponseHeadersPolicyList = deserializeAws_restXmlResponseHeadersPolicyList(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListResponseHeadersPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResponseHeadersPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "NoSuchResponseHeadersPolicy":
    case "com.amazonaws.cloudfront#NoSuchResponseHeadersPolicy":
      throw await deserializeAws_restXmlNoSuchResponseHeadersPolicyResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlListStreamingDistributionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamingDistributionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListStreamingDistributionsCommandError(output, context);
  }
  const contents: ListStreamingDistributionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    StreamingDistributionList: undefined,
  };
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.StreamingDistributionList = deserializeAws_restXmlStreamingDistributionList(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListStreamingDistributionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamingDistributionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    Tags: undefined,
  };
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.Tags = deserializeAws_restXmlTags(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "InvalidTagging":
    case "com.amazonaws.cloudfront#InvalidTagging":
      throw await deserializeAws_restXmlInvalidTaggingResponse(parsedOutput, context);
    case "NoSuchResource":
    case "com.amazonaws.cloudfront#NoSuchResource":
      throw await deserializeAws_restXmlNoSuchResourceResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlPublishFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPublishFunctionCommandError(output, context);
  }
  const contents: PublishFunctionCommandOutput = {
    $metadata: deserializeMetadata(output),
    FunctionSummary: undefined,
  };
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FunctionSummary = deserializeAws_restXmlFunctionSummary(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPublishFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context);
    case "NoSuchFunctionExists":
    case "com.amazonaws.cloudfront#NoSuchFunctionExists":
      throw await deserializeAws_restXmlNoSuchFunctionExistsResponse(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.cloudfront#UnsupportedOperation":
      throw await deserializeAws_restXmlUnsupportedOperationResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlTagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlTagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlTagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "InvalidTagging":
    case "com.amazonaws.cloudfront#InvalidTagging":
      throw await deserializeAws_restXmlInvalidTaggingResponse(parsedOutput, context);
    case "NoSuchResource":
    case "com.amazonaws.cloudfront#NoSuchResource":
      throw await deserializeAws_restXmlNoSuchResourceResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlTestFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlTestFunctionCommandError(output, context);
  }
  const contents: TestFunctionCommandOutput = {
    $metadata: deserializeMetadata(output),
    TestResult: undefined,
  };
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.TestResult = deserializeAws_restXmlTestResult(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlTestFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context);
    case "NoSuchFunctionExists":
    case "com.amazonaws.cloudfront#NoSuchFunctionExists":
      throw await deserializeAws_restXmlNoSuchFunctionExistsResponse(parsedOutput, context);
    case "TestFunctionFailed":
    case "com.amazonaws.cloudfront#TestFunctionFailed":
      throw await deserializeAws_restXmlTestFunctionFailedResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.cloudfront#UnsupportedOperation":
      throw await deserializeAws_restXmlUnsupportedOperationResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlUntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlUntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlUntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "InvalidTagging":
    case "com.amazonaws.cloudfront#InvalidTagging":
      throw await deserializeAws_restXmlInvalidTaggingResponse(parsedOutput, context);
    case "NoSuchResource":
    case "com.amazonaws.cloudfront#NoSuchResource":
      throw await deserializeAws_restXmlNoSuchResourceResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlUpdateCachePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCachePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUpdateCachePolicyCommandError(output, context);
  }
  const contents: UpdateCachePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    CachePolicy: undefined,
    ETag: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CachePolicy = deserializeAws_restXmlCachePolicy(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlUpdateCachePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCachePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "CachePolicyAlreadyExists":
    case "com.amazonaws.cloudfront#CachePolicyAlreadyExists":
      throw await deserializeAws_restXmlCachePolicyAlreadyExistsResponse(parsedOutput, context);
    case "IllegalUpdate":
    case "com.amazonaws.cloudfront#IllegalUpdate":
      throw await deserializeAws_restXmlIllegalUpdateResponse(parsedOutput, context);
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context);
    case "NoSuchCachePolicy":
    case "com.amazonaws.cloudfront#NoSuchCachePolicy":
      throw await deserializeAws_restXmlNoSuchCachePolicyResponse(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context);
    case "TooManyCookiesInCachePolicy":
    case "com.amazonaws.cloudfront#TooManyCookiesInCachePolicy":
      throw await deserializeAws_restXmlTooManyCookiesInCachePolicyResponse(parsedOutput, context);
    case "TooManyHeadersInCachePolicy":
    case "com.amazonaws.cloudfront#TooManyHeadersInCachePolicy":
      throw await deserializeAws_restXmlTooManyHeadersInCachePolicyResponse(parsedOutput, context);
    case "TooManyQueryStringsInCachePolicy":
    case "com.amazonaws.cloudfront#TooManyQueryStringsInCachePolicy":
      throw await deserializeAws_restXmlTooManyQueryStringsInCachePolicyResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCloudFrontOriginAccessIdentityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommandError(output, context);
  }
  const contents: UpdateCloudFrontOriginAccessIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
    CloudFrontOriginAccessIdentity: undefined,
    ETag: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CloudFrontOriginAccessIdentity = deserializeAws_restXmlCloudFrontOriginAccessIdentity(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCloudFrontOriginAccessIdentityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "IllegalUpdate":
    case "com.amazonaws.cloudfront#IllegalUpdate":
      throw await deserializeAws_restXmlIllegalUpdateResponse(parsedOutput, context);
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context);
    case "MissingBody":
    case "com.amazonaws.cloudfront#MissingBody":
      throw await deserializeAws_restXmlMissingBodyResponse(parsedOutput, context);
    case "NoSuchCloudFrontOriginAccessIdentity":
    case "com.amazonaws.cloudfront#NoSuchCloudFrontOriginAccessIdentity":
      throw await deserializeAws_restXmlNoSuchCloudFrontOriginAccessIdentityResponse(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlUpdateDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDistributionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUpdateDistributionCommandError(output, context);
  }
  const contents: UpdateDistributionCommandOutput = {
    $metadata: deserializeMetadata(output),
    Distribution: undefined,
    ETag: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.Distribution = deserializeAws_restXmlDistribution(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlUpdateDistributionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDistributionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "CNAMEAlreadyExists":
    case "com.amazonaws.cloudfront#CNAMEAlreadyExists":
      throw await deserializeAws_restXmlCNAMEAlreadyExistsResponse(parsedOutput, context);
    case "IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
    case "com.amazonaws.cloudfront#IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
      throw await deserializeAws_restXmlIllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorResponse(
        parsedOutput,
        context
      );
    case "IllegalUpdate":
    case "com.amazonaws.cloudfront#IllegalUpdate":
      throw await deserializeAws_restXmlIllegalUpdateResponse(parsedOutput, context);
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "InvalidDefaultRootObject":
    case "com.amazonaws.cloudfront#InvalidDefaultRootObject":
      throw await deserializeAws_restXmlInvalidDefaultRootObjectResponse(parsedOutput, context);
    case "InvalidErrorCode":
    case "com.amazonaws.cloudfront#InvalidErrorCode":
      throw await deserializeAws_restXmlInvalidErrorCodeResponse(parsedOutput, context);
    case "InvalidForwardCookies":
    case "com.amazonaws.cloudfront#InvalidForwardCookies":
      throw await deserializeAws_restXmlInvalidForwardCookiesResponse(parsedOutput, context);
    case "InvalidFunctionAssociation":
    case "com.amazonaws.cloudfront#InvalidFunctionAssociation":
      throw await deserializeAws_restXmlInvalidFunctionAssociationResponse(parsedOutput, context);
    case "InvalidGeoRestrictionParameter":
    case "com.amazonaws.cloudfront#InvalidGeoRestrictionParameter":
      throw await deserializeAws_restXmlInvalidGeoRestrictionParameterResponse(parsedOutput, context);
    case "InvalidHeadersForS3Origin":
    case "com.amazonaws.cloudfront#InvalidHeadersForS3Origin":
      throw await deserializeAws_restXmlInvalidHeadersForS3OriginResponse(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context);
    case "InvalidLambdaFunctionAssociation":
    case "com.amazonaws.cloudfront#InvalidLambdaFunctionAssociation":
      throw await deserializeAws_restXmlInvalidLambdaFunctionAssociationResponse(parsedOutput, context);
    case "InvalidLocationCode":
    case "com.amazonaws.cloudfront#InvalidLocationCode":
      throw await deserializeAws_restXmlInvalidLocationCodeResponse(parsedOutput, context);
    case "InvalidMinimumProtocolVersion":
    case "com.amazonaws.cloudfront#InvalidMinimumProtocolVersion":
      throw await deserializeAws_restXmlInvalidMinimumProtocolVersionResponse(parsedOutput, context);
    case "InvalidOriginAccessIdentity":
    case "com.amazonaws.cloudfront#InvalidOriginAccessIdentity":
      throw await deserializeAws_restXmlInvalidOriginAccessIdentityResponse(parsedOutput, context);
    case "InvalidOriginKeepaliveTimeout":
    case "com.amazonaws.cloudfront#InvalidOriginKeepaliveTimeout":
      throw await deserializeAws_restXmlInvalidOriginKeepaliveTimeoutResponse(parsedOutput, context);
    case "InvalidOriginReadTimeout":
    case "com.amazonaws.cloudfront#InvalidOriginReadTimeout":
      throw await deserializeAws_restXmlInvalidOriginReadTimeoutResponse(parsedOutput, context);
    case "InvalidQueryStringParameters":
    case "com.amazonaws.cloudfront#InvalidQueryStringParameters":
      throw await deserializeAws_restXmlInvalidQueryStringParametersResponse(parsedOutput, context);
    case "InvalidRelativePath":
    case "com.amazonaws.cloudfront#InvalidRelativePath":
      throw await deserializeAws_restXmlInvalidRelativePathResponse(parsedOutput, context);
    case "InvalidRequiredProtocol":
    case "com.amazonaws.cloudfront#InvalidRequiredProtocol":
      throw await deserializeAws_restXmlInvalidRequiredProtocolResponse(parsedOutput, context);
    case "InvalidResponseCode":
    case "com.amazonaws.cloudfront#InvalidResponseCode":
      throw await deserializeAws_restXmlInvalidResponseCodeResponse(parsedOutput, context);
    case "InvalidTTLOrder":
    case "com.amazonaws.cloudfront#InvalidTTLOrder":
      throw await deserializeAws_restXmlInvalidTTLOrderResponse(parsedOutput, context);
    case "InvalidViewerCertificate":
    case "com.amazonaws.cloudfront#InvalidViewerCertificate":
      throw await deserializeAws_restXmlInvalidViewerCertificateResponse(parsedOutput, context);
    case "InvalidWebACLId":
    case "com.amazonaws.cloudfront#InvalidWebACLId":
      throw await deserializeAws_restXmlInvalidWebACLIdResponse(parsedOutput, context);
    case "MissingBody":
    case "com.amazonaws.cloudfront#MissingBody":
      throw await deserializeAws_restXmlMissingBodyResponse(parsedOutput, context);
    case "NoSuchCachePolicy":
    case "com.amazonaws.cloudfront#NoSuchCachePolicy":
      throw await deserializeAws_restXmlNoSuchCachePolicyResponse(parsedOutput, context);
    case "NoSuchDistribution":
    case "com.amazonaws.cloudfront#NoSuchDistribution":
      throw await deserializeAws_restXmlNoSuchDistributionResponse(parsedOutput, context);
    case "NoSuchFieldLevelEncryptionConfig":
    case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionConfig":
      throw await deserializeAws_restXmlNoSuchFieldLevelEncryptionConfigResponse(parsedOutput, context);
    case "NoSuchOrigin":
    case "com.amazonaws.cloudfront#NoSuchOrigin":
      throw await deserializeAws_restXmlNoSuchOriginResponse(parsedOutput, context);
    case "NoSuchOriginRequestPolicy":
    case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
      throw await deserializeAws_restXmlNoSuchOriginRequestPolicyResponse(parsedOutput, context);
    case "NoSuchRealtimeLogConfig":
    case "com.amazonaws.cloudfront#NoSuchRealtimeLogConfig":
      throw await deserializeAws_restXmlNoSuchRealtimeLogConfigResponse(parsedOutput, context);
    case "NoSuchResponseHeadersPolicy":
    case "com.amazonaws.cloudfront#NoSuchResponseHeadersPolicy":
      throw await deserializeAws_restXmlNoSuchResponseHeadersPolicyResponse(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context);
    case "RealtimeLogConfigOwnerMismatch":
    case "com.amazonaws.cloudfront#RealtimeLogConfigOwnerMismatch":
      throw await deserializeAws_restXmlRealtimeLogConfigOwnerMismatchResponse(parsedOutput, context);
    case "TooManyCacheBehaviors":
    case "com.amazonaws.cloudfront#TooManyCacheBehaviors":
      throw await deserializeAws_restXmlTooManyCacheBehaviorsResponse(parsedOutput, context);
    case "TooManyCertificates":
    case "com.amazonaws.cloudfront#TooManyCertificates":
      throw await deserializeAws_restXmlTooManyCertificatesResponse(parsedOutput, context);
    case "TooManyCookieNamesInWhiteList":
    case "com.amazonaws.cloudfront#TooManyCookieNamesInWhiteList":
      throw await deserializeAws_restXmlTooManyCookieNamesInWhiteListResponse(parsedOutput, context);
    case "TooManyDistributionCNAMEs":
    case "com.amazonaws.cloudfront#TooManyDistributionCNAMEs":
      throw await deserializeAws_restXmlTooManyDistributionCNAMEsResponse(parsedOutput, context);
    case "TooManyDistributionsAssociatedToCachePolicy":
    case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToCachePolicy":
      throw await deserializeAws_restXmlTooManyDistributionsAssociatedToCachePolicyResponse(parsedOutput, context);
    case "TooManyDistributionsAssociatedToFieldLevelEncryptionConfig":
    case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToFieldLevelEncryptionConfig":
      throw await deserializeAws_restXmlTooManyDistributionsAssociatedToFieldLevelEncryptionConfigResponse(
        parsedOutput,
        context
      );
    case "TooManyDistributionsAssociatedToKeyGroup":
    case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToKeyGroup":
      throw await deserializeAws_restXmlTooManyDistributionsAssociatedToKeyGroupResponse(parsedOutput, context);
    case "TooManyDistributionsAssociatedToOriginRequestPolicy":
    case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToOriginRequestPolicy":
      throw await deserializeAws_restXmlTooManyDistributionsAssociatedToOriginRequestPolicyResponse(
        parsedOutput,
        context
      );
    case "TooManyDistributionsAssociatedToResponseHeadersPolicy":
    case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToResponseHeadersPolicy":
      throw await deserializeAws_restXmlTooManyDistributionsAssociatedToResponseHeadersPolicyResponse(
        parsedOutput,
        context
      );
    case "TooManyDistributionsWithFunctionAssociations":
    case "com.amazonaws.cloudfront#TooManyDistributionsWithFunctionAssociations":
      throw await deserializeAws_restXmlTooManyDistributionsWithFunctionAssociationsResponse(parsedOutput, context);
    case "TooManyDistributionsWithLambdaAssociations":
    case "com.amazonaws.cloudfront#TooManyDistributionsWithLambdaAssociations":
      throw await deserializeAws_restXmlTooManyDistributionsWithLambdaAssociationsResponse(parsedOutput, context);
    case "TooManyDistributionsWithSingleFunctionARN":
    case "com.amazonaws.cloudfront#TooManyDistributionsWithSingleFunctionARN":
      throw await deserializeAws_restXmlTooManyDistributionsWithSingleFunctionARNResponse(parsedOutput, context);
    case "TooManyFunctionAssociations":
    case "com.amazonaws.cloudfront#TooManyFunctionAssociations":
      throw await deserializeAws_restXmlTooManyFunctionAssociationsResponse(parsedOutput, context);
    case "TooManyHeadersInForwardedValues":
    case "com.amazonaws.cloudfront#TooManyHeadersInForwardedValues":
      throw await deserializeAws_restXmlTooManyHeadersInForwardedValuesResponse(parsedOutput, context);
    case "TooManyKeyGroupsAssociatedToDistribution":
    case "com.amazonaws.cloudfront#TooManyKeyGroupsAssociatedToDistribution":
      throw await deserializeAws_restXmlTooManyKeyGroupsAssociatedToDistributionResponse(parsedOutput, context);
    case "TooManyLambdaFunctionAssociations":
    case "com.amazonaws.cloudfront#TooManyLambdaFunctionAssociations":
      throw await deserializeAws_restXmlTooManyLambdaFunctionAssociationsResponse(parsedOutput, context);
    case "TooManyOriginCustomHeaders":
    case "com.amazonaws.cloudfront#TooManyOriginCustomHeaders":
      throw await deserializeAws_restXmlTooManyOriginCustomHeadersResponse(parsedOutput, context);
    case "TooManyOriginGroupsPerDistribution":
    case "com.amazonaws.cloudfront#TooManyOriginGroupsPerDistribution":
      throw await deserializeAws_restXmlTooManyOriginGroupsPerDistributionResponse(parsedOutput, context);
    case "TooManyOrigins":
    case "com.amazonaws.cloudfront#TooManyOrigins":
      throw await deserializeAws_restXmlTooManyOriginsResponse(parsedOutput, context);
    case "TooManyQueryStringParameters":
    case "com.amazonaws.cloudfront#TooManyQueryStringParameters":
      throw await deserializeAws_restXmlTooManyQueryStringParametersResponse(parsedOutput, context);
    case "TooManyTrustedSigners":
    case "com.amazonaws.cloudfront#TooManyTrustedSigners":
      throw await deserializeAws_restXmlTooManyTrustedSignersResponse(parsedOutput, context);
    case "TrustedKeyGroupDoesNotExist":
    case "com.amazonaws.cloudfront#TrustedKeyGroupDoesNotExist":
      throw await deserializeAws_restXmlTrustedKeyGroupDoesNotExistResponse(parsedOutput, context);
    case "TrustedSignerDoesNotExist":
    case "com.amazonaws.cloudfront#TrustedSignerDoesNotExist":
      throw await deserializeAws_restXmlTrustedSignerDoesNotExistResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlUpdateFieldLevelEncryptionConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFieldLevelEncryptionConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUpdateFieldLevelEncryptionConfigCommandError(output, context);
  }
  const contents: UpdateFieldLevelEncryptionConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    FieldLevelEncryption: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FieldLevelEncryption = deserializeAws_restXmlFieldLevelEncryption(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlUpdateFieldLevelEncryptionConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFieldLevelEncryptionConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "IllegalUpdate":
    case "com.amazonaws.cloudfront#IllegalUpdate":
      throw await deserializeAws_restXmlIllegalUpdateResponse(parsedOutput, context);
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context);
    case "NoSuchFieldLevelEncryptionConfig":
    case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionConfig":
      throw await deserializeAws_restXmlNoSuchFieldLevelEncryptionConfigResponse(parsedOutput, context);
    case "NoSuchFieldLevelEncryptionProfile":
    case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionProfile":
      throw await deserializeAws_restXmlNoSuchFieldLevelEncryptionProfileResponse(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context);
    case "QueryArgProfileEmpty":
    case "com.amazonaws.cloudfront#QueryArgProfileEmpty":
      throw await deserializeAws_restXmlQueryArgProfileEmptyResponse(parsedOutput, context);
    case "TooManyFieldLevelEncryptionContentTypeProfiles":
    case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionContentTypeProfiles":
      throw await deserializeAws_restXmlTooManyFieldLevelEncryptionContentTypeProfilesResponse(parsedOutput, context);
    case "TooManyFieldLevelEncryptionQueryArgProfiles":
    case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionQueryArgProfiles":
      throw await deserializeAws_restXmlTooManyFieldLevelEncryptionQueryArgProfilesResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlUpdateFieldLevelEncryptionProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFieldLevelEncryptionProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUpdateFieldLevelEncryptionProfileCommandError(output, context);
  }
  const contents: UpdateFieldLevelEncryptionProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    FieldLevelEncryptionProfile: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FieldLevelEncryptionProfile = deserializeAws_restXmlFieldLevelEncryptionProfile(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlUpdateFieldLevelEncryptionProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFieldLevelEncryptionProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "FieldLevelEncryptionProfileAlreadyExists":
    case "com.amazonaws.cloudfront#FieldLevelEncryptionProfileAlreadyExists":
      throw await deserializeAws_restXmlFieldLevelEncryptionProfileAlreadyExistsResponse(parsedOutput, context);
    case "FieldLevelEncryptionProfileSizeExceeded":
    case "com.amazonaws.cloudfront#FieldLevelEncryptionProfileSizeExceeded":
      throw await deserializeAws_restXmlFieldLevelEncryptionProfileSizeExceededResponse(parsedOutput, context);
    case "IllegalUpdate":
    case "com.amazonaws.cloudfront#IllegalUpdate":
      throw await deserializeAws_restXmlIllegalUpdateResponse(parsedOutput, context);
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context);
    case "NoSuchFieldLevelEncryptionProfile":
    case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionProfile":
      throw await deserializeAws_restXmlNoSuchFieldLevelEncryptionProfileResponse(parsedOutput, context);
    case "NoSuchPublicKey":
    case "com.amazonaws.cloudfront#NoSuchPublicKey":
      throw await deserializeAws_restXmlNoSuchPublicKeyResponse(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context);
    case "TooManyFieldLevelEncryptionEncryptionEntities":
    case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionEncryptionEntities":
      throw await deserializeAws_restXmlTooManyFieldLevelEncryptionEncryptionEntitiesResponse(parsedOutput, context);
    case "TooManyFieldLevelEncryptionFieldPatterns":
    case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionFieldPatterns":
      throw await deserializeAws_restXmlTooManyFieldLevelEncryptionFieldPatternsResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlUpdateFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUpdateFunctionCommandError(output, context);
  }
  const contents: UpdateFunctionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    FunctionSummary: undefined,
  };
  if (output.headers["ettag"] !== undefined) {
    contents.ETag = output.headers["ettag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.FunctionSummary = deserializeAws_restXmlFunctionSummary(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlUpdateFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "FunctionSizeLimitExceeded":
    case "com.amazonaws.cloudfront#FunctionSizeLimitExceeded":
      throw await deserializeAws_restXmlFunctionSizeLimitExceededResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context);
    case "NoSuchFunctionExists":
    case "com.amazonaws.cloudfront#NoSuchFunctionExists":
      throw await deserializeAws_restXmlNoSuchFunctionExistsResponse(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.cloudfront#UnsupportedOperation":
      throw await deserializeAws_restXmlUnsupportedOperationResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlUpdateKeyGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateKeyGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUpdateKeyGroupCommandError(output, context);
  }
  const contents: UpdateKeyGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    KeyGroup: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.KeyGroup = deserializeAws_restXmlKeyGroup(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlUpdateKeyGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateKeyGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context);
    case "KeyGroupAlreadyExists":
    case "com.amazonaws.cloudfront#KeyGroupAlreadyExists":
      throw await deserializeAws_restXmlKeyGroupAlreadyExistsResponse(parsedOutput, context);
    case "NoSuchResource":
    case "com.amazonaws.cloudfront#NoSuchResource":
      throw await deserializeAws_restXmlNoSuchResourceResponse(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context);
    case "TooManyPublicKeysInKeyGroup":
    case "com.amazonaws.cloudfront#TooManyPublicKeysInKeyGroup":
      throw await deserializeAws_restXmlTooManyPublicKeysInKeyGroupResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlUpdateOriginRequestPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOriginRequestPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUpdateOriginRequestPolicyCommandError(output, context);
  }
  const contents: UpdateOriginRequestPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    OriginRequestPolicy: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.OriginRequestPolicy = deserializeAws_restXmlOriginRequestPolicy(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlUpdateOriginRequestPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOriginRequestPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "IllegalUpdate":
    case "com.amazonaws.cloudfront#IllegalUpdate":
      throw await deserializeAws_restXmlIllegalUpdateResponse(parsedOutput, context);
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context);
    case "NoSuchOriginRequestPolicy":
    case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
      throw await deserializeAws_restXmlNoSuchOriginRequestPolicyResponse(parsedOutput, context);
    case "OriginRequestPolicyAlreadyExists":
    case "com.amazonaws.cloudfront#OriginRequestPolicyAlreadyExists":
      throw await deserializeAws_restXmlOriginRequestPolicyAlreadyExistsResponse(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context);
    case "TooManyCookiesInOriginRequestPolicy":
    case "com.amazonaws.cloudfront#TooManyCookiesInOriginRequestPolicy":
      throw await deserializeAws_restXmlTooManyCookiesInOriginRequestPolicyResponse(parsedOutput, context);
    case "TooManyHeadersInOriginRequestPolicy":
    case "com.amazonaws.cloudfront#TooManyHeadersInOriginRequestPolicy":
      throw await deserializeAws_restXmlTooManyHeadersInOriginRequestPolicyResponse(parsedOutput, context);
    case "TooManyQueryStringsInOriginRequestPolicy":
    case "com.amazonaws.cloudfront#TooManyQueryStringsInOriginRequestPolicy":
      throw await deserializeAws_restXmlTooManyQueryStringsInOriginRequestPolicyResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlUpdatePublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePublicKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUpdatePublicKeyCommandError(output, context);
  }
  const contents: UpdatePublicKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    PublicKey: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.PublicKey = deserializeAws_restXmlPublicKey(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlUpdatePublicKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePublicKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "CannotChangeImmutablePublicKeyFields":
    case "com.amazonaws.cloudfront#CannotChangeImmutablePublicKeyFields":
      throw await deserializeAws_restXmlCannotChangeImmutablePublicKeyFieldsResponse(parsedOutput, context);
    case "IllegalUpdate":
    case "com.amazonaws.cloudfront#IllegalUpdate":
      throw await deserializeAws_restXmlIllegalUpdateResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context);
    case "NoSuchPublicKey":
    case "com.amazonaws.cloudfront#NoSuchPublicKey":
      throw await deserializeAws_restXmlNoSuchPublicKeyResponse(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlUpdateRealtimeLogConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRealtimeLogConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUpdateRealtimeLogConfigCommandError(output, context);
  }
  const contents: UpdateRealtimeLogConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    RealtimeLogConfig: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["RealtimeLogConfig"] !== undefined) {
    contents.RealtimeLogConfig = deserializeAws_restXmlRealtimeLogConfig(data["RealtimeLogConfig"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlUpdateRealtimeLogConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRealtimeLogConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "NoSuchRealtimeLogConfig":
    case "com.amazonaws.cloudfront#NoSuchRealtimeLogConfig":
      throw await deserializeAws_restXmlNoSuchRealtimeLogConfigResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlUpdateResponseHeadersPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResponseHeadersPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUpdateResponseHeadersPolicyCommandError(output, context);
  }
  const contents: UpdateResponseHeadersPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    ResponseHeadersPolicy: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ResponseHeadersPolicy = deserializeAws_restXmlResponseHeadersPolicy(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlUpdateResponseHeadersPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResponseHeadersPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "IllegalUpdate":
    case "com.amazonaws.cloudfront#IllegalUpdate":
      throw await deserializeAws_restXmlIllegalUpdateResponse(parsedOutput, context);
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context);
    case "NoSuchResponseHeadersPolicy":
    case "com.amazonaws.cloudfront#NoSuchResponseHeadersPolicy":
      throw await deserializeAws_restXmlNoSuchResponseHeadersPolicyResponse(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context);
    case "ResponseHeadersPolicyAlreadyExists":
    case "com.amazonaws.cloudfront#ResponseHeadersPolicyAlreadyExists":
      throw await deserializeAws_restXmlResponseHeadersPolicyAlreadyExistsResponse(parsedOutput, context);
    case "TooLongCSPInResponseHeadersPolicy":
    case "com.amazonaws.cloudfront#TooLongCSPInResponseHeadersPolicy":
      throw await deserializeAws_restXmlTooLongCSPInResponseHeadersPolicyResponse(parsedOutput, context);
    case "TooManyCustomHeadersInResponseHeadersPolicy":
    case "com.amazonaws.cloudfront#TooManyCustomHeadersInResponseHeadersPolicy":
      throw await deserializeAws_restXmlTooManyCustomHeadersInResponseHeadersPolicyResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

export const deserializeAws_restXmlUpdateStreamingDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStreamingDistributionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUpdateStreamingDistributionCommandError(output, context);
  }
  const contents: UpdateStreamingDistributionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    StreamingDistribution: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.StreamingDistribution = deserializeAws_restXmlStreamingDistribution(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlUpdateStreamingDistributionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStreamingDistributionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDenied":
    case "com.amazonaws.cloudfront#AccessDenied":
      throw await deserializeAws_restXmlAccessDeniedResponse(parsedOutput, context);
    case "CNAMEAlreadyExists":
    case "com.amazonaws.cloudfront#CNAMEAlreadyExists":
      throw await deserializeAws_restXmlCNAMEAlreadyExistsResponse(parsedOutput, context);
    case "IllegalUpdate":
    case "com.amazonaws.cloudfront#IllegalUpdate":
      throw await deserializeAws_restXmlIllegalUpdateResponse(parsedOutput, context);
    case "InconsistentQuantities":
    case "com.amazonaws.cloudfront#InconsistentQuantities":
      throw await deserializeAws_restXmlInconsistentQuantitiesResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.cloudfront#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "InvalidIfMatchVersion":
    case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
      throw await deserializeAws_restXmlInvalidIfMatchVersionResponse(parsedOutput, context);
    case "InvalidOriginAccessIdentity":
    case "com.amazonaws.cloudfront#InvalidOriginAccessIdentity":
      throw await deserializeAws_restXmlInvalidOriginAccessIdentityResponse(parsedOutput, context);
    case "MissingBody":
    case "com.amazonaws.cloudfront#MissingBody":
      throw await deserializeAws_restXmlMissingBodyResponse(parsedOutput, context);
    case "NoSuchStreamingDistribution":
    case "com.amazonaws.cloudfront#NoSuchStreamingDistribution":
      throw await deserializeAws_restXmlNoSuchStreamingDistributionResponse(parsedOutput, context);
    case "PreconditionFailed":
    case "com.amazonaws.cloudfront#PreconditionFailed":
      throw await deserializeAws_restXmlPreconditionFailedResponse(parsedOutput, context);
    case "TooManyStreamingDistributionCNAMEs":
    case "com.amazonaws.cloudfront#TooManyStreamingDistributionCNAMEs":
      throw await deserializeAws_restXmlTooManyStreamingDistributionCNAMEsResponse(parsedOutput, context);
    case "TooManyTrustedSigners":
    case "com.amazonaws.cloudfront#TooManyTrustedSigners":
      throw await deserializeAws_restXmlTooManyTrustedSignersResponse(parsedOutput, context);
    case "TrustedSignerDoesNotExist":
    case "com.amazonaws.cloudfront#TrustedSignerDoesNotExist":
      throw await deserializeAws_restXmlTrustedSignerDoesNotExistResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.Error.code || parsedBody.Error.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody.Error);
  }
};

const deserializeAws_restXmlAccessDeniedResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDenied> => {
  const contents: any = {};
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

const deserializeAws_restXmlBatchTooLargeResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BatchTooLarge> => {
  const contents: any = {};
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

const deserializeAws_restXmlCachePolicyAlreadyExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CachePolicyAlreadyExists> => {
  const contents: any = {};
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

const deserializeAws_restXmlCachePolicyInUseResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CachePolicyInUse> => {
  const contents: any = {};
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

const deserializeAws_restXmlCannotChangeImmutablePublicKeyFieldsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CannotChangeImmutablePublicKeyFields> => {
  const contents: any = {};
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

const deserializeAws_restXmlCloudFrontOriginAccessIdentityAlreadyExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudFrontOriginAccessIdentityAlreadyExists> => {
  const contents: any = {};
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

const deserializeAws_restXmlCloudFrontOriginAccessIdentityInUseResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudFrontOriginAccessIdentityInUse> => {
  const contents: any = {};
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

const deserializeAws_restXmlCNAMEAlreadyExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CNAMEAlreadyExists> => {
  const contents: any = {};
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

const deserializeAws_restXmlDistributionAlreadyExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DistributionAlreadyExists> => {
  const contents: any = {};
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

const deserializeAws_restXmlDistributionNotDisabledResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DistributionNotDisabled> => {
  const contents: any = {};
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

const deserializeAws_restXmlFieldLevelEncryptionConfigAlreadyExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FieldLevelEncryptionConfigAlreadyExists> => {
  const contents: any = {};
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

const deserializeAws_restXmlFieldLevelEncryptionConfigInUseResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FieldLevelEncryptionConfigInUse> => {
  const contents: any = {};
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

const deserializeAws_restXmlFieldLevelEncryptionProfileAlreadyExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FieldLevelEncryptionProfileAlreadyExists> => {
  const contents: any = {};
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

const deserializeAws_restXmlFieldLevelEncryptionProfileInUseResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FieldLevelEncryptionProfileInUse> => {
  const contents: any = {};
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

const deserializeAws_restXmlFieldLevelEncryptionProfileSizeExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FieldLevelEncryptionProfileSizeExceeded> => {
  const contents: any = {};
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

const deserializeAws_restXmlFunctionAlreadyExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FunctionAlreadyExists> => {
  const contents: any = {};
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

const deserializeAws_restXmlFunctionInUseResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FunctionInUse> => {
  const contents: any = {};
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

const deserializeAws_restXmlFunctionSizeLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FunctionSizeLimitExceeded> => {
  const contents: any = {};
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

const deserializeAws_restXmlIllegalDeleteResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IllegalDelete> => {
  const contents: any = {};
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

const deserializeAws_restXmlIllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior> => {
  const contents: any = {};
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

const deserializeAws_restXmlIllegalUpdateResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IllegalUpdate> => {
  const contents: any = {};
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

const deserializeAws_restXmlInconsistentQuantitiesResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InconsistentQuantities> => {
  const contents: any = {};
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

const deserializeAws_restXmlInvalidArgumentResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArgument> => {
  const contents: any = {};
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

const deserializeAws_restXmlInvalidDefaultRootObjectResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDefaultRootObject> => {
  const contents: any = {};
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

const deserializeAws_restXmlInvalidErrorCodeResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidErrorCode> => {
  const contents: any = {};
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

const deserializeAws_restXmlInvalidForwardCookiesResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidForwardCookies> => {
  const contents: any = {};
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

const deserializeAws_restXmlInvalidFunctionAssociationResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidFunctionAssociation> => {
  const contents: any = {};
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

const deserializeAws_restXmlInvalidGeoRestrictionParameterResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGeoRestrictionParameter> => {
  const contents: any = {};
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

const deserializeAws_restXmlInvalidHeadersForS3OriginResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidHeadersForS3Origin> => {
  const contents: any = {};
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

const deserializeAws_restXmlInvalidIfMatchVersionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidIfMatchVersion> => {
  const contents: any = {};
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

const deserializeAws_restXmlInvalidLambdaFunctionAssociationResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLambdaFunctionAssociation> => {
  const contents: any = {};
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

const deserializeAws_restXmlInvalidLocationCodeResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLocationCode> => {
  const contents: any = {};
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

const deserializeAws_restXmlInvalidMinimumProtocolVersionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidMinimumProtocolVersion> => {
  const contents: any = {};
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

const deserializeAws_restXmlInvalidOriginResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOrigin> => {
  const contents: any = {};
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

const deserializeAws_restXmlInvalidOriginAccessIdentityResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOriginAccessIdentity> => {
  const contents: any = {};
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

const deserializeAws_restXmlInvalidOriginKeepaliveTimeoutResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOriginKeepaliveTimeout> => {
  const contents: any = {};
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

const deserializeAws_restXmlInvalidOriginReadTimeoutResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOriginReadTimeout> => {
  const contents: any = {};
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

const deserializeAws_restXmlInvalidProtocolSettingsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidProtocolSettings> => {
  const contents: any = {};
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

const deserializeAws_restXmlInvalidQueryStringParametersResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidQueryStringParameters> => {
  const contents: any = {};
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

const deserializeAws_restXmlInvalidRelativePathResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRelativePath> => {
  const contents: any = {};
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

const deserializeAws_restXmlInvalidRequiredProtocolResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequiredProtocol> => {
  const contents: any = {};
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

const deserializeAws_restXmlInvalidResponseCodeResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResponseCode> => {
  const contents: any = {};
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

const deserializeAws_restXmlInvalidTaggingResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTagging> => {
  const contents: any = {};
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

const deserializeAws_restXmlInvalidTTLOrderResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTTLOrder> => {
  const contents: any = {};
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

const deserializeAws_restXmlInvalidViewerCertificateResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidViewerCertificate> => {
  const contents: any = {};
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

const deserializeAws_restXmlInvalidWebACLIdResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidWebACLId> => {
  const contents: any = {};
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

const deserializeAws_restXmlKeyGroupAlreadyExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KeyGroupAlreadyExists> => {
  const contents: any = {};
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

const deserializeAws_restXmlMissingBodyResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MissingBody> => {
  const contents: any = {};
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

const deserializeAws_restXmlNoSuchCachePolicyResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchCachePolicy> => {
  const contents: any = {};
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

const deserializeAws_restXmlNoSuchCloudFrontOriginAccessIdentityResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchCloudFrontOriginAccessIdentity> => {
  const contents: any = {};
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

const deserializeAws_restXmlNoSuchDistributionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchDistribution> => {
  const contents: any = {};
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

const deserializeAws_restXmlNoSuchFieldLevelEncryptionConfigResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchFieldLevelEncryptionConfig> => {
  const contents: any = {};
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

const deserializeAws_restXmlNoSuchFieldLevelEncryptionProfileResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchFieldLevelEncryptionProfile> => {
  const contents: any = {};
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

const deserializeAws_restXmlNoSuchFunctionExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchFunctionExists> => {
  const contents: any = {};
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

const deserializeAws_restXmlNoSuchInvalidationResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchInvalidation> => {
  const contents: any = {};
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

const deserializeAws_restXmlNoSuchOriginResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchOrigin> => {
  const contents: any = {};
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

const deserializeAws_restXmlNoSuchOriginRequestPolicyResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchOriginRequestPolicy> => {
  const contents: any = {};
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

const deserializeAws_restXmlNoSuchPublicKeyResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchPublicKey> => {
  const contents: any = {};
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

const deserializeAws_restXmlNoSuchRealtimeLogConfigResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchRealtimeLogConfig> => {
  const contents: any = {};
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

const deserializeAws_restXmlNoSuchResourceResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchResource> => {
  const contents: any = {};
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

const deserializeAws_restXmlNoSuchResponseHeadersPolicyResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchResponseHeadersPolicy> => {
  const contents: any = {};
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

const deserializeAws_restXmlNoSuchStreamingDistributionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchStreamingDistribution> => {
  const contents: any = {};
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

const deserializeAws_restXmlOriginRequestPolicyAlreadyExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OriginRequestPolicyAlreadyExists> => {
  const contents: any = {};
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

const deserializeAws_restXmlOriginRequestPolicyInUseResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OriginRequestPolicyInUse> => {
  const contents: any = {};
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

const deserializeAws_restXmlPreconditionFailedResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PreconditionFailed> => {
  const contents: any = {};
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

const deserializeAws_restXmlPublicKeyAlreadyExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PublicKeyAlreadyExists> => {
  const contents: any = {};
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

const deserializeAws_restXmlPublicKeyInUseResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PublicKeyInUse> => {
  const contents: any = {};
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

const deserializeAws_restXmlQueryArgProfileEmptyResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<QueryArgProfileEmpty> => {
  const contents: any = {};
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

const deserializeAws_restXmlRealtimeLogConfigAlreadyExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RealtimeLogConfigAlreadyExists> => {
  const contents: any = {};
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

const deserializeAws_restXmlRealtimeLogConfigInUseResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RealtimeLogConfigInUse> => {
  const contents: any = {};
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

const deserializeAws_restXmlRealtimeLogConfigOwnerMismatchResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RealtimeLogConfigOwnerMismatch> => {
  const contents: any = {};
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

const deserializeAws_restXmlResourceInUseResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUse> => {
  const contents: any = {};
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

const deserializeAws_restXmlResponseHeadersPolicyAlreadyExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResponseHeadersPolicyAlreadyExists> => {
  const contents: any = {};
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

const deserializeAws_restXmlResponseHeadersPolicyInUseResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResponseHeadersPolicyInUse> => {
  const contents: any = {};
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

const deserializeAws_restXmlStreamingDistributionAlreadyExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StreamingDistributionAlreadyExists> => {
  const contents: any = {};
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

const deserializeAws_restXmlStreamingDistributionNotDisabledResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StreamingDistributionNotDisabled> => {
  const contents: any = {};
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

const deserializeAws_restXmlTestFunctionFailedResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TestFunctionFailed> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooLongCSPInResponseHeadersPolicyResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooLongCSPInResponseHeadersPolicy> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyCacheBehaviorsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyCacheBehaviors> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyCachePoliciesResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyCachePolicies> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyCertificatesResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyCertificates> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyCloudFrontOriginAccessIdentitiesResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyCloudFrontOriginAccessIdentities> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyCookieNamesInWhiteListResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyCookieNamesInWhiteList> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyCookiesInCachePolicyResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyCookiesInCachePolicy> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyCookiesInOriginRequestPolicyResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyCookiesInOriginRequestPolicy> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyCustomHeadersInResponseHeadersPolicyResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyCustomHeadersInResponseHeadersPolicy> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyDistributionCNAMEsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyDistributionCNAMEs> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyDistributionsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyDistributions> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyDistributionsAssociatedToCachePolicyResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyDistributionsAssociatedToCachePolicy> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyDistributionsAssociatedToFieldLevelEncryptionConfigResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyDistributionsAssociatedToFieldLevelEncryptionConfig> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyDistributionsAssociatedToKeyGroupResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyDistributionsAssociatedToKeyGroup> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyDistributionsAssociatedToOriginRequestPolicyResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyDistributionsAssociatedToOriginRequestPolicy> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyDistributionsAssociatedToResponseHeadersPolicyResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyDistributionsAssociatedToResponseHeadersPolicy> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyDistributionsWithFunctionAssociationsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyDistributionsWithFunctionAssociations> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyDistributionsWithLambdaAssociationsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyDistributionsWithLambdaAssociations> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyDistributionsWithSingleFunctionARNResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyDistributionsWithSingleFunctionARN> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyFieldLevelEncryptionConfigsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyFieldLevelEncryptionConfigs> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyFieldLevelEncryptionContentTypeProfilesResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyFieldLevelEncryptionContentTypeProfiles> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyFieldLevelEncryptionEncryptionEntitiesResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyFieldLevelEncryptionEncryptionEntities> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyFieldLevelEncryptionFieldPatternsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyFieldLevelEncryptionFieldPatterns> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyFieldLevelEncryptionProfilesResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyFieldLevelEncryptionProfiles> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyFieldLevelEncryptionQueryArgProfilesResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyFieldLevelEncryptionQueryArgProfiles> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyFunctionAssociationsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyFunctionAssociations> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyFunctionsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyFunctions> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyHeadersInCachePolicyResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyHeadersInCachePolicy> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyHeadersInForwardedValuesResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyHeadersInForwardedValues> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyHeadersInOriginRequestPolicyResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyHeadersInOriginRequestPolicy> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyInvalidationsInProgressResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyInvalidationsInProgress> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyKeyGroupsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyKeyGroups> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyKeyGroupsAssociatedToDistributionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyKeyGroupsAssociatedToDistribution> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyLambdaFunctionAssociationsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyLambdaFunctionAssociations> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyOriginCustomHeadersResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyOriginCustomHeaders> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyOriginGroupsPerDistributionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyOriginGroupsPerDistribution> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyOriginRequestPoliciesResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyOriginRequestPolicies> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyOriginsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyOrigins> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyPublicKeysResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyPublicKeys> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyPublicKeysInKeyGroupResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyPublicKeysInKeyGroup> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyQueryStringParametersResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyQueryStringParameters> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyQueryStringsInCachePolicyResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyQueryStringsInCachePolicy> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyQueryStringsInOriginRequestPolicyResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyQueryStringsInOriginRequestPolicy> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyRealtimeLogConfigsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRealtimeLogConfigs> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyResponseHeadersPoliciesResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyResponseHeadersPolicies> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyStreamingDistributionCNAMEsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyStreamingDistributionCNAMEs> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyStreamingDistributionsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyStreamingDistributions> => {
  const contents: any = {};
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

const deserializeAws_restXmlTooManyTrustedSignersResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTrustedSigners> => {
  const contents: any = {};
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

const deserializeAws_restXmlTrustedKeyGroupDoesNotExistResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TrustedKeyGroupDoesNotExist> => {
  const contents: any = {};
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

const deserializeAws_restXmlTrustedSignerDoesNotExistResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TrustedSignerDoesNotExist> => {
  const contents: any = {};
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

const deserializeAws_restXmlUnsupportedOperationResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperation> => {
  const contents: any = {};
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

const serializeAws_restXmlAccessControlAllowHeadersList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = new __XmlNode("string").addChildNode(new __XmlText(entry));
      return node.withName("Header");
    });
};

const serializeAws_restXmlAccessControlAllowMethodsList = (
  input: (ResponseHeadersPolicyAccessControlAllowMethodsValues | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = new __XmlNode("ResponseHeadersPolicyAccessControlAllowMethodsValues").addChildNode(
        new __XmlText(entry)
      );
      return node.withName("Method");
    });
};

const serializeAws_restXmlAccessControlAllowOriginsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = new __XmlNode("string").addChildNode(new __XmlText(entry));
      return node.withName("Origin");
    });
};

const serializeAws_restXmlAccessControlExposeHeadersList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = new __XmlNode("string").addChildNode(new __XmlText(entry));
      return node.withName("Header");
    });
};

const serializeAws_restXmlAliases = (input: Aliases, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Aliases");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlAliasList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlAliasList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = new __XmlNode("string").addChildNode(new __XmlText(entry));
      return node.withName("CNAME");
    });
};

const serializeAws_restXmlAllowedMethods = (input: AllowedMethods, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("AllowedMethods");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlMethodsList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.CachedMethods !== undefined && input.CachedMethods !== null) {
    const node = serializeAws_restXmlCachedMethods(input.CachedMethods, context).withName("CachedMethods");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlAwsAccountNumberList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = new __XmlNode("string").addChildNode(new __XmlText(entry));
      return node.withName("AwsAccountNumber");
    });
};

const serializeAws_restXmlCacheBehavior = (input: CacheBehavior, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CacheBehavior");
  if (input.PathPattern !== undefined && input.PathPattern !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.PathPattern)).withName("PathPattern");
    bodyNode.addChildNode(node);
  }
  if (input.TargetOriginId !== undefined && input.TargetOriginId !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.TargetOriginId)).withName("TargetOriginId");
    bodyNode.addChildNode(node);
  }
  if (input.TrustedSigners !== undefined && input.TrustedSigners !== null) {
    const node = serializeAws_restXmlTrustedSigners(input.TrustedSigners, context).withName("TrustedSigners");
    bodyNode.addChildNode(node);
  }
  if (input.TrustedKeyGroups !== undefined && input.TrustedKeyGroups !== null) {
    const node = serializeAws_restXmlTrustedKeyGroups(input.TrustedKeyGroups, context).withName("TrustedKeyGroups");
    bodyNode.addChildNode(node);
  }
  if (input.ViewerProtocolPolicy !== undefined && input.ViewerProtocolPolicy !== null) {
    const node = new __XmlNode("ViewerProtocolPolicy")
      .addChildNode(new __XmlText(input.ViewerProtocolPolicy))
      .withName("ViewerProtocolPolicy");
    bodyNode.addChildNode(node);
  }
  if (input.AllowedMethods !== undefined && input.AllowedMethods !== null) {
    const node = serializeAws_restXmlAllowedMethods(input.AllowedMethods, context).withName("AllowedMethods");
    bodyNode.addChildNode(node);
  }
  if (input.SmoothStreaming !== undefined && input.SmoothStreaming !== null) {
    const node = new __XmlNode("boolean")
      .addChildNode(new __XmlText(String(input.SmoothStreaming)))
      .withName("SmoothStreaming");
    bodyNode.addChildNode(node);
  }
  if (input.Compress !== undefined && input.Compress !== null) {
    const node = new __XmlNode("boolean").addChildNode(new __XmlText(String(input.Compress))).withName("Compress");
    bodyNode.addChildNode(node);
  }
  if (input.LambdaFunctionAssociations !== undefined && input.LambdaFunctionAssociations !== null) {
    const node = serializeAws_restXmlLambdaFunctionAssociations(input.LambdaFunctionAssociations, context).withName(
      "LambdaFunctionAssociations"
    );
    bodyNode.addChildNode(node);
  }
  if (input.FunctionAssociations !== undefined && input.FunctionAssociations !== null) {
    const node = serializeAws_restXmlFunctionAssociations(input.FunctionAssociations, context).withName(
      "FunctionAssociations"
    );
    bodyNode.addChildNode(node);
  }
  if (input.FieldLevelEncryptionId !== undefined && input.FieldLevelEncryptionId !== null) {
    const node = new __XmlNode("string")
      .addChildNode(new __XmlText(input.FieldLevelEncryptionId))
      .withName("FieldLevelEncryptionId");
    bodyNode.addChildNode(node);
  }
  if (input.RealtimeLogConfigArn !== undefined && input.RealtimeLogConfigArn !== null) {
    const node = new __XmlNode("string")
      .addChildNode(new __XmlText(input.RealtimeLogConfigArn))
      .withName("RealtimeLogConfigArn");
    bodyNode.addChildNode(node);
  }
  if (input.CachePolicyId !== undefined && input.CachePolicyId !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.CachePolicyId)).withName("CachePolicyId");
    bodyNode.addChildNode(node);
  }
  if (input.OriginRequestPolicyId !== undefined && input.OriginRequestPolicyId !== null) {
    const node = new __XmlNode("string")
      .addChildNode(new __XmlText(input.OriginRequestPolicyId))
      .withName("OriginRequestPolicyId");
    bodyNode.addChildNode(node);
  }
  if (input.ResponseHeadersPolicyId !== undefined && input.ResponseHeadersPolicyId !== null) {
    const node = new __XmlNode("string")
      .addChildNode(new __XmlText(input.ResponseHeadersPolicyId))
      .withName("ResponseHeadersPolicyId");
    bodyNode.addChildNode(node);
  }
  if (input.ForwardedValues !== undefined && input.ForwardedValues !== null) {
    const node = serializeAws_restXmlForwardedValues(input.ForwardedValues, context).withName("ForwardedValues");
    bodyNode.addChildNode(node);
  }
  if (input.MinTTL !== undefined && input.MinTTL !== null) {
    const node = new __XmlNode("long").addChildNode(new __XmlText(String(input.MinTTL))).withName("MinTTL");
    bodyNode.addChildNode(node);
  }
  if (input.DefaultTTL !== undefined && input.DefaultTTL !== null) {
    const node = new __XmlNode("long").addChildNode(new __XmlText(String(input.DefaultTTL))).withName("DefaultTTL");
    bodyNode.addChildNode(node);
  }
  if (input.MaxTTL !== undefined && input.MaxTTL !== null) {
    const node = new __XmlNode("long").addChildNode(new __XmlText(String(input.MaxTTL))).withName("MaxTTL");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlCacheBehaviorList = (input: CacheBehavior[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlCacheBehavior(entry, context);
      return node.withName("CacheBehavior");
    });
};

const serializeAws_restXmlCacheBehaviors = (input: CacheBehaviors, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CacheBehaviors");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlCacheBehaviorList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlCachedMethods = (input: CachedMethods, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CachedMethods");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlMethodsList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlCachePolicyConfig = (input: CachePolicyConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CachePolicyConfig");
  if (input.Comment !== undefined && input.Comment !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.Comment)).withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.Name !== undefined && input.Name !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.Name)).withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.DefaultTTL !== undefined && input.DefaultTTL !== null) {
    const node = new __XmlNode("long").addChildNode(new __XmlText(String(input.DefaultTTL))).withName("DefaultTTL");
    bodyNode.addChildNode(node);
  }
  if (input.MaxTTL !== undefined && input.MaxTTL !== null) {
    const node = new __XmlNode("long").addChildNode(new __XmlText(String(input.MaxTTL))).withName("MaxTTL");
    bodyNode.addChildNode(node);
  }
  if (input.MinTTL !== undefined && input.MinTTL !== null) {
    const node = new __XmlNode("long").addChildNode(new __XmlText(String(input.MinTTL))).withName("MinTTL");
    bodyNode.addChildNode(node);
  }
  if (
    input.ParametersInCacheKeyAndForwardedToOrigin !== undefined &&
    input.ParametersInCacheKeyAndForwardedToOrigin !== null
  ) {
    const node = serializeAws_restXmlParametersInCacheKeyAndForwardedToOrigin(
      input.ParametersInCacheKeyAndForwardedToOrigin,
      context
    ).withName("ParametersInCacheKeyAndForwardedToOrigin");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlCachePolicyCookiesConfig = (
  input: CachePolicyCookiesConfig,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("CachePolicyCookiesConfig");
  if (input.CookieBehavior !== undefined && input.CookieBehavior !== null) {
    const node = new __XmlNode("CachePolicyCookieBehavior")
      .addChildNode(new __XmlText(input.CookieBehavior))
      .withName("CookieBehavior");
    bodyNode.addChildNode(node);
  }
  if (input.Cookies !== undefined && input.Cookies !== null) {
    const node = serializeAws_restXmlCookieNames(input.Cookies, context).withName("Cookies");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlCachePolicyHeadersConfig = (
  input: CachePolicyHeadersConfig,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("CachePolicyHeadersConfig");
  if (input.HeaderBehavior !== undefined && input.HeaderBehavior !== null) {
    const node = new __XmlNode("CachePolicyHeaderBehavior")
      .addChildNode(new __XmlText(input.HeaderBehavior))
      .withName("HeaderBehavior");
    bodyNode.addChildNode(node);
  }
  if (input.Headers !== undefined && input.Headers !== null) {
    const node = serializeAws_restXmlHeaders(input.Headers, context).withName("Headers");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlCachePolicyQueryStringsConfig = (
  input: CachePolicyQueryStringsConfig,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("CachePolicyQueryStringsConfig");
  if (input.QueryStringBehavior !== undefined && input.QueryStringBehavior !== null) {
    const node = new __XmlNode("CachePolicyQueryStringBehavior")
      .addChildNode(new __XmlText(input.QueryStringBehavior))
      .withName("QueryStringBehavior");
    bodyNode.addChildNode(node);
  }
  if (input.QueryStrings !== undefined && input.QueryStrings !== null) {
    const node = serializeAws_restXmlQueryStringNames(input.QueryStrings, context).withName("QueryStrings");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlCloudFrontOriginAccessIdentityConfig = (
  input: CloudFrontOriginAccessIdentityConfig,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("CloudFrontOriginAccessIdentityConfig");
  if (input.CallerReference !== undefined && input.CallerReference !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.CallerReference)).withName("CallerReference");
    bodyNode.addChildNode(node);
  }
  if (input.Comment !== undefined && input.Comment !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.Comment)).withName("Comment");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlContentTypeProfile = (input: ContentTypeProfile, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ContentTypeProfile");
  if (input.Format !== undefined && input.Format !== null) {
    const node = new __XmlNode("Format").addChildNode(new __XmlText(input.Format)).withName("Format");
    bodyNode.addChildNode(node);
  }
  if (input.ProfileId !== undefined && input.ProfileId !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.ProfileId)).withName("ProfileId");
    bodyNode.addChildNode(node);
  }
  if (input.ContentType !== undefined && input.ContentType !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.ContentType)).withName("ContentType");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlContentTypeProfileConfig = (
  input: ContentTypeProfileConfig,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ContentTypeProfileConfig");
  if (input.ForwardWhenContentTypeIsUnknown !== undefined && input.ForwardWhenContentTypeIsUnknown !== null) {
    const node = new __XmlNode("boolean")
      .addChildNode(new __XmlText(String(input.ForwardWhenContentTypeIsUnknown)))
      .withName("ForwardWhenContentTypeIsUnknown");
    bodyNode.addChildNode(node);
  }
  if (input.ContentTypeProfiles !== undefined && input.ContentTypeProfiles !== null) {
    const node = serializeAws_restXmlContentTypeProfiles(input.ContentTypeProfiles, context).withName(
      "ContentTypeProfiles"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlContentTypeProfileList = (input: ContentTypeProfile[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlContentTypeProfile(entry, context);
      return node.withName("ContentTypeProfile");
    });
};

const serializeAws_restXmlContentTypeProfiles = (input: ContentTypeProfiles, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ContentTypeProfiles");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlContentTypeProfileList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlCookieNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = new __XmlNode("string").addChildNode(new __XmlText(entry));
      return node.withName("Name");
    });
};

const serializeAws_restXmlCookieNames = (input: CookieNames, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CookieNames");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlCookieNameList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlCookiePreference = (input: CookiePreference, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CookiePreference");
  if (input.Forward !== undefined && input.Forward !== null) {
    const node = new __XmlNode("ItemSelection").addChildNode(new __XmlText(input.Forward)).withName("Forward");
    bodyNode.addChildNode(node);
  }
  if (input.WhitelistedNames !== undefined && input.WhitelistedNames !== null) {
    const node = serializeAws_restXmlCookieNames(input.WhitelistedNames, context).withName("WhitelistedNames");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlCustomErrorResponse = (input: CustomErrorResponse, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CustomErrorResponse");
  if (input.ErrorCode !== undefined && input.ErrorCode !== null) {
    const node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.ErrorCode))).withName("ErrorCode");
    bodyNode.addChildNode(node);
  }
  if (input.ResponsePagePath !== undefined && input.ResponsePagePath !== null) {
    const node = new __XmlNode("string")
      .addChildNode(new __XmlText(input.ResponsePagePath))
      .withName("ResponsePagePath");
    bodyNode.addChildNode(node);
  }
  if (input.ResponseCode !== undefined && input.ResponseCode !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.ResponseCode)).withName("ResponseCode");
    bodyNode.addChildNode(node);
  }
  if (input.ErrorCachingMinTTL !== undefined && input.ErrorCachingMinTTL !== null) {
    const node = new __XmlNode("long")
      .addChildNode(new __XmlText(String(input.ErrorCachingMinTTL)))
      .withName("ErrorCachingMinTTL");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlCustomErrorResponseList = (input: CustomErrorResponse[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlCustomErrorResponse(entry, context);
      return node.withName("CustomErrorResponse");
    });
};

const serializeAws_restXmlCustomErrorResponses = (input: CustomErrorResponses, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CustomErrorResponses");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlCustomErrorResponseList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlCustomHeaders = (input: CustomHeaders, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CustomHeaders");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlOriginCustomHeadersList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlCustomOriginConfig = (input: CustomOriginConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CustomOriginConfig");
  if (input.HTTPPort !== undefined && input.HTTPPort !== null) {
    const node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.HTTPPort))).withName("HTTPPort");
    bodyNode.addChildNode(node);
  }
  if (input.HTTPSPort !== undefined && input.HTTPSPort !== null) {
    const node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.HTTPSPort))).withName("HTTPSPort");
    bodyNode.addChildNode(node);
  }
  if (input.OriginProtocolPolicy !== undefined && input.OriginProtocolPolicy !== null) {
    const node = new __XmlNode("OriginProtocolPolicy")
      .addChildNode(new __XmlText(input.OriginProtocolPolicy))
      .withName("OriginProtocolPolicy");
    bodyNode.addChildNode(node);
  }
  if (input.OriginSslProtocols !== undefined && input.OriginSslProtocols !== null) {
    const node = serializeAws_restXmlOriginSslProtocols(input.OriginSslProtocols, context).withName(
      "OriginSslProtocols"
    );
    bodyNode.addChildNode(node);
  }
  if (input.OriginReadTimeout !== undefined && input.OriginReadTimeout !== null) {
    const node = new __XmlNode("integer")
      .addChildNode(new __XmlText(String(input.OriginReadTimeout)))
      .withName("OriginReadTimeout");
    bodyNode.addChildNode(node);
  }
  if (input.OriginKeepaliveTimeout !== undefined && input.OriginKeepaliveTimeout !== null) {
    const node = new __XmlNode("integer")
      .addChildNode(new __XmlText(String(input.OriginKeepaliveTimeout)))
      .withName("OriginKeepaliveTimeout");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlDefaultCacheBehavior = (input: DefaultCacheBehavior, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("DefaultCacheBehavior");
  if (input.TargetOriginId !== undefined && input.TargetOriginId !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.TargetOriginId)).withName("TargetOriginId");
    bodyNode.addChildNode(node);
  }
  if (input.TrustedSigners !== undefined && input.TrustedSigners !== null) {
    const node = serializeAws_restXmlTrustedSigners(input.TrustedSigners, context).withName("TrustedSigners");
    bodyNode.addChildNode(node);
  }
  if (input.TrustedKeyGroups !== undefined && input.TrustedKeyGroups !== null) {
    const node = serializeAws_restXmlTrustedKeyGroups(input.TrustedKeyGroups, context).withName("TrustedKeyGroups");
    bodyNode.addChildNode(node);
  }
  if (input.ViewerProtocolPolicy !== undefined && input.ViewerProtocolPolicy !== null) {
    const node = new __XmlNode("ViewerProtocolPolicy")
      .addChildNode(new __XmlText(input.ViewerProtocolPolicy))
      .withName("ViewerProtocolPolicy");
    bodyNode.addChildNode(node);
  }
  if (input.AllowedMethods !== undefined && input.AllowedMethods !== null) {
    const node = serializeAws_restXmlAllowedMethods(input.AllowedMethods, context).withName("AllowedMethods");
    bodyNode.addChildNode(node);
  }
  if (input.SmoothStreaming !== undefined && input.SmoothStreaming !== null) {
    const node = new __XmlNode("boolean")
      .addChildNode(new __XmlText(String(input.SmoothStreaming)))
      .withName("SmoothStreaming");
    bodyNode.addChildNode(node);
  }
  if (input.Compress !== undefined && input.Compress !== null) {
    const node = new __XmlNode("boolean").addChildNode(new __XmlText(String(input.Compress))).withName("Compress");
    bodyNode.addChildNode(node);
  }
  if (input.LambdaFunctionAssociations !== undefined && input.LambdaFunctionAssociations !== null) {
    const node = serializeAws_restXmlLambdaFunctionAssociations(input.LambdaFunctionAssociations, context).withName(
      "LambdaFunctionAssociations"
    );
    bodyNode.addChildNode(node);
  }
  if (input.FunctionAssociations !== undefined && input.FunctionAssociations !== null) {
    const node = serializeAws_restXmlFunctionAssociations(input.FunctionAssociations, context).withName(
      "FunctionAssociations"
    );
    bodyNode.addChildNode(node);
  }
  if (input.FieldLevelEncryptionId !== undefined && input.FieldLevelEncryptionId !== null) {
    const node = new __XmlNode("string")
      .addChildNode(new __XmlText(input.FieldLevelEncryptionId))
      .withName("FieldLevelEncryptionId");
    bodyNode.addChildNode(node);
  }
  if (input.RealtimeLogConfigArn !== undefined && input.RealtimeLogConfigArn !== null) {
    const node = new __XmlNode("string")
      .addChildNode(new __XmlText(input.RealtimeLogConfigArn))
      .withName("RealtimeLogConfigArn");
    bodyNode.addChildNode(node);
  }
  if (input.CachePolicyId !== undefined && input.CachePolicyId !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.CachePolicyId)).withName("CachePolicyId");
    bodyNode.addChildNode(node);
  }
  if (input.OriginRequestPolicyId !== undefined && input.OriginRequestPolicyId !== null) {
    const node = new __XmlNode("string")
      .addChildNode(new __XmlText(input.OriginRequestPolicyId))
      .withName("OriginRequestPolicyId");
    bodyNode.addChildNode(node);
  }
  if (input.ResponseHeadersPolicyId !== undefined && input.ResponseHeadersPolicyId !== null) {
    const node = new __XmlNode("string")
      .addChildNode(new __XmlText(input.ResponseHeadersPolicyId))
      .withName("ResponseHeadersPolicyId");
    bodyNode.addChildNode(node);
  }
  if (input.ForwardedValues !== undefined && input.ForwardedValues !== null) {
    const node = serializeAws_restXmlForwardedValues(input.ForwardedValues, context).withName("ForwardedValues");
    bodyNode.addChildNode(node);
  }
  if (input.MinTTL !== undefined && input.MinTTL !== null) {
    const node = new __XmlNode("long").addChildNode(new __XmlText(String(input.MinTTL))).withName("MinTTL");
    bodyNode.addChildNode(node);
  }
  if (input.DefaultTTL !== undefined && input.DefaultTTL !== null) {
    const node = new __XmlNode("long").addChildNode(new __XmlText(String(input.DefaultTTL))).withName("DefaultTTL");
    bodyNode.addChildNode(node);
  }
  if (input.MaxTTL !== undefined && input.MaxTTL !== null) {
    const node = new __XmlNode("long").addChildNode(new __XmlText(String(input.MaxTTL))).withName("MaxTTL");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlDistributionConfig = (input: DistributionConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("DistributionConfig");
  if (input.CallerReference !== undefined && input.CallerReference !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.CallerReference)).withName("CallerReference");
    bodyNode.addChildNode(node);
  }
  if (input.Aliases !== undefined && input.Aliases !== null) {
    const node = serializeAws_restXmlAliases(input.Aliases, context).withName("Aliases");
    bodyNode.addChildNode(node);
  }
  if (input.DefaultRootObject !== undefined && input.DefaultRootObject !== null) {
    const node = new __XmlNode("string")
      .addChildNode(new __XmlText(input.DefaultRootObject))
      .withName("DefaultRootObject");
    bodyNode.addChildNode(node);
  }
  if (input.Origins !== undefined && input.Origins !== null) {
    const node = serializeAws_restXmlOrigins(input.Origins, context).withName("Origins");
    bodyNode.addChildNode(node);
  }
  if (input.OriginGroups !== undefined && input.OriginGroups !== null) {
    const node = serializeAws_restXmlOriginGroups(input.OriginGroups, context).withName("OriginGroups");
    bodyNode.addChildNode(node);
  }
  if (input.DefaultCacheBehavior !== undefined && input.DefaultCacheBehavior !== null) {
    const node = serializeAws_restXmlDefaultCacheBehavior(input.DefaultCacheBehavior, context).withName(
      "DefaultCacheBehavior"
    );
    bodyNode.addChildNode(node);
  }
  if (input.CacheBehaviors !== undefined && input.CacheBehaviors !== null) {
    const node = serializeAws_restXmlCacheBehaviors(input.CacheBehaviors, context).withName("CacheBehaviors");
    bodyNode.addChildNode(node);
  }
  if (input.CustomErrorResponses !== undefined && input.CustomErrorResponses !== null) {
    const node = serializeAws_restXmlCustomErrorResponses(input.CustomErrorResponses, context).withName(
      "CustomErrorResponses"
    );
    bodyNode.addChildNode(node);
  }
  if (input.Comment !== undefined && input.Comment !== null) {
    const node = new __XmlNode("CommentType").addChildNode(new __XmlText(input.Comment)).withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.Logging !== undefined && input.Logging !== null) {
    const node = serializeAws_restXmlLoggingConfig(input.Logging, context).withName("Logging");
    bodyNode.addChildNode(node);
  }
  if (input.PriceClass !== undefined && input.PriceClass !== null) {
    const node = new __XmlNode("PriceClass").addChildNode(new __XmlText(input.PriceClass)).withName("PriceClass");
    bodyNode.addChildNode(node);
  }
  if (input.Enabled !== undefined && input.Enabled !== null) {
    const node = new __XmlNode("boolean").addChildNode(new __XmlText(String(input.Enabled))).withName("Enabled");
    bodyNode.addChildNode(node);
  }
  if (input.ViewerCertificate !== undefined && input.ViewerCertificate !== null) {
    const node = serializeAws_restXmlViewerCertificate(input.ViewerCertificate, context).withName("ViewerCertificate");
    bodyNode.addChildNode(node);
  }
  if (input.Restrictions !== undefined && input.Restrictions !== null) {
    const node = serializeAws_restXmlRestrictions(input.Restrictions, context).withName("Restrictions");
    bodyNode.addChildNode(node);
  }
  if (input.WebACLId !== undefined && input.WebACLId !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.WebACLId)).withName("WebACLId");
    bodyNode.addChildNode(node);
  }
  if (input.HttpVersion !== undefined && input.HttpVersion !== null) {
    const node = new __XmlNode("HttpVersion").addChildNode(new __XmlText(input.HttpVersion)).withName("HttpVersion");
    bodyNode.addChildNode(node);
  }
  if (input.IsIPV6Enabled !== undefined && input.IsIPV6Enabled !== null) {
    const node = new __XmlNode("boolean")
      .addChildNode(new __XmlText(String(input.IsIPV6Enabled)))
      .withName("IsIPV6Enabled");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlDistributionConfigWithTags = (
  input: DistributionConfigWithTags,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("DistributionConfigWithTags");
  if (input.DistributionConfig !== undefined && input.DistributionConfig !== null) {
    const node = serializeAws_restXmlDistributionConfig(input.DistributionConfig, context).withName(
      "DistributionConfig"
    );
    bodyNode.addChildNode(node);
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    const node = serializeAws_restXmlTags(input.Tags, context).withName("Tags");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlEncryptionEntities = (input: EncryptionEntities, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("EncryptionEntities");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlEncryptionEntityList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlEncryptionEntity = (input: EncryptionEntity, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("EncryptionEntity");
  if (input.PublicKeyId !== undefined && input.PublicKeyId !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.PublicKeyId)).withName("PublicKeyId");
    bodyNode.addChildNode(node);
  }
  if (input.ProviderId !== undefined && input.ProviderId !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.ProviderId)).withName("ProviderId");
    bodyNode.addChildNode(node);
  }
  if (input.FieldPatterns !== undefined && input.FieldPatterns !== null) {
    const node = serializeAws_restXmlFieldPatterns(input.FieldPatterns, context).withName("FieldPatterns");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlEncryptionEntityList = (input: EncryptionEntity[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlEncryptionEntity(entry, context);
      return node.withName("EncryptionEntity");
    });
};

const serializeAws_restXmlEndPoint = (input: EndPoint, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("EndPoint");
  if (input.StreamType !== undefined && input.StreamType !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.StreamType)).withName("StreamType");
    bodyNode.addChildNode(node);
  }
  if (input.KinesisStreamConfig !== undefined && input.KinesisStreamConfig !== null) {
    const node = serializeAws_restXmlKinesisStreamConfig(input.KinesisStreamConfig, context).withName(
      "KinesisStreamConfig"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlEndPointList = (input: EndPoint[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlEndPoint(entry, context);
      return node.withName("member");
    });
};

const serializeAws_restXmlFieldLevelEncryptionConfig = (
  input: FieldLevelEncryptionConfig,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("FieldLevelEncryptionConfig");
  if (input.CallerReference !== undefined && input.CallerReference !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.CallerReference)).withName("CallerReference");
    bodyNode.addChildNode(node);
  }
  if (input.Comment !== undefined && input.Comment !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.Comment)).withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.QueryArgProfileConfig !== undefined && input.QueryArgProfileConfig !== null) {
    const node = serializeAws_restXmlQueryArgProfileConfig(input.QueryArgProfileConfig, context).withName(
      "QueryArgProfileConfig"
    );
    bodyNode.addChildNode(node);
  }
  if (input.ContentTypeProfileConfig !== undefined && input.ContentTypeProfileConfig !== null) {
    const node = serializeAws_restXmlContentTypeProfileConfig(input.ContentTypeProfileConfig, context).withName(
      "ContentTypeProfileConfig"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlFieldLevelEncryptionProfileConfig = (
  input: FieldLevelEncryptionProfileConfig,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("FieldLevelEncryptionProfileConfig");
  if (input.Name !== undefined && input.Name !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.Name)).withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.CallerReference !== undefined && input.CallerReference !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.CallerReference)).withName("CallerReference");
    bodyNode.addChildNode(node);
  }
  if (input.Comment !== undefined && input.Comment !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.Comment)).withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.EncryptionEntities !== undefined && input.EncryptionEntities !== null) {
    const node = serializeAws_restXmlEncryptionEntities(input.EncryptionEntities, context).withName(
      "EncryptionEntities"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlFieldList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = new __XmlNode("string").addChildNode(new __XmlText(entry));
      return node.withName("Field");
    });
};

const serializeAws_restXmlFieldPatternList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = new __XmlNode("string").addChildNode(new __XmlText(entry));
      return node.withName("FieldPattern");
    });
};

const serializeAws_restXmlFieldPatterns = (input: FieldPatterns, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("FieldPatterns");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlFieldPatternList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlForwardedValues = (input: ForwardedValues, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ForwardedValues");
  if (input.QueryString !== undefined && input.QueryString !== null) {
    const node = new __XmlNode("boolean")
      .addChildNode(new __XmlText(String(input.QueryString)))
      .withName("QueryString");
    bodyNode.addChildNode(node);
  }
  if (input.Cookies !== undefined && input.Cookies !== null) {
    const node = serializeAws_restXmlCookiePreference(input.Cookies, context).withName("Cookies");
    bodyNode.addChildNode(node);
  }
  if (input.Headers !== undefined && input.Headers !== null) {
    const node = serializeAws_restXmlHeaders(input.Headers, context).withName("Headers");
    bodyNode.addChildNode(node);
  }
  if (input.QueryStringCacheKeys !== undefined && input.QueryStringCacheKeys !== null) {
    const node = serializeAws_restXmlQueryStringCacheKeys(input.QueryStringCacheKeys, context).withName(
      "QueryStringCacheKeys"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlFunctionAssociation = (input: FunctionAssociation, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("FunctionAssociation");
  if (input.FunctionARN !== undefined && input.FunctionARN !== null) {
    const node = new __XmlNode("FunctionARN").addChildNode(new __XmlText(input.FunctionARN)).withName("FunctionARN");
    bodyNode.addChildNode(node);
  }
  if (input.EventType !== undefined && input.EventType !== null) {
    const node = new __XmlNode("EventType").addChildNode(new __XmlText(input.EventType)).withName("EventType");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlFunctionAssociationList = (input: FunctionAssociation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlFunctionAssociation(entry, context);
      return node.withName("FunctionAssociation");
    });
};

const serializeAws_restXmlFunctionAssociations = (input: FunctionAssociations, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("FunctionAssociations");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlFunctionAssociationList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlFunctionConfig = (input: FunctionConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("FunctionConfig");
  if (input.Comment !== undefined && input.Comment !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.Comment)).withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.Runtime !== undefined && input.Runtime !== null) {
    const node = new __XmlNode("FunctionRuntime").addChildNode(new __XmlText(input.Runtime)).withName("Runtime");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlGeoRestriction = (input: GeoRestriction, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("GeoRestriction");
  if (input.RestrictionType !== undefined && input.RestrictionType !== null) {
    const node = new __XmlNode("GeoRestrictionType")
      .addChildNode(new __XmlText(input.RestrictionType))
      .withName("RestrictionType");
    bodyNode.addChildNode(node);
  }
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlLocationList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlHeaderList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = new __XmlNode("string").addChildNode(new __XmlText(entry));
      return node.withName("Name");
    });
};

const serializeAws_restXmlHeaders = (input: Headers, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Headers");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlHeaderList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlInvalidationBatch = (input: InvalidationBatch, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("InvalidationBatch");
  if (input.Paths !== undefined && input.Paths !== null) {
    const node = serializeAws_restXmlPaths(input.Paths, context).withName("Paths");
    bodyNode.addChildNode(node);
  }
  if (input.CallerReference !== undefined && input.CallerReference !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.CallerReference)).withName("CallerReference");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlKeyGroupConfig = (input: KeyGroupConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("KeyGroupConfig");
  if (input.Name !== undefined && input.Name !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.Name)).withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlPublicKeyIdList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.Comment !== undefined && input.Comment !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.Comment)).withName("Comment");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlKinesisStreamConfig = (input: KinesisStreamConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("KinesisStreamConfig");
  if (input.RoleARN !== undefined && input.RoleARN !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.RoleARN)).withName("RoleARN");
    bodyNode.addChildNode(node);
  }
  if (input.StreamARN !== undefined && input.StreamARN !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.StreamARN)).withName("StreamARN");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlLambdaFunctionAssociation = (
  input: LambdaFunctionAssociation,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("LambdaFunctionAssociation");
  if (input.LambdaFunctionARN !== undefined && input.LambdaFunctionARN !== null) {
    const node = new __XmlNode("LambdaFunctionARN")
      .addChildNode(new __XmlText(input.LambdaFunctionARN))
      .withName("LambdaFunctionARN");
    bodyNode.addChildNode(node);
  }
  if (input.EventType !== undefined && input.EventType !== null) {
    const node = new __XmlNode("EventType").addChildNode(new __XmlText(input.EventType)).withName("EventType");
    bodyNode.addChildNode(node);
  }
  if (input.IncludeBody !== undefined && input.IncludeBody !== null) {
    const node = new __XmlNode("boolean")
      .addChildNode(new __XmlText(String(input.IncludeBody)))
      .withName("IncludeBody");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlLambdaFunctionAssociationList = (
  input: LambdaFunctionAssociation[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlLambdaFunctionAssociation(entry, context);
      return node.withName("LambdaFunctionAssociation");
    });
};

const serializeAws_restXmlLambdaFunctionAssociations = (
  input: LambdaFunctionAssociations,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("LambdaFunctionAssociations");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlLambdaFunctionAssociationList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlLocationList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = new __XmlNode("string").addChildNode(new __XmlText(entry));
      return node.withName("Location");
    });
};

const serializeAws_restXmlLoggingConfig = (input: LoggingConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("LoggingConfig");
  if (input.Enabled !== undefined && input.Enabled !== null) {
    const node = new __XmlNode("boolean").addChildNode(new __XmlText(String(input.Enabled))).withName("Enabled");
    bodyNode.addChildNode(node);
  }
  if (input.IncludeCookies !== undefined && input.IncludeCookies !== null) {
    const node = new __XmlNode("boolean")
      .addChildNode(new __XmlText(String(input.IncludeCookies)))
      .withName("IncludeCookies");
    bodyNode.addChildNode(node);
  }
  if (input.Bucket !== undefined && input.Bucket !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.Bucket)).withName("Bucket");
    bodyNode.addChildNode(node);
  }
  if (input.Prefix !== undefined && input.Prefix !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlMethodsList = (input: (Method | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = new __XmlNode("Method").addChildNode(new __XmlText(entry));
      return node.withName("Method");
    });
};

const serializeAws_restXmlMonitoringSubscription = (input: MonitoringSubscription, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("MonitoringSubscription");
  if (input.RealtimeMetricsSubscriptionConfig !== undefined && input.RealtimeMetricsSubscriptionConfig !== null) {
    const node = serializeAws_restXmlRealtimeMetricsSubscriptionConfig(
      input.RealtimeMetricsSubscriptionConfig,
      context
    ).withName("RealtimeMetricsSubscriptionConfig");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlOrigin = (input: Origin, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Origin");
  if (input.Id !== undefined && input.Id !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.Id)).withName("Id");
    bodyNode.addChildNode(node);
  }
  if (input.DomainName !== undefined && input.DomainName !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.DomainName)).withName("DomainName");
    bodyNode.addChildNode(node);
  }
  if (input.OriginPath !== undefined && input.OriginPath !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.OriginPath)).withName("OriginPath");
    bodyNode.addChildNode(node);
  }
  if (input.CustomHeaders !== undefined && input.CustomHeaders !== null) {
    const node = serializeAws_restXmlCustomHeaders(input.CustomHeaders, context).withName("CustomHeaders");
    bodyNode.addChildNode(node);
  }
  if (input.S3OriginConfig !== undefined && input.S3OriginConfig !== null) {
    const node = serializeAws_restXmlS3OriginConfig(input.S3OriginConfig, context).withName("S3OriginConfig");
    bodyNode.addChildNode(node);
  }
  if (input.CustomOriginConfig !== undefined && input.CustomOriginConfig !== null) {
    const node = serializeAws_restXmlCustomOriginConfig(input.CustomOriginConfig, context).withName(
      "CustomOriginConfig"
    );
    bodyNode.addChildNode(node);
  }
  if (input.ConnectionAttempts !== undefined && input.ConnectionAttempts !== null) {
    const node = new __XmlNode("integer")
      .addChildNode(new __XmlText(String(input.ConnectionAttempts)))
      .withName("ConnectionAttempts");
    bodyNode.addChildNode(node);
  }
  if (input.ConnectionTimeout !== undefined && input.ConnectionTimeout !== null) {
    const node = new __XmlNode("integer")
      .addChildNode(new __XmlText(String(input.ConnectionTimeout)))
      .withName("ConnectionTimeout");
    bodyNode.addChildNode(node);
  }
  if (input.OriginShield !== undefined && input.OriginShield !== null) {
    const node = serializeAws_restXmlOriginShield(input.OriginShield, context).withName("OriginShield");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlOriginCustomHeader = (input: OriginCustomHeader, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("OriginCustomHeader");
  if (input.HeaderName !== undefined && input.HeaderName !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.HeaderName)).withName("HeaderName");
    bodyNode.addChildNode(node);
  }
  if (input.HeaderValue !== undefined && input.HeaderValue !== null) {
    const node = new __XmlNode("sensitiveStringType")
      .addChildNode(new __XmlText(input.HeaderValue))
      .withName("HeaderValue");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlOriginCustomHeadersList = (input: OriginCustomHeader[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlOriginCustomHeader(entry, context);
      return node.withName("OriginCustomHeader");
    });
};

const serializeAws_restXmlOriginGroup = (input: OriginGroup, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("OriginGroup");
  if (input.Id !== undefined && input.Id !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.Id)).withName("Id");
    bodyNode.addChildNode(node);
  }
  if (input.FailoverCriteria !== undefined && input.FailoverCriteria !== null) {
    const node = serializeAws_restXmlOriginGroupFailoverCriteria(input.FailoverCriteria, context).withName(
      "FailoverCriteria"
    );
    bodyNode.addChildNode(node);
  }
  if (input.Members !== undefined && input.Members !== null) {
    const node = serializeAws_restXmlOriginGroupMembers(input.Members, context).withName("Members");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlOriginGroupFailoverCriteria = (
  input: OriginGroupFailoverCriteria,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("OriginGroupFailoverCriteria");
  if (input.StatusCodes !== undefined && input.StatusCodes !== null) {
    const node = serializeAws_restXmlStatusCodes(input.StatusCodes, context).withName("StatusCodes");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlOriginGroupList = (input: OriginGroup[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlOriginGroup(entry, context);
      return node.withName("OriginGroup");
    });
};

const serializeAws_restXmlOriginGroupMember = (input: OriginGroupMember, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("OriginGroupMember");
  if (input.OriginId !== undefined && input.OriginId !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.OriginId)).withName("OriginId");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlOriginGroupMemberList = (input: OriginGroupMember[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlOriginGroupMember(entry, context);
      return node.withName("OriginGroupMember");
    });
};

const serializeAws_restXmlOriginGroupMembers = (input: OriginGroupMembers, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("OriginGroupMembers");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlOriginGroupMemberList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlOriginGroups = (input: OriginGroups, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("OriginGroups");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlOriginGroupList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlOriginList = (input: Origin[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlOrigin(entry, context);
      return node.withName("Origin");
    });
};

const serializeAws_restXmlOriginRequestPolicyConfig = (
  input: OriginRequestPolicyConfig,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("OriginRequestPolicyConfig");
  if (input.Comment !== undefined && input.Comment !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.Comment)).withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.Name !== undefined && input.Name !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.Name)).withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.HeadersConfig !== undefined && input.HeadersConfig !== null) {
    const node = serializeAws_restXmlOriginRequestPolicyHeadersConfig(input.HeadersConfig, context).withName(
      "HeadersConfig"
    );
    bodyNode.addChildNode(node);
  }
  if (input.CookiesConfig !== undefined && input.CookiesConfig !== null) {
    const node = serializeAws_restXmlOriginRequestPolicyCookiesConfig(input.CookiesConfig, context).withName(
      "CookiesConfig"
    );
    bodyNode.addChildNode(node);
  }
  if (input.QueryStringsConfig !== undefined && input.QueryStringsConfig !== null) {
    const node = serializeAws_restXmlOriginRequestPolicyQueryStringsConfig(input.QueryStringsConfig, context).withName(
      "QueryStringsConfig"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlOriginRequestPolicyCookiesConfig = (
  input: OriginRequestPolicyCookiesConfig,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("OriginRequestPolicyCookiesConfig");
  if (input.CookieBehavior !== undefined && input.CookieBehavior !== null) {
    const node = new __XmlNode("OriginRequestPolicyCookieBehavior")
      .addChildNode(new __XmlText(input.CookieBehavior))
      .withName("CookieBehavior");
    bodyNode.addChildNode(node);
  }
  if (input.Cookies !== undefined && input.Cookies !== null) {
    const node = serializeAws_restXmlCookieNames(input.Cookies, context).withName("Cookies");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlOriginRequestPolicyHeadersConfig = (
  input: OriginRequestPolicyHeadersConfig,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("OriginRequestPolicyHeadersConfig");
  if (input.HeaderBehavior !== undefined && input.HeaderBehavior !== null) {
    const node = new __XmlNode("OriginRequestPolicyHeaderBehavior")
      .addChildNode(new __XmlText(input.HeaderBehavior))
      .withName("HeaderBehavior");
    bodyNode.addChildNode(node);
  }
  if (input.Headers !== undefined && input.Headers !== null) {
    const node = serializeAws_restXmlHeaders(input.Headers, context).withName("Headers");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlOriginRequestPolicyQueryStringsConfig = (
  input: OriginRequestPolicyQueryStringsConfig,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("OriginRequestPolicyQueryStringsConfig");
  if (input.QueryStringBehavior !== undefined && input.QueryStringBehavior !== null) {
    const node = new __XmlNode("OriginRequestPolicyQueryStringBehavior")
      .addChildNode(new __XmlText(input.QueryStringBehavior))
      .withName("QueryStringBehavior");
    bodyNode.addChildNode(node);
  }
  if (input.QueryStrings !== undefined && input.QueryStrings !== null) {
    const node = serializeAws_restXmlQueryStringNames(input.QueryStrings, context).withName("QueryStrings");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlOrigins = (input: Origins, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Origins");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlOriginList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlOriginShield = (input: OriginShield, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("OriginShield");
  if (input.Enabled !== undefined && input.Enabled !== null) {
    const node = new __XmlNode("boolean").addChildNode(new __XmlText(String(input.Enabled))).withName("Enabled");
    bodyNode.addChildNode(node);
  }
  if (input.OriginShieldRegion !== undefined && input.OriginShieldRegion !== null) {
    const node = new __XmlNode("OriginShieldRegion")
      .addChildNode(new __XmlText(input.OriginShieldRegion))
      .withName("OriginShieldRegion");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlOriginSslProtocols = (input: OriginSslProtocols, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("OriginSslProtocols");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlSslProtocolsList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlParametersInCacheKeyAndForwardedToOrigin = (
  input: ParametersInCacheKeyAndForwardedToOrigin,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ParametersInCacheKeyAndForwardedToOrigin");
  if (input.EnableAcceptEncodingGzip !== undefined && input.EnableAcceptEncodingGzip !== null) {
    const node = new __XmlNode("boolean")
      .addChildNode(new __XmlText(String(input.EnableAcceptEncodingGzip)))
      .withName("EnableAcceptEncodingGzip");
    bodyNode.addChildNode(node);
  }
  if (input.EnableAcceptEncodingBrotli !== undefined && input.EnableAcceptEncodingBrotli !== null) {
    const node = new __XmlNode("boolean")
      .addChildNode(new __XmlText(String(input.EnableAcceptEncodingBrotli)))
      .withName("EnableAcceptEncodingBrotli");
    bodyNode.addChildNode(node);
  }
  if (input.HeadersConfig !== undefined && input.HeadersConfig !== null) {
    const node = serializeAws_restXmlCachePolicyHeadersConfig(input.HeadersConfig, context).withName("HeadersConfig");
    bodyNode.addChildNode(node);
  }
  if (input.CookiesConfig !== undefined && input.CookiesConfig !== null) {
    const node = serializeAws_restXmlCachePolicyCookiesConfig(input.CookiesConfig, context).withName("CookiesConfig");
    bodyNode.addChildNode(node);
  }
  if (input.QueryStringsConfig !== undefined && input.QueryStringsConfig !== null) {
    const node = serializeAws_restXmlCachePolicyQueryStringsConfig(input.QueryStringsConfig, context).withName(
      "QueryStringsConfig"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlPathList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = new __XmlNode("string").addChildNode(new __XmlText(entry));
      return node.withName("Path");
    });
};

const serializeAws_restXmlPaths = (input: Paths, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Paths");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlPathList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlPublicKeyConfig = (input: PublicKeyConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("PublicKeyConfig");
  if (input.CallerReference !== undefined && input.CallerReference !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.CallerReference)).withName("CallerReference");
    bodyNode.addChildNode(node);
  }
  if (input.Name !== undefined && input.Name !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.Name)).withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.EncodedKey !== undefined && input.EncodedKey !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.EncodedKey)).withName("EncodedKey");
    bodyNode.addChildNode(node);
  }
  if (input.Comment !== undefined && input.Comment !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.Comment)).withName("Comment");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlPublicKeyIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = new __XmlNode("string").addChildNode(new __XmlText(entry));
      return node.withName("PublicKey");
    });
};

const serializeAws_restXmlQueryArgProfile = (input: QueryArgProfile, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("QueryArgProfile");
  if (input.QueryArg !== undefined && input.QueryArg !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.QueryArg)).withName("QueryArg");
    bodyNode.addChildNode(node);
  }
  if (input.ProfileId !== undefined && input.ProfileId !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.ProfileId)).withName("ProfileId");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlQueryArgProfileConfig = (input: QueryArgProfileConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("QueryArgProfileConfig");
  if (input.ForwardWhenQueryArgProfileIsUnknown !== undefined && input.ForwardWhenQueryArgProfileIsUnknown !== null) {
    const node = new __XmlNode("boolean")
      .addChildNode(new __XmlText(String(input.ForwardWhenQueryArgProfileIsUnknown)))
      .withName("ForwardWhenQueryArgProfileIsUnknown");
    bodyNode.addChildNode(node);
  }
  if (input.QueryArgProfiles !== undefined && input.QueryArgProfiles !== null) {
    const node = serializeAws_restXmlQueryArgProfiles(input.QueryArgProfiles, context).withName("QueryArgProfiles");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlQueryArgProfileList = (input: QueryArgProfile[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlQueryArgProfile(entry, context);
      return node.withName("QueryArgProfile");
    });
};

const serializeAws_restXmlQueryArgProfiles = (input: QueryArgProfiles, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("QueryArgProfiles");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlQueryArgProfileList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlQueryStringCacheKeys = (input: QueryStringCacheKeys, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("QueryStringCacheKeys");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlQueryStringCacheKeysList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlQueryStringCacheKeysList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = new __XmlNode("string").addChildNode(new __XmlText(entry));
      return node.withName("Name");
    });
};

const serializeAws_restXmlQueryStringNames = (input: QueryStringNames, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("QueryStringNames");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlQueryStringNamesList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlQueryStringNamesList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = new __XmlNode("string").addChildNode(new __XmlText(entry));
      return node.withName("Name");
    });
};

const serializeAws_restXmlRealtimeMetricsSubscriptionConfig = (
  input: RealtimeMetricsSubscriptionConfig,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("RealtimeMetricsSubscriptionConfig");
  if (input.RealtimeMetricsSubscriptionStatus !== undefined && input.RealtimeMetricsSubscriptionStatus !== null) {
    const node = new __XmlNode("RealtimeMetricsSubscriptionStatus")
      .addChildNode(new __XmlText(input.RealtimeMetricsSubscriptionStatus))
      .withName("RealtimeMetricsSubscriptionStatus");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlResponseHeadersPolicyAccessControlAllowHeaders = (
  input: ResponseHeadersPolicyAccessControlAllowHeaders,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ResponseHeadersPolicyAccessControlAllowHeaders");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlAccessControlAllowHeadersList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlResponseHeadersPolicyAccessControlAllowMethods = (
  input: ResponseHeadersPolicyAccessControlAllowMethods,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ResponseHeadersPolicyAccessControlAllowMethods");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlAccessControlAllowMethodsList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlResponseHeadersPolicyAccessControlAllowOrigins = (
  input: ResponseHeadersPolicyAccessControlAllowOrigins,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ResponseHeadersPolicyAccessControlAllowOrigins");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlAccessControlAllowOriginsList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlResponseHeadersPolicyAccessControlExposeHeaders = (
  input: ResponseHeadersPolicyAccessControlExposeHeaders,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ResponseHeadersPolicyAccessControlExposeHeaders");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlAccessControlExposeHeadersList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlResponseHeadersPolicyConfig = (
  input: ResponseHeadersPolicyConfig,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ResponseHeadersPolicyConfig");
  if (input.Comment !== undefined && input.Comment !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.Comment)).withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.Name !== undefined && input.Name !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.Name)).withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.CorsConfig !== undefined && input.CorsConfig !== null) {
    const node = serializeAws_restXmlResponseHeadersPolicyCorsConfig(input.CorsConfig, context).withName("CorsConfig");
    bodyNode.addChildNode(node);
  }
  if (input.SecurityHeadersConfig !== undefined && input.SecurityHeadersConfig !== null) {
    const node = serializeAws_restXmlResponseHeadersPolicySecurityHeadersConfig(
      input.SecurityHeadersConfig,
      context
    ).withName("SecurityHeadersConfig");
    bodyNode.addChildNode(node);
  }
  if (input.CustomHeadersConfig !== undefined && input.CustomHeadersConfig !== null) {
    const node = serializeAws_restXmlResponseHeadersPolicyCustomHeadersConfig(
      input.CustomHeadersConfig,
      context
    ).withName("CustomHeadersConfig");
    bodyNode.addChildNode(node);
  }
  if (input.ServerTimingHeadersConfig !== undefined && input.ServerTimingHeadersConfig !== null) {
    const node = serializeAws_restXmlResponseHeadersPolicyServerTimingHeadersConfig(
      input.ServerTimingHeadersConfig,
      context
    ).withName("ServerTimingHeadersConfig");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlResponseHeadersPolicyContentSecurityPolicy = (
  input: ResponseHeadersPolicyContentSecurityPolicy,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ResponseHeadersPolicyContentSecurityPolicy");
  if (input.Override !== undefined && input.Override !== null) {
    const node = new __XmlNode("boolean").addChildNode(new __XmlText(String(input.Override))).withName("Override");
    bodyNode.addChildNode(node);
  }
  if (input.ContentSecurityPolicy !== undefined && input.ContentSecurityPolicy !== null) {
    const node = new __XmlNode("string")
      .addChildNode(new __XmlText(input.ContentSecurityPolicy))
      .withName("ContentSecurityPolicy");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlResponseHeadersPolicyContentTypeOptions = (
  input: ResponseHeadersPolicyContentTypeOptions,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ResponseHeadersPolicyContentTypeOptions");
  if (input.Override !== undefined && input.Override !== null) {
    const node = new __XmlNode("boolean").addChildNode(new __XmlText(String(input.Override))).withName("Override");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlResponseHeadersPolicyCorsConfig = (
  input: ResponseHeadersPolicyCorsConfig,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ResponseHeadersPolicyCorsConfig");
  if (input.AccessControlAllowOrigins !== undefined && input.AccessControlAllowOrigins !== null) {
    const node = serializeAws_restXmlResponseHeadersPolicyAccessControlAllowOrigins(
      input.AccessControlAllowOrigins,
      context
    ).withName("AccessControlAllowOrigins");
    bodyNode.addChildNode(node);
  }
  if (input.AccessControlAllowHeaders !== undefined && input.AccessControlAllowHeaders !== null) {
    const node = serializeAws_restXmlResponseHeadersPolicyAccessControlAllowHeaders(
      input.AccessControlAllowHeaders,
      context
    ).withName("AccessControlAllowHeaders");
    bodyNode.addChildNode(node);
  }
  if (input.AccessControlAllowMethods !== undefined && input.AccessControlAllowMethods !== null) {
    const node = serializeAws_restXmlResponseHeadersPolicyAccessControlAllowMethods(
      input.AccessControlAllowMethods,
      context
    ).withName("AccessControlAllowMethods");
    bodyNode.addChildNode(node);
  }
  if (input.AccessControlAllowCredentials !== undefined && input.AccessControlAllowCredentials !== null) {
    const node = new __XmlNode("boolean")
      .addChildNode(new __XmlText(String(input.AccessControlAllowCredentials)))
      .withName("AccessControlAllowCredentials");
    bodyNode.addChildNode(node);
  }
  if (input.AccessControlExposeHeaders !== undefined && input.AccessControlExposeHeaders !== null) {
    const node = serializeAws_restXmlResponseHeadersPolicyAccessControlExposeHeaders(
      input.AccessControlExposeHeaders,
      context
    ).withName("AccessControlExposeHeaders");
    bodyNode.addChildNode(node);
  }
  if (input.AccessControlMaxAgeSec !== undefined && input.AccessControlMaxAgeSec !== null) {
    const node = new __XmlNode("integer")
      .addChildNode(new __XmlText(String(input.AccessControlMaxAgeSec)))
      .withName("AccessControlMaxAgeSec");
    bodyNode.addChildNode(node);
  }
  if (input.OriginOverride !== undefined && input.OriginOverride !== null) {
    const node = new __XmlNode("boolean")
      .addChildNode(new __XmlText(String(input.OriginOverride)))
      .withName("OriginOverride");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlResponseHeadersPolicyCustomHeader = (
  input: ResponseHeadersPolicyCustomHeader,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ResponseHeadersPolicyCustomHeader");
  if (input.Header !== undefined && input.Header !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.Header)).withName("Header");
    bodyNode.addChildNode(node);
  }
  if (input.Value !== undefined && input.Value !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.Value)).withName("Value");
    bodyNode.addChildNode(node);
  }
  if (input.Override !== undefined && input.Override !== null) {
    const node = new __XmlNode("boolean").addChildNode(new __XmlText(String(input.Override))).withName("Override");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlResponseHeadersPolicyCustomHeaderList = (
  input: ResponseHeadersPolicyCustomHeader[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlResponseHeadersPolicyCustomHeader(entry, context);
      return node.withName("ResponseHeadersPolicyCustomHeader");
    });
};

const serializeAws_restXmlResponseHeadersPolicyCustomHeadersConfig = (
  input: ResponseHeadersPolicyCustomHeadersConfig,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ResponseHeadersPolicyCustomHeadersConfig");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlResponseHeadersPolicyCustomHeaderList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlResponseHeadersPolicyFrameOptions = (
  input: ResponseHeadersPolicyFrameOptions,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ResponseHeadersPolicyFrameOptions");
  if (input.Override !== undefined && input.Override !== null) {
    const node = new __XmlNode("boolean").addChildNode(new __XmlText(String(input.Override))).withName("Override");
    bodyNode.addChildNode(node);
  }
  if (input.FrameOption !== undefined && input.FrameOption !== null) {
    const node = new __XmlNode("FrameOptionsList")
      .addChildNode(new __XmlText(input.FrameOption))
      .withName("FrameOption");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlResponseHeadersPolicyReferrerPolicy = (
  input: ResponseHeadersPolicyReferrerPolicy,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ResponseHeadersPolicyReferrerPolicy");
  if (input.Override !== undefined && input.Override !== null) {
    const node = new __XmlNode("boolean").addChildNode(new __XmlText(String(input.Override))).withName("Override");
    bodyNode.addChildNode(node);
  }
  if (input.ReferrerPolicy !== undefined && input.ReferrerPolicy !== null) {
    const node = new __XmlNode("ReferrerPolicyList")
      .addChildNode(new __XmlText(input.ReferrerPolicy))
      .withName("ReferrerPolicy");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlResponseHeadersPolicySecurityHeadersConfig = (
  input: ResponseHeadersPolicySecurityHeadersConfig,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ResponseHeadersPolicySecurityHeadersConfig");
  if (input.XSSProtection !== undefined && input.XSSProtection !== null) {
    const node = serializeAws_restXmlResponseHeadersPolicyXSSProtection(input.XSSProtection, context).withName(
      "XSSProtection"
    );
    bodyNode.addChildNode(node);
  }
  if (input.FrameOptions !== undefined && input.FrameOptions !== null) {
    const node = serializeAws_restXmlResponseHeadersPolicyFrameOptions(input.FrameOptions, context).withName(
      "FrameOptions"
    );
    bodyNode.addChildNode(node);
  }
  if (input.ReferrerPolicy !== undefined && input.ReferrerPolicy !== null) {
    const node = serializeAws_restXmlResponseHeadersPolicyReferrerPolicy(input.ReferrerPolicy, context).withName(
      "ReferrerPolicy"
    );
    bodyNode.addChildNode(node);
  }
  if (input.ContentSecurityPolicy !== undefined && input.ContentSecurityPolicy !== null) {
    const node = serializeAws_restXmlResponseHeadersPolicyContentSecurityPolicy(
      input.ContentSecurityPolicy,
      context
    ).withName("ContentSecurityPolicy");
    bodyNode.addChildNode(node);
  }
  if (input.ContentTypeOptions !== undefined && input.ContentTypeOptions !== null) {
    const node = serializeAws_restXmlResponseHeadersPolicyContentTypeOptions(
      input.ContentTypeOptions,
      context
    ).withName("ContentTypeOptions");
    bodyNode.addChildNode(node);
  }
  if (input.StrictTransportSecurity !== undefined && input.StrictTransportSecurity !== null) {
    const node = serializeAws_restXmlResponseHeadersPolicyStrictTransportSecurity(
      input.StrictTransportSecurity,
      context
    ).withName("StrictTransportSecurity");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlResponseHeadersPolicyServerTimingHeadersConfig = (
  input: ResponseHeadersPolicyServerTimingHeadersConfig,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ResponseHeadersPolicyServerTimingHeadersConfig");
  if (input.Enabled !== undefined && input.Enabled !== null) {
    const node = new __XmlNode("boolean").addChildNode(new __XmlText(String(input.Enabled))).withName("Enabled");
    bodyNode.addChildNode(node);
  }
  if (input.SamplingRate !== undefined && input.SamplingRate !== null) {
    const node = new __XmlNode("SamplingRate")
      .addChildNode(new __XmlText(String(input.SamplingRate)))
      .withName("SamplingRate");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlResponseHeadersPolicyStrictTransportSecurity = (
  input: ResponseHeadersPolicyStrictTransportSecurity,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ResponseHeadersPolicyStrictTransportSecurity");
  if (input.Override !== undefined && input.Override !== null) {
    const node = new __XmlNode("boolean").addChildNode(new __XmlText(String(input.Override))).withName("Override");
    bodyNode.addChildNode(node);
  }
  if (input.IncludeSubdomains !== undefined && input.IncludeSubdomains !== null) {
    const node = new __XmlNode("boolean")
      .addChildNode(new __XmlText(String(input.IncludeSubdomains)))
      .withName("IncludeSubdomains");
    bodyNode.addChildNode(node);
  }
  if (input.Preload !== undefined && input.Preload !== null) {
    const node = new __XmlNode("boolean").addChildNode(new __XmlText(String(input.Preload))).withName("Preload");
    bodyNode.addChildNode(node);
  }
  if (input.AccessControlMaxAgeSec !== undefined && input.AccessControlMaxAgeSec !== null) {
    const node = new __XmlNode("integer")
      .addChildNode(new __XmlText(String(input.AccessControlMaxAgeSec)))
      .withName("AccessControlMaxAgeSec");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlResponseHeadersPolicyXSSProtection = (
  input: ResponseHeadersPolicyXSSProtection,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ResponseHeadersPolicyXSSProtection");
  if (input.Override !== undefined && input.Override !== null) {
    const node = new __XmlNode("boolean").addChildNode(new __XmlText(String(input.Override))).withName("Override");
    bodyNode.addChildNode(node);
  }
  if (input.Protection !== undefined && input.Protection !== null) {
    const node = new __XmlNode("boolean").addChildNode(new __XmlText(String(input.Protection))).withName("Protection");
    bodyNode.addChildNode(node);
  }
  if (input.ModeBlock !== undefined && input.ModeBlock !== null) {
    const node = new __XmlNode("boolean").addChildNode(new __XmlText(String(input.ModeBlock))).withName("ModeBlock");
    bodyNode.addChildNode(node);
  }
  if (input.ReportUri !== undefined && input.ReportUri !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.ReportUri)).withName("ReportUri");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlRestrictions = (input: Restrictions, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Restrictions");
  if (input.GeoRestriction !== undefined && input.GeoRestriction !== null) {
    const node = serializeAws_restXmlGeoRestriction(input.GeoRestriction, context).withName("GeoRestriction");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlS3Origin = (input: S3Origin, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3Origin");
  if (input.DomainName !== undefined && input.DomainName !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.DomainName)).withName("DomainName");
    bodyNode.addChildNode(node);
  }
  if (input.OriginAccessIdentity !== undefined && input.OriginAccessIdentity !== null) {
    const node = new __XmlNode("string")
      .addChildNode(new __XmlText(input.OriginAccessIdentity))
      .withName("OriginAccessIdentity");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlS3OriginConfig = (input: S3OriginConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3OriginConfig");
  if (input.OriginAccessIdentity !== undefined && input.OriginAccessIdentity !== null) {
    const node = new __XmlNode("string")
      .addChildNode(new __XmlText(input.OriginAccessIdentity))
      .withName("OriginAccessIdentity");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlSslProtocolsList = (input: (SslProtocol | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = new __XmlNode("SslProtocol").addChildNode(new __XmlText(entry));
      return node.withName("SslProtocol");
    });
};

const serializeAws_restXmlStatusCodeList = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = new __XmlNode("integer").addChildNode(new __XmlText(String(entry)));
      return node.withName("StatusCode");
    });
};

const serializeAws_restXmlStatusCodes = (input: StatusCodes, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("StatusCodes");
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlStatusCodeList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlStreamingDistributionConfig = (
  input: StreamingDistributionConfig,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("StreamingDistributionConfig");
  if (input.CallerReference !== undefined && input.CallerReference !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.CallerReference)).withName("CallerReference");
    bodyNode.addChildNode(node);
  }
  if (input.S3Origin !== undefined && input.S3Origin !== null) {
    const node = serializeAws_restXmlS3Origin(input.S3Origin, context).withName("S3Origin");
    bodyNode.addChildNode(node);
  }
  if (input.Aliases !== undefined && input.Aliases !== null) {
    const node = serializeAws_restXmlAliases(input.Aliases, context).withName("Aliases");
    bodyNode.addChildNode(node);
  }
  if (input.Comment !== undefined && input.Comment !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.Comment)).withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.Logging !== undefined && input.Logging !== null) {
    const node = serializeAws_restXmlStreamingLoggingConfig(input.Logging, context).withName("Logging");
    bodyNode.addChildNode(node);
  }
  if (input.TrustedSigners !== undefined && input.TrustedSigners !== null) {
    const node = serializeAws_restXmlTrustedSigners(input.TrustedSigners, context).withName("TrustedSigners");
    bodyNode.addChildNode(node);
  }
  if (input.PriceClass !== undefined && input.PriceClass !== null) {
    const node = new __XmlNode("PriceClass").addChildNode(new __XmlText(input.PriceClass)).withName("PriceClass");
    bodyNode.addChildNode(node);
  }
  if (input.Enabled !== undefined && input.Enabled !== null) {
    const node = new __XmlNode("boolean").addChildNode(new __XmlText(String(input.Enabled))).withName("Enabled");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlStreamingDistributionConfigWithTags = (
  input: StreamingDistributionConfigWithTags,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("StreamingDistributionConfigWithTags");
  if (input.StreamingDistributionConfig !== undefined && input.StreamingDistributionConfig !== null) {
    const node = serializeAws_restXmlStreamingDistributionConfig(input.StreamingDistributionConfig, context).withName(
      "StreamingDistributionConfig"
    );
    bodyNode.addChildNode(node);
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    const node = serializeAws_restXmlTags(input.Tags, context).withName("Tags");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlStreamingLoggingConfig = (input: StreamingLoggingConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("StreamingLoggingConfig");
  if (input.Enabled !== undefined && input.Enabled !== null) {
    const node = new __XmlNode("boolean").addChildNode(new __XmlText(String(input.Enabled))).withName("Enabled");
    bodyNode.addChildNode(node);
  }
  if (input.Bucket !== undefined && input.Bucket !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.Bucket)).withName("Bucket");
    bodyNode.addChildNode(node);
  }
  if (input.Prefix !== undefined && input.Prefix !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlTag = (input: Tag, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Tag");
  if (input.Key !== undefined && input.Key !== null) {
    const node = new __XmlNode("TagKey").addChildNode(new __XmlText(input.Key)).withName("Key");
    bodyNode.addChildNode(node);
  }
  if (input.Value !== undefined && input.Value !== null) {
    const node = new __XmlNode("TagValue").addChildNode(new __XmlText(input.Value)).withName("Value");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlTagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = new __XmlNode("TagKey").addChildNode(new __XmlText(entry));
      return node.withName("Key");
    });
};

const serializeAws_restXmlTagKeys = (input: TagKeys, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("TagKeys");
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlTagKeyList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlTagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlTag(entry, context);
      return node.withName("Tag");
    });
};

const serializeAws_restXmlTags = (input: Tags, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Tags");
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlTagList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlTrustedKeyGroupIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = new __XmlNode("string").addChildNode(new __XmlText(entry));
      return node.withName("KeyGroup");
    });
};

const serializeAws_restXmlTrustedKeyGroups = (input: TrustedKeyGroups, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("TrustedKeyGroups");
  if (input.Enabled !== undefined && input.Enabled !== null) {
    const node = new __XmlNode("boolean").addChildNode(new __XmlText(String(input.Enabled))).withName("Enabled");
    bodyNode.addChildNode(node);
  }
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlTrustedKeyGroupIdList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlTrustedSigners = (input: TrustedSigners, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("TrustedSigners");
  if (input.Enabled !== undefined && input.Enabled !== null) {
    const node = new __XmlNode("boolean").addChildNode(new __XmlText(String(input.Enabled))).withName("Enabled");
    bodyNode.addChildNode(node);
  }
  if (input.Quantity !== undefined && input.Quantity !== null) {
    const node = new __XmlNode("integer").addChildNode(new __XmlText(String(input.Quantity))).withName("Quantity");
    bodyNode.addChildNode(node);
  }
  if (input.Items !== undefined && input.Items !== null) {
    const nodes = serializeAws_restXmlAwsAccountNumberList(input.Items, context);
    const containerNode = new __XmlNode("Items");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlViewerCertificate = (input: ViewerCertificate, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ViewerCertificate");
  if (input.CloudFrontDefaultCertificate !== undefined && input.CloudFrontDefaultCertificate !== null) {
    const node = new __XmlNode("boolean")
      .addChildNode(new __XmlText(String(input.CloudFrontDefaultCertificate)))
      .withName("CloudFrontDefaultCertificate");
    bodyNode.addChildNode(node);
  }
  if (input.IAMCertificateId !== undefined && input.IAMCertificateId !== null) {
    const node = new __XmlNode("string")
      .addChildNode(new __XmlText(input.IAMCertificateId))
      .withName("IAMCertificateId");
    bodyNode.addChildNode(node);
  }
  if (input.ACMCertificateArn !== undefined && input.ACMCertificateArn !== null) {
    const node = new __XmlNode("string")
      .addChildNode(new __XmlText(input.ACMCertificateArn))
      .withName("ACMCertificateArn");
    bodyNode.addChildNode(node);
  }
  if (input.SSLSupportMethod !== undefined && input.SSLSupportMethod !== null) {
    const node = new __XmlNode("SSLSupportMethod")
      .addChildNode(new __XmlText(input.SSLSupportMethod))
      .withName("SSLSupportMethod");
    bodyNode.addChildNode(node);
  }
  if (input.MinimumProtocolVersion !== undefined && input.MinimumProtocolVersion !== null) {
    const node = new __XmlNode("MinimumProtocolVersion")
      .addChildNode(new __XmlText(input.MinimumProtocolVersion))
      .withName("MinimumProtocolVersion");
    bodyNode.addChildNode(node);
  }
  if (input.Certificate !== undefined && input.Certificate !== null) {
    const node = new __XmlNode("string").addChildNode(new __XmlText(input.Certificate)).withName("Certificate");
    bodyNode.addChildNode(node);
  }
  if (input.CertificateSource !== undefined && input.CertificateSource !== null) {
    const node = new __XmlNode("CertificateSource")
      .addChildNode(new __XmlText(input.CertificateSource))
      .withName("CertificateSource");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const deserializeAws_restXmlAccessControlAllowHeadersList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlAccessControlAllowMethodsList = (
  output: any,
  context: __SerdeContext
): (ResponseHeadersPolicyAccessControlAllowMethodsValues | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlAccessControlAllowOriginsList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlAccessControlExposeHeadersList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlActiveTrustedKeyGroups = (output: any, context: __SerdeContext): ActiveTrustedKeyGroups => {
  const contents: any = {
    Enabled: undefined,
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["KeyGroup"] !== undefined) {
    contents.Items = deserializeAws_restXmlKGKeyPairIdsList(
      __getArrayIfSingleItem(output["Items"]["KeyGroup"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlActiveTrustedSigners = (output: any, context: __SerdeContext): ActiveTrustedSigners => {
  const contents: any = {
    Enabled: undefined,
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["Signer"] !== undefined) {
    contents.Items = deserializeAws_restXmlSignerList(__getArrayIfSingleItem(output["Items"]["Signer"]), context);
  }
  return contents;
};

const deserializeAws_restXmlAliases = (output: any, context: __SerdeContext): Aliases => {
  const contents: any = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["CNAME"] !== undefined) {
    contents.Items = deserializeAws_restXmlAliasList(__getArrayIfSingleItem(output["Items"]["CNAME"]), context);
  }
  return contents;
};

const deserializeAws_restXmlAliasICPRecordal = (output: any, context: __SerdeContext): AliasICPRecordal => {
  const contents: any = {
    CNAME: undefined,
    ICPRecordalStatus: undefined,
  };
  if (output["CNAME"] !== undefined) {
    contents.CNAME = __expectString(output["CNAME"]);
  }
  if (output["ICPRecordalStatus"] !== undefined) {
    contents.ICPRecordalStatus = __expectString(output["ICPRecordalStatus"]);
  }
  return contents;
};

const deserializeAws_restXmlAliasICPRecordals = (output: any, context: __SerdeContext): AliasICPRecordal[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlAliasICPRecordal(entry, context);
    });
};

const deserializeAws_restXmlAliasList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlAllowedMethods = (output: any, context: __SerdeContext): AllowedMethods => {
  const contents: any = {
    Quantity: undefined,
    Items: undefined,
    CachedMethods: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["Method"] !== undefined) {
    contents.Items = deserializeAws_restXmlMethodsList(__getArrayIfSingleItem(output["Items"]["Method"]), context);
  }
  if (output["CachedMethods"] !== undefined) {
    contents.CachedMethods = deserializeAws_restXmlCachedMethods(output["CachedMethods"], context);
  }
  return contents;
};

const deserializeAws_restXmlAwsAccountNumberList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlCacheBehavior = (output: any, context: __SerdeContext): CacheBehavior => {
  const contents: any = {
    PathPattern: undefined,
    TargetOriginId: undefined,
    TrustedSigners: undefined,
    TrustedKeyGroups: undefined,
    ViewerProtocolPolicy: undefined,
    AllowedMethods: undefined,
    SmoothStreaming: undefined,
    Compress: undefined,
    LambdaFunctionAssociations: undefined,
    FunctionAssociations: undefined,
    FieldLevelEncryptionId: undefined,
    RealtimeLogConfigArn: undefined,
    CachePolicyId: undefined,
    OriginRequestPolicyId: undefined,
    ResponseHeadersPolicyId: undefined,
    ForwardedValues: undefined,
    MinTTL: undefined,
    DefaultTTL: undefined,
    MaxTTL: undefined,
  };
  if (output["PathPattern"] !== undefined) {
    contents.PathPattern = __expectString(output["PathPattern"]);
  }
  if (output["TargetOriginId"] !== undefined) {
    contents.TargetOriginId = __expectString(output["TargetOriginId"]);
  }
  if (output["TrustedSigners"] !== undefined) {
    contents.TrustedSigners = deserializeAws_restXmlTrustedSigners(output["TrustedSigners"], context);
  }
  if (output["TrustedKeyGroups"] !== undefined) {
    contents.TrustedKeyGroups = deserializeAws_restXmlTrustedKeyGroups(output["TrustedKeyGroups"], context);
  }
  if (output["ViewerProtocolPolicy"] !== undefined) {
    contents.ViewerProtocolPolicy = __expectString(output["ViewerProtocolPolicy"]);
  }
  if (output["AllowedMethods"] !== undefined) {
    contents.AllowedMethods = deserializeAws_restXmlAllowedMethods(output["AllowedMethods"], context);
  }
  if (output["SmoothStreaming"] !== undefined) {
    contents.SmoothStreaming = __parseBoolean(output["SmoothStreaming"]);
  }
  if (output["Compress"] !== undefined) {
    contents.Compress = __parseBoolean(output["Compress"]);
  }
  if (output["LambdaFunctionAssociations"] !== undefined) {
    contents.LambdaFunctionAssociations = deserializeAws_restXmlLambdaFunctionAssociations(
      output["LambdaFunctionAssociations"],
      context
    );
  }
  if (output["FunctionAssociations"] !== undefined) {
    contents.FunctionAssociations = deserializeAws_restXmlFunctionAssociations(output["FunctionAssociations"], context);
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
    contents.ForwardedValues = deserializeAws_restXmlForwardedValues(output["ForwardedValues"], context);
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

const deserializeAws_restXmlCacheBehaviorList = (output: any, context: __SerdeContext): CacheBehavior[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlCacheBehavior(entry, context);
    });
};

const deserializeAws_restXmlCacheBehaviors = (output: any, context: __SerdeContext): CacheBehaviors => {
  const contents: any = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["CacheBehavior"] !== undefined) {
    contents.Items = deserializeAws_restXmlCacheBehaviorList(
      __getArrayIfSingleItem(output["Items"]["CacheBehavior"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlCachedMethods = (output: any, context: __SerdeContext): CachedMethods => {
  const contents: any = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["Method"] !== undefined) {
    contents.Items = deserializeAws_restXmlMethodsList(__getArrayIfSingleItem(output["Items"]["Method"]), context);
  }
  return contents;
};

const deserializeAws_restXmlCachePolicy = (output: any, context: __SerdeContext): CachePolicy => {
  const contents: any = {
    Id: undefined,
    LastModifiedTime: undefined,
    CachePolicyConfig: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["LastModifiedTime"] !== undefined) {
    contents.LastModifiedTime = __expectNonNull(__parseRfc3339DateTime(output["LastModifiedTime"]));
  }
  if (output["CachePolicyConfig"] !== undefined) {
    contents.CachePolicyConfig = deserializeAws_restXmlCachePolicyConfig(output["CachePolicyConfig"], context);
  }
  return contents;
};

const deserializeAws_restXmlCachePolicyConfig = (output: any, context: __SerdeContext): CachePolicyConfig => {
  const contents: any = {
    Comment: undefined,
    Name: undefined,
    DefaultTTL: undefined,
    MaxTTL: undefined,
    MinTTL: undefined,
    ParametersInCacheKeyAndForwardedToOrigin: undefined,
  };
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
    contents.ParametersInCacheKeyAndForwardedToOrigin = deserializeAws_restXmlParametersInCacheKeyAndForwardedToOrigin(
      output["ParametersInCacheKeyAndForwardedToOrigin"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlCachePolicyCookiesConfig = (
  output: any,
  context: __SerdeContext
): CachePolicyCookiesConfig => {
  const contents: any = {
    CookieBehavior: undefined,
    Cookies: undefined,
  };
  if (output["CookieBehavior"] !== undefined) {
    contents.CookieBehavior = __expectString(output["CookieBehavior"]);
  }
  if (output["Cookies"] !== undefined) {
    contents.Cookies = deserializeAws_restXmlCookieNames(output["Cookies"], context);
  }
  return contents;
};

const deserializeAws_restXmlCachePolicyHeadersConfig = (
  output: any,
  context: __SerdeContext
): CachePolicyHeadersConfig => {
  const contents: any = {
    HeaderBehavior: undefined,
    Headers: undefined,
  };
  if (output["HeaderBehavior"] !== undefined) {
    contents.HeaderBehavior = __expectString(output["HeaderBehavior"]);
  }
  if (output["Headers"] !== undefined) {
    contents.Headers = deserializeAws_restXmlHeaders(output["Headers"], context);
  }
  return contents;
};

const deserializeAws_restXmlCachePolicyList = (output: any, context: __SerdeContext): CachePolicyList => {
  const contents: any = {
    NextMarker: undefined,
    MaxItems: undefined,
    Quantity: undefined,
    Items: undefined,
  };
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
    contents.Items = deserializeAws_restXmlCachePolicySummaryList(
      __getArrayIfSingleItem(output["Items"]["CachePolicySummary"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlCachePolicyQueryStringsConfig = (
  output: any,
  context: __SerdeContext
): CachePolicyQueryStringsConfig => {
  const contents: any = {
    QueryStringBehavior: undefined,
    QueryStrings: undefined,
  };
  if (output["QueryStringBehavior"] !== undefined) {
    contents.QueryStringBehavior = __expectString(output["QueryStringBehavior"]);
  }
  if (output["QueryStrings"] !== undefined) {
    contents.QueryStrings = deserializeAws_restXmlQueryStringNames(output["QueryStrings"], context);
  }
  return contents;
};

const deserializeAws_restXmlCachePolicySummary = (output: any, context: __SerdeContext): CachePolicySummary => {
  const contents: any = {
    Type: undefined,
    CachePolicy: undefined,
  };
  if (output["Type"] !== undefined) {
    contents.Type = __expectString(output["Type"]);
  }
  if (output["CachePolicy"] !== undefined) {
    contents.CachePolicy = deserializeAws_restXmlCachePolicy(output["CachePolicy"], context);
  }
  return contents;
};

const deserializeAws_restXmlCachePolicySummaryList = (output: any, context: __SerdeContext): CachePolicySummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlCachePolicySummary(entry, context);
    });
};

const deserializeAws_restXmlCloudFrontOriginAccessIdentity = (
  output: any,
  context: __SerdeContext
): CloudFrontOriginAccessIdentity => {
  const contents: any = {
    Id: undefined,
    S3CanonicalUserId: undefined,
    CloudFrontOriginAccessIdentityConfig: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["S3CanonicalUserId"] !== undefined) {
    contents.S3CanonicalUserId = __expectString(output["S3CanonicalUserId"]);
  }
  if (output["CloudFrontOriginAccessIdentityConfig"] !== undefined) {
    contents.CloudFrontOriginAccessIdentityConfig = deserializeAws_restXmlCloudFrontOriginAccessIdentityConfig(
      output["CloudFrontOriginAccessIdentityConfig"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlCloudFrontOriginAccessIdentityConfig = (
  output: any,
  context: __SerdeContext
): CloudFrontOriginAccessIdentityConfig => {
  const contents: any = {
    CallerReference: undefined,
    Comment: undefined,
  };
  if (output["CallerReference"] !== undefined) {
    contents.CallerReference = __expectString(output["CallerReference"]);
  }
  if (output["Comment"] !== undefined) {
    contents.Comment = __expectString(output["Comment"]);
  }
  return contents;
};

const deserializeAws_restXmlCloudFrontOriginAccessIdentityList = (
  output: any,
  context: __SerdeContext
): CloudFrontOriginAccessIdentityList => {
  const contents: any = {
    Marker: undefined,
    NextMarker: undefined,
    MaxItems: undefined,
    IsTruncated: undefined,
    Quantity: undefined,
    Items: undefined,
  };
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
    contents.Items = deserializeAws_restXmlCloudFrontOriginAccessIdentitySummaryList(
      __getArrayIfSingleItem(output["Items"]["CloudFrontOriginAccessIdentitySummary"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlCloudFrontOriginAccessIdentitySummary = (
  output: any,
  context: __SerdeContext
): CloudFrontOriginAccessIdentitySummary => {
  const contents: any = {
    Id: undefined,
    S3CanonicalUserId: undefined,
    Comment: undefined,
  };
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

const deserializeAws_restXmlCloudFrontOriginAccessIdentitySummaryList = (
  output: any,
  context: __SerdeContext
): CloudFrontOriginAccessIdentitySummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlCloudFrontOriginAccessIdentitySummary(entry, context);
    });
};

const deserializeAws_restXmlConflictingAlias = (output: any, context: __SerdeContext): ConflictingAlias => {
  const contents: any = {
    Alias: undefined,
    DistributionId: undefined,
    AccountId: undefined,
  };
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

const deserializeAws_restXmlConflictingAliases = (output: any, context: __SerdeContext): ConflictingAlias[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlConflictingAlias(entry, context);
    });
};

const deserializeAws_restXmlConflictingAliasesList = (output: any, context: __SerdeContext): ConflictingAliasesList => {
  const contents: any = {
    NextMarker: undefined,
    MaxItems: undefined,
    Quantity: undefined,
    Items: undefined,
  };
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
    contents.Items = deserializeAws_restXmlConflictingAliases(
      __getArrayIfSingleItem(output["Items"]["ConflictingAlias"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlContentTypeProfile = (output: any, context: __SerdeContext): ContentTypeProfile => {
  const contents: any = {
    Format: undefined,
    ProfileId: undefined,
    ContentType: undefined,
  };
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

const deserializeAws_restXmlContentTypeProfileConfig = (
  output: any,
  context: __SerdeContext
): ContentTypeProfileConfig => {
  const contents: any = {
    ForwardWhenContentTypeIsUnknown: undefined,
    ContentTypeProfiles: undefined,
  };
  if (output["ForwardWhenContentTypeIsUnknown"] !== undefined) {
    contents.ForwardWhenContentTypeIsUnknown = __parseBoolean(output["ForwardWhenContentTypeIsUnknown"]);
  }
  if (output["ContentTypeProfiles"] !== undefined) {
    contents.ContentTypeProfiles = deserializeAws_restXmlContentTypeProfiles(output["ContentTypeProfiles"], context);
  }
  return contents;
};

const deserializeAws_restXmlContentTypeProfileList = (output: any, context: __SerdeContext): ContentTypeProfile[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlContentTypeProfile(entry, context);
    });
};

const deserializeAws_restXmlContentTypeProfiles = (output: any, context: __SerdeContext): ContentTypeProfiles => {
  const contents: any = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["ContentTypeProfile"] !== undefined) {
    contents.Items = deserializeAws_restXmlContentTypeProfileList(
      __getArrayIfSingleItem(output["Items"]["ContentTypeProfile"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlCookieNameList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlCookieNames = (output: any, context: __SerdeContext): CookieNames => {
  const contents: any = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["Name"] !== undefined) {
    contents.Items = deserializeAws_restXmlCookieNameList(__getArrayIfSingleItem(output["Items"]["Name"]), context);
  }
  return contents;
};

const deserializeAws_restXmlCookiePreference = (output: any, context: __SerdeContext): CookiePreference => {
  const contents: any = {
    Forward: undefined,
    WhitelistedNames: undefined,
  };
  if (output["Forward"] !== undefined) {
    contents.Forward = __expectString(output["Forward"]);
  }
  if (output["WhitelistedNames"] !== undefined) {
    contents.WhitelistedNames = deserializeAws_restXmlCookieNames(output["WhitelistedNames"], context);
  }
  return contents;
};

const deserializeAws_restXmlCustomErrorResponse = (output: any, context: __SerdeContext): CustomErrorResponse => {
  const contents: any = {
    ErrorCode: undefined,
    ResponsePagePath: undefined,
    ResponseCode: undefined,
    ErrorCachingMinTTL: undefined,
  };
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

const deserializeAws_restXmlCustomErrorResponseList = (output: any, context: __SerdeContext): CustomErrorResponse[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlCustomErrorResponse(entry, context);
    });
};

const deserializeAws_restXmlCustomErrorResponses = (output: any, context: __SerdeContext): CustomErrorResponses => {
  const contents: any = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["CustomErrorResponse"] !== undefined) {
    contents.Items = deserializeAws_restXmlCustomErrorResponseList(
      __getArrayIfSingleItem(output["Items"]["CustomErrorResponse"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlCustomHeaders = (output: any, context: __SerdeContext): CustomHeaders => {
  const contents: any = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["OriginCustomHeader"] !== undefined) {
    contents.Items = deserializeAws_restXmlOriginCustomHeadersList(
      __getArrayIfSingleItem(output["Items"]["OriginCustomHeader"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlCustomOriginConfig = (output: any, context: __SerdeContext): CustomOriginConfig => {
  const contents: any = {
    HTTPPort: undefined,
    HTTPSPort: undefined,
    OriginProtocolPolicy: undefined,
    OriginSslProtocols: undefined,
    OriginReadTimeout: undefined,
    OriginKeepaliveTimeout: undefined,
  };
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
    contents.OriginSslProtocols = deserializeAws_restXmlOriginSslProtocols(output["OriginSslProtocols"], context);
  }
  if (output["OriginReadTimeout"] !== undefined) {
    contents.OriginReadTimeout = __strictParseInt32(output["OriginReadTimeout"]) as number;
  }
  if (output["OriginKeepaliveTimeout"] !== undefined) {
    contents.OriginKeepaliveTimeout = __strictParseInt32(output["OriginKeepaliveTimeout"]) as number;
  }
  return contents;
};

const deserializeAws_restXmlDefaultCacheBehavior = (output: any, context: __SerdeContext): DefaultCacheBehavior => {
  const contents: any = {
    TargetOriginId: undefined,
    TrustedSigners: undefined,
    TrustedKeyGroups: undefined,
    ViewerProtocolPolicy: undefined,
    AllowedMethods: undefined,
    SmoothStreaming: undefined,
    Compress: undefined,
    LambdaFunctionAssociations: undefined,
    FunctionAssociations: undefined,
    FieldLevelEncryptionId: undefined,
    RealtimeLogConfigArn: undefined,
    CachePolicyId: undefined,
    OriginRequestPolicyId: undefined,
    ResponseHeadersPolicyId: undefined,
    ForwardedValues: undefined,
    MinTTL: undefined,
    DefaultTTL: undefined,
    MaxTTL: undefined,
  };
  if (output["TargetOriginId"] !== undefined) {
    contents.TargetOriginId = __expectString(output["TargetOriginId"]);
  }
  if (output["TrustedSigners"] !== undefined) {
    contents.TrustedSigners = deserializeAws_restXmlTrustedSigners(output["TrustedSigners"], context);
  }
  if (output["TrustedKeyGroups"] !== undefined) {
    contents.TrustedKeyGroups = deserializeAws_restXmlTrustedKeyGroups(output["TrustedKeyGroups"], context);
  }
  if (output["ViewerProtocolPolicy"] !== undefined) {
    contents.ViewerProtocolPolicy = __expectString(output["ViewerProtocolPolicy"]);
  }
  if (output["AllowedMethods"] !== undefined) {
    contents.AllowedMethods = deserializeAws_restXmlAllowedMethods(output["AllowedMethods"], context);
  }
  if (output["SmoothStreaming"] !== undefined) {
    contents.SmoothStreaming = __parseBoolean(output["SmoothStreaming"]);
  }
  if (output["Compress"] !== undefined) {
    contents.Compress = __parseBoolean(output["Compress"]);
  }
  if (output["LambdaFunctionAssociations"] !== undefined) {
    contents.LambdaFunctionAssociations = deserializeAws_restXmlLambdaFunctionAssociations(
      output["LambdaFunctionAssociations"],
      context
    );
  }
  if (output["FunctionAssociations"] !== undefined) {
    contents.FunctionAssociations = deserializeAws_restXmlFunctionAssociations(output["FunctionAssociations"], context);
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
    contents.ForwardedValues = deserializeAws_restXmlForwardedValues(output["ForwardedValues"], context);
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

const deserializeAws_restXmlDistribution = (output: any, context: __SerdeContext): Distribution => {
  const contents: any = {
    Id: undefined,
    ARN: undefined,
    Status: undefined,
    LastModifiedTime: undefined,
    InProgressInvalidationBatches: undefined,
    DomainName: undefined,
    ActiveTrustedSigners: undefined,
    ActiveTrustedKeyGroups: undefined,
    DistributionConfig: undefined,
    AliasICPRecordals: undefined,
  };
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
    contents.LastModifiedTime = __expectNonNull(__parseRfc3339DateTime(output["LastModifiedTime"]));
  }
  if (output["InProgressInvalidationBatches"] !== undefined) {
    contents.InProgressInvalidationBatches = __strictParseInt32(output["InProgressInvalidationBatches"]) as number;
  }
  if (output["DomainName"] !== undefined) {
    contents.DomainName = __expectString(output["DomainName"]);
  }
  if (output["ActiveTrustedSigners"] !== undefined) {
    contents.ActiveTrustedSigners = deserializeAws_restXmlActiveTrustedSigners(output["ActiveTrustedSigners"], context);
  }
  if (output["ActiveTrustedKeyGroups"] !== undefined) {
    contents.ActiveTrustedKeyGroups = deserializeAws_restXmlActiveTrustedKeyGroups(
      output["ActiveTrustedKeyGroups"],
      context
    );
  }
  if (output["DistributionConfig"] !== undefined) {
    contents.DistributionConfig = deserializeAws_restXmlDistributionConfig(output["DistributionConfig"], context);
  }
  if (output.AliasICPRecordals === "") {
    contents.AliasICPRecordals = [];
  } else if (
    output["AliasICPRecordals"] !== undefined &&
    output["AliasICPRecordals"]["AliasICPRecordal"] !== undefined
  ) {
    contents.AliasICPRecordals = deserializeAws_restXmlAliasICPRecordals(
      __getArrayIfSingleItem(output["AliasICPRecordals"]["AliasICPRecordal"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlDistributionConfig = (output: any, context: __SerdeContext): DistributionConfig => {
  const contents: any = {
    CallerReference: undefined,
    Aliases: undefined,
    DefaultRootObject: undefined,
    Origins: undefined,
    OriginGroups: undefined,
    DefaultCacheBehavior: undefined,
    CacheBehaviors: undefined,
    CustomErrorResponses: undefined,
    Comment: undefined,
    Logging: undefined,
    PriceClass: undefined,
    Enabled: undefined,
    ViewerCertificate: undefined,
    Restrictions: undefined,
    WebACLId: undefined,
    HttpVersion: undefined,
    IsIPV6Enabled: undefined,
  };
  if (output["CallerReference"] !== undefined) {
    contents.CallerReference = __expectString(output["CallerReference"]);
  }
  if (output["Aliases"] !== undefined) {
    contents.Aliases = deserializeAws_restXmlAliases(output["Aliases"], context);
  }
  if (output["DefaultRootObject"] !== undefined) {
    contents.DefaultRootObject = __expectString(output["DefaultRootObject"]);
  }
  if (output["Origins"] !== undefined) {
    contents.Origins = deserializeAws_restXmlOrigins(output["Origins"], context);
  }
  if (output["OriginGroups"] !== undefined) {
    contents.OriginGroups = deserializeAws_restXmlOriginGroups(output["OriginGroups"], context);
  }
  if (output["DefaultCacheBehavior"] !== undefined) {
    contents.DefaultCacheBehavior = deserializeAws_restXmlDefaultCacheBehavior(output["DefaultCacheBehavior"], context);
  }
  if (output["CacheBehaviors"] !== undefined) {
    contents.CacheBehaviors = deserializeAws_restXmlCacheBehaviors(output["CacheBehaviors"], context);
  }
  if (output["CustomErrorResponses"] !== undefined) {
    contents.CustomErrorResponses = deserializeAws_restXmlCustomErrorResponses(output["CustomErrorResponses"], context);
  }
  if (output["Comment"] !== undefined) {
    contents.Comment = __expectString(output["Comment"]);
  }
  if (output["Logging"] !== undefined) {
    contents.Logging = deserializeAws_restXmlLoggingConfig(output["Logging"], context);
  }
  if (output["PriceClass"] !== undefined) {
    contents.PriceClass = __expectString(output["PriceClass"]);
  }
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  if (output["ViewerCertificate"] !== undefined) {
    contents.ViewerCertificate = deserializeAws_restXmlViewerCertificate(output["ViewerCertificate"], context);
  }
  if (output["Restrictions"] !== undefined) {
    contents.Restrictions = deserializeAws_restXmlRestrictions(output["Restrictions"], context);
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
  return contents;
};

const deserializeAws_restXmlDistributionIdList = (output: any, context: __SerdeContext): DistributionIdList => {
  const contents: any = {
    Marker: undefined,
    NextMarker: undefined,
    MaxItems: undefined,
    IsTruncated: undefined,
    Quantity: undefined,
    Items: undefined,
  };
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
    contents.Items = deserializeAws_restXmlDistributionIdListSummary(
      __getArrayIfSingleItem(output["Items"]["DistributionId"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlDistributionIdListSummary = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlDistributionList = (output: any, context: __SerdeContext): DistributionList => {
  const contents: any = {
    Marker: undefined,
    NextMarker: undefined,
    MaxItems: undefined,
    IsTruncated: undefined,
    Quantity: undefined,
    Items: undefined,
  };
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
    contents.Items = deserializeAws_restXmlDistributionSummaryList(
      __getArrayIfSingleItem(output["Items"]["DistributionSummary"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlDistributionSummary = (output: any, context: __SerdeContext): DistributionSummary => {
  const contents: any = {
    Id: undefined,
    ARN: undefined,
    Status: undefined,
    LastModifiedTime: undefined,
    DomainName: undefined,
    Aliases: undefined,
    Origins: undefined,
    OriginGroups: undefined,
    DefaultCacheBehavior: undefined,
    CacheBehaviors: undefined,
    CustomErrorResponses: undefined,
    Comment: undefined,
    PriceClass: undefined,
    Enabled: undefined,
    ViewerCertificate: undefined,
    Restrictions: undefined,
    WebACLId: undefined,
    HttpVersion: undefined,
    IsIPV6Enabled: undefined,
    AliasICPRecordals: undefined,
  };
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
    contents.LastModifiedTime = __expectNonNull(__parseRfc3339DateTime(output["LastModifiedTime"]));
  }
  if (output["DomainName"] !== undefined) {
    contents.DomainName = __expectString(output["DomainName"]);
  }
  if (output["Aliases"] !== undefined) {
    contents.Aliases = deserializeAws_restXmlAliases(output["Aliases"], context);
  }
  if (output["Origins"] !== undefined) {
    contents.Origins = deserializeAws_restXmlOrigins(output["Origins"], context);
  }
  if (output["OriginGroups"] !== undefined) {
    contents.OriginGroups = deserializeAws_restXmlOriginGroups(output["OriginGroups"], context);
  }
  if (output["DefaultCacheBehavior"] !== undefined) {
    contents.DefaultCacheBehavior = deserializeAws_restXmlDefaultCacheBehavior(output["DefaultCacheBehavior"], context);
  }
  if (output["CacheBehaviors"] !== undefined) {
    contents.CacheBehaviors = deserializeAws_restXmlCacheBehaviors(output["CacheBehaviors"], context);
  }
  if (output["CustomErrorResponses"] !== undefined) {
    contents.CustomErrorResponses = deserializeAws_restXmlCustomErrorResponses(output["CustomErrorResponses"], context);
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
    contents.ViewerCertificate = deserializeAws_restXmlViewerCertificate(output["ViewerCertificate"], context);
  }
  if (output["Restrictions"] !== undefined) {
    contents.Restrictions = deserializeAws_restXmlRestrictions(output["Restrictions"], context);
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
    contents.AliasICPRecordals = deserializeAws_restXmlAliasICPRecordals(
      __getArrayIfSingleItem(output["AliasICPRecordals"]["AliasICPRecordal"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlDistributionSummaryList = (output: any, context: __SerdeContext): DistributionSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlDistributionSummary(entry, context);
    });
};

const deserializeAws_restXmlEncryptionEntities = (output: any, context: __SerdeContext): EncryptionEntities => {
  const contents: any = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["EncryptionEntity"] !== undefined) {
    contents.Items = deserializeAws_restXmlEncryptionEntityList(
      __getArrayIfSingleItem(output["Items"]["EncryptionEntity"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlEncryptionEntity = (output: any, context: __SerdeContext): EncryptionEntity => {
  const contents: any = {
    PublicKeyId: undefined,
    ProviderId: undefined,
    FieldPatterns: undefined,
  };
  if (output["PublicKeyId"] !== undefined) {
    contents.PublicKeyId = __expectString(output["PublicKeyId"]);
  }
  if (output["ProviderId"] !== undefined) {
    contents.ProviderId = __expectString(output["ProviderId"]);
  }
  if (output["FieldPatterns"] !== undefined) {
    contents.FieldPatterns = deserializeAws_restXmlFieldPatterns(output["FieldPatterns"], context);
  }
  return contents;
};

const deserializeAws_restXmlEncryptionEntityList = (output: any, context: __SerdeContext): EncryptionEntity[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlEncryptionEntity(entry, context);
    });
};

const deserializeAws_restXmlEndPoint = (output: any, context: __SerdeContext): EndPoint => {
  const contents: any = {
    StreamType: undefined,
    KinesisStreamConfig: undefined,
  };
  if (output["StreamType"] !== undefined) {
    contents.StreamType = __expectString(output["StreamType"]);
  }
  if (output["KinesisStreamConfig"] !== undefined) {
    contents.KinesisStreamConfig = deserializeAws_restXmlKinesisStreamConfig(output["KinesisStreamConfig"], context);
  }
  return contents;
};

const deserializeAws_restXmlEndPointList = (output: any, context: __SerdeContext): EndPoint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlEndPoint(entry, context);
    });
};

const deserializeAws_restXmlFieldLevelEncryption = (output: any, context: __SerdeContext): FieldLevelEncryption => {
  const contents: any = {
    Id: undefined,
    LastModifiedTime: undefined,
    FieldLevelEncryptionConfig: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["LastModifiedTime"] !== undefined) {
    contents.LastModifiedTime = __expectNonNull(__parseRfc3339DateTime(output["LastModifiedTime"]));
  }
  if (output["FieldLevelEncryptionConfig"] !== undefined) {
    contents.FieldLevelEncryptionConfig = deserializeAws_restXmlFieldLevelEncryptionConfig(
      output["FieldLevelEncryptionConfig"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlFieldLevelEncryptionConfig = (
  output: any,
  context: __SerdeContext
): FieldLevelEncryptionConfig => {
  const contents: any = {
    CallerReference: undefined,
    Comment: undefined,
    QueryArgProfileConfig: undefined,
    ContentTypeProfileConfig: undefined,
  };
  if (output["CallerReference"] !== undefined) {
    contents.CallerReference = __expectString(output["CallerReference"]);
  }
  if (output["Comment"] !== undefined) {
    contents.Comment = __expectString(output["Comment"]);
  }
  if (output["QueryArgProfileConfig"] !== undefined) {
    contents.QueryArgProfileConfig = deserializeAws_restXmlQueryArgProfileConfig(
      output["QueryArgProfileConfig"],
      context
    );
  }
  if (output["ContentTypeProfileConfig"] !== undefined) {
    contents.ContentTypeProfileConfig = deserializeAws_restXmlContentTypeProfileConfig(
      output["ContentTypeProfileConfig"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlFieldLevelEncryptionList = (
  output: any,
  context: __SerdeContext
): FieldLevelEncryptionList => {
  const contents: any = {
    NextMarker: undefined,
    MaxItems: undefined,
    Quantity: undefined,
    Items: undefined,
  };
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
    contents.Items = deserializeAws_restXmlFieldLevelEncryptionSummaryList(
      __getArrayIfSingleItem(output["Items"]["FieldLevelEncryptionSummary"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlFieldLevelEncryptionProfile = (
  output: any,
  context: __SerdeContext
): FieldLevelEncryptionProfile => {
  const contents: any = {
    Id: undefined,
    LastModifiedTime: undefined,
    FieldLevelEncryptionProfileConfig: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["LastModifiedTime"] !== undefined) {
    contents.LastModifiedTime = __expectNonNull(__parseRfc3339DateTime(output["LastModifiedTime"]));
  }
  if (output["FieldLevelEncryptionProfileConfig"] !== undefined) {
    contents.FieldLevelEncryptionProfileConfig = deserializeAws_restXmlFieldLevelEncryptionProfileConfig(
      output["FieldLevelEncryptionProfileConfig"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlFieldLevelEncryptionProfileConfig = (
  output: any,
  context: __SerdeContext
): FieldLevelEncryptionProfileConfig => {
  const contents: any = {
    Name: undefined,
    CallerReference: undefined,
    Comment: undefined,
    EncryptionEntities: undefined,
  };
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
    contents.EncryptionEntities = deserializeAws_restXmlEncryptionEntities(output["EncryptionEntities"], context);
  }
  return contents;
};

const deserializeAws_restXmlFieldLevelEncryptionProfileList = (
  output: any,
  context: __SerdeContext
): FieldLevelEncryptionProfileList => {
  const contents: any = {
    NextMarker: undefined,
    MaxItems: undefined,
    Quantity: undefined,
    Items: undefined,
  };
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
    contents.Items = deserializeAws_restXmlFieldLevelEncryptionProfileSummaryList(
      __getArrayIfSingleItem(output["Items"]["FieldLevelEncryptionProfileSummary"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlFieldLevelEncryptionProfileSummary = (
  output: any,
  context: __SerdeContext
): FieldLevelEncryptionProfileSummary => {
  const contents: any = {
    Id: undefined,
    LastModifiedTime: undefined,
    Name: undefined,
    EncryptionEntities: undefined,
    Comment: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["LastModifiedTime"] !== undefined) {
    contents.LastModifiedTime = __expectNonNull(__parseRfc3339DateTime(output["LastModifiedTime"]));
  }
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["EncryptionEntities"] !== undefined) {
    contents.EncryptionEntities = deserializeAws_restXmlEncryptionEntities(output["EncryptionEntities"], context);
  }
  if (output["Comment"] !== undefined) {
    contents.Comment = __expectString(output["Comment"]);
  }
  return contents;
};

const deserializeAws_restXmlFieldLevelEncryptionProfileSummaryList = (
  output: any,
  context: __SerdeContext
): FieldLevelEncryptionProfileSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlFieldLevelEncryptionProfileSummary(entry, context);
    });
};

const deserializeAws_restXmlFieldLevelEncryptionSummary = (
  output: any,
  context: __SerdeContext
): FieldLevelEncryptionSummary => {
  const contents: any = {
    Id: undefined,
    LastModifiedTime: undefined,
    Comment: undefined,
    QueryArgProfileConfig: undefined,
    ContentTypeProfileConfig: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["LastModifiedTime"] !== undefined) {
    contents.LastModifiedTime = __expectNonNull(__parseRfc3339DateTime(output["LastModifiedTime"]));
  }
  if (output["Comment"] !== undefined) {
    contents.Comment = __expectString(output["Comment"]);
  }
  if (output["QueryArgProfileConfig"] !== undefined) {
    contents.QueryArgProfileConfig = deserializeAws_restXmlQueryArgProfileConfig(
      output["QueryArgProfileConfig"],
      context
    );
  }
  if (output["ContentTypeProfileConfig"] !== undefined) {
    contents.ContentTypeProfileConfig = deserializeAws_restXmlContentTypeProfileConfig(
      output["ContentTypeProfileConfig"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlFieldLevelEncryptionSummaryList = (
  output: any,
  context: __SerdeContext
): FieldLevelEncryptionSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlFieldLevelEncryptionSummary(entry, context);
    });
};

const deserializeAws_restXmlFieldList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlFieldPatternList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlFieldPatterns = (output: any, context: __SerdeContext): FieldPatterns => {
  const contents: any = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["FieldPattern"] !== undefined) {
    contents.Items = deserializeAws_restXmlFieldPatternList(
      __getArrayIfSingleItem(output["Items"]["FieldPattern"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlForwardedValues = (output: any, context: __SerdeContext): ForwardedValues => {
  const contents: any = {
    QueryString: undefined,
    Cookies: undefined,
    Headers: undefined,
    QueryStringCacheKeys: undefined,
  };
  if (output["QueryString"] !== undefined) {
    contents.QueryString = __parseBoolean(output["QueryString"]);
  }
  if (output["Cookies"] !== undefined) {
    contents.Cookies = deserializeAws_restXmlCookiePreference(output["Cookies"], context);
  }
  if (output["Headers"] !== undefined) {
    contents.Headers = deserializeAws_restXmlHeaders(output["Headers"], context);
  }
  if (output["QueryStringCacheKeys"] !== undefined) {
    contents.QueryStringCacheKeys = deserializeAws_restXmlQueryStringCacheKeys(output["QueryStringCacheKeys"], context);
  }
  return contents;
};

const deserializeAws_restXmlFunctionAssociation = (output: any, context: __SerdeContext): FunctionAssociation => {
  const contents: any = {
    FunctionARN: undefined,
    EventType: undefined,
  };
  if (output["FunctionARN"] !== undefined) {
    contents.FunctionARN = __expectString(output["FunctionARN"]);
  }
  if (output["EventType"] !== undefined) {
    contents.EventType = __expectString(output["EventType"]);
  }
  return contents;
};

const deserializeAws_restXmlFunctionAssociationList = (output: any, context: __SerdeContext): FunctionAssociation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlFunctionAssociation(entry, context);
    });
};

const deserializeAws_restXmlFunctionAssociations = (output: any, context: __SerdeContext): FunctionAssociations => {
  const contents: any = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["FunctionAssociation"] !== undefined) {
    contents.Items = deserializeAws_restXmlFunctionAssociationList(
      __getArrayIfSingleItem(output["Items"]["FunctionAssociation"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlFunctionConfig = (output: any, context: __SerdeContext): FunctionConfig => {
  const contents: any = {
    Comment: undefined,
    Runtime: undefined,
  };
  if (output["Comment"] !== undefined) {
    contents.Comment = __expectString(output["Comment"]);
  }
  if (output["Runtime"] !== undefined) {
    contents.Runtime = __expectString(output["Runtime"]);
  }
  return contents;
};

const deserializeAws_restXmlFunctionExecutionLogList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlFunctionList = (output: any, context: __SerdeContext): FunctionList => {
  const contents: any = {
    NextMarker: undefined,
    MaxItems: undefined,
    Quantity: undefined,
    Items: undefined,
  };
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
    contents.Items = deserializeAws_restXmlFunctionSummaryList(
      __getArrayIfSingleItem(output["Items"]["FunctionSummary"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlFunctionMetadata = (output: any, context: __SerdeContext): FunctionMetadata => {
  const contents: any = {
    FunctionARN: undefined,
    Stage: undefined,
    CreatedTime: undefined,
    LastModifiedTime: undefined,
  };
  if (output["FunctionARN"] !== undefined) {
    contents.FunctionARN = __expectString(output["FunctionARN"]);
  }
  if (output["Stage"] !== undefined) {
    contents.Stage = __expectString(output["Stage"]);
  }
  if (output["CreatedTime"] !== undefined) {
    contents.CreatedTime = __expectNonNull(__parseRfc3339DateTime(output["CreatedTime"]));
  }
  if (output["LastModifiedTime"] !== undefined) {
    contents.LastModifiedTime = __expectNonNull(__parseRfc3339DateTime(output["LastModifiedTime"]));
  }
  return contents;
};

const deserializeAws_restXmlFunctionSummary = (output: any, context: __SerdeContext): FunctionSummary => {
  const contents: any = {
    Name: undefined,
    Status: undefined,
    FunctionConfig: undefined,
    FunctionMetadata: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["FunctionConfig"] !== undefined) {
    contents.FunctionConfig = deserializeAws_restXmlFunctionConfig(output["FunctionConfig"], context);
  }
  if (output["FunctionMetadata"] !== undefined) {
    contents.FunctionMetadata = deserializeAws_restXmlFunctionMetadata(output["FunctionMetadata"], context);
  }
  return contents;
};

const deserializeAws_restXmlFunctionSummaryList = (output: any, context: __SerdeContext): FunctionSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlFunctionSummary(entry, context);
    });
};

const deserializeAws_restXmlGeoRestriction = (output: any, context: __SerdeContext): GeoRestriction => {
  const contents: any = {
    RestrictionType: undefined,
    Quantity: undefined,
    Items: undefined,
  };
  if (output["RestrictionType"] !== undefined) {
    contents.RestrictionType = __expectString(output["RestrictionType"]);
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["Location"] !== undefined) {
    contents.Items = deserializeAws_restXmlLocationList(__getArrayIfSingleItem(output["Items"]["Location"]), context);
  }
  return contents;
};

const deserializeAws_restXmlHeaderList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlHeaders = (output: any, context: __SerdeContext): Headers => {
  const contents: any = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["Name"] !== undefined) {
    contents.Items = deserializeAws_restXmlHeaderList(__getArrayIfSingleItem(output["Items"]["Name"]), context);
  }
  return contents;
};

const deserializeAws_restXmlInvalidation = (output: any, context: __SerdeContext): Invalidation => {
  const contents: any = {
    Id: undefined,
    Status: undefined,
    CreateTime: undefined,
    InvalidationBatch: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["CreateTime"] !== undefined) {
    contents.CreateTime = __expectNonNull(__parseRfc3339DateTime(output["CreateTime"]));
  }
  if (output["InvalidationBatch"] !== undefined) {
    contents.InvalidationBatch = deserializeAws_restXmlInvalidationBatch(output["InvalidationBatch"], context);
  }
  return contents;
};

const deserializeAws_restXmlInvalidationBatch = (output: any, context: __SerdeContext): InvalidationBatch => {
  const contents: any = {
    Paths: undefined,
    CallerReference: undefined,
  };
  if (output["Paths"] !== undefined) {
    contents.Paths = deserializeAws_restXmlPaths(output["Paths"], context);
  }
  if (output["CallerReference"] !== undefined) {
    contents.CallerReference = __expectString(output["CallerReference"]);
  }
  return contents;
};

const deserializeAws_restXmlInvalidationList = (output: any, context: __SerdeContext): InvalidationList => {
  const contents: any = {
    Marker: undefined,
    NextMarker: undefined,
    MaxItems: undefined,
    IsTruncated: undefined,
    Quantity: undefined,
    Items: undefined,
  };
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
    contents.Items = deserializeAws_restXmlInvalidationSummaryList(
      __getArrayIfSingleItem(output["Items"]["InvalidationSummary"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlInvalidationSummary = (output: any, context: __SerdeContext): InvalidationSummary => {
  const contents: any = {
    Id: undefined,
    CreateTime: undefined,
    Status: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["CreateTime"] !== undefined) {
    contents.CreateTime = __expectNonNull(__parseRfc3339DateTime(output["CreateTime"]));
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  return contents;
};

const deserializeAws_restXmlInvalidationSummaryList = (output: any, context: __SerdeContext): InvalidationSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlInvalidationSummary(entry, context);
    });
};

const deserializeAws_restXmlKeyGroup = (output: any, context: __SerdeContext): KeyGroup => {
  const contents: any = {
    Id: undefined,
    LastModifiedTime: undefined,
    KeyGroupConfig: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["LastModifiedTime"] !== undefined) {
    contents.LastModifiedTime = __expectNonNull(__parseRfc3339DateTime(output["LastModifiedTime"]));
  }
  if (output["KeyGroupConfig"] !== undefined) {
    contents.KeyGroupConfig = deserializeAws_restXmlKeyGroupConfig(output["KeyGroupConfig"], context);
  }
  return contents;
};

const deserializeAws_restXmlKeyGroupConfig = (output: any, context: __SerdeContext): KeyGroupConfig => {
  const contents: any = {
    Name: undefined,
    Items: undefined,
    Comment: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["PublicKey"] !== undefined) {
    contents.Items = deserializeAws_restXmlPublicKeyIdList(
      __getArrayIfSingleItem(output["Items"]["PublicKey"]),
      context
    );
  }
  if (output["Comment"] !== undefined) {
    contents.Comment = __expectString(output["Comment"]);
  }
  return contents;
};

const deserializeAws_restXmlKeyGroupList = (output: any, context: __SerdeContext): KeyGroupList => {
  const contents: any = {
    NextMarker: undefined,
    MaxItems: undefined,
    Quantity: undefined,
    Items: undefined,
  };
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
    contents.Items = deserializeAws_restXmlKeyGroupSummaryList(
      __getArrayIfSingleItem(output["Items"]["KeyGroupSummary"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlKeyGroupSummary = (output: any, context: __SerdeContext): KeyGroupSummary => {
  const contents: any = {
    KeyGroup: undefined,
  };
  if (output["KeyGroup"] !== undefined) {
    contents.KeyGroup = deserializeAws_restXmlKeyGroup(output["KeyGroup"], context);
  }
  return contents;
};

const deserializeAws_restXmlKeyGroupSummaryList = (output: any, context: __SerdeContext): KeyGroupSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlKeyGroupSummary(entry, context);
    });
};

const deserializeAws_restXmlKeyPairIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlKeyPairIds = (output: any, context: __SerdeContext): KeyPairIds => {
  const contents: any = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["KeyPairId"] !== undefined) {
    contents.Items = deserializeAws_restXmlKeyPairIdList(__getArrayIfSingleItem(output["Items"]["KeyPairId"]), context);
  }
  return contents;
};

const deserializeAws_restXmlKGKeyPairIds = (output: any, context: __SerdeContext): KGKeyPairIds => {
  const contents: any = {
    KeyGroupId: undefined,
    KeyPairIds: undefined,
  };
  if (output["KeyGroupId"] !== undefined) {
    contents.KeyGroupId = __expectString(output["KeyGroupId"]);
  }
  if (output["KeyPairIds"] !== undefined) {
    contents.KeyPairIds = deserializeAws_restXmlKeyPairIds(output["KeyPairIds"], context);
  }
  return contents;
};

const deserializeAws_restXmlKGKeyPairIdsList = (output: any, context: __SerdeContext): KGKeyPairIds[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlKGKeyPairIds(entry, context);
    });
};

const deserializeAws_restXmlKinesisStreamConfig = (output: any, context: __SerdeContext): KinesisStreamConfig => {
  const contents: any = {
    RoleARN: undefined,
    StreamARN: undefined,
  };
  if (output["RoleARN"] !== undefined) {
    contents.RoleARN = __expectString(output["RoleARN"]);
  }
  if (output["StreamARN"] !== undefined) {
    contents.StreamARN = __expectString(output["StreamARN"]);
  }
  return contents;
};

const deserializeAws_restXmlLambdaFunctionAssociation = (
  output: any,
  context: __SerdeContext
): LambdaFunctionAssociation => {
  const contents: any = {
    LambdaFunctionARN: undefined,
    EventType: undefined,
    IncludeBody: undefined,
  };
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

const deserializeAws_restXmlLambdaFunctionAssociationList = (
  output: any,
  context: __SerdeContext
): LambdaFunctionAssociation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlLambdaFunctionAssociation(entry, context);
    });
};

const deserializeAws_restXmlLambdaFunctionAssociations = (
  output: any,
  context: __SerdeContext
): LambdaFunctionAssociations => {
  const contents: any = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["LambdaFunctionAssociation"] !== undefined) {
    contents.Items = deserializeAws_restXmlLambdaFunctionAssociationList(
      __getArrayIfSingleItem(output["Items"]["LambdaFunctionAssociation"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlLocationList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlLoggingConfig = (output: any, context: __SerdeContext): LoggingConfig => {
  const contents: any = {
    Enabled: undefined,
    IncludeCookies: undefined,
    Bucket: undefined,
    Prefix: undefined,
  };
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

const deserializeAws_restXmlMethodsList = (output: any, context: __SerdeContext): (Method | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlMonitoringSubscription = (output: any, context: __SerdeContext): MonitoringSubscription => {
  const contents: any = {
    RealtimeMetricsSubscriptionConfig: undefined,
  };
  if (output["RealtimeMetricsSubscriptionConfig"] !== undefined) {
    contents.RealtimeMetricsSubscriptionConfig = deserializeAws_restXmlRealtimeMetricsSubscriptionConfig(
      output["RealtimeMetricsSubscriptionConfig"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlOrigin = (output: any, context: __SerdeContext): Origin => {
  const contents: any = {
    Id: undefined,
    DomainName: undefined,
    OriginPath: undefined,
    CustomHeaders: undefined,
    S3OriginConfig: undefined,
    CustomOriginConfig: undefined,
    ConnectionAttempts: undefined,
    ConnectionTimeout: undefined,
    OriginShield: undefined,
  };
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
    contents.CustomHeaders = deserializeAws_restXmlCustomHeaders(output["CustomHeaders"], context);
  }
  if (output["S3OriginConfig"] !== undefined) {
    contents.S3OriginConfig = deserializeAws_restXmlS3OriginConfig(output["S3OriginConfig"], context);
  }
  if (output["CustomOriginConfig"] !== undefined) {
    contents.CustomOriginConfig = deserializeAws_restXmlCustomOriginConfig(output["CustomOriginConfig"], context);
  }
  if (output["ConnectionAttempts"] !== undefined) {
    contents.ConnectionAttempts = __strictParseInt32(output["ConnectionAttempts"]) as number;
  }
  if (output["ConnectionTimeout"] !== undefined) {
    contents.ConnectionTimeout = __strictParseInt32(output["ConnectionTimeout"]) as number;
  }
  if (output["OriginShield"] !== undefined) {
    contents.OriginShield = deserializeAws_restXmlOriginShield(output["OriginShield"], context);
  }
  return contents;
};

const deserializeAws_restXmlOriginCustomHeader = (output: any, context: __SerdeContext): OriginCustomHeader => {
  const contents: any = {
    HeaderName: undefined,
    HeaderValue: undefined,
  };
  if (output["HeaderName"] !== undefined) {
    contents.HeaderName = __expectString(output["HeaderName"]);
  }
  if (output["HeaderValue"] !== undefined) {
    contents.HeaderValue = __expectString(output["HeaderValue"]);
  }
  return contents;
};

const deserializeAws_restXmlOriginCustomHeadersList = (output: any, context: __SerdeContext): OriginCustomHeader[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlOriginCustomHeader(entry, context);
    });
};

const deserializeAws_restXmlOriginGroup = (output: any, context: __SerdeContext): OriginGroup => {
  const contents: any = {
    Id: undefined,
    FailoverCriteria: undefined,
    Members: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["FailoverCriteria"] !== undefined) {
    contents.FailoverCriteria = deserializeAws_restXmlOriginGroupFailoverCriteria(output["FailoverCriteria"], context);
  }
  if (output["Members"] !== undefined) {
    contents.Members = deserializeAws_restXmlOriginGroupMembers(output["Members"], context);
  }
  return contents;
};

const deserializeAws_restXmlOriginGroupFailoverCriteria = (
  output: any,
  context: __SerdeContext
): OriginGroupFailoverCriteria => {
  const contents: any = {
    StatusCodes: undefined,
  };
  if (output["StatusCodes"] !== undefined) {
    contents.StatusCodes = deserializeAws_restXmlStatusCodes(output["StatusCodes"], context);
  }
  return contents;
};

const deserializeAws_restXmlOriginGroupList = (output: any, context: __SerdeContext): OriginGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlOriginGroup(entry, context);
    });
};

const deserializeAws_restXmlOriginGroupMember = (output: any, context: __SerdeContext): OriginGroupMember => {
  const contents: any = {
    OriginId: undefined,
  };
  if (output["OriginId"] !== undefined) {
    contents.OriginId = __expectString(output["OriginId"]);
  }
  return contents;
};

const deserializeAws_restXmlOriginGroupMemberList = (output: any, context: __SerdeContext): OriginGroupMember[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlOriginGroupMember(entry, context);
    });
};

const deserializeAws_restXmlOriginGroupMembers = (output: any, context: __SerdeContext): OriginGroupMembers => {
  const contents: any = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["OriginGroupMember"] !== undefined) {
    contents.Items = deserializeAws_restXmlOriginGroupMemberList(
      __getArrayIfSingleItem(output["Items"]["OriginGroupMember"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlOriginGroups = (output: any, context: __SerdeContext): OriginGroups => {
  const contents: any = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["OriginGroup"] !== undefined) {
    contents.Items = deserializeAws_restXmlOriginGroupList(
      __getArrayIfSingleItem(output["Items"]["OriginGroup"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlOriginList = (output: any, context: __SerdeContext): Origin[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlOrigin(entry, context);
    });
};

const deserializeAws_restXmlOriginRequestPolicy = (output: any, context: __SerdeContext): OriginRequestPolicy => {
  const contents: any = {
    Id: undefined,
    LastModifiedTime: undefined,
    OriginRequestPolicyConfig: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["LastModifiedTime"] !== undefined) {
    contents.LastModifiedTime = __expectNonNull(__parseRfc3339DateTime(output["LastModifiedTime"]));
  }
  if (output["OriginRequestPolicyConfig"] !== undefined) {
    contents.OriginRequestPolicyConfig = deserializeAws_restXmlOriginRequestPolicyConfig(
      output["OriginRequestPolicyConfig"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlOriginRequestPolicyConfig = (
  output: any,
  context: __SerdeContext
): OriginRequestPolicyConfig => {
  const contents: any = {
    Comment: undefined,
    Name: undefined,
    HeadersConfig: undefined,
    CookiesConfig: undefined,
    QueryStringsConfig: undefined,
  };
  if (output["Comment"] !== undefined) {
    contents.Comment = __expectString(output["Comment"]);
  }
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["HeadersConfig"] !== undefined) {
    contents.HeadersConfig = deserializeAws_restXmlOriginRequestPolicyHeadersConfig(output["HeadersConfig"], context);
  }
  if (output["CookiesConfig"] !== undefined) {
    contents.CookiesConfig = deserializeAws_restXmlOriginRequestPolicyCookiesConfig(output["CookiesConfig"], context);
  }
  if (output["QueryStringsConfig"] !== undefined) {
    contents.QueryStringsConfig = deserializeAws_restXmlOriginRequestPolicyQueryStringsConfig(
      output["QueryStringsConfig"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlOriginRequestPolicyCookiesConfig = (
  output: any,
  context: __SerdeContext
): OriginRequestPolicyCookiesConfig => {
  const contents: any = {
    CookieBehavior: undefined,
    Cookies: undefined,
  };
  if (output["CookieBehavior"] !== undefined) {
    contents.CookieBehavior = __expectString(output["CookieBehavior"]);
  }
  if (output["Cookies"] !== undefined) {
    contents.Cookies = deserializeAws_restXmlCookieNames(output["Cookies"], context);
  }
  return contents;
};

const deserializeAws_restXmlOriginRequestPolicyHeadersConfig = (
  output: any,
  context: __SerdeContext
): OriginRequestPolicyHeadersConfig => {
  const contents: any = {
    HeaderBehavior: undefined,
    Headers: undefined,
  };
  if (output["HeaderBehavior"] !== undefined) {
    contents.HeaderBehavior = __expectString(output["HeaderBehavior"]);
  }
  if (output["Headers"] !== undefined) {
    contents.Headers = deserializeAws_restXmlHeaders(output["Headers"], context);
  }
  return contents;
};

const deserializeAws_restXmlOriginRequestPolicyList = (
  output: any,
  context: __SerdeContext
): OriginRequestPolicyList => {
  const contents: any = {
    NextMarker: undefined,
    MaxItems: undefined,
    Quantity: undefined,
    Items: undefined,
  };
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
    contents.Items = deserializeAws_restXmlOriginRequestPolicySummaryList(
      __getArrayIfSingleItem(output["Items"]["OriginRequestPolicySummary"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlOriginRequestPolicyQueryStringsConfig = (
  output: any,
  context: __SerdeContext
): OriginRequestPolicyQueryStringsConfig => {
  const contents: any = {
    QueryStringBehavior: undefined,
    QueryStrings: undefined,
  };
  if (output["QueryStringBehavior"] !== undefined) {
    contents.QueryStringBehavior = __expectString(output["QueryStringBehavior"]);
  }
  if (output["QueryStrings"] !== undefined) {
    contents.QueryStrings = deserializeAws_restXmlQueryStringNames(output["QueryStrings"], context);
  }
  return contents;
};

const deserializeAws_restXmlOriginRequestPolicySummary = (
  output: any,
  context: __SerdeContext
): OriginRequestPolicySummary => {
  const contents: any = {
    Type: undefined,
    OriginRequestPolicy: undefined,
  };
  if (output["Type"] !== undefined) {
    contents.Type = __expectString(output["Type"]);
  }
  if (output["OriginRequestPolicy"] !== undefined) {
    contents.OriginRequestPolicy = deserializeAws_restXmlOriginRequestPolicy(output["OriginRequestPolicy"], context);
  }
  return contents;
};

const deserializeAws_restXmlOriginRequestPolicySummaryList = (
  output: any,
  context: __SerdeContext
): OriginRequestPolicySummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlOriginRequestPolicySummary(entry, context);
    });
};

const deserializeAws_restXmlOrigins = (output: any, context: __SerdeContext): Origins => {
  const contents: any = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["Origin"] !== undefined) {
    contents.Items = deserializeAws_restXmlOriginList(__getArrayIfSingleItem(output["Items"]["Origin"]), context);
  }
  return contents;
};

const deserializeAws_restXmlOriginShield = (output: any, context: __SerdeContext): OriginShield => {
  const contents: any = {
    Enabled: undefined,
    OriginShieldRegion: undefined,
  };
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  if (output["OriginShieldRegion"] !== undefined) {
    contents.OriginShieldRegion = __expectString(output["OriginShieldRegion"]);
  }
  return contents;
};

const deserializeAws_restXmlOriginSslProtocols = (output: any, context: __SerdeContext): OriginSslProtocols => {
  const contents: any = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["SslProtocol"] !== undefined) {
    contents.Items = deserializeAws_restXmlSslProtocolsList(
      __getArrayIfSingleItem(output["Items"]["SslProtocol"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlParametersInCacheKeyAndForwardedToOrigin = (
  output: any,
  context: __SerdeContext
): ParametersInCacheKeyAndForwardedToOrigin => {
  const contents: any = {
    EnableAcceptEncodingGzip: undefined,
    EnableAcceptEncodingBrotli: undefined,
    HeadersConfig: undefined,
    CookiesConfig: undefined,
    QueryStringsConfig: undefined,
  };
  if (output["EnableAcceptEncodingGzip"] !== undefined) {
    contents.EnableAcceptEncodingGzip = __parseBoolean(output["EnableAcceptEncodingGzip"]);
  }
  if (output["EnableAcceptEncodingBrotli"] !== undefined) {
    contents.EnableAcceptEncodingBrotli = __parseBoolean(output["EnableAcceptEncodingBrotli"]);
  }
  if (output["HeadersConfig"] !== undefined) {
    contents.HeadersConfig = deserializeAws_restXmlCachePolicyHeadersConfig(output["HeadersConfig"], context);
  }
  if (output["CookiesConfig"] !== undefined) {
    contents.CookiesConfig = deserializeAws_restXmlCachePolicyCookiesConfig(output["CookiesConfig"], context);
  }
  if (output["QueryStringsConfig"] !== undefined) {
    contents.QueryStringsConfig = deserializeAws_restXmlCachePolicyQueryStringsConfig(
      output["QueryStringsConfig"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlPathList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlPaths = (output: any, context: __SerdeContext): Paths => {
  const contents: any = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["Path"] !== undefined) {
    contents.Items = deserializeAws_restXmlPathList(__getArrayIfSingleItem(output["Items"]["Path"]), context);
  }
  return contents;
};

const deserializeAws_restXmlPublicKey = (output: any, context: __SerdeContext): PublicKey => {
  const contents: any = {
    Id: undefined,
    CreatedTime: undefined,
    PublicKeyConfig: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["CreatedTime"] !== undefined) {
    contents.CreatedTime = __expectNonNull(__parseRfc3339DateTime(output["CreatedTime"]));
  }
  if (output["PublicKeyConfig"] !== undefined) {
    contents.PublicKeyConfig = deserializeAws_restXmlPublicKeyConfig(output["PublicKeyConfig"], context);
  }
  return contents;
};

const deserializeAws_restXmlPublicKeyConfig = (output: any, context: __SerdeContext): PublicKeyConfig => {
  const contents: any = {
    CallerReference: undefined,
    Name: undefined,
    EncodedKey: undefined,
    Comment: undefined,
  };
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

const deserializeAws_restXmlPublicKeyIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlPublicKeyList = (output: any, context: __SerdeContext): PublicKeyList => {
  const contents: any = {
    NextMarker: undefined,
    MaxItems: undefined,
    Quantity: undefined,
    Items: undefined,
  };
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
    contents.Items = deserializeAws_restXmlPublicKeySummaryList(
      __getArrayIfSingleItem(output["Items"]["PublicKeySummary"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlPublicKeySummary = (output: any, context: __SerdeContext): PublicKeySummary => {
  const contents: any = {
    Id: undefined,
    Name: undefined,
    CreatedTime: undefined,
    EncodedKey: undefined,
    Comment: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["CreatedTime"] !== undefined) {
    contents.CreatedTime = __expectNonNull(__parseRfc3339DateTime(output["CreatedTime"]));
  }
  if (output["EncodedKey"] !== undefined) {
    contents.EncodedKey = __expectString(output["EncodedKey"]);
  }
  if (output["Comment"] !== undefined) {
    contents.Comment = __expectString(output["Comment"]);
  }
  return contents;
};

const deserializeAws_restXmlPublicKeySummaryList = (output: any, context: __SerdeContext): PublicKeySummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlPublicKeySummary(entry, context);
    });
};

const deserializeAws_restXmlQueryArgProfile = (output: any, context: __SerdeContext): QueryArgProfile => {
  const contents: any = {
    QueryArg: undefined,
    ProfileId: undefined,
  };
  if (output["QueryArg"] !== undefined) {
    contents.QueryArg = __expectString(output["QueryArg"]);
  }
  if (output["ProfileId"] !== undefined) {
    contents.ProfileId = __expectString(output["ProfileId"]);
  }
  return contents;
};

const deserializeAws_restXmlQueryArgProfileConfig = (output: any, context: __SerdeContext): QueryArgProfileConfig => {
  const contents: any = {
    ForwardWhenQueryArgProfileIsUnknown: undefined,
    QueryArgProfiles: undefined,
  };
  if (output["ForwardWhenQueryArgProfileIsUnknown"] !== undefined) {
    contents.ForwardWhenQueryArgProfileIsUnknown = __parseBoolean(output["ForwardWhenQueryArgProfileIsUnknown"]);
  }
  if (output["QueryArgProfiles"] !== undefined) {
    contents.QueryArgProfiles = deserializeAws_restXmlQueryArgProfiles(output["QueryArgProfiles"], context);
  }
  return contents;
};

const deserializeAws_restXmlQueryArgProfileList = (output: any, context: __SerdeContext): QueryArgProfile[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlQueryArgProfile(entry, context);
    });
};

const deserializeAws_restXmlQueryArgProfiles = (output: any, context: __SerdeContext): QueryArgProfiles => {
  const contents: any = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["QueryArgProfile"] !== undefined) {
    contents.Items = deserializeAws_restXmlQueryArgProfileList(
      __getArrayIfSingleItem(output["Items"]["QueryArgProfile"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlQueryStringCacheKeys = (output: any, context: __SerdeContext): QueryStringCacheKeys => {
  const contents: any = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["Name"] !== undefined) {
    contents.Items = deserializeAws_restXmlQueryStringCacheKeysList(
      __getArrayIfSingleItem(output["Items"]["Name"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlQueryStringCacheKeysList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlQueryStringNames = (output: any, context: __SerdeContext): QueryStringNames => {
  const contents: any = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["Name"] !== undefined) {
    contents.Items = deserializeAws_restXmlQueryStringNamesList(
      __getArrayIfSingleItem(output["Items"]["Name"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlQueryStringNamesList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlRealtimeLogConfig = (output: any, context: __SerdeContext): RealtimeLogConfig => {
  const contents: any = {
    ARN: undefined,
    Name: undefined,
    SamplingRate: undefined,
    EndPoints: undefined,
    Fields: undefined,
  };
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
    contents.EndPoints = deserializeAws_restXmlEndPointList(
      __getArrayIfSingleItem(output["EndPoints"]["member"]),
      context
    );
  }
  if (output.Fields === "") {
    contents.Fields = [];
  } else if (output["Fields"] !== undefined && output["Fields"]["Field"] !== undefined) {
    contents.Fields = deserializeAws_restXmlFieldList(__getArrayIfSingleItem(output["Fields"]["Field"]), context);
  }
  return contents;
};

const deserializeAws_restXmlRealtimeLogConfigList = (output: any, context: __SerdeContext): RealtimeLogConfig[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlRealtimeLogConfig(entry, context);
    });
};

const deserializeAws_restXmlRealtimeLogConfigs = (output: any, context: __SerdeContext): RealtimeLogConfigs => {
  const contents: any = {
    MaxItems: undefined,
    Items: undefined,
    IsTruncated: undefined,
    Marker: undefined,
    NextMarker: undefined,
  };
  if (output["MaxItems"] !== undefined) {
    contents.MaxItems = __strictParseInt32(output["MaxItems"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["member"] !== undefined) {
    contents.Items = deserializeAws_restXmlRealtimeLogConfigList(
      __getArrayIfSingleItem(output["Items"]["member"]),
      context
    );
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

const deserializeAws_restXmlRealtimeMetricsSubscriptionConfig = (
  output: any,
  context: __SerdeContext
): RealtimeMetricsSubscriptionConfig => {
  const contents: any = {
    RealtimeMetricsSubscriptionStatus: undefined,
  };
  if (output["RealtimeMetricsSubscriptionStatus"] !== undefined) {
    contents.RealtimeMetricsSubscriptionStatus = __expectString(output["RealtimeMetricsSubscriptionStatus"]);
  }
  return contents;
};

const deserializeAws_restXmlResponseHeadersPolicy = (output: any, context: __SerdeContext): ResponseHeadersPolicy => {
  const contents: any = {
    Id: undefined,
    LastModifiedTime: undefined,
    ResponseHeadersPolicyConfig: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["LastModifiedTime"] !== undefined) {
    contents.LastModifiedTime = __expectNonNull(__parseRfc3339DateTime(output["LastModifiedTime"]));
  }
  if (output["ResponseHeadersPolicyConfig"] !== undefined) {
    contents.ResponseHeadersPolicyConfig = deserializeAws_restXmlResponseHeadersPolicyConfig(
      output["ResponseHeadersPolicyConfig"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlResponseHeadersPolicyAccessControlAllowHeaders = (
  output: any,
  context: __SerdeContext
): ResponseHeadersPolicyAccessControlAllowHeaders => {
  const contents: any = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["Header"] !== undefined) {
    contents.Items = deserializeAws_restXmlAccessControlAllowHeadersList(
      __getArrayIfSingleItem(output["Items"]["Header"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlResponseHeadersPolicyAccessControlAllowMethods = (
  output: any,
  context: __SerdeContext
): ResponseHeadersPolicyAccessControlAllowMethods => {
  const contents: any = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["Method"] !== undefined) {
    contents.Items = deserializeAws_restXmlAccessControlAllowMethodsList(
      __getArrayIfSingleItem(output["Items"]["Method"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlResponseHeadersPolicyAccessControlAllowOrigins = (
  output: any,
  context: __SerdeContext
): ResponseHeadersPolicyAccessControlAllowOrigins => {
  const contents: any = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["Origin"] !== undefined) {
    contents.Items = deserializeAws_restXmlAccessControlAllowOriginsList(
      __getArrayIfSingleItem(output["Items"]["Origin"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlResponseHeadersPolicyAccessControlExposeHeaders = (
  output: any,
  context: __SerdeContext
): ResponseHeadersPolicyAccessControlExposeHeaders => {
  const contents: any = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["Header"] !== undefined) {
    contents.Items = deserializeAws_restXmlAccessControlExposeHeadersList(
      __getArrayIfSingleItem(output["Items"]["Header"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlResponseHeadersPolicyConfig = (
  output: any,
  context: __SerdeContext
): ResponseHeadersPolicyConfig => {
  const contents: any = {
    Comment: undefined,
    Name: undefined,
    CorsConfig: undefined,
    SecurityHeadersConfig: undefined,
    CustomHeadersConfig: undefined,
    ServerTimingHeadersConfig: undefined,
  };
  if (output["Comment"] !== undefined) {
    contents.Comment = __expectString(output["Comment"]);
  }
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["CorsConfig"] !== undefined) {
    contents.CorsConfig = deserializeAws_restXmlResponseHeadersPolicyCorsConfig(output["CorsConfig"], context);
  }
  if (output["SecurityHeadersConfig"] !== undefined) {
    contents.SecurityHeadersConfig = deserializeAws_restXmlResponseHeadersPolicySecurityHeadersConfig(
      output["SecurityHeadersConfig"],
      context
    );
  }
  if (output["CustomHeadersConfig"] !== undefined) {
    contents.CustomHeadersConfig = deserializeAws_restXmlResponseHeadersPolicyCustomHeadersConfig(
      output["CustomHeadersConfig"],
      context
    );
  }
  if (output["ServerTimingHeadersConfig"] !== undefined) {
    contents.ServerTimingHeadersConfig = deserializeAws_restXmlResponseHeadersPolicyServerTimingHeadersConfig(
      output["ServerTimingHeadersConfig"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlResponseHeadersPolicyContentSecurityPolicy = (
  output: any,
  context: __SerdeContext
): ResponseHeadersPolicyContentSecurityPolicy => {
  const contents: any = {
    Override: undefined,
    ContentSecurityPolicy: undefined,
  };
  if (output["Override"] !== undefined) {
    contents.Override = __parseBoolean(output["Override"]);
  }
  if (output["ContentSecurityPolicy"] !== undefined) {
    contents.ContentSecurityPolicy = __expectString(output["ContentSecurityPolicy"]);
  }
  return contents;
};

const deserializeAws_restXmlResponseHeadersPolicyContentTypeOptions = (
  output: any,
  context: __SerdeContext
): ResponseHeadersPolicyContentTypeOptions => {
  const contents: any = {
    Override: undefined,
  };
  if (output["Override"] !== undefined) {
    contents.Override = __parseBoolean(output["Override"]);
  }
  return contents;
};

const deserializeAws_restXmlResponseHeadersPolicyCorsConfig = (
  output: any,
  context: __SerdeContext
): ResponseHeadersPolicyCorsConfig => {
  const contents: any = {
    AccessControlAllowOrigins: undefined,
    AccessControlAllowHeaders: undefined,
    AccessControlAllowMethods: undefined,
    AccessControlAllowCredentials: undefined,
    AccessControlExposeHeaders: undefined,
    AccessControlMaxAgeSec: undefined,
    OriginOverride: undefined,
  };
  if (output["AccessControlAllowOrigins"] !== undefined) {
    contents.AccessControlAllowOrigins = deserializeAws_restXmlResponseHeadersPolicyAccessControlAllowOrigins(
      output["AccessControlAllowOrigins"],
      context
    );
  }
  if (output["AccessControlAllowHeaders"] !== undefined) {
    contents.AccessControlAllowHeaders = deserializeAws_restXmlResponseHeadersPolicyAccessControlAllowHeaders(
      output["AccessControlAllowHeaders"],
      context
    );
  }
  if (output["AccessControlAllowMethods"] !== undefined) {
    contents.AccessControlAllowMethods = deserializeAws_restXmlResponseHeadersPolicyAccessControlAllowMethods(
      output["AccessControlAllowMethods"],
      context
    );
  }
  if (output["AccessControlAllowCredentials"] !== undefined) {
    contents.AccessControlAllowCredentials = __parseBoolean(output["AccessControlAllowCredentials"]);
  }
  if (output["AccessControlExposeHeaders"] !== undefined) {
    contents.AccessControlExposeHeaders = deserializeAws_restXmlResponseHeadersPolicyAccessControlExposeHeaders(
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

const deserializeAws_restXmlResponseHeadersPolicyCustomHeader = (
  output: any,
  context: __SerdeContext
): ResponseHeadersPolicyCustomHeader => {
  const contents: any = {
    Header: undefined,
    Value: undefined,
    Override: undefined,
  };
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

const deserializeAws_restXmlResponseHeadersPolicyCustomHeaderList = (
  output: any,
  context: __SerdeContext
): ResponseHeadersPolicyCustomHeader[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlResponseHeadersPolicyCustomHeader(entry, context);
    });
};

const deserializeAws_restXmlResponseHeadersPolicyCustomHeadersConfig = (
  output: any,
  context: __SerdeContext
): ResponseHeadersPolicyCustomHeadersConfig => {
  const contents: any = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["ResponseHeadersPolicyCustomHeader"] !== undefined) {
    contents.Items = deserializeAws_restXmlResponseHeadersPolicyCustomHeaderList(
      __getArrayIfSingleItem(output["Items"]["ResponseHeadersPolicyCustomHeader"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlResponseHeadersPolicyFrameOptions = (
  output: any,
  context: __SerdeContext
): ResponseHeadersPolicyFrameOptions => {
  const contents: any = {
    Override: undefined,
    FrameOption: undefined,
  };
  if (output["Override"] !== undefined) {
    contents.Override = __parseBoolean(output["Override"]);
  }
  if (output["FrameOption"] !== undefined) {
    contents.FrameOption = __expectString(output["FrameOption"]);
  }
  return contents;
};

const deserializeAws_restXmlResponseHeadersPolicyList = (
  output: any,
  context: __SerdeContext
): ResponseHeadersPolicyList => {
  const contents: any = {
    NextMarker: undefined,
    MaxItems: undefined,
    Quantity: undefined,
    Items: undefined,
  };
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
    contents.Items = deserializeAws_restXmlResponseHeadersPolicySummaryList(
      __getArrayIfSingleItem(output["Items"]["ResponseHeadersPolicySummary"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlResponseHeadersPolicyReferrerPolicy = (
  output: any,
  context: __SerdeContext
): ResponseHeadersPolicyReferrerPolicy => {
  const contents: any = {
    Override: undefined,
    ReferrerPolicy: undefined,
  };
  if (output["Override"] !== undefined) {
    contents.Override = __parseBoolean(output["Override"]);
  }
  if (output["ReferrerPolicy"] !== undefined) {
    contents.ReferrerPolicy = __expectString(output["ReferrerPolicy"]);
  }
  return contents;
};

const deserializeAws_restXmlResponseHeadersPolicySecurityHeadersConfig = (
  output: any,
  context: __SerdeContext
): ResponseHeadersPolicySecurityHeadersConfig => {
  const contents: any = {
    XSSProtection: undefined,
    FrameOptions: undefined,
    ReferrerPolicy: undefined,
    ContentSecurityPolicy: undefined,
    ContentTypeOptions: undefined,
    StrictTransportSecurity: undefined,
  };
  if (output["XSSProtection"] !== undefined) {
    contents.XSSProtection = deserializeAws_restXmlResponseHeadersPolicyXSSProtection(output["XSSProtection"], context);
  }
  if (output["FrameOptions"] !== undefined) {
    contents.FrameOptions = deserializeAws_restXmlResponseHeadersPolicyFrameOptions(output["FrameOptions"], context);
  }
  if (output["ReferrerPolicy"] !== undefined) {
    contents.ReferrerPolicy = deserializeAws_restXmlResponseHeadersPolicyReferrerPolicy(
      output["ReferrerPolicy"],
      context
    );
  }
  if (output["ContentSecurityPolicy"] !== undefined) {
    contents.ContentSecurityPolicy = deserializeAws_restXmlResponseHeadersPolicyContentSecurityPolicy(
      output["ContentSecurityPolicy"],
      context
    );
  }
  if (output["ContentTypeOptions"] !== undefined) {
    contents.ContentTypeOptions = deserializeAws_restXmlResponseHeadersPolicyContentTypeOptions(
      output["ContentTypeOptions"],
      context
    );
  }
  if (output["StrictTransportSecurity"] !== undefined) {
    contents.StrictTransportSecurity = deserializeAws_restXmlResponseHeadersPolicyStrictTransportSecurity(
      output["StrictTransportSecurity"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlResponseHeadersPolicyServerTimingHeadersConfig = (
  output: any,
  context: __SerdeContext
): ResponseHeadersPolicyServerTimingHeadersConfig => {
  const contents: any = {
    Enabled: undefined,
    SamplingRate: undefined,
  };
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  if (output["SamplingRate"] !== undefined) {
    contents.SamplingRate = __strictParseFloat(output["SamplingRate"]) as number;
  }
  return contents;
};

const deserializeAws_restXmlResponseHeadersPolicyStrictTransportSecurity = (
  output: any,
  context: __SerdeContext
): ResponseHeadersPolicyStrictTransportSecurity => {
  const contents: any = {
    Override: undefined,
    IncludeSubdomains: undefined,
    Preload: undefined,
    AccessControlMaxAgeSec: undefined,
  };
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

const deserializeAws_restXmlResponseHeadersPolicySummary = (
  output: any,
  context: __SerdeContext
): ResponseHeadersPolicySummary => {
  const contents: any = {
    Type: undefined,
    ResponseHeadersPolicy: undefined,
  };
  if (output["Type"] !== undefined) {
    contents.Type = __expectString(output["Type"]);
  }
  if (output["ResponseHeadersPolicy"] !== undefined) {
    contents.ResponseHeadersPolicy = deserializeAws_restXmlResponseHeadersPolicy(
      output["ResponseHeadersPolicy"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlResponseHeadersPolicySummaryList = (
  output: any,
  context: __SerdeContext
): ResponseHeadersPolicySummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlResponseHeadersPolicySummary(entry, context);
    });
};

const deserializeAws_restXmlResponseHeadersPolicyXSSProtection = (
  output: any,
  context: __SerdeContext
): ResponseHeadersPolicyXSSProtection => {
  const contents: any = {
    Override: undefined,
    Protection: undefined,
    ModeBlock: undefined,
    ReportUri: undefined,
  };
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

const deserializeAws_restXmlRestrictions = (output: any, context: __SerdeContext): Restrictions => {
  const contents: any = {
    GeoRestriction: undefined,
  };
  if (output["GeoRestriction"] !== undefined) {
    contents.GeoRestriction = deserializeAws_restXmlGeoRestriction(output["GeoRestriction"], context);
  }
  return contents;
};

const deserializeAws_restXmlS3Origin = (output: any, context: __SerdeContext): S3Origin => {
  const contents: any = {
    DomainName: undefined,
    OriginAccessIdentity: undefined,
  };
  if (output["DomainName"] !== undefined) {
    contents.DomainName = __expectString(output["DomainName"]);
  }
  if (output["OriginAccessIdentity"] !== undefined) {
    contents.OriginAccessIdentity = __expectString(output["OriginAccessIdentity"]);
  }
  return contents;
};

const deserializeAws_restXmlS3OriginConfig = (output: any, context: __SerdeContext): S3OriginConfig => {
  const contents: any = {
    OriginAccessIdentity: undefined,
  };
  if (output["OriginAccessIdentity"] !== undefined) {
    contents.OriginAccessIdentity = __expectString(output["OriginAccessIdentity"]);
  }
  return contents;
};

const deserializeAws_restXmlSigner = (output: any, context: __SerdeContext): Signer => {
  const contents: any = {
    AwsAccountNumber: undefined,
    KeyPairIds: undefined,
  };
  if (output["AwsAccountNumber"] !== undefined) {
    contents.AwsAccountNumber = __expectString(output["AwsAccountNumber"]);
  }
  if (output["KeyPairIds"] !== undefined) {
    contents.KeyPairIds = deserializeAws_restXmlKeyPairIds(output["KeyPairIds"], context);
  }
  return contents;
};

const deserializeAws_restXmlSignerList = (output: any, context: __SerdeContext): Signer[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlSigner(entry, context);
    });
};

const deserializeAws_restXmlSslProtocolsList = (output: any, context: __SerdeContext): (SslProtocol | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlStatusCodeList = (output: any, context: __SerdeContext): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __strictParseInt32(entry) as number;
    });
};

const deserializeAws_restXmlStatusCodes = (output: any, context: __SerdeContext): StatusCodes => {
  const contents: any = {
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["StatusCode"] !== undefined) {
    contents.Items = deserializeAws_restXmlStatusCodeList(
      __getArrayIfSingleItem(output["Items"]["StatusCode"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlStreamingDistribution = (output: any, context: __SerdeContext): StreamingDistribution => {
  const contents: any = {
    Id: undefined,
    ARN: undefined,
    Status: undefined,
    LastModifiedTime: undefined,
    DomainName: undefined,
    ActiveTrustedSigners: undefined,
    StreamingDistributionConfig: undefined,
  };
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
    contents.LastModifiedTime = __expectNonNull(__parseRfc3339DateTime(output["LastModifiedTime"]));
  }
  if (output["DomainName"] !== undefined) {
    contents.DomainName = __expectString(output["DomainName"]);
  }
  if (output["ActiveTrustedSigners"] !== undefined) {
    contents.ActiveTrustedSigners = deserializeAws_restXmlActiveTrustedSigners(output["ActiveTrustedSigners"], context);
  }
  if (output["StreamingDistributionConfig"] !== undefined) {
    contents.StreamingDistributionConfig = deserializeAws_restXmlStreamingDistributionConfig(
      output["StreamingDistributionConfig"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlStreamingDistributionConfig = (
  output: any,
  context: __SerdeContext
): StreamingDistributionConfig => {
  const contents: any = {
    CallerReference: undefined,
    S3Origin: undefined,
    Aliases: undefined,
    Comment: undefined,
    Logging: undefined,
    TrustedSigners: undefined,
    PriceClass: undefined,
    Enabled: undefined,
  };
  if (output["CallerReference"] !== undefined) {
    contents.CallerReference = __expectString(output["CallerReference"]);
  }
  if (output["S3Origin"] !== undefined) {
    contents.S3Origin = deserializeAws_restXmlS3Origin(output["S3Origin"], context);
  }
  if (output["Aliases"] !== undefined) {
    contents.Aliases = deserializeAws_restXmlAliases(output["Aliases"], context);
  }
  if (output["Comment"] !== undefined) {
    contents.Comment = __expectString(output["Comment"]);
  }
  if (output["Logging"] !== undefined) {
    contents.Logging = deserializeAws_restXmlStreamingLoggingConfig(output["Logging"], context);
  }
  if (output["TrustedSigners"] !== undefined) {
    contents.TrustedSigners = deserializeAws_restXmlTrustedSigners(output["TrustedSigners"], context);
  }
  if (output["PriceClass"] !== undefined) {
    contents.PriceClass = __expectString(output["PriceClass"]);
  }
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  return contents;
};

const deserializeAws_restXmlStreamingDistributionList = (
  output: any,
  context: __SerdeContext
): StreamingDistributionList => {
  const contents: any = {
    Marker: undefined,
    NextMarker: undefined,
    MaxItems: undefined,
    IsTruncated: undefined,
    Quantity: undefined,
    Items: undefined,
  };
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
    contents.Items = deserializeAws_restXmlStreamingDistributionSummaryList(
      __getArrayIfSingleItem(output["Items"]["StreamingDistributionSummary"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlStreamingDistributionSummary = (
  output: any,
  context: __SerdeContext
): StreamingDistributionSummary => {
  const contents: any = {
    Id: undefined,
    ARN: undefined,
    Status: undefined,
    LastModifiedTime: undefined,
    DomainName: undefined,
    S3Origin: undefined,
    Aliases: undefined,
    TrustedSigners: undefined,
    Comment: undefined,
    PriceClass: undefined,
    Enabled: undefined,
  };
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
    contents.LastModifiedTime = __expectNonNull(__parseRfc3339DateTime(output["LastModifiedTime"]));
  }
  if (output["DomainName"] !== undefined) {
    contents.DomainName = __expectString(output["DomainName"]);
  }
  if (output["S3Origin"] !== undefined) {
    contents.S3Origin = deserializeAws_restXmlS3Origin(output["S3Origin"], context);
  }
  if (output["Aliases"] !== undefined) {
    contents.Aliases = deserializeAws_restXmlAliases(output["Aliases"], context);
  }
  if (output["TrustedSigners"] !== undefined) {
    contents.TrustedSigners = deserializeAws_restXmlTrustedSigners(output["TrustedSigners"], context);
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

const deserializeAws_restXmlStreamingDistributionSummaryList = (
  output: any,
  context: __SerdeContext
): StreamingDistributionSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlStreamingDistributionSummary(entry, context);
    });
};

const deserializeAws_restXmlStreamingLoggingConfig = (output: any, context: __SerdeContext): StreamingLoggingConfig => {
  const contents: any = {
    Enabled: undefined,
    Bucket: undefined,
    Prefix: undefined,
  };
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

const deserializeAws_restXmlTag = (output: any, context: __SerdeContext): Tag => {
  const contents: any = {
    Key: undefined,
    Value: undefined,
  };
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  return contents;
};

const deserializeAws_restXmlTagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlTag(entry, context);
    });
};

const deserializeAws_restXmlTags = (output: any, context: __SerdeContext): Tags => {
  const contents: any = {
    Items: undefined,
  };
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["Tag"] !== undefined) {
    contents.Items = deserializeAws_restXmlTagList(__getArrayIfSingleItem(output["Items"]["Tag"]), context);
  }
  return contents;
};

const deserializeAws_restXmlTestResult = (output: any, context: __SerdeContext): TestResult => {
  const contents: any = {
    FunctionSummary: undefined,
    ComputeUtilization: undefined,
    FunctionExecutionLogs: undefined,
    FunctionErrorMessage: undefined,
    FunctionOutput: undefined,
  };
  if (output["FunctionSummary"] !== undefined) {
    contents.FunctionSummary = deserializeAws_restXmlFunctionSummary(output["FunctionSummary"], context);
  }
  if (output["ComputeUtilization"] !== undefined) {
    contents.ComputeUtilization = __expectString(output["ComputeUtilization"]);
  }
  if (output.FunctionExecutionLogs === "") {
    contents.FunctionExecutionLogs = [];
  } else if (output["FunctionExecutionLogs"] !== undefined && output["FunctionExecutionLogs"]["member"] !== undefined) {
    contents.FunctionExecutionLogs = deserializeAws_restXmlFunctionExecutionLogList(
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

const deserializeAws_restXmlTrustedKeyGroupIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlTrustedKeyGroups = (output: any, context: __SerdeContext): TrustedKeyGroups => {
  const contents: any = {
    Enabled: undefined,
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["KeyGroup"] !== undefined) {
    contents.Items = deserializeAws_restXmlTrustedKeyGroupIdList(
      __getArrayIfSingleItem(output["Items"]["KeyGroup"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlTrustedSigners = (output: any, context: __SerdeContext): TrustedSigners => {
  const contents: any = {
    Enabled: undefined,
    Quantity: undefined,
    Items: undefined,
  };
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  if (output["Quantity"] !== undefined) {
    contents.Quantity = __strictParseInt32(output["Quantity"]) as number;
  }
  if (output.Items === "") {
    contents.Items = [];
  } else if (output["Items"] !== undefined && output["Items"]["AwsAccountNumber"] !== undefined) {
    contents.Items = deserializeAws_restXmlAwsAccountNumberList(
      __getArrayIfSingleItem(output["Items"]["AwsAccountNumber"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlViewerCertificate = (output: any, context: __SerdeContext): ViewerCertificate => {
  const contents: any = {
    CloudFrontDefaultCertificate: undefined,
    IAMCertificateId: undefined,
    ACMCertificateArn: undefined,
    SSLSupportMethod: undefined,
    MinimumProtocolVersion: undefined,
    Certificate: undefined,
    CertificateSource: undefined,
  };
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
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

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
      const parsedObj = xmlParse(encoded, {
        attributeNamePrefix: "",
        ignoreAttributes: false,
        parseNodeValue: false,
        trimValues: false,
        tagValueProcessor: (val) => (val.trim() === "" && val.includes("\n") ? "" : decodeHTML(val)),
      });
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

const loadRestXmlErrorCode = (output: __HttpResponse, data: any): string => {
  if (data.Error.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
  return "";
};
