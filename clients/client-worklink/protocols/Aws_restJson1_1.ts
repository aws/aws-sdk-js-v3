import {
  AssociateDomainCommandInput,
  AssociateDomainCommandOutput
} from "../commands/AssociateDomainCommand";
import {
  AssociateWebsiteAuthorizationProviderCommandInput,
  AssociateWebsiteAuthorizationProviderCommandOutput
} from "../commands/AssociateWebsiteAuthorizationProviderCommand";
import {
  AssociateWebsiteCertificateAuthorityCommandInput,
  AssociateWebsiteCertificateAuthorityCommandOutput
} from "../commands/AssociateWebsiteCertificateAuthorityCommand";
import {
  CreateFleetCommandInput,
  CreateFleetCommandOutput
} from "../commands/CreateFleetCommand";
import {
  DeleteFleetCommandInput,
  DeleteFleetCommandOutput
} from "../commands/DeleteFleetCommand";
import {
  DescribeAuditStreamConfigurationCommandInput,
  DescribeAuditStreamConfigurationCommandOutput
} from "../commands/DescribeAuditStreamConfigurationCommand";
import {
  DescribeCompanyNetworkConfigurationCommandInput,
  DescribeCompanyNetworkConfigurationCommandOutput
} from "../commands/DescribeCompanyNetworkConfigurationCommand";
import {
  DescribeDeviceCommandInput,
  DescribeDeviceCommandOutput
} from "../commands/DescribeDeviceCommand";
import {
  DescribeDevicePolicyConfigurationCommandInput,
  DescribeDevicePolicyConfigurationCommandOutput
} from "../commands/DescribeDevicePolicyConfigurationCommand";
import {
  DescribeDomainCommandInput,
  DescribeDomainCommandOutput
} from "../commands/DescribeDomainCommand";
import {
  DescribeFleetMetadataCommandInput,
  DescribeFleetMetadataCommandOutput
} from "../commands/DescribeFleetMetadataCommand";
import {
  DescribeIdentityProviderConfigurationCommandInput,
  DescribeIdentityProviderConfigurationCommandOutput
} from "../commands/DescribeIdentityProviderConfigurationCommand";
import {
  DescribeWebsiteCertificateAuthorityCommandInput,
  DescribeWebsiteCertificateAuthorityCommandOutput
} from "../commands/DescribeWebsiteCertificateAuthorityCommand";
import {
  DisassociateDomainCommandInput,
  DisassociateDomainCommandOutput
} from "../commands/DisassociateDomainCommand";
import {
  DisassociateWebsiteAuthorizationProviderCommandInput,
  DisassociateWebsiteAuthorizationProviderCommandOutput
} from "../commands/DisassociateWebsiteAuthorizationProviderCommand";
import {
  DisassociateWebsiteCertificateAuthorityCommandInput,
  DisassociateWebsiteCertificateAuthorityCommandOutput
} from "../commands/DisassociateWebsiteCertificateAuthorityCommand";
import {
  ListDevicesCommandInput,
  ListDevicesCommandOutput
} from "../commands/ListDevicesCommand";
import {
  ListDomainsCommandInput,
  ListDomainsCommandOutput
} from "../commands/ListDomainsCommand";
import {
  ListFleetsCommandInput,
  ListFleetsCommandOutput
} from "../commands/ListFleetsCommand";
import {
  ListWebsiteAuthorizationProvidersCommandInput,
  ListWebsiteAuthorizationProvidersCommandOutput
} from "../commands/ListWebsiteAuthorizationProvidersCommand";
import {
  ListWebsiteCertificateAuthoritiesCommandInput,
  ListWebsiteCertificateAuthoritiesCommandOutput
} from "../commands/ListWebsiteCertificateAuthoritiesCommand";
import {
  RestoreDomainAccessCommandInput,
  RestoreDomainAccessCommandOutput
} from "../commands/RestoreDomainAccessCommand";
import {
  RevokeDomainAccessCommandInput,
  RevokeDomainAccessCommandOutput
} from "../commands/RevokeDomainAccessCommand";
import {
  SignOutUserCommandInput,
  SignOutUserCommandOutput
} from "../commands/SignOutUserCommand";
import {
  UpdateAuditStreamConfigurationCommandInput,
  UpdateAuditStreamConfigurationCommandOutput
} from "../commands/UpdateAuditStreamConfigurationCommand";
import {
  UpdateCompanyNetworkConfigurationCommandInput,
  UpdateCompanyNetworkConfigurationCommandOutput
} from "../commands/UpdateCompanyNetworkConfigurationCommand";
import {
  UpdateDevicePolicyConfigurationCommandInput,
  UpdateDevicePolicyConfigurationCommandOutput
} from "../commands/UpdateDevicePolicyConfigurationCommand";
import {
  UpdateDomainMetadataCommandInput,
  UpdateDomainMetadataCommandOutput
} from "../commands/UpdateDomainMetadataCommand";
import {
  UpdateFleetMetadataCommandInput,
  UpdateFleetMetadataCommandOutput
} from "../commands/UpdateFleetMetadataCommand";
import {
  UpdateIdentityProviderConfigurationCommandInput,
  UpdateIdentityProviderConfigurationCommandOutput
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
  WebsiteCaSummary
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_restJson1_1AssociateDomainCommand(
  input: AssociateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/associateDomain";
  let body: any;
  const bodyParams: any = {};
  if (input.AcmCertificateArn !== undefined) {
    bodyParams["AcmCertificateArn"] = input.AcmCertificateArn;
  }
  if (input.DisplayName !== undefined) {
    bodyParams["DisplayName"] = input.DisplayName;
  }
  if (input.DomainName !== undefined) {
    bodyParams["DomainName"] = input.DomainName;
  }
  if (input.FleetArn !== undefined) {
    bodyParams["FleetArn"] = input.FleetArn;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1AssociateWebsiteAuthorizationProviderCommand(
  input: AssociateWebsiteAuthorizationProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/associateWebsiteAuthorizationProvider";
  let body: any;
  const bodyParams: any = {};
  if (input.AuthorizationProviderType !== undefined) {
    bodyParams["AuthorizationProviderType"] = input.AuthorizationProviderType;
  }
  if (input.DomainName !== undefined) {
    bodyParams["DomainName"] = input.DomainName;
  }
  if (input.FleetArn !== undefined) {
    bodyParams["FleetArn"] = input.FleetArn;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1AssociateWebsiteCertificateAuthorityCommand(
  input: AssociateWebsiteCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/associateWebsiteCertificateAuthority";
  let body: any;
  const bodyParams: any = {};
  if (input.Certificate !== undefined) {
    bodyParams["Certificate"] = input.Certificate;
  }
  if (input.DisplayName !== undefined) {
    bodyParams["DisplayName"] = input.DisplayName;
  }
  if (input.FleetArn !== undefined) {
    bodyParams["FleetArn"] = input.FleetArn;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateFleetCommand(
  input: CreateFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/createFleet";
  let body: any;
  const bodyParams: any = {};
  if (input.DisplayName !== undefined) {
    bodyParams["DisplayName"] = input.DisplayName;
  }
  if (input.FleetName !== undefined) {
    bodyParams["FleetName"] = input.FleetName;
  }
  if (input.OptimizeForEndUserLocation !== undefined) {
    bodyParams["OptimizeForEndUserLocation"] = input.OptimizeForEndUserLocation;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DeleteFleetCommand(
  input: DeleteFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/deleteFleet";
  let body: any;
  const bodyParams: any = {};
  if (input.FleetArn !== undefined) {
    bodyParams["FleetArn"] = input.FleetArn;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DescribeAuditStreamConfigurationCommand(
  input: DescribeAuditStreamConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/describeAuditStreamConfiguration";
  let body: any;
  const bodyParams: any = {};
  if (input.FleetArn !== undefined) {
    bodyParams["FleetArn"] = input.FleetArn;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DescribeCompanyNetworkConfigurationCommand(
  input: DescribeCompanyNetworkConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/describeCompanyNetworkConfiguration";
  let body: any;
  const bodyParams: any = {};
  if (input.FleetArn !== undefined) {
    bodyParams["FleetArn"] = input.FleetArn;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DescribeDeviceCommand(
  input: DescribeDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/describeDevice";
  let body: any;
  const bodyParams: any = {};
  if (input.DeviceId !== undefined) {
    bodyParams["DeviceId"] = input.DeviceId;
  }
  if (input.FleetArn !== undefined) {
    bodyParams["FleetArn"] = input.FleetArn;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DescribeDevicePolicyConfigurationCommand(
  input: DescribeDevicePolicyConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/describeDevicePolicyConfiguration";
  let body: any;
  const bodyParams: any = {};
  if (input.FleetArn !== undefined) {
    bodyParams["FleetArn"] = input.FleetArn;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DescribeDomainCommand(
  input: DescribeDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/describeDomain";
  let body: any;
  const bodyParams: any = {};
  if (input.DomainName !== undefined) {
    bodyParams["DomainName"] = input.DomainName;
  }
  if (input.FleetArn !== undefined) {
    bodyParams["FleetArn"] = input.FleetArn;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DescribeFleetMetadataCommand(
  input: DescribeFleetMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/describeFleetMetadata";
  let body: any;
  const bodyParams: any = {};
  if (input.FleetArn !== undefined) {
    bodyParams["FleetArn"] = input.FleetArn;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DescribeIdentityProviderConfigurationCommand(
  input: DescribeIdentityProviderConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/describeIdentityProviderConfiguration";
  let body: any;
  const bodyParams: any = {};
  if (input.FleetArn !== undefined) {
    bodyParams["FleetArn"] = input.FleetArn;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DescribeWebsiteCertificateAuthorityCommand(
  input: DescribeWebsiteCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/describeWebsiteCertificateAuthority";
  let body: any;
  const bodyParams: any = {};
  if (input.FleetArn !== undefined) {
    bodyParams["FleetArn"] = input.FleetArn;
  }
  if (input.WebsiteCaId !== undefined) {
    bodyParams["WebsiteCaId"] = input.WebsiteCaId;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DisassociateDomainCommand(
  input: DisassociateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/disassociateDomain";
  let body: any;
  const bodyParams: any = {};
  if (input.DomainName !== undefined) {
    bodyParams["DomainName"] = input.DomainName;
  }
  if (input.FleetArn !== undefined) {
    bodyParams["FleetArn"] = input.FleetArn;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DisassociateWebsiteAuthorizationProviderCommand(
  input: DisassociateWebsiteAuthorizationProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/disassociateWebsiteAuthorizationProvider";
  let body: any;
  const bodyParams: any = {};
  if (input.AuthorizationProviderId !== undefined) {
    bodyParams["AuthorizationProviderId"] = input.AuthorizationProviderId;
  }
  if (input.FleetArn !== undefined) {
    bodyParams["FleetArn"] = input.FleetArn;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DisassociateWebsiteCertificateAuthorityCommand(
  input: DisassociateWebsiteCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/disassociateWebsiteCertificateAuthority";
  let body: any;
  const bodyParams: any = {};
  if (input.FleetArn !== undefined) {
    bodyParams["FleetArn"] = input.FleetArn;
  }
  if (input.WebsiteCaId !== undefined) {
    bodyParams["WebsiteCaId"] = input.WebsiteCaId;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1ListDevicesCommand(
  input: ListDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/listDevices";
  let body: any;
  const bodyParams: any = {};
  if (input.FleetArn !== undefined) {
    bodyParams["FleetArn"] = input.FleetArn;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1ListDomainsCommand(
  input: ListDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/listDomains";
  let body: any;
  const bodyParams: any = {};
  if (input.FleetArn !== undefined) {
    bodyParams["FleetArn"] = input.FleetArn;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1ListFleetsCommand(
  input: ListFleetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/listFleets";
  let body: any;
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1ListWebsiteAuthorizationProvidersCommand(
  input: ListWebsiteAuthorizationProvidersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/listWebsiteAuthorizationProviders";
  let body: any;
  const bodyParams: any = {};
  if (input.FleetArn !== undefined) {
    bodyParams["FleetArn"] = input.FleetArn;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1ListWebsiteCertificateAuthoritiesCommand(
  input: ListWebsiteCertificateAuthoritiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/listWebsiteCertificateAuthorities";
  let body: any;
  const bodyParams: any = {};
  if (input.FleetArn !== undefined) {
    bodyParams["FleetArn"] = input.FleetArn;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1RestoreDomainAccessCommand(
  input: RestoreDomainAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/restoreDomainAccess";
  let body: any;
  const bodyParams: any = {};
  if (input.DomainName !== undefined) {
    bodyParams["DomainName"] = input.DomainName;
  }
  if (input.FleetArn !== undefined) {
    bodyParams["FleetArn"] = input.FleetArn;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1RevokeDomainAccessCommand(
  input: RevokeDomainAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/revokeDomainAccess";
  let body: any;
  const bodyParams: any = {};
  if (input.DomainName !== undefined) {
    bodyParams["DomainName"] = input.DomainName;
  }
  if (input.FleetArn !== undefined) {
    bodyParams["FleetArn"] = input.FleetArn;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1SignOutUserCommand(
  input: SignOutUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/signOutUser";
  let body: any;
  const bodyParams: any = {};
  if (input.FleetArn !== undefined) {
    bodyParams["FleetArn"] = input.FleetArn;
  }
  if (input.Username !== undefined) {
    bodyParams["Username"] = input.Username;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateAuditStreamConfigurationCommand(
  input: UpdateAuditStreamConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/updateAuditStreamConfiguration";
  let body: any;
  const bodyParams: any = {};
  if (input.AuditStreamArn !== undefined) {
    bodyParams["AuditStreamArn"] = input.AuditStreamArn;
  }
  if (input.FleetArn !== undefined) {
    bodyParams["FleetArn"] = input.FleetArn;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateCompanyNetworkConfigurationCommand(
  input: UpdateCompanyNetworkConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/updateCompanyNetworkConfiguration";
  let body: any;
  const bodyParams: any = {};
  if (input.FleetArn !== undefined) {
    bodyParams["FleetArn"] = input.FleetArn;
  }
  if (input.SecurityGroupIds !== undefined) {
    bodyParams["SecurityGroupIds"] = serializeAws_restJson1_1SecurityGroupIds(
      input.SecurityGroupIds,
      context
    );
  }
  if (input.SubnetIds !== undefined) {
    bodyParams["SubnetIds"] = serializeAws_restJson1_1SubnetIds(
      input.SubnetIds,
      context
    );
  }
  if (input.VpcId !== undefined) {
    bodyParams["VpcId"] = input.VpcId;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateDevicePolicyConfigurationCommand(
  input: UpdateDevicePolicyConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/updateDevicePolicyConfiguration";
  let body: any;
  const bodyParams: any = {};
  if (input.DeviceCaCertificate !== undefined) {
    bodyParams["DeviceCaCertificate"] = input.DeviceCaCertificate;
  }
  if (input.FleetArn !== undefined) {
    bodyParams["FleetArn"] = input.FleetArn;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateDomainMetadataCommand(
  input: UpdateDomainMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/updateDomainMetadata";
  let body: any;
  const bodyParams: any = {};
  if (input.DisplayName !== undefined) {
    bodyParams["DisplayName"] = input.DisplayName;
  }
  if (input.DomainName !== undefined) {
    bodyParams["DomainName"] = input.DomainName;
  }
  if (input.FleetArn !== undefined) {
    bodyParams["FleetArn"] = input.FleetArn;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateFleetMetadataCommand(
  input: UpdateFleetMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/UpdateFleetMetadata";
  let body: any;
  const bodyParams: any = {};
  if (input.DisplayName !== undefined) {
    bodyParams["DisplayName"] = input.DisplayName;
  }
  if (input.FleetArn !== undefined) {
    bodyParams["FleetArn"] = input.FleetArn;
  }
  if (input.OptimizeForEndUserLocation !== undefined) {
    bodyParams["OptimizeForEndUserLocation"] = input.OptimizeForEndUserLocation;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateIdentityProviderConfigurationCommand(
  input: UpdateIdentityProviderConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/updateIdentityProviderConfiguration";
  let body: any;
  const bodyParams: any = {};
  if (input.FleetArn !== undefined) {
    bodyParams["FleetArn"] = input.FleetArn;
  }
  if (input.IdentityProviderSamlMetadata !== undefined) {
    bodyParams["IdentityProviderSamlMetadata"] =
      input.IdentityProviderSamlMetadata;
  }
  if (input.IdentityProviderType !== undefined) {
    bodyParams["IdentityProviderType"] = input.IdentityProviderType;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1AssociateDomainCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDomainCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1AssociateDomainCommandError(
      output,
      context
    );
  }
  const contents: AssociateDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AssociateDomainResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1AssociateDomainCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDomainCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.awsargoncontrolplane#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.awsargoncontrolplane#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.awsargoncontrolplane#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsargoncontrolplane#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsargoncontrolplane#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.awsargoncontrolplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1AssociateWebsiteAuthorizationProviderCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateWebsiteAuthorizationProviderCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1AssociateWebsiteAuthorizationProviderCommandError(
      output,
      context
    );
  }
  const contents: AssociateWebsiteAuthorizationProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AssociateWebsiteAuthorizationProviderResponse",
    AuthorizationProviderId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.AuthorizationProviderId !== undefined &&
    data.AuthorizationProviderId !== null
  ) {
    contents.AuthorizationProviderId = data.AuthorizationProviderId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1AssociateWebsiteAuthorizationProviderCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateWebsiteAuthorizationProviderCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.awsargoncontrolplane#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.awsargoncontrolplane#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.awsargoncontrolplane#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsargoncontrolplane#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsargoncontrolplane#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.awsargoncontrolplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1AssociateWebsiteCertificateAuthorityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateWebsiteCertificateAuthorityCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1AssociateWebsiteCertificateAuthorityCommandError(
      output,
      context
    );
  }
  const contents: AssociateWebsiteCertificateAuthorityCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AssociateWebsiteCertificateAuthorityResponse",
    WebsiteCaId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.WebsiteCaId !== undefined && data.WebsiteCaId !== null) {
    contents.WebsiteCaId = data.WebsiteCaId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1AssociateWebsiteCertificateAuthorityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateWebsiteCertificateAuthorityCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.awsargoncontrolplane#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.awsargoncontrolplane#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.awsargoncontrolplane#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsargoncontrolplane#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsargoncontrolplane#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.awsargoncontrolplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1CreateFleetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFleetCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateFleetCommandError(output, context);
  }
  const contents: CreateFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateFleetResponse",
    FleetArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.FleetArn !== undefined && data.FleetArn !== null) {
    contents.FleetArn = data.FleetArn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateFleetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFleetCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.awsargoncontrolplane#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.awsargoncontrolplane#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.awsargoncontrolplane#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsargoncontrolplane#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsargoncontrolplane#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.awsargoncontrolplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DeleteFleetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFleetCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteFleetCommandError(output, context);
  }
  const contents: DeleteFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteFleetResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteFleetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFleetCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.awsargoncontrolplane#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.awsargoncontrolplane#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsargoncontrolplane#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsargoncontrolplane#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.awsargoncontrolplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DescribeAuditStreamConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAuditStreamConfigurationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeAuditStreamConfigurationCommandError(
      output,
      context
    );
  }
  const contents: DescribeAuditStreamConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeAuditStreamConfigurationResponse",
    AuditStreamArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.AuditStreamArn !== undefined && data.AuditStreamArn !== null) {
    contents.AuditStreamArn = data.AuditStreamArn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeAuditStreamConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAuditStreamConfigurationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.awsargoncontrolplane#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.awsargoncontrolplane#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsargoncontrolplane#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsargoncontrolplane#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.awsargoncontrolplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DescribeCompanyNetworkConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCompanyNetworkConfigurationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeCompanyNetworkConfigurationCommandError(
      output,
      context
    );
  }
  const contents: DescribeCompanyNetworkConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeCompanyNetworkConfigurationResponse",
    SecurityGroupIds: undefined,
    SubnetIds: undefined,
    VpcId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.SecurityGroupIds !== undefined && data.SecurityGroupIds !== null) {
    contents.SecurityGroupIds = deserializeAws_restJson1_1SecurityGroupIds(
      data.SecurityGroupIds,
      context
    );
  }
  if (data.SubnetIds !== undefined && data.SubnetIds !== null) {
    contents.SubnetIds = deserializeAws_restJson1_1SubnetIds(
      data.SubnetIds,
      context
    );
  }
  if (data.VpcId !== undefined && data.VpcId !== null) {
    contents.VpcId = data.VpcId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeCompanyNetworkConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCompanyNetworkConfigurationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.awsargoncontrolplane#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.awsargoncontrolplane#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsargoncontrolplane#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsargoncontrolplane#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.awsargoncontrolplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DescribeDeviceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeviceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeDeviceCommandError(
      output,
      context
    );
  }
  const contents: DescribeDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDeviceResponse",
    FirstAccessedTime: undefined,
    LastAccessedTime: undefined,
    Manufacturer: undefined,
    Model: undefined,
    OperatingSystem: undefined,
    OperatingSystemVersion: undefined,
    PatchLevel: undefined,
    Status: undefined,
    Username: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.FirstAccessedTime !== undefined && data.FirstAccessedTime !== null) {
    contents.FirstAccessedTime = new Date(
      Math.round(data.FirstAccessedTime * 1000)
    );
  }
  if (data.LastAccessedTime !== undefined && data.LastAccessedTime !== null) {
    contents.LastAccessedTime = new Date(
      Math.round(data.LastAccessedTime * 1000)
    );
  }
  if (data.Manufacturer !== undefined && data.Manufacturer !== null) {
    contents.Manufacturer = data.Manufacturer;
  }
  if (data.Model !== undefined && data.Model !== null) {
    contents.Model = data.Model;
  }
  if (data.OperatingSystem !== undefined && data.OperatingSystem !== null) {
    contents.OperatingSystem = data.OperatingSystem;
  }
  if (
    data.OperatingSystemVersion !== undefined &&
    data.OperatingSystemVersion !== null
  ) {
    contents.OperatingSystemVersion = data.OperatingSystemVersion;
  }
  if (data.PatchLevel !== undefined && data.PatchLevel !== null) {
    contents.PatchLevel = data.PatchLevel;
  }
  if (data.Status !== undefined && data.Status !== null) {
    contents.Status = data.Status;
  }
  if (data.Username !== undefined && data.Username !== null) {
    contents.Username = data.Username;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeDeviceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeviceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.awsargoncontrolplane#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.awsargoncontrolplane#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsargoncontrolplane#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsargoncontrolplane#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.awsargoncontrolplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DescribeDevicePolicyConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDevicePolicyConfigurationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeDevicePolicyConfigurationCommandError(
      output,
      context
    );
  }
  const contents: DescribeDevicePolicyConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDevicePolicyConfigurationResponse",
    DeviceCaCertificate: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.DeviceCaCertificate !== undefined &&
    data.DeviceCaCertificate !== null
  ) {
    contents.DeviceCaCertificate = data.DeviceCaCertificate;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeDevicePolicyConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDevicePolicyConfigurationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.awsargoncontrolplane#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.awsargoncontrolplane#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsargoncontrolplane#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsargoncontrolplane#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.awsargoncontrolplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DescribeDomainCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeDomainCommandError(
      output,
      context
    );
  }
  const contents: DescribeDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDomainResponse",
    AcmCertificateArn: undefined,
    CreatedTime: undefined,
    DisplayName: undefined,
    DomainName: undefined,
    DomainStatus: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.AcmCertificateArn !== undefined && data.AcmCertificateArn !== null) {
    contents.AcmCertificateArn = data.AcmCertificateArn;
  }
  if (data.CreatedTime !== undefined && data.CreatedTime !== null) {
    contents.CreatedTime = new Date(Math.round(data.CreatedTime * 1000));
  }
  if (data.DisplayName !== undefined && data.DisplayName !== null) {
    contents.DisplayName = data.DisplayName;
  }
  if (data.DomainName !== undefined && data.DomainName !== null) {
    contents.DomainName = data.DomainName;
  }
  if (data.DomainStatus !== undefined && data.DomainStatus !== null) {
    contents.DomainStatus = data.DomainStatus;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeDomainCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.awsargoncontrolplane#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.awsargoncontrolplane#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsargoncontrolplane#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsargoncontrolplane#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.awsargoncontrolplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DescribeFleetMetadataCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetMetadataCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeFleetMetadataCommandError(
      output,
      context
    );
  }
  const contents: DescribeFleetMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeFleetMetadataResponse",
    CompanyCode: undefined,
    CreatedTime: undefined,
    DisplayName: undefined,
    FleetName: undefined,
    FleetStatus: undefined,
    LastUpdatedTime: undefined,
    OptimizeForEndUserLocation: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.CompanyCode !== undefined && data.CompanyCode !== null) {
    contents.CompanyCode = data.CompanyCode;
  }
  if (data.CreatedTime !== undefined && data.CreatedTime !== null) {
    contents.CreatedTime = new Date(Math.round(data.CreatedTime * 1000));
  }
  if (data.DisplayName !== undefined && data.DisplayName !== null) {
    contents.DisplayName = data.DisplayName;
  }
  if (data.FleetName !== undefined && data.FleetName !== null) {
    contents.FleetName = data.FleetName;
  }
  if (data.FleetStatus !== undefined && data.FleetStatus !== null) {
    contents.FleetStatus = data.FleetStatus;
  }
  if (data.LastUpdatedTime !== undefined && data.LastUpdatedTime !== null) {
    contents.LastUpdatedTime = new Date(
      Math.round(data.LastUpdatedTime * 1000)
    );
  }
  if (
    data.OptimizeForEndUserLocation !== undefined &&
    data.OptimizeForEndUserLocation !== null
  ) {
    contents.OptimizeForEndUserLocation = data.OptimizeForEndUserLocation;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeFleetMetadataCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetMetadataCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.awsargoncontrolplane#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.awsargoncontrolplane#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsargoncontrolplane#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsargoncontrolplane#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.awsargoncontrolplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DescribeIdentityProviderConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIdentityProviderConfigurationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeIdentityProviderConfigurationCommandError(
      output,
      context
    );
  }
  const contents: DescribeIdentityProviderConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeIdentityProviderConfigurationResponse",
    IdentityProviderSamlMetadata: undefined,
    IdentityProviderType: undefined,
    ServiceProviderSamlMetadata: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.IdentityProviderSamlMetadata !== undefined &&
    data.IdentityProviderSamlMetadata !== null
  ) {
    contents.IdentityProviderSamlMetadata = data.IdentityProviderSamlMetadata;
  }
  if (
    data.IdentityProviderType !== undefined &&
    data.IdentityProviderType !== null
  ) {
    contents.IdentityProviderType = data.IdentityProviderType;
  }
  if (
    data.ServiceProviderSamlMetadata !== undefined &&
    data.ServiceProviderSamlMetadata !== null
  ) {
    contents.ServiceProviderSamlMetadata = data.ServiceProviderSamlMetadata;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeIdentityProviderConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIdentityProviderConfigurationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.awsargoncontrolplane#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.awsargoncontrolplane#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsargoncontrolplane#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsargoncontrolplane#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.awsargoncontrolplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DescribeWebsiteCertificateAuthorityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWebsiteCertificateAuthorityCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeWebsiteCertificateAuthorityCommandError(
      output,
      context
    );
  }
  const contents: DescribeWebsiteCertificateAuthorityCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeWebsiteCertificateAuthorityResponse",
    Certificate: undefined,
    CreatedTime: undefined,
    DisplayName: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Certificate !== undefined && data.Certificate !== null) {
    contents.Certificate = data.Certificate;
  }
  if (data.CreatedTime !== undefined && data.CreatedTime !== null) {
    contents.CreatedTime = new Date(Math.round(data.CreatedTime * 1000));
  }
  if (data.DisplayName !== undefined && data.DisplayName !== null) {
    contents.DisplayName = data.DisplayName;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeWebsiteCertificateAuthorityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWebsiteCertificateAuthorityCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.awsargoncontrolplane#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.awsargoncontrolplane#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsargoncontrolplane#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsargoncontrolplane#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.awsargoncontrolplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DisassociateDomainCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDomainCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DisassociateDomainCommandError(
      output,
      context
    );
  }
  const contents: DisassociateDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisassociateDomainResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DisassociateDomainCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDomainCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.awsargoncontrolplane#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.awsargoncontrolplane#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsargoncontrolplane#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsargoncontrolplane#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.awsargoncontrolplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DisassociateWebsiteAuthorizationProviderCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateWebsiteAuthorizationProviderCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DisassociateWebsiteAuthorizationProviderCommandError(
      output,
      context
    );
  }
  const contents: DisassociateWebsiteAuthorizationProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisassociateWebsiteAuthorizationProviderResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DisassociateWebsiteAuthorizationProviderCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateWebsiteAuthorizationProviderCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.awsargoncontrolplane#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.awsargoncontrolplane#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.awsargoncontrolplane#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsargoncontrolplane#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsargoncontrolplane#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.awsargoncontrolplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DisassociateWebsiteCertificateAuthorityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateWebsiteCertificateAuthorityCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DisassociateWebsiteCertificateAuthorityCommandError(
      output,
      context
    );
  }
  const contents: DisassociateWebsiteCertificateAuthorityCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisassociateWebsiteCertificateAuthorityResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DisassociateWebsiteCertificateAuthorityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateWebsiteCertificateAuthorityCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.awsargoncontrolplane#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.awsargoncontrolplane#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsargoncontrolplane#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsargoncontrolplane#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.awsargoncontrolplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1ListDevicesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListDevicesCommandError(output, context);
  }
  const contents: ListDevicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDevicesResponse",
    Devices: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Devices !== undefined && data.Devices !== null) {
    contents.Devices = deserializeAws_restJson1_1DeviceSummaryList(
      data.Devices,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListDevicesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.awsargoncontrolplane#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.awsargoncontrolplane#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsargoncontrolplane#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsargoncontrolplane#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.awsargoncontrolplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1ListDomainsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListDomainsCommandError(output, context);
  }
  const contents: ListDomainsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDomainsResponse",
    Domains: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Domains !== undefined && data.Domains !== null) {
    contents.Domains = deserializeAws_restJson1_1DomainSummaryList(
      data.Domains,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListDomainsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.awsargoncontrolplane#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.awsargoncontrolplane#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsargoncontrolplane#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.awsargoncontrolplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1ListFleetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFleetsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListFleetsCommandError(output, context);
  }
  const contents: ListFleetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListFleetsResponse",
    FleetSummaryList: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.FleetSummaryList !== undefined && data.FleetSummaryList !== null) {
    contents.FleetSummaryList = deserializeAws_restJson1_1FleetSummaryList(
      data.FleetSummaryList,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListFleetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFleetsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.awsargoncontrolplane#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.awsargoncontrolplane#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsargoncontrolplane#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.awsargoncontrolplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1ListWebsiteAuthorizationProvidersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWebsiteAuthorizationProvidersCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListWebsiteAuthorizationProvidersCommandError(
      output,
      context
    );
  }
  const contents: ListWebsiteAuthorizationProvidersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListWebsiteAuthorizationProvidersResponse",
    NextToken: undefined,
    WebsiteAuthorizationProviders: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (
    data.WebsiteAuthorizationProviders !== undefined &&
    data.WebsiteAuthorizationProviders !== null
  ) {
    contents.WebsiteAuthorizationProviders = deserializeAws_restJson1_1WebsiteAuthorizationProvidersSummaryList(
      data.WebsiteAuthorizationProviders,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListWebsiteAuthorizationProvidersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWebsiteAuthorizationProvidersCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.awsargoncontrolplane#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.awsargoncontrolplane#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsargoncontrolplane#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsargoncontrolplane#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.awsargoncontrolplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1ListWebsiteCertificateAuthoritiesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWebsiteCertificateAuthoritiesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListWebsiteCertificateAuthoritiesCommandError(
      output,
      context
    );
  }
  const contents: ListWebsiteCertificateAuthoritiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListWebsiteCertificateAuthoritiesResponse",
    NextToken: undefined,
    WebsiteCertificateAuthorities: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (
    data.WebsiteCertificateAuthorities !== undefined &&
    data.WebsiteCertificateAuthorities !== null
  ) {
    contents.WebsiteCertificateAuthorities = deserializeAws_restJson1_1WebsiteCaSummaryList(
      data.WebsiteCertificateAuthorities,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListWebsiteCertificateAuthoritiesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWebsiteCertificateAuthoritiesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.awsargoncontrolplane#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.awsargoncontrolplane#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsargoncontrolplane#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.awsargoncontrolplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1RestoreDomainAccessCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreDomainAccessCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1RestoreDomainAccessCommandError(
      output,
      context
    );
  }
  const contents: RestoreDomainAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RestoreDomainAccessResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1RestoreDomainAccessCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreDomainAccessCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.awsargoncontrolplane#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.awsargoncontrolplane#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsargoncontrolplane#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsargoncontrolplane#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.awsargoncontrolplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1RevokeDomainAccessCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeDomainAccessCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1RevokeDomainAccessCommandError(
      output,
      context
    );
  }
  const contents: RevokeDomainAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RevokeDomainAccessResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1RevokeDomainAccessCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeDomainAccessCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.awsargoncontrolplane#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.awsargoncontrolplane#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsargoncontrolplane#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsargoncontrolplane#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.awsargoncontrolplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1SignOutUserCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SignOutUserCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1SignOutUserCommandError(output, context);
  }
  const contents: SignOutUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SignOutUserResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1SignOutUserCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SignOutUserCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.awsargoncontrolplane#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.awsargoncontrolplane#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsargoncontrolplane#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsargoncontrolplane#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.awsargoncontrolplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1UpdateAuditStreamConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAuditStreamConfigurationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateAuditStreamConfigurationCommandError(
      output,
      context
    );
  }
  const contents: UpdateAuditStreamConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateAuditStreamConfigurationResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateAuditStreamConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAuditStreamConfigurationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.awsargoncontrolplane#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.awsargoncontrolplane#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsargoncontrolplane#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsargoncontrolplane#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.awsargoncontrolplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1UpdateCompanyNetworkConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCompanyNetworkConfigurationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateCompanyNetworkConfigurationCommandError(
      output,
      context
    );
  }
  const contents: UpdateCompanyNetworkConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateCompanyNetworkConfigurationResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateCompanyNetworkConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCompanyNetworkConfigurationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.awsargoncontrolplane#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.awsargoncontrolplane#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsargoncontrolplane#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsargoncontrolplane#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.awsargoncontrolplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1UpdateDevicePolicyConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDevicePolicyConfigurationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateDevicePolicyConfigurationCommandError(
      output,
      context
    );
  }
  const contents: UpdateDevicePolicyConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateDevicePolicyConfigurationResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateDevicePolicyConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDevicePolicyConfigurationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.awsargoncontrolplane#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.awsargoncontrolplane#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsargoncontrolplane#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsargoncontrolplane#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.awsargoncontrolplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1UpdateDomainMetadataCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainMetadataCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateDomainMetadataCommandError(
      output,
      context
    );
  }
  const contents: UpdateDomainMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateDomainMetadataResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateDomainMetadataCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainMetadataCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.awsargoncontrolplane#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.awsargoncontrolplane#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsargoncontrolplane#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsargoncontrolplane#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.awsargoncontrolplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1UpdateFleetMetadataCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFleetMetadataCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateFleetMetadataCommandError(
      output,
      context
    );
  }
  const contents: UpdateFleetMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateFleetMetadataResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateFleetMetadataCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFleetMetadataCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.awsargoncontrolplane#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.awsargoncontrolplane#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsargoncontrolplane#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsargoncontrolplane#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.awsargoncontrolplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1UpdateIdentityProviderConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIdentityProviderConfigurationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateIdentityProviderConfigurationCommandError(
      output,
      context
    );
  }
  const contents: UpdateIdentityProviderConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateIdentityProviderConfigurationResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateIdentityProviderConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIdentityProviderConfigurationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerErrorException":
    case "com.amazonaws.awsargoncontrolplane#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.awsargoncontrolplane#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsargoncontrolplane#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsargoncontrolplane#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.awsargoncontrolplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

const deserializeAws_restJson1_1InternalServerErrorExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: InternalServerErrorException = {
    name: "InternalServerErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const contents: ResourceAlreadyExistsException = {
    name: "ResourceAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1TooManyRequestsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1UnauthorizedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: UnauthorizedException = {
    name: "UnauthorizedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const serializeAws_restJson1_1SecurityGroupIds = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1SubnetIds = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const deserializeAws_restJson1_1DeviceSummary = (
  output: any,
  context: __SerdeContext
): DeviceSummary => {
  let contents: any = {
    __type: "DeviceSummary",
    DeviceId: undefined,
    DeviceStatus: undefined
  };
  if (output.DeviceId !== undefined && output.DeviceId !== null) {
    contents.DeviceId = output.DeviceId;
  }
  if (output.DeviceStatus !== undefined && output.DeviceStatus !== null) {
    contents.DeviceStatus = output.DeviceStatus;
  }
  return contents;
};

const deserializeAws_restJson1_1DeviceSummaryList = (
  output: any,
  context: __SerdeContext
): Array<DeviceSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DeviceSummary(entry, context)
  );
};

const deserializeAws_restJson1_1DomainSummary = (
  output: any,
  context: __SerdeContext
): DomainSummary => {
  let contents: any = {
    __type: "DomainSummary",
    CreatedTime: undefined,
    DisplayName: undefined,
    DomainName: undefined,
    DomainStatus: undefined
  };
  if (output.CreatedTime !== undefined && output.CreatedTime !== null) {
    contents.CreatedTime = new Date(Math.round(output.CreatedTime * 1000));
  }
  if (output.DisplayName !== undefined && output.DisplayName !== null) {
    contents.DisplayName = output.DisplayName;
  }
  if (output.DomainName !== undefined && output.DomainName !== null) {
    contents.DomainName = output.DomainName;
  }
  if (output.DomainStatus !== undefined && output.DomainStatus !== null) {
    contents.DomainStatus = output.DomainStatus;
  }
  return contents;
};

const deserializeAws_restJson1_1DomainSummaryList = (
  output: any,
  context: __SerdeContext
): Array<DomainSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DomainSummary(entry, context)
  );
};

const deserializeAws_restJson1_1FleetSummary = (
  output: any,
  context: __SerdeContext
): FleetSummary => {
  let contents: any = {
    __type: "FleetSummary",
    CompanyCode: undefined,
    CreatedTime: undefined,
    DisplayName: undefined,
    FleetArn: undefined,
    FleetName: undefined,
    FleetStatus: undefined,
    LastUpdatedTime: undefined
  };
  if (output.CompanyCode !== undefined && output.CompanyCode !== null) {
    contents.CompanyCode = output.CompanyCode;
  }
  if (output.CreatedTime !== undefined && output.CreatedTime !== null) {
    contents.CreatedTime = new Date(Math.round(output.CreatedTime * 1000));
  }
  if (output.DisplayName !== undefined && output.DisplayName !== null) {
    contents.DisplayName = output.DisplayName;
  }
  if (output.FleetArn !== undefined && output.FleetArn !== null) {
    contents.FleetArn = output.FleetArn;
  }
  if (output.FleetName !== undefined && output.FleetName !== null) {
    contents.FleetName = output.FleetName;
  }
  if (output.FleetStatus !== undefined && output.FleetStatus !== null) {
    contents.FleetStatus = output.FleetStatus;
  }
  if (output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null) {
    contents.LastUpdatedTime = new Date(
      Math.round(output.LastUpdatedTime * 1000)
    );
  }
  return contents;
};

const deserializeAws_restJson1_1FleetSummaryList = (
  output: any,
  context: __SerdeContext
): Array<FleetSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1FleetSummary(entry, context)
  );
};

const deserializeAws_restJson1_1SecurityGroupIds = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1SubnetIds = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1WebsiteAuthorizationProviderSummary = (
  output: any,
  context: __SerdeContext
): WebsiteAuthorizationProviderSummary => {
  let contents: any = {
    __type: "WebsiteAuthorizationProviderSummary",
    AuthorizationProviderId: undefined,
    AuthorizationProviderType: undefined,
    CreatedTime: undefined,
    DomainName: undefined
  };
  if (
    output.AuthorizationProviderId !== undefined &&
    output.AuthorizationProviderId !== null
  ) {
    contents.AuthorizationProviderId = output.AuthorizationProviderId;
  }
  if (
    output.AuthorizationProviderType !== undefined &&
    output.AuthorizationProviderType !== null
  ) {
    contents.AuthorizationProviderType = output.AuthorizationProviderType;
  }
  if (output.CreatedTime !== undefined && output.CreatedTime !== null) {
    contents.CreatedTime = new Date(Math.round(output.CreatedTime * 1000));
  }
  if (output.DomainName !== undefined && output.DomainName !== null) {
    contents.DomainName = output.DomainName;
  }
  return contents;
};

const deserializeAws_restJson1_1WebsiteAuthorizationProvidersSummaryList = (
  output: any,
  context: __SerdeContext
): Array<WebsiteAuthorizationProviderSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1WebsiteAuthorizationProviderSummary(
      entry,
      context
    )
  );
};

const deserializeAws_restJson1_1WebsiteCaSummary = (
  output: any,
  context: __SerdeContext
): WebsiteCaSummary => {
  let contents: any = {
    __type: "WebsiteCaSummary",
    CreatedTime: undefined,
    DisplayName: undefined,
    WebsiteCaId: undefined
  };
  if (output.CreatedTime !== undefined && output.CreatedTime !== null) {
    contents.CreatedTime = new Date(Math.round(output.CreatedTime * 1000));
  }
  if (output.DisplayName !== undefined && output.DisplayName !== null) {
    contents.DisplayName = output.DisplayName;
  }
  if (output.WebsiteCaId !== undefined && output.WebsiteCaId !== null) {
    contents.WebsiteCaId = output.WebsiteCaId;
  }
  return contents;
};

const deserializeAws_restJson1_1WebsiteCaSummaryList = (
  output: any,
  context: __SerdeContext
): Array<WebsiteCaSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1WebsiteCaSummary(entry, context)
  );
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
