import {
  ActivateKeySigningKeyCommandInput,
  ActivateKeySigningKeyCommandOutput,
} from "../commands/ActivateKeySigningKeyCommand";
import {
  AssociateVPCWithHostedZoneCommandInput,
  AssociateVPCWithHostedZoneCommandOutput,
} from "../commands/AssociateVPCWithHostedZoneCommand";
import {
  ChangeResourceRecordSetsCommandInput,
  ChangeResourceRecordSetsCommandOutput,
} from "../commands/ChangeResourceRecordSetsCommand";
import {
  ChangeTagsForResourceCommandInput,
  ChangeTagsForResourceCommandOutput,
} from "../commands/ChangeTagsForResourceCommand";
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
  CloudWatchAlarmConfiguration,
  ConcurrentModification,
  ConflictingDomainExists,
  ConflictingTypes,
  DNSSECNotFound,
  DNSSECStatus,
  DelegationSet,
  DelegationSetAlreadyCreated,
  DelegationSetAlreadyReusable,
  DelegationSetInUse,
  DelegationSetNotAvailable,
  DelegationSetNotReusable,
  Dimension,
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
  InvalidKMSArn,
  InvalidKeySigningKeyName,
  InvalidKeySigningKeyStatus,
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
  NoSuchChange,
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
  TrafficPolicyInUse,
  TrafficPolicyInstance,
  TrafficPolicyInstanceAlreadyExists,
  TrafficPolicySummary,
  VPC,
  VPCAssociationAuthorizationNotFound,
  VPCAssociationNotFound,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
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
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";
import { XmlNode as __XmlNode, XmlText as __XmlText } from "@aws-sdk/xml-builder";
import { decodeHTML } from "entities";
import { parse as xmlParse } from "fast-xml-parser";

export const serializeAws_restXmlActivateKeySigningKeyCommand = async (
  input: ActivateKeySigningKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2013-04-01/keysigningkey/{HostedZoneId}/{Name}/activate";
  if (input.HostedZoneId !== undefined) {
    const labelValue: string = input.HostedZoneId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
    }
    resolvedPath = resolvedPath.replace("{HostedZoneId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: HostedZoneId.");
  }
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
  if (input.HostedZoneId !== undefined) {
    const labelValue: string = input.HostedZoneId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
    }
    resolvedPath = resolvedPath.replace("{HostedZoneId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: HostedZoneId.");
  }
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("AssociateVPCWithHostedZoneRequest");
  bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
  if (input.Comment !== undefined) {
    const node = new __XmlNode("AssociateVPCComment").addChildNode(new __XmlText(input.Comment)).withName("Comment");
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
  if (input.HostedZoneId !== undefined) {
    const labelValue: string = input.HostedZoneId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
    }
    resolvedPath = resolvedPath.replace("{HostedZoneId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: HostedZoneId.");
  }
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
  if (input.ResourceType !== undefined) {
    const labelValue: string = input.ResourceType;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceType.");
    }
    resolvedPath = resolvedPath.replace("{ResourceType}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceType.");
  }
  if (input.ResourceId !== undefined) {
    const labelValue: string = input.ResourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceId.");
    }
    resolvedPath = resolvedPath.replace("{ResourceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceId.");
  }
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

