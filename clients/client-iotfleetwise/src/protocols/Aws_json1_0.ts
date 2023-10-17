// smithy-typescript generated code
import { awsExpectUnion as __expectUnion } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
import {
  GetEncryptionConfigurationCommandInput,
  GetEncryptionConfigurationCommandOutput,
} from "../commands/GetEncryptionConfigurationCommand";
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
import {
  PutEncryptionConfigurationCommandInput,
  PutEncryptionConfigurationCommandOutput,
} from "../commands/PutEncryptionConfigurationCommand";
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
  Attribute,
  BatchCreateVehicleRequest,
  BatchUpdateVehicleRequest,
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
  CreateDecoderManifestRequest,
  CreateFleetRequest,
  CreateModelManifestRequest,
  CreateSignalCatalogRequest,
  CreateVehicleRequest,
  CreateVehicleRequestItem,
  DataDestinationConfig,
  DecoderManifestSummary,
  DecoderManifestValidationException,
  DeleteCampaignRequest,
  DeleteDecoderManifestRequest,
  DeleteFleetRequest,
  DeleteModelManifestRequest,
  DeleteSignalCatalogRequest,
  DeleteVehicleRequest,
  DisassociateVehicleFleetRequest,
  FleetSummary,
  FormattedVss,
  GetCampaignRequest,
  GetCampaignResponse,
  GetDecoderManifestRequest,
  GetDecoderManifestResponse,
  GetEncryptionConfigurationRequest,
  GetEncryptionConfigurationResponse,
  GetFleetRequest,
  GetFleetResponse,
  GetLoggingOptionsRequest,
  GetModelManifestRequest,
  GetModelManifestResponse,
  GetRegisterAccountStatusRequest,
  GetRegisterAccountStatusResponse,
  GetSignalCatalogRequest,
  GetSignalCatalogResponse,
  GetVehicleRequest,
  GetVehicleResponse,
  GetVehicleStatusRequest,
  IamResources,
  ImportDecoderManifestRequest,
  ImportSignalCatalogRequest,
  InternalServerException,
  InvalidNodeException,
  InvalidSignalsException,
  LimitExceededException,
  ListCampaignsRequest,
  ListCampaignsResponse,
  ListDecoderManifestNetworkInterfacesRequest,
  ListDecoderManifestSignalsRequest,
  ListDecoderManifestSignalsResponse,
  ListDecoderManifestsRequest,
  ListDecoderManifestsResponse,
  ListFleetsForVehicleRequest,
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
  ListVehiclesInFleetRequest,
  ListVehiclesRequest,
  ListVehiclesResponse,
  ModelManifestSummary,
  NetworkFileDefinition,
  NetworkInterface,
  Node,
  ObdInterface,
  ObdSignal,
  PutEncryptionConfigurationRequest,
  PutLoggingOptionsRequest,
  RegisterAccountRequest,
  RegisterAccountResponse,
  ResourceNotFoundException,
  S3Config,
  Sensor,
  SignalCatalogSummary,
  SignalDecoder,
  SignalInformation,
  Tag,
  TagResourceRequest,
  ThrottlingException,
  TimeBasedCollectionScheme,
  TimestreamConfig,
  TimestreamResources,
  UntagResourceRequest,
  UpdateCampaignRequest,
  UpdateDecoderManifestRequest,
  UpdateFleetRequest,
  UpdateModelManifestRequest,
  UpdateSignalCatalogRequest,
  UpdateVehicleRequest,
  UpdateVehicleRequestItem,
  ValidationException,
  VehicleSummary,
} from "../models/models_0";

/**
 * serializeAws_json1_0AssociateVehicleFleetCommand
 */
