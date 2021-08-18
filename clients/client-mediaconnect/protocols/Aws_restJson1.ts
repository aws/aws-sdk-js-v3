import {
  AddFlowMediaStreamsCommandInput,
  AddFlowMediaStreamsCommandOutput,
} from "../commands/AddFlowMediaStreamsCommand";
import { AddFlowOutputsCommandInput, AddFlowOutputsCommandOutput } from "../commands/AddFlowOutputsCommand";
import { AddFlowSourcesCommandInput, AddFlowSourcesCommandOutput } from "../commands/AddFlowSourcesCommand";
import {
  AddFlowVpcInterfacesCommandInput,
  AddFlowVpcInterfacesCommandOutput,
} from "../commands/AddFlowVpcInterfacesCommand";
import { CreateFlowCommandInput, CreateFlowCommandOutput } from "../commands/CreateFlowCommand";
import { DeleteFlowCommandInput, DeleteFlowCommandOutput } from "../commands/DeleteFlowCommand";
import { DescribeFlowCommandInput, DescribeFlowCommandOutput } from "../commands/DescribeFlowCommand";
import { DescribeOfferingCommandInput, DescribeOfferingCommandOutput } from "../commands/DescribeOfferingCommand";
import {
  DescribeReservationCommandInput,
  DescribeReservationCommandOutput,
} from "../commands/DescribeReservationCommand";
import {
  GrantFlowEntitlementsCommandInput,
  GrantFlowEntitlementsCommandOutput,
} from "../commands/GrantFlowEntitlementsCommand";
import { ListEntitlementsCommandInput, ListEntitlementsCommandOutput } from "../commands/ListEntitlementsCommand";
import { ListFlowsCommandInput, ListFlowsCommandOutput } from "../commands/ListFlowsCommand";
import { ListOfferingsCommandInput, ListOfferingsCommandOutput } from "../commands/ListOfferingsCommand";
import { ListReservationsCommandInput, ListReservationsCommandOutput } from "../commands/ListReservationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PurchaseOfferingCommandInput, PurchaseOfferingCommandOutput } from "../commands/PurchaseOfferingCommand";
import {
  RemoveFlowMediaStreamCommandInput,
  RemoveFlowMediaStreamCommandOutput,
} from "../commands/RemoveFlowMediaStreamCommand";
import { RemoveFlowOutputCommandInput, RemoveFlowOutputCommandOutput } from "../commands/RemoveFlowOutputCommand";
import { RemoveFlowSourceCommandInput, RemoveFlowSourceCommandOutput } from "../commands/RemoveFlowSourceCommand";
import {
  RemoveFlowVpcInterfaceCommandInput,
  RemoveFlowVpcInterfaceCommandOutput,
} from "../commands/RemoveFlowVpcInterfaceCommand";
import {
  RevokeFlowEntitlementCommandInput,
  RevokeFlowEntitlementCommandOutput,
} from "../commands/RevokeFlowEntitlementCommand";
import { StartFlowCommandInput, StartFlowCommandOutput } from "../commands/StartFlowCommand";
import { StopFlowCommandInput, StopFlowCommandOutput } from "../commands/StopFlowCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateFlowCommandInput, UpdateFlowCommandOutput } from "../commands/UpdateFlowCommand";
import {
  UpdateFlowEntitlementCommandInput,
  UpdateFlowEntitlementCommandOutput,
} from "../commands/UpdateFlowEntitlementCommand";
import {
  UpdateFlowMediaStreamCommandInput,
  UpdateFlowMediaStreamCommandOutput,
} from "../commands/UpdateFlowMediaStreamCommand";
import { UpdateFlowOutputCommandInput, UpdateFlowOutputCommandOutput } from "../commands/UpdateFlowOutputCommand";
import { UpdateFlowSourceCommandInput, UpdateFlowSourceCommandOutput } from "../commands/UpdateFlowSourceCommand";
import {
  AddFlowOutputs420Exception,
  AddMediaStreamRequest,
  AddOutputRequest,
  BadRequestException,
  CreateFlow420Exception,
  DestinationConfiguration,
  DestinationConfigurationRequest,
  EncodingParameters,
  EncodingParametersRequest,
  Encryption,
  Entitlement,
  FailoverConfig,
  Flow,
  Fmtp,
  FmtpRequest,
  ForbiddenException,
  GrantEntitlementRequest,
  GrantFlowEntitlements420Exception,
  InputConfiguration,
  InputConfigurationRequest,
  Interface,
  InterfaceRequest,
  InternalServerErrorException,
  ListedEntitlement,
  ListedFlow,
  MediaStream,
  MediaStreamAttributes,
  MediaStreamAttributesRequest,
  MediaStreamOutputConfiguration,
  MediaStreamOutputConfigurationRequest,
  MediaStreamSourceConfiguration,
  MediaStreamSourceConfigurationRequest,
  Messages,
  NotFoundException,
  Offering,
  Output,
  Reservation,
  ResourceSpecification,
  ServiceUnavailableException,
  SetSourceRequest,
  Source,
  SourcePriority,
  TooManyRequestsException,
  Transport,
  UpdateEncryption,
  UpdateFailoverConfig,
  VpcInterface,
  VpcInterfaceAttachment,
  VpcInterfaceRequest,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectInt as __expectInt,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseFloat as __limitedParseFloat,
  serializeFloat as __serializeFloat,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_restJson1AddFlowMediaStreamsCommand = async (
  input: AddFlowMediaStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/flows/{FlowArn}/mediaStreams";
  if (input.FlowArn !== undefined) {
    const labelValue: string = input.FlowArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FlowArn.");
    }
    resolvedPath = resolvedPath.replace("{FlowArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FlowArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.MediaStreams !== undefined &&
      input.MediaStreams !== null && {
        mediaStreams: serializeAws_restJson1__listOfAddMediaStreamRequest(input.MediaStreams, context),
      }),
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

export const serializeAws_restJson1AddFlowOutputsCommand = async (
  input: AddFlowOutputsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/flows/{FlowArn}/outputs";
  if (input.FlowArn !== undefined) {
    const labelValue: string = input.FlowArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FlowArn.");
    }
    resolvedPath = resolvedPath.replace("{FlowArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FlowArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Outputs !== undefined &&
      input.Outputs !== null && { outputs: serializeAws_restJson1__listOfAddOutputRequest(input.Outputs, context) }),
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

export const serializeAws_restJson1AddFlowSourcesCommand = async (
  input: AddFlowSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/flows/{FlowArn}/source";
  if (input.FlowArn !== undefined) {
    const labelValue: string = input.FlowArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FlowArn.");
    }
    resolvedPath = resolvedPath.replace("{FlowArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FlowArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Sources !== undefined &&
      input.Sources !== null && { sources: serializeAws_restJson1__listOfSetSourceRequest(input.Sources, context) }),
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

export const serializeAws_restJson1AddFlowVpcInterfacesCommand = async (
  input: AddFlowVpcInterfacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/flows/{FlowArn}/vpcInterfaces";
  if (input.FlowArn !== undefined) {
    const labelValue: string = input.FlowArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FlowArn.");
    }
    resolvedPath = resolvedPath.replace("{FlowArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FlowArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.VpcInterfaces !== undefined &&
      input.VpcInterfaces !== null && {
        vpcInterfaces: serializeAws_restJson1__listOfVpcInterfaceRequest(input.VpcInterfaces, context),
      }),
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

export const serializeAws_restJson1CreateFlowCommand = async (
  input: CreateFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/flows";
  let body: any;
  body = JSON.stringify({
    ...(input.AvailabilityZone !== undefined &&
      input.AvailabilityZone !== null && { availabilityZone: input.AvailabilityZone }),
    ...(input.Entitlements !== undefined &&
      input.Entitlements !== null && {
        entitlements: serializeAws_restJson1__listOfGrantEntitlementRequest(input.Entitlements, context),
      }),
    ...(input.MediaStreams !== undefined &&
      input.MediaStreams !== null && {
        mediaStreams: serializeAws_restJson1__listOfAddMediaStreamRequest(input.MediaStreams, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
    ...(input.Outputs !== undefined &&
      input.Outputs !== null && { outputs: serializeAws_restJson1__listOfAddOutputRequest(input.Outputs, context) }),
    ...(input.Source !== undefined &&
      input.Source !== null && { source: serializeAws_restJson1SetSourceRequest(input.Source, context) }),
    ...(input.SourceFailoverConfig !== undefined &&
      input.SourceFailoverConfig !== null && {
        sourceFailoverConfig: serializeAws_restJson1FailoverConfig(input.SourceFailoverConfig, context),
      }),
    ...(input.Sources !== undefined &&
      input.Sources !== null && { sources: serializeAws_restJson1__listOfSetSourceRequest(input.Sources, context) }),
    ...(input.VpcInterfaces !== undefined &&
      input.VpcInterfaces !== null && {
        vpcInterfaces: serializeAws_restJson1__listOfVpcInterfaceRequest(input.VpcInterfaces, context),
      }),
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

export const serializeAws_restJson1DeleteFlowCommand = async (
  input: DeleteFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/flows/{FlowArn}";
  if (input.FlowArn !== undefined) {
    const labelValue: string = input.FlowArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FlowArn.");
    }
    resolvedPath = resolvedPath.replace("{FlowArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FlowArn.");
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

export const serializeAws_restJson1DescribeFlowCommand = async (
  input: DescribeFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/flows/{FlowArn}";
  if (input.FlowArn !== undefined) {
    const labelValue: string = input.FlowArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FlowArn.");
    }
    resolvedPath = resolvedPath.replace("{FlowArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FlowArn.");
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

export const serializeAws_restJson1DescribeOfferingCommand = async (
  input: DescribeOfferingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/offerings/{OfferingArn}";
  if (input.OfferingArn !== undefined) {
    const labelValue: string = input.OfferingArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: OfferingArn.");
    }
    resolvedPath = resolvedPath.replace("{OfferingArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: OfferingArn.");
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

export const serializeAws_restJson1DescribeReservationCommand = async (
  input: DescribeReservationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/reservations/{ReservationArn}";
  if (input.ReservationArn !== undefined) {
    const labelValue: string = input.ReservationArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ReservationArn.");
    }
    resolvedPath = resolvedPath.replace("{ReservationArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ReservationArn.");
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

export const serializeAws_restJson1GrantFlowEntitlementsCommand = async (
  input: GrantFlowEntitlementsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/flows/{FlowArn}/entitlements";
  if (input.FlowArn !== undefined) {
    const labelValue: string = input.FlowArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FlowArn.");
    }
    resolvedPath = resolvedPath.replace("{FlowArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FlowArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Entitlements !== undefined &&
      input.Entitlements !== null && {
        entitlements: serializeAws_restJson1__listOfGrantEntitlementRequest(input.Entitlements, context),
      }),
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

export const serializeAws_restJson1ListEntitlementsCommand = async (
  input: ListEntitlementsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/entitlements";
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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

export const serializeAws_restJson1ListFlowsCommand = async (
  input: ListFlowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/flows";
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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

export const serializeAws_restJson1ListOfferingsCommand = async (
  input: ListOfferingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/offerings";
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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

export const serializeAws_restJson1ListReservationsCommand = async (
  input: ListReservationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/reservations";
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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

export const serializeAws_restJson1PurchaseOfferingCommand = async (
  input: PurchaseOfferingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/offerings/{OfferingArn}";
  if (input.OfferingArn !== undefined) {
    const labelValue: string = input.OfferingArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: OfferingArn.");
    }
    resolvedPath = resolvedPath.replace("{OfferingArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: OfferingArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ReservationName !== undefined &&
      input.ReservationName !== null && { reservationName: input.ReservationName }),
    ...(input.Start !== undefined && input.Start !== null && { start: input.Start }),
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

export const serializeAws_restJson1RemoveFlowMediaStreamCommand = async (
  input: RemoveFlowMediaStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/flows/{FlowArn}/mediaStreams/{MediaStreamName}";
  if (input.FlowArn !== undefined) {
    const labelValue: string = input.FlowArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FlowArn.");
    }
    resolvedPath = resolvedPath.replace("{FlowArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FlowArn.");
  }
  if (input.MediaStreamName !== undefined) {
    const labelValue: string = input.MediaStreamName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MediaStreamName.");
    }
    resolvedPath = resolvedPath.replace("{MediaStreamName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: MediaStreamName.");
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

export const serializeAws_restJson1RemoveFlowOutputCommand = async (
  input: RemoveFlowOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/flows/{FlowArn}/outputs/{OutputArn}";
  if (input.FlowArn !== undefined) {
    const labelValue: string = input.FlowArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FlowArn.");
    }
    resolvedPath = resolvedPath.replace("{FlowArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FlowArn.");
  }
  if (input.OutputArn !== undefined) {
    const labelValue: string = input.OutputArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: OutputArn.");
    }
    resolvedPath = resolvedPath.replace("{OutputArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: OutputArn.");
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

export const serializeAws_restJson1RemoveFlowSourceCommand = async (
  input: RemoveFlowSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/flows/{FlowArn}/source/{SourceArn}";
  if (input.FlowArn !== undefined) {
    const labelValue: string = input.FlowArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FlowArn.");
    }
    resolvedPath = resolvedPath.replace("{FlowArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FlowArn.");
  }
  if (input.SourceArn !== undefined) {
    const labelValue: string = input.SourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SourceArn.");
    }
    resolvedPath = resolvedPath.replace("{SourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SourceArn.");
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

export const serializeAws_restJson1RemoveFlowVpcInterfaceCommand = async (
  input: RemoveFlowVpcInterfaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/flows/{FlowArn}/vpcInterfaces/{VpcInterfaceName}";
  if (input.FlowArn !== undefined) {
    const labelValue: string = input.FlowArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FlowArn.");
    }
    resolvedPath = resolvedPath.replace("{FlowArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FlowArn.");
  }
  if (input.VpcInterfaceName !== undefined) {
    const labelValue: string = input.VpcInterfaceName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: VpcInterfaceName.");
    }
    resolvedPath = resolvedPath.replace("{VpcInterfaceName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: VpcInterfaceName.");
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

export const serializeAws_restJson1RevokeFlowEntitlementCommand = async (
  input: RevokeFlowEntitlementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/flows/{FlowArn}/entitlements/{EntitlementArn}";
  if (input.EntitlementArn !== undefined) {
    const labelValue: string = input.EntitlementArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: EntitlementArn.");
    }
    resolvedPath = resolvedPath.replace("{EntitlementArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: EntitlementArn.");
  }
  if (input.FlowArn !== undefined) {
    const labelValue: string = input.FlowArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FlowArn.");
    }
    resolvedPath = resolvedPath.replace("{FlowArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FlowArn.");
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

export const serializeAws_restJson1StartFlowCommand = async (
  input: StartFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/flows/start/{FlowArn}";
  if (input.FlowArn !== undefined) {
    const labelValue: string = input.FlowArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FlowArn.");
    }
    resolvedPath = resolvedPath.replace("{FlowArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FlowArn.");
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

export const serializeAws_restJson1StopFlowCommand = async (
  input: StopFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/flows/stop/{FlowArn}";
  if (input.FlowArn !== undefined) {
    const labelValue: string = input.FlowArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FlowArn.");
    }
    resolvedPath = resolvedPath.replace("{FlowArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FlowArn.");
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
    ...(input.Tags !== undefined &&
      input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) }),
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

export const serializeAws_restJson1UpdateFlowCommand = async (
  input: UpdateFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/flows/{FlowArn}";
  if (input.FlowArn !== undefined) {
    const labelValue: string = input.FlowArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FlowArn.");
    }
    resolvedPath = resolvedPath.replace("{FlowArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FlowArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.SourceFailoverConfig !== undefined &&
      input.SourceFailoverConfig !== null && {
        sourceFailoverConfig: serializeAws_restJson1UpdateFailoverConfig(input.SourceFailoverConfig, context),
      }),
  });
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

export const serializeAws_restJson1UpdateFlowEntitlementCommand = async (
  input: UpdateFlowEntitlementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/flows/{FlowArn}/entitlements/{EntitlementArn}";
  if (input.EntitlementArn !== undefined) {
    const labelValue: string = input.EntitlementArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: EntitlementArn.");
    }
    resolvedPath = resolvedPath.replace("{EntitlementArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: EntitlementArn.");
  }
  if (input.FlowArn !== undefined) {
    const labelValue: string = input.FlowArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FlowArn.");
    }
    resolvedPath = resolvedPath.replace("{FlowArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FlowArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.Encryption !== undefined &&
      input.Encryption !== null && { encryption: serializeAws_restJson1UpdateEncryption(input.Encryption, context) }),
    ...(input.EntitlementStatus !== undefined &&
      input.EntitlementStatus !== null && { entitlementStatus: input.EntitlementStatus }),
    ...(input.Subscribers !== undefined &&
      input.Subscribers !== null && {
        subscribers: serializeAws_restJson1__listOf__string(input.Subscribers, context),
      }),
  });
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

export const serializeAws_restJson1UpdateFlowMediaStreamCommand = async (
  input: UpdateFlowMediaStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/flows/{FlowArn}/mediaStreams/{MediaStreamName}";
  if (input.FlowArn !== undefined) {
    const labelValue: string = input.FlowArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FlowArn.");
    }
    resolvedPath = resolvedPath.replace("{FlowArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FlowArn.");
  }
  if (input.MediaStreamName !== undefined) {
    const labelValue: string = input.MediaStreamName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MediaStreamName.");
    }
    resolvedPath = resolvedPath.replace("{MediaStreamName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: MediaStreamName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Attributes !== undefined &&
      input.Attributes !== null && {
        attributes: serializeAws_restJson1MediaStreamAttributesRequest(input.Attributes, context),
      }),
    ...(input.ClockRate !== undefined && input.ClockRate !== null && { clockRate: input.ClockRate }),
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.MediaStreamType !== undefined &&
      input.MediaStreamType !== null && { mediaStreamType: input.MediaStreamType }),
    ...(input.VideoFormat !== undefined && input.VideoFormat !== null && { videoFormat: input.VideoFormat }),
  });
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

export const serializeAws_restJson1UpdateFlowOutputCommand = async (
  input: UpdateFlowOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/flows/{FlowArn}/outputs/{OutputArn}";
  if (input.FlowArn !== undefined) {
    const labelValue: string = input.FlowArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FlowArn.");
    }
    resolvedPath = resolvedPath.replace("{FlowArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FlowArn.");
  }
  if (input.OutputArn !== undefined) {
    const labelValue: string = input.OutputArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: OutputArn.");
    }
    resolvedPath = resolvedPath.replace("{OutputArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: OutputArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.CidrAllowList !== undefined &&
      input.CidrAllowList !== null && {
        cidrAllowList: serializeAws_restJson1__listOf__string(input.CidrAllowList, context),
      }),
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.Destination !== undefined && input.Destination !== null && { destination: input.Destination }),
    ...(input.Encryption !== undefined &&
      input.Encryption !== null && { encryption: serializeAws_restJson1UpdateEncryption(input.Encryption, context) }),
    ...(input.MaxLatency !== undefined && input.MaxLatency !== null && { maxLatency: input.MaxLatency }),
    ...(input.MediaStreamOutputConfigurations !== undefined &&
      input.MediaStreamOutputConfigurations !== null && {
        mediaStreamOutputConfigurations: serializeAws_restJson1__listOfMediaStreamOutputConfigurationRequest(
          input.MediaStreamOutputConfigurations,
          context
        ),
      }),
    ...(input.MinLatency !== undefined && input.MinLatency !== null && { minLatency: input.MinLatency }),
    ...(input.Port !== undefined && input.Port !== null && { port: input.Port }),
    ...(input.Protocol !== undefined && input.Protocol !== null && { protocol: input.Protocol }),
    ...(input.RemoteId !== undefined && input.RemoteId !== null && { remoteId: input.RemoteId }),
    ...(input.SmoothingLatency !== undefined &&
      input.SmoothingLatency !== null && { smoothingLatency: input.SmoothingLatency }),
    ...(input.StreamId !== undefined && input.StreamId !== null && { streamId: input.StreamId }),
    ...(input.VpcInterfaceAttachment !== undefined &&
      input.VpcInterfaceAttachment !== null && {
        vpcInterfaceAttachment: serializeAws_restJson1VpcInterfaceAttachment(input.VpcInterfaceAttachment, context),
      }),
  });
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

export const serializeAws_restJson1UpdateFlowSourceCommand = async (
  input: UpdateFlowSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/flows/{FlowArn}/source/{SourceArn}";
  if (input.FlowArn !== undefined) {
    const labelValue: string = input.FlowArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FlowArn.");
    }
    resolvedPath = resolvedPath.replace("{FlowArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FlowArn.");
  }
  if (input.SourceArn !== undefined) {
    const labelValue: string = input.SourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SourceArn.");
    }
    resolvedPath = resolvedPath.replace("{SourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Decryption !== undefined &&
      input.Decryption !== null && { decryption: serializeAws_restJson1UpdateEncryption(input.Decryption, context) }),
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.EntitlementArn !== undefined &&
      input.EntitlementArn !== null && { entitlementArn: input.EntitlementArn }),
    ...(input.IngestPort !== undefined && input.IngestPort !== null && { ingestPort: input.IngestPort }),
    ...(input.MaxBitrate !== undefined && input.MaxBitrate !== null && { maxBitrate: input.MaxBitrate }),
    ...(input.MaxLatency !== undefined && input.MaxLatency !== null && { maxLatency: input.MaxLatency }),
    ...(input.MaxSyncBuffer !== undefined && input.MaxSyncBuffer !== null && { maxSyncBuffer: input.MaxSyncBuffer }),
    ...(input.MediaStreamSourceConfigurations !== undefined &&
      input.MediaStreamSourceConfigurations !== null && {
        mediaStreamSourceConfigurations: serializeAws_restJson1__listOfMediaStreamSourceConfigurationRequest(
          input.MediaStreamSourceConfigurations,
          context
        ),
      }),
    ...(input.MinLatency !== undefined && input.MinLatency !== null && { minLatency: input.MinLatency }),
    ...(input.Protocol !== undefined && input.Protocol !== null && { protocol: input.Protocol }),
    ...(input.StreamId !== undefined && input.StreamId !== null && { streamId: input.StreamId }),
    ...(input.VpcInterfaceName !== undefined &&
      input.VpcInterfaceName !== null && { vpcInterfaceName: input.VpcInterfaceName }),
    ...(input.WhitelistCidr !== undefined && input.WhitelistCidr !== null && { whitelistCidr: input.WhitelistCidr }),
  });
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

export const deserializeAws_restJson1AddFlowMediaStreamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddFlowMediaStreamsCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1AddFlowMediaStreamsCommandError(output, context);
  }
  const contents: AddFlowMediaStreamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    FlowArn: undefined,
    MediaStreams: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.flowArn !== undefined && data.flowArn !== null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.mediaStreams !== undefined && data.mediaStreams !== null) {
    contents.MediaStreams = deserializeAws_restJson1__listOfMediaStream(data.mediaStreams, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AddFlowMediaStreamsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddFlowMediaStreamsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1AddFlowOutputsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddFlowOutputsCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1AddFlowOutputsCommandError(output, context);
  }
  const contents: AddFlowOutputsCommandOutput = {
    $metadata: deserializeMetadata(output),
    FlowArn: undefined,
    Outputs: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.flowArn !== undefined && data.flowArn !== null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.outputs !== undefined && data.outputs !== null) {
    contents.Outputs = deserializeAws_restJson1__listOfOutput(data.outputs, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AddFlowOutputsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddFlowOutputsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AddFlowOutputs420Exception":
    case "com.amazonaws.mediaconnect#AddFlowOutputs420Exception":
      response = {
        ...(await deserializeAws_restJson1AddFlowOutputs420ExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1AddFlowSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddFlowSourcesCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1AddFlowSourcesCommandError(output, context);
  }
  const contents: AddFlowSourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    FlowArn: undefined,
    Sources: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.flowArn !== undefined && data.flowArn !== null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.sources !== undefined && data.sources !== null) {
    contents.Sources = deserializeAws_restJson1__listOfSource(data.sources, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AddFlowSourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddFlowSourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1AddFlowVpcInterfacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddFlowVpcInterfacesCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1AddFlowVpcInterfacesCommandError(output, context);
  }
  const contents: AddFlowVpcInterfacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    FlowArn: undefined,
    VpcInterfaces: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.flowArn !== undefined && data.flowArn !== null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.vpcInterfaces !== undefined && data.vpcInterfaces !== null) {
    contents.VpcInterfaces = deserializeAws_restJson1__listOfVpcInterface(data.vpcInterfaces, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AddFlowVpcInterfacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddFlowVpcInterfacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFlowCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateFlowCommandError(output, context);
  }
  const contents: CreateFlowCommandOutput = {
    $metadata: deserializeMetadata(output),
    Flow: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.flow !== undefined && data.flow !== null) {
    contents.Flow = deserializeAws_restJson1Flow(data.flow, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CreateFlow420Exception":
    case "com.amazonaws.mediaconnect#CreateFlow420Exception":
      response = {
        ...(await deserializeAws_restJson1CreateFlow420ExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DeleteFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFlowCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteFlowCommandError(output, context);
  }
  const contents: DeleteFlowCommandOutput = {
    $metadata: deserializeMetadata(output),
    FlowArn: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.flowArn !== undefined && data.flowArn !== null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = __expectString(data.status);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeFlowCommandError(output, context);
  }
  const contents: DescribeFlowCommandOutput = {
    $metadata: deserializeMetadata(output),
    Flow: undefined,
    Messages: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.flow !== undefined && data.flow !== null) {
    contents.Flow = deserializeAws_restJson1Flow(data.flow, context);
  }
  if (data.messages !== undefined && data.messages !== null) {
    contents.Messages = deserializeAws_restJson1Messages(data.messages, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeOfferingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOfferingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeOfferingCommandError(output, context);
  }
  const contents: DescribeOfferingCommandOutput = {
    $metadata: deserializeMetadata(output),
    Offering: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.offering !== undefined && data.offering !== null) {
    contents.Offering = deserializeAws_restJson1Offering(data.offering, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeOfferingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOfferingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeReservationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeReservationCommandError(output, context);
  }
  const contents: DescribeReservationCommandOutput = {
    $metadata: deserializeMetadata(output),
    Reservation: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.reservation !== undefined && data.reservation !== null) {
    contents.Reservation = deserializeAws_restJson1Reservation(data.reservation, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeReservationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GrantFlowEntitlementsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GrantFlowEntitlementsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GrantFlowEntitlementsCommandError(output, context);
  }
  const contents: GrantFlowEntitlementsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Entitlements: undefined,
    FlowArn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.entitlements !== undefined && data.entitlements !== null) {
    contents.Entitlements = deserializeAws_restJson1__listOfEntitlement(data.entitlements, context);
  }
  if (data.flowArn !== undefined && data.flowArn !== null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GrantFlowEntitlementsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GrantFlowEntitlementsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GrantFlowEntitlements420Exception":
    case "com.amazonaws.mediaconnect#GrantFlowEntitlements420Exception":
      response = {
        ...(await deserializeAws_restJson1GrantFlowEntitlements420ExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListEntitlementsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntitlementsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListEntitlementsCommandError(output, context);
  }
  const contents: ListEntitlementsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Entitlements: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.entitlements !== undefined && data.entitlements !== null) {
    contents.Entitlements = deserializeAws_restJson1__listOfListedEntitlement(data.entitlements, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListEntitlementsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntitlementsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListFlowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFlowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFlowsCommandError(output, context);
  }
  const contents: ListFlowsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Flows: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.flows !== undefined && data.flows !== null) {
    contents.Flows = deserializeAws_restJson1__listOfListedFlow(data.flows, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListFlowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFlowsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListOfferingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOfferingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListOfferingsCommandError(output, context);
  }
  const contents: ListOfferingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Offerings: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.offerings !== undefined && data.offerings !== null) {
    contents.Offerings = deserializeAws_restJson1__listOfOffering(data.offerings, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListOfferingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOfferingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListReservationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReservationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListReservationsCommandError(output, context);
  }
  const contents: ListReservationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Reservations: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.reservations !== undefined && data.reservations !== null) {
    contents.Reservations = deserializeAws_restJson1__listOfReservation(data.reservations, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListReservationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReservationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
  const data: any = await parseBody(output.body, context);
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
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
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1PurchaseOfferingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseOfferingCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1PurchaseOfferingCommandError(output, context);
  }
  const contents: PurchaseOfferingCommandOutput = {
    $metadata: deserializeMetadata(output),
    Reservation: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.reservation !== undefined && data.reservation !== null) {
    contents.Reservation = deserializeAws_restJson1Reservation(data.reservation, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PurchaseOfferingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseOfferingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1RemoveFlowMediaStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveFlowMediaStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RemoveFlowMediaStreamCommandError(output, context);
  }
  const contents: RemoveFlowMediaStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    FlowArn: undefined,
    MediaStreamName: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.flowArn !== undefined && data.flowArn !== null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.mediaStreamName !== undefined && data.mediaStreamName !== null) {
    contents.MediaStreamName = __expectString(data.mediaStreamName);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RemoveFlowMediaStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveFlowMediaStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1RemoveFlowOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveFlowOutputCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1RemoveFlowOutputCommandError(output, context);
  }
  const contents: RemoveFlowOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    FlowArn: undefined,
    OutputArn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.flowArn !== undefined && data.flowArn !== null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.outputArn !== undefined && data.outputArn !== null) {
    contents.OutputArn = __expectString(data.outputArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RemoveFlowOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveFlowOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1RemoveFlowSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveFlowSourceCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1RemoveFlowSourceCommandError(output, context);
  }
  const contents: RemoveFlowSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    FlowArn: undefined,
    SourceArn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.flowArn !== undefined && data.flowArn !== null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.sourceArn !== undefined && data.sourceArn !== null) {
    contents.SourceArn = __expectString(data.sourceArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RemoveFlowSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveFlowSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1RemoveFlowVpcInterfaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveFlowVpcInterfaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RemoveFlowVpcInterfaceCommandError(output, context);
  }
  const contents: RemoveFlowVpcInterfaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    FlowArn: undefined,
    NonDeletedNetworkInterfaceIds: undefined,
    VpcInterfaceName: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.flowArn !== undefined && data.flowArn !== null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.nonDeletedNetworkInterfaceIds !== undefined && data.nonDeletedNetworkInterfaceIds !== null) {
    contents.NonDeletedNetworkInterfaceIds = deserializeAws_restJson1__listOf__string(
      data.nonDeletedNetworkInterfaceIds,
      context
    );
  }
  if (data.vpcInterfaceName !== undefined && data.vpcInterfaceName !== null) {
    contents.VpcInterfaceName = __expectString(data.vpcInterfaceName);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RemoveFlowVpcInterfaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveFlowVpcInterfaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1RevokeFlowEntitlementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeFlowEntitlementCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1RevokeFlowEntitlementCommandError(output, context);
  }
  const contents: RevokeFlowEntitlementCommandOutput = {
    $metadata: deserializeMetadata(output),
    EntitlementArn: undefined,
    FlowArn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.entitlementArn !== undefined && data.entitlementArn !== null) {
    contents.EntitlementArn = __expectString(data.entitlementArn);
  }
  if (data.flowArn !== undefined && data.flowArn !== null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RevokeFlowEntitlementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeFlowEntitlementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1StartFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFlowCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartFlowCommandError(output, context);
  }
  const contents: StartFlowCommandOutput = {
    $metadata: deserializeMetadata(output),
    FlowArn: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.flowArn !== undefined && data.flowArn !== null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = __expectString(data.status);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1StopFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopFlowCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopFlowCommandError(output, context);
  }
  const contents: StopFlowCommandOutput = {
    $metadata: deserializeMetadata(output),
    FlowArn: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.flowArn !== undefined && data.flowArn !== null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = __expectString(data.status);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StopFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UpdateFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFlowCommandError(output, context);
  }
  const contents: UpdateFlowCommandOutput = {
    $metadata: deserializeMetadata(output),
    Flow: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.flow !== undefined && data.flow !== null) {
    contents.Flow = deserializeAws_restJson1Flow(data.flow, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UpdateFlowEntitlementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowEntitlementCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFlowEntitlementCommandError(output, context);
  }
  const contents: UpdateFlowEntitlementCommandOutput = {
    $metadata: deserializeMetadata(output),
    Entitlement: undefined,
    FlowArn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.entitlement !== undefined && data.entitlement !== null) {
    contents.Entitlement = deserializeAws_restJson1Entitlement(data.entitlement, context);
  }
  if (data.flowArn !== undefined && data.flowArn !== null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateFlowEntitlementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowEntitlementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UpdateFlowMediaStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowMediaStreamCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFlowMediaStreamCommandError(output, context);
  }
  const contents: UpdateFlowMediaStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    FlowArn: undefined,
    MediaStream: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.flowArn !== undefined && data.flowArn !== null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.mediaStream !== undefined && data.mediaStream !== null) {
    contents.MediaStream = deserializeAws_restJson1MediaStream(data.mediaStream, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateFlowMediaStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowMediaStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UpdateFlowOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowOutputCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFlowOutputCommandError(output, context);
  }
  const contents: UpdateFlowOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    FlowArn: undefined,
    Output: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.flowArn !== undefined && data.flowArn !== null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.output !== undefined && data.output !== null) {
    contents.Output = deserializeAws_restJson1Output(data.output, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateFlowOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UpdateFlowSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowSourceCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFlowSourceCommandError(output, context);
  }
  const contents: UpdateFlowSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    FlowArn: undefined,
    Source: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.flowArn !== undefined && data.flowArn !== null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.source !== undefined && data.source !== null) {
    contents.Source = deserializeAws_restJson1Source(data.source, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateFlowSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

const deserializeAws_restJson1AddFlowOutputs420ExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AddFlowOutputs420Exception> => {
  const contents: AddFlowOutputs420Exception = {
    name: "AddFlowOutputs420Exception",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1CreateFlow420ExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CreateFlow420Exception> => {
  const contents: CreateFlow420Exception = {
    name: "CreateFlow420Exception",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ForbiddenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: ForbiddenException = {
    name: "ForbiddenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1GrantFlowEntitlements420ExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GrantFlowEntitlements420Exception> => {
  const contents: GrantFlowEntitlements420Exception = {
    name: "GrantFlowEntitlements420Exception",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
  }
  return contents;
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
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
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
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
  }
  return contents;
};

const serializeAws_restJson1__listOf__string = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1__listOfAddMediaStreamRequest = (
  input: AddMediaStreamRequest[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AddMediaStreamRequest(entry, context);
    });
};

const serializeAws_restJson1__listOfAddOutputRequest = (input: AddOutputRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AddOutputRequest(entry, context);
    });
};

const serializeAws_restJson1__listOfDestinationConfigurationRequest = (
  input: DestinationConfigurationRequest[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1DestinationConfigurationRequest(entry, context);
    });
};

const serializeAws_restJson1__listOfGrantEntitlementRequest = (
  input: GrantEntitlementRequest[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1GrantEntitlementRequest(entry, context);
    });
};

const serializeAws_restJson1__listOfInputConfigurationRequest = (
  input: InputConfigurationRequest[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1InputConfigurationRequest(entry, context);
    });
};

const serializeAws_restJson1__listOfMediaStreamOutputConfigurationRequest = (
  input: MediaStreamOutputConfigurationRequest[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1MediaStreamOutputConfigurationRequest(entry, context);
    });
};

const serializeAws_restJson1__listOfMediaStreamSourceConfigurationRequest = (
  input: MediaStreamSourceConfigurationRequest[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1MediaStreamSourceConfigurationRequest(entry, context);
    });
};

const serializeAws_restJson1__listOfSetSourceRequest = (input: SetSourceRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1SetSourceRequest(entry, context);
    });
};

const serializeAws_restJson1__listOfVpcInterfaceRequest = (
  input: VpcInterfaceRequest[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1VpcInterfaceRequest(entry, context);
    });
};

const serializeAws_restJson1__mapOf__string = (input: { [key: string]: string }, context: __SerdeContext): any => {
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

const serializeAws_restJson1AddMediaStreamRequest = (input: AddMediaStreamRequest, context: __SerdeContext): any => {
  return {
    ...(input.Attributes !== undefined &&
      input.Attributes !== null && {
        attributes: serializeAws_restJson1MediaStreamAttributesRequest(input.Attributes, context),
      }),
    ...(input.ClockRate !== undefined && input.ClockRate !== null && { clockRate: input.ClockRate }),
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.MediaStreamId !== undefined && input.MediaStreamId !== null && { mediaStreamId: input.MediaStreamId }),
    ...(input.MediaStreamName !== undefined &&
      input.MediaStreamName !== null && { mediaStreamName: input.MediaStreamName }),
    ...(input.MediaStreamType !== undefined &&
      input.MediaStreamType !== null && { mediaStreamType: input.MediaStreamType }),
    ...(input.VideoFormat !== undefined && input.VideoFormat !== null && { videoFormat: input.VideoFormat }),
  };
};

const serializeAws_restJson1AddOutputRequest = (input: AddOutputRequest, context: __SerdeContext): any => {
  return {
    ...(input.CidrAllowList !== undefined &&
      input.CidrAllowList !== null && {
        cidrAllowList: serializeAws_restJson1__listOf__string(input.CidrAllowList, context),
      }),
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.Destination !== undefined && input.Destination !== null && { destination: input.Destination }),
    ...(input.Encryption !== undefined &&
      input.Encryption !== null && { encryption: serializeAws_restJson1Encryption(input.Encryption, context) }),
    ...(input.MaxLatency !== undefined && input.MaxLatency !== null && { maxLatency: input.MaxLatency }),
    ...(input.MediaStreamOutputConfigurations !== undefined &&
      input.MediaStreamOutputConfigurations !== null && {
        mediaStreamOutputConfigurations: serializeAws_restJson1__listOfMediaStreamOutputConfigurationRequest(
          input.MediaStreamOutputConfigurations,
          context
        ),
      }),
    ...(input.MinLatency !== undefined && input.MinLatency !== null && { minLatency: input.MinLatency }),
    ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
    ...(input.Port !== undefined && input.Port !== null && { port: input.Port }),
    ...(input.Protocol !== undefined && input.Protocol !== null && { protocol: input.Protocol }),
    ...(input.RemoteId !== undefined && input.RemoteId !== null && { remoteId: input.RemoteId }),
    ...(input.SmoothingLatency !== undefined &&
      input.SmoothingLatency !== null && { smoothingLatency: input.SmoothingLatency }),
    ...(input.StreamId !== undefined && input.StreamId !== null && { streamId: input.StreamId }),
    ...(input.VpcInterfaceAttachment !== undefined &&
      input.VpcInterfaceAttachment !== null && {
        vpcInterfaceAttachment: serializeAws_restJson1VpcInterfaceAttachment(input.VpcInterfaceAttachment, context),
      }),
  };
};

const serializeAws_restJson1DestinationConfigurationRequest = (
  input: DestinationConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationIp !== undefined && input.DestinationIp !== null && { destinationIp: input.DestinationIp }),
    ...(input.DestinationPort !== undefined &&
      input.DestinationPort !== null && { destinationPort: input.DestinationPort }),
    ...(input.Interface !== undefined &&
      input.Interface !== null && { interface: serializeAws_restJson1InterfaceRequest(input.Interface, context) }),
  };
};

const serializeAws_restJson1EncodingParametersRequest = (
  input: EncodingParametersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CompressionFactor !== undefined &&
      input.CompressionFactor !== null && { compressionFactor: __serializeFloat(input.CompressionFactor) }),
    ...(input.EncoderProfile !== undefined &&
      input.EncoderProfile !== null && { encoderProfile: input.EncoderProfile }),
  };
};

const serializeAws_restJson1Encryption = (input: Encryption, context: __SerdeContext): any => {
  return {
    ...(input.Algorithm !== undefined && input.Algorithm !== null && { algorithm: input.Algorithm }),
    ...(input.ConstantInitializationVector !== undefined &&
      input.ConstantInitializationVector !== null && {
        constantInitializationVector: input.ConstantInitializationVector,
      }),
    ...(input.DeviceId !== undefined && input.DeviceId !== null && { deviceId: input.DeviceId }),
    ...(input.KeyType !== undefined && input.KeyType !== null && { keyType: input.KeyType }),
    ...(input.Region !== undefined && input.Region !== null && { region: input.Region }),
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { resourceId: input.ResourceId }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { roleArn: input.RoleArn }),
    ...(input.SecretArn !== undefined && input.SecretArn !== null && { secretArn: input.SecretArn }),
    ...(input.Url !== undefined && input.Url !== null && { url: input.Url }),
  };
};

const serializeAws_restJson1FailoverConfig = (input: FailoverConfig, context: __SerdeContext): any => {
  return {
    ...(input.FailoverMode !== undefined && input.FailoverMode !== null && { failoverMode: input.FailoverMode }),
    ...(input.RecoveryWindow !== undefined &&
      input.RecoveryWindow !== null && { recoveryWindow: input.RecoveryWindow }),
    ...(input.SourcePriority !== undefined &&
      input.SourcePriority !== null && {
        sourcePriority: serializeAws_restJson1SourcePriority(input.SourcePriority, context),
      }),
    ...(input.State !== undefined && input.State !== null && { state: input.State }),
  };
};

const serializeAws_restJson1FmtpRequest = (input: FmtpRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChannelOrder !== undefined && input.ChannelOrder !== null && { channelOrder: input.ChannelOrder }),
    ...(input.Colorimetry !== undefined && input.Colorimetry !== null && { colorimetry: input.Colorimetry }),
    ...(input.ExactFramerate !== undefined &&
      input.ExactFramerate !== null && { exactFramerate: input.ExactFramerate }),
    ...(input.Par !== undefined && input.Par !== null && { par: input.Par }),
    ...(input.Range !== undefined && input.Range !== null && { range: input.Range }),
    ...(input.ScanMode !== undefined && input.ScanMode !== null && { scanMode: input.ScanMode }),
    ...(input.Tcs !== undefined && input.Tcs !== null && { tcs: input.Tcs }),
  };
};

const serializeAws_restJson1GrantEntitlementRequest = (
  input: GrantEntitlementRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataTransferSubscriberFeePercent !== undefined &&
      input.DataTransferSubscriberFeePercent !== null && {
        dataTransferSubscriberFeePercent: input.DataTransferSubscriberFeePercent,
      }),
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.Encryption !== undefined &&
      input.Encryption !== null && { encryption: serializeAws_restJson1Encryption(input.Encryption, context) }),
    ...(input.EntitlementStatus !== undefined &&
      input.EntitlementStatus !== null && { entitlementStatus: input.EntitlementStatus }),
    ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
    ...(input.Subscribers !== undefined &&
      input.Subscribers !== null && {
        subscribers: serializeAws_restJson1__listOf__string(input.Subscribers, context),
      }),
  };
};

