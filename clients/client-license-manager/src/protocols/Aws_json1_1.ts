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

export const serializeAws_json1_1AcceptGrantCommand = async (
  input: AcceptGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.AcceptGrant",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AcceptGrantRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CheckInLicenseCommand = async (
  input: CheckInLicenseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.CheckInLicense",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CheckInLicenseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CheckoutBorrowLicenseCommand = async (
  input: CheckoutBorrowLicenseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.CheckoutBorrowLicense",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CheckoutBorrowLicenseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CheckoutLicenseCommand = async (
  input: CheckoutLicenseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.CheckoutLicense",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CheckoutLicenseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateGrantCommand = async (
  input: CreateGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.CreateGrant",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateGrantRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateGrantVersionCommand = async (
  input: CreateGrantVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.CreateGrantVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateGrantVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateLicenseCommand = async (
  input: CreateLicenseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.CreateLicense",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateLicenseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateLicenseConfigurationCommand = async (
  input: CreateLicenseConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.CreateLicenseConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateLicenseConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateLicenseConversionTaskForResourceCommand = async (
  input: CreateLicenseConversionTaskForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.CreateLicenseConversionTaskForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateLicenseConversionTaskForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateLicenseManagerReportGeneratorCommand = async (
  input: CreateLicenseManagerReportGeneratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.CreateLicenseManagerReportGenerator",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateLicenseManagerReportGeneratorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateLicenseVersionCommand = async (
  input: CreateLicenseVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.CreateLicenseVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateLicenseVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateTokenCommand = async (
  input: CreateTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.CreateToken",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateTokenRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteGrantCommand = async (
  input: DeleteGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.DeleteGrant",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteGrantRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteLicenseCommand = async (
  input: DeleteLicenseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.DeleteLicense",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteLicenseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteLicenseConfigurationCommand = async (
  input: DeleteLicenseConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.DeleteLicenseConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteLicenseConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteLicenseManagerReportGeneratorCommand = async (
  input: DeleteLicenseManagerReportGeneratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.DeleteLicenseManagerReportGenerator",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteLicenseManagerReportGeneratorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteTokenCommand = async (
  input: DeleteTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.DeleteToken",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteTokenRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ExtendLicenseConsumptionCommand = async (
  input: ExtendLicenseConsumptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.ExtendLicenseConsumption",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ExtendLicenseConsumptionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAccessTokenCommand = async (
  input: GetAccessTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.GetAccessToken",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetAccessTokenRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetGrantCommand = async (
  input: GetGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.GetGrant",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetGrantRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetLicenseCommand = async (
  input: GetLicenseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.GetLicense",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetLicenseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetLicenseConfigurationCommand = async (
  input: GetLicenseConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.GetLicenseConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetLicenseConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetLicenseConversionTaskCommand = async (
  input: GetLicenseConversionTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.GetLicenseConversionTask",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetLicenseConversionTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetLicenseManagerReportGeneratorCommand = async (
  input: GetLicenseManagerReportGeneratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.GetLicenseManagerReportGenerator",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetLicenseManagerReportGeneratorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetLicenseUsageCommand = async (
  input: GetLicenseUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.GetLicenseUsage",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetLicenseUsageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetServiceSettingsCommand = async (
  input: GetServiceSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.GetServiceSettings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetServiceSettingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAssociationsForLicenseConfigurationCommand = async (
  input: ListAssociationsForLicenseConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.ListAssociationsForLicenseConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAssociationsForLicenseConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDistributedGrantsCommand = async (
  input: ListDistributedGrantsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.ListDistributedGrants",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDistributedGrantsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommand = async (
  input: ListFailuresForLicenseConfigurationOperationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.ListFailuresForLicenseConfigurationOperations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListFailuresForLicenseConfigurationOperationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListLicenseConfigurationsCommand = async (
  input: ListLicenseConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.ListLicenseConfigurations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListLicenseConfigurationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListLicenseConversionTasksCommand = async (
  input: ListLicenseConversionTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.ListLicenseConversionTasks",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListLicenseConversionTasksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListLicenseManagerReportGeneratorsCommand = async (
  input: ListLicenseManagerReportGeneratorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.ListLicenseManagerReportGenerators",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListLicenseManagerReportGeneratorsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListLicensesCommand = async (
  input: ListLicensesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.ListLicenses",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListLicensesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListLicenseSpecificationsForResourceCommand = async (
  input: ListLicenseSpecificationsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.ListLicenseSpecificationsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListLicenseSpecificationsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListLicenseVersionsCommand = async (
  input: ListLicenseVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.ListLicenseVersions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListLicenseVersionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListReceivedGrantsCommand = async (
  input: ListReceivedGrantsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.ListReceivedGrants",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListReceivedGrantsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListReceivedGrantsForOrganizationCommand = async (
  input: ListReceivedGrantsForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.ListReceivedGrantsForOrganization",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListReceivedGrantsForOrganizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListReceivedLicensesCommand = async (
  input: ListReceivedLicensesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.ListReceivedLicenses",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListReceivedLicensesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListReceivedLicensesForOrganizationCommand = async (
  input: ListReceivedLicensesForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.ListReceivedLicensesForOrganization",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListReceivedLicensesForOrganizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListResourceInventoryCommand = async (
  input: ListResourceInventoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.ListResourceInventory",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListResourceInventoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTokensCommand = async (
  input: ListTokensCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.ListTokens",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTokensRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListUsageForLicenseConfigurationCommand = async (
  input: ListUsageForLicenseConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.ListUsageForLicenseConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListUsageForLicenseConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RejectGrantCommand = async (
  input: RejectGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.RejectGrant",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RejectGrantRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateLicenseConfigurationCommand = async (
  input: UpdateLicenseConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.UpdateLicenseConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateLicenseConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateLicenseManagerReportGeneratorCommand = async (
  input: UpdateLicenseManagerReportGeneratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.UpdateLicenseManagerReportGenerator",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateLicenseManagerReportGeneratorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateLicenseSpecificationsForResourceCommand = async (
  input: UpdateLicenseSpecificationsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.UpdateLicenseSpecificationsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateLicenseSpecificationsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateServiceSettingsCommand = async (
  input: UpdateServiceSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLicenseManager.UpdateServiceSettings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateServiceSettingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AcceptGrantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptGrantCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AcceptGrantCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AcceptGrantResponse(data, context);
  const response: AcceptGrantCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AcceptGrantCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CheckInLicenseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckInLicenseCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CheckInLicenseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CheckInLicenseResponse(data, context);
  const response: CheckInLicenseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CheckInLicenseCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.licensemanager#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanager#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CheckoutBorrowLicenseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckoutBorrowLicenseCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CheckoutBorrowLicenseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CheckoutBorrowLicenseResponse(data, context);
  const response: CheckoutBorrowLicenseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CheckoutBorrowLicenseCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "EntitlementNotAllowedException":
    case "com.amazonaws.licensemanager#EntitlementNotAllowedException":
      throw await deserializeAws_json1_1EntitlementNotAllowedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "NoEntitlementsAllowedException":
    case "com.amazonaws.licensemanager#NoEntitlementsAllowedException":
      throw await deserializeAws_json1_1NoEntitlementsAllowedExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "RedirectException":
    case "com.amazonaws.licensemanager#RedirectException":
      throw await deserializeAws_json1_1RedirectExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanager#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
    case "UnsupportedDigitalSignatureMethodException":
    case "com.amazonaws.licensemanager#UnsupportedDigitalSignatureMethodException":
      throw await deserializeAws_json1_1UnsupportedDigitalSignatureMethodExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CheckoutLicenseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckoutLicenseCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CheckoutLicenseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CheckoutLicenseResponse(data, context);
  const response: CheckoutLicenseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CheckoutLicenseCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "NoEntitlementsAllowedException":
    case "com.amazonaws.licensemanager#NoEntitlementsAllowedException":
      throw await deserializeAws_json1_1NoEntitlementsAllowedExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "RedirectException":
    case "com.amazonaws.licensemanager#RedirectException":
      throw await deserializeAws_json1_1RedirectExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanager#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
    case "UnsupportedDigitalSignatureMethodException":
    case "com.amazonaws.licensemanager#UnsupportedDigitalSignatureMethodException":
      throw await deserializeAws_json1_1UnsupportedDigitalSignatureMethodExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateGrantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGrantCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateGrantCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateGrantResponse(data, context);
  const response: CreateGrantCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateGrantCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateGrantVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGrantVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateGrantVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateGrantVersionResponse(data, context);
  const response: CreateGrantVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateGrantVersionCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateLicenseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLicenseCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateLicenseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateLicenseResponse(data, context);
  const response: CreateLicenseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateLicenseCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "RedirectException":
    case "com.amazonaws.licensemanager#RedirectException":
      throw await deserializeAws_json1_1RedirectExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateLicenseConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLicenseConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateLicenseConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateLicenseConfigurationResponse(data, context);
  const response: CreateLicenseConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateLicenseConfigurationCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateLicenseConversionTaskForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLicenseConversionTaskForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateLicenseConversionTaskForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateLicenseConversionTaskForResourceResponse(data, context);
  const response: CreateLicenseConversionTaskForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateLicenseConversionTaskForResourceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateLicenseManagerReportGeneratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLicenseManagerReportGeneratorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateLicenseManagerReportGeneratorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateLicenseManagerReportGeneratorResponse(data, context);
  const response: CreateLicenseManagerReportGeneratorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateLicenseManagerReportGeneratorCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanager#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateLicenseVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLicenseVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateLicenseVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateLicenseVersionResponse(data, context);
  const response: CreateLicenseVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateLicenseVersionCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.licensemanager#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "RedirectException":
    case "com.amazonaws.licensemanager#RedirectException":
      throw await deserializeAws_json1_1RedirectExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanager#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTokenCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateTokenCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateTokenResponse(data, context);
  const response: CreateTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateTokenCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "RedirectException":
    case "com.amazonaws.licensemanager#RedirectException":
      throw await deserializeAws_json1_1RedirectExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanager#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteGrantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGrantCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteGrantCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteGrantResponse(data, context);
  const response: DeleteGrantCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteGrantCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteLicenseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLicenseCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteLicenseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteLicenseResponse(data, context);
  const response: DeleteLicenseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteLicenseCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.licensemanager#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "RedirectException":
    case "com.amazonaws.licensemanager#RedirectException":
      throw await deserializeAws_json1_1RedirectExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteLicenseConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLicenseConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteLicenseConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteLicenseConfigurationResponse(data, context);
  const response: DeleteLicenseConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteLicenseConfigurationCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteLicenseManagerReportGeneratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLicenseManagerReportGeneratorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteLicenseManagerReportGeneratorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteLicenseManagerReportGeneratorResponse(data, context);
  const response: DeleteLicenseManagerReportGeneratorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteLicenseManagerReportGeneratorCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanager#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTokenCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteTokenCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteTokenResponse(data, context);
  const response: DeleteTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteTokenCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "RedirectException":
    case "com.amazonaws.licensemanager#RedirectException":
      throw await deserializeAws_json1_1RedirectExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanager#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ExtendLicenseConsumptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExtendLicenseConsumptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ExtendLicenseConsumptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ExtendLicenseConsumptionResponse(data, context);
  const response: ExtendLicenseConsumptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ExtendLicenseConsumptionCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanager#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetAccessTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessTokenCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetAccessTokenCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAccessTokenResponse(data, context);
  const response: GetAccessTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetAccessTokenCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetGrantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGrantCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetGrantCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetGrantResponse(data, context);
  const response: GetGrantCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetGrantCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetLicenseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLicenseCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetLicenseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLicenseResponse(data, context);
  const response: GetLicenseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetLicenseCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetLicenseConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLicenseConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetLicenseConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLicenseConfigurationResponse(data, context);
  const response: GetLicenseConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetLicenseConfigurationCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetLicenseConversionTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLicenseConversionTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetLicenseConversionTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLicenseConversionTaskResponse(data, context);
  const response: GetLicenseConversionTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetLicenseConversionTaskCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetLicenseManagerReportGeneratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLicenseManagerReportGeneratorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetLicenseManagerReportGeneratorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLicenseManagerReportGeneratorResponse(data, context);
  const response: GetLicenseManagerReportGeneratorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetLicenseManagerReportGeneratorCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanager#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetLicenseUsageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLicenseUsageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetLicenseUsageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLicenseUsageResponse(data, context);
  const response: GetLicenseUsageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetLicenseUsageCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetServiceSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetServiceSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetServiceSettingsResponse(data, context);
  const response: GetServiceSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetServiceSettingsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListAssociationsForLicenseConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociationsForLicenseConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAssociationsForLicenseConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAssociationsForLicenseConfigurationResponse(data, context);
  const response: ListAssociationsForLicenseConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAssociationsForLicenseConfigurationCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "FilterLimitExceededException":
    case "com.amazonaws.licensemanager#FilterLimitExceededException":
      throw await deserializeAws_json1_1FilterLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListDistributedGrantsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributedGrantsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDistributedGrantsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDistributedGrantsResponse(data, context);
  const response: ListDistributedGrantsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDistributedGrantsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFailuresForLicenseConfigurationOperationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListFailuresForLicenseConfigurationOperationsResponse(data, context);
  const response: ListFailuresForLicenseConfigurationOperationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListLicenseConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLicenseConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListLicenseConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListLicenseConfigurationsResponse(data, context);
  const response: ListLicenseConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListLicenseConfigurationsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "FilterLimitExceededException":
    case "com.amazonaws.licensemanager#FilterLimitExceededException":
      throw await deserializeAws_json1_1FilterLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListLicenseConversionTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLicenseConversionTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListLicenseConversionTasksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListLicenseConversionTasksResponse(data, context);
  const response: ListLicenseConversionTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListLicenseConversionTasksCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListLicenseManagerReportGeneratorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLicenseManagerReportGeneratorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListLicenseManagerReportGeneratorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListLicenseManagerReportGeneratorsResponse(data, context);
  const response: ListLicenseManagerReportGeneratorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListLicenseManagerReportGeneratorsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanager#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListLicensesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLicensesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListLicensesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListLicensesResponse(data, context);
  const response: ListLicensesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListLicensesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListLicenseSpecificationsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLicenseSpecificationsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListLicenseSpecificationsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListLicenseSpecificationsForResourceResponse(data, context);
  const response: ListLicenseSpecificationsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListLicenseSpecificationsForResourceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListLicenseVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLicenseVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListLicenseVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListLicenseVersionsResponse(data, context);
  const response: ListLicenseVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListLicenseVersionsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListReceivedGrantsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReceivedGrantsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListReceivedGrantsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListReceivedGrantsResponse(data, context);
  const response: ListReceivedGrantsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListReceivedGrantsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListReceivedGrantsForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReceivedGrantsForOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListReceivedGrantsForOrganizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListReceivedGrantsForOrganizationResponse(data, context);
  const response: ListReceivedGrantsForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListReceivedGrantsForOrganizationCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListReceivedLicensesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReceivedLicensesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListReceivedLicensesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListReceivedLicensesResponse(data, context);
  const response: ListReceivedLicensesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListReceivedLicensesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListReceivedLicensesForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReceivedLicensesForOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListReceivedLicensesForOrganizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListReceivedLicensesForOrganizationResponse(data, context);
  const response: ListReceivedLicensesForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListReceivedLicensesForOrganizationCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListResourceInventoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceInventoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListResourceInventoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListResourceInventoryResponse(data, context);
  const response: ListResourceInventoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListResourceInventoryCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.licensemanager#FailedDependencyException":
      throw await deserializeAws_json1_1FailedDependencyExceptionResponse(parsedOutput, context);
    case "FilterLimitExceededException":
    case "com.amazonaws.licensemanager#FilterLimitExceededException":
      throw await deserializeAws_json1_1FilterLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListTokensCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTokensCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTokensCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTokensResponse(data, context);
  const response: ListTokensCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTokensCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListUsageForLicenseConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsageForLicenseConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListUsageForLicenseConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListUsageForLicenseConfigurationResponse(data, context);
  const response: ListUsageForLicenseConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListUsageForLicenseConfigurationCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "FilterLimitExceededException":
    case "com.amazonaws.licensemanager#FilterLimitExceededException":
      throw await deserializeAws_json1_1FilterLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RejectGrantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectGrantCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RejectGrantCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RejectGrantResponse(data, context);
  const response: RejectGrantCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RejectGrantCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateLicenseConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLicenseConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateLicenseConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateLicenseConfigurationResponse(data, context);
  const response: UpdateLicenseConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateLicenseConfigurationCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateLicenseManagerReportGeneratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLicenseManagerReportGeneratorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateLicenseManagerReportGeneratorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateLicenseManagerReportGeneratorResponse(data, context);
  const response: UpdateLicenseManagerReportGeneratorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateLicenseManagerReportGeneratorCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanager#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateLicenseSpecificationsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLicenseSpecificationsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateLicenseSpecificationsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateLicenseSpecificationsForResourceResponse(data, context);
  const response: UpdateLicenseSpecificationsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateLicenseSpecificationsForResourceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.licensemanager#InvalidResourceStateException":
      throw await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context);
    case "LicenseUsageException":
    case "com.amazonaws.licensemanager#LicenseUsageException":
      throw await deserializeAws_json1_1LicenseUsageExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateServiceSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateServiceSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateServiceSettingsResponse(data, context);
  const response: UpdateServiceSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateServiceSettingsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      throw await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      throw await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      throw await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1AuthorizationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AuthorizationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AuthorizationException(body, context);
  const exception = new AuthorizationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1EntitlementNotAllowedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EntitlementNotAllowedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EntitlementNotAllowedException(body, context);
  const exception = new EntitlementNotAllowedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1FailedDependencyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FailedDependencyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FailedDependencyException(body, context);
  const exception = new FailedDependencyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1FilterLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FilterLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FilterLimitExceededException(body, context);
  const exception = new FilterLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidParameterValueExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterValueException(body, context);
  const exception = new InvalidParameterValueException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidResourceStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResourceStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidResourceStateException(body, context);
  const exception = new InvalidResourceStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1LicenseUsageExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LicenseUsageException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LicenseUsageException(body, context);
  const exception = new LicenseUsageException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NoEntitlementsAllowedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoEntitlementsAllowedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NoEntitlementsAllowedException(body, context);
  const exception = new NoEntitlementsAllowedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1RateLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RateLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RateLimitExceededException(body, context);
  const exception = new RateLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1RedirectExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RedirectException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RedirectException(body, context);
  const exception = new RedirectException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceLimitExceededException(body, context);
  const exception = new ResourceLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ServerInternalExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServerInternalException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServerInternalException(body, context);
  const exception = new ServerInternalException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1UnsupportedDigitalSignatureMethodExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedDigitalSignatureMethodException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedDigitalSignatureMethodException(body, context);
  const exception = new UnsupportedDigitalSignatureMethodException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1AcceptGrantRequest = (input: AcceptGrantRequest, context: __SerdeContext): any => {
  return {
    ...(input.GrantArn != null && { GrantArn: input.GrantArn }),
  };
};

const serializeAws_json1_1AllowedOperationList = (
  input: (AllowedOperation | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1BorrowConfiguration = (input: BorrowConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AllowEarlyCheckIn != null && { AllowEarlyCheckIn: input.AllowEarlyCheckIn }),
    ...(input.MaxTimeToLiveInMinutes != null && { MaxTimeToLiveInMinutes: input.MaxTimeToLiveInMinutes }),
  };
};

const serializeAws_json1_1CheckInLicenseRequest = (input: CheckInLicenseRequest, context: __SerdeContext): any => {
  return {
    ...(input.Beneficiary != null && { Beneficiary: input.Beneficiary }),
    ...(input.LicenseConsumptionToken != null && { LicenseConsumptionToken: input.LicenseConsumptionToken }),
  };
};

const serializeAws_json1_1CheckoutBorrowLicenseRequest = (
  input: CheckoutBorrowLicenseRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CheckoutMetadata != null && {
      CheckoutMetadata: serializeAws_json1_1MetadataList(input.CheckoutMetadata, context),
    }),
    ...(input.ClientToken != null && { ClientToken: input.ClientToken }),
    ...(input.DigitalSignatureMethod != null && { DigitalSignatureMethod: input.DigitalSignatureMethod }),
    ...(input.Entitlements != null && {
      Entitlements: serializeAws_json1_1EntitlementDataList(input.Entitlements, context),
    }),
    ...(input.LicenseArn != null && { LicenseArn: input.LicenseArn }),
    ...(input.NodeId != null && { NodeId: input.NodeId }),
  };
};

const serializeAws_json1_1CheckoutLicenseRequest = (input: CheckoutLicenseRequest, context: __SerdeContext): any => {
  return {
    ...(input.Beneficiary != null && { Beneficiary: input.Beneficiary }),
    ...(input.CheckoutType != null && { CheckoutType: input.CheckoutType }),
    ...(input.ClientToken != null && { ClientToken: input.ClientToken }),
    ...(input.Entitlements != null && {
      Entitlements: serializeAws_json1_1EntitlementDataList(input.Entitlements, context),
    }),
    ...(input.KeyFingerprint != null && { KeyFingerprint: input.KeyFingerprint }),
    ...(input.NodeId != null && { NodeId: input.NodeId }),
    ...(input.ProductSKU != null && { ProductSKU: input.ProductSKU }),
  };
};

const serializeAws_json1_1ConsumptionConfiguration = (
  input: ConsumptionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.BorrowConfiguration != null && {
      BorrowConfiguration: serializeAws_json1_1BorrowConfiguration(input.BorrowConfiguration, context),
    }),
    ...(input.ProvisionalConfiguration != null && {
      ProvisionalConfiguration: serializeAws_json1_1ProvisionalConfiguration(input.ProvisionalConfiguration, context),
    }),
    ...(input.RenewType != null && { RenewType: input.RenewType }),
  };
};

const serializeAws_json1_1CreateGrantRequest = (input: CreateGrantRequest, context: __SerdeContext): any => {
  return {
    ...(input.AllowedOperations != null && {
      AllowedOperations: serializeAws_json1_1AllowedOperationList(input.AllowedOperations, context),
    }),
    ...(input.ClientToken != null && { ClientToken: input.ClientToken }),
    ...(input.GrantName != null && { GrantName: input.GrantName }),
    ...(input.HomeRegion != null && { HomeRegion: input.HomeRegion }),
    ...(input.LicenseArn != null && { LicenseArn: input.LicenseArn }),
    ...(input.Principals != null && { Principals: serializeAws_json1_1PrincipalArnList(input.Principals, context) }),
  };
};

const serializeAws_json1_1CreateGrantVersionRequest = (
  input: CreateGrantVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllowedOperations != null && {
      AllowedOperations: serializeAws_json1_1AllowedOperationList(input.AllowedOperations, context),
    }),
    ...(input.ClientToken != null && { ClientToken: input.ClientToken }),
    ...(input.GrantArn != null && { GrantArn: input.GrantArn }),
    ...(input.GrantName != null && { GrantName: input.GrantName }),
    ...(input.SourceVersion != null && { SourceVersion: input.SourceVersion }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.StatusReason != null && { StatusReason: input.StatusReason }),
  };
};

const serializeAws_json1_1CreateLicenseConfigurationRequest = (
  input: CreateLicenseConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DisassociateWhenNotFound != null && { DisassociateWhenNotFound: input.DisassociateWhenNotFound }),
    ...(input.LicenseCount != null && { LicenseCount: input.LicenseCount }),
    ...(input.LicenseCountHardLimit != null && { LicenseCountHardLimit: input.LicenseCountHardLimit }),
    ...(input.LicenseCountingType != null && { LicenseCountingType: input.LicenseCountingType }),
    ...(input.LicenseRules != null && { LicenseRules: serializeAws_json1_1StringList(input.LicenseRules, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ProductInformationList != null && {
      ProductInformationList: serializeAws_json1_1ProductInformationList(input.ProductInformationList, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateLicenseConversionTaskForResourceRequest = (
  input: CreateLicenseConversionTaskForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationLicenseContext != null && {
      DestinationLicenseContext: serializeAws_json1_1LicenseConversionContext(input.DestinationLicenseContext, context),
    }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.SourceLicenseContext != null && {
      SourceLicenseContext: serializeAws_json1_1LicenseConversionContext(input.SourceLicenseContext, context),
    }),
  };
};

const serializeAws_json1_1CreateLicenseManagerReportGeneratorRequest = (
  input: CreateLicenseManagerReportGeneratorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientToken != null && { ClientToken: input.ClientToken }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.ReportContext != null && {
      ReportContext: serializeAws_json1_1ReportContext(input.ReportContext, context),
    }),
    ...(input.ReportFrequency != null && {
      ReportFrequency: serializeAws_json1_1ReportFrequency(input.ReportFrequency, context),
    }),
    ...(input.ReportGeneratorName != null && { ReportGeneratorName: input.ReportGeneratorName }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.Type != null && { Type: serializeAws_json1_1ReportTypeList(input.Type, context) }),
  };
};

const serializeAws_json1_1CreateLicenseRequest = (input: CreateLicenseRequest, context: __SerdeContext): any => {
  return {
    ...(input.Beneficiary != null && { Beneficiary: input.Beneficiary }),
    ...(input.ClientToken != null && { ClientToken: input.ClientToken }),
    ...(input.ConsumptionConfiguration != null && {
      ConsumptionConfiguration: serializeAws_json1_1ConsumptionConfiguration(input.ConsumptionConfiguration, context),
    }),
    ...(input.Entitlements != null && {
      Entitlements: serializeAws_json1_1EntitlementList(input.Entitlements, context),
    }),
    ...(input.HomeRegion != null && { HomeRegion: input.HomeRegion }),
    ...(input.Issuer != null && { Issuer: serializeAws_json1_1Issuer(input.Issuer, context) }),
    ...(input.LicenseMetadata != null && {
      LicenseMetadata: serializeAws_json1_1MetadataList(input.LicenseMetadata, context),
    }),
    ...(input.LicenseName != null && { LicenseName: input.LicenseName }),
    ...(input.ProductName != null && { ProductName: input.ProductName }),
    ...(input.ProductSKU != null && { ProductSKU: input.ProductSKU }),
    ...(input.Validity != null && { Validity: serializeAws_json1_1DatetimeRange(input.Validity, context) }),
  };
};

const serializeAws_json1_1CreateLicenseVersionRequest = (
  input: CreateLicenseVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientToken != null && { ClientToken: input.ClientToken }),
    ...(input.ConsumptionConfiguration != null && {
      ConsumptionConfiguration: serializeAws_json1_1ConsumptionConfiguration(input.ConsumptionConfiguration, context),
    }),
    ...(input.Entitlements != null && {
      Entitlements: serializeAws_json1_1EntitlementList(input.Entitlements, context),
    }),
    ...(input.HomeRegion != null && { HomeRegion: input.HomeRegion }),
    ...(input.Issuer != null && { Issuer: serializeAws_json1_1Issuer(input.Issuer, context) }),
    ...(input.LicenseArn != null && { LicenseArn: input.LicenseArn }),
    ...(input.LicenseMetadata != null && {
      LicenseMetadata: serializeAws_json1_1MetadataList(input.LicenseMetadata, context),
    }),
    ...(input.LicenseName != null && { LicenseName: input.LicenseName }),
    ...(input.ProductName != null && { ProductName: input.ProductName }),
    ...(input.SourceVersion != null && { SourceVersion: input.SourceVersion }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.Validity != null && { Validity: serializeAws_json1_1DatetimeRange(input.Validity, context) }),
  };
};

const serializeAws_json1_1CreateTokenRequest = (input: CreateTokenRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientToken != null && { ClientToken: input.ClientToken }),
    ...(input.ExpirationInDays != null && { ExpirationInDays: input.ExpirationInDays }),
    ...(input.LicenseArn != null && { LicenseArn: input.LicenseArn }),
    ...(input.RoleArns != null && { RoleArns: serializeAws_json1_1ArnList(input.RoleArns, context) }),
    ...(input.TokenProperties != null && {
      TokenProperties: serializeAws_json1_1MaxSize3StringList(input.TokenProperties, context),
    }),
  };
};

const serializeAws_json1_1DatetimeRange = (input: DatetimeRange, context: __SerdeContext): any => {
  return {
    ...(input.Begin != null && { Begin: input.Begin }),
    ...(input.End != null && { End: input.End }),
  };
};

const serializeAws_json1_1DeleteGrantRequest = (input: DeleteGrantRequest, context: __SerdeContext): any => {
  return {
    ...(input.GrantArn != null && { GrantArn: input.GrantArn }),
    ...(input.StatusReason != null && { StatusReason: input.StatusReason }),
    ...(input.Version != null && { Version: input.Version }),
  };
};

const serializeAws_json1_1DeleteLicenseConfigurationRequest = (
  input: DeleteLicenseConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LicenseConfigurationArn != null && { LicenseConfigurationArn: input.LicenseConfigurationArn }),
  };
};

const serializeAws_json1_1DeleteLicenseManagerReportGeneratorRequest = (
  input: DeleteLicenseManagerReportGeneratorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LicenseManagerReportGeneratorArn != null && {
      LicenseManagerReportGeneratorArn: input.LicenseManagerReportGeneratorArn,
    }),
  };
};

const serializeAws_json1_1DeleteLicenseRequest = (input: DeleteLicenseRequest, context: __SerdeContext): any => {
  return {
    ...(input.LicenseArn != null && { LicenseArn: input.LicenseArn }),
    ...(input.SourceVersion != null && { SourceVersion: input.SourceVersion }),
  };
};

const serializeAws_json1_1DeleteTokenRequest = (input: DeleteTokenRequest, context: __SerdeContext): any => {
  return {
    ...(input.TokenId != null && { TokenId: input.TokenId }),
  };
};

const serializeAws_json1_1Entitlement = (input: Entitlement, context: __SerdeContext): any => {
  return {
    ...(input.AllowCheckIn != null && { AllowCheckIn: input.AllowCheckIn }),
    ...(input.MaxCount != null && { MaxCount: input.MaxCount }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Overage != null && { Overage: input.Overage }),
    ...(input.Unit != null && { Unit: input.Unit }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1EntitlementData = (input: EntitlementData, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Unit != null && { Unit: input.Unit }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1EntitlementDataList = (input: EntitlementData[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1EntitlementData(entry, context);
    });
};

const serializeAws_json1_1EntitlementList = (input: Entitlement[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Entitlement(entry, context);
    });
};

const serializeAws_json1_1ExtendLicenseConsumptionRequest = (
  input: ExtendLicenseConsumptionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.LicenseConsumptionToken != null && { LicenseConsumptionToken: input.LicenseConsumptionToken }),
  };
};

const serializeAws_json1_1Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: serializeAws_json1_1FilterValues(input.Values, context) }),
  };
};

