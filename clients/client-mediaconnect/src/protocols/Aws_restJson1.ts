// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
import { MediaConnectServiceException as __BaseException } from "../models/MediaConnectServiceException";
import {
  AddFlowOutputs420Exception,
  AddMaintenance,
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
  Maintenance,
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
  UpdateMaintenance,
  VpcInterface,
  VpcInterfaceAttachment,
  VpcInterfaceRequest,
} from "../models/models_0";

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
  resolvedPath = __resolvedPath(resolvedPath, input, "FlowArn", () => input.FlowArn!, "{FlowArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.MediaStreams != null && {
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
  resolvedPath = __resolvedPath(resolvedPath, input, "FlowArn", () => input.FlowArn!, "{FlowArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Outputs != null && { outputs: serializeAws_restJson1__listOfAddOutputRequest(input.Outputs, context) }),
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
  resolvedPath = __resolvedPath(resolvedPath, input, "FlowArn", () => input.FlowArn!, "{FlowArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Sources != null && { sources: serializeAws_restJson1__listOfSetSourceRequest(input.Sources, context) }),
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
  resolvedPath = __resolvedPath(resolvedPath, input, "FlowArn", () => input.FlowArn!, "{FlowArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.VpcInterfaces != null && {
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/flows";
  let body: any;
  body = JSON.stringify({
    ...(input.AvailabilityZone != null && { availabilityZone: input.AvailabilityZone }),
    ...(input.Entitlements != null && {
      entitlements: serializeAws_restJson1__listOfGrantEntitlementRequest(input.Entitlements, context),
    }),
    ...(input.Maintenance != null && { maintenance: serializeAws_restJson1AddMaintenance(input.Maintenance, context) }),
    ...(input.MediaStreams != null && {
      mediaStreams: serializeAws_restJson1__listOfAddMediaStreamRequest(input.MediaStreams, context),
    }),
    ...(input.Name != null && { name: input.Name }),
    ...(input.Outputs != null && { outputs: serializeAws_restJson1__listOfAddOutputRequest(input.Outputs, context) }),
    ...(input.Source != null && { source: serializeAws_restJson1SetSourceRequest(input.Source, context) }),
    ...(input.SourceFailoverConfig != null && {
      sourceFailoverConfig: serializeAws_restJson1FailoverConfig(input.SourceFailoverConfig, context),
    }),
    ...(input.Sources != null && { sources: serializeAws_restJson1__listOfSetSourceRequest(input.Sources, context) }),
    ...(input.VpcInterfaces != null && {
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
  resolvedPath = __resolvedPath(resolvedPath, input, "FlowArn", () => input.FlowArn!, "{FlowArn}", false);
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
  resolvedPath = __resolvedPath(resolvedPath, input, "FlowArn", () => input.FlowArn!, "{FlowArn}", false);
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
  resolvedPath = __resolvedPath(resolvedPath, input, "OfferingArn", () => input.OfferingArn!, "{OfferingArn}", false);
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
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ReservationArn",
    () => input.ReservationArn!,
    "{ReservationArn}",
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
  resolvedPath = __resolvedPath(resolvedPath, input, "FlowArn", () => input.FlowArn!, "{FlowArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Entitlements != null && {
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/entitlements";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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

export const serializeAws_restJson1ListFlowsCommand = async (
  input: ListFlowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/flows";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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

export const serializeAws_restJson1ListOfferingsCommand = async (
  input: ListOfferingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/offerings";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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

export const serializeAws_restJson1ListReservationsCommand = async (
  input: ListReservationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/reservations";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
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
  resolvedPath = __resolvedPath(resolvedPath, input, "OfferingArn", () => input.OfferingArn!, "{OfferingArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ReservationName != null && { reservationName: input.ReservationName }),
    ...(input.Start != null && { start: input.Start }),
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
  resolvedPath = __resolvedPath(resolvedPath, input, "FlowArn", () => input.FlowArn!, "{FlowArn}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "MediaStreamName",
    () => input.MediaStreamName!,
    "{MediaStreamName}",
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

export const serializeAws_restJson1RemoveFlowOutputCommand = async (
  input: RemoveFlowOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/flows/{FlowArn}/outputs/{OutputArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "FlowArn", () => input.FlowArn!, "{FlowArn}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "OutputArn", () => input.OutputArn!, "{OutputArn}", false);
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
  resolvedPath = __resolvedPath(resolvedPath, input, "FlowArn", () => input.FlowArn!, "{FlowArn}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "SourceArn", () => input.SourceArn!, "{SourceArn}", false);
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
  resolvedPath = __resolvedPath(resolvedPath, input, "FlowArn", () => input.FlowArn!, "{FlowArn}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VpcInterfaceName",
    () => input.VpcInterfaceName!,
    "{VpcInterfaceName}",
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

export const serializeAws_restJson1RevokeFlowEntitlementCommand = async (
  input: RevokeFlowEntitlementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/flows/{FlowArn}/entitlements/{EntitlementArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EntitlementArn",
    () => input.EntitlementArn!,
    "{EntitlementArn}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "FlowArn", () => input.FlowArn!, "{FlowArn}", false);
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
  resolvedPath = __resolvedPath(resolvedPath, input, "FlowArn", () => input.FlowArn!, "{FlowArn}", false);
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
  resolvedPath = __resolvedPath(resolvedPath, input, "FlowArn", () => input.FlowArn!, "{FlowArn}", false);
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
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Tags != null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) }),
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
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.TagKeys, `TagKeys`) != null,
      () => (input.TagKeys! || []).map((_entry) => _entry as any),
    ],
  });
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
  resolvedPath = __resolvedPath(resolvedPath, input, "FlowArn", () => input.FlowArn!, "{FlowArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Maintenance != null && {
      maintenance: serializeAws_restJson1UpdateMaintenance(input.Maintenance, context),
    }),
    ...(input.SourceFailoverConfig != null && {
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
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EntitlementArn",
    () => input.EntitlementArn!,
    "{EntitlementArn}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "FlowArn", () => input.FlowArn!, "{FlowArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { description: input.Description }),
    ...(input.Encryption != null && { encryption: serializeAws_restJson1UpdateEncryption(input.Encryption, context) }),
    ...(input.EntitlementStatus != null && { entitlementStatus: input.EntitlementStatus }),
    ...(input.Subscribers != null && {
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
  resolvedPath = __resolvedPath(resolvedPath, input, "FlowArn", () => input.FlowArn!, "{FlowArn}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "MediaStreamName",
    () => input.MediaStreamName!,
    "{MediaStreamName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Attributes != null && {
      attributes: serializeAws_restJson1MediaStreamAttributesRequest(input.Attributes, context),
    }),
    ...(input.ClockRate != null && { clockRate: input.ClockRate }),
    ...(input.Description != null && { description: input.Description }),
    ...(input.MediaStreamType != null && { mediaStreamType: input.MediaStreamType }),
    ...(input.VideoFormat != null && { videoFormat: input.VideoFormat }),
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
  resolvedPath = __resolvedPath(resolvedPath, input, "FlowArn", () => input.FlowArn!, "{FlowArn}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "OutputArn", () => input.OutputArn!, "{OutputArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.CidrAllowList != null && {
      cidrAllowList: serializeAws_restJson1__listOf__string(input.CidrAllowList, context),
    }),
    ...(input.Description != null && { description: input.Description }),
    ...(input.Destination != null && { destination: input.Destination }),
    ...(input.Encryption != null && { encryption: serializeAws_restJson1UpdateEncryption(input.Encryption, context) }),
    ...(input.MaxLatency != null && { maxLatency: input.MaxLatency }),
    ...(input.MediaStreamOutputConfigurations != null && {
      mediaStreamOutputConfigurations: serializeAws_restJson1__listOfMediaStreamOutputConfigurationRequest(
        input.MediaStreamOutputConfigurations,
        context
      ),
    }),
    ...(input.MinLatency != null && { minLatency: input.MinLatency }),
    ...(input.Port != null && { port: input.Port }),
    ...(input.Protocol != null && { protocol: input.Protocol }),
    ...(input.RemoteId != null && { remoteId: input.RemoteId }),
    ...(input.SenderControlPort != null && { senderControlPort: input.SenderControlPort }),
    ...(input.SenderIpAddress != null && { senderIpAddress: input.SenderIpAddress }),
    ...(input.SmoothingLatency != null && { smoothingLatency: input.SmoothingLatency }),
    ...(input.StreamId != null && { streamId: input.StreamId }),
    ...(input.VpcInterfaceAttachment != null && {
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
  resolvedPath = __resolvedPath(resolvedPath, input, "FlowArn", () => input.FlowArn!, "{FlowArn}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "SourceArn", () => input.SourceArn!, "{SourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Decryption != null && { decryption: serializeAws_restJson1UpdateEncryption(input.Decryption, context) }),
    ...(input.Description != null && { description: input.Description }),
    ...(input.EntitlementArn != null && { entitlementArn: input.EntitlementArn }),
    ...(input.IngestPort != null && { ingestPort: input.IngestPort }),
    ...(input.MaxBitrate != null && { maxBitrate: input.MaxBitrate }),
    ...(input.MaxLatency != null && { maxLatency: input.MaxLatency }),
    ...(input.MaxSyncBuffer != null && { maxSyncBuffer: input.MaxSyncBuffer }),
    ...(input.MediaStreamSourceConfigurations != null && {
      mediaStreamSourceConfigurations: serializeAws_restJson1__listOfMediaStreamSourceConfigurationRequest(
        input.MediaStreamSourceConfigurations,
        context
      ),
    }),
    ...(input.MinLatency != null && { minLatency: input.MinLatency }),
    ...(input.Protocol != null && { protocol: input.Protocol }),
    ...(input.SenderControlPort != null && { senderControlPort: input.SenderControlPort }),
    ...(input.SenderIpAddress != null && { senderIpAddress: input.SenderIpAddress }),
    ...(input.SourceListenerAddress != null && { sourceListenerAddress: input.SourceListenerAddress }),
    ...(input.SourceListenerPort != null && { sourceListenerPort: input.SourceListenerPort }),
    ...(input.StreamId != null && { streamId: input.StreamId }),
    ...(input.VpcInterfaceName != null && { vpcInterfaceName: input.VpcInterfaceName }),
    ...(input.WhitelistCidr != null && { whitelistCidr: input.WhitelistCidr }),
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
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flowArn != null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.mediaStreams != null) {
    contents.MediaStreams = deserializeAws_restJson1__listOfMediaStream(data.mediaStreams, context);
  }
  return contents;
};

const deserializeAws_restJson1AddFlowMediaStreamsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddFlowMediaStreamsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1AddFlowOutputsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddFlowOutputsCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1AddFlowOutputsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flowArn != null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.outputs != null) {
    contents.Outputs = deserializeAws_restJson1__listOfOutput(data.outputs, context);
  }
  return contents;
};

const deserializeAws_restJson1AddFlowOutputsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddFlowOutputsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AddFlowOutputs420Exception":
    case "com.amazonaws.mediaconnect#AddFlowOutputs420Exception":
      throw await deserializeAws_restJson1AddFlowOutputs420ExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1AddFlowSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddFlowSourcesCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1AddFlowSourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flowArn != null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.sources != null) {
    contents.Sources = deserializeAws_restJson1__listOfSource(data.sources, context);
  }
  return contents;
};

const deserializeAws_restJson1AddFlowSourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddFlowSourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1AddFlowVpcInterfacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddFlowVpcInterfacesCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1AddFlowVpcInterfacesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flowArn != null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.vpcInterfaces != null) {
    contents.VpcInterfaces = deserializeAws_restJson1__listOfVpcInterface(data.vpcInterfaces, context);
  }
  return contents;
};

const deserializeAws_restJson1AddFlowVpcInterfacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddFlowVpcInterfacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFlowCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateFlowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flow != null) {
    contents.Flow = deserializeAws_restJson1Flow(data.flow, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "CreateFlow420Exception":
    case "com.amazonaws.mediaconnect#CreateFlow420Exception":
      throw await deserializeAws_restJson1CreateFlow420ExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFlowCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteFlowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flowArn != null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.status != null) {
    contents.Status = __expectString(data.status);
  }
  return contents;
};

const deserializeAws_restJson1DeleteFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeFlowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flow != null) {
    contents.Flow = deserializeAws_restJson1Flow(data.flow, context);
  }
  if (data.messages != null) {
    contents.Messages = deserializeAws_restJson1Messages(data.messages, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeOfferingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOfferingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeOfferingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.offering != null) {
    contents.Offering = deserializeAws_restJson1Offering(data.offering, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeOfferingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOfferingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeReservationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeReservationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.reservation != null) {
    contents.Reservation = deserializeAws_restJson1Reservation(data.reservation, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeReservationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GrantFlowEntitlementsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GrantFlowEntitlementsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GrantFlowEntitlementsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.entitlements != null) {
    contents.Entitlements = deserializeAws_restJson1__listOfEntitlement(data.entitlements, context);
  }
  if (data.flowArn != null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  return contents;
};

const deserializeAws_restJson1GrantFlowEntitlementsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GrantFlowEntitlementsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "GrantFlowEntitlements420Exception":
    case "com.amazonaws.mediaconnect#GrantFlowEntitlements420Exception":
      throw await deserializeAws_restJson1GrantFlowEntitlements420ExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListEntitlementsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntitlementsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListEntitlementsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.entitlements != null) {
    contents.Entitlements = deserializeAws_restJson1__listOfListedEntitlement(data.entitlements, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListEntitlementsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntitlementsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListFlowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFlowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFlowsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flows != null) {
    contents.Flows = deserializeAws_restJson1__listOfListedFlow(data.flows, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListFlowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFlowsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListOfferingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOfferingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListOfferingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.offerings != null) {
    contents.Offerings = deserializeAws_restJson1__listOfOffering(data.offerings, context);
  }
  return contents;
};

const deserializeAws_restJson1ListOfferingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOfferingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListReservationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReservationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListReservationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.reservations != null) {
    contents.Reservations = deserializeAws_restJson1__listOfReservation(data.reservations, context);
  }
  return contents;
};

const deserializeAws_restJson1ListReservationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReservationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PurchaseOfferingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseOfferingCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1PurchaseOfferingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.reservation != null) {
    contents.Reservation = deserializeAws_restJson1Reservation(data.reservation, context);
  }
  return contents;
};

const deserializeAws_restJson1PurchaseOfferingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseOfferingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1RemoveFlowMediaStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveFlowMediaStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RemoveFlowMediaStreamCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flowArn != null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.mediaStreamName != null) {
    contents.MediaStreamName = __expectString(data.mediaStreamName);
  }
  return contents;
};

const deserializeAws_restJson1RemoveFlowMediaStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveFlowMediaStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1RemoveFlowOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveFlowOutputCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1RemoveFlowOutputCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flowArn != null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.outputArn != null) {
    contents.OutputArn = __expectString(data.outputArn);
  }
  return contents;
};

const deserializeAws_restJson1RemoveFlowOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveFlowOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1RemoveFlowSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveFlowSourceCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1RemoveFlowSourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flowArn != null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.sourceArn != null) {
    contents.SourceArn = __expectString(data.sourceArn);
  }
  return contents;
};

const deserializeAws_restJson1RemoveFlowSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveFlowSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1RemoveFlowVpcInterfaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveFlowVpcInterfaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RemoveFlowVpcInterfaceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flowArn != null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.nonDeletedNetworkInterfaceIds != null) {
    contents.NonDeletedNetworkInterfaceIds = deserializeAws_restJson1__listOf__string(
      data.nonDeletedNetworkInterfaceIds,
      context
    );
  }
  if (data.vpcInterfaceName != null) {
    contents.VpcInterfaceName = __expectString(data.vpcInterfaceName);
  }
  return contents;
};