const serializeAws_restJson1InputConfigurationRequest = (
  input: InputConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InputPort !== undefined && input.InputPort !== null && { inputPort: input.InputPort }),
    ...(input.Interface !== undefined &&
      input.Interface !== null && { interface: serializeAws_restJson1InterfaceRequest(input.Interface, context) }),
  };
};

const serializeAws_restJson1InterfaceRequest = (input: InterfaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
  };
};

const serializeAws_restJson1MediaStreamAttributesRequest = (
  input: MediaStreamAttributesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Fmtp !== undefined &&
      input.Fmtp !== null && { fmtp: serializeAws_restJson1FmtpRequest(input.Fmtp, context) }),
    ...(input.Lang !== undefined && input.Lang !== null && { lang: input.Lang }),
  };
};

const serializeAws_restJson1MediaStreamOutputConfigurationRequest = (
  input: MediaStreamOutputConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationConfigurations !== undefined &&
      input.DestinationConfigurations !== null && {
        destinationConfigurations: serializeAws_restJson1__listOfDestinationConfigurationRequest(
          input.DestinationConfigurations,
          context
        ),
      }),
    ...(input.EncodingName !== undefined && input.EncodingName !== null && { encodingName: input.EncodingName }),
    ...(input.EncodingParameters !== undefined &&
      input.EncodingParameters !== null && {
        encodingParameters: serializeAws_restJson1EncodingParametersRequest(input.EncodingParameters, context),
      }),
    ...(input.MediaStreamName !== undefined &&
      input.MediaStreamName !== null && { mediaStreamName: input.MediaStreamName }),
  };
};

