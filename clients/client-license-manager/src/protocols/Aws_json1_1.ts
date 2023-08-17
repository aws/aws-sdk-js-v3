// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
  AccessDeniedException,
  AllowedOperation,
  AuthorizationException,
  AutomatedDiscoveryInformation,
  BorrowConfiguration,
  CheckInLicenseRequest,
  CheckoutBorrowLicenseRequest,
  CheckoutLicenseRequest,
  ConflictException,
  ConsumptionConfiguration,
  CreateGrantRequest,
  CreateGrantVersionRequest,
  CreateLicenseConfigurationRequest,
  CreateLicenseConversionTaskForResourceRequest,
  CreateLicenseManagerReportGeneratorRequest,
  CreateLicenseRequest,
  CreateLicenseVersionRequest,
  CreateTokenRequest,
  DatetimeRange,
  DeleteGrantRequest,
  DeleteLicenseConfigurationRequest,
  DeleteLicenseManagerReportGeneratorRequest,
  DeleteLicenseRequest,
  DeleteTokenRequest,
  Entitlement,
  EntitlementData,
  EntitlementNotAllowedException,
  ExtendLicenseConsumptionRequest,
  FailedDependencyException,
  Filter,
  FilterLimitExceededException,
  GetAccessTokenRequest,
  GetGrantRequest,
  GetLicenseConfigurationRequest,
  GetLicenseConfigurationResponse,
  GetLicenseConversionTaskRequest,
  GetLicenseConversionTaskResponse,
  GetLicenseManagerReportGeneratorRequest,
  GetLicenseRequest,
  GetLicenseUsageRequest,
  GetServiceSettingsRequest,
  InvalidParameterValueException,
  InvalidResourceStateException,
  InventoryFilter,
  Issuer,
  LicenseConfiguration,
  LicenseConfigurationAssociation,
  LicenseConfigurationUsage,
  LicenseConversionContext,
  LicenseConversionTask,
  LicenseOperationFailure,
  LicenseSpecification,
  LicenseUsageException,
  ListAssociationsForLicenseConfigurationRequest,
  ListAssociationsForLicenseConfigurationResponse,
  ListDistributedGrantsRequest,
  ListFailuresForLicenseConfigurationOperationsRequest,
  ListFailuresForLicenseConfigurationOperationsResponse,
  ListLicenseConfigurationsRequest,
  ListLicenseConfigurationsResponse,
  ListLicenseConversionTasksRequest,
  ListLicenseConversionTasksResponse,
  ListLicenseManagerReportGeneratorsRequest,
  ListLicenseSpecificationsForResourceRequest,
  ListLicensesRequest,
  ListLicenseVersionsRequest,
  ListReceivedGrantsForOrganizationRequest,
  ListReceivedGrantsRequest,
  ListReceivedLicensesForOrganizationRequest,
  ListReceivedLicensesRequest,
  ListResourceInventoryRequest,
  ListTagsForResourceRequest,
  ListTokensRequest,
  ListUsageForLicenseConfigurationRequest,
  ListUsageForLicenseConfigurationResponse,
  Metadata,
  NoEntitlementsAllowedException,
  Options,
  OrganizationConfiguration,
  ProductInformation,
  ProductInformationFilter,
  ProvisionalConfiguration,
  RateLimitExceededException,
  RedirectException,
  RejectGrantRequest,
  ReportContext,
  ReportFrequency,
  ReportType,
  ResourceLimitExceededException,
  ResourceNotFoundException,
  ServerInternalException,
  Tag,
  TagResourceRequest,
  UnsupportedDigitalSignatureMethodException,
  UntagResourceRequest,
  UpdateLicenseConfigurationRequest,
  UpdateLicenseManagerReportGeneratorRequest,
  UpdateLicenseSpecificationsForResourceRequest,
  UpdateServiceSettingsRequest,
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  contents = _json(data);
  const response: AcceptGrantCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CheckInLicenseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CheckoutBorrowLicenseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CheckoutLicenseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateGrantCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateGrantVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateLicenseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateLicenseConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateLicenseConversionTaskForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateLicenseManagerReportGeneratorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateLicenseVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteGrantCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteLicenseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteLicenseConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteLicenseManagerReportGeneratorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ExtendLicenseConsumptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetAccessTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetGrantCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetLicenseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetLicenseManagerReportGeneratorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetLicenseUsageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetServiceSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListDistributedGrantsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListLicenseManagerReportGeneratorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListLicensesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListLicenseSpecificationsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListLicenseVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListReceivedGrantsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListReceivedGrantsForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListReceivedLicensesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListReceivedLicensesForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListResourceInventoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTokensCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: RejectGrantCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateLicenseConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateLicenseManagerReportGeneratorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateLicenseSpecificationsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateServiceSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AcceptGrantRequest omitted.

