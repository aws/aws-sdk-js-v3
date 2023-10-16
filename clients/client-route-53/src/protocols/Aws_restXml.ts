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

import {
  ActivateKeySigningKeyCommandInput,
  ActivateKeySigningKeyCommandOutput,
} from "../commands/ActivateKeySigningKeyCommand";
import {
  AssociateVPCWithHostedZoneCommandInput,
  AssociateVPCWithHostedZoneCommandOutput,
} from "../commands/AssociateVPCWithHostedZoneCommand";
import {
  ChangeCidrCollectionCommandInput,
  ChangeCidrCollectionCommandOutput,
} from "../commands/ChangeCidrCollectionCommand";
import {
  ChangeResourceRecordSetsCommandInput,
  ChangeResourceRecordSetsCommandOutput,
} from "../commands/ChangeResourceRecordSetsCommand";
import {
  ChangeTagsForResourceCommandInput,
  ChangeTagsForResourceCommandOutput,
} from "../commands/ChangeTagsForResourceCommand";
import {
  CreateCidrCollectionCommandInput,
  CreateCidrCollectionCommandOutput,
} from "../commands/CreateCidrCollectionCommand";
import { CreateHealthCheckCommandInput, CreateHealthCheckCommandOutput } from "../commands/CreateHealthCheckCommand";
import { CreateHostedZoneCommandInput, CreateHostedZoneCommandOutput } from "../commands/CreateHostedZoneCommand";
import {
  CreateKeySigningKeyCommandInput,
  CreateKeySigningKeyCommandOutput,
} from "../commands/CreateKeySigningKeyCommand";
import {
  CreateQueryLoggingConfigCommandInput,
  CreateQueryLoggingConfigCommandOutput,
} from "../commands/CreateQueryLoggingConfigCommand";
import {
  CreateReusableDelegationSetCommandInput,
  CreateReusableDelegationSetCommandOutput,
} from "../commands/CreateReusableDelegationSetCommand";
import {
  CreateTrafficPolicyCommandInput,
  CreateTrafficPolicyCommandOutput,
} from "../commands/CreateTrafficPolicyCommand";
import {
  CreateTrafficPolicyInstanceCommandInput,
  CreateTrafficPolicyInstanceCommandOutput,
} from "../commands/CreateTrafficPolicyInstanceCommand";
import {
  CreateTrafficPolicyVersionCommandInput,
  CreateTrafficPolicyVersionCommandOutput,
} from "../commands/CreateTrafficPolicyVersionCommand";
import {
  CreateVPCAssociationAuthorizationCommandInput,
  CreateVPCAssociationAuthorizationCommandOutput,
} from "../commands/CreateVPCAssociationAuthorizationCommand";
import {
  DeactivateKeySigningKeyCommandInput,
  DeactivateKeySigningKeyCommandOutput,
} from "../commands/DeactivateKeySigningKeyCommand";
import {
  DeleteCidrCollectionCommandInput,
  DeleteCidrCollectionCommandOutput,
} from "../commands/DeleteCidrCollectionCommand";
import { DeleteHealthCheckCommandInput, DeleteHealthCheckCommandOutput } from "../commands/DeleteHealthCheckCommand";
import { DeleteHostedZoneCommandInput, DeleteHostedZoneCommandOutput } from "../commands/DeleteHostedZoneCommand";
import {
  DeleteKeySigningKeyCommandInput,
  DeleteKeySigningKeyCommandOutput,
} from "../commands/DeleteKeySigningKeyCommand";
import {
  DeleteQueryLoggingConfigCommandInput,
  DeleteQueryLoggingConfigCommandOutput,
} from "../commands/DeleteQueryLoggingConfigCommand";
import {
  DeleteReusableDelegationSetCommandInput,
  DeleteReusableDelegationSetCommandOutput,
} from "../commands/DeleteReusableDelegationSetCommand";
import {
  DeleteTrafficPolicyCommandInput,
  DeleteTrafficPolicyCommandOutput,
} from "../commands/DeleteTrafficPolicyCommand";
import {
  DeleteTrafficPolicyInstanceCommandInput,
  DeleteTrafficPolicyInstanceCommandOutput,
} from "../commands/DeleteTrafficPolicyInstanceCommand";
import {
  DeleteVPCAssociationAuthorizationCommandInput,
  DeleteVPCAssociationAuthorizationCommandOutput,
} from "../commands/DeleteVPCAssociationAuthorizationCommand";
import {
  DisableHostedZoneDNSSECCommandInput,
  DisableHostedZoneDNSSECCommandOutput,
} from "../commands/DisableHostedZoneDNSSECCommand";
import {
  DisassociateVPCFromHostedZoneCommandInput,
  DisassociateVPCFromHostedZoneCommandOutput,
} from "../commands/DisassociateVPCFromHostedZoneCommand";
import {
  EnableHostedZoneDNSSECCommandInput,
  EnableHostedZoneDNSSECCommandOutput,
} from "../commands/EnableHostedZoneDNSSECCommand";
import { GetAccountLimitCommandInput, GetAccountLimitCommandOutput } from "../commands/GetAccountLimitCommand";
import { GetChangeCommandInput, GetChangeCommandOutput } from "../commands/GetChangeCommand";
import { GetCheckerIpRangesCommandInput, GetCheckerIpRangesCommandOutput } from "../commands/GetCheckerIpRangesCommand";
import { GetDNSSECCommandInput, GetDNSSECCommandOutput } from "../commands/GetDNSSECCommand";
import { GetGeoLocationCommandInput, GetGeoLocationCommandOutput } from "../commands/GetGeoLocationCommand";
import { GetHealthCheckCommandInput, GetHealthCheckCommandOutput } from "../commands/GetHealthCheckCommand";
import {
  GetHealthCheckCountCommandInput,
  GetHealthCheckCountCommandOutput,
} from "../commands/GetHealthCheckCountCommand";
import {
  GetHealthCheckLastFailureReasonCommandInput,
  GetHealthCheckLastFailureReasonCommandOutput,
} from "../commands/GetHealthCheckLastFailureReasonCommand";
import {
  GetHealthCheckStatusCommandInput,
  GetHealthCheckStatusCommandOutput,
} from "../commands/GetHealthCheckStatusCommand";
import { GetHostedZoneCommandInput, GetHostedZoneCommandOutput } from "../commands/GetHostedZoneCommand";
import { GetHostedZoneCountCommandInput, GetHostedZoneCountCommandOutput } from "../commands/GetHostedZoneCountCommand";
import { GetHostedZoneLimitCommandInput, GetHostedZoneLimitCommandOutput } from "../commands/GetHostedZoneLimitCommand";
import {
  GetQueryLoggingConfigCommandInput,
  GetQueryLoggingConfigCommandOutput,
} from "../commands/GetQueryLoggingConfigCommand";
import {
  GetReusableDelegationSetCommandInput,
  GetReusableDelegationSetCommandOutput,
} from "../commands/GetReusableDelegationSetCommand";
import {
  GetReusableDelegationSetLimitCommandInput,
  GetReusableDelegationSetLimitCommandOutput,
} from "../commands/GetReusableDelegationSetLimitCommand";
import { GetTrafficPolicyCommandInput, GetTrafficPolicyCommandOutput } from "../commands/GetTrafficPolicyCommand";
import {
  GetTrafficPolicyInstanceCommandInput,
  GetTrafficPolicyInstanceCommandOutput,
} from "../commands/GetTrafficPolicyInstanceCommand";
import {
  GetTrafficPolicyInstanceCountCommandInput,
  GetTrafficPolicyInstanceCountCommandOutput,
} from "../commands/GetTrafficPolicyInstanceCountCommand";
import { ListCidrBlocksCommandInput, ListCidrBlocksCommandOutput } from "../commands/ListCidrBlocksCommand";
import {
  ListCidrCollectionsCommandInput,
  ListCidrCollectionsCommandOutput,
} from "../commands/ListCidrCollectionsCommand";
import { ListCidrLocationsCommandInput, ListCidrLocationsCommandOutput } from "../commands/ListCidrLocationsCommand";
import { ListGeoLocationsCommandInput, ListGeoLocationsCommandOutput } from "../commands/ListGeoLocationsCommand";
import { ListHealthChecksCommandInput, ListHealthChecksCommandOutput } from "../commands/ListHealthChecksCommand";
import {
  ListHostedZonesByNameCommandInput,
  ListHostedZonesByNameCommandOutput,
} from "../commands/ListHostedZonesByNameCommand";
import {
  ListHostedZonesByVPCCommandInput,
  ListHostedZonesByVPCCommandOutput,
} from "../commands/ListHostedZonesByVPCCommand";
import { ListHostedZonesCommandInput, ListHostedZonesCommandOutput } from "../commands/ListHostedZonesCommand";
import {
  ListQueryLoggingConfigsCommandInput,
  ListQueryLoggingConfigsCommandOutput,
} from "../commands/ListQueryLoggingConfigsCommand";
import {
  ListResourceRecordSetsCommandInput,
  ListResourceRecordSetsCommandOutput,
} from "../commands/ListResourceRecordSetsCommand";
import {
  ListReusableDelegationSetsCommandInput,
  ListReusableDelegationSetsCommandOutput,
} from "../commands/ListReusableDelegationSetsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListTagsForResourcesCommandInput,
  ListTagsForResourcesCommandOutput,
} from "../commands/ListTagsForResourcesCommand";
import {
  ListTrafficPoliciesCommandInput,
  ListTrafficPoliciesCommandOutput,
} from "../commands/ListTrafficPoliciesCommand";
import {
  ListTrafficPolicyInstancesByHostedZoneCommandInput,
  ListTrafficPolicyInstancesByHostedZoneCommandOutput,
} from "../commands/ListTrafficPolicyInstancesByHostedZoneCommand";
import {
  ListTrafficPolicyInstancesByPolicyCommandInput,
  ListTrafficPolicyInstancesByPolicyCommandOutput,
} from "../commands/ListTrafficPolicyInstancesByPolicyCommand";
import {
  ListTrafficPolicyInstancesCommandInput,
  ListTrafficPolicyInstancesCommandOutput,
} from "../commands/ListTrafficPolicyInstancesCommand";
import {
  ListTrafficPolicyVersionsCommandInput,
  ListTrafficPolicyVersionsCommandOutput,
} from "../commands/ListTrafficPolicyVersionsCommand";
import {
  ListVPCAssociationAuthorizationsCommandInput,
  ListVPCAssociationAuthorizationsCommandOutput,
} from "../commands/ListVPCAssociationAuthorizationsCommand";
import { TestDNSAnswerCommandInput, TestDNSAnswerCommandOutput } from "../commands/TestDNSAnswerCommand";
import { UpdateHealthCheckCommandInput, UpdateHealthCheckCommandOutput } from "../commands/UpdateHealthCheckCommand";
import {
  UpdateHostedZoneCommentCommandInput,
  UpdateHostedZoneCommentCommandOutput,
} from "../commands/UpdateHostedZoneCommentCommand";
import {
  UpdateTrafficPolicyCommentCommandInput,
  UpdateTrafficPolicyCommentCommandOutput,
} from "../commands/UpdateTrafficPolicyCommentCommand";
import {
  UpdateTrafficPolicyInstanceCommandInput,
  UpdateTrafficPolicyInstanceCommandOutput,
} from "../commands/UpdateTrafficPolicyInstanceCommand";
import {
  AccountLimit,
  AlarmIdentifier,
  AliasTarget,
  Change,
  ChangeBatch,
  ChangeInfo,
  CidrBlockInUseException,
  CidrBlockSummary,
  CidrCollection,
  CidrCollectionAlreadyExistsException,
  CidrCollectionChange,
  CidrCollectionInUseException,
  CidrCollectionVersionMismatchException,
  CidrRoutingConfig,
  CloudWatchAlarmConfiguration,
  CollectionSummary,
  ConcurrentModification,
  ConflictingDomainExists,
  ConflictingTypes,
  DelegationSet,
  DelegationSetAlreadyCreated,
  DelegationSetAlreadyReusable,
  DelegationSetInUse,
  DelegationSetNotAvailable,
  DelegationSetNotReusable,
  Dimension,
  DNSSECNotFound,
  DNSSECStatus,
  GeoLocation,
  GeoLocationDetails,
  HealthCheck,
  HealthCheckAlreadyExists,
  HealthCheckConfig,
  HealthCheckInUse,
  HealthCheckObservation,
  HealthCheckRegion,
  HealthCheckVersionMismatch,
  HostedZone,
  HostedZoneAlreadyExists,
  HostedZoneConfig,
  HostedZoneLimit,
  HostedZoneNotEmpty,
  HostedZoneNotFound,
  HostedZoneNotPrivate,
  HostedZoneOwner,
  HostedZonePartiallyDelegated,
  HostedZoneSummary,
  IncompatibleVersion,
  InsufficientCloudWatchLogsResourcePolicy,
  InvalidArgument,
  InvalidChangeBatch,
  InvalidDomainName,
  InvalidInput,
  InvalidKeySigningKeyName,
  InvalidKeySigningKeyStatus,
  InvalidKMSArn,
  InvalidPaginationToken,
  InvalidSigningStatus,
  InvalidTrafficPolicyDocument,
  InvalidVPCId,
  KeySigningKey,
  KeySigningKeyAlreadyExists,
  KeySigningKeyInParentDSRecord,
  KeySigningKeyInUse,
  KeySigningKeyWithActiveStatusNotFound,
  LastVPCAssociation,
  LimitsExceeded,
  LinkedService,
  LocationSummary,
  NoSuchChange,
  NoSuchCidrCollectionException,
  NoSuchCidrLocationException,
  NoSuchCloudWatchLogsLogGroup,
  NoSuchDelegationSet,
  NoSuchGeoLocation,
  NoSuchHealthCheck,
  NoSuchHostedZone,
  NoSuchKeySigningKey,
  NoSuchQueryLoggingConfig,
  NoSuchTrafficPolicy,
  NoSuchTrafficPolicyInstance,
  NotAuthorizedException,
  PriorRequestNotComplete,
  PublicZoneVPCAssociation,
  QueryLoggingConfig,
  QueryLoggingConfigAlreadyExists,
  ResettableElementName,
  ResourceRecord,
  ResourceRecordSet,
  ResourceTagSet,
  ReusableDelegationSetLimit,
  StatusReport,
  Tag,
  ThrottlingException,
  TooManyHealthChecks,
  TooManyHostedZones,
  TooManyKeySigningKeys,
  TooManyTrafficPolicies,
  TooManyTrafficPolicyInstances,
  TooManyTrafficPolicyVersionsForCurrentPolicy,
  TooManyVPCAssociationAuthorizations,
  TrafficPolicy,
  TrafficPolicyAlreadyExists,
  TrafficPolicyInstance,
  TrafficPolicyInstanceAlreadyExists,
  TrafficPolicyInUse,
  TrafficPolicySummary,
  VPC,
  VPCAssociationAuthorizationNotFound,
  VPCAssociationNotFound,
} from "../models/models_0";
import { Route53ServiceException as __BaseException } from "../models/Route53ServiceException";

/**
 * serializeAws_restXmlActivateKeySigningKeyCommand
 */
export const se_ActivateKeySigningKeyCommand = async (
  input: ActivateKeySigningKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2013-04-01/keysigningkey/{HostedZoneId}/{Name}/activate";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "HostedZoneId",
    () => input.HostedZoneId!,
    "{HostedZoneId}",
    false
  );
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
 * serializeAws_restXmlAssociateVPCWithHostedZoneCommand
 */