const serializeAws_restJson1MediaStreamSourceConfigurationRequest = (
  input: MediaStreamSourceConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EncodingName !== undefined && input.EncodingName !== null && { encodingName: input.EncodingName }),
    ...(input.InputConfigurations !== undefined &&
      input.InputConfigurations !== null && {
        inputConfigurations: serializeAws_restJson1__listOfInputConfigurationRequest(
          input.InputConfigurations,
          context
        ),
      }),
    ...(input.MediaStreamName !== undefined &&
      input.MediaStreamName !== null && { mediaStreamName: input.MediaStreamName }),
  };
};

const serializeAws_restJson1SetSourceRequest = (input: SetSourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Decryption !== undefined &&
      input.Decryption !== null && { decryption: serializeAws_restJson1Encryption(input.Decryption, context) }),
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.EntitlementArn !== undefined &&
      input.EntitlementArn !== null && { entitlementArn: input.EntitlementArn }),
    ...(input.IngestPort !== undefined && input.IngestPort !== null && { ingestPort: input.IngestPort }),
    ...(input.MaxBitrate !== undefined && input.MaxBitrate !== null && { maxBitrate: input.MaxBitrate }),
    ...(input.MaxLatency !== undefined && input.MaxLatency !== null && { maxLatency: input.MaxLatency }),
    ...(input.MaxSyncBuffer !== undefined && input.MaxSyncBuffer !== null && { maxSyncBuffer: input.MaxSyncBuffer }),
    ...(input.MediaStreamSourceConfigurations !== undefined &&
      input.MediaStreamSourceConfigurations !== null && {
        mediaStreamSourceConfigurations: serializeAws_restJson1__listOfMediaStreamSourceConfigurationRequest(
          input.MediaStreamSourceConfigurations,
          context
        ),
      }),
    ...(input.MinLatency !== undefined && input.MinLatency !== null && { minLatency: input.MinLatency }),
    ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
    ...(input.Protocol !== undefined && input.Protocol !== null && { protocol: input.Protocol }),
    ...(input.StreamId !== undefined && input.StreamId !== null && { streamId: input.StreamId }),
    ...(input.VpcInterfaceName !== undefined &&
      input.VpcInterfaceName !== null && { vpcInterfaceName: input.VpcInterfaceName }),
    ...(input.WhitelistCidr !== undefined && input.WhitelistCidr !== null && { whitelistCidr: input.WhitelistCidr }),
  };
};