const deserializeAws_restJson1RemoveFlowVpcInterfaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveFlowVpcInterfaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1RevokeFlowEntitlementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeFlowEntitlementCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1RevokeFlowEntitlementCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.entitlementArn != null) {
    contents.EntitlementArn = __expectString(data.entitlementArn);
  }
  if (data.flowArn != null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  return contents;
};

const deserializeAws_restJson1RevokeFlowEntitlementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeFlowEntitlementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1StartFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFlowCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartFlowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flowArn != null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.status != null) {
    contents.Status = __expectString(data.status);
  }
  return contents;
};

const deserializeAws_restJson1StartFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1StopFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopFlowCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopFlowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flowArn != null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.status != null) {
    contents.Status = __expectString(data.status);
  }
  return contents;
};

const deserializeAws_restJson1StopFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFlowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flow != null) {
    contents.Flow = deserializeAws_restJson1Flow(data.flow, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateFlowEntitlementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowEntitlementCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFlowEntitlementCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.entitlement != null) {
    contents.Entitlement = deserializeAws_restJson1Entitlement(data.entitlement, context);
  }
  if (data.flowArn != null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  return contents;
};

const deserializeAws_restJson1UpdateFlowEntitlementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowEntitlementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateFlowMediaStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowMediaStreamCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFlowMediaStreamCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flowArn != null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.mediaStream != null) {
    contents.MediaStream = deserializeAws_restJson1MediaStream(data.mediaStream, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateFlowMediaStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowMediaStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateFlowOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowOutputCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFlowOutputCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flowArn != null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.output != null) {
    contents.Output = deserializeAws_restJson1Output(data.output, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateFlowOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateFlowSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowSourceCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFlowSourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flowArn != null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.source != null) {
    contents.Source = deserializeAws_restJson1Source(data.source, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateFlowSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const map = __map;
const deserializeAws_restJson1AddFlowOutputs420ExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AddFlowOutputs420Exception> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new AddFlowOutputs420Exception({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1CreateFlow420ExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CreateFlow420Exception> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new CreateFlow420Exception({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ForbiddenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new ForbiddenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1GrantFlowEntitlements420ExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GrantFlowEntitlements420Exception> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new GrantFlowEntitlements420Exception({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InternalServerErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new InternalServerErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1__listOf__string = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
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
      return serializeAws_restJson1AddMediaStreamRequest(entry, context);
    });
};

const serializeAws_restJson1__listOfAddOutputRequest = (input: AddOutputRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
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
      return serializeAws_restJson1MediaStreamSourceConfigurationRequest(entry, context);
    });
};

const serializeAws_restJson1__listOfSetSourceRequest = (input: SetSourceRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
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
      return serializeAws_restJson1VpcInterfaceRequest(entry, context);
    });
};

const serializeAws_restJson1__mapOf__string = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1AddMaintenance = (input: AddMaintenance, context: __SerdeContext): any => {
  return {
    ...(input.MaintenanceDay != null && { maintenanceDay: input.MaintenanceDay }),
    ...(input.MaintenanceStartHour != null && { maintenanceStartHour: input.MaintenanceStartHour }),
  };
};

const serializeAws_restJson1AddMediaStreamRequest = (input: AddMediaStreamRequest, context: __SerdeContext): any => {
  return {
    ...(input.Attributes != null && {
      attributes: serializeAws_restJson1MediaStreamAttributesRequest(input.Attributes, context),
    }),
    ...(input.ClockRate != null && { clockRate: input.ClockRate }),
    ...(input.Description != null && { description: input.Description }),
    ...(input.MediaStreamId != null && { mediaStreamId: input.MediaStreamId }),
    ...(input.MediaStreamName != null && { mediaStreamName: input.MediaStreamName }),
    ...(input.MediaStreamType != null && { mediaStreamType: input.MediaStreamType }),
    ...(input.VideoFormat != null && { videoFormat: input.VideoFormat }),
  };
};

const serializeAws_restJson1AddOutputRequest = (input: AddOutputRequest, context: __SerdeContext): any => {
  return {
    ...(input.CidrAllowList != null && {
      cidrAllowList: serializeAws_restJson1__listOf__string(input.CidrAllowList, context),
    }),
    ...(input.Description != null && { description: input.Description }),
    ...(input.Destination != null && { destination: input.Destination }),
    ...(input.Encryption != null && { encryption: serializeAws_restJson1Encryption(input.Encryption, context) }),
    ...(input.MaxLatency != null && { maxLatency: input.MaxLatency }),
    ...(input.MediaStreamOutputConfigurations != null && {
      mediaStreamOutputConfigurations: serializeAws_restJson1__listOfMediaStreamOutputConfigurationRequest(
        input.MediaStreamOutputConfigurations,
        context
      ),
    }),
    ...(input.MinLatency != null && { minLatency: input.MinLatency }),
    ...(input.Name != null && { name: input.Name }),
    ...(input.Port != null && { port: input.Port }),
    ...(input.Protocol != null && { protocol: input.Protocol }),
    ...(input.RemoteId != null && { remoteId: input.RemoteId }),
    ...(input.SenderControlPort != null && { senderControlPort: input.SenderControlPort }),
    ...(input.SmoothingLatency != null && { smoothingLatency: input.SmoothingLatency }),
    ...(input.StreamId != null && { streamId: input.StreamId }),
    ...(input.VpcInterfaceAttachment != null && {
      vpcInterfaceAttachment: serializeAws_restJson1VpcInterfaceAttachment(input.VpcInterfaceAttachment, context),
    }),
  };
};

const serializeAws_restJson1DestinationConfigurationRequest = (
  input: DestinationConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationIp != null && { destinationIp: input.DestinationIp }),
    ...(input.DestinationPort != null && { destinationPort: input.DestinationPort }),
    ...(input.Interface != null && { interface: serializeAws_restJson1InterfaceRequest(input.Interface, context) }),
  };
};

const serializeAws_restJson1EncodingParametersRequest = (
  input: EncodingParametersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CompressionFactor != null && { compressionFactor: __serializeFloat(input.CompressionFactor) }),
    ...(input.EncoderProfile != null && { encoderProfile: input.EncoderProfile }),
  };
};

