import { AssociateDomainCommandInput, AssociateDomainCommandOutput } from "../commands/AssociateDomainCommand";
import {
  AssociateWebsiteAuthorizationProviderCommandInput,
  AssociateWebsiteAuthorizationProviderCommandOutput,
} from "../commands/AssociateWebsiteAuthorizationProviderCommand";
import {
  AssociateWebsiteCertificateAuthorityCommandInput,
  AssociateWebsiteCertificateAuthorityCommandOutput,
} from "../commands/AssociateWebsiteCertificateAuthorityCommand";
import { CreateFleetCommandInput, CreateFleetCommandOutput } from "../commands/CreateFleetCommand";
import { DeleteFleetCommandInput, DeleteFleetCommandOutput } from "../commands/DeleteFleetCommand";
import {
  DescribeAuditStreamConfigurationCommandInput,
  DescribeAuditStreamConfigurationCommandOutput,
} from "../commands/DescribeAuditStreamConfigurationCommand";
import {
  DescribeCompanyNetworkConfigurationCommandInput,
  DescribeCompanyNetworkConfigurationCommandOutput,
} from "../commands/DescribeCompanyNetworkConfigurationCommand";
import { DescribeDeviceCommandInput, DescribeDeviceCommandOutput } from "../commands/DescribeDeviceCommand";
import {
  DescribeDevicePolicyConfigurationCommandInput,
  DescribeDevicePolicyConfigurationCommandOutput,
} from "../commands/DescribeDevicePolicyConfigurationCommand";
import { DescribeDomainCommandInput, DescribeDomainCommandOutput } from "../commands/DescribeDomainCommand";
import {
  DescribeFleetMetadataCommandInput,
  DescribeFleetMetadataCommandOutput,
} from "../commands/DescribeFleetMetadataCommand";
import {
  DescribeIdentityProviderConfigurationCommandInput,
  DescribeIdentityProviderConfigurationCommandOutput,
} from "../commands/DescribeIdentityProviderConfigurationCommand";
import {
  DescribeWebsiteCertificateAuthorityCommandInput,
  DescribeWebsiteCertificateAuthorityCommandOutput,
} from "../commands/DescribeWebsiteCertificateAuthorityCommand";
import { DisassociateDomainCommandInput, DisassociateDomainCommandOutput } from "../commands/DisassociateDomainCommand";
import {
  DisassociateWebsiteAuthorizationProviderCommandInput,
  DisassociateWebsiteAuthorizationProviderCommandOutput,
} from "../commands/DisassociateWebsiteAuthorizationProviderCommand";
import {
  DisassociateWebsiteCertificateAuthorityCommandInput,
  DisassociateWebsiteCertificateAuthorityCommandOutput,
} from "../commands/DisassociateWebsiteCertificateAuthorityCommand";
import { ListDevicesCommandInput, ListDevicesCommandOutput } from "../commands/ListDevicesCommand";
import { ListDomainsCommandInput, ListDomainsCommandOutput } from "../commands/ListDomainsCommand";
import { ListFleetsCommandInput, ListFleetsCommandOutput } from "../commands/ListFleetsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListWebsiteAuthorizationProvidersCommandInput,
  ListWebsiteAuthorizationProvidersCommandOutput,
} from "../commands/ListWebsiteAuthorizationProvidersCommand";
import {
  ListWebsiteCertificateAuthoritiesCommandInput,
  ListWebsiteCertificateAuthoritiesCommandOutput,
} from "../commands/ListWebsiteCertificateAuthoritiesCommand";
import {
  RestoreDomainAccessCommandInput,
  RestoreDomainAccessCommandOutput,
} from "../commands/RestoreDomainAccessCommand";
import { RevokeDomainAccessCommandInput, RevokeDomainAccessCommandOutput } from "../commands/RevokeDomainAccessCommand";
import { SignOutUserCommandInput, SignOutUserCommandOutput } from "../commands/SignOutUserCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateAuditStreamConfigurationCommandInput,
  UpdateAuditStreamConfigurationCommandOutput,
} from "../commands/UpdateAuditStreamConfigurationCommand";
import {
  UpdateCompanyNetworkConfigurationCommandInput,
  UpdateCompanyNetworkConfigurationCommandOutput,
} from "../commands/UpdateCompanyNetworkConfigurationCommand";
import {
  UpdateDevicePolicyConfigurationCommandInput,
  UpdateDevicePolicyConfigurationCommandOutput,
} from "../commands/UpdateDevicePolicyConfigurationCommand";
import {
  UpdateDomainMetadataCommandInput,
  UpdateDomainMetadataCommandOutput,
} from "../commands/UpdateDomainMetadataCommand";
import {
  UpdateFleetMetadataCommandInput,
  UpdateFleetMetadataCommandOutput,
} from "../commands/UpdateFleetMetadataCommand";
import {
  UpdateIdentityProviderConfigurationCommandInput,
  UpdateIdentityProviderConfigurationCommandOutput,
} from "../commands/UpdateIdentityProviderConfigurationCommand";
import {
  DeviceSummary,
  DomainSummary,
  FleetSummary,
  InternalServerErrorException,
  InvalidRequestException,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  TooManyRequestsException,
  UnauthorizedException,
  WebsiteAuthorizationProviderSummary,
  WebsiteCaSummary,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  parseEpochTimestamp as __parseEpochTimestamp,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_restJson1AssociateDomainCommand = async (
  input: AssociateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/associateDomain";
  let body: any;
  body = JSON.stringify({
    ...(input.AcmCertificateArn !== undefined &&
      input.AcmCertificateArn !== null && { AcmCertificateArn: input.AcmCertificateArn }),
    ...(input.DisplayName !== undefined && input.DisplayName !== null && { DisplayName: input.DisplayName }),
    ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
    ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
  });
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

export const serializeAws_restJson1AssociateWebsiteAuthorizationProviderCommand = async (
  input: AssociateWebsiteAuthorizationProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/associateWebsiteAuthorizationProvider";
  let body: any;
  body = JSON.stringify({
    ...(input.AuthorizationProviderType !== undefined &&
      input.AuthorizationProviderType !== null && { AuthorizationProviderType: input.AuthorizationProviderType }),
    ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
    ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
  });
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

export const serializeAws_restJson1AssociateWebsiteCertificateAuthorityCommand = async (
  input: AssociateWebsiteCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/associateWebsiteCertificateAuthority";
  let body: any;
  body = JSON.stringify({
    ...(input.Certificate !== undefined && input.Certificate !== null && { Certificate: input.Certificate }),
    ...(input.DisplayName !== undefined && input.DisplayName !== null && { DisplayName: input.DisplayName }),
    ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
  });
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

export const serializeAws_restJson1CreateFleetCommand = async (
  input: CreateFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/createFleet";
  let body: any;
  body = JSON.stringify({
    ...(input.DisplayName !== undefined && input.DisplayName !== null && { DisplayName: input.DisplayName }),
    ...(input.FleetName !== undefined && input.FleetName !== null && { FleetName: input.FleetName }),
    ...(input.OptimizeForEndUserLocation !== undefined &&
      input.OptimizeForEndUserLocation !== null && { OptimizeForEndUserLocation: input.OptimizeForEndUserLocation }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
  });
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

export const serializeAws_restJson1DeleteFleetCommand = async (
  input: DeleteFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/deleteFleet";
  let body: any;
  body = JSON.stringify({
    ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
  });
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

export const serializeAws_restJson1DescribeAuditStreamConfigurationCommand = async (
  input: DescribeAuditStreamConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describeAuditStreamConfiguration";
  let body: any;
  body = JSON.stringify({
    ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
  });
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

export const serializeAws_restJson1DescribeCompanyNetworkConfigurationCommand = async (
  input: DescribeCompanyNetworkConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describeCompanyNetworkConfiguration";
  let body: any;
  body = JSON.stringify({
    ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
  });
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

export const serializeAws_restJson1DescribeDeviceCommand = async (
  input: DescribeDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describeDevice";
  let body: any;
  body = JSON.stringify({
    ...(input.DeviceId !== undefined && input.DeviceId !== null && { DeviceId: input.DeviceId }),
    ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
  });
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

export const serializeAws_restJson1DescribeDevicePolicyConfigurationCommand = async (
  input: DescribeDevicePolicyConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describeDevicePolicyConfiguration";
  let body: any;
  body = JSON.stringify({
    ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
  });
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

export const serializeAws_restJson1DescribeDomainCommand = async (
  input: DescribeDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describeDomain";
  let body: any;
  body = JSON.stringify({
    ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
    ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
  });
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

export const serializeAws_restJson1DescribeFleetMetadataCommand = async (
  input: DescribeFleetMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describeFleetMetadata";
  let body: any;
  body = JSON.stringify({
    ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
  });
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

export const serializeAws_restJson1DescribeIdentityProviderConfigurationCommand = async (
  input: DescribeIdentityProviderConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describeIdentityProviderConfiguration";
  let body: any;
  body = JSON.stringify({
    ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
  });
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

export const serializeAws_restJson1DescribeWebsiteCertificateAuthorityCommand = async (
  input: DescribeWebsiteCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describeWebsiteCertificateAuthority";
  let body: any;
  body = JSON.stringify({
    ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
    ...(input.WebsiteCaId !== undefined && input.WebsiteCaId !== null && { WebsiteCaId: input.WebsiteCaId }),
  });
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

export const serializeAws_restJson1DisassociateDomainCommand = async (
  input: DisassociateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/disassociateDomain";
  let body: any;
  body = JSON.stringify({
    ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
    ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
  });
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

export const serializeAws_restJson1DisassociateWebsiteAuthorizationProviderCommand = async (
  input: DisassociateWebsiteAuthorizationProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/disassociateWebsiteAuthorizationProvider";
  let body: any;
  body = JSON.stringify({
    ...(input.AuthorizationProviderId !== undefined &&
      input.AuthorizationProviderId !== null && { AuthorizationProviderId: input.AuthorizationProviderId }),
    ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
  });
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

export const serializeAws_restJson1DisassociateWebsiteCertificateAuthorityCommand = async (
  input: DisassociateWebsiteCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/disassociateWebsiteCertificateAuthority";
  let body: any;
  body = JSON.stringify({
    ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
    ...(input.WebsiteCaId !== undefined && input.WebsiteCaId !== null && { WebsiteCaId: input.WebsiteCaId }),
  });
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

export const serializeAws_restJson1ListDevicesCommand = async (
  input: ListDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listDevices";
  let body: any;
  body = JSON.stringify({
    ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  });
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

export const serializeAws_restJson1ListDomainsCommand = async (
  input: ListDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listDomains";
  let body: any;
  body = JSON.stringify({
    ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  });
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

export const serializeAws_restJson1ListFleetsCommand = async (
  input: ListFleetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listFleets";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  });
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
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

export const serializeAws_restJson1ListWebsiteAuthorizationProvidersCommand = async (
  input: ListWebsiteAuthorizationProvidersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listWebsiteAuthorizationProviders";
  let body: any;
  body = JSON.stringify({
    ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  });
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

export const serializeAws_restJson1ListWebsiteCertificateAuthoritiesCommand = async (
  input: ListWebsiteCertificateAuthoritiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listWebsiteCertificateAuthorities";
  let body: any;
  body = JSON.stringify({
    ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  });
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

export const serializeAws_restJson1RestoreDomainAccessCommand = async (
  input: RestoreDomainAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/restoreDomainAccess";
  let body: any;
  body = JSON.stringify({
    ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
    ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
  });
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

export const serializeAws_restJson1RevokeDomainAccessCommand = async (
  input: RevokeDomainAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/revokeDomainAccess";
  let body: any;
  body = JSON.stringify({
    ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
    ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
  });
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

export const serializeAws_restJson1SignOutUserCommand = async (
  input: SignOutUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/signOutUser";
  let body: any;
  body = JSON.stringify({
    ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
    ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
  });
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

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
  });
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

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {
    ...(input.TagKeys !== undefined && { tagKeys: (input.TagKeys || []).map((_entry) => _entry as any) }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1UpdateAuditStreamConfigurationCommand = async (
  input: UpdateAuditStreamConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/updateAuditStreamConfiguration";
  let body: any;
  body = JSON.stringify({
    ...(input.AuditStreamArn !== undefined &&
      input.AuditStreamArn !== null && { AuditStreamArn: input.AuditStreamArn }),
    ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
  });
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

export const serializeAws_restJson1UpdateCompanyNetworkConfigurationCommand = async (
  input: UpdateCompanyNetworkConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/updateCompanyNetworkConfiguration";
  let body: any;
  body = JSON.stringify({
    ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
    ...(input.SecurityGroupIds !== undefined &&
      input.SecurityGroupIds !== null && {
        SecurityGroupIds: serializeAws_restJson1SecurityGroupIds(input.SecurityGroupIds, context),
      }),
    ...(input.SubnetIds !== undefined &&
      input.SubnetIds !== null && { SubnetIds: serializeAws_restJson1SubnetIds(input.SubnetIds, context) }),
    ...(input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }),
  });
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

export const serializeAws_restJson1UpdateDevicePolicyConfigurationCommand = async (
  input: UpdateDevicePolicyConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/updateDevicePolicyConfiguration";
  let body: any;
  body = JSON.stringify({
    ...(input.DeviceCaCertificate !== undefined &&
      input.DeviceCaCertificate !== null && { DeviceCaCertificate: input.DeviceCaCertificate }),
    ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
  });
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

export const serializeAws_restJson1UpdateDomainMetadataCommand = async (
  input: UpdateDomainMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/updateDomainMetadata";
  let body: any;
  body = JSON.stringify({
    ...(input.DisplayName !== undefined && input.DisplayName !== null && { DisplayName: input.DisplayName }),
    ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
    ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
  });
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

export const serializeAws_restJson1UpdateFleetMetadataCommand = async (
  input: UpdateFleetMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UpdateFleetMetadata";
  let body: any;
  body = JSON.stringify({
    ...(input.DisplayName !== undefined && input.DisplayName !== null && { DisplayName: input.DisplayName }),
    ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
    ...(input.OptimizeForEndUserLocation !== undefined &&
      input.OptimizeForEndUserLocation !== null && { OptimizeForEndUserLocation: input.OptimizeForEndUserLocation }),
  });
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

export const serializeAws_restJson1UpdateIdentityProviderConfigurationCommand = async (
  input: UpdateIdentityProviderConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/updateIdentityProviderConfiguration";
  let body: any;
  body = JSON.stringify({
    ...(input.FleetArn !== undefined && input.FleetArn !== null && { FleetArn: input.FleetArn }),
    ...(input.IdentityProviderSamlMetadata !== undefined &&
      input.IdentityProviderSamlMetadata !== null && {
        IdentityProviderSamlMetadata: input.IdentityProviderSamlMetadata,
      }),
    ...(input.IdentityProviderType !== undefined &&
      input.IdentityProviderType !== null && { IdentityProviderType: input.IdentityProviderType }),
  });
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

export const deserializeAws_restJson1AssociateDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateDomainCommandError(output, context);
  }
  const contents: AssociateDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AssociateDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.worklink#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.worklink#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.worklink#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.worklink#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.worklink#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.worklink#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1AssociateWebsiteAuthorizationProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateWebsiteAuthorizationProviderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateWebsiteAuthorizationProviderCommandError(output, context);
  }
  const contents: AssociateWebsiteAuthorizationProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    AuthorizationProviderId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AuthorizationProviderId !== undefined && data.AuthorizationProviderId !== null) {
    contents.AuthorizationProviderId = __expectString(data.AuthorizationProviderId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AssociateWebsiteAuthorizationProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateWebsiteAuthorizationProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.worklink#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.worklink#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.worklink#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.worklink#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.worklink#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.worklink#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1AssociateWebsiteCertificateAuthorityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateWebsiteCertificateAuthorityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateWebsiteCertificateAuthorityCommandError(output, context);
  }
  const contents: AssociateWebsiteCertificateAuthorityCommandOutput = {
    $metadata: deserializeMetadata(output),
    WebsiteCaId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.WebsiteCaId !== undefined && data.WebsiteCaId !== null) {
    contents.WebsiteCaId = __expectString(data.WebsiteCaId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AssociateWebsiteCertificateAuthorityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateWebsiteCertificateAuthorityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.worklink#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.worklink#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.worklink#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.worklink#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.worklink#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.worklink#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFleetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateFleetCommandError(output, context);
  }
  const contents: CreateFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    FleetArn: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.FleetArn !== undefined && data.FleetArn !== null) {
    contents.FleetArn = __expectString(data.FleetArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.worklink#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.worklink#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.worklink#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.worklink#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.worklink#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.worklink#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFleetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteFleetCommandError(output, context);
  }
  const contents: DeleteFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.worklink#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.worklink#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.worklink#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.worklink#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.worklink#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeAuditStreamConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAuditStreamConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAuditStreamConfigurationCommandError(output, context);
  }
  const contents: DescribeAuditStreamConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    AuditStreamArn: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AuditStreamArn !== undefined && data.AuditStreamArn !== null) {
    contents.AuditStreamArn = __expectString(data.AuditStreamArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeAuditStreamConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAuditStreamConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.worklink#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.worklink#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.worklink#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.worklink#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.worklink#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeCompanyNetworkConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCompanyNetworkConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeCompanyNetworkConfigurationCommandError(output, context);
  }
  const contents: DescribeCompanyNetworkConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    SecurityGroupIds: undefined,
    SubnetIds: undefined,
    VpcId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.SecurityGroupIds !== undefined && data.SecurityGroupIds !== null) {
    contents.SecurityGroupIds = deserializeAws_restJson1SecurityGroupIds(data.SecurityGroupIds, context);
  }
  if (data.SubnetIds !== undefined && data.SubnetIds !== null) {
    contents.SubnetIds = deserializeAws_restJson1SubnetIds(data.SubnetIds, context);
  }
  if (data.VpcId !== undefined && data.VpcId !== null) {
    contents.VpcId = __expectString(data.VpcId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeCompanyNetworkConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCompanyNetworkConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.worklink#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.worklink#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.worklink#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.worklink#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.worklink#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDeviceCommandError(output, context);
  }
  const contents: DescribeDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    FirstAccessedTime: undefined,
    LastAccessedTime: undefined,
    Manufacturer: undefined,
    Model: undefined,
    OperatingSystem: undefined,
    OperatingSystemVersion: undefined,
    PatchLevel: undefined,
    Status: undefined,
    Username: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.FirstAccessedTime !== undefined && data.FirstAccessedTime !== null) {
    contents.FirstAccessedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.FirstAccessedTime)));
  }
  if (data.LastAccessedTime !== undefined && data.LastAccessedTime !== null) {
    contents.LastAccessedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastAccessedTime)));
  }
  if (data.Manufacturer !== undefined && data.Manufacturer !== null) {
    contents.Manufacturer = __expectString(data.Manufacturer);
  }
  if (data.Model !== undefined && data.Model !== null) {
    contents.Model = __expectString(data.Model);
  }
  if (data.OperatingSystem !== undefined && data.OperatingSystem !== null) {
    contents.OperatingSystem = __expectString(data.OperatingSystem);
  }
  if (data.OperatingSystemVersion !== undefined && data.OperatingSystemVersion !== null) {
    contents.OperatingSystemVersion = __expectString(data.OperatingSystemVersion);
  }
  if (data.PatchLevel !== undefined && data.PatchLevel !== null) {
    contents.PatchLevel = __expectString(data.PatchLevel);
  }
  if (data.Status !== undefined && data.Status !== null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.Username !== undefined && data.Username !== null) {
    contents.Username = __expectString(data.Username);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.worklink#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.worklink#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.worklink#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.worklink#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.worklink#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeDevicePolicyConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDevicePolicyConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDevicePolicyConfigurationCommandError(output, context);
  }
  const contents: DescribeDevicePolicyConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    DeviceCaCertificate: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DeviceCaCertificate !== undefined && data.DeviceCaCertificate !== null) {
    contents.DeviceCaCertificate = __expectString(data.DeviceCaCertificate);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeDevicePolicyConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDevicePolicyConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.worklink#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.worklink#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.worklink#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.worklink#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.worklink#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDomainCommandError(output, context);
  }
  const contents: DescribeDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    AcmCertificateArn: undefined,
    CreatedTime: undefined,
    DisplayName: undefined,
    DomainName: undefined,
    DomainStatus: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AcmCertificateArn !== undefined && data.AcmCertificateArn !== null) {
    contents.AcmCertificateArn = __expectString(data.AcmCertificateArn);
  }
  if (data.CreatedTime !== undefined && data.CreatedTime !== null) {
    contents.CreatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedTime)));
  }
  if (data.DisplayName !== undefined && data.DisplayName !== null) {
    contents.DisplayName = __expectString(data.DisplayName);
  }
  if (data.DomainName !== undefined && data.DomainName !== null) {
    contents.DomainName = __expectString(data.DomainName);
  }
  if (data.DomainStatus !== undefined && data.DomainStatus !== null) {
    contents.DomainStatus = __expectString(data.DomainStatus);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.worklink#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.worklink#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.worklink#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.worklink#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.worklink#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeFleetMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeFleetMetadataCommandError(output, context);
  }
  const contents: DescribeFleetMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    CompanyCode: undefined,
    CreatedTime: undefined,
    DisplayName: undefined,
    FleetName: undefined,
    FleetStatus: undefined,
    LastUpdatedTime: undefined,
    OptimizeForEndUserLocation: undefined,
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CompanyCode !== undefined && data.CompanyCode !== null) {
    contents.CompanyCode = __expectString(data.CompanyCode);
  }
  if (data.CreatedTime !== undefined && data.CreatedTime !== null) {
    contents.CreatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedTime)));
  }
  if (data.DisplayName !== undefined && data.DisplayName !== null) {
    contents.DisplayName = __expectString(data.DisplayName);
  }
  if (data.FleetName !== undefined && data.FleetName !== null) {
    contents.FleetName = __expectString(data.FleetName);
  }
  if (data.FleetStatus !== undefined && data.FleetStatus !== null) {
    contents.FleetStatus = __expectString(data.FleetStatus);
  }
  if (data.LastUpdatedTime !== undefined && data.LastUpdatedTime !== null) {
    contents.LastUpdatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedTime)));
  }
  if (data.OptimizeForEndUserLocation !== undefined && data.OptimizeForEndUserLocation !== null) {
    contents.OptimizeForEndUserLocation = __expectBoolean(data.OptimizeForEndUserLocation);
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeFleetMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.worklink#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.worklink#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.worklink#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.worklink#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.worklink#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeIdentityProviderConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIdentityProviderConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeIdentityProviderConfigurationCommandError(output, context);
  }
  const contents: DescribeIdentityProviderConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    IdentityProviderSamlMetadata: undefined,
    IdentityProviderType: undefined,
    ServiceProviderSamlMetadata: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.IdentityProviderSamlMetadata !== undefined && data.IdentityProviderSamlMetadata !== null) {
    contents.IdentityProviderSamlMetadata = __expectString(data.IdentityProviderSamlMetadata);
  }
  if (data.IdentityProviderType !== undefined && data.IdentityProviderType !== null) {
    contents.IdentityProviderType = __expectString(data.IdentityProviderType);
  }
  if (data.ServiceProviderSamlMetadata !== undefined && data.ServiceProviderSamlMetadata !== null) {
    contents.ServiceProviderSamlMetadata = __expectString(data.ServiceProviderSamlMetadata);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeIdentityProviderConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIdentityProviderConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.worklink#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.worklink#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.worklink#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.worklink#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.worklink#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeWebsiteCertificateAuthorityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWebsiteCertificateAuthorityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeWebsiteCertificateAuthorityCommandError(output, context);
  }
  const contents: DescribeWebsiteCertificateAuthorityCommandOutput = {
    $metadata: deserializeMetadata(output),
    Certificate: undefined,
    CreatedTime: undefined,
    DisplayName: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Certificate !== undefined && data.Certificate !== null) {
    contents.Certificate = __expectString(data.Certificate);
  }
  if (data.CreatedTime !== undefined && data.CreatedTime !== null) {
    contents.CreatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedTime)));
  }
  if (data.DisplayName !== undefined && data.DisplayName !== null) {
    contents.DisplayName = __expectString(data.DisplayName);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeWebsiteCertificateAuthorityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWebsiteCertificateAuthorityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.worklink#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.worklink#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.worklink#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.worklink#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.worklink#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DisassociateDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateDomainCommandError(output, context);
  }
  const contents: DisassociateDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisassociateDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.worklink#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.worklink#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.worklink#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.worklink#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.worklink#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DisassociateWebsiteAuthorizationProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateWebsiteAuthorizationProviderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateWebsiteAuthorizationProviderCommandError(output, context);
  }
  const contents: DisassociateWebsiteAuthorizationProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisassociateWebsiteAuthorizationProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateWebsiteAuthorizationProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.worklink#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.worklink#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.worklink#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.worklink#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.worklink#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.worklink#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DisassociateWebsiteCertificateAuthorityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateWebsiteCertificateAuthorityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateWebsiteCertificateAuthorityCommandError(output, context);
  }
  const contents: DisassociateWebsiteCertificateAuthorityCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisassociateWebsiteCertificateAuthorityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateWebsiteCertificateAuthorityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.worklink#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.worklink#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.worklink#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.worklink#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.worklink#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDevicesCommandError(output, context);
  }
  const contents: ListDevicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    Devices: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Devices !== undefined && data.Devices !== null) {
    contents.Devices = deserializeAws_restJson1DeviceSummaryList(data.Devices, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDevicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.worklink#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.worklink#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.worklink#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.worklink#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.worklink#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDomainsCommandError(output, context);
  }
  const contents: ListDomainsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Domains: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Domains !== undefined && data.Domains !== null) {
    contents.Domains = deserializeAws_restJson1DomainSummaryList(data.Domains, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDomainsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.worklink#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.worklink#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.worklink#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.worklink#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.worklink#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListFleetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFleetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFleetsCommandError(output, context);
  }
  const contents: ListFleetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    FleetSummaryList: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.FleetSummaryList !== undefined && data.FleetSummaryList !== null) {
    contents.FleetSummaryList = deserializeAws_restJson1FleetSummaryList(data.FleetSummaryList, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListFleetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFleetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.worklink#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.worklink#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.worklink#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.worklink#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.worklink#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListWebsiteAuthorizationProvidersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWebsiteAuthorizationProvidersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListWebsiteAuthorizationProvidersCommandError(output, context);
  }
  const contents: ListWebsiteAuthorizationProvidersCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    WebsiteAuthorizationProviders: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.WebsiteAuthorizationProviders !== undefined && data.WebsiteAuthorizationProviders !== null) {
    contents.WebsiteAuthorizationProviders = deserializeAws_restJson1WebsiteAuthorizationProvidersSummaryList(
      data.WebsiteAuthorizationProviders,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListWebsiteAuthorizationProvidersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWebsiteAuthorizationProvidersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.worklink#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.worklink#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.worklink#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.worklink#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.worklink#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListWebsiteCertificateAuthoritiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWebsiteCertificateAuthoritiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListWebsiteCertificateAuthoritiesCommandError(output, context);
  }
  const contents: ListWebsiteCertificateAuthoritiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    WebsiteCertificateAuthorities: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.WebsiteCertificateAuthorities !== undefined && data.WebsiteCertificateAuthorities !== null) {
    contents.WebsiteCertificateAuthorities = deserializeAws_restJson1WebsiteCaSummaryList(
      data.WebsiteCertificateAuthorities,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListWebsiteCertificateAuthoritiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWebsiteCertificateAuthoritiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.worklink#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.worklink#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.worklink#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.worklink#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1RestoreDomainAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreDomainAccessCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RestoreDomainAccessCommandError(output, context);
  }
  const contents: RestoreDomainAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RestoreDomainAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreDomainAccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.worklink#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.worklink#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.worklink#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.worklink#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.worklink#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1RevokeDomainAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeDomainAccessCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RevokeDomainAccessCommandError(output, context);
  }
  const contents: RevokeDomainAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RevokeDomainAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeDomainAccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.worklink#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.worklink#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.worklink#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.worklink#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.worklink#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1SignOutUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SignOutUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SignOutUserCommandError(output, context);
  }
  const contents: SignOutUserCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1SignOutUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SignOutUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.worklink#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.worklink#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.worklink#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.worklink#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.worklink#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.worklink#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.worklink#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateAuditStreamConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAuditStreamConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAuditStreamConfigurationCommandError(output, context);
  }
  const contents: UpdateAuditStreamConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateAuditStreamConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAuditStreamConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.worklink#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.worklink#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.worklink#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.worklink#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.worklink#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateCompanyNetworkConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCompanyNetworkConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateCompanyNetworkConfigurationCommandError(output, context);
  }
  const contents: UpdateCompanyNetworkConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateCompanyNetworkConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCompanyNetworkConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.worklink#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.worklink#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.worklink#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.worklink#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.worklink#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateDevicePolicyConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDevicePolicyConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDevicePolicyConfigurationCommandError(output, context);
  }
  const contents: UpdateDevicePolicyConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateDevicePolicyConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDevicePolicyConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.worklink#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.worklink#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.worklink#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.worklink#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.worklink#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateDomainMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDomainMetadataCommandError(output, context);
  }
  const contents: UpdateDomainMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateDomainMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.worklink#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.worklink#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.worklink#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.worklink#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.worklink#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateFleetMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFleetMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFleetMetadataCommandError(output, context);
  }
  const contents: UpdateFleetMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateFleetMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFleetMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.worklink#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.worklink#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.worklink#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.worklink#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.worklink#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateIdentityProviderConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIdentityProviderConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateIdentityProviderConfigurationCommandError(output, context);
  }
  const contents: UpdateIdentityProviderConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateIdentityProviderConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIdentityProviderConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.worklink#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.worklink#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.worklink#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.worklink#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.worklink#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1InternalServerErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: InternalServerErrorException = {
    name: "InternalServerErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const contents: ResourceAlreadyExistsException = {
    name: "ResourceAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1UnauthorizedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: UnauthorizedException = {
    name: "UnauthorizedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const serializeAws_restJson1SecurityGroupIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1SubnetIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1TagMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_restJson1DeviceSummary = (output: any, context: __SerdeContext): DeviceSummary => {
  return {
    DeviceId: __expectString(output.DeviceId),
    DeviceStatus: __expectString(output.DeviceStatus),
  } as any;
};