const serializeAws_restJson1SourcePriority = (input: SourcePriority, context: __SerdeContext): any => {
  return {
    ...(input.PrimarySource !== undefined && input.PrimarySource !== null && { primarySource: input.PrimarySource }),
  };
};

const serializeAws_restJson1UpdateEncryption = (input: UpdateEncryption, context: __SerdeContext): any => {
  return {
    ...(input.Algorithm !== undefined && input.Algorithm !== null && { algorithm: input.Algorithm }),
    ...(input.ConstantInitializationVector !== undefined &&
      input.ConstantInitializationVector !== null && {
        constantInitializationVector: input.ConstantInitializationVector,
      }),
    ...(input.DeviceId !== undefined && input.DeviceId !== null && { deviceId: input.DeviceId }),
    ...(input.KeyType !== undefined && input.KeyType !== null && { keyType: input.KeyType }),
    ...(input.Region !== undefined && input.Region !== null && { region: input.Region }),
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { resourceId: input.ResourceId }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { roleArn: input.RoleArn }),
    ...(input.SecretArn !== undefined && input.SecretArn !== null && { secretArn: input.SecretArn }),
    ...(input.Url !== undefined && input.Url !== null && { url: input.Url }),
  };
};

const serializeAws_restJson1UpdateFailoverConfig = (input: UpdateFailoverConfig, context: __SerdeContext): any => {
  return {
    ...(input.FailoverMode !== undefined && input.FailoverMode !== null && { failoverMode: input.FailoverMode }),
    ...(input.RecoveryWindow !== undefined &&
      input.RecoveryWindow !== null && { recoveryWindow: input.RecoveryWindow }),
    ...(input.SourcePriority !== undefined &&
      input.SourcePriority !== null && {
        sourcePriority: serializeAws_restJson1SourcePriority(input.SourcePriority, context),
      }),
    ...(input.State !== undefined && input.State !== null && { state: input.State }),
  };
};

