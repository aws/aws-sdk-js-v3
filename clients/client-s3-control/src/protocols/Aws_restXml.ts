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
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  isSerializableHeaderValue,
  map,
  parseBoolean as __parseBoolean,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  serializeDateTime as __serializeDateTime,
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
import { v4 as generateIdempotencyToken } from "uuid";

import {
  AssociateAccessGrantsIdentityCenterCommandInput,
  AssociateAccessGrantsIdentityCenterCommandOutput,
} from "../commands/AssociateAccessGrantsIdentityCenterCommand";
import { CreateAccessGrantCommandInput, CreateAccessGrantCommandOutput } from "../commands/CreateAccessGrantCommand";
import {
  CreateAccessGrantsInstanceCommandInput,
  CreateAccessGrantsInstanceCommandOutput,
} from "../commands/CreateAccessGrantsInstanceCommand";
import {
  CreateAccessGrantsLocationCommandInput,
  CreateAccessGrantsLocationCommandOutput,
} from "../commands/CreateAccessGrantsLocationCommand";
import { CreateAccessPointCommandInput, CreateAccessPointCommandOutput } from "../commands/CreateAccessPointCommand";
import {
  CreateAccessPointForObjectLambdaCommandInput,
  CreateAccessPointForObjectLambdaCommandOutput,
} from "../commands/CreateAccessPointForObjectLambdaCommand";
import { CreateBucketCommandInput, CreateBucketCommandOutput } from "../commands/CreateBucketCommand";
import { CreateJobCommandInput, CreateJobCommandOutput } from "../commands/CreateJobCommand";
import {
  CreateMultiRegionAccessPointCommandInput,
  CreateMultiRegionAccessPointCommandOutput,
} from "../commands/CreateMultiRegionAccessPointCommand";
import {
  CreateStorageLensGroupCommandInput,
  CreateStorageLensGroupCommandOutput,
} from "../commands/CreateStorageLensGroupCommand";
import { DeleteAccessGrantCommandInput, DeleteAccessGrantCommandOutput } from "../commands/DeleteAccessGrantCommand";
import {
  DeleteAccessGrantsInstanceCommandInput,
  DeleteAccessGrantsInstanceCommandOutput,
} from "../commands/DeleteAccessGrantsInstanceCommand";
import {
  DeleteAccessGrantsInstanceResourcePolicyCommandInput,
  DeleteAccessGrantsInstanceResourcePolicyCommandOutput,
} from "../commands/DeleteAccessGrantsInstanceResourcePolicyCommand";
import {
  DeleteAccessGrantsLocationCommandInput,
  DeleteAccessGrantsLocationCommandOutput,
} from "../commands/DeleteAccessGrantsLocationCommand";
import { DeleteAccessPointCommandInput, DeleteAccessPointCommandOutput } from "../commands/DeleteAccessPointCommand";
import {
  DeleteAccessPointForObjectLambdaCommandInput,
  DeleteAccessPointForObjectLambdaCommandOutput,
} from "../commands/DeleteAccessPointForObjectLambdaCommand";
import {
  DeleteAccessPointPolicyCommandInput,
  DeleteAccessPointPolicyCommandOutput,
} from "../commands/DeleteAccessPointPolicyCommand";
import {
  DeleteAccessPointPolicyForObjectLambdaCommandInput,
  DeleteAccessPointPolicyForObjectLambdaCommandOutput,
} from "../commands/DeleteAccessPointPolicyForObjectLambdaCommand";
import {
  DeleteAccessPointScopeCommandInput,
  DeleteAccessPointScopeCommandOutput,
} from "../commands/DeleteAccessPointScopeCommand";
import { DeleteBucketCommandInput, DeleteBucketCommandOutput } from "../commands/DeleteBucketCommand";
import {
  DeleteBucketLifecycleConfigurationCommandInput,
  DeleteBucketLifecycleConfigurationCommandOutput,
} from "../commands/DeleteBucketLifecycleConfigurationCommand";
import { DeleteBucketPolicyCommandInput, DeleteBucketPolicyCommandOutput } from "../commands/DeleteBucketPolicyCommand";
import {
  DeleteBucketReplicationCommandInput,
  DeleteBucketReplicationCommandOutput,
} from "../commands/DeleteBucketReplicationCommand";
import {
  DeleteBucketTaggingCommandInput,
  DeleteBucketTaggingCommandOutput,
} from "../commands/DeleteBucketTaggingCommand";
import { DeleteJobTaggingCommandInput, DeleteJobTaggingCommandOutput } from "../commands/DeleteJobTaggingCommand";
import {
  DeleteMultiRegionAccessPointCommandInput,
  DeleteMultiRegionAccessPointCommandOutput,
} from "../commands/DeleteMultiRegionAccessPointCommand";
import {
  DeletePublicAccessBlockCommandInput,
  DeletePublicAccessBlockCommandOutput,
} from "../commands/DeletePublicAccessBlockCommand";
import {
  DeleteStorageLensConfigurationCommandInput,
  DeleteStorageLensConfigurationCommandOutput,
} from "../commands/DeleteStorageLensConfigurationCommand";
import {
  DeleteStorageLensConfigurationTaggingCommandInput,
  DeleteStorageLensConfigurationTaggingCommandOutput,
} from "../commands/DeleteStorageLensConfigurationTaggingCommand";
import {
  DeleteStorageLensGroupCommandInput,
  DeleteStorageLensGroupCommandOutput,
} from "../commands/DeleteStorageLensGroupCommand";
import { DescribeJobCommandInput, DescribeJobCommandOutput } from "../commands/DescribeJobCommand";
import {
  DescribeMultiRegionAccessPointOperationCommandInput,
  DescribeMultiRegionAccessPointOperationCommandOutput,
} from "../commands/DescribeMultiRegionAccessPointOperationCommand";
import {
  DissociateAccessGrantsIdentityCenterCommandInput,
  DissociateAccessGrantsIdentityCenterCommandOutput,
} from "../commands/DissociateAccessGrantsIdentityCenterCommand";
import { GetAccessGrantCommandInput, GetAccessGrantCommandOutput } from "../commands/GetAccessGrantCommand";
import {
  GetAccessGrantsInstanceCommandInput,
  GetAccessGrantsInstanceCommandOutput,
} from "../commands/GetAccessGrantsInstanceCommand";
import {
  GetAccessGrantsInstanceForPrefixCommandInput,
  GetAccessGrantsInstanceForPrefixCommandOutput,
} from "../commands/GetAccessGrantsInstanceForPrefixCommand";
import {
  GetAccessGrantsInstanceResourcePolicyCommandInput,
  GetAccessGrantsInstanceResourcePolicyCommandOutput,
} from "../commands/GetAccessGrantsInstanceResourcePolicyCommand";
import {
  GetAccessGrantsLocationCommandInput,
  GetAccessGrantsLocationCommandOutput,
} from "../commands/GetAccessGrantsLocationCommand";
import { GetAccessPointCommandInput, GetAccessPointCommandOutput } from "../commands/GetAccessPointCommand";
import {
  GetAccessPointConfigurationForObjectLambdaCommandInput,
  GetAccessPointConfigurationForObjectLambdaCommandOutput,
} from "../commands/GetAccessPointConfigurationForObjectLambdaCommand";
import {
  GetAccessPointForObjectLambdaCommandInput,
  GetAccessPointForObjectLambdaCommandOutput,
} from "../commands/GetAccessPointForObjectLambdaCommand";
import {
  GetAccessPointPolicyCommandInput,
  GetAccessPointPolicyCommandOutput,
} from "../commands/GetAccessPointPolicyCommand";
import {
  GetAccessPointPolicyForObjectLambdaCommandInput,
  GetAccessPointPolicyForObjectLambdaCommandOutput,
} from "../commands/GetAccessPointPolicyForObjectLambdaCommand";
import {
  GetAccessPointPolicyStatusCommandInput,
  GetAccessPointPolicyStatusCommandOutput,
} from "../commands/GetAccessPointPolicyStatusCommand";
import {
  GetAccessPointPolicyStatusForObjectLambdaCommandInput,
  GetAccessPointPolicyStatusForObjectLambdaCommandOutput,
} from "../commands/GetAccessPointPolicyStatusForObjectLambdaCommand";
import {
  GetAccessPointScopeCommandInput,
  GetAccessPointScopeCommandOutput,
} from "../commands/GetAccessPointScopeCommand";
import { GetBucketCommandInput, GetBucketCommandOutput } from "../commands/GetBucketCommand";
import {
  GetBucketLifecycleConfigurationCommandInput,
  GetBucketLifecycleConfigurationCommandOutput,
} from "../commands/GetBucketLifecycleConfigurationCommand";
import { GetBucketPolicyCommandInput, GetBucketPolicyCommandOutput } from "../commands/GetBucketPolicyCommand";
import {
  GetBucketReplicationCommandInput,
  GetBucketReplicationCommandOutput,
} from "../commands/GetBucketReplicationCommand";
import { GetBucketTaggingCommandInput, GetBucketTaggingCommandOutput } from "../commands/GetBucketTaggingCommand";
import {
  GetBucketVersioningCommandInput,
  GetBucketVersioningCommandOutput,
} from "../commands/GetBucketVersioningCommand";
import { GetDataAccessCommandInput, GetDataAccessCommandOutput } from "../commands/GetDataAccessCommand";
import { GetJobTaggingCommandInput, GetJobTaggingCommandOutput } from "../commands/GetJobTaggingCommand";
import {
  GetMultiRegionAccessPointCommandInput,
  GetMultiRegionAccessPointCommandOutput,
} from "../commands/GetMultiRegionAccessPointCommand";
import {
  GetMultiRegionAccessPointPolicyCommandInput,
  GetMultiRegionAccessPointPolicyCommandOutput,
} from "../commands/GetMultiRegionAccessPointPolicyCommand";
import {
  GetMultiRegionAccessPointPolicyStatusCommandInput,
  GetMultiRegionAccessPointPolicyStatusCommandOutput,
} from "../commands/GetMultiRegionAccessPointPolicyStatusCommand";
import {
  GetMultiRegionAccessPointRoutesCommandInput,
  GetMultiRegionAccessPointRoutesCommandOutput,
} from "../commands/GetMultiRegionAccessPointRoutesCommand";
import {
  GetPublicAccessBlockCommandInput,
  GetPublicAccessBlockCommandOutput,
} from "../commands/GetPublicAccessBlockCommand";
import {
  GetStorageLensConfigurationCommandInput,
  GetStorageLensConfigurationCommandOutput,
} from "../commands/GetStorageLensConfigurationCommand";
import {
  GetStorageLensConfigurationTaggingCommandInput,
  GetStorageLensConfigurationTaggingCommandOutput,
} from "../commands/GetStorageLensConfigurationTaggingCommand";
import {
  GetStorageLensGroupCommandInput,
  GetStorageLensGroupCommandOutput,
} from "../commands/GetStorageLensGroupCommand";
import { ListAccessGrantsCommandInput, ListAccessGrantsCommandOutput } from "../commands/ListAccessGrantsCommand";
import {
  ListAccessGrantsInstancesCommandInput,
  ListAccessGrantsInstancesCommandOutput,
} from "../commands/ListAccessGrantsInstancesCommand";
import {
  ListAccessGrantsLocationsCommandInput,
  ListAccessGrantsLocationsCommandOutput,
} from "../commands/ListAccessGrantsLocationsCommand";
import { ListAccessPointsCommandInput, ListAccessPointsCommandOutput } from "../commands/ListAccessPointsCommand";
import {
  ListAccessPointsForDirectoryBucketsCommandInput,
  ListAccessPointsForDirectoryBucketsCommandOutput,
} from "../commands/ListAccessPointsForDirectoryBucketsCommand";
import {
  ListAccessPointsForObjectLambdaCommandInput,
  ListAccessPointsForObjectLambdaCommandOutput,
} from "../commands/ListAccessPointsForObjectLambdaCommand";
import {
  ListCallerAccessGrantsCommandInput,
  ListCallerAccessGrantsCommandOutput,
} from "../commands/ListCallerAccessGrantsCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand";
import {
  ListMultiRegionAccessPointsCommandInput,
  ListMultiRegionAccessPointsCommandOutput,
} from "../commands/ListMultiRegionAccessPointsCommand";
import {
  ListRegionalBucketsCommandInput,
  ListRegionalBucketsCommandOutput,
} from "../commands/ListRegionalBucketsCommand";
import {
  ListStorageLensConfigurationsCommandInput,
  ListStorageLensConfigurationsCommandOutput,
} from "../commands/ListStorageLensConfigurationsCommand";
import {
  ListStorageLensGroupsCommandInput,
  ListStorageLensGroupsCommandOutput,
} from "../commands/ListStorageLensGroupsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  PutAccessGrantsInstanceResourcePolicyCommandInput,
  PutAccessGrantsInstanceResourcePolicyCommandOutput,
} from "../commands/PutAccessGrantsInstanceResourcePolicyCommand";
import {
  PutAccessPointConfigurationForObjectLambdaCommandInput,
  PutAccessPointConfigurationForObjectLambdaCommandOutput,
} from "../commands/PutAccessPointConfigurationForObjectLambdaCommand";
import {
  PutAccessPointPolicyCommandInput,
  PutAccessPointPolicyCommandOutput,
} from "../commands/PutAccessPointPolicyCommand";
import {
  PutAccessPointPolicyForObjectLambdaCommandInput,
  PutAccessPointPolicyForObjectLambdaCommandOutput,
} from "../commands/PutAccessPointPolicyForObjectLambdaCommand";
import {
  PutAccessPointScopeCommandInput,
  PutAccessPointScopeCommandOutput,
} from "../commands/PutAccessPointScopeCommand";
import {
  PutBucketLifecycleConfigurationCommandInput,
  PutBucketLifecycleConfigurationCommandOutput,
} from "../commands/PutBucketLifecycleConfigurationCommand";
import { PutBucketPolicyCommandInput, PutBucketPolicyCommandOutput } from "../commands/PutBucketPolicyCommand";
import {
  PutBucketReplicationCommandInput,
  PutBucketReplicationCommandOutput,
} from "../commands/PutBucketReplicationCommand";
import { PutBucketTaggingCommandInput, PutBucketTaggingCommandOutput } from "../commands/PutBucketTaggingCommand";
import {
  PutBucketVersioningCommandInput,
  PutBucketVersioningCommandOutput,
} from "../commands/PutBucketVersioningCommand";
import { PutJobTaggingCommandInput, PutJobTaggingCommandOutput } from "../commands/PutJobTaggingCommand";
import {
  PutMultiRegionAccessPointPolicyCommandInput,
  PutMultiRegionAccessPointPolicyCommandOutput,
} from "../commands/PutMultiRegionAccessPointPolicyCommand";
import {
  PutPublicAccessBlockCommandInput,
  PutPublicAccessBlockCommandOutput,
} from "../commands/PutPublicAccessBlockCommand";
import {
  PutStorageLensConfigurationCommandInput,
  PutStorageLensConfigurationCommandOutput,
} from "../commands/PutStorageLensConfigurationCommand";
import {
  PutStorageLensConfigurationTaggingCommandInput,
  PutStorageLensConfigurationTaggingCommandOutput,
} from "../commands/PutStorageLensConfigurationTaggingCommand";
import {
  SubmitMultiRegionAccessPointRoutesCommandInput,
  SubmitMultiRegionAccessPointRoutesCommandOutput,
} from "../commands/SubmitMultiRegionAccessPointRoutesCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateAccessGrantsLocationCommandInput,
  UpdateAccessGrantsLocationCommandOutput,
} from "../commands/UpdateAccessGrantsLocationCommand";
import { UpdateJobPriorityCommandInput, UpdateJobPriorityCommandOutput } from "../commands/UpdateJobPriorityCommand";
import { UpdateJobStatusCommandInput, UpdateJobStatusCommandOutput } from "../commands/UpdateJobStatusCommand";
import {
  UpdateStorageLensGroupCommandInput,
  UpdateStorageLensGroupCommandOutput,
} from "../commands/UpdateStorageLensGroupCommand";
import {
  _Exclude,
  AbortIncompleteMultipartUpload,
  AccessControlTranslation,
  AccessGrantsLocationConfiguration,
  AccessPoint,
  AccountLevel,
  ActivityMetrics,
  AdvancedCostOptimizationMetrics,
  AdvancedDataProtectionMetrics,
  AsyncErrorDetails,
  AsyncOperation,
  AsyncRequestParameters,
  AsyncResponseDetails,
  AwsLambdaTransformation,
  BadRequestException,
  BucketAlreadyExists,
  BucketAlreadyOwnedByYou,
  BucketLevel,
  CloudWatchMetrics,
  CreateBucketConfiguration,
  CreateMultiRegionAccessPointInput,
  Credentials,
  DeleteMarkerReplication,
  DeleteMultiRegionAccessPointInput,
  Destination,
  DetailedStatusCodesMetrics,
  EncryptionConfiguration,
  EstablishedMultiRegionAccessPointPolicy,
  ExistingObjectReplication,
  GeneratedManifestEncryption,
  Grantee,
  IdempotencyException,
  Include,
  InternalServiceException,
  InvalidNextTokenException,
  InvalidRequestException,
  JobDescriptor,
  JobFailure,
  JobListDescriptor,
  JobManifest,
  JobManifestFieldName,
  JobManifestGenerator,
  JobManifestGeneratorFilter,
  JobManifestLocation,
  JobManifestSpec,
  JobOperation,
  JobProgressSummary,
  JobReport,
  JobTimers,
  KeyNameConstraint,
  LambdaInvokeOperation,
  LifecycleExpiration,
  LifecycleRule,
  LifecycleRuleAndOperator,
  LifecycleRuleFilter,
  ListAccessGrantEntry,
  ListAccessGrantsInstanceEntry,
  ListAccessGrantsLocationsEntry,
  ListCallerAccessGrantsEntry,
  MatchObjectAge,
  MatchObjectSize,
  Metrics,
  MultiRegionAccessPointPolicyDocument,
  MultiRegionAccessPointRegionalResponse,
  MultiRegionAccessPointReport,
  MultiRegionAccessPointRoute,
  MultiRegionAccessPointsAsyncResponse,
  NoncurrentVersionExpiration,
  NoncurrentVersionTransition,
  NoSuchPublicAccessBlockConfiguration,
  NotFoundException,
  ObjectLambdaAccessPoint,
  ObjectLambdaAccessPointAlias,
  ObjectLambdaAllowedFeature,
  ObjectLambdaConfiguration,
  ObjectLambdaContentTransformation,
  ObjectLambdaTransformationConfiguration,
  ObjectLambdaTransformationConfigurationAction,
  PolicyStatus,
  PrefixLevel,
  PrefixLevelStorageMetrics,
  ProposedMultiRegionAccessPointPolicy,
  PublicAccessBlockConfiguration,
  PutMultiRegionAccessPointPolicyInput,
  Region,
  RegionReport,
  ReplicaModifications,
  ReplicationConfiguration,
  ReplicationRule,
  ReplicationRuleAndOperator,
  ReplicationRuleFilter,
  ReplicationStatus,
  ReplicationTime,
  ReplicationTimeValue,
  S3AccessControlList,
  S3AccessControlPolicy,
  S3BucketDestination,
  S3CopyObjectOperation,
  S3DeleteObjectTaggingOperation,
  S3GeneratedManifestDescriptor,
  S3Grant,
  S3Grantee,
  S3InitiateRestoreObjectOperation,
  S3JobManifestGenerator,
  S3ManifestOutputLocation,
  S3ObjectLockLegalHold,
  S3ObjectMetadata,
  S3ObjectOwner,
  S3ReplicateObjectOperation,
  S3Retention,
  S3SetObjectAclOperation,
  S3SetObjectLegalHoldOperation,
  S3SetObjectRetentionOperation,
  S3SetObjectTaggingOperation,
  S3StorageClass,
  S3Tag,
  Scope,
  ScopePermission,
  SelectionCriteria,
  SourceSelectionCriteria,
  SSEKMS,
  SseKmsEncryptedObjects,
  SSEKMSEncryption,
  SSES3,
  SSES3Encryption,
  StorageLensAwsOrg,
  StorageLensConfiguration,
  StorageLensDataExport,
  StorageLensDataExportEncryption,
  StorageLensGroup,
  StorageLensGroupAndOperator,
  StorageLensGroupFilter,
  StorageLensGroupLevel,
  StorageLensGroupLevelSelectionCriteria,
  StorageLensGroupOrOperator,
  StorageLensTag,
  Tag,
  TooManyRequestsException,
  Transition,
  VpcConfiguration,
} from "../models/models_0";
import {
  JobStatusException,
  LifecycleConfiguration,
  ListStorageLensConfigurationEntry,
  ListStorageLensGroupEntry,
  RegionalBucket,
  Tagging,
  TooManyTagsException,
  VersioningConfiguration,
} from "../models/models_1";
import { S3ControlServiceException as __BaseException } from "../models/S3ControlServiceException";

/**
 * serializeAws_restXmlAssociateAccessGrantsIdentityCenterCommand
 */