// se_AllowedOperationList omitted.

// se_ArnList omitted.

// se_BorrowConfiguration omitted.

// se_CheckInLicenseRequest omitted.

// se_CheckoutBorrowLicenseRequest omitted.

// se_CheckoutLicenseRequest omitted.

// se_ConsumptionConfiguration omitted.

// se_CreateGrantRequest omitted.

// se_CreateGrantVersionRequest omitted.

// se_CreateLicenseConfigurationRequest omitted.

// se_CreateLicenseConversionTaskForResourceRequest omitted.

// se_CreateLicenseManagerReportGeneratorRequest omitted.

// se_CreateLicenseRequest omitted.

// se_CreateLicenseVersionRequest omitted.

// se_CreateTokenRequest omitted.

// se_DatetimeRange omitted.

// se_DeleteGrantRequest omitted.

// se_DeleteLicenseConfigurationRequest omitted.

// se_DeleteLicenseManagerReportGeneratorRequest omitted.

// se_DeleteLicenseRequest omitted.

// se_DeleteTokenRequest omitted.

// se_Entitlement omitted.

// se_EntitlementData omitted.

// se_EntitlementDataList omitted.

// se_EntitlementList omitted.

// se_ExtendLicenseConsumptionRequest omitted.

// se_Filter omitted.

// se_FilterList omitted.

// se_Filters omitted.

// se_FilterValues omitted.

// se_GetAccessTokenRequest omitted.

// se_GetGrantRequest omitted.

// se_GetLicenseConfigurationRequest omitted.

// se_GetLicenseConversionTaskRequest omitted.

// se_GetLicenseManagerReportGeneratorRequest omitted.

// se_GetLicenseRequest omitted.

// se_GetLicenseUsageRequest omitted.

// se_GetServiceSettingsRequest omitted.

// se_InventoryFilter omitted.

// se_InventoryFilterList omitted.

// se_Issuer omitted.

// se_LicenseConversionContext omitted.

// se_LicenseSpecification omitted.

// se_LicenseSpecifications omitted.

// se_ListAssociationsForLicenseConfigurationRequest omitted.

// se_ListDistributedGrantsRequest omitted.

// se_ListFailuresForLicenseConfigurationOperationsRequest omitted.

// se_ListLicenseConfigurationsRequest omitted.

// se_ListLicenseConversionTasksRequest omitted.

// se_ListLicenseManagerReportGeneratorsRequest omitted.

// se_ListLicenseSpecificationsForResourceRequest omitted.

// se_ListLicensesRequest omitted.

// se_ListLicenseVersionsRequest omitted.

// se_ListReceivedGrantsForOrganizationRequest omitted.

// se_ListReceivedGrantsRequest omitted.

// se_ListReceivedLicensesForOrganizationRequest omitted.

// se_ListReceivedLicensesRequest omitted.

// se_ListResourceInventoryRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_ListTokensRequest omitted.

// se_ListUsageForLicenseConfigurationRequest omitted.

// se_MaxSize3StringList omitted.

// se_Metadata omitted.

// se_MetadataList omitted.

// se_Options omitted.

// se_OrganizationConfiguration omitted.

// se_PrincipalArnList omitted.

