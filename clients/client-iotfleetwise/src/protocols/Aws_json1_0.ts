// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  expectUnion as __expectUnion,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  AssociateVehicleFleetCommandInput,
  AssociateVehicleFleetCommandOutput,
} from "../commands/AssociateVehicleFleetCommand";
import { BatchCreateVehicleCommandInput, BatchCreateVehicleCommandOutput } from "../commands/BatchCreateVehicleCommand";
import { BatchUpdateVehicleCommandInput, BatchUpdateVehicleCommandOutput } from "../commands/BatchUpdateVehicleCommand";
import { CreateCampaignCommandInput, CreateCampaignCommandOutput } from "../commands/CreateCampaignCommand";
import {
  CreateDecoderManifestCommandInput,
  CreateDecoderManifestCommandOutput,
} from "../commands/CreateDecoderManifestCommand";
import { CreateFleetCommandInput, CreateFleetCommandOutput } from "../commands/CreateFleetCommand";
import {
  CreateModelManifestCommandInput,
  CreateModelManifestCommandOutput,
} from "../commands/CreateModelManifestCommand";
import {
  CreateSignalCatalogCommandInput,
  CreateSignalCatalogCommandOutput,
} from "../commands/CreateSignalCatalogCommand";
import { CreateVehicleCommandInput, CreateVehicleCommandOutput } from "../commands/CreateVehicleCommand";
import { DeleteCampaignCommandInput, DeleteCampaignCommandOutput } from "../commands/DeleteCampaignCommand";
import {
  DeleteDecoderManifestCommandInput,
  DeleteDecoderManifestCommandOutput,
} from "../commands/DeleteDecoderManifestCommand";
import { DeleteFleetCommandInput, DeleteFleetCommandOutput } from "../commands/DeleteFleetCommand";
import {
  DeleteModelManifestCommandInput,
  DeleteModelManifestCommandOutput,
} from "../commands/DeleteModelManifestCommand";
import {
  DeleteSignalCatalogCommandInput,
  DeleteSignalCatalogCommandOutput,
} from "../commands/DeleteSignalCatalogCommand";
import { DeleteVehicleCommandInput, DeleteVehicleCommandOutput } from "../commands/DeleteVehicleCommand";
import {
  DisassociateVehicleFleetCommandInput,
  DisassociateVehicleFleetCommandOutput,
} from "../commands/DisassociateVehicleFleetCommand";
import { GetCampaignCommandInput, GetCampaignCommandOutput } from "../commands/GetCampaignCommand";
import { GetDecoderManifestCommandInput, GetDecoderManifestCommandOutput } from "../commands/GetDecoderManifestCommand";
import { GetFleetCommandInput, GetFleetCommandOutput } from "../commands/GetFleetCommand";
import { GetLoggingOptionsCommandInput, GetLoggingOptionsCommandOutput } from "../commands/GetLoggingOptionsCommand";
import { GetModelManifestCommandInput, GetModelManifestCommandOutput } from "../commands/GetModelManifestCommand";
import {
  GetRegisterAccountStatusCommandInput,
  GetRegisterAccountStatusCommandOutput,
} from "../commands/GetRegisterAccountStatusCommand";
import { GetSignalCatalogCommandInput, GetSignalCatalogCommandOutput } from "../commands/GetSignalCatalogCommand";
import { GetVehicleCommandInput, GetVehicleCommandOutput } from "../commands/GetVehicleCommand";
import { GetVehicleStatusCommandInput, GetVehicleStatusCommandOutput } from "../commands/GetVehicleStatusCommand";
import {
  ImportDecoderManifestCommandInput,
  ImportDecoderManifestCommandOutput,
} from "../commands/ImportDecoderManifestCommand";
import {
  ImportSignalCatalogCommandInput,
  ImportSignalCatalogCommandOutput,
} from "../commands/ImportSignalCatalogCommand";
import { ListCampaignsCommandInput, ListCampaignsCommandOutput } from "../commands/ListCampaignsCommand";
import {
  ListDecoderManifestNetworkInterfacesCommandInput,
  ListDecoderManifestNetworkInterfacesCommandOutput,
} from "../commands/ListDecoderManifestNetworkInterfacesCommand";
import {
  ListDecoderManifestsCommandInput,
  ListDecoderManifestsCommandOutput,
} from "../commands/ListDecoderManifestsCommand";
import {
  ListDecoderManifestSignalsCommandInput,
  ListDecoderManifestSignalsCommandOutput,
} from "../commands/ListDecoderManifestSignalsCommand";
import { ListFleetsCommandInput, ListFleetsCommandOutput } from "../commands/ListFleetsCommand";
import {
  ListFleetsForVehicleCommandInput,
  ListFleetsForVehicleCommandOutput,
} from "../commands/ListFleetsForVehicleCommand";
import {
  ListModelManifestNodesCommandInput,
  ListModelManifestNodesCommandOutput,
} from "../commands/ListModelManifestNodesCommand";
import { ListModelManifestsCommandInput, ListModelManifestsCommandOutput } from "../commands/ListModelManifestsCommand";
import {
  ListSignalCatalogNodesCommandInput,
  ListSignalCatalogNodesCommandOutput,
} from "../commands/ListSignalCatalogNodesCommand";
import { ListSignalCatalogsCommandInput, ListSignalCatalogsCommandOutput } from "../commands/ListSignalCatalogsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListVehiclesCommandInput, ListVehiclesCommandOutput } from "../commands/ListVehiclesCommand";
import {
  ListVehiclesInFleetCommandInput,
  ListVehiclesInFleetCommandOutput,
} from "../commands/ListVehiclesInFleetCommand";
import { PutLoggingOptionsCommandInput, PutLoggingOptionsCommandOutput } from "../commands/PutLoggingOptionsCommand";
import { RegisterAccountCommandInput, RegisterAccountCommandOutput } from "../commands/RegisterAccountCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateCampaignCommandInput, UpdateCampaignCommandOutput } from "../commands/UpdateCampaignCommand";
import {
  UpdateDecoderManifestCommandInput,
  UpdateDecoderManifestCommandOutput,
} from "../commands/UpdateDecoderManifestCommand";
import { UpdateFleetCommandInput, UpdateFleetCommandOutput } from "../commands/UpdateFleetCommand";
import {
  UpdateModelManifestCommandInput,
  UpdateModelManifestCommandOutput,
} from "../commands/UpdateModelManifestCommand";
import {
  UpdateSignalCatalogCommandInput,
  UpdateSignalCatalogCommandOutput,
} from "../commands/UpdateSignalCatalogCommand";
import { UpdateVehicleCommandInput, UpdateVehicleCommandOutput } from "../commands/UpdateVehicleCommand";
import { IoTFleetWiseServiceException as __BaseException } from "../models/IoTFleetWiseServiceException";
import {
  AccessDeniedException,
  Actuator,
  AssociateVehicleFleetRequest,
  AssociateVehicleFleetResponse,
  Attribute,
  BatchCreateVehicleRequest,
  BatchCreateVehicleResponse,
  BatchUpdateVehicleRequest,
  BatchUpdateVehicleResponse,
  Branch,
  CampaignSummary,
  CanDbcDefinition,
  CanInterface,
  CanSignal,
  CloudWatchLogDeliveryOptions,
  CollectionScheme,
  ConditionBasedCollectionScheme,
  ConflictException,
  CreateCampaignRequest,
  CreateCampaignResponse,
  CreateDecoderManifestRequest,
  CreateDecoderManifestResponse,
  CreateFleetRequest,
  CreateFleetResponse,
  CreateModelManifestRequest,
  CreateModelManifestResponse,
  CreateSignalCatalogRequest,
  CreateSignalCatalogResponse,
  CreateVehicleError,
  CreateVehicleRequest,
  CreateVehicleRequestItem,
  CreateVehicleResponse,
  CreateVehicleResponseItem,
  DecoderManifestSummary,
  DecoderManifestValidationException,
  DeleteCampaignRequest,
  DeleteCampaignResponse,
  DeleteDecoderManifestRequest,
  DeleteDecoderManifestResponse,
  DeleteFleetRequest,
  DeleteFleetResponse,
  DeleteModelManifestRequest,
  DeleteModelManifestResponse,
  DeleteSignalCatalogRequest,
  DeleteSignalCatalogResponse,
  DeleteVehicleRequest,
  DeleteVehicleResponse,
  DisassociateVehicleFleetRequest,
  DisassociateVehicleFleetResponse,
  FleetSummary,
  FormattedVss,
  GetCampaignRequest,
  GetCampaignResponse,
  GetDecoderManifestRequest,
  GetDecoderManifestResponse,
  GetFleetRequest,
  GetFleetResponse,
  GetLoggingOptionsRequest,
  GetLoggingOptionsResponse,
  GetModelManifestRequest,
  GetModelManifestResponse,
  GetRegisterAccountStatusRequest,
  GetRegisterAccountStatusResponse,
  GetSignalCatalogRequest,
  GetSignalCatalogResponse,
  GetVehicleRequest,
  GetVehicleResponse,
  GetVehicleStatusRequest,
  GetVehicleStatusResponse,
  IamRegistrationResponse,
  IamResources,
  ImportDecoderManifestRequest,
  ImportDecoderManifestResponse,
  ImportSignalCatalogRequest,
  ImportSignalCatalogResponse,
  InternalServerException,
  InvalidNetworkInterface,
  InvalidNodeException,
  InvalidSignal,
  InvalidSignalDecoder,
  InvalidSignalsException,
  LimitExceededException,
  ListCampaignsRequest,
  ListCampaignsResponse,
  ListDecoderManifestNetworkInterfacesRequest,
  ListDecoderManifestNetworkInterfacesResponse,
  ListDecoderManifestSignalsRequest,
  ListDecoderManifestSignalsResponse,
  ListDecoderManifestsRequest,
  ListDecoderManifestsResponse,
  ListFleetsForVehicleRequest,
  ListFleetsForVehicleResponse,
  ListFleetsRequest,
  ListFleetsResponse,
  ListModelManifestNodesRequest,
  ListModelManifestNodesResponse,
  ListModelManifestsRequest,
  ListModelManifestsResponse,
  ListSignalCatalogNodesRequest,
  ListSignalCatalogNodesResponse,
  ListSignalCatalogsRequest,
  ListSignalCatalogsResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListVehiclesInFleetRequest,
  ListVehiclesInFleetResponse,
  ListVehiclesRequest,
  ListVehiclesResponse,
  ModelManifestSummary,
  NetworkFileDefinition,
  NetworkInterface,
  Node,
  NodeCounts,
  ObdInterface,
  ObdSignal,
  PutLoggingOptionsRequest,
  PutLoggingOptionsResponse,
  RegisterAccountRequest,
  RegisterAccountResponse,
  ResourceNotFoundException,
  Sensor,
  SignalCatalogSummary,
  SignalDecoder,
  SignalInformation,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  ThrottlingException,
  TimeBasedCollectionScheme,
  TimestreamRegistrationResponse,
  TimestreamResources,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateCampaignRequest,
  UpdateCampaignResponse,
  UpdateDecoderManifestRequest,
  UpdateDecoderManifestResponse,
  UpdateFleetRequest,
  UpdateFleetResponse,
  UpdateModelManifestRequest,
  UpdateModelManifestResponse,
  UpdateSignalCatalogRequest,
  UpdateSignalCatalogResponse,
  UpdateVehicleError,
  UpdateVehicleRequest,
  UpdateVehicleRequestItem,
  UpdateVehicleResponse,
  UpdateVehicleResponseItem,
  ValidationException,
  ValidationExceptionField,
  VehicleStatus,
  VehicleSummary,
} from "../models/models_0";

