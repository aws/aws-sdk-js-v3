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

/**
 * serializeAws_json1_0AssociateVehicleFleetCommand
 */
export const se_AssociateVehicleFleetCommand = async (
  input: AssociateVehicleFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.AssociateVehicleFleet",
  };
  let body: any;
  body = JSON.stringify(se_AssociateVehicleFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0BatchCreateVehicleCommand
 */
export const se_BatchCreateVehicleCommand = async (
  input: BatchCreateVehicleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.BatchCreateVehicle",
  };
  let body: any;
  body = JSON.stringify(se_BatchCreateVehicleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0BatchUpdateVehicleCommand
 */
export const se_BatchUpdateVehicleCommand = async (
  input: BatchUpdateVehicleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.BatchUpdateVehicle",
  };
  let body: any;
  body = JSON.stringify(se_BatchUpdateVehicleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateCampaignCommand
 */
export const se_CreateCampaignCommand = async (
  input: CreateCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.CreateCampaign",
  };
  let body: any;
  body = JSON.stringify(se_CreateCampaignRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateDecoderManifestCommand
 */
export const se_CreateDecoderManifestCommand = async (
  input: CreateDecoderManifestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.CreateDecoderManifest",
  };
  let body: any;
  body = JSON.stringify(se_CreateDecoderManifestRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateFleetCommand
 */
export const se_CreateFleetCommand = async (
  input: CreateFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.CreateFleet",
  };
  let body: any;
  body = JSON.stringify(se_CreateFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateModelManifestCommand
 */
export const se_CreateModelManifestCommand = async (
  input: CreateModelManifestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.CreateModelManifest",
  };
  let body: any;
  body = JSON.stringify(se_CreateModelManifestRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateSignalCatalogCommand
 */
export const se_CreateSignalCatalogCommand = async (
  input: CreateSignalCatalogCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.CreateSignalCatalog",
  };
  let body: any;
  body = JSON.stringify(se_CreateSignalCatalogRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateVehicleCommand
 */
export const se_CreateVehicleCommand = async (
  input: CreateVehicleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.CreateVehicle",
  };
  let body: any;
  body = JSON.stringify(se_CreateVehicleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteCampaignCommand
 */
export const se_DeleteCampaignCommand = async (
  input: DeleteCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.DeleteCampaign",
  };
  let body: any;
  body = JSON.stringify(se_DeleteCampaignRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteDecoderManifestCommand
 */
export const se_DeleteDecoderManifestCommand = async (
  input: DeleteDecoderManifestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.DeleteDecoderManifest",
  };
  let body: any;
  body = JSON.stringify(se_DeleteDecoderManifestRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteFleetCommand
 */
export const se_DeleteFleetCommand = async (
  input: DeleteFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.DeleteFleet",
  };
  let body: any;
  body = JSON.stringify(se_DeleteFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteModelManifestCommand
 */
export const se_DeleteModelManifestCommand = async (
  input: DeleteModelManifestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.DeleteModelManifest",
  };
  let body: any;
  body = JSON.stringify(se_DeleteModelManifestRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteSignalCatalogCommand
 */
export const se_DeleteSignalCatalogCommand = async (
  input: DeleteSignalCatalogCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.DeleteSignalCatalog",
  };
  let body: any;
  body = JSON.stringify(se_DeleteSignalCatalogRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteVehicleCommand
 */
export const se_DeleteVehicleCommand = async (
  input: DeleteVehicleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.DeleteVehicle",
  };
  let body: any;
  body = JSON.stringify(se_DeleteVehicleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DisassociateVehicleFleetCommand
 */
export const se_DisassociateVehicleFleetCommand = async (
  input: DisassociateVehicleFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.DisassociateVehicleFleet",
  };
  let body: any;
  body = JSON.stringify(se_DisassociateVehicleFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetCampaignCommand
 */
export const se_GetCampaignCommand = async (
  input: GetCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.GetCampaign",
  };
  let body: any;
  body = JSON.stringify(se_GetCampaignRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetDecoderManifestCommand
 */
export const se_GetDecoderManifestCommand = async (
  input: GetDecoderManifestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.GetDecoderManifest",
  };
  let body: any;
  body = JSON.stringify(se_GetDecoderManifestRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetFleetCommand
 */
export const se_GetFleetCommand = async (
  input: GetFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.GetFleet",
  };
  let body: any;
  body = JSON.stringify(se_GetFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetLoggingOptionsCommand
 */
export const se_GetLoggingOptionsCommand = async (
  input: GetLoggingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.GetLoggingOptions",
  };
  let body: any;
  body = JSON.stringify(se_GetLoggingOptionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetModelManifestCommand
 */
export const se_GetModelManifestCommand = async (
  input: GetModelManifestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.GetModelManifest",
  };
  let body: any;
  body = JSON.stringify(se_GetModelManifestRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetRegisterAccountStatusCommand
 */
export const se_GetRegisterAccountStatusCommand = async (
  input: GetRegisterAccountStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.GetRegisterAccountStatus",
  };
  let body: any;
  body = JSON.stringify(se_GetRegisterAccountStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetSignalCatalogCommand
 */
export const se_GetSignalCatalogCommand = async (
  input: GetSignalCatalogCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.GetSignalCatalog",
  };
  let body: any;
  body = JSON.stringify(se_GetSignalCatalogRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetVehicleCommand
 */
export const se_GetVehicleCommand = async (
  input: GetVehicleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.GetVehicle",
  };
  let body: any;
  body = JSON.stringify(se_GetVehicleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetVehicleStatusCommand
 */
export const se_GetVehicleStatusCommand = async (
  input: GetVehicleStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.GetVehicleStatus",
  };
  let body: any;
  body = JSON.stringify(se_GetVehicleStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ImportDecoderManifestCommand
 */
export const se_ImportDecoderManifestCommand = async (
  input: ImportDecoderManifestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.ImportDecoderManifest",
  };
  let body: any;
  body = JSON.stringify(se_ImportDecoderManifestRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ImportSignalCatalogCommand
 */
export const se_ImportSignalCatalogCommand = async (
  input: ImportSignalCatalogCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.ImportSignalCatalog",
  };
  let body: any;
  body = JSON.stringify(se_ImportSignalCatalogRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListCampaignsCommand
 */
export const se_ListCampaignsCommand = async (
  input: ListCampaignsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.ListCampaigns",
  };
  let body: any;
  body = JSON.stringify(se_ListCampaignsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListDecoderManifestNetworkInterfacesCommand
 */
export const se_ListDecoderManifestNetworkInterfacesCommand = async (
  input: ListDecoderManifestNetworkInterfacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.ListDecoderManifestNetworkInterfaces",
  };
  let body: any;
  body = JSON.stringify(se_ListDecoderManifestNetworkInterfacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListDecoderManifestsCommand
 */
export const se_ListDecoderManifestsCommand = async (
  input: ListDecoderManifestsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.ListDecoderManifests",
  };
  let body: any;
  body = JSON.stringify(se_ListDecoderManifestsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListDecoderManifestSignalsCommand
 */
export const se_ListDecoderManifestSignalsCommand = async (
  input: ListDecoderManifestSignalsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.ListDecoderManifestSignals",
  };
  let body: any;
  body = JSON.stringify(se_ListDecoderManifestSignalsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListFleetsCommand
 */
export const se_ListFleetsCommand = async (
  input: ListFleetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.ListFleets",
  };
  let body: any;
  body = JSON.stringify(se_ListFleetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListFleetsForVehicleCommand
 */
export const se_ListFleetsForVehicleCommand = async (
  input: ListFleetsForVehicleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.ListFleetsForVehicle",
  };
  let body: any;
  body = JSON.stringify(se_ListFleetsForVehicleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListModelManifestNodesCommand
 */
export const se_ListModelManifestNodesCommand = async (
  input: ListModelManifestNodesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.ListModelManifestNodes",
  };
  let body: any;
  body = JSON.stringify(se_ListModelManifestNodesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListModelManifestsCommand
 */
export const se_ListModelManifestsCommand = async (
  input: ListModelManifestsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.ListModelManifests",
  };
  let body: any;
  body = JSON.stringify(se_ListModelManifestsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListSignalCatalogNodesCommand
 */
export const se_ListSignalCatalogNodesCommand = async (
  input: ListSignalCatalogNodesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.ListSignalCatalogNodes",
  };
  let body: any;
  body = JSON.stringify(se_ListSignalCatalogNodesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListSignalCatalogsCommand
 */
export const se_ListSignalCatalogsCommand = async (
  input: ListSignalCatalogsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.ListSignalCatalogs",
  };
  let body: any;
  body = JSON.stringify(se_ListSignalCatalogsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListVehiclesCommand
 */
export const se_ListVehiclesCommand = async (
  input: ListVehiclesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.ListVehicles",
  };
  let body: any;
  body = JSON.stringify(se_ListVehiclesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListVehiclesInFleetCommand
 */
export const se_ListVehiclesInFleetCommand = async (
  input: ListVehiclesInFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.ListVehiclesInFleet",
  };
  let body: any;
  body = JSON.stringify(se_ListVehiclesInFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0PutLoggingOptionsCommand
 */
export const se_PutLoggingOptionsCommand = async (
  input: PutLoggingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.PutLoggingOptions",
  };
  let body: any;
  body = JSON.stringify(se_PutLoggingOptionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0RegisterAccountCommand
 */
export const se_RegisterAccountCommand = async (
  input: RegisterAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.RegisterAccount",
  };
  let body: any;
  body = JSON.stringify(se_RegisterAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.TagResource",
  };
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateCampaignCommand
 */
export const se_UpdateCampaignCommand = async (
  input: UpdateCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.UpdateCampaign",
  };
  let body: any;
  body = JSON.stringify(se_UpdateCampaignRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateDecoderManifestCommand
 */
export const se_UpdateDecoderManifestCommand = async (
  input: UpdateDecoderManifestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.UpdateDecoderManifest",
  };
  let body: any;
  body = JSON.stringify(se_UpdateDecoderManifestRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateFleetCommand
 */
export const se_UpdateFleetCommand = async (
  input: UpdateFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.UpdateFleet",
  };
  let body: any;
  body = JSON.stringify(se_UpdateFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateModelManifestCommand
 */
export const se_UpdateModelManifestCommand = async (
  input: UpdateModelManifestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.UpdateModelManifest",
  };
  let body: any;
  body = JSON.stringify(se_UpdateModelManifestRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateSignalCatalogCommand
 */
export const se_UpdateSignalCatalogCommand = async (
  input: UpdateSignalCatalogCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.UpdateSignalCatalog",
  };
  let body: any;
  body = JSON.stringify(se_UpdateSignalCatalogRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateVehicleCommand
 */
export const se_UpdateVehicleCommand = async (
  input: UpdateVehicleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "IoTAutobahnControlPlane.UpdateVehicle",
  };
  let body: any;
  body = JSON.stringify(se_UpdateVehicleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0AssociateVehicleFleetCommand
 */
export const de_AssociateVehicleFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateVehicleFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateVehicleFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateVehicleFleetResponse(data, context);
  const response: AssociateVehicleFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0AssociateVehicleFleetCommandError
 */
const de_AssociateVehicleFleetCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0BatchCreateVehicleCommand
 */
export const de_BatchCreateVehicleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateVehicleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchCreateVehicleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchCreateVehicleResponse(data, context);
  const response: BatchCreateVehicleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0BatchCreateVehicleCommandError
 */
const de_BatchCreateVehicleCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotfleetwise#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0BatchUpdateVehicleCommand
 */
export const de_BatchUpdateVehicleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateVehicleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchUpdateVehicleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchUpdateVehicleResponse(data, context);
  const response: BatchUpdateVehicleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0BatchUpdateVehicleCommandError
 */
const de_BatchUpdateVehicleCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0CreateCampaignCommand
 */
export const de_CreateCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCampaignCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateCampaignCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateCampaignResponse(data, context);
  const response: CreateCampaignCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0CreateCampaignCommandError
 */
const de_CreateCampaignCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotfleetwise#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotfleetwise#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0CreateDecoderManifestCommand
 */
export const de_CreateDecoderManifestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDecoderManifestCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDecoderManifestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDecoderManifestResponse(data, context);
  const response: CreateDecoderManifestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0CreateDecoderManifestCommandError
 */
const de_CreateDecoderManifestCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotfleetwise#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "DecoderManifestValidationException":
    case "com.amazonaws.iotfleetwise#DecoderManifestValidationException":
      throw await de_DecoderManifestValidationExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotfleetwise#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0CreateFleetCommand
 */
export const de_CreateFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateFleetResponse(data, context);
  const response: CreateFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0CreateFleetCommandError
 */
const de_CreateFleetCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotfleetwise#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotfleetwise#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0CreateModelManifestCommand
 */
export const de_CreateModelManifestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelManifestCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateModelManifestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateModelManifestResponse(data, context);
  const response: CreateModelManifestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0CreateModelManifestCommandError
 */
const de_CreateModelManifestCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotfleetwise#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidSignalsException":
    case "com.amazonaws.iotfleetwise#InvalidSignalsException":
      throw await de_InvalidSignalsExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotfleetwise#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0CreateSignalCatalogCommand
 */
export const de_CreateSignalCatalogCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSignalCatalogCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateSignalCatalogCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateSignalCatalogResponse(data, context);
  const response: CreateSignalCatalogCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0CreateSignalCatalogCommandError
 */
const de_CreateSignalCatalogCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotfleetwise#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidNodeException":
    case "com.amazonaws.iotfleetwise#InvalidNodeException":
      throw await de_InvalidNodeExceptionRes(parsedOutput, context);
    case "InvalidSignalsException":
    case "com.amazonaws.iotfleetwise#InvalidSignalsException":
      throw await de_InvalidSignalsExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotfleetwise#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0CreateVehicleCommand
 */
export const de_CreateVehicleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVehicleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateVehicleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateVehicleResponse(data, context);
  const response: CreateVehicleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0CreateVehicleCommandError
 */
const de_CreateVehicleCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotfleetwise#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotfleetwise#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0DeleteCampaignCommand
 */
export const de_DeleteCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCampaignCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteCampaignCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteCampaignResponse(data, context);
  const response: DeleteCampaignCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteCampaignCommandError
 */
const de_DeleteCampaignCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0DeleteDecoderManifestCommand
 */
export const de_DeleteDecoderManifestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDecoderManifestCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDecoderManifestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteDecoderManifestResponse(data, context);
  const response: DeleteDecoderManifestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteDecoderManifestCommandError
 */
const de_DeleteDecoderManifestCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotfleetwise#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0DeleteFleetCommand
 */
export const de_DeleteFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteFleetResponse(data, context);
  const response: DeleteFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteFleetCommandError
 */
const de_DeleteFleetCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0DeleteModelManifestCommand
 */
export const de_DeleteModelManifestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelManifestCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteModelManifestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteModelManifestResponse(data, context);
  const response: DeleteModelManifestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteModelManifestCommandError
 */
const de_DeleteModelManifestCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotfleetwise#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0DeleteSignalCatalogCommand
 */
export const de_DeleteSignalCatalogCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSignalCatalogCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteSignalCatalogCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteSignalCatalogResponse(data, context);
  const response: DeleteSignalCatalogCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteSignalCatalogCommandError
 */
const de_DeleteSignalCatalogCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotfleetwise#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0DeleteVehicleCommand
 */
export const de_DeleteVehicleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVehicleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteVehicleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteVehicleResponse(data, context);
  const response: DeleteVehicleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteVehicleCommandError
 */
const de_DeleteVehicleCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0DisassociateVehicleFleetCommand
 */
export const de_DisassociateVehicleFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateVehicleFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateVehicleFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateVehicleFleetResponse(data, context);
  const response: DisassociateVehicleFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DisassociateVehicleFleetCommandError
 */
const de_DisassociateVehicleFleetCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0GetCampaignCommand
 */
export const de_GetCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCampaignCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCampaignResponse(data, context);
  const response: GetCampaignCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0GetCampaignCommandError
 */
const de_GetCampaignCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0GetDecoderManifestCommand
 */
export const de_GetDecoderManifestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDecoderManifestCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDecoderManifestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDecoderManifestResponse(data, context);
  const response: GetDecoderManifestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0GetDecoderManifestCommandError
 */
const de_GetDecoderManifestCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0GetFleetCommand
 */
export const de_GetFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetFleetResponse(data, context);
  const response: GetFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0GetFleetCommandError
 */
const de_GetFleetCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0GetLoggingOptionsCommand
 */
export const de_GetLoggingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoggingOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetLoggingOptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetLoggingOptionsResponse(data, context);
  const response: GetLoggingOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0GetLoggingOptionsCommandError
 */
const de_GetLoggingOptionsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0GetModelManifestCommand
 */
export const de_GetModelManifestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelManifestCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetModelManifestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetModelManifestResponse(data, context);
  const response: GetModelManifestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0GetModelManifestCommandError
 */
const de_GetModelManifestCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0GetRegisterAccountStatusCommand
 */
export const de_GetRegisterAccountStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRegisterAccountStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRegisterAccountStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRegisterAccountStatusResponse(data, context);
  const response: GetRegisterAccountStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0GetRegisterAccountStatusCommandError
 */
const de_GetRegisterAccountStatusCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0GetSignalCatalogCommand
 */
export const de_GetSignalCatalogCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSignalCatalogCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSignalCatalogCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSignalCatalogResponse(data, context);
  const response: GetSignalCatalogCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0GetSignalCatalogCommandError
 */
const de_GetSignalCatalogCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0GetVehicleCommand
 */
export const de_GetVehicleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVehicleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetVehicleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetVehicleResponse(data, context);
  const response: GetVehicleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0GetVehicleCommandError
 */
const de_GetVehicleCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0GetVehicleStatusCommand
 */
export const de_GetVehicleStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVehicleStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetVehicleStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetVehicleStatusResponse(data, context);
  const response: GetVehicleStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0GetVehicleStatusCommandError
 */
const de_GetVehicleStatusCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0ImportDecoderManifestCommand
 */
export const de_ImportDecoderManifestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportDecoderManifestCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ImportDecoderManifestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ImportDecoderManifestResponse(data, context);
  const response: ImportDecoderManifestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ImportDecoderManifestCommandError
 */
const de_ImportDecoderManifestCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotfleetwise#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "DecoderManifestValidationException":
    case "com.amazonaws.iotfleetwise#DecoderManifestValidationException":
      throw await de_DecoderManifestValidationExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidSignalsException":
    case "com.amazonaws.iotfleetwise#InvalidSignalsException":
      throw await de_InvalidSignalsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0ImportSignalCatalogCommand
 */
export const de_ImportSignalCatalogCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportSignalCatalogCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ImportSignalCatalogCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ImportSignalCatalogResponse(data, context);
  const response: ImportSignalCatalogCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ImportSignalCatalogCommandError
 */
const de_ImportSignalCatalogCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotfleetwise#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidSignalsException":
    case "com.amazonaws.iotfleetwise#InvalidSignalsException":
      throw await de_InvalidSignalsExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotfleetwise#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0ListCampaignsCommand
 */
export const de_ListCampaignsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCampaignsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListCampaignsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCampaignsResponse(data, context);
  const response: ListCampaignsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListCampaignsCommandError
 */
const de_ListCampaignsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0ListDecoderManifestNetworkInterfacesCommand
 */
export const de_ListDecoderManifestNetworkInterfacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDecoderManifestNetworkInterfacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDecoderManifestNetworkInterfacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDecoderManifestNetworkInterfacesResponse(data, context);
  const response: ListDecoderManifestNetworkInterfacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListDecoderManifestNetworkInterfacesCommandError
 */
const de_ListDecoderManifestNetworkInterfacesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0ListDecoderManifestsCommand
 */
export const de_ListDecoderManifestsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDecoderManifestsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDecoderManifestsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDecoderManifestsResponse(data, context);
  const response: ListDecoderManifestsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListDecoderManifestsCommandError
 */
const de_ListDecoderManifestsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0ListDecoderManifestSignalsCommand
 */
export const de_ListDecoderManifestSignalsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDecoderManifestSignalsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDecoderManifestSignalsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDecoderManifestSignalsResponse(data, context);
  const response: ListDecoderManifestSignalsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListDecoderManifestSignalsCommandError
 */
const de_ListDecoderManifestSignalsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0ListFleetsCommand
 */
export const de_ListFleetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFleetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListFleetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListFleetsResponse(data, context);
  const response: ListFleetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListFleetsCommandError
 */
const de_ListFleetsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0ListFleetsForVehicleCommand
 */
export const de_ListFleetsForVehicleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFleetsForVehicleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListFleetsForVehicleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListFleetsForVehicleResponse(data, context);
  const response: ListFleetsForVehicleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListFleetsForVehicleCommandError
 */
const de_ListFleetsForVehicleCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0ListModelManifestNodesCommand
 */
export const de_ListModelManifestNodesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelManifestNodesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListModelManifestNodesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListModelManifestNodesResponse(data, context);
  const response: ListModelManifestNodesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListModelManifestNodesCommandError
 */
const de_ListModelManifestNodesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotfleetwise#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0ListModelManifestsCommand
 */
export const de_ListModelManifestsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelManifestsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListModelManifestsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListModelManifestsResponse(data, context);
  const response: ListModelManifestsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListModelManifestsCommandError
 */
const de_ListModelManifestsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0ListSignalCatalogNodesCommand
 */
export const de_ListSignalCatalogNodesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSignalCatalogNodesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSignalCatalogNodesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSignalCatalogNodesResponse(data, context);
  const response: ListSignalCatalogNodesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListSignalCatalogNodesCommandError
 */
const de_ListSignalCatalogNodesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotfleetwise#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0ListSignalCatalogsCommand
 */
export const de_ListSignalCatalogsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSignalCatalogsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSignalCatalogsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSignalCatalogsResponse(data, context);
  const response: ListSignalCatalogsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListSignalCatalogsCommandError
 */
const de_ListSignalCatalogsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0ListVehiclesCommand
 */
export const de_ListVehiclesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVehiclesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListVehiclesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListVehiclesResponse(data, context);
  const response: ListVehiclesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListVehiclesCommandError
 */
const de_ListVehiclesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0ListVehiclesInFleetCommand
 */
export const de_ListVehiclesInFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVehiclesInFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListVehiclesInFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListVehiclesInFleetResponse(data, context);
  const response: ListVehiclesInFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListVehiclesInFleetCommandError
 */
const de_ListVehiclesInFleetCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0PutLoggingOptionsCommand
 */
export const de_PutLoggingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLoggingOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutLoggingOptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutLoggingOptionsResponse(data, context);
  const response: PutLoggingOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0PutLoggingOptionsCommandError
 */
const de_PutLoggingOptionsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotfleetwise#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0RegisterAccountCommand
 */
export const de_RegisterAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RegisterAccountResponse(data, context);
  const response: RegisterAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0RegisterAccountCommandError
 */
const de_RegisterAccountCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotfleetwise#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0TagResourceCommandError
 */
const de_TagResourceCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0UpdateCampaignCommand
 */
export const de_UpdateCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCampaignCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateCampaignCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateCampaignResponse(data, context);
  const response: UpdateCampaignCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateCampaignCommandError
 */
const de_UpdateCampaignCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotfleetwise#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0UpdateDecoderManifestCommand
 */
export const de_UpdateDecoderManifestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDecoderManifestCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDecoderManifestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateDecoderManifestResponse(data, context);
  const response: UpdateDecoderManifestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateDecoderManifestCommandError
 */
const de_UpdateDecoderManifestCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotfleetwise#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "DecoderManifestValidationException":
    case "com.amazonaws.iotfleetwise#DecoderManifestValidationException":
      throw await de_DecoderManifestValidationExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotfleetwise#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0UpdateFleetCommand
 */
export const de_UpdateFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateFleetResponse(data, context);
  const response: UpdateFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateFleetCommandError
 */
const de_UpdateFleetCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotfleetwise#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0UpdateModelManifestCommand
 */
export const de_UpdateModelManifestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateModelManifestCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateModelManifestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateModelManifestResponse(data, context);
  const response: UpdateModelManifestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateModelManifestCommandError
 */
const de_UpdateModelManifestCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotfleetwise#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidSignalsException":
    case "com.amazonaws.iotfleetwise#InvalidSignalsException":
      throw await de_InvalidSignalsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0UpdateSignalCatalogCommand
 */
export const de_UpdateSignalCatalogCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSignalCatalogCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateSignalCatalogCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateSignalCatalogResponse(data, context);
  const response: UpdateSignalCatalogCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateSignalCatalogCommandError
 */
const de_UpdateSignalCatalogCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotfleetwise#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidNodeException":
    case "com.amazonaws.iotfleetwise#InvalidNodeException":
      throw await de_InvalidNodeExceptionRes(parsedOutput, context);
    case "InvalidSignalsException":
    case "com.amazonaws.iotfleetwise#InvalidSignalsException":
      throw await de_InvalidSignalsExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotfleetwise#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0UpdateVehicleCommand
 */
export const de_UpdateVehicleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVehicleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateVehicleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateVehicleResponse(data, context);
  const response: UpdateVehicleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateVehicleCommandError
 */
const de_UpdateVehicleCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotfleetwise#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotfleetwise#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotfleetwise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotfleetwise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotfleetwise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0DecoderManifestValidationExceptionRes
 */
const de_DecoderManifestValidationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DecoderManifestValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DecoderManifestValidationException(body, context);
  const exception = new DecoderManifestValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InternalServerException(body, context);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InvalidNodeExceptionRes
 */
const de_InvalidNodeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNodeException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidNodeException(body, context);
  const exception = new InvalidNodeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InvalidSignalsExceptionRes
 */
const de_InvalidSignalsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSignalsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidSignalsException(body, context);
  const exception = new InvalidSignalsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ThrottlingException(body, context);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_0Actuator
 */
const se_Actuator = (input: Actuator, context: __SerdeContext): any => {
  return {
    ...(input.allowedValues != null && { allowedValues: se_listOfStrings(input.allowedValues, context) }),
    ...(input.assignedValue != null && { assignedValue: input.assignedValue }),
    ...(input.dataType != null && { dataType: input.dataType }),
    ...(input.description != null && { description: input.description }),
    ...(input.fullyQualifiedName != null && { fullyQualifiedName: input.fullyQualifiedName }),
    ...(input.max != null && { max: __serializeFloat(input.max) }),
    ...(input.min != null && { min: __serializeFloat(input.min) }),
    ...(input.unit != null && { unit: input.unit }),
  };
};

/**
 * serializeAws_json1_0AssociateVehicleFleetRequest
 */
const se_AssociateVehicleFleetRequest = (input: AssociateVehicleFleetRequest, context: __SerdeContext): any => {
  return {
    ...(input.fleetId != null && { fleetId: input.fleetId }),
    ...(input.vehicleName != null && { vehicleName: input.vehicleName }),
  };
};

/**
 * serializeAws_json1_0Attribute
 */
const se_Attribute = (input: Attribute, context: __SerdeContext): any => {
  return {
    ...(input.allowedValues != null && { allowedValues: se_listOfStrings(input.allowedValues, context) }),
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

/**
 * serializeAws_json1_0attributesMap
 */
const se_attributesMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_0BatchCreateVehicleRequest
 */
const se_BatchCreateVehicleRequest = (input: BatchCreateVehicleRequest, context: __SerdeContext): any => {
  return {
    ...(input.vehicles != null && { vehicles: se_createVehicleRequestItems(input.vehicles, context) }),
  };
};

/**
 * serializeAws_json1_0BatchUpdateVehicleRequest
 */
const se_BatchUpdateVehicleRequest = (input: BatchUpdateVehicleRequest, context: __SerdeContext): any => {
  return {
    ...(input.vehicles != null && { vehicles: se_updateVehicleRequestItems(input.vehicles, context) }),
  };
};

/**
 * serializeAws_json1_0Branch
 */
const se_Branch = (input: Branch, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.fullyQualifiedName != null && { fullyQualifiedName: input.fullyQualifiedName }),
  };
};

/**
 * serializeAws_json1_0CanDbcDefinition
 */
const se_CanDbcDefinition = (input: CanDbcDefinition, context: __SerdeContext): any => {
  return {
    ...(input.canDbcFiles != null && { canDbcFiles: se_NetworkFilesList(input.canDbcFiles, context) }),
    ...(input.networkInterface != null && { networkInterface: input.networkInterface }),
    ...(input.signalsMap != null && { signalsMap: se_ModelSignalsMap(input.signalsMap, context) }),
  };
};

/**
 * serializeAws_json1_0CanInterface
 */
const se_CanInterface = (input: CanInterface, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.protocolName != null && { protocolName: input.protocolName }),
    ...(input.protocolVersion != null && { protocolVersion: input.protocolVersion }),
  };
};

/**
 * serializeAws_json1_0CanSignal
 */
const se_CanSignal = (input: CanSignal, context: __SerdeContext): any => {
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

/**
 * serializeAws_json1_0CloudWatchLogDeliveryOptions
 */
const se_CloudWatchLogDeliveryOptions = (input: CloudWatchLogDeliveryOptions, context: __SerdeContext): any => {
  return {
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    ...(input.logType != null && { logType: input.logType }),
  };
};

/**
 * serializeAws_json1_0CollectionScheme
 */
const se_CollectionScheme = (input: CollectionScheme, context: __SerdeContext): any => {
  return CollectionScheme.visit(input, {
    conditionBasedCollectionScheme: (value) => ({
      conditionBasedCollectionScheme: se_ConditionBasedCollectionScheme(value, context),
    }),
    timeBasedCollectionScheme: (value) => ({ timeBasedCollectionScheme: se_TimeBasedCollectionScheme(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_json1_0ConditionBasedCollectionScheme
 */
const se_ConditionBasedCollectionScheme = (input: ConditionBasedCollectionScheme, context: __SerdeContext): any => {
  return {
    ...(input.conditionLanguageVersion != null && { conditionLanguageVersion: input.conditionLanguageVersion }),
    ...(input.expression != null && { expression: input.expression }),
    ...(input.minimumTriggerIntervalMs != null && { minimumTriggerIntervalMs: input.minimumTriggerIntervalMs }),
    ...(input.triggerMode != null && { triggerMode: input.triggerMode }),
  };
};

/**
 * serializeAws_json1_0CreateCampaignRequest
 */
const se_CreateCampaignRequest = (input: CreateCampaignRequest, context: __SerdeContext): any => {
  return {
    ...(input.collectionScheme != null && { collectionScheme: se_CollectionScheme(input.collectionScheme, context) }),
    ...(input.compression != null && { compression: input.compression }),
    ...(input.dataExtraDimensions != null && {
      dataExtraDimensions: se_DataExtraDimensionNodePathList(input.dataExtraDimensions, context),
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
      signalsToCollect: se_SignalInformationList(input.signalsToCollect, context),
    }),
    ...(input.spoolingMode != null && { spoolingMode: input.spoolingMode }),
    ...(input.startTime != null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.targetArn != null && { targetArn: input.targetArn }),
  };
};

/**
 * serializeAws_json1_0CreateDecoderManifestRequest
 */
const se_CreateDecoderManifestRequest = (input: CreateDecoderManifestRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.modelManifestArn != null && { modelManifestArn: input.modelManifestArn }),
    ...(input.name != null && { name: input.name }),
    ...(input.networkInterfaces != null && {
      networkInterfaces: se_NetworkInterfaces(input.networkInterfaces, context),
    }),
    ...(input.signalDecoders != null && { signalDecoders: se_SignalDecoders(input.signalDecoders, context) }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_0CreateFleetRequest
 */
const se_CreateFleetRequest = (input: CreateFleetRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.fleetId != null && { fleetId: input.fleetId }),
    ...(input.signalCatalogArn != null && { signalCatalogArn: input.signalCatalogArn }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_0CreateModelManifestRequest
 */
const se_CreateModelManifestRequest = (input: CreateModelManifestRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.nodes != null && { nodes: se_listOfStrings(input.nodes, context) }),
    ...(input.signalCatalogArn != null && { signalCatalogArn: input.signalCatalogArn }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_0CreateSignalCatalogRequest
 */
const se_CreateSignalCatalogRequest = (input: CreateSignalCatalogRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.nodes != null && { nodes: se_Nodes(input.nodes, context) }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_0CreateVehicleRequest
 */
const se_CreateVehicleRequest = (input: CreateVehicleRequest, context: __SerdeContext): any => {
  return {
    ...(input.associationBehavior != null && { associationBehavior: input.associationBehavior }),
    ...(input.attributes != null && { attributes: se_attributesMap(input.attributes, context) }),
    ...(input.decoderManifestArn != null && { decoderManifestArn: input.decoderManifestArn }),
    ...(input.modelManifestArn != null && { modelManifestArn: input.modelManifestArn }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.vehicleName != null && { vehicleName: input.vehicleName }),
  };
};

/**
 * serializeAws_json1_0CreateVehicleRequestItem
 */
const se_CreateVehicleRequestItem = (input: CreateVehicleRequestItem, context: __SerdeContext): any => {
  return {
    ...(input.associationBehavior != null && { associationBehavior: input.associationBehavior }),
    ...(input.attributes != null && { attributes: se_attributesMap(input.attributes, context) }),
    ...(input.decoderManifestArn != null && { decoderManifestArn: input.decoderManifestArn }),
    ...(input.modelManifestArn != null && { modelManifestArn: input.modelManifestArn }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.vehicleName != null && { vehicleName: input.vehicleName }),
  };
};

/**
 * serializeAws_json1_0createVehicleRequestItems
 */
const se_createVehicleRequestItems = (input: CreateVehicleRequestItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CreateVehicleRequestItem(entry, context);
    });
};

/**
 * serializeAws_json1_0DataExtraDimensionNodePathList
 */
const se_DataExtraDimensionNodePathList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0DeleteCampaignRequest
 */
const se_DeleteCampaignRequest = (input: DeleteCampaignRequest, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_0DeleteDecoderManifestRequest
 */
const se_DeleteDecoderManifestRequest = (input: DeleteDecoderManifestRequest, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_0DeleteFleetRequest
 */
const se_DeleteFleetRequest = (input: DeleteFleetRequest, context: __SerdeContext): any => {
  return {
    ...(input.fleetId != null && { fleetId: input.fleetId }),
  };
};

/**
 * serializeAws_json1_0DeleteModelManifestRequest
 */
const se_DeleteModelManifestRequest = (input: DeleteModelManifestRequest, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_0DeleteSignalCatalogRequest
 */
const se_DeleteSignalCatalogRequest = (input: DeleteSignalCatalogRequest, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_0DeleteVehicleRequest
 */
const se_DeleteVehicleRequest = (input: DeleteVehicleRequest, context: __SerdeContext): any => {
  return {
    ...(input.vehicleName != null && { vehicleName: input.vehicleName }),
  };
};

/**
 * serializeAws_json1_0DisassociateVehicleFleetRequest
 */
const se_DisassociateVehicleFleetRequest = (input: DisassociateVehicleFleetRequest, context: __SerdeContext): any => {
  return {
    ...(input.fleetId != null && { fleetId: input.fleetId }),
    ...(input.vehicleName != null && { vehicleName: input.vehicleName }),
  };
};

/**
 * serializeAws_json1_0FormattedVss
 */
const se_FormattedVss = (input: FormattedVss, context: __SerdeContext): any => {
  return FormattedVss.visit(input, {
    vssJson: (value) => ({ vssJson: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_json1_0Fqns
 */
const se_Fqns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0GetCampaignRequest
 */
const se_GetCampaignRequest = (input: GetCampaignRequest, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_0GetDecoderManifestRequest
 */
const se_GetDecoderManifestRequest = (input: GetDecoderManifestRequest, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_0GetFleetRequest
 */
const se_GetFleetRequest = (input: GetFleetRequest, context: __SerdeContext): any => {
  return {
    ...(input.fleetId != null && { fleetId: input.fleetId }),
  };
};

/**
 * serializeAws_json1_0GetLoggingOptionsRequest
 */
const se_GetLoggingOptionsRequest = (input: GetLoggingOptionsRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_0GetModelManifestRequest
 */
const se_GetModelManifestRequest = (input: GetModelManifestRequest, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_0GetRegisterAccountStatusRequest
 */
const se_GetRegisterAccountStatusRequest = (input: GetRegisterAccountStatusRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_0GetSignalCatalogRequest
 */
const se_GetSignalCatalogRequest = (input: GetSignalCatalogRequest, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_0GetVehicleRequest
 */
const se_GetVehicleRequest = (input: GetVehicleRequest, context: __SerdeContext): any => {
  return {
    ...(input.vehicleName != null && { vehicleName: input.vehicleName }),
  };
};

/**
 * serializeAws_json1_0GetVehicleStatusRequest
 */
const se_GetVehicleStatusRequest = (input: GetVehicleStatusRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.vehicleName != null && { vehicleName: input.vehicleName }),
  };
};

/**
 * serializeAws_json1_0IamResources
 */
const se_IamResources = (input: IamResources, context: __SerdeContext): any => {
  return {
    ...(input.roleArn != null && { roleArn: input.roleArn }),
  };
};

/**
 * serializeAws_json1_0ImportDecoderManifestRequest
 */
const se_ImportDecoderManifestRequest = (input: ImportDecoderManifestRequest, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.networkFileDefinitions != null && {
      networkFileDefinitions: se_NetworkFileDefinitions(input.networkFileDefinitions, context),
    }),
  };
};

/**
 * serializeAws_json1_0ImportSignalCatalogRequest
 */
const se_ImportSignalCatalogRequest = (input: ImportSignalCatalogRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.vss != null && { vss: se_FormattedVss(input.vss, context) }),
  };
};

/**
 * serializeAws_json1_0InterfaceIds
 */
const se_InterfaceIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0ListCampaignsRequest
 */
const se_ListCampaignsRequest = (input: ListCampaignsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.status != null && { status: input.status }),
  };
};

/**
 * serializeAws_json1_0ListDecoderManifestNetworkInterfacesRequest
 */
const se_ListDecoderManifestNetworkInterfacesRequest = (
  input: ListDecoderManifestNetworkInterfacesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.name != null && { name: input.name }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_0ListDecoderManifestSignalsRequest
 */
const se_ListDecoderManifestSignalsRequest = (
  input: ListDecoderManifestSignalsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.name != null && { name: input.name }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_0ListDecoderManifestsRequest
 */
const se_ListDecoderManifestsRequest = (input: ListDecoderManifestsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.modelManifestArn != null && { modelManifestArn: input.modelManifestArn }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_0ListFleetsForVehicleRequest
 */
const se_ListFleetsForVehicleRequest = (input: ListFleetsForVehicleRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.vehicleName != null && { vehicleName: input.vehicleName }),
  };
};

/**
 * serializeAws_json1_0ListFleetsRequest
 */
const se_ListFleetsRequest = (input: ListFleetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_0ListModelManifestNodesRequest
 */
const se_ListModelManifestNodesRequest = (input: ListModelManifestNodesRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.name != null && { name: input.name }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_0ListModelManifestsRequest
 */
const se_ListModelManifestsRequest = (input: ListModelManifestsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.signalCatalogArn != null && { signalCatalogArn: input.signalCatalogArn }),
  };
};

/**
 * serializeAws_json1_0listOfStrings
 */
const se_listOfStrings = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0ListSignalCatalogNodesRequest
 */
const se_ListSignalCatalogNodesRequest = (input: ListSignalCatalogNodesRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.name != null && { name: input.name }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_0ListSignalCatalogsRequest
 */
const se_ListSignalCatalogsRequest = (input: ListSignalCatalogsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_0ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
  };
};

/**
 * serializeAws_json1_0ListVehiclesInFleetRequest
 */
const se_ListVehiclesInFleetRequest = (input: ListVehiclesInFleetRequest, context: __SerdeContext): any => {
  return {
    ...(input.fleetId != null && { fleetId: input.fleetId }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_0ListVehiclesRequest
 */
const se_ListVehiclesRequest = (input: ListVehiclesRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.modelManifestArn != null && { modelManifestArn: input.modelManifestArn }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_0ModelSignalsMap
 */
const se_ModelSignalsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_0NetworkFileDefinition
 */
const se_NetworkFileDefinition = (input: NetworkFileDefinition, context: __SerdeContext): any => {
  return NetworkFileDefinition.visit(input, {
    canDbc: (value) => ({ canDbc: se_CanDbcDefinition(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_json1_0NetworkFileDefinitions
 */
const se_NetworkFileDefinitions = (input: NetworkFileDefinition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_NetworkFileDefinition(entry, context);
    });
};

/**
 * serializeAws_json1_0NetworkFilesList
 */
const se_NetworkFilesList = (input: Uint8Array[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return context.base64Encoder(entry);
    });
};

/**
 * serializeAws_json1_0NetworkInterface
 */
const se_NetworkInterface = (input: NetworkInterface, context: __SerdeContext): any => {
  return {
    ...(input.canInterface != null && { canInterface: se_CanInterface(input.canInterface, context) }),
    ...(input.interfaceId != null && { interfaceId: input.interfaceId }),
    ...(input.obdInterface != null && { obdInterface: se_ObdInterface(input.obdInterface, context) }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_0NetworkInterfaces
 */
const se_NetworkInterfaces = (input: NetworkInterface[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_NetworkInterface(entry, context);
    });
};

/**
 * serializeAws_json1_0Node
 */
const se_Node = (input: Node, context: __SerdeContext): any => {
  return Node.visit(input, {
    actuator: (value) => ({ actuator: se_Actuator(value, context) }),
    attribute: (value) => ({ attribute: se_Attribute(value, context) }),
    branch: (value) => ({ branch: se_Branch(value, context) }),
    sensor: (value) => ({ sensor: se_Sensor(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_json1_0NodePaths
 */
const se_NodePaths = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0Nodes
 */
const se_Nodes = (input: Node[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Node(entry, context);
    });
};

/**
 * serializeAws_json1_0ObdInterface
 */
const se_ObdInterface = (input: ObdInterface, context: __SerdeContext): any => {
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

/**
 * serializeAws_json1_0ObdSignal
 */
const se_ObdSignal = (input: ObdSignal, context: __SerdeContext): any => {
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

/**
 * serializeAws_json1_0PutLoggingOptionsRequest
 */
const se_PutLoggingOptionsRequest = (input: PutLoggingOptionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.cloudWatchLogDelivery != null && {
      cloudWatchLogDelivery: se_CloudWatchLogDeliveryOptions(input.cloudWatchLogDelivery, context),
    }),
  };
};

/**
 * serializeAws_json1_0RegisterAccountRequest
 */
const se_RegisterAccountRequest = (input: RegisterAccountRequest, context: __SerdeContext): any => {
  return {
    ...(input.iamResources != null && { iamResources: se_IamResources(input.iamResources, context) }),
    ...(input.timestreamResources != null && {
      timestreamResources: se_TimestreamResources(input.timestreamResources, context),
    }),
  };
};

/**
 * serializeAws_json1_0Sensor
 */
const se_Sensor = (input: Sensor, context: __SerdeContext): any => {
  return {
    ...(input.allowedValues != null && { allowedValues: se_listOfStrings(input.allowedValues, context) }),
    ...(input.dataType != null && { dataType: input.dataType }),
    ...(input.description != null && { description: input.description }),
    ...(input.fullyQualifiedName != null && { fullyQualifiedName: input.fullyQualifiedName }),
    ...(input.max != null && { max: __serializeFloat(input.max) }),
    ...(input.min != null && { min: __serializeFloat(input.min) }),
    ...(input.unit != null && { unit: input.unit }),
  };
};

/**
 * serializeAws_json1_0SignalDecoder
 */
const se_SignalDecoder = (input: SignalDecoder, context: __SerdeContext): any => {
  return {
    ...(input.canSignal != null && { canSignal: se_CanSignal(input.canSignal, context) }),
    ...(input.fullyQualifiedName != null && { fullyQualifiedName: input.fullyQualifiedName }),
    ...(input.interfaceId != null && { interfaceId: input.interfaceId }),
    ...(input.obdSignal != null && { obdSignal: se_ObdSignal(input.obdSignal, context) }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_0SignalDecoders
 */
const se_SignalDecoders = (input: SignalDecoder[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SignalDecoder(entry, context);
    });
};

/**
 * serializeAws_json1_0SignalInformation
 */
const se_SignalInformation = (input: SignalInformation, context: __SerdeContext): any => {
  return {
    ...(input.maxSampleCount != null && { maxSampleCount: input.maxSampleCount }),
    ...(input.minimumSamplingIntervalMs != null && { minimumSamplingIntervalMs: input.minimumSamplingIntervalMs }),
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_0SignalInformationList
 */
const se_SignalInformationList = (input: SignalInformation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SignalInformation(entry, context);
    });
};

/**
 * serializeAws_json1_0Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_0TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_0TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_0TimeBasedCollectionScheme
 */
const se_TimeBasedCollectionScheme = (input: TimeBasedCollectionScheme, context: __SerdeContext): any => {
  return {
    ...(input.periodMs != null && { periodMs: input.periodMs }),
  };
};

/**
 * serializeAws_json1_0TimestreamResources
 */
const se_TimestreamResources = (input: TimestreamResources, context: __SerdeContext): any => {
  return {
    ...(input.timestreamDatabaseName != null && { timestreamDatabaseName: input.timestreamDatabaseName }),
    ...(input.timestreamTableName != null && { timestreamTableName: input.timestreamTableName }),
  };
};

/**
 * serializeAws_json1_0UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_0UpdateCampaignRequest
 */
const se_UpdateCampaignRequest = (input: UpdateCampaignRequest, context: __SerdeContext): any => {
  return {
    ...(input.action != null && { action: input.action }),
    ...(input.dataExtraDimensions != null && {
      dataExtraDimensions: se_DataExtraDimensionNodePathList(input.dataExtraDimensions, context),
    }),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_0UpdateDecoderManifestRequest
 */
const se_UpdateDecoderManifestRequest = (input: UpdateDecoderManifestRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.networkInterfacesToAdd != null && {
      networkInterfacesToAdd: se_NetworkInterfaces(input.networkInterfacesToAdd, context),
    }),
    ...(input.networkInterfacesToRemove != null && {
      networkInterfacesToRemove: se_InterfaceIds(input.networkInterfacesToRemove, context),
    }),
    ...(input.networkInterfacesToUpdate != null && {
      networkInterfacesToUpdate: se_NetworkInterfaces(input.networkInterfacesToUpdate, context),
    }),
    ...(input.signalDecodersToAdd != null && {
      signalDecodersToAdd: se_SignalDecoders(input.signalDecodersToAdd, context),
    }),
    ...(input.signalDecodersToRemove != null && {
      signalDecodersToRemove: se_Fqns(input.signalDecodersToRemove, context),
    }),
    ...(input.signalDecodersToUpdate != null && {
      signalDecodersToUpdate: se_SignalDecoders(input.signalDecodersToUpdate, context),
    }),
    ...(input.status != null && { status: input.status }),
  };
};

/**
 * serializeAws_json1_0UpdateFleetRequest
 */
const se_UpdateFleetRequest = (input: UpdateFleetRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.fleetId != null && { fleetId: input.fleetId }),
  };
};

/**
 * serializeAws_json1_0UpdateModelManifestRequest
 */
const se_UpdateModelManifestRequest = (input: UpdateModelManifestRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.nodesToAdd != null && { nodesToAdd: se_NodePaths(input.nodesToAdd, context) }),
    ...(input.nodesToRemove != null && { nodesToRemove: se_NodePaths(input.nodesToRemove, context) }),
    ...(input.status != null && { status: input.status }),
  };
};

/**
 * serializeAws_json1_0UpdateSignalCatalogRequest
 */
const se_UpdateSignalCatalogRequest = (input: UpdateSignalCatalogRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.nodesToAdd != null && { nodesToAdd: se_Nodes(input.nodesToAdd, context) }),
    ...(input.nodesToRemove != null && { nodesToRemove: se_NodePaths(input.nodesToRemove, context) }),
    ...(input.nodesToUpdate != null && { nodesToUpdate: se_Nodes(input.nodesToUpdate, context) }),
  };
};

/**
 * serializeAws_json1_0UpdateVehicleRequest
 */
const se_UpdateVehicleRequest = (input: UpdateVehicleRequest, context: __SerdeContext): any => {
  return {
    ...(input.attributeUpdateMode != null && { attributeUpdateMode: input.attributeUpdateMode }),
    ...(input.attributes != null && { attributes: se_attributesMap(input.attributes, context) }),
    ...(input.decoderManifestArn != null && { decoderManifestArn: input.decoderManifestArn }),
    ...(input.modelManifestArn != null && { modelManifestArn: input.modelManifestArn }),
    ...(input.vehicleName != null && { vehicleName: input.vehicleName }),
  };
};

/**
 * serializeAws_json1_0UpdateVehicleRequestItem
 */
const se_UpdateVehicleRequestItem = (input: UpdateVehicleRequestItem, context: __SerdeContext): any => {
  return {
    ...(input.attributeUpdateMode != null && { attributeUpdateMode: input.attributeUpdateMode }),
    ...(input.attributes != null && { attributes: se_attributesMap(input.attributes, context) }),
    ...(input.decoderManifestArn != null && { decoderManifestArn: input.decoderManifestArn }),
    ...(input.modelManifestArn != null && { modelManifestArn: input.modelManifestArn }),
    ...(input.vehicleName != null && { vehicleName: input.vehicleName }),
  };
};

/**
 * serializeAws_json1_0updateVehicleRequestItems
 */
const se_updateVehicleRequestItems = (input: UpdateVehicleRequestItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_UpdateVehicleRequestItem(entry, context);
    });
};

/**
 * deserializeAws_json1_0AccessDeniedException
 */
const de_AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0Actuator
 */
const de_Actuator = (output: any, context: __SerdeContext): Actuator => {
  return {
    allowedValues: output.allowedValues != null ? de_listOfStrings(output.allowedValues, context) : undefined,
    assignedValue: __expectString(output.assignedValue),
    dataType: __expectString(output.dataType),
    description: __expectString(output.description),
    fullyQualifiedName: __expectString(output.fullyQualifiedName),
    max: __limitedParseDouble(output.max),
    min: __limitedParseDouble(output.min),
    unit: __expectString(output.unit),
  } as any;
};

/**
 * deserializeAws_json1_0AssociateVehicleFleetResponse
 */
const de_AssociateVehicleFleetResponse = (output: any, context: __SerdeContext): AssociateVehicleFleetResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_0Attribute
 */
const de_Attribute = (output: any, context: __SerdeContext): Attribute => {
  return {
    allowedValues: output.allowedValues != null ? de_listOfStrings(output.allowedValues, context) : undefined,
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

/**
 * deserializeAws_json1_0attributesMap
 */
const de_attributesMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_0BatchCreateVehicleResponse
 */
const de_BatchCreateVehicleResponse = (output: any, context: __SerdeContext): BatchCreateVehicleResponse => {
  return {
    errors: output.errors != null ? de_createVehicleErrors(output.errors, context) : undefined,
    vehicles: output.vehicles != null ? de_createVehicleResponses(output.vehicles, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0BatchUpdateVehicleResponse
 */
const de_BatchUpdateVehicleResponse = (output: any, context: __SerdeContext): BatchUpdateVehicleResponse => {
  return {
    errors: output.errors != null ? de_updateVehicleErrors(output.errors, context) : undefined,
    vehicles: output.vehicles != null ? de_updateVehicleResponseItems(output.vehicles, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0Branch
 */
const de_Branch = (output: any, context: __SerdeContext): Branch => {
  return {
    description: __expectString(output.description),
    fullyQualifiedName: __expectString(output.fullyQualifiedName),
  } as any;
};

/**
 * deserializeAws_json1_0campaignSummaries
 */
const de_campaignSummaries = (output: any, context: __SerdeContext): CampaignSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CampaignSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0CampaignSummary
 */
const de_CampaignSummary = (output: any, context: __SerdeContext): CampaignSummary => {
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

/**
 * deserializeAws_json1_0CanInterface
 */
const de_CanInterface = (output: any, context: __SerdeContext): CanInterface => {
  return {
    name: __expectString(output.name),
    protocolName: __expectString(output.protocolName),
    protocolVersion: __expectString(output.protocolVersion),
  } as any;
};

/**
 * deserializeAws_json1_0CanSignal
 */
const de_CanSignal = (output: any, context: __SerdeContext): CanSignal => {
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

/**
 * deserializeAws_json1_0CloudWatchLogDeliveryOptions
 */
const de_CloudWatchLogDeliveryOptions = (output: any, context: __SerdeContext): CloudWatchLogDeliveryOptions => {
  return {
    logGroupName: __expectString(output.logGroupName),
    logType: __expectString(output.logType),
  } as any;
};

/**
 * deserializeAws_json1_0CollectionScheme
 */
const de_CollectionScheme = (output: any, context: __SerdeContext): CollectionScheme => {
  if (output.conditionBasedCollectionScheme != null) {
    return {
      conditionBasedCollectionScheme: de_ConditionBasedCollectionScheme(output.conditionBasedCollectionScheme, context),
    };
  }
  if (output.timeBasedCollectionScheme != null) {
    return {
      timeBasedCollectionScheme: de_TimeBasedCollectionScheme(output.timeBasedCollectionScheme, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_json1_0ConditionBasedCollectionScheme
 */
const de_ConditionBasedCollectionScheme = (output: any, context: __SerdeContext): ConditionBasedCollectionScheme => {
  return {
    conditionLanguageVersion: __expectInt32(output.conditionLanguageVersion),
    expression: __expectString(output.expression),
    minimumTriggerIntervalMs: __expectLong(output.minimumTriggerIntervalMs),
    triggerMode: __expectString(output.triggerMode),
  } as any;
};

/**
 * deserializeAws_json1_0ConflictException
 */
const de_ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    message: __expectString(output.message),
    resource: __expectString(output.resource),
    resourceType: __expectString(output.resourceType),
  } as any;
};

/**
 * deserializeAws_json1_0CreateCampaignResponse
 */
const de_CreateCampaignResponse = (output: any, context: __SerdeContext): CreateCampaignResponse => {
  return {
    arn: __expectString(output.arn),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_0CreateDecoderManifestResponse
 */
const de_CreateDecoderManifestResponse = (output: any, context: __SerdeContext): CreateDecoderManifestResponse => {
  return {
    arn: __expectString(output.arn),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_0CreateFleetResponse
 */
const de_CreateFleetResponse = (output: any, context: __SerdeContext): CreateFleetResponse => {
  return {
    arn: __expectString(output.arn),
    id: __expectString(output.id),
  } as any;
};

/**
 * deserializeAws_json1_0CreateModelManifestResponse
 */
const de_CreateModelManifestResponse = (output: any, context: __SerdeContext): CreateModelManifestResponse => {
  return {
    arn: __expectString(output.arn),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_0CreateSignalCatalogResponse
 */
const de_CreateSignalCatalogResponse = (output: any, context: __SerdeContext): CreateSignalCatalogResponse => {
  return {
    arn: __expectString(output.arn),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_0CreateVehicleError
 */
const de_CreateVehicleError = (output: any, context: __SerdeContext): CreateVehicleError => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
    vehicleName: __expectString(output.vehicleName),
  } as any;
};

/**
 * deserializeAws_json1_0createVehicleErrors
 */
const de_createVehicleErrors = (output: any, context: __SerdeContext): CreateVehicleError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CreateVehicleError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0CreateVehicleResponse
 */
const de_CreateVehicleResponse = (output: any, context: __SerdeContext): CreateVehicleResponse => {
  return {
    arn: __expectString(output.arn),
    thingArn: __expectString(output.thingArn),
    vehicleName: __expectString(output.vehicleName),
  } as any;
};

/**
 * deserializeAws_json1_0CreateVehicleResponseItem
 */
const de_CreateVehicleResponseItem = (output: any, context: __SerdeContext): CreateVehicleResponseItem => {
  return {
    arn: __expectString(output.arn),
    thingArn: __expectString(output.thingArn),
    vehicleName: __expectString(output.vehicleName),
  } as any;
};

/**
 * deserializeAws_json1_0createVehicleResponses
 */
const de_createVehicleResponses = (output: any, context: __SerdeContext): CreateVehicleResponseItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CreateVehicleResponseItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0DataExtraDimensionNodePathList
 */
const de_DataExtraDimensionNodePathList = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_0decoderManifestSummaries
 */
const de_decoderManifestSummaries = (output: any, context: __SerdeContext): DecoderManifestSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DecoderManifestSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0DecoderManifestSummary
 */
const de_DecoderManifestSummary = (output: any, context: __SerdeContext): DecoderManifestSummary => {
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

/**
 * deserializeAws_json1_0DecoderManifestValidationException
 */
const de_DecoderManifestValidationException = (
  output: any,
  context: __SerdeContext
): DecoderManifestValidationException => {
  return {
    invalidNetworkInterfaces:
      output.invalidNetworkInterfaces != null
        ? de_InvalidNetworkInterfaces(output.invalidNetworkInterfaces, context)
        : undefined,
    invalidSignals:
      output.invalidSignals != null ? de_InvalidSignalDecoders(output.invalidSignals, context) : undefined,
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0DeleteCampaignResponse
 */
const de_DeleteCampaignResponse = (output: any, context: __SerdeContext): DeleteCampaignResponse => {
  return {
    arn: __expectString(output.arn),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_0DeleteDecoderManifestResponse
 */
const de_DeleteDecoderManifestResponse = (output: any, context: __SerdeContext): DeleteDecoderManifestResponse => {
  return {
    arn: __expectString(output.arn),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_0DeleteFleetResponse
 */
const de_DeleteFleetResponse = (output: any, context: __SerdeContext): DeleteFleetResponse => {
  return {
    arn: __expectString(output.arn),
    id: __expectString(output.id),
  } as any;
};

/**
 * deserializeAws_json1_0DeleteModelManifestResponse
 */
const de_DeleteModelManifestResponse = (output: any, context: __SerdeContext): DeleteModelManifestResponse => {
  return {
    arn: __expectString(output.arn),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_0DeleteSignalCatalogResponse
 */
const de_DeleteSignalCatalogResponse = (output: any, context: __SerdeContext): DeleteSignalCatalogResponse => {
  return {
    arn: __expectString(output.arn),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_0DeleteVehicleResponse
 */
const de_DeleteVehicleResponse = (output: any, context: __SerdeContext): DeleteVehicleResponse => {
  return {
    arn: __expectString(output.arn),
    vehicleName: __expectString(output.vehicleName),
  } as any;
};

/**
 * deserializeAws_json1_0DisassociateVehicleFleetResponse
 */
const de_DisassociateVehicleFleetResponse = (
  output: any,
  context: __SerdeContext
): DisassociateVehicleFleetResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_0fleets
 */
const de_fleets = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_0fleetSummaries
 */
const de_fleetSummaries = (output: any, context: __SerdeContext): FleetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FleetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0FleetSummary
 */
const de_FleetSummary = (output: any, context: __SerdeContext): FleetSummary => {
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

/**
 * deserializeAws_json1_0GetCampaignResponse
 */
const de_GetCampaignResponse = (output: any, context: __SerdeContext): GetCampaignResponse => {
  return {
    arn: __expectString(output.arn),
    collectionScheme:
      output.collectionScheme != null
        ? de_CollectionScheme(__expectUnion(output.collectionScheme), context)
        : undefined,
    compression: __expectString(output.compression),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    dataExtraDimensions:
      output.dataExtraDimensions != null
        ? de_DataExtraDimensionNodePathList(output.dataExtraDimensions, context)
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
      output.signalsToCollect != null ? de_SignalInformationList(output.signalsToCollect, context) : undefined,
    spoolingMode: __expectString(output.spoolingMode),
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    status: __expectString(output.status),
    targetArn: __expectString(output.targetArn),
  } as any;
};

/**
 * deserializeAws_json1_0GetDecoderManifestResponse
 */
const de_GetDecoderManifestResponse = (output: any, context: __SerdeContext): GetDecoderManifestResponse => {
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

/**
 * deserializeAws_json1_0GetFleetResponse
 */
const de_GetFleetResponse = (output: any, context: __SerdeContext): GetFleetResponse => {
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

/**
 * deserializeAws_json1_0GetLoggingOptionsResponse
 */
const de_GetLoggingOptionsResponse = (output: any, context: __SerdeContext): GetLoggingOptionsResponse => {
  return {
    cloudWatchLogDelivery:
      output.cloudWatchLogDelivery != null
        ? de_CloudWatchLogDeliveryOptions(output.cloudWatchLogDelivery, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GetModelManifestResponse
 */
const de_GetModelManifestResponse = (output: any, context: __SerdeContext): GetModelManifestResponse => {
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

/**
 * deserializeAws_json1_0GetRegisterAccountStatusResponse
 */
const de_GetRegisterAccountStatusResponse = (
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
        ? de_IamRegistrationResponse(output.iamRegistrationResponse, context)
        : undefined,
    lastModificationTime:
      output.lastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModificationTime)))
        : undefined,
    timestreamRegistrationResponse:
      output.timestreamRegistrationResponse != null
        ? de_TimestreamRegistrationResponse(output.timestreamRegistrationResponse, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GetSignalCatalogResponse
 */
const de_GetSignalCatalogResponse = (output: any, context: __SerdeContext): GetSignalCatalogResponse => {
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
    nodeCounts: output.nodeCounts != null ? de_NodeCounts(output.nodeCounts, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GetVehicleResponse
 */
const de_GetVehicleResponse = (output: any, context: __SerdeContext): GetVehicleResponse => {
  return {
    arn: __expectString(output.arn),
    attributes: output.attributes != null ? de_attributesMap(output.attributes, context) : undefined,
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

/**
 * deserializeAws_json1_0GetVehicleStatusResponse
 */
const de_GetVehicleStatusResponse = (output: any, context: __SerdeContext): GetVehicleStatusResponse => {
  return {
    campaigns: output.campaigns != null ? de_VehicleStatusList(output.campaigns, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_0IamRegistrationResponse
 */
const de_IamRegistrationResponse = (output: any, context: __SerdeContext): IamRegistrationResponse => {
  return {
    errorMessage: __expectString(output.errorMessage),
    registrationStatus: __expectString(output.registrationStatus),
    roleArn: __expectString(output.roleArn),
  } as any;
};

/**
 * deserializeAws_json1_0IamResources
 */
const de_IamResources = (output: any, context: __SerdeContext): IamResources => {
  return {
    roleArn: __expectString(output.roleArn),
  } as any;
};

/**
 * deserializeAws_json1_0ImportDecoderManifestResponse
 */
const de_ImportDecoderManifestResponse = (output: any, context: __SerdeContext): ImportDecoderManifestResponse => {
  return {
    arn: __expectString(output.arn),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_0ImportSignalCatalogResponse
 */
const de_ImportSignalCatalogResponse = (output: any, context: __SerdeContext): ImportSignalCatalogResponse => {
  return {
    arn: __expectString(output.arn),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_0InternalServerException
 */
const de_InternalServerException = (output: any, context: __SerdeContext): InternalServerException => {
  return {
    message: __expectString(output.message),
    retryAfterSeconds: __expectInt32(output.retryAfterSeconds),
  } as any;
};

/**
 * deserializeAws_json1_0InvalidNetworkInterface
 */
const de_InvalidNetworkInterface = (output: any, context: __SerdeContext): InvalidNetworkInterface => {
  return {
    interfaceId: __expectString(output.interfaceId),
    reason: __expectString(output.reason),
  } as any;
};

/**
 * deserializeAws_json1_0InvalidNetworkInterfaces
 */
const de_InvalidNetworkInterfaces = (output: any, context: __SerdeContext): InvalidNetworkInterface[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InvalidNetworkInterface(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0InvalidNodeException
 */
const de_InvalidNodeException = (output: any, context: __SerdeContext): InvalidNodeException => {
  return {
    invalidNodes: output.invalidNodes != null ? de_Nodes(output.invalidNodes, context) : undefined,
    message: __expectString(output.message),
    reason: __expectString(output.reason),
  } as any;
};

/**
 * deserializeAws_json1_0InvalidSignal
 */
const de_InvalidSignal = (output: any, context: __SerdeContext): InvalidSignal => {
  return {
    name: __expectString(output.name),
    reason: __expectString(output.reason),
  } as any;
};

/**
 * deserializeAws_json1_0InvalidSignalDecoder
 */
const de_InvalidSignalDecoder = (output: any, context: __SerdeContext): InvalidSignalDecoder => {
  return {
    name: __expectString(output.name),
    reason: __expectString(output.reason),
  } as any;
};

/**
 * deserializeAws_json1_0InvalidSignalDecoders
 */
const de_InvalidSignalDecoders = (output: any, context: __SerdeContext): InvalidSignalDecoder[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InvalidSignalDecoder(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0InvalidSignals
 */
const de_InvalidSignals = (output: any, context: __SerdeContext): InvalidSignal[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InvalidSignal(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0InvalidSignalsException
 */
const de_InvalidSignalsException = (output: any, context: __SerdeContext): InvalidSignalsException => {
  return {
    invalidSignals: output.invalidSignals != null ? de_InvalidSignals(output.invalidSignals, context) : undefined,
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: __expectString(output.message),
    resourceId: __expectString(output.resourceId),
    resourceType: __expectString(output.resourceType),
  } as any;
};

/**
 * deserializeAws_json1_0ListCampaignsResponse
 */
const de_ListCampaignsResponse = (output: any, context: __SerdeContext): ListCampaignsResponse => {
  return {
    campaignSummaries:
      output.campaignSummaries != null ? de_campaignSummaries(output.campaignSummaries, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListDecoderManifestNetworkInterfacesResponse
 */
const de_ListDecoderManifestNetworkInterfacesResponse = (
  output: any,
  context: __SerdeContext
): ListDecoderManifestNetworkInterfacesResponse => {
  return {
    networkInterfaces:
      output.networkInterfaces != null ? de_NetworkInterfaces(output.networkInterfaces, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListDecoderManifestSignalsResponse
 */
const de_ListDecoderManifestSignalsResponse = (
  output: any,
  context: __SerdeContext
): ListDecoderManifestSignalsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    signalDecoders: output.signalDecoders != null ? de_SignalDecoders(output.signalDecoders, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListDecoderManifestsResponse
 */
const de_ListDecoderManifestsResponse = (output: any, context: __SerdeContext): ListDecoderManifestsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    summaries: output.summaries != null ? de_decoderManifestSummaries(output.summaries, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListFleetsForVehicleResponse
 */
const de_ListFleetsForVehicleResponse = (output: any, context: __SerdeContext): ListFleetsForVehicleResponse => {
  return {
    fleets: output.fleets != null ? de_fleets(output.fleets, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListFleetsResponse
 */
const de_ListFleetsResponse = (output: any, context: __SerdeContext): ListFleetsResponse => {
  return {
    fleetSummaries: output.fleetSummaries != null ? de_fleetSummaries(output.fleetSummaries, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListModelManifestNodesResponse
 */
const de_ListModelManifestNodesResponse = (output: any, context: __SerdeContext): ListModelManifestNodesResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    nodes: output.nodes != null ? de_Nodes(output.nodes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListModelManifestsResponse
 */
const de_ListModelManifestsResponse = (output: any, context: __SerdeContext): ListModelManifestsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    summaries: output.summaries != null ? de_modelManifestSummaries(output.summaries, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0listOfStrings
 */
const de_listOfStrings = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_0ListSignalCatalogNodesResponse
 */
const de_ListSignalCatalogNodesResponse = (output: any, context: __SerdeContext): ListSignalCatalogNodesResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    nodes: output.nodes != null ? de_Nodes(output.nodes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListSignalCatalogsResponse
 */
const de_ListSignalCatalogsResponse = (output: any, context: __SerdeContext): ListSignalCatalogsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    summaries: output.summaries != null ? de_signalCatalogSummaries(output.summaries, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListVehiclesInFleetResponse
 */
const de_ListVehiclesInFleetResponse = (output: any, context: __SerdeContext): ListVehiclesInFleetResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    vehicles: output.vehicles != null ? de_vehicles(output.vehicles, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListVehiclesResponse
 */
const de_ListVehiclesResponse = (output: any, context: __SerdeContext): ListVehiclesResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    vehicleSummaries:
      output.vehicleSummaries != null ? de_vehicleSummaries(output.vehicleSummaries, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0modelManifestSummaries
 */
const de_modelManifestSummaries = (output: any, context: __SerdeContext): ModelManifestSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ModelManifestSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ModelManifestSummary
 */
const de_ModelManifestSummary = (output: any, context: __SerdeContext): ModelManifestSummary => {
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

/**
 * deserializeAws_json1_0NetworkInterface
 */
const de_NetworkInterface = (output: any, context: __SerdeContext): NetworkInterface => {
  return {
    canInterface: output.canInterface != null ? de_CanInterface(output.canInterface, context) : undefined,
    interfaceId: __expectString(output.interfaceId),
    obdInterface: output.obdInterface != null ? de_ObdInterface(output.obdInterface, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_0NetworkInterfaces
 */
const de_NetworkInterfaces = (output: any, context: __SerdeContext): NetworkInterface[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NetworkInterface(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0Node
 */
const de_Node = (output: any, context: __SerdeContext): Node => {
  if (output.actuator != null) {
    return {
      actuator: de_Actuator(output.actuator, context),
    };
  }
  if (output.attribute != null) {
    return {
      attribute: de_Attribute(output.attribute, context),
    };
  }
  if (output.branch != null) {
    return {
      branch: de_Branch(output.branch, context),
    };
  }
  if (output.sensor != null) {
    return {
      sensor: de_Sensor(output.sensor, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_json1_0NodeCounts
 */
const de_NodeCounts = (output: any, context: __SerdeContext): NodeCounts => {
  return {
    totalActuators: __expectInt32(output.totalActuators),
    totalAttributes: __expectInt32(output.totalAttributes),
    totalBranches: __expectInt32(output.totalBranches),
    totalNodes: __expectInt32(output.totalNodes),
    totalSensors: __expectInt32(output.totalSensors),
  } as any;
};

/**
 * deserializeAws_json1_0Nodes
 */
const de_Nodes = (output: any, context: __SerdeContext): Node[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Node(__expectUnion(entry), context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ObdInterface
 */
const de_ObdInterface = (output: any, context: __SerdeContext): ObdInterface => {
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

/**
 * deserializeAws_json1_0ObdSignal
 */
const de_ObdSignal = (output: any, context: __SerdeContext): ObdSignal => {
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

/**
 * deserializeAws_json1_0PutLoggingOptionsResponse
 */
const de_PutLoggingOptionsResponse = (output: any, context: __SerdeContext): PutLoggingOptionsResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_0RegisterAccountResponse
 */
const de_RegisterAccountResponse = (output: any, context: __SerdeContext): RegisterAccountResponse => {
  return {
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    iamResources: output.iamResources != null ? de_IamResources(output.iamResources, context) : undefined,
    lastModificationTime:
      output.lastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModificationTime)))
        : undefined,
    registerAccountStatus: __expectString(output.registerAccountStatus),
    timestreamResources:
      output.timestreamResources != null ? de_TimestreamResources(output.timestreamResources, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
    resourceId: __expectString(output.resourceId),
    resourceType: __expectString(output.resourceType),
  } as any;
};

/**
 * deserializeAws_json1_0Sensor
 */
const de_Sensor = (output: any, context: __SerdeContext): Sensor => {
  return {
    allowedValues: output.allowedValues != null ? de_listOfStrings(output.allowedValues, context) : undefined,
    dataType: __expectString(output.dataType),
    description: __expectString(output.description),
    fullyQualifiedName: __expectString(output.fullyQualifiedName),
    max: __limitedParseDouble(output.max),
    min: __limitedParseDouble(output.min),
    unit: __expectString(output.unit),
  } as any;
};

/**
 * deserializeAws_json1_0signalCatalogSummaries
 */
const de_signalCatalogSummaries = (output: any, context: __SerdeContext): SignalCatalogSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SignalCatalogSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0SignalCatalogSummary
 */
const de_SignalCatalogSummary = (output: any, context: __SerdeContext): SignalCatalogSummary => {
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

/**
 * deserializeAws_json1_0SignalDecoder
 */
const de_SignalDecoder = (output: any, context: __SerdeContext): SignalDecoder => {
  return {
    canSignal: output.canSignal != null ? de_CanSignal(output.canSignal, context) : undefined,
    fullyQualifiedName: __expectString(output.fullyQualifiedName),
    interfaceId: __expectString(output.interfaceId),
    obdSignal: output.obdSignal != null ? de_ObdSignal(output.obdSignal, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_0SignalDecoders
 */
const de_SignalDecoders = (output: any, context: __SerdeContext): SignalDecoder[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SignalDecoder(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0SignalInformation
 */
const de_SignalInformation = (output: any, context: __SerdeContext): SignalInformation => {
  return {
    maxSampleCount: __expectLong(output.maxSampleCount),
    minimumSamplingIntervalMs: __expectLong(output.minimumSamplingIntervalMs),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_0SignalInformationList
 */
const de_SignalInformationList = (output: any, context: __SerdeContext): SignalInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SignalInformation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_0TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_0ThrottlingException
 */
const de_ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    message: __expectString(output.message),
    quotaCode: __expectString(output.quotaCode),
    retryAfterSeconds: __expectInt32(output.retryAfterSeconds),
    serviceCode: __expectString(output.serviceCode),
  } as any;
};

/**
 * deserializeAws_json1_0TimeBasedCollectionScheme
 */
const de_TimeBasedCollectionScheme = (output: any, context: __SerdeContext): TimeBasedCollectionScheme => {
  return {
    periodMs: __expectLong(output.periodMs),
  } as any;
};

/**
 * deserializeAws_json1_0TimestreamRegistrationResponse
 */
const de_TimestreamRegistrationResponse = (output: any, context: __SerdeContext): TimestreamRegistrationResponse => {
  return {
    errorMessage: __expectString(output.errorMessage),
    registrationStatus: __expectString(output.registrationStatus),
    timestreamDatabaseArn: __expectString(output.timestreamDatabaseArn),
    timestreamDatabaseName: __expectString(output.timestreamDatabaseName),
    timestreamTableArn: __expectString(output.timestreamTableArn),
    timestreamTableName: __expectString(output.timestreamTableName),
  } as any;
};

/**
 * deserializeAws_json1_0TimestreamResources
 */
const de_TimestreamResources = (output: any, context: __SerdeContext): TimestreamResources => {
  return {
    timestreamDatabaseName: __expectString(output.timestreamDatabaseName),
    timestreamTableName: __expectString(output.timestreamTableName),
  } as any;
};

/**
 * deserializeAws_json1_0UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_0UpdateCampaignResponse
 */
const de_UpdateCampaignResponse = (output: any, context: __SerdeContext): UpdateCampaignResponse => {
  return {
    arn: __expectString(output.arn),
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_0UpdateDecoderManifestResponse
 */
const de_UpdateDecoderManifestResponse = (output: any, context: __SerdeContext): UpdateDecoderManifestResponse => {
  return {
    arn: __expectString(output.arn),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_0UpdateFleetResponse
 */
const de_UpdateFleetResponse = (output: any, context: __SerdeContext): UpdateFleetResponse => {
  return {
    arn: __expectString(output.arn),
    id: __expectString(output.id),
  } as any;
};

/**
 * deserializeAws_json1_0UpdateModelManifestResponse
 */
const de_UpdateModelManifestResponse = (output: any, context: __SerdeContext): UpdateModelManifestResponse => {
  return {
    arn: __expectString(output.arn),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_0UpdateSignalCatalogResponse
 */
const de_UpdateSignalCatalogResponse = (output: any, context: __SerdeContext): UpdateSignalCatalogResponse => {
  return {
    arn: __expectString(output.arn),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_0UpdateVehicleError
 */
const de_UpdateVehicleError = (output: any, context: __SerdeContext): UpdateVehicleError => {
  return {
    code: __expectInt32(output.code),
    message: __expectString(output.message),
    vehicleName: __expectString(output.vehicleName),
  } as any;
};

/**
 * deserializeAws_json1_0updateVehicleErrors
 */
const de_updateVehicleErrors = (output: any, context: __SerdeContext): UpdateVehicleError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UpdateVehicleError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0UpdateVehicleResponse
 */
const de_UpdateVehicleResponse = (output: any, context: __SerdeContext): UpdateVehicleResponse => {
  return {
    arn: __expectString(output.arn),
    vehicleName: __expectString(output.vehicleName),
  } as any;
};

/**
 * deserializeAws_json1_0UpdateVehicleResponseItem
 */
const de_UpdateVehicleResponseItem = (output: any, context: __SerdeContext): UpdateVehicleResponseItem => {
  return {
    arn: __expectString(output.arn),
    vehicleName: __expectString(output.vehicleName),
  } as any;
};

/**
 * deserializeAws_json1_0updateVehicleResponseItems
 */
const de_updateVehicleResponseItems = (output: any, context: __SerdeContext): UpdateVehicleResponseItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UpdateVehicleResponseItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ValidationException
 */
const de_ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    fieldList: output.fieldList != null ? de_ValidationExceptionFieldList(output.fieldList, context) : undefined,
    message: __expectString(output.message),
    reason: __expectString(output.reason),
  } as any;
};

/**
 * deserializeAws_json1_0ValidationExceptionField
 */
const de_ValidationExceptionField = (output: any, context: __SerdeContext): ValidationExceptionField => {
  return {
    message: __expectString(output.message),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_0ValidationExceptionFieldList
 */
const de_ValidationExceptionFieldList = (output: any, context: __SerdeContext): ValidationExceptionField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ValidationExceptionField(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0vehicles
 */
const de_vehicles = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_0VehicleStatus
 */
const de_VehicleStatus = (output: any, context: __SerdeContext): VehicleStatus => {
  return {
    campaignName: __expectString(output.campaignName),
    status: __expectString(output.status),
    vehicleName: __expectString(output.vehicleName),
  } as any;
};

/**
 * deserializeAws_json1_0VehicleStatusList
 */
const de_VehicleStatusList = (output: any, context: __SerdeContext): VehicleStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VehicleStatus(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0vehicleSummaries
 */
const de_vehicleSummaries = (output: any, context: __SerdeContext): VehicleSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VehicleSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0VehicleSummary
 */
const de_VehicleSummary = (output: any, context: __SerdeContext): VehicleSummary => {
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