// se_ProductInformation omitted.

// se_ProductInformationFilter omitted.

// se_ProductInformationFilterList omitted.

// se_ProductInformationList omitted.

// se_ProvisionalConfiguration omitted.

// se_RejectGrantRequest omitted.

// se_ReportContext omitted.

// se_ReportFrequency omitted.

// se_ReportTypeList omitted.

// se_StringList omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

// se_UntagResourceRequest omitted.

// se_UpdateLicenseConfigurationRequest omitted.

// se_UpdateLicenseManagerReportGeneratorRequest omitted.

// se_UpdateLicenseSpecificationsForResourceRequest omitted.

// se_UpdateServiceSettingsRequest omitted.

// de_AcceptGrantResponse omitted.

// de_AccessDeniedException omitted.

// de_AllowedOperationList omitted.

// de_ArnList omitted.

// de_AuthorizationException omitted.

/**
 * deserializeAws_json1_1AutomatedDiscoveryInformation
 */
const de_AutomatedDiscoveryInformation = (output: any, context: __SerdeContext): AutomatedDiscoveryInformation => {
  return take(output, {
    LastRunTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_BorrowConfiguration omitted.

// de_CheckInLicenseResponse omitted.

// de_CheckoutBorrowLicenseResponse omitted.

// de_CheckoutLicenseResponse omitted.

// de_ConflictException omitted.

// de_ConsumedLicenseSummary omitted.

// de_ConsumedLicenseSummaryList omitted.

// de_ConsumptionConfiguration omitted.

// de_CreateGrantResponse omitted.

// de_CreateGrantVersionResponse omitted.

// de_CreateLicenseConfigurationResponse omitted.

// de_CreateLicenseConversionTaskForResourceResponse omitted.

// de_CreateLicenseManagerReportGeneratorResponse omitted.

// de_CreateLicenseResponse omitted.

// de_CreateLicenseVersionResponse omitted.

// de_CreateTokenResponse omitted.

// de_DatetimeRange omitted.

// de_DeleteGrantResponse omitted.

// de_DeleteLicenseConfigurationResponse omitted.

// de_DeleteLicenseManagerReportGeneratorResponse omitted.

// de_DeleteLicenseResponse omitted.

// de_DeleteTokenResponse omitted.

// de_Entitlement omitted.

// de_EntitlementData omitted.

// de_EntitlementDataList omitted.

// de_EntitlementList omitted.

// de_EntitlementNotAllowedException omitted.

// de_EntitlementUsage omitted.

// de_EntitlementUsageList omitted.

// de_ExtendLicenseConsumptionResponse omitted.

// de_FailedDependencyException omitted.

// de_FilterLimitExceededException omitted.

// de_GetAccessTokenResponse omitted.

// de_GetGrantResponse omitted.

/**
 * deserializeAws_json1_1GetLicenseConfigurationResponse
 */
const de_GetLicenseConfigurationResponse = (output: any, context: __SerdeContext): GetLicenseConfigurationResponse => {
  return take(output, {
    AutomatedDiscoveryInformation: (_: any) => de_AutomatedDiscoveryInformation(_, context),
    ConsumedLicenseSummaryList: _json,
    ConsumedLicenses: __expectLong,
    Description: __expectString,
    DisassociateWhenNotFound: __expectBoolean,
    LicenseConfigurationArn: __expectString,
    LicenseConfigurationId: __expectString,
    LicenseCount: __expectLong,
    LicenseCountHardLimit: __expectBoolean,
    LicenseCountingType: __expectString,
    LicenseRules: _json,
    ManagedResourceSummaryList: _json,
    Name: __expectString,
    OwnerAccountId: __expectString,
    ProductInformationList: _json,
    Status: __expectString,
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1GetLicenseConversionTaskResponse
 */
const de_GetLicenseConversionTaskResponse = (
  output: any,
  context: __SerdeContext
): GetLicenseConversionTaskResponse => {
  return take(output, {
    DestinationLicenseContext: _json,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LicenseConversionTaskId: __expectString,
    LicenseConversionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ResourceArn: __expectString,
    SourceLicenseContext: _json,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    StatusMessage: __expectString,
  }) as any;
};

// de_GetLicenseManagerReportGeneratorResponse omitted.

// de_GetLicenseResponse omitted.

// de_GetLicenseUsageResponse omitted.

// de_GetServiceSettingsResponse omitted.

// de_Grant omitted.

// de_GrantedLicense omitted.

// de_GrantedLicenseList omitted.

// de_GrantList omitted.

// de_InvalidParameterValueException omitted.

// de_InvalidResourceStateException omitted.

// de_IssuerDetails omitted.

// de_License omitted.

/**
 * deserializeAws_json1_1LicenseConfiguration
 */
const de_LicenseConfiguration = (output: any, context: __SerdeContext): LicenseConfiguration => {
  return take(output, {
    AutomatedDiscoveryInformation: (_: any) => de_AutomatedDiscoveryInformation(_, context),
    ConsumedLicenseSummaryList: _json,
    ConsumedLicenses: __expectLong,
    Description: __expectString,
    DisassociateWhenNotFound: __expectBoolean,
    LicenseConfigurationArn: __expectString,
    LicenseConfigurationId: __expectString,
    LicenseCount: __expectLong,
    LicenseCountHardLimit: __expectBoolean,
    LicenseCountingType: __expectString,
    LicenseRules: _json,
    ManagedResourceSummaryList: _json,
    Name: __expectString,
    OwnerAccountId: __expectString,
    ProductInformationList: _json,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1LicenseConfigurationAssociation
 */
const de_LicenseConfigurationAssociation = (output: any, context: __SerdeContext): LicenseConfigurationAssociation => {
  return take(output, {
    AmiAssociationScope: __expectString,
    AssociationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ResourceArn: __expectString,
    ResourceOwnerId: __expectString,
    ResourceType: __expectString,
  }) as any;
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
      return de_LicenseConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LicenseConfigurationUsage
 */
const de_LicenseConfigurationUsage = (output: any, context: __SerdeContext): LicenseConfigurationUsage => {
  return take(output, {
    AssociationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ConsumedLicenses: __expectLong,
    ResourceArn: __expectString,
    ResourceOwnerId: __expectString,
    ResourceStatus: __expectString,
    ResourceType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1LicenseConfigurationUsageList
 */
const de_LicenseConfigurationUsageList = (output: any, context: __SerdeContext): LicenseConfigurationUsage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LicenseConfigurationUsage(entry, context);
    });
  return retVal;
};

// de_LicenseConversionContext omitted.

/**
 * deserializeAws_json1_1LicenseConversionTask
 */
const de_LicenseConversionTask = (output: any, context: __SerdeContext): LicenseConversionTask => {
  return take(output, {
    DestinationLicenseContext: _json,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LicenseConversionTaskId: __expectString,
    LicenseConversionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ResourceArn: __expectString,
    SourceLicenseContext: _json,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    StatusMessage: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1LicenseConversionTasks
 */
const de_LicenseConversionTasks = (output: any, context: __SerdeContext): LicenseConversionTask[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LicenseConversionTask(entry, context);
    });
  return retVal;
};

// de_LicenseList omitted.

/**
 * deserializeAws_json1_1LicenseOperationFailure
 */
const de_LicenseOperationFailure = (output: any, context: __SerdeContext): LicenseOperationFailure => {
  return take(output, {
    ErrorMessage: __expectString,
    FailureTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MetadataList: _json,
    OperationName: __expectString,
    OperationRequestedBy: __expectString,
    ResourceArn: __expectString,
    ResourceOwnerId: __expectString,
    ResourceType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1LicenseOperationFailureList
 */
const de_LicenseOperationFailureList = (output: any, context: __SerdeContext): LicenseOperationFailure[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LicenseOperationFailure(entry, context);
    });
  return retVal;
};

// de_LicenseSpecification omitted.

// de_LicenseSpecifications omitted.

// de_LicenseUsage omitted.

// de_LicenseUsageException omitted.

/**
 * deserializeAws_json1_1ListAssociationsForLicenseConfigurationResponse
 */
const de_ListAssociationsForLicenseConfigurationResponse = (
  output: any,
  context: __SerdeContext
): ListAssociationsForLicenseConfigurationResponse => {
  return take(output, {
    LicenseConfigurationAssociations: (_: any) => de_LicenseConfigurationAssociations(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListDistributedGrantsResponse omitted.

/**
 * deserializeAws_json1_1ListFailuresForLicenseConfigurationOperationsResponse
 */
const de_ListFailuresForLicenseConfigurationOperationsResponse = (
  output: any,
  context: __SerdeContext
): ListFailuresForLicenseConfigurationOperationsResponse => {
  return take(output, {
    LicenseOperationFailureList: (_: any) => de_LicenseOperationFailureList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListLicenseConfigurationsResponse
 */
const de_ListLicenseConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): ListLicenseConfigurationsResponse => {
  return take(output, {
    LicenseConfigurations: (_: any) => de_LicenseConfigurations(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListLicenseConversionTasksResponse
 */
const de_ListLicenseConversionTasksResponse = (
  output: any,
  context: __SerdeContext
): ListLicenseConversionTasksResponse => {
  return take(output, {
    LicenseConversionTasks: (_: any) => de_LicenseConversionTasks(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListLicenseManagerReportGeneratorsResponse omitted.

// de_ListLicenseSpecificationsForResourceResponse omitted.

// de_ListLicensesResponse omitted.

// de_ListLicenseVersionsResponse omitted.

// de_ListReceivedGrantsForOrganizationResponse omitted.

// de_ListReceivedGrantsResponse omitted.

// de_ListReceivedLicensesForOrganizationResponse omitted.

// de_ListReceivedLicensesResponse omitted.

// de_ListResourceInventoryResponse omitted.

// de_ListTagsForResourceResponse omitted.

// de_ListTokensResponse omitted.

/**
 * deserializeAws_json1_1ListUsageForLicenseConfigurationResponse
 */
const de_ListUsageForLicenseConfigurationResponse = (
  output: any,
  context: __SerdeContext
): ListUsageForLicenseConfigurationResponse => {
  return take(output, {
    LicenseConfigurationUsageList: (_: any) => de_LicenseConfigurationUsageList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ManagedResourceSummary omitted.

// de_ManagedResourceSummaryList omitted.

// de_MaxSize3StringList omitted.

// de_Metadata omitted.

// de_MetadataList omitted.

// de_NoEntitlementsAllowedException omitted.

// de_Options omitted.

// de_OrganizationConfiguration omitted.

// de_ProductInformation omitted.

// de_ProductInformationFilter omitted.

// de_ProductInformationFilterList omitted.

// de_ProductInformationList omitted.

// de_ProvisionalConfiguration omitted.

// de_RateLimitExceededException omitted.

// de_ReceivedMetadata omitted.

// de_RedirectException omitted.

// de_RejectGrantResponse omitted.

// de_ReportContext omitted.

// de_ReportFrequency omitted.

// de_ReportGenerator omitted.

// de_ReportGeneratorList omitted.

// de_ReportTypeList omitted.

// de_ResourceInventory omitted.

// de_ResourceInventoryList omitted.

// de_ResourceLimitExceededException omitted.

// de_ResourceNotFoundException omitted.

// de_S3Location omitted.

// de_ServerInternalException omitted.

// de_StringList omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceResponse omitted.

// de_TokenData omitted.

// de_TokenList omitted.

// de_UnsupportedDigitalSignatureMethodException omitted.

// de_UntagResourceResponse omitted.

// de_UpdateLicenseConfigurationResponse omitted.

// de_UpdateLicenseManagerReportGeneratorResponse omitted.

// de_UpdateLicenseSpecificationsForResourceResponse omitted.

// de_UpdateServiceSettingsResponse omitted.

// de_ValidationException omitted.

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