const serializeAws_restJson1Encryption = (input: Encryption, context: __SerdeContext): any => {
  return {
    ...(input.Algorithm != null && { algorithm: input.Algorithm }),
    ...(input.ConstantInitializationVector != null && {
      constantInitializationVector: input.ConstantInitializationVector,
    }),
    ...(input.DeviceId != null && { deviceId: input.DeviceId }),
    ...(input.KeyType != null && { keyType: input.KeyType }),
    ...(input.Region != null && { region: input.Region }),
    ...(input.ResourceId != null && { resourceId: input.ResourceId }),
    ...(input.RoleArn != null && { roleArn: input.RoleArn }),
    ...(input.SecretArn != null && { secretArn: input.SecretArn }),
    ...(input.Url != null && { url: input.Url }),
  };
};

const serializeAws_restJson1FailoverConfig = (input: FailoverConfig, context: __SerdeContext): any => {
  return {
    ...(input.FailoverMode != null && { failoverMode: input.FailoverMode }),
    ...(input.RecoveryWindow != null && { recoveryWindow: input.RecoveryWindow }),
    ...(input.SourcePriority != null && {
      sourcePriority: serializeAws_restJson1SourcePriority(input.SourcePriority, context),
    }),
    ...(input.State != null && { state: input.State }),
  };
};