export const serializeAws_json1_0AssociateVehicleFleetCommand = async (
  input: AssociateVehicleFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.AssociateVehicleFleet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0AssociateVehicleFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0BatchCreateVehicleCommand = async (
  input: BatchCreateVehicleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.BatchCreateVehicle",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0BatchCreateVehicleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0BatchUpdateVehicleCommand = async (
  input: BatchUpdateVehicleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.BatchUpdateVehicle",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0BatchUpdateVehicleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateCampaignCommand = async (
  input: CreateCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.CreateCampaign",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateCampaignRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateDecoderManifestCommand = async (
  input: CreateDecoderManifestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.CreateDecoderManifest",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateDecoderManifestRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateFleetCommand = async (
  input: CreateFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.CreateFleet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateModelManifestCommand = async (
  input: CreateModelManifestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.CreateModelManifest",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateModelManifestRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateSignalCatalogCommand = async (
  input: CreateSignalCatalogCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.CreateSignalCatalog",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateSignalCatalogRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateVehicleCommand = async (
  input: CreateVehicleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.CreateVehicle",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateVehicleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteCampaignCommand = async (
  input: DeleteCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.DeleteCampaign",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteCampaignRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteDecoderManifestCommand = async (
  input: DeleteDecoderManifestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.DeleteDecoderManifest",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteDecoderManifestRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteFleetCommand = async (
  input: DeleteFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.DeleteFleet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteModelManifestCommand = async (
  input: DeleteModelManifestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.DeleteModelManifest",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteModelManifestRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteSignalCatalogCommand = async (
  input: DeleteSignalCatalogCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.DeleteSignalCatalog",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteSignalCatalogRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteVehicleCommand = async (
  input: DeleteVehicleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.DeleteVehicle",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteVehicleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DisassociateVehicleFleetCommand = async (
  input: DisassociateVehicleFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.DisassociateVehicleFleet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DisassociateVehicleFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetCampaignCommand = async (
  input: GetCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.GetCampaign",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetCampaignRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetDecoderManifestCommand = async (
  input: GetDecoderManifestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.GetDecoderManifest",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetDecoderManifestRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetFleetCommand = async (
  input: GetFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.GetFleet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetLoggingOptionsCommand = async (
  input: GetLoggingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.GetLoggingOptions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetLoggingOptionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetModelManifestCommand = async (
  input: GetModelManifestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.GetModelManifest",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetModelManifestRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetRegisterAccountStatusCommand = async (
  input: GetRegisterAccountStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.GetRegisterAccountStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetRegisterAccountStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetSignalCatalogCommand = async (
  input: GetSignalCatalogCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.GetSignalCatalog",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetSignalCatalogRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetVehicleCommand = async (
  input: GetVehicleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.GetVehicle",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetVehicleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetVehicleStatusCommand = async (
  input: GetVehicleStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.GetVehicleStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetVehicleStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ImportDecoderManifestCommand = async (
  input: ImportDecoderManifestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.ImportDecoderManifest",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ImportDecoderManifestRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ImportSignalCatalogCommand = async (
  input: ImportSignalCatalogCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.ImportSignalCatalog",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ImportSignalCatalogRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListCampaignsCommand = async (
  input: ListCampaignsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.ListCampaigns",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListCampaignsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListDecoderManifestNetworkInterfacesCommand = async (
  input: ListDecoderManifestNetworkInterfacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.ListDecoderManifestNetworkInterfaces",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListDecoderManifestNetworkInterfacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListDecoderManifestsCommand = async (
  input: ListDecoderManifestsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.ListDecoderManifests",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListDecoderManifestsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListDecoderManifestSignalsCommand = async (
  input: ListDecoderManifestSignalsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.ListDecoderManifestSignals",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListDecoderManifestSignalsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListFleetsCommand = async (
  input: ListFleetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.ListFleets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListFleetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListFleetsForVehicleCommand = async (
  input: ListFleetsForVehicleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.ListFleetsForVehicle",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListFleetsForVehicleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListModelManifestNodesCommand = async (
  input: ListModelManifestNodesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.ListModelManifestNodes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListModelManifestNodesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListModelManifestsCommand = async (
  input: ListModelManifestsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.ListModelManifests",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListModelManifestsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListSignalCatalogNodesCommand = async (
  input: ListSignalCatalogNodesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.ListSignalCatalogNodes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListSignalCatalogNodesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListSignalCatalogsCommand = async (
  input: ListSignalCatalogsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.ListSignalCatalogs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListSignalCatalogsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListVehiclesCommand = async (
  input: ListVehiclesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.ListVehicles",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListVehiclesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListVehiclesInFleetCommand = async (
  input: ListVehiclesInFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.ListVehiclesInFleet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListVehiclesInFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0PutLoggingOptionsCommand = async (
  input: PutLoggingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.PutLoggingOptions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0PutLoggingOptionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0RegisterAccountCommand = async (
  input: RegisterAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.RegisterAccount",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0RegisterAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateCampaignCommand = async (
  input: UpdateCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.UpdateCampaign",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateCampaignRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateDecoderManifestCommand = async (
  input: UpdateDecoderManifestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.UpdateDecoderManifest",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateDecoderManifestRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateFleetCommand = async (
  input: UpdateFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.UpdateFleet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateModelManifestCommand = async (
  input: UpdateModelManifestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.UpdateModelManifest",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateModelManifestRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateSignalCatalogCommand = async (
  input: UpdateSignalCatalogCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.UpdateSignalCatalog",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateSignalCatalogRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateVehicleCommand = async (
  input: UpdateVehicleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.UpdateVehicle",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateVehicleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_0AssociateVehicleFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateVehicleFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0AssociateVehicleFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0AssociateVehicleFleetResponse(data, context);
  const response: AssociateVehicleFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0AssociateVehicleFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateVehicleFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0BatchCreateVehicleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateVehicleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0BatchCreateVehicleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0BatchCreateVehicleResponse(data, context);
  const response: BatchCreateVehicleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0BatchCreateVehicleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateVehicleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotfleetwise#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0BatchUpdateVehicleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateVehicleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0BatchUpdateVehicleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0BatchUpdateVehicleResponse(data, context);
  const response: BatchUpdateVehicleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0BatchUpdateVehicleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateVehicleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CreateCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCampaignCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateCampaignCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateCampaignResponse(data, context);
  const response: CreateCampaignCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateCampaignCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCampaignCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotfleetwise#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotfleetwise#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CreateDecoderManifestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDecoderManifestCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateDecoderManifestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateDecoderManifestResponse(data, context);
  const response: CreateDecoderManifestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateDecoderManifestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDecoderManifestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotfleetwise#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "DecoderManifestValidationException":
    case "com.amazonaws.iotfleetwise#DecoderManifestValidationException":
      throw await deserializeAws_json1_0DecoderManifestValidationExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotfleetwise#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CreateFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateFleetResponse(data, context);
  const response: CreateFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotfleetwise#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotfleetwise#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CreateModelManifestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelManifestCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateModelManifestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateModelManifestResponse(data, context);
  const response: CreateModelManifestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateModelManifestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelManifestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotfleetwise#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidSignalsException":
    case "com.amazonaws.iotfleetwise#InvalidSignalsException":
      throw await deserializeAws_json1_0InvalidSignalsExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotfleetwise#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CreateSignalCatalogCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSignalCatalogCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateSignalCatalogCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateSignalCatalogResponse(data, context);
  const response: CreateSignalCatalogCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateSignalCatalogCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSignalCatalogCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotfleetwise#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidNodeException":
    case "com.amazonaws.iotfleetwise#InvalidNodeException":
      throw await deserializeAws_json1_0InvalidNodeExceptionResponse(parsedOutput, context);
    case "InvalidSignalsException":
    case "com.amazonaws.iotfleetwise#InvalidSignalsException":
      throw await deserializeAws_json1_0InvalidSignalsExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotfleetwise#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CreateVehicleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVehicleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateVehicleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateVehicleResponse(data, context);
  const response: CreateVehicleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateVehicleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVehicleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotfleetwise#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotfleetwise#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCampaignCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteCampaignCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteCampaignResponse(data, context);
  const response: DeleteCampaignCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteCampaignCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCampaignCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteDecoderManifestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDecoderManifestCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteDecoderManifestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteDecoderManifestResponse(data, context);
  const response: DeleteDecoderManifestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteDecoderManifestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDecoderManifestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotfleetwise#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteFleetResponse(data, context);
  const response: DeleteFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteModelManifestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelManifestCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteModelManifestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteModelManifestResponse(data, context);
  const response: DeleteModelManifestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteModelManifestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelManifestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotfleetwise#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteSignalCatalogCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSignalCatalogCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteSignalCatalogCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteSignalCatalogResponse(data, context);
  const response: DeleteSignalCatalogCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteSignalCatalogCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSignalCatalogCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotfleetwise#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteVehicleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVehicleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteVehicleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteVehicleResponse(data, context);
  const response: DeleteVehicleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteVehicleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVehicleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DisassociateVehicleFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateVehicleFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DisassociateVehicleFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DisassociateVehicleFleetResponse(data, context);
  const response: DisassociateVehicleFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DisassociateVehicleFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateVehicleFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0GetCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetCampaignCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetCampaignResponse(data, context);
  const response: GetCampaignCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetCampaignCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0GetDecoderManifestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDecoderManifestCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetDecoderManifestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetDecoderManifestResponse(data, context);
  const response: GetDecoderManifestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetDecoderManifestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDecoderManifestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0GetFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetFleetResponse(data, context);
  const response: GetFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0GetLoggingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoggingOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetLoggingOptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetLoggingOptionsResponse(data, context);
  const response: GetLoggingOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetLoggingOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoggingOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0GetModelManifestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelManifestCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetModelManifestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetModelManifestResponse(data, context);
  const response: GetModelManifestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetModelManifestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelManifestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0GetRegisterAccountStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRegisterAccountStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetRegisterAccountStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetRegisterAccountStatusResponse(data, context);
  const response: GetRegisterAccountStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetRegisterAccountStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRegisterAccountStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0GetSignalCatalogCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSignalCatalogCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetSignalCatalogCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetSignalCatalogResponse(data, context);
  const response: GetSignalCatalogCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetSignalCatalogCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSignalCatalogCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0GetVehicleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVehicleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetVehicleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetVehicleResponse(data, context);
  const response: GetVehicleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetVehicleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVehicleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0GetVehicleStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVehicleStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetVehicleStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetVehicleStatusResponse(data, context);
  const response: GetVehicleStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetVehicleStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVehicleStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ImportDecoderManifestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportDecoderManifestCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ImportDecoderManifestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ImportDecoderManifestResponse(data, context);
  const response: ImportDecoderManifestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ImportDecoderManifestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportDecoderManifestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotfleetwise#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "DecoderManifestValidationException":
    case "com.amazonaws.iotfleetwise#DecoderManifestValidationException":
      throw await deserializeAws_json1_0DecoderManifestValidationExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidSignalsException":
    case "com.amazonaws.iotfleetwise#InvalidSignalsException":
      throw await deserializeAws_json1_0InvalidSignalsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ImportSignalCatalogCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportSignalCatalogCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ImportSignalCatalogCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ImportSignalCatalogResponse(data, context);
  const response: ImportSignalCatalogCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ImportSignalCatalogCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportSignalCatalogCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotfleetwise#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidSignalsException":
    case "com.amazonaws.iotfleetwise#InvalidSignalsException":
      throw await deserializeAws_json1_0InvalidSignalsExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotfleetwise#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListCampaignsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCampaignsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListCampaignsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListCampaignsResponse(data, context);
  const response: ListCampaignsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListCampaignsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCampaignsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListDecoderManifestNetworkInterfacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDecoderManifestNetworkInterfacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListDecoderManifestNetworkInterfacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListDecoderManifestNetworkInterfacesResponse(data, context);
  const response: ListDecoderManifestNetworkInterfacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListDecoderManifestNetworkInterfacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDecoderManifestNetworkInterfacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListDecoderManifestsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDecoderManifestsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListDecoderManifestsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListDecoderManifestsResponse(data, context);
  const response: ListDecoderManifestsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListDecoderManifestsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDecoderManifestsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListDecoderManifestSignalsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDecoderManifestSignalsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListDecoderManifestSignalsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListDecoderManifestSignalsResponse(data, context);
  const response: ListDecoderManifestSignalsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListDecoderManifestSignalsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDecoderManifestSignalsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListFleetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFleetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListFleetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListFleetsResponse(data, context);
  const response: ListFleetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListFleetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFleetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListFleetsForVehicleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFleetsForVehicleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListFleetsForVehicleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListFleetsForVehicleResponse(data, context);
  const response: ListFleetsForVehicleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListFleetsForVehicleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFleetsForVehicleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListModelManifestNodesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelManifestNodesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListModelManifestNodesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListModelManifestNodesResponse(data, context);
  const response: ListModelManifestNodesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListModelManifestNodesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelManifestNodesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotfleetwise#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListModelManifestsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelManifestsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListModelManifestsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListModelManifestsResponse(data, context);
  const response: ListModelManifestsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListModelManifestsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelManifestsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListSignalCatalogNodesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSignalCatalogNodesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListSignalCatalogNodesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListSignalCatalogNodesResponse(data, context);
  const response: ListSignalCatalogNodesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListSignalCatalogNodesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSignalCatalogNodesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotfleetwise#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListSignalCatalogsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSignalCatalogsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListSignalCatalogsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListSignalCatalogsResponse(data, context);
  const response: ListSignalCatalogsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListSignalCatalogsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSignalCatalogsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListVehiclesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVehiclesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListVehiclesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListVehiclesResponse(data, context);
  const response: ListVehiclesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListVehiclesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVehiclesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListVehiclesInFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVehiclesInFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListVehiclesInFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListVehiclesInFleetResponse(data, context);
  const response: ListVehiclesInFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListVehiclesInFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVehiclesInFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0PutLoggingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLoggingOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0PutLoggingOptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0PutLoggingOptionsResponse(data, context);
  const response: PutLoggingOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0PutLoggingOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLoggingOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotfleetwise#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0RegisterAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0RegisterAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0RegisterAccountResponse(data, context);
  const response: RegisterAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0RegisterAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotfleetwise#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCampaignCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateCampaignCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateCampaignResponse(data, context);
  const response: UpdateCampaignCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateCampaignCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCampaignCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotfleetwise#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateDecoderManifestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDecoderManifestCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateDecoderManifestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateDecoderManifestResponse(data, context);
  const response: UpdateDecoderManifestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateDecoderManifestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDecoderManifestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotfleetwise#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "DecoderManifestValidationException":
    case "com.amazonaws.iotfleetwise#DecoderManifestValidationException":
      throw await deserializeAws_json1_0DecoderManifestValidationExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotfleetwise#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateFleetResponse(data, context);
  const response: UpdateFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotfleetwise#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateModelManifestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateModelManifestCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateModelManifestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateModelManifestResponse(data, context);
  const response: UpdateModelManifestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateModelManifestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateModelManifestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotfleetwise#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidSignalsException":
    case "com.amazonaws.iotfleetwise#InvalidSignalsException":
      throw await deserializeAws_json1_0InvalidSignalsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateSignalCatalogCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSignalCatalogCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateSignalCatalogCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateSignalCatalogResponse(data, context);
  const response: UpdateSignalCatalogCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateSignalCatalogCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSignalCatalogCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotfleetwise#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidNodeException":
    case "com.amazonaws.iotfleetwise#InvalidNodeException":
      throw await deserializeAws_json1_0InvalidNodeExceptionResponse(parsedOutput, context);
    case "InvalidSignalsException":
    case "com.amazonaws.iotfleetwise#InvalidSignalsException":
      throw await deserializeAws_json1_0InvalidSignalsExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotfleetwise#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateVehicleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVehicleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateVehicleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateVehicleResponse(data, context);
  const response: UpdateVehicleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateVehicleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVehicleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotfleetwise#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotfleetwise#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_0AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0DecoderManifestValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DecoderManifestValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0DecoderManifestValidationException(body, context);
  const exception = new DecoderManifestValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InternalServerException(body, context);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0InvalidNodeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNodeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidNodeException(body, context);
  const exception = new InvalidNodeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0InvalidSignalsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSignalsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidSignalsException(body, context);
  const exception = new InvalidSignalsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ThrottlingException(body, context);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_0Actuator = (input: Actuator, context: __SerdeContext): any => {
  return {
    ...(input.allowedValues != null && {
      allowedValues: serializeAws_json1_0listOfStrings(input.allowedValues, context),
    }),
    ...(input.assignedValue != null && { assignedValue: input.assignedValue }),
    ...(input.dataType != null && { dataType: input.dataType }),
    ...(input.description != null && { description: input.description }),
    ...(input.fullyQualifiedName != null && { fullyQualifiedName: input.fullyQualifiedName }),
    ...(input.max != null && { max: __serializeFloat(input.max) }),
    ...(input.min != null && { min: __serializeFloat(input.min) }),
    ...(input.unit != null && { unit: input.unit }),
  };
};

const serializeAws_json1_0AssociateVehicleFleetRequest = (
  input: AssociateVehicleFleetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.fleetId != null && { fleetId: input.fleetId }),
    ...(input.vehicleName != null && { vehicleName: input.vehicleName }),
  };
};

const serializeAws_json1_0Attribute = (input: Attribute, context: __SerdeContext): any => {
  return {
    ...(input.allowedValues != null && {
      allowedValues: serializeAws_json1_0listOfStrings(input.allowedValues, context),
    }),
    ...(input.assignedValue != null && { assignedValue: input.assignedValue }),
    ...(input.dataType != null && { dataType: input.dataType }),
    ...(input.defaultValue != null && { defaultValue: input.defaultValue }),
    ...(input.description != null && { description: input.description }),
    ...(input.fullyQualifiedName != null && { fullyQualifiedName: input.fullyQualifiedName }),
    ...(input.max != null && { max: __serializeFloat(input.max) }),
    ...(input.min != null && { min: __serializeFloat(input.min) }),
    ...(input.unit != null && { unit: input.unit }),
  };
};

const serializeAws_json1_0attributesMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_0BatchCreateVehicleRequest = (
  input: BatchCreateVehicleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.vehicles != null && { vehicles: serializeAws_json1_0createVehicleRequestItems(input.vehicles, context) }),
  };
};

const serializeAws_json1_0BatchUpdateVehicleRequest = (
  input: BatchUpdateVehicleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.vehicles != null && { vehicles: serializeAws_json1_0updateVehicleRequestItems(input.vehicles, context) }),
  };
};

const serializeAws_json1_0Branch = (input: Branch, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.fullyQualifiedName != null && { fullyQualifiedName: input.fullyQualifiedName }),
  };
};

const serializeAws_json1_0CanDbcDefinition = (input: CanDbcDefinition, context: __SerdeContext): any => {
  return {
    ...(input.canDbcFiles != null && { canDbcFiles: serializeAws_json1_0NetworkFilesList(input.canDbcFiles, context) }),
    ...(input.networkInterface != null && { networkInterface: input.networkInterface }),
    ...(input.signalsMap != null && { signalsMap: serializeAws_json1_0ModelSignalsMap(input.signalsMap, context) }),
  };
};

const serializeAws_json1_0CanInterface = (input: CanInterface, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.protocolName != null && { protocolName: input.protocolName }),
    ...(input.protocolVersion != null && { protocolVersion: input.protocolVersion }),
  };
};

const serializeAws_json1_0CanSignal = (input: CanSignal, context: __SerdeContext): any => {
  return {
    ...(input.factor != null && { factor: __serializeFloat(input.factor) }),
    ...(input.isBigEndian != null && { isBigEndian: input.isBigEndian }),
    ...(input.isSigned != null && { isSigned: input.isSigned }),
    ...(input.length != null && { length: input.length }),
    ...(input.messageId != null && { messageId: input.messageId }),
    ...(input.name != null && { name: input.name }),
    ...(input.offset != null && { offset: __serializeFloat(input.offset) }),
    ...(input.startBit != null && { startBit: input.startBit }),
  };
};

const serializeAws_json1_0CloudWatchLogDeliveryOptions = (
  input: CloudWatchLogDeliveryOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    ...(input.logType != null && { logType: input.logType }),
  };
};

const serializeAws_json1_0CollectionScheme = (input: CollectionScheme, context: __SerdeContext): any => {
  return CollectionScheme.visit(input, {
    conditionBasedCollectionScheme: (value) => ({
      conditionBasedCollectionScheme: serializeAws_json1_0ConditionBasedCollectionScheme(value, context),
    }),
    timeBasedCollectionScheme: (value) => ({
      timeBasedCollectionScheme: serializeAws_json1_0TimeBasedCollectionScheme(value, context),
    }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_json1_0ConditionBasedCollectionScheme = (
  input: ConditionBasedCollectionScheme,
  context: __SerdeContext
): any => {
  return {
    ...(input.conditionLanguageVersion != null && { conditionLanguageVersion: input.conditionLanguageVersion }),
    ...(input.expression != null && { expression: input.expression }),
    ...(input.minimumTriggerIntervalMs != null && { minimumTriggerIntervalMs: input.minimumTriggerIntervalMs }),
    ...(input.triggerMode != null && { triggerMode: input.triggerMode }),
  };
};

const serializeAws_json1_0CreateCampaignRequest = (input: CreateCampaignRequest, context: __SerdeContext): any => {
  return {
    ...(input.collectionScheme != null && {
      collectionScheme: serializeAws_json1_0CollectionScheme(input.collectionScheme, context),
    }),
    ...(input.compression != null && { compression: input.compression }),
    ...(input.dataExtraDimensions != null && {
      dataExtraDimensions: serializeAws_json1_0DataExtraDimensionNodePathList(input.dataExtraDimensions, context),
    }),
    ...(input.description != null && { description: input.description }),
    ...(input.diagnosticsMode != null && { diagnosticsMode: input.diagnosticsMode }),
    ...(input.expiryTime != null && { expiryTime: Math.round(input.expiryTime.getTime() / 1000) }),
    ...(input.name != null && { name: input.name }),
    ...(input.postTriggerCollectionDuration != null && {
      postTriggerCollectionDuration: input.postTriggerCollectionDuration,
    }),
    ...(input.priority != null && { priority: input.priority }),
    ...(input.signalCatalogArn != null && { signalCatalogArn: input.signalCatalogArn }),
    ...(input.signalsToCollect != null && {
      signalsToCollect: serializeAws_json1_0SignalInformationList(input.signalsToCollect, context),
    }),
    ...(input.spoolingMode != null && { spoolingMode: input.spoolingMode }),
    ...(input.startTime != null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
    ...(input.tags != null && { tags: serializeAws_json1_0TagList(input.tags, context) }),
    ...(input.targetArn != null && { targetArn: input.targetArn }),
  };
};

const serializeAws_json1_0CreateDecoderManifestRequest = (
  input: CreateDecoderManifestRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.modelManifestArn != null && { modelManifestArn: input.modelManifestArn }),
    ...(input.name != null && { name: input.name }),
    ...(input.networkInterfaces != null && {
      networkInterfaces: serializeAws_json1_0NetworkInterfaces(input.networkInterfaces, context),
    }),
    ...(input.signalDecoders != null && {
      signalDecoders: serializeAws_json1_0SignalDecoders(input.signalDecoders, context),
    }),
    ...(input.tags != null && { tags: serializeAws_json1_0TagList(input.tags, context) }),
  };
};

const serializeAws_json1_0CreateFleetRequest = (input: CreateFleetRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.fleetId != null && { fleetId: input.fleetId }),
    ...(input.signalCatalogArn != null && { signalCatalogArn: input.signalCatalogArn }),
    ...(input.tags != null && { tags: serializeAws_json1_0TagList(input.tags, context) }),
  };
};

const serializeAws_json1_0CreateModelManifestRequest = (
  input: CreateModelManifestRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.nodes != null && { nodes: serializeAws_json1_0listOfStrings(input.nodes, context) }),
    ...(input.signalCatalogArn != null && { signalCatalogArn: input.signalCatalogArn }),
    ...(input.tags != null && { tags: serializeAws_json1_0TagList(input.tags, context) }),
  };
};

const serializeAws_json1_0CreateSignalCatalogRequest = (
  input: CreateSignalCatalogRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.nodes != null && { nodes: serializeAws_json1_0Nodes(input.nodes, context) }),
    ...(input.tags != null && { tags: serializeAws_json1_0TagList(input.tags, context) }),
  };
};

const serializeAws_json1_0CreateVehicleRequest = (input: CreateVehicleRequest, context: __SerdeContext): any => {
  return {
    ...(input.associationBehavior != null && { associationBehavior: input.associationBehavior }),
    ...(input.attributes != null && { attributes: serializeAws_json1_0attributesMap(input.attributes, context) }),
    ...(input.decoderManifestArn != null && { decoderManifestArn: input.decoderManifestArn }),
    ...(input.modelManifestArn != null && { modelManifestArn: input.modelManifestArn }),
    ...(input.tags != null && { tags: serializeAws_json1_0TagList(input.tags, context) }),
    ...(input.vehicleName != null && { vehicleName: input.vehicleName }),
  };
};

const serializeAws_json1_0CreateVehicleRequestItem = (
  input: CreateVehicleRequestItem,
  context: __SerdeContext
): any => {
  return {
    ...(input.associationBehavior != null && { associationBehavior: input.associationBehavior }),
    ...(input.attributes != null && { attributes: serializeAws_json1_0attributesMap(input.attributes, context) }),
    ...(input.decoderManifestArn != null && { decoderManifestArn: input.decoderManifestArn }),
    ...(input.modelManifestArn != null && { modelManifestArn: input.modelManifestArn }),
    ...(input.tags != null && { tags: serializeAws_json1_0TagList(input.tags, context) }),
    ...(input.vehicleName != null && { vehicleName: input.vehicleName }),
  };
};

const serializeAws_json1_0createVehicleRequestItems = (
  input: CreateVehicleRequestItem[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0CreateVehicleRequestItem(entry, context);
    });
};

const serializeAws_json1_0DataExtraDimensionNodePathList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0DeleteCampaignRequest = (input: DeleteCampaignRequest, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_0DeleteDecoderManifestRequest = (
  input: DeleteDecoderManifestRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_0DeleteFleetRequest = (input: DeleteFleetRequest, context: __SerdeContext): any => {
  return {
    ...(input.fleetId != null && { fleetId: input.fleetId }),
  };
};

const serializeAws_json1_0DeleteModelManifestRequest = (
  input: DeleteModelManifestRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_0DeleteSignalCatalogRequest = (
  input: DeleteSignalCatalogRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_0DeleteVehicleRequest = (input: DeleteVehicleRequest, context: __SerdeContext): any => {
  return {
    ...(input.vehicleName != null && { vehicleName: input.vehicleName }),
  };
};

const serializeAws_json1_0DisassociateVehicleFleetRequest = (
  input: DisassociateVehicleFleetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.fleetId != null && { fleetId: input.fleetId }),
    ...(input.vehicleName != null && { vehicleName: input.vehicleName }),
  };
};

const serializeAws_json1_0FormattedVss = (input: FormattedVss, context: __SerdeContext): any => {
  return FormattedVss.visit(input, {
    vssJson: (value) => ({ vssJson: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_json1_0Fqns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0GetCampaignRequest = (input: GetCampaignRequest, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_0GetDecoderManifestRequest = (
  input: GetDecoderManifestRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_0GetFleetRequest = (input: GetFleetRequest, context: __SerdeContext): any => {
  return {
    ...(input.fleetId != null && { fleetId: input.fleetId }),
  };
};

const serializeAws_json1_0GetLoggingOptionsRequest = (
  input: GetLoggingOptionsRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_0GetModelManifestRequest = (input: GetModelManifestRequest, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_0GetRegisterAccountStatusRequest = (
  input: GetRegisterAccountStatusRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_0GetSignalCatalogRequest = (input: GetSignalCatalogRequest, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_0GetVehicleRequest = (input: GetVehicleRequest, context: __SerdeContext): any => {
  return {
    ...(input.vehicleName != null && { vehicleName: input.vehicleName }),
  };
};

const serializeAws_json1_0GetVehicleStatusRequest = (input: GetVehicleStatusRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.vehicleName != null && { vehicleName: input.vehicleName }),
  };
};

const serializeAws_json1_0IamResources = (input: IamResources, context: __SerdeContext): any => {
  return {
    ...(input.roleArn != null && { roleArn: input.roleArn }),
  };
};

const serializeAws_json1_0ImportDecoderManifestRequest = (
  input: ImportDecoderManifestRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.networkFileDefinitions != null && {
      networkFileDefinitions: serializeAws_json1_0NetworkFileDefinitions(input.networkFileDefinitions, context),
    }),
  };
};

const serializeAws_json1_0ImportSignalCatalogRequest = (
  input: ImportSignalCatalogRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: serializeAws_json1_0TagList(input.tags, context) }),
    ...(input.vss != null && { vss: serializeAws_json1_0FormattedVss(input.vss, context) }),
  };
};

const serializeAws_json1_0InterfaceIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0ListCampaignsRequest = (input: ListCampaignsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.status != null && { status: input.status }),
  };
};

const serializeAws_json1_0ListDecoderManifestNetworkInterfacesRequest = (
  input: ListDecoderManifestNetworkInterfacesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.name != null && { name: input.name }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_0ListDecoderManifestSignalsRequest = (
  input: ListDecoderManifestSignalsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.name != null && { name: input.name }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_0ListDecoderManifestsRequest = (
  input: ListDecoderManifestsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.modelManifestArn != null && { modelManifestArn: input.modelManifestArn }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_0ListFleetsForVehicleRequest = (
  input: ListFleetsForVehicleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.vehicleName != null && { vehicleName: input.vehicleName }),
  };
};

const serializeAws_json1_0ListFleetsRequest = (input: ListFleetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_0ListModelManifestNodesRequest = (
  input: ListModelManifestNodesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.name != null && { name: input.name }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_0ListModelManifestsRequest = (
  input: ListModelManifestsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.signalCatalogArn != null && { signalCatalogArn: input.signalCatalogArn }),
  };
};

const serializeAws_json1_0listOfStrings = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0ListSignalCatalogNodesRequest = (
  input: ListSignalCatalogNodesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.name != null && { name: input.name }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_0ListSignalCatalogsRequest = (
  input: ListSignalCatalogsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_0ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
  };
};

const serializeAws_json1_0ListVehiclesInFleetRequest = (
  input: ListVehiclesInFleetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.fleetId != null && { fleetId: input.fleetId }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_0ListVehiclesRequest = (input: ListVehiclesRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.modelManifestArn != null && { modelManifestArn: input.modelManifestArn }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_0ModelSignalsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_0NetworkFileDefinition = (input: NetworkFileDefinition, context: __SerdeContext): any => {
  return NetworkFileDefinition.visit(input, {
    canDbc: (value) => ({ canDbc: serializeAws_json1_0CanDbcDefinition(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_json1_0NetworkFileDefinitions = (input: NetworkFileDefinition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0NetworkFileDefinition(entry, context);
    });
};

const serializeAws_json1_0NetworkFilesList = (input: Uint8Array[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return context.base64Encoder(entry);
    });
};

const serializeAws_json1_0NetworkInterface = (input: NetworkInterface, context: __SerdeContext): any => {
  return {
    ...(input.canInterface != null && { canInterface: serializeAws_json1_0CanInterface(input.canInterface, context) }),
    ...(input.interfaceId != null && { interfaceId: input.interfaceId }),
    ...(input.obdInterface != null && { obdInterface: serializeAws_json1_0ObdInterface(input.obdInterface, context) }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_json1_0NetworkInterfaces = (input: NetworkInterface[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0NetworkInterface(entry, context);
    });
};

const serializeAws_json1_0Node = (input: Node, context: __SerdeContext): any => {
  return Node.visit(input, {
    actuator: (value) => ({ actuator: serializeAws_json1_0Actuator(value, context) }),
    attribute: (value) => ({ attribute: serializeAws_json1_0Attribute(value, context) }),
    branch: (value) => ({ branch: serializeAws_json1_0Branch(value, context) }),
    sensor: (value) => ({ sensor: serializeAws_json1_0Sensor(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_json1_0NodePaths = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0Nodes = (input: Node[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0Node(entry, context);
    });
};

const serializeAws_json1_0ObdInterface = (input: ObdInterface, context: __SerdeContext): any => {
  return {
    ...(input.dtcRequestIntervalSeconds != null && { dtcRequestIntervalSeconds: input.dtcRequestIntervalSeconds }),
    ...(input.hasTransmissionEcu != null && { hasTransmissionEcu: input.hasTransmissionEcu }),
    ...(input.name != null && { name: input.name }),
    ...(input.obdStandard != null && { obdStandard: input.obdStandard }),
    ...(input.pidRequestIntervalSeconds != null && { pidRequestIntervalSeconds: input.pidRequestIntervalSeconds }),
    ...(input.requestMessageId != null && { requestMessageId: input.requestMessageId }),
    ...(input.useExtendedIds != null && { useExtendedIds: input.useExtendedIds }),
  };
};

const serializeAws_json1_0ObdSignal = (input: ObdSignal, context: __SerdeContext): any => {
  return {
    ...(input.bitMaskLength != null && { bitMaskLength: input.bitMaskLength }),
    ...(input.bitRightShift != null && { bitRightShift: input.bitRightShift }),
    ...(input.byteLength != null && { byteLength: input.byteLength }),
    ...(input.offset != null && { offset: __serializeFloat(input.offset) }),
    ...(input.pid != null && { pid: input.pid }),
    ...(input.pidResponseLength != null && { pidResponseLength: input.pidResponseLength }),
    ...(input.scaling != null && { scaling: __serializeFloat(input.scaling) }),
    ...(input.serviceMode != null && { serviceMode: input.serviceMode }),
    ...(input.startByte != null && { startByte: input.startByte }),
  };
};

const serializeAws_json1_0PutLoggingOptionsRequest = (
  input: PutLoggingOptionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.cloudWatchLogDelivery != null && {
      cloudWatchLogDelivery: serializeAws_json1_0CloudWatchLogDeliveryOptions(input.cloudWatchLogDelivery, context),
    }),
  };
};

const serializeAws_json1_0RegisterAccountRequest = (input: RegisterAccountRequest, context: __SerdeContext): any => {
  return {
    ...(input.iamResources != null && { iamResources: serializeAws_json1_0IamResources(input.iamResources, context) }),
    ...(input.timestreamResources != null && {
      timestreamResources: serializeAws_json1_0TimestreamResources(input.timestreamResources, context),
    }),
  };
};

const serializeAws_json1_0Sensor = (input: Sensor, context: __SerdeContext): any => {
  return {
    ...(input.allowedValues != null && {
      allowedValues: serializeAws_json1_0listOfStrings(input.allowedValues, context),
    }),
    ...(input.dataType != null && { dataType: input.dataType }),
    ...(input.description != null && { description: input.description }),
    ...(input.fullyQualifiedName != null && { fullyQualifiedName: input.fullyQualifiedName }),
    ...(input.max != null && { max: __serializeFloat(input.max) }),
    ...(input.min != null && { min: __serializeFloat(input.min) }),
    ...(input.unit != null && { unit: input.unit }),
  };
};

const serializeAws_json1_0SignalDecoder = (input: SignalDecoder, context: __SerdeContext): any => {
  return {
    ...(input.canSignal != null && { canSignal: serializeAws_json1_0CanSignal(input.canSignal, context) }),
    ...(input.fullyQualifiedName != null && { fullyQualifiedName: input.fullyQualifiedName }),
    ...(input.interfaceId != null && { interfaceId: input.interfaceId }),
    ...(input.obdSignal != null && { obdSignal: serializeAws_json1_0ObdSignal(input.obdSignal, context) }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_json1_0SignalDecoders = (input: SignalDecoder[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0SignalDecoder(entry, context);
    });
};

const serializeAws_json1_0SignalInformation = (input: SignalInformation, context: __SerdeContext): any => {
  return {
    ...(input.maxSampleCount != null && { maxSampleCount: input.maxSampleCount }),
    ...(input.minimumSamplingIntervalMs != null && { minimumSamplingIntervalMs: input.minimumSamplingIntervalMs }),
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_0SignalInformationList = (input: SignalInformation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0SignalInformation(entry, context);
    });
};

const serializeAws_json1_0Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_0TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0Tag(entry, context);
    });
};

const serializeAws_json1_0TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_0TimeBasedCollectionScheme = (
  input: TimeBasedCollectionScheme,
  context: __SerdeContext
): any => {
  return {
    ...(input.periodMs != null && { periodMs: input.periodMs }),
  };
};

const serializeAws_json1_0TimestreamResources = (input: TimestreamResources, context: __SerdeContext): any => {
  return {
    ...(input.timestreamDatabaseName != null && { timestreamDatabaseName: input.timestreamDatabaseName }),
    ...(input.timestreamTableName != null && { timestreamTableName: input.timestreamTableName }),
  };
};

const serializeAws_json1_0UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_0TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_0UpdateCampaignRequest = (input: UpdateCampaignRequest, context: __SerdeContext): any => {
  return {
    ...(input.action != null && { action: input.action }),
    ...(input.dataExtraDimensions != null && {
      dataExtraDimensions: serializeAws_json1_0DataExtraDimensionNodePathList(input.dataExtraDimensions, context),
    }),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_0UpdateDecoderManifestRequest = (
  input: UpdateDecoderManifestRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.networkInterfacesToAdd != null && {
      networkInterfacesToAdd: serializeAws_json1_0NetworkInterfaces(input.networkInterfacesToAdd, context),
    }),
    ...(input.networkInterfacesToRemove != null && {
      networkInterfacesToRemove: serializeAws_json1_0InterfaceIds(input.networkInterfacesToRemove, context),
    }),
    ...(input.networkInterfacesToUpdate != null && {
      networkInterfacesToUpdate: serializeAws_json1_0NetworkInterfaces(input.networkInterfacesToUpdate, context),
    }),
    ...(input.signalDecodersToAdd != null && {
      signalDecodersToAdd: serializeAws_json1_0SignalDecoders(input.signalDecodersToAdd, context),
    }),
    ...(input.signalDecodersToRemove != null && {
      signalDecodersToRemove: serializeAws_json1_0Fqns(input.signalDecodersToRemove, context),
    }),
    ...(input.signalDecodersToUpdate != null && {
      signalDecodersToUpdate: serializeAws_json1_0SignalDecoders(input.signalDecodersToUpdate, context),
    }),
    ...(input.status != null && { status: input.status }),
  };
};

const serializeAws_json1_0UpdateFleetRequest = (input: UpdateFleetRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.fleetId != null && { fleetId: input.fleetId }),
  };
};

const serializeAws_json1_0UpdateModelManifestRequest = (
  input: UpdateModelManifestRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.nodesToAdd != null && { nodesToAdd: serializeAws_json1_0NodePaths(input.nodesToAdd, context) }),
    ...(input.nodesToRemove != null && { nodesToRemove: serializeAws_json1_0NodePaths(input.nodesToRemove, context) }),
    ...(input.status != null && { status: input.status }),
  };
};

const serializeAws_json1_0UpdateSignalCatalogRequest = (
  input: UpdateSignalCatalogRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.nodesToAdd != null && { nodesToAdd: serializeAws_json1_0Nodes(input.nodesToAdd, context) }),
    ...(input.nodesToRemove != null && { nodesToRemove: serializeAws_json1_0NodePaths(input.nodesToRemove, context) }),
    ...(input.nodesToUpdate != null && { nodesToUpdate: serializeAws_json1_0Nodes(input.nodesToUpdate, context) }),
  };
};

const serializeAws_json1_0UpdateVehicleRequest = (input: UpdateVehicleRequest, context: __SerdeContext): any => {
  return {
    ...(input.attributeUpdateMode != null && { attributeUpdateMode: input.attributeUpdateMode }),
    ...(input.attributes != null && { attributes: serializeAws_json1_0attributesMap(input.attributes, context) }),
    ...(input.decoderManifestArn != null && { decoderManifestArn: input.decoderManifestArn }),
    ...(input.modelManifestArn != null && { modelManifestArn: input.modelManifestArn }),
    ...(input.vehicleName != null && { vehicleName: input.vehicleName }),
  };
};

const serializeAws_json1_0UpdateVehicleRequestItem = (
  input: UpdateVehicleRequestItem,
  context: __SerdeContext
): any => {
  return {
    ...(input.attributeUpdateMode != null && { attributeUpdateMode: input.attributeUpdateMode }),
    ...(input.attributes != null && { attributes: serializeAws_json1_0attributesMap(input.attributes, context) }),
    ...(input.decoderManifestArn != null && { decoderManifestArn: input.decoderManifestArn }),
    ...(input.modelManifestArn != null && { modelManifestArn: input.modelManifestArn }),
    ...(input.vehicleName != null && { vehicleName: input.vehicleName }),
  };
};

const serializeAws_json1_0updateVehicleRequestItems = (
  input: UpdateVehicleRequestItem[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0UpdateVehicleRequestItem(entry, context);
    });
};

const deserializeAws_json1_0AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0Actuator = (output: any, context: __SerdeContext): Actuator => {
  return {
    allowedValues:
      output.allowedValues != null ? deserializeAws_json1_0listOfStrings(output.allowedValues, context) : undefined,
    assignedValue: __expectString(output.assignedValue),
    dataType: __expectString(output.dataType),
    description: __expectString(output.description),
    fullyQualifiedName: __expectString(output.fullyQualifiedName),
    max: __limitedParseDouble(output.max),
    min: __limitedParseDouble(output.min),
    unit: __expectString(output.unit),
  } as any;
};

const deserializeAws_json1_0AssociateVehicleFleetResponse = (
  output: any,
  context: __SerdeContext
): AssociateVehicleFleetResponse => {
  return {} as any;
};

const deserializeAws_json1_0Attribute = (output: any, context: __SerdeContext): Attribute => {
  return {
    allowedValues:
      output.allowedValues != null ? deserializeAws_json1_0listOfStrings(output.allowedValues, context) : undefined,
    assignedValue: __expectString(output.assignedValue),
    dataType: __expectString(output.dataType),
    defaultValue: __expectString(output.defaultValue),
    description: __expectString(output.description),
    fullyQualifiedName: __expectString(output.fullyQualifiedName),
    max: __limitedParseDouble(output.max),
    min: __limitedParseDouble(output.min),
    unit: __expectString(output.unit),
  } as any;
};

const deserializeAws_json1_0attributesMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_0BatchCreateVehicleResponse = (
  output: any,
  context: __SerdeContext
): BatchCreateVehicleResponse => {
  return {
    errors: output.errors != null ? deserializeAws_json1_0createVehicleErrors(output.errors, context) : undefined,
    vehicles:
      output.vehicles != null ? deserializeAws_json1_0createVehicleResponses(output.vehicles, context) : undefined,
  } as any;
};

const deserializeAws_json1_0BatchUpdateVehicleResponse = (
  output: any,
  context: __SerdeContext
): BatchUpdateVehicleResponse => {
  return {
    errors: output.errors != null ? deserializeAws_json1_0updateVehicleErrors(output.errors, context) : undefined,
    vehicles:
      output.vehicles != null ? deserializeAws_json1_0updateVehicleResponseItems(output.vehicles, context) : undefined,
  } as any;
};

const deserializeAws_json1_0Branch = (output: any, context: __SerdeContext): Branch => {
  return {
    description: __expectString(output.description),
    fullyQualifiedName: __expectString(output.fullyQualifiedName),
  } as any;
};

const deserializeAws_json1_0campaignSummaries = (output: any, context: __SerdeContext): CampaignSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0CampaignSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0CampaignSummary = (output: any, context: __SerdeContext): CampaignSummary => {
  return {
    arn: __expectString(output.arn),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    description: __expectString(output.description),
    lastModificationTime:
      output.lastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModificationTime)))
        : undefined,
    name: __expectString(output.name),
    signalCatalogArn: __expectString(output.signalCatalogArn),
    status: __expectString(output.status),
    targetArn: __expectString(output.targetArn),
  } as any;
};

const deserializeAws_json1_0CanInterface = (output: any, context: __SerdeContext): CanInterface => {
  return {
    name: __expectString(output.name),
    protocolName: __expectString(output.protocolName),
    protocolVersion: __expectString(output.protocolVersion),
  } as any;
};

const deserializeAws_json1_0CanSignal = (output: any, context: __SerdeContext): CanSignal => {
  return {
    factor: __limitedParseDouble(output.factor),
    isBigEndian: __expectBoolean(output.isBigEndian),
    isSigned: __expectBoolean(output.isSigned),
    length: __expectInt32(output.length),
    messageId: __expectInt32(output.messageId),
    name: __expectString(output.name),
    offset: __limitedParseDouble(output.offset),
    startBit: __expectInt32(output.startBit),
  } as any;
};

const deserializeAws_json1_0CloudWatchLogDeliveryOptions = (
  output: any,
  context: __SerdeContext
): CloudWatchLogDeliveryOptions => {
  return {
    logGroupName: __expectString(output.logGroupName),
    logType: __expectString(output.logType),
  } as any;
};

const deserializeAws_json1_0CollectionScheme = (output: any, context: __SerdeContext): CollectionScheme => {
  if (output.conditionBasedCollectionScheme != null) {
    return {
      conditionBasedCollectionScheme: deserializeAws_json1_0ConditionBasedCollectionScheme(
        output.conditionBasedCollectionScheme,
        context
      ),
    };
  }
  if (output.timeBasedCollectionScheme != null) {
    return {
      timeBasedCollectionScheme: deserializeAws_json1_0TimeBasedCollectionScheme(
        output.timeBasedCollectionScheme,
        context
      ),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_json1_0ConditionBasedCollectionScheme = (
  output: any,
  context: __SerdeContext
): ConditionBasedCollectionScheme => {
  return {
    conditionLanguageVersion: __expectInt32(output.conditionLanguageVersion),
    expression: __expectString(output.expression),
    minimumTriggerIntervalMs: __expectLong(output.minimumTriggerIntervalMs),
    triggerMode: __expectString(output.triggerMode),
  } as any;
};

const deserializeAws_json1_0ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    message: __expectString(output.message),
    resource: __expectString(output.resource),
    resourceType: __expectString(output.resourceType),
  } as any;
};

const deserializeAws_json1_0CreateCampaignResponse = (output: any, context: __SerdeContext): CreateCampaignResponse => {
  return {
    arn: __expectString(output.arn),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_0CreateDecoderManifestResponse = (
  output: any,
  context: __SerdeContext
): CreateDecoderManifestResponse => {
  return {
    arn: __expectString(output.arn),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_0CreateFleetResponse = (output: any, context: __SerdeContext): CreateFleetResponse => {
  return {
    arn: __expectString(output.arn),
    id: __expectString(output.id),
  } as any;
};

const deserializeAws_json1_0CreateModelManifestResponse = (
  output: any,
  context: __SerdeContext
): CreateModelManifestResponse => {
  return {
    arn: __expectString(output.arn),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_0CreateSignalCatalogResponse = (
  output: any,
  context: __SerdeContext
): CreateSignalCatalogResponse => {
  return {
    arn: __expectString(output.arn),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_0CreateVehicleError = (output: any, context: __SerdeContext): CreateVehicleError => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
    vehicleName: __expectString(output.vehicleName),
  } as any;
};

const deserializeAws_json1_0createVehicleErrors = (output: any, context: __SerdeContext): CreateVehicleError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0CreateVehicleError(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0CreateVehicleResponse = (output: any, context: __SerdeContext): CreateVehicleResponse => {
  return {
    arn: __expectString(output.arn),
    thingArn: __expectString(output.thingArn),
    vehicleName: __expectString(output.vehicleName),
  } as any;
};

const deserializeAws_json1_0CreateVehicleResponseItem = (
  output: any,
  context: __SerdeContext
): CreateVehicleResponseItem => {
  return {
    arn: __expectString(output.arn),
    thingArn: __expectString(output.thingArn),
    vehicleName: __expectString(output.vehicleName),
  } as any;
};

const deserializeAws_json1_0createVehicleResponses = (
  output: any,
  context: __SerdeContext
): CreateVehicleResponseItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0CreateVehicleResponseItem(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0DataExtraDimensionNodePathList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_0decoderManifestSummaries = (
  output: any,
  context: __SerdeContext
): DecoderManifestSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0DecoderManifestSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0DecoderManifestSummary = (output: any, context: __SerdeContext): DecoderManifestSummary => {
  return {
    arn: __expectString(output.arn),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    description: __expectString(output.description),
    lastModificationTime:
      output.lastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModificationTime)))
        : undefined,
    modelManifestArn: __expectString(output.modelManifestArn),
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_0DecoderManifestValidationException = (
  output: any,
  context: __SerdeContext
): DecoderManifestValidationException => {
  return {
    invalidNetworkInterfaces:
      output.invalidNetworkInterfaces != null
        ? deserializeAws_json1_0InvalidNetworkInterfaces(output.invalidNetworkInterfaces, context)
        : undefined,
    invalidSignals:
      output.invalidSignals != null
        ? deserializeAws_json1_0InvalidSignalDecoders(output.invalidSignals, context)
        : undefined,
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0DeleteCampaignResponse = (output: any, context: __SerdeContext): DeleteCampaignResponse => {
  return {
    arn: __expectString(output.arn),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_0DeleteDecoderManifestResponse = (
  output: any,
  context: __SerdeContext
): DeleteDecoderManifestResponse => {
  return {
    arn: __expectString(output.arn),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_0DeleteFleetResponse = (output: any, context: __SerdeContext): DeleteFleetResponse => {
  return {
    arn: __expectString(output.arn),
    id: __expectString(output.id),
  } as any;
};

const deserializeAws_json1_0DeleteModelManifestResponse = (
  output: any,
  context: __SerdeContext
): DeleteModelManifestResponse => {
  return {
    arn: __expectString(output.arn),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_0DeleteSignalCatalogResponse = (
  output: any,
  context: __SerdeContext
): DeleteSignalCatalogResponse => {
  return {
    arn: __expectString(output.arn),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_0DeleteVehicleResponse = (output: any, context: __SerdeContext): DeleteVehicleResponse => {
  return {
    arn: __expectString(output.arn),
    vehicleName: __expectString(output.vehicleName),
  } as any;
};

const deserializeAws_json1_0DisassociateVehicleFleetResponse = (
  output: any,
  context: __SerdeContext
): DisassociateVehicleFleetResponse => {
  return {} as any;
};

const deserializeAws_json1_0fleets = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_0fleetSummaries = (output: any, context: __SerdeContext): FleetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0FleetSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0FleetSummary = (output: any, context: __SerdeContext): FleetSummary => {
  return {
    arn: __expectString(output.arn),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    lastModificationTime:
      output.lastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModificationTime)))
        : undefined,
    signalCatalogArn: __expectString(output.signalCatalogArn),
  } as any;
};

const deserializeAws_json1_0GetCampaignResponse = (output: any, context: __SerdeContext): GetCampaignResponse => {
  return {
    arn: __expectString(output.arn),
    collectionScheme:
      output.collectionScheme != null
        ? deserializeAws_json1_0CollectionScheme(__expectUnion(output.collectionScheme), context)
        : undefined,
    compression: __expectString(output.compression),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    dataExtraDimensions:
      output.dataExtraDimensions != null
        ? deserializeAws_json1_0DataExtraDimensionNodePathList(output.dataExtraDimensions, context)
        : undefined,
    description: __expectString(output.description),
    diagnosticsMode: __expectString(output.diagnosticsMode),
    expiryTime:
      output.expiryTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.expiryTime))) : undefined,
    lastModificationTime:
      output.lastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModificationTime)))
        : undefined,
    name: __expectString(output.name),
    postTriggerCollectionDuration: __expectLong(output.postTriggerCollectionDuration),
    priority: __expectInt32(output.priority),
    signalCatalogArn: __expectString(output.signalCatalogArn),
    signalsToCollect:
      output.signalsToCollect != null
        ? deserializeAws_json1_0SignalInformationList(output.signalsToCollect, context)
        : undefined,
    spoolingMode: __expectString(output.spoolingMode),
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    status: __expectString(output.status),
    targetArn: __expectString(output.targetArn),
  } as any;
};

const deserializeAws_json1_0GetDecoderManifestResponse = (
  output: any,
  context: __SerdeContext
): GetDecoderManifestResponse => {
  return {
    arn: __expectString(output.arn),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    description: __expectString(output.description),
    lastModificationTime:
      output.lastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModificationTime)))
        : undefined,
    modelManifestArn: __expectString(output.modelManifestArn),
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_0GetFleetResponse = (output: any, context: __SerdeContext): GetFleetResponse => {
  return {
    arn: __expectString(output.arn),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    lastModificationTime:
      output.lastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModificationTime)))
        : undefined,
    signalCatalogArn: __expectString(output.signalCatalogArn),
  } as any;
};

const deserializeAws_json1_0GetLoggingOptionsResponse = (
  output: any,
  context: __SerdeContext
): GetLoggingOptionsResponse => {
  return {
    cloudWatchLogDelivery:
      output.cloudWatchLogDelivery != null
        ? deserializeAws_json1_0CloudWatchLogDeliveryOptions(output.cloudWatchLogDelivery, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0GetModelManifestResponse = (
  output: any,
  context: __SerdeContext
): GetModelManifestResponse => {
  return {
    arn: __expectString(output.arn),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    description: __expectString(output.description),
    lastModificationTime:
      output.lastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModificationTime)))
        : undefined,
    name: __expectString(output.name),
    signalCatalogArn: __expectString(output.signalCatalogArn),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_0GetRegisterAccountStatusResponse = (
  output: any,
  context: __SerdeContext
): GetRegisterAccountStatusResponse => {
  return {
    accountStatus: __expectString(output.accountStatus),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    customerAccountId: __expectString(output.customerAccountId),
    iamRegistrationResponse:
      output.iamRegistrationResponse != null
        ? deserializeAws_json1_0IamRegistrationResponse(output.iamRegistrationResponse, context)
        : undefined,
    lastModificationTime:
      output.lastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModificationTime)))
        : undefined,
    timestreamRegistrationResponse:
      output.timestreamRegistrationResponse != null
        ? deserializeAws_json1_0TimestreamRegistrationResponse(output.timestreamRegistrationResponse, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0GetSignalCatalogResponse = (
  output: any,
  context: __SerdeContext
): GetSignalCatalogResponse => {
  return {
    arn: __expectString(output.arn),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    description: __expectString(output.description),
    lastModificationTime:
      output.lastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModificationTime)))
        : undefined,
    name: __expectString(output.name),
    nodeCounts: output.nodeCounts != null ? deserializeAws_json1_0NodeCounts(output.nodeCounts, context) : undefined,
  } as any;
};

const deserializeAws_json1_0GetVehicleResponse = (output: any, context: __SerdeContext): GetVehicleResponse => {
  return {
    arn: __expectString(output.arn),
    attributes: output.attributes != null ? deserializeAws_json1_0attributesMap(output.attributes, context) : undefined,
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    decoderManifestArn: __expectString(output.decoderManifestArn),
    lastModificationTime:
      output.lastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModificationTime)))
        : undefined,
    modelManifestArn: __expectString(output.modelManifestArn),
    vehicleName: __expectString(output.vehicleName),
  } as any;
};

const deserializeAws_json1_0GetVehicleStatusResponse = (
  output: any,
  context: __SerdeContext
): GetVehicleStatusResponse => {
  return {
    campaigns:
      output.campaigns != null ? deserializeAws_json1_0VehicleStatusList(output.campaigns, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_0IamRegistrationResponse = (
  output: any,
  context: __SerdeContext
): IamRegistrationResponse => {
  return {
    errorMessage: __expectString(output.errorMessage),
    registrationStatus: __expectString(output.registrationStatus),
    roleArn: __expectString(output.roleArn),
  } as any;
};

const deserializeAws_json1_0IamResources = (output: any, context: __SerdeContext): IamResources => {
  return {
    roleArn: __expectString(output.roleArn),
  } as any;
};

const deserializeAws_json1_0ImportDecoderManifestResponse = (
  output: any,
  context: __SerdeContext
): ImportDecoderManifestResponse => {
  return {
    arn: __expectString(output.arn),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_0ImportSignalCatalogResponse = (
  output: any,
  context: __SerdeContext
): ImportSignalCatalogResponse => {
  return {
    arn: __expectString(output.arn),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_0InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  return {
    message: __expectString(output.message),
    retryAfterSeconds: __expectInt32(output.retryAfterSeconds),
  } as any;
};

const deserializeAws_json1_0InvalidNetworkInterface = (
  output: any,
  context: __SerdeContext
): InvalidNetworkInterface => {
  return {
    interfaceId: __expectString(output.interfaceId),
    reason: __expectString(output.reason),
  } as any;
};

const deserializeAws_json1_0InvalidNetworkInterfaces = (
  output: any,
  context: __SerdeContext
): InvalidNetworkInterface[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0InvalidNetworkInterface(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0InvalidNodeException = (output: any, context: __SerdeContext): InvalidNodeException => {
  return {
    invalidNodes: output.invalidNodes != null ? deserializeAws_json1_0Nodes(output.invalidNodes, context) : undefined,
    message: __expectString(output.message),
    reason: __expectString(output.reason),
  } as any;
};

const deserializeAws_json1_0InvalidSignal = (output: any, context: __SerdeContext): InvalidSignal => {
  return {
    name: __expectString(output.name),
    reason: __expectString(output.reason),
  } as any;
};

const deserializeAws_json1_0InvalidSignalDecoder = (output: any, context: __SerdeContext): InvalidSignalDecoder => {
  return {
    name: __expectString(output.name),
    reason: __expectString(output.reason),
  } as any;
};

const deserializeAws_json1_0InvalidSignalDecoders = (output: any, context: __SerdeContext): InvalidSignalDecoder[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0InvalidSignalDecoder(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0InvalidSignals = (output: any, context: __SerdeContext): InvalidSignal[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0InvalidSignal(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0InvalidSignalsException = (
  output: any,
  context: __SerdeContext
): InvalidSignalsException => {
  return {
    invalidSignals:
      output.invalidSignals != null ? deserializeAws_json1_0InvalidSignals(output.invalidSignals, context) : undefined,
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: __expectString(output.message),
    resourceId: __expectString(output.resourceId),
    resourceType: __expectString(output.resourceType),
  } as any;
};

const deserializeAws_json1_0ListCampaignsResponse = (output: any, context: __SerdeContext): ListCampaignsResponse => {
  return {
    campaignSummaries:
      output.campaignSummaries != null
        ? deserializeAws_json1_0campaignSummaries(output.campaignSummaries, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_0ListDecoderManifestNetworkInterfacesResponse = (
  output: any,
  context: __SerdeContext
): ListDecoderManifestNetworkInterfacesResponse => {
  return {
    networkInterfaces:
      output.networkInterfaces != null
        ? deserializeAws_json1_0NetworkInterfaces(output.networkInterfaces, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_0ListDecoderManifestSignalsResponse = (
  output: any,
  context: __SerdeContext
): ListDecoderManifestSignalsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    signalDecoders:
      output.signalDecoders != null ? deserializeAws_json1_0SignalDecoders(output.signalDecoders, context) : undefined,
  } as any;
};

const deserializeAws_json1_0ListDecoderManifestsResponse = (
  output: any,
  context: __SerdeContext
): ListDecoderManifestsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    summaries:
      output.summaries != null ? deserializeAws_json1_0decoderManifestSummaries(output.summaries, context) : undefined,
  } as any;
};

const deserializeAws_json1_0ListFleetsForVehicleResponse = (
  output: any,
  context: __SerdeContext
): ListFleetsForVehicleResponse => {
  return {
    fleets: output.fleets != null ? deserializeAws_json1_0fleets(output.fleets, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_0ListFleetsResponse = (output: any, context: __SerdeContext): ListFleetsResponse => {
  return {
    fleetSummaries:
      output.fleetSummaries != null ? deserializeAws_json1_0fleetSummaries(output.fleetSummaries, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_0ListModelManifestNodesResponse = (
  output: any,
  context: __SerdeContext
): ListModelManifestNodesResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    nodes: output.nodes != null ? deserializeAws_json1_0Nodes(output.nodes, context) : undefined,
  } as any;
};

const deserializeAws_json1_0ListModelManifestsResponse = (
  output: any,
  context: __SerdeContext
): ListModelManifestsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    summaries:
      output.summaries != null ? deserializeAws_json1_0modelManifestSummaries(output.summaries, context) : undefined,
  } as any;
};

const deserializeAws_json1_0listOfStrings = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_0ListSignalCatalogNodesResponse = (
  output: any,
  context: __SerdeContext
): ListSignalCatalogNodesResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    nodes: output.nodes != null ? deserializeAws_json1_0Nodes(output.nodes, context) : undefined,
  } as any;
};

const deserializeAws_json1_0ListSignalCatalogsResponse = (
  output: any,
  context: __SerdeContext
): ListSignalCatalogsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    summaries:
      output.summaries != null ? deserializeAws_json1_0signalCatalogSummaries(output.summaries, context) : undefined,
  } as any;
};

const deserializeAws_json1_0ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? deserializeAws_json1_0TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_0ListVehiclesInFleetResponse = (
  output: any,
  context: __SerdeContext
): ListVehiclesInFleetResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    vehicles: output.vehicles != null ? deserializeAws_json1_0vehicles(output.vehicles, context) : undefined,
  } as any;
};

const deserializeAws_json1_0ListVehiclesResponse = (output: any, context: __SerdeContext): ListVehiclesResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    vehicleSummaries:
      output.vehicleSummaries != null
        ? deserializeAws_json1_0vehicleSummaries(output.vehicleSummaries, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0modelManifestSummaries = (output: any, context: __SerdeContext): ModelManifestSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ModelManifestSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0ModelManifestSummary = (output: any, context: __SerdeContext): ModelManifestSummary => {
  return {
    arn: __expectString(output.arn),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    description: __expectString(output.description),
    lastModificationTime:
      output.lastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModificationTime)))
        : undefined,
    name: __expectString(output.name),
    signalCatalogArn: __expectString(output.signalCatalogArn),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_0NetworkInterface = (output: any, context: __SerdeContext): NetworkInterface => {
  return {
    canInterface:
      output.canInterface != null ? deserializeAws_json1_0CanInterface(output.canInterface, context) : undefined,
    interfaceId: __expectString(output.interfaceId),
    obdInterface:
      output.obdInterface != null ? deserializeAws_json1_0ObdInterface(output.obdInterface, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_0NetworkInterfaces = (output: any, context: __SerdeContext): NetworkInterface[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0NetworkInterface(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0Node = (output: any, context: __SerdeContext): Node => {
  if (output.actuator != null) {
    return {
      actuator: deserializeAws_json1_0Actuator(output.actuator, context),
    };
  }
  if (output.attribute != null) {
    return {
      attribute: deserializeAws_json1_0Attribute(output.attribute, context),
    };
  }
  if (output.branch != null) {
    return {
      branch: deserializeAws_json1_0Branch(output.branch, context),
    };
  }
  if (output.sensor != null) {
    return {
      sensor: deserializeAws_json1_0Sensor(output.sensor, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_json1_0NodeCounts = (output: any, context: __SerdeContext): NodeCounts => {
  return {
    totalActuators: __expectInt32(output.totalActuators),
    totalAttributes: __expectInt32(output.totalAttributes),
    totalBranches: __expectInt32(output.totalBranches),
    totalNodes: __expectInt32(output.totalNodes),
    totalSensors: __expectInt32(output.totalSensors),
  } as any;
};

const deserializeAws_json1_0Nodes = (output: any, context: __SerdeContext): Node[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0Node(__expectUnion(entry), context);
    });
  return retVal;
};

const deserializeAws_json1_0ObdInterface = (output: any, context: __SerdeContext): ObdInterface => {
  return {
    dtcRequestIntervalSeconds: __expectInt32(output.dtcRequestIntervalSeconds),
    hasTransmissionEcu: __expectBoolean(output.hasTransmissionEcu),
    name: __expectString(output.name),
    obdStandard: __expectString(output.obdStandard),
    pidRequestIntervalSeconds: __expectInt32(output.pidRequestIntervalSeconds),
    requestMessageId: __expectInt32(output.requestMessageId),
    useExtendedIds: __expectBoolean(output.useExtendedIds),
  } as any;
};

const deserializeAws_json1_0ObdSignal = (output: any, context: __SerdeContext): ObdSignal => {
  return {
    bitMaskLength: __expectInt32(output.bitMaskLength),
    bitRightShift: __expectInt32(output.bitRightShift),
    byteLength: __expectInt32(output.byteLength),
    offset: __limitedParseDouble(output.offset),
    pid: __expectInt32(output.pid),
    pidResponseLength: __expectInt32(output.pidResponseLength),
    scaling: __limitedParseDouble(output.scaling),
    serviceMode: __expectInt32(output.serviceMode),
    startByte: __expectInt32(output.startByte),
  } as any;
};

const deserializeAws_json1_0PutLoggingOptionsResponse = (
  output: any,
  context: __SerdeContext
): PutLoggingOptionsResponse => {
  return {} as any;
};

const deserializeAws_json1_0RegisterAccountResponse = (
  output: any,
  context: __SerdeContext
): RegisterAccountResponse => {
  return {
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    iamResources:
      output.iamResources != null ? deserializeAws_json1_0IamResources(output.iamResources, context) : undefined,
    lastModificationTime:
      output.lastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModificationTime)))
        : undefined,
    registerAccountStatus: __expectString(output.registerAccountStatus),
    timestreamResources:
      output.timestreamResources != null
        ? deserializeAws_json1_0TimestreamResources(output.timestreamResources, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
    resourceId: __expectString(output.resourceId),
    resourceType: __expectString(output.resourceType),
  } as any;
};

const deserializeAws_json1_0Sensor = (output: any, context: __SerdeContext): Sensor => {
  return {
    allowedValues:
      output.allowedValues != null ? deserializeAws_json1_0listOfStrings(output.allowedValues, context) : undefined,
    dataType: __expectString(output.dataType),
    description: __expectString(output.description),
    fullyQualifiedName: __expectString(output.fullyQualifiedName),
    max: __limitedParseDouble(output.max),
    min: __limitedParseDouble(output.min),
    unit: __expectString(output.unit),
  } as any;
};

const deserializeAws_json1_0signalCatalogSummaries = (output: any, context: __SerdeContext): SignalCatalogSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0SignalCatalogSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0SignalCatalogSummary = (output: any, context: __SerdeContext): SignalCatalogSummary => {
  return {
    arn: __expectString(output.arn),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    lastModificationTime:
      output.lastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModificationTime)))
        : undefined,
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_0SignalDecoder = (output: any, context: __SerdeContext): SignalDecoder => {
  return {
    canSignal: output.canSignal != null ? deserializeAws_json1_0CanSignal(output.canSignal, context) : undefined,
    fullyQualifiedName: __expectString(output.fullyQualifiedName),
    interfaceId: __expectString(output.interfaceId),
    obdSignal: output.obdSignal != null ? deserializeAws_json1_0ObdSignal(output.obdSignal, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_0SignalDecoders = (output: any, context: __SerdeContext): SignalDecoder[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0SignalDecoder(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0SignalInformation = (output: any, context: __SerdeContext): SignalInformation => {
  return {
    maxSampleCount: __expectLong(output.maxSampleCount),
    minimumSamplingIntervalMs: __expectLong(output.minimumSamplingIntervalMs),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_0SignalInformationList = (output: any, context: __SerdeContext): SignalInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0SignalInformation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_0TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_0ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    message: __expectString(output.message),
    quotaCode: __expectString(output.quotaCode),
    retryAfterSeconds: __expectInt32(output.retryAfterSeconds),
    serviceCode: __expectString(output.serviceCode),
  } as any;
};

const deserializeAws_json1_0TimeBasedCollectionScheme = (
  output: any,
  context: __SerdeContext
): TimeBasedCollectionScheme => {
  return {
    periodMs: __expectLong(output.periodMs),
  } as any;
};

const deserializeAws_json1_0TimestreamRegistrationResponse = (
  output: any,
  context: __SerdeContext
): TimestreamRegistrationResponse => {
  return {
    errorMessage: __expectString(output.errorMessage),
    registrationStatus: __expectString(output.registrationStatus),
    timestreamDatabaseArn: __expectString(output.timestreamDatabaseArn),
    timestreamDatabaseName: __expectString(output.timestreamDatabaseName),
    timestreamTableArn: __expectString(output.timestreamTableArn),
    timestreamTableName: __expectString(output.timestreamTableName),
  } as any;
};

const deserializeAws_json1_0TimestreamResources = (output: any, context: __SerdeContext): TimestreamResources => {
  return {
    timestreamDatabaseName: __expectString(output.timestreamDatabaseName),
    timestreamTableName: __expectString(output.timestreamTableName),
  } as any;
};

const deserializeAws_json1_0UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_0UpdateCampaignResponse = (output: any, context: __SerdeContext): UpdateCampaignResponse => {
  return {
    arn: __expectString(output.arn),
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_0UpdateDecoderManifestResponse = (
  output: any,
  context: __SerdeContext
): UpdateDecoderManifestResponse => {
  return {
    arn: __expectString(output.arn),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_0UpdateFleetResponse = (output: any, context: __SerdeContext): UpdateFleetResponse => {
  return {
    arn: __expectString(output.arn),
    id: __expectString(output.id),
  } as any;
};

const deserializeAws_json1_0UpdateModelManifestResponse = (
  output: any,
  context: __SerdeContext
): UpdateModelManifestResponse => {
  return {
    arn: __expectString(output.arn),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_0UpdateSignalCatalogResponse = (
  output: any,
  context: __SerdeContext
): UpdateSignalCatalogResponse => {
  return {
    arn: __expectString(output.arn),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_0UpdateVehicleError = (output: any, context: __SerdeContext): UpdateVehicleError => {
  return {
    code: __expectInt32(output.code),
    message: __expectString(output.message),
    vehicleName: __expectString(output.vehicleName),
  } as any;
};

const deserializeAws_json1_0updateVehicleErrors = (output: any, context: __SerdeContext): UpdateVehicleError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0UpdateVehicleError(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0UpdateVehicleResponse = (output: any, context: __SerdeContext): UpdateVehicleResponse => {
  return {
    arn: __expectString(output.arn),
    vehicleName: __expectString(output.vehicleName),
  } as any;
};

const deserializeAws_json1_0UpdateVehicleResponseItem = (
  output: any,
  context: __SerdeContext
): UpdateVehicleResponseItem => {
  return {
    arn: __expectString(output.arn),
    vehicleName: __expectString(output.vehicleName),
  } as any;
};

const deserializeAws_json1_0updateVehicleResponseItems = (
  output: any,
  context: __SerdeContext
): UpdateVehicleResponseItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0UpdateVehicleResponseItem(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    fieldList:
      output.fieldList != null
        ? deserializeAws_json1_0ValidationExceptionFieldList(output.fieldList, context)
        : undefined,
    message: __expectString(output.message),
    reason: __expectString(output.reason),
  } as any;
};

const deserializeAws_json1_0ValidationExceptionField = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField => {
  return {
    message: __expectString(output.message),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_0ValidationExceptionFieldList = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ValidationExceptionField(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0vehicles = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_0VehicleStatus = (output: any, context: __SerdeContext): VehicleStatus => {
  return {
    campaignName: __expectString(output.campaignName),
    status: __expectString(output.status),
    vehicleName: __expectString(output.vehicleName),
  } as any;
};

const deserializeAws_json1_0VehicleStatusList = (output: any, context: __SerdeContext): VehicleStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0VehicleStatus(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0vehicleSummaries = (output: any, context: __SerdeContext): VehicleSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0VehicleSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0VehicleSummary = (output: any, context: __SerdeContext): VehicleSummary => {
  return {
    arn: __expectString(output.arn),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    decoderManifestArn: __expectString(output.decoderManifestArn),
    lastModificationTime:
      output.lastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModificationTime)))
        : undefined,
    modelManifestArn: __expectString(output.modelManifestArn),
    vehicleName: __expectString(output.vehicleName),
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

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

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