export const se_AssociateAccessGrantsIdentityCenterCommand = async (
  input: AssociateAccessGrantsIdentityCenterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accessgrantsinstance/identitycenter");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_AAGICR);
  bn.a("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  bn.cc(input, _ICA);
  body += bn.toString();
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlCreateAccessGrantCommand
 */
export const se_CreateAccessGrantCommand = async (
  input: CreateAccessGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accessgrantsinstance/grant");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_CAGR);
  bn.a("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  if (input[_AGLC] != null) {
    bn.c(se_AccessGrantsLocationConfiguration(input[_AGLC], context).n(_AGLC));
  }
  bn.cc(input, _AGLI);
  if (input[_AA] != null) {
    bn.c(__XmlNode.of(_ICAA, input[_AA]).n(_AA));
  }
  if (input[_G] != null) {
    bn.c(se_Grantee(input[_G], context).n(_G));
  }
  bn.cc(input, _P);
  bn.cc(input, _SPT);
  bn.lc(input, "Tags", "Tags", () => se_TagList(input[_T]!, context));
  body += bn.toString();
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlCreateAccessGrantsInstanceCommand
 */
export const se_CreateAccessGrantsInstanceCommand = async (
  input: CreateAccessGrantsInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accessgrantsinstance");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_CAGIR);
  bn.a("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  bn.cc(input, _ICA);
  bn.lc(input, "Tags", "Tags", () => se_TagList(input[_T]!, context));
  body += bn.toString();
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlCreateAccessGrantsLocationCommand
 */
export const se_CreateAccessGrantsLocationCommand = async (
  input: CreateAccessGrantsLocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accessgrantsinstance/location");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_CAGLR);
  bn.a("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  bn.cc(input, _IAMRA);
  if (input[_LS] != null) {
    bn.c(__XmlNode.of(_SP, input[_LS]).n(_LS));
  }
  bn.lc(input, "Tags", "Tags", () => se_TagList(input[_T]!, context));
  body += bn.toString();
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlCreateAccessPointCommand
 */
export const se_CreateAccessPointCommand = async (
  input: CreateAccessPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accesspoint/{Name}");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_CAPR);
  bn.a("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  if (input[_B] != null) {
    bn.c(__XmlNode.of(_BN, input[_B]).n(_B));
  }
  if (input[_BAI] != null) {
    bn.c(__XmlNode.of(_AI, input[_BAI]).n(_BAI));
  }
  if (input[_PABC] != null) {
    bn.c(se_PublicAccessBlockConfiguration(input[_PABC], context).n(_PABC));
  }
  if (input[_S] != null) {
    bn.c(se_Scope(input[_S], context).n(_S));
  }
  if (input[_VC] != null) {
    bn.c(se_VpcConfiguration(input[_VC], context).n(_VC));
  }
  body += bn.toString();
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlCreateAccessPointForObjectLambdaCommand
 */
export const se_CreateAccessPointForObjectLambdaCommand = async (
  input: CreateAccessPointForObjectLambdaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accesspointforobjectlambda/{Name}");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_CAPFOLR);
  bn.a("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  if (input[_C] != null) {
    bn.c(se_ObjectLambdaConfiguration(input[_C], context).n(_C));
  }
  body += bn.toString();
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlCreateBucketCommand
 */
export const se_CreateBucketCommand = async (
  input: CreateBucketCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xaa]: input[_ACL]!,
    [_xagfc]: input[_GFC]!,
    [_xagr]: input[_GR]!,
    [_xagra]: input[_GRACP]!,
    [_xagw]: input[_GW]!,
    [_xagwa]: input[_GWACP]!,
    [_xabole]: [() => isSerializableHeaderValue(input[_OLEFB]), () => input[_OLEFB]!.toString()],
    [_xaoi]: input[_OI]!,
  });
  b.bp("/v20180820/bucket/{Bucket}");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  let contents: any;
  if (input.CreateBucketConfiguration !== undefined) {
    contents = se_CreateBucketConfiguration(input.CreateBucketConfiguration, context);
    body = _ve;
    contents.a("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlCreateJobCommand
 */
export const se_CreateJobCommand = async (
  input: CreateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/jobs");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_CJR);
  bn.a("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  if (input[_CRT] === undefined) {
    input[_CRT] = generateIdempotencyToken();
  }
  if (input[_CRT] != null) {
    bn.c(__XmlNode.of(_NEMLS, input[_CRT]).n(_CRT));
  }
  if (input[_CR] != null) {
    bn.c(__XmlNode.of(_CR, String(input[_CR])).n(_CR));
  }
  if (input[_D] != null) {
    bn.c(__XmlNode.of(_NEMLSo, input[_D]).n(_D));
  }
  if (input[_M] != null) {
    bn.c(se_JobManifest(input[_M], context).n(_M));
  }
  if (input[_MG] != null) {
    bn.c(se_JobManifestGenerator(input[_MG], context).n(_MG));
  }
  if (input[_O] != null) {
    bn.c(se_JobOperation(input[_O], context).n(_O));
  }
  if (input[_Pr] != null) {
    bn.c(__XmlNode.of(_JP, String(input[_Pr])).n(_Pr));
  }
  if (input[_R] != null) {
    bn.c(se_JobReport(input[_R], context).n(_R));
  }
  if (input[_RA] != null) {
    bn.c(__XmlNode.of(_IAMRA, input[_RA]).n(_RA));
  }
  bn.lc(input, "Tags", "Tags", () => se_S3TagSet(input[_T]!, context));
  body += bn.toString();
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlCreateMultiRegionAccessPointCommand
 */
export const se_CreateMultiRegionAccessPointCommand = async (
  input: CreateMultiRegionAccessPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/async-requests/mrap/create");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_CMRAPR);
  bn.a("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  if (input[_CT] === undefined) {
    input[_CT] = generateIdempotencyToken();
  }
  if (input[_CT] != null) {
    bn.c(__XmlNode.of(_MRAPCT, input[_CT]).n(_CT));
  }
  if (input[_De] != null) {
    bn.c(se_CreateMultiRegionAccessPointInput(input[_De], context).n(_De));
  }
  body += bn.toString();
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlCreateStorageLensGroupCommand
 */
export const se_CreateStorageLensGroupCommand = async (
  input: CreateStorageLensGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/storagelensgroup");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_CSLGR);
  bn.a("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  if (input[_SLG] != null) {
    bn.c(se_StorageLensGroup(input[_SLG], context).n(_SLG));
  }
  bn.lc(input, "Tags", "Tags", () => se_TagList(input[_T]!, context));
  body += bn.toString();
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteAccessGrantCommand
 */
export const se_DeleteAccessGrantCommand = async (
  input: DeleteAccessGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accessgrantsinstance/grant/{AccessGrantId}");
  b.p("AccessGrantId", () => input.AccessGrantId!, "{AccessGrantId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteAccessGrantsInstanceCommand
 */
export const se_DeleteAccessGrantsInstanceCommand = async (
  input: DeleteAccessGrantsInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accessgrantsinstance");
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteAccessGrantsInstanceResourcePolicyCommand
 */
export const se_DeleteAccessGrantsInstanceResourcePolicyCommand = async (
  input: DeleteAccessGrantsInstanceResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accessgrantsinstance/resourcepolicy");
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteAccessGrantsLocationCommand
 */
export const se_DeleteAccessGrantsLocationCommand = async (
  input: DeleteAccessGrantsLocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accessgrantsinstance/location/{AccessGrantsLocationId}");
  b.p("AccessGrantsLocationId", () => input.AccessGrantsLocationId!, "{AccessGrantsLocationId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteAccessPointCommand
 */
export const se_DeleteAccessPointCommand = async (
  input: DeleteAccessPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accesspoint/{Name}");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteAccessPointForObjectLambdaCommand
 */
export const se_DeleteAccessPointForObjectLambdaCommand = async (
  input: DeleteAccessPointForObjectLambdaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accesspointforobjectlambda/{Name}");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteAccessPointPolicyCommand
 */
export const se_DeleteAccessPointPolicyCommand = async (
  input: DeleteAccessPointPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accesspoint/{Name}/policy");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteAccessPointPolicyForObjectLambdaCommand
 */
export const se_DeleteAccessPointPolicyForObjectLambdaCommand = async (
  input: DeleteAccessPointPolicyForObjectLambdaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accesspointforobjectlambda/{Name}/policy");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteAccessPointScopeCommand
 */
export const se_DeleteAccessPointScopeCommand = async (
  input: DeleteAccessPointScopeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accesspoint/{Name}/scope");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteBucketCommand
 */
export const se_DeleteBucketCommand = async (
  input: DeleteBucketCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/bucket/{Bucket}");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteBucketLifecycleConfigurationCommand
 */
export const se_DeleteBucketLifecycleConfigurationCommand = async (
  input: DeleteBucketLifecycleConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/bucket/{Bucket}/lifecycleconfiguration");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteBucketPolicyCommand
 */
export const se_DeleteBucketPolicyCommand = async (
  input: DeleteBucketPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/bucket/{Bucket}/policy");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteBucketReplicationCommand
 */
export const se_DeleteBucketReplicationCommand = async (
  input: DeleteBucketReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/bucket/{Bucket}/replication");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteBucketTaggingCommand
 */
export const se_DeleteBucketTaggingCommand = async (
  input: DeleteBucketTaggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/bucket/{Bucket}/tagging");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteJobTaggingCommand
 */
export const se_DeleteJobTaggingCommand = async (
  input: DeleteJobTaggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/jobs/{JobId}/tagging");
  b.p("JobId", () => input.JobId!, "{JobId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteMultiRegionAccessPointCommand
 */
export const se_DeleteMultiRegionAccessPointCommand = async (
  input: DeleteMultiRegionAccessPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/async-requests/mrap/delete");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_DMRAPR);
  bn.a("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  if (input[_CT] === undefined) {
    input[_CT] = generateIdempotencyToken();
  }
  if (input[_CT] != null) {
    bn.c(__XmlNode.of(_MRAPCT, input[_CT]).n(_CT));
  }
  if (input[_De] != null) {
    bn.c(se_DeleteMultiRegionAccessPointInput(input[_De], context).n(_De));
  }
  body += bn.toString();
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeletePublicAccessBlockCommand
 */
export const se_DeletePublicAccessBlockCommand = async (
  input: DeletePublicAccessBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/configuration/publicAccessBlock");
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteStorageLensConfigurationCommand
 */
export const se_DeleteStorageLensConfigurationCommand = async (
  input: DeleteStorageLensConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/storagelens/{ConfigId}");
  b.p("ConfigId", () => input.ConfigId!, "{ConfigId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteStorageLensConfigurationTaggingCommand
 */
export const se_DeleteStorageLensConfigurationTaggingCommand = async (
  input: DeleteStorageLensConfigurationTaggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/storagelens/{ConfigId}/tagging");
  b.p("ConfigId", () => input.ConfigId!, "{ConfigId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteStorageLensGroupCommand
 */
export const se_DeleteStorageLensGroupCommand = async (
  input: DeleteStorageLensGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/storagelensgroup/{Name}");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDescribeJobCommand
 */
export const se_DescribeJobCommand = async (
  input: DescribeJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/jobs/{JobId}");
  b.p("JobId", () => input.JobId!, "{JobId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDescribeMultiRegionAccessPointOperationCommand
 */
export const se_DescribeMultiRegionAccessPointOperationCommand = async (
  input: DescribeMultiRegionAccessPointOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/async-requests/mrap/{RequestTokenARN+}");
  b.p("RequestTokenARN", () => input.RequestTokenARN!, "{RequestTokenARN+}", true);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDissociateAccessGrantsIdentityCenterCommand
 */
export const se_DissociateAccessGrantsIdentityCenterCommand = async (
  input: DissociateAccessGrantsIdentityCenterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accessgrantsinstance/identitycenter");
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetAccessGrantCommand
 */
export const se_GetAccessGrantCommand = async (
  input: GetAccessGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accessgrantsinstance/grant/{AccessGrantId}");
  b.p("AccessGrantId", () => input.AccessGrantId!, "{AccessGrantId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetAccessGrantsInstanceCommand
 */
export const se_GetAccessGrantsInstanceCommand = async (
  input: GetAccessGrantsInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accessgrantsinstance");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetAccessGrantsInstanceForPrefixCommand
 */
export const se_GetAccessGrantsInstanceForPrefixCommand = async (
  input: GetAccessGrantsInstanceForPrefixCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accessgrantsinstance/prefix");
  const query: any = map({
    [_s]: [, __expectNonNull(input[_SP]!, `S3Prefix`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetAccessGrantsInstanceResourcePolicyCommand
 */
export const se_GetAccessGrantsInstanceResourcePolicyCommand = async (
  input: GetAccessGrantsInstanceResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accessgrantsinstance/resourcepolicy");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetAccessGrantsLocationCommand
 */
export const se_GetAccessGrantsLocationCommand = async (
  input: GetAccessGrantsLocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accessgrantsinstance/location/{AccessGrantsLocationId}");
  b.p("AccessGrantsLocationId", () => input.AccessGrantsLocationId!, "{AccessGrantsLocationId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetAccessPointCommand
 */
export const se_GetAccessPointCommand = async (
  input: GetAccessPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accesspoint/{Name}");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetAccessPointConfigurationForObjectLambdaCommand
 */
export const se_GetAccessPointConfigurationForObjectLambdaCommand = async (
  input: GetAccessPointConfigurationForObjectLambdaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accesspointforobjectlambda/{Name}/configuration");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetAccessPointForObjectLambdaCommand
 */
export const se_GetAccessPointForObjectLambdaCommand = async (
  input: GetAccessPointForObjectLambdaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accesspointforobjectlambda/{Name}");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetAccessPointPolicyCommand
 */
export const se_GetAccessPointPolicyCommand = async (
  input: GetAccessPointPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accesspoint/{Name}/policy");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetAccessPointPolicyForObjectLambdaCommand
 */
export const se_GetAccessPointPolicyForObjectLambdaCommand = async (
  input: GetAccessPointPolicyForObjectLambdaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accesspointforobjectlambda/{Name}/policy");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetAccessPointPolicyStatusCommand
 */
export const se_GetAccessPointPolicyStatusCommand = async (
  input: GetAccessPointPolicyStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accesspoint/{Name}/policyStatus");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetAccessPointPolicyStatusForObjectLambdaCommand
 */
export const se_GetAccessPointPolicyStatusForObjectLambdaCommand = async (
  input: GetAccessPointPolicyStatusForObjectLambdaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accesspointforobjectlambda/{Name}/policyStatus");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetAccessPointScopeCommand
 */
export const se_GetAccessPointScopeCommand = async (
  input: GetAccessPointScopeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accesspoint/{Name}/scope");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetBucketCommand
 */
export const se_GetBucketCommand = async (
  input: GetBucketCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/bucket/{Bucket}");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetBucketLifecycleConfigurationCommand
 */
export const se_GetBucketLifecycleConfigurationCommand = async (
  input: GetBucketLifecycleConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/bucket/{Bucket}/lifecycleconfiguration");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetBucketPolicyCommand
 */
export const se_GetBucketPolicyCommand = async (
  input: GetBucketPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/bucket/{Bucket}/policy");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetBucketReplicationCommand
 */
export const se_GetBucketReplicationCommand = async (
  input: GetBucketReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/bucket/{Bucket}/replication");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetBucketTaggingCommand
 */
export const se_GetBucketTaggingCommand = async (
  input: GetBucketTaggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/bucket/{Bucket}/tagging");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetBucketVersioningCommand
 */
export const se_GetBucketVersioningCommand = async (
  input: GetBucketVersioningCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/bucket/{Bucket}/versioning");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetDataAccessCommand
 */
export const se_GetDataAccessCommand = async (
  input: GetDataAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accessgrantsinstance/dataaccess");
  const query: any = map({
    [_t]: [, __expectNonNull(input[_Ta]!, `Target`)],
    [_p]: [, __expectNonNull(input[_P]!, `Permission`)],
    [_dS]: [() => input.DurationSeconds !== void 0, () => input[_DS]!.toString()],
    [_pr]: [, input[_Pri]!],
    [_tT]: [, input[_TT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetJobTaggingCommand
 */
export const se_GetJobTaggingCommand = async (
  input: GetJobTaggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/jobs/{JobId}/tagging");
  b.p("JobId", () => input.JobId!, "{JobId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetMultiRegionAccessPointCommand
 */
export const se_GetMultiRegionAccessPointCommand = async (
  input: GetMultiRegionAccessPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/mrap/instances/{Name+}");
  b.p("Name", () => input.Name!, "{Name+}", true);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetMultiRegionAccessPointPolicyCommand
 */
export const se_GetMultiRegionAccessPointPolicyCommand = async (
  input: GetMultiRegionAccessPointPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/mrap/instances/{Name+}/policy");
  b.p("Name", () => input.Name!, "{Name+}", true);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetMultiRegionAccessPointPolicyStatusCommand
 */
export const se_GetMultiRegionAccessPointPolicyStatusCommand = async (
  input: GetMultiRegionAccessPointPolicyStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/mrap/instances/{Name+}/policystatus");
  b.p("Name", () => input.Name!, "{Name+}", true);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetMultiRegionAccessPointRoutesCommand
 */
export const se_GetMultiRegionAccessPointRoutesCommand = async (
  input: GetMultiRegionAccessPointRoutesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/mrap/instances/{Mrap+}/routes");
  b.p("Mrap", () => input.Mrap!, "{Mrap+}", true);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetPublicAccessBlockCommand
 */
export const se_GetPublicAccessBlockCommand = async (
  input: GetPublicAccessBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/configuration/publicAccessBlock");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetStorageLensConfigurationCommand
 */
export const se_GetStorageLensConfigurationCommand = async (
  input: GetStorageLensConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/storagelens/{ConfigId}");
  b.p("ConfigId", () => input.ConfigId!, "{ConfigId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetStorageLensConfigurationTaggingCommand
 */
export const se_GetStorageLensConfigurationTaggingCommand = async (
  input: GetStorageLensConfigurationTaggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/storagelens/{ConfigId}/tagging");
  b.p("ConfigId", () => input.ConfigId!, "{ConfigId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetStorageLensGroupCommand
 */
export const se_GetStorageLensGroupCommand = async (
  input: GetStorageLensGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/storagelensgroup/{Name}");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListAccessGrantsCommand
 */
export const se_ListAccessGrantsCommand = async (
  input: ListAccessGrantsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accessgrantsinstance/grants");
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_g]: [, input[_GT]!],
    [_gr]: [, input[_GI]!],
    [_p]: [, input[_P]!],
    [_gra]: [, input[_GS]!],
    [_aa]: [, input[_AA]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListAccessGrantsInstancesCommand
 */
export const se_ListAccessGrantsInstancesCommand = async (
  input: ListAccessGrantsInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accessgrantsinstances");
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListAccessGrantsLocationsCommand
 */
export const se_ListAccessGrantsLocationsCommand = async (
  input: ListAccessGrantsLocationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accessgrantsinstance/locations");
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_l]: [, input[_LS]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListAccessPointsCommand
 */
export const se_ListAccessPointsCommand = async (
  input: ListAccessPointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accesspoint");
  const query: any = map({
    [_b]: [, input[_B]!],
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_dSI]: [, input[_DSI]!],
    [_dST]: [, input[_DST]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListAccessPointsForDirectoryBucketsCommand
 */
export const se_ListAccessPointsForDirectoryBucketsCommand = async (
  input: ListAccessPointsForDirectoryBucketsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accesspointfordirectory");
  const query: any = map({
    [_dB]: [, input[_DB]!],
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListAccessPointsForObjectLambdaCommand
 */
export const se_ListAccessPointsForObjectLambdaCommand = async (
  input: ListAccessPointsForObjectLambdaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accesspointforobjectlambda");
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListCallerAccessGrantsCommand
 */
export const se_ListCallerAccessGrantsCommand = async (
  input: ListCallerAccessGrantsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accessgrantsinstance/caller/grants");
  const query: any = map({
    [_gra]: [, input[_GS]!],
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_aBA]: [() => input.AllowedByApplication !== void 0, () => input[_ABA]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListJobsCommand
 */
export const se_ListJobsCommand = async (
  input: ListJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/jobs");
  const query: any = map({
    [_jS]: [() => input.JobStatuses !== void 0, () => input[_JS]! || []],
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListMultiRegionAccessPointsCommand
 */
export const se_ListMultiRegionAccessPointsCommand = async (
  input: ListMultiRegionAccessPointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/mrap/instances");
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListRegionalBucketsCommand
 */
export const se_ListRegionalBucketsCommand = async (
  input: ListRegionalBucketsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
    [_xaoi]: input[_OI]!,
  });
  b.bp("/v20180820/bucket");
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListStorageLensConfigurationsCommand
 */
export const se_ListStorageLensConfigurationsCommand = async (
  input: ListStorageLensConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/storagelens");
  const query: any = map({
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListStorageLensGroupsCommand
 */
export const se_ListStorageLensGroupsCommand = async (
  input: ListStorageLensGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/storagelensgroup");
  const query: any = map({
    [_nT]: [, input[_NT]!],
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
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/tags/{ResourceArn+}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn+}", true);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutAccessGrantsInstanceResourcePolicyCommand
 */
export const se_PutAccessGrantsInstanceResourcePolicyCommand = async (
  input: PutAccessGrantsInstanceResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accessgrantsinstance/resourcepolicy");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_PAGIRPR);
  bn.a("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  bn.cc(input, _Or);
  if (input[_Po] != null) {
    bn.c(__XmlNode.of(_PD, input[_Po]).n(_Po));
  }
  body += bn.toString();
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutAccessPointConfigurationForObjectLambdaCommand
 */
export const se_PutAccessPointConfigurationForObjectLambdaCommand = async (
  input: PutAccessPointConfigurationForObjectLambdaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accesspointforobjectlambda/{Name}/configuration");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_PAPCFOLR);
  bn.a("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  if (input[_C] != null) {
    bn.c(se_ObjectLambdaConfiguration(input[_C], context).n(_C));
  }
  body += bn.toString();
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutAccessPointPolicyCommand
 */
export const se_PutAccessPointPolicyCommand = async (
  input: PutAccessPointPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accesspoint/{Name}/policy");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_PAPPR);
  bn.a("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  bn.cc(input, _Po);
  body += bn.toString();
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutAccessPointPolicyForObjectLambdaCommand
 */
export const se_PutAccessPointPolicyForObjectLambdaCommand = async (
  input: PutAccessPointPolicyForObjectLambdaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accesspointforobjectlambda/{Name}/policy");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_PAPPFOLR);
  bn.a("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  if (input[_Po] != null) {
    bn.c(__XmlNode.of(_OLP, input[_Po]).n(_Po));
  }
  body += bn.toString();
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutAccessPointScopeCommand
 */
export const se_PutAccessPointScopeCommand = async (
  input: PutAccessPointScopeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accesspoint/{Name}/scope");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_PAPSR);
  bn.a("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  if (input[_S] != null) {
    bn.c(se_Scope(input[_S], context).n(_S));
  }
  body += bn.toString();
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutBucketLifecycleConfigurationCommand
 */
export const se_PutBucketLifecycleConfigurationCommand = async (
  input: PutBucketLifecycleConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/bucket/{Bucket}/lifecycleconfiguration");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  let contents: any;
  if (input.LifecycleConfiguration !== undefined) {
    contents = se_LifecycleConfiguration(input.LifecycleConfiguration, context);
    body = _ve;
    contents.a("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutBucketPolicyCommand
 */
export const se_PutBucketPolicyCommand = async (
  input: PutBucketPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xaai]: input[_AI]!,
    [_xacrsba]: [() => isSerializableHeaderValue(input[_CRSBA]), () => input[_CRSBA]!.toString()],
  });
  b.bp("/v20180820/bucket/{Bucket}/policy");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_PBPR);
  bn.a("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  bn.cc(input, _Po);
  body += bn.toString();
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutBucketReplicationCommand
 */
export const se_PutBucketReplicationCommand = async (
  input: PutBucketReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/bucket/{Bucket}/replication");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  let contents: any;
  if (input.ReplicationConfiguration !== undefined) {
    contents = se_ReplicationConfiguration(input.ReplicationConfiguration, context);
    body = _ve;
    contents.a("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutBucketTaggingCommand
 */
export const se_PutBucketTaggingCommand = async (
  input: PutBucketTaggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/bucket/{Bucket}/tagging");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  let contents: any;
  if (input.Tagging !== undefined) {
    contents = se_Tagging(input.Tagging, context);
    body = _ve;
    contents.a("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutBucketVersioningCommand
 */
export const se_PutBucketVersioningCommand = async (
  input: PutBucketVersioningCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xaai]: input[_AI]!,
    [_xam]: input[_MFA]!,
  });
  b.bp("/v20180820/bucket/{Bucket}/versioning");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  let contents: any;
  if (input.VersioningConfiguration !== undefined) {
    contents = se_VersioningConfiguration(input.VersioningConfiguration, context);
    body = _ve;
    contents.a("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutJobTaggingCommand
 */
export const se_PutJobTaggingCommand = async (
  input: PutJobTaggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/jobs/{JobId}/tagging");
  b.p("JobId", () => input.JobId!, "{JobId}", false);
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_PJTR);
  bn.a("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  bn.lc(input, "Tags", "Tags", () => se_S3TagSet(input[_T]!, context));
  body += bn.toString();
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutMultiRegionAccessPointPolicyCommand
 */
export const se_PutMultiRegionAccessPointPolicyCommand = async (
  input: PutMultiRegionAccessPointPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/async-requests/mrap/put-policy");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_PMRAPPR);
  bn.a("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  if (input[_CT] === undefined) {
    input[_CT] = generateIdempotencyToken();
  }
  if (input[_CT] != null) {
    bn.c(__XmlNode.of(_MRAPCT, input[_CT]).n(_CT));
  }
  if (input[_De] != null) {
    bn.c(se_PutMultiRegionAccessPointPolicyInput(input[_De], context).n(_De));
  }
  body += bn.toString();
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutPublicAccessBlockCommand
 */
export const se_PutPublicAccessBlockCommand = async (
  input: PutPublicAccessBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/configuration/publicAccessBlock");
  let body: any;
  let contents: any;
  if (input.PublicAccessBlockConfiguration !== undefined) {
    contents = se_PublicAccessBlockConfiguration(input.PublicAccessBlockConfiguration, context);
    body = _ve;
    contents.a("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutStorageLensConfigurationCommand
 */
export const se_PutStorageLensConfigurationCommand = async (
  input: PutStorageLensConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/storagelens/{ConfigId}");
  b.p("ConfigId", () => input.ConfigId!, "{ConfigId}", false);
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_PSLCR);
  bn.a("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  if (input[_SLC] != null) {
    bn.c(se_StorageLensConfiguration(input[_SLC], context).n(_SLC));
  }
  bn.lc(input, "Tags", "Tags", () => se_StorageLensTags(input[_T]!, context));
  body += bn.toString();
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutStorageLensConfigurationTaggingCommand
 */
export const se_PutStorageLensConfigurationTaggingCommand = async (
  input: PutStorageLensConfigurationTaggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/storagelens/{ConfigId}/tagging");
  b.p("ConfigId", () => input.ConfigId!, "{ConfigId}", false);
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_PSLCTR);
  bn.a("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  bn.lc(input, "Tags", "Tags", () => se_StorageLensTags(input[_T]!, context));
  body += bn.toString();
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlSubmitMultiRegionAccessPointRoutesCommand
 */
export const se_SubmitMultiRegionAccessPointRoutesCommand = async (
  input: SubmitMultiRegionAccessPointRoutesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/mrap/instances/{Mrap+}/routes");
  b.p("Mrap", () => input.Mrap!, "{Mrap+}", true);
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_SMRAPRR);
  bn.a("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  bn.lc(input, "RouteUpdates", "RouteUpdates", () => se_RouteList(input[_RU]!, context));
  body += bn.toString();
  b.m("PATCH").h(headers).b(body);
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
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/tags/{ResourceArn+}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn+}", true);
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_TRR);
  bn.a("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  bn.lc(input, "Tags", "Tags", () => se_TagList(input[_T]!, context));
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
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/tags/{ResourceArn+}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn+}", true);
  const query: any = map({
    [_tK]: [__expectNonNull(input.TagKeys, `TagKeys`) != null, () => input[_TK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlUpdateAccessGrantsLocationCommand
 */
export const se_UpdateAccessGrantsLocationCommand = async (
  input: UpdateAccessGrantsLocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/accessgrantsinstance/location/{AccessGrantsLocationId}");
  b.p("AccessGrantsLocationId", () => input.AccessGrantsLocationId!, "{AccessGrantsLocationId}", false);
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_UAGLR);
  bn.a("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  bn.cc(input, _IAMRA);
  body += bn.toString();
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlUpdateJobPriorityCommand
 */
export const se_UpdateJobPriorityCommand = async (
  input: UpdateJobPriorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/jobs/{JobId}/priority");
  b.p("JobId", () => input.JobId!, "{JobId}", false);
  const query: any = map({
    [_pri]: [__expectNonNull(input.Priority, `Priority`) != null, () => input[_Pr]!.toString()],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlUpdateJobStatusCommand
 */
export const se_UpdateJobStatusCommand = async (
  input: UpdateJobStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/jobs/{JobId}/status");
  b.p("JobId", () => input.JobId!, "{JobId}", false);
  const query: any = map({
    [_rJS]: [, __expectNonNull(input[_RJS]!, `RequestedJobStatus`)],
    [_sUR]: [, input[_SUR]!],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlUpdateStorageLensGroupCommand
 */
export const se_UpdateStorageLensGroupCommand = async (
  input: UpdateStorageLensGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xaai]: input[_AI]!,
  });
  b.bp("/v20180820/storagelensgroup/{Name}");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_USLGR);
  bn.a("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  if (input[_SLG] != null) {
    bn.c(se_StorageLensGroup(input[_SLG], context).n(_SLG));
  }
  body += bn.toString();
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restXmlAssociateAccessGrantsIdentityCenterCommand
 */
export const de_AssociateAccessGrantsIdentityCenterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateAccessGrantsIdentityCenterCommandOutput> => {
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
 * deserializeAws_restXmlCreateAccessGrantCommand
 */
export const de_CreateAccessGrantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessGrantCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_AGA] != null) {
    contents[_AGA] = __expectString(data[_AGA]);
  }
  if (data[_AGI] != null) {
    contents[_AGI] = __expectString(data[_AGI]);
  }
  if (data[_AGLC] != null) {
    contents[_AGLC] = de_AccessGrantsLocationConfiguration(data[_AGLC], context);
  }
  if (data[_AGLI] != null) {
    contents[_AGLI] = __expectString(data[_AGLI]);
  }
  if (data[_AA] != null) {
    contents[_AA] = __expectString(data[_AA]);
  }
  if (data[_CA] != null) {
    contents[_CA] = __expectNonNull(__parseRfc3339DateTimeWithOffset(data[_CA]));
  }
  if (data[_GS] != null) {
    contents[_GS] = __expectString(data[_GS]);
  }
  if (data[_G] != null) {
    contents[_G] = de_Grantee(data[_G], context);
  }
  if (data[_P] != null) {
    contents[_P] = __expectString(data[_P]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCreateAccessGrantsInstanceCommand
 */
export const de_CreateAccessGrantsInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessGrantsInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_AGIA] != null) {
    contents[_AGIA] = __expectString(data[_AGIA]);
  }
  if (data[_AGII] != null) {
    contents[_AGII] = __expectString(data[_AGII]);
  }
  if (data[_CA] != null) {
    contents[_CA] = __expectNonNull(__parseRfc3339DateTimeWithOffset(data[_CA]));
  }
  if (data[_ICAA] != null) {
    contents[_ICAA] = __expectString(data[_ICAA]);
  }
  if (data[_ICA] != null) {
    contents[_ICA] = __expectString(data[_ICA]);
  }
  if (data[_ICIA] != null) {
    contents[_ICIA] = __expectString(data[_ICIA]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCreateAccessGrantsLocationCommand
 */
export const de_CreateAccessGrantsLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessGrantsLocationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_AGLA] != null) {
    contents[_AGLA] = __expectString(data[_AGLA]);
  }
  if (data[_AGLI] != null) {
    contents[_AGLI] = __expectString(data[_AGLI]);
  }
  if (data[_CA] != null) {
    contents[_CA] = __expectNonNull(__parseRfc3339DateTimeWithOffset(data[_CA]));
  }
  if (data[_IAMRA] != null) {
    contents[_IAMRA] = __expectString(data[_IAMRA]);
  }
  if (data[_LS] != null) {
    contents[_LS] = __expectString(data[_LS]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCreateAccessPointCommand
 */
export const de_CreateAccessPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_APA] != null) {
    contents[_APA] = __expectString(data[_APA]);
  }
  if (data[_A] != null) {
    contents[_A] = __expectString(data[_A]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCreateAccessPointForObjectLambdaCommand
 */
export const de_CreateAccessPointForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPointForObjectLambdaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_A] != null) {
    contents[_A] = de_ObjectLambdaAccessPointAlias(data[_A], context);
  }
  if (data[_OLAPA] != null) {
    contents[_OLAPA] = __expectString(data[_OLAPA]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCreateBucketCommand
 */
export const de_CreateBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBucketCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_L]: [, output.headers[_lo]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_BA] != null) {
    contents[_BA] = __expectString(data[_BA]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCreateJobCommand
 */
export const de_CreateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_JI] != null) {
    contents[_JI] = __expectString(data[_JI]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCreateMultiRegionAccessPointCommand
 */
export const de_CreateMultiRegionAccessPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMultiRegionAccessPointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_RTARN] != null) {
    contents[_RTARN] = __expectString(data[_RTARN]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCreateStorageLensGroupCommand
 */
export const de_CreateStorageLensGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStorageLensGroupCommandOutput> => {
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
 * deserializeAws_restXmlDeleteAccessGrantCommand
 */
export const de_DeleteAccessGrantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessGrantCommandOutput> => {
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
 * deserializeAws_restXmlDeleteAccessGrantsInstanceCommand
 */
export const de_DeleteAccessGrantsInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessGrantsInstanceCommandOutput> => {
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
 * deserializeAws_restXmlDeleteAccessGrantsInstanceResourcePolicyCommand
 */
export const de_DeleteAccessGrantsInstanceResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessGrantsInstanceResourcePolicyCommandOutput> => {
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
 * deserializeAws_restXmlDeleteAccessGrantsLocationCommand
 */
export const de_DeleteAccessGrantsLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessGrantsLocationCommandOutput> => {
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
 * deserializeAws_restXmlDeleteAccessPointCommand
 */
export const de_DeleteAccessPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointCommandOutput> => {
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
 * deserializeAws_restXmlDeleteAccessPointForObjectLambdaCommand
 */
export const de_DeleteAccessPointForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointForObjectLambdaCommandOutput> => {
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
 * deserializeAws_restXmlDeleteAccessPointPolicyCommand
 */
export const de_DeleteAccessPointPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointPolicyCommandOutput> => {
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
 * deserializeAws_restXmlDeleteAccessPointPolicyForObjectLambdaCommand
 */
export const de_DeleteAccessPointPolicyForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointPolicyForObjectLambdaCommandOutput> => {
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
 * deserializeAws_restXmlDeleteAccessPointScopeCommand
 */
export const de_DeleteAccessPointScopeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointScopeCommandOutput> => {
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
 * deserializeAws_restXmlDeleteBucketCommand
 */
export const de_DeleteBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketCommandOutput> => {
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
 * deserializeAws_restXmlDeleteBucketLifecycleConfigurationCommand
 */
export const de_DeleteBucketLifecycleConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketLifecycleConfigurationCommandOutput> => {
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
 * deserializeAws_restXmlDeleteBucketPolicyCommand
 */
export const de_DeleteBucketPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketPolicyCommandOutput> => {
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
 * deserializeAws_restXmlDeleteBucketReplicationCommand
 */
export const de_DeleteBucketReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketReplicationCommandOutput> => {
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
 * deserializeAws_restXmlDeleteBucketTaggingCommand
 */
export const de_DeleteBucketTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketTaggingCommandOutput> => {
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
 * deserializeAws_restXmlDeleteJobTaggingCommand
 */
export const de_DeleteJobTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobTaggingCommandOutput> => {
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
 * deserializeAws_restXmlDeleteMultiRegionAccessPointCommand
 */
export const de_DeleteMultiRegionAccessPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMultiRegionAccessPointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_RTARN] != null) {
    contents[_RTARN] = __expectString(data[_RTARN]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlDeletePublicAccessBlockCommand
 */
export const de_DeletePublicAccessBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePublicAccessBlockCommandOutput> => {
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
 * deserializeAws_restXmlDeleteStorageLensConfigurationCommand
 */
export const de_DeleteStorageLensConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStorageLensConfigurationCommandOutput> => {
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
 * deserializeAws_restXmlDeleteStorageLensConfigurationTaggingCommand
 */
export const de_DeleteStorageLensConfigurationTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStorageLensConfigurationTaggingCommandOutput> => {
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
 * deserializeAws_restXmlDeleteStorageLensGroupCommand
 */
export const de_DeleteStorageLensGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStorageLensGroupCommandOutput> => {
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
 * deserializeAws_restXmlDescribeJobCommand
 */
export const de_DescribeJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_J] != null) {
    contents[_J] = de_JobDescriptor(data[_J], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlDescribeMultiRegionAccessPointOperationCommand
 */
export const de_DescribeMultiRegionAccessPointOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMultiRegionAccessPointOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_AO] != null) {
    contents[_AO] = de_AsyncOperation(data[_AO], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlDissociateAccessGrantsIdentityCenterCommand
 */
export const de_DissociateAccessGrantsIdentityCenterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DissociateAccessGrantsIdentityCenterCommandOutput> => {
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
 * deserializeAws_restXmlGetAccessGrantCommand
 */
export const de_GetAccessGrantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessGrantCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_AGA] != null) {
    contents[_AGA] = __expectString(data[_AGA]);
  }
  if (data[_AGI] != null) {
    contents[_AGI] = __expectString(data[_AGI]);
  }
  if (data[_AGLC] != null) {
    contents[_AGLC] = de_AccessGrantsLocationConfiguration(data[_AGLC], context);
  }
  if (data[_AGLI] != null) {
    contents[_AGLI] = __expectString(data[_AGLI]);
  }
  if (data[_AA] != null) {
    contents[_AA] = __expectString(data[_AA]);
  }
  if (data[_CA] != null) {
    contents[_CA] = __expectNonNull(__parseRfc3339DateTimeWithOffset(data[_CA]));
  }
  if (data[_GS] != null) {
    contents[_GS] = __expectString(data[_GS]);
  }
  if (data[_G] != null) {
    contents[_G] = de_Grantee(data[_G], context);
  }
  if (data[_P] != null) {
    contents[_P] = __expectString(data[_P]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetAccessGrantsInstanceCommand
 */
export const de_GetAccessGrantsInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessGrantsInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_AGIA] != null) {
    contents[_AGIA] = __expectString(data[_AGIA]);
  }
  if (data[_AGII] != null) {
    contents[_AGII] = __expectString(data[_AGII]);
  }
  if (data[_CA] != null) {
    contents[_CA] = __expectNonNull(__parseRfc3339DateTimeWithOffset(data[_CA]));
  }
  if (data[_ICAA] != null) {
    contents[_ICAA] = __expectString(data[_ICAA]);
  }
  if (data[_ICA] != null) {
    contents[_ICA] = __expectString(data[_ICA]);
  }
  if (data[_ICIA] != null) {
    contents[_ICIA] = __expectString(data[_ICIA]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetAccessGrantsInstanceForPrefixCommand
 */
export const de_GetAccessGrantsInstanceForPrefixCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessGrantsInstanceForPrefixCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_AGIA] != null) {
    contents[_AGIA] = __expectString(data[_AGIA]);
  }
  if (data[_AGII] != null) {
    contents[_AGII] = __expectString(data[_AGII]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetAccessGrantsInstanceResourcePolicyCommand
 */
export const de_GetAccessGrantsInstanceResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessGrantsInstanceResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_CA] != null) {
    contents[_CA] = __expectNonNull(__parseRfc3339DateTimeWithOffset(data[_CA]));
  }
  if (data[_Or] != null) {
    contents[_Or] = __expectString(data[_Or]);
  }
  if (data[_Po] != null) {
    contents[_Po] = __expectString(data[_Po]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetAccessGrantsLocationCommand
 */
export const de_GetAccessGrantsLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessGrantsLocationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_AGLA] != null) {
    contents[_AGLA] = __expectString(data[_AGLA]);
  }
  if (data[_AGLI] != null) {
    contents[_AGLI] = __expectString(data[_AGLI]);
  }
  if (data[_CA] != null) {
    contents[_CA] = __expectNonNull(__parseRfc3339DateTimeWithOffset(data[_CA]));
  }
  if (data[_IAMRA] != null) {
    contents[_IAMRA] = __expectString(data[_IAMRA]);
  }
  if (data[_LS] != null) {
    contents[_LS] = __expectString(data[_LS]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetAccessPointCommand
 */
export const de_GetAccessPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_APA] != null) {
    contents[_APA] = __expectString(data[_APA]);
  }
  if (data[_A] != null) {
    contents[_A] = __expectString(data[_A]);
  }
  if (data[_B] != null) {
    contents[_B] = __expectString(data[_B]);
  }
  if (data[_BAI] != null) {
    contents[_BAI] = __expectString(data[_BAI]);
  }
  if (data[_CD] != null) {
    contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(data[_CD]));
  }
  if (data[_DSI] != null) {
    contents[_DSI] = __expectString(data[_DSI]);
  }
  if (data[_DST] != null) {
    contents[_DST] = __expectString(data[_DST]);
  }
  if (data.Endpoints === "") {
    contents[_E] = {};
  } else if (data[_E] != null && data[_E][_e] != null) {
    contents[_E] = de_Endpoints(__getArrayIfSingleItem(data[_E][_e]), context);
  }
  if (data[_N] != null) {
    contents[_N] = __expectString(data[_N]);
  }
  if (data[_NO] != null) {
    contents[_NO] = __expectString(data[_NO]);
  }
  if (data[_PABC] != null) {
    contents[_PABC] = de_PublicAccessBlockConfiguration(data[_PABC], context);
  }
  if (data[_VC] != null) {
    contents[_VC] = de_VpcConfiguration(data[_VC], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetAccessPointConfigurationForObjectLambdaCommand
 */
export const de_GetAccessPointConfigurationForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointConfigurationForObjectLambdaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_C] != null) {
    contents[_C] = de_ObjectLambdaConfiguration(data[_C], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetAccessPointForObjectLambdaCommand
 */
export const de_GetAccessPointForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointForObjectLambdaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_A] != null) {
    contents[_A] = de_ObjectLambdaAccessPointAlias(data[_A], context);
  }
  if (data[_CD] != null) {
    contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(data[_CD]));
  }
  if (data[_N] != null) {
    contents[_N] = __expectString(data[_N]);
  }
  if (data[_PABC] != null) {
    contents[_PABC] = de_PublicAccessBlockConfiguration(data[_PABC], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetAccessPointPolicyCommand
 */
export const de_GetAccessPointPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_Po] != null) {
    contents[_Po] = __expectString(data[_Po]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetAccessPointPolicyForObjectLambdaCommand
 */
export const de_GetAccessPointPolicyForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointPolicyForObjectLambdaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_Po] != null) {
    contents[_Po] = __expectString(data[_Po]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetAccessPointPolicyStatusCommand
 */
export const de_GetAccessPointPolicyStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointPolicyStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_PS] != null) {
    contents[_PS] = de_PolicyStatus(data[_PS], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetAccessPointPolicyStatusForObjectLambdaCommand
 */
export const de_GetAccessPointPolicyStatusForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointPolicyStatusForObjectLambdaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_PS] != null) {
    contents[_PS] = de_PolicyStatus(data[_PS], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetAccessPointScopeCommand
 */
export const de_GetAccessPointScopeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointScopeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_S] != null) {
    contents[_S] = de_Scope(data[_S], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketCommand
 */
export const de_GetBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_B] != null) {
    contents[_B] = __expectString(data[_B]);
  }
  if (data[_CD] != null) {
    contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(data[_CD]));
  }
  if (data[_PABE] != null) {
    contents[_PABE] = __parseBoolean(data[_PABE]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketLifecycleConfigurationCommand
 */
export const de_GetBucketLifecycleConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketLifecycleConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Rules === "") {
    contents[_Ru] = [];
  } else if (data[_Ru] != null && data[_Ru][_Rul] != null) {
    contents[_Ru] = de_LifecycleRules(__getArrayIfSingleItem(data[_Ru][_Rul]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketPolicyCommand
 */
export const de_GetBucketPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_Po] != null) {
    contents[_Po] = __expectString(data[_Po]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketReplicationCommand
 */
export const de_GetBucketReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketReplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_RC] != null) {
    contents[_RC] = de_ReplicationConfiguration(data[_RC], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketTaggingCommand
 */
export const de_GetBucketTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TagSet === "") {
    contents[_TS] = [];
  } else if (data[_TS] != null && data[_TS][_m] != null) {
    contents[_TS] = de_S3TagSet(__getArrayIfSingleItem(data[_TS][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketVersioningCommand
 */
export const de_GetBucketVersioningCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketVersioningCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_MD] != null) {
    contents[_MFAD] = __expectString(data[_MD]);
  }
  if (data[_St] != null) {
    contents[_St] = __expectString(data[_St]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetDataAccessCommand
 */
export const de_GetDataAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataAccessCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_Cr] != null) {
    contents[_Cr] = de_Credentials(data[_Cr], context);
  }
  if (data[_G] != null) {
    contents[_G] = de_Grantee(data[_G], context);
  }
  if (data[_MGT] != null) {
    contents[_MGT] = __expectString(data[_MGT]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetJobTaggingCommand
 */
export const de_GetJobTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags === "") {
    contents[_T] = [];
  } else if (data[_T] != null && data[_T][_m] != null) {
    contents[_T] = de_S3TagSet(__getArrayIfSingleItem(data[_T][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetMultiRegionAccessPointCommand
 */
export const de_GetMultiRegionAccessPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMultiRegionAccessPointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_AP] != null) {
    contents[_AP] = de_MultiRegionAccessPointReport(data[_AP], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetMultiRegionAccessPointPolicyCommand
 */
export const de_GetMultiRegionAccessPointPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMultiRegionAccessPointPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_Po] != null) {
    contents[_Po] = de_MultiRegionAccessPointPolicyDocument(data[_Po], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetMultiRegionAccessPointPolicyStatusCommand
 */
export const de_GetMultiRegionAccessPointPolicyStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMultiRegionAccessPointPolicyStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_Es] != null) {
    contents[_Es] = de_PolicyStatus(data[_Es], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetMultiRegionAccessPointRoutesCommand
 */
export const de_GetMultiRegionAccessPointRoutesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMultiRegionAccessPointRoutesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_Mr] != null) {
    contents[_Mr] = __expectString(data[_Mr]);
  }
  if (data.Routes === "") {
    contents[_Ro] = [];
  } else if (data[_Ro] != null && data[_Ro][_Rou] != null) {
    contents[_Ro] = de_RouteList(__getArrayIfSingleItem(data[_Ro][_Rou]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetPublicAccessBlockCommand
 */
export const de_GetPublicAccessBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPublicAccessBlockCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.PublicAccessBlockConfiguration = de_PublicAccessBlockConfiguration(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetStorageLensConfigurationCommand
 */
export const de_GetStorageLensConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStorageLensConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.StorageLensConfiguration = de_StorageLensConfiguration(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetStorageLensConfigurationTaggingCommand
 */
export const de_GetStorageLensConfigurationTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStorageLensConfigurationTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags === "") {
    contents[_T] = [];
  } else if (data[_T] != null && data[_T][_Tag] != null) {
    contents[_T] = de_StorageLensTags(__getArrayIfSingleItem(data[_T][_Tag]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetStorageLensGroupCommand
 */
export const de_GetStorageLensGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStorageLensGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.StorageLensGroup = de_StorageLensGroup(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlListAccessGrantsCommand
 */
export const de_ListAccessGrantsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessGrantsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccessGrantsList === "") {
    contents[_AGL] = [];
  } else if (data[_AGL] != null && data[_AGL][_AG] != null) {
    contents[_AGL] = de_AccessGrantsList(__getArrayIfSingleItem(data[_AGL][_AG]), context);
  }
  if (data[_NT] != null) {
    contents[_NT] = __expectString(data[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListAccessGrantsInstancesCommand
 */
export const de_ListAccessGrantsInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessGrantsInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccessGrantsInstancesList === "") {
    contents[_AGIL] = [];
  } else if (data[_AGIL] != null && data[_AGIL][_AGIc] != null) {
    contents[_AGIL] = de_AccessGrantsInstancesList(__getArrayIfSingleItem(data[_AGIL][_AGIc]), context);
  }
  if (data[_NT] != null) {
    contents[_NT] = __expectString(data[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListAccessGrantsLocationsCommand
 */
export const de_ListAccessGrantsLocationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessGrantsLocationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccessGrantsLocationsList === "") {
    contents[_AGLL] = [];
  } else if (data[_AGLL] != null && data[_AGLL][_AGLc] != null) {
    contents[_AGLL] = de_AccessGrantsLocationsList(__getArrayIfSingleItem(data[_AGLL][_AGLc]), context);
  }
  if (data[_NT] != null) {
    contents[_NT] = __expectString(data[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListAccessPointsCommand
 */
export const de_ListAccessPointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccessPointList === "") {
    contents[_APL] = [];
  } else if (data[_APL] != null && data[_APL][_AP] != null) {
    contents[_APL] = de_AccessPointList(__getArrayIfSingleItem(data[_APL][_AP]), context);
  }
  if (data[_NT] != null) {
    contents[_NT] = __expectString(data[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListAccessPointsForDirectoryBucketsCommand
 */
export const de_ListAccessPointsForDirectoryBucketsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPointsForDirectoryBucketsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccessPointList === "") {
    contents[_APL] = [];
  } else if (data[_APL] != null && data[_APL][_AP] != null) {
    contents[_APL] = de_AccessPointList(__getArrayIfSingleItem(data[_APL][_AP]), context);
  }
  if (data[_NT] != null) {
    contents[_NT] = __expectString(data[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListAccessPointsForObjectLambdaCommand
 */
export const de_ListAccessPointsForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPointsForObjectLambdaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_NT] != null) {
    contents[_NT] = __expectString(data[_NT]);
  }
  if (data.ObjectLambdaAccessPointList === "") {
    contents[_OLAPL] = [];
  } else if (data[_OLAPL] != null && data[_OLAPL][_OLAP] != null) {
    contents[_OLAPL] = de_ObjectLambdaAccessPointList(__getArrayIfSingleItem(data[_OLAPL][_OLAP]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListCallerAccessGrantsCommand
 */
export const de_ListCallerAccessGrantsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCallerAccessGrantsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CallerAccessGrantsList === "") {
    contents[_CAGL] = [];
  } else if (data[_CAGL] != null && data[_CAGL][_AG] != null) {
    contents[_CAGL] = de_CallerAccessGrantsList(__getArrayIfSingleItem(data[_CAGL][_AG]), context);
  }
  if (data[_NT] != null) {
    contents[_NT] = __expectString(data[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListJobsCommand
 */
export const de_ListJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Jobs === "") {
    contents[_Jo] = [];
  } else if (data[_Jo] != null && data[_Jo][_m] != null) {
    contents[_Jo] = de_JobListDescriptorList(__getArrayIfSingleItem(data[_Jo][_m]), context);
  }
  if (data[_NT] != null) {
    contents[_NT] = __expectString(data[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListMultiRegionAccessPointsCommand
 */
export const de_ListMultiRegionAccessPointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMultiRegionAccessPointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccessPoints === "") {
    contents[_APc] = [];
  } else if (data[_APc] != null && data[_APc][_AP] != null) {
    contents[_APc] = de_MultiRegionAccessPointReportList(__getArrayIfSingleItem(data[_APc][_AP]), context);
  }
  if (data[_NT] != null) {
    contents[_NT] = __expectString(data[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListRegionalBucketsCommand
 */
export const de_ListRegionalBucketsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRegionalBucketsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_NT] != null) {
    contents[_NT] = __expectString(data[_NT]);
  }
  if (data.RegionalBucketList === "") {
    contents[_RBL] = [];
  } else if (data[_RBL] != null && data[_RBL][_RB] != null) {
    contents[_RBL] = de_RegionalBucketList(__getArrayIfSingleItem(data[_RBL][_RB]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListStorageLensConfigurationsCommand
 */
export const de_ListStorageLensConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStorageLensConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_NT] != null) {
    contents[_NT] = __expectString(data[_NT]);
  }
  if (data.StorageLensConfiguration === "") {
    contents[_SLCL] = [];
  } else if (data[_SLC] != null) {
    contents[_SLCL] = de_StorageLensConfigurationList(__getArrayIfSingleItem(data[_SLC]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListStorageLensGroupsCommand
 */
export const de_ListStorageLensGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStorageLensGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_NT] != null) {
    contents[_NT] = __expectString(data[_NT]);
  }
  if (data.StorageLensGroup === "") {
    contents[_SLGL] = [];
  } else if (data[_SLG] != null) {
    contents[_SLGL] = de_StorageLensGroupList(__getArrayIfSingleItem(data[_SLG]), context);
  }
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
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags === "") {
    contents[_T] = [];
  } else if (data[_T] != null && data[_T][_Tag] != null) {
    contents[_T] = de_TagList(__getArrayIfSingleItem(data[_T][_Tag]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlPutAccessGrantsInstanceResourcePolicyCommand
 */
export const de_PutAccessGrantsInstanceResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccessGrantsInstanceResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_CA] != null) {
    contents[_CA] = __expectNonNull(__parseRfc3339DateTimeWithOffset(data[_CA]));
  }
  if (data[_Or] != null) {
    contents[_Or] = __expectString(data[_Or]);
  }
  if (data[_Po] != null) {
    contents[_Po] = __expectString(data[_Po]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlPutAccessPointConfigurationForObjectLambdaCommand
 */
export const de_PutAccessPointConfigurationForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccessPointConfigurationForObjectLambdaCommandOutput> => {
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
 * deserializeAws_restXmlPutAccessPointPolicyCommand
 */
export const de_PutAccessPointPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccessPointPolicyCommandOutput> => {
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
 * deserializeAws_restXmlPutAccessPointPolicyForObjectLambdaCommand
 */
export const de_PutAccessPointPolicyForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccessPointPolicyForObjectLambdaCommandOutput> => {
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
 * deserializeAws_restXmlPutAccessPointScopeCommand
 */
export const de_PutAccessPointScopeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccessPointScopeCommandOutput> => {
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
 * deserializeAws_restXmlPutBucketLifecycleConfigurationCommand
 */
export const de_PutBucketLifecycleConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketLifecycleConfigurationCommandOutput> => {
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
 * deserializeAws_restXmlPutBucketPolicyCommand
 */
export const de_PutBucketPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketPolicyCommandOutput> => {
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
 * deserializeAws_restXmlPutBucketReplicationCommand
 */
export const de_PutBucketReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketReplicationCommandOutput> => {
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
 * deserializeAws_restXmlPutBucketTaggingCommand
 */
export const de_PutBucketTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketTaggingCommandOutput> => {
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
 * deserializeAws_restXmlPutBucketVersioningCommand
 */
export const de_PutBucketVersioningCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketVersioningCommandOutput> => {
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
 * deserializeAws_restXmlPutJobTaggingCommand
 */
export const de_PutJobTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutJobTaggingCommandOutput> => {
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
 * deserializeAws_restXmlPutMultiRegionAccessPointPolicyCommand
 */
export const de_PutMultiRegionAccessPointPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMultiRegionAccessPointPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_RTARN] != null) {
    contents[_RTARN] = __expectString(data[_RTARN]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlPutPublicAccessBlockCommand
 */
export const de_PutPublicAccessBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPublicAccessBlockCommandOutput> => {
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
 * deserializeAws_restXmlPutStorageLensConfigurationCommand
 */
export const de_PutStorageLensConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutStorageLensConfigurationCommandOutput> => {
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
 * deserializeAws_restXmlPutStorageLensConfigurationTaggingCommand
 */
export const de_PutStorageLensConfigurationTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutStorageLensConfigurationTaggingCommandOutput> => {
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
 * deserializeAws_restXmlSubmitMultiRegionAccessPointRoutesCommand
 */
export const de_SubmitMultiRegionAccessPointRoutesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitMultiRegionAccessPointRoutesCommandOutput> => {
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
 * deserializeAws_restXmlUpdateAccessGrantsLocationCommand
 */
export const de_UpdateAccessGrantsLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccessGrantsLocationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_AGLA] != null) {
    contents[_AGLA] = __expectString(data[_AGLA]);
  }
  if (data[_AGLI] != null) {
    contents[_AGLI] = __expectString(data[_AGLI]);
  }
  if (data[_CA] != null) {
    contents[_CA] = __expectNonNull(__parseRfc3339DateTimeWithOffset(data[_CA]));
  }
  if (data[_IAMRA] != null) {
    contents[_IAMRA] = __expectString(data[_IAMRA]);
  }
  if (data[_LS] != null) {
    contents[_LS] = __expectString(data[_LS]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlUpdateJobPriorityCommand
 */
export const de_UpdateJobPriorityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobPriorityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_JI] != null) {
    contents[_JI] = __expectString(data[_JI]);
  }
  if (data[_Pr] != null) {
    contents[_Pr] = __strictParseInt32(data[_Pr]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlUpdateJobStatusCommand
 */
export const de_UpdateJobStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_JI] != null) {
    contents[_JI] = __expectString(data[_JI]);
  }
  if (data[_St] != null) {
    contents[_St] = __expectString(data[_St]);
  }
  if (data[_SUR] != null) {
    contents[_SUR] = __expectString(data[_SUR]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlUpdateStorageLensGroupCommand
 */
export const de_UpdateStorageLensGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStorageLensGroupCommandOutput> => {
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
 * deserialize_Aws_restXmlCommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BucketAlreadyExists":
    case "com.amazonaws.s3control#BucketAlreadyExists":
      throw await de_BucketAlreadyExistsRes(parsedOutput, context);
    case "BucketAlreadyOwnedByYou":
    case "com.amazonaws.s3control#BucketAlreadyOwnedByYou":
      throw await de_BucketAlreadyOwnedByYouRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.s3control#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "IdempotencyException":
    case "com.amazonaws.s3control#IdempotencyException":
      throw await de_IdempotencyExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.s3control#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.s3control#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.s3control#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "NoSuchPublicAccessBlockConfiguration":
    case "com.amazonaws.s3control#NoSuchPublicAccessBlockConfiguration":
      throw await de_NoSuchPublicAccessBlockConfigurationRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.s3control#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.s3control#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.s3control#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    case "JobStatusException":
    case "com.amazonaws.s3control#JobStatusException":
      throw await de_JobStatusExceptionRes(parsedOutput, context);
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
 * deserializeAws_restXmlBadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlBucketAlreadyExistsRes
 */
const de_BucketAlreadyExistsRes = async (parsedOutput: any, context: __SerdeContext): Promise<BucketAlreadyExists> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  const exception = new BucketAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlBucketAlreadyOwnedByYouRes
 */
const de_BucketAlreadyOwnedByYouRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BucketAlreadyOwnedByYou> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  const exception = new BucketAlreadyOwnedByYou({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlIdempotencyExceptionRes
 */
const de_IdempotencyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotencyException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new IdempotencyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInternalServiceExceptionRes
 */
const de_InternalServiceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new InternalServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidNextTokenExceptionRes
 */
const de_InvalidNextTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new InvalidNextTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlJobStatusExceptionRes
 */
const de_JobStatusExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<JobStatusException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new JobStatusException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlNoSuchPublicAccessBlockConfigurationRes
 */
const de_NoSuchPublicAccessBlockConfigurationRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchPublicAccessBlockConfiguration> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new NoSuchPublicAccessBlockConfiguration({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlNotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyRequestsExceptionRes
 */
const de_TooManyRequestsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyTagsExceptionRes
 */
const de_TooManyTagsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_Me] != null) {
    contents[_Me] = __expectString(data[_Me]);
  }
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * serializeAws_restXmlAbortIncompleteMultipartUpload
 */
const se_AbortIncompleteMultipartUpload = (input: AbortIncompleteMultipartUpload, context: __SerdeContext): any => {
  const bn = new __XmlNode(_AIMU);
  if (input[_DAI] != null) {
    bn.c(__XmlNode.of(_DAI, String(input[_DAI])).n(_DAI));
  }
  return bn;
};

/**
 * serializeAws_restXmlAccessControlTranslation
 */
const se_AccessControlTranslation = (input: AccessControlTranslation, context: __SerdeContext): any => {
  const bn = new __XmlNode(_ACT);
  if (input[_Ow] != null) {
    bn.c(__XmlNode.of(_OO, input[_Ow]).n(_Ow));
  }
  return bn;
};

/**
 * serializeAws_restXmlAccessGrantsLocationConfiguration
 */
const se_AccessGrantsLocationConfiguration = (
  input: AccessGrantsLocationConfiguration,
  context: __SerdeContext
): any => {
  const bn = new __XmlNode(_AGLC);
  if (input[_SSP] != null) {
    bn.c(__XmlNode.of(_SP, input[_SSP]).n(_SSP));
  }
  return bn;
};

/**
 * serializeAws_restXmlAccountLevel
 */
const se_AccountLevel = (input: AccountLevel, context: __SerdeContext): any => {
  const bn = new __XmlNode(_AL);
  if (input[_AM] != null) {
    bn.c(se_ActivityMetrics(input[_AM], context).n(_AM));
  }
  if (input[_BL] != null) {
    bn.c(se_BucketLevel(input[_BL], context).n(_BL));
  }
  if (input[_ACOM] != null) {
    bn.c(se_AdvancedCostOptimizationMetrics(input[_ACOM], context).n(_ACOM));
  }
  if (input[_ADPM] != null) {
    bn.c(se_AdvancedDataProtectionMetrics(input[_ADPM], context).n(_ADPM));
  }
  if (input[_DSCM] != null) {
    bn.c(se_DetailedStatusCodesMetrics(input[_DSCM], context).n(_DSCM));
  }
  if (input[_SLGLt] != null) {
    bn.c(se_StorageLensGroupLevel(input[_SLGLt], context).n(_SLGLt));
  }
  return bn;
};

/**
 * serializeAws_restXmlActivityMetrics
 */
const se_ActivityMetrics = (input: ActivityMetrics, context: __SerdeContext): any => {
  const bn = new __XmlNode(_AM);
  if (input[_IE] != null) {
    bn.c(__XmlNode.of(_IE, String(input[_IE])).n(_IE));
  }
  return bn;
};

/**
 * serializeAws_restXmlAdvancedCostOptimizationMetrics
 */
const se_AdvancedCostOptimizationMetrics = (input: AdvancedCostOptimizationMetrics, context: __SerdeContext): any => {
  const bn = new __XmlNode(_ACOM);
  if (input[_IE] != null) {
    bn.c(__XmlNode.of(_IE, String(input[_IE])).n(_IE));
  }
  return bn;
};

/**
 * serializeAws_restXmlAdvancedDataProtectionMetrics
 */
const se_AdvancedDataProtectionMetrics = (input: AdvancedDataProtectionMetrics, context: __SerdeContext): any => {
  const bn = new __XmlNode(_ADPM);
  if (input[_IE] != null) {
    bn.c(__XmlNode.of(_IE, String(input[_IE])).n(_IE));
  }
  return bn;
};

/**
 * serializeAws_restXmlAwsLambdaTransformation
 */
const se_AwsLambdaTransformation = (input: AwsLambdaTransformation, context: __SerdeContext): any => {
  const bn = new __XmlNode(_ALT);
  if (input[_FA] != null) {
    bn.c(__XmlNode.of(_FAS, input[_FA]).n(_FA));
  }
  if (input[_FP] != null) {
    bn.c(__XmlNode.of(_ALTP, input[_FP]).n(_FP));
  }
  return bn;
};

/**
 * serializeAws_restXmlBucketLevel
 */
const se_BucketLevel = (input: BucketLevel, context: __SerdeContext): any => {
  const bn = new __XmlNode(_BL);
  if (input[_AM] != null) {
    bn.c(se_ActivityMetrics(input[_AM], context).n(_AM));
  }
  if (input[_PL] != null) {
    bn.c(se_PrefixLevel(input[_PL], context).n(_PL));
  }
  if (input[_ACOM] != null) {
    bn.c(se_AdvancedCostOptimizationMetrics(input[_ACOM], context).n(_ACOM));
  }
  if (input[_ADPM] != null) {
    bn.c(se_AdvancedDataProtectionMetrics(input[_ADPM], context).n(_ADPM));
  }
  if (input[_DSCM] != null) {
    bn.c(se_DetailedStatusCodesMetrics(input[_DSCM], context).n(_DSCM));
  }
  return bn;
};

/**
 * serializeAws_restXmlBuckets
 */
const se_Buckets = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_SBAS, entry);
      return n.n(_Ar);
    });
};

/**
 * serializeAws_restXmlCloudWatchMetrics
 */
const se_CloudWatchMetrics = (input: CloudWatchMetrics, context: __SerdeContext): any => {
  const bn = new __XmlNode(_CWM);
  if (input[_IE] != null) {
    bn.c(__XmlNode.of(_IE, String(input[_IE])).n(_IE));
  }
  return bn;
};

/**
 * serializeAws_restXmlCreateBucketConfiguration
 */
const se_CreateBucketConfiguration = (input: CreateBucketConfiguration, context: __SerdeContext): any => {
  const bn = new __XmlNode(_CBC);
  if (input[_LC] != null) {
    bn.c(__XmlNode.of(_BLC, input[_LC]).n(_LC));
  }
  return bn;
};

/**
 * serializeAws_restXmlCreateMultiRegionAccessPointInput
 */
const se_CreateMultiRegionAccessPointInput = (
  input: CreateMultiRegionAccessPointInput,
  context: __SerdeContext
): any => {
  const bn = new __XmlNode(_CMRAPI);
  if (input[_N] != null) {
    bn.c(__XmlNode.of(_MRAPN, input[_N]).n(_N));
  }
  if (input[_PAB] != null) {
    bn.c(se_PublicAccessBlockConfiguration(input[_PAB], context).n(_PAB));
  }
  bn.lc(input, "Regions", "Regions", () => se_RegionCreationList(input[_Re]!, context));
  return bn;
};

/**
 * serializeAws_restXmlDeleteMarkerReplication
 */
const se_DeleteMarkerReplication = (input: DeleteMarkerReplication, context: __SerdeContext): any => {
  const bn = new __XmlNode(_DMR);
  if (input[_St] != null) {
    bn.c(__XmlNode.of(_DMRS, input[_St]).n(_St));
  }
  return bn;
};

/**
 * serializeAws_restXmlDeleteMultiRegionAccessPointInput
 */
const se_DeleteMultiRegionAccessPointInput = (
  input: DeleteMultiRegionAccessPointInput,
  context: __SerdeContext
): any => {
  const bn = new __XmlNode(_DMRAPI);
  if (input[_N] != null) {
    bn.c(__XmlNode.of(_MRAPN, input[_N]).n(_N));
  }
  return bn;
};

/**
 * serializeAws_restXmlDestination
 */
const se_Destination = (input: Destination, context: __SerdeContext): any => {
  const bn = new __XmlNode(_Des);
  if (input[_Ac] != null) {
    bn.c(__XmlNode.of(_AI, input[_Ac]).n(_Ac));
  }
  if (input[_B] != null) {
    bn.c(__XmlNode.of(_BIS, input[_B]).n(_B));
  }
  if (input[_RT] != null) {
    bn.c(se_ReplicationTime(input[_RT], context).n(_RT));
  }
  if (input[_ACT] != null) {
    bn.c(se_AccessControlTranslation(input[_ACT], context).n(_ACT));
  }
  if (input[_EC] != null) {
    bn.c(se_EncryptionConfiguration(input[_EC], context).n(_EC));
  }
  if (input[_Met] != null) {
    bn.c(se_Metrics(input[_Met], context).n(_Met));
  }
  if (input[_SC] != null) {
    bn.c(__XmlNode.of(_RSC, input[_SC]).n(_SC));
  }
  return bn;
};

/**
 * serializeAws_restXmlDetailedStatusCodesMetrics
 */
const se_DetailedStatusCodesMetrics = (input: DetailedStatusCodesMetrics, context: __SerdeContext): any => {
  const bn = new __XmlNode(_DSCM);
  if (input[_IE] != null) {
    bn.c(__XmlNode.of(_IE, String(input[_IE])).n(_IE));
  }
  return bn;
};

/**
 * serializeAws_restXmlEncryptionConfiguration
 */
const se_EncryptionConfiguration = (input: EncryptionConfiguration, context: __SerdeContext): any => {
  const bn = new __XmlNode(_EC);
  bn.cc(input, _RKKID);
  return bn;
};

/**
 * serializeAws_restXml_Exclude
 */
const se__Exclude = (input: _Exclude, context: __SerdeContext): any => {
  const bn = new __XmlNode(_Ex);
  bn.lc(input, "Buckets", "Buckets", () => se_Buckets(input[_Bu]!, context));
  bn.lc(input, "Regions", "Regions", () => se_Regions(input[_Re]!, context));
  return bn;
};

/**
 * serializeAws_restXmlExistingObjectReplication
 */
const se_ExistingObjectReplication = (input: ExistingObjectReplication, context: __SerdeContext): any => {
  const bn = new __XmlNode(_EOR);
  if (input[_St] != null) {
    bn.c(__XmlNode.of(_EORS, input[_St]).n(_St));
  }
  return bn;
};

/**
 * serializeAws_restXmlGeneratedManifestEncryption
 */
const se_GeneratedManifestEncryption = (input: GeneratedManifestEncryption, context: __SerdeContext): any => {
  const bn = new __XmlNode(_GME);
  if (input[_SSES] != null) {
    bn.c(se_SSES3Encryption(input[_SSES], context).n(_SS));
  }
  if (input[_SSEKMS] != null) {
    bn.c(se_SSEKMSEncryption(input[_SSEKMS], context).n(_SK));
  }
  return bn;
};

/**
 * serializeAws_restXmlGrantee
 */
const se_Grantee = (input: Grantee, context: __SerdeContext): any => {
  const bn = new __XmlNode(_G);
  bn.cc(input, _GT);
  bn.cc(input, _GI);
  return bn;
};

/**
 * serializeAws_restXmlInclude
 */
const se_Include = (input: Include, context: __SerdeContext): any => {
  const bn = new __XmlNode(_I);
  bn.lc(input, "Buckets", "Buckets", () => se_Buckets(input[_Bu]!, context));
  bn.lc(input, "Regions", "Regions", () => se_Regions(input[_Re]!, context));
  return bn;
};

/**
 * serializeAws_restXmlJobManifest
 */
const se_JobManifest = (input: JobManifest, context: __SerdeContext): any => {
  const bn = new __XmlNode(_JM);
  if (input[_Sp] != null) {
    bn.c(se_JobManifestSpec(input[_Sp], context).n(_Sp));
  }
  if (input[_L] != null) {
    bn.c(se_JobManifestLocation(input[_L], context).n(_L));
  }
  return bn;
};

/**
 * serializeAws_restXmlJobManifestFieldList
 */
const se_JobManifestFieldList = (input: JobManifestFieldName[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_JMFN, entry);
      return n.n(_m);
    });
};

/**
 * serializeAws_restXmlJobManifestGenerator
 */
const se_JobManifestGenerator = (input: JobManifestGenerator, context: __SerdeContext): any => {
  const bn = new __XmlNode(_JMG);
  JobManifestGenerator.visit(input, {
    S3JobManifestGenerator: (value) => {
      if (input[_SJMG] != null) {
        bn.c(se_S3JobManifestGenerator(value, context).n(_SJMG));
      }
    },
    _: (name: string, value: any) => {
      if (!(value instanceof __XmlNode || value instanceof __XmlText)) {
        throw new Error("Unable to serialize unknown union members in XML.");
      }
      bn.c(new __XmlNode(name).c(value));
    },
  });
  return bn;
};

/**
 * serializeAws_restXmlJobManifestGeneratorFilter
 */
const se_JobManifestGeneratorFilter = (input: JobManifestGeneratorFilter, context: __SerdeContext): any => {
  const bn = new __XmlNode(_JMGF);
  if (input[_EFR] != null) {
    bn.c(__XmlNode.of(_Bo, String(input[_EFR])).n(_EFR));
  }
  if (input[_CAr] != null) {
    bn.c(__XmlNode.of(_OCT, __serializeDateTime(input[_CAr])).n(_CAr));
  }
  if (input[_CB] != null) {
    bn.c(__XmlNode.of(_OCT, __serializeDateTime(input[_CB])).n(_CB));
  }
  bn.lc(input, "ObjectReplicationStatuses", "ObjectReplicationStatuses", () =>
    se_ReplicationStatusFilterList(input[_ORS]!, context)
  );
  if (input[_KNC] != null) {
    bn.c(se_KeyNameConstraint(input[_KNC], context).n(_KNC));
  }
  if (input[_OSGTB] != null) {
    bn.c(__XmlNode.of(_OSGTB, String(input[_OSGTB])).n(_OSGTB));
  }
  if (input[_OSLTB] != null) {
    bn.c(__XmlNode.of(_OSLTB, String(input[_OSLTB])).n(_OSLTB));
  }
  bn.lc(input, "MatchAnyStorageClass", "MatchAnyStorageClass", () => se_StorageClassList(input[_MASC]!, context));
  return bn;
};

/**
 * serializeAws_restXmlJobManifestLocation
 */
const se_JobManifestLocation = (input: JobManifestLocation, context: __SerdeContext): any => {
  const bn = new __XmlNode(_JML);
  if (input[_OA] != null) {
    bn.c(__XmlNode.of(_SKAS, input[_OA]).n(_OA));
  }
  if (input[_OVI] != null) {
    bn.c(__XmlNode.of(_SOVI, input[_OVI]).n(_OVI));
  }
  if (input[_ET] != null) {
    bn.c(__XmlNode.of(_NEMLSon, input[_ET]).n(_ET));
  }
  return bn;
};

/**
 * serializeAws_restXmlJobManifestSpec
 */
const se_JobManifestSpec = (input: JobManifestSpec, context: __SerdeContext): any => {
  const bn = new __XmlNode(_JMS);
  if (input[_F] != null) {
    bn.c(__XmlNode.of(_JMF, input[_F]).n(_F));
  }
  bn.lc(input, "Fields", "Fields", () => se_JobManifestFieldList(input[_Fi]!, context));
  return bn;
};

/**
 * serializeAws_restXmlJobOperation
 */
const se_JobOperation = (input: JobOperation, context: __SerdeContext): any => {
  const bn = new __XmlNode(_JO);
  if (input[_LI] != null) {
    bn.c(se_LambdaInvokeOperation(input[_LI], context).n(_LI));
  }
  if (input[_SPOC] != null) {
    bn.c(se_S3CopyObjectOperation(input[_SPOC], context).n(_SPOC));
  }
  if (input[_SPOA] != null) {
    bn.c(se_S3SetObjectAclOperation(input[_SPOA], context).n(_SPOA));
  }
  if (input[_SPOT] != null) {
    bn.c(se_S3SetObjectTaggingOperation(input[_SPOT], context).n(_SPOT));
  }
  if (input[_SDOT] != null) {
    bn.c(se_S3DeleteObjectTaggingOperation(input[_SDOT], context).n(_SDOT));
  }
  if (input[_SIRO] != null) {
    bn.c(se_S3InitiateRestoreObjectOperation(input[_SIRO], context).n(_SIRO));
  }
  if (input[_SPOLH] != null) {
    bn.c(se_S3SetObjectLegalHoldOperation(input[_SPOLH], context).n(_SPOLH));
  }
  if (input[_SPOR] != null) {
    bn.c(se_S3SetObjectRetentionOperation(input[_SPOR], context).n(_SPOR));
  }
  if (input[_SRO] != null) {
    bn.c(se_S3ReplicateObjectOperation(input[_SRO], context).n(_SRO));
  }
  return bn;
};

/**
 * serializeAws_restXmlJobReport
 */
const se_JobReport = (input: JobReport, context: __SerdeContext): any => {
  const bn = new __XmlNode(_JR);
  if (input[_B] != null) {
    bn.c(__XmlNode.of(_SBAS, input[_B]).n(_B));
  }
  if (input[_F] != null) {
    bn.c(__XmlNode.of(_JRF, input[_F]).n(_F));
  }
  if (input[_En] != null) {
    bn.c(__XmlNode.of(_Bo, String(input[_En])).n(_En));
  }
  if (input[_Pre] != null) {
    bn.c(__XmlNode.of(_RPS, input[_Pre]).n(_Pre));
  }
  if (input[_RS] != null) {
    bn.c(__XmlNode.of(_JRS, input[_RS]).n(_RS));
  }
  return bn;
};

/**
 * serializeAws_restXmlKeyNameConstraint
 */
const se_KeyNameConstraint = (input: KeyNameConstraint, context: __SerdeContext): any => {
  const bn = new __XmlNode(_KNC);
  bn.lc(input, "MatchAnyPrefix", "MatchAnyPrefix", () => se_NonEmptyMaxLength1024StringList(input[_MAP]!, context));
  bn.lc(input, "MatchAnySuffix", "MatchAnySuffix", () => se_NonEmptyMaxLength1024StringList(input[_MAS]!, context));
  bn.lc(input, "MatchAnySubstring", "MatchAnySubstring", () =>
    se_NonEmptyMaxLength1024StringList(input[_MASa]!, context)
  );
  return bn;
};

/**
 * serializeAws_restXmlLambdaInvokeOperation
 */
const se_LambdaInvokeOperation = (input: LambdaInvokeOperation, context: __SerdeContext): any => {
  const bn = new __XmlNode(_LIO);
  if (input[_FA] != null) {
    bn.c(__XmlNode.of(_FAS, input[_FA]).n(_FA));
  }
  if (input[_ISV] != null) {
    bn.c(__XmlNode.of(_NEMLS, input[_ISV]).n(_ISV));
  }
  bn.lc(input, "UserArguments", "UserArguments", () => se_UserArguments(input[_UA]!, context));
  return bn;
};

/**
 * serializeAws_restXmlLifecycleConfiguration
 */
const se_LifecycleConfiguration = (input: LifecycleConfiguration, context: __SerdeContext): any => {
  const bn = new __XmlNode(_LCi);
  bn.lc(input, "Rules", "Rules", () => se_LifecycleRules(input[_Ru]!, context));
  return bn;
};

/**
 * serializeAws_restXmlLifecycleExpiration
 */
const se_LifecycleExpiration = (input: LifecycleExpiration, context: __SerdeContext): any => {
  const bn = new __XmlNode(_LE);
  if (input[_Da] != null) {
    bn.c(__XmlNode.of(_Da, __serializeDateTime(input[_Da])).n(_Da));
  }
  if (input[_Day] != null) {
    bn.c(__XmlNode.of(_Day, String(input[_Day])).n(_Day));
  }
  if (input[_EODM] != null) {
    bn.c(__XmlNode.of(_EODM, String(input[_EODM])).n(_EODM));
  }
  return bn;
};

/**
 * serializeAws_restXmlLifecycleRule
 */
const se_LifecycleRule = (input: LifecycleRule, context: __SerdeContext): any => {
  const bn = new __XmlNode(_LR);
  if (input[_Exp] != null) {
    bn.c(se_LifecycleExpiration(input[_Exp], context).n(_Exp));
  }
  bn.cc(input, _ID);
  if (input[_Fil] != null) {
    bn.c(se_LifecycleRuleFilter(input[_Fil], context).n(_Fil));
  }
  if (input[_St] != null) {
    bn.c(__XmlNode.of(_ES, input[_St]).n(_St));
  }
  bn.lc(input, "Transitions", "Transitions", () => se_TransitionList(input[_Tr]!, context));
  bn.lc(input, "NoncurrentVersionTransitions", "NoncurrentVersionTransitions", () =>
    se_NoncurrentVersionTransitionList(input[_NVT]!, context)
  );
  if (input[_NVE] != null) {
    bn.c(se_NoncurrentVersionExpiration(input[_NVE], context).n(_NVE));
  }
  if (input[_AIMU] != null) {
    bn.c(se_AbortIncompleteMultipartUpload(input[_AIMU], context).n(_AIMU));
  }
  return bn;
};

/**
 * serializeAws_restXmlLifecycleRuleAndOperator
 */
const se_LifecycleRuleAndOperator = (input: LifecycleRuleAndOperator, context: __SerdeContext): any => {
  const bn = new __XmlNode(_LRAO);
  bn.cc(input, _Pre);
  bn.lc(input, "Tags", "Tags", () => se_S3TagSet(input[_T]!, context));
  if (input[_OSGT] != null) {
    bn.c(__XmlNode.of(_OSGTB, String(input[_OSGT])).n(_OSGT));
  }
  if (input[_OSLT] != null) {
    bn.c(__XmlNode.of(_OSLTB, String(input[_OSLT])).n(_OSLT));
  }
  return bn;
};

/**
 * serializeAws_restXmlLifecycleRuleFilter
 */
const se_LifecycleRuleFilter = (input: LifecycleRuleFilter, context: __SerdeContext): any => {
  const bn = new __XmlNode(_LRF);
  bn.cc(input, _Pre);
  if (input[_Tag] != null) {
    bn.c(se_S3Tag(input[_Tag], context).n(_Tag));
  }
  if (input[_An] != null) {
    bn.c(se_LifecycleRuleAndOperator(input[_An], context).n(_An));
  }
  if (input[_OSGT] != null) {
    bn.c(__XmlNode.of(_OSGTB, String(input[_OSGT])).n(_OSGT));
  }
  if (input[_OSLT] != null) {
    bn.c(__XmlNode.of(_OSLTB, String(input[_OSLT])).n(_OSLT));
  }
  return bn;
};

/**
 * serializeAws_restXmlLifecycleRules
 */
const se_LifecycleRules = (input: LifecycleRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_LifecycleRule(entry, context);
      return n.n(_Rul);
    });
};

/**
 * serializeAws_restXmlMatchAnyPrefix
 */
const se_MatchAnyPrefix = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_Pre, entry);
      return n.n(_Pre);
    });
};

/**
 * serializeAws_restXmlMatchAnySuffix
 */
const se_MatchAnySuffix = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_Su, entry);
      return n.n(_Su);
    });
};

/**
 * serializeAws_restXmlMatchAnyTag
 */
const se_MatchAnyTag = (input: S3Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_S3Tag(entry, context);
      return n.n(_Tag);
    });
};

/**
 * serializeAws_restXmlMatchObjectAge
 */
const se_MatchObjectAge = (input: MatchObjectAge, context: __SerdeContext): any => {
  const bn = new __XmlNode(_MOA);
  if (input[_DGT] != null) {
    bn.c(__XmlNode.of(_OAV, String(input[_DGT])).n(_DGT));
  }
  if (input[_DLT] != null) {
    bn.c(__XmlNode.of(_OAV, String(input[_DLT])).n(_DLT));
  }
  return bn;
};

/**
 * serializeAws_restXmlMatchObjectSize
 */
const se_MatchObjectSize = (input: MatchObjectSize, context: __SerdeContext): any => {
  const bn = new __XmlNode(_MOS);
  if (input[_BGT] != null) {
    bn.c(__XmlNode.of(_OSV, String(input[_BGT])).n(_BGT));
  }
  if (input[_BLT] != null) {
    bn.c(__XmlNode.of(_OSV, String(input[_BLT])).n(_BLT));
  }
  return bn;
};

/**
 * serializeAws_restXmlMetrics
 */
const se_Metrics = (input: Metrics, context: __SerdeContext): any => {
  const bn = new __XmlNode(_Met);
  if (input[_St] != null) {
    bn.c(__XmlNode.of(_MS, input[_St]).n(_St));
  }
  if (input[_ETv] != null) {
    bn.c(se_ReplicationTimeValue(input[_ETv], context).n(_ETv));
  }
  return bn;
};

/**
 * serializeAws_restXmlMultiRegionAccessPointRoute
 */
const se_MultiRegionAccessPointRoute = (input: MultiRegionAccessPointRoute, context: __SerdeContext): any => {
  const bn = new __XmlNode(_MRAPR);
  if (input[_B] != null) {
    bn.c(__XmlNode.of(_BN, input[_B]).n(_B));
  }
  if (input[_Reg] != null) {
    bn.c(__XmlNode.of(_RN, input[_Reg]).n(_Reg));
  }
  if (input[_TDP] != null) {
    bn.c(__XmlNode.of(_TDP, String(input[_TDP])).n(_TDP));
  }
  return bn;
};

/**
 * serializeAws_restXmlNoncurrentVersionExpiration
 */
const se_NoncurrentVersionExpiration = (input: NoncurrentVersionExpiration, context: __SerdeContext): any => {
  const bn = new __XmlNode(_NVE);
  if (input[_ND] != null) {
    bn.c(__XmlNode.of(_Day, String(input[_ND])).n(_ND));
  }
  if (input[_NNV] != null) {
    bn.c(__XmlNode.of(_NVC, String(input[_NNV])).n(_NNV));
  }
  return bn;
};

/**
 * serializeAws_restXmlNoncurrentVersionTransition
 */
const se_NoncurrentVersionTransition = (input: NoncurrentVersionTransition, context: __SerdeContext): any => {
  const bn = new __XmlNode(_NVTo);
  if (input[_ND] != null) {
    bn.c(__XmlNode.of(_Day, String(input[_ND])).n(_ND));
  }
  if (input[_SC] != null) {
    bn.c(__XmlNode.of(_TSC, input[_SC]).n(_SC));
  }
  return bn;
};

/**
 * serializeAws_restXmlNoncurrentVersionTransitionList
 */
const se_NoncurrentVersionTransitionList = (input: NoncurrentVersionTransition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_NoncurrentVersionTransition(entry, context);
      return n.n(_NVTo);
    });
};

/**
 * serializeAws_restXmlNonEmptyMaxLength1024StringList
 */
const se_NonEmptyMaxLength1024StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_NEMLSon, entry);
      return n.n(_m);
    });
};

/**
 * serializeAws_restXmlObjectLambdaAllowedFeaturesList
 */
const se_ObjectLambdaAllowedFeaturesList = (input: ObjectLambdaAllowedFeature[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_OLAF, entry);
      return n.n(_AF);
    });
};

/**
 * serializeAws_restXmlObjectLambdaConfiguration
 */
const se_ObjectLambdaConfiguration = (input: ObjectLambdaConfiguration, context: __SerdeContext): any => {
  const bn = new __XmlNode(_OLC);
  if (input[_SAP] != null) {
    bn.c(__XmlNode.of(_OLSAPA, input[_SAP]).n(_SAP));
  }
  if (input[_CWME] != null) {
    bn.c(__XmlNode.of(_Bo, String(input[_CWME])).n(_CWME));
  }
  bn.lc(input, "AllowedFeatures", "AllowedFeatures", () => se_ObjectLambdaAllowedFeaturesList(input[_AFl]!, context));
  bn.lc(input, "TransformationConfigurations", "TransformationConfigurations", () =>
    se_ObjectLambdaTransformationConfigurationsList(input[_TC]!, context)
  );
  return bn;
};

/**
 * serializeAws_restXmlObjectLambdaContentTransformation
 */
const se_ObjectLambdaContentTransformation = (
  input: ObjectLambdaContentTransformation,
  context: __SerdeContext
): any => {
  const bn = new __XmlNode(_OLCT);
  ObjectLambdaContentTransformation.visit(input, {
    AwsLambda: (value) => {
      if (input[_ALw] != null) {
        bn.c(se_AwsLambdaTransformation(value, context).n(_ALw));
      }
    },
    _: (name: string, value: any) => {
      if (!(value instanceof __XmlNode || value instanceof __XmlText)) {
        throw new Error("Unable to serialize unknown union members in XML.");
      }
      bn.c(new __XmlNode(name).c(value));
    },
  });
  return bn;
};

/**
 * serializeAws_restXmlObjectLambdaTransformationConfiguration
 */
const se_ObjectLambdaTransformationConfiguration = (
  input: ObjectLambdaTransformationConfiguration,
  context: __SerdeContext
): any => {
  const bn = new __XmlNode(_OLTC);
  bn.lc(input, "Actions", "Actions", () =>
    se_ObjectLambdaTransformationConfigurationActionsList(input[_Act]!, context)
  );
  if (input[_CTo] != null) {
    bn.c(se_ObjectLambdaContentTransformation(input[_CTo], context).n(_CTo));
  }
  return bn;
};

/**
 * serializeAws_restXmlObjectLambdaTransformationConfigurationActionsList
 */
const se_ObjectLambdaTransformationConfigurationActionsList = (
  input: ObjectLambdaTransformationConfigurationAction[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_OLTCA, entry);
      return n.n(_Acti);
    });
};

/**
 * serializeAws_restXmlObjectLambdaTransformationConfigurationsList
 */
const se_ObjectLambdaTransformationConfigurationsList = (
  input: ObjectLambdaTransformationConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_ObjectLambdaTransformationConfiguration(entry, context);
      return n.n(_TCr);
    });
};

/**
 * serializeAws_restXmlPrefixesList
 */
const se_PrefixesList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_Pre, entry);
      return n.n(_Pre);
    });
};

/**
 * serializeAws_restXmlPrefixLevel
 */
const se_PrefixLevel = (input: PrefixLevel, context: __SerdeContext): any => {
  const bn = new __XmlNode(_PL);
  if (input[_SM] != null) {
    bn.c(se_PrefixLevelStorageMetrics(input[_SM], context).n(_SM));
  }
  return bn;
};

/**
 * serializeAws_restXmlPrefixLevelStorageMetrics
 */
const se_PrefixLevelStorageMetrics = (input: PrefixLevelStorageMetrics, context: __SerdeContext): any => {
  const bn = new __XmlNode(_PLSM);
  if (input[_IE] != null) {
    bn.c(__XmlNode.of(_IE, String(input[_IE])).n(_IE));
  }
  if (input[_SCe] != null) {
    bn.c(se_SelectionCriteria(input[_SCe], context).n(_SCe));
  }
  return bn;
};

/**
 * serializeAws_restXmlPublicAccessBlockConfiguration
 */
const se_PublicAccessBlockConfiguration = (input: PublicAccessBlockConfiguration, context: __SerdeContext): any => {
  const bn = new __XmlNode(_PABC);
  if (input[_BPA] != null) {
    bn.c(__XmlNode.of(_Se, String(input[_BPA])).n(_BPA));
  }
  if (input[_IPA] != null) {
    bn.c(__XmlNode.of(_Se, String(input[_IPA])).n(_IPA));
  }
  if (input[_BPP] != null) {
    bn.c(__XmlNode.of(_Se, String(input[_BPP])).n(_BPP));
  }
  if (input[_RPB] != null) {
    bn.c(__XmlNode.of(_Se, String(input[_RPB])).n(_RPB));
  }
  return bn;
};

/**
 * serializeAws_restXmlPutMultiRegionAccessPointPolicyInput
 */
const se_PutMultiRegionAccessPointPolicyInput = (
  input: PutMultiRegionAccessPointPolicyInput,
  context: __SerdeContext
): any => {
  const bn = new __XmlNode(_PMRAPPI);
  if (input[_N] != null) {
    bn.c(__XmlNode.of(_MRAPN, input[_N]).n(_N));
  }
  bn.cc(input, _Po);
  return bn;
};

/**
 * serializeAws_restXmlRegion
 */
const se_Region = (input: Region, context: __SerdeContext): any => {
  const bn = new __XmlNode(_Reg);
  if (input[_B] != null) {
    bn.c(__XmlNode.of(_BN, input[_B]).n(_B));
  }
  if (input[_BAI] != null) {
    bn.c(__XmlNode.of(_AI, input[_BAI]).n(_BAI));
  }
  return bn;
};

/**
 * serializeAws_restXmlRegionCreationList
 */
const se_RegionCreationList = (input: Region[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_Region(entry, context);
      return n.n(_Reg);
    });
};

/**
 * serializeAws_restXmlRegions
 */
const se_Regions = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_SAWSR, entry);
      return n.n(_Reg);
    });
};

/**
 * serializeAws_restXmlReplicaModifications
 */
const se_ReplicaModifications = (input: ReplicaModifications, context: __SerdeContext): any => {
  const bn = new __XmlNode(_RM);
  if (input[_St] != null) {
    bn.c(__XmlNode.of(_RMS, input[_St]).n(_St));
  }
  return bn;
};

/**
 * serializeAws_restXmlReplicationConfiguration
 */
const se_ReplicationConfiguration = (input: ReplicationConfiguration, context: __SerdeContext): any => {
  const bn = new __XmlNode(_RC);
  bn.cc(input, _Rol);
  bn.lc(input, "Rules", "Rules", () => se_ReplicationRules(input[_Ru]!, context));
  return bn;
};

/**
 * serializeAws_restXmlReplicationRule
 */
const se_ReplicationRule = (input: ReplicationRule, context: __SerdeContext): any => {
  const bn = new __XmlNode(_RR);
  bn.cc(input, _ID);
  if (input[_Pr] != null) {
    bn.c(__XmlNode.of(_Pr, String(input[_Pr])).n(_Pr));
  }
  bn.cc(input, _Pre);
  if (input[_Fil] != null) {
    bn.c(se_ReplicationRuleFilter(input[_Fil], context).n(_Fil));
  }
  if (input[_St] != null) {
    bn.c(__XmlNode.of(_RRS, input[_St]).n(_St));
  }
  if (input[_SSC] != null) {
    bn.c(se_SourceSelectionCriteria(input[_SSC], context).n(_SSC));
  }
  if (input[_EOR] != null) {
    bn.c(se_ExistingObjectReplication(input[_EOR], context).n(_EOR));
  }
  if (input[_Des] != null) {
    bn.c(se_Destination(input[_Des], context).n(_Des));
  }
  if (input[_DMR] != null) {
    bn.c(se_DeleteMarkerReplication(input[_DMR], context).n(_DMR));
  }
  if (input[_B] != null) {
    bn.c(__XmlNode.of(_BIS, input[_B]).n(_B));
  }
  return bn;
};

/**
 * serializeAws_restXmlReplicationRuleAndOperator
 */
const se_ReplicationRuleAndOperator = (input: ReplicationRuleAndOperator, context: __SerdeContext): any => {
  const bn = new __XmlNode(_RRAO);
  bn.cc(input, _Pre);
  bn.lc(input, "Tags", "Tags", () => se_S3TagSet(input[_T]!, context));
  return bn;
};

/**
 * serializeAws_restXmlReplicationRuleFilter
 */
const se_ReplicationRuleFilter = (input: ReplicationRuleFilter, context: __SerdeContext): any => {
  const bn = new __XmlNode(_RRF);
  bn.cc(input, _Pre);
  if (input[_Tag] != null) {
    bn.c(se_S3Tag(input[_Tag], context).n(_Tag));
  }
  if (input[_An] != null) {
    bn.c(se_ReplicationRuleAndOperator(input[_An], context).n(_An));
  }
  return bn;
};

/**
 * serializeAws_restXmlReplicationRules
 */
const se_ReplicationRules = (input: ReplicationRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_ReplicationRule(entry, context);
      return n.n(_Rul);
    });
};

/**
 * serializeAws_restXmlReplicationStatusFilterList
 */
const se_ReplicationStatusFilterList = (input: ReplicationStatus[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_RSe, entry);
      return n.n(_m);
    });
};

/**
 * serializeAws_restXmlReplicationTime
 */
const se_ReplicationTime = (input: ReplicationTime, context: __SerdeContext): any => {
  const bn = new __XmlNode(_RT);
  if (input[_St] != null) {
    bn.c(__XmlNode.of(_RTS, input[_St]).n(_St));
  }
  if (input[_Ti] != null) {
    bn.c(se_ReplicationTimeValue(input[_Ti], context).n(_Ti));
  }
  return bn;
};

/**
 * serializeAws_restXmlReplicationTimeValue
 */
const se_ReplicationTimeValue = (input: ReplicationTimeValue, context: __SerdeContext): any => {
  const bn = new __XmlNode(_RTV);
  if (input[_Mi] != null) {
    bn.c(__XmlNode.of(_Mi, String(input[_Mi])).n(_Mi));
  }
  return bn;
};

/**
 * serializeAws_restXmlRouteList
 */
const se_RouteList = (input: MultiRegionAccessPointRoute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_MultiRegionAccessPointRoute(entry, context);
      return n.n(_Rou);
    });
};

/**
 * serializeAws_restXmlS3AccessControlList
 */
const se_S3AccessControlList = (input: S3AccessControlList, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SACL);
  if (input[_Ow] != null) {
    bn.c(se_S3ObjectOwner(input[_Ow], context).n(_Ow));
  }
  bn.lc(input, "Grants", "Grants", () => se_S3GrantList(input[_Gr]!, context));
  return bn;
};

/**
 * serializeAws_restXmlS3AccessControlPolicy
 */
const se_S3AccessControlPolicy = (input: S3AccessControlPolicy, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SACP);
  if (input[_ACLc] != null) {
    bn.c(se_S3AccessControlList(input[_ACLc], context).n(_ACLc));
  }
  if (input[_CACL] != null) {
    bn.c(__XmlNode.of(_SCACL, input[_CACL]).n(_CACL));
  }
  return bn;
};

/**
 * serializeAws_restXmlS3BucketDestination
 */
const se_S3BucketDestination = (input: S3BucketDestination, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SBD);
  bn.cc(input, _F);
  bn.cc(input, _OSVu);
  bn.cc(input, _AI);
  if (input[_Ar] != null) {
    bn.c(__XmlNode.of(_SBAS, input[_Ar]).n(_Ar));
  }
  bn.cc(input, _Pre);
  if (input[_Enc] != null) {
    bn.c(se_StorageLensDataExportEncryption(input[_Enc], context).n(_Enc));
  }
  return bn;
};

/**
 * serializeAws_restXmlS3CopyObjectOperation
 */
const se_S3CopyObjectOperation = (input: S3CopyObjectOperation, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SCOO);
  if (input[_TR] != null) {
    bn.c(__XmlNode.of(_SROSEBAS, input[_TR]).n(_TR));
  }
  if (input[_CACL] != null) {
    bn.c(__XmlNode.of(_SCACL, input[_CACL]).n(_CACL));
  }
  bn.lc(input, "AccessControlGrants", "AccessControlGrants", () => se_S3GrantList(input[_ACG]!, context));
  if (input[_MDe] != null) {
    bn.c(__XmlNode.of(_SMD, input[_MDe]).n(_MDe));
  }
  if (input[_MSC] != null) {
    bn.c(__XmlNode.of(_TSi, __serializeDateTime(input[_MSC])).n(_MSC));
  }
  if (input[_NOM] != null) {
    bn.c(se_S3ObjectMetadata(input[_NOM], context).n(_NOM));
  }
  bn.lc(input, "NewObjectTagging", "NewObjectTagging", () => se_S3TagSet(input[_NOT]!, context));
  if (input[_RL] != null) {
    bn.c(__XmlNode.of(_NEMLSonm, input[_RL]).n(_RL));
  }
  if (input[_RP] != null) {
    bn.c(__XmlNode.of(_Bo, String(input[_RP])).n(_RP));
  }
  if (input[_SC] != null) {
    bn.c(__XmlNode.of(_SSCt, input[_SC]).n(_SC));
  }
  if (input[_UMSC] != null) {
    bn.c(__XmlNode.of(_TSi, __serializeDateTime(input[_UMSC])).n(_UMSC));
  }
  if (input[_SSEAKKI] != null) {
    bn.c(__XmlNode.of(_KKAS, input[_SSEAKKI]).n(_SSEAKKI));
  }
  if (input[_TKP] != null) {
    bn.c(__XmlNode.of(_NEMLSon, input[_TKP]).n(_TKP));
  }
  if (input[_OLLHS] != null) {
    bn.c(__XmlNode.of(_SOLLHS, input[_OLLHS]).n(_OLLHS));
  }
  if (input[_OLM] != null) {
    bn.c(__XmlNode.of(_SOLM, input[_OLM]).n(_OLM));
  }
  if (input[_OLRUD] != null) {
    bn.c(__XmlNode.of(_TSi, __serializeDateTime(input[_OLRUD])).n(_OLRUD));
  }
  if (input[_BKE] != null) {
    bn.c(__XmlNode.of(_Bo, String(input[_BKE])).n(_BKE));
  }
  if (input[_CAh] != null) {
    bn.c(__XmlNode.of(_SCA, input[_CAh]).n(_CAh));
  }
  return bn;
};

/**
 * serializeAws_restXmlS3DeleteObjectTaggingOperation
 */
const se_S3DeleteObjectTaggingOperation = (input: S3DeleteObjectTaggingOperation, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SDOTO);
  return bn;
};

/**
 * serializeAws_restXmlS3Grant
 */
const se_S3Grant = (input: S3Grant, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SG);
  if (input[_G] != null) {
    bn.c(se_S3Grantee(input[_G], context).n(_G));
  }
  if (input[_P] != null) {
    bn.c(__XmlNode.of(_SPe, input[_P]).n(_P));
  }
  return bn;
};

/**
 * serializeAws_restXmlS3Grantee
 */
const se_S3Grantee = (input: S3Grantee, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SGr);
  if (input[_TI] != null) {
    bn.c(__XmlNode.of(_SGTI, input[_TI]).n(_TI));
  }
  if (input[_Id] != null) {
    bn.c(__XmlNode.of(_NEMLSon, input[_Id]).n(_Id));
  }
  if (input[_DN] != null) {
    bn.c(__XmlNode.of(_NEMLSon, input[_DN]).n(_DN));
  }
  return bn;
};

/**
 * serializeAws_restXmlS3GrantList
 */
const se_S3GrantList = (input: S3Grant[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_S3Grant(entry, context);
      return n.n(_m);
    });
};

/**
 * serializeAws_restXmlS3InitiateRestoreObjectOperation
 */
const se_S3InitiateRestoreObjectOperation = (input: S3InitiateRestoreObjectOperation, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SIROO);
  if (input[_EID] != null) {
    bn.c(__XmlNode.of(_SEID, String(input[_EID])).n(_EID));
  }
  if (input[_GJT] != null) {
    bn.c(__XmlNode.of(_SGJT, input[_GJT]).n(_GJT));
  }
  return bn;
};

/**
 * serializeAws_restXmlS3JobManifestGenerator
 */
const se_S3JobManifestGenerator = (input: S3JobManifestGenerator, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SJMG);
  if (input[_EBO] != null) {
    bn.c(__XmlNode.of(_AI, input[_EBO]).n(_EBO));
  }
  if (input[_SB] != null) {
    bn.c(__XmlNode.of(_SBAS, input[_SB]).n(_SB));
  }
  if (input[_MOL] != null) {
    bn.c(se_S3ManifestOutputLocation(input[_MOL], context).n(_MOL));
  }
  if (input[_Fil] != null) {
    bn.c(se_JobManifestGeneratorFilter(input[_Fil], context).n(_Fil));
  }
  if (input[_EMO] != null) {
    bn.c(__XmlNode.of(_Bo, String(input[_EMO])).n(_EMO));
  }
  return bn;
};

/**
 * serializeAws_restXmlS3ManifestOutputLocation
 */
const se_S3ManifestOutputLocation = (input: S3ManifestOutputLocation, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SMOL);
  if (input[_EMBO] != null) {
    bn.c(__XmlNode.of(_AI, input[_EMBO]).n(_EMBO));
  }
  if (input[_B] != null) {
    bn.c(__XmlNode.of(_SBAS, input[_B]).n(_B));
  }
  if (input[_MP] != null) {
    bn.c(__XmlNode.of(_MPS, input[_MP]).n(_MP));
  }
  if (input[_ME] != null) {
    bn.c(se_GeneratedManifestEncryption(input[_ME], context).n(_ME));
  }
  if (input[_MF] != null) {
    bn.c(__XmlNode.of(_GMF, input[_MF]).n(_MF));
  }
  return bn;
};

/**
 * serializeAws_restXmlS3ObjectLockLegalHold
 */
const se_S3ObjectLockLegalHold = (input: S3ObjectLockLegalHold, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SOLLH);
  if (input[_St] != null) {
    bn.c(__XmlNode.of(_SOLLHS, input[_St]).n(_St));
  }
  return bn;
};

/**
 * serializeAws_restXmlS3ObjectMetadata
 */
const se_S3ObjectMetadata = (input: S3ObjectMetadata, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SOM);
  if (input[_CC] != null) {
    bn.c(__XmlNode.of(_NEMLSon, input[_CC]).n(_CC));
  }
  if (input[_CDo] != null) {
    bn.c(__XmlNode.of(_NEMLSon, input[_CDo]).n(_CDo));
  }
  if (input[_CE] != null) {
    bn.c(__XmlNode.of(_NEMLSon, input[_CE]).n(_CE));
  }
  if (input[_CL] != null) {
    bn.c(__XmlNode.of(_NEMLSon, input[_CL]).n(_CL));
  }
  bn.lc(input, "UserMetadata", "UserMetadata", () => se_S3UserMetadata(input[_UM]!, context));
  if (input[_CLo] != null) {
    bn.c(__XmlNode.of(_SCL, String(input[_CLo])).n(_CLo));
  }
  if (input[_CMD] != null) {
    bn.c(__XmlNode.of(_NEMLSon, input[_CMD]).n(_CMD));
  }
  if (input[_CTon] != null) {
    bn.c(__XmlNode.of(_NEMLSon, input[_CTon]).n(_CTon));
  }
  if (input[_HED] != null) {
    bn.c(__XmlNode.of(_TSi, __serializeDateTime(input[_HED])).n(_HED));
  }
  if (input[_RCe] != null) {
    bn.c(__XmlNode.of(_Bo, String(input[_RCe])).n(_RCe));
  }
  if (input[_SSEA] != null) {
    bn.c(__XmlNode.of(_SSSEA, input[_SSEA]).n(_SSEA));
  }
  return bn;
};

/**
 * serializeAws_restXmlS3ObjectOwner
 */
const se_S3ObjectOwner = (input: S3ObjectOwner, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SOO);
  if (input[_ID] != null) {
    bn.c(__XmlNode.of(_NEMLSon, input[_ID]).n(_ID));
  }
  if (input[_DN] != null) {
    bn.c(__XmlNode.of(_NEMLSon, input[_DN]).n(_DN));
  }
  return bn;
};

/**
 * serializeAws_restXmlS3ReplicateObjectOperation
 */
const se_S3ReplicateObjectOperation = (input: S3ReplicateObjectOperation, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SROO);
  return bn;
};

/**
 * serializeAws_restXmlS3Retention
 */
const se_S3Retention = (input: S3Retention, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SR);
  if (input[_RUD] != null) {
    bn.c(__XmlNode.of(_TSi, __serializeDateTime(input[_RUD])).n(_RUD));
  }
  if (input[_Mo] != null) {
    bn.c(__XmlNode.of(_SOLRM, input[_Mo]).n(_Mo));
  }
  return bn;
};

/**
 * serializeAws_restXmlS3SetObjectAclOperation
 */
const se_S3SetObjectAclOperation = (input: S3SetObjectAclOperation, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SSOAO);
  if (input[_ACP] != null) {
    bn.c(se_S3AccessControlPolicy(input[_ACP], context).n(_ACP));
  }
  return bn;
};

/**
 * serializeAws_restXmlS3SetObjectLegalHoldOperation
 */
const se_S3SetObjectLegalHoldOperation = (input: S3SetObjectLegalHoldOperation, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SSOLHO);
  if (input[_LH] != null) {
    bn.c(se_S3ObjectLockLegalHold(input[_LH], context).n(_LH));
  }
  return bn;
};

/**
 * serializeAws_restXmlS3SetObjectRetentionOperation
 */
const se_S3SetObjectRetentionOperation = (input: S3SetObjectRetentionOperation, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SSORO);
  if (input[_BGR] != null) {
    bn.c(__XmlNode.of(_Bo, String(input[_BGR])).n(_BGR));
  }
  if (input[_Ret] != null) {
    bn.c(se_S3Retention(input[_Ret], context).n(_Ret));
  }
  return bn;
};

/**
 * serializeAws_restXmlS3SetObjectTaggingOperation
 */
const se_S3SetObjectTaggingOperation = (input: S3SetObjectTaggingOperation, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SSOTO);
  bn.lc(input, "TagSet", "TagSet", () => se_S3TagSet(input[_TS]!, context));
  return bn;
};

/**
 * serializeAws_restXmlS3Tag
 */
const se_S3Tag = (input: S3Tag, context: __SerdeContext): any => {
  const bn = new __XmlNode(_ST);
  if (input[_K] != null) {
    bn.c(__XmlNode.of(_TKS, input[_K]).n(_K));
  }
  if (input[_V] != null) {
    bn.c(__XmlNode.of(_TVS, input[_V]).n(_V));
  }
  return bn;
};

/**
 * serializeAws_restXmlS3TagSet
 */
const se_S3TagSet = (input: S3Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_S3Tag(entry, context);
      return n.n(_m);
    });
};

/**
 * serializeAws_restXmlS3UserMetadata
 */
const se_S3UserMetadata = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.keys(input)
    .filter((key) => input[key as keyof typeof input] != null)
    .map((key) => {
      const entryNode = new __XmlNode("entry");
      const keyNode = __XmlNode.of(_NEMLSon, key).n("key");
      entryNode.c(keyNode);
      let n;
      n = __XmlNode.of(_MLS, input[key as keyof typeof input]!);
      entryNode.c(n.n(_v));
      return entryNode;
    });
};

/**
 * serializeAws_restXmlScope
 */
const se_Scope = (input: Scope, context: __SerdeContext): any => {
  const bn = new __XmlNode(_S);
  bn.lc(input, "Prefixes", "Prefixes", () => se_PrefixesList(input[_Pref]!, context));
  bn.lc(input, "Permissions", "Permissions", () => se_ScopePermissionList(input[_Pe]!, context));
  return bn;
};

/**
 * serializeAws_restXmlScopePermissionList
 */
const se_ScopePermissionList = (input: ScopePermission[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_SPc, entry);
      return n.n(_P);
    });
};

/**
 * serializeAws_restXmlSelectionCriteria
 */
const se_SelectionCriteria = (input: SelectionCriteria, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SCe);
  if (input[_Del] != null) {
    bn.c(__XmlNode.of(_SLPLD, input[_Del]).n(_Del));
  }
  if (input[_MDa] != null) {
    bn.c(__XmlNode.of(_SLPLMD, String(input[_MDa])).n(_MDa));
  }
  if (input[_MSBP] != null) {
    bn.c(__XmlNode.of(_MSBP, String(input[_MSBP])).n(_MSBP));
  }
  return bn;
};

/**
 * serializeAws_restXmlSourceSelectionCriteria
 */
const se_SourceSelectionCriteria = (input: SourceSelectionCriteria, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SSC);
  if (input[_SKEO] != null) {
    bn.c(se_SseKmsEncryptedObjects(input[_SKEO], context).n(_SKEO));
  }
  if (input[_RM] != null) {
    bn.c(se_ReplicaModifications(input[_RM], context).n(_RM));
  }
  return bn;
};

/**
 * serializeAws_restXmlSSEKMS
 */
const se_SSEKMS = (input: SSEKMS, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SK);
  if (input[_KI] != null) {
    bn.c(__XmlNode.of(_SSEKMSKI, input[_KI]).n(_KI));
  }
  return bn;
};

/**
 * serializeAws_restXmlSseKmsEncryptedObjects
 */
const se_SseKmsEncryptedObjects = (input: SseKmsEncryptedObjects, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SKEO);
  if (input[_St] != null) {
    bn.c(__XmlNode.of(_SKEOS, input[_St]).n(_St));
  }
  return bn;
};

/**
 * serializeAws_restXmlSSEKMSEncryption
 */
const se_SSEKMSEncryption = (input: SSEKMSEncryption, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SK);
  if (input[_KI] != null) {
    bn.c(__XmlNode.of(_KKAS, input[_KI]).n(_KI));
  }
  return bn;
};

/**
 * serializeAws_restXmlSSES3
 */
const se_SSES3 = (input: SSES3, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SS);
  return bn;
};

/**
 * serializeAws_restXmlSSES3Encryption
 */
const se_SSES3Encryption = (input: SSES3Encryption, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SS);
  return bn;
};

/**
 * serializeAws_restXmlStorageClassList
 */
const se_StorageClassList = (input: S3StorageClass[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_SSCt, entry);
      return n.n(_m);
    });
};

/**
 * serializeAws_restXmlStorageLensAwsOrg
 */
const se_StorageLensAwsOrg = (input: StorageLensAwsOrg, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SLAO);
  if (input[_Ar] != null) {
    bn.c(__XmlNode.of(_AOA, input[_Ar]).n(_Ar));
  }
  return bn;
};

/**
 * serializeAws_restXmlStorageLensConfiguration
 */
const se_StorageLensConfiguration = (input: StorageLensConfiguration, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SLC);
  if (input[_Id_] != null) {
    bn.c(__XmlNode.of(_CI, input[_Id_]).n(_Id_));
  }
  if (input[_AL] != null) {
    bn.c(se_AccountLevel(input[_AL], context).n(_AL));
  }
  if (input[_I] != null) {
    bn.c(se_Include(input[_I], context).n(_I));
  }
  if (input[_Ex] != null) {
    bn.c(se__Exclude(input[_Ex], context).n(_Ex));
  }
  if (input[_DE] != null) {
    bn.c(se_StorageLensDataExport(input[_DE], context).n(_DE));
  }
  if (input[_IE] != null) {
    bn.c(__XmlNode.of(_IE, String(input[_IE])).n(_IE));
  }
  if (input[_AOw] != null) {
    bn.c(se_StorageLensAwsOrg(input[_AOw], context).n(_AOw));
  }
  bn.cc(input, _SLA);
  return bn;
};

/**
 * serializeAws_restXmlStorageLensDataExport
 */
const se_StorageLensDataExport = (input: StorageLensDataExport, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SLDE);
  if (input[_SBD] != null) {
    bn.c(se_S3BucketDestination(input[_SBD], context).n(_SBD));
  }
  if (input[_CWM] != null) {
    bn.c(se_CloudWatchMetrics(input[_CWM], context).n(_CWM));
  }
  return bn;
};

/**
 * serializeAws_restXmlStorageLensDataExportEncryption
 */
const se_StorageLensDataExportEncryption = (input: StorageLensDataExportEncryption, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SLDEE);
  if (input[_SSES] != null) {
    bn.c(se_SSES3(input[_SSES], context).n(_SS));
  }
  if (input[_SSEKMS] != null) {
    bn.c(se_SSEKMS(input[_SSEKMS], context).n(_SK));
  }
  return bn;
};

/**
 * serializeAws_restXmlStorageLensGroup
 */
const se_StorageLensGroup = (input: StorageLensGroup, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SLG);
  if (input[_N] != null) {
    bn.c(__XmlNode.of(_SLGN, input[_N]).n(_N));
  }
  if (input[_Fil] != null) {
    bn.c(se_StorageLensGroupFilter(input[_Fil], context).n(_Fil));
  }
  bn.cc(input, _SLGA);
  return bn;
};

/**
 * serializeAws_restXmlStorageLensGroupAndOperator
 */
const se_StorageLensGroupAndOperator = (input: StorageLensGroupAndOperator, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SLGAO);
  bn.lc(input, "MatchAnyPrefix", "MatchAnyPrefix", () => se_MatchAnyPrefix(input[_MAP]!, context));
  bn.lc(input, "MatchAnySuffix", "MatchAnySuffix", () => se_MatchAnySuffix(input[_MAS]!, context));
  bn.lc(input, "MatchAnyTag", "MatchAnyTag", () => se_MatchAnyTag(input[_MAT]!, context));
  if (input[_MOA] != null) {
    bn.c(se_MatchObjectAge(input[_MOA], context).n(_MOA));
  }
  if (input[_MOS] != null) {
    bn.c(se_MatchObjectSize(input[_MOS], context).n(_MOS));
  }
  return bn;
};

/**
 * serializeAws_restXmlStorageLensGroupFilter
 */
const se_StorageLensGroupFilter = (input: StorageLensGroupFilter, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SLGF);
  bn.lc(input, "MatchAnyPrefix", "MatchAnyPrefix", () => se_MatchAnyPrefix(input[_MAP]!, context));
  bn.lc(input, "MatchAnySuffix", "MatchAnySuffix", () => se_MatchAnySuffix(input[_MAS]!, context));
  bn.lc(input, "MatchAnyTag", "MatchAnyTag", () => se_MatchAnyTag(input[_MAT]!, context));
  if (input[_MOA] != null) {
    bn.c(se_MatchObjectAge(input[_MOA], context).n(_MOA));
  }
  if (input[_MOS] != null) {
    bn.c(se_MatchObjectSize(input[_MOS], context).n(_MOS));
  }
  if (input[_An] != null) {
    bn.c(se_StorageLensGroupAndOperator(input[_An], context).n(_An));
  }
  if (input[_Or_] != null) {
    bn.c(se_StorageLensGroupOrOperator(input[_Or_], context).n(_Or_));
  }
  return bn;
};

/**
 * serializeAws_restXmlStorageLensGroupLevel
 */
const se_StorageLensGroupLevel = (input: StorageLensGroupLevel, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SLGLt);
  if (input[_SCe] != null) {
    bn.c(se_StorageLensGroupLevelSelectionCriteria(input[_SCe], context).n(_SCe));
  }
  return bn;
};

/**
 * serializeAws_restXmlStorageLensGroupLevelExclude
 */
const se_StorageLensGroupLevelExclude = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_SLGA, entry);
      return n.n(_Ar);
    });
};

/**
 * serializeAws_restXmlStorageLensGroupLevelInclude
 */
const se_StorageLensGroupLevelInclude = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_SLGA, entry);
      return n.n(_Ar);
    });
};

/**
 * serializeAws_restXmlStorageLensGroupLevelSelectionCriteria
 */
const se_StorageLensGroupLevelSelectionCriteria = (
  input: StorageLensGroupLevelSelectionCriteria,
  context: __SerdeContext
): any => {
  const bn = new __XmlNode(_SLGLSC);
  bn.lc(input, "Include", "Include", () => se_StorageLensGroupLevelInclude(input[_I]!, context));
  bn.lc(input, "Exclude", "Exclude", () => se_StorageLensGroupLevelExclude(input[_Ex]!, context));
  return bn;
};

/**
 * serializeAws_restXmlStorageLensGroupOrOperator
 */
const se_StorageLensGroupOrOperator = (input: StorageLensGroupOrOperator, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SLGOO);
  bn.lc(input, "MatchAnyPrefix", "MatchAnyPrefix", () => se_MatchAnyPrefix(input[_MAP]!, context));
  bn.lc(input, "MatchAnySuffix", "MatchAnySuffix", () => se_MatchAnySuffix(input[_MAS]!, context));
  bn.lc(input, "MatchAnyTag", "MatchAnyTag", () => se_MatchAnyTag(input[_MAT]!, context));
  if (input[_MOA] != null) {
    bn.c(se_MatchObjectAge(input[_MOA], context).n(_MOA));
  }
  if (input[_MOS] != null) {
    bn.c(se_MatchObjectSize(input[_MOS], context).n(_MOS));
  }
  return bn;
};

/**
 * serializeAws_restXmlStorageLensTag
 */
const se_StorageLensTag = (input: StorageLensTag, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SLT);
  if (input[_K] != null) {
    bn.c(__XmlNode.of(_TKS, input[_K]).n(_K));
  }
  if (input[_V] != null) {
    bn.c(__XmlNode.of(_TVS, input[_V]).n(_V));
  }
  return bn;
};

/**
 * serializeAws_restXmlStorageLensTags
 */
const se_StorageLensTags = (input: StorageLensTag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_StorageLensTag(entry, context);
      return n.n(_Tag);
    });
};

/**
 * serializeAws_restXmlTag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  const bn = new __XmlNode(_Tag);
  if (input[_K] != null) {
    bn.c(__XmlNode.of(_TKS, input[_K]).n(_K));
  }
  if (input[_V] != null) {
    bn.c(__XmlNode.of(_TVS, input[_V]).n(_V));
  }
  return bn;
};

/**
 * serializeAws_restXmlTagging
 */
const se_Tagging = (input: Tagging, context: __SerdeContext): any => {
  const bn = new __XmlNode(_Tagg);
  bn.lc(input, "TagSet", "TagSet", () => se_S3TagSet(input[_TS]!, context));
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
 * serializeAws_restXmlTransition
 */
const se_Transition = (input: Transition, context: __SerdeContext): any => {
  const bn = new __XmlNode(_Tra);
  if (input[_Da] != null) {
    bn.c(__XmlNode.of(_Da, __serializeDateTime(input[_Da])).n(_Da));
  }
  if (input[_Day] != null) {
    bn.c(__XmlNode.of(_Day, String(input[_Day])).n(_Day));
  }
  if (input[_SC] != null) {
    bn.c(__XmlNode.of(_TSC, input[_SC]).n(_SC));
  }
  return bn;
};

/**
 * serializeAws_restXmlTransitionList
 */
const se_TransitionList = (input: Transition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_Transition(entry, context);
      return n.n(_Tra);
    });
};

/**
 * serializeAws_restXmlUserArguments
 */
const se_UserArguments = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.keys(input)
    .filter((key) => input[key as keyof typeof input] != null)
    .map((key) => {
      const entryNode = new __XmlNode("entry");
      const keyNode = __XmlNode.of(_NEMLS, key).n("key");
      entryNode.c(keyNode);
      let n;
      n = __XmlNode.of(_MLS, input[key as keyof typeof input]!);
      entryNode.c(n.n(_v));
      return entryNode;
    });
};

/**
 * serializeAws_restXmlVersioningConfiguration
 */
const se_VersioningConfiguration = (input: VersioningConfiguration, context: __SerdeContext): any => {
  const bn = new __XmlNode(_VCe);
  if (input[_MFAD] != null) {
    bn.c(__XmlNode.of(_MFAD, input[_MFAD]).n(_MD));
  }
  if (input[_St] != null) {
    bn.c(__XmlNode.of(_BVS, input[_St]).n(_St));
  }
  return bn;
};

/**
 * serializeAws_restXmlVpcConfiguration
 */
const se_VpcConfiguration = (input: VpcConfiguration, context: __SerdeContext): any => {
  const bn = new __XmlNode(_VC);
  bn.cc(input, _VI);
  return bn;
};

/**
 * deserializeAws_restXmlAbortIncompleteMultipartUpload
 */
const de_AbortIncompleteMultipartUpload = (output: any, context: __SerdeContext): AbortIncompleteMultipartUpload => {
  const contents: any = {};
  if (output[_DAI] != null) {
    contents[_DAI] = __strictParseInt32(output[_DAI]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlAccessControlTranslation
 */
const de_AccessControlTranslation = (output: any, context: __SerdeContext): AccessControlTranslation => {
  const contents: any = {};
  if (output[_Ow] != null) {
    contents[_Ow] = __expectString(output[_Ow]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlAccessGrantsInstancesList
 */
const de_AccessGrantsInstancesList = (output: any, context: __SerdeContext): ListAccessGrantsInstanceEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListAccessGrantsInstanceEntry(entry, context);
    });
};

/**
 * deserializeAws_restXmlAccessGrantsList
 */
const de_AccessGrantsList = (output: any, context: __SerdeContext): ListAccessGrantEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListAccessGrantEntry(entry, context);
    });
};

/**
 * deserializeAws_restXmlAccessGrantsLocationConfiguration
 */
const de_AccessGrantsLocationConfiguration = (
  output: any,
  context: __SerdeContext
): AccessGrantsLocationConfiguration => {
  const contents: any = {};
  if (output[_SSP] != null) {
    contents[_SSP] = __expectString(output[_SSP]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlAccessGrantsLocationsList
 */
const de_AccessGrantsLocationsList = (output: any, context: __SerdeContext): ListAccessGrantsLocationsEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListAccessGrantsLocationsEntry(entry, context);
    });
};

/**
 * deserializeAws_restXmlAccessPoint
 */
const de_AccessPoint = (output: any, context: __SerdeContext): AccessPoint => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_NO] != null) {
    contents[_NO] = __expectString(output[_NO]);
  }
  if (output[_VC] != null) {
    contents[_VC] = de_VpcConfiguration(output[_VC], context);
  }
  if (output[_B] != null) {
    contents[_B] = __expectString(output[_B]);
  }
  if (output[_APA] != null) {
    contents[_APA] = __expectString(output[_APA]);
  }
  if (output[_A] != null) {
    contents[_A] = __expectString(output[_A]);
  }
  if (output[_BAI] != null) {
    contents[_BAI] = __expectString(output[_BAI]);
  }
  if (output[_DSI] != null) {
    contents[_DSI] = __expectString(output[_DSI]);
  }
  if (output[_DST] != null) {
    contents[_DST] = __expectString(output[_DST]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlAccessPointList
 */
const de_AccessPointList = (output: any, context: __SerdeContext): AccessPoint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AccessPoint(entry, context);
    });
};

/**
 * deserializeAws_restXmlAccountLevel
 */
const de_AccountLevel = (output: any, context: __SerdeContext): AccountLevel => {
  const contents: any = {};
  if (output[_AM] != null) {
    contents[_AM] = de_ActivityMetrics(output[_AM], context);
  }
  if (output[_BL] != null) {
    contents[_BL] = de_BucketLevel(output[_BL], context);
  }
  if (output[_ACOM] != null) {
    contents[_ACOM] = de_AdvancedCostOptimizationMetrics(output[_ACOM], context);
  }
  if (output[_ADPM] != null) {
    contents[_ADPM] = de_AdvancedDataProtectionMetrics(output[_ADPM], context);
  }
  if (output[_DSCM] != null) {
    contents[_DSCM] = de_DetailedStatusCodesMetrics(output[_DSCM], context);
  }
  if (output[_SLGLt] != null) {
    contents[_SLGLt] = de_StorageLensGroupLevel(output[_SLGLt], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlActivityMetrics
 */
const de_ActivityMetrics = (output: any, context: __SerdeContext): ActivityMetrics => {
  const contents: any = {};
  if (output[_IE] != null) {
    contents[_IE] = __parseBoolean(output[_IE]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlAdvancedCostOptimizationMetrics
 */
const de_AdvancedCostOptimizationMetrics = (output: any, context: __SerdeContext): AdvancedCostOptimizationMetrics => {
  const contents: any = {};
  if (output[_IE] != null) {
    contents[_IE] = __parseBoolean(output[_IE]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlAdvancedDataProtectionMetrics
 */
const de_AdvancedDataProtectionMetrics = (output: any, context: __SerdeContext): AdvancedDataProtectionMetrics => {
  const contents: any = {};
  if (output[_IE] != null) {
    contents[_IE] = __parseBoolean(output[_IE]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlAsyncErrorDetails
 */
const de_AsyncErrorDetails = (output: any, context: __SerdeContext): AsyncErrorDetails => {
  const contents: any = {};
  if (output[_Co] != null) {
    contents[_Co] = __expectString(output[_Co]);
  }
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  if (output[_Res] != null) {
    contents[_Res] = __expectString(output[_Res]);
  }
  if (output[_RI] != null) {
    contents[_RI] = __expectString(output[_RI]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlAsyncOperation
 */
const de_AsyncOperation = (output: any, context: __SerdeContext): AsyncOperation => {
  const contents: any = {};
  if (output[_CTr] != null) {
    contents[_CTr] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CTr]));
  }
  if (output[_O] != null) {
    contents[_O] = __expectString(output[_O]);
  }
  if (output[_RTARN] != null) {
    contents[_RTARN] = __expectString(output[_RTARN]);
  }
  if (output[_RPe] != null) {
    contents[_RPe] = de_AsyncRequestParameters(output[_RPe], context);
  }
  if (output[_RSeq] != null) {
    contents[_RSeq] = __expectString(output[_RSeq]);
  }
  if (output[_RD] != null) {
    contents[_RD] = de_AsyncResponseDetails(output[_RD], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlAsyncRequestParameters
 */
const de_AsyncRequestParameters = (output: any, context: __SerdeContext): AsyncRequestParameters => {
  const contents: any = {};
  if (output[_CMRAPR] != null) {
    contents[_CMRAPR] = de_CreateMultiRegionAccessPointInput(output[_CMRAPR], context);
  }
  if (output[_DMRAPR] != null) {
    contents[_DMRAPR] = de_DeleteMultiRegionAccessPointInput(output[_DMRAPR], context);
  }
  if (output[_PMRAPPR] != null) {
    contents[_PMRAPPR] = de_PutMultiRegionAccessPointPolicyInput(output[_PMRAPPR], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlAsyncResponseDetails
 */
const de_AsyncResponseDetails = (output: any, context: __SerdeContext): AsyncResponseDetails => {
  const contents: any = {};
  if (output[_MRAPD] != null) {
    contents[_MRAPD] = de_MultiRegionAccessPointsAsyncResponse(output[_MRAPD], context);
  }
  if (output[_ED] != null) {
    contents[_ED] = de_AsyncErrorDetails(output[_ED], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlAwsLambdaTransformation
 */
const de_AwsLambdaTransformation = (output: any, context: __SerdeContext): AwsLambdaTransformation => {
  const contents: any = {};
  if (output[_FA] != null) {
    contents[_FA] = __expectString(output[_FA]);
  }
  if (output[_FP] != null) {
    contents[_FP] = __expectString(output[_FP]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlBucketLevel
 */
const de_BucketLevel = (output: any, context: __SerdeContext): BucketLevel => {
  const contents: any = {};
  if (output[_AM] != null) {
    contents[_AM] = de_ActivityMetrics(output[_AM], context);
  }
  if (output[_PL] != null) {
    contents[_PL] = de_PrefixLevel(output[_PL], context);
  }
  if (output[_ACOM] != null) {
    contents[_ACOM] = de_AdvancedCostOptimizationMetrics(output[_ACOM], context);
  }
  if (output[_ADPM] != null) {
    contents[_ADPM] = de_AdvancedDataProtectionMetrics(output[_ADPM], context);
  }
  if (output[_DSCM] != null) {
    contents[_DSCM] = de_DetailedStatusCodesMetrics(output[_DSCM], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlBuckets
 */
const de_Buckets = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlCallerAccessGrantsList
 */
const de_CallerAccessGrantsList = (output: any, context: __SerdeContext): ListCallerAccessGrantsEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListCallerAccessGrantsEntry(entry, context);
    });
};

/**
 * deserializeAws_restXmlCloudWatchMetrics
 */
const de_CloudWatchMetrics = (output: any, context: __SerdeContext): CloudWatchMetrics => {
  const contents: any = {};
  if (output[_IE] != null) {
    contents[_IE] = __parseBoolean(output[_IE]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCreateMultiRegionAccessPointInput
 */
const de_CreateMultiRegionAccessPointInput = (
  output: any,
  context: __SerdeContext
): CreateMultiRegionAccessPointInput => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_PAB] != null) {
    contents[_PAB] = de_PublicAccessBlockConfiguration(output[_PAB], context);
  }
  if (output.Regions === "") {
    contents[_Re] = [];
  } else if (output[_Re] != null && output[_Re][_Reg] != null) {
    contents[_Re] = de_RegionCreationList(__getArrayIfSingleItem(output[_Re][_Reg]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCredentials
 */
const de_Credentials = (output: any, context: __SerdeContext): Credentials => {
  const contents: any = {};
  if (output[_AKI] != null) {
    contents[_AKI] = __expectString(output[_AKI]);
  }
  if (output[_SAK] != null) {
    contents[_SAK] = __expectString(output[_SAK]);
  }
  if (output[_STe] != null) {
    contents[_STe] = __expectString(output[_STe]);
  }
  if (output[_Exp] != null) {
    contents[_Exp] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_Exp]));
  }
  return contents;
};

/**
 * deserializeAws_restXmlDeleteMarkerReplication
 */
const de_DeleteMarkerReplication = (output: any, context: __SerdeContext): DeleteMarkerReplication => {
  const contents: any = {};
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlDeleteMultiRegionAccessPointInput
 */
const de_DeleteMultiRegionAccessPointInput = (
  output: any,
  context: __SerdeContext
): DeleteMultiRegionAccessPointInput => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlDestination
 */
const de_Destination = (output: any, context: __SerdeContext): Destination => {
  const contents: any = {};
  if (output[_Ac] != null) {
    contents[_Ac] = __expectString(output[_Ac]);
  }
  if (output[_B] != null) {
    contents[_B] = __expectString(output[_B]);
  }
  if (output[_RT] != null) {
    contents[_RT] = de_ReplicationTime(output[_RT], context);
  }
  if (output[_ACT] != null) {
    contents[_ACT] = de_AccessControlTranslation(output[_ACT], context);
  }
  if (output[_EC] != null) {
    contents[_EC] = de_EncryptionConfiguration(output[_EC], context);
  }
  if (output[_Met] != null) {
    contents[_Met] = de_Metrics(output[_Met], context);
  }
  if (output[_SC] != null) {
    contents[_SC] = __expectString(output[_SC]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlDetailedStatusCodesMetrics
 */
const de_DetailedStatusCodesMetrics = (output: any, context: __SerdeContext): DetailedStatusCodesMetrics => {
  const contents: any = {};
  if (output[_IE] != null) {
    contents[_IE] = __parseBoolean(output[_IE]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlEncryptionConfiguration
 */
const de_EncryptionConfiguration = (output: any, context: __SerdeContext): EncryptionConfiguration => {
  const contents: any = {};
  if (output[_RKKID] != null) {
    contents[_RKKID] = __expectString(output[_RKKID]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlEndpoints
 */
const de_Endpoints = (output: any, context: __SerdeContext): Record<string, string> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = __expectString(pair["value"]) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restXmlEstablishedMultiRegionAccessPointPolicy
 */
const de_EstablishedMultiRegionAccessPointPolicy = (
  output: any,
  context: __SerdeContext
): EstablishedMultiRegionAccessPointPolicy => {
  const contents: any = {};
  if (output[_Po] != null) {
    contents[_Po] = __expectString(output[_Po]);
  }
  return contents;
};

/**
 * deserializeAws_restXml_Exclude
 */
const de__Exclude = (output: any, context: __SerdeContext): _Exclude => {
  const contents: any = {};
  if (output.Buckets === "") {
    contents[_Bu] = [];
  } else if (output[_Bu] != null && output[_Bu][_Ar] != null) {
    contents[_Bu] = de_Buckets(__getArrayIfSingleItem(output[_Bu][_Ar]), context);
  }
  if (output.Regions === "") {
    contents[_Re] = [];
  } else if (output[_Re] != null && output[_Re][_Reg] != null) {
    contents[_Re] = de_Regions(__getArrayIfSingleItem(output[_Re][_Reg]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlExistingObjectReplication
 */
const de_ExistingObjectReplication = (output: any, context: __SerdeContext): ExistingObjectReplication => {
  const contents: any = {};
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGeneratedManifestEncryption
 */
const de_GeneratedManifestEncryption = (output: any, context: __SerdeContext): GeneratedManifestEncryption => {
  const contents: any = {};
  if (output[_SS] != null) {
    contents[_SSES] = de_SSES3Encryption(output[_SS], context);
  }
  if (output[_SK] != null) {
    contents[_SSEKMS] = de_SSEKMSEncryption(output[_SK], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGrantee
 */
const de_Grantee = (output: any, context: __SerdeContext): Grantee => {
  const contents: any = {};
  if (output[_GT] != null) {
    contents[_GT] = __expectString(output[_GT]);
  }
  if (output[_GI] != null) {
    contents[_GI] = __expectString(output[_GI]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlInclude
 */
const de_Include = (output: any, context: __SerdeContext): Include => {
  const contents: any = {};
  if (output.Buckets === "") {
    contents[_Bu] = [];
  } else if (output[_Bu] != null && output[_Bu][_Ar] != null) {
    contents[_Bu] = de_Buckets(__getArrayIfSingleItem(output[_Bu][_Ar]), context);
  }
  if (output.Regions === "") {
    contents[_Re] = [];
  } else if (output[_Re] != null && output[_Re][_Reg] != null) {
    contents[_Re] = de_Regions(__getArrayIfSingleItem(output[_Re][_Reg]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlJobDescriptor
 */
const de_JobDescriptor = (output: any, context: __SerdeContext): JobDescriptor => {
  const contents: any = {};
  if (output[_JI] != null) {
    contents[_JI] = __expectString(output[_JI]);
  }
  if (output[_CR] != null) {
    contents[_CR] = __parseBoolean(output[_CR]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_JA] != null) {
    contents[_JA] = __expectString(output[_JA]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_M] != null) {
    contents[_M] = de_JobManifest(output[_M], context);
  }
  if (output[_O] != null) {
    contents[_O] = de_JobOperation(output[_O], context);
  }
  if (output[_Pr] != null) {
    contents[_Pr] = __strictParseInt32(output[_Pr]) as number;
  }
  if (output[_PSr] != null) {
    contents[_PSr] = de_JobProgressSummary(output[_PSr], context);
  }
  if (output[_SUR] != null) {
    contents[_SUR] = __expectString(output[_SUR]);
  }
  if (output.FailureReasons === "") {
    contents[_FR] = [];
  } else if (output[_FR] != null && output[_FR][_m] != null) {
    contents[_FR] = de_JobFailureList(__getArrayIfSingleItem(output[_FR][_m]), context);
  }
  if (output[_R] != null) {
    contents[_R] = de_JobReport(output[_R], context);
  }
  if (output[_CTr] != null) {
    contents[_CTr] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CTr]));
  }
  if (output[_TD] != null) {
    contents[_TD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_TD]));
  }
  if (output[_RA] != null) {
    contents[_RA] = __expectString(output[_RA]);
  }
  if (output[_SD] != null) {
    contents[_SD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_SD]));
  }
  if (output[_SCu] != null) {
    contents[_SCu] = __expectString(output[_SCu]);
  }
  if (output.ManifestGenerator === "") {
    // Pass empty tags.
  } else if (output[_MG] != null) {
    contents[_MG] = de_JobManifestGenerator(__expectUnion(output[_MG]), context);
  }
  if (output[_GMD] != null) {
    contents[_GMD] = de_S3GeneratedManifestDescriptor(output[_GMD], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlJobFailure
 */
const de_JobFailure = (output: any, context: __SerdeContext): JobFailure => {
  const contents: any = {};
  if (output[_FC] != null) {
    contents[_FC] = __expectString(output[_FC]);
  }
  if (output[_FRa] != null) {
    contents[_FRa] = __expectString(output[_FRa]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlJobFailureList
 */
const de_JobFailureList = (output: any, context: __SerdeContext): JobFailure[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_JobFailure(entry, context);
    });
};

/**
 * deserializeAws_restXmlJobListDescriptor
 */
const de_JobListDescriptor = (output: any, context: __SerdeContext): JobListDescriptor => {
  const contents: any = {};
  if (output[_JI] != null) {
    contents[_JI] = __expectString(output[_JI]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_O] != null) {
    contents[_O] = __expectString(output[_O]);
  }
  if (output[_Pr] != null) {
    contents[_Pr] = __strictParseInt32(output[_Pr]) as number;
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_CTr] != null) {
    contents[_CTr] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CTr]));
  }
  if (output[_TD] != null) {
    contents[_TD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_TD]));
  }
  if (output[_PSr] != null) {
    contents[_PSr] = de_JobProgressSummary(output[_PSr], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlJobListDescriptorList
 */
const de_JobListDescriptorList = (output: any, context: __SerdeContext): JobListDescriptor[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_JobListDescriptor(entry, context);
    });
};

/**
 * deserializeAws_restXmlJobManifest
 */
const de_JobManifest = (output: any, context: __SerdeContext): JobManifest => {
  const contents: any = {};
  if (output[_Sp] != null) {
    contents[_Sp] = de_JobManifestSpec(output[_Sp], context);
  }
  if (output[_L] != null) {
    contents[_L] = de_JobManifestLocation(output[_L], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlJobManifestFieldList
 */
const de_JobManifestFieldList = (output: any, context: __SerdeContext): JobManifestFieldName[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlJobManifestGenerator
 */
const de_JobManifestGenerator = (output: any, context: __SerdeContext): JobManifestGenerator => {
  if (output[_SJMG] != null) {
    return {
      S3JobManifestGenerator: de_S3JobManifestGenerator(output[_SJMG], context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restXmlJobManifestGeneratorFilter
 */
const de_JobManifestGeneratorFilter = (output: any, context: __SerdeContext): JobManifestGeneratorFilter => {
  const contents: any = {};
  if (output[_EFR] != null) {
    contents[_EFR] = __parseBoolean(output[_EFR]);
  }
  if (output[_CAr] != null) {
    contents[_CAr] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CAr]));
  }
  if (output[_CB] != null) {
    contents[_CB] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CB]));
  }
  if (output.ObjectReplicationStatuses === "") {
    contents[_ORS] = [];
  } else if (output[_ORS] != null && output[_ORS][_m] != null) {
    contents[_ORS] = de_ReplicationStatusFilterList(__getArrayIfSingleItem(output[_ORS][_m]), context);
  }
  if (output[_KNC] != null) {
    contents[_KNC] = de_KeyNameConstraint(output[_KNC], context);
  }
  if (output[_OSGTB] != null) {
    contents[_OSGTB] = __strictParseLong(output[_OSGTB]) as number;
  }
  if (output[_OSLTB] != null) {
    contents[_OSLTB] = __strictParseLong(output[_OSLTB]) as number;
  }
  if (output.MatchAnyStorageClass === "") {
    contents[_MASC] = [];
  } else if (output[_MASC] != null && output[_MASC][_m] != null) {
    contents[_MASC] = de_StorageClassList(__getArrayIfSingleItem(output[_MASC][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlJobManifestLocation
 */
const de_JobManifestLocation = (output: any, context: __SerdeContext): JobManifestLocation => {
  const contents: any = {};
  if (output[_OA] != null) {
    contents[_OA] = __expectString(output[_OA]);
  }
  if (output[_OVI] != null) {
    contents[_OVI] = __expectString(output[_OVI]);
  }
  if (output[_ET] != null) {
    contents[_ET] = __expectString(output[_ET]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlJobManifestSpec
 */
const de_JobManifestSpec = (output: any, context: __SerdeContext): JobManifestSpec => {
  const contents: any = {};
  if (output[_F] != null) {
    contents[_F] = __expectString(output[_F]);
  }
  if (output.Fields === "") {
    contents[_Fi] = [];
  } else if (output[_Fi] != null && output[_Fi][_m] != null) {
    contents[_Fi] = de_JobManifestFieldList(__getArrayIfSingleItem(output[_Fi][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlJobOperation
 */
const de_JobOperation = (output: any, context: __SerdeContext): JobOperation => {
  const contents: any = {};
  if (output[_LI] != null) {
    contents[_LI] = de_LambdaInvokeOperation(output[_LI], context);
  }
  if (output[_SPOC] != null) {
    contents[_SPOC] = de_S3CopyObjectOperation(output[_SPOC], context);
  }
  if (output[_SPOA] != null) {
    contents[_SPOA] = de_S3SetObjectAclOperation(output[_SPOA], context);
  }
  if (output[_SPOT] != null) {
    contents[_SPOT] = de_S3SetObjectTaggingOperation(output[_SPOT], context);
  }
  if (output[_SDOT] != null) {
    contents[_SDOT] = de_S3DeleteObjectTaggingOperation(output[_SDOT], context);
  }
  if (output[_SIRO] != null) {
    contents[_SIRO] = de_S3InitiateRestoreObjectOperation(output[_SIRO], context);
  }
  if (output[_SPOLH] != null) {
    contents[_SPOLH] = de_S3SetObjectLegalHoldOperation(output[_SPOLH], context);
  }
  if (output[_SPOR] != null) {
    contents[_SPOR] = de_S3SetObjectRetentionOperation(output[_SPOR], context);
  }
  if (output[_SRO] != null) {
    contents[_SRO] = de_S3ReplicateObjectOperation(output[_SRO], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlJobProgressSummary
 */
const de_JobProgressSummary = (output: any, context: __SerdeContext): JobProgressSummary => {
  const contents: any = {};
  if (output[_TNOT] != null) {
    contents[_TNOT] = __strictParseLong(output[_TNOT]) as number;
  }
  if (output[_NOTS] != null) {
    contents[_NOTS] = __strictParseLong(output[_NOTS]) as number;
  }
  if (output[_NOTF] != null) {
    contents[_NOTF] = __strictParseLong(output[_NOTF]) as number;
  }
  if (output[_Tim] != null) {
    contents[_Tim] = de_JobTimers(output[_Tim], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlJobReport
 */
const de_JobReport = (output: any, context: __SerdeContext): JobReport => {
  const contents: any = {};
  if (output[_B] != null) {
    contents[_B] = __expectString(output[_B]);
  }
  if (output[_F] != null) {
    contents[_F] = __expectString(output[_F]);
  }
  if (output[_En] != null) {
    contents[_En] = __parseBoolean(output[_En]);
  }
  if (output[_Pre] != null) {
    contents[_Pre] = __expectString(output[_Pre]);
  }
  if (output[_RS] != null) {
    contents[_RS] = __expectString(output[_RS]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlJobTimers
 */
const de_JobTimers = (output: any, context: __SerdeContext): JobTimers => {
  const contents: any = {};
  if (output[_ETIAS] != null) {
    contents[_ETIAS] = __strictParseLong(output[_ETIAS]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlKeyNameConstraint
 */
const de_KeyNameConstraint = (output: any, context: __SerdeContext): KeyNameConstraint => {
  const contents: any = {};
  if (output.MatchAnyPrefix === "") {
    contents[_MAP] = [];
  } else if (output[_MAP] != null && output[_MAP][_m] != null) {
    contents[_MAP] = de_NonEmptyMaxLength1024StringList(__getArrayIfSingleItem(output[_MAP][_m]), context);
  }
  if (output.MatchAnySuffix === "") {
    contents[_MAS] = [];
  } else if (output[_MAS] != null && output[_MAS][_m] != null) {
    contents[_MAS] = de_NonEmptyMaxLength1024StringList(__getArrayIfSingleItem(output[_MAS][_m]), context);
  }
  if (output.MatchAnySubstring === "") {
    contents[_MASa] = [];
  } else if (output[_MASa] != null && output[_MASa][_m] != null) {
    contents[_MASa] = de_NonEmptyMaxLength1024StringList(__getArrayIfSingleItem(output[_MASa][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlLambdaInvokeOperation
 */
const de_LambdaInvokeOperation = (output: any, context: __SerdeContext): LambdaInvokeOperation => {
  const contents: any = {};
  if (output[_FA] != null) {
    contents[_FA] = __expectString(output[_FA]);
  }
  if (output[_ISV] != null) {
    contents[_ISV] = __expectString(output[_ISV]);
  }
  if (output.UserArguments === "") {
    contents[_UA] = {};
  } else if (output[_UA] != null && output[_UA][_e] != null) {
    contents[_UA] = de_UserArguments(__getArrayIfSingleItem(output[_UA][_e]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlLifecycleExpiration
 */
const de_LifecycleExpiration = (output: any, context: __SerdeContext): LifecycleExpiration => {
  const contents: any = {};
  if (output[_Da] != null) {
    contents[_Da] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_Da]));
  }
  if (output[_Day] != null) {
    contents[_Day] = __strictParseInt32(output[_Day]) as number;
  }
  if (output[_EODM] != null) {
    contents[_EODM] = __parseBoolean(output[_EODM]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlLifecycleRule
 */
const de_LifecycleRule = (output: any, context: __SerdeContext): LifecycleRule => {
  const contents: any = {};
  if (output[_Exp] != null) {
    contents[_Exp] = de_LifecycleExpiration(output[_Exp], context);
  }
  if (output[_ID] != null) {
    contents[_ID] = __expectString(output[_ID]);
  }
  if (output[_Fil] != null) {
    contents[_Fil] = de_LifecycleRuleFilter(output[_Fil], context);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output.Transitions === "") {
    contents[_Tr] = [];
  } else if (output[_Tr] != null && output[_Tr][_Tra] != null) {
    contents[_Tr] = de_TransitionList(__getArrayIfSingleItem(output[_Tr][_Tra]), context);
  }
  if (output.NoncurrentVersionTransitions === "") {
    contents[_NVT] = [];
  } else if (output[_NVT] != null && output[_NVT][_NVTo] != null) {
    contents[_NVT] = de_NoncurrentVersionTransitionList(__getArrayIfSingleItem(output[_NVT][_NVTo]), context);
  }
  if (output[_NVE] != null) {
    contents[_NVE] = de_NoncurrentVersionExpiration(output[_NVE], context);
  }
  if (output[_AIMU] != null) {
    contents[_AIMU] = de_AbortIncompleteMultipartUpload(output[_AIMU], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlLifecycleRuleAndOperator
 */
const de_LifecycleRuleAndOperator = (output: any, context: __SerdeContext): LifecycleRuleAndOperator => {
  const contents: any = {};
  if (output[_Pre] != null) {
    contents[_Pre] = __expectString(output[_Pre]);
  }
  if (output.Tags === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_m] != null) {
    contents[_T] = de_S3TagSet(__getArrayIfSingleItem(output[_T][_m]), context);
  }
  if (output[_OSGT] != null) {
    contents[_OSGT] = __strictParseLong(output[_OSGT]) as number;
  }
  if (output[_OSLT] != null) {
    contents[_OSLT] = __strictParseLong(output[_OSLT]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlLifecycleRuleFilter
 */
const de_LifecycleRuleFilter = (output: any, context: __SerdeContext): LifecycleRuleFilter => {
  const contents: any = {};
  if (output[_Pre] != null) {
    contents[_Pre] = __expectString(output[_Pre]);
  }
  if (output[_Tag] != null) {
    contents[_Tag] = de_S3Tag(output[_Tag], context);
  }
  if (output[_An] != null) {
    contents[_An] = de_LifecycleRuleAndOperator(output[_An], context);
  }
  if (output[_OSGT] != null) {
    contents[_OSGT] = __strictParseLong(output[_OSGT]) as number;
  }
  if (output[_OSLT] != null) {
    contents[_OSLT] = __strictParseLong(output[_OSLT]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlLifecycleRules
 */
const de_LifecycleRules = (output: any, context: __SerdeContext): LifecycleRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LifecycleRule(entry, context);
    });
};

/**
 * deserializeAws_restXmlListAccessGrantEntry
 */
const de_ListAccessGrantEntry = (output: any, context: __SerdeContext): ListAccessGrantEntry => {
  const contents: any = {};
  if (output[_CA] != null) {
    contents[_CA] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CA]));
  }
  if (output[_AGI] != null) {
    contents[_AGI] = __expectString(output[_AGI]);
  }
  if (output[_AGA] != null) {
    contents[_AGA] = __expectString(output[_AGA]);
  }
  if (output[_G] != null) {
    contents[_G] = de_Grantee(output[_G], context);
  }
  if (output[_P] != null) {
    contents[_P] = __expectString(output[_P]);
  }
  if (output[_AGLI] != null) {
    contents[_AGLI] = __expectString(output[_AGLI]);
  }
  if (output[_AGLC] != null) {
    contents[_AGLC] = de_AccessGrantsLocationConfiguration(output[_AGLC], context);
  }
  if (output[_GS] != null) {
    contents[_GS] = __expectString(output[_GS]);
  }
  if (output[_AA] != null) {
    contents[_AA] = __expectString(output[_AA]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListAccessGrantsInstanceEntry
 */
const de_ListAccessGrantsInstanceEntry = (output: any, context: __SerdeContext): ListAccessGrantsInstanceEntry => {
  const contents: any = {};
  if (output[_AGII] != null) {
    contents[_AGII] = __expectString(output[_AGII]);
  }
  if (output[_AGIA] != null) {
    contents[_AGIA] = __expectString(output[_AGIA]);
  }
  if (output[_CA] != null) {
    contents[_CA] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CA]));
  }
  if (output[_ICA] != null) {
    contents[_ICA] = __expectString(output[_ICA]);
  }
  if (output[_ICIA] != null) {
    contents[_ICIA] = __expectString(output[_ICIA]);
  }
  if (output[_ICAA] != null) {
    contents[_ICAA] = __expectString(output[_ICAA]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListAccessGrantsLocationsEntry
 */
const de_ListAccessGrantsLocationsEntry = (output: any, context: __SerdeContext): ListAccessGrantsLocationsEntry => {
  const contents: any = {};
  if (output[_CA] != null) {
    contents[_CA] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CA]));
  }
  if (output[_AGLI] != null) {
    contents[_AGLI] = __expectString(output[_AGLI]);
  }
  if (output[_AGLA] != null) {
    contents[_AGLA] = __expectString(output[_AGLA]);
  }
  if (output[_LS] != null) {
    contents[_LS] = __expectString(output[_LS]);
  }
  if (output[_IAMRA] != null) {
    contents[_IAMRA] = __expectString(output[_IAMRA]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListCallerAccessGrantsEntry
 */
const de_ListCallerAccessGrantsEntry = (output: any, context: __SerdeContext): ListCallerAccessGrantsEntry => {
  const contents: any = {};
  if (output[_P] != null) {
    contents[_P] = __expectString(output[_P]);
  }
  if (output[_GS] != null) {
    contents[_GS] = __expectString(output[_GS]);
  }
  if (output[_AA] != null) {
    contents[_AA] = __expectString(output[_AA]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListStorageLensConfigurationEntry
 */
const de_ListStorageLensConfigurationEntry = (
  output: any,
  context: __SerdeContext
): ListStorageLensConfigurationEntry => {
  const contents: any = {};
  if (output[_Id_] != null) {
    contents[_Id_] = __expectString(output[_Id_]);
  }
  if (output[_SLA] != null) {
    contents[_SLA] = __expectString(output[_SLA]);
  }
  if (output[_HR] != null) {
    contents[_HR] = __expectString(output[_HR]);
  }
  if (output[_IE] != null) {
    contents[_IE] = __parseBoolean(output[_IE]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListStorageLensGroupEntry
 */
const de_ListStorageLensGroupEntry = (output: any, context: __SerdeContext): ListStorageLensGroupEntry => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_SLGA] != null) {
    contents[_SLGA] = __expectString(output[_SLGA]);
  }
  if (output[_HR] != null) {
    contents[_HR] = __expectString(output[_HR]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlMatchAnyPrefix
 */
const de_MatchAnyPrefix = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlMatchAnySuffix
 */
const de_MatchAnySuffix = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlMatchAnyTag
 */
const de_MatchAnyTag = (output: any, context: __SerdeContext): S3Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_S3Tag(entry, context);
    });
};

/**
 * deserializeAws_restXmlMatchObjectAge
 */
const de_MatchObjectAge = (output: any, context: __SerdeContext): MatchObjectAge => {
  const contents: any = {};
  if (output[_DGT] != null) {
    contents[_DGT] = __strictParseInt32(output[_DGT]) as number;
  }
  if (output[_DLT] != null) {
    contents[_DLT] = __strictParseInt32(output[_DLT]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlMatchObjectSize
 */
const de_MatchObjectSize = (output: any, context: __SerdeContext): MatchObjectSize => {
  const contents: any = {};
  if (output[_BGT] != null) {
    contents[_BGT] = __strictParseLong(output[_BGT]) as number;
  }
  if (output[_BLT] != null) {
    contents[_BLT] = __strictParseLong(output[_BLT]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlMetrics
 */
const de_Metrics = (output: any, context: __SerdeContext): Metrics => {
  const contents: any = {};
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_ETv] != null) {
    contents[_ETv] = de_ReplicationTimeValue(output[_ETv], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlMultiRegionAccessPointPolicyDocument
 */
const de_MultiRegionAccessPointPolicyDocument = (
  output: any,
  context: __SerdeContext
): MultiRegionAccessPointPolicyDocument => {
  const contents: any = {};
  if (output[_Es] != null) {
    contents[_Es] = de_EstablishedMultiRegionAccessPointPolicy(output[_Es], context);
  }
  if (output[_Pro] != null) {
    contents[_Pro] = de_ProposedMultiRegionAccessPointPolicy(output[_Pro], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlMultiRegionAccessPointRegionalResponse
 */
const de_MultiRegionAccessPointRegionalResponse = (
  output: any,
  context: __SerdeContext
): MultiRegionAccessPointRegionalResponse => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_RSeq] != null) {
    contents[_RSeq] = __expectString(output[_RSeq]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlMultiRegionAccessPointRegionalResponseList
 */
const de_MultiRegionAccessPointRegionalResponseList = (
  output: any,
  context: __SerdeContext
): MultiRegionAccessPointRegionalResponse[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MultiRegionAccessPointRegionalResponse(entry, context);
    });
};

/**
 * deserializeAws_restXmlMultiRegionAccessPointReport
 */
const de_MultiRegionAccessPointReport = (output: any, context: __SerdeContext): MultiRegionAccessPointReport => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_A] != null) {
    contents[_A] = __expectString(output[_A]);
  }
  if (output[_CA] != null) {
    contents[_CA] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CA]));
  }
  if (output[_PAB] != null) {
    contents[_PAB] = de_PublicAccessBlockConfiguration(output[_PAB], context);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output.Regions === "") {
    contents[_Re] = [];
  } else if (output[_Re] != null && output[_Re][_Reg] != null) {
    contents[_Re] = de_RegionReportList(__getArrayIfSingleItem(output[_Re][_Reg]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlMultiRegionAccessPointReportList
 */
const de_MultiRegionAccessPointReportList = (output: any, context: __SerdeContext): MultiRegionAccessPointReport[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MultiRegionAccessPointReport(entry, context);
    });
};

/**
 * deserializeAws_restXmlMultiRegionAccessPointRoute
 */
const de_MultiRegionAccessPointRoute = (output: any, context: __SerdeContext): MultiRegionAccessPointRoute => {
  const contents: any = {};
  if (output[_B] != null) {
    contents[_B] = __expectString(output[_B]);
  }
  if (output[_Reg] != null) {
    contents[_Reg] = __expectString(output[_Reg]);
  }
  if (output[_TDP] != null) {
    contents[_TDP] = __strictParseInt32(output[_TDP]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlMultiRegionAccessPointsAsyncResponse
 */
const de_MultiRegionAccessPointsAsyncResponse = (
  output: any,
  context: __SerdeContext
): MultiRegionAccessPointsAsyncResponse => {
  const contents: any = {};
  if (output.Regions === "") {
    contents[_Re] = [];
  } else if (output[_Re] != null && output[_Re][_Reg] != null) {
    contents[_Re] = de_MultiRegionAccessPointRegionalResponseList(__getArrayIfSingleItem(output[_Re][_Reg]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlNoncurrentVersionExpiration
 */
const de_NoncurrentVersionExpiration = (output: any, context: __SerdeContext): NoncurrentVersionExpiration => {
  const contents: any = {};
  if (output[_ND] != null) {
    contents[_ND] = __strictParseInt32(output[_ND]) as number;
  }
  if (output[_NNV] != null) {
    contents[_NNV] = __strictParseInt32(output[_NNV]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlNoncurrentVersionTransition
 */
const de_NoncurrentVersionTransition = (output: any, context: __SerdeContext): NoncurrentVersionTransition => {
  const contents: any = {};
  if (output[_ND] != null) {
    contents[_ND] = __strictParseInt32(output[_ND]) as number;
  }
  if (output[_SC] != null) {
    contents[_SC] = __expectString(output[_SC]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlNoncurrentVersionTransitionList
 */
const de_NoncurrentVersionTransitionList = (output: any, context: __SerdeContext): NoncurrentVersionTransition[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_NoncurrentVersionTransition(entry, context);
    });
};

/**
 * deserializeAws_restXmlNonEmptyMaxLength1024StringList
 */
const de_NonEmptyMaxLength1024StringList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlObjectLambdaAccessPoint
 */
const de_ObjectLambdaAccessPoint = (output: any, context: __SerdeContext): ObjectLambdaAccessPoint => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_OLAPA] != null) {
    contents[_OLAPA] = __expectString(output[_OLAPA]);
  }
  if (output[_A] != null) {
    contents[_A] = de_ObjectLambdaAccessPointAlias(output[_A], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlObjectLambdaAccessPointAlias
 */
const de_ObjectLambdaAccessPointAlias = (output: any, context: __SerdeContext): ObjectLambdaAccessPointAlias => {
  const contents: any = {};
  if (output[_V] != null) {
    contents[_V] = __expectString(output[_V]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlObjectLambdaAccessPointList
 */
const de_ObjectLambdaAccessPointList = (output: any, context: __SerdeContext): ObjectLambdaAccessPoint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ObjectLambdaAccessPoint(entry, context);
    });
};

/**
 * deserializeAws_restXmlObjectLambdaAllowedFeaturesList
 */
const de_ObjectLambdaAllowedFeaturesList = (output: any, context: __SerdeContext): ObjectLambdaAllowedFeature[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlObjectLambdaConfiguration
 */
const de_ObjectLambdaConfiguration = (output: any, context: __SerdeContext): ObjectLambdaConfiguration => {
  const contents: any = {};
  if (output[_SAP] != null) {
    contents[_SAP] = __expectString(output[_SAP]);
  }
  if (output[_CWME] != null) {
    contents[_CWME] = __parseBoolean(output[_CWME]);
  }
  if (output.AllowedFeatures === "") {
    contents[_AFl] = [];
  } else if (output[_AFl] != null && output[_AFl][_AF] != null) {
    contents[_AFl] = de_ObjectLambdaAllowedFeaturesList(__getArrayIfSingleItem(output[_AFl][_AF]), context);
  }
  if (output.TransformationConfigurations === "") {
    contents[_TC] = [];
  } else if (output[_TC] != null && output[_TC][_TCr] != null) {
    contents[_TC] = de_ObjectLambdaTransformationConfigurationsList(__getArrayIfSingleItem(output[_TC][_TCr]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlObjectLambdaContentTransformation
 */
const de_ObjectLambdaContentTransformation = (
  output: any,
  context: __SerdeContext
): ObjectLambdaContentTransformation => {
  if (output[_ALw] != null) {
    return {
      AwsLambda: de_AwsLambdaTransformation(output[_ALw], context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restXmlObjectLambdaTransformationConfiguration
 */
const de_ObjectLambdaTransformationConfiguration = (
  output: any,
  context: __SerdeContext
): ObjectLambdaTransformationConfiguration => {
  const contents: any = {};
  if (output.Actions === "") {
    contents[_Act] = [];
  } else if (output[_Act] != null && output[_Act][_Acti] != null) {
    contents[_Act] = de_ObjectLambdaTransformationConfigurationActionsList(
      __getArrayIfSingleItem(output[_Act][_Acti]),
      context
    );
  }
  if (output.ContentTransformation === "") {
    // Pass empty tags.
  } else if (output[_CTo] != null) {
    contents[_CTo] = de_ObjectLambdaContentTransformation(__expectUnion(output[_CTo]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlObjectLambdaTransformationConfigurationActionsList
 */
const de_ObjectLambdaTransformationConfigurationActionsList = (
  output: any,
  context: __SerdeContext
): ObjectLambdaTransformationConfigurationAction[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlObjectLambdaTransformationConfigurationsList
 */
const de_ObjectLambdaTransformationConfigurationsList = (
  output: any,
  context: __SerdeContext
): ObjectLambdaTransformationConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ObjectLambdaTransformationConfiguration(entry, context);
    });
};

/**
 * deserializeAws_restXmlPolicyStatus
 */
const de_PolicyStatus = (output: any, context: __SerdeContext): PolicyStatus => {
  const contents: any = {};
  if (output[_IP] != null) {
    contents[_IP] = __parseBoolean(output[_IP]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlPrefixesList
 */
const de_PrefixesList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlPrefixLevel
 */
const de_PrefixLevel = (output: any, context: __SerdeContext): PrefixLevel => {
  const contents: any = {};
  if (output[_SM] != null) {
    contents[_SM] = de_PrefixLevelStorageMetrics(output[_SM], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlPrefixLevelStorageMetrics
 */
const de_PrefixLevelStorageMetrics = (output: any, context: __SerdeContext): PrefixLevelStorageMetrics => {
  const contents: any = {};
  if (output[_IE] != null) {
    contents[_IE] = __parseBoolean(output[_IE]);
  }
  if (output[_SCe] != null) {
    contents[_SCe] = de_SelectionCriteria(output[_SCe], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlProposedMultiRegionAccessPointPolicy
 */
const de_ProposedMultiRegionAccessPointPolicy = (
  output: any,
  context: __SerdeContext
): ProposedMultiRegionAccessPointPolicy => {
  const contents: any = {};
  if (output[_Po] != null) {
    contents[_Po] = __expectString(output[_Po]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlPublicAccessBlockConfiguration
 */
const de_PublicAccessBlockConfiguration = (output: any, context: __SerdeContext): PublicAccessBlockConfiguration => {
  const contents: any = {};
  if (output[_BPA] != null) {
    contents[_BPA] = __parseBoolean(output[_BPA]);
  }
  if (output[_IPA] != null) {
    contents[_IPA] = __parseBoolean(output[_IPA]);
  }
  if (output[_BPP] != null) {
    contents[_BPP] = __parseBoolean(output[_BPP]);
  }
  if (output[_RPB] != null) {
    contents[_RPB] = __parseBoolean(output[_RPB]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlPutMultiRegionAccessPointPolicyInput
 */
const de_PutMultiRegionAccessPointPolicyInput = (
  output: any,
  context: __SerdeContext
): PutMultiRegionAccessPointPolicyInput => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_Po] != null) {
    contents[_Po] = __expectString(output[_Po]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlRegion
 */
const de_Region = (output: any, context: __SerdeContext): Region => {
  const contents: any = {};
  if (output[_B] != null) {
    contents[_B] = __expectString(output[_B]);
  }
  if (output[_BAI] != null) {
    contents[_BAI] = __expectString(output[_BAI]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlRegionalBucket
 */
const de_RegionalBucket = (output: any, context: __SerdeContext): RegionalBucket => {
  const contents: any = {};
  if (output[_B] != null) {
    contents[_B] = __expectString(output[_B]);
  }
  if (output[_BA] != null) {
    contents[_BA] = __expectString(output[_BA]);
  }
  if (output[_PABE] != null) {
    contents[_PABE] = __parseBoolean(output[_PABE]);
  }
  if (output[_CD] != null) {
    contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
  }
  if (output[_OI] != null) {
    contents[_OI] = __expectString(output[_OI]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlRegionalBucketList
 */
const de_RegionalBucketList = (output: any, context: __SerdeContext): RegionalBucket[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RegionalBucket(entry, context);
    });
};

/**
 * deserializeAws_restXmlRegionCreationList
 */
const de_RegionCreationList = (output: any, context: __SerdeContext): Region[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Region(entry, context);
    });
};

/**
 * deserializeAws_restXmlRegionReport
 */
const de_RegionReport = (output: any, context: __SerdeContext): RegionReport => {
  const contents: any = {};
  if (output[_B] != null) {
    contents[_B] = __expectString(output[_B]);
  }
  if (output[_Reg] != null) {
    contents[_Reg] = __expectString(output[_Reg]);
  }
  if (output[_BAI] != null) {
    contents[_BAI] = __expectString(output[_BAI]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlRegionReportList
 */
const de_RegionReportList = (output: any, context: __SerdeContext): RegionReport[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RegionReport(entry, context);
    });
};

/**
 * deserializeAws_restXmlRegions
 */
const de_Regions = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlReplicaModifications
 */
const de_ReplicaModifications = (output: any, context: __SerdeContext): ReplicaModifications => {
  const contents: any = {};
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlReplicationConfiguration
 */
const de_ReplicationConfiguration = (output: any, context: __SerdeContext): ReplicationConfiguration => {
  const contents: any = {};
  if (output[_Rol] != null) {
    contents[_Rol] = __expectString(output[_Rol]);
  }
  if (output.Rules === "") {
    contents[_Ru] = [];
  } else if (output[_Ru] != null && output[_Ru][_Rul] != null) {
    contents[_Ru] = de_ReplicationRules(__getArrayIfSingleItem(output[_Ru][_Rul]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlReplicationRule
 */
const de_ReplicationRule = (output: any, context: __SerdeContext): ReplicationRule => {
  const contents: any = {};
  if (output[_ID] != null) {
    contents[_ID] = __expectString(output[_ID]);
  }
  if (output[_Pr] != null) {
    contents[_Pr] = __strictParseInt32(output[_Pr]) as number;
  }
  if (output[_Pre] != null) {
    contents[_Pre] = __expectString(output[_Pre]);
  }
  if (output[_Fil] != null) {
    contents[_Fil] = de_ReplicationRuleFilter(output[_Fil], context);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_SSC] != null) {
    contents[_SSC] = de_SourceSelectionCriteria(output[_SSC], context);
  }
  if (output[_EOR] != null) {
    contents[_EOR] = de_ExistingObjectReplication(output[_EOR], context);
  }
  if (output[_Des] != null) {
    contents[_Des] = de_Destination(output[_Des], context);
  }
  if (output[_DMR] != null) {
    contents[_DMR] = de_DeleteMarkerReplication(output[_DMR], context);
  }
  if (output[_B] != null) {
    contents[_B] = __expectString(output[_B]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlReplicationRuleAndOperator
 */
const de_ReplicationRuleAndOperator = (output: any, context: __SerdeContext): ReplicationRuleAndOperator => {
  const contents: any = {};
  if (output[_Pre] != null) {
    contents[_Pre] = __expectString(output[_Pre]);
  }
  if (output.Tags === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_m] != null) {
    contents[_T] = de_S3TagSet(__getArrayIfSingleItem(output[_T][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlReplicationRuleFilter
 */
const de_ReplicationRuleFilter = (output: any, context: __SerdeContext): ReplicationRuleFilter => {
  const contents: any = {};
  if (output[_Pre] != null) {
    contents[_Pre] = __expectString(output[_Pre]);
  }
  if (output[_Tag] != null) {
    contents[_Tag] = de_S3Tag(output[_Tag], context);
  }
  if (output[_An] != null) {
    contents[_An] = de_ReplicationRuleAndOperator(output[_An], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlReplicationRules
 */
const de_ReplicationRules = (output: any, context: __SerdeContext): ReplicationRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReplicationRule(entry, context);
    });
};

/**
 * deserializeAws_restXmlReplicationStatusFilterList
 */
const de_ReplicationStatusFilterList = (output: any, context: __SerdeContext): ReplicationStatus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlReplicationTime
 */
const de_ReplicationTime = (output: any, context: __SerdeContext): ReplicationTime => {
  const contents: any = {};
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_Ti] != null) {
    contents[_Ti] = de_ReplicationTimeValue(output[_Ti], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlReplicationTimeValue
 */
const de_ReplicationTimeValue = (output: any, context: __SerdeContext): ReplicationTimeValue => {
  const contents: any = {};
  if (output[_Mi] != null) {
    contents[_Mi] = __strictParseInt32(output[_Mi]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlRouteList
 */
const de_RouteList = (output: any, context: __SerdeContext): MultiRegionAccessPointRoute[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MultiRegionAccessPointRoute(entry, context);
    });
};

/**
 * deserializeAws_restXmlS3AccessControlList
 */
const de_S3AccessControlList = (output: any, context: __SerdeContext): S3AccessControlList => {
  const contents: any = {};
  if (output[_Ow] != null) {
    contents[_Ow] = de_S3ObjectOwner(output[_Ow], context);
  }
  if (output.Grants === "") {
    contents[_Gr] = [];
  } else if (output[_Gr] != null && output[_Gr][_m] != null) {
    contents[_Gr] = de_S3GrantList(__getArrayIfSingleItem(output[_Gr][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3AccessControlPolicy
 */
const de_S3AccessControlPolicy = (output: any, context: __SerdeContext): S3AccessControlPolicy => {
  const contents: any = {};
  if (output[_ACLc] != null) {
    contents[_ACLc] = de_S3AccessControlList(output[_ACLc], context);
  }
  if (output[_CACL] != null) {
    contents[_CACL] = __expectString(output[_CACL]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3BucketDestination
 */
const de_S3BucketDestination = (output: any, context: __SerdeContext): S3BucketDestination => {
  const contents: any = {};
  if (output[_F] != null) {
    contents[_F] = __expectString(output[_F]);
  }
  if (output[_OSVu] != null) {
    contents[_OSVu] = __expectString(output[_OSVu]);
  }
  if (output[_AI] != null) {
    contents[_AI] = __expectString(output[_AI]);
  }
  if (output[_Ar] != null) {
    contents[_Ar] = __expectString(output[_Ar]);
  }
  if (output[_Pre] != null) {
    contents[_Pre] = __expectString(output[_Pre]);
  }
  if (output[_Enc] != null) {
    contents[_Enc] = de_StorageLensDataExportEncryption(output[_Enc], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3CopyObjectOperation
 */
const de_S3CopyObjectOperation = (output: any, context: __SerdeContext): S3CopyObjectOperation => {
  const contents: any = {};
  if (output[_TR] != null) {
    contents[_TR] = __expectString(output[_TR]);
  }
  if (output[_CACL] != null) {
    contents[_CACL] = __expectString(output[_CACL]);
  }
  if (output.AccessControlGrants === "") {
    contents[_ACG] = [];
  } else if (output[_ACG] != null && output[_ACG][_m] != null) {
    contents[_ACG] = de_S3GrantList(__getArrayIfSingleItem(output[_ACG][_m]), context);
  }
  if (output[_MDe] != null) {
    contents[_MDe] = __expectString(output[_MDe]);
  }
  if (output[_MSC] != null) {
    contents[_MSC] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_MSC]));
  }
  if (output[_NOM] != null) {
    contents[_NOM] = de_S3ObjectMetadata(output[_NOM], context);
  }
  if (output.NewObjectTagging === "") {
    contents[_NOT] = [];
  } else if (output[_NOT] != null && output[_NOT][_m] != null) {
    contents[_NOT] = de_S3TagSet(__getArrayIfSingleItem(output[_NOT][_m]), context);
  }
  if (output[_RL] != null) {
    contents[_RL] = __expectString(output[_RL]);
  }
  if (output[_RP] != null) {
    contents[_RP] = __parseBoolean(output[_RP]);
  }
  if (output[_SC] != null) {
    contents[_SC] = __expectString(output[_SC]);
  }
  if (output[_UMSC] != null) {
    contents[_UMSC] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_UMSC]));
  }
  if (output[_SSEAKKI] != null) {
    contents[_SSEAKKI] = __expectString(output[_SSEAKKI]);
  }
  if (output[_TKP] != null) {
    contents[_TKP] = __expectString(output[_TKP]);
  }
  if (output[_OLLHS] != null) {
    contents[_OLLHS] = __expectString(output[_OLLHS]);
  }
  if (output[_OLM] != null) {
    contents[_OLM] = __expectString(output[_OLM]);
  }
  if (output[_OLRUD] != null) {
    contents[_OLRUD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_OLRUD]));
  }
  if (output[_BKE] != null) {
    contents[_BKE] = __parseBoolean(output[_BKE]);
  }
  if (output[_CAh] != null) {
    contents[_CAh] = __expectString(output[_CAh]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3DeleteObjectTaggingOperation
 */
const de_S3DeleteObjectTaggingOperation = (output: any, context: __SerdeContext): S3DeleteObjectTaggingOperation => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_restXmlS3GeneratedManifestDescriptor
 */
const de_S3GeneratedManifestDescriptor = (output: any, context: __SerdeContext): S3GeneratedManifestDescriptor => {
  const contents: any = {};
  if (output[_F] != null) {
    contents[_F] = __expectString(output[_F]);
  }
  if (output[_L] != null) {
    contents[_L] = de_JobManifestLocation(output[_L], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3Grant
 */
const de_S3Grant = (output: any, context: __SerdeContext): S3Grant => {
  const contents: any = {};
  if (output[_G] != null) {
    contents[_G] = de_S3Grantee(output[_G], context);
  }
  if (output[_P] != null) {
    contents[_P] = __expectString(output[_P]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3Grantee
 */
const de_S3Grantee = (output: any, context: __SerdeContext): S3Grantee => {
  const contents: any = {};
  if (output[_TI] != null) {
    contents[_TI] = __expectString(output[_TI]);
  }
  if (output[_Id] != null) {
    contents[_Id] = __expectString(output[_Id]);
  }
  if (output[_DN] != null) {
    contents[_DN] = __expectString(output[_DN]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3GrantList
 */
const de_S3GrantList = (output: any, context: __SerdeContext): S3Grant[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_S3Grant(entry, context);
    });
};

/**
 * deserializeAws_restXmlS3InitiateRestoreObjectOperation
 */
const de_S3InitiateRestoreObjectOperation = (
  output: any,
  context: __SerdeContext
): S3InitiateRestoreObjectOperation => {
  const contents: any = {};
  if (output[_EID] != null) {
    contents[_EID] = __strictParseInt32(output[_EID]) as number;
  }
  if (output[_GJT] != null) {
    contents[_GJT] = __expectString(output[_GJT]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3JobManifestGenerator
 */
const de_S3JobManifestGenerator = (output: any, context: __SerdeContext): S3JobManifestGenerator => {
  const contents: any = {};
  if (output[_EBO] != null) {
    contents[_EBO] = __expectString(output[_EBO]);
  }
  if (output[_SB] != null) {
    contents[_SB] = __expectString(output[_SB]);
  }
  if (output[_MOL] != null) {
    contents[_MOL] = de_S3ManifestOutputLocation(output[_MOL], context);
  }
  if (output[_Fil] != null) {
    contents[_Fil] = de_JobManifestGeneratorFilter(output[_Fil], context);
  }
  if (output[_EMO] != null) {
    contents[_EMO] = __parseBoolean(output[_EMO]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3ManifestOutputLocation
 */
const de_S3ManifestOutputLocation = (output: any, context: __SerdeContext): S3ManifestOutputLocation => {
  const contents: any = {};
  if (output[_EMBO] != null) {
    contents[_EMBO] = __expectString(output[_EMBO]);
  }
  if (output[_B] != null) {
    contents[_B] = __expectString(output[_B]);
  }
  if (output[_MP] != null) {
    contents[_MP] = __expectString(output[_MP]);
  }
  if (output[_ME] != null) {
    contents[_ME] = de_GeneratedManifestEncryption(output[_ME], context);
  }
  if (output[_MF] != null) {
    contents[_MF] = __expectString(output[_MF]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3ObjectLockLegalHold
 */
const de_S3ObjectLockLegalHold = (output: any, context: __SerdeContext): S3ObjectLockLegalHold => {
  const contents: any = {};
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3ObjectMetadata
 */
const de_S3ObjectMetadata = (output: any, context: __SerdeContext): S3ObjectMetadata => {
  const contents: any = {};
  if (output[_CC] != null) {
    contents[_CC] = __expectString(output[_CC]);
  }
  if (output[_CDo] != null) {
    contents[_CDo] = __expectString(output[_CDo]);
  }
  if (output[_CE] != null) {
    contents[_CE] = __expectString(output[_CE]);
  }
  if (output[_CL] != null) {
    contents[_CL] = __expectString(output[_CL]);
  }
  if (output.UserMetadata === "") {
    contents[_UM] = {};
  } else if (output[_UM] != null && output[_UM][_e] != null) {
    contents[_UM] = de_S3UserMetadata(__getArrayIfSingleItem(output[_UM][_e]), context);
  }
  if (output[_CLo] != null) {
    contents[_CLo] = __strictParseLong(output[_CLo]) as number;
  }
  if (output[_CMD] != null) {
    contents[_CMD] = __expectString(output[_CMD]);
  }
  if (output[_CTon] != null) {
    contents[_CTon] = __expectString(output[_CTon]);
  }
  if (output[_HED] != null) {
    contents[_HED] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_HED]));
  }
  if (output[_RCe] != null) {
    contents[_RCe] = __parseBoolean(output[_RCe]);
  }
  if (output[_SSEA] != null) {
    contents[_SSEA] = __expectString(output[_SSEA]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3ObjectOwner
 */
const de_S3ObjectOwner = (output: any, context: __SerdeContext): S3ObjectOwner => {
  const contents: any = {};
  if (output[_ID] != null) {
    contents[_ID] = __expectString(output[_ID]);
  }
  if (output[_DN] != null) {
    contents[_DN] = __expectString(output[_DN]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3ReplicateObjectOperation
 */
const de_S3ReplicateObjectOperation = (output: any, context: __SerdeContext): S3ReplicateObjectOperation => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_restXmlS3Retention
 */
const de_S3Retention = (output: any, context: __SerdeContext): S3Retention => {
  const contents: any = {};
  if (output[_RUD] != null) {
    contents[_RUD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_RUD]));
  }
  if (output[_Mo] != null) {
    contents[_Mo] = __expectString(output[_Mo]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3SetObjectAclOperation
 */
const de_S3SetObjectAclOperation = (output: any, context: __SerdeContext): S3SetObjectAclOperation => {
  const contents: any = {};
  if (output[_ACP] != null) {
    contents[_ACP] = de_S3AccessControlPolicy(output[_ACP], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3SetObjectLegalHoldOperation
 */
const de_S3SetObjectLegalHoldOperation = (output: any, context: __SerdeContext): S3SetObjectLegalHoldOperation => {
  const contents: any = {};
  if (output[_LH] != null) {
    contents[_LH] = de_S3ObjectLockLegalHold(output[_LH], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3SetObjectRetentionOperation
 */
const de_S3SetObjectRetentionOperation = (output: any, context: __SerdeContext): S3SetObjectRetentionOperation => {
  const contents: any = {};
  if (output[_BGR] != null) {
    contents[_BGR] = __parseBoolean(output[_BGR]);
  }
  if (output[_Ret] != null) {
    contents[_Ret] = de_S3Retention(output[_Ret], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3SetObjectTaggingOperation
 */
const de_S3SetObjectTaggingOperation = (output: any, context: __SerdeContext): S3SetObjectTaggingOperation => {
  const contents: any = {};
  if (output.TagSet === "") {
    contents[_TS] = [];
  } else if (output[_TS] != null && output[_TS][_m] != null) {
    contents[_TS] = de_S3TagSet(__getArrayIfSingleItem(output[_TS][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3Tag
 */
const de_S3Tag = (output: any, context: __SerdeContext): S3Tag => {
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
 * deserializeAws_restXmlS3TagSet
 */
const de_S3TagSet = (output: any, context: __SerdeContext): S3Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_S3Tag(entry, context);
    });
};

/**
 * deserializeAws_restXmlS3UserMetadata
 */
const de_S3UserMetadata = (output: any, context: __SerdeContext): Record<string, string> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = __expectString(pair["value"]) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restXmlScope
 */
const de_Scope = (output: any, context: __SerdeContext): Scope => {
  const contents: any = {};
  if (output.Prefixes === "") {
    contents[_Pref] = [];
  } else if (output[_Pref] != null && output[_Pref][_Pre] != null) {
    contents[_Pref] = de_PrefixesList(__getArrayIfSingleItem(output[_Pref][_Pre]), context);
  }
  if (output.Permissions === "") {
    contents[_Pe] = [];
  } else if (output[_Pe] != null && output[_Pe][_P] != null) {
    contents[_Pe] = de_ScopePermissionList(__getArrayIfSingleItem(output[_Pe][_P]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlScopePermissionList
 */
const de_ScopePermissionList = (output: any, context: __SerdeContext): ScopePermission[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlSelectionCriteria
 */
const de_SelectionCriteria = (output: any, context: __SerdeContext): SelectionCriteria => {
  const contents: any = {};
  if (output[_Del] != null) {
    contents[_Del] = __expectString(output[_Del]);
  }
  if (output[_MDa] != null) {
    contents[_MDa] = __strictParseInt32(output[_MDa]) as number;
  }
  if (output[_MSBP] != null) {
    contents[_MSBP] = __strictParseFloat(output[_MSBP]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlSourceSelectionCriteria
 */
const de_SourceSelectionCriteria = (output: any, context: __SerdeContext): SourceSelectionCriteria => {
  const contents: any = {};
  if (output[_SKEO] != null) {
    contents[_SKEO] = de_SseKmsEncryptedObjects(output[_SKEO], context);
  }
  if (output[_RM] != null) {
    contents[_RM] = de_ReplicaModifications(output[_RM], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlSSEKMS
 */
const de_SSEKMS = (output: any, context: __SerdeContext): SSEKMS => {
  const contents: any = {};
  if (output[_KI] != null) {
    contents[_KI] = __expectString(output[_KI]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlSseKmsEncryptedObjects
 */
const de_SseKmsEncryptedObjects = (output: any, context: __SerdeContext): SseKmsEncryptedObjects => {
  const contents: any = {};
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlSSEKMSEncryption
 */
const de_SSEKMSEncryption = (output: any, context: __SerdeContext): SSEKMSEncryption => {
  const contents: any = {};
  if (output[_KI] != null) {
    contents[_KI] = __expectString(output[_KI]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlSSES3
 */
const de_SSES3 = (output: any, context: __SerdeContext): SSES3 => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_restXmlSSES3Encryption
 */
const de_SSES3Encryption = (output: any, context: __SerdeContext): SSES3Encryption => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_restXmlStorageClassList
 */
const de_StorageClassList = (output: any, context: __SerdeContext): S3StorageClass[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlStorageLensAwsOrg
 */
const de_StorageLensAwsOrg = (output: any, context: __SerdeContext): StorageLensAwsOrg => {
  const contents: any = {};
  if (output[_Ar] != null) {
    contents[_Ar] = __expectString(output[_Ar]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlStorageLensConfiguration
 */
const de_StorageLensConfiguration = (output: any, context: __SerdeContext): StorageLensConfiguration => {
  const contents: any = {};
  if (output[_Id_] != null) {
    contents[_Id_] = __expectString(output[_Id_]);
  }
  if (output[_AL] != null) {
    contents[_AL] = de_AccountLevel(output[_AL], context);
  }
  if (output[_I] != null) {
    contents[_I] = de_Include(output[_I], context);
  }
  if (output[_Ex] != null) {
    contents[_Ex] = de__Exclude(output[_Ex], context);
  }
  if (output[_DE] != null) {
    contents[_DE] = de_StorageLensDataExport(output[_DE], context);
  }
  if (output[_IE] != null) {
    contents[_IE] = __parseBoolean(output[_IE]);
  }
  if (output[_AOw] != null) {
    contents[_AOw] = de_StorageLensAwsOrg(output[_AOw], context);
  }
  if (output[_SLA] != null) {
    contents[_SLA] = __expectString(output[_SLA]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlStorageLensConfigurationList
 */
const de_StorageLensConfigurationList = (output: any, context: __SerdeContext): ListStorageLensConfigurationEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListStorageLensConfigurationEntry(entry, context);
    });
};

/**
 * deserializeAws_restXmlStorageLensDataExport
 */
const de_StorageLensDataExport = (output: any, context: __SerdeContext): StorageLensDataExport => {
  const contents: any = {};
  if (output[_SBD] != null) {
    contents[_SBD] = de_S3BucketDestination(output[_SBD], context);
  }
  if (output[_CWM] != null) {
    contents[_CWM] = de_CloudWatchMetrics(output[_CWM], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlStorageLensDataExportEncryption
 */
const de_StorageLensDataExportEncryption = (output: any, context: __SerdeContext): StorageLensDataExportEncryption => {
  const contents: any = {};
  if (output[_SS] != null) {
    contents[_SSES] = de_SSES3(output[_SS], context);
  }
  if (output[_SK] != null) {
    contents[_SSEKMS] = de_SSEKMS(output[_SK], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlStorageLensGroup
 */
const de_StorageLensGroup = (output: any, context: __SerdeContext): StorageLensGroup => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_Fil] != null) {
    contents[_Fil] = de_StorageLensGroupFilter(output[_Fil], context);
  }
  if (output[_SLGA] != null) {
    contents[_SLGA] = __expectString(output[_SLGA]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlStorageLensGroupAndOperator
 */
const de_StorageLensGroupAndOperator = (output: any, context: __SerdeContext): StorageLensGroupAndOperator => {
  const contents: any = {};
  if (output.MatchAnyPrefix === "") {
    contents[_MAP] = [];
  } else if (output[_MAP] != null && output[_MAP][_Pre] != null) {
    contents[_MAP] = de_MatchAnyPrefix(__getArrayIfSingleItem(output[_MAP][_Pre]), context);
  }
  if (output.MatchAnySuffix === "") {
    contents[_MAS] = [];
  } else if (output[_MAS] != null && output[_MAS][_Su] != null) {
    contents[_MAS] = de_MatchAnySuffix(__getArrayIfSingleItem(output[_MAS][_Su]), context);
  }
  if (output.MatchAnyTag === "") {
    contents[_MAT] = [];
  } else if (output[_MAT] != null && output[_MAT][_Tag] != null) {
    contents[_MAT] = de_MatchAnyTag(__getArrayIfSingleItem(output[_MAT][_Tag]), context);
  }
  if (output[_MOA] != null) {
    contents[_MOA] = de_MatchObjectAge(output[_MOA], context);
  }
  if (output[_MOS] != null) {
    contents[_MOS] = de_MatchObjectSize(output[_MOS], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlStorageLensGroupFilter
 */
const de_StorageLensGroupFilter = (output: any, context: __SerdeContext): StorageLensGroupFilter => {
  const contents: any = {};
  if (output.MatchAnyPrefix === "") {
    contents[_MAP] = [];
  } else if (output[_MAP] != null && output[_MAP][_Pre] != null) {
    contents[_MAP] = de_MatchAnyPrefix(__getArrayIfSingleItem(output[_MAP][_Pre]), context);
  }
  if (output.MatchAnySuffix === "") {
    contents[_MAS] = [];
  } else if (output[_MAS] != null && output[_MAS][_Su] != null) {
    contents[_MAS] = de_MatchAnySuffix(__getArrayIfSingleItem(output[_MAS][_Su]), context);
  }
  if (output.MatchAnyTag === "") {
    contents[_MAT] = [];
  } else if (output[_MAT] != null && output[_MAT][_Tag] != null) {
    contents[_MAT] = de_MatchAnyTag(__getArrayIfSingleItem(output[_MAT][_Tag]), context);
  }
  if (output[_MOA] != null) {
    contents[_MOA] = de_MatchObjectAge(output[_MOA], context);
  }
  if (output[_MOS] != null) {
    contents[_MOS] = de_MatchObjectSize(output[_MOS], context);
  }
  if (output[_An] != null) {
    contents[_An] = de_StorageLensGroupAndOperator(output[_An], context);
  }
  if (output[_Or_] != null) {
    contents[_Or_] = de_StorageLensGroupOrOperator(output[_Or_], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlStorageLensGroupLevel
 */
const de_StorageLensGroupLevel = (output: any, context: __SerdeContext): StorageLensGroupLevel => {
  const contents: any = {};
  if (output[_SCe] != null) {
    contents[_SCe] = de_StorageLensGroupLevelSelectionCriteria(output[_SCe], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlStorageLensGroupLevelExclude
 */
const de_StorageLensGroupLevelExclude = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlStorageLensGroupLevelInclude
 */
const de_StorageLensGroupLevelInclude = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlStorageLensGroupLevelSelectionCriteria
 */
const de_StorageLensGroupLevelSelectionCriteria = (
  output: any,
  context: __SerdeContext
): StorageLensGroupLevelSelectionCriteria => {
  const contents: any = {};
  if (output.Include === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_Ar] != null) {
    contents[_I] = de_StorageLensGroupLevelInclude(__getArrayIfSingleItem(output[_I][_Ar]), context);
  }
  if (output.Exclude === "") {
    contents[_Ex] = [];
  } else if (output[_Ex] != null && output[_Ex][_Ar] != null) {
    contents[_Ex] = de_StorageLensGroupLevelExclude(__getArrayIfSingleItem(output[_Ex][_Ar]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlStorageLensGroupList
 */
const de_StorageLensGroupList = (output: any, context: __SerdeContext): ListStorageLensGroupEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListStorageLensGroupEntry(entry, context);
    });
};

/**
 * deserializeAws_restXmlStorageLensGroupOrOperator
 */
const de_StorageLensGroupOrOperator = (output: any, context: __SerdeContext): StorageLensGroupOrOperator => {
  const contents: any = {};
  if (output.MatchAnyPrefix === "") {
    contents[_MAP] = [];
  } else if (output[_MAP] != null && output[_MAP][_Pre] != null) {
    contents[_MAP] = de_MatchAnyPrefix(__getArrayIfSingleItem(output[_MAP][_Pre]), context);
  }
  if (output.MatchAnySuffix === "") {
    contents[_MAS] = [];
  } else if (output[_MAS] != null && output[_MAS][_Su] != null) {
    contents[_MAS] = de_MatchAnySuffix(__getArrayIfSingleItem(output[_MAS][_Su]), context);
  }
  if (output.MatchAnyTag === "") {
    contents[_MAT] = [];
  } else if (output[_MAT] != null && output[_MAT][_Tag] != null) {
    contents[_MAT] = de_MatchAnyTag(__getArrayIfSingleItem(output[_MAT][_Tag]), context);
  }
  if (output[_MOA] != null) {
    contents[_MOA] = de_MatchObjectAge(output[_MOA], context);
  }
  if (output[_MOS] != null) {
    contents[_MOS] = de_MatchObjectSize(output[_MOS], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlStorageLensTag
 */
const de_StorageLensTag = (output: any, context: __SerdeContext): StorageLensTag => {
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
 * deserializeAws_restXmlStorageLensTags
 */
const de_StorageLensTags = (output: any, context: __SerdeContext): StorageLensTag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StorageLensTag(entry, context);
    });
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
 * deserializeAws_restXmlTransition
 */
const de_Transition = (output: any, context: __SerdeContext): Transition => {
  const contents: any = {};
  if (output[_Da] != null) {
    contents[_Da] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_Da]));
  }
  if (output[_Day] != null) {
    contents[_Day] = __strictParseInt32(output[_Day]) as number;
  }
  if (output[_SC] != null) {
    contents[_SC] = __expectString(output[_SC]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlTransitionList
 */
const de_TransitionList = (output: any, context: __SerdeContext): Transition[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Transition(entry, context);
    });
};

/**
 * deserializeAws_restXmlUserArguments
 */
const de_UserArguments = (output: any, context: __SerdeContext): Record<string, string> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = __expectString(pair["value"]) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restXmlVpcConfiguration
 */
const de_VpcConfiguration = (output: any, context: __SerdeContext): VpcConfiguration => {
  const contents: any = {};
  if (output[_VI] != null) {
    contents[_VI] = __expectString(output[_VI]);
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
const _AA = "ApplicationArn";
const _AAGICR = "AssociateAccessGrantsIdentityCenterRequest";
const _ABA = "AllowedByApplication";
const _ACG = "AccessControlGrants";
const _ACL = "ACL";
const _ACLc = "AccessControlList";
const _ACOM = "AdvancedCostOptimizationMetrics";
const _ACP = "AccessControlPolicy";
const _ACT = "AccessControlTranslation";
const _ADPM = "AdvancedDataProtectionMetrics";
const _AF = "AllowedFeature";
const _AFl = "AllowedFeatures";
const _AG = "AccessGrant";
const _AGA = "AccessGrantArn";
const _AGI = "AccessGrantId";
const _AGIA = "AccessGrantsInstanceArn";
const _AGII = "AccessGrantsInstanceId";
const _AGIL = "AccessGrantsInstancesList";
const _AGIc = "AccessGrantsInstance";
const _AGL = "AccessGrantsList";
const _AGLA = "AccessGrantsLocationArn";
const _AGLC = "AccessGrantsLocationConfiguration";
const _AGLI = "AccessGrantsLocationId";
const _AGLL = "AccessGrantsLocationsList";
const _AGLc = "AccessGrantsLocation";
const _AI = "AccountId";
const _AIMU = "AbortIncompleteMultipartUpload";
const _AKI = "AccessKeyId";
const _AL = "AccountLevel";
const _ALT = "AwsLambdaTransformation";
const _ALTP = "AwsLambdaTransformationPayload";
const _ALw = "AwsLambda";
const _AM = "ActivityMetrics";
const _AO = "AsyncOperation";
const _AOA = "AwsOrgArn";
const _AOw = "AwsOrg";
const _AP = "AccessPoint";
const _APA = "AccessPointArn";
const _APL = "AccessPointList";
const _APc = "AccessPoints";
const _Ac = "Account";
const _Act = "Actions";
const _Acti = "Action";
const _An = "And";
const _Ar = "Arn";
const _B = "Bucket";
const _BA = "BucketArn";
const _BAI = "BucketAccountId";
const _BGR = "BypassGovernanceRetention";
const _BGT = "BytesGreaterThan";
const _BIS = "BucketIdentifierString";
const _BKE = "BucketKeyEnabled";
const _BL = "BucketLevel";
const _BLC = "BucketLocationConstraint";
const _BLT = "BytesLessThan";
const _BN = "BucketName";
const _BPA = "BlockPublicAcls";
const _BPP = "BlockPublicPolicy";
const _BVS = "BucketVersioningStatus";
const _Bo = "Boolean";
const _Bu = "Buckets";
const _C = "Configuration";
const _CA = "CreatedAt";
const _CACL = "CannedAccessControlList";
const _CAGIR = "CreateAccessGrantsInstanceRequest";
const _CAGL = "CallerAccessGrantsList";
const _CAGLR = "CreateAccessGrantsLocationRequest";
const _CAGR = "CreateAccessGrantRequest";
const _CAPFOLR = "CreateAccessPointForObjectLambdaRequest";
const _CAPR = "CreateAccessPointRequest";
const _CAh = "ChecksumAlgorithm";
const _CAr = "CreatedAfter";
const _CB = "CreatedBefore";
const _CBC = "CreateBucketConfiguration";
const _CC = "CacheControl";
const _CD = "CreationDate";
const _CDo = "ContentDisposition";
const _CE = "ContentEncoding";
const _CI = "ConfigId";
const _CJR = "CreateJobRequest";
const _CL = "ContentLanguage";
const _CLo = "ContentLength";
const _CMD = "ContentMD5";
const _CMRAPI = "CreateMultiRegionAccessPointInput";
const _CMRAPR = "CreateMultiRegionAccessPointRequest";
const _CR = "ConfirmationRequired";
const _CRSBA = "ConfirmRemoveSelfBucketAccess";
const _CRT = "ClientRequestToken";
const _CSLGR = "CreateStorageLensGroupRequest";
const _CT = "ClientToken";
const _CTo = "ContentTransformation";
const _CTon = "ContentType";
const _CTr = "CreationTime";
const _CWM = "CloudWatchMetrics";
const _CWME = "CloudWatchMetricsEnabled";
const _Co = "Code";
const _Cr = "Credentials";
const _D = "Description";
const _DAI = "DaysAfterInitiation";
const _DB = "DirectoryBucket";
const _DE = "DataExport";
const _DGT = "DaysGreaterThan";
const _DLT = "DaysLessThan";
const _DMR = "DeleteMarkerReplication";
const _DMRAPI = "DeleteMultiRegionAccessPointInput";
const _DMRAPR = "DeleteMultiRegionAccessPointRequest";
const _DMRS = "DeleteMarkerReplicationStatus";
const _DN = "DisplayName";
const _DS = "DurationSeconds";
const _DSCM = "DetailedStatusCodesMetrics";
const _DSI = "DataSourceId";
const _DST = "DataSourceType";
const _Da = "Date";
const _Day = "Days";
const _De = "Details";
const _Del = "Delimiter";
const _Des = "Destination";
const _E = "Endpoints";
const _EBO = "ExpectedBucketOwner";
const _EC = "EncryptionConfiguration";
const _ED = "ErrorDetails";
const _EFR = "EligibleForReplication";
const _EID = "ExpirationInDays";
const _EMBO = "ExpectedManifestBucketOwner";
const _EMO = "EnableManifestOutput";
const _EODM = "ExpiredObjectDeleteMarker";
const _EOR = "ExistingObjectReplication";
const _EORS = "ExistingObjectReplicationStatus";
const _ES = "ExpirationStatus";
const _ET = "ETag";
const _ETIAS = "ElapsedTimeInActiveSeconds";
const _ETv = "EventThreshold";
const _En = "Enabled";
const _Enc = "Encryption";
const _Es = "Established";
const _Ex = "Exclude";
const _Exp = "Expiration";
const _F = "Format";
const _FA = "FunctionArn";
const _FAS = "FunctionArnString";
const _FC = "FailureCode";
const _FP = "FunctionPayload";
const _FR = "FailureReasons";
const _FRa = "FailureReason";
const _Fi = "Fields";
const _Fil = "Filter";
const _G = "Grantee";
const _GFC = "GrantFullControl";
const _GI = "GranteeIdentifier";
const _GJT = "GlacierJobTier";
const _GMD = "GeneratedManifestDescriptor";
const _GME = "GeneratedManifestEncryption";
const _GMF = "GeneratedManifestFormat";
const _GR = "GrantRead";
const _GRACP = "GrantReadACP";
const _GS = "GrantScope";
const _GT = "GranteeType";
const _GW = "GrantWrite";
const _GWACP = "GrantWriteACP";
const _Gr = "Grants";
const _HED = "HttpExpiresDate";
const _HR = "HomeRegion";
const _I = "Include";
const _IAMRA = "IAMRoleArn";
const _ICA = "IdentityCenterArn";
const _ICAA = "IdentityCenterApplicationArn";
const _ICIA = "IdentityCenterInstanceArn";
const _ID = "ID";
const _IE = "IsEnabled";
const _IP = "IsPublic";
const _IPA = "IgnorePublicAcls";
const _ISV = "InvocationSchemaVersion";
const _Id = "Identifier";
const _Id_ = "Id";
const _J = "Job";
const _JA = "JobArn";
const _JI = "JobId";
const _JM = "JobManifest";
const _JMF = "JobManifestFormat";
const _JMFN = "JobManifestFieldName";
const _JMG = "JobManifestGenerator";
const _JMGF = "JobManifestGeneratorFilter";
const _JML = "JobManifestLocation";
const _JMS = "JobManifestSpec";
const _JO = "JobOperation";
const _JP = "JobPriority";
const _JR = "JobReport";
const _JRF = "JobReportFormat";
const _JRS = "JobReportScope";
const _JS = "JobStatuses";
const _Jo = "Jobs";
const _K = "Key";
const _KI = "KeyId";
const _KKAS = "KmsKeyArnString";
const _KNC = "KeyNameConstraint";
const _L = "Location";
const _LC = "LocationConstraint";
const _LCi = "LifecycleConfiguration";
const _LE = "LifecycleExpiration";
const _LH = "LegalHold";
const _LI = "LambdaInvoke";
const _LIO = "LambdaInvokeOperation";
const _LR = "LifecycleRule";
const _LRAO = "LifecycleRuleAndOperator";
const _LRF = "LifecycleRuleFilter";
const _LS = "LocationScope";
const _M = "Manifest";
const _MAP = "MatchAnyPrefix";
const _MAS = "MatchAnySuffix";
const _MASC = "MatchAnyStorageClass";
const _MASa = "MatchAnySubstring";
const _MAT = "MatchAnyTag";
const _MD = "MfaDelete";
const _MDa = "MaxDepth";
const _MDe = "MetadataDirective";
const _ME = "ManifestEncryption";
const _MF = "ManifestFormat";
const _MFA = "MFA";
const _MFAD = "MFADelete";
const _MG = "ManifestGenerator";
const _MGT = "MatchedGrantTarget";
const _MLS = "MaxLength1024String";
const _MOA = "MatchObjectAge";
const _MOL = "ManifestOutputLocation";
const _MOS = "MatchObjectSize";
const _MP = "ManifestPrefix";
const _MPS = "ManifestPrefixString";
const _MR = "MaxResults";
const _MRAPCT = "MultiRegionAccessPointClientToken";
const _MRAPD = "MultiRegionAccessPointDetails";
const _MRAPN = "MultiRegionAccessPointName";
const _MRAPR = "MultiRegionAccessPointRoute";
const _MS = "MetricsStatus";
const _MSBP = "MinStorageBytesPercentage";
const _MSC = "ModifiedSinceConstraint";
const _Me = "Message";
const _Met = "Metrics";
const _Mi = "Minutes";
const _Mo = "Mode";
const _Mr = "Mrap";
const _N = "Name";
const _ND = "NoncurrentDays";
const _NEMLS = "NonEmptyMaxLength64String";
const _NEMLSo = "NonEmptyMaxLength256String";
const _NEMLSon = "NonEmptyMaxLength1024String";
const _NEMLSonm = "NonEmptyMaxLength2048String";
const _NNV = "NewerNoncurrentVersions";
const _NO = "NetworkOrigin";
const _NOM = "NewObjectMetadata";
const _NOT = "NewObjectTagging";
const _NOTF = "NumberOfTasksFailed";
const _NOTS = "NumberOfTasksSucceeded";
const _NT = "NextToken";
const _NVC = "NoncurrentVersionCount";
const _NVE = "NoncurrentVersionExpiration";
const _NVT = "NoncurrentVersionTransitions";
const _NVTo = "NoncurrentVersionTransition";
const _O = "Operation";
const _OA = "ObjectArn";
const _OAV = "ObjectAgeValue";
const _OCT = "ObjectCreationTime";
const _OI = "OutpostId";
const _OLAF = "ObjectLambdaAllowedFeature";
const _OLAP = "ObjectLambdaAccessPoint";
const _OLAPA = "ObjectLambdaAccessPointArn";
const _OLAPL = "ObjectLambdaAccessPointList";
const _OLC = "ObjectLambdaConfiguration";
const _OLCT = "ObjectLambdaContentTransformation";
const _OLEFB = "ObjectLockEnabledForBucket";
const _OLLHS = "ObjectLockLegalHoldStatus";
const _OLM = "ObjectLockMode";
const _OLP = "ObjectLambdaPolicy";
const _OLRUD = "ObjectLockRetainUntilDate";
const _OLSAPA = "ObjectLambdaSupportingAccessPointArn";
const _OLTC = "ObjectLambdaTransformationConfiguration";
const _OLTCA = "ObjectLambdaTransformationConfigurationAction";
const _OO = "OwnerOverride";
const _ORS = "ObjectReplicationStatuses";
const _OSGT = "ObjectSizeGreaterThan";
const _OSGTB = "ObjectSizeGreaterThanBytes";
const _OSLT = "ObjectSizeLessThan";
const _OSLTB = "ObjectSizeLessThanBytes";
const _OSV = "ObjectSizeValue";
const _OSVu = "OutputSchemaVersion";
const _OVI = "ObjectVersionId";
const _Or = "Organization";
const _Or_ = "Or";
const _Ow = "Owner";
const _P = "Permission";
const _PAB = "PublicAccessBlock";
const _PABC = "PublicAccessBlockConfiguration";
const _PABE = "PublicAccessBlockEnabled";
const _PAGIRPR = "PutAccessGrantsInstanceResourcePolicyRequest";
const _PAPCFOLR = "PutAccessPointConfigurationForObjectLambdaRequest";
const _PAPPFOLR = "PutAccessPointPolicyForObjectLambdaRequest";
const _PAPPR = "PutAccessPointPolicyRequest";
const _PAPSR = "PutAccessPointScopeRequest";
const _PBPR = "PutBucketPolicyRequest";
const _PD = "PolicyDocument";
const _PJTR = "PutJobTaggingRequest";
const _PL = "PrefixLevel";
const _PLSM = "PrefixLevelStorageMetrics";
const _PMRAPPI = "PutMultiRegionAccessPointPolicyInput";
const _PMRAPPR = "PutMultiRegionAccessPointPolicyRequest";
const _PS = "PolicyStatus";
const _PSLCR = "PutStorageLensConfigurationRequest";
const _PSLCTR = "PutStorageLensConfigurationTaggingRequest";
const _PSr = "ProgressSummary";
const _Pe = "Permissions";
const _Po = "Policy";
const _Pr = "Priority";
const _Pre = "Prefix";
const _Pref = "Prefixes";
const _Pri = "Privilege";
const _Pro = "Proposed";
const _R = "Report";
const _RA = "RoleArn";
const _RB = "RegionalBucket";
const _RBL = "RegionalBucketList";
const _RC = "ReplicationConfiguration";
const _RCe = "RequesterCharged";
const _RD = "ResponseDetails";
const _RI = "RequestId";
const _RJS = "RequestedJobStatus";
const _RKKID = "ReplicaKmsKeyID";
const _RL = "RedirectLocation";
const _RM = "ReplicaModifications";
const _RMS = "ReplicaModificationsStatus";
const _RN = "RegionName";
const _RP = "RequesterPays";
const _RPB = "RestrictPublicBuckets";
const _RPS = "ReportPrefixString";
const _RPe = "RequestParameters";
const _RR = "ReplicationRule";
const _RRAO = "ReplicationRuleAndOperator";
const _RRF = "ReplicationRuleFilter";
const _RRS = "ReplicationRuleStatus";
const _RS = "ReportScope";
const _RSC = "ReplicationStorageClass";
const _RSe = "ReplicationStatus";
const _RSeq = "RequestStatus";
const _RT = "ReplicationTime";
const _RTARN = "RequestTokenARN";
const _RTS = "ReplicationTimeStatus";
const _RTV = "ReplicationTimeValue";
const _RU = "RouteUpdates";
const _RUD = "RetainUntilDate";
const _Re = "Regions";
const _Reg = "Region";
const _Res = "Resource";
const _Ret = "Retention";
const _Ro = "Routes";
const _Rol = "Role";
const _Rou = "Route";
const _Ru = "Rules";
const _Rul = "Rule";
const _S = "Scope";
const _SACL = "S3AccessControlList";
const _SACP = "S3AccessControlPolicy";
const _SAK = "SecretAccessKey";
const _SAP = "SupportingAccessPoint";
const _SAWSR = "S3AWSRegion";
const _SB = "SourceBucket";
const _SBAS = "S3BucketArnString";
const _SBD = "S3BucketDestination";
const _SC = "StorageClass";
const _SCA = "S3ChecksumAlgorithm";
const _SCACL = "S3CannedAccessControlList";
const _SCL = "S3ContentLength";
const _SCOO = "S3CopyObjectOperation";
const _SCe = "SelectionCriteria";
const _SCu = "SuspendedCause";
const _SD = "SuspendedDate";
const _SDOT = "S3DeleteObjectTagging";
const _SDOTO = "S3DeleteObjectTaggingOperation";
const _SEID = "S3ExpirationInDays";
const _SG = "S3Grant";
const _SGJT = "S3GlacierJobTier";
const _SGTI = "S3GranteeTypeIdentifier";
const _SGr = "S3Grantee";
const _SIRO = "S3InitiateRestoreObject";
const _SIROO = "S3InitiateRestoreObjectOperation";
const _SJMG = "S3JobManifestGenerator";
const _SK = "SSE-KMS";
const _SKAS = "S3KeyArnString";
const _SKEO = "SseKmsEncryptedObjects";
const _SKEOS = "SseKmsEncryptedObjectsStatus";
const _SLA = "StorageLensArn";
const _SLAO = "StorageLensAwsOrg";
const _SLC = "StorageLensConfiguration";
const _SLCL = "StorageLensConfigurationList";
const _SLDE = "StorageLensDataExport";
const _SLDEE = "StorageLensDataExportEncryption";
const _SLG = "StorageLensGroup";
const _SLGA = "StorageLensGroupArn";
const _SLGAO = "StorageLensGroupAndOperator";
const _SLGF = "StorageLensGroupFilter";
const _SLGL = "StorageLensGroupList";
const _SLGLSC = "StorageLensGroupLevelSelectionCriteria";
const _SLGLt = "StorageLensGroupLevel";
const _SLGN = "StorageLensGroupName";
const _SLGOO = "StorageLensGroupOrOperator";
const _SLPLD = "StorageLensPrefixLevelDelimiter";
const _SLPLMD = "StorageLensPrefixLevelMaxDepth";
const _SLT = "StorageLensTag";
const _SM = "StorageMetrics";
const _SMD = "S3MetadataDirective";
const _SMOL = "S3ManifestOutputLocation";
const _SMRAPRR = "SubmitMultiRegionAccessPointRoutesRequest";
const _SOLLH = "S3ObjectLockLegalHold";
const _SOLLHS = "S3ObjectLockLegalHoldStatus";
const _SOLM = "S3ObjectLockMode";
const _SOLRM = "S3ObjectLockRetentionMode";
const _SOM = "S3ObjectMetadata";
const _SOO = "S3ObjectOwner";
const _SOVI = "S3ObjectVersionId";
const _SP = "S3Prefix";
const _SPOA = "S3PutObjectAcl";
const _SPOC = "S3PutObjectCopy";
const _SPOLH = "S3PutObjectLegalHold";
const _SPOR = "S3PutObjectRetention";
const _SPOT = "S3PutObjectTagging";
const _SPT = "S3PrefixType";
const _SPc = "ScopePermission";
const _SPe = "S3Permission";
const _SR = "S3Retention";
const _SRO = "S3ReplicateObject";
const _SROO = "S3ReplicateObjectOperation";
const _SROSEBAS = "S3RegionalOrS3ExpressBucketArnString";
const _SS = "SSE-S3";
const _SSC = "SourceSelectionCriteria";
const _SSCt = "S3StorageClass";
const _SSEA = "SSEAlgorithm";
const _SSEAKKI = "SSEAwsKmsKeyId";
const _SSEKMS = "SSEKMS";
const _SSEKMSKI = "SSEKMSKeyId";
const _SSES = "SSES3";
const _SSOAO = "S3SetObjectAclOperation";
const _SSOLHO = "S3SetObjectLegalHoldOperation";
const _SSORO = "S3SetObjectRetentionOperation";
const _SSOTO = "S3SetObjectTaggingOperation";
const _SSP = "S3SubPrefix";
const _SSSEA = "S3SSEAlgorithm";
const _ST = "S3Tag";
const _STe = "SessionToken";
const _SUR = "StatusUpdateReason";
const _Se = "Setting";
const _Sp = "Spec";
const _St = "Status";
const _Su = "Suffix";
const _T = "Tags";
const _TC = "TransformationConfigurations";
const _TCr = "TransformationConfiguration";
const _TD = "TerminationDate";
const _TDP = "TrafficDialPercentage";
const _TI = "TypeIdentifier";
const _TK = "TagKeys";
const _TKP = "TargetKeyPrefix";
const _TKS = "TagKeyString";
const _TNOT = "TotalNumberOfTasks";
const _TR = "TargetResource";
const _TRR = "TagResourceRequest";
const _TS = "TagSet";
const _TSC = "TransitionStorageClass";
const _TSi = "TimeStamp";
const _TT = "TargetType";
const _TVS = "TagValueString";
const _Ta = "Target";
const _Tag = "Tag";
const _Tagg = "Tagging";
const _Ti = "Time";
const _Tim = "Timers";
const _Tr = "Transitions";
const _Tra = "Transition";
const _UA = "UserArguments";
const _UAGLR = "UpdateAccessGrantsLocationRequest";
const _UM = "UserMetadata";
const _UMSC = "UnModifiedSinceConstraint";
const _USLGR = "UpdateStorageLensGroupRequest";
const _V = "Value";
const _VC = "VpcConfiguration";
const _VCe = "VersioningConfiguration";
const _VI = "VpcId";
const _aBA = "allowedByApplication";
const _aa = "application_arn";
const _b = "bucket";
const _dB = "directoryBucket";
const _dS = "durationSeconds";
const _dSI = "dataSourceId";
const _dST = "dataSourceType";
const _e = "entry";
const _g = "granteetype";
const _gr = "granteeidentifier";
const _gra = "grantscope";
const _jS = "jobStatuses";
const _l = "locationscope";
const _lo = "location";
const _m = "member";
const _mR = "maxResults";
const _nT = "nextToken";
const _p = "permission";
const _pr = "privilege";
const _pri = "priority";
const _rJS = "requestedJobStatus";
const _s = "s3prefix";
const _sUR = "statusUpdateReason";
const _t = "target";
const _tK = "tagKeys";
const _tT = "targetType";
const _v = "value";
const _ve = '<?xml version="1.0" encoding="UTF-8"?>';
const _xaa = "x-amz-acl";
const _xaai = "x-amz-account-id";
const _xabole = "x-amz-bucket-object-lock-enabled";
const _xacrsba = "x-amz-confirm-remove-self-bucket-access";
const _xagfc = "x-amz-grant-full-control";
const _xagr = "x-amz-grant-read";
const _xagra = "x-amz-grant-read-acp";
const _xagw = "x-amz-grant-write";
const _xagwa = "x-amz-grant-write-acp";
const _xam = "x-amz-mfa";
const _xaoi = "x-amz-outpost-id";