const serializeAws_restJson1FmtpRequest = (input: FmtpRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChannelOrder != null && { channelOrder: input.ChannelOrder }),
    ...(input.Colorimetry != null && { colorimetry: input.Colorimetry }),
    ...(input.ExactFramerate != null && { exactFramerate: input.ExactFramerate }),
    ...(input.Par != null && { par: input.Par }),
    ...(input.Range != null && { range: input.Range }),
    ...(input.ScanMode != null && { scanMode: input.ScanMode }),
    ...(input.Tcs != null && { tcs: input.Tcs }),
  };
};

const serializeAws_restJson1GrantEntitlementRequest = (
  input: GrantEntitlementRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataTransferSubscriberFeePercent != null && {
      dataTransferSubscriberFeePercent: input.DataTransferSubscriberFeePercent,
    }),
    ...(input.Description != null && { description: input.Description }),
    ...(input.Encryption != null && { encryption: serializeAws_restJson1Encryption(input.Encryption, context) }),
    ...(input.EntitlementStatus != null && { entitlementStatus: input.EntitlementStatus }),
    ...(input.Name != null && { name: input.Name }),
    ...(input.Subscribers != null && {
      subscribers: serializeAws_restJson1__listOf__string(input.Subscribers, context),
    }),
  };
};