const serializeAws_restJson1VpcInterfaceAttachment = (input: VpcInterfaceAttachment, context: __SerdeContext): any => {
  return {
    ...(input.VpcInterfaceName !== undefined &&
      input.VpcInterfaceName !== null && { vpcInterfaceName: input.VpcInterfaceName }),
  };
};

const serializeAws_restJson1VpcInterfaceRequest = (input: VpcInterfaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
    ...(input.NetworkInterfaceType !== undefined &&
      input.NetworkInterfaceType !== null && { networkInterfaceType: input.NetworkInterfaceType }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { roleArn: input.RoleArn }),
    ...(input.SecurityGroupIds !== undefined &&
      input.SecurityGroupIds !== null && {
        securityGroupIds: serializeAws_restJson1__listOf__string(input.SecurityGroupIds, context),
      }),
    ...(input.SubnetId !== undefined && input.SubnetId !== null && { subnetId: input.SubnetId }),
  };
};

const deserializeAws_restJson1__listOf__string = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1__listOfDestinationConfiguration = (
  output: any,
  context: __SerdeContext
): DestinationConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DestinationConfiguration(entry, context);
    });
};

const deserializeAws_restJson1__listOfEntitlement = (output: any, context: __SerdeContext): Entitlement[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Entitlement(entry, context);
    });
};

