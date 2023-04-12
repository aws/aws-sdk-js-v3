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
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AcceptGrantCommandInput, AcceptGrantCommandOutput } from "../commands/AcceptGrantCommand";
import { CheckInLicenseCommandInput, CheckInLicenseCommandOutput } from "../commands/CheckInLicenseCommand";
import {
  CheckoutBorrowLicenseCommandInput,
  CheckoutBorrowLicenseCommandOutput,
} from "../commands/CheckoutBorrowLicenseCommand";
import { CheckoutLicenseCommandInput, CheckoutLicenseCommandOutput } from "../commands/CheckoutLicenseCommand";
import { CreateGrantCommandInput, CreateGrantCommandOutput } from "../commands/CreateGrantCommand";
import { CreateGrantVersionCommandInput, CreateGrantVersionCommandOutput } from "../commands/CreateGrantVersionCommand";
import { CreateLicenseCommandInput, CreateLicenseCommandOutput } from "../commands/CreateLicenseCommand";
import {
  CreateLicenseConfigurationCommandInput,
  CreateLicenseConfigurationCommandOutput,
} from "../commands/CreateLicenseConfigurationCommand";
import {
  CreateLicenseConversionTaskForResourceCommandInput,
  CreateLicenseConversionTaskForResourceCommandOutput,
} from "../commands/CreateLicenseConversionTaskForResourceCommand";
import {
  CreateLicenseManagerReportGeneratorCommandInput,
  CreateLicenseManagerReportGeneratorCommandOutput,
} from "../commands/CreateLicenseManagerReportGeneratorCommand";
import {
  CreateLicenseVersionCommandInput,
  CreateLicenseVersionCommandOutput,
} from "../commands/CreateLicenseVersionCommand";
import { CreateTokenCommandInput, CreateTokenCommandOutput } from "../commands/CreateTokenCommand";
import { DeleteGrantCommandInput, DeleteGrantCommandOutput } from "../commands/DeleteGrantCommand";
import { DeleteLicenseCommandInput, DeleteLicenseCommandOutput } from "../commands/DeleteLicenseCommand";
import {
  DeleteLicenseConfigurationCommandInput,
  DeleteLicenseConfigurationCommandOutput,
} from "../commands/DeleteLicenseConfigurationCommand";
import {
  DeleteLicenseManagerReportGeneratorCommandInput,
  DeleteLicenseManagerReportGeneratorCommandOutput,
} from "../commands/DeleteLicenseManagerReportGeneratorCommand";
import { DeleteTokenCommandInput, DeleteTokenCommandOutput } from "../commands/DeleteTokenCommand";
import {
  ExtendLicenseConsumptionCommandInput,
  ExtendLicenseConsumptionCommandOutput,
} from "../commands/ExtendLicenseConsumptionCommand";
import { GetAccessTokenCommandInput, GetAccessTokenCommandOutput } from "../commands/GetAccessTokenCommand";
import { GetGrantCommandInput, GetGrantCommandOutput } from "../commands/GetGrantCommand";
import { GetLicenseCommandInput, GetLicenseCommandOutput } from "../commands/GetLicenseCommand";
import {
  GetLicenseConfigurationCommandInput,
  GetLicenseConfigurationCommandOutput,
} from "../commands/GetLicenseConfigurationCommand";
import {
  GetLicenseConversionTaskCommandInput,
  GetLicenseConversionTaskCommandOutput,
} from "../commands/GetLicenseConversionTaskCommand";
import {
  GetLicenseManagerReportGeneratorCommandInput,
  GetLicenseManagerReportGeneratorCommandOutput,
} from "../commands/GetLicenseManagerReportGeneratorCommand";
import { GetLicenseUsageCommandInput, GetLicenseUsageCommandOutput } from "../commands/GetLicenseUsageCommand";
import { GetServiceSettingsCommandInput, GetServiceSettingsCommandOutput } from "../commands/GetServiceSettingsCommand";
import {
  ListAssociationsForLicenseConfigurationCommandInput,
  ListAssociationsForLicenseConfigurationCommandOutput,
} from "../commands/ListAssociationsForLicenseConfigurationCommand";
import {
  ListDistributedGrantsCommandInput,
  ListDistributedGrantsCommandOutput,
} from "../commands/ListDistributedGrantsCommand";
import {
  ListFailuresForLicenseConfigurationOperationsCommandInput,
  ListFailuresForLicenseConfigurationOperationsCommandOutput,
} from "../commands/ListFailuresForLicenseConfigurationOperationsCommand";
import {
  ListLicenseConfigurationsCommandInput,
  ListLicenseConfigurationsCommandOutput,
} from "../commands/ListLicenseConfigurationsCommand";
import {
  ListLicenseConversionTasksCommandInput,
  ListLicenseConversionTasksCommandOutput,
} from "../commands/ListLicenseConversionTasksCommand";
import {
  ListLicenseManagerReportGeneratorsCommandInput,
  ListLicenseManagerReportGeneratorsCommandOutput,
} from "../commands/ListLicenseManagerReportGeneratorsCommand";
import { ListLicensesCommandInput, ListLicensesCommandOutput } from "../commands/ListLicensesCommand";
import {
  ListLicenseSpecificationsForResourceCommandInput,
  ListLicenseSpecificationsForResourceCommandOutput,
} from "../commands/ListLicenseSpecificationsForResourceCommand";
import {
  ListLicenseVersionsCommandInput,
  ListLicenseVersionsCommandOutput,
} from "../commands/ListLicenseVersionsCommand";
import { ListReceivedGrantsCommandInput, ListReceivedGrantsCommandOutput } from "../commands/ListReceivedGrantsCommand";
import {
  ListReceivedGrantsForOrganizationCommandInput,
  ListReceivedGrantsForOrganizationCommandOutput,
} from "../commands/ListReceivedGrantsForOrganizationCommand";
import {
  ListReceivedLicensesCommandInput,
  ListReceivedLicensesCommandOutput,
} from "../commands/ListReceivedLicensesCommand";
import {
  ListReceivedLicensesForOrganizationCommandInput,
  ListReceivedLicensesForOrganizationCommandOutput,
} from "../commands/ListReceivedLicensesForOrganizationCommand";
import {
  ListResourceInventoryCommandInput,
  ListResourceInventoryCommandOutput,
} from "../commands/ListResourceInventoryCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListTokensCommandInput, ListTokensCommandOutput } from "../commands/ListTokensCommand";
import {
  ListUsageForLicenseConfigurationCommandInput,
  ListUsageForLicenseConfigurationCommandOutput,
} from "../commands/ListUsageForLicenseConfigurationCommand";
import { RejectGrantCommandInput, RejectGrantCommandOutput } from "../commands/RejectGrantCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateLicenseConfigurationCommandInput,
  UpdateLicenseConfigurationCommandOutput,
} from "../commands/UpdateLicenseConfigurationCommand";
import {
  UpdateLicenseManagerReportGeneratorCommandInput,
  UpdateLicenseManagerReportGeneratorCommandOutput,
} from "../commands/UpdateLicenseManagerReportGeneratorCommand";
import {
  UpdateLicenseSpecificationsForResourceCommandInput,
  UpdateLicenseSpecificationsForResourceCommandOutput,
} from "../commands/UpdateLicenseSpecificationsForResourceCommand";
import {
  UpdateServiceSettingsCommandInput,
  UpdateServiceSettingsCommandOutput,
} from "../commands/UpdateServiceSettingsCommand";
import { LicenseManagerServiceException as __BaseException } from "../models/LicenseManagerServiceException";
import {
  AcceptGrantRequest,
  AcceptGrantResponse,
  AccessDeniedException,
  AllowedOperation,
  AuthorizationException,
  AutomatedDiscoveryInformation,
  BorrowConfiguration,
  CheckInLicenseRequest,
  CheckInLicenseResponse,
  CheckoutBorrowLicenseRequest,
  CheckoutBorrowLicenseResponse,
  CheckoutLicenseRequest,
  CheckoutLicenseResponse,
  ConflictException,
  ConsumedLicenseSummary,
  ConsumptionConfiguration,
  CreateGrantRequest,
  CreateGrantResponse,
  CreateGrantVersionRequest,
  CreateGrantVersionResponse,
  CreateLicenseConfigurationRequest,
  CreateLicenseConfigurationResponse,
  CreateLicenseConversionTaskForResourceRequest,
  CreateLicenseConversionTaskForResourceResponse,
  CreateLicenseManagerReportGeneratorRequest,
  CreateLicenseManagerReportGeneratorResponse,
  CreateLicenseRequest,
  CreateLicenseResponse,
  CreateLicenseVersionRequest,
  CreateLicenseVersionResponse,
  CreateTokenRequest,
  CreateTokenResponse,
  DatetimeRange,
  DeleteGrantRequest,
  DeleteGrantResponse,
  DeleteLicenseConfigurationRequest,
  DeleteLicenseConfigurationResponse,
  DeleteLicenseManagerReportGeneratorRequest,
  DeleteLicenseManagerReportGeneratorResponse,
  DeleteLicenseRequest,
  DeleteLicenseResponse,
  DeleteTokenRequest,
  DeleteTokenResponse,
  Entitlement,
  EntitlementData,
  EntitlementNotAllowedException,
  EntitlementUsage,
  ExtendLicenseConsumptionRequest,
  ExtendLicenseConsumptionResponse,
  FailedDependencyException,
  Filter,
  FilterLimitExceededException,
  GetAccessTokenRequest,
  GetAccessTokenResponse,
  GetGrantRequest,
  GetGrantResponse,
  GetLicenseConfigurationRequest,
  GetLicenseConfigurationResponse,
  GetLicenseConversionTaskRequest,
  GetLicenseConversionTaskResponse,
  GetLicenseManagerReportGeneratorRequest,
  GetLicenseManagerReportGeneratorResponse,
  GetLicenseRequest,
  GetLicenseResponse,
  GetLicenseUsageRequest,
  GetLicenseUsageResponse,
  GetServiceSettingsRequest,
  GetServiceSettingsResponse,
  Grant,
  GrantedLicense,
  InvalidParameterValueException,
  InvalidResourceStateException,
  InventoryFilter,
  Issuer,
  IssuerDetails,
  License,
  LicenseConfiguration,
  LicenseConfigurationAssociation,
  LicenseConfigurationUsage,
  LicenseConversionContext,
  LicenseConversionTask,
  LicenseOperationFailure,
  LicenseSpecification,
  LicenseUsage,
  LicenseUsageException,
  ListAssociationsForLicenseConfigurationRequest,
  ListAssociationsForLicenseConfigurationResponse,
  ListDistributedGrantsRequest,
  ListDistributedGrantsResponse,
  ListFailuresForLicenseConfigurationOperationsRequest,
  ListFailuresForLicenseConfigurationOperationsResponse,
  ListLicenseConfigurationsRequest,
  ListLicenseConfigurationsResponse,
  ListLicenseConversionTasksRequest,
  ListLicenseConversionTasksResponse,
  ListLicenseManagerReportGeneratorsRequest,
  ListLicenseManagerReportGeneratorsResponse,
  ListLicenseSpecificationsForResourceRequest,
  ListLicenseSpecificationsForResourceResponse,
  ListLicensesRequest,
  ListLicensesResponse,
  ListLicenseVersionsRequest,
  ListLicenseVersionsResponse,
  ListReceivedGrantsForOrganizationRequest,
  ListReceivedGrantsForOrganizationResponse,
  ListReceivedGrantsRequest,
  ListReceivedGrantsResponse,
  ListReceivedLicensesForOrganizationRequest,
  ListReceivedLicensesForOrganizationResponse,
  ListReceivedLicensesRequest,
  ListReceivedLicensesResponse,
  ListResourceInventoryRequest,
  ListResourceInventoryResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTokensRequest,
  ListTokensResponse,
  ListUsageForLicenseConfigurationRequest,
  ListUsageForLicenseConfigurationResponse,
  ManagedResourceSummary,
  Metadata,
  NoEntitlementsAllowedException,
  Options,
  OrganizationConfiguration,
  ProductInformation,
  ProductInformationFilter,
  ProvisionalConfiguration,
  RateLimitExceededException,
  ReceivedMetadata,
  RedirectException,
  RejectGrantRequest,
  RejectGrantResponse,
  ReportContext,
  ReportFrequency,
  ReportGenerator,
  ReportType,
  ResourceInventory,
  ResourceLimitExceededException,
  ResourceNotFoundException,
  S3Location,
  ServerInternalException,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  TokenData,
  UnsupportedDigitalSignatureMethodException,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateLicenseConfigurationRequest,
  UpdateLicenseConfigurationResponse,
  UpdateLicenseManagerReportGeneratorRequest,
  UpdateLicenseManagerReportGeneratorResponse,
  UpdateLicenseSpecificationsForResourceRequest,
  UpdateLicenseSpecificationsForResourceResponse,
  UpdateServiceSettingsRequest,
  UpdateServiceSettingsResponse,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_json1_1AcceptGrantCommand
 */
export const se_AcceptGrantCommand = async (
  input: AcceptGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AcceptGrant");
  let body: any;
  body = JSON.stringify(se_AcceptGrantRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CheckInLicenseCommand
 */
export const se_CheckInLicenseCommand = async (
  input: CheckInLicenseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CheckInLicense");
  let body: any;
  body = JSON.stringify(se_CheckInLicenseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CheckoutBorrowLicenseCommand
 */
export const se_CheckoutBorrowLicenseCommand = async (
  input: CheckoutBorrowLicenseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CheckoutBorrowLicense");
  let body: any;
  body = JSON.stringify(se_CheckoutBorrowLicenseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CheckoutLicenseCommand
 */
export const se_CheckoutLicenseCommand = async (
  input: CheckoutLicenseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CheckoutLicense");
  let body: any;
  body = JSON.stringify(se_CheckoutLicenseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateGrantCommand
 */
export const se_CreateGrantCommand = async (
  input: CreateGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateGrant");
  let body: any;
  body = JSON.stringify(se_CreateGrantRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateGrantVersionCommand
 */
export const se_CreateGrantVersionCommand = async (
  input: CreateGrantVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateGrantVersion");
  let body: any;
  body = JSON.stringify(se_CreateGrantVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLicenseCommand
 */
export const se_CreateLicenseCommand = async (
  input: CreateLicenseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateLicense");
  let body: any;
  body = JSON.stringify(se_CreateLicenseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLicenseConfigurationCommand
 */
export const se_CreateLicenseConfigurationCommand = async (
  input: CreateLicenseConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateLicenseConfiguration");
  let body: any;
  body = JSON.stringify(se_CreateLicenseConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLicenseConversionTaskForResourceCommand
 */
export const se_CreateLicenseConversionTaskForResourceCommand = async (
  input: CreateLicenseConversionTaskForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateLicenseConversionTaskForResource");
  let body: any;
  body = JSON.stringify(se_CreateLicenseConversionTaskForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLicenseManagerReportGeneratorCommand
 */
export const se_CreateLicenseManagerReportGeneratorCommand = async (
  input: CreateLicenseManagerReportGeneratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateLicenseManagerReportGenerator");
  let body: any;
  body = JSON.stringify(se_CreateLicenseManagerReportGeneratorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLicenseVersionCommand
 */
export const se_CreateLicenseVersionCommand = async (
  input: CreateLicenseVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateLicenseVersion");
  let body: any;
  body = JSON.stringify(se_CreateLicenseVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateTokenCommand
 */
export const se_CreateTokenCommand = async (
  input: CreateTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateToken");
  let body: any;
  body = JSON.stringify(se_CreateTokenRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteGrantCommand
 */
export const se_DeleteGrantCommand = async (
  input: DeleteGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteGrant");
  let body: any;
  body = JSON.stringify(se_DeleteGrantRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteLicenseCommand
 */
export const se_DeleteLicenseCommand = async (
  input: DeleteLicenseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteLicense");
  let body: any;
  body = JSON.stringify(se_DeleteLicenseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteLicenseConfigurationCommand
 */
export const se_DeleteLicenseConfigurationCommand = async (
  input: DeleteLicenseConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteLicenseConfiguration");
  let body: any;
  body = JSON.stringify(se_DeleteLicenseConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteLicenseManagerReportGeneratorCommand
 */
export const se_DeleteLicenseManagerReportGeneratorCommand = async (
  input: DeleteLicenseManagerReportGeneratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteLicenseManagerReportGenerator");
  let body: any;
  body = JSON.stringify(se_DeleteLicenseManagerReportGeneratorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteTokenCommand
 */
export const se_DeleteTokenCommand = async (
  input: DeleteTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteToken");
  let body: any;
  body = JSON.stringify(se_DeleteTokenRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ExtendLicenseConsumptionCommand
 */
export const se_ExtendLicenseConsumptionCommand = async (
  input: ExtendLicenseConsumptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ExtendLicenseConsumption");
  let body: any;
  body = JSON.stringify(se_ExtendLicenseConsumptionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAccessTokenCommand
 */
export const se_GetAccessTokenCommand = async (
  input: GetAccessTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAccessToken");
  let body: any;
  body = JSON.stringify(se_GetAccessTokenRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetGrantCommand
 */
export const se_GetGrantCommand = async (
  input: GetGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetGrant");
  let body: any;
  body = JSON.stringify(se_GetGrantRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetLicenseCommand
 */
export const se_GetLicenseCommand = async (
  input: GetLicenseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetLicense");
  let body: any;
  body = JSON.stringify(se_GetLicenseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetLicenseConfigurationCommand
 */
export const se_GetLicenseConfigurationCommand = async (
  input: GetLicenseConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetLicenseConfiguration");
  let body: any;
  body = JSON.stringify(se_GetLicenseConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetLicenseConversionTaskCommand
 */
export const se_GetLicenseConversionTaskCommand = async (
  input: GetLicenseConversionTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetLicenseConversionTask");
  let body: any;
  body = JSON.stringify(se_GetLicenseConversionTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetLicenseManagerReportGeneratorCommand
 */
export const se_GetLicenseManagerReportGeneratorCommand = async (
  input: GetLicenseManagerReportGeneratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetLicenseManagerReportGenerator");
  let body: any;
  body = JSON.stringify(se_GetLicenseManagerReportGeneratorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetLicenseUsageCommand
 */
export const se_GetLicenseUsageCommand = async (
  input: GetLicenseUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetLicenseUsage");
  let body: any;
  body = JSON.stringify(se_GetLicenseUsageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetServiceSettingsCommand
 */
export const se_GetServiceSettingsCommand = async (
  input: GetServiceSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetServiceSettings");
  let body: any;
  body = JSON.stringify(se_GetServiceSettingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAssociationsForLicenseConfigurationCommand
 */
export const se_ListAssociationsForLicenseConfigurationCommand = async (
  input: ListAssociationsForLicenseConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAssociationsForLicenseConfiguration");
  let body: any;
  body = JSON.stringify(se_ListAssociationsForLicenseConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDistributedGrantsCommand
 */
export const se_ListDistributedGrantsCommand = async (
  input: ListDistributedGrantsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDistributedGrants");
  let body: any;
  body = JSON.stringify(se_ListDistributedGrantsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommand
 */
export const se_ListFailuresForLicenseConfigurationOperationsCommand = async (
  input: ListFailuresForLicenseConfigurationOperationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListFailuresForLicenseConfigurationOperations");
  let body: any;
  body = JSON.stringify(se_ListFailuresForLicenseConfigurationOperationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListLicenseConfigurationsCommand
 */
export const se_ListLicenseConfigurationsCommand = async (
  input: ListLicenseConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListLicenseConfigurations");
  let body: any;
  body = JSON.stringify(se_ListLicenseConfigurationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListLicenseConversionTasksCommand
 */
export const se_ListLicenseConversionTasksCommand = async (
  input: ListLicenseConversionTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListLicenseConversionTasks");
  let body: any;
  body = JSON.stringify(se_ListLicenseConversionTasksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListLicenseManagerReportGeneratorsCommand
 */
export const se_ListLicenseManagerReportGeneratorsCommand = async (
  input: ListLicenseManagerReportGeneratorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListLicenseManagerReportGenerators");
  let body: any;
  body = JSON.stringify(se_ListLicenseManagerReportGeneratorsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListLicensesCommand
 */
export const se_ListLicensesCommand = async (
  input: ListLicensesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListLicenses");
  let body: any;
  body = JSON.stringify(se_ListLicensesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListLicenseSpecificationsForResourceCommand
 */
export const se_ListLicenseSpecificationsForResourceCommand = async (
  input: ListLicenseSpecificationsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListLicenseSpecificationsForResource");
  let body: any;
  body = JSON.stringify(se_ListLicenseSpecificationsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListLicenseVersionsCommand
 */
export const se_ListLicenseVersionsCommand = async (
  input: ListLicenseVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListLicenseVersions");
  let body: any;
  body = JSON.stringify(se_ListLicenseVersionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListReceivedGrantsCommand
 */
export const se_ListReceivedGrantsCommand = async (
  input: ListReceivedGrantsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListReceivedGrants");
  let body: any;
  body = JSON.stringify(se_ListReceivedGrantsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListReceivedGrantsForOrganizationCommand
 */
export const se_ListReceivedGrantsForOrganizationCommand = async (
  input: ListReceivedGrantsForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListReceivedGrantsForOrganization");
  let body: any;
  body = JSON.stringify(se_ListReceivedGrantsForOrganizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListReceivedLicensesCommand
 */
export const se_ListReceivedLicensesCommand = async (
  input: ListReceivedLicensesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListReceivedLicenses");
  let body: any;
  body = JSON.stringify(se_ListReceivedLicensesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListReceivedLicensesForOrganizationCommand
 */
export const se_ListReceivedLicensesForOrganizationCommand = async (
  input: ListReceivedLicensesForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListReceivedLicensesForOrganization");
  let body: any;
  body = JSON.stringify(se_ListReceivedLicensesForOrganizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListResourceInventoryCommand
 */
export const se_ListResourceInventoryCommand = async (
  input: ListResourceInventoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListResourceInventory");
  let body: any;
  body = JSON.stringify(se_ListResourceInventoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTokensCommand
 */
export const se_ListTokensCommand = async (
  input: ListTokensCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTokens");
  let body: any;
  body = JSON.stringify(se_ListTokensRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListUsageForLicenseConfigurationCommand
 */
export const se_ListUsageForLicenseConfigurationCommand = async (
  input: ListUsageForLicenseConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListUsageForLicenseConfiguration");
  let body: any;
  body = JSON.stringify(se_ListUsageForLicenseConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RejectGrantCommand
 */
export const se_RejectGrantCommand = async (
  input: RejectGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RejectGrant");
  let body: any;
  body = JSON.stringify(se_RejectGrantRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateLicenseConfigurationCommand
 */
export const se_UpdateLicenseConfigurationCommand = async (
  input: UpdateLicenseConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateLicenseConfiguration");
  let body: any;
  body = JSON.stringify(se_UpdateLicenseConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateLicenseManagerReportGeneratorCommand
 */
export const se_UpdateLicenseManagerReportGeneratorCommand = async (
  input: UpdateLicenseManagerReportGeneratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateLicenseManagerReportGenerator");
  let body: any;
  body = JSON.stringify(se_UpdateLicenseManagerReportGeneratorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateLicenseSpecificationsForResourceCommand
 */
export const se_UpdateLicenseSpecificationsForResourceCommand = async (
  input: UpdateLicenseSpecificationsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateLicenseSpecificationsForResource");
  let body: any;
  body = JSON.stringify(se_UpdateLicenseSpecificationsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateServiceSettingsCommand
 */
export const se_UpdateServiceSettingsCommand = async (
  input: UpdateServiceSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateServiceSettings");
  let body: any;
  body = JSON.stringify(se_UpdateServiceSettingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AcceptGrantCommand
 */
export const de_AcceptGrantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptGrantCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AcceptGrantCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AcceptGrantResponse(data, context);
  const response: AcceptGrantCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AcceptGrantCommandError
 */
const de_AcceptGrantCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptGrantCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
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
 * deserializeAws_json1_1CheckInLicenseCommand
 */
export const de_CheckInLicenseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckInLicenseCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CheckInLicenseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CheckInLicenseResponse(data, context);
  const response: CheckInLicenseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CheckInLicenseCommandError
 */
const de_CheckInLicenseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckInLicenseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.licensemanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
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
 * deserializeAws_json1_1CheckoutBorrowLicenseCommand
 */
export const de_CheckoutBorrowLicenseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckoutBorrowLicenseCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CheckoutBorrowLicenseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CheckoutBorrowLicenseResponse(data, context);
  const response: CheckoutBorrowLicenseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CheckoutBorrowLicenseCommandError
 */
const de_CheckoutBorrowLicenseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckoutBorrowLicenseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "EntitlementNotAllowedException":
    case "com.amazonaws.licensemanager#EntitlementNotAllowedException":
      throw await de_EntitlementNotAllowedExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "NoEntitlementsAllowedException":
    case "com.amazonaws.licensemanager#NoEntitlementsAllowedException":
      throw await de_NoEntitlementsAllowedExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "RedirectException":
    case "com.amazonaws.licensemanager#RedirectException":
      throw await de_RedirectExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "UnsupportedDigitalSignatureMethodException":
    case "com.amazonaws.licensemanager#UnsupportedDigitalSignatureMethodException":
      throw await de_UnsupportedDigitalSignatureMethodExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
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
 * deserializeAws_json1_1CheckoutLicenseCommand
 */
export const de_CheckoutLicenseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckoutLicenseCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CheckoutLicenseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CheckoutLicenseResponse(data, context);
  const response: CheckoutLicenseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CheckoutLicenseCommandError
 */
const de_CheckoutLicenseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckoutLicenseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "NoEntitlementsAllowedException":
    case "com.amazonaws.licensemanager#NoEntitlementsAllowedException":
      throw await de_NoEntitlementsAllowedExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "RedirectException":
    case "com.amazonaws.licensemanager#RedirectException":
      throw await de_RedirectExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "UnsupportedDigitalSignatureMethodException":
    case "com.amazonaws.licensemanager#UnsupportedDigitalSignatureMethodException":
      throw await de_UnsupportedDigitalSignatureMethodExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
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
 * deserializeAws_json1_1CreateGrantCommand
 */
export const de_CreateGrantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGrantCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateGrantCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateGrantResponse(data, context);
  const response: CreateGrantCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateGrantCommandError
 */
const de_CreateGrantCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGrantCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
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
 * deserializeAws_json1_1CreateGrantVersionCommand
 */
export const de_CreateGrantVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGrantVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateGrantVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateGrantVersionResponse(data, context);
  const response: CreateGrantVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateGrantVersionCommandError
 */
const de_CreateGrantVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGrantVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
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
 * deserializeAws_json1_1CreateLicenseCommand
 */
export const de_CreateLicenseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLicenseCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateLicenseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateLicenseResponse(data, context);
  const response: CreateLicenseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateLicenseCommandError
 */
const de_CreateLicenseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLicenseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "RedirectException":
    case "com.amazonaws.licensemanager#RedirectException":
      throw await de_RedirectExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
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
 * deserializeAws_json1_1CreateLicenseConfigurationCommand
 */
export const de_CreateLicenseConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLicenseConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateLicenseConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateLicenseConfigurationResponse(data, context);
  const response: CreateLicenseConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateLicenseConfigurationCommandError
 */
const de_CreateLicenseConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLicenseConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateLicenseConversionTaskForResourceCommand
 */
export const de_CreateLicenseConversionTaskForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLicenseConversionTaskForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateLicenseConversionTaskForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateLicenseConversionTaskForResourceResponse(data, context);
  const response: CreateLicenseConversionTaskForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateLicenseConversionTaskForResourceCommandError
 */
const de_CreateLicenseConversionTaskForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLicenseConversionTaskForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
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
 * deserializeAws_json1_1CreateLicenseManagerReportGeneratorCommand
 */
export const de_CreateLicenseManagerReportGeneratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLicenseManagerReportGeneratorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateLicenseManagerReportGeneratorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateLicenseManagerReportGeneratorResponse(data, context);
  const response: CreateLicenseManagerReportGeneratorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateLicenseManagerReportGeneratorCommandError
 */
const de_CreateLicenseManagerReportGeneratorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLicenseManagerReportGeneratorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
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
 * deserializeAws_json1_1CreateLicenseVersionCommand
 */
export const de_CreateLicenseVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLicenseVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateLicenseVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateLicenseVersionResponse(data, context);
  const response: CreateLicenseVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateLicenseVersionCommandError
 */
const de_CreateLicenseVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLicenseVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.licensemanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "RedirectException":
    case "com.amazonaws.licensemanager#RedirectException":
      throw await de_RedirectExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
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
 * deserializeAws_json1_1CreateTokenCommand
 */
export const de_CreateTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTokenCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateTokenCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateTokenResponse(data, context);
  const response: CreateTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateTokenCommandError
 */
const de_CreateTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "RedirectException":
    case "com.amazonaws.licensemanager#RedirectException":
      throw await de_RedirectExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
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
 * deserializeAws_json1_1DeleteGrantCommand
 */
export const de_DeleteGrantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGrantCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteGrantCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteGrantResponse(data, context);
  const response: DeleteGrantCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteGrantCommandError
 */
const de_DeleteGrantCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGrantCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
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
 * deserializeAws_json1_1DeleteLicenseCommand
 */
export const de_DeleteLicenseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLicenseCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteLicenseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteLicenseResponse(data, context);
  const response: DeleteLicenseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteLicenseCommandError
 */
const de_DeleteLicenseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLicenseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.licensemanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "RedirectException":
    case "com.amazonaws.licensemanager#RedirectException":
      throw await de_RedirectExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
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
 * deserializeAws_json1_1DeleteLicenseConfigurationCommand
 */
export const de_DeleteLicenseConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLicenseConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteLicenseConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteLicenseConfigurationResponse(data, context);
  const response: DeleteLicenseConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteLicenseConfigurationCommandError
 */
const de_DeleteLicenseConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLicenseConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteLicenseManagerReportGeneratorCommand
 */
export const de_DeleteLicenseManagerReportGeneratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLicenseManagerReportGeneratorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteLicenseManagerReportGeneratorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteLicenseManagerReportGeneratorResponse(data, context);
  const response: DeleteLicenseManagerReportGeneratorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteLicenseManagerReportGeneratorCommandError
 */
const de_DeleteLicenseManagerReportGeneratorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLicenseManagerReportGeneratorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
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
 * deserializeAws_json1_1DeleteTokenCommand
 */
export const de_DeleteTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTokenCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteTokenCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteTokenResponse(data, context);
  const response: DeleteTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteTokenCommandError
 */
const de_DeleteTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "RedirectException":
    case "com.amazonaws.licensemanager#RedirectException":
      throw await de_RedirectExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
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
 * deserializeAws_json1_1ExtendLicenseConsumptionCommand
 */
export const de_ExtendLicenseConsumptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExtendLicenseConsumptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ExtendLicenseConsumptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ExtendLicenseConsumptionResponse(data, context);
  const response: ExtendLicenseConsumptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ExtendLicenseConsumptionCommandError
 */
const de_ExtendLicenseConsumptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExtendLicenseConsumptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
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
 * deserializeAws_json1_1GetAccessTokenCommand
 */
export const de_GetAccessTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessTokenCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAccessTokenCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAccessTokenResponse(data, context);
  const response: GetAccessTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetAccessTokenCommandError
 */
const de_GetAccessTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
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
 * deserializeAws_json1_1GetGrantCommand
 */
export const de_GetGrantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGrantCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetGrantCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetGrantResponse(data, context);
  const response: GetGrantCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetGrantCommandError
 */
const de_GetGrantCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGrantCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
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
 * deserializeAws_json1_1GetLicenseCommand
 */
export const de_GetLicenseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLicenseCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetLicenseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetLicenseResponse(data, context);
  const response: GetLicenseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetLicenseCommandError
 */
const de_GetLicenseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLicenseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
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
 * deserializeAws_json1_1GetLicenseConfigurationCommand
 */
export const de_GetLicenseConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLicenseConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetLicenseConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetLicenseConfigurationResponse(data, context);
  const response: GetLicenseConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetLicenseConfigurationCommandError
 */
const de_GetLicenseConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLicenseConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetLicenseConversionTaskCommand
 */
export const de_GetLicenseConversionTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLicenseConversionTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetLicenseConversionTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetLicenseConversionTaskResponse(data, context);
  const response: GetLicenseConversionTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetLicenseConversionTaskCommandError
 */
const de_GetLicenseConversionTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLicenseConversionTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetLicenseManagerReportGeneratorCommand
 */
export const de_GetLicenseManagerReportGeneratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLicenseManagerReportGeneratorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetLicenseManagerReportGeneratorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetLicenseManagerReportGeneratorResponse(data, context);
  const response: GetLicenseManagerReportGeneratorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetLicenseManagerReportGeneratorCommandError
 */
const de_GetLicenseManagerReportGeneratorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLicenseManagerReportGeneratorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
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
 * deserializeAws_json1_1GetLicenseUsageCommand
 */
export const de_GetLicenseUsageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLicenseUsageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetLicenseUsageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetLicenseUsageResponse(data, context);
  const response: GetLicenseUsageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetLicenseUsageCommandError
 */
const de_GetLicenseUsageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLicenseUsageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
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
 * deserializeAws_json1_1GetServiceSettingsCommand
 */
export const de_GetServiceSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetServiceSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetServiceSettingsResponse(data, context);
  const response: GetServiceSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetServiceSettingsCommandError
 */
const de_GetServiceSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListAssociationsForLicenseConfigurationCommand
 */
export const de_ListAssociationsForLicenseConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociationsForLicenseConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAssociationsForLicenseConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAssociationsForLicenseConfigurationResponse(data, context);
  const response: ListAssociationsForLicenseConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListAssociationsForLicenseConfigurationCommandError
 */
const de_ListAssociationsForLicenseConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociationsForLicenseConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "FilterLimitExceededException":
    case "com.amazonaws.licensemanager#FilterLimitExceededException":
      throw await de_FilterLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListDistributedGrantsCommand
 */
export const de_ListDistributedGrantsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributedGrantsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDistributedGrantsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDistributedGrantsResponse(data, context);
  const response: ListDistributedGrantsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListDistributedGrantsCommandError
 */
const de_ListDistributedGrantsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributedGrantsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
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
 * deserializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommand
 */
export const de_ListFailuresForLicenseConfigurationOperationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFailuresForLicenseConfigurationOperationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListFailuresForLicenseConfigurationOperationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListFailuresForLicenseConfigurationOperationsResponse(data, context);
  const response: ListFailuresForLicenseConfigurationOperationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommandError
 */
const de_ListFailuresForLicenseConfigurationOperationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFailuresForLicenseConfigurationOperationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListLicenseConfigurationsCommand
 */
export const de_ListLicenseConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLicenseConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListLicenseConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListLicenseConfigurationsResponse(data, context);
  const response: ListLicenseConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListLicenseConfigurationsCommandError
 */
const de_ListLicenseConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLicenseConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "FilterLimitExceededException":
    case "com.amazonaws.licensemanager#FilterLimitExceededException":
      throw await de_FilterLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListLicenseConversionTasksCommand
 */
export const de_ListLicenseConversionTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLicenseConversionTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListLicenseConversionTasksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListLicenseConversionTasksResponse(data, context);
  const response: ListLicenseConversionTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListLicenseConversionTasksCommandError
 */
const de_ListLicenseConversionTasksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLicenseConversionTasksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListLicenseManagerReportGeneratorsCommand
 */
export const de_ListLicenseManagerReportGeneratorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLicenseManagerReportGeneratorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListLicenseManagerReportGeneratorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListLicenseManagerReportGeneratorsResponse(data, context);
  const response: ListLicenseManagerReportGeneratorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListLicenseManagerReportGeneratorsCommandError
 */
const de_ListLicenseManagerReportGeneratorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLicenseManagerReportGeneratorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
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
 * deserializeAws_json1_1ListLicensesCommand
 */
export const de_ListLicensesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLicensesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListLicensesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListLicensesResponse(data, context);
  const response: ListLicensesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListLicensesCommandError
 */
const de_ListLicensesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLicensesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
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
 * deserializeAws_json1_1ListLicenseSpecificationsForResourceCommand
 */
export const de_ListLicenseSpecificationsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLicenseSpecificationsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListLicenseSpecificationsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListLicenseSpecificationsForResourceResponse(data, context);
  const response: ListLicenseSpecificationsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListLicenseSpecificationsForResourceCommandError
 */
const de_ListLicenseSpecificationsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLicenseSpecificationsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListLicenseVersionsCommand
 */
export const de_ListLicenseVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLicenseVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListLicenseVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListLicenseVersionsResponse(data, context);
  const response: ListLicenseVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListLicenseVersionsCommandError
 */
const de_ListLicenseVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLicenseVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListReceivedGrantsCommand
 */
export const de_ListReceivedGrantsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReceivedGrantsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListReceivedGrantsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListReceivedGrantsResponse(data, context);
  const response: ListReceivedGrantsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListReceivedGrantsCommandError
 */
const de_ListReceivedGrantsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReceivedGrantsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
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
 * deserializeAws_json1_1ListReceivedGrantsForOrganizationCommand
 */
export const de_ListReceivedGrantsForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReceivedGrantsForOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListReceivedGrantsForOrganizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListReceivedGrantsForOrganizationResponse(data, context);
  const response: ListReceivedGrantsForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListReceivedGrantsForOrganizationCommandError
 */
const de_ListReceivedGrantsForOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReceivedGrantsForOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
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
 * deserializeAws_json1_1ListReceivedLicensesCommand
 */
export const de_ListReceivedLicensesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReceivedLicensesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListReceivedLicensesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListReceivedLicensesResponse(data, context);
  const response: ListReceivedLicensesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListReceivedLicensesCommandError
 */
const de_ListReceivedLicensesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReceivedLicensesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
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
 * deserializeAws_json1_1ListReceivedLicensesForOrganizationCommand
 */
export const de_ListReceivedLicensesForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReceivedLicensesForOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListReceivedLicensesForOrganizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListReceivedLicensesForOrganizationResponse(data, context);
  const response: ListReceivedLicensesForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListReceivedLicensesForOrganizationCommandError
 */
const de_ListReceivedLicensesForOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReceivedLicensesForOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
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
 * deserializeAws_json1_1ListResourceInventoryCommand
 */
export const de_ListResourceInventoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceInventoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListResourceInventoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListResourceInventoryResponse(data, context);
  const response: ListResourceInventoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListResourceInventoryCommandError
 */
const de_ListResourceInventoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceInventoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.licensemanager#FailedDependencyException":
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "FilterLimitExceededException":
    case "com.amazonaws.licensemanager#FilterLimitExceededException":
      throw await de_FilterLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListTagsForResourceCommand
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
 * deserializeAws_json1_1ListTagsForResourceCommandError
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
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListTokensCommand
 */
export const de_ListTokensCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTokensCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTokensCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTokensResponse(data, context);
  const response: ListTokensCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTokensCommandError
 */
const de_ListTokensCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTokensCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
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
 * deserializeAws_json1_1ListUsageForLicenseConfigurationCommand
 */
export const de_ListUsageForLicenseConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsageForLicenseConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListUsageForLicenseConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListUsageForLicenseConfigurationResponse(data, context);
  const response: ListUsageForLicenseConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListUsageForLicenseConfigurationCommandError
 */
const de_ListUsageForLicenseConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsageForLicenseConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "FilterLimitExceededException":
    case "com.amazonaws.licensemanager#FilterLimitExceededException":
      throw await de_FilterLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1RejectGrantCommand
 */
export const de_RejectGrantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectGrantCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RejectGrantCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RejectGrantResponse(data, context);
  const response: RejectGrantCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RejectGrantCommandError
 */
const de_RejectGrantCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectGrantCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
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
 * deserializeAws_json1_1TagResourceCommand
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
 * deserializeAws_json1_1TagResourceCommandError
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
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UntagResourceCommand
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
 * deserializeAws_json1_1UntagResourceCommandError
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
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateLicenseConfigurationCommand
 */
export const de_UpdateLicenseConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLicenseConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateLicenseConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateLicenseConfigurationResponse(data, context);
  const response: UpdateLicenseConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateLicenseConfigurationCommandError
 */
const de_UpdateLicenseConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLicenseConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateLicenseManagerReportGeneratorCommand
 */
export const de_UpdateLicenseManagerReportGeneratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLicenseManagerReportGeneratorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateLicenseManagerReportGeneratorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateLicenseManagerReportGeneratorResponse(data, context);
  const response: UpdateLicenseManagerReportGeneratorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateLicenseManagerReportGeneratorCommandError
 */
const de_UpdateLicenseManagerReportGeneratorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLicenseManagerReportGeneratorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
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
 * deserializeAws_json1_1UpdateLicenseSpecificationsForResourceCommand
 */
export const de_UpdateLicenseSpecificationsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLicenseSpecificationsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateLicenseSpecificationsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateLicenseSpecificationsForResourceResponse(data, context);
  const response: UpdateLicenseSpecificationsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateLicenseSpecificationsForResourceCommandError
 */
const de_UpdateLicenseSpecificationsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLicenseSpecificationsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.licensemanager#InvalidResourceStateException":
      throw await de_InvalidResourceStateExceptionRes(parsedOutput, context);
    case "LicenseUsageException":
    case "com.amazonaws.licensemanager#LicenseUsageException":
      throw await de_LicenseUsageExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateServiceSettingsCommand
 */
export const de_UpdateServiceSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateServiceSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateServiceSettingsResponse(data, context);
  const response: UpdateServiceSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateServiceSettingsCommandError
 */
const de_UpdateServiceSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await de_AuthorizationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await de_RateLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1AccessDeniedExceptionRes
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
 * deserializeAws_json1_1AuthorizationExceptionRes
 */
const de_AuthorizationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AuthorizationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AuthorizationException(body, context);
  const exception = new AuthorizationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ConflictExceptionRes
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
 * deserializeAws_json1_1EntitlementNotAllowedExceptionRes
 */
const de_EntitlementNotAllowedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EntitlementNotAllowedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_EntitlementNotAllowedException(body, context);
  const exception = new EntitlementNotAllowedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1FailedDependencyExceptionRes
 */
const de_FailedDependencyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FailedDependencyException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_FailedDependencyException(body, context);
  const exception = new FailedDependencyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1FilterLimitExceededExceptionRes
 */
const de_FilterLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FilterLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_FilterLimitExceededException(body, context);
  const exception = new FilterLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidParameterValueExceptionRes
 */
const de_InvalidParameterValueExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidParameterValueException(body, context);
  const exception = new InvalidParameterValueException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidResourceStateExceptionRes
 */
const de_InvalidResourceStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResourceStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidResourceStateException(body, context);
  const exception = new InvalidResourceStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LicenseUsageExceptionRes
 */
const de_LicenseUsageExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LicenseUsageException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LicenseUsageException(body, context);
  const exception = new LicenseUsageException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NoEntitlementsAllowedExceptionRes
 */
const de_NoEntitlementsAllowedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoEntitlementsAllowedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NoEntitlementsAllowedException(body, context);
  const exception = new NoEntitlementsAllowedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1RateLimitExceededExceptionRes
 */
const de_RateLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RateLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_RateLimitExceededException(body, context);
  const exception = new RateLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1RedirectExceptionRes
 */
const de_RedirectExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<RedirectException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_RedirectException(body, context);
  const exception = new RedirectException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceLimitExceededExceptionRes
 */
const de_ResourceLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceLimitExceededException(body, context);
  const exception = new ResourceLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotFoundExceptionRes
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
 * deserializeAws_json1_1ServerInternalExceptionRes
 */
const de_ServerInternalExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServerInternalException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServerInternalException(body, context);
  const exception = new ServerInternalException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnsupportedDigitalSignatureMethodExceptionRes
 */
const de_UnsupportedDigitalSignatureMethodExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedDigitalSignatureMethodException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnsupportedDigitalSignatureMethodException(body, context);
  const exception = new UnsupportedDigitalSignatureMethodException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ValidationExceptionRes
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
 * serializeAws_json1_1AcceptGrantRequest
 */
const se_AcceptGrantRequest = (input: AcceptGrantRequest, context: __SerdeContext): any => {
  return {
    ...(input.GrantArn != null && { GrantArn: input.GrantArn }),
  };
};

/**
 * serializeAws_json1_1AllowedOperationList
 */
const se_AllowedOperationList = (input: (AllowedOperation | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ArnList
 */
const se_ArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1BorrowConfiguration
 */
const se_BorrowConfiguration = (input: BorrowConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AllowEarlyCheckIn != null && { AllowEarlyCheckIn: input.AllowEarlyCheckIn }),
    ...(input.MaxTimeToLiveInMinutes != null && { MaxTimeToLiveInMinutes: input.MaxTimeToLiveInMinutes }),
  };
};

/**
 * serializeAws_json1_1CheckInLicenseRequest
 */
const se_CheckInLicenseRequest = (input: CheckInLicenseRequest, context: __SerdeContext): any => {
  return {
    ...(input.Beneficiary != null && { Beneficiary: input.Beneficiary }),
    ...(input.LicenseConsumptionToken != null && { LicenseConsumptionToken: input.LicenseConsumptionToken }),
  };
};

/**
 * serializeAws_json1_1CheckoutBorrowLicenseRequest
 */
const se_CheckoutBorrowLicenseRequest = (input: CheckoutBorrowLicenseRequest, context: __SerdeContext): any => {
  return {
    ...(input.CheckoutMetadata != null && { CheckoutMetadata: se_MetadataList(input.CheckoutMetadata, context) }),
    ...(input.ClientToken != null && { ClientToken: input.ClientToken }),
    ...(input.DigitalSignatureMethod != null && { DigitalSignatureMethod: input.DigitalSignatureMethod }),
    ...(input.Entitlements != null && { Entitlements: se_EntitlementDataList(input.Entitlements, context) }),
    ...(input.LicenseArn != null && { LicenseArn: input.LicenseArn }),
    ...(input.NodeId != null && { NodeId: input.NodeId }),
  };
};

/**
 * serializeAws_json1_1CheckoutLicenseRequest
 */
const se_CheckoutLicenseRequest = (input: CheckoutLicenseRequest, context: __SerdeContext): any => {
  return {
    ...(input.Beneficiary != null && { Beneficiary: input.Beneficiary }),
    ...(input.CheckoutType != null && { CheckoutType: input.CheckoutType }),
    ...(input.ClientToken != null && { ClientToken: input.ClientToken }),
    ...(input.Entitlements != null && { Entitlements: se_EntitlementDataList(input.Entitlements, context) }),
    ...(input.KeyFingerprint != null && { KeyFingerprint: input.KeyFingerprint }),
    ...(input.NodeId != null && { NodeId: input.NodeId }),
    ...(input.ProductSKU != null && { ProductSKU: input.ProductSKU }),
  };
};

/**
 * serializeAws_json1_1ConsumptionConfiguration
 */
const se_ConsumptionConfiguration = (input: ConsumptionConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.BorrowConfiguration != null && {
      BorrowConfiguration: se_BorrowConfiguration(input.BorrowConfiguration, context),
    }),
    ...(input.ProvisionalConfiguration != null && {
      ProvisionalConfiguration: se_ProvisionalConfiguration(input.ProvisionalConfiguration, context),
    }),
    ...(input.RenewType != null && { RenewType: input.RenewType }),
  };
};

/**
 * serializeAws_json1_1CreateGrantRequest
 */
const se_CreateGrantRequest = (input: CreateGrantRequest, context: __SerdeContext): any => {
  return {
    ...(input.AllowedOperations != null && {
      AllowedOperations: se_AllowedOperationList(input.AllowedOperations, context),
    }),
    ...(input.ClientToken != null && { ClientToken: input.ClientToken }),
    ...(input.GrantName != null && { GrantName: input.GrantName }),
    ...(input.HomeRegion != null && { HomeRegion: input.HomeRegion }),
    ...(input.LicenseArn != null && { LicenseArn: input.LicenseArn }),
    ...(input.Principals != null && { Principals: se_PrincipalArnList(input.Principals, context) }),
  };
};

/**
 * serializeAws_json1_1CreateGrantVersionRequest
 */
const se_CreateGrantVersionRequest = (input: CreateGrantVersionRequest, context: __SerdeContext): any => {
  return {
    ...(input.AllowedOperations != null && {
      AllowedOperations: se_AllowedOperationList(input.AllowedOperations, context),
    }),
    ...(input.ClientToken != null && { ClientToken: input.ClientToken }),
    ...(input.GrantArn != null && { GrantArn: input.GrantArn }),
    ...(input.GrantName != null && { GrantName: input.GrantName }),
    ...(input.Options != null && { Options: se_Options(input.Options, context) }),
    ...(input.SourceVersion != null && { SourceVersion: input.SourceVersion }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.StatusReason != null && { StatusReason: input.StatusReason }),
  };
};

/**
 * serializeAws_json1_1CreateLicenseConfigurationRequest
 */
const se_CreateLicenseConfigurationRequest = (
  input: CreateLicenseConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DisassociateWhenNotFound != null && { DisassociateWhenNotFound: input.DisassociateWhenNotFound }),
    ...(input.LicenseCount != null && { LicenseCount: input.LicenseCount }),
    ...(input.LicenseCountHardLimit != null && { LicenseCountHardLimit: input.LicenseCountHardLimit }),
    ...(input.LicenseCountingType != null && { LicenseCountingType: input.LicenseCountingType }),
    ...(input.LicenseRules != null && { LicenseRules: se_StringList(input.LicenseRules, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ProductInformationList != null && {
      ProductInformationList: se_ProductInformationList(input.ProductInformationList, context),
    }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateLicenseConversionTaskForResourceRequest
 */
const se_CreateLicenseConversionTaskForResourceRequest = (
  input: CreateLicenseConversionTaskForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationLicenseContext != null && {
      DestinationLicenseContext: se_LicenseConversionContext(input.DestinationLicenseContext, context),
    }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.SourceLicenseContext != null && {
      SourceLicenseContext: se_LicenseConversionContext(input.SourceLicenseContext, context),
    }),
  };
};

/**
 * serializeAws_json1_1CreateLicenseManagerReportGeneratorRequest
 */
const se_CreateLicenseManagerReportGeneratorRequest = (
  input: CreateLicenseManagerReportGeneratorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientToken != null && { ClientToken: input.ClientToken }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.ReportContext != null && { ReportContext: se_ReportContext(input.ReportContext, context) }),
    ...(input.ReportFrequency != null && { ReportFrequency: se_ReportFrequency(input.ReportFrequency, context) }),
    ...(input.ReportGeneratorName != null && { ReportGeneratorName: input.ReportGeneratorName }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.Type != null && { Type: se_ReportTypeList(input.Type, context) }),
  };
};

/**
 * serializeAws_json1_1CreateLicenseRequest
 */
const se_CreateLicenseRequest = (input: CreateLicenseRequest, context: __SerdeContext): any => {
  return {
    ...(input.Beneficiary != null && { Beneficiary: input.Beneficiary }),
    ...(input.ClientToken != null && { ClientToken: input.ClientToken }),
    ...(input.ConsumptionConfiguration != null && {
      ConsumptionConfiguration: se_ConsumptionConfiguration(input.ConsumptionConfiguration, context),
    }),
    ...(input.Entitlements != null && { Entitlements: se_EntitlementList(input.Entitlements, context) }),
    ...(input.HomeRegion != null && { HomeRegion: input.HomeRegion }),
    ...(input.Issuer != null && { Issuer: se_Issuer(input.Issuer, context) }),
    ...(input.LicenseMetadata != null && { LicenseMetadata: se_MetadataList(input.LicenseMetadata, context) }),
    ...(input.LicenseName != null && { LicenseName: input.LicenseName }),
    ...(input.ProductName != null && { ProductName: input.ProductName }),
    ...(input.ProductSKU != null && { ProductSKU: input.ProductSKU }),
    ...(input.Validity != null && { Validity: se_DatetimeRange(input.Validity, context) }),
  };
};

/**
 * serializeAws_json1_1CreateLicenseVersionRequest
 */
const se_CreateLicenseVersionRequest = (input: CreateLicenseVersionRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientToken != null && { ClientToken: input.ClientToken }),
    ...(input.ConsumptionConfiguration != null && {
      ConsumptionConfiguration: se_ConsumptionConfiguration(input.ConsumptionConfiguration, context),
    }),
    ...(input.Entitlements != null && { Entitlements: se_EntitlementList(input.Entitlements, context) }),
    ...(input.HomeRegion != null && { HomeRegion: input.HomeRegion }),
    ...(input.Issuer != null && { Issuer: se_Issuer(input.Issuer, context) }),
    ...(input.LicenseArn != null && { LicenseArn: input.LicenseArn }),
    ...(input.LicenseMetadata != null && { LicenseMetadata: se_MetadataList(input.LicenseMetadata, context) }),
    ...(input.LicenseName != null && { LicenseName: input.LicenseName }),
    ...(input.ProductName != null && { ProductName: input.ProductName }),
    ...(input.SourceVersion != null && { SourceVersion: input.SourceVersion }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.Validity != null && { Validity: se_DatetimeRange(input.Validity, context) }),
  };
};

/**
 * serializeAws_json1_1CreateTokenRequest
 */
const se_CreateTokenRequest = (input: CreateTokenRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientToken != null && { ClientToken: input.ClientToken }),
    ...(input.ExpirationInDays != null && { ExpirationInDays: input.ExpirationInDays }),
    ...(input.LicenseArn != null && { LicenseArn: input.LicenseArn }),
    ...(input.RoleArns != null && { RoleArns: se_ArnList(input.RoleArns, context) }),
    ...(input.TokenProperties != null && { TokenProperties: se_MaxSize3StringList(input.TokenProperties, context) }),
  };
};

/**
 * serializeAws_json1_1DatetimeRange
 */
const se_DatetimeRange = (input: DatetimeRange, context: __SerdeContext): any => {
  return {
    ...(input.Begin != null && { Begin: input.Begin }),
    ...(input.End != null && { End: input.End }),
  };
};

/**
 * serializeAws_json1_1DeleteGrantRequest
 */
const se_DeleteGrantRequest = (input: DeleteGrantRequest, context: __SerdeContext): any => {
  return {
    ...(input.GrantArn != null && { GrantArn: input.GrantArn }),
    ...(input.StatusReason != null && { StatusReason: input.StatusReason }),
    ...(input.Version != null && { Version: input.Version }),
  };
};

/**
 * serializeAws_json1_1DeleteLicenseConfigurationRequest
 */
const se_DeleteLicenseConfigurationRequest = (
  input: DeleteLicenseConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LicenseConfigurationArn != null && { LicenseConfigurationArn: input.LicenseConfigurationArn }),
  };
};

/**
 * serializeAws_json1_1DeleteLicenseManagerReportGeneratorRequest
 */
const se_DeleteLicenseManagerReportGeneratorRequest = (
  input: DeleteLicenseManagerReportGeneratorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LicenseManagerReportGeneratorArn != null && {
      LicenseManagerReportGeneratorArn: input.LicenseManagerReportGeneratorArn,
    }),
  };
};

/**
 * serializeAws_json1_1DeleteLicenseRequest
 */
const se_DeleteLicenseRequest = (input: DeleteLicenseRequest, context: __SerdeContext): any => {
  return {
    ...(input.LicenseArn != null && { LicenseArn: input.LicenseArn }),
    ...(input.SourceVersion != null && { SourceVersion: input.SourceVersion }),
  };
};

/**
 * serializeAws_json1_1DeleteTokenRequest
 */
const se_DeleteTokenRequest = (input: DeleteTokenRequest, context: __SerdeContext): any => {
  return {
    ...(input.TokenId != null && { TokenId: input.TokenId }),
  };
};

/**
 * serializeAws_json1_1Entitlement
 */
const se_Entitlement = (input: Entitlement, context: __SerdeContext): any => {
  return {
    ...(input.AllowCheckIn != null && { AllowCheckIn: input.AllowCheckIn }),
    ...(input.MaxCount != null && { MaxCount: input.MaxCount }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Overage != null && { Overage: input.Overage }),
    ...(input.Unit != null && { Unit: input.Unit }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1EntitlementData
 */
const se_EntitlementData = (input: EntitlementData, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Unit != null && { Unit: input.Unit }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1EntitlementDataList
 */
const se_EntitlementDataList = (input: EntitlementData[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EntitlementData(entry, context);
    });
};

/**
 * serializeAws_json1_1EntitlementList
 */
const se_EntitlementList = (input: Entitlement[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Entitlement(entry, context);
    });
};

/**
 * serializeAws_json1_1ExtendLicenseConsumptionRequest
 */
const se_ExtendLicenseConsumptionRequest = (input: ExtendLicenseConsumptionRequest, context: __SerdeContext): any => {
  return {
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.LicenseConsumptionToken != null && { LicenseConsumptionToken: input.LicenseConsumptionToken }),
  };
};

/**
 * serializeAws_json1_1Filter
 */
const se_Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: se_FilterValues(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1FilterList
 */
const se_FilterList = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Filter(entry, context);
    });
};

/**
 * serializeAws_json1_1Filters
 */
const se_Filters = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Filter(entry, context);
    });
};

/**
 * serializeAws_json1_1FilterValues
 */
const se_FilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1GetAccessTokenRequest
 */
const se_GetAccessTokenRequest = (input: GetAccessTokenRequest, context: __SerdeContext): any => {
  return {
    ...(input.Token != null && { Token: input.Token }),
    ...(input.TokenProperties != null && { TokenProperties: se_MaxSize3StringList(input.TokenProperties, context) }),
  };
};

/**
 * serializeAws_json1_1GetGrantRequest
 */
const se_GetGrantRequest = (input: GetGrantRequest, context: __SerdeContext): any => {
  return {
    ...(input.GrantArn != null && { GrantArn: input.GrantArn }),
    ...(input.Version != null && { Version: input.Version }),
  };
};

/**
 * serializeAws_json1_1GetLicenseConfigurationRequest
 */
const se_GetLicenseConfigurationRequest = (input: GetLicenseConfigurationRequest, context: __SerdeContext): any => {
  return {
    ...(input.LicenseConfigurationArn != null && { LicenseConfigurationArn: input.LicenseConfigurationArn }),
  };
};

/**
 * serializeAws_json1_1GetLicenseConversionTaskRequest
 */
const se_GetLicenseConversionTaskRequest = (input: GetLicenseConversionTaskRequest, context: __SerdeContext): any => {
  return {
    ...(input.LicenseConversionTaskId != null && { LicenseConversionTaskId: input.LicenseConversionTaskId }),
  };
};

/**
 * serializeAws_json1_1GetLicenseManagerReportGeneratorRequest
 */
const se_GetLicenseManagerReportGeneratorRequest = (
  input: GetLicenseManagerReportGeneratorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LicenseManagerReportGeneratorArn != null && {
      LicenseManagerReportGeneratorArn: input.LicenseManagerReportGeneratorArn,
    }),
  };
};

/**
 * serializeAws_json1_1GetLicenseRequest
 */
const se_GetLicenseRequest = (input: GetLicenseRequest, context: __SerdeContext): any => {
  return {
    ...(input.LicenseArn != null && { LicenseArn: input.LicenseArn }),
    ...(input.Version != null && { Version: input.Version }),
  };
};

/**
 * serializeAws_json1_1GetLicenseUsageRequest
 */
const se_GetLicenseUsageRequest = (input: GetLicenseUsageRequest, context: __SerdeContext): any => {
  return {
    ...(input.LicenseArn != null && { LicenseArn: input.LicenseArn }),
  };
};

/**
 * serializeAws_json1_1GetServiceSettingsRequest
 */
const se_GetServiceSettingsRequest = (input: GetServiceSettingsRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1InventoryFilter
 */
const se_InventoryFilter = (input: InventoryFilter, context: __SerdeContext): any => {
  return {
    ...(input.Condition != null && { Condition: input.Condition }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1InventoryFilterList
 */
const se_InventoryFilterList = (input: InventoryFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InventoryFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1Issuer
 */
const se_Issuer = (input: Issuer, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SignKey != null && { SignKey: input.SignKey }),
  };
};

/**
 * serializeAws_json1_1LicenseConversionContext
 */
const se_LicenseConversionContext = (input: LicenseConversionContext, context: __SerdeContext): any => {
  return {
    ...(input.UsageOperation != null && { UsageOperation: input.UsageOperation }),
  };
};

/**
 * serializeAws_json1_1LicenseSpecification
 */
const se_LicenseSpecification = (input: LicenseSpecification, context: __SerdeContext): any => {
  return {
    ...(input.AmiAssociationScope != null && { AmiAssociationScope: input.AmiAssociationScope }),
    ...(input.LicenseConfigurationArn != null && { LicenseConfigurationArn: input.LicenseConfigurationArn }),
  };
};

/**
 * serializeAws_json1_1LicenseSpecifications
 */
const se_LicenseSpecifications = (input: LicenseSpecification[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_LicenseSpecification(entry, context);
    });
};

/**
 * serializeAws_json1_1ListAssociationsForLicenseConfigurationRequest
 */
const se_ListAssociationsForLicenseConfigurationRequest = (
  input: ListAssociationsForLicenseConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LicenseConfigurationArn != null && { LicenseConfigurationArn: input.LicenseConfigurationArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListDistributedGrantsRequest
 */
const se_ListDistributedGrantsRequest = (input: ListDistributedGrantsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.GrantArns != null && { GrantArns: se_ArnList(input.GrantArns, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListFailuresForLicenseConfigurationOperationsRequest
 */
const se_ListFailuresForLicenseConfigurationOperationsRequest = (
  input: ListFailuresForLicenseConfigurationOperationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LicenseConfigurationArn != null && { LicenseConfigurationArn: input.LicenseConfigurationArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListLicenseConfigurationsRequest
 */
const se_ListLicenseConfigurationsRequest = (input: ListLicenseConfigurationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_Filters(input.Filters, context) }),
    ...(input.LicenseConfigurationArns != null && {
      LicenseConfigurationArns: se_StringList(input.LicenseConfigurationArns, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListLicenseConversionTasksRequest
 */
const se_ListLicenseConversionTasksRequest = (
  input: ListLicenseConversionTasksRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: se_Filters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListLicenseManagerReportGeneratorsRequest
 */
const se_ListLicenseManagerReportGeneratorsRequest = (
  input: ListLicenseManagerReportGeneratorsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListLicenseSpecificationsForResourceRequest
 */
const se_ListLicenseSpecificationsForResourceRequest = (
  input: ListLicenseSpecificationsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1ListLicensesRequest
 */
const se_ListLicensesRequest = (input: ListLicensesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.LicenseArns != null && { LicenseArns: se_ArnList(input.LicenseArns, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListLicenseVersionsRequest
 */
const se_ListLicenseVersionsRequest = (input: ListLicenseVersionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.LicenseArn != null && { LicenseArn: input.LicenseArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListReceivedGrantsForOrganizationRequest
 */
const se_ListReceivedGrantsForOrganizationRequest = (
  input: ListReceivedGrantsForOrganizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.LicenseArn != null && { LicenseArn: input.LicenseArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListReceivedGrantsRequest
 */
const se_ListReceivedGrantsRequest = (input: ListReceivedGrantsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.GrantArns != null && { GrantArns: se_ArnList(input.GrantArns, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListReceivedLicensesForOrganizationRequest
 */
const se_ListReceivedLicensesForOrganizationRequest = (
  input: ListReceivedLicensesForOrganizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListReceivedLicensesRequest
 */
const se_ListReceivedLicensesRequest = (input: ListReceivedLicensesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.LicenseArns != null && { LicenseArns: se_ArnList(input.LicenseArns, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListResourceInventoryRequest
 */
const se_ListResourceInventoryRequest = (input: ListResourceInventoryRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_InventoryFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1ListTokensRequest
 */
const se_ListTokensRequest = (input: ListTokensRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.TokenIds != null && { TokenIds: se_StringList(input.TokenIds, context) }),
  };
};

/**
 * serializeAws_json1_1ListUsageForLicenseConfigurationRequest
 */
const se_ListUsageForLicenseConfigurationRequest = (
  input: ListUsageForLicenseConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: se_Filters(input.Filters, context) }),
    ...(input.LicenseConfigurationArn != null && { LicenseConfigurationArn: input.LicenseConfigurationArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1MaxSize3StringList
 */
const se_MaxSize3StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Metadata
 */
const se_Metadata = (input: Metadata, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1MetadataList
 */
const se_MetadataList = (input: Metadata[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Metadata(entry, context);
    });
};

/**
 * serializeAws_json1_1Options
 */
const se_Options = (input: Options, context: __SerdeContext): any => {
  return {
    ...(input.ActivationOverrideBehavior != null && { ActivationOverrideBehavior: input.ActivationOverrideBehavior }),
  };
};

/**
 * serializeAws_json1_1OrganizationConfiguration
 */
const se_OrganizationConfiguration = (input: OrganizationConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.EnableIntegration != null && { EnableIntegration: input.EnableIntegration }),
  };
};

/**
 * serializeAws_json1_1PrincipalArnList
 */
const se_PrincipalArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ProductInformation
 */
const se_ProductInformation = (input: ProductInformation, context: __SerdeContext): any => {
  return {
    ...(input.ProductInformationFilterList != null && {
      ProductInformationFilterList: se_ProductInformationFilterList(input.ProductInformationFilterList, context),
    }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
  };
};

/**
 * serializeAws_json1_1ProductInformationFilter
 */
const se_ProductInformationFilter = (input: ProductInformationFilter, context: __SerdeContext): any => {
  return {
    ...(input.ProductInformationFilterComparator != null && {
      ProductInformationFilterComparator: input.ProductInformationFilterComparator,
    }),
    ...(input.ProductInformationFilterName != null && {
      ProductInformationFilterName: input.ProductInformationFilterName,
    }),
    ...(input.ProductInformationFilterValue != null && {
      ProductInformationFilterValue: se_StringList(input.ProductInformationFilterValue, context),
    }),
  };
};

/**
 * serializeAws_json1_1ProductInformationFilterList
 */
const se_ProductInformationFilterList = (input: ProductInformationFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ProductInformationFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1ProductInformationList
 */
const se_ProductInformationList = (input: ProductInformation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ProductInformation(entry, context);
    });
};

/**
 * serializeAws_json1_1ProvisionalConfiguration
 */
const se_ProvisionalConfiguration = (input: ProvisionalConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.MaxTimeToLiveInMinutes != null && { MaxTimeToLiveInMinutes: input.MaxTimeToLiveInMinutes }),
  };
};

/**
 * serializeAws_json1_1RejectGrantRequest
 */
const se_RejectGrantRequest = (input: RejectGrantRequest, context: __SerdeContext): any => {
  return {
    ...(input.GrantArn != null && { GrantArn: input.GrantArn }),
  };
};

/**
 * serializeAws_json1_1ReportContext
 */
const se_ReportContext = (input: ReportContext, context: __SerdeContext): any => {
  return {
    ...(input.licenseConfigurationArns != null && {
      licenseConfigurationArns: se_ArnList(input.licenseConfigurationArns, context),
    }),
  };
};

/**
 * serializeAws_json1_1ReportFrequency
 */
const se_ReportFrequency = (input: ReportFrequency, context: __SerdeContext): any => {
  return {
    ...(input.period != null && { period: input.period }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_json1_1ReportTypeList
 */
const se_ReportTypeList = (input: (ReportType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1StringList
 */
const se_StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateLicenseConfigurationRequest
 */
const se_UpdateLicenseConfigurationRequest = (
  input: UpdateLicenseConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DisassociateWhenNotFound != null && { DisassociateWhenNotFound: input.DisassociateWhenNotFound }),
    ...(input.LicenseConfigurationArn != null && { LicenseConfigurationArn: input.LicenseConfigurationArn }),
    ...(input.LicenseConfigurationStatus != null && { LicenseConfigurationStatus: input.LicenseConfigurationStatus }),
    ...(input.LicenseCount != null && { LicenseCount: input.LicenseCount }),
    ...(input.LicenseCountHardLimit != null && { LicenseCountHardLimit: input.LicenseCountHardLimit }),
    ...(input.LicenseRules != null && { LicenseRules: se_StringList(input.LicenseRules, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ProductInformationList != null && {
      ProductInformationList: se_ProductInformationList(input.ProductInformationList, context),
    }),
  };
};

/**
 * serializeAws_json1_1UpdateLicenseManagerReportGeneratorRequest
 */
const se_UpdateLicenseManagerReportGeneratorRequest = (
  input: UpdateLicenseManagerReportGeneratorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientToken != null && { ClientToken: input.ClientToken }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.LicenseManagerReportGeneratorArn != null && {
      LicenseManagerReportGeneratorArn: input.LicenseManagerReportGeneratorArn,
    }),
    ...(input.ReportContext != null && { ReportContext: se_ReportContext(input.ReportContext, context) }),
    ...(input.ReportFrequency != null && { ReportFrequency: se_ReportFrequency(input.ReportFrequency, context) }),
    ...(input.ReportGeneratorName != null && { ReportGeneratorName: input.ReportGeneratorName }),
    ...(input.Type != null && { Type: se_ReportTypeList(input.Type, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateLicenseSpecificationsForResourceRequest
 */
const se_UpdateLicenseSpecificationsForResourceRequest = (
  input: UpdateLicenseSpecificationsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AddLicenseSpecifications != null && {
      AddLicenseSpecifications: se_LicenseSpecifications(input.AddLicenseSpecifications, context),
    }),
    ...(input.RemoveLicenseSpecifications != null && {
      RemoveLicenseSpecifications: se_LicenseSpecifications(input.RemoveLicenseSpecifications, context),
    }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1UpdateServiceSettingsRequest
 */
const se_UpdateServiceSettingsRequest = (input: UpdateServiceSettingsRequest, context: __SerdeContext): any => {
  return {
    ...(input.EnableCrossAccountsDiscovery != null && {
      EnableCrossAccountsDiscovery: input.EnableCrossAccountsDiscovery,
    }),
    ...(input.OrganizationConfiguration != null && {
      OrganizationConfiguration: se_OrganizationConfiguration(input.OrganizationConfiguration, context),
    }),
    ...(input.S3BucketArn != null && { S3BucketArn: input.S3BucketArn }),
    ...(input.SnsTopicArn != null && { SnsTopicArn: input.SnsTopicArn }),
  };
};

/**
 * deserializeAws_json1_1AcceptGrantResponse
 */
const de_AcceptGrantResponse = (output: any, context: __SerdeContext): AcceptGrantResponse => {
  return {
    GrantArn: __expectString(output.GrantArn),
    Status: __expectString(output.Status),
    Version: __expectString(output.Version),
  } as any;
};

/**
 * deserializeAws_json1_1AccessDeniedException
 */
const de_AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1AllowedOperationList
 */
const de_AllowedOperationList = (output: any, context: __SerdeContext): (AllowedOperation | string)[] => {
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
 * deserializeAws_json1_1ArnList
 */
const de_ArnList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1AuthorizationException
 */
const de_AuthorizationException = (output: any, context: __SerdeContext): AuthorizationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1AutomatedDiscoveryInformation
 */
const de_AutomatedDiscoveryInformation = (output: any, context: __SerdeContext): AutomatedDiscoveryInformation => {
  return {
    LastRunTime:
      output.LastRunTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastRunTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BorrowConfiguration
 */
const de_BorrowConfiguration = (output: any, context: __SerdeContext): BorrowConfiguration => {
  return {
    AllowEarlyCheckIn: __expectBoolean(output.AllowEarlyCheckIn),
    MaxTimeToLiveInMinutes: __expectInt32(output.MaxTimeToLiveInMinutes),
  } as any;
};

/**
 * deserializeAws_json1_1CheckInLicenseResponse
 */
const de_CheckInLicenseResponse = (output: any, context: __SerdeContext): CheckInLicenseResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1CheckoutBorrowLicenseResponse
 */
const de_CheckoutBorrowLicenseResponse = (output: any, context: __SerdeContext): CheckoutBorrowLicenseResponse => {
  return {
    CheckoutMetadata: output.CheckoutMetadata != null ? de_MetadataList(output.CheckoutMetadata, context) : undefined,
    EntitlementsAllowed:
      output.EntitlementsAllowed != null ? de_EntitlementDataList(output.EntitlementsAllowed, context) : undefined,
    Expiration: __expectString(output.Expiration),
    IssuedAt: __expectString(output.IssuedAt),
    LicenseArn: __expectString(output.LicenseArn),
    LicenseConsumptionToken: __expectString(output.LicenseConsumptionToken),
    NodeId: __expectString(output.NodeId),
    SignedToken: __expectString(output.SignedToken),
  } as any;
};

/**
 * deserializeAws_json1_1CheckoutLicenseResponse
 */
const de_CheckoutLicenseResponse = (output: any, context: __SerdeContext): CheckoutLicenseResponse => {
  return {
    CheckoutType: __expectString(output.CheckoutType),
    EntitlementsAllowed:
      output.EntitlementsAllowed != null ? de_EntitlementDataList(output.EntitlementsAllowed, context) : undefined,
    Expiration: __expectString(output.Expiration),
    IssuedAt: __expectString(output.IssuedAt),
    LicenseArn: __expectString(output.LicenseArn),
    LicenseConsumptionToken: __expectString(output.LicenseConsumptionToken),
    NodeId: __expectString(output.NodeId),
    SignedToken: __expectString(output.SignedToken),
  } as any;
};

/**
 * deserializeAws_json1_1ConflictException
 */
const de_ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ConsumedLicenseSummary
 */
const de_ConsumedLicenseSummary = (output: any, context: __SerdeContext): ConsumedLicenseSummary => {
  return {
    ConsumedLicenses: __expectLong(output.ConsumedLicenses),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

/**
 * deserializeAws_json1_1ConsumedLicenseSummaryList
 */
const de_ConsumedLicenseSummaryList = (output: any, context: __SerdeContext): ConsumedLicenseSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConsumedLicenseSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConsumptionConfiguration
 */
const de_ConsumptionConfiguration = (output: any, context: __SerdeContext): ConsumptionConfiguration => {
  return {
    BorrowConfiguration:
      output.BorrowConfiguration != null ? de_BorrowConfiguration(output.BorrowConfiguration, context) : undefined,
    ProvisionalConfiguration:
      output.ProvisionalConfiguration != null
        ? de_ProvisionalConfiguration(output.ProvisionalConfiguration, context)
        : undefined,
    RenewType: __expectString(output.RenewType),
  } as any;
};

/**
 * deserializeAws_json1_1CreateGrantResponse
 */
const de_CreateGrantResponse = (output: any, context: __SerdeContext): CreateGrantResponse => {
  return {
    GrantArn: __expectString(output.GrantArn),
    Status: __expectString(output.Status),
    Version: __expectString(output.Version),
  } as any;
};

/**
 * deserializeAws_json1_1CreateGrantVersionResponse
 */
const de_CreateGrantVersionResponse = (output: any, context: __SerdeContext): CreateGrantVersionResponse => {
  return {
    GrantArn: __expectString(output.GrantArn),
    Status: __expectString(output.Status),
    Version: __expectString(output.Version),
  } as any;
};

/**
 * deserializeAws_json1_1CreateLicenseConfigurationResponse
 */
const de_CreateLicenseConfigurationResponse = (
  output: any,
  context: __SerdeContext
): CreateLicenseConfigurationResponse => {
  return {
    LicenseConfigurationArn: __expectString(output.LicenseConfigurationArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateLicenseConversionTaskForResourceResponse
 */
const de_CreateLicenseConversionTaskForResourceResponse = (
  output: any,
  context: __SerdeContext
): CreateLicenseConversionTaskForResourceResponse => {
  return {
    LicenseConversionTaskId: __expectString(output.LicenseConversionTaskId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateLicenseManagerReportGeneratorResponse
 */
const de_CreateLicenseManagerReportGeneratorResponse = (
  output: any,
  context: __SerdeContext
): CreateLicenseManagerReportGeneratorResponse => {
  return {
    LicenseManagerReportGeneratorArn: __expectString(output.LicenseManagerReportGeneratorArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateLicenseResponse
 */
const de_CreateLicenseResponse = (output: any, context: __SerdeContext): CreateLicenseResponse => {
  return {
    LicenseArn: __expectString(output.LicenseArn),
    Status: __expectString(output.Status),
    Version: __expectString(output.Version),
  } as any;
};

/**
 * deserializeAws_json1_1CreateLicenseVersionResponse
 */
const de_CreateLicenseVersionResponse = (output: any, context: __SerdeContext): CreateLicenseVersionResponse => {
  return {
    LicenseArn: __expectString(output.LicenseArn),
    Status: __expectString(output.Status),
    Version: __expectString(output.Version),
  } as any;
};

/**
 * deserializeAws_json1_1CreateTokenResponse
 */
const de_CreateTokenResponse = (output: any, context: __SerdeContext): CreateTokenResponse => {
  return {
    Token: __expectString(output.Token),
    TokenId: __expectString(output.TokenId),
    TokenType: __expectString(output.TokenType),
  } as any;
};

/**
 * deserializeAws_json1_1DatetimeRange
 */
const de_DatetimeRange = (output: any, context: __SerdeContext): DatetimeRange => {
  return {
    Begin: __expectString(output.Begin),
    End: __expectString(output.End),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteGrantResponse
 */
const de_DeleteGrantResponse = (output: any, context: __SerdeContext): DeleteGrantResponse => {
  return {
    GrantArn: __expectString(output.GrantArn),
    Status: __expectString(output.Status),
    Version: __expectString(output.Version),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteLicenseConfigurationResponse
 */
const de_DeleteLicenseConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteLicenseConfigurationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteLicenseManagerReportGeneratorResponse
 */
const de_DeleteLicenseManagerReportGeneratorResponse = (
  output: any,
  context: __SerdeContext
): DeleteLicenseManagerReportGeneratorResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteLicenseResponse
 */
const de_DeleteLicenseResponse = (output: any, context: __SerdeContext): DeleteLicenseResponse => {
  return {
    DeletionDate: __expectString(output.DeletionDate),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteTokenResponse
 */
const de_DeleteTokenResponse = (output: any, context: __SerdeContext): DeleteTokenResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1Entitlement
 */
const de_Entitlement = (output: any, context: __SerdeContext): Entitlement => {
  return {
    AllowCheckIn: __expectBoolean(output.AllowCheckIn),
    MaxCount: __expectLong(output.MaxCount),
    Name: __expectString(output.Name),
    Overage: __expectBoolean(output.Overage),
    Unit: __expectString(output.Unit),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1EntitlementData
 */
const de_EntitlementData = (output: any, context: __SerdeContext): EntitlementData => {
  return {
    Name: __expectString(output.Name),
    Unit: __expectString(output.Unit),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1EntitlementDataList
 */
const de_EntitlementDataList = (output: any, context: __SerdeContext): EntitlementData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EntitlementData(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EntitlementList
 */
const de_EntitlementList = (output: any, context: __SerdeContext): Entitlement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Entitlement(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EntitlementNotAllowedException
 */
const de_EntitlementNotAllowedException = (output: any, context: __SerdeContext): EntitlementNotAllowedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1EntitlementUsage
 */
const de_EntitlementUsage = (output: any, context: __SerdeContext): EntitlementUsage => {
  return {
    ConsumedValue: __expectString(output.ConsumedValue),
    MaxCount: __expectString(output.MaxCount),
    Name: __expectString(output.Name),
    Unit: __expectString(output.Unit),
  } as any;
};

/**
 * deserializeAws_json1_1EntitlementUsageList
 */
const de_EntitlementUsageList = (output: any, context: __SerdeContext): EntitlementUsage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EntitlementUsage(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ExtendLicenseConsumptionResponse
 */
const de_ExtendLicenseConsumptionResponse = (
  output: any,
  context: __SerdeContext
): ExtendLicenseConsumptionResponse => {
  return {
    Expiration: __expectString(output.Expiration),
    LicenseConsumptionToken: __expectString(output.LicenseConsumptionToken),
  } as any;
};

/**
 * deserializeAws_json1_1FailedDependencyException
 */
const de_FailedDependencyException = (output: any, context: __SerdeContext): FailedDependencyException => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1FilterLimitExceededException
 */
const de_FilterLimitExceededException = (output: any, context: __SerdeContext): FilterLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1GetAccessTokenResponse
 */
const de_GetAccessTokenResponse = (output: any, context: __SerdeContext): GetAccessTokenResponse => {
  return {
    AccessToken: __expectString(output.AccessToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetGrantResponse
 */
const de_GetGrantResponse = (output: any, context: __SerdeContext): GetGrantResponse => {
  return {
    Grant: output.Grant != null ? de_Grant(output.Grant, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetLicenseConfigurationResponse
 */
const de_GetLicenseConfigurationResponse = (output: any, context: __SerdeContext): GetLicenseConfigurationResponse => {
  return {
    AutomatedDiscoveryInformation:
      output.AutomatedDiscoveryInformation != null
        ? de_AutomatedDiscoveryInformation(output.AutomatedDiscoveryInformation, context)
        : undefined,
    ConsumedLicenseSummaryList:
      output.ConsumedLicenseSummaryList != null
        ? de_ConsumedLicenseSummaryList(output.ConsumedLicenseSummaryList, context)
        : undefined,
    ConsumedLicenses: __expectLong(output.ConsumedLicenses),
    Description: __expectString(output.Description),
    DisassociateWhenNotFound: __expectBoolean(output.DisassociateWhenNotFound),
    LicenseConfigurationArn: __expectString(output.LicenseConfigurationArn),
    LicenseConfigurationId: __expectString(output.LicenseConfigurationId),
    LicenseCount: __expectLong(output.LicenseCount),
    LicenseCountHardLimit: __expectBoolean(output.LicenseCountHardLimit),
    LicenseCountingType: __expectString(output.LicenseCountingType),
    LicenseRules: output.LicenseRules != null ? de_StringList(output.LicenseRules, context) : undefined,
    ManagedResourceSummaryList:
      output.ManagedResourceSummaryList != null
        ? de_ManagedResourceSummaryList(output.ManagedResourceSummaryList, context)
        : undefined,
    Name: __expectString(output.Name),
    OwnerAccountId: __expectString(output.OwnerAccountId),
    ProductInformationList:
      output.ProductInformationList != null
        ? de_ProductInformationList(output.ProductInformationList, context)
        : undefined,
    Status: __expectString(output.Status),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetLicenseConversionTaskResponse
 */
const de_GetLicenseConversionTaskResponse = (
  output: any,
  context: __SerdeContext
): GetLicenseConversionTaskResponse => {
  return {
    DestinationLicenseContext:
      output.DestinationLicenseContext != null
        ? de_LicenseConversionContext(output.DestinationLicenseContext, context)
        : undefined,
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    LicenseConversionTaskId: __expectString(output.LicenseConversionTaskId),
    LicenseConversionTime:
      output.LicenseConversionTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LicenseConversionTime)))
        : undefined,
    ResourceArn: __expectString(output.ResourceArn),
    SourceLicenseContext:
      output.SourceLicenseContext != null
        ? de_LicenseConversionContext(output.SourceLicenseContext, context)
        : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

/**
 * deserializeAws_json1_1GetLicenseManagerReportGeneratorResponse
 */
const de_GetLicenseManagerReportGeneratorResponse = (
  output: any,
  context: __SerdeContext
): GetLicenseManagerReportGeneratorResponse => {
  return {
    ReportGenerator: output.ReportGenerator != null ? de_ReportGenerator(output.ReportGenerator, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetLicenseResponse
 */
const de_GetLicenseResponse = (output: any, context: __SerdeContext): GetLicenseResponse => {
  return {
    License: output.License != null ? de_License(output.License, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetLicenseUsageResponse
 */
const de_GetLicenseUsageResponse = (output: any, context: __SerdeContext): GetLicenseUsageResponse => {
  return {
    LicenseUsage: output.LicenseUsage != null ? de_LicenseUsage(output.LicenseUsage, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetServiceSettingsResponse
 */
const de_GetServiceSettingsResponse = (output: any, context: __SerdeContext): GetServiceSettingsResponse => {
  return {
    EnableCrossAccountsDiscovery: __expectBoolean(output.EnableCrossAccountsDiscovery),
    LicenseManagerResourceShareArn: __expectString(output.LicenseManagerResourceShareArn),
    OrganizationConfiguration:
      output.OrganizationConfiguration != null
        ? de_OrganizationConfiguration(output.OrganizationConfiguration, context)
        : undefined,
    S3BucketArn: __expectString(output.S3BucketArn),
    SnsTopicArn: __expectString(output.SnsTopicArn),
  } as any;
};

/**
 * deserializeAws_json1_1Grant
 */
const de_Grant = (output: any, context: __SerdeContext): Grant => {
  return {
    GrantArn: __expectString(output.GrantArn),
    GrantName: __expectString(output.GrantName),
    GrantStatus: __expectString(output.GrantStatus),
    GrantedOperations:
      output.GrantedOperations != null ? de_AllowedOperationList(output.GrantedOperations, context) : undefined,
    GranteePrincipalArn: __expectString(output.GranteePrincipalArn),
    HomeRegion: __expectString(output.HomeRegion),
    LicenseArn: __expectString(output.LicenseArn),
    Options: output.Options != null ? de_Options(output.Options, context) : undefined,
    ParentArn: __expectString(output.ParentArn),
    StatusReason: __expectString(output.StatusReason),
    Version: __expectString(output.Version),
  } as any;
};

/**
 * deserializeAws_json1_1GrantedLicense
 */
const de_GrantedLicense = (output: any, context: __SerdeContext): GrantedLicense => {
  return {
    Beneficiary: __expectString(output.Beneficiary),
    ConsumptionConfiguration:
      output.ConsumptionConfiguration != null
        ? de_ConsumptionConfiguration(output.ConsumptionConfiguration, context)
        : undefined,
    CreateTime: __expectString(output.CreateTime),
    Entitlements: output.Entitlements != null ? de_EntitlementList(output.Entitlements, context) : undefined,
    HomeRegion: __expectString(output.HomeRegion),
    Issuer: output.Issuer != null ? de_IssuerDetails(output.Issuer, context) : undefined,
    LicenseArn: __expectString(output.LicenseArn),
    LicenseMetadata: output.LicenseMetadata != null ? de_MetadataList(output.LicenseMetadata, context) : undefined,
    LicenseName: __expectString(output.LicenseName),
    ProductName: __expectString(output.ProductName),
    ProductSKU: __expectString(output.ProductSKU),
    ReceivedMetadata:
      output.ReceivedMetadata != null ? de_ReceivedMetadata(output.ReceivedMetadata, context) : undefined,
    Status: __expectString(output.Status),
    Validity: output.Validity != null ? de_DatetimeRange(output.Validity, context) : undefined,
    Version: __expectString(output.Version),
  } as any;
};

/**
 * deserializeAws_json1_1GrantedLicenseList
 */
const de_GrantedLicenseList = (output: any, context: __SerdeContext): GrantedLicense[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GrantedLicense(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GrantList
 */
const de_GrantList = (output: any, context: __SerdeContext): Grant[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Grant(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InvalidParameterValueException
 */
const de_InvalidParameterValueException = (output: any, context: __SerdeContext): InvalidParameterValueException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidResourceStateException
 */
const de_InvalidResourceStateException = (output: any, context: __SerdeContext): InvalidResourceStateException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1IssuerDetails
 */
const de_IssuerDetails = (output: any, context: __SerdeContext): IssuerDetails => {
  return {
    KeyFingerprint: __expectString(output.KeyFingerprint),
    Name: __expectString(output.Name),
    SignKey: __expectString(output.SignKey),
  } as any;
};

/**
 * deserializeAws_json1_1License
 */
const de_License = (output: any, context: __SerdeContext): License => {
  return {
    Beneficiary: __expectString(output.Beneficiary),
    ConsumptionConfiguration:
      output.ConsumptionConfiguration != null
        ? de_ConsumptionConfiguration(output.ConsumptionConfiguration, context)
        : undefined,
    CreateTime: __expectString(output.CreateTime),
    Entitlements: output.Entitlements != null ? de_EntitlementList(output.Entitlements, context) : undefined,
    HomeRegion: __expectString(output.HomeRegion),
    Issuer: output.Issuer != null ? de_IssuerDetails(output.Issuer, context) : undefined,
    LicenseArn: __expectString(output.LicenseArn),
    LicenseMetadata: output.LicenseMetadata != null ? de_MetadataList(output.LicenseMetadata, context) : undefined,
    LicenseName: __expectString(output.LicenseName),
    ProductName: __expectString(output.ProductName),
    ProductSKU: __expectString(output.ProductSKU),
    Status: __expectString(output.Status),
    Validity: output.Validity != null ? de_DatetimeRange(output.Validity, context) : undefined,
    Version: __expectString(output.Version),
  } as any;
};

/**
 * deserializeAws_json1_1LicenseConfiguration
 */
const de_LicenseConfiguration = (output: any, context: __SerdeContext): LicenseConfiguration => {
  return {
    AutomatedDiscoveryInformation:
      output.AutomatedDiscoveryInformation != null
        ? de_AutomatedDiscoveryInformation(output.AutomatedDiscoveryInformation, context)
        : undefined,
    ConsumedLicenseSummaryList:
      output.ConsumedLicenseSummaryList != null
        ? de_ConsumedLicenseSummaryList(output.ConsumedLicenseSummaryList, context)
        : undefined,
    ConsumedLicenses: __expectLong(output.ConsumedLicenses),
    Description: __expectString(output.Description),
    DisassociateWhenNotFound: __expectBoolean(output.DisassociateWhenNotFound),
    LicenseConfigurationArn: __expectString(output.LicenseConfigurationArn),
    LicenseConfigurationId: __expectString(output.LicenseConfigurationId),
    LicenseCount: __expectLong(output.LicenseCount),
    LicenseCountHardLimit: __expectBoolean(output.LicenseCountHardLimit),
    LicenseCountingType: __expectString(output.LicenseCountingType),
    LicenseRules: output.LicenseRules != null ? de_StringList(output.LicenseRules, context) : undefined,
    ManagedResourceSummaryList:
      output.ManagedResourceSummaryList != null
        ? de_ManagedResourceSummaryList(output.ManagedResourceSummaryList, context)
        : undefined,
    Name: __expectString(output.Name),
    OwnerAccountId: __expectString(output.OwnerAccountId),
    ProductInformationList:
      output.ProductInformationList != null
        ? de_ProductInformationList(output.ProductInformationList, context)
        : undefined,
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1LicenseConfigurationAssociation
 */
const de_LicenseConfigurationAssociation = (output: any, context: __SerdeContext): LicenseConfigurationAssociation => {
  return {
    AmiAssociationScope: __expectString(output.AmiAssociationScope),
    AssociationTime:
      output.AssociationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.AssociationTime)))
        : undefined,
    ResourceArn: __expectString(output.ResourceArn),
    ResourceOwnerId: __expectString(output.ResourceOwnerId),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

/**
 * deserializeAws_json1_1LicenseConfigurationAssociations
 */
const de_LicenseConfigurationAssociations = (
  output: any,
  context: __SerdeContext
): LicenseConfigurationAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LicenseConfigurationAssociation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LicenseConfigurations
 */
const de_LicenseConfigurations = (output: any, context: __SerdeContext): LicenseConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LicenseConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LicenseConfigurationUsage
 */
const de_LicenseConfigurationUsage = (output: any, context: __SerdeContext): LicenseConfigurationUsage => {
  return {
    AssociationTime:
      output.AssociationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.AssociationTime)))
        : undefined,
    ConsumedLicenses: __expectLong(output.ConsumedLicenses),
    ResourceArn: __expectString(output.ResourceArn),
    ResourceOwnerId: __expectString(output.ResourceOwnerId),
    ResourceStatus: __expectString(output.ResourceStatus),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

/**
 * deserializeAws_json1_1LicenseConfigurationUsageList
 */
const de_LicenseConfigurationUsageList = (output: any, context: __SerdeContext): LicenseConfigurationUsage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LicenseConfigurationUsage(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LicenseConversionContext
 */
const de_LicenseConversionContext = (output: any, context: __SerdeContext): LicenseConversionContext => {
  return {
    UsageOperation: __expectString(output.UsageOperation),
  } as any;
};

/**
 * deserializeAws_json1_1LicenseConversionTask
 */
const de_LicenseConversionTask = (output: any, context: __SerdeContext): LicenseConversionTask => {
  return {
    DestinationLicenseContext:
      output.DestinationLicenseContext != null
        ? de_LicenseConversionContext(output.DestinationLicenseContext, context)
        : undefined,
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    LicenseConversionTaskId: __expectString(output.LicenseConversionTaskId),
    LicenseConversionTime:
      output.LicenseConversionTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LicenseConversionTime)))
        : undefined,
    ResourceArn: __expectString(output.ResourceArn),
    SourceLicenseContext:
      output.SourceLicenseContext != null
        ? de_LicenseConversionContext(output.SourceLicenseContext, context)
        : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

/**
 * deserializeAws_json1_1LicenseConversionTasks
 */
const de_LicenseConversionTasks = (output: any, context: __SerdeContext): LicenseConversionTask[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LicenseConversionTask(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LicenseList
 */
const de_LicenseList = (output: any, context: __SerdeContext): License[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_License(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LicenseOperationFailure
 */
const de_LicenseOperationFailure = (output: any, context: __SerdeContext): LicenseOperationFailure => {
  return {
    ErrorMessage: __expectString(output.ErrorMessage),
    FailureTime:
      output.FailureTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.FailureTime)))
        : undefined,
    MetadataList: output.MetadataList != null ? de_MetadataList(output.MetadataList, context) : undefined,
    OperationName: __expectString(output.OperationName),
    OperationRequestedBy: __expectString(output.OperationRequestedBy),
    ResourceArn: __expectString(output.ResourceArn),
    ResourceOwnerId: __expectString(output.ResourceOwnerId),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

/**
 * deserializeAws_json1_1LicenseOperationFailureList
 */
const de_LicenseOperationFailureList = (output: any, context: __SerdeContext): LicenseOperationFailure[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LicenseOperationFailure(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LicenseSpecification
 */
const de_LicenseSpecification = (output: any, context: __SerdeContext): LicenseSpecification => {
  return {
    AmiAssociationScope: __expectString(output.AmiAssociationScope),
    LicenseConfigurationArn: __expectString(output.LicenseConfigurationArn),
  } as any;
};

/**
 * deserializeAws_json1_1LicenseSpecifications
 */
const de_LicenseSpecifications = (output: any, context: __SerdeContext): LicenseSpecification[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LicenseSpecification(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LicenseUsage
 */
const de_LicenseUsage = (output: any, context: __SerdeContext): LicenseUsage => {
  return {
    EntitlementUsages:
      output.EntitlementUsages != null ? de_EntitlementUsageList(output.EntitlementUsages, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LicenseUsageException
 */
const de_LicenseUsageException = (output: any, context: __SerdeContext): LicenseUsageException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ListAssociationsForLicenseConfigurationResponse
 */
const de_ListAssociationsForLicenseConfigurationResponse = (
  output: any,
  context: __SerdeContext
): ListAssociationsForLicenseConfigurationResponse => {
  return {
    LicenseConfigurationAssociations:
      output.LicenseConfigurationAssociations != null
        ? de_LicenseConfigurationAssociations(output.LicenseConfigurationAssociations, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListDistributedGrantsResponse
 */
const de_ListDistributedGrantsResponse = (output: any, context: __SerdeContext): ListDistributedGrantsResponse => {
  return {
    Grants: output.Grants != null ? de_GrantList(output.Grants, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListFailuresForLicenseConfigurationOperationsResponse
 */
const de_ListFailuresForLicenseConfigurationOperationsResponse = (
  output: any,
  context: __SerdeContext
): ListFailuresForLicenseConfigurationOperationsResponse => {
  return {
    LicenseOperationFailureList:
      output.LicenseOperationFailureList != null
        ? de_LicenseOperationFailureList(output.LicenseOperationFailureList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListLicenseConfigurationsResponse
 */
const de_ListLicenseConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): ListLicenseConfigurationsResponse => {
  return {
    LicenseConfigurations:
      output.LicenseConfigurations != null
        ? de_LicenseConfigurations(output.LicenseConfigurations, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListLicenseConversionTasksResponse
 */
const de_ListLicenseConversionTasksResponse = (
  output: any,
  context: __SerdeContext
): ListLicenseConversionTasksResponse => {
  return {
    LicenseConversionTasks:
      output.LicenseConversionTasks != null
        ? de_LicenseConversionTasks(output.LicenseConversionTasks, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListLicenseManagerReportGeneratorsResponse
 */
const de_ListLicenseManagerReportGeneratorsResponse = (
  output: any,
  context: __SerdeContext
): ListLicenseManagerReportGeneratorsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ReportGenerators:
      output.ReportGenerators != null ? de_ReportGeneratorList(output.ReportGenerators, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListLicenseSpecificationsForResourceResponse
 */
const de_ListLicenseSpecificationsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListLicenseSpecificationsForResourceResponse => {
  return {
    LicenseSpecifications:
      output.LicenseSpecifications != null
        ? de_LicenseSpecifications(output.LicenseSpecifications, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListLicensesResponse
 */
const de_ListLicensesResponse = (output: any, context: __SerdeContext): ListLicensesResponse => {
  return {
    Licenses: output.Licenses != null ? de_LicenseList(output.Licenses, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListLicenseVersionsResponse
 */
const de_ListLicenseVersionsResponse = (output: any, context: __SerdeContext): ListLicenseVersionsResponse => {
  return {
    Licenses: output.Licenses != null ? de_LicenseList(output.Licenses, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListReceivedGrantsForOrganizationResponse
 */
const de_ListReceivedGrantsForOrganizationResponse = (
  output: any,
  context: __SerdeContext
): ListReceivedGrantsForOrganizationResponse => {
  return {
    Grants: output.Grants != null ? de_GrantList(output.Grants, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListReceivedGrantsResponse
 */
const de_ListReceivedGrantsResponse = (output: any, context: __SerdeContext): ListReceivedGrantsResponse => {
  return {
    Grants: output.Grants != null ? de_GrantList(output.Grants, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListReceivedLicensesForOrganizationResponse
 */
const de_ListReceivedLicensesForOrganizationResponse = (
  output: any,
  context: __SerdeContext
): ListReceivedLicensesForOrganizationResponse => {
  return {
    Licenses: output.Licenses != null ? de_GrantedLicenseList(output.Licenses, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListReceivedLicensesResponse
 */
const de_ListReceivedLicensesResponse = (output: any, context: __SerdeContext): ListReceivedLicensesResponse => {
  return {
    Licenses: output.Licenses != null ? de_GrantedLicenseList(output.Licenses, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListResourceInventoryResponse
 */
const de_ListResourceInventoryResponse = (output: any, context: __SerdeContext): ListResourceInventoryResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ResourceInventoryList:
      output.ResourceInventoryList != null
        ? de_ResourceInventoryList(output.ResourceInventoryList, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTokensResponse
 */
const de_ListTokensResponse = (output: any, context: __SerdeContext): ListTokensResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Tokens: output.Tokens != null ? de_TokenList(output.Tokens, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListUsageForLicenseConfigurationResponse
 */
const de_ListUsageForLicenseConfigurationResponse = (
  output: any,
  context: __SerdeContext
): ListUsageForLicenseConfigurationResponse => {
  return {
    LicenseConfigurationUsageList:
      output.LicenseConfigurationUsageList != null
        ? de_LicenseConfigurationUsageList(output.LicenseConfigurationUsageList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ManagedResourceSummary
 */
const de_ManagedResourceSummary = (output: any, context: __SerdeContext): ManagedResourceSummary => {
  return {
    AssociationCount: __expectLong(output.AssociationCount),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

/**
 * deserializeAws_json1_1ManagedResourceSummaryList
 */
const de_ManagedResourceSummaryList = (output: any, context: __SerdeContext): ManagedResourceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ManagedResourceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MaxSize3StringList
 */
const de_MaxSize3StringList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1Metadata
 */
const de_Metadata = (output: any, context: __SerdeContext): Metadata => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1MetadataList
 */
const de_MetadataList = (output: any, context: __SerdeContext): Metadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Metadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NoEntitlementsAllowedException
 */
const de_NoEntitlementsAllowedException = (output: any, context: __SerdeContext): NoEntitlementsAllowedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Options
 */
const de_Options = (output: any, context: __SerdeContext): Options => {
  return {
    ActivationOverrideBehavior: __expectString(output.ActivationOverrideBehavior),
  } as any;
};

/**
 * deserializeAws_json1_1OrganizationConfiguration
 */
const de_OrganizationConfiguration = (output: any, context: __SerdeContext): OrganizationConfiguration => {
  return {
    EnableIntegration: __expectBoolean(output.EnableIntegration),
  } as any;
};

/**
 * deserializeAws_json1_1ProductInformation
 */
const de_ProductInformation = (output: any, context: __SerdeContext): ProductInformation => {
  return {
    ProductInformationFilterList:
      output.ProductInformationFilterList != null
        ? de_ProductInformationFilterList(output.ProductInformationFilterList, context)
        : undefined,
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

/**
 * deserializeAws_json1_1ProductInformationFilter
 */
const de_ProductInformationFilter = (output: any, context: __SerdeContext): ProductInformationFilter => {
  return {
    ProductInformationFilterComparator: __expectString(output.ProductInformationFilterComparator),
    ProductInformationFilterName: __expectString(output.ProductInformationFilterName),
    ProductInformationFilterValue:
      output.ProductInformationFilterValue != null
        ? de_StringList(output.ProductInformationFilterValue, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ProductInformationFilterList
 */
const de_ProductInformationFilterList = (output: any, context: __SerdeContext): ProductInformationFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProductInformationFilter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProductInformationList
 */
const de_ProductInformationList = (output: any, context: __SerdeContext): ProductInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProductInformation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProvisionalConfiguration
 */
const de_ProvisionalConfiguration = (output: any, context: __SerdeContext): ProvisionalConfiguration => {
  return {
    MaxTimeToLiveInMinutes: __expectInt32(output.MaxTimeToLiveInMinutes),
  } as any;
};

/**
 * deserializeAws_json1_1RateLimitExceededException
 */
const de_RateLimitExceededException = (output: any, context: __SerdeContext): RateLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ReceivedMetadata
 */
const de_ReceivedMetadata = (output: any, context: __SerdeContext): ReceivedMetadata => {
  return {
    AllowedOperations:
      output.AllowedOperations != null ? de_AllowedOperationList(output.AllowedOperations, context) : undefined,
    ReceivedStatus: __expectString(output.ReceivedStatus),
    ReceivedStatusReason: __expectString(output.ReceivedStatusReason),
  } as any;
};

/**
 * deserializeAws_json1_1RedirectException
 */
const de_RedirectException = (output: any, context: __SerdeContext): RedirectException => {
  return {
    Location: __expectString(output.Location),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1RejectGrantResponse
 */
const de_RejectGrantResponse = (output: any, context: __SerdeContext): RejectGrantResponse => {
  return {
    GrantArn: __expectString(output.GrantArn),
    Status: __expectString(output.Status),
    Version: __expectString(output.Version),
  } as any;
};

/**
 * deserializeAws_json1_1ReportContext
 */
const de_ReportContext = (output: any, context: __SerdeContext): ReportContext => {
  return {
    licenseConfigurationArns:
      output.licenseConfigurationArns != null ? de_ArnList(output.licenseConfigurationArns, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ReportFrequency
 */
const de_ReportFrequency = (output: any, context: __SerdeContext): ReportFrequency => {
  return {
    period: __expectString(output.period),
    value: __expectInt32(output.value),
  } as any;
};

/**
 * deserializeAws_json1_1ReportGenerator
 */
const de_ReportGenerator = (output: any, context: __SerdeContext): ReportGenerator => {
  return {
    CreateTime: __expectString(output.CreateTime),
    Description: __expectString(output.Description),
    LastReportGenerationTime: __expectString(output.LastReportGenerationTime),
    LastRunFailureReason: __expectString(output.LastRunFailureReason),
    LastRunStatus: __expectString(output.LastRunStatus),
    LicenseManagerReportGeneratorArn: __expectString(output.LicenseManagerReportGeneratorArn),
    ReportContext: output.ReportContext != null ? de_ReportContext(output.ReportContext, context) : undefined,
    ReportCreatorAccount: __expectString(output.ReportCreatorAccount),
    ReportFrequency: output.ReportFrequency != null ? de_ReportFrequency(output.ReportFrequency, context) : undefined,
    ReportGeneratorName: __expectString(output.ReportGeneratorName),
    ReportType: output.ReportType != null ? de_ReportTypeList(output.ReportType, context) : undefined,
    S3Location: output.S3Location != null ? de_S3Location(output.S3Location, context) : undefined,
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ReportGeneratorList
 */
const de_ReportGeneratorList = (output: any, context: __SerdeContext): ReportGenerator[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReportGenerator(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReportTypeList
 */
const de_ReportTypeList = (output: any, context: __SerdeContext): (ReportType | string)[] => {
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
 * deserializeAws_json1_1ResourceInventory
 */
const de_ResourceInventory = (output: any, context: __SerdeContext): ResourceInventory => {
  return {
    Platform: __expectString(output.Platform),
    PlatformVersion: __expectString(output.PlatformVersion),
    ResourceArn: __expectString(output.ResourceArn),
    ResourceId: __expectString(output.ResourceId),
    ResourceOwningAccountId: __expectString(output.ResourceOwningAccountId),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceInventoryList
 */
const de_ResourceInventoryList = (output: any, context: __SerdeContext): ResourceInventory[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceInventory(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceLimitExceededException
 */
const de_ResourceLimitExceededException = (output: any, context: __SerdeContext): ResourceLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1S3Location
 */
const de_S3Location = (output: any, context: __SerdeContext): S3Location => {
  return {
    bucket: __expectString(output.bucket),
    keyPrefix: __expectString(output.keyPrefix),
  } as any;
};

/**
 * deserializeAws_json1_1ServerInternalException
 */
const de_ServerInternalException = (output: any, context: __SerdeContext): ServerInternalException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1StringList
 */
const de_StringList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TagList
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
 * deserializeAws_json1_1TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1TokenData
 */
const de_TokenData = (output: any, context: __SerdeContext): TokenData => {
  return {
    ExpirationTime: __expectString(output.ExpirationTime),
    LicenseArn: __expectString(output.LicenseArn),
    RoleArns: output.RoleArns != null ? de_ArnList(output.RoleArns, context) : undefined,
    Status: __expectString(output.Status),
    TokenId: __expectString(output.TokenId),
    TokenProperties:
      output.TokenProperties != null ? de_MaxSize3StringList(output.TokenProperties, context) : undefined,
    TokenType: __expectString(output.TokenType),
  } as any;
};

/**
 * deserializeAws_json1_1TokenList
 */
const de_TokenList = (output: any, context: __SerdeContext): TokenData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TokenData(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UnsupportedDigitalSignatureMethodException
 */
const de_UnsupportedDigitalSignatureMethodException = (
  output: any,
  context: __SerdeContext
): UnsupportedDigitalSignatureMethodException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateLicenseConfigurationResponse
 */
const de_UpdateLicenseConfigurationResponse = (
  output: any,
  context: __SerdeContext
): UpdateLicenseConfigurationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateLicenseManagerReportGeneratorResponse
 */
const de_UpdateLicenseManagerReportGeneratorResponse = (
  output: any,
  context: __SerdeContext
): UpdateLicenseManagerReportGeneratorResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateLicenseSpecificationsForResourceResponse
 */
const de_UpdateLicenseSpecificationsForResourceResponse = (
  output: any,
  context: __SerdeContext
): UpdateLicenseSpecificationsForResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateServiceSettingsResponse
 */
const de_UpdateServiceSettingsResponse = (output: any, context: __SerdeContext): UpdateServiceSettingsResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ValidationException
 */
const de_ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    Message: __expectString(output.Message),
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `AWSLicenseManager.${operation}`,
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