const serializeAws_restJson1InputConfigurationRequest = (
  input: InputConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InputPort != null && { inputPort: input.InputPort }),
    ...(input.Interface != null && { interface: serializeAws_restJson1InterfaceRequest(input.Interface, context) }),
  };
};

const serializeAws_restJson1InterfaceRequest = (input: InterfaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { name: input.Name }),
  };
};

const serializeAws_restJson1MediaStreamAttributesRequest = (
  input: MediaStreamAttributesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Fmtp != null && { fmtp: serializeAws_restJson1FmtpRequest(input.Fmtp, context) }),
    ...(input.Lang != null && { lang: input.Lang }),
  };
};

const serializeAws_restJson1MediaStreamOutputConfigurationRequest = (
  input: MediaStreamOutputConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationConfigurations != null && {
      destinationConfigurations: serializeAws_restJson1__listOfDestinationConfigurationRequest(
        input.DestinationConfigurations,
        context
      ),
    }),
    ...(input.EncodingName != null && { encodingName: input.EncodingName }),
    ...(input.EncodingParameters != null && {
      encodingParameters: serializeAws_restJson1EncodingParametersRequest(input.EncodingParameters, context),
    }),
    ...(input.MediaStreamName != null && { mediaStreamName: input.MediaStreamName }),
  };
};

const serializeAws_restJson1MediaStreamSourceConfigurationRequest = (
  input: MediaStreamSourceConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EncodingName != null && { encodingName: input.EncodingName }),
    ...(input.InputConfigurations != null && {
      inputConfigurations: serializeAws_restJson1__listOfInputConfigurationRequest(input.InputConfigurations, context),
    }),
    ...(input.MediaStreamName != null && { mediaStreamName: input.MediaStreamName }),
  };
};