const deserializeAws_restJson1__listOfInputConfiguration = (
  output: any,
  context: __SerdeContext
): InputConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InputConfiguration(entry, context);
    });
};

const deserializeAws_restJson1__listOfListedEntitlement = (
  output: any,
  context: __SerdeContext
): ListedEntitlement[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ListedEntitlement(entry, context);
    });
};

const deserializeAws_restJson1__listOfListedFlow = (output: any, context: __SerdeContext): ListedFlow[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ListedFlow(entry, context);
    });
};

const deserializeAws_restJson1__listOfMediaStream = (output: any, context: __SerdeContext): MediaStream[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MediaStream(entry, context);
    });
};

const deserializeAws_restJson1__listOfMediaStreamOutputConfiguration = (
  output: any,
  context: __SerdeContext
): MediaStreamOutputConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MediaStreamOutputConfiguration(entry, context);
    });
};

const deserializeAws_restJson1__listOfMediaStreamSourceConfiguration = (
  output: any,
  context: __SerdeContext
): MediaStreamSourceConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MediaStreamSourceConfiguration(entry, context);
    });
};

const deserializeAws_restJson1__listOfOffering = (output: any, context: __SerdeContext): Offering[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Offering(entry, context);
    });
};

const deserializeAws_restJson1__listOfOutput = (output: any, context: __SerdeContext): Output[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Output(entry, context);
    });
};