const deserializeAws_restJson1DeviceSummaryList = (output: any, context: __SerdeContext): DeviceSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DeviceSummary(entry, context);
    });
};

const deserializeAws_restJson1DomainSummary = (output: any, context: __SerdeContext): DomainSummary => {
  return {
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    DisplayName: __expectString(output.DisplayName),
    DomainName: __expectString(output.DomainName),
    DomainStatus: __expectString(output.DomainStatus),
  } as any;
};

const deserializeAws_restJson1DomainSummaryList = (output: any, context: __SerdeContext): DomainSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DomainSummary(entry, context);
    });
};

const deserializeAws_restJson1FleetSummary = (output: any, context: __SerdeContext): FleetSummary => {
  return {
    CompanyCode: __expectString(output.CompanyCode),
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    DisplayName: __expectString(output.DisplayName),
    FleetArn: __expectString(output.FleetArn),
    FleetName: __expectString(output.FleetName),
    FleetStatus: __expectString(output.FleetStatus),
    LastUpdatedTime:
      output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagMap(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1FleetSummaryList = (output: any, context: __SerdeContext): FleetSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FleetSummary(entry, context);
    });
};

const deserializeAws_restJson1SecurityGroupIds = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1SubnetIds = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1WebsiteAuthorizationProvidersSummaryList = (
  output: any,
  context: __SerdeContext
): WebsiteAuthorizationProviderSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1WebsiteAuthorizationProviderSummary(entry, context);
    });
};

const deserializeAws_restJson1WebsiteAuthorizationProviderSummary = (
  output: any,
  context: __SerdeContext
): WebsiteAuthorizationProviderSummary => {
  return {
    AuthorizationProviderId: __expectString(output.AuthorizationProviderId),
    AuthorizationProviderType: __expectString(output.AuthorizationProviderType),
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    DomainName: __expectString(output.DomainName),
  } as any;
};

const deserializeAws_restJson1WebsiteCaSummary = (output: any, context: __SerdeContext): WebsiteCaSummary => {
  return {
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    DisplayName: __expectString(output.DisplayName),
    WebsiteCaId: __expectString(output.WebsiteCaId),
  } as any;
};

const deserializeAws_restJson1WebsiteCaSummaryList = (output: any, context: __SerdeContext): WebsiteCaSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1WebsiteCaSummary(entry, context);
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
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }

  return "";
};