const serializeAws_json1_1FilterList = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Filter(entry, context);
    });
};

const serializeAws_json1_1Filters = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Filter(entry, context);
    });
};

const serializeAws_json1_1FilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1GetAccessTokenRequest = (input: GetAccessTokenRequest, context: __SerdeContext): any => {
  return {
    ...(input.Token != null && { Token: input.Token }),
    ...(input.TokenProperties != null && {
      TokenProperties: serializeAws_json1_1MaxSize3StringList(input.TokenProperties, context),
    }),
  };
};

const serializeAws_json1_1GetGrantRequest = (input: GetGrantRequest, context: __SerdeContext): any => {
  return {
    ...(input.GrantArn != null && { GrantArn: input.GrantArn }),
    ...(input.Version != null && { Version: input.Version }),
  };
};

const serializeAws_json1_1GetLicenseConfigurationRequest = (
  input: GetLicenseConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LicenseConfigurationArn != null && { LicenseConfigurationArn: input.LicenseConfigurationArn }),
  };
};

const serializeAws_json1_1GetLicenseConversionTaskRequest = (
  input: GetLicenseConversionTaskRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LicenseConversionTaskId != null && { LicenseConversionTaskId: input.LicenseConversionTaskId }),
  };
};

const serializeAws_json1_1GetLicenseManagerReportGeneratorRequest = (
  input: GetLicenseManagerReportGeneratorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LicenseManagerReportGeneratorArn != null && {
      LicenseManagerReportGeneratorArn: input.LicenseManagerReportGeneratorArn,
    }),
  };
};