const deserializeAws_restJson1__listOfReservation = (output: any, context: __SerdeContext): Reservation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Reservation(entry, context);
    });
};

const deserializeAws_restJson1__listOfSource = (output: any, context: __SerdeContext): Source[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Source(entry, context);
    });
};

const deserializeAws_restJson1__listOfVpcInterface = (output: any, context: __SerdeContext): VpcInterface[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VpcInterface(entry, context);
    });
};

const deserializeAws_restJson1__mapOf__string = (output: any, context: __SerdeContext): { [key: string]: string } => {
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

const deserializeAws_restJson1DestinationConfiguration = (
  output: any,
  context: __SerdeContext
): DestinationConfiguration => {
  return {
    DestinationIp: __expectString(output.destinationIp),
    DestinationPort: __expectInt(output.destinationPort),
    Interface:
      output.interface !== undefined && output.interface !== null
        ? deserializeAws_restJson1Interface(output.interface, context)
        : undefined,
    OutboundIp: __expectString(output.outboundIp),
  } as any;
};

const deserializeAws_restJson1EncodingParameters = (output: any, context: __SerdeContext): EncodingParameters => {
  return {
    CompressionFactor: __limitedParseFloat(output.compressionFactor),
    EncoderProfile: __expectString(output.encoderProfile),
  } as any;
};

const deserializeAws_restJson1Encryption = (output: any, context: __SerdeContext): Encryption => {
  return {
    Algorithm: __expectString(output.algorithm),
    ConstantInitializationVector: __expectString(output.constantInitializationVector),
    DeviceId: __expectString(output.deviceId),
    KeyType: __expectString(output.keyType),
    Region: __expectString(output.region),
    ResourceId: __expectString(output.resourceId),
    RoleArn: __expectString(output.roleArn),
    SecretArn: __expectString(output.secretArn),
    Url: __expectString(output.url),
  } as any;
};

const deserializeAws_restJson1Entitlement = (output: any, context: __SerdeContext): Entitlement => {
  return {
    DataTransferSubscriberFeePercent: __expectInt(output.dataTransferSubscriberFeePercent),
    Description: __expectString(output.description),
    Encryption:
      output.encryption !== undefined && output.encryption !== null
        ? deserializeAws_restJson1Encryption(output.encryption, context)
        : undefined,
    EntitlementArn: __expectString(output.entitlementArn),
    EntitlementStatus: __expectString(output.entitlementStatus),
    Name: __expectString(output.name),
    Subscribers:
      output.subscribers !== undefined && output.subscribers !== null
        ? deserializeAws_restJson1__listOf__string(output.subscribers, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1FailoverConfig = (output: any, context: __SerdeContext): FailoverConfig => {
  return {
    FailoverMode: __expectString(output.failoverMode),
    RecoveryWindow: __expectInt(output.recoveryWindow),
    SourcePriority:
      output.sourcePriority !== undefined && output.sourcePriority !== null
        ? deserializeAws_restJson1SourcePriority(output.sourcePriority, context)
        : undefined,
    State: __expectString(output.state),
  } as any;
};

const deserializeAws_restJson1Flow = (output: any, context: __SerdeContext): Flow => {
  return {
    AvailabilityZone: __expectString(output.availabilityZone),
    Description: __expectString(output.description),
    EgressIp: __expectString(output.egressIp),
    Entitlements:
      output.entitlements !== undefined && output.entitlements !== null
        ? deserializeAws_restJson1__listOfEntitlement(output.entitlements, context)
        : undefined,
    FlowArn: __expectString(output.flowArn),
    MediaStreams:
      output.mediaStreams !== undefined && output.mediaStreams !== null
        ? deserializeAws_restJson1__listOfMediaStream(output.mediaStreams, context)
        : undefined,
    Name: __expectString(output.name),
    Outputs:
      output.outputs !== undefined && output.outputs !== null
        ? deserializeAws_restJson1__listOfOutput(output.outputs, context)
        : undefined,
    Source:
      output.source !== undefined && output.source !== null
        ? deserializeAws_restJson1Source(output.source, context)
        : undefined,
    SourceFailoverConfig:
      output.sourceFailoverConfig !== undefined && output.sourceFailoverConfig !== null
        ? deserializeAws_restJson1FailoverConfig(output.sourceFailoverConfig, context)
        : undefined,
    Sources:
      output.sources !== undefined && output.sources !== null
        ? deserializeAws_restJson1__listOfSource(output.sources, context)
        : undefined,
    Status: __expectString(output.status),
    VpcInterfaces:
      output.vpcInterfaces !== undefined && output.vpcInterfaces !== null
        ? deserializeAws_restJson1__listOfVpcInterface(output.vpcInterfaces, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Fmtp = (output: any, context: __SerdeContext): Fmtp => {
  return {
    ChannelOrder: __expectString(output.channelOrder),
    Colorimetry: __expectString(output.colorimetry),
    ExactFramerate: __expectString(output.exactFramerate),
    Par: __expectString(output.par),
    Range: __expectString(output.range),
    ScanMode: __expectString(output.scanMode),
    Tcs: __expectString(output.tcs),
  } as any;
};

const deserializeAws_restJson1InputConfiguration = (output: any, context: __SerdeContext): InputConfiguration => {
  return {
    InputIp: __expectString(output.inputIp),
    InputPort: __expectInt(output.inputPort),
    Interface:
      output.interface !== undefined && output.interface !== null
        ? deserializeAws_restJson1Interface(output.interface, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Interface = (output: any, context: __SerdeContext): Interface => {
  return {
    Name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1ListedEntitlement = (output: any, context: __SerdeContext): ListedEntitlement => {
  return {
    DataTransferSubscriberFeePercent: __expectInt(output.dataTransferSubscriberFeePercent),
    EntitlementArn: __expectString(output.entitlementArn),
    EntitlementName: __expectString(output.entitlementName),
  } as any;
};

const deserializeAws_restJson1ListedFlow = (output: any, context: __SerdeContext): ListedFlow => {
  return {
    AvailabilityZone: __expectString(output.availabilityZone),
    Description: __expectString(output.description),
    FlowArn: __expectString(output.flowArn),
    Name: __expectString(output.name),
    SourceType: __expectString(output.sourceType),
    Status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1MediaStream = (output: any, context: __SerdeContext): MediaStream => {
  return {
    Attributes:
      output.attributes !== undefined && output.attributes !== null
        ? deserializeAws_restJson1MediaStreamAttributes(output.attributes, context)
        : undefined,
    ClockRate: __expectInt(output.clockRate),
    Description: __expectString(output.description),
    Fmt: __expectInt(output.fmt),
    MediaStreamId: __expectInt(output.mediaStreamId),
    MediaStreamName: __expectString(output.mediaStreamName),
    MediaStreamType: __expectString(output.mediaStreamType),
    VideoFormat: __expectString(output.videoFormat),
  } as any;
};

const deserializeAws_restJson1MediaStreamAttributes = (output: any, context: __SerdeContext): MediaStreamAttributes => {
  return {
    Fmtp:
      output.fmtp !== undefined && output.fmtp !== null
        ? deserializeAws_restJson1Fmtp(output.fmtp, context)
        : undefined,
    Lang: __expectString(output.lang),
  } as any;
};

const deserializeAws_restJson1MediaStreamOutputConfiguration = (
  output: any,
  context: __SerdeContext
): MediaStreamOutputConfiguration => {
  return {
    DestinationConfigurations:
      output.destinationConfigurations !== undefined && output.destinationConfigurations !== null
        ? deserializeAws_restJson1__listOfDestinationConfiguration(output.destinationConfigurations, context)
        : undefined,
    EncodingName: __expectString(output.encodingName),
    EncodingParameters:
      output.encodingParameters !== undefined && output.encodingParameters !== null
        ? deserializeAws_restJson1EncodingParameters(output.encodingParameters, context)
        : undefined,
    MediaStreamName: __expectString(output.mediaStreamName),
  } as any;
};

const deserializeAws_restJson1MediaStreamSourceConfiguration = (
  output: any,
  context: __SerdeContext
): MediaStreamSourceConfiguration => {
  return {
    EncodingName: __expectString(output.encodingName),
    InputConfigurations:
      output.inputConfigurations !== undefined && output.inputConfigurations !== null
        ? deserializeAws_restJson1__listOfInputConfiguration(output.inputConfigurations, context)
        : undefined,
    MediaStreamName: __expectString(output.mediaStreamName),
  } as any;
};

const deserializeAws_restJson1Messages = (output: any, context: __SerdeContext): Messages => {
  return {
    Errors:
      output.errors !== undefined && output.errors !== null
        ? deserializeAws_restJson1__listOf__string(output.errors, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Offering = (output: any, context: __SerdeContext): Offering => {
  return {
    CurrencyCode: __expectString(output.currencyCode),
    Duration: __expectInt(output.duration),
    DurationUnits: __expectString(output.durationUnits),
    OfferingArn: __expectString(output.offeringArn),
    OfferingDescription: __expectString(output.offeringDescription),
    PricePerUnit: __expectString(output.pricePerUnit),
    PriceUnits: __expectString(output.priceUnits),
    ResourceSpecification:
      output.resourceSpecification !== undefined && output.resourceSpecification !== null
        ? deserializeAws_restJson1ResourceSpecification(output.resourceSpecification, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Output = (output: any, context: __SerdeContext): Output => {
  return {
    DataTransferSubscriberFeePercent: __expectInt(output.dataTransferSubscriberFeePercent),
    Description: __expectString(output.description),
    Destination: __expectString(output.destination),
    Encryption:
      output.encryption !== undefined && output.encryption !== null
        ? deserializeAws_restJson1Encryption(output.encryption, context)
        : undefined,
    EntitlementArn: __expectString(output.entitlementArn),
    ListenerAddress: __expectString(output.listenerAddress),
    MediaLiveInputArn: __expectString(output.mediaLiveInputArn),
    MediaStreamOutputConfigurations:
      output.mediaStreamOutputConfigurations !== undefined && output.mediaStreamOutputConfigurations !== null
        ? deserializeAws_restJson1__listOfMediaStreamOutputConfiguration(
            output.mediaStreamOutputConfigurations,
            context
          )
        : undefined,
    Name: __expectString(output.name),
    OutputArn: __expectString(output.outputArn),
    Port: __expectInt(output.port),
    Transport:
      output.transport !== undefined && output.transport !== null
        ? deserializeAws_restJson1Transport(output.transport, context)
        : undefined,
    VpcInterfaceAttachment:
      output.vpcInterfaceAttachment !== undefined && output.vpcInterfaceAttachment !== null
        ? deserializeAws_restJson1VpcInterfaceAttachment(output.vpcInterfaceAttachment, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Reservation = (output: any, context: __SerdeContext): Reservation => {
  return {
    CurrencyCode: __expectString(output.currencyCode),
    Duration: __expectInt(output.duration),
    DurationUnits: __expectString(output.durationUnits),
    End: __expectString(output.end),
    OfferingArn: __expectString(output.offeringArn),
    OfferingDescription: __expectString(output.offeringDescription),
    PricePerUnit: __expectString(output.pricePerUnit),
    PriceUnits: __expectString(output.priceUnits),
    ReservationArn: __expectString(output.reservationArn),
    ReservationName: __expectString(output.reservationName),
    ReservationState: __expectString(output.reservationState),
    ResourceSpecification:
      output.resourceSpecification !== undefined && output.resourceSpecification !== null
        ? deserializeAws_restJson1ResourceSpecification(output.resourceSpecification, context)
        : undefined,
    Start: __expectString(output.start),
  } as any;
};

const deserializeAws_restJson1ResourceSpecification = (output: any, context: __SerdeContext): ResourceSpecification => {
  return {
    ReservedBitrate: __expectInt(output.reservedBitrate),
    ResourceType: __expectString(output.resourceType),
  } as any;
};

const deserializeAws_restJson1Source = (output: any, context: __SerdeContext): Source => {
  return {
    DataTransferSubscriberFeePercent: __expectInt(output.dataTransferSubscriberFeePercent),
    Decryption:
      output.decryption !== undefined && output.decryption !== null
        ? deserializeAws_restJson1Encryption(output.decryption, context)
        : undefined,
    Description: __expectString(output.description),
    EntitlementArn: __expectString(output.entitlementArn),
    IngestIp: __expectString(output.ingestIp),
    IngestPort: __expectInt(output.ingestPort),
    MediaStreamSourceConfigurations:
      output.mediaStreamSourceConfigurations !== undefined && output.mediaStreamSourceConfigurations !== null
        ? deserializeAws_restJson1__listOfMediaStreamSourceConfiguration(
            output.mediaStreamSourceConfigurations,
            context
          )
        : undefined,
    Name: __expectString(output.name),
    SourceArn: __expectString(output.sourceArn),
    Transport:
      output.transport !== undefined && output.transport !== null
        ? deserializeAws_restJson1Transport(output.transport, context)
        : undefined,
    VpcInterfaceName: __expectString(output.vpcInterfaceName),
    WhitelistCidr: __expectString(output.whitelistCidr),
  } as any;
};

const deserializeAws_restJson1SourcePriority = (output: any, context: __SerdeContext): SourcePriority => {
  return {
    PrimarySource: __expectString(output.primarySource),
  } as any;
};

const deserializeAws_restJson1Transport = (output: any, context: __SerdeContext): Transport => {
  return {
    CidrAllowList:
      output.cidrAllowList !== undefined && output.cidrAllowList !== null
        ? deserializeAws_restJson1__listOf__string(output.cidrAllowList, context)
        : undefined,
    MaxBitrate: __expectInt(output.maxBitrate),
    MaxLatency: __expectInt(output.maxLatency),
    MaxSyncBuffer: __expectInt(output.maxSyncBuffer),
    MinLatency: __expectInt(output.minLatency),
    Protocol: __expectString(output.protocol),
    RemoteId: __expectString(output.remoteId),
    SmoothingLatency: __expectInt(output.smoothingLatency),
    StreamId: __expectString(output.streamId),
  } as any;
};

const deserializeAws_restJson1VpcInterface = (output: any, context: __SerdeContext): VpcInterface => {
  return {
    Name: __expectString(output.name),
    NetworkInterfaceIds:
      output.networkInterfaceIds !== undefined && output.networkInterfaceIds !== null
        ? deserializeAws_restJson1__listOf__string(output.networkInterfaceIds, context)
        : undefined,
    NetworkInterfaceType: __expectString(output.networkInterfaceType),
    RoleArn: __expectString(output.roleArn),
    SecurityGroupIds:
      output.securityGroupIds !== undefined && output.securityGroupIds !== null
        ? deserializeAws_restJson1__listOf__string(output.securityGroupIds, context)
        : undefined,
    SubnetId: __expectString(output.subnetId),
  } as any;
};

const deserializeAws_restJson1VpcInterfaceAttachment = (
  output: any,
  context: __SerdeContext
): VpcInterfaceAttachment => {
  return {
    VpcInterfaceName: __expectString(output.vpcInterfaceName),
  } as any;
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