export const se_AssociateVehicleFleetCommand = async (
  input: AssociateVehicleFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateVehicleFleet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0BatchCreateVehicleCommand
 */
export const se_BatchCreateVehicleCommand = async (
  input: BatchCreateVehicleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchCreateVehicle");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0BatchUpdateVehicleCommand
 */
export const se_BatchUpdateVehicleCommand = async (
  input: BatchUpdateVehicleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchUpdateVehicle");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateCampaignCommand
 */
export const se_CreateCampaignCommand = async (
  input: CreateCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateCampaign");
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
  const headers: __HeaderBag = sharedHeaders("CreateDecoderManifest");
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
  const headers: __HeaderBag = sharedHeaders("CreateFleet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateModelManifestCommand
 */
export const se_CreateModelManifestCommand = async (
  input: CreateModelManifestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateModelManifest");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateSignalCatalogCommand
 */
export const se_CreateSignalCatalogCommand = async (
  input: CreateSignalCatalogCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateSignalCatalog");
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
  const headers: __HeaderBag = sharedHeaders("CreateVehicle");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteCampaignCommand
 */
export const se_DeleteCampaignCommand = async (
  input: DeleteCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteCampaign");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteDecoderManifestCommand
 */
export const se_DeleteDecoderManifestCommand = async (
  input: DeleteDecoderManifestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDecoderManifest");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteFleetCommand
 */
export const se_DeleteFleetCommand = async (
  input: DeleteFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteFleet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteModelManifestCommand
 */
export const se_DeleteModelManifestCommand = async (
  input: DeleteModelManifestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteModelManifest");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteSignalCatalogCommand
 */
export const se_DeleteSignalCatalogCommand = async (
  input: DeleteSignalCatalogCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteSignalCatalog");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteVehicleCommand
 */
export const se_DeleteVehicleCommand = async (
  input: DeleteVehicleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteVehicle");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DisassociateVehicleFleetCommand
 */
export const se_DisassociateVehicleFleetCommand = async (
  input: DisassociateVehicleFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateVehicleFleet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetCampaignCommand
 */
export const se_GetCampaignCommand = async (
  input: GetCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCampaign");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetDecoderManifestCommand
 */
export const se_GetDecoderManifestCommand = async (
  input: GetDecoderManifestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDecoderManifest");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetEncryptionConfigurationCommand
 */
export const se_GetEncryptionConfigurationCommand = async (
  input: GetEncryptionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetEncryptionConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetFleetCommand
 */
export const se_GetFleetCommand = async (
  input: GetFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetFleet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetLoggingOptionsCommand
 */
export const se_GetLoggingOptionsCommand = async (
  input: GetLoggingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetLoggingOptions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetModelManifestCommand
 */
export const se_GetModelManifestCommand = async (
  input: GetModelManifestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetModelManifest");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetRegisterAccountStatusCommand
 */
export const se_GetRegisterAccountStatusCommand = async (
  input: GetRegisterAccountStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRegisterAccountStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetSignalCatalogCommand
 */
export const se_GetSignalCatalogCommand = async (
  input: GetSignalCatalogCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetSignalCatalog");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetVehicleCommand
 */
export const se_GetVehicleCommand = async (
  input: GetVehicleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetVehicle");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetVehicleStatusCommand
 */
export const se_GetVehicleStatusCommand = async (
  input: GetVehicleStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetVehicleStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ImportDecoderManifestCommand
 */
export const se_ImportDecoderManifestCommand = async (
  input: ImportDecoderManifestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ImportDecoderManifest");
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
  const headers: __HeaderBag = sharedHeaders("ImportSignalCatalog");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListCampaignsCommand
 */
export const se_ListCampaignsCommand = async (
  input: ListCampaignsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCampaigns");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListDecoderManifestNetworkInterfacesCommand
 */
export const se_ListDecoderManifestNetworkInterfacesCommand = async (
  input: ListDecoderManifestNetworkInterfacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDecoderManifestNetworkInterfaces");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListDecoderManifestsCommand
 */
export const se_ListDecoderManifestsCommand = async (
  input: ListDecoderManifestsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDecoderManifests");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListDecoderManifestSignalsCommand
 */
export const se_ListDecoderManifestSignalsCommand = async (
  input: ListDecoderManifestSignalsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDecoderManifestSignals");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListFleetsCommand
 */
export const se_ListFleetsCommand = async (
  input: ListFleetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListFleets");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListFleetsForVehicleCommand
 */
export const se_ListFleetsForVehicleCommand = async (
  input: ListFleetsForVehicleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListFleetsForVehicle");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListModelManifestNodesCommand
 */
export const se_ListModelManifestNodesCommand = async (
  input: ListModelManifestNodesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListModelManifestNodes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListModelManifestsCommand
 */
export const se_ListModelManifestsCommand = async (
  input: ListModelManifestsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListModelManifests");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListSignalCatalogNodesCommand
 */
export const se_ListSignalCatalogNodesCommand = async (
  input: ListSignalCatalogNodesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSignalCatalogNodes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListSignalCatalogsCommand
 */
export const se_ListSignalCatalogsCommand = async (
  input: ListSignalCatalogsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSignalCatalogs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListVehiclesCommand
 */
export const se_ListVehiclesCommand = async (
  input: ListVehiclesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListVehicles");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListVehiclesInFleetCommand
 */
export const se_ListVehiclesInFleetCommand = async (
  input: ListVehiclesInFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListVehiclesInFleet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0PutEncryptionConfigurationCommand
 */
export const se_PutEncryptionConfigurationCommand = async (
  input: PutEncryptionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutEncryptionConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0PutLoggingOptionsCommand
 */
export const se_PutLoggingOptionsCommand = async (
  input: PutLoggingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutLoggingOptions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0RegisterAccountCommand
 */
export const se_RegisterAccountCommand = async (
  input: RegisterAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterAccount");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateCampaignCommand
 */
export const se_UpdateCampaignCommand = async (
  input: UpdateCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateCampaign");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateDecoderManifestCommand
 */
export const se_UpdateDecoderManifestCommand = async (
  input: UpdateDecoderManifestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDecoderManifest");
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
  const headers: __HeaderBag = sharedHeaders("UpdateFleet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateModelManifestCommand
 */
export const se_UpdateModelManifestCommand = async (
  input: UpdateModelManifestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateModelManifest");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateSignalCatalogCommand
 */
export const se_UpdateSignalCatalogCommand = async (
  input: UpdateSignalCatalogCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateSignalCatalog");
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
  const headers: __HeaderBag = sharedHeaders("UpdateVehicle");
  let body: any;
  body = JSON.stringify(_json(input));
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
  contents = _json(data);
  const response: AssociateVehicleFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: BatchCreateVehicleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: BatchUpdateVehicleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateCampaignCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateDecoderManifestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateModelManifestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateSignalCatalogCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateVehicleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteCampaignCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteDecoderManifestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteModelManifestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteSignalCatalogCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteVehicleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DisassociateVehicleFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_0GetEncryptionConfigurationCommand
 */
export const de_GetEncryptionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEncryptionConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetEncryptionConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetEncryptionConfigurationResponse(data, context);
  const response: GetEncryptionConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetEncryptionConfigurationCommandError
 */
const de_GetEncryptionConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEncryptionConfigurationCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetLoggingOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetVehicleStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ImportDecoderManifestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ImportSignalCatalogCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListDecoderManifestNetworkInterfacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListFleetsForVehicleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListVehiclesInFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_0PutEncryptionConfigurationCommand
 */
export const de_PutEncryptionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEncryptionConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutEncryptionConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutEncryptionConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0PutEncryptionConfigurationCommandError
 */
const de_PutEncryptionConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEncryptionConfigurationCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutLoggingOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateCampaignCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateDecoderManifestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateModelManifestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateSignalCatalogCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateVehicleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  return take(input, {
    allowedValues: _json,
    assignedValue: [],
    comment: [],
    dataType: [],
    deprecationMessage: [],
    description: [],
    fullyQualifiedName: [],
    max: __serializeFloat,
    min: __serializeFloat,
    unit: [],
  });
};

// se_AssociateVehicleFleetRequest omitted.

/**
 * serializeAws_json1_0Attribute
 */
const se_Attribute = (input: Attribute, context: __SerdeContext): any => {
  return take(input, {
    allowedValues: _json,
    assignedValue: [],
    comment: [],
    dataType: [],
    defaultValue: [],
    deprecationMessage: [],
    description: [],
    fullyQualifiedName: [],
    max: __serializeFloat,
    min: __serializeFloat,
    unit: [],
  });
};

// se_attributesMap omitted.

// se_BatchCreateVehicleRequest omitted.

// se_BatchUpdateVehicleRequest omitted.

// se_Branch omitted.

/**
 * serializeAws_json1_0CanDbcDefinition
 */
const se_CanDbcDefinition = (input: CanDbcDefinition, context: __SerdeContext): any => {
  return take(input, {
    canDbcFiles: (_) => se_NetworkFilesList(_, context),
    networkInterface: [],
    signalsMap: _json,
  });
};

// se_CanInterface omitted.

/**
 * serializeAws_json1_0CanSignal
 */
const se_CanSignal = (input: CanSignal, context: __SerdeContext): any => {
  return take(input, {
    factor: __serializeFloat,
    isBigEndian: [],
    isSigned: [],
    length: [],
    messageId: [],
    name: [],
    offset: __serializeFloat,
    startBit: [],
  });
};

// se_CloudWatchLogDeliveryOptions omitted.

// se_CollectionScheme omitted.

// se_ConditionBasedCollectionScheme omitted.

/**
 * serializeAws_json1_0CreateCampaignRequest
 */
const se_CreateCampaignRequest = (input: CreateCampaignRequest, context: __SerdeContext): any => {
  return take(input, {
    collectionScheme: _json,
    compression: [],
    dataDestinationConfigs: _json,
    dataExtraDimensions: _json,
    description: [],
    diagnosticsMode: [],
    expiryTime: (_) => Math.round(_.getTime() / 1000),
    name: [],
    postTriggerCollectionDuration: [],
    priority: [],
    signalCatalogArn: [],
    signalsToCollect: _json,
    spoolingMode: [],
    startTime: (_) => Math.round(_.getTime() / 1000),
    tags: _json,
    targetArn: [],
  });
};

/**
 * serializeAws_json1_0CreateDecoderManifestRequest
 */
const se_CreateDecoderManifestRequest = (input: CreateDecoderManifestRequest, context: __SerdeContext): any => {
  return take(input, {
    description: [],
    modelManifestArn: [],
    name: [],
    networkInterfaces: _json,
    signalDecoders: (_) => se_SignalDecoders(_, context),
    tags: _json,
  });
};

// se_CreateFleetRequest omitted.

// se_CreateModelManifestRequest omitted.

/**
 * serializeAws_json1_0CreateSignalCatalogRequest
 */
const se_CreateSignalCatalogRequest = (input: CreateSignalCatalogRequest, context: __SerdeContext): any => {
  return take(input, {
    description: [],
    name: [],
    nodes: (_) => se_Nodes(_, context),
    tags: _json,
  });
};

// se_CreateVehicleRequest omitted.

// se_CreateVehicleRequestItem omitted.

// se_createVehicleRequestItems omitted.

// se_DataDestinationConfig omitted.

// se_DataDestinationConfigs omitted.

// se_DataExtraDimensionNodePathList omitted.

// se_DeleteCampaignRequest omitted.

// se_DeleteDecoderManifestRequest omitted.

// se_DeleteFleetRequest omitted.

// se_DeleteModelManifestRequest omitted.

// se_DeleteSignalCatalogRequest omitted.

// se_DeleteVehicleRequest omitted.

// se_DisassociateVehicleFleetRequest omitted.

// se_FormattedVss omitted.

// se_Fqns omitted.

// se_GetCampaignRequest omitted.

// se_GetDecoderManifestRequest omitted.

// se_GetEncryptionConfigurationRequest omitted.

// se_GetFleetRequest omitted.

// se_GetLoggingOptionsRequest omitted.

// se_GetModelManifestRequest omitted.

// se_GetRegisterAccountStatusRequest omitted.

// se_GetSignalCatalogRequest omitted.

// se_GetVehicleRequest omitted.

// se_GetVehicleStatusRequest omitted.

// se_IamResources omitted.

/**
 * serializeAws_json1_0ImportDecoderManifestRequest
 */
const se_ImportDecoderManifestRequest = (input: ImportDecoderManifestRequest, context: __SerdeContext): any => {
  return take(input, {
    name: [],
    networkFileDefinitions: (_) => se_NetworkFileDefinitions(_, context),
  });
};

// se_ImportSignalCatalogRequest omitted.

// se_InterfaceIds omitted.

// se_ListCampaignsRequest omitted.

// se_ListDecoderManifestNetworkInterfacesRequest omitted.

// se_ListDecoderManifestSignalsRequest omitted.

// se_ListDecoderManifestsRequest omitted.

// se_ListFleetsForVehicleRequest omitted.

// se_ListFleetsRequest omitted.

// se_ListModelManifestNodesRequest omitted.

// se_ListModelManifestsRequest omitted.

// se_listOfStrings omitted.

// se_ListSignalCatalogNodesRequest omitted.

// se_ListSignalCatalogsRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_ListVehiclesInFleetRequest omitted.

// se_ListVehiclesRequest omitted.

// se_ModelSignalsMap omitted.

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

// se_NetworkInterface omitted.

// se_NetworkInterfaces omitted.

/**
 * serializeAws_json1_0Node
 */
const se_Node = (input: Node, context: __SerdeContext): any => {
  return Node.visit(input, {
    actuator: (value) => ({ actuator: se_Actuator(value, context) }),
    attribute: (value) => ({ attribute: se_Attribute(value, context) }),
    branch: (value) => ({ branch: _json(value) }),
    sensor: (value) => ({ sensor: se_Sensor(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

// se_NodePaths omitted.

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

// se_ObdInterface omitted.

/**
 * serializeAws_json1_0ObdSignal
 */
const se_ObdSignal = (input: ObdSignal, context: __SerdeContext): any => {
  return take(input, {
    bitMaskLength: [],
    bitRightShift: [],
    byteLength: [],
    offset: __serializeFloat,
    pid: [],
    pidResponseLength: [],
    scaling: __serializeFloat,
    serviceMode: [],
    startByte: [],
  });
};

// se_PutEncryptionConfigurationRequest omitted.

// se_PutLoggingOptionsRequest omitted.

// se_RegisterAccountRequest omitted.

// se_S3Config omitted.

/**
 * serializeAws_json1_0Sensor
 */
const se_Sensor = (input: Sensor, context: __SerdeContext): any => {
  return take(input, {
    allowedValues: _json,
    comment: [],
    dataType: [],
    deprecationMessage: [],
    description: [],
    fullyQualifiedName: [],
    max: __serializeFloat,
    min: __serializeFloat,
    unit: [],
  });
};

/**
 * serializeAws_json1_0SignalDecoder
 */
const se_SignalDecoder = (input: SignalDecoder, context: __SerdeContext): any => {
  return take(input, {
    canSignal: (_) => se_CanSignal(_, context),
    fullyQualifiedName: [],
    interfaceId: [],
    obdSignal: (_) => se_ObdSignal(_, context),
    type: [],
  });
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

// se_SignalInformation omitted.

// se_SignalInformationList omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

// se_TimeBasedCollectionScheme omitted.

// se_TimestreamConfig omitted.

// se_TimestreamResources omitted.

// se_UntagResourceRequest omitted.

// se_UpdateCampaignRequest omitted.

/**
 * serializeAws_json1_0UpdateDecoderManifestRequest
 */
const se_UpdateDecoderManifestRequest = (input: UpdateDecoderManifestRequest, context: __SerdeContext): any => {
  return take(input, {
    description: [],
    name: [],
    networkInterfacesToAdd: _json,
    networkInterfacesToRemove: _json,
    networkInterfacesToUpdate: _json,
    signalDecodersToAdd: (_) => se_SignalDecoders(_, context),
    signalDecodersToRemove: _json,
    signalDecodersToUpdate: (_) => se_SignalDecoders(_, context),
    status: [],
  });
};

// se_UpdateFleetRequest omitted.

// se_UpdateModelManifestRequest omitted.

/**
 * serializeAws_json1_0UpdateSignalCatalogRequest
 */
const se_UpdateSignalCatalogRequest = (input: UpdateSignalCatalogRequest, context: __SerdeContext): any => {
  return take(input, {
    description: [],
    name: [],
    nodesToAdd: (_) => se_Nodes(_, context),
    nodesToRemove: _json,
    nodesToUpdate: (_) => se_Nodes(_, context),
  });
};

// se_UpdateVehicleRequest omitted.

// se_UpdateVehicleRequestItem omitted.

// se_updateVehicleRequestItems omitted.

// de_AccessDeniedException omitted.

/**
 * deserializeAws_json1_0Actuator
 */
const de_Actuator = (output: any, context: __SerdeContext): Actuator => {
  return take(output, {
    allowedValues: _json,
    assignedValue: __expectString,
    comment: __expectString,
    dataType: __expectString,
    deprecationMessage: __expectString,
    description: __expectString,
    fullyQualifiedName: __expectString,
    max: __limitedParseDouble,
    min: __limitedParseDouble,
    unit: __expectString,
  }) as any;
};

// de_AssociateVehicleFleetResponse omitted.

/**
 * deserializeAws_json1_0Attribute
 */
const de_Attribute = (output: any, context: __SerdeContext): Attribute => {
  return take(output, {
    allowedValues: _json,
    assignedValue: __expectString,
    comment: __expectString,
    dataType: __expectString,
    defaultValue: __expectString,
    deprecationMessage: __expectString,
    description: __expectString,
    fullyQualifiedName: __expectString,
    max: __limitedParseDouble,
    min: __limitedParseDouble,
    unit: __expectString,
  }) as any;
};

// de_attributesMap omitted.

// de_BatchCreateVehicleResponse omitted.

// de_BatchUpdateVehicleResponse omitted.

// de_Branch omitted.

/**
 * deserializeAws_json1_0campaignSummaries
 */
const de_campaignSummaries = (output: any, context: __SerdeContext): CampaignSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CampaignSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0CampaignSummary
 */
const de_CampaignSummary = (output: any, context: __SerdeContext): CampaignSummary => {
  return take(output, {
    arn: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    lastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    signalCatalogArn: __expectString,
    status: __expectString,
    targetArn: __expectString,
  }) as any;
};

// de_CanInterface omitted.

/**
 * deserializeAws_json1_0CanSignal
 */
const de_CanSignal = (output: any, context: __SerdeContext): CanSignal => {
  return take(output, {
    factor: __limitedParseDouble,
    isBigEndian: __expectBoolean,
    isSigned: __expectBoolean,
    length: __expectInt32,
    messageId: __expectInt32,
    name: __expectString,
    offset: __limitedParseDouble,
    startBit: __expectInt32,
  }) as any;
};

// de_CloudWatchLogDeliveryOptions omitted.

// de_CollectionScheme omitted.

// de_ConditionBasedCollectionScheme omitted.

// de_ConflictException omitted.

// de_CreateCampaignResponse omitted.

// de_CreateDecoderManifestResponse omitted.

// de_CreateFleetResponse omitted.

// de_CreateModelManifestResponse omitted.

// de_CreateSignalCatalogResponse omitted.

// de_CreateVehicleError omitted.

// de_createVehicleErrors omitted.

// de_CreateVehicleResponse omitted.

// de_CreateVehicleResponseItem omitted.

// de_createVehicleResponses omitted.

// de_DataDestinationConfig omitted.

// de_DataDestinationConfigs omitted.

// de_DataExtraDimensionNodePathList omitted.

/**
 * deserializeAws_json1_0decoderManifestSummaries
 */
const de_decoderManifestSummaries = (output: any, context: __SerdeContext): DecoderManifestSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DecoderManifestSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0DecoderManifestSummary
 */
const de_DecoderManifestSummary = (output: any, context: __SerdeContext): DecoderManifestSummary => {
  return take(output, {
    arn: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    lastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    modelManifestArn: __expectString,
    name: __expectString,
    status: __expectString,
  }) as any;
};

// de_DecoderManifestValidationException omitted.

// de_DeleteCampaignResponse omitted.

// de_DeleteDecoderManifestResponse omitted.

// de_DeleteFleetResponse omitted.

// de_DeleteModelManifestResponse omitted.

// de_DeleteSignalCatalogResponse omitted.

// de_DeleteVehicleResponse omitted.

// de_DisassociateVehicleFleetResponse omitted.

// de_fleets omitted.

/**
 * deserializeAws_json1_0fleetSummaries
 */
const de_fleetSummaries = (output: any, context: __SerdeContext): FleetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FleetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0FleetSummary
 */
const de_FleetSummary = (output: any, context: __SerdeContext): FleetSummary => {
  return take(output, {
    arn: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    id: __expectString,
    lastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    signalCatalogArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0GetCampaignResponse
 */
const de_GetCampaignResponse = (output: any, context: __SerdeContext): GetCampaignResponse => {
  return take(output, {
    arn: __expectString,
    collectionScheme: (_: any) => _json(__expectUnion(_)),
    compression: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    dataDestinationConfigs: _json,
    dataExtraDimensions: _json,
    description: __expectString,
    diagnosticsMode: __expectString,
    expiryTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    postTriggerCollectionDuration: __expectLong,
    priority: __expectInt32,
    signalCatalogArn: __expectString,
    signalsToCollect: _json,
    spoolingMode: __expectString,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    targetArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0GetDecoderManifestResponse
 */
const de_GetDecoderManifestResponse = (output: any, context: __SerdeContext): GetDecoderManifestResponse => {
  return take(output, {
    arn: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    lastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    modelManifestArn: __expectString,
    name: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0GetEncryptionConfigurationResponse
 */
const de_GetEncryptionConfigurationResponse = (
  output: any,
  context: __SerdeContext
): GetEncryptionConfigurationResponse => {
  return take(output, {
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    encryptionStatus: __expectString,
    encryptionType: __expectString,
    errorMessage: __expectString,
    kmsKeyId: __expectString,
    lastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_0GetFleetResponse
 */
const de_GetFleetResponse = (output: any, context: __SerdeContext): GetFleetResponse => {
  return take(output, {
    arn: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    id: __expectString,
    lastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    signalCatalogArn: __expectString,
  }) as any;
};

// de_GetLoggingOptionsResponse omitted.

/**
 * deserializeAws_json1_0GetModelManifestResponse
 */
const de_GetModelManifestResponse = (output: any, context: __SerdeContext): GetModelManifestResponse => {
  return take(output, {
    arn: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    lastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    signalCatalogArn: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0GetRegisterAccountStatusResponse
 */
const de_GetRegisterAccountStatusResponse = (
  output: any,
  context: __SerdeContext
): GetRegisterAccountStatusResponse => {
  return take(output, {
    accountStatus: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    customerAccountId: __expectString,
    iamRegistrationResponse: _json,
    lastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    timestreamRegistrationResponse: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0GetSignalCatalogResponse
 */
const de_GetSignalCatalogResponse = (output: any, context: __SerdeContext): GetSignalCatalogResponse => {
  return take(output, {
    arn: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    lastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    nodeCounts: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0GetVehicleResponse
 */
const de_GetVehicleResponse = (output: any, context: __SerdeContext): GetVehicleResponse => {
  return take(output, {
    arn: __expectString,
    attributes: _json,
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    decoderManifestArn: __expectString,
    lastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    modelManifestArn: __expectString,
    vehicleName: __expectString,
  }) as any;
};

// de_GetVehicleStatusResponse omitted.

// de_IamRegistrationResponse omitted.

// de_IamResources omitted.

// de_ImportDecoderManifestResponse omitted.

// de_ImportSignalCatalogResponse omitted.

// de_InternalServerException omitted.

// de_InvalidNetworkInterface omitted.

// de_InvalidNetworkInterfaces omitted.

/**
 * deserializeAws_json1_0InvalidNodeException
 */
const de_InvalidNodeException = (output: any, context: __SerdeContext): InvalidNodeException => {
  return take(output, {
    invalidNodes: (_: any) => de_Nodes(_, context),
    message: __expectString,
    reason: __expectString,
  }) as any;
};

// de_InvalidSignal omitted.

// de_InvalidSignalDecoder omitted.

// de_InvalidSignalDecoders omitted.

// de_InvalidSignals omitted.

// de_InvalidSignalsException omitted.

// de_LimitExceededException omitted.

/**
 * deserializeAws_json1_0ListCampaignsResponse
 */
const de_ListCampaignsResponse = (output: any, context: __SerdeContext): ListCampaignsResponse => {
  return take(output, {
    campaignSummaries: (_: any) => de_campaignSummaries(_, context),
    nextToken: __expectString,
  }) as any;
};

// de_ListDecoderManifestNetworkInterfacesResponse omitted.

/**
 * deserializeAws_json1_0ListDecoderManifestSignalsResponse
 */
const de_ListDecoderManifestSignalsResponse = (
  output: any,
  context: __SerdeContext
): ListDecoderManifestSignalsResponse => {
  return take(output, {
    nextToken: __expectString,
    signalDecoders: (_: any) => de_SignalDecoders(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0ListDecoderManifestsResponse
 */
const de_ListDecoderManifestsResponse = (output: any, context: __SerdeContext): ListDecoderManifestsResponse => {
  return take(output, {
    nextToken: __expectString,
    summaries: (_: any) => de_decoderManifestSummaries(_, context),
  }) as any;
};

// de_ListFleetsForVehicleResponse omitted.

/**
 * deserializeAws_json1_0ListFleetsResponse
 */
const de_ListFleetsResponse = (output: any, context: __SerdeContext): ListFleetsResponse => {
  return take(output, {
    fleetSummaries: (_: any) => de_fleetSummaries(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListModelManifestNodesResponse
 */
const de_ListModelManifestNodesResponse = (output: any, context: __SerdeContext): ListModelManifestNodesResponse => {
  return take(output, {
    nextToken: __expectString,
    nodes: (_: any) => de_Nodes(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0ListModelManifestsResponse
 */
const de_ListModelManifestsResponse = (output: any, context: __SerdeContext): ListModelManifestsResponse => {
  return take(output, {
    nextToken: __expectString,
    summaries: (_: any) => de_modelManifestSummaries(_, context),
  }) as any;
};

// de_listOfStrings omitted.

/**
 * deserializeAws_json1_0ListSignalCatalogNodesResponse
 */
const de_ListSignalCatalogNodesResponse = (output: any, context: __SerdeContext): ListSignalCatalogNodesResponse => {
  return take(output, {
    nextToken: __expectString,
    nodes: (_: any) => de_Nodes(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0ListSignalCatalogsResponse
 */
const de_ListSignalCatalogsResponse = (output: any, context: __SerdeContext): ListSignalCatalogsResponse => {
  return take(output, {
    nextToken: __expectString,
    summaries: (_: any) => de_signalCatalogSummaries(_, context),
  }) as any;
};

// de_ListTagsForResourceResponse omitted.

// de_ListVehiclesInFleetResponse omitted.

/**
 * deserializeAws_json1_0ListVehiclesResponse
 */
const de_ListVehiclesResponse = (output: any, context: __SerdeContext): ListVehiclesResponse => {
  return take(output, {
    nextToken: __expectString,
    vehicleSummaries: (_: any) => de_vehicleSummaries(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0modelManifestSummaries
 */
const de_modelManifestSummaries = (output: any, context: __SerdeContext): ModelManifestSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ModelManifestSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ModelManifestSummary
 */
const de_ModelManifestSummary = (output: any, context: __SerdeContext): ModelManifestSummary => {
  return take(output, {
    arn: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    lastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    signalCatalogArn: __expectString,
    status: __expectString,
  }) as any;
};

// de_NetworkInterface omitted.

// de_NetworkInterfaces omitted.

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
      branch: _json(output.branch),
    };
  }
  if (output.sensor != null) {
    return {
      sensor: de_Sensor(output.sensor, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

// de_NodeCounts omitted.

/**
 * deserializeAws_json1_0Nodes
 */
const de_Nodes = (output: any, context: __SerdeContext): Node[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Node(__expectUnion(entry), context);
    });
  return retVal;
};

// de_ObdInterface omitted.

/**
 * deserializeAws_json1_0ObdSignal
 */
const de_ObdSignal = (output: any, context: __SerdeContext): ObdSignal => {
  return take(output, {
    bitMaskLength: __expectInt32,
    bitRightShift: __expectInt32,
    byteLength: __expectInt32,
    offset: __limitedParseDouble,
    pid: __expectInt32,
    pidResponseLength: __expectInt32,
    scaling: __limitedParseDouble,
    serviceMode: __expectInt32,
    startByte: __expectInt32,
  }) as any;
};

// de_PutEncryptionConfigurationResponse omitted.

// de_PutLoggingOptionsResponse omitted.

/**
 * deserializeAws_json1_0RegisterAccountResponse
 */
const de_RegisterAccountResponse = (output: any, context: __SerdeContext): RegisterAccountResponse => {
  return take(output, {
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    iamResources: _json,
    lastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    registerAccountStatus: __expectString,
    timestreamResources: _json,
  }) as any;
};

// de_ResourceNotFoundException omitted.

// de_S3Config omitted.

/**
 * deserializeAws_json1_0Sensor
 */
const de_Sensor = (output: any, context: __SerdeContext): Sensor => {
  return take(output, {
    allowedValues: _json,
    comment: __expectString,
    dataType: __expectString,
    deprecationMessage: __expectString,
    description: __expectString,
    fullyQualifiedName: __expectString,
    max: __limitedParseDouble,
    min: __limitedParseDouble,
    unit: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0signalCatalogSummaries
 */
const de_signalCatalogSummaries = (output: any, context: __SerdeContext): SignalCatalogSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SignalCatalogSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0SignalCatalogSummary
 */
const de_SignalCatalogSummary = (output: any, context: __SerdeContext): SignalCatalogSummary => {
  return take(output, {
    arn: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0SignalDecoder
 */
const de_SignalDecoder = (output: any, context: __SerdeContext): SignalDecoder => {
  return take(output, {
    canSignal: (_: any) => de_CanSignal(_, context),
    fullyQualifiedName: __expectString,
    interfaceId: __expectString,
    obdSignal: (_: any) => de_ObdSignal(_, context),
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0SignalDecoders
 */
const de_SignalDecoders = (output: any, context: __SerdeContext): SignalDecoder[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SignalDecoder(entry, context);
    });
  return retVal;
};

// de_SignalInformation omitted.

// de_SignalInformationList omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceResponse omitted.

// de_ThrottlingException omitted.

// de_TimeBasedCollectionScheme omitted.

// de_TimestreamConfig omitted.

// de_TimestreamRegistrationResponse omitted.

// de_TimestreamResources omitted.

// de_UntagResourceResponse omitted.

// de_UpdateCampaignResponse omitted.

// de_UpdateDecoderManifestResponse omitted.

// de_UpdateFleetResponse omitted.

// de_UpdateModelManifestResponse omitted.

// de_UpdateSignalCatalogResponse omitted.

// de_UpdateVehicleError omitted.

// de_updateVehicleErrors omitted.

// de_UpdateVehicleResponse omitted.

// de_UpdateVehicleResponseItem omitted.

// de_updateVehicleResponseItems omitted.

// de_ValidationException omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

// de_vehicles omitted.

// de_VehicleStatus omitted.

// de_VehicleStatusList omitted.

/**
 * deserializeAws_json1_0vehicleSummaries
 */
const de_vehicleSummaries = (output: any, context: __SerdeContext): VehicleSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_VehicleSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0VehicleSummary
 */
const de_VehicleSummary = (output: any, context: __SerdeContext): VehicleSummary => {
  return take(output, {
    arn: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    decoderManifestArn: __expectString,
    lastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    modelManifestArn: __expectString,
    vehicleName: __expectString,
  }) as any;
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

const throwDefaultError = withBaseException(__BaseException);
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": `IoTAutobahnControlPlane.${operation}`,
  };
}

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