export const se_AssociateVPCWithHostedZoneCommand = async (
  input: AssociateVPCWithHostedZoneCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2013-04-01/hostedzone/{HostedZoneId}/associatevpc";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "HostedZoneId",
    () => input.HostedZoneId!,
    "{HostedZoneId}",
    false
  );
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("AssociateVPCWithHostedZoneRequest");
  bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
  if (input.Comment !== undefined) {
    const node = __XmlNode.of("AssociateVPCComment", input.Comment).withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.VPC !== undefined) {
    const node = se_VPC(input.VPC, context).withName("VPC");
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
 * serializeAws_restXmlChangeCidrCollectionCommand
 */
export const se_ChangeCidrCollectionCommand = async (
  input: ChangeCidrCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/cidrcollection/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("ChangeCidrCollectionRequest");
  bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
  if (input.Changes !== undefined) {
    const nodes = se_CidrCollectionChanges(input.Changes, context);
    const containerNode = new __XmlNode("Changes");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.CollectionVersion !== undefined) {
    const node = __XmlNode.of("CollectionVersion", String(input.CollectionVersion)).withName("CollectionVersion");
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
 * serializeAws_restXmlChangeResourceRecordSetsCommand
 */
export const se_ChangeResourceRecordSetsCommand = async (
  input: ChangeResourceRecordSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2013-04-01/hostedzone/{HostedZoneId}/rrset";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "HostedZoneId",
    () => input.HostedZoneId!,
    "{HostedZoneId}",
    false
  );
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("ChangeResourceRecordSetsRequest");
  bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
  if (input.ChangeBatch !== undefined) {
    const node = se_ChangeBatch(input.ChangeBatch, context).withName("ChangeBatch");
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
 * serializeAws_restXmlChangeTagsForResourceCommand
 */
export const se_ChangeTagsForResourceCommand = async (
  input: ChangeTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2013-04-01/tags/{ResourceType}/{ResourceId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ResourceType",
    () => input.ResourceType!,
    "{ResourceType}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceId", () => input.ResourceId!, "{ResourceId}", false);
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("ChangeTagsForResourceRequest");
  bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
  if (input.AddTags !== undefined) {
    const nodes = se_TagList(input.AddTags, context);
    const containerNode = new __XmlNode("AddTags");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.RemoveTagKeys !== undefined) {
    const nodes = se_TagKeyList(input.RemoveTagKeys, context);
    const containerNode = new __XmlNode("RemoveTagKeys");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
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
 * serializeAws_restXmlCreateCidrCollectionCommand
 */
export const se_CreateCidrCollectionCommand = async (
  input: CreateCidrCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/cidrcollection";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("CreateCidrCollectionRequest");
  bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
  if (input.CallerReference !== undefined) {
    const node = __XmlNode.of("CidrNonce", input.CallerReference).withName("CallerReference");
    bodyNode.addChildNode(node);
  }
  if (input.Name !== undefined) {
    const node = __XmlNode.of("CollectionName", input.Name).withName("Name");
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
 * serializeAws_restXmlCreateHealthCheckCommand
 */
export const se_CreateHealthCheckCommand = async (
  input: CreateHealthCheckCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/healthcheck";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("CreateHealthCheckRequest");
  bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
  if (input.CallerReference !== undefined) {
    const node = __XmlNode.of("HealthCheckNonce", input.CallerReference).withName("CallerReference");
    bodyNode.addChildNode(node);
  }
  if (input.HealthCheckConfig !== undefined) {
    const node = se_HealthCheckConfig(input.HealthCheckConfig, context).withName("HealthCheckConfig");
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
 * serializeAws_restXmlCreateHostedZoneCommand
 */
export const se_CreateHostedZoneCommand = async (
  input: CreateHostedZoneCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/hostedzone";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("CreateHostedZoneRequest");
  bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
  if (input.CallerReference !== undefined) {
    const node = __XmlNode.of("Nonce", input.CallerReference).withName("CallerReference");
    bodyNode.addChildNode(node);
  }
  if (input.DelegationSetId !== undefined) {
    const node = __XmlNode.of("ResourceId", input.DelegationSetId).withName("DelegationSetId");
    bodyNode.addChildNode(node);
  }
  if (input.HostedZoneConfig !== undefined) {
    const node = se_HostedZoneConfig(input.HostedZoneConfig, context).withName("HostedZoneConfig");
    bodyNode.addChildNode(node);
  }
  if (input.Name !== undefined) {
    const node = __XmlNode.of("DNSName", input.Name).withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.VPC !== undefined) {
    const node = se_VPC(input.VPC, context).withName("VPC");
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
 * serializeAws_restXmlCreateKeySigningKeyCommand
 */
export const se_CreateKeySigningKeyCommand = async (
  input: CreateKeySigningKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/keysigningkey";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("CreateKeySigningKeyRequest");
  bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
  if (input.CallerReference !== undefined) {
    const node = __XmlNode.of("Nonce", input.CallerReference).withName("CallerReference");
    bodyNode.addChildNode(node);
  }
  if (input.HostedZoneId !== undefined) {
    const node = __XmlNode.of("ResourceId", input.HostedZoneId).withName("HostedZoneId");
    bodyNode.addChildNode(node);
  }
  if (input.KeyManagementServiceArn !== undefined) {
    const node = __XmlNode.of("SigningKeyString", input.KeyManagementServiceArn).withName("KeyManagementServiceArn");
    bodyNode.addChildNode(node);
  }
  if (input.Name !== undefined) {
    const node = __XmlNode.of("SigningKeyName", input.Name).withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.Status !== undefined) {
    const node = __XmlNode.of("SigningKeyStatus", input.Status).withName("Status");
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
 * serializeAws_restXmlCreateQueryLoggingConfigCommand
 */
export const se_CreateQueryLoggingConfigCommand = async (
  input: CreateQueryLoggingConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/queryloggingconfig";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("CreateQueryLoggingConfigRequest");
  bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
  if (input.CloudWatchLogsLogGroupArn !== undefined) {
    const node = __XmlNode
      .of("CloudWatchLogsLogGroupArn", input.CloudWatchLogsLogGroupArn)
      .withName("CloudWatchLogsLogGroupArn");
    bodyNode.addChildNode(node);
  }
  if (input.HostedZoneId !== undefined) {
    const node = __XmlNode.of("ResourceId", input.HostedZoneId).withName("HostedZoneId");
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
 * serializeAws_restXmlCreateReusableDelegationSetCommand
 */
export const se_CreateReusableDelegationSetCommand = async (
  input: CreateReusableDelegationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/delegationset";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("CreateReusableDelegationSetRequest");
  bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
  if (input.CallerReference !== undefined) {
    const node = __XmlNode.of("Nonce", input.CallerReference).withName("CallerReference");
    bodyNode.addChildNode(node);
  }
  if (input.HostedZoneId !== undefined) {
    const node = __XmlNode.of("ResourceId", input.HostedZoneId).withName("HostedZoneId");
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
 * serializeAws_restXmlCreateTrafficPolicyCommand
 */
export const se_CreateTrafficPolicyCommand = async (
  input: CreateTrafficPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/trafficpolicy";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("CreateTrafficPolicyRequest");
  bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
  if (input.Comment !== undefined) {
    const node = __XmlNode.of("TrafficPolicyComment", input.Comment).withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.Document !== undefined) {
    const node = __XmlNode.of("TrafficPolicyDocument", input.Document).withName("Document");
    bodyNode.addChildNode(node);
  }
  if (input.Name !== undefined) {
    const node = __XmlNode.of("TrafficPolicyName", input.Name).withName("Name");
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
 * serializeAws_restXmlCreateTrafficPolicyInstanceCommand
 */
export const se_CreateTrafficPolicyInstanceCommand = async (
  input: CreateTrafficPolicyInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/trafficpolicyinstance";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("CreateTrafficPolicyInstanceRequest");
  bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
  if (input.HostedZoneId !== undefined) {
    const node = __XmlNode.of("ResourceId", input.HostedZoneId).withName("HostedZoneId");
    bodyNode.addChildNode(node);
  }
  if (input.Name !== undefined) {
    const node = __XmlNode.of("DNSName", input.Name).withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.TTL !== undefined) {
    const node = __XmlNode.of("TTL", String(input.TTL)).withName("TTL");
    bodyNode.addChildNode(node);
  }
  if (input.TrafficPolicyId !== undefined) {
    const node = __XmlNode.of("TrafficPolicyId", input.TrafficPolicyId).withName("TrafficPolicyId");
    bodyNode.addChildNode(node);
  }
  if (input.TrafficPolicyVersion !== undefined) {
    const node = __XmlNode
      .of("TrafficPolicyVersion", String(input.TrafficPolicyVersion))
      .withName("TrafficPolicyVersion");
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
 * serializeAws_restXmlCreateTrafficPolicyVersionCommand
 */
export const se_CreateTrafficPolicyVersionCommand = async (
  input: CreateTrafficPolicyVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/trafficpolicy/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("CreateTrafficPolicyVersionRequest");
  bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
  if (input.Comment !== undefined) {
    const node = __XmlNode.of("TrafficPolicyComment", input.Comment).withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.Document !== undefined) {
    const node = __XmlNode.of("TrafficPolicyDocument", input.Document).withName("Document");
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
 * serializeAws_restXmlCreateVPCAssociationAuthorizationCommand
 */
export const se_CreateVPCAssociationAuthorizationCommand = async (
  input: CreateVPCAssociationAuthorizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2013-04-01/hostedzone/{HostedZoneId}/authorizevpcassociation";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "HostedZoneId",
    () => input.HostedZoneId!,
    "{HostedZoneId}",
    false
  );
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("CreateVPCAssociationAuthorizationRequest");
  bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
  if (input.VPC !== undefined) {
    const node = se_VPC(input.VPC, context).withName("VPC");
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
 * serializeAws_restXmlDeactivateKeySigningKeyCommand
 */
export const se_DeactivateKeySigningKeyCommand = async (
  input: DeactivateKeySigningKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2013-04-01/keysigningkey/{HostedZoneId}/{Name}/deactivate";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "HostedZoneId",
    () => input.HostedZoneId!,
    "{HostedZoneId}",
    false
  );
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
 * serializeAws_restXmlDeleteCidrCollectionCommand
 */
export const se_DeleteCidrCollectionCommand = async (
  input: DeleteCidrCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/cidrcollection/{Id}";
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
 * serializeAws_restXmlDeleteHealthCheckCommand
 */
export const se_DeleteHealthCheckCommand = async (
  input: DeleteHealthCheckCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/healthcheck/{HealthCheckId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "HealthCheckId",
    () => input.HealthCheckId!,
    "{HealthCheckId}",
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
 * serializeAws_restXmlDeleteHostedZoneCommand
 */
export const se_DeleteHostedZoneCommand = async (
  input: DeleteHostedZoneCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/hostedzone/{Id}";
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
 * serializeAws_restXmlDeleteKeySigningKeyCommand
 */
export const se_DeleteKeySigningKeyCommand = async (
  input: DeleteKeySigningKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2013-04-01/keysigningkey/{HostedZoneId}/{Name}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "HostedZoneId",
    () => input.HostedZoneId!,
    "{HostedZoneId}",
    false
  );
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
 * serializeAws_restXmlDeleteQueryLoggingConfigCommand
 */
export const se_DeleteQueryLoggingConfigCommand = async (
  input: DeleteQueryLoggingConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/queryloggingconfig/{Id}";
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
 * serializeAws_restXmlDeleteReusableDelegationSetCommand
 */
export const se_DeleteReusableDelegationSetCommand = async (
  input: DeleteReusableDelegationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/delegationset/{Id}";
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
 * serializeAws_restXmlDeleteTrafficPolicyCommand
 */
export const se_DeleteTrafficPolicyCommand = async (
  input: DeleteTrafficPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/trafficpolicy/{Id}/{Version}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Version", () => input.Version!.toString(), "{Version}", false);
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
 * serializeAws_restXmlDeleteTrafficPolicyInstanceCommand
 */
export const se_DeleteTrafficPolicyInstanceCommand = async (
  input: DeleteTrafficPolicyInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/trafficpolicyinstance/{Id}";
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
 * serializeAws_restXmlDeleteVPCAssociationAuthorizationCommand
 */
export const se_DeleteVPCAssociationAuthorizationCommand = async (
  input: DeleteVPCAssociationAuthorizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2013-04-01/hostedzone/{HostedZoneId}/deauthorizevpcassociation";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "HostedZoneId",
    () => input.HostedZoneId!,
    "{HostedZoneId}",
    false
  );
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("DeleteVPCAssociationAuthorizationRequest");
  bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
  if (input.VPC !== undefined) {
    const node = se_VPC(input.VPC, context).withName("VPC");
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
 * serializeAws_restXmlDisableHostedZoneDNSSECCommand
 */
export const se_DisableHostedZoneDNSSECCommand = async (
  input: DisableHostedZoneDNSSECCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2013-04-01/hostedzone/{HostedZoneId}/disable-dnssec";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "HostedZoneId",
    () => input.HostedZoneId!,
    "{HostedZoneId}",
    false
  );
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
 * serializeAws_restXmlDisassociateVPCFromHostedZoneCommand
 */
export const se_DisassociateVPCFromHostedZoneCommand = async (
  input: DisassociateVPCFromHostedZoneCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2013-04-01/hostedzone/{HostedZoneId}/disassociatevpc";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "HostedZoneId",
    () => input.HostedZoneId!,
    "{HostedZoneId}",
    false
  );
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("DisassociateVPCFromHostedZoneRequest");
  bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
  if (input.Comment !== undefined) {
    const node = __XmlNode.of("DisassociateVPCComment", input.Comment).withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.VPC !== undefined) {
    const node = se_VPC(input.VPC, context).withName("VPC");
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
 * serializeAws_restXmlEnableHostedZoneDNSSECCommand
 */
export const se_EnableHostedZoneDNSSECCommand = async (
  input: EnableHostedZoneDNSSECCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2013-04-01/hostedzone/{HostedZoneId}/enable-dnssec";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "HostedZoneId",
    () => input.HostedZoneId!,
    "{HostedZoneId}",
    false
  );
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
 * serializeAws_restXmlGetAccountLimitCommand
 */
export const se_GetAccountLimitCommand = async (
  input: GetAccountLimitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/accountlimit/{Type}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Type", () => input.Type!, "{Type}", false);
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
 * serializeAws_restXmlGetChangeCommand
 */
export const se_GetChangeCommand = async (
  input: GetChangeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/change/{Id}";
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
 * serializeAws_restXmlGetCheckerIpRangesCommand
 */
export const se_GetCheckerIpRangesCommand = async (
  input: GetCheckerIpRangesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/checkeripranges";
  let body: any;
  body = "";
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
 * serializeAws_restXmlGetDNSSECCommand
 */
export const se_GetDNSSECCommand = async (
  input: GetDNSSECCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2013-04-01/hostedzone/{HostedZoneId}/dnssec";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "HostedZoneId",
    () => input.HostedZoneId!,
    "{HostedZoneId}",
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
 * serializeAws_restXmlGetGeoLocationCommand
 */
export const se_GetGeoLocationCommand = async (
  input: GetGeoLocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/geolocation";
  const query: any = map({
    continentcode: [, input.ContinentCode!],
    countrycode: [, input.CountryCode!],
    subdivisioncode: [, input.SubdivisionCode!],
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
 * serializeAws_restXmlGetHealthCheckCommand
 */
export const se_GetHealthCheckCommand = async (
  input: GetHealthCheckCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/healthcheck/{HealthCheckId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "HealthCheckId",
    () => input.HealthCheckId!,
    "{HealthCheckId}",
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
 * serializeAws_restXmlGetHealthCheckCountCommand
 */
export const se_GetHealthCheckCountCommand = async (
  input: GetHealthCheckCountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/healthcheckcount";
  let body: any;
  body = "";
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
 * serializeAws_restXmlGetHealthCheckLastFailureReasonCommand
 */
export const se_GetHealthCheckLastFailureReasonCommand = async (
  input: GetHealthCheckLastFailureReasonCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2013-04-01/healthcheck/{HealthCheckId}/lastfailurereason";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "HealthCheckId",
    () => input.HealthCheckId!,
    "{HealthCheckId}",
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
 * serializeAws_restXmlGetHealthCheckStatusCommand
 */
export const se_GetHealthCheckStatusCommand = async (
  input: GetHealthCheckStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2013-04-01/healthcheck/{HealthCheckId}/status";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "HealthCheckId",
    () => input.HealthCheckId!,
    "{HealthCheckId}",
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
 * serializeAws_restXmlGetHostedZoneCommand
 */
export const se_GetHostedZoneCommand = async (
  input: GetHostedZoneCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/hostedzone/{Id}";
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
 * serializeAws_restXmlGetHostedZoneCountCommand
 */
export const se_GetHostedZoneCountCommand = async (
  input: GetHostedZoneCountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/hostedzonecount";
  let body: any;
  body = "";
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
 * serializeAws_restXmlGetHostedZoneLimitCommand
 */
export const se_GetHostedZoneLimitCommand = async (
  input: GetHostedZoneLimitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2013-04-01/hostedzonelimit/{HostedZoneId}/{Type}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Type", () => input.Type!, "{Type}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "HostedZoneId",
    () => input.HostedZoneId!,
    "{HostedZoneId}",
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
 * serializeAws_restXmlGetQueryLoggingConfigCommand
 */
export const se_GetQueryLoggingConfigCommand = async (
  input: GetQueryLoggingConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/queryloggingconfig/{Id}";
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
 * serializeAws_restXmlGetReusableDelegationSetCommand
 */
export const se_GetReusableDelegationSetCommand = async (
  input: GetReusableDelegationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/delegationset/{Id}";
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
 * serializeAws_restXmlGetReusableDelegationSetLimitCommand
 */
export const se_GetReusableDelegationSetLimitCommand = async (
  input: GetReusableDelegationSetLimitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2013-04-01/reusabledelegationsetlimit/{DelegationSetId}/{Type}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Type", () => input.Type!, "{Type}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "DelegationSetId",
    () => input.DelegationSetId!,
    "{DelegationSetId}",
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
 * serializeAws_restXmlGetTrafficPolicyCommand
 */
export const se_GetTrafficPolicyCommand = async (
  input: GetTrafficPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/trafficpolicy/{Id}/{Version}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Version", () => input.Version!.toString(), "{Version}", false);
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
 * serializeAws_restXmlGetTrafficPolicyInstanceCommand
 */
export const se_GetTrafficPolicyInstanceCommand = async (
  input: GetTrafficPolicyInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/trafficpolicyinstance/{Id}";
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
 * serializeAws_restXmlGetTrafficPolicyInstanceCountCommand
 */
export const se_GetTrafficPolicyInstanceCountCommand = async (
  input: GetTrafficPolicyInstanceCountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/trafficpolicyinstancecount";
  let body: any;
  body = "";
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
 * serializeAws_restXmlListCidrBlocksCommand
 */
export const se_ListCidrBlocksCommand = async (
  input: ListCidrBlocksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2013-04-01/cidrcollection/{CollectionId}/cidrblocks";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CollectionId",
    () => input.CollectionId!,
    "{CollectionId}",
    false
  );
  const query: any = map({
    location: [, input.LocationName!],
    nexttoken: [, input.NextToken!],
    maxresults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
 * serializeAws_restXmlListCidrCollectionsCommand
 */
export const se_ListCidrCollectionsCommand = async (
  input: ListCidrCollectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/cidrcollection";
  const query: any = map({
    nexttoken: [, input.NextToken!],
    maxresults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
 * serializeAws_restXmlListCidrLocationsCommand
 */
export const se_ListCidrLocationsCommand = async (
  input: ListCidrLocationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/cidrcollection/{CollectionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CollectionId",
    () => input.CollectionId!,
    "{CollectionId}",
    false
  );
  const query: any = map({
    nexttoken: [, input.NextToken!],
    maxresults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
 * serializeAws_restXmlListGeoLocationsCommand
 */
export const se_ListGeoLocationsCommand = async (
  input: ListGeoLocationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/geolocations";
  const query: any = map({
    startcontinentcode: [, input.StartContinentCode!],
    startcountrycode: [, input.StartCountryCode!],
    startsubdivisioncode: [, input.StartSubdivisionCode!],
    maxitems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
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
 * serializeAws_restXmlListHealthChecksCommand
 */
export const se_ListHealthChecksCommand = async (
  input: ListHealthChecksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/healthcheck";
  const query: any = map({
    marker: [, input.Marker!],
    maxitems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
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
 * serializeAws_restXmlListHostedZonesCommand
 */
export const se_ListHostedZonesCommand = async (
  input: ListHostedZonesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/hostedzone";
  const query: any = map({
    marker: [, input.Marker!],
    maxitems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
    delegationsetid: [, input.DelegationSetId!],
    hostedzonetype: [, input.HostedZoneType!],
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
 * serializeAws_restXmlListHostedZonesByNameCommand
 */
export const se_ListHostedZonesByNameCommand = async (
  input: ListHostedZonesByNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/hostedzonesbyname";
  const query: any = map({
    dnsname: [, input.DNSName!],
    hostedzoneid: [, input.HostedZoneId!],
    maxitems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
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
 * serializeAws_restXmlListHostedZonesByVPCCommand
 */
export const se_ListHostedZonesByVPCCommand = async (
  input: ListHostedZonesByVPCCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/hostedzonesbyvpc";
  const query: any = map({
    vpcid: [, __expectNonNull(input.VPCId!, `VPCId`)],
    vpcregion: [, __expectNonNull(input.VPCRegion!, `VPCRegion`)],
    maxitems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
    nexttoken: [, input.NextToken!],
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
 * serializeAws_restXmlListQueryLoggingConfigsCommand
 */
export const se_ListQueryLoggingConfigsCommand = async (
  input: ListQueryLoggingConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/queryloggingconfig";
  const query: any = map({
    hostedzoneid: [, input.HostedZoneId!],
    nexttoken: [, input.NextToken!],
    maxresults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
 * serializeAws_restXmlListResourceRecordSetsCommand
 */
export const se_ListResourceRecordSetsCommand = async (
  input: ListResourceRecordSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2013-04-01/hostedzone/{HostedZoneId}/rrset";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "HostedZoneId",
    () => input.HostedZoneId!,
    "{HostedZoneId}",
    false
  );
  const query: any = map({
    name: [, input.StartRecordName!],
    type: [, input.StartRecordType!],
    identifier: [, input.StartRecordIdentifier!],
    maxitems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
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
 * serializeAws_restXmlListReusableDelegationSetsCommand
 */
export const se_ListReusableDelegationSetsCommand = async (
  input: ListReusableDelegationSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/delegationset";
  const query: any = map({
    marker: [, input.Marker!],
    maxitems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2013-04-01/tags/{ResourceType}/{ResourceId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ResourceType",
    () => input.ResourceType!,
    "{ResourceType}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceId", () => input.ResourceId!, "{ResourceId}", false);
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
 * serializeAws_restXmlListTagsForResourcesCommand
 */
export const se_ListTagsForResourcesCommand = async (
  input: ListTagsForResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/tags/{ResourceType}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ResourceType",
    () => input.ResourceType!,
    "{ResourceType}",
    false
  );
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("ListTagsForResourcesRequest");
  bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
  if (input.ResourceIds !== undefined) {
    const nodes = se_TagResourceIdList(input.ResourceIds, context);
    const containerNode = new __XmlNode("ResourceIds");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
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
 * serializeAws_restXmlListTrafficPoliciesCommand
 */
export const se_ListTrafficPoliciesCommand = async (
  input: ListTrafficPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/trafficpolicies";
  const query: any = map({
    trafficpolicyid: [, input.TrafficPolicyIdMarker!],
    maxitems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
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
 * serializeAws_restXmlListTrafficPolicyInstancesCommand
 */
export const se_ListTrafficPolicyInstancesCommand = async (
  input: ListTrafficPolicyInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/trafficpolicyinstances";
  const query: any = map({
    hostedzoneid: [, input.HostedZoneIdMarker!],
    trafficpolicyinstancename: [, input.TrafficPolicyInstanceNameMarker!],
    trafficpolicyinstancetype: [, input.TrafficPolicyInstanceTypeMarker!],
    maxitems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
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
 * serializeAws_restXmlListTrafficPolicyInstancesByHostedZoneCommand
 */
export const se_ListTrafficPolicyInstancesByHostedZoneCommand = async (
  input: ListTrafficPolicyInstancesByHostedZoneCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2013-04-01/trafficpolicyinstances/hostedzone";
  const query: any = map({
    id: [, __expectNonNull(input.HostedZoneId!, `HostedZoneId`)],
    trafficpolicyinstancename: [, input.TrafficPolicyInstanceNameMarker!],
    trafficpolicyinstancetype: [, input.TrafficPolicyInstanceTypeMarker!],
    maxitems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
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
 * serializeAws_restXmlListTrafficPolicyInstancesByPolicyCommand
 */
export const se_ListTrafficPolicyInstancesByPolicyCommand = async (
  input: ListTrafficPolicyInstancesByPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2013-04-01/trafficpolicyinstances/trafficpolicy";
  const query: any = map({
    id: [, __expectNonNull(input.TrafficPolicyId!, `TrafficPolicyId`)],
    version: [
      __expectNonNull(input.TrafficPolicyVersion, `TrafficPolicyVersion`) != null,
      () => input.TrafficPolicyVersion!.toString(),
    ],
    hostedzoneid: [, input.HostedZoneIdMarker!],
    trafficpolicyinstancename: [, input.TrafficPolicyInstanceNameMarker!],
    trafficpolicyinstancetype: [, input.TrafficPolicyInstanceTypeMarker!],
    maxitems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
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
 * serializeAws_restXmlListTrafficPolicyVersionsCommand
 */
export const se_ListTrafficPolicyVersionsCommand = async (
  input: ListTrafficPolicyVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/trafficpolicies/{Id}/versions";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  const query: any = map({
    trafficpolicyversion: [, input.TrafficPolicyVersionMarker!],
    maxitems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
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
 * serializeAws_restXmlListVPCAssociationAuthorizationsCommand
 */
export const se_ListVPCAssociationAuthorizationsCommand = async (
  input: ListVPCAssociationAuthorizationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2013-04-01/hostedzone/{HostedZoneId}/authorizevpcassociation";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "HostedZoneId",
    () => input.HostedZoneId!,
    "{HostedZoneId}",
    false
  );
  const query: any = map({
    nexttoken: [, input.NextToken!],
    maxresults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
 * serializeAws_restXmlTestDNSAnswerCommand
 */
export const se_TestDNSAnswerCommand = async (
  input: TestDNSAnswerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/testdnsanswer";
  const query: any = map({
    hostedzoneid: [, __expectNonNull(input.HostedZoneId!, `HostedZoneId`)],
    recordname: [, __expectNonNull(input.RecordName!, `RecordName`)],
    recordtype: [, __expectNonNull(input.RecordType!, `RecordType`)],
    resolverip: [, input.ResolverIP!],
    edns0clientsubnetip: [, input.EDNS0ClientSubnetIP!],
    edns0clientsubnetmask: [, input.EDNS0ClientSubnetMask!],
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
 * serializeAws_restXmlUpdateHealthCheckCommand
 */
export const se_UpdateHealthCheckCommand = async (
  input: UpdateHealthCheckCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/healthcheck/{HealthCheckId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "HealthCheckId",
    () => input.HealthCheckId!,
    "{HealthCheckId}",
    false
  );
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("UpdateHealthCheckRequest");
  bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
  if (input.AlarmIdentifier !== undefined) {
    const node = se_AlarmIdentifier(input.AlarmIdentifier, context).withName("AlarmIdentifier");
    bodyNode.addChildNode(node);
  }
  if (input.ChildHealthChecks !== undefined) {
    const nodes = se_ChildHealthCheckList(input.ChildHealthChecks, context);
    const containerNode = new __XmlNode("ChildHealthChecks");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.Disabled !== undefined) {
    const node = __XmlNode.of("Disabled", String(input.Disabled)).withName("Disabled");
    bodyNode.addChildNode(node);
  }
  if (input.EnableSNI !== undefined) {
    const node = __XmlNode.of("EnableSNI", String(input.EnableSNI)).withName("EnableSNI");
    bodyNode.addChildNode(node);
  }
  if (input.FailureThreshold !== undefined) {
    const node = __XmlNode.of("FailureThreshold", String(input.FailureThreshold)).withName("FailureThreshold");
    bodyNode.addChildNode(node);
  }
  if (input.FullyQualifiedDomainName !== undefined) {
    const node = __XmlNode
      .of("FullyQualifiedDomainName", input.FullyQualifiedDomainName)
      .withName("FullyQualifiedDomainName");
    bodyNode.addChildNode(node);
  }
  if (input.HealthCheckVersion !== undefined) {
    const node = __XmlNode.of("HealthCheckVersion", String(input.HealthCheckVersion)).withName("HealthCheckVersion");
    bodyNode.addChildNode(node);
  }
  if (input.HealthThreshold !== undefined) {
    const node = __XmlNode.of("HealthThreshold", String(input.HealthThreshold)).withName("HealthThreshold");
    bodyNode.addChildNode(node);
  }
  if (input.IPAddress !== undefined) {
    const node = __XmlNode.of("IPAddress", input.IPAddress).withName("IPAddress");
    bodyNode.addChildNode(node);
  }
  if (input.InsufficientDataHealthStatus !== undefined) {
    const node = __XmlNode
      .of("InsufficientDataHealthStatus", input.InsufficientDataHealthStatus)
      .withName("InsufficientDataHealthStatus");
    bodyNode.addChildNode(node);
  }
  if (input.Inverted !== undefined) {
    const node = __XmlNode.of("Inverted", String(input.Inverted)).withName("Inverted");
    bodyNode.addChildNode(node);
  }
  if (input.Port !== undefined) {
    const node = __XmlNode.of("Port", String(input.Port)).withName("Port");
    bodyNode.addChildNode(node);
  }
  if (input.Regions !== undefined) {
    const nodes = se_HealthCheckRegionList(input.Regions, context);
    const containerNode = new __XmlNode("Regions");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.ResetElements !== undefined) {
    const nodes = se_ResettableElementNameList(input.ResetElements, context);
    const containerNode = new __XmlNode("ResetElements");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.ResourcePath !== undefined) {
    const node = __XmlNode.of("ResourcePath", input.ResourcePath).withName("ResourcePath");
    bodyNode.addChildNode(node);
  }
  if (input.SearchString !== undefined) {
    const node = __XmlNode.of("SearchString", input.SearchString).withName("SearchString");
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
 * serializeAws_restXmlUpdateHostedZoneCommentCommand
 */
export const se_UpdateHostedZoneCommentCommand = async (
  input: UpdateHostedZoneCommentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/hostedzone/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("UpdateHostedZoneCommentRequest");
  bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
  if (input.Comment !== undefined) {
    const node = __XmlNode.of("ResourceDescription", input.Comment).withName("Comment");
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
 * serializeAws_restXmlUpdateTrafficPolicyCommentCommand
 */
export const se_UpdateTrafficPolicyCommentCommand = async (
  input: UpdateTrafficPolicyCommentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/trafficpolicy/{Id}/{Version}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Version", () => input.Version!.toString(), "{Version}", false);
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("UpdateTrafficPolicyCommentRequest");
  bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
  if (input.Comment !== undefined) {
    const node = __XmlNode.of("TrafficPolicyComment", input.Comment).withName("Comment");
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
 * serializeAws_restXmlUpdateTrafficPolicyInstanceCommand
 */
export const se_UpdateTrafficPolicyInstanceCommand = async (
  input: UpdateTrafficPolicyInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/trafficpolicyinstance/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("UpdateTrafficPolicyInstanceRequest");
  bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
  if (input.TTL !== undefined) {
    const node = __XmlNode.of("TTL", String(input.TTL)).withName("TTL");
    bodyNode.addChildNode(node);
  }
  if (input.TrafficPolicyId !== undefined) {
    const node = __XmlNode.of("TrafficPolicyId", input.TrafficPolicyId).withName("TrafficPolicyId");
    bodyNode.addChildNode(node);
  }
  if (input.TrafficPolicyVersion !== undefined) {
    const node = __XmlNode
      .of("TrafficPolicyVersion", String(input.TrafficPolicyVersion))
      .withName("TrafficPolicyVersion");
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
 * deserializeAws_restXmlActivateKeySigningKeyCommand
 */
export const de_ActivateKeySigningKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateKeySigningKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ActivateKeySigningKeyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ChangeInfo"] !== undefined) {
    contents.ChangeInfo = de_ChangeInfo(data["ChangeInfo"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlActivateKeySigningKeyCommandError
 */
const de_ActivateKeySigningKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateKeySigningKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.route53#ConcurrentModification":
      throw await de_ConcurrentModificationRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "InvalidKMSArn":
    case "com.amazonaws.route53#InvalidKMSArn":
      throw await de_InvalidKMSArnRes(parsedOutput, context);
    case "InvalidKeySigningKeyStatus":
    case "com.amazonaws.route53#InvalidKeySigningKeyStatus":
      throw await de_InvalidKeySigningKeyStatusRes(parsedOutput, context);
    case "InvalidSigningStatus":
    case "com.amazonaws.route53#InvalidSigningStatus":
      throw await de_InvalidSigningStatusRes(parsedOutput, context);
    case "NoSuchKeySigningKey":
    case "com.amazonaws.route53#NoSuchKeySigningKey":
      throw await de_NoSuchKeySigningKeyRes(parsedOutput, context);
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
 * deserializeAws_restXmlAssociateVPCWithHostedZoneCommand
 */
export const de_AssociateVPCWithHostedZoneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateVPCWithHostedZoneCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateVPCWithHostedZoneCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ChangeInfo"] !== undefined) {
    contents.ChangeInfo = de_ChangeInfo(data["ChangeInfo"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlAssociateVPCWithHostedZoneCommandError
 */
const de_AssociateVPCWithHostedZoneCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateVPCWithHostedZoneCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingDomainExists":
    case "com.amazonaws.route53#ConflictingDomainExists":
      throw await de_ConflictingDomainExistsRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "InvalidVPCId":
    case "com.amazonaws.route53#InvalidVPCId":
      throw await de_InvalidVPCIdRes(parsedOutput, context);
    case "LimitsExceeded":
    case "com.amazonaws.route53#LimitsExceeded":
      throw await de_LimitsExceededRes(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await de_NoSuchHostedZoneRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.route53#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "PriorRequestNotComplete":
    case "com.amazonaws.route53#PriorRequestNotComplete":
      throw await de_PriorRequestNotCompleteRes(parsedOutput, context);
    case "PublicZoneVPCAssociation":
    case "com.amazonaws.route53#PublicZoneVPCAssociation":
      throw await de_PublicZoneVPCAssociationRes(parsedOutput, context);
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
 * deserializeAws_restXmlChangeCidrCollectionCommand
 */
export const de_ChangeCidrCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChangeCidrCollectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ChangeCidrCollectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Id"] !== undefined) {
    contents.Id = __expectString(data["Id"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlChangeCidrCollectionCommandError
 */
const de_ChangeCidrCollectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChangeCidrCollectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CidrBlockInUseException":
    case "com.amazonaws.route53#CidrBlockInUseException":
      throw await de_CidrBlockInUseExceptionRes(parsedOutput, context);
    case "CidrCollectionVersionMismatchException":
    case "com.amazonaws.route53#CidrCollectionVersionMismatchException":
      throw await de_CidrCollectionVersionMismatchExceptionRes(parsedOutput, context);
    case "ConcurrentModification":
    case "com.amazonaws.route53#ConcurrentModification":
      throw await de_ConcurrentModificationRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "LimitsExceeded":
    case "com.amazonaws.route53#LimitsExceeded":
      throw await de_LimitsExceededRes(parsedOutput, context);
    case "NoSuchCidrCollectionException":
    case "com.amazonaws.route53#NoSuchCidrCollectionException":
      throw await de_NoSuchCidrCollectionExceptionRes(parsedOutput, context);
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
 * deserializeAws_restXmlChangeResourceRecordSetsCommand
 */
export const de_ChangeResourceRecordSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChangeResourceRecordSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ChangeResourceRecordSetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ChangeInfo"] !== undefined) {
    contents.ChangeInfo = de_ChangeInfo(data["ChangeInfo"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlChangeResourceRecordSetsCommandError
 */
const de_ChangeResourceRecordSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChangeResourceRecordSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidChangeBatch":
    case "com.amazonaws.route53#InvalidChangeBatch":
      throw await de_InvalidChangeBatchRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NoSuchHealthCheck":
    case "com.amazonaws.route53#NoSuchHealthCheck":
      throw await de_NoSuchHealthCheckRes(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await de_NoSuchHostedZoneRes(parsedOutput, context);
    case "PriorRequestNotComplete":
    case "com.amazonaws.route53#PriorRequestNotComplete":
      throw await de_PriorRequestNotCompleteRes(parsedOutput, context);
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
 * deserializeAws_restXmlChangeTagsForResourceCommand
 */
export const de_ChangeTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChangeTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ChangeTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlChangeTagsForResourceCommandError
 */
const de_ChangeTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChangeTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NoSuchHealthCheck":
    case "com.amazonaws.route53#NoSuchHealthCheck":
      throw await de_NoSuchHealthCheckRes(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await de_NoSuchHostedZoneRes(parsedOutput, context);
    case "PriorRequestNotComplete":
    case "com.amazonaws.route53#PriorRequestNotComplete":
      throw await de_PriorRequestNotCompleteRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restXmlCreateCidrCollectionCommand
 */
export const de_CreateCidrCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCidrCollectionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateCidrCollectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Location: [, output.headers["location"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Collection"] !== undefined) {
    contents.Collection = de_CidrCollection(data["Collection"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCreateCidrCollectionCommandError
 */
const de_CreateCidrCollectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCidrCollectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CidrCollectionAlreadyExistsException":
    case "com.amazonaws.route53#CidrCollectionAlreadyExistsException":
      throw await de_CidrCollectionAlreadyExistsExceptionRes(parsedOutput, context);
    case "ConcurrentModification":
    case "com.amazonaws.route53#ConcurrentModification":
      throw await de_ConcurrentModificationRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "LimitsExceeded":
    case "com.amazonaws.route53#LimitsExceeded":
      throw await de_LimitsExceededRes(parsedOutput, context);
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
 * deserializeAws_restXmlCreateHealthCheckCommand
 */
export const de_CreateHealthCheckCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHealthCheckCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateHealthCheckCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Location: [, output.headers["location"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["HealthCheck"] !== undefined) {
    contents.HealthCheck = de_HealthCheck(data["HealthCheck"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCreateHealthCheckCommandError
 */
const de_CreateHealthCheckCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHealthCheckCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "HealthCheckAlreadyExists":
    case "com.amazonaws.route53#HealthCheckAlreadyExists":
      throw await de_HealthCheckAlreadyExistsRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "TooManyHealthChecks":
    case "com.amazonaws.route53#TooManyHealthChecks":
      throw await de_TooManyHealthChecksRes(parsedOutput, context);
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
 * deserializeAws_restXmlCreateHostedZoneCommand
 */
export const de_CreateHostedZoneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHostedZoneCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateHostedZoneCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Location: [, output.headers["location"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ChangeInfo"] !== undefined) {
    contents.ChangeInfo = de_ChangeInfo(data["ChangeInfo"], context);
  }
  if (data["DelegationSet"] !== undefined) {
    contents.DelegationSet = de_DelegationSet(data["DelegationSet"], context);
  }
  if (data["HostedZone"] !== undefined) {
    contents.HostedZone = de_HostedZone(data["HostedZone"], context);
  }
  if (data["VPC"] !== undefined) {
    contents.VPC = de_VPC(data["VPC"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCreateHostedZoneCommandError
 */
const de_CreateHostedZoneCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHostedZoneCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingDomainExists":
    case "com.amazonaws.route53#ConflictingDomainExists":
      throw await de_ConflictingDomainExistsRes(parsedOutput, context);
    case "DelegationSetNotAvailable":
    case "com.amazonaws.route53#DelegationSetNotAvailable":
      throw await de_DelegationSetNotAvailableRes(parsedOutput, context);
    case "DelegationSetNotReusable":
    case "com.amazonaws.route53#DelegationSetNotReusable":
      throw await de_DelegationSetNotReusableRes(parsedOutput, context);
    case "HostedZoneAlreadyExists":
    case "com.amazonaws.route53#HostedZoneAlreadyExists":
      throw await de_HostedZoneAlreadyExistsRes(parsedOutput, context);
    case "InvalidDomainName":
    case "com.amazonaws.route53#InvalidDomainName":
      throw await de_InvalidDomainNameRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "InvalidVPCId":
    case "com.amazonaws.route53#InvalidVPCId":
      throw await de_InvalidVPCIdRes(parsedOutput, context);
    case "NoSuchDelegationSet":
    case "com.amazonaws.route53#NoSuchDelegationSet":
      throw await de_NoSuchDelegationSetRes(parsedOutput, context);
    case "TooManyHostedZones":
    case "com.amazonaws.route53#TooManyHostedZones":
      throw await de_TooManyHostedZonesRes(parsedOutput, context);
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
 * deserializeAws_restXmlCreateKeySigningKeyCommand
 */
export const de_CreateKeySigningKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKeySigningKeyCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateKeySigningKeyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Location: [, output.headers["location"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ChangeInfo"] !== undefined) {
    contents.ChangeInfo = de_ChangeInfo(data["ChangeInfo"], context);
  }
  if (data["KeySigningKey"] !== undefined) {
    contents.KeySigningKey = de_KeySigningKey(data["KeySigningKey"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCreateKeySigningKeyCommandError
 */
const de_CreateKeySigningKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKeySigningKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.route53#ConcurrentModification":
      throw await de_ConcurrentModificationRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.route53#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "InvalidKMSArn":
    case "com.amazonaws.route53#InvalidKMSArn":
      throw await de_InvalidKMSArnRes(parsedOutput, context);
    case "InvalidKeySigningKeyName":
    case "com.amazonaws.route53#InvalidKeySigningKeyName":
      throw await de_InvalidKeySigningKeyNameRes(parsedOutput, context);
    case "InvalidKeySigningKeyStatus":
    case "com.amazonaws.route53#InvalidKeySigningKeyStatus":
      throw await de_InvalidKeySigningKeyStatusRes(parsedOutput, context);
    case "InvalidSigningStatus":
    case "com.amazonaws.route53#InvalidSigningStatus":
      throw await de_InvalidSigningStatusRes(parsedOutput, context);
    case "KeySigningKeyAlreadyExists":
    case "com.amazonaws.route53#KeySigningKeyAlreadyExists":
      throw await de_KeySigningKeyAlreadyExistsRes(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await de_NoSuchHostedZoneRes(parsedOutput, context);
    case "TooManyKeySigningKeys":
    case "com.amazonaws.route53#TooManyKeySigningKeys":
      throw await de_TooManyKeySigningKeysRes(parsedOutput, context);
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
 * deserializeAws_restXmlCreateQueryLoggingConfigCommand
 */
export const de_CreateQueryLoggingConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQueryLoggingConfigCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateQueryLoggingConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Location: [, output.headers["location"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["QueryLoggingConfig"] !== undefined) {
    contents.QueryLoggingConfig = de_QueryLoggingConfig(data["QueryLoggingConfig"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCreateQueryLoggingConfigCommandError
 */
const de_CreateQueryLoggingConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQueryLoggingConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.route53#ConcurrentModification":
      throw await de_ConcurrentModificationRes(parsedOutput, context);
    case "InsufficientCloudWatchLogsResourcePolicy":
    case "com.amazonaws.route53#InsufficientCloudWatchLogsResourcePolicy":
      throw await de_InsufficientCloudWatchLogsResourcePolicyRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NoSuchCloudWatchLogsLogGroup":
    case "com.amazonaws.route53#NoSuchCloudWatchLogsLogGroup":
      throw await de_NoSuchCloudWatchLogsLogGroupRes(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await de_NoSuchHostedZoneRes(parsedOutput, context);
    case "QueryLoggingConfigAlreadyExists":
    case "com.amazonaws.route53#QueryLoggingConfigAlreadyExists":
      throw await de_QueryLoggingConfigAlreadyExistsRes(parsedOutput, context);
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
 * deserializeAws_restXmlCreateReusableDelegationSetCommand
 */
export const de_CreateReusableDelegationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReusableDelegationSetCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateReusableDelegationSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Location: [, output.headers["location"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["DelegationSet"] !== undefined) {
    contents.DelegationSet = de_DelegationSet(data["DelegationSet"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCreateReusableDelegationSetCommandError
 */
const de_CreateReusableDelegationSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReusableDelegationSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DelegationSetAlreadyCreated":
    case "com.amazonaws.route53#DelegationSetAlreadyCreated":
      throw await de_DelegationSetAlreadyCreatedRes(parsedOutput, context);
    case "DelegationSetAlreadyReusable":
    case "com.amazonaws.route53#DelegationSetAlreadyReusable":
      throw await de_DelegationSetAlreadyReusableRes(parsedOutput, context);
    case "DelegationSetNotAvailable":
    case "com.amazonaws.route53#DelegationSetNotAvailable":
      throw await de_DelegationSetNotAvailableRes(parsedOutput, context);
    case "HostedZoneNotFound":
    case "com.amazonaws.route53#HostedZoneNotFound":
      throw await de_HostedZoneNotFoundRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.route53#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "LimitsExceeded":
    case "com.amazonaws.route53#LimitsExceeded":
      throw await de_LimitsExceededRes(parsedOutput, context);
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
 * deserializeAws_restXmlCreateTrafficPolicyCommand
 */
export const de_CreateTrafficPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrafficPolicyCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateTrafficPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Location: [, output.headers["location"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["TrafficPolicy"] !== undefined) {
    contents.TrafficPolicy = de_TrafficPolicy(data["TrafficPolicy"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCreateTrafficPolicyCommandError
 */
const de_CreateTrafficPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrafficPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "InvalidTrafficPolicyDocument":
    case "com.amazonaws.route53#InvalidTrafficPolicyDocument":
      throw await de_InvalidTrafficPolicyDocumentRes(parsedOutput, context);
    case "TooManyTrafficPolicies":
    case "com.amazonaws.route53#TooManyTrafficPolicies":
      throw await de_TooManyTrafficPoliciesRes(parsedOutput, context);
    case "TrafficPolicyAlreadyExists":
    case "com.amazonaws.route53#TrafficPolicyAlreadyExists":
      throw await de_TrafficPolicyAlreadyExistsRes(parsedOutput, context);
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
 * deserializeAws_restXmlCreateTrafficPolicyInstanceCommand
 */
export const de_CreateTrafficPolicyInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrafficPolicyInstanceCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateTrafficPolicyInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Location: [, output.headers["location"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["TrafficPolicyInstance"] !== undefined) {
    contents.TrafficPolicyInstance = de_TrafficPolicyInstance(data["TrafficPolicyInstance"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCreateTrafficPolicyInstanceCommandError
 */
const de_CreateTrafficPolicyInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrafficPolicyInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await de_NoSuchHostedZoneRes(parsedOutput, context);
    case "NoSuchTrafficPolicy":
    case "com.amazonaws.route53#NoSuchTrafficPolicy":
      throw await de_NoSuchTrafficPolicyRes(parsedOutput, context);
    case "TooManyTrafficPolicyInstances":
    case "com.amazonaws.route53#TooManyTrafficPolicyInstances":
      throw await de_TooManyTrafficPolicyInstancesRes(parsedOutput, context);
    case "TrafficPolicyInstanceAlreadyExists":
    case "com.amazonaws.route53#TrafficPolicyInstanceAlreadyExists":
      throw await de_TrafficPolicyInstanceAlreadyExistsRes(parsedOutput, context);
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
 * deserializeAws_restXmlCreateTrafficPolicyVersionCommand
 */
export const de_CreateTrafficPolicyVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrafficPolicyVersionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateTrafficPolicyVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Location: [, output.headers["location"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["TrafficPolicy"] !== undefined) {
    contents.TrafficPolicy = de_TrafficPolicy(data["TrafficPolicy"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCreateTrafficPolicyVersionCommandError
 */
const de_CreateTrafficPolicyVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrafficPolicyVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.route53#ConcurrentModification":
      throw await de_ConcurrentModificationRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "InvalidTrafficPolicyDocument":
    case "com.amazonaws.route53#InvalidTrafficPolicyDocument":
      throw await de_InvalidTrafficPolicyDocumentRes(parsedOutput, context);
    case "NoSuchTrafficPolicy":
    case "com.amazonaws.route53#NoSuchTrafficPolicy":
      throw await de_NoSuchTrafficPolicyRes(parsedOutput, context);
    case "TooManyTrafficPolicyVersionsForCurrentPolicy":
    case "com.amazonaws.route53#TooManyTrafficPolicyVersionsForCurrentPolicy":
      throw await de_TooManyTrafficPolicyVersionsForCurrentPolicyRes(parsedOutput, context);
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
 * deserializeAws_restXmlCreateVPCAssociationAuthorizationCommand
 */
export const de_CreateVPCAssociationAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVPCAssociationAuthorizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateVPCAssociationAuthorizationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["HostedZoneId"] !== undefined) {
    contents.HostedZoneId = __expectString(data["HostedZoneId"]);
  }
  if (data["VPC"] !== undefined) {
    contents.VPC = de_VPC(data["VPC"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCreateVPCAssociationAuthorizationCommandError
 */
const de_CreateVPCAssociationAuthorizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVPCAssociationAuthorizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.route53#ConcurrentModification":
      throw await de_ConcurrentModificationRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "InvalidVPCId":
    case "com.amazonaws.route53#InvalidVPCId":
      throw await de_InvalidVPCIdRes(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await de_NoSuchHostedZoneRes(parsedOutput, context);
    case "TooManyVPCAssociationAuthorizations":
    case "com.amazonaws.route53#TooManyVPCAssociationAuthorizations":
      throw await de_TooManyVPCAssociationAuthorizationsRes(parsedOutput, context);
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
 * deserializeAws_restXmlDeactivateKeySigningKeyCommand
 */
export const de_DeactivateKeySigningKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateKeySigningKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeactivateKeySigningKeyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ChangeInfo"] !== undefined) {
    contents.ChangeInfo = de_ChangeInfo(data["ChangeInfo"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlDeactivateKeySigningKeyCommandError
 */
const de_DeactivateKeySigningKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateKeySigningKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.route53#ConcurrentModification":
      throw await de_ConcurrentModificationRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "InvalidKeySigningKeyStatus":
    case "com.amazonaws.route53#InvalidKeySigningKeyStatus":
      throw await de_InvalidKeySigningKeyStatusRes(parsedOutput, context);
    case "InvalidSigningStatus":
    case "com.amazonaws.route53#InvalidSigningStatus":
      throw await de_InvalidSigningStatusRes(parsedOutput, context);
    case "KeySigningKeyInParentDSRecord":
    case "com.amazonaws.route53#KeySigningKeyInParentDSRecord":
      throw await de_KeySigningKeyInParentDSRecordRes(parsedOutput, context);
    case "KeySigningKeyInUse":
    case "com.amazonaws.route53#KeySigningKeyInUse":
      throw await de_KeySigningKeyInUseRes(parsedOutput, context);
    case "NoSuchKeySigningKey":
    case "com.amazonaws.route53#NoSuchKeySigningKey":
      throw await de_NoSuchKeySigningKeyRes(parsedOutput, context);
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
 * deserializeAws_restXmlDeleteCidrCollectionCommand
 */
export const de_DeleteCidrCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCidrCollectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteCidrCollectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteCidrCollectionCommandError
 */
const de_DeleteCidrCollectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCidrCollectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CidrCollectionInUseException":
    case "com.amazonaws.route53#CidrCollectionInUseException":
      throw await de_CidrCollectionInUseExceptionRes(parsedOutput, context);
    case "ConcurrentModification":
    case "com.amazonaws.route53#ConcurrentModification":
      throw await de_ConcurrentModificationRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NoSuchCidrCollectionException":
    case "com.amazonaws.route53#NoSuchCidrCollectionException":
      throw await de_NoSuchCidrCollectionExceptionRes(parsedOutput, context);
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
 * deserializeAws_restXmlDeleteHealthCheckCommand
 */
export const de_DeleteHealthCheckCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHealthCheckCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteHealthCheckCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteHealthCheckCommandError
 */
const de_DeleteHealthCheckCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHealthCheckCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "HealthCheckInUse":
    case "com.amazonaws.route53#HealthCheckInUse":
      throw await de_HealthCheckInUseRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NoSuchHealthCheck":
    case "com.amazonaws.route53#NoSuchHealthCheck":
      throw await de_NoSuchHealthCheckRes(parsedOutput, context);
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
 * deserializeAws_restXmlDeleteHostedZoneCommand
 */
export const de_DeleteHostedZoneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHostedZoneCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteHostedZoneCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ChangeInfo"] !== undefined) {
    contents.ChangeInfo = de_ChangeInfo(data["ChangeInfo"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlDeleteHostedZoneCommandError
 */
const de_DeleteHostedZoneCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHostedZoneCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "HostedZoneNotEmpty":
    case "com.amazonaws.route53#HostedZoneNotEmpty":
      throw await de_HostedZoneNotEmptyRes(parsedOutput, context);
    case "InvalidDomainName":
    case "com.amazonaws.route53#InvalidDomainName":
      throw await de_InvalidDomainNameRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await de_NoSuchHostedZoneRes(parsedOutput, context);
    case "PriorRequestNotComplete":
    case "com.amazonaws.route53#PriorRequestNotComplete":
      throw await de_PriorRequestNotCompleteRes(parsedOutput, context);
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
 * deserializeAws_restXmlDeleteKeySigningKeyCommand
 */
export const de_DeleteKeySigningKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKeySigningKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteKeySigningKeyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ChangeInfo"] !== undefined) {
    contents.ChangeInfo = de_ChangeInfo(data["ChangeInfo"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlDeleteKeySigningKeyCommandError
 */
const de_DeleteKeySigningKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKeySigningKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.route53#ConcurrentModification":
      throw await de_ConcurrentModificationRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "InvalidKMSArn":
    case "com.amazonaws.route53#InvalidKMSArn":
      throw await de_InvalidKMSArnRes(parsedOutput, context);
    case "InvalidKeySigningKeyStatus":
    case "com.amazonaws.route53#InvalidKeySigningKeyStatus":
      throw await de_InvalidKeySigningKeyStatusRes(parsedOutput, context);
    case "InvalidSigningStatus":
    case "com.amazonaws.route53#InvalidSigningStatus":
      throw await de_InvalidSigningStatusRes(parsedOutput, context);
    case "NoSuchKeySigningKey":
    case "com.amazonaws.route53#NoSuchKeySigningKey":
      throw await de_NoSuchKeySigningKeyRes(parsedOutput, context);
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
 * deserializeAws_restXmlDeleteQueryLoggingConfigCommand
 */
export const de_DeleteQueryLoggingConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQueryLoggingConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteQueryLoggingConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteQueryLoggingConfigCommandError
 */
const de_DeleteQueryLoggingConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQueryLoggingConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.route53#ConcurrentModification":
      throw await de_ConcurrentModificationRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NoSuchQueryLoggingConfig":
    case "com.amazonaws.route53#NoSuchQueryLoggingConfig":
      throw await de_NoSuchQueryLoggingConfigRes(parsedOutput, context);
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
 * deserializeAws_restXmlDeleteReusableDelegationSetCommand
 */
export const de_DeleteReusableDelegationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReusableDelegationSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteReusableDelegationSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteReusableDelegationSetCommandError
 */
const de_DeleteReusableDelegationSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReusableDelegationSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DelegationSetInUse":
    case "com.amazonaws.route53#DelegationSetInUse":
      throw await de_DelegationSetInUseRes(parsedOutput, context);
    case "DelegationSetNotReusable":
    case "com.amazonaws.route53#DelegationSetNotReusable":
      throw await de_DelegationSetNotReusableRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NoSuchDelegationSet":
    case "com.amazonaws.route53#NoSuchDelegationSet":
      throw await de_NoSuchDelegationSetRes(parsedOutput, context);
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
 * deserializeAws_restXmlDeleteTrafficPolicyCommand
 */
export const de_DeleteTrafficPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrafficPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteTrafficPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteTrafficPolicyCommandError
 */
const de_DeleteTrafficPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrafficPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.route53#ConcurrentModification":
      throw await de_ConcurrentModificationRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NoSuchTrafficPolicy":
    case "com.amazonaws.route53#NoSuchTrafficPolicy":
      throw await de_NoSuchTrafficPolicyRes(parsedOutput, context);
    case "TrafficPolicyInUse":
    case "com.amazonaws.route53#TrafficPolicyInUse":
      throw await de_TrafficPolicyInUseRes(parsedOutput, context);
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
 * deserializeAws_restXmlDeleteTrafficPolicyInstanceCommand
 */
export const de_DeleteTrafficPolicyInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrafficPolicyInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteTrafficPolicyInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteTrafficPolicyInstanceCommandError
 */
const de_DeleteTrafficPolicyInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrafficPolicyInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NoSuchTrafficPolicyInstance":
    case "com.amazonaws.route53#NoSuchTrafficPolicyInstance":
      throw await de_NoSuchTrafficPolicyInstanceRes(parsedOutput, context);
    case "PriorRequestNotComplete":
    case "com.amazonaws.route53#PriorRequestNotComplete":
      throw await de_PriorRequestNotCompleteRes(parsedOutput, context);
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
 * deserializeAws_restXmlDeleteVPCAssociationAuthorizationCommand
 */
export const de_DeleteVPCAssociationAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVPCAssociationAuthorizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteVPCAssociationAuthorizationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteVPCAssociationAuthorizationCommandError
 */
const de_DeleteVPCAssociationAuthorizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVPCAssociationAuthorizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.route53#ConcurrentModification":
      throw await de_ConcurrentModificationRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "InvalidVPCId":
    case "com.amazonaws.route53#InvalidVPCId":
      throw await de_InvalidVPCIdRes(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await de_NoSuchHostedZoneRes(parsedOutput, context);
    case "VPCAssociationAuthorizationNotFound":
    case "com.amazonaws.route53#VPCAssociationAuthorizationNotFound":
      throw await de_VPCAssociationAuthorizationNotFoundRes(parsedOutput, context);
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
 * deserializeAws_restXmlDisableHostedZoneDNSSECCommand
 */
export const de_DisableHostedZoneDNSSECCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableHostedZoneDNSSECCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisableHostedZoneDNSSECCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ChangeInfo"] !== undefined) {
    contents.ChangeInfo = de_ChangeInfo(data["ChangeInfo"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlDisableHostedZoneDNSSECCommandError
 */
const de_DisableHostedZoneDNSSECCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableHostedZoneDNSSECCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.route53#ConcurrentModification":
      throw await de_ConcurrentModificationRes(parsedOutput, context);
    case "DNSSECNotFound":
    case "com.amazonaws.route53#DNSSECNotFound":
      throw await de_DNSSECNotFoundRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.route53#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "InvalidKMSArn":
    case "com.amazonaws.route53#InvalidKMSArn":
      throw await de_InvalidKMSArnRes(parsedOutput, context);
    case "InvalidKeySigningKeyStatus":
    case "com.amazonaws.route53#InvalidKeySigningKeyStatus":
      throw await de_InvalidKeySigningKeyStatusRes(parsedOutput, context);
    case "KeySigningKeyInParentDSRecord":
    case "com.amazonaws.route53#KeySigningKeyInParentDSRecord":
      throw await de_KeySigningKeyInParentDSRecordRes(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await de_NoSuchHostedZoneRes(parsedOutput, context);
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
 * deserializeAws_restXmlDisassociateVPCFromHostedZoneCommand
 */
export const de_DisassociateVPCFromHostedZoneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateVPCFromHostedZoneCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateVPCFromHostedZoneCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ChangeInfo"] !== undefined) {
    contents.ChangeInfo = de_ChangeInfo(data["ChangeInfo"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlDisassociateVPCFromHostedZoneCommandError
 */
const de_DisassociateVPCFromHostedZoneCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateVPCFromHostedZoneCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "InvalidVPCId":
    case "com.amazonaws.route53#InvalidVPCId":
      throw await de_InvalidVPCIdRes(parsedOutput, context);
    case "LastVPCAssociation":
    case "com.amazonaws.route53#LastVPCAssociation":
      throw await de_LastVPCAssociationRes(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await de_NoSuchHostedZoneRes(parsedOutput, context);
    case "VPCAssociationNotFound":
    case "com.amazonaws.route53#VPCAssociationNotFound":
      throw await de_VPCAssociationNotFoundRes(parsedOutput, context);
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
 * deserializeAws_restXmlEnableHostedZoneDNSSECCommand
 */
export const de_EnableHostedZoneDNSSECCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableHostedZoneDNSSECCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_EnableHostedZoneDNSSECCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ChangeInfo"] !== undefined) {
    contents.ChangeInfo = de_ChangeInfo(data["ChangeInfo"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlEnableHostedZoneDNSSECCommandError
 */
const de_EnableHostedZoneDNSSECCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableHostedZoneDNSSECCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.route53#ConcurrentModification":
      throw await de_ConcurrentModificationRes(parsedOutput, context);
    case "DNSSECNotFound":
    case "com.amazonaws.route53#DNSSECNotFound":
      throw await de_DNSSECNotFoundRes(parsedOutput, context);
    case "HostedZonePartiallyDelegated":
    case "com.amazonaws.route53#HostedZonePartiallyDelegated":
      throw await de_HostedZonePartiallyDelegatedRes(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.route53#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "InvalidKMSArn":
    case "com.amazonaws.route53#InvalidKMSArn":
      throw await de_InvalidKMSArnRes(parsedOutput, context);
    case "InvalidKeySigningKeyStatus":
    case "com.amazonaws.route53#InvalidKeySigningKeyStatus":
      throw await de_InvalidKeySigningKeyStatusRes(parsedOutput, context);
    case "KeySigningKeyWithActiveStatusNotFound":
    case "com.amazonaws.route53#KeySigningKeyWithActiveStatusNotFound":
      throw await de_KeySigningKeyWithActiveStatusNotFoundRes(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await de_NoSuchHostedZoneRes(parsedOutput, context);
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
 * deserializeAws_restXmlGetAccountLimitCommand
 */
export const de_GetAccountLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountLimitCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAccountLimitCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Count"] !== undefined) {
    contents.Count = __strictParseLong(data["Count"]) as number;
  }
  if (data["Limit"] !== undefined) {
    contents.Limit = de_AccountLimit(data["Limit"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetAccountLimitCommandError
 */
const de_GetAccountLimitCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountLimitCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
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
 * deserializeAws_restXmlGetChangeCommand
 */
export const de_GetChangeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChangeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetChangeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ChangeInfo"] !== undefined) {
    contents.ChangeInfo = de_ChangeInfo(data["ChangeInfo"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetChangeCommandError
 */
const de_GetChangeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChangeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NoSuchChange":
    case "com.amazonaws.route53#NoSuchChange":
      throw await de_NoSuchChangeRes(parsedOutput, context);
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
 * deserializeAws_restXmlGetCheckerIpRangesCommand
 */
export const de_GetCheckerIpRangesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCheckerIpRangesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCheckerIpRangesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CheckerIpRanges === "") {
    contents.CheckerIpRanges = [];
  } else if (data["CheckerIpRanges"] !== undefined && data["CheckerIpRanges"]["member"] !== undefined) {
    contents.CheckerIpRanges = de_CheckerIpRanges(__getArrayIfSingleItem(data["CheckerIpRanges"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetCheckerIpRangesCommandError
 */
const de_GetCheckerIpRangesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCheckerIpRangesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetDNSSECCommand
 */
export const de_GetDNSSECCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDNSSECCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDNSSECCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.KeySigningKeys === "") {
    contents.KeySigningKeys = [];
  } else if (data["KeySigningKeys"] !== undefined && data["KeySigningKeys"]["member"] !== undefined) {
    contents.KeySigningKeys = de_KeySigningKeys(__getArrayIfSingleItem(data["KeySigningKeys"]["member"]), context);
  }
  if (data["Status"] !== undefined) {
    contents.Status = de_DNSSECStatus(data["Status"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetDNSSECCommandError
 */
const de_GetDNSSECCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDNSSECCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.route53#InvalidArgument":
      throw await de_InvalidArgumentRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await de_NoSuchHostedZoneRes(parsedOutput, context);
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
 * deserializeAws_restXmlGetGeoLocationCommand
 */
export const de_GetGeoLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGeoLocationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetGeoLocationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["GeoLocationDetails"] !== undefined) {
    contents.GeoLocationDetails = de_GeoLocationDetails(data["GeoLocationDetails"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetGeoLocationCommandError
 */
const de_GetGeoLocationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGeoLocationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NoSuchGeoLocation":
    case "com.amazonaws.route53#NoSuchGeoLocation":
      throw await de_NoSuchGeoLocationRes(parsedOutput, context);
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
 * deserializeAws_restXmlGetHealthCheckCommand
 */
export const de_GetHealthCheckCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHealthCheckCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetHealthCheckCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["HealthCheck"] !== undefined) {
    contents.HealthCheck = de_HealthCheck(data["HealthCheck"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetHealthCheckCommandError
 */
const de_GetHealthCheckCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHealthCheckCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IncompatibleVersion":
    case "com.amazonaws.route53#IncompatibleVersion":
      throw await de_IncompatibleVersionRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NoSuchHealthCheck":
    case "com.amazonaws.route53#NoSuchHealthCheck":
      throw await de_NoSuchHealthCheckRes(parsedOutput, context);
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
 * deserializeAws_restXmlGetHealthCheckCountCommand
 */
export const de_GetHealthCheckCountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHealthCheckCountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetHealthCheckCountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["HealthCheckCount"] !== undefined) {
    contents.HealthCheckCount = __strictParseLong(data["HealthCheckCount"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetHealthCheckCountCommandError
 */
const de_GetHealthCheckCountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHealthCheckCountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetHealthCheckLastFailureReasonCommand
 */
export const de_GetHealthCheckLastFailureReasonCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHealthCheckLastFailureReasonCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetHealthCheckLastFailureReasonCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.HealthCheckObservations === "") {
    contents.HealthCheckObservations = [];
  } else if (
    data["HealthCheckObservations"] !== undefined &&
    data["HealthCheckObservations"]["HealthCheckObservation"] !== undefined
  ) {
    contents.HealthCheckObservations = de_HealthCheckObservations(
      __getArrayIfSingleItem(data["HealthCheckObservations"]["HealthCheckObservation"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetHealthCheckLastFailureReasonCommandError
 */
const de_GetHealthCheckLastFailureReasonCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHealthCheckLastFailureReasonCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NoSuchHealthCheck":
    case "com.amazonaws.route53#NoSuchHealthCheck":
      throw await de_NoSuchHealthCheckRes(parsedOutput, context);
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
 * deserializeAws_restXmlGetHealthCheckStatusCommand
 */
export const de_GetHealthCheckStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHealthCheckStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetHealthCheckStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.HealthCheckObservations === "") {
    contents.HealthCheckObservations = [];
  } else if (
    data["HealthCheckObservations"] !== undefined &&
    data["HealthCheckObservations"]["HealthCheckObservation"] !== undefined
  ) {
    contents.HealthCheckObservations = de_HealthCheckObservations(
      __getArrayIfSingleItem(data["HealthCheckObservations"]["HealthCheckObservation"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetHealthCheckStatusCommandError
 */
const de_GetHealthCheckStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHealthCheckStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NoSuchHealthCheck":
    case "com.amazonaws.route53#NoSuchHealthCheck":
      throw await de_NoSuchHealthCheckRes(parsedOutput, context);
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
 * deserializeAws_restXmlGetHostedZoneCommand
 */
export const de_GetHostedZoneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHostedZoneCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetHostedZoneCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["DelegationSet"] !== undefined) {
    contents.DelegationSet = de_DelegationSet(data["DelegationSet"], context);
  }
  if (data["HostedZone"] !== undefined) {
    contents.HostedZone = de_HostedZone(data["HostedZone"], context);
  }
  if (data.VPCs === "") {
    contents.VPCs = [];
  } else if (data["VPCs"] !== undefined && data["VPCs"]["VPC"] !== undefined) {
    contents.VPCs = de_VPCs(__getArrayIfSingleItem(data["VPCs"]["VPC"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetHostedZoneCommandError
 */
const de_GetHostedZoneCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHostedZoneCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await de_NoSuchHostedZoneRes(parsedOutput, context);
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
 * deserializeAws_restXmlGetHostedZoneCountCommand
 */
export const de_GetHostedZoneCountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHostedZoneCountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetHostedZoneCountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["HostedZoneCount"] !== undefined) {
    contents.HostedZoneCount = __strictParseLong(data["HostedZoneCount"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetHostedZoneCountCommandError
 */
const de_GetHostedZoneCountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHostedZoneCountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
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
 * deserializeAws_restXmlGetHostedZoneLimitCommand
 */
export const de_GetHostedZoneLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHostedZoneLimitCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetHostedZoneLimitCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Count"] !== undefined) {
    contents.Count = __strictParseLong(data["Count"]) as number;
  }
  if (data["Limit"] !== undefined) {
    contents.Limit = de_HostedZoneLimit(data["Limit"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetHostedZoneLimitCommandError
 */
const de_GetHostedZoneLimitCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHostedZoneLimitCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "HostedZoneNotPrivate":
    case "com.amazonaws.route53#HostedZoneNotPrivate":
      throw await de_HostedZoneNotPrivateRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await de_NoSuchHostedZoneRes(parsedOutput, context);
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
 * deserializeAws_restXmlGetQueryLoggingConfigCommand
 */
export const de_GetQueryLoggingConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryLoggingConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetQueryLoggingConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["QueryLoggingConfig"] !== undefined) {
    contents.QueryLoggingConfig = de_QueryLoggingConfig(data["QueryLoggingConfig"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetQueryLoggingConfigCommandError
 */
const de_GetQueryLoggingConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryLoggingConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NoSuchQueryLoggingConfig":
    case "com.amazonaws.route53#NoSuchQueryLoggingConfig":
      throw await de_NoSuchQueryLoggingConfigRes(parsedOutput, context);
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
 * deserializeAws_restXmlGetReusableDelegationSetCommand
 */
export const de_GetReusableDelegationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReusableDelegationSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetReusableDelegationSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["DelegationSet"] !== undefined) {
    contents.DelegationSet = de_DelegationSet(data["DelegationSet"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetReusableDelegationSetCommandError
 */
const de_GetReusableDelegationSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReusableDelegationSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DelegationSetNotReusable":
    case "com.amazonaws.route53#DelegationSetNotReusable":
      throw await de_DelegationSetNotReusableRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NoSuchDelegationSet":
    case "com.amazonaws.route53#NoSuchDelegationSet":
      throw await de_NoSuchDelegationSetRes(parsedOutput, context);
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
 * deserializeAws_restXmlGetReusableDelegationSetLimitCommand
 */
export const de_GetReusableDelegationSetLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReusableDelegationSetLimitCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetReusableDelegationSetLimitCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Count"] !== undefined) {
    contents.Count = __strictParseLong(data["Count"]) as number;
  }
  if (data["Limit"] !== undefined) {
    contents.Limit = de_ReusableDelegationSetLimit(data["Limit"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetReusableDelegationSetLimitCommandError
 */
const de_GetReusableDelegationSetLimitCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReusableDelegationSetLimitCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NoSuchDelegationSet":
    case "com.amazonaws.route53#NoSuchDelegationSet":
      throw await de_NoSuchDelegationSetRes(parsedOutput, context);
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
 * deserializeAws_restXmlGetTrafficPolicyCommand
 */
export const de_GetTrafficPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrafficPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetTrafficPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["TrafficPolicy"] !== undefined) {
    contents.TrafficPolicy = de_TrafficPolicy(data["TrafficPolicy"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetTrafficPolicyCommandError
 */
const de_GetTrafficPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrafficPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NoSuchTrafficPolicy":
    case "com.amazonaws.route53#NoSuchTrafficPolicy":
      throw await de_NoSuchTrafficPolicyRes(parsedOutput, context);
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
 * deserializeAws_restXmlGetTrafficPolicyInstanceCommand
 */
export const de_GetTrafficPolicyInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrafficPolicyInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetTrafficPolicyInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["TrafficPolicyInstance"] !== undefined) {
    contents.TrafficPolicyInstance = de_TrafficPolicyInstance(data["TrafficPolicyInstance"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetTrafficPolicyInstanceCommandError
 */
const de_GetTrafficPolicyInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrafficPolicyInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NoSuchTrafficPolicyInstance":
    case "com.amazonaws.route53#NoSuchTrafficPolicyInstance":
      throw await de_NoSuchTrafficPolicyInstanceRes(parsedOutput, context);
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
 * deserializeAws_restXmlGetTrafficPolicyInstanceCountCommand
 */
export const de_GetTrafficPolicyInstanceCountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrafficPolicyInstanceCountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetTrafficPolicyInstanceCountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["TrafficPolicyInstanceCount"] !== undefined) {
    contents.TrafficPolicyInstanceCount = __strictParseInt32(data["TrafficPolicyInstanceCount"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetTrafficPolicyInstanceCountCommandError
 */
const de_GetTrafficPolicyInstanceCountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrafficPolicyInstanceCountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlListCidrBlocksCommand
 */
export const de_ListCidrBlocksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCidrBlocksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListCidrBlocksCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CidrBlocks === "") {
    contents.CidrBlocks = [];
  } else if (data["CidrBlocks"] !== undefined && data["CidrBlocks"]["member"] !== undefined) {
    contents.CidrBlocks = de_CidrBlockSummaries(__getArrayIfSingleItem(data["CidrBlocks"]["member"]), context);
  }
  if (data["NextToken"] !== undefined) {
    contents.NextToken = __expectString(data["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListCidrBlocksCommandError
 */
const de_ListCidrBlocksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCidrBlocksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NoSuchCidrCollectionException":
    case "com.amazonaws.route53#NoSuchCidrCollectionException":
      throw await de_NoSuchCidrCollectionExceptionRes(parsedOutput, context);
    case "NoSuchCidrLocationException":
    case "com.amazonaws.route53#NoSuchCidrLocationException":
      throw await de_NoSuchCidrLocationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restXmlListCidrCollectionsCommand
 */
export const de_ListCidrCollectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCidrCollectionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListCidrCollectionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CidrCollections === "") {
    contents.CidrCollections = [];
  } else if (data["CidrCollections"] !== undefined && data["CidrCollections"]["member"] !== undefined) {
    contents.CidrCollections = de_CollectionSummaries(
      __getArrayIfSingleItem(data["CidrCollections"]["member"]),
      context
    );
  }
  if (data["NextToken"] !== undefined) {
    contents.NextToken = __expectString(data["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListCidrCollectionsCommandError
 */
const de_ListCidrCollectionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCidrCollectionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
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
 * deserializeAws_restXmlListCidrLocationsCommand
 */
export const de_ListCidrLocationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCidrLocationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListCidrLocationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CidrLocations === "") {
    contents.CidrLocations = [];
  } else if (data["CidrLocations"] !== undefined && data["CidrLocations"]["member"] !== undefined) {
    contents.CidrLocations = de_LocationSummaries(__getArrayIfSingleItem(data["CidrLocations"]["member"]), context);
  }
  if (data["NextToken"] !== undefined) {
    contents.NextToken = __expectString(data["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListCidrLocationsCommandError
 */
const de_ListCidrLocationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCidrLocationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NoSuchCidrCollectionException":
    case "com.amazonaws.route53#NoSuchCidrCollectionException":
      throw await de_NoSuchCidrCollectionExceptionRes(parsedOutput, context);
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
 * deserializeAws_restXmlListGeoLocationsCommand
 */
export const de_ListGeoLocationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGeoLocationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListGeoLocationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GeoLocationDetailsList === "") {
    contents.GeoLocationDetailsList = [];
  } else if (
    data["GeoLocationDetailsList"] !== undefined &&
    data["GeoLocationDetailsList"]["GeoLocationDetails"] !== undefined
  ) {
    contents.GeoLocationDetailsList = de_GeoLocationDetailsList(
      __getArrayIfSingleItem(data["GeoLocationDetailsList"]["GeoLocationDetails"]),
      context
    );
  }
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(data["IsTruncated"]);
  }
  if (data["MaxItems"] !== undefined) {
    contents.MaxItems = __strictParseInt32(data["MaxItems"]) as number;
  }
  if (data["NextContinentCode"] !== undefined) {
    contents.NextContinentCode = __expectString(data["NextContinentCode"]);
  }
  if (data["NextCountryCode"] !== undefined) {
    contents.NextCountryCode = __expectString(data["NextCountryCode"]);
  }
  if (data["NextSubdivisionCode"] !== undefined) {
    contents.NextSubdivisionCode = __expectString(data["NextSubdivisionCode"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListGeoLocationsCommandError
 */
const de_ListGeoLocationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGeoLocationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
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
 * deserializeAws_restXmlListHealthChecksCommand
 */
export const de_ListHealthChecksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHealthChecksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListHealthChecksCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.HealthChecks === "") {
    contents.HealthChecks = [];
  } else if (data["HealthChecks"] !== undefined && data["HealthChecks"]["HealthCheck"] !== undefined) {
    contents.HealthChecks = de_HealthChecks(__getArrayIfSingleItem(data["HealthChecks"]["HealthCheck"]), context);
  }
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(data["IsTruncated"]);
  }
  if (data["Marker"] !== undefined) {
    contents.Marker = __expectString(data["Marker"]);
  }
  if (data["MaxItems"] !== undefined) {
    contents.MaxItems = __strictParseInt32(data["MaxItems"]) as number;
  }
  if (data["NextMarker"] !== undefined) {
    contents.NextMarker = __expectString(data["NextMarker"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListHealthChecksCommandError
 */
const de_ListHealthChecksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHealthChecksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IncompatibleVersion":
    case "com.amazonaws.route53#IncompatibleVersion":
      throw await de_IncompatibleVersionRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
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
 * deserializeAws_restXmlListHostedZonesCommand
 */
export const de_ListHostedZonesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHostedZonesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListHostedZonesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.HostedZones === "") {
    contents.HostedZones = [];
  } else if (data["HostedZones"] !== undefined && data["HostedZones"]["HostedZone"] !== undefined) {
    contents.HostedZones = de_HostedZones(__getArrayIfSingleItem(data["HostedZones"]["HostedZone"]), context);
  }
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(data["IsTruncated"]);
  }
  if (data["Marker"] !== undefined) {
    contents.Marker = __expectString(data["Marker"]);
  }
  if (data["MaxItems"] !== undefined) {
    contents.MaxItems = __strictParseInt32(data["MaxItems"]) as number;
  }
  if (data["NextMarker"] !== undefined) {
    contents.NextMarker = __expectString(data["NextMarker"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListHostedZonesCommandError
 */
const de_ListHostedZonesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHostedZonesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DelegationSetNotReusable":
    case "com.amazonaws.route53#DelegationSetNotReusable":
      throw await de_DelegationSetNotReusableRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NoSuchDelegationSet":
    case "com.amazonaws.route53#NoSuchDelegationSet":
      throw await de_NoSuchDelegationSetRes(parsedOutput, context);
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
 * deserializeAws_restXmlListHostedZonesByNameCommand
 */
export const de_ListHostedZonesByNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHostedZonesByNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListHostedZonesByNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["DNSName"] !== undefined) {
    contents.DNSName = __expectString(data["DNSName"]);
  }
  if (data["HostedZoneId"] !== undefined) {
    contents.HostedZoneId = __expectString(data["HostedZoneId"]);
  }
  if (data.HostedZones === "") {
    contents.HostedZones = [];
  } else if (data["HostedZones"] !== undefined && data["HostedZones"]["HostedZone"] !== undefined) {
    contents.HostedZones = de_HostedZones(__getArrayIfSingleItem(data["HostedZones"]["HostedZone"]), context);
  }
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(data["IsTruncated"]);
  }
  if (data["MaxItems"] !== undefined) {
    contents.MaxItems = __strictParseInt32(data["MaxItems"]) as number;
  }
  if (data["NextDNSName"] !== undefined) {
    contents.NextDNSName = __expectString(data["NextDNSName"]);
  }
  if (data["NextHostedZoneId"] !== undefined) {
    contents.NextHostedZoneId = __expectString(data["NextHostedZoneId"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListHostedZonesByNameCommandError
 */
const de_ListHostedZonesByNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHostedZonesByNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidDomainName":
    case "com.amazonaws.route53#InvalidDomainName":
      throw await de_InvalidDomainNameRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
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
 * deserializeAws_restXmlListHostedZonesByVPCCommand
 */
export const de_ListHostedZonesByVPCCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHostedZonesByVPCCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListHostedZonesByVPCCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.HostedZoneSummaries === "") {
    contents.HostedZoneSummaries = [];
  } else if (
    data["HostedZoneSummaries"] !== undefined &&
    data["HostedZoneSummaries"]["HostedZoneSummary"] !== undefined
  ) {
    contents.HostedZoneSummaries = de_HostedZoneSummaries(
      __getArrayIfSingleItem(data["HostedZoneSummaries"]["HostedZoneSummary"]),
      context
    );
  }
  if (data["MaxItems"] !== undefined) {
    contents.MaxItems = __strictParseInt32(data["MaxItems"]) as number;
  }
  if (data["NextToken"] !== undefined) {
    contents.NextToken = __expectString(data["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListHostedZonesByVPCCommandError
 */
const de_ListHostedZonesByVPCCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHostedZonesByVPCCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "InvalidPaginationToken":
    case "com.amazonaws.route53#InvalidPaginationToken":
      throw await de_InvalidPaginationTokenRes(parsedOutput, context);
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
 * deserializeAws_restXmlListQueryLoggingConfigsCommand
 */
export const de_ListQueryLoggingConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueryLoggingConfigsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListQueryLoggingConfigsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["NextToken"] !== undefined) {
    contents.NextToken = __expectString(data["NextToken"]);
  }
  if (data.QueryLoggingConfigs === "") {
    contents.QueryLoggingConfigs = [];
  } else if (
    data["QueryLoggingConfigs"] !== undefined &&
    data["QueryLoggingConfigs"]["QueryLoggingConfig"] !== undefined
  ) {
    contents.QueryLoggingConfigs = de_QueryLoggingConfigs(
      __getArrayIfSingleItem(data["QueryLoggingConfigs"]["QueryLoggingConfig"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restXmlListQueryLoggingConfigsCommandError
 */
const de_ListQueryLoggingConfigsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueryLoggingConfigsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "InvalidPaginationToken":
    case "com.amazonaws.route53#InvalidPaginationToken":
      throw await de_InvalidPaginationTokenRes(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await de_NoSuchHostedZoneRes(parsedOutput, context);
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
 * deserializeAws_restXmlListResourceRecordSetsCommand
 */
export const de_ListResourceRecordSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceRecordSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListResourceRecordSetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(data["IsTruncated"]);
  }
  if (data["MaxItems"] !== undefined) {
    contents.MaxItems = __strictParseInt32(data["MaxItems"]) as number;
  }
  if (data["NextRecordIdentifier"] !== undefined) {
    contents.NextRecordIdentifier = __expectString(data["NextRecordIdentifier"]);
  }
  if (data["NextRecordName"] !== undefined) {
    contents.NextRecordName = __expectString(data["NextRecordName"]);
  }
  if (data["NextRecordType"] !== undefined) {
    contents.NextRecordType = __expectString(data["NextRecordType"]);
  }
  if (data.ResourceRecordSets === "") {
    contents.ResourceRecordSets = [];
  } else if (
    data["ResourceRecordSets"] !== undefined &&
    data["ResourceRecordSets"]["ResourceRecordSet"] !== undefined
  ) {
    contents.ResourceRecordSets = de_ResourceRecordSets(
      __getArrayIfSingleItem(data["ResourceRecordSets"]["ResourceRecordSet"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restXmlListResourceRecordSetsCommandError
 */
const de_ListResourceRecordSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceRecordSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await de_NoSuchHostedZoneRes(parsedOutput, context);
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
 * deserializeAws_restXmlListReusableDelegationSetsCommand
 */
export const de_ListReusableDelegationSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReusableDelegationSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListReusableDelegationSetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DelegationSets === "") {
    contents.DelegationSets = [];
  } else if (data["DelegationSets"] !== undefined && data["DelegationSets"]["DelegationSet"] !== undefined) {
    contents.DelegationSets = de_DelegationSets(
      __getArrayIfSingleItem(data["DelegationSets"]["DelegationSet"]),
      context
    );
  }
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(data["IsTruncated"]);
  }
  if (data["Marker"] !== undefined) {
    contents.Marker = __expectString(data["Marker"]);
  }
  if (data["MaxItems"] !== undefined) {
    contents.MaxItems = __strictParseInt32(data["MaxItems"]) as number;
  }
  if (data["NextMarker"] !== undefined) {
    contents.NextMarker = __expectString(data["NextMarker"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListReusableDelegationSetsCommandError
 */
const de_ListReusableDelegationSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReusableDelegationSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
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
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ResourceTagSet"] !== undefined) {
    contents.ResourceTagSet = de_ResourceTagSet(data["ResourceTagSet"], context);
  }
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
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NoSuchHealthCheck":
    case "com.amazonaws.route53#NoSuchHealthCheck":
      throw await de_NoSuchHealthCheckRes(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await de_NoSuchHostedZoneRes(parsedOutput, context);
    case "PriorRequestNotComplete":
    case "com.amazonaws.route53#PriorRequestNotComplete":
      throw await de_PriorRequestNotCompleteRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restXmlListTagsForResourcesCommand
 */
export const de_ListTagsForResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForResourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ResourceTagSets === "") {
    contents.ResourceTagSets = [];
  } else if (data["ResourceTagSets"] !== undefined && data["ResourceTagSets"]["ResourceTagSet"] !== undefined) {
    contents.ResourceTagSets = de_ResourceTagSetList(
      __getArrayIfSingleItem(data["ResourceTagSets"]["ResourceTagSet"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restXmlListTagsForResourcesCommandError
 */
const de_ListTagsForResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NoSuchHealthCheck":
    case "com.amazonaws.route53#NoSuchHealthCheck":
      throw await de_NoSuchHealthCheckRes(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await de_NoSuchHostedZoneRes(parsedOutput, context);
    case "PriorRequestNotComplete":
    case "com.amazonaws.route53#PriorRequestNotComplete":
      throw await de_PriorRequestNotCompleteRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restXmlListTrafficPoliciesCommand
 */
export const de_ListTrafficPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrafficPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTrafficPoliciesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(data["IsTruncated"]);
  }
  if (data["MaxItems"] !== undefined) {
    contents.MaxItems = __strictParseInt32(data["MaxItems"]) as number;
  }
  if (data["TrafficPolicyIdMarker"] !== undefined) {
    contents.TrafficPolicyIdMarker = __expectString(data["TrafficPolicyIdMarker"]);
  }
  if (data.TrafficPolicySummaries === "") {
    contents.TrafficPolicySummaries = [];
  } else if (
    data["TrafficPolicySummaries"] !== undefined &&
    data["TrafficPolicySummaries"]["TrafficPolicySummary"] !== undefined
  ) {
    contents.TrafficPolicySummaries = de_TrafficPolicySummaries(
      __getArrayIfSingleItem(data["TrafficPolicySummaries"]["TrafficPolicySummary"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restXmlListTrafficPoliciesCommandError
 */
const de_ListTrafficPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrafficPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
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
 * deserializeAws_restXmlListTrafficPolicyInstancesCommand
 */
export const de_ListTrafficPolicyInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrafficPolicyInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTrafficPolicyInstancesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["HostedZoneIdMarker"] !== undefined) {
    contents.HostedZoneIdMarker = __expectString(data["HostedZoneIdMarker"]);
  }
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(data["IsTruncated"]);
  }
  if (data["MaxItems"] !== undefined) {
    contents.MaxItems = __strictParseInt32(data["MaxItems"]) as number;
  }
  if (data["TrafficPolicyInstanceNameMarker"] !== undefined) {
    contents.TrafficPolicyInstanceNameMarker = __expectString(data["TrafficPolicyInstanceNameMarker"]);
  }
  if (data["TrafficPolicyInstanceTypeMarker"] !== undefined) {
    contents.TrafficPolicyInstanceTypeMarker = __expectString(data["TrafficPolicyInstanceTypeMarker"]);
  }
  if (data.TrafficPolicyInstances === "") {
    contents.TrafficPolicyInstances = [];
  } else if (
    data["TrafficPolicyInstances"] !== undefined &&
    data["TrafficPolicyInstances"]["TrafficPolicyInstance"] !== undefined
  ) {
    contents.TrafficPolicyInstances = de_TrafficPolicyInstances(
      __getArrayIfSingleItem(data["TrafficPolicyInstances"]["TrafficPolicyInstance"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restXmlListTrafficPolicyInstancesCommandError
 */
const de_ListTrafficPolicyInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrafficPolicyInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NoSuchTrafficPolicyInstance":
    case "com.amazonaws.route53#NoSuchTrafficPolicyInstance":
      throw await de_NoSuchTrafficPolicyInstanceRes(parsedOutput, context);
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
 * deserializeAws_restXmlListTrafficPolicyInstancesByHostedZoneCommand
 */
export const de_ListTrafficPolicyInstancesByHostedZoneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrafficPolicyInstancesByHostedZoneCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTrafficPolicyInstancesByHostedZoneCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(data["IsTruncated"]);
  }
  if (data["MaxItems"] !== undefined) {
    contents.MaxItems = __strictParseInt32(data["MaxItems"]) as number;
  }
  if (data["TrafficPolicyInstanceNameMarker"] !== undefined) {
    contents.TrafficPolicyInstanceNameMarker = __expectString(data["TrafficPolicyInstanceNameMarker"]);
  }
  if (data["TrafficPolicyInstanceTypeMarker"] !== undefined) {
    contents.TrafficPolicyInstanceTypeMarker = __expectString(data["TrafficPolicyInstanceTypeMarker"]);
  }
  if (data.TrafficPolicyInstances === "") {
    contents.TrafficPolicyInstances = [];
  } else if (
    data["TrafficPolicyInstances"] !== undefined &&
    data["TrafficPolicyInstances"]["TrafficPolicyInstance"] !== undefined
  ) {
    contents.TrafficPolicyInstances = de_TrafficPolicyInstances(
      __getArrayIfSingleItem(data["TrafficPolicyInstances"]["TrafficPolicyInstance"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restXmlListTrafficPolicyInstancesByHostedZoneCommandError
 */
const de_ListTrafficPolicyInstancesByHostedZoneCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrafficPolicyInstancesByHostedZoneCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await de_NoSuchHostedZoneRes(parsedOutput, context);
    case "NoSuchTrafficPolicyInstance":
    case "com.amazonaws.route53#NoSuchTrafficPolicyInstance":
      throw await de_NoSuchTrafficPolicyInstanceRes(parsedOutput, context);
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
 * deserializeAws_restXmlListTrafficPolicyInstancesByPolicyCommand
 */
export const de_ListTrafficPolicyInstancesByPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrafficPolicyInstancesByPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTrafficPolicyInstancesByPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["HostedZoneIdMarker"] !== undefined) {
    contents.HostedZoneIdMarker = __expectString(data["HostedZoneIdMarker"]);
  }
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(data["IsTruncated"]);
  }
  if (data["MaxItems"] !== undefined) {
    contents.MaxItems = __strictParseInt32(data["MaxItems"]) as number;
  }
  if (data["TrafficPolicyInstanceNameMarker"] !== undefined) {
    contents.TrafficPolicyInstanceNameMarker = __expectString(data["TrafficPolicyInstanceNameMarker"]);
  }
  if (data["TrafficPolicyInstanceTypeMarker"] !== undefined) {
    contents.TrafficPolicyInstanceTypeMarker = __expectString(data["TrafficPolicyInstanceTypeMarker"]);
  }
  if (data.TrafficPolicyInstances === "") {
    contents.TrafficPolicyInstances = [];
  } else if (
    data["TrafficPolicyInstances"] !== undefined &&
    data["TrafficPolicyInstances"]["TrafficPolicyInstance"] !== undefined
  ) {
    contents.TrafficPolicyInstances = de_TrafficPolicyInstances(
      __getArrayIfSingleItem(data["TrafficPolicyInstances"]["TrafficPolicyInstance"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restXmlListTrafficPolicyInstancesByPolicyCommandError
 */
const de_ListTrafficPolicyInstancesByPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrafficPolicyInstancesByPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NoSuchTrafficPolicy":
    case "com.amazonaws.route53#NoSuchTrafficPolicy":
      throw await de_NoSuchTrafficPolicyRes(parsedOutput, context);
    case "NoSuchTrafficPolicyInstance":
    case "com.amazonaws.route53#NoSuchTrafficPolicyInstance":
      throw await de_NoSuchTrafficPolicyInstanceRes(parsedOutput, context);
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
 * deserializeAws_restXmlListTrafficPolicyVersionsCommand
 */
export const de_ListTrafficPolicyVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrafficPolicyVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTrafficPolicyVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(data["IsTruncated"]);
  }
  if (data["MaxItems"] !== undefined) {
    contents.MaxItems = __strictParseInt32(data["MaxItems"]) as number;
  }
  if (data.TrafficPolicies === "") {
    contents.TrafficPolicies = [];
  } else if (data["TrafficPolicies"] !== undefined && data["TrafficPolicies"]["TrafficPolicy"] !== undefined) {
    contents.TrafficPolicies = de_TrafficPolicies(
      __getArrayIfSingleItem(data["TrafficPolicies"]["TrafficPolicy"]),
      context
    );
  }
  if (data["TrafficPolicyVersionMarker"] !== undefined) {
    contents.TrafficPolicyVersionMarker = __expectString(data["TrafficPolicyVersionMarker"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListTrafficPolicyVersionsCommandError
 */
const de_ListTrafficPolicyVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrafficPolicyVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NoSuchTrafficPolicy":
    case "com.amazonaws.route53#NoSuchTrafficPolicy":
      throw await de_NoSuchTrafficPolicyRes(parsedOutput, context);
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
 * deserializeAws_restXmlListVPCAssociationAuthorizationsCommand
 */
export const de_ListVPCAssociationAuthorizationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVPCAssociationAuthorizationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListVPCAssociationAuthorizationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["HostedZoneId"] !== undefined) {
    contents.HostedZoneId = __expectString(data["HostedZoneId"]);
  }
  if (data["NextToken"] !== undefined) {
    contents.NextToken = __expectString(data["NextToken"]);
  }
  if (data.VPCs === "") {
    contents.VPCs = [];
  } else if (data["VPCs"] !== undefined && data["VPCs"]["VPC"] !== undefined) {
    contents.VPCs = de_VPCs(__getArrayIfSingleItem(data["VPCs"]["VPC"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListVPCAssociationAuthorizationsCommandError
 */
const de_ListVPCAssociationAuthorizationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVPCAssociationAuthorizationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "InvalidPaginationToken":
    case "com.amazonaws.route53#InvalidPaginationToken":
      throw await de_InvalidPaginationTokenRes(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await de_NoSuchHostedZoneRes(parsedOutput, context);
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
 * deserializeAws_restXmlTestDNSAnswerCommand
 */
export const de_TestDNSAnswerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestDNSAnswerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TestDNSAnswerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Nameserver"] !== undefined) {
    contents.Nameserver = __expectString(data["Nameserver"]);
  }
  if (data["Protocol"] !== undefined) {
    contents.Protocol = __expectString(data["Protocol"]);
  }
  if (data.RecordData === "") {
    contents.RecordData = [];
  } else if (data["RecordData"] !== undefined && data["RecordData"]["RecordDataEntry"] !== undefined) {
    contents.RecordData = de_RecordData(__getArrayIfSingleItem(data["RecordData"]["RecordDataEntry"]), context);
  }
  if (data["RecordName"] !== undefined) {
    contents.RecordName = __expectString(data["RecordName"]);
  }
  if (data["RecordType"] !== undefined) {
    contents.RecordType = __expectString(data["RecordType"]);
  }
  if (data["ResponseCode"] !== undefined) {
    contents.ResponseCode = __expectString(data["ResponseCode"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlTestDNSAnswerCommandError
 */
const de_TestDNSAnswerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestDNSAnswerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await de_NoSuchHostedZoneRes(parsedOutput, context);
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
 * deserializeAws_restXmlUpdateHealthCheckCommand
 */
export const de_UpdateHealthCheckCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHealthCheckCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateHealthCheckCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["HealthCheck"] !== undefined) {
    contents.HealthCheck = de_HealthCheck(data["HealthCheck"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlUpdateHealthCheckCommandError
 */
const de_UpdateHealthCheckCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHealthCheckCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "HealthCheckVersionMismatch":
    case "com.amazonaws.route53#HealthCheckVersionMismatch":
      throw await de_HealthCheckVersionMismatchRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NoSuchHealthCheck":
    case "com.amazonaws.route53#NoSuchHealthCheck":
      throw await de_NoSuchHealthCheckRes(parsedOutput, context);
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
 * deserializeAws_restXmlUpdateHostedZoneCommentCommand
 */
export const de_UpdateHostedZoneCommentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHostedZoneCommentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateHostedZoneCommentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["HostedZone"] !== undefined) {
    contents.HostedZone = de_HostedZone(data["HostedZone"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlUpdateHostedZoneCommentCommandError
 */
const de_UpdateHostedZoneCommentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHostedZoneCommentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await de_NoSuchHostedZoneRes(parsedOutput, context);
    case "PriorRequestNotComplete":
    case "com.amazonaws.route53#PriorRequestNotComplete":
      throw await de_PriorRequestNotCompleteRes(parsedOutput, context);
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
 * deserializeAws_restXmlUpdateTrafficPolicyCommentCommand
 */
export const de_UpdateTrafficPolicyCommentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrafficPolicyCommentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateTrafficPolicyCommentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["TrafficPolicy"] !== undefined) {
    contents.TrafficPolicy = de_TrafficPolicy(data["TrafficPolicy"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlUpdateTrafficPolicyCommentCommandError
 */
const de_UpdateTrafficPolicyCommentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrafficPolicyCommentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.route53#ConcurrentModification":
      throw await de_ConcurrentModificationRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NoSuchTrafficPolicy":
    case "com.amazonaws.route53#NoSuchTrafficPolicy":
      throw await de_NoSuchTrafficPolicyRes(parsedOutput, context);
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
 * deserializeAws_restXmlUpdateTrafficPolicyInstanceCommand
 */
export const de_UpdateTrafficPolicyInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrafficPolicyInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateTrafficPolicyInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["TrafficPolicyInstance"] !== undefined) {
    contents.TrafficPolicyInstance = de_TrafficPolicyInstance(data["TrafficPolicyInstance"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlUpdateTrafficPolicyInstanceCommandError
 */
const de_UpdateTrafficPolicyInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrafficPolicyInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingTypes":
    case "com.amazonaws.route53#ConflictingTypes":
      throw await de_ConflictingTypesRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NoSuchTrafficPolicy":
    case "com.amazonaws.route53#NoSuchTrafficPolicy":
      throw await de_NoSuchTrafficPolicyRes(parsedOutput, context);
    case "NoSuchTrafficPolicyInstance":
    case "com.amazonaws.route53#NoSuchTrafficPolicyInstance":
      throw await de_NoSuchTrafficPolicyInstanceRes(parsedOutput, context);
    case "PriorRequestNotComplete":
    case "com.amazonaws.route53#PriorRequestNotComplete":
      throw await de_PriorRequestNotCompleteRes(parsedOutput, context);
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
 * deserializeAws_restXmlCidrBlockInUseExceptionRes
 */
const de_CidrBlockInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CidrBlockInUseException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
  }
  const exception = new CidrBlockInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlCidrCollectionAlreadyExistsExceptionRes
 */
const de_CidrCollectionAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CidrCollectionAlreadyExistsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
  }
  const exception = new CidrCollectionAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlCidrCollectionInUseExceptionRes
 */
const de_CidrCollectionInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CidrCollectionInUseException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
  }
  const exception = new CidrCollectionInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlCidrCollectionVersionMismatchExceptionRes
 */
const de_CidrCollectionVersionMismatchExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CidrCollectionVersionMismatchException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
  }
  const exception = new CidrCollectionVersionMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlConcurrentModificationRes
 */
const de_ConcurrentModificationRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModification> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new ConcurrentModification({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlConflictingDomainExistsRes
 */
const de_ConflictingDomainExistsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictingDomainExists> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new ConflictingDomainExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlConflictingTypesRes
 */
const de_ConflictingTypesRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictingTypes> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new ConflictingTypes({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlDelegationSetAlreadyCreatedRes
 */
const de_DelegationSetAlreadyCreatedRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DelegationSetAlreadyCreated> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new DelegationSetAlreadyCreated({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlDelegationSetAlreadyReusableRes
 */
const de_DelegationSetAlreadyReusableRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DelegationSetAlreadyReusable> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new DelegationSetAlreadyReusable({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlDelegationSetInUseRes
 */
const de_DelegationSetInUseRes = async (parsedOutput: any, context: __SerdeContext): Promise<DelegationSetInUse> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new DelegationSetInUse({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlDelegationSetNotAvailableRes
 */
const de_DelegationSetNotAvailableRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DelegationSetNotAvailable> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new DelegationSetNotAvailable({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlDelegationSetNotReusableRes
 */
const de_DelegationSetNotReusableRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DelegationSetNotReusable> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new DelegationSetNotReusable({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlDNSSECNotFoundRes
 */
const de_DNSSECNotFoundRes = async (parsedOutput: any, context: __SerdeContext): Promise<DNSSECNotFound> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new DNSSECNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlHealthCheckAlreadyExistsRes
 */
const de_HealthCheckAlreadyExistsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HealthCheckAlreadyExists> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new HealthCheckAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlHealthCheckInUseRes
 */
const de_HealthCheckInUseRes = async (parsedOutput: any, context: __SerdeContext): Promise<HealthCheckInUse> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new HealthCheckInUse({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlHealthCheckVersionMismatchRes
 */
const de_HealthCheckVersionMismatchRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HealthCheckVersionMismatch> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new HealthCheckVersionMismatch({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlHostedZoneAlreadyExistsRes
 */
const de_HostedZoneAlreadyExistsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HostedZoneAlreadyExists> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new HostedZoneAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlHostedZoneNotEmptyRes
 */
const de_HostedZoneNotEmptyRes = async (parsedOutput: any, context: __SerdeContext): Promise<HostedZoneNotEmpty> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new HostedZoneNotEmpty({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlHostedZoneNotFoundRes
 */
const de_HostedZoneNotFoundRes = async (parsedOutput: any, context: __SerdeContext): Promise<HostedZoneNotFound> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new HostedZoneNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlHostedZoneNotPrivateRes
 */
const de_HostedZoneNotPrivateRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HostedZoneNotPrivate> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new HostedZoneNotPrivate({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlHostedZonePartiallyDelegatedRes
 */
const de_HostedZonePartiallyDelegatedRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HostedZonePartiallyDelegated> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new HostedZonePartiallyDelegated({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlIncompatibleVersionRes
 */
const de_IncompatibleVersionRes = async (parsedOutput: any, context: __SerdeContext): Promise<IncompatibleVersion> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new IncompatibleVersion({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInsufficientCloudWatchLogsResourcePolicyRes
 */
const de_InsufficientCloudWatchLogsResourcePolicyRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientCloudWatchLogsResourcePolicy> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new InsufficientCloudWatchLogsResourcePolicy({
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
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new InvalidArgument({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidChangeBatchRes
 */
const de_InvalidChangeBatchRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidChangeBatch> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  if (data.messages === "") {
    contents.messages = [];
  } else if (data["messages"] !== undefined && data["messages"]["Message"] !== undefined) {
    contents.messages = de_ErrorMessages(__getArrayIfSingleItem(data["messages"]["Message"]), context);
  }
  const exception = new InvalidChangeBatch({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidDomainNameRes
 */
const de_InvalidDomainNameRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidDomainName> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new InvalidDomainName({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidInputRes
 */
const de_InvalidInputRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidInput> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new InvalidInput({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidKeySigningKeyNameRes
 */
const de_InvalidKeySigningKeyNameRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidKeySigningKeyName> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new InvalidKeySigningKeyName({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidKeySigningKeyStatusRes
 */
const de_InvalidKeySigningKeyStatusRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidKeySigningKeyStatus> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new InvalidKeySigningKeyStatus({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidKMSArnRes
 */
const de_InvalidKMSArnRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidKMSArn> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new InvalidKMSArn({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidPaginationTokenRes
 */
const de_InvalidPaginationTokenRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPaginationToken> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new InvalidPaginationToken({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidSigningStatusRes
 */
const de_InvalidSigningStatusRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSigningStatus> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new InvalidSigningStatus({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidTrafficPolicyDocumentRes
 */
const de_InvalidTrafficPolicyDocumentRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTrafficPolicyDocument> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new InvalidTrafficPolicyDocument({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidVPCIdRes
 */
const de_InvalidVPCIdRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidVPCId> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new InvalidVPCId({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlKeySigningKeyAlreadyExistsRes
 */
const de_KeySigningKeyAlreadyExistsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KeySigningKeyAlreadyExists> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new KeySigningKeyAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlKeySigningKeyInParentDSRecordRes
 */
const de_KeySigningKeyInParentDSRecordRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KeySigningKeyInParentDSRecord> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new KeySigningKeyInParentDSRecord({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlKeySigningKeyInUseRes
 */
const de_KeySigningKeyInUseRes = async (parsedOutput: any, context: __SerdeContext): Promise<KeySigningKeyInUse> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new KeySigningKeyInUse({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlKeySigningKeyWithActiveStatusNotFoundRes
 */
const de_KeySigningKeyWithActiveStatusNotFoundRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KeySigningKeyWithActiveStatusNotFound> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new KeySigningKeyWithActiveStatusNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlLastVPCAssociationRes
 */
const de_LastVPCAssociationRes = async (parsedOutput: any, context: __SerdeContext): Promise<LastVPCAssociation> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new LastVPCAssociation({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlLimitsExceededRes
 */
const de_LimitsExceededRes = async (parsedOutput: any, context: __SerdeContext): Promise<LimitsExceeded> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new LimitsExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlNoSuchChangeRes
 */
const de_NoSuchChangeRes = async (parsedOutput: any, context: __SerdeContext): Promise<NoSuchChange> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new NoSuchChange({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlNoSuchCidrCollectionExceptionRes
 */
const de_NoSuchCidrCollectionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchCidrCollectionException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
  }
  const exception = new NoSuchCidrCollectionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlNoSuchCidrLocationExceptionRes
 */
const de_NoSuchCidrLocationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchCidrLocationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
  }
  const exception = new NoSuchCidrLocationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlNoSuchCloudWatchLogsLogGroupRes
 */
const de_NoSuchCloudWatchLogsLogGroupRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchCloudWatchLogsLogGroup> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new NoSuchCloudWatchLogsLogGroup({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlNoSuchDelegationSetRes
 */
const de_NoSuchDelegationSetRes = async (parsedOutput: any, context: __SerdeContext): Promise<NoSuchDelegationSet> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new NoSuchDelegationSet({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlNoSuchGeoLocationRes
 */
const de_NoSuchGeoLocationRes = async (parsedOutput: any, context: __SerdeContext): Promise<NoSuchGeoLocation> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new NoSuchGeoLocation({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlNoSuchHealthCheckRes
 */
const de_NoSuchHealthCheckRes = async (parsedOutput: any, context: __SerdeContext): Promise<NoSuchHealthCheck> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new NoSuchHealthCheck({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlNoSuchHostedZoneRes
 */
const de_NoSuchHostedZoneRes = async (parsedOutput: any, context: __SerdeContext): Promise<NoSuchHostedZone> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new NoSuchHostedZone({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlNoSuchKeySigningKeyRes
 */
const de_NoSuchKeySigningKeyRes = async (parsedOutput: any, context: __SerdeContext): Promise<NoSuchKeySigningKey> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new NoSuchKeySigningKey({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlNoSuchQueryLoggingConfigRes
 */
const de_NoSuchQueryLoggingConfigRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchQueryLoggingConfig> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new NoSuchQueryLoggingConfig({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlNoSuchTrafficPolicyRes
 */
const de_NoSuchTrafficPolicyRes = async (parsedOutput: any, context: __SerdeContext): Promise<NoSuchTrafficPolicy> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new NoSuchTrafficPolicy({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlNoSuchTrafficPolicyInstanceRes
 */
const de_NoSuchTrafficPolicyInstanceRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchTrafficPolicyInstance> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new NoSuchTrafficPolicyInstance({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlNotAuthorizedExceptionRes
 */
const de_NotAuthorizedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotAuthorizedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new NotAuthorizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlPriorRequestNotCompleteRes
 */
const de_PriorRequestNotCompleteRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PriorRequestNotComplete> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new PriorRequestNotComplete({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlPublicZoneVPCAssociationRes
 */
const de_PublicZoneVPCAssociationRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PublicZoneVPCAssociation> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new PublicZoneVPCAssociation({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlQueryLoggingConfigAlreadyExistsRes
 */
const de_QueryLoggingConfigAlreadyExistsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<QueryLoggingConfigAlreadyExists> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new QueryLoggingConfigAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyHealthChecksRes
 */
const de_TooManyHealthChecksRes = async (parsedOutput: any, context: __SerdeContext): Promise<TooManyHealthChecks> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new TooManyHealthChecks({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyHostedZonesRes
 */
const de_TooManyHostedZonesRes = async (parsedOutput: any, context: __SerdeContext): Promise<TooManyHostedZones> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new TooManyHostedZones({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyKeySigningKeysRes
 */
const de_TooManyKeySigningKeysRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyKeySigningKeys> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new TooManyKeySigningKeys({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyTrafficPoliciesRes
 */
const de_TooManyTrafficPoliciesRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTrafficPolicies> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new TooManyTrafficPolicies({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyTrafficPolicyInstancesRes
 */
const de_TooManyTrafficPolicyInstancesRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTrafficPolicyInstances> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new TooManyTrafficPolicyInstances({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyTrafficPolicyVersionsForCurrentPolicyRes
 */
const de_TooManyTrafficPolicyVersionsForCurrentPolicyRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTrafficPolicyVersionsForCurrentPolicy> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new TooManyTrafficPolicyVersionsForCurrentPolicy({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyVPCAssociationAuthorizationsRes
 */
const de_TooManyVPCAssociationAuthorizationsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyVPCAssociationAuthorizations> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new TooManyVPCAssociationAuthorizations({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTrafficPolicyAlreadyExistsRes
 */
const de_TrafficPolicyAlreadyExistsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TrafficPolicyAlreadyExists> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new TrafficPolicyAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTrafficPolicyInstanceAlreadyExistsRes
 */
const de_TrafficPolicyInstanceAlreadyExistsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TrafficPolicyInstanceAlreadyExists> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new TrafficPolicyInstanceAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTrafficPolicyInUseRes
 */
const de_TrafficPolicyInUseRes = async (parsedOutput: any, context: __SerdeContext): Promise<TrafficPolicyInUse> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new TrafficPolicyInUse({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlVPCAssociationAuthorizationNotFoundRes
 */
const de_VPCAssociationAuthorizationNotFoundRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<VPCAssociationAuthorizationNotFound> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new VPCAssociationAuthorizationNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlVPCAssociationNotFoundRes
 */
const de_VPCAssociationNotFoundRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<VPCAssociationNotFound> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  const exception = new VPCAssociationNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * serializeAws_restXmlAlarmIdentifier
 */
const se_AlarmIdentifier = (input: AlarmIdentifier, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("AlarmIdentifier");
  if (input.Region != null) {
    const node = __XmlNode.of("CloudWatchRegion", input.Region).withName("Region");
    bodyNode.addChildNode(node);
  }
  if (input.Name != null) {
    const node = __XmlNode.of("AlarmName", input.Name).withName("Name");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlAliasTarget
 */
const se_AliasTarget = (input: AliasTarget, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("AliasTarget");
  if (input.HostedZoneId != null) {
    const node = __XmlNode.of("ResourceId", input.HostedZoneId).withName("HostedZoneId");
    bodyNode.addChildNode(node);
  }
  if (input.DNSName != null) {
    const node = __XmlNode.of("DNSName", input.DNSName).withName("DNSName");
    bodyNode.addChildNode(node);
  }
  if (input.EvaluateTargetHealth != null) {
    const node = __XmlNode
      .of("AliasHealthEnabled", String(input.EvaluateTargetHealth))
      .withName("EvaluateTargetHealth");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlChange
 */
const se_Change = (input: Change, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Change");
  if (input.Action != null) {
    const node = __XmlNode.of("ChangeAction", input.Action).withName("Action");
    bodyNode.addChildNode(node);
  }
  if (input.ResourceRecordSet != null) {
    const node = se_ResourceRecordSet(input.ResourceRecordSet, context).withName("ResourceRecordSet");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlChangeBatch
 */
const se_ChangeBatch = (input: ChangeBatch, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ChangeBatch");
  if (input.Comment != null) {
    const node = __XmlNode.of("ResourceDescription", input.Comment).withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.Changes != null) {
    const nodes = se_Changes(input.Changes, context);
    const containerNode = new __XmlNode("Changes");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlChanges
 */
const se_Changes = (input: Change[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_Change(entry, context);
      return node.withName("Change");
    });
};

/**
 * serializeAws_restXmlChildHealthCheckList
 */
const se_ChildHealthCheckList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("HealthCheckId", entry);
      return node.withName("ChildHealthCheck");
    });
};

/**
 * serializeAws_restXmlCidrCollectionChange
 */
const se_CidrCollectionChange = (input: CidrCollectionChange, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CidrCollectionChange");
  if (input.LocationName != null) {
    const node = __XmlNode.of("CidrLocationNameDefaultNotAllowed", input.LocationName).withName("LocationName");
    bodyNode.addChildNode(node);
  }
  if (input.Action != null) {
    const node = __XmlNode.of("CidrCollectionChangeAction", input.Action).withName("Action");
    bodyNode.addChildNode(node);
  }
  if (input.CidrList != null) {
    const nodes = se_CidrList(input.CidrList, context);
    const containerNode = new __XmlNode("CidrList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlCidrCollectionChanges
 */
const se_CidrCollectionChanges = (input: CidrCollectionChange[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_CidrCollectionChange(entry, context);
      return node.withName("member");
    });
};

/**
 * serializeAws_restXmlCidrList
 */
const se_CidrList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("Cidr", entry);
      return node.withName("Cidr");
    });
};

/**
 * serializeAws_restXmlCidrRoutingConfig
 */
const se_CidrRoutingConfig = (input: CidrRoutingConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CidrRoutingConfig");
  if (input.CollectionId != null) {
    const node = __XmlNode.of("UUID", input.CollectionId).withName("CollectionId");
    bodyNode.addChildNode(node);
  }
  if (input.LocationName != null) {
    const node = __XmlNode.of("CidrLocationNameDefaultAllowed", input.LocationName).withName("LocationName");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlGeoLocation
 */
const se_GeoLocation = (input: GeoLocation, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("GeoLocation");
  if (input.ContinentCode != null) {
    const node = __XmlNode.of("GeoLocationContinentCode", input.ContinentCode).withName("ContinentCode");
    bodyNode.addChildNode(node);
  }
  if (input.CountryCode != null) {
    const node = __XmlNode.of("GeoLocationCountryCode", input.CountryCode).withName("CountryCode");
    bodyNode.addChildNode(node);
  }
  if (input.SubdivisionCode != null) {
    const node = __XmlNode.of("GeoLocationSubdivisionCode", input.SubdivisionCode).withName("SubdivisionCode");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlHealthCheckConfig
 */
const se_HealthCheckConfig = (input: HealthCheckConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("HealthCheckConfig");
  if (input.IPAddress != null) {
    const node = __XmlNode.of("IPAddress", input.IPAddress).withName("IPAddress");
    bodyNode.addChildNode(node);
  }
  if (input.Port != null) {
    const node = __XmlNode.of("Port", String(input.Port)).withName("Port");
    bodyNode.addChildNode(node);
  }
  if (input.Type != null) {
    const node = __XmlNode.of("HealthCheckType", input.Type).withName("Type");
    bodyNode.addChildNode(node);
  }
  if (input.ResourcePath != null) {
    const node = __XmlNode.of("ResourcePath", input.ResourcePath).withName("ResourcePath");
    bodyNode.addChildNode(node);
  }
  if (input.FullyQualifiedDomainName != null) {
    const node = __XmlNode
      .of("FullyQualifiedDomainName", input.FullyQualifiedDomainName)
      .withName("FullyQualifiedDomainName");
    bodyNode.addChildNode(node);
  }
  if (input.SearchString != null) {
    const node = __XmlNode.of("SearchString", input.SearchString).withName("SearchString");
    bodyNode.addChildNode(node);
  }
  if (input.RequestInterval != null) {
    const node = __XmlNode.of("RequestInterval", String(input.RequestInterval)).withName("RequestInterval");
    bodyNode.addChildNode(node);
  }
  if (input.FailureThreshold != null) {
    const node = __XmlNode.of("FailureThreshold", String(input.FailureThreshold)).withName("FailureThreshold");
    bodyNode.addChildNode(node);
  }
  if (input.MeasureLatency != null) {
    const node = __XmlNode.of("MeasureLatency", String(input.MeasureLatency)).withName("MeasureLatency");
    bodyNode.addChildNode(node);
  }
  if (input.Inverted != null) {
    const node = __XmlNode.of("Inverted", String(input.Inverted)).withName("Inverted");
    bodyNode.addChildNode(node);
  }
  if (input.Disabled != null) {
    const node = __XmlNode.of("Disabled", String(input.Disabled)).withName("Disabled");
    bodyNode.addChildNode(node);
  }
  if (input.HealthThreshold != null) {
    const node = __XmlNode.of("HealthThreshold", String(input.HealthThreshold)).withName("HealthThreshold");
    bodyNode.addChildNode(node);
  }
  if (input.ChildHealthChecks != null) {
    const nodes = se_ChildHealthCheckList(input.ChildHealthChecks, context);
    const containerNode = new __XmlNode("ChildHealthChecks");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.EnableSNI != null) {
    const node = __XmlNode.of("EnableSNI", String(input.EnableSNI)).withName("EnableSNI");
    bodyNode.addChildNode(node);
  }
  if (input.Regions != null) {
    const nodes = se_HealthCheckRegionList(input.Regions, context);
    const containerNode = new __XmlNode("Regions");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.AlarmIdentifier != null) {
    const node = se_AlarmIdentifier(input.AlarmIdentifier, context).withName("AlarmIdentifier");
    bodyNode.addChildNode(node);
  }
  if (input.InsufficientDataHealthStatus != null) {
    const node = __XmlNode
      .of("InsufficientDataHealthStatus", input.InsufficientDataHealthStatus)
      .withName("InsufficientDataHealthStatus");
    bodyNode.addChildNode(node);
  }
  if (input.RoutingControlArn != null) {
    const node = __XmlNode.of("RoutingControlArn", input.RoutingControlArn).withName("RoutingControlArn");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlHealthCheckRegionList
 */
const se_HealthCheckRegionList = (input: HealthCheckRegion[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("HealthCheckRegion", entry);
      return node.withName("Region");
    });
};

/**
 * serializeAws_restXmlHostedZoneConfig
 */
const se_HostedZoneConfig = (input: HostedZoneConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("HostedZoneConfig");
  if (input.Comment != null) {
    const node = __XmlNode.of("ResourceDescription", input.Comment).withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.PrivateZone != null) {
    const node = __XmlNode.of("IsPrivateZone", String(input.PrivateZone)).withName("PrivateZone");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlResettableElementNameList
 */
const se_ResettableElementNameList = (input: ResettableElementName[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("ResettableElementName", entry);
      return node.withName("ResettableElementName");
    });
};

/**
 * serializeAws_restXmlResourceRecord
 */
const se_ResourceRecord = (input: ResourceRecord, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ResourceRecord");
  if (input.Value != null) {
    const node = __XmlNode.of("RData", input.Value).withName("Value");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlResourceRecords
 */
const se_ResourceRecords = (input: ResourceRecord[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_ResourceRecord(entry, context);
      return node.withName("ResourceRecord");
    });
};

/**
 * serializeAws_restXmlResourceRecordSet
 */
const se_ResourceRecordSet = (input: ResourceRecordSet, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ResourceRecordSet");
  if (input.Name != null) {
    const node = __XmlNode.of("DNSName", input.Name).withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.Type != null) {
    const node = __XmlNode.of("RRType", input.Type).withName("Type");
    bodyNode.addChildNode(node);
  }
  if (input.SetIdentifier != null) {
    const node = __XmlNode.of("ResourceRecordSetIdentifier", input.SetIdentifier).withName("SetIdentifier");
    bodyNode.addChildNode(node);
  }
  if (input.Weight != null) {
    const node = __XmlNode.of("ResourceRecordSetWeight", String(input.Weight)).withName("Weight");
    bodyNode.addChildNode(node);
  }
  if (input.Region != null) {
    const node = __XmlNode.of("ResourceRecordSetRegion", input.Region).withName("Region");
    bodyNode.addChildNode(node);
  }
  if (input.GeoLocation != null) {
    const node = se_GeoLocation(input.GeoLocation, context).withName("GeoLocation");
    bodyNode.addChildNode(node);
  }
  if (input.Failover != null) {
    const node = __XmlNode.of("ResourceRecordSetFailover", input.Failover).withName("Failover");
    bodyNode.addChildNode(node);
  }
  if (input.MultiValueAnswer != null) {
    const node = __XmlNode
      .of("ResourceRecordSetMultiValueAnswer", String(input.MultiValueAnswer))
      .withName("MultiValueAnswer");
    bodyNode.addChildNode(node);
  }
  if (input.TTL != null) {
    const node = __XmlNode.of("TTL", String(input.TTL)).withName("TTL");
    bodyNode.addChildNode(node);
  }
  if (input.ResourceRecords != null) {
    const nodes = se_ResourceRecords(input.ResourceRecords, context);
    const containerNode = new __XmlNode("ResourceRecords");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.AliasTarget != null) {
    const node = se_AliasTarget(input.AliasTarget, context).withName("AliasTarget");
    bodyNode.addChildNode(node);
  }
  if (input.HealthCheckId != null) {
    const node = __XmlNode.of("HealthCheckId", input.HealthCheckId).withName("HealthCheckId");
    bodyNode.addChildNode(node);
  }
  if (input.TrafficPolicyInstanceId != null) {
    const node = __XmlNode
      .of("TrafficPolicyInstanceId", input.TrafficPolicyInstanceId)
      .withName("TrafficPolicyInstanceId");
    bodyNode.addChildNode(node);
  }
  if (input.CidrRoutingConfig != null) {
    const node = se_CidrRoutingConfig(input.CidrRoutingConfig, context).withName("CidrRoutingConfig");
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
 * serializeAws_restXmlTagResourceIdList
 */
const se_TagResourceIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("TagResourceId", entry);
      return node.withName("ResourceId");
    });
};

/**
 * serializeAws_restXmlVPC
 */
const se_VPC = (input: VPC, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("VPC");
  if (input.VPCRegion != null) {
    const node = __XmlNode.of("VPCRegion", input.VPCRegion).withName("VPCRegion");
    bodyNode.addChildNode(node);
  }
  if (input.VPCId != null) {
    const node = __XmlNode.of("VPCId", input.VPCId).withName("VPCId");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * deserializeAws_restXmlAccountLimit
 */
const de_AccountLimit = (output: any, context: __SerdeContext): AccountLimit => {
  const contents: any = {};
  if (output["Type"] !== undefined) {
    contents.Type = __expectString(output["Type"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __strictParseLong(output["Value"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlAlarmIdentifier
 */
const de_AlarmIdentifier = (output: any, context: __SerdeContext): AlarmIdentifier => {
  const contents: any = {};
  if (output["Region"] !== undefined) {
    contents.Region = __expectString(output["Region"]);
  }
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlAliasTarget
 */
const de_AliasTarget = (output: any, context: __SerdeContext): AliasTarget => {
  const contents: any = {};
  if (output["HostedZoneId"] !== undefined) {
    contents.HostedZoneId = __expectString(output["HostedZoneId"]);
  }
  if (output["DNSName"] !== undefined) {
    contents.DNSName = __expectString(output["DNSName"]);
  }
  if (output["EvaluateTargetHealth"] !== undefined) {
    contents.EvaluateTargetHealth = __parseBoolean(output["EvaluateTargetHealth"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlChangeInfo
 */
const de_ChangeInfo = (output: any, context: __SerdeContext): ChangeInfo => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["SubmittedAt"] !== undefined) {
    contents.SubmittedAt = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["SubmittedAt"]));
  }
  if (output["Comment"] !== undefined) {
    contents.Comment = __expectString(output["Comment"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCheckerIpRanges
 */
const de_CheckerIpRanges = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlChildHealthCheckList
 */
const de_ChildHealthCheckList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlCidrBlockSummaries
 */
const de_CidrBlockSummaries = (output: any, context: __SerdeContext): CidrBlockSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CidrBlockSummary(entry, context);
    });
};

/**
 * deserializeAws_restXmlCidrBlockSummary
 */
const de_CidrBlockSummary = (output: any, context: __SerdeContext): CidrBlockSummary => {
  const contents: any = {};
  if (output["CidrBlock"] !== undefined) {
    contents.CidrBlock = __expectString(output["CidrBlock"]);
  }
  if (output["LocationName"] !== undefined) {
    contents.LocationName = __expectString(output["LocationName"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCidrCollection
 */
const de_CidrCollection = (output: any, context: __SerdeContext): CidrCollection => {
  const contents: any = {};
  if (output["Arn"] !== undefined) {
    contents.Arn = __expectString(output["Arn"]);
  }
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Version"] !== undefined) {
    contents.Version = __strictParseLong(output["Version"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlCidrRoutingConfig
 */
const de_CidrRoutingConfig = (output: any, context: __SerdeContext): CidrRoutingConfig => {
  const contents: any = {};
  if (output["CollectionId"] !== undefined) {
    contents.CollectionId = __expectString(output["CollectionId"]);
  }
  if (output["LocationName"] !== undefined) {
    contents.LocationName = __expectString(output["LocationName"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCloudWatchAlarmConfiguration
 */
const de_CloudWatchAlarmConfiguration = (output: any, context: __SerdeContext): CloudWatchAlarmConfiguration => {
  const contents: any = {};
  if (output["EvaluationPeriods"] !== undefined) {
    contents.EvaluationPeriods = __strictParseInt32(output["EvaluationPeriods"]) as number;
  }
  if (output["Threshold"] !== undefined) {
    contents.Threshold = __strictParseFloat(output["Threshold"]) as number;
  }
  if (output["ComparisonOperator"] !== undefined) {
    contents.ComparisonOperator = __expectString(output["ComparisonOperator"]);
  }
  if (output["Period"] !== undefined) {
    contents.Period = __strictParseInt32(output["Period"]) as number;
  }
  if (output["MetricName"] !== undefined) {
    contents.MetricName = __expectString(output["MetricName"]);
  }
  if (output["Namespace"] !== undefined) {
    contents.Namespace = __expectString(output["Namespace"]);
  }
  if (output["Statistic"] !== undefined) {
    contents.Statistic = __expectString(output["Statistic"]);
  }
  if (output.Dimensions === "") {
    contents.Dimensions = [];
  } else if (output["Dimensions"] !== undefined && output["Dimensions"]["Dimension"] !== undefined) {
    contents.Dimensions = de_DimensionList(__getArrayIfSingleItem(output["Dimensions"]["Dimension"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCollectionSummaries
 */
const de_CollectionSummaries = (output: any, context: __SerdeContext): CollectionSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CollectionSummary(entry, context);
    });
};

/**
 * deserializeAws_restXmlCollectionSummary
 */
const de_CollectionSummary = (output: any, context: __SerdeContext): CollectionSummary => {
  const contents: any = {};
  if (output["Arn"] !== undefined) {
    contents.Arn = __expectString(output["Arn"]);
  }
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Version"] !== undefined) {
    contents.Version = __strictParseLong(output["Version"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlDelegationSet
 */
const de_DelegationSet = (output: any, context: __SerdeContext): DelegationSet => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["CallerReference"] !== undefined) {
    contents.CallerReference = __expectString(output["CallerReference"]);
  }
  if (output.NameServers === "") {
    contents.NameServers = [];
  } else if (output["NameServers"] !== undefined && output["NameServers"]["NameServer"] !== undefined) {
    contents.NameServers = de_DelegationSetNameServers(
      __getArrayIfSingleItem(output["NameServers"]["NameServer"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restXmlDelegationSetNameServers
 */
const de_DelegationSetNameServers = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlDelegationSets
 */
const de_DelegationSets = (output: any, context: __SerdeContext): DelegationSet[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DelegationSet(entry, context);
    });
};

/**
 * deserializeAws_restXmlDimension
 */
const de_Dimension = (output: any, context: __SerdeContext): Dimension => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlDimensionList
 */
const de_DimensionList = (output: any, context: __SerdeContext): Dimension[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Dimension(entry, context);
    });
};

/**
 * deserializeAws_restXmlDNSSECStatus
 */
const de_DNSSECStatus = (output: any, context: __SerdeContext): DNSSECStatus => {
  const contents: any = {};
  if (output["ServeSignature"] !== undefined) {
    contents.ServeSignature = __expectString(output["ServeSignature"]);
  }
  if (output["StatusMessage"] !== undefined) {
    contents.StatusMessage = __expectString(output["StatusMessage"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlErrorMessages
 */
const de_ErrorMessages = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlGeoLocation
 */
const de_GeoLocation = (output: any, context: __SerdeContext): GeoLocation => {
  const contents: any = {};
  if (output["ContinentCode"] !== undefined) {
    contents.ContinentCode = __expectString(output["ContinentCode"]);
  }
  if (output["CountryCode"] !== undefined) {
    contents.CountryCode = __expectString(output["CountryCode"]);
  }
  if (output["SubdivisionCode"] !== undefined) {
    contents.SubdivisionCode = __expectString(output["SubdivisionCode"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGeoLocationDetails
 */
const de_GeoLocationDetails = (output: any, context: __SerdeContext): GeoLocationDetails => {
  const contents: any = {};
  if (output["ContinentCode"] !== undefined) {
    contents.ContinentCode = __expectString(output["ContinentCode"]);
  }
  if (output["ContinentName"] !== undefined) {
    contents.ContinentName = __expectString(output["ContinentName"]);
  }
  if (output["CountryCode"] !== undefined) {
    contents.CountryCode = __expectString(output["CountryCode"]);
  }
  if (output["CountryName"] !== undefined) {
    contents.CountryName = __expectString(output["CountryName"]);
  }
  if (output["SubdivisionCode"] !== undefined) {
    contents.SubdivisionCode = __expectString(output["SubdivisionCode"]);
  }
  if (output["SubdivisionName"] !== undefined) {
    contents.SubdivisionName = __expectString(output["SubdivisionName"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGeoLocationDetailsList
 */
const de_GeoLocationDetailsList = (output: any, context: __SerdeContext): GeoLocationDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GeoLocationDetails(entry, context);
    });
};

/**
 * deserializeAws_restXmlHealthCheck
 */
const de_HealthCheck = (output: any, context: __SerdeContext): HealthCheck => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["CallerReference"] !== undefined) {
    contents.CallerReference = __expectString(output["CallerReference"]);
  }
  if (output["LinkedService"] !== undefined) {
    contents.LinkedService = de_LinkedService(output["LinkedService"], context);
  }
  if (output["HealthCheckConfig"] !== undefined) {
    contents.HealthCheckConfig = de_HealthCheckConfig(output["HealthCheckConfig"], context);
  }
  if (output["HealthCheckVersion"] !== undefined) {
    contents.HealthCheckVersion = __strictParseLong(output["HealthCheckVersion"]) as number;
  }
  if (output["CloudWatchAlarmConfiguration"] !== undefined) {
    contents.CloudWatchAlarmConfiguration = de_CloudWatchAlarmConfiguration(
      output["CloudWatchAlarmConfiguration"],
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restXmlHealthCheckConfig
 */
const de_HealthCheckConfig = (output: any, context: __SerdeContext): HealthCheckConfig => {
  const contents: any = {};
  if (output["IPAddress"] !== undefined) {
    contents.IPAddress = __expectString(output["IPAddress"]);
  }
  if (output["Port"] !== undefined) {
    contents.Port = __strictParseInt32(output["Port"]) as number;
  }
  if (output["Type"] !== undefined) {
    contents.Type = __expectString(output["Type"]);
  }
  if (output["ResourcePath"] !== undefined) {
    contents.ResourcePath = __expectString(output["ResourcePath"]);
  }
  if (output["FullyQualifiedDomainName"] !== undefined) {
    contents.FullyQualifiedDomainName = __expectString(output["FullyQualifiedDomainName"]);
  }
  if (output["SearchString"] !== undefined) {
    contents.SearchString = __expectString(output["SearchString"]);
  }
  if (output["RequestInterval"] !== undefined) {
    contents.RequestInterval = __strictParseInt32(output["RequestInterval"]) as number;
  }
  if (output["FailureThreshold"] !== undefined) {
    contents.FailureThreshold = __strictParseInt32(output["FailureThreshold"]) as number;
  }
  if (output["MeasureLatency"] !== undefined) {
    contents.MeasureLatency = __parseBoolean(output["MeasureLatency"]);
  }
  if (output["Inverted"] !== undefined) {
    contents.Inverted = __parseBoolean(output["Inverted"]);
  }
  if (output["Disabled"] !== undefined) {
    contents.Disabled = __parseBoolean(output["Disabled"]);
  }
  if (output["HealthThreshold"] !== undefined) {
    contents.HealthThreshold = __strictParseInt32(output["HealthThreshold"]) as number;
  }
  if (output.ChildHealthChecks === "") {
    contents.ChildHealthChecks = [];
  } else if (
    output["ChildHealthChecks"] !== undefined &&
    output["ChildHealthChecks"]["ChildHealthCheck"] !== undefined
  ) {
    contents.ChildHealthChecks = de_ChildHealthCheckList(
      __getArrayIfSingleItem(output["ChildHealthChecks"]["ChildHealthCheck"]),
      context
    );
  }
  if (output["EnableSNI"] !== undefined) {
    contents.EnableSNI = __parseBoolean(output["EnableSNI"]);
  }
  if (output.Regions === "") {
    contents.Regions = [];
  } else if (output["Regions"] !== undefined && output["Regions"]["Region"] !== undefined) {
    contents.Regions = de_HealthCheckRegionList(__getArrayIfSingleItem(output["Regions"]["Region"]), context);
  }
  if (output["AlarmIdentifier"] !== undefined) {
    contents.AlarmIdentifier = de_AlarmIdentifier(output["AlarmIdentifier"], context);
  }
  if (output["InsufficientDataHealthStatus"] !== undefined) {
    contents.InsufficientDataHealthStatus = __expectString(output["InsufficientDataHealthStatus"]);
  }
  if (output["RoutingControlArn"] !== undefined) {
    contents.RoutingControlArn = __expectString(output["RoutingControlArn"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlHealthCheckObservation
 */
const de_HealthCheckObservation = (output: any, context: __SerdeContext): HealthCheckObservation => {
  const contents: any = {};
  if (output["Region"] !== undefined) {
    contents.Region = __expectString(output["Region"]);
  }
  if (output["IPAddress"] !== undefined) {
    contents.IPAddress = __expectString(output["IPAddress"]);
  }
  if (output["StatusReport"] !== undefined) {
    contents.StatusReport = de_StatusReport(output["StatusReport"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlHealthCheckObservations
 */
const de_HealthCheckObservations = (output: any, context: __SerdeContext): HealthCheckObservation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_HealthCheckObservation(entry, context);
    });
};

/**
 * deserializeAws_restXmlHealthCheckRegionList
 */
const de_HealthCheckRegionList = (output: any, context: __SerdeContext): HealthCheckRegion[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlHealthChecks
 */
const de_HealthChecks = (output: any, context: __SerdeContext): HealthCheck[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_HealthCheck(entry, context);
    });
};

/**
 * deserializeAws_restXmlHostedZone
 */
const de_HostedZone = (output: any, context: __SerdeContext): HostedZone => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["CallerReference"] !== undefined) {
    contents.CallerReference = __expectString(output["CallerReference"]);
  }
  if (output["Config"] !== undefined) {
    contents.Config = de_HostedZoneConfig(output["Config"], context);
  }
  if (output["ResourceRecordSetCount"] !== undefined) {
    contents.ResourceRecordSetCount = __strictParseLong(output["ResourceRecordSetCount"]) as number;
  }
  if (output["LinkedService"] !== undefined) {
    contents.LinkedService = de_LinkedService(output["LinkedService"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlHostedZoneConfig
 */
const de_HostedZoneConfig = (output: any, context: __SerdeContext): HostedZoneConfig => {
  const contents: any = {};
  if (output["Comment"] !== undefined) {
    contents.Comment = __expectString(output["Comment"]);
  }
  if (output["PrivateZone"] !== undefined) {
    contents.PrivateZone = __parseBoolean(output["PrivateZone"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlHostedZoneLimit
 */
const de_HostedZoneLimit = (output: any, context: __SerdeContext): HostedZoneLimit => {
  const contents: any = {};
  if (output["Type"] !== undefined) {
    contents.Type = __expectString(output["Type"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __strictParseLong(output["Value"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlHostedZoneOwner
 */
const de_HostedZoneOwner = (output: any, context: __SerdeContext): HostedZoneOwner => {
  const contents: any = {};
  if (output["OwningAccount"] !== undefined) {
    contents.OwningAccount = __expectString(output["OwningAccount"]);
  }
  if (output["OwningService"] !== undefined) {
    contents.OwningService = __expectString(output["OwningService"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlHostedZones
 */
const de_HostedZones = (output: any, context: __SerdeContext): HostedZone[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_HostedZone(entry, context);
    });
};

/**
 * deserializeAws_restXmlHostedZoneSummaries
 */
const de_HostedZoneSummaries = (output: any, context: __SerdeContext): HostedZoneSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_HostedZoneSummary(entry, context);
    });
};

/**
 * deserializeAws_restXmlHostedZoneSummary
 */
const de_HostedZoneSummary = (output: any, context: __SerdeContext): HostedZoneSummary => {
  const contents: any = {};
  if (output["HostedZoneId"] !== undefined) {
    contents.HostedZoneId = __expectString(output["HostedZoneId"]);
  }
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Owner"] !== undefined) {
    contents.Owner = de_HostedZoneOwner(output["Owner"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlKeySigningKey
 */
const de_KeySigningKey = (output: any, context: __SerdeContext): KeySigningKey => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["KmsArn"] !== undefined) {
    contents.KmsArn = __expectString(output["KmsArn"]);
  }
  if (output["Flag"] !== undefined) {
    contents.Flag = __strictParseInt32(output["Flag"]) as number;
  }
  if (output["SigningAlgorithmMnemonic"] !== undefined) {
    contents.SigningAlgorithmMnemonic = __expectString(output["SigningAlgorithmMnemonic"]);
  }
  if (output["SigningAlgorithmType"] !== undefined) {
    contents.SigningAlgorithmType = __strictParseInt32(output["SigningAlgorithmType"]) as number;
  }
  if (output["DigestAlgorithmMnemonic"] !== undefined) {
    contents.DigestAlgorithmMnemonic = __expectString(output["DigestAlgorithmMnemonic"]);
  }
  if (output["DigestAlgorithmType"] !== undefined) {
    contents.DigestAlgorithmType = __strictParseInt32(output["DigestAlgorithmType"]) as number;
  }
  if (output["KeyTag"] !== undefined) {
    contents.KeyTag = __strictParseInt32(output["KeyTag"]) as number;
  }
  if (output["DigestValue"] !== undefined) {
    contents.DigestValue = __expectString(output["DigestValue"]);
  }
  if (output["PublicKey"] !== undefined) {
    contents.PublicKey = __expectString(output["PublicKey"]);
  }
  if (output["DSRecord"] !== undefined) {
    contents.DSRecord = __expectString(output["DSRecord"]);
  }
  if (output["DNSKEYRecord"] !== undefined) {
    contents.DNSKEYRecord = __expectString(output["DNSKEYRecord"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["StatusMessage"] !== undefined) {
    contents.StatusMessage = __expectString(output["StatusMessage"]);
  }
  if (output["CreatedDate"] !== undefined) {
    contents.CreatedDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreatedDate"]));
  }
  if (output["LastModifiedDate"] !== undefined) {
    contents.LastModifiedDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastModifiedDate"]));
  }
  return contents;
};

/**
 * deserializeAws_restXmlKeySigningKeys
 */
const de_KeySigningKeys = (output: any, context: __SerdeContext): KeySigningKey[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_KeySigningKey(entry, context);
    });
};

/**
 * deserializeAws_restXmlLinkedService
 */
const de_LinkedService = (output: any, context: __SerdeContext): LinkedService => {
  const contents: any = {};
  if (output["ServicePrincipal"] !== undefined) {
    contents.ServicePrincipal = __expectString(output["ServicePrincipal"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlLocationSummaries
 */
const de_LocationSummaries = (output: any, context: __SerdeContext): LocationSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LocationSummary(entry, context);
    });
};

/**
 * deserializeAws_restXmlLocationSummary
 */
const de_LocationSummary = (output: any, context: __SerdeContext): LocationSummary => {
  const contents: any = {};
  if (output["LocationName"] !== undefined) {
    contents.LocationName = __expectString(output["LocationName"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlQueryLoggingConfig
 */
const de_QueryLoggingConfig = (output: any, context: __SerdeContext): QueryLoggingConfig => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["HostedZoneId"] !== undefined) {
    contents.HostedZoneId = __expectString(output["HostedZoneId"]);
  }
  if (output["CloudWatchLogsLogGroupArn"] !== undefined) {
    contents.CloudWatchLogsLogGroupArn = __expectString(output["CloudWatchLogsLogGroupArn"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlQueryLoggingConfigs
 */
const de_QueryLoggingConfigs = (output: any, context: __SerdeContext): QueryLoggingConfig[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_QueryLoggingConfig(entry, context);
    });
};

/**
 * deserializeAws_restXmlRecordData
 */
const de_RecordData = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlResourceRecord
 */
const de_ResourceRecord = (output: any, context: __SerdeContext): ResourceRecord => {
  const contents: any = {};
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlResourceRecords
 */
const de_ResourceRecords = (output: any, context: __SerdeContext): ResourceRecord[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ResourceRecord(entry, context);
    });
};

/**
 * deserializeAws_restXmlResourceRecordSet
 */
const de_ResourceRecordSet = (output: any, context: __SerdeContext): ResourceRecordSet => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Type"] !== undefined) {
    contents.Type = __expectString(output["Type"]);
  }
  if (output["SetIdentifier"] !== undefined) {
    contents.SetIdentifier = __expectString(output["SetIdentifier"]);
  }
  if (output["Weight"] !== undefined) {
    contents.Weight = __strictParseLong(output["Weight"]) as number;
  }
  if (output["Region"] !== undefined) {
    contents.Region = __expectString(output["Region"]);
  }
  if (output["GeoLocation"] !== undefined) {
    contents.GeoLocation = de_GeoLocation(output["GeoLocation"], context);
  }
  if (output["Failover"] !== undefined) {
    contents.Failover = __expectString(output["Failover"]);
  }
  if (output["MultiValueAnswer"] !== undefined) {
    contents.MultiValueAnswer = __parseBoolean(output["MultiValueAnswer"]);
  }
  if (output["TTL"] !== undefined) {
    contents.TTL = __strictParseLong(output["TTL"]) as number;
  }
  if (output.ResourceRecords === "") {
    contents.ResourceRecords = [];
  } else if (output["ResourceRecords"] !== undefined && output["ResourceRecords"]["ResourceRecord"] !== undefined) {
    contents.ResourceRecords = de_ResourceRecords(
      __getArrayIfSingleItem(output["ResourceRecords"]["ResourceRecord"]),
      context
    );
  }
  if (output["AliasTarget"] !== undefined) {
    contents.AliasTarget = de_AliasTarget(output["AliasTarget"], context);
  }
  if (output["HealthCheckId"] !== undefined) {
    contents.HealthCheckId = __expectString(output["HealthCheckId"]);
  }
  if (output["TrafficPolicyInstanceId"] !== undefined) {
    contents.TrafficPolicyInstanceId = __expectString(output["TrafficPolicyInstanceId"]);
  }
  if (output["CidrRoutingConfig"] !== undefined) {
    contents.CidrRoutingConfig = de_CidrRoutingConfig(output["CidrRoutingConfig"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlResourceRecordSets
 */
const de_ResourceRecordSets = (output: any, context: __SerdeContext): ResourceRecordSet[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ResourceRecordSet(entry, context);
    });
};

/**
 * deserializeAws_restXmlResourceTagSet
 */
const de_ResourceTagSet = (output: any, context: __SerdeContext): ResourceTagSet => {
  const contents: any = {};
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType = __expectString(output["ResourceType"]);
  }
  if (output["ResourceId"] !== undefined) {
    contents.ResourceId = __expectString(output["ResourceId"]);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
    contents.Tags = de_TagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlResourceTagSetList
 */
const de_ResourceTagSetList = (output: any, context: __SerdeContext): ResourceTagSet[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ResourceTagSet(entry, context);
    });
};

/**
 * deserializeAws_restXmlReusableDelegationSetLimit
 */
const de_ReusableDelegationSetLimit = (output: any, context: __SerdeContext): ReusableDelegationSetLimit => {
  const contents: any = {};
  if (output["Type"] !== undefined) {
    contents.Type = __expectString(output["Type"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __strictParseLong(output["Value"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlStatusReport
 */
const de_StatusReport = (output: any, context: __SerdeContext): StatusReport => {
  const contents: any = {};
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["CheckedTime"] !== undefined) {
    contents.CheckedTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CheckedTime"]));
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
 * deserializeAws_restXmlTrafficPolicies
 */
const de_TrafficPolicies = (output: any, context: __SerdeContext): TrafficPolicy[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TrafficPolicy(entry, context);
    });
};

/**
 * deserializeAws_restXmlTrafficPolicy
 */
const de_TrafficPolicy = (output: any, context: __SerdeContext): TrafficPolicy => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["Version"] !== undefined) {
    contents.Version = __strictParseInt32(output["Version"]) as number;
  }
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Type"] !== undefined) {
    contents.Type = __expectString(output["Type"]);
  }
  if (output["Document"] !== undefined) {
    contents.Document = __expectString(output["Document"]);
  }
  if (output["Comment"] !== undefined) {
    contents.Comment = __expectString(output["Comment"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlTrafficPolicyInstance
 */
const de_TrafficPolicyInstance = (output: any, context: __SerdeContext): TrafficPolicyInstance => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["HostedZoneId"] !== undefined) {
    contents.HostedZoneId = __expectString(output["HostedZoneId"]);
  }
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["TTL"] !== undefined) {
    contents.TTL = __strictParseLong(output["TTL"]) as number;
  }
  if (output["State"] !== undefined) {
    contents.State = __expectString(output["State"]);
  }
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  if (output["TrafficPolicyId"] !== undefined) {
    contents.TrafficPolicyId = __expectString(output["TrafficPolicyId"]);
  }
  if (output["TrafficPolicyVersion"] !== undefined) {
    contents.TrafficPolicyVersion = __strictParseInt32(output["TrafficPolicyVersion"]) as number;
  }
  if (output["TrafficPolicyType"] !== undefined) {
    contents.TrafficPolicyType = __expectString(output["TrafficPolicyType"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlTrafficPolicyInstances
 */
const de_TrafficPolicyInstances = (output: any, context: __SerdeContext): TrafficPolicyInstance[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TrafficPolicyInstance(entry, context);
    });
};

/**
 * deserializeAws_restXmlTrafficPolicySummaries
 */
const de_TrafficPolicySummaries = (output: any, context: __SerdeContext): TrafficPolicySummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TrafficPolicySummary(entry, context);
    });
};

/**
 * deserializeAws_restXmlTrafficPolicySummary
 */
const de_TrafficPolicySummary = (output: any, context: __SerdeContext): TrafficPolicySummary => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Type"] !== undefined) {
    contents.Type = __expectString(output["Type"]);
  }
  if (output["LatestVersion"] !== undefined) {
    contents.LatestVersion = __strictParseInt32(output["LatestVersion"]) as number;
  }
  if (output["TrafficPolicyCount"] !== undefined) {
    contents.TrafficPolicyCount = __strictParseInt32(output["TrafficPolicyCount"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlVPC
 */
const de_VPC = (output: any, context: __SerdeContext): VPC => {
  const contents: any = {};
  if (output["VPCRegion"] !== undefined) {
    contents.VPCRegion = __expectString(output["VPCRegion"]);
  }
  if (output["VPCId"] !== undefined) {
    contents.VPCId = __expectString(output["VPCId"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlVPCs
 */
const de_VPCs = (output: any, context: __SerdeContext): VPC[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_VPC(entry, context);
    });
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