export const serializeAws_restXmlCreateHealthCheckCommand = async (
  input: CreateHealthCheckCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/healthcheck";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("CreateHealthCheckRequest");
  bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
  if (input.CallerReference !== undefined) {
    const node = new __XmlNode("HealthCheckNonce")
      .addChildNode(new __XmlText(input.CallerReference))
      .withName("CallerReference");
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/hostedzone";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("CreateHostedZoneRequest");
  bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
  if (input.CallerReference !== undefined) {
    const node = new __XmlNode("Nonce").addChildNode(new __XmlText(input.CallerReference)).withName("CallerReference");
    bodyNode.addChildNode(node);
  }
  if (input.DelegationSetId !== undefined) {
    const node = new __XmlNode("ResourceId")
      .addChildNode(new __XmlText(input.DelegationSetId))
      .withName("DelegationSetId");
    bodyNode.addChildNode(node);
  }
  if (input.HostedZoneConfig !== undefined) {
    const node = serializeAws_restXmlHostedZoneConfig(input.HostedZoneConfig, context).withName("HostedZoneConfig");
    bodyNode.addChildNode(node);
  }
  if (input.Name !== undefined) {
    const node = new __XmlNode("DNSName").addChildNode(new __XmlText(input.Name)).withName("Name");
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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/keysigningkey";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("CreateKeySigningKeyRequest");
  bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
  if (input.CallerReference !== undefined) {
    const node = new __XmlNode("Nonce").addChildNode(new __XmlText(input.CallerReference)).withName("CallerReference");
    bodyNode.addChildNode(node);
  }
  if (input.HostedZoneId !== undefined) {
    const node = new __XmlNode("ResourceId").addChildNode(new __XmlText(input.HostedZoneId)).withName("HostedZoneId");
    bodyNode.addChildNode(node);
  }
  if (input.KeyManagementServiceArn !== undefined) {
    const node = new __XmlNode("SigningKeyString")
      .addChildNode(new __XmlText(input.KeyManagementServiceArn))
      .withName("KeyManagementServiceArn");
    bodyNode.addChildNode(node);
  }
  if (input.Name !== undefined) {
    const node = new __XmlNode("SigningKeyName").addChildNode(new __XmlText(input.Name)).withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.Status !== undefined) {
    const node = new __XmlNode("SigningKeyStatus").addChildNode(new __XmlText(input.Status)).withName("Status");
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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/queryloggingconfig";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("CreateQueryLoggingConfigRequest");
  bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
  if (input.CloudWatchLogsLogGroupArn !== undefined) {
    const node = new __XmlNode("CloudWatchLogsLogGroupArn")
      .addChildNode(new __XmlText(input.CloudWatchLogsLogGroupArn))
      .withName("CloudWatchLogsLogGroupArn");
    bodyNode.addChildNode(node);
  }
  if (input.HostedZoneId !== undefined) {
    const node = new __XmlNode("ResourceId").addChildNode(new __XmlText(input.HostedZoneId)).withName("HostedZoneId");
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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/delegationset";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("CreateReusableDelegationSetRequest");
  bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
  if (input.CallerReference !== undefined) {
    const node = new __XmlNode("Nonce").addChildNode(new __XmlText(input.CallerReference)).withName("CallerReference");
    bodyNode.addChildNode(node);
  }
  if (input.HostedZoneId !== undefined) {
    const node = new __XmlNode("ResourceId").addChildNode(new __XmlText(input.HostedZoneId)).withName("HostedZoneId");
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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/trafficpolicy";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("CreateTrafficPolicyRequest");
  bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
  if (input.Comment !== undefined) {
    const node = new __XmlNode("TrafficPolicyComment").addChildNode(new __XmlText(input.Comment)).withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.Document !== undefined) {
    const node = new __XmlNode("TrafficPolicyDocument")
      .addChildNode(new __XmlText(input.Document))
      .withName("Document");
    bodyNode.addChildNode(node);
  }
  if (input.Name !== undefined) {
    const node = new __XmlNode("TrafficPolicyName").addChildNode(new __XmlText(input.Name)).withName("Name");
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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/trafficpolicyinstance";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("CreateTrafficPolicyInstanceRequest");
  bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
  if (input.HostedZoneId !== undefined) {
    const node = new __XmlNode("ResourceId").addChildNode(new __XmlText(input.HostedZoneId)).withName("HostedZoneId");
    bodyNode.addChildNode(node);
  }
  if (input.Name !== undefined) {
    const node = new __XmlNode("DNSName").addChildNode(new __XmlText(input.Name)).withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.TTL !== undefined) {
    const node = new __XmlNode("TTL").addChildNode(new __XmlText(String(input.TTL))).withName("TTL");
    bodyNode.addChildNode(node);
  }
  if (input.TrafficPolicyId !== undefined) {
    const node = new __XmlNode("TrafficPolicyId")
      .addChildNode(new __XmlText(input.TrafficPolicyId))
      .withName("TrafficPolicyId");
    bodyNode.addChildNode(node);
  }
  if (input.TrafficPolicyVersion !== undefined) {
    const node = new __XmlNode("TrafficPolicyVersion")
      .addChildNode(new __XmlText(String(input.TrafficPolicyVersion)))
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
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("CreateTrafficPolicyVersionRequest");
  bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
  if (input.Comment !== undefined) {
    const node = new __XmlNode("TrafficPolicyComment").addChildNode(new __XmlText(input.Comment)).withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.Document !== undefined) {
    const node = new __XmlNode("TrafficPolicyDocument")
      .addChildNode(new __XmlText(input.Document))
      .withName("Document");
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
  if (input.HostedZoneId !== undefined) {
    const labelValue: string = input.HostedZoneId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
    }
    resolvedPath = resolvedPath.replace("{HostedZoneId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: HostedZoneId.");
  }
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
  if (input.HostedZoneId !== undefined) {
    const labelValue: string = input.HostedZoneId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
    }
    resolvedPath = resolvedPath.replace("{HostedZoneId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: HostedZoneId.");
  }
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

export const serializeAws_restXmlDeleteHealthCheckCommand = async (
  input: DeleteHealthCheckCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/healthcheck/{HealthCheckId}";
  if (input.HealthCheckId !== undefined) {
    const labelValue: string = input.HealthCheckId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: HealthCheckId.");
    }
    resolvedPath = resolvedPath.replace("{HealthCheckId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: HealthCheckId.");
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

export const serializeAws_restXmlDeleteHostedZoneCommand = async (
  input: DeleteHostedZoneCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/hostedzone/{Id}";
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

export const serializeAws_restXmlDeleteKeySigningKeyCommand = async (
  input: DeleteKeySigningKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2013-04-01/keysigningkey/{HostedZoneId}/{Name}";
  if (input.HostedZoneId !== undefined) {
    const labelValue: string = input.HostedZoneId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
    }
    resolvedPath = resolvedPath.replace("{HostedZoneId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: HostedZoneId.");
  }
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

export const serializeAws_restXmlDeleteQueryLoggingConfigCommand = async (
  input: DeleteQueryLoggingConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/queryloggingconfig/{Id}";
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

export const serializeAws_restXmlDeleteReusableDelegationSetCommand = async (
  input: DeleteReusableDelegationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/delegationset/{Id}";
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

export const serializeAws_restXmlDeleteTrafficPolicyCommand = async (
  input: DeleteTrafficPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/trafficpolicy/{Id}/{Version}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  if (input.Version !== undefined) {
    const labelValue: string = input.Version.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Version.");
    }
    resolvedPath = resolvedPath.replace("{Version}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Version.");
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

export const serializeAws_restXmlDeleteTrafficPolicyInstanceCommand = async (
  input: DeleteTrafficPolicyInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/trafficpolicyinstance/{Id}";
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
  if (input.HostedZoneId !== undefined) {
    const labelValue: string = input.HostedZoneId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
    }
    resolvedPath = resolvedPath.replace("{HostedZoneId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: HostedZoneId.");
  }
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
  if (input.HostedZoneId !== undefined) {
    const labelValue: string = input.HostedZoneId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
    }
    resolvedPath = resolvedPath.replace("{HostedZoneId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: HostedZoneId.");
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
  if (input.HostedZoneId !== undefined) {
    const labelValue: string = input.HostedZoneId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
    }
    resolvedPath = resolvedPath.replace("{HostedZoneId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: HostedZoneId.");
  }
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("DisassociateVPCFromHostedZoneRequest");
  bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
  if (input.Comment !== undefined) {
    const node = new __XmlNode("DisassociateVPCComment").addChildNode(new __XmlText(input.Comment)).withName("Comment");
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
  if (input.HostedZoneId !== undefined) {
    const labelValue: string = input.HostedZoneId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
    }
    resolvedPath = resolvedPath.replace("{HostedZoneId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: HostedZoneId.");
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

export const serializeAws_restXmlGetAccountLimitCommand = async (
  input: GetAccountLimitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/accountlimit/{Type}";
  if (input.Type !== undefined) {
    const labelValue: string = input.Type;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Type.");
    }
    resolvedPath = resolvedPath.replace("{Type}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Type.");
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

export const serializeAws_restXmlGetChangeCommand = async (
  input: GetChangeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/change/{Id}";
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

export const serializeAws_restXmlGetCheckerIpRangesCommand = async (
  input: GetCheckerIpRangesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  let resolvedPath =
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
  if (input.HostedZoneId !== undefined) {
    const labelValue: string = input.HostedZoneId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
    }
    resolvedPath = resolvedPath.replace("{HostedZoneId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: HostedZoneId.");
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

export const serializeAws_restXmlGetGeoLocationCommand = async (
  input: GetGeoLocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/geolocation";
  const query: any = {
    ...(input.ContinentCode !== undefined && { continentcode: input.ContinentCode }),
    ...(input.CountryCode !== undefined && { countrycode: input.CountryCode }),
    ...(input.SubdivisionCode !== undefined && { subdivisioncode: input.SubdivisionCode }),
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

export const serializeAws_restXmlGetHealthCheckCommand = async (
  input: GetHealthCheckCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/healthcheck/{HealthCheckId}";
  if (input.HealthCheckId !== undefined) {
    const labelValue: string = input.HealthCheckId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: HealthCheckId.");
    }
    resolvedPath = resolvedPath.replace("{HealthCheckId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: HealthCheckId.");
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

export const serializeAws_restXmlGetHealthCheckCountCommand = async (
  input: GetHealthCheckCountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  let resolvedPath =
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
  if (input.HealthCheckId !== undefined) {
    const labelValue: string = input.HealthCheckId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: HealthCheckId.");
    }
    resolvedPath = resolvedPath.replace("{HealthCheckId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: HealthCheckId.");
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

export const serializeAws_restXmlGetHealthCheckStatusCommand = async (
  input: GetHealthCheckStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2013-04-01/healthcheck/{HealthCheckId}/status";
  if (input.HealthCheckId !== undefined) {
    const labelValue: string = input.HealthCheckId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: HealthCheckId.");
    }
    resolvedPath = resolvedPath.replace("{HealthCheckId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: HealthCheckId.");
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

export const serializeAws_restXmlGetHostedZoneCommand = async (
  input: GetHostedZoneCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/hostedzone/{Id}";
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

export const serializeAws_restXmlGetHostedZoneCountCommand = async (
  input: GetHostedZoneCountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  let resolvedPath =
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
  if (input.Type !== undefined) {
    const labelValue: string = input.Type;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Type.");
    }
    resolvedPath = resolvedPath.replace("{Type}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Type.");
  }
  if (input.HostedZoneId !== undefined) {
    const labelValue: string = input.HostedZoneId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
    }
    resolvedPath = resolvedPath.replace("{HostedZoneId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: HostedZoneId.");
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

export const serializeAws_restXmlGetQueryLoggingConfigCommand = async (
  input: GetQueryLoggingConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/queryloggingconfig/{Id}";
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

export const serializeAws_restXmlGetReusableDelegationSetCommand = async (
  input: GetReusableDelegationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/delegationset/{Id}";
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

export const serializeAws_restXmlGetReusableDelegationSetLimitCommand = async (
  input: GetReusableDelegationSetLimitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2013-04-01/reusabledelegationsetlimit/{DelegationSetId}/{Type}";
  if (input.Type !== undefined) {
    const labelValue: string = input.Type;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Type.");
    }
    resolvedPath = resolvedPath.replace("{Type}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Type.");
  }
  if (input.DelegationSetId !== undefined) {
    const labelValue: string = input.DelegationSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DelegationSetId.");
    }
    resolvedPath = resolvedPath.replace("{DelegationSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DelegationSetId.");
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

export const serializeAws_restXmlGetTrafficPolicyCommand = async (
  input: GetTrafficPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/trafficpolicy/{Id}/{Version}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  if (input.Version !== undefined) {
    const labelValue: string = input.Version.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Version.");
    }
    resolvedPath = resolvedPath.replace("{Version}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Version.");
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

export const serializeAws_restXmlGetTrafficPolicyInstanceCommand = async (
  input: GetTrafficPolicyInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/trafficpolicyinstance/{Id}";
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

export const serializeAws_restXmlGetTrafficPolicyInstanceCountCommand = async (
  input: GetTrafficPolicyInstanceCountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  let resolvedPath =
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

export const serializeAws_restXmlListGeoLocationsCommand = async (
  input: ListGeoLocationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/geolocations";
  const query: any = {
    ...(input.StartContinentCode !== undefined && { startcontinentcode: input.StartContinentCode }),
    ...(input.StartCountryCode !== undefined && { startcountrycode: input.StartCountryCode }),
    ...(input.StartSubdivisionCode !== undefined && { startsubdivisioncode: input.StartSubdivisionCode }),
    ...(input.MaxItems !== undefined && { maxitems: input.MaxItems.toString() }),
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

export const serializeAws_restXmlListHealthChecksCommand = async (
  input: ListHealthChecksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/healthcheck";
  const query: any = {
    ...(input.Marker !== undefined && { marker: input.Marker }),
    ...(input.MaxItems !== undefined && { maxitems: input.MaxItems.toString() }),
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

export const serializeAws_restXmlListHostedZonesCommand = async (
  input: ListHostedZonesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/hostedzone";
  const query: any = {
    ...(input.Marker !== undefined && { marker: input.Marker }),
    ...(input.MaxItems !== undefined && { maxitems: input.MaxItems.toString() }),
    ...(input.DelegationSetId !== undefined && { delegationsetid: input.DelegationSetId }),
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

export const serializeAws_restXmlListHostedZonesByNameCommand = async (
  input: ListHostedZonesByNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/hostedzonesbyname";
  const query: any = {
    ...(input.DNSName !== undefined && { dnsname: input.DNSName }),
    ...(input.HostedZoneId !== undefined && { hostedzoneid: input.HostedZoneId }),
    ...(input.MaxItems !== undefined && { maxitems: input.MaxItems.toString() }),
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

export const serializeAws_restXmlListHostedZonesByVPCCommand = async (
  input: ListHostedZonesByVPCCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/hostedzonesbyvpc";
  const query: any = {
    ...(input.VPCId !== undefined && { vpcid: input.VPCId }),
    ...(input.VPCRegion !== undefined && { vpcregion: input.VPCRegion }),
    ...(input.MaxItems !== undefined && { maxitems: input.MaxItems.toString() }),
    ...(input.NextToken !== undefined && { nexttoken: input.NextToken }),
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

export const serializeAws_restXmlListQueryLoggingConfigsCommand = async (
  input: ListQueryLoggingConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/queryloggingconfig";
  const query: any = {
    ...(input.HostedZoneId !== undefined && { hostedzoneid: input.HostedZoneId }),
    ...(input.NextToken !== undefined && { nexttoken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxresults: input.MaxResults.toString() }),
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

export const serializeAws_restXmlListResourceRecordSetsCommand = async (
  input: ListResourceRecordSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2013-04-01/hostedzone/{HostedZoneId}/rrset";
  if (input.HostedZoneId !== undefined) {
    const labelValue: string = input.HostedZoneId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
    }
    resolvedPath = resolvedPath.replace("{HostedZoneId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: HostedZoneId.");
  }
  const query: any = {
    ...(input.StartRecordName !== undefined && { name: input.StartRecordName }),
    ...(input.StartRecordType !== undefined && { type: input.StartRecordType }),
    ...(input.StartRecordIdentifier !== undefined && { identifier: input.StartRecordIdentifier }),
    ...(input.MaxItems !== undefined && { maxitems: input.MaxItems.toString() }),
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

export const serializeAws_restXmlListReusableDelegationSetsCommand = async (
  input: ListReusableDelegationSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/delegationset";
  const query: any = {
    ...(input.Marker !== undefined && { marker: input.Marker }),
    ...(input.MaxItems !== undefined && { maxitems: input.MaxItems.toString() }),
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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2013-04-01/tags/{ResourceType}/{ResourceId}";
  if (input.ResourceType !== undefined) {
    const labelValue: string = input.ResourceType;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceType.");
    }
    resolvedPath = resolvedPath.replace("{ResourceType}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceType.");
  }
  if (input.ResourceId !== undefined) {
    const labelValue: string = input.ResourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceId.");
    }
    resolvedPath = resolvedPath.replace("{ResourceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceId.");
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
  if (input.ResourceType !== undefined) {
    const labelValue: string = input.ResourceType;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceType.");
    }
    resolvedPath = resolvedPath.replace("{ResourceType}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceType.");
  }
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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/trafficpolicies";
  const query: any = {
    ...(input.TrafficPolicyIdMarker !== undefined && { trafficpolicyid: input.TrafficPolicyIdMarker }),
    ...(input.MaxItems !== undefined && { maxitems: input.MaxItems.toString() }),
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

export const serializeAws_restXmlListTrafficPolicyInstancesCommand = async (
  input: ListTrafficPolicyInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/trafficpolicyinstances";
  const query: any = {
    ...(input.HostedZoneIdMarker !== undefined && { hostedzoneid: input.HostedZoneIdMarker }),
    ...(input.TrafficPolicyInstanceNameMarker !== undefined && {
      trafficpolicyinstancename: input.TrafficPolicyInstanceNameMarker,
    }),
    ...(input.TrafficPolicyInstanceTypeMarker !== undefined && {
      trafficpolicyinstancetype: input.TrafficPolicyInstanceTypeMarker,
    }),
    ...(input.MaxItems !== undefined && { maxitems: input.MaxItems.toString() }),
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

export const serializeAws_restXmlListTrafficPolicyInstancesByHostedZoneCommand = async (
  input: ListTrafficPolicyInstancesByHostedZoneCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2013-04-01/trafficpolicyinstances/hostedzone";
  const query: any = {
    ...(input.HostedZoneId !== undefined && { id: input.HostedZoneId }),
    ...(input.TrafficPolicyInstanceNameMarker !== undefined && {
      trafficpolicyinstancename: input.TrafficPolicyInstanceNameMarker,
    }),
    ...(input.TrafficPolicyInstanceTypeMarker !== undefined && {
      trafficpolicyinstancetype: input.TrafficPolicyInstanceTypeMarker,
    }),
    ...(input.MaxItems !== undefined && { maxitems: input.MaxItems.toString() }),
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

export const serializeAws_restXmlListTrafficPolicyInstancesByPolicyCommand = async (
  input: ListTrafficPolicyInstancesByPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2013-04-01/trafficpolicyinstances/trafficpolicy";
  const query: any = {
    ...(input.TrafficPolicyId !== undefined && { id: input.TrafficPolicyId }),
    ...(input.TrafficPolicyVersion !== undefined && { version: input.TrafficPolicyVersion.toString() }),
    ...(input.HostedZoneIdMarker !== undefined && { hostedzoneid: input.HostedZoneIdMarker }),
    ...(input.TrafficPolicyInstanceNameMarker !== undefined && {
      trafficpolicyinstancename: input.TrafficPolicyInstanceNameMarker,
    }),
    ...(input.TrafficPolicyInstanceTypeMarker !== undefined && {
      trafficpolicyinstancetype: input.TrafficPolicyInstanceTypeMarker,
    }),
    ...(input.MaxItems !== undefined && { maxitems: input.MaxItems.toString() }),
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

export const serializeAws_restXmlListTrafficPolicyVersionsCommand = async (
  input: ListTrafficPolicyVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/trafficpolicies/{Id}/versions";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  const query: any = {
    ...(input.TrafficPolicyVersionMarker !== undefined && { trafficpolicyversion: input.TrafficPolicyVersionMarker }),
    ...(input.MaxItems !== undefined && { maxitems: input.MaxItems.toString() }),
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

export const serializeAws_restXmlListVPCAssociationAuthorizationsCommand = async (
  input: ListVPCAssociationAuthorizationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2013-04-01/hostedzone/{HostedZoneId}/authorizevpcassociation";
  if (input.HostedZoneId !== undefined) {
    const labelValue: string = input.HostedZoneId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: HostedZoneId.");
    }
    resolvedPath = resolvedPath.replace("{HostedZoneId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: HostedZoneId.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { nexttoken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxresults: input.MaxResults.toString() }),
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

export const serializeAws_restXmlTestDNSAnswerCommand = async (
  input: TestDNSAnswerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-04-01/testdnsanswer";
  const query: any = {
    ...(input.HostedZoneId !== undefined && { hostedzoneid: input.HostedZoneId }),
    ...(input.RecordName !== undefined && { recordname: input.RecordName }),
    ...(input.RecordType !== undefined && { recordtype: input.RecordType }),
    ...(input.ResolverIP !== undefined && { resolverip: input.ResolverIP }),
    ...(input.EDNS0ClientSubnetIP !== undefined && { edns0clientsubnetip: input.EDNS0ClientSubnetIP }),
    ...(input.EDNS0ClientSubnetMask !== undefined && { edns0clientsubnetmask: input.EDNS0ClientSubnetMask }),
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
  if (input.HealthCheckId !== undefined) {
    const labelValue: string = input.HealthCheckId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: HealthCheckId.");
    }
    resolvedPath = resolvedPath.replace("{HealthCheckId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: HealthCheckId.");
  }
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
    const node = new __XmlNode("Disabled").addChildNode(new __XmlText(String(input.Disabled))).withName("Disabled");
    bodyNode.addChildNode(node);
  }
  if (input.EnableSNI !== undefined) {
    const node = new __XmlNode("EnableSNI").addChildNode(new __XmlText(String(input.EnableSNI))).withName("EnableSNI");
    bodyNode.addChildNode(node);
  }
  if (input.FailureThreshold !== undefined) {
    const node = new __XmlNode("FailureThreshold")
      .addChildNode(new __XmlText(String(input.FailureThreshold)))
      .withName("FailureThreshold");
    bodyNode.addChildNode(node);
  }
  if (input.FullyQualifiedDomainName !== undefined) {
    const node = new __XmlNode("FullyQualifiedDomainName")
      .addChildNode(new __XmlText(input.FullyQualifiedDomainName))
      .withName("FullyQualifiedDomainName");
    bodyNode.addChildNode(node);
  }
  if (input.HealthCheckVersion !== undefined) {
    const node = new __XmlNode("HealthCheckVersion")
      .addChildNode(new __XmlText(String(input.HealthCheckVersion)))
      .withName("HealthCheckVersion");
    bodyNode.addChildNode(node);
  }
  if (input.HealthThreshold !== undefined) {
    const node = new __XmlNode("HealthThreshold")
      .addChildNode(new __XmlText(String(input.HealthThreshold)))
      .withName("HealthThreshold");
    bodyNode.addChildNode(node);
  }
  if (input.IPAddress !== undefined) {
    const node = new __XmlNode("IPAddress").addChildNode(new __XmlText(input.IPAddress)).withName("IPAddress");
    bodyNode.addChildNode(node);
  }
  if (input.InsufficientDataHealthStatus !== undefined) {
    const node = new __XmlNode("InsufficientDataHealthStatus")
      .addChildNode(new __XmlText(input.InsufficientDataHealthStatus))
      .withName("InsufficientDataHealthStatus");
    bodyNode.addChildNode(node);
  }
  if (input.Inverted !== undefined) {
    const node = new __XmlNode("Inverted").addChildNode(new __XmlText(String(input.Inverted))).withName("Inverted");
    bodyNode.addChildNode(node);
  }
  if (input.Port !== undefined) {
    const node = new __XmlNode("Port").addChildNode(new __XmlText(String(input.Port))).withName("Port");
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
    const node = new __XmlNode("ResourcePath").addChildNode(new __XmlText(input.ResourcePath)).withName("ResourcePath");
    bodyNode.addChildNode(node);
  }
  if (input.SearchString !== undefined) {
    const node = new __XmlNode("SearchString").addChildNode(new __XmlText(input.SearchString)).withName("SearchString");
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
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("UpdateHostedZoneCommentRequest");
  bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
  if (input.Comment !== undefined) {
    const node = new __XmlNode("ResourceDescription").addChildNode(new __XmlText(input.Comment)).withName("Comment");
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
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  if (input.Version !== undefined) {
    const labelValue: string = input.Version.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Version.");
    }
    resolvedPath = resolvedPath.replace("{Version}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Version.");
  }
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("UpdateTrafficPolicyCommentRequest");
  bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
  if (input.Comment !== undefined) {
    const node = new __XmlNode("TrafficPolicyComment").addChildNode(new __XmlText(input.Comment)).withName("Comment");
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
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("UpdateTrafficPolicyInstanceRequest");
  bodyNode.addAttribute("xmlns", "https://route53.amazonaws.com/doc/2013-04-01/");
  if (input.TTL !== undefined) {
    const node = new __XmlNode("TTL").addChildNode(new __XmlText(String(input.TTL))).withName("TTL");
    bodyNode.addChildNode(node);
  }
  if (input.TrafficPolicyId !== undefined) {
    const node = new __XmlNode("TrafficPolicyId")
      .addChildNode(new __XmlText(input.TrafficPolicyId))
      .withName("TrafficPolicyId");
    bodyNode.addChildNode(node);
  }
  if (input.TrafficPolicyVersion !== undefined) {
    const node = new __XmlNode("TrafficPolicyVersion")
      .addChildNode(new __XmlText(String(input.TrafficPolicyVersion)))
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
  const contents: ActivateKeySigningKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChangeInfo: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ChangeInfo"] !== undefined) {
    contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlActivateKeySigningKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateKeySigningKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.route53#ConcurrentModification":
      response = {
        ...(await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidKeySigningKeyStatus":
    case "com.amazonaws.route53#InvalidKeySigningKeyStatus":
      response = {
        ...(await deserializeAws_restXmlInvalidKeySigningKeyStatusResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidKMSArn":
    case "com.amazonaws.route53#InvalidKMSArn":
      response = {
        ...(await deserializeAws_restXmlInvalidKMSArnResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidSigningStatus":
    case "com.amazonaws.route53#InvalidSigningStatus":
      response = {
        ...(await deserializeAws_restXmlInvalidSigningStatusResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchKeySigningKey":
    case "com.amazonaws.route53#NoSuchKeySigningKey":
      response = {
        ...(await deserializeAws_restXmlNoSuchKeySigningKeyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlAssociateVPCWithHostedZoneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateVPCWithHostedZoneCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlAssociateVPCWithHostedZoneCommandError(output, context);
  }
  const contents: AssociateVPCWithHostedZoneCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChangeInfo: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ChangeInfo"] !== undefined) {
    contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlAssociateVPCWithHostedZoneCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateVPCWithHostedZoneCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingDomainExists":
    case "com.amazonaws.route53#ConflictingDomainExists":
      response = {
        ...(await deserializeAws_restXmlConflictingDomainExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidVPCId":
    case "com.amazonaws.route53#InvalidVPCId":
      response = {
        ...(await deserializeAws_restXmlInvalidVPCIdResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitsExceeded":
    case "com.amazonaws.route53#LimitsExceeded":
      response = {
        ...(await deserializeAws_restXmlLimitsExceededResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      response = {
        ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.route53#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restXmlNotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PriorRequestNotComplete":
    case "com.amazonaws.route53#PriorRequestNotComplete":
      response = {
        ...(await deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PublicZoneVPCAssociation":
    case "com.amazonaws.route53#PublicZoneVPCAssociation":
      response = {
        ...(await deserializeAws_restXmlPublicZoneVPCAssociationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlChangeResourceRecordSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChangeResourceRecordSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlChangeResourceRecordSetsCommandError(output, context);
  }
  const contents: ChangeResourceRecordSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChangeInfo: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ChangeInfo"] !== undefined) {
    contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlChangeResourceRecordSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChangeResourceRecordSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidChangeBatch":
    case "com.amazonaws.route53#InvalidChangeBatch":
      response = {
        ...(await deserializeAws_restXmlInvalidChangeBatchResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchHealthCheck":
    case "com.amazonaws.route53#NoSuchHealthCheck":
      response = {
        ...(await deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      response = {
        ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PriorRequestNotComplete":
    case "com.amazonaws.route53#PriorRequestNotComplete":
      response = {
        ...(await deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlChangeTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChangeTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlChangeTagsForResourceCommandError(output, context);
  }
  const contents: ChangeTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlChangeTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChangeTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchHealthCheck":
    case "com.amazonaws.route53#NoSuchHealthCheck":
      response = {
        ...(await deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      response = {
        ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PriorRequestNotComplete":
    case "com.amazonaws.route53#PriorRequestNotComplete":
      response = {
        ...(await deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53#ThrottlingException":
      response = {
        ...(await deserializeAws_restXmlThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlCreateHealthCheckCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHealthCheckCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateHealthCheckCommandError(output, context);
  }
  const contents: CreateHealthCheckCommandOutput = {
    $metadata: deserializeMetadata(output),
    HealthCheck: undefined,
    Location: undefined,
  };
  if (output.headers["location"] !== undefined) {
    contents.Location = output.headers["location"];
  }
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["HealthCheck"] !== undefined) {
    contents.HealthCheck = deserializeAws_restXmlHealthCheck(data["HealthCheck"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlCreateHealthCheckCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHealthCheckCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "HealthCheckAlreadyExists":
    case "com.amazonaws.route53#HealthCheckAlreadyExists":
      response = {
        ...(await deserializeAws_restXmlHealthCheckAlreadyExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyHealthChecks":
    case "com.amazonaws.route53#TooManyHealthChecks":
      response = {
        ...(await deserializeAws_restXmlTooManyHealthChecksResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlCreateHostedZoneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHostedZoneCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateHostedZoneCommandError(output, context);
  }
  const contents: CreateHostedZoneCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChangeInfo: undefined,
    DelegationSet: undefined,
    HostedZone: undefined,
    Location: undefined,
    VPC: undefined,
  };
  if (output.headers["location"] !== undefined) {
    contents.Location = output.headers["location"];
  }
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
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
  return Promise.resolve(contents);
};

const deserializeAws_restXmlCreateHostedZoneCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHostedZoneCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingDomainExists":
    case "com.amazonaws.route53#ConflictingDomainExists":
      response = {
        ...(await deserializeAws_restXmlConflictingDomainExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DelegationSetNotAvailable":
    case "com.amazonaws.route53#DelegationSetNotAvailable":
      response = {
        ...(await deserializeAws_restXmlDelegationSetNotAvailableResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DelegationSetNotReusable":
    case "com.amazonaws.route53#DelegationSetNotReusable":
      response = {
        ...(await deserializeAws_restXmlDelegationSetNotReusableResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "HostedZoneAlreadyExists":
    case "com.amazonaws.route53#HostedZoneAlreadyExists":
      response = {
        ...(await deserializeAws_restXmlHostedZoneAlreadyExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDomainName":
    case "com.amazonaws.route53#InvalidDomainName":
      response = {
        ...(await deserializeAws_restXmlInvalidDomainNameResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidVPCId":
    case "com.amazonaws.route53#InvalidVPCId":
      response = {
        ...(await deserializeAws_restXmlInvalidVPCIdResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchDelegationSet":
    case "com.amazonaws.route53#NoSuchDelegationSet":
      response = {
        ...(await deserializeAws_restXmlNoSuchDelegationSetResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyHostedZones":
    case "com.amazonaws.route53#TooManyHostedZones":
      response = {
        ...(await deserializeAws_restXmlTooManyHostedZonesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlCreateKeySigningKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKeySigningKeyCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateKeySigningKeyCommandError(output, context);
  }
  const contents: CreateKeySigningKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChangeInfo: undefined,
    KeySigningKey: undefined,
    Location: undefined,
  };
  if (output.headers["location"] !== undefined) {
    contents.Location = output.headers["location"];
  }
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ChangeInfo"] !== undefined) {
    contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
  }
  if (data["KeySigningKey"] !== undefined) {
    contents.KeySigningKey = deserializeAws_restXmlKeySigningKey(data["KeySigningKey"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlCreateKeySigningKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKeySigningKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.route53#ConcurrentModification":
      response = {
        ...(await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgument":
    case "com.amazonaws.route53#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidKeySigningKeyName":
    case "com.amazonaws.route53#InvalidKeySigningKeyName":
      response = {
        ...(await deserializeAws_restXmlInvalidKeySigningKeyNameResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidKeySigningKeyStatus":
    case "com.amazonaws.route53#InvalidKeySigningKeyStatus":
      response = {
        ...(await deserializeAws_restXmlInvalidKeySigningKeyStatusResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidKMSArn":
    case "com.amazonaws.route53#InvalidKMSArn":
      response = {
        ...(await deserializeAws_restXmlInvalidKMSArnResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidSigningStatus":
    case "com.amazonaws.route53#InvalidSigningStatus":
      response = {
        ...(await deserializeAws_restXmlInvalidSigningStatusResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KeySigningKeyAlreadyExists":
    case "com.amazonaws.route53#KeySigningKeyAlreadyExists":
      response = {
        ...(await deserializeAws_restXmlKeySigningKeyAlreadyExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      response = {
        ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyKeySigningKeys":
    case "com.amazonaws.route53#TooManyKeySigningKeys":
      response = {
        ...(await deserializeAws_restXmlTooManyKeySigningKeysResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlCreateQueryLoggingConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQueryLoggingConfigCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateQueryLoggingConfigCommandError(output, context);
  }
  const contents: CreateQueryLoggingConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    Location: undefined,
    QueryLoggingConfig: undefined,
  };
  if (output.headers["location"] !== undefined) {
    contents.Location = output.headers["location"];
  }
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["QueryLoggingConfig"] !== undefined) {
    contents.QueryLoggingConfig = deserializeAws_restXmlQueryLoggingConfig(data["QueryLoggingConfig"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlCreateQueryLoggingConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQueryLoggingConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.route53#ConcurrentModification":
      response = {
        ...(await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InsufficientCloudWatchLogsResourcePolicy":
    case "com.amazonaws.route53#InsufficientCloudWatchLogsResourcePolicy":
      response = {
        ...(await deserializeAws_restXmlInsufficientCloudWatchLogsResourcePolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchCloudWatchLogsLogGroup":
    case "com.amazonaws.route53#NoSuchCloudWatchLogsLogGroup":
      response = {
        ...(await deserializeAws_restXmlNoSuchCloudWatchLogsLogGroupResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      response = {
        ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "QueryLoggingConfigAlreadyExists":
    case "com.amazonaws.route53#QueryLoggingConfigAlreadyExists":
      response = {
        ...(await deserializeAws_restXmlQueryLoggingConfigAlreadyExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlCreateReusableDelegationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReusableDelegationSetCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateReusableDelegationSetCommandError(output, context);
  }
  const contents: CreateReusableDelegationSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    DelegationSet: undefined,
    Location: undefined,
  };
  if (output.headers["location"] !== undefined) {
    contents.Location = output.headers["location"];
  }
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["DelegationSet"] !== undefined) {
    contents.DelegationSet = deserializeAws_restXmlDelegationSet(data["DelegationSet"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlCreateReusableDelegationSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReusableDelegationSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DelegationSetAlreadyCreated":
    case "com.amazonaws.route53#DelegationSetAlreadyCreated":
      response = {
        ...(await deserializeAws_restXmlDelegationSetAlreadyCreatedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DelegationSetAlreadyReusable":
    case "com.amazonaws.route53#DelegationSetAlreadyReusable":
      response = {
        ...(await deserializeAws_restXmlDelegationSetAlreadyReusableResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DelegationSetNotAvailable":
    case "com.amazonaws.route53#DelegationSetNotAvailable":
      response = {
        ...(await deserializeAws_restXmlDelegationSetNotAvailableResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "HostedZoneNotFound":
    case "com.amazonaws.route53#HostedZoneNotFound":
      response = {
        ...(await deserializeAws_restXmlHostedZoneNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgument":
    case "com.amazonaws.route53#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitsExceeded":
    case "com.amazonaws.route53#LimitsExceeded":
      response = {
        ...(await deserializeAws_restXmlLimitsExceededResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlCreateTrafficPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrafficPolicyCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateTrafficPolicyCommandError(output, context);
  }
  const contents: CreateTrafficPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    Location: undefined,
    TrafficPolicy: undefined,
  };
  if (output.headers["location"] !== undefined) {
    contents.Location = output.headers["location"];
  }
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["TrafficPolicy"] !== undefined) {
    contents.TrafficPolicy = deserializeAws_restXmlTrafficPolicy(data["TrafficPolicy"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlCreateTrafficPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrafficPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTrafficPolicyDocument":
    case "com.amazonaws.route53#InvalidTrafficPolicyDocument":
      response = {
        ...(await deserializeAws_restXmlInvalidTrafficPolicyDocumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTrafficPolicies":
    case "com.amazonaws.route53#TooManyTrafficPolicies":
      response = {
        ...(await deserializeAws_restXmlTooManyTrafficPoliciesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TrafficPolicyAlreadyExists":
    case "com.amazonaws.route53#TrafficPolicyAlreadyExists":
      response = {
        ...(await deserializeAws_restXmlTrafficPolicyAlreadyExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlCreateTrafficPolicyInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrafficPolicyInstanceCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateTrafficPolicyInstanceCommandError(output, context);
  }
  const contents: CreateTrafficPolicyInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    Location: undefined,
    TrafficPolicyInstance: undefined,
  };
  if (output.headers["location"] !== undefined) {
    contents.Location = output.headers["location"];
  }
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["TrafficPolicyInstance"] !== undefined) {
    contents.TrafficPolicyInstance = deserializeAws_restXmlTrafficPolicyInstance(
      data["TrafficPolicyInstance"],
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlCreateTrafficPolicyInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrafficPolicyInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      response = {
        ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchTrafficPolicy":
    case "com.amazonaws.route53#NoSuchTrafficPolicy":
      response = {
        ...(await deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTrafficPolicyInstances":
    case "com.amazonaws.route53#TooManyTrafficPolicyInstances":
      response = {
        ...(await deserializeAws_restXmlTooManyTrafficPolicyInstancesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TrafficPolicyInstanceAlreadyExists":
    case "com.amazonaws.route53#TrafficPolicyInstanceAlreadyExists":
      response = {
        ...(await deserializeAws_restXmlTrafficPolicyInstanceAlreadyExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlCreateTrafficPolicyVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrafficPolicyVersionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateTrafficPolicyVersionCommandError(output, context);
  }
  const contents: CreateTrafficPolicyVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    Location: undefined,
    TrafficPolicy: undefined,
  };
  if (output.headers["location"] !== undefined) {
    contents.Location = output.headers["location"];
  }
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["TrafficPolicy"] !== undefined) {
    contents.TrafficPolicy = deserializeAws_restXmlTrafficPolicy(data["TrafficPolicy"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlCreateTrafficPolicyVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrafficPolicyVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.route53#ConcurrentModification":
      response = {
        ...(await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTrafficPolicyDocument":
    case "com.amazonaws.route53#InvalidTrafficPolicyDocument":
      response = {
        ...(await deserializeAws_restXmlInvalidTrafficPolicyDocumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchTrafficPolicy":
    case "com.amazonaws.route53#NoSuchTrafficPolicy":
      response = {
        ...(await deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTrafficPolicyVersionsForCurrentPolicy":
    case "com.amazonaws.route53#TooManyTrafficPolicyVersionsForCurrentPolicy":
      response = {
        ...(await deserializeAws_restXmlTooManyTrafficPolicyVersionsForCurrentPolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlCreateVPCAssociationAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVPCAssociationAuthorizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateVPCAssociationAuthorizationCommandError(output, context);
  }
  const contents: CreateVPCAssociationAuthorizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    HostedZoneId: undefined,
    VPC: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["HostedZoneId"] !== undefined) {
    contents.HostedZoneId = __expectString(data["HostedZoneId"]);
  }
  if (data["VPC"] !== undefined) {
    contents.VPC = deserializeAws_restXmlVPC(data["VPC"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlCreateVPCAssociationAuthorizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVPCAssociationAuthorizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.route53#ConcurrentModification":
      response = {
        ...(await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidVPCId":
    case "com.amazonaws.route53#InvalidVPCId":
      response = {
        ...(await deserializeAws_restXmlInvalidVPCIdResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      response = {
        ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyVPCAssociationAuthorizations":
    case "com.amazonaws.route53#TooManyVPCAssociationAuthorizations":
      response = {
        ...(await deserializeAws_restXmlTooManyVPCAssociationAuthorizationsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeactivateKeySigningKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateKeySigningKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeactivateKeySigningKeyCommandError(output, context);
  }
  const contents: DeactivateKeySigningKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChangeInfo: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ChangeInfo"] !== undefined) {
    contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeactivateKeySigningKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateKeySigningKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.route53#ConcurrentModification":
      response = {
        ...(await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidKeySigningKeyStatus":
    case "com.amazonaws.route53#InvalidKeySigningKeyStatus":
      response = {
        ...(await deserializeAws_restXmlInvalidKeySigningKeyStatusResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidSigningStatus":
    case "com.amazonaws.route53#InvalidSigningStatus":
      response = {
        ...(await deserializeAws_restXmlInvalidSigningStatusResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KeySigningKeyInParentDSRecord":
    case "com.amazonaws.route53#KeySigningKeyInParentDSRecord":
      response = {
        ...(await deserializeAws_restXmlKeySigningKeyInParentDSRecordResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KeySigningKeyInUse":
    case "com.amazonaws.route53#KeySigningKeyInUse":
      response = {
        ...(await deserializeAws_restXmlKeySigningKeyInUseResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchKeySigningKey":
    case "com.amazonaws.route53#NoSuchKeySigningKey":
      response = {
        ...(await deserializeAws_restXmlNoSuchKeySigningKeyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteHealthCheckCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHealthCheckCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteHealthCheckCommandError(output, context);
  }
  const contents: DeleteHealthCheckCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteHealthCheckCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHealthCheckCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "HealthCheckInUse":
    case "com.amazonaws.route53#HealthCheckInUse":
      response = {
        ...(await deserializeAws_restXmlHealthCheckInUseResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchHealthCheck":
    case "com.amazonaws.route53#NoSuchHealthCheck":
      response = {
        ...(await deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteHostedZoneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHostedZoneCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteHostedZoneCommandError(output, context);
  }
  const contents: DeleteHostedZoneCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChangeInfo: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ChangeInfo"] !== undefined) {
    contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteHostedZoneCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHostedZoneCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "HostedZoneNotEmpty":
    case "com.amazonaws.route53#HostedZoneNotEmpty":
      response = {
        ...(await deserializeAws_restXmlHostedZoneNotEmptyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDomainName":
    case "com.amazonaws.route53#InvalidDomainName":
      response = {
        ...(await deserializeAws_restXmlInvalidDomainNameResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      response = {
        ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PriorRequestNotComplete":
    case "com.amazonaws.route53#PriorRequestNotComplete":
      response = {
        ...(await deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteKeySigningKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKeySigningKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteKeySigningKeyCommandError(output, context);
  }
  const contents: DeleteKeySigningKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChangeInfo: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ChangeInfo"] !== undefined) {
    contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteKeySigningKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKeySigningKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.route53#ConcurrentModification":
      response = {
        ...(await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidKeySigningKeyStatus":
    case "com.amazonaws.route53#InvalidKeySigningKeyStatus":
      response = {
        ...(await deserializeAws_restXmlInvalidKeySigningKeyStatusResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidKMSArn":
    case "com.amazonaws.route53#InvalidKMSArn":
      response = {
        ...(await deserializeAws_restXmlInvalidKMSArnResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidSigningStatus":
    case "com.amazonaws.route53#InvalidSigningStatus":
      response = {
        ...(await deserializeAws_restXmlInvalidSigningStatusResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchKeySigningKey":
    case "com.amazonaws.route53#NoSuchKeySigningKey":
      response = {
        ...(await deserializeAws_restXmlNoSuchKeySigningKeyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteQueryLoggingConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQueryLoggingConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteQueryLoggingConfigCommandError(output, context);
  }
  const contents: DeleteQueryLoggingConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteQueryLoggingConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQueryLoggingConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.route53#ConcurrentModification":
      response = {
        ...(await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchQueryLoggingConfig":
    case "com.amazonaws.route53#NoSuchQueryLoggingConfig":
      response = {
        ...(await deserializeAws_restXmlNoSuchQueryLoggingConfigResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteReusableDelegationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReusableDelegationSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteReusableDelegationSetCommandError(output, context);
  }
  const contents: DeleteReusableDelegationSetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteReusableDelegationSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReusableDelegationSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DelegationSetInUse":
    case "com.amazonaws.route53#DelegationSetInUse":
      response = {
        ...(await deserializeAws_restXmlDelegationSetInUseResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DelegationSetNotReusable":
    case "com.amazonaws.route53#DelegationSetNotReusable":
      response = {
        ...(await deserializeAws_restXmlDelegationSetNotReusableResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchDelegationSet":
    case "com.amazonaws.route53#NoSuchDelegationSet":
      response = {
        ...(await deserializeAws_restXmlNoSuchDelegationSetResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteTrafficPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrafficPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteTrafficPolicyCommandError(output, context);
  }
  const contents: DeleteTrafficPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteTrafficPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrafficPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.route53#ConcurrentModification":
      response = {
        ...(await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchTrafficPolicy":
    case "com.amazonaws.route53#NoSuchTrafficPolicy":
      response = {
        ...(await deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TrafficPolicyInUse":
    case "com.amazonaws.route53#TrafficPolicyInUse":
      response = {
        ...(await deserializeAws_restXmlTrafficPolicyInUseResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteTrafficPolicyInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrafficPolicyInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteTrafficPolicyInstanceCommandError(output, context);
  }
  const contents: DeleteTrafficPolicyInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteTrafficPolicyInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrafficPolicyInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchTrafficPolicyInstance":
    case "com.amazonaws.route53#NoSuchTrafficPolicyInstance":
      response = {
        ...(await deserializeAws_restXmlNoSuchTrafficPolicyInstanceResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PriorRequestNotComplete":
    case "com.amazonaws.route53#PriorRequestNotComplete":
      response = {
        ...(await deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteVPCAssociationAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVPCAssociationAuthorizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteVPCAssociationAuthorizationCommandError(output, context);
  }
  const contents: DeleteVPCAssociationAuthorizationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteVPCAssociationAuthorizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVPCAssociationAuthorizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.route53#ConcurrentModification":
      response = {
        ...(await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidVPCId":
    case "com.amazonaws.route53#InvalidVPCId":
      response = {
        ...(await deserializeAws_restXmlInvalidVPCIdResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      response = {
        ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "VPCAssociationAuthorizationNotFound":
    case "com.amazonaws.route53#VPCAssociationAuthorizationNotFound":
      response = {
        ...(await deserializeAws_restXmlVPCAssociationAuthorizationNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDisableHostedZoneDNSSECCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableHostedZoneDNSSECCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDisableHostedZoneDNSSECCommandError(output, context);
  }
  const contents: DisableHostedZoneDNSSECCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChangeInfo: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ChangeInfo"] !== undefined) {
    contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDisableHostedZoneDNSSECCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableHostedZoneDNSSECCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.route53#ConcurrentModification":
      response = {
        ...(await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DNSSECNotFound":
    case "com.amazonaws.route53#DNSSECNotFound":
      response = {
        ...(await deserializeAws_restXmlDNSSECNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgument":
    case "com.amazonaws.route53#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidKeySigningKeyStatus":
    case "com.amazonaws.route53#InvalidKeySigningKeyStatus":
      response = {
        ...(await deserializeAws_restXmlInvalidKeySigningKeyStatusResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidKMSArn":
    case "com.amazonaws.route53#InvalidKMSArn":
      response = {
        ...(await deserializeAws_restXmlInvalidKMSArnResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KeySigningKeyInParentDSRecord":
    case "com.amazonaws.route53#KeySigningKeyInParentDSRecord":
      response = {
        ...(await deserializeAws_restXmlKeySigningKeyInParentDSRecordResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      response = {
        ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDisassociateVPCFromHostedZoneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateVPCFromHostedZoneCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDisassociateVPCFromHostedZoneCommandError(output, context);
  }
  const contents: DisassociateVPCFromHostedZoneCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChangeInfo: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ChangeInfo"] !== undefined) {
    contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDisassociateVPCFromHostedZoneCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateVPCFromHostedZoneCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidVPCId":
    case "com.amazonaws.route53#InvalidVPCId":
      response = {
        ...(await deserializeAws_restXmlInvalidVPCIdResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LastVPCAssociation":
    case "com.amazonaws.route53#LastVPCAssociation":
      response = {
        ...(await deserializeAws_restXmlLastVPCAssociationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      response = {
        ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "VPCAssociationNotFound":
    case "com.amazonaws.route53#VPCAssociationNotFound":
      response = {
        ...(await deserializeAws_restXmlVPCAssociationNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlEnableHostedZoneDNSSECCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableHostedZoneDNSSECCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlEnableHostedZoneDNSSECCommandError(output, context);
  }
  const contents: EnableHostedZoneDNSSECCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChangeInfo: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ChangeInfo"] !== undefined) {
    contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlEnableHostedZoneDNSSECCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableHostedZoneDNSSECCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.route53#ConcurrentModification":
      response = {
        ...(await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DNSSECNotFound":
    case "com.amazonaws.route53#DNSSECNotFound":
      response = {
        ...(await deserializeAws_restXmlDNSSECNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "HostedZonePartiallyDelegated":
    case "com.amazonaws.route53#HostedZonePartiallyDelegated":
      response = {
        ...(await deserializeAws_restXmlHostedZonePartiallyDelegatedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgument":
    case "com.amazonaws.route53#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidKeySigningKeyStatus":
    case "com.amazonaws.route53#InvalidKeySigningKeyStatus":
      response = {
        ...(await deserializeAws_restXmlInvalidKeySigningKeyStatusResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidKMSArn":
    case "com.amazonaws.route53#InvalidKMSArn":
      response = {
        ...(await deserializeAws_restXmlInvalidKMSArnResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KeySigningKeyWithActiveStatusNotFound":
    case "com.amazonaws.route53#KeySigningKeyWithActiveStatusNotFound":
      response = {
        ...(await deserializeAws_restXmlKeySigningKeyWithActiveStatusNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      response = {
        ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetAccountLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountLimitCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetAccountLimitCommandError(output, context);
  }
  const contents: GetAccountLimitCommandOutput = {
    $metadata: deserializeMetadata(output),
    Count: undefined,
    Limit: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Count"] !== undefined) {
    contents.Count = __strictParseLong(data["Count"]) as number;
  }
  if (data["Limit"] !== undefined) {
    contents.Limit = deserializeAws_restXmlAccountLimit(data["Limit"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetAccountLimitCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountLimitCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetChangeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChangeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetChangeCommandError(output, context);
  }
  const contents: GetChangeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ChangeInfo: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ChangeInfo"] !== undefined) {
    contents.ChangeInfo = deserializeAws_restXmlChangeInfo(data["ChangeInfo"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetChangeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChangeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchChange":
    case "com.amazonaws.route53#NoSuchChange":
      response = {
        ...(await deserializeAws_restXmlNoSuchChangeResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetCheckerIpRangesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCheckerIpRangesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetCheckerIpRangesCommandError(output, context);
  }
  const contents: GetCheckerIpRangesCommandOutput = {
    $metadata: deserializeMetadata(output),
    CheckerIpRanges: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CheckerIpRanges === "") {
    contents.CheckerIpRanges = [];
  }
  if (data["CheckerIpRanges"] !== undefined && data["CheckerIpRanges"]["member"] !== undefined) {
    contents.CheckerIpRanges = deserializeAws_restXmlCheckerIpRanges(
      __getArrayIfSingleItem(data["CheckerIpRanges"]["member"]),
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetCheckerIpRangesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCheckerIpRangesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetDNSSECCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDNSSECCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetDNSSECCommandError(output, context);
  }
  const contents: GetDNSSECCommandOutput = {
    $metadata: deserializeMetadata(output),
    KeySigningKeys: undefined,
    Status: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.KeySigningKeys === "") {
    contents.KeySigningKeys = [];
  }
  if (data["KeySigningKeys"] !== undefined && data["KeySigningKeys"]["member"] !== undefined) {
    contents.KeySigningKeys = deserializeAws_restXmlKeySigningKeys(
      __getArrayIfSingleItem(data["KeySigningKeys"]["member"]),
      context
    );
  }
  if (data["Status"] !== undefined) {
    contents.Status = deserializeAws_restXmlDNSSECStatus(data["Status"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetDNSSECCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDNSSECCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgument":
    case "com.amazonaws.route53#InvalidArgument":
      response = {
        ...(await deserializeAws_restXmlInvalidArgumentResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      response = {
        ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetGeoLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGeoLocationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetGeoLocationCommandError(output, context);
  }
  const contents: GetGeoLocationCommandOutput = {
    $metadata: deserializeMetadata(output),
    GeoLocationDetails: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["GeoLocationDetails"] !== undefined) {
    contents.GeoLocationDetails = deserializeAws_restXmlGeoLocationDetails(data["GeoLocationDetails"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetGeoLocationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGeoLocationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchGeoLocation":
    case "com.amazonaws.route53#NoSuchGeoLocation":
      response = {
        ...(await deserializeAws_restXmlNoSuchGeoLocationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetHealthCheckCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHealthCheckCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetHealthCheckCommandError(output, context);
  }
  const contents: GetHealthCheckCommandOutput = {
    $metadata: deserializeMetadata(output),
    HealthCheck: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["HealthCheck"] !== undefined) {
    contents.HealthCheck = deserializeAws_restXmlHealthCheck(data["HealthCheck"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetHealthCheckCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHealthCheckCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IncompatibleVersion":
    case "com.amazonaws.route53#IncompatibleVersion":
      response = {
        ...(await deserializeAws_restXmlIncompatibleVersionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchHealthCheck":
    case "com.amazonaws.route53#NoSuchHealthCheck":
      response = {
        ...(await deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetHealthCheckCountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHealthCheckCountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetHealthCheckCountCommandError(output, context);
  }
  const contents: GetHealthCheckCountCommandOutput = {
    $metadata: deserializeMetadata(output),
    HealthCheckCount: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["HealthCheckCount"] !== undefined) {
    contents.HealthCheckCount = __strictParseLong(data["HealthCheckCount"]) as number;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetHealthCheckCountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHealthCheckCountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetHealthCheckLastFailureReasonCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHealthCheckLastFailureReasonCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetHealthCheckLastFailureReasonCommandError(output, context);
  }
  const contents: GetHealthCheckLastFailureReasonCommandOutput = {
    $metadata: deserializeMetadata(output),
    HealthCheckObservations: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.HealthCheckObservations === "") {
    contents.HealthCheckObservations = [];
  }
  if (
    data["HealthCheckObservations"] !== undefined &&
    data["HealthCheckObservations"]["HealthCheckObservation"] !== undefined
  ) {
    contents.HealthCheckObservations = deserializeAws_restXmlHealthCheckObservations(
      __getArrayIfSingleItem(data["HealthCheckObservations"]["HealthCheckObservation"]),
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetHealthCheckLastFailureReasonCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHealthCheckLastFailureReasonCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchHealthCheck":
    case "com.amazonaws.route53#NoSuchHealthCheck":
      response = {
        ...(await deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetHealthCheckStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHealthCheckStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetHealthCheckStatusCommandError(output, context);
  }
  const contents: GetHealthCheckStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    HealthCheckObservations: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.HealthCheckObservations === "") {
    contents.HealthCheckObservations = [];
  }
  if (
    data["HealthCheckObservations"] !== undefined &&
    data["HealthCheckObservations"]["HealthCheckObservation"] !== undefined
  ) {
    contents.HealthCheckObservations = deserializeAws_restXmlHealthCheckObservations(
      __getArrayIfSingleItem(data["HealthCheckObservations"]["HealthCheckObservation"]),
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetHealthCheckStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHealthCheckStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchHealthCheck":
    case "com.amazonaws.route53#NoSuchHealthCheck":
      response = {
        ...(await deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetHostedZoneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHostedZoneCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetHostedZoneCommandError(output, context);
  }
  const contents: GetHostedZoneCommandOutput = {
    $metadata: deserializeMetadata(output),
    DelegationSet: undefined,
    HostedZone: undefined,
    VPCs: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["DelegationSet"] !== undefined) {
    contents.DelegationSet = deserializeAws_restXmlDelegationSet(data["DelegationSet"], context);
  }
  if (data["HostedZone"] !== undefined) {
    contents.HostedZone = deserializeAws_restXmlHostedZone(data["HostedZone"], context);
  }
  if (data.VPCs === "") {
    contents.VPCs = [];
  }
  if (data["VPCs"] !== undefined && data["VPCs"]["VPC"] !== undefined) {
    contents.VPCs = deserializeAws_restXmlVPCs(__getArrayIfSingleItem(data["VPCs"]["VPC"]), context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetHostedZoneCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHostedZoneCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      response = {
        ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetHostedZoneCountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHostedZoneCountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetHostedZoneCountCommandError(output, context);
  }
  const contents: GetHostedZoneCountCommandOutput = {
    $metadata: deserializeMetadata(output),
    HostedZoneCount: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["HostedZoneCount"] !== undefined) {
    contents.HostedZoneCount = __strictParseLong(data["HostedZoneCount"]) as number;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetHostedZoneCountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHostedZoneCountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetHostedZoneLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHostedZoneLimitCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetHostedZoneLimitCommandError(output, context);
  }
  const contents: GetHostedZoneLimitCommandOutput = {
    $metadata: deserializeMetadata(output),
    Count: undefined,
    Limit: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Count"] !== undefined) {
    contents.Count = __strictParseLong(data["Count"]) as number;
  }
  if (data["Limit"] !== undefined) {
    contents.Limit = deserializeAws_restXmlHostedZoneLimit(data["Limit"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetHostedZoneLimitCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHostedZoneLimitCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "HostedZoneNotPrivate":
    case "com.amazonaws.route53#HostedZoneNotPrivate":
      response = {
        ...(await deserializeAws_restXmlHostedZoneNotPrivateResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      response = {
        ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetQueryLoggingConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryLoggingConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetQueryLoggingConfigCommandError(output, context);
  }
  const contents: GetQueryLoggingConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    QueryLoggingConfig: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["QueryLoggingConfig"] !== undefined) {
    contents.QueryLoggingConfig = deserializeAws_restXmlQueryLoggingConfig(data["QueryLoggingConfig"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetQueryLoggingConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryLoggingConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchQueryLoggingConfig":
    case "com.amazonaws.route53#NoSuchQueryLoggingConfig":
      response = {
        ...(await deserializeAws_restXmlNoSuchQueryLoggingConfigResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetReusableDelegationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReusableDelegationSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetReusableDelegationSetCommandError(output, context);
  }
  const contents: GetReusableDelegationSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    DelegationSet: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["DelegationSet"] !== undefined) {
    contents.DelegationSet = deserializeAws_restXmlDelegationSet(data["DelegationSet"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetReusableDelegationSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReusableDelegationSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DelegationSetNotReusable":
    case "com.amazonaws.route53#DelegationSetNotReusable":
      response = {
        ...(await deserializeAws_restXmlDelegationSetNotReusableResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchDelegationSet":
    case "com.amazonaws.route53#NoSuchDelegationSet":
      response = {
        ...(await deserializeAws_restXmlNoSuchDelegationSetResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetReusableDelegationSetLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReusableDelegationSetLimitCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetReusableDelegationSetLimitCommandError(output, context);
  }
  const contents: GetReusableDelegationSetLimitCommandOutput = {
    $metadata: deserializeMetadata(output),
    Count: undefined,
    Limit: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Count"] !== undefined) {
    contents.Count = __strictParseLong(data["Count"]) as number;
  }
  if (data["Limit"] !== undefined) {
    contents.Limit = deserializeAws_restXmlReusableDelegationSetLimit(data["Limit"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetReusableDelegationSetLimitCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReusableDelegationSetLimitCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchDelegationSet":
    case "com.amazonaws.route53#NoSuchDelegationSet":
      response = {
        ...(await deserializeAws_restXmlNoSuchDelegationSetResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetTrafficPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrafficPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetTrafficPolicyCommandError(output, context);
  }
  const contents: GetTrafficPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    TrafficPolicy: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["TrafficPolicy"] !== undefined) {
    contents.TrafficPolicy = deserializeAws_restXmlTrafficPolicy(data["TrafficPolicy"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetTrafficPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrafficPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchTrafficPolicy":
    case "com.amazonaws.route53#NoSuchTrafficPolicy":
      response = {
        ...(await deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetTrafficPolicyInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrafficPolicyInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetTrafficPolicyInstanceCommandError(output, context);
  }
  const contents: GetTrafficPolicyInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    TrafficPolicyInstance: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["TrafficPolicyInstance"] !== undefined) {
    contents.TrafficPolicyInstance = deserializeAws_restXmlTrafficPolicyInstance(
      data["TrafficPolicyInstance"],
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetTrafficPolicyInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrafficPolicyInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchTrafficPolicyInstance":
    case "com.amazonaws.route53#NoSuchTrafficPolicyInstance":
      response = {
        ...(await deserializeAws_restXmlNoSuchTrafficPolicyInstanceResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetTrafficPolicyInstanceCountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrafficPolicyInstanceCountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetTrafficPolicyInstanceCountCommandError(output, context);
  }
  const contents: GetTrafficPolicyInstanceCountCommandOutput = {
    $metadata: deserializeMetadata(output),
    TrafficPolicyInstanceCount: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["TrafficPolicyInstanceCount"] !== undefined) {
    contents.TrafficPolicyInstanceCount = __strictParseInt32(data["TrafficPolicyInstanceCount"]) as number;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetTrafficPolicyInstanceCountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrafficPolicyInstanceCountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListGeoLocationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGeoLocationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListGeoLocationsCommandError(output, context);
  }
  const contents: ListGeoLocationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    GeoLocationDetailsList: undefined,
    IsTruncated: undefined,
    MaxItems: undefined,
    NextContinentCode: undefined,
    NextCountryCode: undefined,
    NextSubdivisionCode: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GeoLocationDetailsList === "") {
    contents.GeoLocationDetailsList = [];
  }
  if (
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
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListGeoLocationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGeoLocationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListHealthChecksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHealthChecksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListHealthChecksCommandError(output, context);
  }
  const contents: ListHealthChecksCommandOutput = {
    $metadata: deserializeMetadata(output),
    HealthChecks: undefined,
    IsTruncated: undefined,
    Marker: undefined,
    MaxItems: undefined,
    NextMarker: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.HealthChecks === "") {
    contents.HealthChecks = [];
  }
  if (data["HealthChecks"] !== undefined && data["HealthChecks"]["HealthCheck"] !== undefined) {
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
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListHealthChecksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHealthChecksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IncompatibleVersion":
    case "com.amazonaws.route53#IncompatibleVersion":
      response = {
        ...(await deserializeAws_restXmlIncompatibleVersionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListHostedZonesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHostedZonesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListHostedZonesCommandError(output, context);
  }
  const contents: ListHostedZonesCommandOutput = {
    $metadata: deserializeMetadata(output),
    HostedZones: undefined,
    IsTruncated: undefined,
    Marker: undefined,
    MaxItems: undefined,
    NextMarker: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.HostedZones === "") {
    contents.HostedZones = [];
  }
  if (data["HostedZones"] !== undefined && data["HostedZones"]["HostedZone"] !== undefined) {
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
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListHostedZonesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHostedZonesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DelegationSetNotReusable":
    case "com.amazonaws.route53#DelegationSetNotReusable":
      response = {
        ...(await deserializeAws_restXmlDelegationSetNotReusableResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchDelegationSet":
    case "com.amazonaws.route53#NoSuchDelegationSet":
      response = {
        ...(await deserializeAws_restXmlNoSuchDelegationSetResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListHostedZonesByNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHostedZonesByNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListHostedZonesByNameCommandError(output, context);
  }
  const contents: ListHostedZonesByNameCommandOutput = {
    $metadata: deserializeMetadata(output),
    DNSName: undefined,
    HostedZoneId: undefined,
    HostedZones: undefined,
    IsTruncated: undefined,
    MaxItems: undefined,
    NextDNSName: undefined,
    NextHostedZoneId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["DNSName"] !== undefined) {
    contents.DNSName = __expectString(data["DNSName"]);
  }
  if (data["HostedZoneId"] !== undefined) {
    contents.HostedZoneId = __expectString(data["HostedZoneId"]);
  }
  if (data.HostedZones === "") {
    contents.HostedZones = [];
  }
  if (data["HostedZones"] !== undefined && data["HostedZones"]["HostedZone"] !== undefined) {
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
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListHostedZonesByNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHostedZonesByNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidDomainName":
    case "com.amazonaws.route53#InvalidDomainName":
      response = {
        ...(await deserializeAws_restXmlInvalidDomainNameResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListHostedZonesByVPCCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHostedZonesByVPCCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListHostedZonesByVPCCommandError(output, context);
  }
  const contents: ListHostedZonesByVPCCommandOutput = {
    $metadata: deserializeMetadata(output),
    HostedZoneSummaries: undefined,
    MaxItems: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.HostedZoneSummaries === "") {
    contents.HostedZoneSummaries = [];
  }
  if (data["HostedZoneSummaries"] !== undefined && data["HostedZoneSummaries"]["HostedZoneSummary"] !== undefined) {
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
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListHostedZonesByVPCCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHostedZonesByVPCCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPaginationToken":
    case "com.amazonaws.route53#InvalidPaginationToken":
      response = {
        ...(await deserializeAws_restXmlInvalidPaginationTokenResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListQueryLoggingConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueryLoggingConfigsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListQueryLoggingConfigsCommandError(output, context);
  }
  const contents: ListQueryLoggingConfigsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    QueryLoggingConfigs: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["NextToken"] !== undefined) {
    contents.NextToken = __expectString(data["NextToken"]);
  }
  if (data.QueryLoggingConfigs === "") {
    contents.QueryLoggingConfigs = [];
  }
  if (data["QueryLoggingConfigs"] !== undefined && data["QueryLoggingConfigs"]["QueryLoggingConfig"] !== undefined) {
    contents.QueryLoggingConfigs = deserializeAws_restXmlQueryLoggingConfigs(
      __getArrayIfSingleItem(data["QueryLoggingConfigs"]["QueryLoggingConfig"]),
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListQueryLoggingConfigsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueryLoggingConfigsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPaginationToken":
    case "com.amazonaws.route53#InvalidPaginationToken":
      response = {
        ...(await deserializeAws_restXmlInvalidPaginationTokenResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      response = {
        ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListResourceRecordSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceRecordSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListResourceRecordSetsCommandError(output, context);
  }
  const contents: ListResourceRecordSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    IsTruncated: undefined,
    MaxItems: undefined,
    NextRecordIdentifier: undefined,
    NextRecordName: undefined,
    NextRecordType: undefined,
    ResourceRecordSets: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
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
  }
  if (data["ResourceRecordSets"] !== undefined && data["ResourceRecordSets"]["ResourceRecordSet"] !== undefined) {
    contents.ResourceRecordSets = deserializeAws_restXmlResourceRecordSets(
      __getArrayIfSingleItem(data["ResourceRecordSets"]["ResourceRecordSet"]),
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListResourceRecordSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceRecordSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      response = {
        ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListReusableDelegationSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReusableDelegationSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListReusableDelegationSetsCommandError(output, context);
  }
  const contents: ListReusableDelegationSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    DelegationSets: undefined,
    IsTruncated: undefined,
    Marker: undefined,
    MaxItems: undefined,
    NextMarker: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DelegationSets === "") {
    contents.DelegationSets = [];
  }
  if (data["DelegationSets"] !== undefined && data["DelegationSets"]["DelegationSet"] !== undefined) {
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
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListReusableDelegationSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReusableDelegationSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    ResourceTagSet: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ResourceTagSet"] !== undefined) {
    contents.ResourceTagSet = deserializeAws_restXmlResourceTagSet(data["ResourceTagSet"], context);
  }
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchHealthCheck":
    case "com.amazonaws.route53#NoSuchHealthCheck":
      response = {
        ...(await deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      response = {
        ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PriorRequestNotComplete":
    case "com.amazonaws.route53#PriorRequestNotComplete":
      response = {
        ...(await deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53#ThrottlingException":
      response = {
        ...(await deserializeAws_restXmlThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListTagsForResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListTagsForResourcesCommandError(output, context);
  }
  const contents: ListTagsForResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ResourceTagSets: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ResourceTagSets === "") {
    contents.ResourceTagSets = [];
  }
  if (data["ResourceTagSets"] !== undefined && data["ResourceTagSets"]["ResourceTagSet"] !== undefined) {
    contents.ResourceTagSets = deserializeAws_restXmlResourceTagSetList(
      __getArrayIfSingleItem(data["ResourceTagSets"]["ResourceTagSet"]),
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListTagsForResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchHealthCheck":
    case "com.amazonaws.route53#NoSuchHealthCheck":
      response = {
        ...(await deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      response = {
        ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PriorRequestNotComplete":
    case "com.amazonaws.route53#PriorRequestNotComplete":
      response = {
        ...(await deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53#ThrottlingException":
      response = {
        ...(await deserializeAws_restXmlThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListTrafficPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrafficPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListTrafficPoliciesCommandError(output, context);
  }
  const contents: ListTrafficPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    IsTruncated: undefined,
    MaxItems: undefined,
    TrafficPolicyIdMarker: undefined,
    TrafficPolicySummaries: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
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
  }
  if (
    data["TrafficPolicySummaries"] !== undefined &&
    data["TrafficPolicySummaries"]["TrafficPolicySummary"] !== undefined
  ) {
    contents.TrafficPolicySummaries = deserializeAws_restXmlTrafficPolicySummaries(
      __getArrayIfSingleItem(data["TrafficPolicySummaries"]["TrafficPolicySummary"]),
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListTrafficPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrafficPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListTrafficPolicyInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrafficPolicyInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListTrafficPolicyInstancesCommandError(output, context);
  }
  const contents: ListTrafficPolicyInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    HostedZoneIdMarker: undefined,
    IsTruncated: undefined,
    MaxItems: undefined,
    TrafficPolicyInstanceNameMarker: undefined,
    TrafficPolicyInstanceTypeMarker: undefined,
    TrafficPolicyInstances: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
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
  }
  if (
    data["TrafficPolicyInstances"] !== undefined &&
    data["TrafficPolicyInstances"]["TrafficPolicyInstance"] !== undefined
  ) {
    contents.TrafficPolicyInstances = deserializeAws_restXmlTrafficPolicyInstances(
      __getArrayIfSingleItem(data["TrafficPolicyInstances"]["TrafficPolicyInstance"]),
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListTrafficPolicyInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrafficPolicyInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchTrafficPolicyInstance":
    case "com.amazonaws.route53#NoSuchTrafficPolicyInstance":
      response = {
        ...(await deserializeAws_restXmlNoSuchTrafficPolicyInstanceResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListTrafficPolicyInstancesByHostedZoneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrafficPolicyInstancesByHostedZoneCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListTrafficPolicyInstancesByHostedZoneCommandError(output, context);
  }
  const contents: ListTrafficPolicyInstancesByHostedZoneCommandOutput = {
    $metadata: deserializeMetadata(output),
    IsTruncated: undefined,
    MaxItems: undefined,
    TrafficPolicyInstanceNameMarker: undefined,
    TrafficPolicyInstanceTypeMarker: undefined,
    TrafficPolicyInstances: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
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
  }
  if (
    data["TrafficPolicyInstances"] !== undefined &&
    data["TrafficPolicyInstances"]["TrafficPolicyInstance"] !== undefined
  ) {
    contents.TrafficPolicyInstances = deserializeAws_restXmlTrafficPolicyInstances(
      __getArrayIfSingleItem(data["TrafficPolicyInstances"]["TrafficPolicyInstance"]),
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListTrafficPolicyInstancesByHostedZoneCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrafficPolicyInstancesByHostedZoneCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      response = {
        ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchTrafficPolicyInstance":
    case "com.amazonaws.route53#NoSuchTrafficPolicyInstance":
      response = {
        ...(await deserializeAws_restXmlNoSuchTrafficPolicyInstanceResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListTrafficPolicyInstancesByPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrafficPolicyInstancesByPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListTrafficPolicyInstancesByPolicyCommandError(output, context);
  }
  const contents: ListTrafficPolicyInstancesByPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    HostedZoneIdMarker: undefined,
    IsTruncated: undefined,
    MaxItems: undefined,
    TrafficPolicyInstanceNameMarker: undefined,
    TrafficPolicyInstanceTypeMarker: undefined,
    TrafficPolicyInstances: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
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
  }
  if (
    data["TrafficPolicyInstances"] !== undefined &&
    data["TrafficPolicyInstances"]["TrafficPolicyInstance"] !== undefined
  ) {
    contents.TrafficPolicyInstances = deserializeAws_restXmlTrafficPolicyInstances(
      __getArrayIfSingleItem(data["TrafficPolicyInstances"]["TrafficPolicyInstance"]),
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListTrafficPolicyInstancesByPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrafficPolicyInstancesByPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchTrafficPolicy":
    case "com.amazonaws.route53#NoSuchTrafficPolicy":
      response = {
        ...(await deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchTrafficPolicyInstance":
    case "com.amazonaws.route53#NoSuchTrafficPolicyInstance":
      response = {
        ...(await deserializeAws_restXmlNoSuchTrafficPolicyInstanceResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListTrafficPolicyVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrafficPolicyVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListTrafficPolicyVersionsCommandError(output, context);
  }
  const contents: ListTrafficPolicyVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    IsTruncated: undefined,
    MaxItems: undefined,
    TrafficPolicies: undefined,
    TrafficPolicyVersionMarker: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(data["IsTruncated"]);
  }
  if (data["MaxItems"] !== undefined) {
    contents.MaxItems = __strictParseInt32(data["MaxItems"]) as number;
  }
  if (data.TrafficPolicies === "") {
    contents.TrafficPolicies = [];
  }
  if (data["TrafficPolicies"] !== undefined && data["TrafficPolicies"]["TrafficPolicy"] !== undefined) {
    contents.TrafficPolicies = deserializeAws_restXmlTrafficPolicies(
      __getArrayIfSingleItem(data["TrafficPolicies"]["TrafficPolicy"]),
      context
    );
  }
  if (data["TrafficPolicyVersionMarker"] !== undefined) {
    contents.TrafficPolicyVersionMarker = __expectString(data["TrafficPolicyVersionMarker"]);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListTrafficPolicyVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrafficPolicyVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchTrafficPolicy":
    case "com.amazonaws.route53#NoSuchTrafficPolicy":
      response = {
        ...(await deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListVPCAssociationAuthorizationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVPCAssociationAuthorizationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListVPCAssociationAuthorizationsCommandError(output, context);
  }
  const contents: ListVPCAssociationAuthorizationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    HostedZoneId: undefined,
    NextToken: undefined,
    VPCs: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["HostedZoneId"] !== undefined) {
    contents.HostedZoneId = __expectString(data["HostedZoneId"]);
  }
  if (data["NextToken"] !== undefined) {
    contents.NextToken = __expectString(data["NextToken"]);
  }
  if (data.VPCs === "") {
    contents.VPCs = [];
  }
  if (data["VPCs"] !== undefined && data["VPCs"]["VPC"] !== undefined) {
    contents.VPCs = deserializeAws_restXmlVPCs(__getArrayIfSingleItem(data["VPCs"]["VPC"]), context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListVPCAssociationAuthorizationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVPCAssociationAuthorizationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPaginationToken":
    case "com.amazonaws.route53#InvalidPaginationToken":
      response = {
        ...(await deserializeAws_restXmlInvalidPaginationTokenResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      response = {
        ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlTestDNSAnswerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestDNSAnswerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlTestDNSAnswerCommandError(output, context);
  }
  const contents: TestDNSAnswerCommandOutput = {
    $metadata: deserializeMetadata(output),
    Nameserver: undefined,
    Protocol: undefined,
    RecordData: undefined,
    RecordName: undefined,
    RecordType: undefined,
    ResponseCode: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Nameserver"] !== undefined) {
    contents.Nameserver = __expectString(data["Nameserver"]);
  }
  if (data["Protocol"] !== undefined) {
    contents.Protocol = __expectString(data["Protocol"]);
  }
  if (data.RecordData === "") {
    contents.RecordData = [];
  }
  if (data["RecordData"] !== undefined && data["RecordData"]["RecordDataEntry"] !== undefined) {
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
  return Promise.resolve(contents);
};

const deserializeAws_restXmlTestDNSAnswerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestDNSAnswerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      response = {
        ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlUpdateHealthCheckCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHealthCheckCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUpdateHealthCheckCommandError(output, context);
  }
  const contents: UpdateHealthCheckCommandOutput = {
    $metadata: deserializeMetadata(output),
    HealthCheck: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["HealthCheck"] !== undefined) {
    contents.HealthCheck = deserializeAws_restXmlHealthCheck(data["HealthCheck"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlUpdateHealthCheckCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHealthCheckCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "HealthCheckVersionMismatch":
    case "com.amazonaws.route53#HealthCheckVersionMismatch":
      response = {
        ...(await deserializeAws_restXmlHealthCheckVersionMismatchResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchHealthCheck":
    case "com.amazonaws.route53#NoSuchHealthCheck":
      response = {
        ...(await deserializeAws_restXmlNoSuchHealthCheckResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlUpdateHostedZoneCommentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHostedZoneCommentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUpdateHostedZoneCommentCommandError(output, context);
  }
  const contents: UpdateHostedZoneCommentCommandOutput = {
    $metadata: deserializeMetadata(output),
    HostedZone: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["HostedZone"] !== undefined) {
    contents.HostedZone = deserializeAws_restXmlHostedZone(data["HostedZone"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlUpdateHostedZoneCommentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHostedZoneCommentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchHostedZone":
    case "com.amazonaws.route53#NoSuchHostedZone":
      response = {
        ...(await deserializeAws_restXmlNoSuchHostedZoneResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlUpdateTrafficPolicyCommentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrafficPolicyCommentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUpdateTrafficPolicyCommentCommandError(output, context);
  }
  const contents: UpdateTrafficPolicyCommentCommandOutput = {
    $metadata: deserializeMetadata(output),
    TrafficPolicy: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["TrafficPolicy"] !== undefined) {
    contents.TrafficPolicy = deserializeAws_restXmlTrafficPolicy(data["TrafficPolicy"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlUpdateTrafficPolicyCommentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrafficPolicyCommentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.route53#ConcurrentModification":
      response = {
        ...(await deserializeAws_restXmlConcurrentModificationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchTrafficPolicy":
    case "com.amazonaws.route53#NoSuchTrafficPolicy":
      response = {
        ...(await deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlUpdateTrafficPolicyInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrafficPolicyInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUpdateTrafficPolicyInstanceCommandError(output, context);
  }
  const contents: UpdateTrafficPolicyInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    TrafficPolicyInstance: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["TrafficPolicyInstance"] !== undefined) {
    contents.TrafficPolicyInstance = deserializeAws_restXmlTrafficPolicyInstance(
      data["TrafficPolicyInstance"],
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlUpdateTrafficPolicyInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrafficPolicyInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingTypes":
    case "com.amazonaws.route53#ConflictingTypes":
      response = {
        ...(await deserializeAws_restXmlConflictingTypesResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53#InvalidInput":
      response = {
        ...(await deserializeAws_restXmlInvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchTrafficPolicy":
    case "com.amazonaws.route53#NoSuchTrafficPolicy":
      response = {
        ...(await deserializeAws_restXmlNoSuchTrafficPolicyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchTrafficPolicyInstance":
    case "com.amazonaws.route53#NoSuchTrafficPolicyInstance":
      response = {
        ...(await deserializeAws_restXmlNoSuchTrafficPolicyInstanceResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PriorRequestNotComplete":
    case "com.amazonaws.route53#PriorRequestNotComplete":
      response = {
        ...(await deserializeAws_restXmlPriorRequestNotCompleteResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restXmlConcurrentModificationResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModification> => {
  const contents: ConcurrentModification = {
    name: "ConcurrentModification",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlConflictingDomainExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictingDomainExists> => {
  const contents: ConflictingDomainExists = {
    name: "ConflictingDomainExists",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlConflictingTypesResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictingTypes> => {
  const contents: ConflictingTypes = {
    name: "ConflictingTypes",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlDelegationSetAlreadyCreatedResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DelegationSetAlreadyCreated> => {
  const contents: DelegationSetAlreadyCreated = {
    name: "DelegationSetAlreadyCreated",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlDelegationSetAlreadyReusableResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DelegationSetAlreadyReusable> => {
  const contents: DelegationSetAlreadyReusable = {
    name: "DelegationSetAlreadyReusable",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlDelegationSetInUseResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DelegationSetInUse> => {
  const contents: DelegationSetInUse = {
    name: "DelegationSetInUse",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlDelegationSetNotAvailableResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DelegationSetNotAvailable> => {
  const contents: DelegationSetNotAvailable = {
    name: "DelegationSetNotAvailable",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlDelegationSetNotReusableResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DelegationSetNotReusable> => {
  const contents: DelegationSetNotReusable = {
    name: "DelegationSetNotReusable",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlDNSSECNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DNSSECNotFound> => {
  const contents: DNSSECNotFound = {
    name: "DNSSECNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlHealthCheckAlreadyExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HealthCheckAlreadyExists> => {
  const contents: HealthCheckAlreadyExists = {
    name: "HealthCheckAlreadyExists",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlHealthCheckInUseResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HealthCheckInUse> => {
  const contents: HealthCheckInUse = {
    name: "HealthCheckInUse",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlHealthCheckVersionMismatchResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HealthCheckVersionMismatch> => {
  const contents: HealthCheckVersionMismatch = {
    name: "HealthCheckVersionMismatch",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlHostedZoneAlreadyExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HostedZoneAlreadyExists> => {
  const contents: HostedZoneAlreadyExists = {
    name: "HostedZoneAlreadyExists",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlHostedZoneNotEmptyResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HostedZoneNotEmpty> => {
  const contents: HostedZoneNotEmpty = {
    name: "HostedZoneNotEmpty",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlHostedZoneNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HostedZoneNotFound> => {
  const contents: HostedZoneNotFound = {
    name: "HostedZoneNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlHostedZoneNotPrivateResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HostedZoneNotPrivate> => {
  const contents: HostedZoneNotPrivate = {
    name: "HostedZoneNotPrivate",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlHostedZonePartiallyDelegatedResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HostedZonePartiallyDelegated> => {
  const contents: HostedZonePartiallyDelegated = {
    name: "HostedZonePartiallyDelegated",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlIncompatibleVersionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncompatibleVersion> => {
  const contents: IncompatibleVersion = {
    name: "IncompatibleVersion",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlInsufficientCloudWatchLogsResourcePolicyResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientCloudWatchLogsResourcePolicy> => {
  const contents: InsufficientCloudWatchLogsResourcePolicy = {
    name: "InsufficientCloudWatchLogsResourcePolicy",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlInvalidArgumentResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArgument> => {
  const contents: InvalidArgument = {
    name: "InvalidArgument",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlInvalidChangeBatchResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidChangeBatch> => {
  const contents: InvalidChangeBatch = {
    name: "InvalidChangeBatch",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
    messages: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  if (data.messages === "") {
    contents.messages = [];
  }
  if (data["messages"] !== undefined && data["messages"]["Message"] !== undefined) {
    contents.messages = deserializeAws_restXmlErrorMessages(
      __getArrayIfSingleItem(data["messages"]["Message"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlInvalidDomainNameResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDomainName> => {
  const contents: InvalidDomainName = {
    name: "InvalidDomainName",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlInvalidInputResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInput> => {
  const contents: InvalidInput = {
    name: "InvalidInput",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlInvalidKeySigningKeyNameResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidKeySigningKeyName> => {
  const contents: InvalidKeySigningKeyName = {
    name: "InvalidKeySigningKeyName",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlInvalidKeySigningKeyStatusResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidKeySigningKeyStatus> => {
  const contents: InvalidKeySigningKeyStatus = {
    name: "InvalidKeySigningKeyStatus",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlInvalidKMSArnResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidKMSArn> => {
  const contents: InvalidKMSArn = {
    name: "InvalidKMSArn",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlInvalidPaginationTokenResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPaginationToken> => {
  const contents: InvalidPaginationToken = {
    name: "InvalidPaginationToken",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlInvalidSigningStatusResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSigningStatus> => {
  const contents: InvalidSigningStatus = {
    name: "InvalidSigningStatus",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlInvalidTrafficPolicyDocumentResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTrafficPolicyDocument> => {
  const contents: InvalidTrafficPolicyDocument = {
    name: "InvalidTrafficPolicyDocument",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlInvalidVPCIdResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidVPCId> => {
  const contents: InvalidVPCId = {
    name: "InvalidVPCId",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlKeySigningKeyAlreadyExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KeySigningKeyAlreadyExists> => {
  const contents: KeySigningKeyAlreadyExists = {
    name: "KeySigningKeyAlreadyExists",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlKeySigningKeyInParentDSRecordResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KeySigningKeyInParentDSRecord> => {
  const contents: KeySigningKeyInParentDSRecord = {
    name: "KeySigningKeyInParentDSRecord",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlKeySigningKeyInUseResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KeySigningKeyInUse> => {
  const contents: KeySigningKeyInUse = {
    name: "KeySigningKeyInUse",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlKeySigningKeyWithActiveStatusNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KeySigningKeyWithActiveStatusNotFound> => {
  const contents: KeySigningKeyWithActiveStatusNotFound = {
    name: "KeySigningKeyWithActiveStatusNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlLastVPCAssociationResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LastVPCAssociation> => {
  const contents: LastVPCAssociation = {
    name: "LastVPCAssociation",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlLimitsExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitsExceeded> => {
  const contents: LimitsExceeded = {
    name: "LimitsExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlNoSuchChangeResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchChange> => {
  const contents: NoSuchChange = {
    name: "NoSuchChange",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlNoSuchCloudWatchLogsLogGroupResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchCloudWatchLogsLogGroup> => {
  const contents: NoSuchCloudWatchLogsLogGroup = {
    name: "NoSuchCloudWatchLogsLogGroup",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlNoSuchDelegationSetResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchDelegationSet> => {
  const contents: NoSuchDelegationSet = {
    name: "NoSuchDelegationSet",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlNoSuchGeoLocationResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchGeoLocation> => {
  const contents: NoSuchGeoLocation = {
    name: "NoSuchGeoLocation",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlNoSuchHealthCheckResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchHealthCheck> => {
  const contents: NoSuchHealthCheck = {
    name: "NoSuchHealthCheck",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlNoSuchHostedZoneResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchHostedZone> => {
  const contents: NoSuchHostedZone = {
    name: "NoSuchHostedZone",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlNoSuchKeySigningKeyResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchKeySigningKey> => {
  const contents: NoSuchKeySigningKey = {
    name: "NoSuchKeySigningKey",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlNoSuchQueryLoggingConfigResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchQueryLoggingConfig> => {
  const contents: NoSuchQueryLoggingConfig = {
    name: "NoSuchQueryLoggingConfig",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlNoSuchTrafficPolicyResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchTrafficPolicy> => {
  const contents: NoSuchTrafficPolicy = {
    name: "NoSuchTrafficPolicy",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlNoSuchTrafficPolicyInstanceResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchTrafficPolicyInstance> => {
  const contents: NoSuchTrafficPolicyInstance = {
    name: "NoSuchTrafficPolicyInstance",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlNotAuthorizedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotAuthorizedException> => {
  const contents: NotAuthorizedException = {
    name: "NotAuthorizedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlPriorRequestNotCompleteResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PriorRequestNotComplete> => {
  const contents: PriorRequestNotComplete = {
    name: "PriorRequestNotComplete",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlPublicZoneVPCAssociationResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PublicZoneVPCAssociation> => {
  const contents: PublicZoneVPCAssociation = {
    name: "PublicZoneVPCAssociation",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlQueryLoggingConfigAlreadyExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<QueryLoggingConfigAlreadyExists> => {
  const contents: QueryLoggingConfigAlreadyExists = {
    name: "QueryLoggingConfigAlreadyExists",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlTooManyHealthChecksResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyHealthChecks> => {
  const contents: TooManyHealthChecks = {
    name: "TooManyHealthChecks",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlTooManyHostedZonesResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyHostedZones> => {
  const contents: TooManyHostedZones = {
    name: "TooManyHostedZones",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlTooManyKeySigningKeysResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyKeySigningKeys> => {
  const contents: TooManyKeySigningKeys = {
    name: "TooManyKeySigningKeys",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlTooManyTrafficPoliciesResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTrafficPolicies> => {
  const contents: TooManyTrafficPolicies = {
    name: "TooManyTrafficPolicies",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlTooManyTrafficPolicyInstancesResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTrafficPolicyInstances> => {
  const contents: TooManyTrafficPolicyInstances = {
    name: "TooManyTrafficPolicyInstances",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlTooManyTrafficPolicyVersionsForCurrentPolicyResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTrafficPolicyVersionsForCurrentPolicy> => {
  const contents: TooManyTrafficPolicyVersionsForCurrentPolicy = {
    name: "TooManyTrafficPolicyVersionsForCurrentPolicy",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlTooManyVPCAssociationAuthorizationsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyVPCAssociationAuthorizations> => {
  const contents: TooManyVPCAssociationAuthorizations = {
    name: "TooManyVPCAssociationAuthorizations",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlTrafficPolicyAlreadyExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TrafficPolicyAlreadyExists> => {
  const contents: TrafficPolicyAlreadyExists = {
    name: "TrafficPolicyAlreadyExists",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlTrafficPolicyInstanceAlreadyExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TrafficPolicyInstanceAlreadyExists> => {
  const contents: TrafficPolicyInstanceAlreadyExists = {
    name: "TrafficPolicyInstanceAlreadyExists",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlTrafficPolicyInUseResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TrafficPolicyInUse> => {
  const contents: TrafficPolicyInUse = {
    name: "TrafficPolicyInUse",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlVPCAssociationAuthorizationNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<VPCAssociationAuthorizationNotFound> => {
  const contents: VPCAssociationAuthorizationNotFound = {
    name: "VPCAssociationAuthorizationNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const deserializeAws_restXmlVPCAssociationNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<VPCAssociationNotFound> => {
  const contents: VPCAssociationNotFound = {
    name: "VPCAssociationNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["message"] !== undefined) {
    contents.message = __expectString(data["message"]);
  }
  return contents;
};

const serializeAws_restXmlAlarmIdentifier = (input: AlarmIdentifier, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("AlarmIdentifier");
  if (input.Region !== undefined && input.Region !== null) {
    const node = new __XmlNode("CloudWatchRegion").addChildNode(new __XmlText(input.Region)).withName("Region");
    bodyNode.addChildNode(node);
  }
  if (input.Name !== undefined && input.Name !== null) {
    const node = new __XmlNode("AlarmName").addChildNode(new __XmlText(input.Name)).withName("Name");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlAliasTarget = (input: AliasTarget, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("AliasTarget");
  if (input.HostedZoneId !== undefined && input.HostedZoneId !== null) {
    const node = new __XmlNode("ResourceId").addChildNode(new __XmlText(input.HostedZoneId)).withName("HostedZoneId");
    bodyNode.addChildNode(node);
  }
  if (input.DNSName !== undefined && input.DNSName !== null) {
    const node = new __XmlNode("DNSName").addChildNode(new __XmlText(input.DNSName)).withName("DNSName");
    bodyNode.addChildNode(node);
  }
  if (input.EvaluateTargetHealth !== undefined && input.EvaluateTargetHealth !== null) {
    const node = new __XmlNode("AliasHealthEnabled")
      .addChildNode(new __XmlText(String(input.EvaluateTargetHealth)))
      .withName("EvaluateTargetHealth");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlChange = (input: Change, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Change");
  if (input.Action !== undefined && input.Action !== null) {
    const node = new __XmlNode("ChangeAction").addChildNode(new __XmlText(input.Action)).withName("Action");
    bodyNode.addChildNode(node);
  }
  if (input.ResourceRecordSet !== undefined && input.ResourceRecordSet !== null) {
    const node = serializeAws_restXmlResourceRecordSet(input.ResourceRecordSet, context).withName("ResourceRecordSet");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlChangeBatch = (input: ChangeBatch, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ChangeBatch");
  if (input.Comment !== undefined && input.Comment !== null) {
    const node = new __XmlNode("ResourceDescription").addChildNode(new __XmlText(input.Comment)).withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.Changes !== undefined && input.Changes !== null) {
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
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlChange(entry, context);
      return node.withName("Change");
    });
};

const serializeAws_restXmlChildHealthCheckList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = new __XmlNode("HealthCheckId").addChildNode(new __XmlText(entry));
      return node.withName("ChildHealthCheck");
    });
};

const serializeAws_restXmlGeoLocation = (input: GeoLocation, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("GeoLocation");
  if (input.ContinentCode !== undefined && input.ContinentCode !== null) {
    const node = new __XmlNode("GeoLocationContinentCode")
      .addChildNode(new __XmlText(input.ContinentCode))
      .withName("ContinentCode");
    bodyNode.addChildNode(node);
  }
  if (input.CountryCode !== undefined && input.CountryCode !== null) {
    const node = new __XmlNode("GeoLocationCountryCode")
      .addChildNode(new __XmlText(input.CountryCode))
      .withName("CountryCode");
    bodyNode.addChildNode(node);
  }
  if (input.SubdivisionCode !== undefined && input.SubdivisionCode !== null) {
    const node = new __XmlNode("GeoLocationSubdivisionCode")
      .addChildNode(new __XmlText(input.SubdivisionCode))
      .withName("SubdivisionCode");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlHealthCheckConfig = (input: HealthCheckConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("HealthCheckConfig");
  if (input.IPAddress !== undefined && input.IPAddress !== null) {
    const node = new __XmlNode("IPAddress").addChildNode(new __XmlText(input.IPAddress)).withName("IPAddress");
    bodyNode.addChildNode(node);
  }
  if (input.Port !== undefined && input.Port !== null) {
    const node = new __XmlNode("Port").addChildNode(new __XmlText(String(input.Port))).withName("Port");
    bodyNode.addChildNode(node);
  }
  if (input.Type !== undefined && input.Type !== null) {
    const node = new __XmlNode("HealthCheckType").addChildNode(new __XmlText(input.Type)).withName("Type");
    bodyNode.addChildNode(node);
  }
  if (input.ResourcePath !== undefined && input.ResourcePath !== null) {
    const node = new __XmlNode("ResourcePath").addChildNode(new __XmlText(input.ResourcePath)).withName("ResourcePath");
    bodyNode.addChildNode(node);
  }
  if (input.FullyQualifiedDomainName !== undefined && input.FullyQualifiedDomainName !== null) {
    const node = new __XmlNode("FullyQualifiedDomainName")
      .addChildNode(new __XmlText(input.FullyQualifiedDomainName))
      .withName("FullyQualifiedDomainName");
    bodyNode.addChildNode(node);
  }
  if (input.SearchString !== undefined && input.SearchString !== null) {
    const node = new __XmlNode("SearchString").addChildNode(new __XmlText(input.SearchString)).withName("SearchString");
    bodyNode.addChildNode(node);
  }
  if (input.RequestInterval !== undefined && input.RequestInterval !== null) {
    const node = new __XmlNode("RequestInterval")
      .addChildNode(new __XmlText(String(input.RequestInterval)))
      .withName("RequestInterval");
    bodyNode.addChildNode(node);
  }
  if (input.FailureThreshold !== undefined && input.FailureThreshold !== null) {
    const node = new __XmlNode("FailureThreshold")
      .addChildNode(new __XmlText(String(input.FailureThreshold)))
      .withName("FailureThreshold");
    bodyNode.addChildNode(node);
  }
  if (input.MeasureLatency !== undefined && input.MeasureLatency !== null) {
    const node = new __XmlNode("MeasureLatency")
      .addChildNode(new __XmlText(String(input.MeasureLatency)))
      .withName("MeasureLatency");
    bodyNode.addChildNode(node);
  }
  if (input.Inverted !== undefined && input.Inverted !== null) {
    const node = new __XmlNode("Inverted").addChildNode(new __XmlText(String(input.Inverted))).withName("Inverted");
    bodyNode.addChildNode(node);
  }
  if (input.Disabled !== undefined && input.Disabled !== null) {
    const node = new __XmlNode("Disabled").addChildNode(new __XmlText(String(input.Disabled))).withName("Disabled");
    bodyNode.addChildNode(node);
  }
  if (input.HealthThreshold !== undefined && input.HealthThreshold !== null) {
    const node = new __XmlNode("HealthThreshold")
      .addChildNode(new __XmlText(String(input.HealthThreshold)))
      .withName("HealthThreshold");
    bodyNode.addChildNode(node);
  }
  if (input.ChildHealthChecks !== undefined && input.ChildHealthChecks !== null) {
    const nodes = serializeAws_restXmlChildHealthCheckList(input.ChildHealthChecks, context);
    const containerNode = new __XmlNode("ChildHealthChecks");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.EnableSNI !== undefined && input.EnableSNI !== null) {
    const node = new __XmlNode("EnableSNI").addChildNode(new __XmlText(String(input.EnableSNI))).withName("EnableSNI");
    bodyNode.addChildNode(node);
  }
  if (input.Regions !== undefined && input.Regions !== null) {
    const nodes = serializeAws_restXmlHealthCheckRegionList(input.Regions, context);
    const containerNode = new __XmlNode("Regions");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.AlarmIdentifier !== undefined && input.AlarmIdentifier !== null) {
    const node = serializeAws_restXmlAlarmIdentifier(input.AlarmIdentifier, context).withName("AlarmIdentifier");
    bodyNode.addChildNode(node);
  }
  if (input.InsufficientDataHealthStatus !== undefined && input.InsufficientDataHealthStatus !== null) {
    const node = new __XmlNode("InsufficientDataHealthStatus")
      .addChildNode(new __XmlText(input.InsufficientDataHealthStatus))
      .withName("InsufficientDataHealthStatus");
    bodyNode.addChildNode(node);
  }
  if (input.RoutingControlArn !== undefined && input.RoutingControlArn !== null) {
    const node = new __XmlNode("RoutingControlArn")
      .addChildNode(new __XmlText(input.RoutingControlArn))
      .withName("RoutingControlArn");
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
      if (entry === null) {
        return null as any;
      }
      const node = new __XmlNode("HealthCheckRegion").addChildNode(new __XmlText(entry));
      return node.withName("Region");
    });
};

const serializeAws_restXmlHostedZoneConfig = (input: HostedZoneConfig, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("HostedZoneConfig");
  if (input.Comment !== undefined && input.Comment !== null) {
    const node = new __XmlNode("ResourceDescription").addChildNode(new __XmlText(input.Comment)).withName("Comment");
    bodyNode.addChildNode(node);
  }
  if (input.PrivateZone !== undefined && input.PrivateZone !== null) {
    const node = new __XmlNode("IsPrivateZone")
      .addChildNode(new __XmlText(String(input.PrivateZone)))
      .withName("PrivateZone");
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
      if (entry === null) {
        return null as any;
      }
      const node = new __XmlNode("ResettableElementName").addChildNode(new __XmlText(entry));
      return node.withName("ResettableElementName");
    });
};

const serializeAws_restXmlResourceRecord = (input: ResourceRecord, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ResourceRecord");
  if (input.Value !== undefined && input.Value !== null) {
    const node = new __XmlNode("RData").addChildNode(new __XmlText(input.Value)).withName("Value");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlResourceRecords = (input: ResourceRecord[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlResourceRecord(entry, context);
      return node.withName("ResourceRecord");
    });
};

const serializeAws_restXmlResourceRecordSet = (input: ResourceRecordSet, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ResourceRecordSet");
  if (input.Name !== undefined && input.Name !== null) {
    const node = new __XmlNode("DNSName").addChildNode(new __XmlText(input.Name)).withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.Type !== undefined && input.Type !== null) {
    const node = new __XmlNode("RRType").addChildNode(new __XmlText(input.Type)).withName("Type");
    bodyNode.addChildNode(node);
  }
  if (input.SetIdentifier !== undefined && input.SetIdentifier !== null) {
    const node = new __XmlNode("ResourceRecordSetIdentifier")
      .addChildNode(new __XmlText(input.SetIdentifier))
      .withName("SetIdentifier");
    bodyNode.addChildNode(node);
  }
  if (input.Weight !== undefined && input.Weight !== null) {
    const node = new __XmlNode("ResourceRecordSetWeight")
      .addChildNode(new __XmlText(String(input.Weight)))
      .withName("Weight");
    bodyNode.addChildNode(node);
  }
  if (input.Region !== undefined && input.Region !== null) {
    const node = new __XmlNode("ResourceRecordSetRegion").addChildNode(new __XmlText(input.Region)).withName("Region");
    bodyNode.addChildNode(node);
  }
  if (input.GeoLocation !== undefined && input.GeoLocation !== null) {
    const node = serializeAws_restXmlGeoLocation(input.GeoLocation, context).withName("GeoLocation");
    bodyNode.addChildNode(node);
  }
  if (input.Failover !== undefined && input.Failover !== null) {
    const node = new __XmlNode("ResourceRecordSetFailover")
      .addChildNode(new __XmlText(input.Failover))
      .withName("Failover");
    bodyNode.addChildNode(node);
  }
  if (input.MultiValueAnswer !== undefined && input.MultiValueAnswer !== null) {
    const node = new __XmlNode("ResourceRecordSetMultiValueAnswer")
      .addChildNode(new __XmlText(String(input.MultiValueAnswer)))
      .withName("MultiValueAnswer");
    bodyNode.addChildNode(node);
  }
  if (input.TTL !== undefined && input.TTL !== null) {
    const node = new __XmlNode("TTL").addChildNode(new __XmlText(String(input.TTL))).withName("TTL");
    bodyNode.addChildNode(node);
  }
  if (input.ResourceRecords !== undefined && input.ResourceRecords !== null) {
    const nodes = serializeAws_restXmlResourceRecords(input.ResourceRecords, context);
    const containerNode = new __XmlNode("ResourceRecords");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.AliasTarget !== undefined && input.AliasTarget !== null) {
    const node = serializeAws_restXmlAliasTarget(input.AliasTarget, context).withName("AliasTarget");
    bodyNode.addChildNode(node);
  }
  if (input.HealthCheckId !== undefined && input.HealthCheckId !== null) {
    const node = new __XmlNode("HealthCheckId")
      .addChildNode(new __XmlText(input.HealthCheckId))
      .withName("HealthCheckId");
    bodyNode.addChildNode(node);
  }
  if (input.TrafficPolicyInstanceId !== undefined && input.TrafficPolicyInstanceId !== null) {
    const node = new __XmlNode("TrafficPolicyInstanceId")
      .addChildNode(new __XmlText(input.TrafficPolicyInstanceId))
      .withName("TrafficPolicyInstanceId");
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

const serializeAws_restXmlTagResourceIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = new __XmlNode("TagResourceId").addChildNode(new __XmlText(entry));
      return node.withName("ResourceId");
    });
};

const serializeAws_restXmlVPC = (input: VPC, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("VPC");
  if (input.VPCRegion !== undefined && input.VPCRegion !== null) {
    const node = new __XmlNode("VPCRegion").addChildNode(new __XmlText(input.VPCRegion)).withName("VPCRegion");
    bodyNode.addChildNode(node);
  }
  if (input.VPCId !== undefined && input.VPCId !== null) {
    const node = new __XmlNode("VPCId").addChildNode(new __XmlText(input.VPCId)).withName("VPCId");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const deserializeAws_restXmlAccountLimit = (output: any, context: __SerdeContext): AccountLimit => {
  let contents: any = {
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
  let contents: any = {
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
  let contents: any = {
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
  let contents: any = {
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
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlChildHealthCheckList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlCloudWatchAlarmConfiguration = (
  output: any,
  context: __SerdeContext
): CloudWatchAlarmConfiguration => {
  let contents: any = {
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
  }
  if (output["Dimensions"] !== undefined && output["Dimensions"]["Dimension"] !== undefined) {
    contents.Dimensions = deserializeAws_restXmlDimensionList(
      __getArrayIfSingleItem(output["Dimensions"]["Dimension"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlDelegationSet = (output: any, context: __SerdeContext): DelegationSet => {
  let contents: any = {
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
  }
  if (output["NameServers"] !== undefined && output["NameServers"]["NameServer"] !== undefined) {
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
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlDelegationSets = (output: any, context: __SerdeContext): DelegationSet[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlDelegationSet(entry, context);
    });
};

const deserializeAws_restXmlDimension = (output: any, context: __SerdeContext): Dimension => {
  let contents: any = {
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
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlDimension(entry, context);
    });
};

const deserializeAws_restXmlDNSSECStatus = (output: any, context: __SerdeContext): DNSSECStatus => {
  let contents: any = {
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
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlGeoLocation = (output: any, context: __SerdeContext): GeoLocation => {
  let contents: any = {
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
  let contents: any = {
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
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlGeoLocationDetails(entry, context);
    });
};

const deserializeAws_restXmlHealthCheck = (output: any, context: __SerdeContext): HealthCheck => {
  let contents: any = {
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
  let contents: any = {
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
  }
  if (output["ChildHealthChecks"] !== undefined && output["ChildHealthChecks"]["ChildHealthCheck"] !== undefined) {
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
  }
  if (output["Regions"] !== undefined && output["Regions"]["Region"] !== undefined) {
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
  let contents: any = {
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
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlHealthChecks = (output: any, context: __SerdeContext): HealthCheck[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlHealthCheck(entry, context);
    });
};

const deserializeAws_restXmlHostedZone = (output: any, context: __SerdeContext): HostedZone => {
  let contents: any = {
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
  let contents: any = {
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
  let contents: any = {
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
  let contents: any = {
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
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlHostedZone(entry, context);
    });
};

const deserializeAws_restXmlHostedZoneSummaries = (output: any, context: __SerdeContext): HostedZoneSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlHostedZoneSummary(entry, context);
    });
};

const deserializeAws_restXmlHostedZoneSummary = (output: any, context: __SerdeContext): HostedZoneSummary => {
  let contents: any = {
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
  let contents: any = {
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
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlKeySigningKey(entry, context);
    });
};

const deserializeAws_restXmlLinkedService = (output: any, context: __SerdeContext): LinkedService => {
  let contents: any = {
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

const deserializeAws_restXmlQueryLoggingConfig = (output: any, context: __SerdeContext): QueryLoggingConfig => {
  let contents: any = {
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
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlQueryLoggingConfig(entry, context);
    });
};

const deserializeAws_restXmlRecordData = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlResourceRecord = (output: any, context: __SerdeContext): ResourceRecord => {
  let contents: any = {
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
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlResourceRecord(entry, context);
    });
};

const deserializeAws_restXmlResourceRecordSet = (output: any, context: __SerdeContext): ResourceRecordSet => {
  let contents: any = {
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
  }
  if (output["ResourceRecords"] !== undefined && output["ResourceRecords"]["ResourceRecord"] !== undefined) {
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
  return contents;
};

const deserializeAws_restXmlResourceRecordSets = (output: any, context: __SerdeContext): ResourceRecordSet[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlResourceRecordSet(entry, context);
    });
};

const deserializeAws_restXmlResourceTagSet = (output: any, context: __SerdeContext): ResourceTagSet => {
  let contents: any = {
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
  }
  if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
    contents.Tags = deserializeAws_restXmlTagList(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
  }
  return contents;
};

const deserializeAws_restXmlResourceTagSetList = (output: any, context: __SerdeContext): ResourceTagSet[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlResourceTagSet(entry, context);
    });
};

const deserializeAws_restXmlReusableDelegationSetLimit = (
  output: any,
  context: __SerdeContext
): ReusableDelegationSetLimit => {
  let contents: any = {
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
  let contents: any = {
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
  let contents: any = {
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

const deserializeAws_restXmlTrafficPolicies = (output: any, context: __SerdeContext): TrafficPolicy[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlTrafficPolicy(entry, context);
    });
};

const deserializeAws_restXmlTrafficPolicy = (output: any, context: __SerdeContext): TrafficPolicy => {
  let contents: any = {
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
  let contents: any = {
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
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlTrafficPolicyInstance(entry, context);
    });
};

const deserializeAws_restXmlTrafficPolicySummaries = (output: any, context: __SerdeContext): TrafficPolicySummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlTrafficPolicySummary(entry, context);
    });
};

const deserializeAws_restXmlTrafficPolicySummary = (output: any, context: __SerdeContext): TrafficPolicySummary => {
  let contents: any = {
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
  let contents: any = {
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
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlVPC(entry, context);
    });
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