const serializeAws_restJson1SetSourceRequest = (input: SetSourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Decryption != null && { decryption: serializeAws_restJson1Encryption(input.Decryption, context) }),
    ...(input.Description != null && { description: input.Description }),
    ...(input.EntitlementArn != null && { entitlementArn: input.EntitlementArn }),
    ...(input.IngestPort != null && { ingestPort: input.IngestPort }),
    ...(input.MaxBitrate != null && { maxBitrate: input.MaxBitrate }),
    ...(input.MaxLatency != null && { maxLatency: input.MaxLatency }),
    ...(input.MaxSyncBuffer != null && { maxSyncBuffer: input.MaxSyncBuffer }),
    ...(input.MediaStreamSourceConfigurations != null && {
      mediaStreamSourceConfigurations: serializeAws_restJson1__listOfMediaStreamSourceConfigurationRequest(
        input.MediaStreamSourceConfigurations,
        context
      ),
    }),
    ...(input.MinLatency != null && { minLatency: input.MinLatency }),
    ...(input.Name != null && { name: input.Name }),
    ...(input.Protocol != null && { protocol: input.Protocol }),
    ...(input.SenderControlPort != null && { senderControlPort: input.SenderControlPort }),
    ...(input.SenderIpAddress != null && { senderIpAddress: input.SenderIpAddress }),
    ...(input.SourceListenerAddress != null && { sourceListenerAddress: input.SourceListenerAddress }),
    ...(input.SourceListenerPort != null && { sourceListenerPort: input.SourceListenerPort }),
    ...(input.StreamId != null && { streamId: input.StreamId }),
    ...(input.VpcInterfaceName != null && { vpcInterfaceName: input.VpcInterfaceName }),
    ...(input.WhitelistCidr != null && { whitelistCidr: input.WhitelistCidr }),
  };
};

const serializeAws_restJson1SourcePriority = (input: SourcePriority, context: __SerdeContext): any => {
  return {
    ...(input.PrimarySource != null && { primarySource: input.PrimarySource }),
  };
};

const serializeAws_restJson1UpdateEncryption = (input: UpdateEncryption, context: __SerdeContext): any => {
  return {
    ...(input.Algorithm != null && { algorithm: input.Algorithm }),
    ...(input.ConstantInitializationVector != null && {
      constantInitializationVector: input.ConstantInitializationVector,
    }),
    ...(input.DeviceId != null && { deviceId: input.DeviceId }),
    ...(input.KeyType != null && { keyType: input.KeyType }),
    ...(input.Region != null && { region: input.Region }),
    ...(input.ResourceId != null && { resourceId: input.ResourceId }),
    ...(input.RoleArn != null && { roleArn: input.RoleArn }),
    ...(input.SecretArn != null && { secretArn: input.SecretArn }),
    ...(input.Url != null && { url: input.Url }),
  };
};

const serializeAws_restJson1UpdateFailoverConfig = (input: UpdateFailoverConfig, context: __SerdeContext): any => {
  return {
    ...(input.FailoverMode != null && { failoverMode: input.FailoverMode }),
    ...(input.RecoveryWindow != null && { recoveryWindow: input.RecoveryWindow }),
    ...(input.SourcePriority != null && {
      sourcePriority: serializeAws_restJson1SourcePriority(input.SourcePriority, context),
    }),
    ...(input.State != null && { state: input.State }),
  };
};

const serializeAws_restJson1UpdateMaintenance = (input: UpdateMaintenance, context: __SerdeContext): any => {
  return {
    ...(input.MaintenanceDay != null && { maintenanceDay: input.MaintenanceDay }),
    ...(input.MaintenanceScheduledDate != null && { maintenanceScheduledDate: input.MaintenanceScheduledDate }),
    ...(input.MaintenanceStartHour != null && { maintenanceStartHour: input.MaintenanceStartHour }),
  };
};

const serializeAws_restJson1VpcInterfaceAttachment = (input: VpcInterfaceAttachment, context: __SerdeContext): any => {
  return {
    ...(input.VpcInterfaceName != null && { vpcInterfaceName: input.VpcInterfaceName }),
  };
};

const serializeAws_restJson1VpcInterfaceRequest = (input: VpcInterfaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { name: input.Name }),
    ...(input.NetworkInterfaceType != null && { networkInterfaceType: input.NetworkInterfaceType }),
    ...(input.RoleArn != null && { roleArn: input.RoleArn }),
    ...(input.SecurityGroupIds != null && {
      securityGroupIds: serializeAws_restJson1__listOf__string(input.SecurityGroupIds, context),
    }),
    ...(input.SubnetId != null && { subnetId: input.SubnetId }),
  };
};

