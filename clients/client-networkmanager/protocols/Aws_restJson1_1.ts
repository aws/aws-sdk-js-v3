import {
  AssociateCustomerGatewayCommandInput,
  AssociateCustomerGatewayCommandOutput
} from "../commands/AssociateCustomerGatewayCommand";
import {
  AssociateLinkCommandInput,
  AssociateLinkCommandOutput
} from "../commands/AssociateLinkCommand";
import {
  CreateDeviceCommandInput,
  CreateDeviceCommandOutput
} from "../commands/CreateDeviceCommand";
import {
  CreateGlobalNetworkCommandInput,
  CreateGlobalNetworkCommandOutput
} from "../commands/CreateGlobalNetworkCommand";
import {
  CreateLinkCommandInput,
  CreateLinkCommandOutput
} from "../commands/CreateLinkCommand";
import {
  CreateSiteCommandInput,
  CreateSiteCommandOutput
} from "../commands/CreateSiteCommand";
import {
  DeleteDeviceCommandInput,
  DeleteDeviceCommandOutput
} from "../commands/DeleteDeviceCommand";
import {
  DeleteGlobalNetworkCommandInput,
  DeleteGlobalNetworkCommandOutput
} from "../commands/DeleteGlobalNetworkCommand";
import {
  DeleteLinkCommandInput,
  DeleteLinkCommandOutput
} from "../commands/DeleteLinkCommand";
import {
  DeleteSiteCommandInput,
  DeleteSiteCommandOutput
} from "../commands/DeleteSiteCommand";
import {
  DeregisterTransitGatewayCommandInput,
  DeregisterTransitGatewayCommandOutput
} from "../commands/DeregisterTransitGatewayCommand";
import {
  DescribeGlobalNetworksCommandInput,
  DescribeGlobalNetworksCommandOutput
} from "../commands/DescribeGlobalNetworksCommand";
import {
  DisassociateCustomerGatewayCommandInput,
  DisassociateCustomerGatewayCommandOutput
} from "../commands/DisassociateCustomerGatewayCommand";
import {
  DisassociateLinkCommandInput,
  DisassociateLinkCommandOutput
} from "../commands/DisassociateLinkCommand";
import {
  GetCustomerGatewayAssociationsCommandInput,
  GetCustomerGatewayAssociationsCommandOutput
} from "../commands/GetCustomerGatewayAssociationsCommand";
import {
  GetDevicesCommandInput,
  GetDevicesCommandOutput
} from "../commands/GetDevicesCommand";
import {
  GetLinkAssociationsCommandInput,
  GetLinkAssociationsCommandOutput
} from "../commands/GetLinkAssociationsCommand";
import {
  GetLinksCommandInput,
  GetLinksCommandOutput
} from "../commands/GetLinksCommand";
import {
  GetSitesCommandInput,
  GetSitesCommandOutput
} from "../commands/GetSitesCommand";
import {
  GetTransitGatewayRegistrationsCommandInput,
  GetTransitGatewayRegistrationsCommandOutput
} from "../commands/GetTransitGatewayRegistrationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  RegisterTransitGatewayCommandInput,
  RegisterTransitGatewayCommandOutput
} from "../commands/RegisterTransitGatewayCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateDeviceCommandInput,
  UpdateDeviceCommandOutput
} from "../commands/UpdateDeviceCommand";
import {
  UpdateGlobalNetworkCommandInput,
  UpdateGlobalNetworkCommandOutput
} from "../commands/UpdateGlobalNetworkCommand";
import {
  UpdateLinkCommandInput,
  UpdateLinkCommandOutput
} from "../commands/UpdateLinkCommand";
import {
  UpdateSiteCommandInput,
  UpdateSiteCommandOutput
} from "../commands/UpdateSiteCommand";
import {
  AccessDeniedException,
  Bandwidth,
  ConflictException,
  CustomerGatewayAssociation,
  Device,
  GlobalNetwork,
  InternalServerException,
  Link,
  LinkAssociation,
  Location,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  Site,
  Tag,
  ThrottlingException,
  TransitGatewayRegistration,
  TransitGatewayRegistrationStateReason,
  ValidationException,
  ValidationExceptionField
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_restJson1_1AssociateCustomerGatewayCommand(
  input: AssociateCustomerGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath =
    "/global-networks/{GlobalNetworkId}/customer-gateway-associations";
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: GlobalNetworkId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{GlobalNetworkId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.CustomerGatewayArn !== undefined) {
    bodyParams["CustomerGatewayArn"] = input.CustomerGatewayArn;
  }
  if (input.DeviceId !== undefined) {
    bodyParams["DeviceId"] = input.DeviceId;
  }
  if (input.LinkId !== undefined) {
    bodyParams["LinkId"] = input.LinkId;
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

export async function serializeAws_restJson1_1AssociateLinkCommand(
  input: AssociateLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/global-networks/{GlobalNetworkId}/link-associations";
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: GlobalNetworkId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{GlobalNetworkId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.DeviceId !== undefined) {
    bodyParams["DeviceId"] = input.DeviceId;
  }
  if (input.LinkId !== undefined) {
    bodyParams["LinkId"] = input.LinkId;
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

export async function serializeAws_restJson1_1CreateDeviceCommand(
  input: CreateDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/global-networks/{GlobalNetworkId}/devices";
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: GlobalNetworkId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{GlobalNetworkId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Location !== undefined) {
    bodyParams["Location"] = serializeAws_restJson1_1Location(
      input.Location,
      context
    );
  }
  if (input.Model !== undefined) {
    bodyParams["Model"] = input.Model;
  }
  if (input.SerialNumber !== undefined) {
    bodyParams["SerialNumber"] = input.SerialNumber;
  }
  if (input.SiteId !== undefined) {
    bodyParams["SiteId"] = input.SiteId;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1TagList(input.Tags, context);
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  if (input.Vendor !== undefined) {
    bodyParams["Vendor"] = input.Vendor;
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

export async function serializeAws_restJson1_1CreateGlobalNetworkCommand(
  input: CreateGlobalNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/global-networks";
  let body: any;
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1TagList(input.Tags, context);
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

export async function serializeAws_restJson1_1CreateLinkCommand(
  input: CreateLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/global-networks/{GlobalNetworkId}/links";
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: GlobalNetworkId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{GlobalNetworkId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Bandwidth !== undefined) {
    bodyParams["Bandwidth"] = serializeAws_restJson1_1Bandwidth(
      input.Bandwidth,
      context
    );
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Provider !== undefined) {
    bodyParams["Provider"] = input.Provider;
  }
  if (input.SiteId !== undefined) {
    bodyParams["SiteId"] = input.SiteId;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1TagList(input.Tags, context);
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
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

export async function serializeAws_restJson1_1CreateSiteCommand(
  input: CreateSiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/global-networks/{GlobalNetworkId}/sites";
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: GlobalNetworkId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{GlobalNetworkId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Location !== undefined) {
    bodyParams["Location"] = serializeAws_restJson1_1Location(
      input.Location,
      context
    );
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1TagList(input.Tags, context);
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

export async function serializeAws_restJson1_1DeleteDeviceCommand(
  input: DeleteDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/global-networks/{GlobalNetworkId}/devices/{DeviceId}";
  if (input.DeviceId !== undefined) {
    const labelValue: string = input.DeviceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DeviceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DeviceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DeviceId.");
  }
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: GlobalNetworkId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{GlobalNetworkId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteGlobalNetworkCommand(
  input: DeleteGlobalNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/global-networks/{GlobalNetworkId}";
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: GlobalNetworkId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{GlobalNetworkId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteLinkCommand(
  input: DeleteLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/global-networks/{GlobalNetworkId}/links/{LinkId}";
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: GlobalNetworkId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{GlobalNetworkId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  if (input.LinkId !== undefined) {
    const labelValue: string = input.LinkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: LinkId.");
    }
    resolvedPath = resolvedPath.replace(
      "{LinkId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: LinkId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteSiteCommand(
  input: DeleteSiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/global-networks/{GlobalNetworkId}/sites/{SiteId}";
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: GlobalNetworkId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{GlobalNetworkId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  if (input.SiteId !== undefined) {
    const labelValue: string = input.SiteId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SiteId.");
    }
    resolvedPath = resolvedPath.replace(
      "{SiteId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: SiteId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeregisterTransitGatewayCommand(
  input: DeregisterTransitGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/global-networks/{GlobalNetworkId}/transit-gateway-registrations/{TransitGatewayArn}";
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: GlobalNetworkId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{GlobalNetworkId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  if (input.TransitGatewayArn !== undefined) {
    const labelValue: string = input.TransitGatewayArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: TransitGatewayArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{TransitGatewayArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: TransitGatewayArn."
    );
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeGlobalNetworksCommand(
  input: DescribeGlobalNetworksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/global-networks";
  const query: any = {};
  if (input.GlobalNetworkIds !== undefined) {
    query["globalNetworkIds"] = input.GlobalNetworkIds;
  }
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1DisassociateCustomerGatewayCommand(
  input: DisassociateCustomerGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/global-networks/{GlobalNetworkId}/customer-gateway-associations/{CustomerGatewayArn}";
  if (input.CustomerGatewayArn !== undefined) {
    const labelValue: string = input.CustomerGatewayArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: CustomerGatewayArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{CustomerGatewayArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: CustomerGatewayArn."
    );
  }
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: GlobalNetworkId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{GlobalNetworkId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DisassociateLinkCommand(
  input: DisassociateLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/global-networks/{GlobalNetworkId}/link-associations";
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: GlobalNetworkId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{GlobalNetworkId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  const query: any = {};
  if (input.DeviceId !== undefined) {
    query["deviceId"] = input.DeviceId;
  }
  if (input.LinkId !== undefined) {
    query["linkId"] = input.LinkId;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetCustomerGatewayAssociationsCommand(
  input: GetCustomerGatewayAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/global-networks/{GlobalNetworkId}/customer-gateway-associations";
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: GlobalNetworkId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{GlobalNetworkId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  const query: any = {};
  if (input.CustomerGatewayArns !== undefined) {
    query["customerGatewayArns"] = input.CustomerGatewayArns;
  }
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetDevicesCommand(
  input: GetDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/global-networks/{GlobalNetworkId}/devices";
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: GlobalNetworkId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{GlobalNetworkId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  const query: any = {};
  if (input.DeviceIds !== undefined) {
    query["deviceIds"] = input.DeviceIds;
  }
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
  }
  if (input.SiteId !== undefined) {
    query["siteId"] = input.SiteId;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetLinkAssociationsCommand(
  input: GetLinkAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/global-networks/{GlobalNetworkId}/link-associations";
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: GlobalNetworkId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{GlobalNetworkId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  const query: any = {};
  if (input.DeviceId !== undefined) {
    query["deviceId"] = input.DeviceId;
  }
  if (input.LinkId !== undefined) {
    query["linkId"] = input.LinkId;
  }
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetLinksCommand(
  input: GetLinksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/global-networks/{GlobalNetworkId}/links";
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: GlobalNetworkId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{GlobalNetworkId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  const query: any = {};
  if (input.LinkIds !== undefined) {
    query["linkIds"] = input.LinkIds;
  }
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
  }
  if (input.Provider !== undefined) {
    query["provider"] = input.Provider;
  }
  if (input.SiteId !== undefined) {
    query["siteId"] = input.SiteId;
  }
  if (input.Type !== undefined) {
    query["type"] = input.Type;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetSitesCommand(
  input: GetSitesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/global-networks/{GlobalNetworkId}/sites";
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: GlobalNetworkId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{GlobalNetworkId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
  }
  if (input.SiteIds !== undefined) {
    query["siteIds"] = input.SiteIds;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetTransitGatewayRegistrationsCommand(
  input: GetTransitGatewayRegistrationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/global-networks/{GlobalNetworkId}/transit-gateway-registrations";
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: GlobalNetworkId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{GlobalNetworkId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
  }
  if (input.TransitGatewayArns !== undefined) {
    query["transitGatewayArns"] = input.TransitGatewayArns;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1RegisterTransitGatewayCommand(
  input: RegisterTransitGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath =
    "/global-networks/{GlobalNetworkId}/transit-gateway-registrations";
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: GlobalNetworkId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{GlobalNetworkId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.TransitGatewayArn !== undefined) {
    bodyParams["TransitGatewayArn"] = input.TransitGatewayArn;
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

export async function serializeAws_restJson1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1TagList(input.Tags, context);
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

export async function serializeAws_restJson1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {};
  if (input.TagKeys !== undefined) {
    query["tagKeys"] = input.TagKeys;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1UpdateDeviceCommand(
  input: UpdateDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/global-networks/{GlobalNetworkId}/devices/{DeviceId}";
  if (input.DeviceId !== undefined) {
    const labelValue: string = input.DeviceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DeviceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DeviceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DeviceId.");
  }
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: GlobalNetworkId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{GlobalNetworkId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Location !== undefined) {
    bodyParams["Location"] = serializeAws_restJson1_1Location(
      input.Location,
      context
    );
  }
  if (input.Model !== undefined) {
    bodyParams["Model"] = input.Model;
  }
  if (input.SerialNumber !== undefined) {
    bodyParams["SerialNumber"] = input.SerialNumber;
  }
  if (input.SiteId !== undefined) {
    bodyParams["SiteId"] = input.SiteId;
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  if (input.Vendor !== undefined) {
    bodyParams["Vendor"] = input.Vendor;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PATCH",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateGlobalNetworkCommand(
  input: UpdateGlobalNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/global-networks/{GlobalNetworkId}";
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: GlobalNetworkId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{GlobalNetworkId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PATCH",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateLinkCommand(
  input: UpdateLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/global-networks/{GlobalNetworkId}/links/{LinkId}";
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: GlobalNetworkId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{GlobalNetworkId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  if (input.LinkId !== undefined) {
    const labelValue: string = input.LinkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: LinkId.");
    }
    resolvedPath = resolvedPath.replace(
      "{LinkId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: LinkId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Bandwidth !== undefined) {
    bodyParams["Bandwidth"] = serializeAws_restJson1_1Bandwidth(
      input.Bandwidth,
      context
    );
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Provider !== undefined) {
    bodyParams["Provider"] = input.Provider;
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PATCH",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateSiteCommand(
  input: UpdateSiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/global-networks/{GlobalNetworkId}/sites/{SiteId}";
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: GlobalNetworkId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{GlobalNetworkId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  if (input.SiteId !== undefined) {
    const labelValue: string = input.SiteId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SiteId.");
    }
    resolvedPath = resolvedPath.replace(
      "{SiteId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: SiteId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Location !== undefined) {
    bodyParams["Location"] = serializeAws_restJson1_1Location(
      input.Location,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PATCH",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1AssociateCustomerGatewayCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateCustomerGatewayCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1AssociateCustomerGatewayCommandError(
      output,
      context
    );
  }
  const contents: AssociateCustomerGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AssociateCustomerGatewayResponse",
    CustomerGatewayAssociation: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.CustomerGatewayAssociation !== undefined &&
    data.CustomerGatewayAssociation !== null
  ) {
    contents.CustomerGatewayAssociation = deserializeAws_restJson1_1CustomerGatewayAssociation(
      data.CustomerGatewayAssociation,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1AssociateCustomerGatewayCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateCustomerGatewayCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager.V2019_07_05#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager.V2019_07_05#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager.V2019_07_05#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager.V2019_07_05#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager.V2019_07_05#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager.V2019_07_05#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager.V2019_07_05#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1AssociateLinkCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateLinkCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1AssociateLinkCommandError(output, context);
  }
  const contents: AssociateLinkCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AssociateLinkResponse",
    LinkAssociation: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.LinkAssociation !== undefined && data.LinkAssociation !== null) {
    contents.LinkAssociation = deserializeAws_restJson1_1LinkAssociation(
      data.LinkAssociation,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1AssociateLinkCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateLinkCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager.V2019_07_05#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager.V2019_07_05#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager.V2019_07_05#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager.V2019_07_05#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager.V2019_07_05#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager.V2019_07_05#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager.V2019_07_05#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1CreateDeviceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeviceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateDeviceCommandError(output, context);
  }
  const contents: CreateDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDeviceResponse",
    Device: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Device !== undefined && data.Device !== null) {
    contents.Device = deserializeAws_restJson1_1Device(data.Device, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateDeviceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeviceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager.V2019_07_05#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager.V2019_07_05#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager.V2019_07_05#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager.V2019_07_05#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager.V2019_07_05#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager.V2019_07_05#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager.V2019_07_05#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1CreateGlobalNetworkCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGlobalNetworkCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateGlobalNetworkCommandError(
      output,
      context
    );
  }
  const contents: CreateGlobalNetworkCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateGlobalNetworkResponse",
    GlobalNetwork: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.GlobalNetwork !== undefined && data.GlobalNetwork !== null) {
    contents.GlobalNetwork = deserializeAws_restJson1_1GlobalNetwork(
      data.GlobalNetwork,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateGlobalNetworkCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGlobalNetworkCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager.V2019_07_05#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager.V2019_07_05#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager.V2019_07_05#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager.V2019_07_05#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager.V2019_07_05#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager.V2019_07_05#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1CreateLinkCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLinkCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateLinkCommandError(output, context);
  }
  const contents: CreateLinkCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateLinkResponse",
    Link: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Link !== undefined && data.Link !== null) {
    contents.Link = deserializeAws_restJson1_1Link(data.Link, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateLinkCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLinkCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager.V2019_07_05#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager.V2019_07_05#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager.V2019_07_05#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager.V2019_07_05#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager.V2019_07_05#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager.V2019_07_05#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager.V2019_07_05#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1CreateSiteCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSiteCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateSiteCommandError(output, context);
  }
  const contents: CreateSiteCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateSiteResponse",
    Site: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Site !== undefined && data.Site !== null) {
    contents.Site = deserializeAws_restJson1_1Site(data.Site, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateSiteCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSiteCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager.V2019_07_05#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager.V2019_07_05#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager.V2019_07_05#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager.V2019_07_05#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager.V2019_07_05#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager.V2019_07_05#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager.V2019_07_05#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1DeleteDeviceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeviceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteDeviceCommandError(output, context);
  }
  const contents: DeleteDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDeviceResponse",
    Device: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Device !== undefined && data.Device !== null) {
    contents.Device = deserializeAws_restJson1_1Device(data.Device, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteDeviceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeviceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager.V2019_07_05#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager.V2019_07_05#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager.V2019_07_05#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager.V2019_07_05#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager.V2019_07_05#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager.V2019_07_05#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1DeleteGlobalNetworkCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGlobalNetworkCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteGlobalNetworkCommandError(
      output,
      context
    );
  }
  const contents: DeleteGlobalNetworkCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteGlobalNetworkResponse",
    GlobalNetwork: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.GlobalNetwork !== undefined && data.GlobalNetwork !== null) {
    contents.GlobalNetwork = deserializeAws_restJson1_1GlobalNetwork(
      data.GlobalNetwork,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteGlobalNetworkCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGlobalNetworkCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager.V2019_07_05#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager.V2019_07_05#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager.V2019_07_05#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager.V2019_07_05#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager.V2019_07_05#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager.V2019_07_05#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1DeleteLinkCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLinkCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteLinkCommandError(output, context);
  }
  const contents: DeleteLinkCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteLinkResponse",
    Link: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Link !== undefined && data.Link !== null) {
    contents.Link = deserializeAws_restJson1_1Link(data.Link, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteLinkCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLinkCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager.V2019_07_05#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager.V2019_07_05#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager.V2019_07_05#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager.V2019_07_05#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager.V2019_07_05#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager.V2019_07_05#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1DeleteSiteCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSiteCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteSiteCommandError(output, context);
  }
  const contents: DeleteSiteCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteSiteResponse",
    Site: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Site !== undefined && data.Site !== null) {
    contents.Site = deserializeAws_restJson1_1Site(data.Site, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteSiteCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSiteCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager.V2019_07_05#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager.V2019_07_05#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager.V2019_07_05#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager.V2019_07_05#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager.V2019_07_05#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager.V2019_07_05#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1DeregisterTransitGatewayCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterTransitGatewayCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeregisterTransitGatewayCommandError(
      output,
      context
    );
  }
  const contents: DeregisterTransitGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeregisterTransitGatewayResponse",
    TransitGatewayRegistration: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.TransitGatewayRegistration !== undefined &&
    data.TransitGatewayRegistration !== null
  ) {
    contents.TransitGatewayRegistration = deserializeAws_restJson1_1TransitGatewayRegistration(
      data.TransitGatewayRegistration,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeregisterTransitGatewayCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterTransitGatewayCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager.V2019_07_05#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager.V2019_07_05#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager.V2019_07_05#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager.V2019_07_05#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager.V2019_07_05#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager.V2019_07_05#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1DescribeGlobalNetworksCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGlobalNetworksCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeGlobalNetworksCommandError(
      output,
      context
    );
  }
  const contents: DescribeGlobalNetworksCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeGlobalNetworksResponse",
    GlobalNetworks: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.GlobalNetworks !== undefined && data.GlobalNetworks !== null) {
    contents.GlobalNetworks = deserializeAws_restJson1_1GlobalNetworkList(
      data.GlobalNetworks,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeGlobalNetworksCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGlobalNetworksCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager.V2019_07_05#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager.V2019_07_05#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager.V2019_07_05#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager.V2019_07_05#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager.V2019_07_05#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1DisassociateCustomerGatewayCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateCustomerGatewayCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DisassociateCustomerGatewayCommandError(
      output,
      context
    );
  }
  const contents: DisassociateCustomerGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisassociateCustomerGatewayResponse",
    CustomerGatewayAssociation: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.CustomerGatewayAssociation !== undefined &&
    data.CustomerGatewayAssociation !== null
  ) {
    contents.CustomerGatewayAssociation = deserializeAws_restJson1_1CustomerGatewayAssociation(
      data.CustomerGatewayAssociation,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DisassociateCustomerGatewayCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateCustomerGatewayCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager.V2019_07_05#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager.V2019_07_05#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager.V2019_07_05#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager.V2019_07_05#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager.V2019_07_05#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager.V2019_07_05#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1DisassociateLinkCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateLinkCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DisassociateLinkCommandError(
      output,
      context
    );
  }
  const contents: DisassociateLinkCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisassociateLinkResponse",
    LinkAssociation: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.LinkAssociation !== undefined && data.LinkAssociation !== null) {
    contents.LinkAssociation = deserializeAws_restJson1_1LinkAssociation(
      data.LinkAssociation,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DisassociateLinkCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateLinkCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager.V2019_07_05#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager.V2019_07_05#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager.V2019_07_05#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager.V2019_07_05#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager.V2019_07_05#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager.V2019_07_05#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1GetCustomerGatewayAssociationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCustomerGatewayAssociationsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetCustomerGatewayAssociationsCommandError(
      output,
      context
    );
  }
  const contents: GetCustomerGatewayAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCustomerGatewayAssociationsResponse",
    CustomerGatewayAssociations: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.CustomerGatewayAssociations !== undefined &&
    data.CustomerGatewayAssociations !== null
  ) {
    contents.CustomerGatewayAssociations = deserializeAws_restJson1_1CustomerGatewayAssociationList(
      data.CustomerGatewayAssociations,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetCustomerGatewayAssociationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCustomerGatewayAssociationsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager.V2019_07_05#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager.V2019_07_05#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager.V2019_07_05#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager.V2019_07_05#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager.V2019_07_05#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager.V2019_07_05#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1GetDevicesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevicesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetDevicesCommandError(output, context);
  }
  const contents: GetDevicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDevicesResponse",
    Devices: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Devices !== undefined && data.Devices !== null) {
    contents.Devices = deserializeAws_restJson1_1DeviceList(
      data.Devices,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetDevicesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevicesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager.V2019_07_05#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager.V2019_07_05#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager.V2019_07_05#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager.V2019_07_05#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager.V2019_07_05#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1GetLinkAssociationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLinkAssociationsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetLinkAssociationsCommandError(
      output,
      context
    );
  }
  const contents: GetLinkAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetLinkAssociationsResponse",
    LinkAssociations: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.LinkAssociations !== undefined && data.LinkAssociations !== null) {
    contents.LinkAssociations = deserializeAws_restJson1_1LinkAssociationList(
      data.LinkAssociations,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetLinkAssociationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLinkAssociationsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager.V2019_07_05#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager.V2019_07_05#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager.V2019_07_05#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager.V2019_07_05#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager.V2019_07_05#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1GetLinksCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLinksCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetLinksCommandError(output, context);
  }
  const contents: GetLinksCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetLinksResponse",
    Links: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Links !== undefined && data.Links !== null) {
    contents.Links = deserializeAws_restJson1_1LinkList(data.Links, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetLinksCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLinksCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager.V2019_07_05#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager.V2019_07_05#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager.V2019_07_05#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager.V2019_07_05#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager.V2019_07_05#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1GetSitesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSitesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetSitesCommandError(output, context);
  }
  const contents: GetSitesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSitesResponse",
    NextToken: undefined,
    Sites: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.Sites !== undefined && data.Sites !== null) {
    contents.Sites = deserializeAws_restJson1_1SiteList(data.Sites, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetSitesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSitesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager.V2019_07_05#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager.V2019_07_05#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager.V2019_07_05#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager.V2019_07_05#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager.V2019_07_05#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1GetTransitGatewayRegistrationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTransitGatewayRegistrationsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetTransitGatewayRegistrationsCommandError(
      output,
      context
    );
  }
  const contents: GetTransitGatewayRegistrationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetTransitGatewayRegistrationsResponse",
    NextToken: undefined,
    TransitGatewayRegistrations: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (
    data.TransitGatewayRegistrations !== undefined &&
    data.TransitGatewayRegistrations !== null
  ) {
    contents.TransitGatewayRegistrations = deserializeAws_restJson1_1TransitGatewayRegistrationList(
      data.TransitGatewayRegistrations,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetTransitGatewayRegistrationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTransitGatewayRegistrationsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager.V2019_07_05#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager.V2019_07_05#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager.V2019_07_05#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager.V2019_07_05#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager.V2019_07_05#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    TagList: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.TagList !== undefined && data.TagList !== null) {
    contents.TagList = deserializeAws_restJson1_1TagList(data.TagList, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager.V2019_07_05#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager.V2019_07_05#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager.V2019_07_05#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager.V2019_07_05#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager.V2019_07_05#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1RegisterTransitGatewayCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterTransitGatewayCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1RegisterTransitGatewayCommandError(
      output,
      context
    );
  }
  const contents: RegisterTransitGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RegisterTransitGatewayResponse",
    TransitGatewayRegistration: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.TransitGatewayRegistration !== undefined &&
    data.TransitGatewayRegistration !== null
  ) {
    contents.TransitGatewayRegistration = deserializeAws_restJson1_1TransitGatewayRegistration(
      data.TransitGatewayRegistration,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1RegisterTransitGatewayCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterTransitGatewayCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager.V2019_07_05#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager.V2019_07_05#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager.V2019_07_05#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager.V2019_07_05#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager.V2019_07_05#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager.V2019_07_05#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager.V2019_07_05#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager.V2019_07_05#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager.V2019_07_05#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager.V2019_07_05#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager.V2019_07_05#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager.V2019_07_05#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager.V2019_07_05#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager.V2019_07_05#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager.V2019_07_05#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager.V2019_07_05#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager.V2019_07_05#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager.V2019_07_05#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager.V2019_07_05#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1UpdateDeviceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeviceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateDeviceCommandError(output, context);
  }
  const contents: UpdateDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateDeviceResponse",
    Device: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Device !== undefined && data.Device !== null) {
    contents.Device = deserializeAws_restJson1_1Device(data.Device, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateDeviceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeviceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager.V2019_07_05#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager.V2019_07_05#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager.V2019_07_05#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager.V2019_07_05#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager.V2019_07_05#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager.V2019_07_05#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1UpdateGlobalNetworkCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlobalNetworkCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateGlobalNetworkCommandError(
      output,
      context
    );
  }
  const contents: UpdateGlobalNetworkCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateGlobalNetworkResponse",
    GlobalNetwork: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.GlobalNetwork !== undefined && data.GlobalNetwork !== null) {
    contents.GlobalNetwork = deserializeAws_restJson1_1GlobalNetwork(
      data.GlobalNetwork,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateGlobalNetworkCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlobalNetworkCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager.V2019_07_05#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager.V2019_07_05#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager.V2019_07_05#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager.V2019_07_05#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager.V2019_07_05#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager.V2019_07_05#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1UpdateLinkCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLinkCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateLinkCommandError(output, context);
  }
  const contents: UpdateLinkCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateLinkResponse",
    Link: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Link !== undefined && data.Link !== null) {
    contents.Link = deserializeAws_restJson1_1Link(data.Link, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateLinkCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLinkCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager.V2019_07_05#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager.V2019_07_05#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager.V2019_07_05#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager.V2019_07_05#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager.V2019_07_05#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager.V2019_07_05#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager.V2019_07_05#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1UpdateSiteCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSiteCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateSiteCommandError(output, context);
  }
  const contents: UpdateSiteCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateSiteResponse",
    Site: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Site !== undefined && data.Site !== null) {
    contents.Site = deserializeAws_restJson1_1Site(data.Site, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateSiteCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSiteCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager.V2019_07_05#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager.V2019_07_05#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager.V2019_07_05#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager.V2019_07_05#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager.V2019_07_05#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager.V2019_07_05#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

const deserializeAws_restJson1_1AccessDeniedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
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

const deserializeAws_restJson1_1ConflictExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined,
    ResourceId: undefined,
    ResourceType: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.ResourceId !== undefined && data.ResourceId !== null) {
    contents.ResourceId = data.ResourceId;
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = data.ResourceType;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalServerExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    Message: undefined,
    RetryAfterSeconds: undefined
  };
  if (output.headers["retry-after"] !== undefined) {
    contents.RetryAfterSeconds = parseInt(output.headers["retry-after"], 10);
  }
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
    Message: undefined,
    ResourceId: undefined,
    ResourceType: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.ResourceId !== undefined && data.ResourceId !== null) {
    contents.ResourceId = data.ResourceId;
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = data.ResourceType;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: ServiceQuotaExceededException = {
    name: "ServiceQuotaExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    LimitCode: undefined,
    Message: undefined,
    ResourceId: undefined,
    ResourceType: undefined,
    ServiceCode: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.LimitCode !== undefined && data.LimitCode !== null) {
    contents.LimitCode = data.LimitCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.ResourceId !== undefined && data.ResourceId !== null) {
    contents.ResourceId = data.ResourceId;
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = data.ResourceType;
  }
  if (data.ServiceCode !== undefined && data.ServiceCode !== null) {
    contents.ServiceCode = data.ServiceCode;
  }
  return contents;
};

const deserializeAws_restJson1_1ThrottlingExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined,
    RetryAfterSeconds: undefined
  };
  if (output.headers["retry-after"] !== undefined) {
    contents.RetryAfterSeconds = parseInt(output.headers["retry-after"], 10);
  }
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ValidationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Fields: undefined,
    Message: undefined,
    Reason: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Fields !== undefined && data.Fields !== null) {
    contents.Fields = deserializeAws_restJson1_1ValidationExceptionFieldList(
      data.Fields,
      context
    );
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.Reason !== undefined && data.Reason !== null) {
    contents.Reason = data.Reason;
  }
  return contents;
};

const serializeAws_restJson1_1Bandwidth = (
  input: Bandwidth,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DownloadSpeed !== undefined) {
    bodyParams["DownloadSpeed"] = input.DownloadSpeed;
  }
  if (input.UploadSpeed !== undefined) {
    bodyParams["UploadSpeed"] = input.UploadSpeed;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Location = (
  input: Location,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Address !== undefined) {
    bodyParams["Address"] = input.Address;
  }
  if (input.Latitude !== undefined) {
    bodyParams["Latitude"] = input.Latitude;
  }
  if (input.Longitude !== undefined) {
    bodyParams["Longitude"] = input.Longitude;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Tag = (
  input: Tag,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_restJson1_1TagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Tag(entry, context));
  }
  return contents;
};

const deserializeAws_restJson1_1Bandwidth = (
  output: any,
  context: __SerdeContext
): Bandwidth => {
  let contents: any = {
    __type: "Bandwidth",
    DownloadSpeed: undefined,
    UploadSpeed: undefined
  };
  if (output.DownloadSpeed !== undefined && output.DownloadSpeed !== null) {
    contents.DownloadSpeed = output.DownloadSpeed;
  }
  if (output.UploadSpeed !== undefined && output.UploadSpeed !== null) {
    contents.UploadSpeed = output.UploadSpeed;
  }
  return contents;
};

const deserializeAws_restJson1_1CustomerGatewayAssociation = (
  output: any,
  context: __SerdeContext
): CustomerGatewayAssociation => {
  let contents: any = {
    __type: "CustomerGatewayAssociation",
    CustomerGatewayArn: undefined,
    DeviceId: undefined,
    GlobalNetworkId: undefined,
    LinkId: undefined,
    State: undefined
  };
  if (
    output.CustomerGatewayArn !== undefined &&
    output.CustomerGatewayArn !== null
  ) {
    contents.CustomerGatewayArn = output.CustomerGatewayArn;
  }
  if (output.DeviceId !== undefined && output.DeviceId !== null) {
    contents.DeviceId = output.DeviceId;
  }
  if (output.GlobalNetworkId !== undefined && output.GlobalNetworkId !== null) {
    contents.GlobalNetworkId = output.GlobalNetworkId;
  }
  if (output.LinkId !== undefined && output.LinkId !== null) {
    contents.LinkId = output.LinkId;
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  return contents;
};

const deserializeAws_restJson1_1CustomerGatewayAssociationList = (
  output: any,
  context: __SerdeContext
): Array<CustomerGatewayAssociation> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1CustomerGatewayAssociation(entry, context)
  );
};

const deserializeAws_restJson1_1Device = (
  output: any,
  context: __SerdeContext
): Device => {
  let contents: any = {
    __type: "Device",
    CreatedAt: undefined,
    Description: undefined,
    DeviceArn: undefined,
    DeviceId: undefined,
    GlobalNetworkId: undefined,
    Location: undefined,
    Model: undefined,
    SerialNumber: undefined,
    SiteId: undefined,
    State: undefined,
    Tags: undefined,
    Type: undefined,
    Vendor: undefined
  };
  if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
    contents.CreatedAt = new Date(Math.round(output.CreatedAt * 1000));
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.DeviceArn !== undefined && output.DeviceArn !== null) {
    contents.DeviceArn = output.DeviceArn;
  }
  if (output.DeviceId !== undefined && output.DeviceId !== null) {
    contents.DeviceId = output.DeviceId;
  }
  if (output.GlobalNetworkId !== undefined && output.GlobalNetworkId !== null) {
    contents.GlobalNetworkId = output.GlobalNetworkId;
  }
  if (output.Location !== undefined && output.Location !== null) {
    contents.Location = deserializeAws_restJson1_1Location(
      output.Location,
      context
    );
  }
  if (output.Model !== undefined && output.Model !== null) {
    contents.Model = output.Model;
  }
  if (output.SerialNumber !== undefined && output.SerialNumber !== null) {
    contents.SerialNumber = output.SerialNumber;
  }
  if (output.SiteId !== undefined && output.SiteId !== null) {
    contents.SiteId = output.SiteId;
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (output.Tags !== undefined && output.Tags !== null) {
    contents.Tags = deserializeAws_restJson1_1TagList(output.Tags, context);
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  if (output.Vendor !== undefined && output.Vendor !== null) {
    contents.Vendor = output.Vendor;
  }
  return contents;
};

const deserializeAws_restJson1_1DeviceList = (
  output: any,
  context: __SerdeContext
): Array<Device> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Device(entry, context)
  );
};

const deserializeAws_restJson1_1GlobalNetwork = (
  output: any,
  context: __SerdeContext
): GlobalNetwork => {
  let contents: any = {
    __type: "GlobalNetwork",
    CreatedAt: undefined,
    Description: undefined,
    GlobalNetworkArn: undefined,
    GlobalNetworkId: undefined,
    State: undefined,
    Tags: undefined
  };
  if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
    contents.CreatedAt = new Date(Math.round(output.CreatedAt * 1000));
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (
    output.GlobalNetworkArn !== undefined &&
    output.GlobalNetworkArn !== null
  ) {
    contents.GlobalNetworkArn = output.GlobalNetworkArn;
  }
  if (output.GlobalNetworkId !== undefined && output.GlobalNetworkId !== null) {
    contents.GlobalNetworkId = output.GlobalNetworkId;
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (output.Tags !== undefined && output.Tags !== null) {
    contents.Tags = deserializeAws_restJson1_1TagList(output.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1_1GlobalNetworkList = (
  output: any,
  context: __SerdeContext
): Array<GlobalNetwork> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1GlobalNetwork(entry, context)
  );
};

const deserializeAws_restJson1_1Link = (
  output: any,
  context: __SerdeContext
): Link => {
  let contents: any = {
    __type: "Link",
    Bandwidth: undefined,
    CreatedAt: undefined,
    Description: undefined,
    GlobalNetworkId: undefined,
    LinkArn: undefined,
    LinkId: undefined,
    Provider: undefined,
    SiteId: undefined,
    State: undefined,
    Tags: undefined,
    Type: undefined
  };
  if (output.Bandwidth !== undefined && output.Bandwidth !== null) {
    contents.Bandwidth = deserializeAws_restJson1_1Bandwidth(
      output.Bandwidth,
      context
    );
  }
  if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
    contents.CreatedAt = new Date(Math.round(output.CreatedAt * 1000));
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.GlobalNetworkId !== undefined && output.GlobalNetworkId !== null) {
    contents.GlobalNetworkId = output.GlobalNetworkId;
  }
  if (output.LinkArn !== undefined && output.LinkArn !== null) {
    contents.LinkArn = output.LinkArn;
  }
  if (output.LinkId !== undefined && output.LinkId !== null) {
    contents.LinkId = output.LinkId;
  }
  if (output.Provider !== undefined && output.Provider !== null) {
    contents.Provider = output.Provider;
  }
  if (output.SiteId !== undefined && output.SiteId !== null) {
    contents.SiteId = output.SiteId;
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (output.Tags !== undefined && output.Tags !== null) {
    contents.Tags = deserializeAws_restJson1_1TagList(output.Tags, context);
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1LinkAssociation = (
  output: any,
  context: __SerdeContext
): LinkAssociation => {
  let contents: any = {
    __type: "LinkAssociation",
    DeviceId: undefined,
    GlobalNetworkId: undefined,
    LinkAssociationState: undefined,
    LinkId: undefined
  };
  if (output.DeviceId !== undefined && output.DeviceId !== null) {
    contents.DeviceId = output.DeviceId;
  }
  if (output.GlobalNetworkId !== undefined && output.GlobalNetworkId !== null) {
    contents.GlobalNetworkId = output.GlobalNetworkId;
  }
  if (
    output.LinkAssociationState !== undefined &&
    output.LinkAssociationState !== null
  ) {
    contents.LinkAssociationState = output.LinkAssociationState;
  }
  if (output.LinkId !== undefined && output.LinkId !== null) {
    contents.LinkId = output.LinkId;
  }
  return contents;
};

const deserializeAws_restJson1_1LinkAssociationList = (
  output: any,
  context: __SerdeContext
): Array<LinkAssociation> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1LinkAssociation(entry, context)
  );
};

const deserializeAws_restJson1_1LinkList = (
  output: any,
  context: __SerdeContext
): Array<Link> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Link(entry, context)
  );
};

const deserializeAws_restJson1_1Location = (
  output: any,
  context: __SerdeContext
): Location => {
  let contents: any = {
    __type: "Location",
    Address: undefined,
    Latitude: undefined,
    Longitude: undefined
  };
  if (output.Address !== undefined && output.Address !== null) {
    contents.Address = output.Address;
  }
  if (output.Latitude !== undefined && output.Latitude !== null) {
    contents.Latitude = output.Latitude;
  }
  if (output.Longitude !== undefined && output.Longitude !== null) {
    contents.Longitude = output.Longitude;
  }
  return contents;
};

const deserializeAws_restJson1_1Site = (
  output: any,
  context: __SerdeContext
): Site => {
  let contents: any = {
    __type: "Site",
    CreatedAt: undefined,
    Description: undefined,
    GlobalNetworkId: undefined,
    Location: undefined,
    SiteArn: undefined,
    SiteId: undefined,
    State: undefined,
    Tags: undefined
  };
  if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
    contents.CreatedAt = new Date(Math.round(output.CreatedAt * 1000));
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.GlobalNetworkId !== undefined && output.GlobalNetworkId !== null) {
    contents.GlobalNetworkId = output.GlobalNetworkId;
  }
  if (output.Location !== undefined && output.Location !== null) {
    contents.Location = deserializeAws_restJson1_1Location(
      output.Location,
      context
    );
  }
  if (output.SiteArn !== undefined && output.SiteArn !== null) {
    contents.SiteArn = output.SiteArn;
  }
  if (output.SiteId !== undefined && output.SiteId !== null) {
    contents.SiteId = output.SiteId;
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (output.Tags !== undefined && output.Tags !== null) {
    contents.Tags = deserializeAws_restJson1_1TagList(output.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1_1SiteList = (
  output: any,
  context: __SerdeContext
): Array<Site> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Site(entry, context)
  );
};

const deserializeAws_restJson1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined
  };
  if (output.Key !== undefined && output.Key !== null) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_restJson1_1TagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Tag(entry, context)
  );
};

const deserializeAws_restJson1_1TransitGatewayRegistration = (
  output: any,
  context: __SerdeContext
): TransitGatewayRegistration => {
  let contents: any = {
    __type: "TransitGatewayRegistration",
    GlobalNetworkId: undefined,
    State: undefined,
    TransitGatewayArn: undefined
  };
  if (output.GlobalNetworkId !== undefined && output.GlobalNetworkId !== null) {
    contents.GlobalNetworkId = output.GlobalNetworkId;
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = deserializeAws_restJson1_1TransitGatewayRegistrationStateReason(
      output.State,
      context
    );
  }
  if (
    output.TransitGatewayArn !== undefined &&
    output.TransitGatewayArn !== null
  ) {
    contents.TransitGatewayArn = output.TransitGatewayArn;
  }
  return contents;
};

const deserializeAws_restJson1_1TransitGatewayRegistrationList = (
  output: any,
  context: __SerdeContext
): Array<TransitGatewayRegistration> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1TransitGatewayRegistration(entry, context)
  );
};

const deserializeAws_restJson1_1TransitGatewayRegistrationStateReason = (
  output: any,
  context: __SerdeContext
): TransitGatewayRegistrationStateReason => {
  let contents: any = {
    __type: "TransitGatewayRegistrationStateReason",
    Code: undefined,
    Message: undefined
  };
  if (output.Code !== undefined && output.Code !== null) {
    contents.Code = output.Code;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ValidationExceptionField = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField => {
  let contents: any = {
    __type: "ValidationExceptionField",
    Message: undefined,
    Name: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_restJson1_1ValidationExceptionFieldList = (
  output: any,
  context: __SerdeContext
): Array<ValidationExceptionField> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ValidationExceptionField(entry, context)
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