const serializeAws_json1_1GetLicenseRequest = (input: GetLicenseRequest, context: __SerdeContext): any => {
  return {
    ...(input.LicenseArn != null && { LicenseArn: input.LicenseArn }),
    ...(input.Version != null && { Version: input.Version }),
  };
};

const serializeAws_json1_1GetLicenseUsageRequest = (input: GetLicenseUsageRequest, context: __SerdeContext): any => {
  return {
    ...(input.LicenseArn != null && { LicenseArn: input.LicenseArn }),
  };
};

const serializeAws_json1_1GetServiceSettingsRequest = (
  input: GetServiceSettingsRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1InventoryFilter = (input: InventoryFilter, context: __SerdeContext): any => {
  return {
    ...(input.Condition != null && { Condition: input.Condition }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1InventoryFilterList = (input: InventoryFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1InventoryFilter(entry, context);
    });
};

const serializeAws_json1_1Issuer = (input: Issuer, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SignKey != null && { SignKey: input.SignKey }),
  };
};

const serializeAws_json1_1LicenseConversionContext = (
  input: LicenseConversionContext,
  context: __SerdeContext
): any => {
  return {
    ...(input.UsageOperation != null && { UsageOperation: input.UsageOperation }),
  };
};

const serializeAws_json1_1LicenseSpecification = (input: LicenseSpecification, context: __SerdeContext): any => {
  return {
    ...(input.AmiAssociationScope != null && { AmiAssociationScope: input.AmiAssociationScope }),
    ...(input.LicenseConfigurationArn != null && { LicenseConfigurationArn: input.LicenseConfigurationArn }),
  };
};