const deserializeAws_restJson1__listOf__string = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1__listOfDestinationConfiguration = (
  output: any,
  context: __SerdeContext
): DestinationConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DestinationConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfEntitlement = (output: any, context: __SerdeContext): Entitlement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Entitlement(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfInputConfiguration = (
  output: any,
  context: __SerdeContext
): InputConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InputConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfListedEntitlement = (
  output: any,
  context: __SerdeContext
): ListedEntitlement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ListedEntitlement(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfListedFlow = (output: any, context: __SerdeContext): ListedFlow[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ListedFlow(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfMediaStream = (output: any, context: __SerdeContext): MediaStream[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MediaStream(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfMediaStreamOutputConfiguration = (
  output: any,
  context: __SerdeContext
): MediaStreamOutputConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MediaStreamOutputConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfMediaStreamSourceConfiguration = (
  output: any,
  context: __SerdeContext
): MediaStreamSourceConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MediaStreamSourceConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfOffering = (output: any, context: __SerdeContext): Offering[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Offering(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfOutput = (output: any, context: __SerdeContext): Output[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Output(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfReservation = (output: any, context: __SerdeContext): Reservation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Reservation(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfSource = (output: any, context: __SerdeContext): Source[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Source(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfVpcInterface = (output: any, context: __SerdeContext): VpcInterface[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VpcInterface(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__mapOf__string = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1DestinationConfiguration = (
  output: any,
  context: __SerdeContext
): DestinationConfiguration => {
  return {
    DestinationIp: __expectString(output.destinationIp),
    DestinationPort: __expectInt32(output.destinationPort),
    Interface: output.interface != null ? deserializeAws_restJson1Interface(output.interface, context) : undefined,
    OutboundIp: __expectString(output.outboundIp),
  } as any;
};

const deserializeAws_restJson1EncodingParameters = (output: any, context: __SerdeContext): EncodingParameters => {
  return {
    CompressionFactor: __limitedParseDouble(output.compressionFactor),
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
    DataTransferSubscriberFeePercent: __expectInt32(output.dataTransferSubscriberFeePercent),
    Description: __expectString(output.description),
    Encryption: output.encryption != null ? deserializeAws_restJson1Encryption(output.encryption, context) : undefined,
    EntitlementArn: __expectString(output.entitlementArn),
    EntitlementStatus: __expectString(output.entitlementStatus),
    Name: __expectString(output.name),
    Subscribers:
      output.subscribers != null ? deserializeAws_restJson1__listOf__string(output.subscribers, context) : undefined,
  } as any;
};

const deserializeAws_restJson1FailoverConfig = (output: any, context: __SerdeContext): FailoverConfig => {
  return {
    FailoverMode: __expectString(output.failoverMode),
    RecoveryWindow: __expectInt32(output.recoveryWindow),
    SourcePriority:
      output.sourcePriority != null
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
      output.entitlements != null
        ? deserializeAws_restJson1__listOfEntitlement(output.entitlements, context)
        : undefined,
    FlowArn: __expectString(output.flowArn),
    Maintenance:
      output.maintenance != null ? deserializeAws_restJson1Maintenance(output.maintenance, context) : undefined,
    MediaStreams:
      output.mediaStreams != null
        ? deserializeAws_restJson1__listOfMediaStream(output.mediaStreams, context)
        : undefined,
    Name: __expectString(output.name),
    Outputs: output.outputs != null ? deserializeAws_restJson1__listOfOutput(output.outputs, context) : undefined,
    Source: output.source != null ? deserializeAws_restJson1Source(output.source, context) : undefined,
    SourceFailoverConfig:
      output.sourceFailoverConfig != null
        ? deserializeAws_restJson1FailoverConfig(output.sourceFailoverConfig, context)
        : undefined,
    Sources: output.sources != null ? deserializeAws_restJson1__listOfSource(output.sources, context) : undefined,
    Status: __expectString(output.status),
    VpcInterfaces:
      output.vpcInterfaces != null
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
    InputPort: __expectInt32(output.inputPort),
    Interface: output.interface != null ? deserializeAws_restJson1Interface(output.interface, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Interface = (output: any, context: __SerdeContext): Interface => {
  return {
    Name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1ListedEntitlement = (output: any, context: __SerdeContext): ListedEntitlement => {
  return {
    DataTransferSubscriberFeePercent: __expectInt32(output.dataTransferSubscriberFeePercent),
    EntitlementArn: __expectString(output.entitlementArn),
    EntitlementName: __expectString(output.entitlementName),
  } as any;
};

const deserializeAws_restJson1ListedFlow = (output: any, context: __SerdeContext): ListedFlow => {
  return {
    AvailabilityZone: __expectString(output.availabilityZone),
    Description: __expectString(output.description),
    FlowArn: __expectString(output.flowArn),
    Maintenance:
      output.maintenance != null ? deserializeAws_restJson1Maintenance(output.maintenance, context) : undefined,
    Name: __expectString(output.name),
    SourceType: __expectString(output.sourceType),
    Status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1Maintenance = (output: any, context: __SerdeContext): Maintenance => {
  return {
    MaintenanceDay: __expectString(output.maintenanceDay),
    MaintenanceDeadline: __expectString(output.maintenanceDeadline),
    MaintenanceScheduledDate: __expectString(output.maintenanceScheduledDate),
    MaintenanceStartHour: __expectString(output.maintenanceStartHour),
  } as any;
};

const deserializeAws_restJson1MediaStream = (output: any, context: __SerdeContext): MediaStream => {
  return {
    Attributes:
      output.attributes != null ? deserializeAws_restJson1MediaStreamAttributes(output.attributes, context) : undefined,
    ClockRate: __expectInt32(output.clockRate),
    Description: __expectString(output.description),
    Fmt: __expectInt32(output.fmt),
    MediaStreamId: __expectInt32(output.mediaStreamId),
    MediaStreamName: __expectString(output.mediaStreamName),
    MediaStreamType: __expectString(output.mediaStreamType),
    VideoFormat: __expectString(output.videoFormat),
  } as any;
};

const deserializeAws_restJson1MediaStreamAttributes = (output: any, context: __SerdeContext): MediaStreamAttributes => {
  return {
    Fmtp: output.fmtp != null ? deserializeAws_restJson1Fmtp(output.fmtp, context) : undefined,
    Lang: __expectString(output.lang),
  } as any;
};

const deserializeAws_restJson1MediaStreamOutputConfiguration = (
  output: any,
  context: __SerdeContext
): MediaStreamOutputConfiguration => {
  return {
    DestinationConfigurations:
      output.destinationConfigurations != null
        ? deserializeAws_restJson1__listOfDestinationConfiguration(output.destinationConfigurations, context)
        : undefined,
    EncodingName: __expectString(output.encodingName),
    EncodingParameters:
      output.encodingParameters != null
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
      output.inputConfigurations != null
        ? deserializeAws_restJson1__listOfInputConfiguration(output.inputConfigurations, context)
        : undefined,
    MediaStreamName: __expectString(output.mediaStreamName),
  } as any;
};

const deserializeAws_restJson1Messages = (output: any, context: __SerdeContext): Messages => {
  return {
    Errors: output.errors != null ? deserializeAws_restJson1__listOf__string(output.errors, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Offering = (output: any, context: __SerdeContext): Offering => {
  return {
    CurrencyCode: __expectString(output.currencyCode),
    Duration: __expectInt32(output.duration),
    DurationUnits: __expectString(output.durationUnits),
    OfferingArn: __expectString(output.offeringArn),
    OfferingDescription: __expectString(output.offeringDescription),
    PricePerUnit: __expectString(output.pricePerUnit),
    PriceUnits: __expectString(output.priceUnits),
    ResourceSpecification:
      output.resourceSpecification != null
        ? deserializeAws_restJson1ResourceSpecification(output.resourceSpecification, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Output = (output: any, context: __SerdeContext): Output => {
  return {
    DataTransferSubscriberFeePercent: __expectInt32(output.dataTransferSubscriberFeePercent),
    Description: __expectString(output.description),
    Destination: __expectString(output.destination),
    Encryption: output.encryption != null ? deserializeAws_restJson1Encryption(output.encryption, context) : undefined,
    EntitlementArn: __expectString(output.entitlementArn),
    ListenerAddress: __expectString(output.listenerAddress),
    MediaLiveInputArn: __expectString(output.mediaLiveInputArn),
    MediaStreamOutputConfigurations:
      output.mediaStreamOutputConfigurations != null
        ? deserializeAws_restJson1__listOfMediaStreamOutputConfiguration(
            output.mediaStreamOutputConfigurations,
            context
          )
        : undefined,
    Name: __expectString(output.name),
    OutputArn: __expectString(output.outputArn),
    Port: __expectInt32(output.port),
    Transport: output.transport != null ? deserializeAws_restJson1Transport(output.transport, context) : undefined,
    VpcInterfaceAttachment:
      output.vpcInterfaceAttachment != null
        ? deserializeAws_restJson1VpcInterfaceAttachment(output.vpcInterfaceAttachment, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Reservation = (output: any, context: __SerdeContext): Reservation => {
  return {
    CurrencyCode: __expectString(output.currencyCode),
    Duration: __expectInt32(output.duration),
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
      output.resourceSpecification != null
        ? deserializeAws_restJson1ResourceSpecification(output.resourceSpecification, context)
        : undefined,
    Start: __expectString(output.start),
  } as any;
};

const deserializeAws_restJson1ResourceSpecification = (output: any, context: __SerdeContext): ResourceSpecification => {
  return {
    ReservedBitrate: __expectInt32(output.reservedBitrate),
    ResourceType: __expectString(output.resourceType),
  } as any;
};

const deserializeAws_restJson1Source = (output: any, context: __SerdeContext): Source => {
  return {
    DataTransferSubscriberFeePercent: __expectInt32(output.dataTransferSubscriberFeePercent),
    Decryption: output.decryption != null ? deserializeAws_restJson1Encryption(output.decryption, context) : undefined,
    Description: __expectString(output.description),
    EntitlementArn: __expectString(output.entitlementArn),
    IngestIp: __expectString(output.ingestIp),
    IngestPort: __expectInt32(output.ingestPort),
    MediaStreamSourceConfigurations:
      output.mediaStreamSourceConfigurations != null
        ? deserializeAws_restJson1__listOfMediaStreamSourceConfiguration(
            output.mediaStreamSourceConfigurations,
            context
          )
        : undefined,
    Name: __expectString(output.name),
    SenderControlPort: __expectInt32(output.senderControlPort),
    SenderIpAddress: __expectString(output.senderIpAddress),
    SourceArn: __expectString(output.sourceArn),
    Transport: output.transport != null ? deserializeAws_restJson1Transport(output.transport, context) : undefined,
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
      output.cidrAllowList != null
        ? deserializeAws_restJson1__listOf__string(output.cidrAllowList, context)
        : undefined,
    MaxBitrate: __expectInt32(output.maxBitrate),
    MaxLatency: __expectInt32(output.maxLatency),
    MaxSyncBuffer: __expectInt32(output.maxSyncBuffer),
    MinLatency: __expectInt32(output.minLatency),
    Protocol: __expectString(output.protocol),
    RemoteId: __expectString(output.remoteId),
    SenderControlPort: __expectInt32(output.senderControlPort),
    SenderIpAddress: __expectString(output.senderIpAddress),
    SmoothingLatency: __expectInt32(output.smoothingLatency),
    SourceListenerAddress: __expectString(output.sourceListenerAddress),
    SourceListenerPort: __expectInt32(output.sourceListenerPort),
    StreamId: __expectString(output.streamId),
  } as any;
};

const deserializeAws_restJson1VpcInterface = (output: any, context: __SerdeContext): VpcInterface => {
  return {
    Name: __expectString(output.name),
    NetworkInterfaceIds:
      output.networkInterfaceIds != null
        ? deserializeAws_restJson1__listOf__string(output.networkInterfaceIds, context)
        : undefined,
    NetworkInterfaceType: __expectString(output.networkInterfaceType),
    RoleArn: __expectString(output.roleArn),
    SecurityGroupIds:
      output.securityGroupIds != null
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
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
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
};
