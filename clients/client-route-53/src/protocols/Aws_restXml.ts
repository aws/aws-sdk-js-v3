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
  map as __map,
  parseBoolean as __parseBoolean,
  parseRfc3339DateTime as __parseRfc3339DateTime,
  resolvedPath as __resolvedPath,
  strictParseFloat as __strictParseFloat,
  strictParseInt32 as __strictParseInt32,
  strictParseLong as __strictParseLong,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { XmlNode as __XmlNode, XmlText as __XmlText } from "@aws-sdk/xml-builder";
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

export const serializeAws_restXmlActivateKeySigningKeyCommand = async (
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

export const serializeAws_restXmlAssociateVPCWithHostedZoneCommand = async (
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
    const node = serializeAws_restXmlVPC(input.VPC, context).withName("VPC");
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

export const serializeAws_restXmlChangeCidrCollectionCommand = async (
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
    const nodes = serializeAws_restXmlCidrCollectionChanges(input.Changes, context);
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

export const serializeAws_restXmlChangeResourceRecordSetsCommand = async (
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
    const node = serializeAws_restXmlChangeBatch(input.ChangeBatch, context).withName("ChangeBatch");
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

export const serializeAws_restXmlChangeTagsForResourceCommand = async (
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
    const nodes = serializeAws_restXmlTagList(input.AddTags, context);
    const containerNode = new __XmlNode("AddTags");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.RemoveTagKeys !== undefined) {
    const nodes = serializeAws_restXmlTagKeyList(input.RemoveTagKeys, context);
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

export const serializeAws_restXmlCreateCidrCollectionCommand = async (
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

export const serializeAws_restXmlCreateHealthCheckCommand = async (
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
    const node = serializeAws_restXmlHealthCheckConfig(input.HealthCheckConfig, context).withName("HealthCheckConfig");
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

export const serializeAws_restXmlCreateHostedZoneCommand = async (
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
    const node = serializeAws_restXmlHostedZoneConfig(input.HostedZoneConfig, context).withName("HostedZoneConfig");
    bodyNode.addChildNode(node);
  }
  if (input.Name !== undefined) {
    const node = __XmlNode.of("DNSName", input.Name).withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.VPC !== undefined) {
    const node = serializeAws_restXmlVPC(input.VPC, context).withName("VPC");
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

export const serializeAws_restXmlCreateKeySigningKeyCommand = async (
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

export const serializeAws_restXmlCreateQueryLoggingConfigCommand = async (
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

export const serializeAws_restXmlCreateReusableDelegationSetCommand = async (
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

export const serializeAws_restXmlCreateTrafficPolicyCommand = async (
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

export const serializeAws_restXmlCreateTrafficPolicyInstanceCommand = async (
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

export const serializeAws_restXmlCreateTrafficPolicyVersionCommand = async (
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

export const serializeAws_restXmlCreateVPCAssociationAuthorizationCommand = async (
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
    const node = serializeAws_restXmlVPC(input.VPC, context).withName("VPC");
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

export const serializeAws_restXmlDeactivateKeySigningKeyCommand = async (
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

export const serializeAws_restXmlDeleteCidrCollectionCommand = async (
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

export const serializeAws_restXmlDeleteHealthCheckCommand = async (
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

export const serializeAws_restXmlDeleteHostedZoneCommand = async (
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

export const serializeAws_restXmlDeleteKeySigningKeyCommand = async (
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

export const serializeAws_restXmlDeleteQueryLoggingConfigCommand = async (
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

export const serializeAws_restXmlDeleteReusableDelegationSetCommand = async (
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

export const serializeAws_restXmlDeleteTrafficPolicyCommand = async (
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

export const serializeAws_restXmlDeleteTrafficPolicyInstanceCommand = async (
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

export const serializeAws_restXmlDeleteVPCAssociationAuthorizationCommand = async (
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
    const node = serializeAws_restXmlVPC(input.VPC, context).withName("VPC");
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

export const serializeAws_restXmlDisableHostedZoneDNSSECCommand = async (
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

export const serializeAws_restXmlDisassociateVPCFromHostedZoneCommand = async (
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
    const node = serializeAws_restXmlVPC(input.VPC, context).withName("VPC");
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

export const serializeAws_restXmlEnableHostedZoneDNSSECCommand = async (
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

export const serializeAws_restXmlGetAccountLimitCommand = async (
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

export const serializeAws_restXmlGetChangeCommand = async (
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

export const serializeAws_restXmlGetCheckerIpRangesCommand = async (
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

export const serializeAws_restXmlGetDNSSECCommand = async (
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

export const serializeAws_restXmlGetGeoLocationCommand = async (
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

export const serializeAws_restXmlGetHealthCheckCommand = async (
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

export const serializeAws_restXmlGetHealthCheckCountCommand = async (
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

export const serializeAws_restXmlGetHealthCheckLastFailureReasonCommand = async (
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

export const serializeAws_restXmlGetHealthCheckStatusCommand = async (
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

export const serializeAws_restXmlGetHostedZoneCommand = async (
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

export const serializeAws_restXmlGetHostedZoneCountCommand = async (
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

export const serializeAws_restXmlGetHostedZoneLimitCommand = async (
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

export const serializeAws_restXmlGetQueryLoggingConfigCommand = async (
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

export const serializeAws_restXmlGetReusableDelegationSetCommand = async (
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

export const serializeAws_restXmlGetReusableDelegationSetLimitCommand = async (
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

export const serializeAws_restXmlGetTrafficPolicyCommand = async (
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

export const serializeAws_restXmlGetTrafficPolicyInstanceCommand = async (
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

export const serializeAws_restXmlGetTrafficPolicyInstanceCountCommand = async (
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

export const serializeAws_restXmlListCidrBlocksCommand = async (
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

export const serializeAws_restXmlListCidrCollectionsCommand = async (
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

export const serializeAws_restXmlListCidrLocationsCommand = async (
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

export const serializeAws_restXmlListGeoLocationsCommand = async (
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

export const serializeAws_restXmlListHealthChecksCommand = async (
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

export const serializeAws_restXmlListHostedZonesCommand = async (
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

export const serializeAws_restXmlListHostedZonesByNameCommand = async (
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

export const serializeAws_restXmlListHostedZonesByVPCCommand = async (
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

export const serializeAws_restXmlListQueryLoggingConfigsCommand = async (
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

export const serializeAws_restXmlListResourceRecordSetsCommand = async (
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

export const serializeAws_restXmlListReusableDelegationSetsCommand = async (
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

export const serializeAws_restXmlListTagsForResourceCommand = async (
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

export const serializeAws_restXmlListTagsForResourcesCommand = async (
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
    const nodes = serializeAws_restXmlTagResourceIdList(input.ResourceIds, context);
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

export const serializeAws_restXmlListTrafficPoliciesCommand = async (
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

export const serializeAws_restXmlListTrafficPolicyInstancesCommand = async (
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

export const serializeAws_restXmlListTrafficPolicyInstancesByHostedZoneCommand = async (
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

export const serializeAws_restXmlListTrafficPolicyInstancesByPolicyCommand = async (
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

export const serializeAws_restXmlListTrafficPolicyVersionsCommand = async (
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

export const serializeAws_restXmlListVPCAssociationAuthorizationsCommand = async (
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

export const serializeAws_restXmlTestDNSAnswerCommand = async (
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

export const serializeAws_restXmlUpdateHealthCheckCommand = async (
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
    const node = serializeAws_restXmlAlarmIdentifier(input.AlarmIdentifier, context).withName("AlarmIdentifier");
    bodyNode.addChildNode(node);
  }
  if (input.ChildHealthChecks !== undefined) {
    const nodes = serializeAws_restXmlChildHealthCheckList(input.ChildHealthChecks, context);
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
    const nodes = serializeAws_restXmlHealthCheckRegionList(input.Regions, context);
    const containerNode = new __XmlNode("Regions");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.ResetElements !== undefined) {
    const nodes = serializeAws_restXmlResettableElementNameList(input.ResetElements, context);
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

export const serializeAws_restXmlUpdateHostedZoneCommentCommand = async (
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

export const serializeAws_restXmlUpdateTrafficPolicyCommentCommand = async (
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

export const serializeAws_restXmlUpdateTrafficPolicyInstanceCommand = async (
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

export const deserializeAws_restXmlActivateKeySigningKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateKeySigningKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlActivateKeySigningKeyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ChangeInfo"] !== undefined) {
    contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
  }
  return contents;
};

const deserializeAws_restXmlActivateKeySigningKeyCommandError = async (
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
      throw await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "InvalidKMSArn":
    case "com.amazonaws.route53#InvalidKMSArn":
      throw await deserializeAws_restXmlInvalidKMSArnResponse(parsedOutput, context);
    case "InvalidKeySigningKeyStatus":
    case "com.amazonaws.route53#InvalidKeySigningKeyStatus":
      throw await deserializeAws_restXmlInvalidKeySigningKeyStatusResponse(parsedOutput, context);
    case "InvalidSigningStatus":
    case "com.amazonaws.route53#InvalidSigningStatus":
      throw await deserializeAws_restXmlInvalidSigningStatusResponse(parsedOutput, context);
    case "NoSuchKeySigningKey":
    case "com.amazonaws.route53#NoSuchKeySigningKey":
      throw await deserializeAws_restXmlNoSuchKeySigningKeyResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlAssociateVPCWithHostedZoneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateVPCWithHostedZoneCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlAssociateVPCWithHostedZoneCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ChangeInfo"] !== undefined) {
    contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
  }
  return contents;
};

const deserializeAws_restXmlAssociateVPCWithHostedZoneCommandError = async (
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
      throw await deserializeAws_restXmlConflictingDomainExistsResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "InvalidVPCId":
    case "com.amazonaws.route53#InvalidVPCId":
      throw await deserializeAws_restXmlInvalidVPCIdResponse(parsedOutput, context);
    case "LimitsExceeded":
    case "com.amazonaws.route53#LimitsExceeded":
      throw await deserializeAws_restXmlLimitsExceededResponse(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.route53#NotAuthorizedException":
      throw await deserializeAws_restXmlNotAuthorizedExceptionResponse(parsedOutput, context);
    case "PriorRequestNotComplete":
    case "com.amazonaws.route53#PriorRequestNotComplete":
      throw await deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context);
    case "PublicZoneVPCAssociation":
    case "com.amazonaws.route53#PublicZoneVPCAssociation":
      throw await deserializeAws_restXmlPublicZoneVPCAssociationResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlChangeCidrCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChangeCidrCollectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlChangeCidrCollectionCommandError(output, context);
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

const deserializeAws_restXmlChangeCidrCollectionCommandError = async (
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
      throw await deserializeAws_restXmlCidrBlockInUseExceptionResponse(parsedOutput, context);
    case "CidrCollectionVersionMismatchException":
    case "com.amazonaws.route53#CidrCollectionVersionMismatchException":
      throw await deserializeAws_restXmlCidrCollectionVersionMismatchExceptionResponse(parsedOutput, context);
    case "ConcurrentModification":
    case "com.amazonaws.route53#ConcurrentModification":
      throw await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "LimitsExceeded":
    case "com.amazonaws.route53#LimitsExceeded":
      throw await deserializeAws_restXmlLimitsExceededResponse(parsedOutput, context);
    case "NoSuchCidrCollectionException":
    case "com.amazonaws.route53#NoSuchCidrCollectionException":
      throw await deserializeAws_restXmlNoSuchCidrCollectionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlChangeResourceRecordSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChangeResourceRecordSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlChangeResourceRecordSetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ChangeInfo"] !== undefined) {
    contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
  }
  return contents;
};

const deserializeAws_restXmlChangeResourceRecordSetsCommandError = async (
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
      throw await deserializeAws_restXmlInvalidChangeBatchResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "NoSuchHealthCheck":
    case "com.amazonaws.route53#NoSuchHealthCheck":
      throw await deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context);
    case "PriorRequestNotComplete":
    case "com.amazonaws.route53#PriorRequestNotComplete":
      throw await deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlChangeTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChangeTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlChangeTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlChangeTagsForResourceCommandError = async (
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
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "NoSuchHealthCheck":
    case "com.amazonaws.route53#NoSuchHealthCheck":
      throw await deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context);
    case "PriorRequestNotComplete":
    case "com.amazonaws.route53#PriorRequestNotComplete":
      throw await deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53#ThrottlingException":
      throw await deserializeAws_restXmlThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlCreateCidrCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCidrCollectionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateCidrCollectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Location: [, output.headers["location"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Collection"] !== undefined) {
    contents.Collection = deserializeAws_restXmlCidrCollection(data["Collection"], context);
  }
  return contents;
};

const deserializeAws_restXmlCreateCidrCollectionCommandError = async (
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
      throw await deserializeAws_restXmlCidrCollectionAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ConcurrentModification":
    case "com.amazonaws.route53#ConcurrentModification":
      throw await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "LimitsExceeded":
    case "com.amazonaws.route53#LimitsExceeded":
      throw await deserializeAws_restXmlLimitsExceededResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlCreateHealthCheckCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHealthCheckCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateHealthCheckCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Location: [, output.headers["location"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["HealthCheck"] !== undefined) {
    contents.HealthCheck = deserializeAws_restXmlHealthCheck(data["HealthCheck"], context);
  }
  return contents;
};

const deserializeAws_restXmlCreateHealthCheckCommandError = async (
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
      throw await deserializeAws_restXmlHealthCheckAlreadyExistsResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "TooManyHealthChecks":
    case "com.amazonaws.route53#TooManyHealthChecks":
      throw await deserializeAws_restXmlTooManyHealthChecksResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlCreateHostedZoneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHostedZoneCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateHostedZoneCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Location: [, output.headers["location"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ChangeInfo"] !== undefined) {
    contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
  }
  if (data["DelegationSet"] !== undefined) {
    contents.DelegationSet = deserializeAws_restXmlDelegationSet(data["DelegationSet"], context);
  }
  if (data["HostedZone"] !== undefined) {
    contents.HostedZone = deserializeAws_restXmlHostedZone(data["HostedZone"], context);
  }
  if (data["VPC"] !== undefined) {
    contents.VPC = deserializeAws_restXmlVPC(data["VPC"], context);
  }
  return contents;
};

const deserializeAws_restXmlCreateHostedZoneCommandError = async (
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
      throw await deserializeAws_restXmlConflictingDomainExistsResponse(parsedOutput, context);
    case "DelegationSetNotAvailable":
    case "com.amazonaws.route53#DelegationSetNotAvailable":
      throw await deserializeAws_restXmlDelegationSetNotAvailableResponse(parsedOutput, context);
    case "DelegationSetNotReusable":
    case "com.amazonaws.route53#DelegationSetNotReusable":
      throw await deserializeAws_restXmlDelegationSetNotReusableResponse(parsedOutput, context);
    case "HostedZoneAlreadyExists":
    case "com.amazonaws.route53#HostedZoneAlreadyExists":
      throw await deserializeAws_restXmlHostedZoneAlreadyExistsResponse(parsedOutput, context);
    case "InvalidDomainName":
    case "com.amazonaws.route53#InvalidDomainName":
      throw await deserializeAws_restXmlInvalidDomainNameResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "InvalidVPCId":
    case "com.amazonaws.route53#InvalidVPCId":
      throw await deserializeAws_restXmlInvalidVPCIdResponse(parsedOutput, context);
    case "NoSuchDelegationSet":
    case "com.amazonaws.route53#NoSuchDelegationSet":
      throw await deserializeAws_restXmlNoSuchDelegationSetResponse(parsedOutput, context);
    case "TooManyHostedZones":
    case "com.amazonaws.route53#TooManyHostedZones":
      throw await deserializeAws_restXmlTooManyHostedZonesResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlCreateKeySigningKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKeySigningKeyCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateKeySigningKeyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Location: [, output.headers["location"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ChangeInfo"] !== undefined) {
    contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
  }
  if (data["KeySigningKey"] !== undefined) {
    contents.KeySigningKey = deserializeAws_restXmlKeySigningKey(data["KeySigningKey"], context);
  }
  return contents;
};

const deserializeAws_restXmlCreateKeySigningKeyCommandError = async (
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
      throw await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.route53#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "InvalidKMSArn":
    case "com.amazonaws.route53#InvalidKMSArn":
      throw await deserializeAws_restXmlInvalidKMSArnResponse(parsedOutput, context);
    case "InvalidKeySigningKeyName":
    case "com.amazonaws.route53#InvalidKeySigningKeyName":
      throw await deserializeAws_restXmlInvalidKeySigningKeyNameResponse(parsedOutput, context);
    case "InvalidKeySigningKeyStatus":
    case "com.amazonaws.route53#InvalidKeySigningKeyStatus":
      throw await deserializeAws_restXmlInvalidKeySigningKeyStatusResponse(parsedOutput, context);
    case "InvalidSigningStatus":
    case "com.amazonaws.route53#InvalidSigningStatus":
      throw await deserializeAws_restXmlInvalidSigningStatusResponse(parsedOutput, context);
    case "KeySigningKeyAlreadyExists":
    case "com.amazonaws.route53#KeySigningKeyAlreadyExists":
      throw await deserializeAws_restXmlKeySigningKeyAlreadyExistsResponse(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context);
    case "TooManyKeySigningKeys":
    case "com.amazonaws.route53#TooManyKeySigningKeys":
      throw await deserializeAws_restXmlTooManyKeySigningKeysResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlCreateQueryLoggingConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQueryLoggingConfigCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateQueryLoggingConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Location: [, output.headers["location"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["QueryLoggingConfig"] !== undefined) {
    contents.QueryLoggingConfig = deserializeAws_restXmlQueryLoggingConfig(data["QueryLoggingConfig"], context);
  }
  return contents;
};

const deserializeAws_restXmlCreateQueryLoggingConfigCommandError = async (
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
      throw await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context);
    case "InsufficientCloudWatchLogsResourcePolicy":
    case "com.amazonaws.route53#InsufficientCloudWatchLogsResourcePolicy":
      throw await deserializeAws_restXmlInsufficientCloudWatchLogsResourcePolicyResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "NoSuchCloudWatchLogsLogGroup":
    case "com.amazonaws.route53#NoSuchCloudWatchLogsLogGroup":
      throw await deserializeAws_restXmlNoSuchCloudWatchLogsLogGroupResponse(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context);
    case "QueryLoggingConfigAlreadyExists":
    case "com.amazonaws.route53#QueryLoggingConfigAlreadyExists":
      throw await deserializeAws_restXmlQueryLoggingConfigAlreadyExistsResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlCreateReusableDelegationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReusableDelegationSetCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateReusableDelegationSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Location: [, output.headers["location"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["DelegationSet"] !== undefined) {
    contents.DelegationSet = deserializeAws_restXmlDelegationSet(data["DelegationSet"], context);
  }
  return contents;
};

const deserializeAws_restXmlCreateReusableDelegationSetCommandError = async (
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
      throw await deserializeAws_restXmlDelegationSetAlreadyCreatedResponse(parsedOutput, context);
    case "DelegationSetAlreadyReusable":
    case "com.amazonaws.route53#DelegationSetAlreadyReusable":
      throw await deserializeAws_restXmlDelegationSetAlreadyReusableResponse(parsedOutput, context);
    case "DelegationSetNotAvailable":
    case "com.amazonaws.route53#DelegationSetNotAvailable":
      throw await deserializeAws_restXmlDelegationSetNotAvailableResponse(parsedOutput, context);
    case "HostedZoneNotFound":
    case "com.amazonaws.route53#HostedZoneNotFound":
      throw await deserializeAws_restXmlHostedZoneNotFoundResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.route53#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "LimitsExceeded":
    case "com.amazonaws.route53#LimitsExceeded":
      throw await deserializeAws_restXmlLimitsExceededResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlCreateTrafficPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrafficPolicyCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateTrafficPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Location: [, output.headers["location"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["TrafficPolicy"] !== undefined) {
    contents.TrafficPolicy = deserializeAws_restXmlTrafficPolicy(data["TrafficPolicy"], context);
  }
  return contents;
};

const deserializeAws_restXmlCreateTrafficPolicyCommandError = async (
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
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "InvalidTrafficPolicyDocument":
    case "com.amazonaws.route53#InvalidTrafficPolicyDocument":
      throw await deserializeAws_restXmlInvalidTrafficPolicyDocumentResponse(parsedOutput, context);
    case "TooManyTrafficPolicies":
    case "com.amazonaws.route53#TooManyTrafficPolicies":
      throw await deserializeAws_restXmlTooManyTrafficPoliciesResponse(parsedOutput, context);
    case "TrafficPolicyAlreadyExists":
    case "com.amazonaws.route53#TrafficPolicyAlreadyExists":
      throw await deserializeAws_restXmlTrafficPolicyAlreadyExistsResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlCreateTrafficPolicyInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrafficPolicyInstanceCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateTrafficPolicyInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Location: [, output.headers["location"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["TrafficPolicyInstance"] !== undefined) {
    contents.TrafficPolicyInstance = deserializeAws_restXmlTrafficPolicyInstance(
      data["TrafficPolicyInstance"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlCreateTrafficPolicyInstanceCommandError = async (
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
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context);
    case "NoSuchTrafficPolicy":
    case "com.amazonaws.route53#NoSuchTrafficPolicy":
      throw await deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context);
    case "TooManyTrafficPolicyInstances":
    case "com.amazonaws.route53#TooManyTrafficPolicyInstances":
      throw await deserializeAws_restXmlTooManyTrafficPolicyInstancesResponse(parsedOutput, context);
    case "TrafficPolicyInstanceAlreadyExists":
    case "com.amazonaws.route53#TrafficPolicyInstanceAlreadyExists":
      throw await deserializeAws_restXmlTrafficPolicyInstanceAlreadyExistsResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlCreateTrafficPolicyVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrafficPolicyVersionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateTrafficPolicyVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Location: [, output.headers["location"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["TrafficPolicy"] !== undefined) {
    contents.TrafficPolicy = deserializeAws_restXmlTrafficPolicy(data["TrafficPolicy"], context);
  }
  return contents;
};

const deserializeAws_restXmlCreateTrafficPolicyVersionCommandError = async (
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
      throw await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "InvalidTrafficPolicyDocument":
    case "com.amazonaws.route53#InvalidTrafficPolicyDocument":
      throw await deserializeAws_restXmlInvalidTrafficPolicyDocumentResponse(parsedOutput, context);
    case "NoSuchTrafficPolicy":
    case "com.amazonaws.route53#NoSuchTrafficPolicy":
      throw await deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context);
    case "TooManyTrafficPolicyVersionsForCurrentPolicy":
    case "com.amazonaws.route53#TooManyTrafficPolicyVersionsForCurrentPolicy":
      throw await deserializeAws_restXmlTooManyTrafficPolicyVersionsForCurrentPolicyResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlCreateVPCAssociationAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVPCAssociationAuthorizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateVPCAssociationAuthorizationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["HostedZoneId"] !== undefined) {
    contents.HostedZoneId = __expectString(data["HostedZoneId"]);
  }
  if (data["VPC"] !== undefined) {
    contents.VPC = deserializeAws_restXmlVPC(data["VPC"], context);
  }
  return contents;
};

const deserializeAws_restXmlCreateVPCAssociationAuthorizationCommandError = async (
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
      throw await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "InvalidVPCId":
    case "com.amazonaws.route53#InvalidVPCId":
      throw await deserializeAws_restXmlInvalidVPCIdResponse(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context);
    case "TooManyVPCAssociationAuthorizations":
    case "com.amazonaws.route53#TooManyVPCAssociationAuthorizations":
      throw await deserializeAws_restXmlTooManyVPCAssociationAuthorizationsResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlDeactivateKeySigningKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateKeySigningKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeactivateKeySigningKeyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ChangeInfo"] !== undefined) {
    contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
  }
  return contents;
};

const deserializeAws_restXmlDeactivateKeySigningKeyCommandError = async (
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
      throw await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "InvalidKeySigningKeyStatus":
    case "com.amazonaws.route53#InvalidKeySigningKeyStatus":
      throw await deserializeAws_restXmlInvalidKeySigningKeyStatusResponse(parsedOutput, context);
    case "InvalidSigningStatus":
    case "com.amazonaws.route53#InvalidSigningStatus":
      throw await deserializeAws_restXmlInvalidSigningStatusResponse(parsedOutput, context);
    case "KeySigningKeyInParentDSRecord":
    case "com.amazonaws.route53#KeySigningKeyInParentDSRecord":
      throw await deserializeAws_restXmlKeySigningKeyInParentDSRecordResponse(parsedOutput, context);
    case "KeySigningKeyInUse":
    case "com.amazonaws.route53#KeySigningKeyInUse":
      throw await deserializeAws_restXmlKeySigningKeyInUseResponse(parsedOutput, context);
    case "NoSuchKeySigningKey":
    case "com.amazonaws.route53#NoSuchKeySigningKey":
      throw await deserializeAws_restXmlNoSuchKeySigningKeyResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlDeleteCidrCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCidrCollectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteCidrCollectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlDeleteCidrCollectionCommandError = async (
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
      throw await deserializeAws_restXmlCidrCollectionInUseExceptionResponse(parsedOutput, context);
    case "ConcurrentModification":
    case "com.amazonaws.route53#ConcurrentModification":
      throw await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "NoSuchCidrCollectionException":
    case "com.amazonaws.route53#NoSuchCidrCollectionException":
      throw await deserializeAws_restXmlNoSuchCidrCollectionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlDeleteHealthCheckCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHealthCheckCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteHealthCheckCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlDeleteHealthCheckCommandError = async (
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
      throw await deserializeAws_restXmlHealthCheckInUseResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "NoSuchHealthCheck":
    case "com.amazonaws.route53#NoSuchHealthCheck":
      throw await deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlDeleteHostedZoneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHostedZoneCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteHostedZoneCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ChangeInfo"] !== undefined) {
    contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
  }
  return contents;
};

const deserializeAws_restXmlDeleteHostedZoneCommandError = async (
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
      throw await deserializeAws_restXmlHostedZoneNotEmptyResponse(parsedOutput, context);
    case "InvalidDomainName":
    case "com.amazonaws.route53#InvalidDomainName":
      throw await deserializeAws_restXmlInvalidDomainNameResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context);
    case "PriorRequestNotComplete":
    case "com.amazonaws.route53#PriorRequestNotComplete":
      throw await deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlDeleteKeySigningKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKeySigningKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteKeySigningKeyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ChangeInfo"] !== undefined) {
    contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
  }
  return contents;
};

const deserializeAws_restXmlDeleteKeySigningKeyCommandError = async (
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
      throw await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "InvalidKMSArn":
    case "com.amazonaws.route53#InvalidKMSArn":
      throw await deserializeAws_restXmlInvalidKMSArnResponse(parsedOutput, context);
    case "InvalidKeySigningKeyStatus":
    case "com.amazonaws.route53#InvalidKeySigningKeyStatus":
      throw await deserializeAws_restXmlInvalidKeySigningKeyStatusResponse(parsedOutput, context);
    case "InvalidSigningStatus":
    case "com.amazonaws.route53#InvalidSigningStatus":
      throw await deserializeAws_restXmlInvalidSigningStatusResponse(parsedOutput, context);
    case "NoSuchKeySigningKey":
    case "com.amazonaws.route53#NoSuchKeySigningKey":
      throw await deserializeAws_restXmlNoSuchKeySigningKeyResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlDeleteQueryLoggingConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQueryLoggingConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteQueryLoggingConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlDeleteQueryLoggingConfigCommandError = async (
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
      throw await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "NoSuchQueryLoggingConfig":
    case "com.amazonaws.route53#NoSuchQueryLoggingConfig":
      throw await deserializeAws_restXmlNoSuchQueryLoggingConfigResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlDeleteReusableDelegationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReusableDelegationSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteReusableDelegationSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlDeleteReusableDelegationSetCommandError = async (
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
      throw await deserializeAws_restXmlDelegationSetInUseResponse(parsedOutput, context);
    case "DelegationSetNotReusable":
    case "com.amazonaws.route53#DelegationSetNotReusable":
      throw await deserializeAws_restXmlDelegationSetNotReusableResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "NoSuchDelegationSet":
    case "com.amazonaws.route53#NoSuchDelegationSet":
      throw await deserializeAws_restXmlNoSuchDelegationSetResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlDeleteTrafficPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrafficPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteTrafficPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlDeleteTrafficPolicyCommandError = async (
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
      throw await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "NoSuchTrafficPolicy":
    case "com.amazonaws.route53#NoSuchTrafficPolicy":
      throw await deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context);
    case "TrafficPolicyInUse":
    case "com.amazonaws.route53#TrafficPolicyInUse":
      throw await deserializeAws_restXmlTrafficPolicyInUseResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlDeleteTrafficPolicyInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrafficPolicyInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteTrafficPolicyInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlDeleteTrafficPolicyInstanceCommandError = async (
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
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "NoSuchTrafficPolicyInstance":
    case "com.amazonaws.route53#NoSuchTrafficPolicyInstance":
      throw await deserializeAws_restXmlNoSuchTrafficPolicyInstanceResponse(parsedOutput, context);
    case "PriorRequestNotComplete":
    case "com.amazonaws.route53#PriorRequestNotComplete":
      throw await deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlDeleteVPCAssociationAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVPCAssociationAuthorizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteVPCAssociationAuthorizationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlDeleteVPCAssociationAuthorizationCommandError = async (
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
      throw await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "InvalidVPCId":
    case "com.amazonaws.route53#InvalidVPCId":
      throw await deserializeAws_restXmlInvalidVPCIdResponse(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context);
    case "VPCAssociationAuthorizationNotFound":
    case "com.amazonaws.route53#VPCAssociationAuthorizationNotFound":
      throw await deserializeAws_restXmlVPCAssociationAuthorizationNotFoundResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlDisableHostedZoneDNSSECCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableHostedZoneDNSSECCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDisableHostedZoneDNSSECCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ChangeInfo"] !== undefined) {
    contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
  }
  return contents;
};

const deserializeAws_restXmlDisableHostedZoneDNSSECCommandError = async (
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
      throw await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context);
    case "DNSSECNotFound":
    case "com.amazonaws.route53#DNSSECNotFound":
      throw await deserializeAws_restXmlDNSSECNotFoundResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.route53#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "InvalidKMSArn":
    case "com.amazonaws.route53#InvalidKMSArn":
      throw await deserializeAws_restXmlInvalidKMSArnResponse(parsedOutput, context);
    case "InvalidKeySigningKeyStatus":
    case "com.amazonaws.route53#InvalidKeySigningKeyStatus":
      throw await deserializeAws_restXmlInvalidKeySigningKeyStatusResponse(parsedOutput, context);
    case "KeySigningKeyInParentDSRecord":
    case "com.amazonaws.route53#KeySigningKeyInParentDSRecord":
      throw await deserializeAws_restXmlKeySigningKeyInParentDSRecordResponse(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlDisassociateVPCFromHostedZoneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateVPCFromHostedZoneCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDisassociateVPCFromHostedZoneCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ChangeInfo"] !== undefined) {
    contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
  }
  return contents;
};

const deserializeAws_restXmlDisassociateVPCFromHostedZoneCommandError = async (
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
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "InvalidVPCId":
    case "com.amazonaws.route53#InvalidVPCId":
      throw await deserializeAws_restXmlInvalidVPCIdResponse(parsedOutput, context);
    case "LastVPCAssociation":
    case "com.amazonaws.route53#LastVPCAssociation":
      throw await deserializeAws_restXmlLastVPCAssociationResponse(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context);
    case "VPCAssociationNotFound":
    case "com.amazonaws.route53#VPCAssociationNotFound":
      throw await deserializeAws_restXmlVPCAssociationNotFoundResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlEnableHostedZoneDNSSECCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableHostedZoneDNSSECCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlEnableHostedZoneDNSSECCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ChangeInfo"] !== undefined) {
    contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
  }
  return contents;
};

const deserializeAws_restXmlEnableHostedZoneDNSSECCommandError = async (
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
      throw await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context);
    case "DNSSECNotFound":
    case "com.amazonaws.route53#DNSSECNotFound":
      throw await deserializeAws_restXmlDNSSECNotFoundResponse(parsedOutput, context);
    case "HostedZonePartiallyDelegated":
    case "com.amazonaws.route53#HostedZonePartiallyDelegated":
      throw await deserializeAws_restXmlHostedZonePartiallyDelegatedResponse(parsedOutput, context);
    case "InvalidArgument":
    case "com.amazonaws.route53#InvalidArgument":
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "InvalidKMSArn":
    case "com.amazonaws.route53#InvalidKMSArn":
      throw await deserializeAws_restXmlInvalidKMSArnResponse(parsedOutput, context);
    case "InvalidKeySigningKeyStatus":
    case "com.amazonaws.route53#InvalidKeySigningKeyStatus":
      throw await deserializeAws_restXmlInvalidKeySigningKeyStatusResponse(parsedOutput, context);
    case "KeySigningKeyWithActiveStatusNotFound":
    case "com.amazonaws.route53#KeySigningKeyWithActiveStatusNotFound":
      throw await deserializeAws_restXmlKeySigningKeyWithActiveStatusNotFoundResponse(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlGetAccountLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountLimitCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetAccountLimitCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Count"] !== undefined) {
    contents.Count = __strictParseLong(data["Count"]) as number;
  }
  if (data["Limit"] !== undefined) {
    contents.Limit = deserializeAws_restXmlAccountLimit(data["Limit"], context);
  }
  return contents;
};

const deserializeAws_restXmlGetAccountLimitCommandError = async (
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
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlGetChangeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChangeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetChangeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ChangeInfo"] !== undefined) {
    contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
  }
  return contents;
};

const deserializeAws_restXmlGetChangeCommandError = async (
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
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "NoSuchChange":
    case "com.amazonaws.route53#NoSuchChange":
      throw await deserializeAws_restXmlNoSuchChangeResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlGetCheckerIpRangesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCheckerIpRangesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetCheckerIpRangesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CheckerIpRanges === "") {
    contents.CheckerIpRanges = [];
  } else if (data["CheckerIpRanges"] !== undefined && data["CheckerIpRanges"]["member"] !== undefined) {
    contents.CheckerIpRanges = deserializeAws_restXmlCheckerIpRanges(
      __getArrayIfSingleItem(data["CheckerIpRanges"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlGetCheckerIpRangesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCheckerIpRangesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetDNSSECCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDNSSECCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetDNSSECCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.KeySigningKeys === "") {
    contents.KeySigningKeys = [];
  } else if (data["KeySigningKeys"] !== undefined && data["KeySigningKeys"]["member"] !== undefined) {
    contents.KeySigningKeys = deserializeAws_restXmlKeySigningKeys(
      __getArrayIfSingleItem(data["KeySigningKeys"]["member"]),
      context
    );
  }
  if (data["Status"] !== undefined) {
    contents.Status = deserializeAws_restXmlDNSSECStatus(data["Status"], context);
  }
  return contents;
};

const deserializeAws_restXmlGetDNSSECCommandError = async (
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
      throw await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlGetGeoLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGeoLocationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetGeoLocationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["GeoLocationDetails"] !== undefined) {
    contents.GeoLocationDetails = deserializeAws_restXmlGeoLocationDetails(data["GeoLocationDetails"], context);
  }
  return contents;
};

const deserializeAws_restXmlGetGeoLocationCommandError = async (
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
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "NoSuchGeoLocation":
    case "com.amazonaws.route53#NoSuchGeoLocation":
      throw await deserializeAws_restXmlNoSuchGeoLocationResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlGetHealthCheckCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHealthCheckCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetHealthCheckCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["HealthCheck"] !== undefined) {
    contents.HealthCheck = deserializeAws_restXmlHealthCheck(data["HealthCheck"], context);
  }
  return contents;
};

const deserializeAws_restXmlGetHealthCheckCommandError = async (
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
      throw await deserializeAws_restXmlIncompatibleVersionResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "NoSuchHealthCheck":
    case "com.amazonaws.route53#NoSuchHealthCheck":
      throw await deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlGetHealthCheckCountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHealthCheckCountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetHealthCheckCountCommandError(output, context);
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

const deserializeAws_restXmlGetHealthCheckCountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHealthCheckCountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetHealthCheckLastFailureReasonCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHealthCheckLastFailureReasonCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetHealthCheckLastFailureReasonCommandError(output, context);
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
    contents.HealthCheckObservations = deserializeAws_restXmlHealthCheckObservations(
      __getArrayIfSingleItem(data["HealthCheckObservations"]["HealthCheckObservation"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlGetHealthCheckLastFailureReasonCommandError = async (
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
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "NoSuchHealthCheck":
    case "com.amazonaws.route53#NoSuchHealthCheck":
      throw await deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlGetHealthCheckStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHealthCheckStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetHealthCheckStatusCommandError(output, context);
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
    contents.HealthCheckObservations = deserializeAws_restXmlHealthCheckObservations(
      __getArrayIfSingleItem(data["HealthCheckObservations"]["HealthCheckObservation"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlGetHealthCheckStatusCommandError = async (
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
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "NoSuchHealthCheck":
    case "com.amazonaws.route53#NoSuchHealthCheck":
      throw await deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlGetHostedZoneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHostedZoneCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetHostedZoneCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["DelegationSet"] !== undefined) {
    contents.DelegationSet = deserializeAws_restXmlDelegationSet(data["DelegationSet"], context);
  }
  if (data["HostedZone"] !== undefined) {
    contents.HostedZone = deserializeAws_restXmlHostedZone(data["HostedZone"], context);
  }
  if (data.VPCs === "") {
    contents.VPCs = [];
  } else if (data["VPCs"] !== undefined && data["VPCs"]["VPC"] !== undefined) {
    contents.VPCs = deserializeAws_restXmlVPCs(__getArrayIfSingleItem(data["VPCs"]["VPC"]), context);
  }
  return contents;
};

const deserializeAws_restXmlGetHostedZoneCommandError = async (
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
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlGetHostedZoneCountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHostedZoneCountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetHostedZoneCountCommandError(output, context);
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

const deserializeAws_restXmlGetHostedZoneCountCommandError = async (
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
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlGetHostedZoneLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHostedZoneLimitCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetHostedZoneLimitCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Count"] !== undefined) {
    contents.Count = __strictParseLong(data["Count"]) as number;
  }
  if (data["Limit"] !== undefined) {
    contents.Limit = deserializeAws_restXmlHostedZoneLimit(data["Limit"], context);
  }
  return contents;
};

const deserializeAws_restXmlGetHostedZoneLimitCommandError = async (
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
      throw await deserializeAws_restXmlHostedZoneNotPrivateResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlGetQueryLoggingConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryLoggingConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetQueryLoggingConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["QueryLoggingConfig"] !== undefined) {
    contents.QueryLoggingConfig = deserializeAws_restXmlQueryLoggingConfig(data["QueryLoggingConfig"], context);
  }
  return contents;
};

const deserializeAws_restXmlGetQueryLoggingConfigCommandError = async (
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
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "NoSuchQueryLoggingConfig":
    case "com.amazonaws.route53#NoSuchQueryLoggingConfig":
      throw await deserializeAws_restXmlNoSuchQueryLoggingConfigResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlGetReusableDelegationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReusableDelegationSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetReusableDelegationSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["DelegationSet"] !== undefined) {
    contents.DelegationSet = deserializeAws_restXmlDelegationSet(data["DelegationSet"], context);
  }
  return contents;
};

const deserializeAws_restXmlGetReusableDelegationSetCommandError = async (
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
      throw await deserializeAws_restXmlDelegationSetNotReusableResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "NoSuchDelegationSet":
    case "com.amazonaws.route53#NoSuchDelegationSet":
      throw await deserializeAws_restXmlNoSuchDelegationSetResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlGetReusableDelegationSetLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReusableDelegationSetLimitCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetReusableDelegationSetLimitCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Count"] !== undefined) {
    contents.Count = __strictParseLong(data["Count"]) as number;
  }
  if (data["Limit"] !== undefined) {
    contents.Limit = deserializeAws_restXmlReusableDelegationSetLimit(data["Limit"], context);
  }
  return contents;
};

const deserializeAws_restXmlGetReusableDelegationSetLimitCommandError = async (
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
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "NoSuchDelegationSet":
    case "com.amazonaws.route53#NoSuchDelegationSet":
      throw await deserializeAws_restXmlNoSuchDelegationSetResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlGetTrafficPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrafficPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetTrafficPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["TrafficPolicy"] !== undefined) {
    contents.TrafficPolicy = deserializeAws_restXmlTrafficPolicy(data["TrafficPolicy"], context);
  }
  return contents;
};

const deserializeAws_restXmlGetTrafficPolicyCommandError = async (
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
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "NoSuchTrafficPolicy":
    case "com.amazonaws.route53#NoSuchTrafficPolicy":
      throw await deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlGetTrafficPolicyInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrafficPolicyInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetTrafficPolicyInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["TrafficPolicyInstance"] !== undefined) {
    contents.TrafficPolicyInstance = deserializeAws_restXmlTrafficPolicyInstance(
      data["TrafficPolicyInstance"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlGetTrafficPolicyInstanceCommandError = async (
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
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "NoSuchTrafficPolicyInstance":
    case "com.amazonaws.route53#NoSuchTrafficPolicyInstance":
      throw await deserializeAws_restXmlNoSuchTrafficPolicyInstanceResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlGetTrafficPolicyInstanceCountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrafficPolicyInstanceCountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetTrafficPolicyInstanceCountCommandError(output, context);
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

const deserializeAws_restXmlGetTrafficPolicyInstanceCountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrafficPolicyInstanceCountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlListCidrBlocksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCidrBlocksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListCidrBlocksCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CidrBlocks === "") {
    contents.CidrBlocks = [];
  } else if (data["CidrBlocks"] !== undefined && data["CidrBlocks"]["member"] !== undefined) {
    contents.CidrBlocks = deserializeAws_restXmlCidrBlockSummaries(
      __getArrayIfSingleItem(data["CidrBlocks"]["member"]),
      context
    );
  }
  if (data["NextToken"] !== undefined) {
    contents.NextToken = __expectString(data["NextToken"]);
  }
  return contents;
};

const deserializeAws_restXmlListCidrBlocksCommandError = async (
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
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "NoSuchCidrCollectionException":
    case "com.amazonaws.route53#NoSuchCidrCollectionException":
      throw await deserializeAws_restXmlNoSuchCidrCollectionExceptionResponse(parsedOutput, context);
    case "NoSuchCidrLocationException":
    case "com.amazonaws.route53#NoSuchCidrLocationException":
      throw await deserializeAws_restXmlNoSuchCidrLocationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlListCidrCollectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCidrCollectionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListCidrCollectionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CidrCollections === "") {
    contents.CidrCollections = [];
  } else if (data["CidrCollections"] !== undefined && data["CidrCollections"]["member"] !== undefined) {
    contents.CidrCollections = deserializeAws_restXmlCollectionSummaries(
      __getArrayIfSingleItem(data["CidrCollections"]["member"]),
      context
    );
  }
  if (data["NextToken"] !== undefined) {
    contents.NextToken = __expectString(data["NextToken"]);
  }
  return contents;
};

const deserializeAws_restXmlListCidrCollectionsCommandError = async (
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
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlListCidrLocationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCidrLocationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListCidrLocationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CidrLocations === "") {
    contents.CidrLocations = [];
  } else if (data["CidrLocations"] !== undefined && data["CidrLocations"]["member"] !== undefined) {
    contents.CidrLocations = deserializeAws_restXmlLocationSummaries(
      __getArrayIfSingleItem(data["CidrLocations"]["member"]),
      context
    );
  }
  if (data["NextToken"] !== undefined) {
    contents.NextToken = __expectString(data["NextToken"]);
  }
  return contents;
};

const deserializeAws_restXmlListCidrLocationsCommandError = async (
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
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "NoSuchCidrCollectionException":
    case "com.amazonaws.route53#NoSuchCidrCollectionException":
      throw await deserializeAws_restXmlNoSuchCidrCollectionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlListGeoLocationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGeoLocationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListGeoLocationsCommandError(output, context);
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
    contents.GeoLocationDetailsList = deserializeAws_restXmlGeoLocationDetailsList(
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

const deserializeAws_restXmlListGeoLocationsCommandError = async (
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
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlListHealthChecksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHealthChecksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListHealthChecksCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.HealthChecks === "") {
    contents.HealthChecks = [];
  } else if (data["HealthChecks"] !== undefined && data["HealthChecks"]["HealthCheck"] !== undefined) {
    contents.HealthChecks = deserializeAws_restXmlHealthChecks(
      __getArrayIfSingleItem(data["HealthChecks"]["HealthCheck"]),
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

const deserializeAws_restXmlListHealthChecksCommandError = async (
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
      throw await deserializeAws_restXmlIncompatibleVersionResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlListHostedZonesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHostedZonesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListHostedZonesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.HostedZones === "") {
    contents.HostedZones = [];
  } else if (data["HostedZones"] !== undefined && data["HostedZones"]["HostedZone"] !== undefined) {
    contents.HostedZones = deserializeAws_restXmlHostedZones(
      __getArrayIfSingleItem(data["HostedZones"]["HostedZone"]),
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

const deserializeAws_restXmlListHostedZonesCommandError = async (
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
      throw await deserializeAws_restXmlDelegationSetNotReusableResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "NoSuchDelegationSet":
    case "com.amazonaws.route53#NoSuchDelegationSet":
      throw await deserializeAws_restXmlNoSuchDelegationSetResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlListHostedZonesByNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHostedZonesByNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListHostedZonesByNameCommandError(output, context);
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
    contents.HostedZones = deserializeAws_restXmlHostedZones(
      __getArrayIfSingleItem(data["HostedZones"]["HostedZone"]),
      context
    );
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

const deserializeAws_restXmlListHostedZonesByNameCommandError = async (
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
      throw await deserializeAws_restXmlInvalidDomainNameResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlListHostedZonesByVPCCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHostedZonesByVPCCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListHostedZonesByVPCCommandError(output, context);
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
    contents.HostedZoneSummaries = deserializeAws_restXmlHostedZoneSummaries(
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

const deserializeAws_restXmlListHostedZonesByVPCCommandError = async (
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
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "InvalidPaginationToken":
    case "com.amazonaws.route53#InvalidPaginationToken":
      throw await deserializeAws_restXmlInvalidPaginationTokenResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlListQueryLoggingConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueryLoggingConfigsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListQueryLoggingConfigsCommandError(output, context);
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
    contents.QueryLoggingConfigs = deserializeAws_restXmlQueryLoggingConfigs(
      __getArrayIfSingleItem(data["QueryLoggingConfigs"]["QueryLoggingConfig"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlListQueryLoggingConfigsCommandError = async (
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
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "InvalidPaginationToken":
    case "com.amazonaws.route53#InvalidPaginationToken":
      throw await deserializeAws_restXmlInvalidPaginationTokenResponse(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlListResourceRecordSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceRecordSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListResourceRecordSetsCommandError(output, context);
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
    contents.ResourceRecordSets = deserializeAws_restXmlResourceRecordSets(
      __getArrayIfSingleItem(data["ResourceRecordSets"]["ResourceRecordSet"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlListResourceRecordSetsCommandError = async (
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
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlListReusableDelegationSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReusableDelegationSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListReusableDelegationSetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DelegationSets === "") {
    contents.DelegationSets = [];
  } else if (data["DelegationSets"] !== undefined && data["DelegationSets"]["DelegationSet"] !== undefined) {
    contents.DelegationSets = deserializeAws_restXmlDelegationSets(
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

const deserializeAws_restXmlListReusableDelegationSetsCommandError = async (
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
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ResourceTagSet"] !== undefined) {
    contents.ResourceTagSet = deserializeAws_restXmlResourceTagSet(data["ResourceTagSet"], context);
  }
  return contents;
};

const deserializeAws_restXmlListTagsForResourceCommandError = async (
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
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "NoSuchHealthCheck":
    case "com.amazonaws.route53#NoSuchHealthCheck":
      throw await deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context);
    case "PriorRequestNotComplete":
    case "com.amazonaws.route53#PriorRequestNotComplete":
      throw await deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53#ThrottlingException":
      throw await deserializeAws_restXmlThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlListTagsForResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListTagsForResourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ResourceTagSets === "") {
    contents.ResourceTagSets = [];
  } else if (data["ResourceTagSets"] !== undefined && data["ResourceTagSets"]["ResourceTagSet"] !== undefined) {
    contents.ResourceTagSets = deserializeAws_restXmlResourceTagSetList(
      __getArrayIfSingleItem(data["ResourceTagSets"]["ResourceTagSet"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlListTagsForResourcesCommandError = async (
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
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "NoSuchHealthCheck":
    case "com.amazonaws.route53#NoSuchHealthCheck":
      throw await deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context);
    case "PriorRequestNotComplete":
    case "com.amazonaws.route53#PriorRequestNotComplete":
      throw await deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53#ThrottlingException":
      throw await deserializeAws_restXmlThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlListTrafficPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrafficPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListTrafficPoliciesCommandError(output, context);
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
    contents.TrafficPolicySummaries = deserializeAws_restXmlTrafficPolicySummaries(
      __getArrayIfSingleItem(data["TrafficPolicySummaries"]["TrafficPolicySummary"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlListTrafficPoliciesCommandError = async (
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
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlListTrafficPolicyInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrafficPolicyInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListTrafficPolicyInstancesCommandError(output, context);
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
    contents.TrafficPolicyInstances = deserializeAws_restXmlTrafficPolicyInstances(
      __getArrayIfSingleItem(data["TrafficPolicyInstances"]["TrafficPolicyInstance"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlListTrafficPolicyInstancesCommandError = async (
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
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "NoSuchTrafficPolicyInstance":
    case "com.amazonaws.route53#NoSuchTrafficPolicyInstance":
      throw await deserializeAws_restXmlNoSuchTrafficPolicyInstanceResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlListTrafficPolicyInstancesByHostedZoneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrafficPolicyInstancesByHostedZoneCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListTrafficPolicyInstancesByHostedZoneCommandError(output, context);
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
    contents.TrafficPolicyInstances = deserializeAws_restXmlTrafficPolicyInstances(
      __getArrayIfSingleItem(data["TrafficPolicyInstances"]["TrafficPolicyInstance"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlListTrafficPolicyInstancesByHostedZoneCommandError = async (
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
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context);
    case "NoSuchTrafficPolicyInstance":
    case "com.amazonaws.route53#NoSuchTrafficPolicyInstance":
      throw await deserializeAws_restXmlNoSuchTrafficPolicyInstanceResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlListTrafficPolicyInstancesByPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrafficPolicyInstancesByPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListTrafficPolicyInstancesByPolicyCommandError(output, context);
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
    contents.TrafficPolicyInstances = deserializeAws_restXmlTrafficPolicyInstances(
      __getArrayIfSingleItem(data["TrafficPolicyInstances"]["TrafficPolicyInstance"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlListTrafficPolicyInstancesByPolicyCommandError = async (
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
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "NoSuchTrafficPolicy":
    case "com.amazonaws.route53#NoSuchTrafficPolicy":
      throw await deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context);
    case "NoSuchTrafficPolicyInstance":
    case "com.amazonaws.route53#NoSuchTrafficPolicyInstance":
      throw await deserializeAws_restXmlNoSuchTrafficPolicyInstanceResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlListTrafficPolicyVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrafficPolicyVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListTrafficPolicyVersionsCommandError(output, context);
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
    contents.TrafficPolicies = deserializeAws_restXmlTrafficPolicies(
      __getArrayIfSingleItem(data["TrafficPolicies"]["TrafficPolicy"]),
      context
    );
  }
  if (data["TrafficPolicyVersionMarker"] !== undefined) {
    contents.TrafficPolicyVersionMarker = __expectString(data["TrafficPolicyVersionMarker"]);
  }
  return contents;
};

const deserializeAws_restXmlListTrafficPolicyVersionsCommandError = async (
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
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "NoSuchTrafficPolicy":
    case "com.amazonaws.route53#NoSuchTrafficPolicy":
      throw await deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlListVPCAssociationAuthorizationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVPCAssociationAuthorizationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListVPCAssociationAuthorizationsCommandError(output, context);
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
    contents.VPCs = deserializeAws_restXmlVPCs(__getArrayIfSingleItem(data["VPCs"]["VPC"]), context);
  }
  return contents;
};

const deserializeAws_restXmlListVPCAssociationAuthorizationsCommandError = async (
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
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "InvalidPaginationToken":
    case "com.amazonaws.route53#InvalidPaginationToken":
      throw await deserializeAws_restXmlInvalidPaginationTokenResponse(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlTestDNSAnswerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestDNSAnswerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlTestDNSAnswerCommandError(output, context);
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
    contents.RecordData = deserializeAws_restXmlRecordData(
      __getArrayIfSingleItem(data["RecordData"]["RecordDataEntry"]),
      context
    );
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

const deserializeAws_restXmlTestDNSAnswerCommandError = async (
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
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlUpdateHealthCheckCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHealthCheckCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUpdateHealthCheckCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["HealthCheck"] !== undefined) {
    contents.HealthCheck = deserializeAws_restXmlHealthCheck(data["HealthCheck"], context);
  }
  return contents;
};

const deserializeAws_restXmlUpdateHealthCheckCommandError = async (
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
      throw await deserializeAws_restXmlHealthCheckVersionMismatchResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "NoSuchHealthCheck":
    case "com.amazonaws.route53#NoSuchHealthCheck":
      throw await deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlUpdateHostedZoneCommentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHostedZoneCommentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUpdateHostedZoneCommentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["HostedZone"] !== undefined) {
    contents.HostedZone = deserializeAws_restXmlHostedZone(data["HostedZone"], context);
  }
  return contents;
};

const deserializeAws_restXmlUpdateHostedZoneCommentCommandError = async (
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
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      throw await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context);
    case "PriorRequestNotComplete":
    case "com.amazonaws.route53#PriorRequestNotComplete":
      throw await deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlUpdateTrafficPolicyCommentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrafficPolicyCommentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUpdateTrafficPolicyCommentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["TrafficPolicy"] !== undefined) {
    contents.TrafficPolicy = deserializeAws_restXmlTrafficPolicy(data["TrafficPolicy"], context);
  }
  return contents;
};

const deserializeAws_restXmlUpdateTrafficPolicyCommentCommandError = async (
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
      throw await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "NoSuchTrafficPolicy":
    case "com.amazonaws.route53#NoSuchTrafficPolicy":
      throw await deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlUpdateTrafficPolicyInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrafficPolicyInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUpdateTrafficPolicyInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["TrafficPolicyInstance"] !== undefined) {
    contents.TrafficPolicyInstance = deserializeAws_restXmlTrafficPolicyInstance(
      data["TrafficPolicyInstance"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlUpdateTrafficPolicyInstanceCommandError = async (
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
      throw await deserializeAws_restXmlConflictingTypesResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      throw await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context);
    case "NoSuchTrafficPolicy":
    case "com.amazonaws.route53#NoSuchTrafficPolicy":
      throw await deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context);
    case "NoSuchTrafficPolicyInstance":
    case "com.amazonaws.route53#NoSuchTrafficPolicyInstance":
      throw await deserializeAws_restXmlNoSuchTrafficPolicyInstanceResponse(parsedOutput, context);
    case "PriorRequestNotComplete":
    case "com.amazonaws.route53#PriorRequestNotComplete":
      throw await deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const map = __map;
const deserializeAws_restXmlCidrBlockInUseExceptionResponse = async (
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

const deserializeAws_restXmlCidrCollectionAlreadyExistsExceptionResponse = async (
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

const deserializeAws_restXmlCidrCollectionInUseExceptionResponse = async (
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

const deserializeAws_restXmlCidrCollectionVersionMismatchExceptionResponse = async (
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

const deserializeAws_restXmlConcurrentModificationResponse = async (
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

const deserializeAws_restXmlConflictingDomainExistsResponse = async (
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

const deserializeAws_restXmlConflictingTypesResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictingTypes> => {
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

const deserializeAws_restXmlDelegationSetAlreadyCreatedResponse = async (
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

const deserializeAws_restXmlDelegationSetAlreadyReusableResponse = async (
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

const deserializeAws_restXmlDelegationSetInUseResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DelegationSetInUse> => {
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

const deserializeAws_restXmlDelegationSetNotAvailableResponse = async (
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

const deserializeAws_restXmlDelegationSetNotReusableResponse = async (
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

const deserializeAws_restXmlDNSSECNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DNSSECNotFound> => {
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

const deserializeAws_restXmlHealthCheckAlreadyExistsResponse = async (
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

const deserializeAws_restXmlHealthCheckInUseResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HealthCheckInUse> => {
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

const deserializeAws_restXmlHealthCheckVersionMismatchResponse = async (
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

const deserializeAws_restXmlHostedZoneAlreadyExistsResponse = async (
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

const deserializeAws_restXmlHostedZoneNotEmptyResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HostedZoneNotEmpty> => {
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

const deserializeAws_restXmlHostedZoneNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HostedZoneNotFound> => {
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

const deserializeAws_restXmlHostedZoneNotPrivateResponse = async (
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

const deserializeAws_restXmlHostedZonePartiallyDelegatedResponse = async (
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

const deserializeAws_restXmlIncompatibleVersionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncompatibleVersion> => {
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

const deserializeAws_restXmlInsufficientCloudWatchLogsResourcePolicyResponse = async (
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

const deserializeAws_restXmlInvalidArgumentResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArgument> => {
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

const deserializeAws_restXmlInvalidChangeBatchResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidChangeBatch> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  if (data.messages === "") {
    contents.messages = [];
  } else if (data["messages"] !== undefined && data["messages"]["Message"] !== undefined) {
    contents.messages = deserializeAws_restXmlErrorMessages(
      __getArrayIfSingleItem(data["messages"]["Message"]),
      context
    );
  }
  const exception = new InvalidChangeBatch({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

const deserializeAws_restXmlInvalidDomainNameResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDomainName> => {
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

const deserializeAws_restXmlInvalidInputResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInput> => {
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

const deserializeAws_restXmlInvalidKeySigningKeyNameResponse = async (
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

const deserializeAws_restXmlInvalidKeySigningKeyStatusResponse = async (
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

const deserializeAws_restXmlInvalidKMSArnResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidKMSArn> => {
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

const deserializeAws_restXmlInvalidPaginationTokenResponse = async (
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

const deserializeAws_restXmlInvalidSigningStatusResponse = async (
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

const deserializeAws_restXmlInvalidTrafficPolicyDocumentResponse = async (
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

const deserializeAws_restXmlInvalidVPCIdResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidVPCId> => {
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

const deserializeAws_restXmlKeySigningKeyAlreadyExistsResponse = async (
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

const deserializeAws_restXmlKeySigningKeyInParentDSRecordResponse = async (
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

const deserializeAws_restXmlKeySigningKeyInUseResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KeySigningKeyInUse> => {
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

const deserializeAws_restXmlKeySigningKeyWithActiveStatusNotFoundResponse = async (
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

const deserializeAws_restXmlLastVPCAssociationResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LastVPCAssociation> => {
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

const deserializeAws_restXmlLimitsExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitsExceeded> => {
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

const deserializeAws_restXmlNoSuchChangeResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchChange> => {
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

const deserializeAws_restXmlNoSuchCidrCollectionExceptionResponse = async (
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

const deserializeAws_restXmlNoSuchCidrLocationExceptionResponse = async (
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

const deserializeAws_restXmlNoSuchCloudWatchLogsLogGroupResponse = async (
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

const deserializeAws_restXmlNoSuchDelegationSetResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchDelegationSet> => {
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

const deserializeAws_restXmlNoSuchGeoLocationResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchGeoLocation> => {
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

const deserializeAws_restXmlNoSuchHealthCheckResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchHealthCheck> => {
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

const deserializeAws_restXmlNoSuchHostedZoneResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchHostedZone> => {
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

const deserializeAws_restXmlNoSuchKeySigningKeyResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchKeySigningKey> => {
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

const deserializeAws_restXmlNoSuchQueryLoggingConfigResponse = async (
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

const deserializeAws_restXmlNoSuchTrafficPolicyResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchTrafficPolicy> => {
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

const deserializeAws_restXmlNoSuchTrafficPolicyInstanceResponse = async (
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

const deserializeAws_restXmlNotAuthorizedExceptionResponse = async (
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

const deserializeAws_restXmlPriorRequestNotCompleteResponse = async (
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

const deserializeAws_restXmlPublicZoneVPCAssociationResponse = async (
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

const deserializeAws_restXmlQueryLoggingConfigAlreadyExistsResponse = async (
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

const deserializeAws_restXmlThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
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

const deserializeAws_restXmlTooManyHealthChecksResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyHealthChecks> => {
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

const deserializeAws_restXmlTooManyHostedZonesResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyHostedZones> => {
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

const deserializeAws_restXmlTooManyKeySigningKeysResponse = async (
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

const deserializeAws_restXmlTooManyTrafficPoliciesResponse = async (
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

const deserializeAws_restXmlTooManyTrafficPolicyInstancesResponse = async (
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

const deserializeAws_restXmlTooManyTrafficPolicyVersionsForCurrentPolicyResponse = async (
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

const deserializeAws_restXmlTooManyVPCAssociationAuthorizationsResponse = async (
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

const deserializeAws_restXmlTrafficPolicyAlreadyExistsResponse = async (
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

const deserializeAws_restXmlTrafficPolicyInstanceAlreadyExistsResponse = async (
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

const deserializeAws_restXmlTrafficPolicyInUseResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TrafficPolicyInUse> => {
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

const deserializeAws_restXmlVPCAssociationAuthorizationNotFoundResponse = async (
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

const deserializeAws_restXmlVPCAssociationNotFoundResponse = async (
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

const serializeAws_restXmlAlarmIdentifier = (input: AlarmIdentifier, context: __SerdeContext): any => {
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

const serializeAws_restXmlAliasTarget = (input: AliasTarget, context: __SerdeContext): any => {
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

const serializeAws_restXmlChange = (input: Change, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Change");
  if (input.Action != null) {
    const node = __XmlNode.of("ChangeAction", input.Action).withName("Action");
    bodyNode.addChildNode(node);
  }
  if (input.ResourceRecordSet != null) {
    const node = serializeAws_restXmlResourceRecordSet(input.ResourceRecordSet, context).withName("ResourceRecordSet");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlChangeBatch = (input: ChangeBatch, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ChangeBatch");
  if (input.Comment != null) {
    const node = __XmlNode.of("ResourceDescription", input.Comment).withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.Changes != null) {
    const nodes = serializeAws_restXmlChanges(input.Changes, context);
    const containerNode = new __XmlNode("Changes");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlChanges = (input: Change[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = serializeAws_restXmlChange(entry, context);
      return node.withName("Change");
    });
};

const serializeAws_restXmlChildHealthCheckList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("HealthCheckId", entry);
      return node.withName("ChildHealthCheck");
    });
};

const serializeAws_restXmlCidrCollectionChange = (input: CidrCollectionChange, context: __SerdeContext): any => {
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
    const nodes = serializeAws_restXmlCidrList(input.CidrList, context);
    const containerNode = new __XmlNode("CidrList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlCidrCollectionChanges = (input: CidrCollectionChange[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = serializeAws_restXmlCidrCollectionChange(entry, context);
      return node.withName("member");
    });
};

const serializeAws_restXmlCidrList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("Cidr", entry);
      return node.withName("Cidr");
    });
};

const serializeAws_restXmlCidrRoutingConfig = (input: CidrRoutingConfig, context: __SerdeContext): any => {
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

const serializeAws_restXmlGeoLocation = (input: GeoLocation, context: __SerdeContext): any => {
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

const serializeAws_restXmlHealthCheckConfig = (input: HealthCheckConfig, context: __SerdeContext): any => {
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
    const nodes = serializeAws_restXmlChildHealthCheckList(input.ChildHealthChecks, context);
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
    const nodes = serializeAws_restXmlHealthCheckRegionList(input.Regions, context);
    const containerNode = new __XmlNode("Regions");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.AlarmIdentifier != null) {
    const node = serializeAws_restXmlAlarmIdentifier(input.AlarmIdentifier, context).withName("AlarmIdentifier");
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

const serializeAws_restXmlHealthCheckRegionList = (
  input: (HealthCheckRegion | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("HealthCheckRegion", entry);
      return node.withName("Region");
    });
};

const serializeAws_restXmlHostedZoneConfig = (input: HostedZoneConfig, context: __SerdeContext): any => {
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

const serializeAws_restXmlResettableElementNameList = (
  input: (ResettableElementName | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("ResettableElementName", entry);
      return node.withName("ResettableElementName");
    });
};

const serializeAws_restXmlResourceRecord = (input: ResourceRecord, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ResourceRecord");
  if (input.Value != null) {
    const node = __XmlNode.of("RData", input.Value).withName("Value");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlResourceRecords = (input: ResourceRecord[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = serializeAws_restXmlResourceRecord(entry, context);
      return node.withName("ResourceRecord");
    });
};

const serializeAws_restXmlResourceRecordSet = (input: ResourceRecordSet, context: __SerdeContext): any => {
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
    const node = serializeAws_restXmlGeoLocation(input.GeoLocation, context).withName("GeoLocation");
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
    const nodes = serializeAws_restXmlResourceRecords(input.ResourceRecords, context);
    const containerNode = new __XmlNode("ResourceRecords");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.AliasTarget != null) {
    const node = serializeAws_restXmlAliasTarget(input.AliasTarget, context).withName("AliasTarget");
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
    const node = serializeAws_restXmlCidrRoutingConfig(input.CidrRoutingConfig, context).withName("CidrRoutingConfig");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlTag = (input: Tag, context: __SerdeContext): any => {
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

const serializeAws_restXmlTagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("TagKey", entry);
      return node.withName("Key");
    });
};

const serializeAws_restXmlTagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = serializeAws_restXmlTag(entry, context);
      return node.withName("Tag");
    });
};

const serializeAws_restXmlTagResourceIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("TagResourceId", entry);
      return node.withName("ResourceId");
    });
};

const serializeAws_restXmlVPC = (input: VPC, context: __SerdeContext): any => {
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

const deserializeAws_restXmlAccountLimit = (output: any, context: __SerdeContext): AccountLimit => {
  const contents: any = {
    Type: undefined,
    Value: undefined,
  };
  if (output["Type"] !== undefined) {
    contents.Type = __expectString(output["Type"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __strictParseLong(output["Value"]) as number;
  }
  return contents;
};

const deserializeAws_restXmlAlarmIdentifier = (output: any, context: __SerdeContext): AlarmIdentifier => {
  const contents: any = {
    Region: undefined,
    Name: undefined,
  };
  if (output["Region"] !== undefined) {
    contents.Region = __expectString(output["Region"]);
  }
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  return contents;
};

const deserializeAws_restXmlAliasTarget = (output: any, context: __SerdeContext): AliasTarget => {
  const contents: any = {
    HostedZoneId: undefined,
    DNSName: undefined,
    EvaluateTargetHealth: undefined,
  };
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

const deserializeAws_restXmlChangeInfo = (output: any, context: __SerdeContext): ChangeInfo => {
  const contents: any = {
    Id: undefined,
    Status: undefined,
    SubmittedAt: undefined,
    Comment: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["SubmittedAt"] !== undefined) {
    contents.SubmittedAt = __expectNonNull(__parseRfc3339DateTime(output["SubmittedAt"]));
  }
  if (output["Comment"] !== undefined) {
    contents.Comment = __expectString(output["Comment"]);
  }
  return contents;
};

const deserializeAws_restXmlCheckerIpRanges = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlChildHealthCheckList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlCidrBlockSummaries = (output: any, context: __SerdeContext): CidrBlockSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlCidrBlockSummary(entry, context);
    });
};

const deserializeAws_restXmlCidrBlockSummary = (output: any, context: __SerdeContext): CidrBlockSummary => {
  const contents: any = {
    CidrBlock: undefined,
    LocationName: undefined,
  };
  if (output["CidrBlock"] !== undefined) {
    contents.CidrBlock = __expectString(output["CidrBlock"]);
  }
  if (output["LocationName"] !== undefined) {
    contents.LocationName = __expectString(output["LocationName"]);
  }
  return contents;
};

const deserializeAws_restXmlCidrCollection = (output: any, context: __SerdeContext): CidrCollection => {
  const contents: any = {
    Arn: undefined,
    Id: undefined,
    Name: undefined,
    Version: undefined,
  };
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

const deserializeAws_restXmlCidrRoutingConfig = (output: any, context: __SerdeContext): CidrRoutingConfig => {
  const contents: any = {
    CollectionId: undefined,
    LocationName: undefined,
  };
  if (output["CollectionId"] !== undefined) {
    contents.CollectionId = __expectString(output["CollectionId"]);
  }
  if (output["LocationName"] !== undefined) {
    contents.LocationName = __expectString(output["LocationName"]);
  }
  return contents;
};

const deserializeAws_restXmlCloudWatchAlarmConfiguration = (
  output: any,
  context: __SerdeContext
): CloudWatchAlarmConfiguration => {
  const contents: any = {
    EvaluationPeriods: undefined,
    Threshold: undefined,
    ComparisonOperator: undefined,
    Period: undefined,
    MetricName: undefined,
    Namespace: undefined,
    Statistic: undefined,
    Dimensions: undefined,
  };
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
    contents.Dimensions = deserializeAws_restXmlDimensionList(
      __getArrayIfSingleItem(output["Dimensions"]["Dimension"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlCollectionSummaries = (output: any, context: __SerdeContext): CollectionSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlCollectionSummary(entry, context);
    });
};

const deserializeAws_restXmlCollectionSummary = (output: any, context: __SerdeContext): CollectionSummary => {
  const contents: any = {
    Arn: undefined,
    Id: undefined,
    Name: undefined,
    Version: undefined,
  };
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

const deserializeAws_restXmlDelegationSet = (output: any, context: __SerdeContext): DelegationSet => {
  const contents: any = {
    Id: undefined,
    CallerReference: undefined,
    NameServers: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["CallerReference"] !== undefined) {
    contents.CallerReference = __expectString(output["CallerReference"]);
  }
  if (output.NameServers === "") {
    contents.NameServers = [];
  } else if (output["NameServers"] !== undefined && output["NameServers"]["NameServer"] !== undefined) {
    contents.NameServers = deserializeAws_restXmlDelegationSetNameServers(
      __getArrayIfSingleItem(output["NameServers"]["NameServer"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlDelegationSetNameServers = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlDelegationSets = (output: any, context: __SerdeContext): DelegationSet[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlDelegationSet(entry, context);
    });
};

const deserializeAws_restXmlDimension = (output: any, context: __SerdeContext): Dimension => {
  const contents: any = {
    Name: undefined,
    Value: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  return contents;
};

const deserializeAws_restXmlDimensionList = (output: any, context: __SerdeContext): Dimension[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlDimension(entry, context);
    });
};

const deserializeAws_restXmlDNSSECStatus = (output: any, context: __SerdeContext): DNSSECStatus => {
  const contents: any = {
    ServeSignature: undefined,
    StatusMessage: undefined,
  };
  if (output["ServeSignature"] !== undefined) {
    contents.ServeSignature = __expectString(output["ServeSignature"]);
  }
  if (output["StatusMessage"] !== undefined) {
    contents.StatusMessage = __expectString(output["StatusMessage"]);
  }
  return contents;
};

const deserializeAws_restXmlErrorMessages = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlGeoLocation = (output: any, context: __SerdeContext): GeoLocation => {
  const contents: any = {
    ContinentCode: undefined,
    CountryCode: undefined,
    SubdivisionCode: undefined,
  };
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

const deserializeAws_restXmlGeoLocationDetails = (output: any, context: __SerdeContext): GeoLocationDetails => {
  const contents: any = {
    ContinentCode: undefined,
    ContinentName: undefined,
    CountryCode: undefined,
    CountryName: undefined,
    SubdivisionCode: undefined,
    SubdivisionName: undefined,
  };
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

const deserializeAws_restXmlGeoLocationDetailsList = (output: any, context: __SerdeContext): GeoLocationDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlGeoLocationDetails(entry, context);
    });
};

const deserializeAws_restXmlHealthCheck = (output: any, context: __SerdeContext): HealthCheck => {
  const contents: any = {
    Id: undefined,
    CallerReference: undefined,
    LinkedService: undefined,
    HealthCheckConfig: undefined,
    HealthCheckVersion: undefined,
    CloudWatchAlarmConfiguration: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["CallerReference"] !== undefined) {
    contents.CallerReference = __expectString(output["CallerReference"]);
  }
  if (output["LinkedService"] !== undefined) {
    contents.LinkedService = deserializeAws_restXmlLinkedService(output["LinkedService"], context);
  }
  if (output["HealthCheckConfig"] !== undefined) {
    contents.HealthCheckConfig = deserializeAws_restXmlHealthCheckConfig(output["HealthCheckConfig"], context);
  }
  if (output["HealthCheckVersion"] !== undefined) {
    contents.HealthCheckVersion = __strictParseLong(output["HealthCheckVersion"]) as number;
  }
  if (output["CloudWatchAlarmConfiguration"] !== undefined) {
    contents.CloudWatchAlarmConfiguration = deserializeAws_restXmlCloudWatchAlarmConfiguration(
      output["CloudWatchAlarmConfiguration"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlHealthCheckConfig = (output: any, context: __SerdeContext): HealthCheckConfig => {
  const contents: any = {
    IPAddress: undefined,
    Port: undefined,
    Type: undefined,
    ResourcePath: undefined,
    FullyQualifiedDomainName: undefined,
    SearchString: undefined,
    RequestInterval: undefined,
    FailureThreshold: undefined,
    MeasureLatency: undefined,
    Inverted: undefined,
    Disabled: undefined,
    HealthThreshold: undefined,
    ChildHealthChecks: undefined,
    EnableSNI: undefined,
    Regions: undefined,
    AlarmIdentifier: undefined,
    InsufficientDataHealthStatus: undefined,
    RoutingControlArn: undefined,
  };
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
    contents.ChildHealthChecks = deserializeAws_restXmlChildHealthCheckList(
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
    contents.Regions = deserializeAws_restXmlHealthCheckRegionList(
      __getArrayIfSingleItem(output["Regions"]["Region"]),
      context
    );
  }
  if (output["AlarmIdentifier"] !== undefined) {
    contents.AlarmIdentifier = deserializeAws_restXmlAlarmIdentifier(output["AlarmIdentifier"], context);
  }
  if (output["InsufficientDataHealthStatus"] !== undefined) {
    contents.InsufficientDataHealthStatus = __expectString(output["InsufficientDataHealthStatus"]);
  }
  if (output["RoutingControlArn"] !== undefined) {
    contents.RoutingControlArn = __expectString(output["RoutingControlArn"]);
  }
  return contents;
};

const deserializeAws_restXmlHealthCheckObservation = (output: any, context: __SerdeContext): HealthCheckObservation => {
  const contents: any = {
    Region: undefined,
    IPAddress: undefined,
    StatusReport: undefined,
  };
  if (output["Region"] !== undefined) {
    contents.Region = __expectString(output["Region"]);
  }
  if (output["IPAddress"] !== undefined) {
    contents.IPAddress = __expectString(output["IPAddress"]);
  }
  if (output["StatusReport"] !== undefined) {
    contents.StatusReport = deserializeAws_restXmlStatusReport(output["StatusReport"], context);
  }
  return contents;
};

const deserializeAws_restXmlHealthCheckObservations = (
  output: any,
  context: __SerdeContext
): HealthCheckObservation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlHealthCheckObservation(entry, context);
    });
};

const deserializeAws_restXmlHealthCheckRegionList = (
  output: any,
  context: __SerdeContext
): (HealthCheckRegion | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlHealthChecks = (output: any, context: __SerdeContext): HealthCheck[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlHealthCheck(entry, context);
    });
};

const deserializeAws_restXmlHostedZone = (output: any, context: __SerdeContext): HostedZone => {
  const contents: any = {
    Id: undefined,
    Name: undefined,
    CallerReference: undefined,
    Config: undefined,
    ResourceRecordSetCount: undefined,
    LinkedService: undefined,
  };
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
    contents.Config = deserializeAws_restXmlHostedZoneConfig(output["Config"], context);
  }
  if (output["ResourceRecordSetCount"] !== undefined) {
    contents.ResourceRecordSetCount = __strictParseLong(output["ResourceRecordSetCount"]) as number;
  }
  if (output["LinkedService"] !== undefined) {
    contents.LinkedService = deserializeAws_restXmlLinkedService(output["LinkedService"], context);
  }
  return contents;
};

const deserializeAws_restXmlHostedZoneConfig = (output: any, context: __SerdeContext): HostedZoneConfig => {
  const contents: any = {
    Comment: undefined,
    PrivateZone: undefined,
  };
  if (output["Comment"] !== undefined) {
    contents.Comment = __expectString(output["Comment"]);
  }
  if (output["PrivateZone"] !== undefined) {
    contents.PrivateZone = __parseBoolean(output["PrivateZone"]);
  }
  return contents;
};

const deserializeAws_restXmlHostedZoneLimit = (output: any, context: __SerdeContext): HostedZoneLimit => {
  const contents: any = {
    Type: undefined,
    Value: undefined,
  };
  if (output["Type"] !== undefined) {
    contents.Type = __expectString(output["Type"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __strictParseLong(output["Value"]) as number;
  }
  return contents;
};

const deserializeAws_restXmlHostedZoneOwner = (output: any, context: __SerdeContext): HostedZoneOwner => {
  const contents: any = {
    OwningAccount: undefined,
    OwningService: undefined,
  };
  if (output["OwningAccount"] !== undefined) {
    contents.OwningAccount = __expectString(output["OwningAccount"]);
  }
  if (output["OwningService"] !== undefined) {
    contents.OwningService = __expectString(output["OwningService"]);
  }
  return contents;
};

const deserializeAws_restXmlHostedZones = (output: any, context: __SerdeContext): HostedZone[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlHostedZone(entry, context);
    });
};

const deserializeAws_restXmlHostedZoneSummaries = (output: any, context: __SerdeContext): HostedZoneSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlHostedZoneSummary(entry, context);
    });
};

const deserializeAws_restXmlHostedZoneSummary = (output: any, context: __SerdeContext): HostedZoneSummary => {
  const contents: any = {
    HostedZoneId: undefined,
    Name: undefined,
    Owner: undefined,
  };
  if (output["HostedZoneId"] !== undefined) {
    contents.HostedZoneId = __expectString(output["HostedZoneId"]);
  }
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Owner"] !== undefined) {
    contents.Owner = deserializeAws_restXmlHostedZoneOwner(output["Owner"], context);
  }
  return contents;
};

const deserializeAws_restXmlKeySigningKey = (output: any, context: __SerdeContext): KeySigningKey => {
  const contents: any = {
    Name: undefined,
    KmsArn: undefined,
    Flag: undefined,
    SigningAlgorithmMnemonic: undefined,
    SigningAlgorithmType: undefined,
    DigestAlgorithmMnemonic: undefined,
    DigestAlgorithmType: undefined,
    KeyTag: undefined,
    DigestValue: undefined,
    PublicKey: undefined,
    DSRecord: undefined,
    DNSKEYRecord: undefined,
    Status: undefined,
    StatusMessage: undefined,
    CreatedDate: undefined,
    LastModifiedDate: undefined,
  };
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
    contents.CreatedDate = __expectNonNull(__parseRfc3339DateTime(output["CreatedDate"]));
  }
  if (output["LastModifiedDate"] !== undefined) {
    contents.LastModifiedDate = __expectNonNull(__parseRfc3339DateTime(output["LastModifiedDate"]));
  }
  return contents;
};

const deserializeAws_restXmlKeySigningKeys = (output: any, context: __SerdeContext): KeySigningKey[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlKeySigningKey(entry, context);
    });
};

const deserializeAws_restXmlLinkedService = (output: any, context: __SerdeContext): LinkedService => {
  const contents: any = {
    ServicePrincipal: undefined,
    Description: undefined,
  };
  if (output["ServicePrincipal"] !== undefined) {
    contents.ServicePrincipal = __expectString(output["ServicePrincipal"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  return contents;
};

const deserializeAws_restXmlLocationSummaries = (output: any, context: __SerdeContext): LocationSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlLocationSummary(entry, context);
    });
};

const deserializeAws_restXmlLocationSummary = (output: any, context: __SerdeContext): LocationSummary => {
  const contents: any = {
    LocationName: undefined,
  };
  if (output["LocationName"] !== undefined) {
    contents.LocationName = __expectString(output["LocationName"]);
  }
  return contents;
};

const deserializeAws_restXmlQueryLoggingConfig = (output: any, context: __SerdeContext): QueryLoggingConfig => {
  const contents: any = {
    Id: undefined,
    HostedZoneId: undefined,
    CloudWatchLogsLogGroupArn: undefined,
  };
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

const deserializeAws_restXmlQueryLoggingConfigs = (output: any, context: __SerdeContext): QueryLoggingConfig[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlQueryLoggingConfig(entry, context);
    });
};

const deserializeAws_restXmlRecordData = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlResourceRecord = (output: any, context: __SerdeContext): ResourceRecord => {
  const contents: any = {
    Value: undefined,
  };
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  return contents;
};

const deserializeAws_restXmlResourceRecords = (output: any, context: __SerdeContext): ResourceRecord[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlResourceRecord(entry, context);
    });
};

const deserializeAws_restXmlResourceRecordSet = (output: any, context: __SerdeContext): ResourceRecordSet => {
  const contents: any = {
    Name: undefined,
    Type: undefined,
    SetIdentifier: undefined,
    Weight: undefined,
    Region: undefined,
    GeoLocation: undefined,
    Failover: undefined,
    MultiValueAnswer: undefined,
    TTL: undefined,
    ResourceRecords: undefined,
    AliasTarget: undefined,
    HealthCheckId: undefined,
    TrafficPolicyInstanceId: undefined,
    CidrRoutingConfig: undefined,
  };
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
    contents.GeoLocation = deserializeAws_restXmlGeoLocation(output["GeoLocation"], context);
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
    contents.ResourceRecords = deserializeAws_restXmlResourceRecords(
      __getArrayIfSingleItem(output["ResourceRecords"]["ResourceRecord"]),
      context
    );
  }
  if (output["AliasTarget"] !== undefined) {
    contents.AliasTarget = deserializeAws_restXmlAliasTarget(output["AliasTarget"], context);
  }
  if (output["HealthCheckId"] !== undefined) {
    contents.HealthCheckId = __expectString(output["HealthCheckId"]);
  }
  if (output["TrafficPolicyInstanceId"] !== undefined) {
    contents.TrafficPolicyInstanceId = __expectString(output["TrafficPolicyInstanceId"]);
  }
  if (output["CidrRoutingConfig"] !== undefined) {
    contents.CidrRoutingConfig = deserializeAws_restXmlCidrRoutingConfig(output["CidrRoutingConfig"], context);
  }
  return contents;
};

const deserializeAws_restXmlResourceRecordSets = (output: any, context: __SerdeContext): ResourceRecordSet[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlResourceRecordSet(entry, context);
    });
};

const deserializeAws_restXmlResourceTagSet = (output: any, context: __SerdeContext): ResourceTagSet => {
  const contents: any = {
    ResourceType: undefined,
    ResourceId: undefined,
    Tags: undefined,
  };
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType = __expectString(output["ResourceType"]);
  }
  if (output["ResourceId"] !== undefined) {
    contents.ResourceId = __expectString(output["ResourceId"]);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
    contents.Tags = deserializeAws_restXmlTagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
  }
  return contents;
};

const deserializeAws_restXmlResourceTagSetList = (output: any, context: __SerdeContext): ResourceTagSet[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlResourceTagSet(entry, context);
    });
};

const deserializeAws_restXmlReusableDelegationSetLimit = (
  output: any,
  context: __SerdeContext
): ReusableDelegationSetLimit => {
  const contents: any = {
    Type: undefined,
    Value: undefined,
  };
  if (output["Type"] !== undefined) {
    contents.Type = __expectString(output["Type"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __strictParseLong(output["Value"]) as number;
  }
  return contents;
};

const deserializeAws_restXmlStatusReport = (output: any, context: __SerdeContext): StatusReport => {
  const contents: any = {
    Status: undefined,
    CheckedTime: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["CheckedTime"] !== undefined) {
    contents.CheckedTime = __expectNonNull(__parseRfc3339DateTime(output["CheckedTime"]));
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
      return deserializeAws_restXmlTag(entry, context);
    });
};

const deserializeAws_restXmlTrafficPolicies = (output: any, context: __SerdeContext): TrafficPolicy[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlTrafficPolicy(entry, context);
    });
};

const deserializeAws_restXmlTrafficPolicy = (output: any, context: __SerdeContext): TrafficPolicy => {
  const contents: any = {
    Id: undefined,
    Version: undefined,
    Name: undefined,
    Type: undefined,
    Document: undefined,
    Comment: undefined,
  };
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

const deserializeAws_restXmlTrafficPolicyInstance = (output: any, context: __SerdeContext): TrafficPolicyInstance => {
  const contents: any = {
    Id: undefined,
    HostedZoneId: undefined,
    Name: undefined,
    TTL: undefined,
    State: undefined,
    Message: undefined,
    TrafficPolicyId: undefined,
    TrafficPolicyVersion: undefined,
    TrafficPolicyType: undefined,
  };
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

const deserializeAws_restXmlTrafficPolicyInstances = (
  output: any,
  context: __SerdeContext
): TrafficPolicyInstance[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlTrafficPolicyInstance(entry, context);
    });
};

const deserializeAws_restXmlTrafficPolicySummaries = (output: any, context: __SerdeContext): TrafficPolicySummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlTrafficPolicySummary(entry, context);
    });
};

const deserializeAws_restXmlTrafficPolicySummary = (output: any, context: __SerdeContext): TrafficPolicySummary => {
  const contents: any = {
    Id: undefined,
    Name: undefined,
    Type: undefined,
    LatestVersion: undefined,
    TrafficPolicyCount: undefined,
  };
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

const deserializeAws_restXmlVPC = (output: any, context: __SerdeContext): VPC => {
  const contents: any = {
    VPCRegion: undefined,
    VPCId: undefined,
  };
  if (output["VPCRegion"] !== undefined) {
    contents.VPCRegion = __expectString(output["VPCRegion"]);
  }
  if (output["VPCId"] !== undefined) {
    contents.VPCId = __expectString(output["VPCId"]);
  }
  return contents;
};

const deserializeAws_restXmlVPCs = (output: any, context: __SerdeContext): VPC[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlVPC(entry, context);
    });
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
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
      const parser = new XMLParser({
        attributeNamePrefix: "",
        htmlEntities: true,
        ignoreAttributes: false,
        ignoreDeclaration: true,
        parseTagValue: false,
        trimValues: false,
        tagValueProcessor: (_, val) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
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
  if (data.Error.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
};