const serializeAws_json1_1LicenseSpecifications = (input: LicenseSpecification[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1LicenseSpecification(entry, context);
    });
};

const serializeAws_json1_1ListAssociationsForLicenseConfigurationRequest = (
  input: ListAssociationsForLicenseConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LicenseConfigurationArn != null && { LicenseConfigurationArn: input.LicenseConfigurationArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListDistributedGrantsRequest = (
  input: ListDistributedGrantsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.GrantArns != null && { GrantArns: serializeAws_json1_1ArnList(input.GrantArns, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListFailuresForLicenseConfigurationOperationsRequest = (
  input: ListFailuresForLicenseConfigurationOperationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LicenseConfigurationArn != null && { LicenseConfigurationArn: input.LicenseConfigurationArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListLicenseConfigurationsRequest = (
  input: ListLicenseConfigurationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1Filters(input.Filters, context) }),
    ...(input.LicenseConfigurationArns != null && {
      LicenseConfigurationArns: serializeAws_json1_1StringList(input.LicenseConfigurationArns, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListLicenseConversionTasksRequest = (
  input: ListLicenseConversionTasksRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1Filters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListLicenseManagerReportGeneratorsRequest = (
  input: ListLicenseManagerReportGeneratorsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListLicenseSpecificationsForResourceRequest = (
  input: ListLicenseSpecificationsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1ListLicensesRequest = (input: ListLicensesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.LicenseArns != null && { LicenseArns: serializeAws_json1_1ArnList(input.LicenseArns, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListLicenseVersionsRequest = (
  input: ListLicenseVersionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LicenseArn != null && { LicenseArn: input.LicenseArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListReceivedGrantsForOrganizationRequest = (
  input: ListReceivedGrantsForOrganizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.LicenseArn != null && { LicenseArn: input.LicenseArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListReceivedGrantsRequest = (
  input: ListReceivedGrantsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.GrantArns != null && { GrantArns: serializeAws_json1_1ArnList(input.GrantArns, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListReceivedLicensesForOrganizationRequest = (
  input: ListReceivedLicensesForOrganizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListReceivedLicensesRequest = (
  input: ListReceivedLicensesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.LicenseArns != null && { LicenseArns: serializeAws_json1_1ArnList(input.LicenseArns, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListResourceInventoryRequest = (
  input: ListResourceInventoryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1InventoryFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1ListTokensRequest = (input: ListTokensRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.TokenIds != null && { TokenIds: serializeAws_json1_1StringList(input.TokenIds, context) }),
  };
};

const serializeAws_json1_1ListUsageForLicenseConfigurationRequest = (
  input: ListUsageForLicenseConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1Filters(input.Filters, context) }),
    ...(input.LicenseConfigurationArn != null && { LicenseConfigurationArn: input.LicenseConfigurationArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1MaxSize3StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1Metadata = (input: Metadata, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1MetadataList = (input: Metadata[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Metadata(entry, context);
    });
};

const serializeAws_json1_1OrganizationConfiguration = (
  input: OrganizationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.EnableIntegration != null && { EnableIntegration: input.EnableIntegration }),
  };
};

const serializeAws_json1_1PrincipalArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ProductInformation = (input: ProductInformation, context: __SerdeContext): any => {
  return {
    ...(input.ProductInformationFilterList != null && {
      ProductInformationFilterList: serializeAws_json1_1ProductInformationFilterList(
        input.ProductInformationFilterList,
        context
      ),
    }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
  };
};

const serializeAws_json1_1ProductInformationFilter = (
  input: ProductInformationFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.ProductInformationFilterComparator != null && {
      ProductInformationFilterComparator: input.ProductInformationFilterComparator,
    }),
    ...(input.ProductInformationFilterName != null && {
      ProductInformationFilterName: input.ProductInformationFilterName,
    }),
    ...(input.ProductInformationFilterValue != null && {
      ProductInformationFilterValue: serializeAws_json1_1StringList(input.ProductInformationFilterValue, context),
    }),
  };
};

const serializeAws_json1_1ProductInformationFilterList = (
  input: ProductInformationFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ProductInformationFilter(entry, context);
    });
};

const serializeAws_json1_1ProductInformationList = (input: ProductInformation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ProductInformation(entry, context);
    });
};

const serializeAws_json1_1ProvisionalConfiguration = (
  input: ProvisionalConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxTimeToLiveInMinutes != null && { MaxTimeToLiveInMinutes: input.MaxTimeToLiveInMinutes }),
  };
};

const serializeAws_json1_1RejectGrantRequest = (input: RejectGrantRequest, context: __SerdeContext): any => {
  return {
    ...(input.GrantArn != null && { GrantArn: input.GrantArn }),
  };
};

const serializeAws_json1_1ReportContext = (input: ReportContext, context: __SerdeContext): any => {
  return {
    ...(input.licenseConfigurationArns != null && {
      licenseConfigurationArns: serializeAws_json1_1ArnList(input.licenseConfigurationArns, context),
    }),
  };
};

const serializeAws_json1_1ReportFrequency = (input: ReportFrequency, context: __SerdeContext): any => {
  return {
    ...(input.period != null && { period: input.period }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_json1_1ReportTypeList = (input: (ReportType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateLicenseConfigurationRequest = (
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
    ...(input.LicenseRules != null && { LicenseRules: serializeAws_json1_1StringList(input.LicenseRules, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ProductInformationList != null && {
      ProductInformationList: serializeAws_json1_1ProductInformationList(input.ProductInformationList, context),
    }),
  };
};

const serializeAws_json1_1UpdateLicenseManagerReportGeneratorRequest = (
  input: UpdateLicenseManagerReportGeneratorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientToken != null && { ClientToken: input.ClientToken }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.LicenseManagerReportGeneratorArn != null && {
      LicenseManagerReportGeneratorArn: input.LicenseManagerReportGeneratorArn,
    }),
    ...(input.ReportContext != null && {
      ReportContext: serializeAws_json1_1ReportContext(input.ReportContext, context),
    }),
    ...(input.ReportFrequency != null && {
      ReportFrequency: serializeAws_json1_1ReportFrequency(input.ReportFrequency, context),
    }),
    ...(input.ReportGeneratorName != null && { ReportGeneratorName: input.ReportGeneratorName }),
    ...(input.Type != null && { Type: serializeAws_json1_1ReportTypeList(input.Type, context) }),
  };
};

const serializeAws_json1_1UpdateLicenseSpecificationsForResourceRequest = (
  input: UpdateLicenseSpecificationsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AddLicenseSpecifications != null && {
      AddLicenseSpecifications: serializeAws_json1_1LicenseSpecifications(input.AddLicenseSpecifications, context),
    }),
    ...(input.RemoveLicenseSpecifications != null && {
      RemoveLicenseSpecifications: serializeAws_json1_1LicenseSpecifications(
        input.RemoveLicenseSpecifications,
        context
      ),
    }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1UpdateServiceSettingsRequest = (
  input: UpdateServiceSettingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EnableCrossAccountsDiscovery != null && {
      EnableCrossAccountsDiscovery: input.EnableCrossAccountsDiscovery,
    }),
    ...(input.OrganizationConfiguration != null && {
      OrganizationConfiguration: serializeAws_json1_1OrganizationConfiguration(
        input.OrganizationConfiguration,
        context
      ),
    }),
    ...(input.S3BucketArn != null && { S3BucketArn: input.S3BucketArn }),
    ...(input.SnsTopicArn != null && { SnsTopicArn: input.SnsTopicArn }),
  };
};

const deserializeAws_json1_1AcceptGrantResponse = (output: any, context: __SerdeContext): AcceptGrantResponse => {
  return {
    GrantArn: __expectString(output.GrantArn),
    Status: __expectString(output.Status),
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1AllowedOperationList = (
  output: any,
  context: __SerdeContext
): (AllowedOperation | string)[] => {
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

const deserializeAws_json1_1ArnList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1AuthorizationException = (output: any, context: __SerdeContext): AuthorizationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1AutomatedDiscoveryInformation = (
  output: any,
  context: __SerdeContext
): AutomatedDiscoveryInformation => {
  return {
    LastRunTime:
      output.LastRunTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastRunTime)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1BorrowConfiguration = (output: any, context: __SerdeContext): BorrowConfiguration => {
  return {
    AllowEarlyCheckIn: __expectBoolean(output.AllowEarlyCheckIn),
    MaxTimeToLiveInMinutes: __expectInt32(output.MaxTimeToLiveInMinutes),
  } as any;
};

const deserializeAws_json1_1CheckInLicenseResponse = (output: any, context: __SerdeContext): CheckInLicenseResponse => {
  return {} as any;
};

const deserializeAws_json1_1CheckoutBorrowLicenseResponse = (
  output: any,
  context: __SerdeContext
): CheckoutBorrowLicenseResponse => {
  return {
    CheckoutMetadata:
      output.CheckoutMetadata != null
        ? deserializeAws_json1_1MetadataList(output.CheckoutMetadata, context)
        : undefined,
    EntitlementsAllowed:
      output.EntitlementsAllowed != null
        ? deserializeAws_json1_1EntitlementDataList(output.EntitlementsAllowed, context)
        : undefined,
    Expiration: __expectString(output.Expiration),
    IssuedAt: __expectString(output.IssuedAt),
    LicenseArn: __expectString(output.LicenseArn),
    LicenseConsumptionToken: __expectString(output.LicenseConsumptionToken),
    NodeId: __expectString(output.NodeId),
    SignedToken: __expectString(output.SignedToken),
  } as any;
};

const deserializeAws_json1_1CheckoutLicenseResponse = (
  output: any,
  context: __SerdeContext
): CheckoutLicenseResponse => {
  return {
    CheckoutType: __expectString(output.CheckoutType),
    EntitlementsAllowed:
      output.EntitlementsAllowed != null
        ? deserializeAws_json1_1EntitlementDataList(output.EntitlementsAllowed, context)
        : undefined,
    Expiration: __expectString(output.Expiration),
    IssuedAt: __expectString(output.IssuedAt),
    LicenseArn: __expectString(output.LicenseArn),
    LicenseConsumptionToken: __expectString(output.LicenseConsumptionToken),
    NodeId: __expectString(output.NodeId),
    SignedToken: __expectString(output.SignedToken),
  } as any;
};

const deserializeAws_json1_1ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ConsumedLicenseSummary = (output: any, context: __SerdeContext): ConsumedLicenseSummary => {
  return {
    ConsumedLicenses: __expectLong(output.ConsumedLicenses),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_json1_1ConsumedLicenseSummaryList = (
  output: any,
  context: __SerdeContext
): ConsumedLicenseSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConsumedLicenseSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ConsumptionConfiguration = (
  output: any,
  context: __SerdeContext
): ConsumptionConfiguration => {
  return {
    BorrowConfiguration:
      output.BorrowConfiguration != null
        ? deserializeAws_json1_1BorrowConfiguration(output.BorrowConfiguration, context)
        : undefined,
    ProvisionalConfiguration:
      output.ProvisionalConfiguration != null
        ? deserializeAws_json1_1ProvisionalConfiguration(output.ProvisionalConfiguration, context)
        : undefined,
    RenewType: __expectString(output.RenewType),
  } as any;
};

const deserializeAws_json1_1CreateGrantResponse = (output: any, context: __SerdeContext): CreateGrantResponse => {
  return {
    GrantArn: __expectString(output.GrantArn),
    Status: __expectString(output.Status),
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_json1_1CreateGrantVersionResponse = (
  output: any,
  context: __SerdeContext
): CreateGrantVersionResponse => {
  return {
    GrantArn: __expectString(output.GrantArn),
    Status: __expectString(output.Status),
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_json1_1CreateLicenseConfigurationResponse = (
  output: any,
  context: __SerdeContext
): CreateLicenseConfigurationResponse => {
  return {
    LicenseConfigurationArn: __expectString(output.LicenseConfigurationArn),
  } as any;
};

const deserializeAws_json1_1CreateLicenseConversionTaskForResourceResponse = (
  output: any,
  context: __SerdeContext
): CreateLicenseConversionTaskForResourceResponse => {
  return {
    LicenseConversionTaskId: __expectString(output.LicenseConversionTaskId),
  } as any;
};

const deserializeAws_json1_1CreateLicenseManagerReportGeneratorResponse = (
  output: any,
  context: __SerdeContext
): CreateLicenseManagerReportGeneratorResponse => {
  return {
    LicenseManagerReportGeneratorArn: __expectString(output.LicenseManagerReportGeneratorArn),
  } as any;
};

const deserializeAws_json1_1CreateLicenseResponse = (output: any, context: __SerdeContext): CreateLicenseResponse => {
  return {
    LicenseArn: __expectString(output.LicenseArn),
    Status: __expectString(output.Status),
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_json1_1CreateLicenseVersionResponse = (
  output: any,
  context: __SerdeContext
): CreateLicenseVersionResponse => {
  return {
    LicenseArn: __expectString(output.LicenseArn),
    Status: __expectString(output.Status),
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_json1_1CreateTokenResponse = (output: any, context: __SerdeContext): CreateTokenResponse => {
  return {
    Token: __expectString(output.Token),
    TokenId: __expectString(output.TokenId),
    TokenType: __expectString(output.TokenType),
  } as any;
};

const deserializeAws_json1_1DatetimeRange = (output: any, context: __SerdeContext): DatetimeRange => {
  return {
    Begin: __expectString(output.Begin),
    End: __expectString(output.End),
  } as any;
};

const deserializeAws_json1_1DeleteGrantResponse = (output: any, context: __SerdeContext): DeleteGrantResponse => {
  return {
    GrantArn: __expectString(output.GrantArn),
    Status: __expectString(output.Status),
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_json1_1DeleteLicenseConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteLicenseConfigurationResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteLicenseManagerReportGeneratorResponse = (
  output: any,
  context: __SerdeContext
): DeleteLicenseManagerReportGeneratorResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteLicenseResponse = (output: any, context: __SerdeContext): DeleteLicenseResponse => {
  return {
    DeletionDate: __expectString(output.DeletionDate),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1DeleteTokenResponse = (output: any, context: __SerdeContext): DeleteTokenResponse => {
  return {} as any;
};

const deserializeAws_json1_1Entitlement = (output: any, context: __SerdeContext): Entitlement => {
  return {
    AllowCheckIn: __expectBoolean(output.AllowCheckIn),
    MaxCount: __expectLong(output.MaxCount),
    Name: __expectString(output.Name),
    Overage: __expectBoolean(output.Overage),
    Unit: __expectString(output.Unit),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1EntitlementData = (output: any, context: __SerdeContext): EntitlementData => {
  return {
    Name: __expectString(output.Name),
    Unit: __expectString(output.Unit),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1EntitlementDataList = (output: any, context: __SerdeContext): EntitlementData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EntitlementData(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1EntitlementList = (output: any, context: __SerdeContext): Entitlement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Entitlement(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1EntitlementNotAllowedException = (
  output: any,
  context: __SerdeContext
): EntitlementNotAllowedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1EntitlementUsage = (output: any, context: __SerdeContext): EntitlementUsage => {
  return {
    ConsumedValue: __expectString(output.ConsumedValue),
    MaxCount: __expectString(output.MaxCount),
    Name: __expectString(output.Name),
    Unit: __expectString(output.Unit),
  } as any;
};

const deserializeAws_json1_1EntitlementUsageList = (output: any, context: __SerdeContext): EntitlementUsage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EntitlementUsage(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ExtendLicenseConsumptionResponse = (
  output: any,
  context: __SerdeContext
): ExtendLicenseConsumptionResponse => {
  return {
    Expiration: __expectString(output.Expiration),
    LicenseConsumptionToken: __expectString(output.LicenseConsumptionToken),
  } as any;
};

const deserializeAws_json1_1FailedDependencyException = (
  output: any,
  context: __SerdeContext
): FailedDependencyException => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1FilterLimitExceededException = (
  output: any,
  context: __SerdeContext
): FilterLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1GetAccessTokenResponse = (output: any, context: __SerdeContext): GetAccessTokenResponse => {
  return {
    AccessToken: __expectString(output.AccessToken),
  } as any;
};

const deserializeAws_json1_1GetGrantResponse = (output: any, context: __SerdeContext): GetGrantResponse => {
  return {
    Grant: output.Grant != null ? deserializeAws_json1_1Grant(output.Grant, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetLicenseConfigurationResponse = (
  output: any,
  context: __SerdeContext
): GetLicenseConfigurationResponse => {
  return {
    AutomatedDiscoveryInformation:
      output.AutomatedDiscoveryInformation != null
        ? deserializeAws_json1_1AutomatedDiscoveryInformation(output.AutomatedDiscoveryInformation, context)
        : undefined,
    ConsumedLicenseSummaryList:
      output.ConsumedLicenseSummaryList != null
        ? deserializeAws_json1_1ConsumedLicenseSummaryList(output.ConsumedLicenseSummaryList, context)
        : undefined,
    ConsumedLicenses: __expectLong(output.ConsumedLicenses),
    Description: __expectString(output.Description),
    DisassociateWhenNotFound: __expectBoolean(output.DisassociateWhenNotFound),
    LicenseConfigurationArn: __expectString(output.LicenseConfigurationArn),
    LicenseConfigurationId: __expectString(output.LicenseConfigurationId),
    LicenseCount: __expectLong(output.LicenseCount),
    LicenseCountHardLimit: __expectBoolean(output.LicenseCountHardLimit),
    LicenseCountingType: __expectString(output.LicenseCountingType),
    LicenseRules:
      output.LicenseRules != null ? deserializeAws_json1_1StringList(output.LicenseRules, context) : undefined,
    ManagedResourceSummaryList:
      output.ManagedResourceSummaryList != null
        ? deserializeAws_json1_1ManagedResourceSummaryList(output.ManagedResourceSummaryList, context)
        : undefined,
    Name: __expectString(output.Name),
    OwnerAccountId: __expectString(output.OwnerAccountId),
    ProductInformationList:
      output.ProductInformationList != null
        ? deserializeAws_json1_1ProductInformationList(output.ProductInformationList, context)
        : undefined,
    Status: __expectString(output.Status),
    Tags: output.Tags != null ? deserializeAws_json1_1TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetLicenseConversionTaskResponse = (
  output: any,
  context: __SerdeContext
): GetLicenseConversionTaskResponse => {
  return {
    DestinationLicenseContext:
      output.DestinationLicenseContext != null
        ? deserializeAws_json1_1LicenseConversionContext(output.DestinationLicenseContext, context)
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
        ? deserializeAws_json1_1LicenseConversionContext(output.SourceLicenseContext, context)
        : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

const deserializeAws_json1_1GetLicenseManagerReportGeneratorResponse = (
  output: any,
  context: __SerdeContext
): GetLicenseManagerReportGeneratorResponse => {
  return {
    ReportGenerator:
      output.ReportGenerator != null
        ? deserializeAws_json1_1ReportGenerator(output.ReportGenerator, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetLicenseResponse = (output: any, context: __SerdeContext): GetLicenseResponse => {
  return {
    License: output.License != null ? deserializeAws_json1_1License(output.License, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetLicenseUsageResponse = (
  output: any,
  context: __SerdeContext
): GetLicenseUsageResponse => {
  return {
    LicenseUsage:
      output.LicenseUsage != null ? deserializeAws_json1_1LicenseUsage(output.LicenseUsage, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetServiceSettingsResponse = (
  output: any,
  context: __SerdeContext
): GetServiceSettingsResponse => {
  return {
    EnableCrossAccountsDiscovery: __expectBoolean(output.EnableCrossAccountsDiscovery),
    LicenseManagerResourceShareArn: __expectString(output.LicenseManagerResourceShareArn),
    OrganizationConfiguration:
      output.OrganizationConfiguration != null
        ? deserializeAws_json1_1OrganizationConfiguration(output.OrganizationConfiguration, context)
        : undefined,
    S3BucketArn: __expectString(output.S3BucketArn),
    SnsTopicArn: __expectString(output.SnsTopicArn),
  } as any;
};

const deserializeAws_json1_1Grant = (output: any, context: __SerdeContext): Grant => {
  return {
    GrantArn: __expectString(output.GrantArn),
    GrantName: __expectString(output.GrantName),
    GrantStatus: __expectString(output.GrantStatus),
    GrantedOperations:
      output.GrantedOperations != null
        ? deserializeAws_json1_1AllowedOperationList(output.GrantedOperations, context)
        : undefined,
    GranteePrincipalArn: __expectString(output.GranteePrincipalArn),
    HomeRegion: __expectString(output.HomeRegion),
    LicenseArn: __expectString(output.LicenseArn),
    ParentArn: __expectString(output.ParentArn),
    StatusReason: __expectString(output.StatusReason),
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_json1_1GrantedLicense = (output: any, context: __SerdeContext): GrantedLicense => {
  return {
    Beneficiary: __expectString(output.Beneficiary),
    ConsumptionConfiguration:
      output.ConsumptionConfiguration != null
        ? deserializeAws_json1_1ConsumptionConfiguration(output.ConsumptionConfiguration, context)
        : undefined,
    CreateTime: __expectString(output.CreateTime),
    Entitlements:
      output.Entitlements != null ? deserializeAws_json1_1EntitlementList(output.Entitlements, context) : undefined,
    HomeRegion: __expectString(output.HomeRegion),
    Issuer: output.Issuer != null ? deserializeAws_json1_1IssuerDetails(output.Issuer, context) : undefined,
    LicenseArn: __expectString(output.LicenseArn),
    LicenseMetadata:
      output.LicenseMetadata != null ? deserializeAws_json1_1MetadataList(output.LicenseMetadata, context) : undefined,
    LicenseName: __expectString(output.LicenseName),
    ProductName: __expectString(output.ProductName),
    ProductSKU: __expectString(output.ProductSKU),
    ReceivedMetadata:
      output.ReceivedMetadata != null
        ? deserializeAws_json1_1ReceivedMetadata(output.ReceivedMetadata, context)
        : undefined,
    Status: __expectString(output.Status),
    Validity: output.Validity != null ? deserializeAws_json1_1DatetimeRange(output.Validity, context) : undefined,
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_json1_1GrantedLicenseList = (output: any, context: __SerdeContext): GrantedLicense[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GrantedLicense(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GrantList = (output: any, context: __SerdeContext): Grant[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Grant(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InvalidParameterValueException = (
  output: any,
  context: __SerdeContext
): InvalidParameterValueException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidResourceStateException = (
  output: any,
  context: __SerdeContext
): InvalidResourceStateException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1IssuerDetails = (output: any, context: __SerdeContext): IssuerDetails => {
  return {
    KeyFingerprint: __expectString(output.KeyFingerprint),
    Name: __expectString(output.Name),
    SignKey: __expectString(output.SignKey),
  } as any;
};

const deserializeAws_json1_1License = (output: any, context: __SerdeContext): License => {
  return {
    Beneficiary: __expectString(output.Beneficiary),
    ConsumptionConfiguration:
      output.ConsumptionConfiguration != null
        ? deserializeAws_json1_1ConsumptionConfiguration(output.ConsumptionConfiguration, context)
        : undefined,
    CreateTime: __expectString(output.CreateTime),
    Entitlements:
      output.Entitlements != null ? deserializeAws_json1_1EntitlementList(output.Entitlements, context) : undefined,
    HomeRegion: __expectString(output.HomeRegion),
    Issuer: output.Issuer != null ? deserializeAws_json1_1IssuerDetails(output.Issuer, context) : undefined,
    LicenseArn: __expectString(output.LicenseArn),
    LicenseMetadata:
      output.LicenseMetadata != null ? deserializeAws_json1_1MetadataList(output.LicenseMetadata, context) : undefined,
    LicenseName: __expectString(output.LicenseName),
    ProductName: __expectString(output.ProductName),
    ProductSKU: __expectString(output.ProductSKU),
    Status: __expectString(output.Status),
    Validity: output.Validity != null ? deserializeAws_json1_1DatetimeRange(output.Validity, context) : undefined,
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_json1_1LicenseConfiguration = (output: any, context: __SerdeContext): LicenseConfiguration => {
  return {
    AutomatedDiscoveryInformation:
      output.AutomatedDiscoveryInformation != null
        ? deserializeAws_json1_1AutomatedDiscoveryInformation(output.AutomatedDiscoveryInformation, context)
        : undefined,
    ConsumedLicenseSummaryList:
      output.ConsumedLicenseSummaryList != null
        ? deserializeAws_json1_1ConsumedLicenseSummaryList(output.ConsumedLicenseSummaryList, context)
        : undefined,
    ConsumedLicenses: __expectLong(output.ConsumedLicenses),
    Description: __expectString(output.Description),
    DisassociateWhenNotFound: __expectBoolean(output.DisassociateWhenNotFound),
    LicenseConfigurationArn: __expectString(output.LicenseConfigurationArn),
    LicenseConfigurationId: __expectString(output.LicenseConfigurationId),
    LicenseCount: __expectLong(output.LicenseCount),
    LicenseCountHardLimit: __expectBoolean(output.LicenseCountHardLimit),
    LicenseCountingType: __expectString(output.LicenseCountingType),
    LicenseRules:
      output.LicenseRules != null ? deserializeAws_json1_1StringList(output.LicenseRules, context) : undefined,
    ManagedResourceSummaryList:
      output.ManagedResourceSummaryList != null
        ? deserializeAws_json1_1ManagedResourceSummaryList(output.ManagedResourceSummaryList, context)
        : undefined,
    Name: __expectString(output.Name),
    OwnerAccountId: __expectString(output.OwnerAccountId),
    ProductInformationList:
      output.ProductInformationList != null
        ? deserializeAws_json1_1ProductInformationList(output.ProductInformationList, context)
        : undefined,
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1LicenseConfigurationAssociation = (
  output: any,
  context: __SerdeContext
): LicenseConfigurationAssociation => {
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

const deserializeAws_json1_1LicenseConfigurationAssociations = (
  output: any,
  context: __SerdeContext
): LicenseConfigurationAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LicenseConfigurationAssociation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1LicenseConfigurations = (output: any, context: __SerdeContext): LicenseConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LicenseConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1LicenseConfigurationUsage = (
  output: any,
  context: __SerdeContext
): LicenseConfigurationUsage => {
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

const deserializeAws_json1_1LicenseConfigurationUsageList = (
  output: any,
  context: __SerdeContext
): LicenseConfigurationUsage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LicenseConfigurationUsage(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1LicenseConversionContext = (
  output: any,
  context: __SerdeContext
): LicenseConversionContext => {
  return {
    UsageOperation: __expectString(output.UsageOperation),
  } as any;
};

const deserializeAws_json1_1LicenseConversionTask = (output: any, context: __SerdeContext): LicenseConversionTask => {
  return {
    DestinationLicenseContext:
      output.DestinationLicenseContext != null
        ? deserializeAws_json1_1LicenseConversionContext(output.DestinationLicenseContext, context)
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
        ? deserializeAws_json1_1LicenseConversionContext(output.SourceLicenseContext, context)
        : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

const deserializeAws_json1_1LicenseConversionTasks = (
  output: any,
  context: __SerdeContext
): LicenseConversionTask[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LicenseConversionTask(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1LicenseList = (output: any, context: __SerdeContext): License[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1License(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1LicenseOperationFailure = (
  output: any,
  context: __SerdeContext
): LicenseOperationFailure => {
  return {
    ErrorMessage: __expectString(output.ErrorMessage),
    FailureTime:
      output.FailureTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.FailureTime)))
        : undefined,
    MetadataList:
      output.MetadataList != null ? deserializeAws_json1_1MetadataList(output.MetadataList, context) : undefined,
    OperationName: __expectString(output.OperationName),
    OperationRequestedBy: __expectString(output.OperationRequestedBy),
    ResourceArn: __expectString(output.ResourceArn),
    ResourceOwnerId: __expectString(output.ResourceOwnerId),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_json1_1LicenseOperationFailureList = (
  output: any,
  context: __SerdeContext
): LicenseOperationFailure[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LicenseOperationFailure(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1LicenseSpecification = (output: any, context: __SerdeContext): LicenseSpecification => {
  return {
    AmiAssociationScope: __expectString(output.AmiAssociationScope),
    LicenseConfigurationArn: __expectString(output.LicenseConfigurationArn),
  } as any;
};

const deserializeAws_json1_1LicenseSpecifications = (output: any, context: __SerdeContext): LicenseSpecification[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LicenseSpecification(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1LicenseUsage = (output: any, context: __SerdeContext): LicenseUsage => {
  return {
    EntitlementUsages:
      output.EntitlementUsages != null
        ? deserializeAws_json1_1EntitlementUsageList(output.EntitlementUsages, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1LicenseUsageException = (output: any, context: __SerdeContext): LicenseUsageException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ListAssociationsForLicenseConfigurationResponse = (
  output: any,
  context: __SerdeContext
): ListAssociationsForLicenseConfigurationResponse => {
  return {
    LicenseConfigurationAssociations:
      output.LicenseConfigurationAssociations != null
        ? deserializeAws_json1_1LicenseConfigurationAssociations(output.LicenseConfigurationAssociations, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListDistributedGrantsResponse = (
  output: any,
  context: __SerdeContext
): ListDistributedGrantsResponse => {
  return {
    Grants: output.Grants != null ? deserializeAws_json1_1GrantList(output.Grants, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListFailuresForLicenseConfigurationOperationsResponse = (
  output: any,
  context: __SerdeContext
): ListFailuresForLicenseConfigurationOperationsResponse => {
  return {
    LicenseOperationFailureList:
      output.LicenseOperationFailureList != null
        ? deserializeAws_json1_1LicenseOperationFailureList(output.LicenseOperationFailureList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListLicenseConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): ListLicenseConfigurationsResponse => {
  return {
    LicenseConfigurations:
      output.LicenseConfigurations != null
        ? deserializeAws_json1_1LicenseConfigurations(output.LicenseConfigurations, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListLicenseConversionTasksResponse = (
  output: any,
  context: __SerdeContext
): ListLicenseConversionTasksResponse => {
  return {
    LicenseConversionTasks:
      output.LicenseConversionTasks != null
        ? deserializeAws_json1_1LicenseConversionTasks(output.LicenseConversionTasks, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListLicenseManagerReportGeneratorsResponse = (
  output: any,
  context: __SerdeContext
): ListLicenseManagerReportGeneratorsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ReportGenerators:
      output.ReportGenerators != null
        ? deserializeAws_json1_1ReportGeneratorList(output.ReportGenerators, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListLicenseSpecificationsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListLicenseSpecificationsForResourceResponse => {
  return {
    LicenseSpecifications:
      output.LicenseSpecifications != null
        ? deserializeAws_json1_1LicenseSpecifications(output.LicenseSpecifications, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListLicensesResponse = (output: any, context: __SerdeContext): ListLicensesResponse => {
  return {
    Licenses: output.Licenses != null ? deserializeAws_json1_1LicenseList(output.Licenses, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListLicenseVersionsResponse = (
  output: any,
  context: __SerdeContext
): ListLicenseVersionsResponse => {
  return {
    Licenses: output.Licenses != null ? deserializeAws_json1_1LicenseList(output.Licenses, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListReceivedGrantsForOrganizationResponse = (
  output: any,
  context: __SerdeContext
): ListReceivedGrantsForOrganizationResponse => {
  return {
    Grants: output.Grants != null ? deserializeAws_json1_1GrantList(output.Grants, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListReceivedGrantsResponse = (
  output: any,
  context: __SerdeContext
): ListReceivedGrantsResponse => {
  return {
    Grants: output.Grants != null ? deserializeAws_json1_1GrantList(output.Grants, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListReceivedLicensesForOrganizationResponse = (
  output: any,
  context: __SerdeContext
): ListReceivedLicensesForOrganizationResponse => {
  return {
    Licenses: output.Licenses != null ? deserializeAws_json1_1GrantedLicenseList(output.Licenses, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListReceivedLicensesResponse = (
  output: any,
  context: __SerdeContext
): ListReceivedLicensesResponse => {
  return {
    Licenses: output.Licenses != null ? deserializeAws_json1_1GrantedLicenseList(output.Licenses, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListResourceInventoryResponse = (
  output: any,
  context: __SerdeContext
): ListResourceInventoryResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ResourceInventoryList:
      output.ResourceInventoryList != null
        ? deserializeAws_json1_1ResourceInventoryList(output.ResourceInventoryList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? deserializeAws_json1_1TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListTokensResponse = (output: any, context: __SerdeContext): ListTokensResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Tokens: output.Tokens != null ? deserializeAws_json1_1TokenList(output.Tokens, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListUsageForLicenseConfigurationResponse = (
  output: any,
  context: __SerdeContext
): ListUsageForLicenseConfigurationResponse => {
  return {
    LicenseConfigurationUsageList:
      output.LicenseConfigurationUsageList != null
        ? deserializeAws_json1_1LicenseConfigurationUsageList(output.LicenseConfigurationUsageList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ManagedResourceSummary = (output: any, context: __SerdeContext): ManagedResourceSummary => {
  return {
    AssociationCount: __expectLong(output.AssociationCount),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_json1_1ManagedResourceSummaryList = (
  output: any,
  context: __SerdeContext
): ManagedResourceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ManagedResourceSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1MaxSize3StringList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1Metadata = (output: any, context: __SerdeContext): Metadata => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1MetadataList = (output: any, context: __SerdeContext): Metadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Metadata(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1NoEntitlementsAllowedException = (
  output: any,
  context: __SerdeContext
): NoEntitlementsAllowedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1OrganizationConfiguration = (
  output: any,
  context: __SerdeContext
): OrganizationConfiguration => {
  return {
    EnableIntegration: __expectBoolean(output.EnableIntegration),
  } as any;
};

const deserializeAws_json1_1ProductInformation = (output: any, context: __SerdeContext): ProductInformation => {
  return {
    ProductInformationFilterList:
      output.ProductInformationFilterList != null
        ? deserializeAws_json1_1ProductInformationFilterList(output.ProductInformationFilterList, context)
        : undefined,
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_json1_1ProductInformationFilter = (
  output: any,
  context: __SerdeContext
): ProductInformationFilter => {
  return {
    ProductInformationFilterComparator: __expectString(output.ProductInformationFilterComparator),
    ProductInformationFilterName: __expectString(output.ProductInformationFilterName),
    ProductInformationFilterValue:
      output.ProductInformationFilterValue != null
        ? deserializeAws_json1_1StringList(output.ProductInformationFilterValue, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ProductInformationFilterList = (
  output: any,
  context: __SerdeContext
): ProductInformationFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ProductInformationFilter(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ProductInformationList = (output: any, context: __SerdeContext): ProductInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ProductInformation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ProvisionalConfiguration = (
  output: any,
  context: __SerdeContext
): ProvisionalConfiguration => {
  return {
    MaxTimeToLiveInMinutes: __expectInt32(output.MaxTimeToLiveInMinutes),
  } as any;
};

const deserializeAws_json1_1RateLimitExceededException = (
  output: any,
  context: __SerdeContext
): RateLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ReceivedMetadata = (output: any, context: __SerdeContext): ReceivedMetadata => {
  return {
    AllowedOperations:
      output.AllowedOperations != null
        ? deserializeAws_json1_1AllowedOperationList(output.AllowedOperations, context)
        : undefined,
    ReceivedStatus: __expectString(output.ReceivedStatus),
    ReceivedStatusReason: __expectString(output.ReceivedStatusReason),
  } as any;
};

const deserializeAws_json1_1RedirectException = (output: any, context: __SerdeContext): RedirectException => {
  return {
    Location: __expectString(output.Location),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1RejectGrantResponse = (output: any, context: __SerdeContext): RejectGrantResponse => {
  return {
    GrantArn: __expectString(output.GrantArn),
    Status: __expectString(output.Status),
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_json1_1ReportContext = (output: any, context: __SerdeContext): ReportContext => {
  return {
    licenseConfigurationArns:
      output.licenseConfigurationArns != null
        ? deserializeAws_json1_1ArnList(output.licenseConfigurationArns, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ReportFrequency = (output: any, context: __SerdeContext): ReportFrequency => {
  return {
    period: __expectString(output.period),
    value: __expectInt32(output.value),
  } as any;
};

const deserializeAws_json1_1ReportGenerator = (output: any, context: __SerdeContext): ReportGenerator => {
  return {
    CreateTime: __expectString(output.CreateTime),
    Description: __expectString(output.Description),
    LastReportGenerationTime: __expectString(output.LastReportGenerationTime),
    LastRunFailureReason: __expectString(output.LastRunFailureReason),
    LastRunStatus: __expectString(output.LastRunStatus),
    LicenseManagerReportGeneratorArn: __expectString(output.LicenseManagerReportGeneratorArn),
    ReportContext:
      output.ReportContext != null ? deserializeAws_json1_1ReportContext(output.ReportContext, context) : undefined,
    ReportCreatorAccount: __expectString(output.ReportCreatorAccount),
    ReportFrequency:
      output.ReportFrequency != null
        ? deserializeAws_json1_1ReportFrequency(output.ReportFrequency, context)
        : undefined,
    ReportGeneratorName: __expectString(output.ReportGeneratorName),
    ReportType:
      output.ReportType != null ? deserializeAws_json1_1ReportTypeList(output.ReportType, context) : undefined,
    S3Location: output.S3Location != null ? deserializeAws_json1_1S3Location(output.S3Location, context) : undefined,
    Tags: output.Tags != null ? deserializeAws_json1_1TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ReportGeneratorList = (output: any, context: __SerdeContext): ReportGenerator[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ReportGenerator(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ReportTypeList = (output: any, context: __SerdeContext): (ReportType | string)[] => {
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

const deserializeAws_json1_1ResourceInventory = (output: any, context: __SerdeContext): ResourceInventory => {
  return {
    Platform: __expectString(output.Platform),
    PlatformVersion: __expectString(output.PlatformVersion),
    ResourceArn: __expectString(output.ResourceArn),
    ResourceId: __expectString(output.ResourceId),
    ResourceOwningAccountId: __expectString(output.ResourceOwningAccountId),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_json1_1ResourceInventoryList = (output: any, context: __SerdeContext): ResourceInventory[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ResourceInventory(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ResourceLimitExceededException = (
  output: any,
  context: __SerdeContext
): ResourceLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1S3Location = (output: any, context: __SerdeContext): S3Location => {
  return {
    bucket: __expectString(output.bucket),
    keyPrefix: __expectString(output.keyPrefix),
  } as any;
};

const deserializeAws_json1_1ServerInternalException = (
  output: any,
  context: __SerdeContext
): ServerInternalException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1StringList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1TokenData = (output: any, context: __SerdeContext): TokenData => {
  return {
    ExpirationTime: __expectString(output.ExpirationTime),
    LicenseArn: __expectString(output.LicenseArn),
    RoleArns: output.RoleArns != null ? deserializeAws_json1_1ArnList(output.RoleArns, context) : undefined,
    Status: __expectString(output.Status),
    TokenId: __expectString(output.TokenId),
    TokenProperties:
      output.TokenProperties != null
        ? deserializeAws_json1_1MaxSize3StringList(output.TokenProperties, context)
        : undefined,
    TokenType: __expectString(output.TokenType),
  } as any;
};

const deserializeAws_json1_1TokenList = (output: any, context: __SerdeContext): TokenData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TokenData(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1UnsupportedDigitalSignatureMethodException = (
  output: any,
  context: __SerdeContext
): UnsupportedDigitalSignatureMethodException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateLicenseConfigurationResponse = (
  output: any,
  context: __SerdeContext
): UpdateLicenseConfigurationResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateLicenseManagerReportGeneratorResponse = (
  output: any,
  context: __SerdeContext
): UpdateLicenseManagerReportGeneratorResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateLicenseSpecificationsForResourceResponse = (
  output: any,
  context: __SerdeContext
): UpdateLicenseSpecificationsForResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateServiceSettingsResponse = (
  output: any,
  context: __SerdeContext
): UpdateServiceSettingsResponse => {
  return {} as any;
};

const deserializeAws_json1_1ValidationException = (output: any, context: __SerdeContext): ValidationException => {
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
