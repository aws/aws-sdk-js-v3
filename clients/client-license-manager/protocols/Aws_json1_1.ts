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
  ListLicenseSpecificationsForResourceCommandInput,
  ListLicenseSpecificationsForResourceCommandOutput,
} from "../commands/ListLicenseSpecificationsForResourceCommand";
import {
  ListLicenseVersionsCommandInput,
  ListLicenseVersionsCommandOutput,
} from "../commands/ListLicenseVersionsCommand";
import { ListLicensesCommandInput, ListLicensesCommandOutput } from "../commands/ListLicensesCommand";
import { ListReceivedGrantsCommandInput, ListReceivedGrantsCommandOutput } from "../commands/ListReceivedGrantsCommand";
import {
  ListReceivedLicensesCommandInput,
  ListReceivedLicensesCommandOutput,
} from "../commands/ListReceivedLicensesCommand";
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
  UpdateLicenseSpecificationsForResourceCommandInput,
  UpdateLicenseSpecificationsForResourceCommandOutput,
} from "../commands/UpdateLicenseSpecificationsForResourceCommand";
import {
  UpdateServiceSettingsCommandInput,
  UpdateServiceSettingsCommandOutput,
} from "../commands/UpdateServiceSettingsCommand";
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
  ListLicenseSpecificationsForResourceRequest,
  ListLicenseSpecificationsForResourceResponse,
  ListLicenseVersionsRequest,
  ListLicenseVersionsResponse,
  ListLicensesRequest,
  ListLicensesResponse,
  ListReceivedGrantsRequest,
  ListReceivedGrantsResponse,
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
  ResourceInventory,
  ResourceLimitExceededException,
  ResourceNotFoundException,
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
  UpdateLicenseSpecificationsForResourceRequest,
  UpdateLicenseSpecificationsForResourceResponse,
  UpdateServiceSettingsRequest,
  UpdateServiceSettingsResponse,
  ValidationException,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_json1_1AcceptGrantCommand = async (
  input: AcceptGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.AcceptGrant",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.CheckInLicense",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.CheckoutBorrowLicense",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.CheckoutLicense",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.CreateGrant",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.CreateGrantVersion",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.CreateLicense",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.CreateLicenseConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateLicenseConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateLicenseVersionCommand = async (
  input: CreateLicenseVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.CreateLicenseVersion",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.CreateToken",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.DeleteGrant",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.DeleteLicense",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.DeleteLicenseConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteLicenseConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteTokenCommand = async (
  input: DeleteTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.DeleteToken",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.ExtendLicenseConsumption",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.GetAccessToken",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.GetGrant",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.GetLicense",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.GetLicenseConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetLicenseConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetLicenseUsageCommand = async (
  input: GetLicenseUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.GetLicenseUsage",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.GetServiceSettings",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.ListAssociationsForLicenseConfiguration",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.ListDistributedGrants",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.ListFailuresForLicenseConfigurationOperations",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.ListLicenseConfigurations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListLicenseConfigurationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListLicensesCommand = async (
  input: ListLicensesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.ListLicenses",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.ListLicenseSpecificationsForResource",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.ListLicenseVersions",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.ListReceivedGrants",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListReceivedGrantsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListReceivedLicensesCommand = async (
  input: ListReceivedLicensesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.ListReceivedLicenses",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListReceivedLicensesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListResourceInventoryCommand = async (
  input: ListResourceInventoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.ListResourceInventory",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.ListTagsForResource",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.ListTokens",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.ListUsageForLicenseConfiguration",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.RejectGrant",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.TagResource",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.UntagResource",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.UpdateLicenseConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateLicenseConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateLicenseSpecificationsForResourceCommand = async (
  input: UpdateLicenseSpecificationsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.UpdateLicenseSpecificationsForResource",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.UpdateServiceSettings",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.licensemanager#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntitlementNotAllowedException":
    case "com.amazonaws.licensemanager#EntitlementNotAllowedException":
      response = {
        ...(await deserializeAws_json1_1EntitlementNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoEntitlementsAllowedException":
    case "com.amazonaws.licensemanager#NoEntitlementsAllowedException":
      response = {
        ...(await deserializeAws_json1_1NoEntitlementsAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RedirectException":
    case "com.amazonaws.licensemanager#RedirectException":
      response = {
        ...(await deserializeAws_json1_1RedirectExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedDigitalSignatureMethodException":
    case "com.amazonaws.licensemanager#UnsupportedDigitalSignatureMethodException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedDigitalSignatureMethodExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoEntitlementsAllowedException":
    case "com.amazonaws.licensemanager#NoEntitlementsAllowedException":
      response = {
        ...(await deserializeAws_json1_1NoEntitlementsAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RedirectException":
    case "com.amazonaws.licensemanager#RedirectException":
      response = {
        ...(await deserializeAws_json1_1RedirectExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedDigitalSignatureMethodException":
    case "com.amazonaws.licensemanager#UnsupportedDigitalSignatureMethodException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedDigitalSignatureMethodExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RedirectException":
    case "com.amazonaws.licensemanager#RedirectException":
      response = {
        ...(await deserializeAws_json1_1RedirectExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.licensemanager#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RedirectException":
    case "com.amazonaws.licensemanager#RedirectException":
      response = {
        ...(await deserializeAws_json1_1RedirectExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RedirectException":
    case "com.amazonaws.licensemanager#RedirectException":
      response = {
        ...(await deserializeAws_json1_1RedirectExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.licensemanager#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RedirectException":
    case "com.amazonaws.licensemanager#RedirectException":
      response = {
        ...(await deserializeAws_json1_1RedirectExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RedirectException":
    case "com.amazonaws.licensemanager#RedirectException":
      response = {
        ...(await deserializeAws_json1_1RedirectExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FilterLimitExceededException":
    case "com.amazonaws.licensemanager#FilterLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1FilterLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FilterLimitExceededException":
    case "com.amazonaws.licensemanager#FilterLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1FilterLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FailedDependencyException":
    case "com.amazonaws.licensemanager#FailedDependencyException":
      response = {
        ...(await deserializeAws_json1_1FailedDependencyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FilterLimitExceededException":
    case "com.amazonaws.licensemanager#FilterLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1FilterLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FilterLimitExceededException":
    case "com.amazonaws.licensemanager#FilterLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1FilterLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.licensemanager#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.licensemanager#InvalidResourceStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LicenseUsageException":
    case "com.amazonaws.licensemanager#LicenseUsageException":
      response = {
        ...(await deserializeAws_json1_1LicenseUsageExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
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

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(body, context);
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1AuthorizationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AuthorizationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AuthorizationException(body, context);
  const contents: AuthorizationException = {
    name: "AuthorizationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConflictException(body, context);
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1EntitlementNotAllowedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EntitlementNotAllowedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EntitlementNotAllowedException(body, context);
  const contents: EntitlementNotAllowedException = {
    name: "EntitlementNotAllowedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1FailedDependencyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FailedDependencyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FailedDependencyException(body, context);
  const contents: FailedDependencyException = {
    name: "FailedDependencyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1FilterLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FilterLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FilterLimitExceededException(body, context);
  const contents: FilterLimitExceededException = {
    name: "FilterLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterValueExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterValueException(body, context);
  const contents: InvalidParameterValueException = {
    name: "InvalidParameterValueException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidResourceStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResourceStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidResourceStateException(body, context);
  const contents: InvalidResourceStateException = {
    name: "InvalidResourceStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1LicenseUsageExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LicenseUsageException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LicenseUsageException(body, context);
  const contents: LicenseUsageException = {
    name: "LicenseUsageException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1NoEntitlementsAllowedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoEntitlementsAllowedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NoEntitlementsAllowedException(body, context);
  const contents: NoEntitlementsAllowedException = {
    name: "NoEntitlementsAllowedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1RateLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RateLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RateLimitExceededException(body, context);
  const contents: RateLimitExceededException = {
    name: "RateLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1RedirectExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RedirectException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RedirectException(body, context);
  const contents: RedirectException = {
    name: "RedirectException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceLimitExceededException(body, context);
  const contents: ResourceLimitExceededException = {
    name: "ResourceLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ServerInternalExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServerInternalException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServerInternalException(body, context);
  const contents: ServerInternalException = {
    name: "ServerInternalException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedDigitalSignatureMethodExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedDigitalSignatureMethodException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedDigitalSignatureMethodException(body, context);
  const contents: UnsupportedDigitalSignatureMethodException = {
    name: "UnsupportedDigitalSignatureMethodException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ValidationException(body, context);
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1AcceptGrantRequest = (input: AcceptGrantRequest, context: __SerdeContext): any => {
  return {
    ...(input.GrantArn !== undefined && { GrantArn: input.GrantArn }),
  };
};

const serializeAws_json1_1AllowedOperationList = (
  input: (AllowedOperation | string)[],
  context: __SerdeContext
): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1ArnList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1BorrowConfiguration = (input: BorrowConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AllowEarlyCheckIn !== undefined && { AllowEarlyCheckIn: input.AllowEarlyCheckIn }),
    ...(input.MaxTimeToLiveInMinutes !== undefined && { MaxTimeToLiveInMinutes: input.MaxTimeToLiveInMinutes }),
  };
};

const serializeAws_json1_1CheckInLicenseRequest = (input: CheckInLicenseRequest, context: __SerdeContext): any => {
  return {
    ...(input.Beneficiary !== undefined && { Beneficiary: input.Beneficiary }),
    ...(input.LicenseConsumptionToken !== undefined && { LicenseConsumptionToken: input.LicenseConsumptionToken }),
  };
};

const serializeAws_json1_1CheckoutBorrowLicenseRequest = (
  input: CheckoutBorrowLicenseRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CheckoutMetadata !== undefined && {
      CheckoutMetadata: serializeAws_json1_1MetadataList(input.CheckoutMetadata, context),
    }),
    ...(input.ClientToken !== undefined && { ClientToken: input.ClientToken }),
    ...(input.DigitalSignatureMethod !== undefined && { DigitalSignatureMethod: input.DigitalSignatureMethod }),
    ...(input.Entitlements !== undefined && {
      Entitlements: serializeAws_json1_1EntitlementDataList(input.Entitlements, context),
    }),
    ...(input.LicenseArn !== undefined && { LicenseArn: input.LicenseArn }),
    ...(input.NodeId !== undefined && { NodeId: input.NodeId }),
  };
};

const serializeAws_json1_1CheckoutLicenseRequest = (input: CheckoutLicenseRequest, context: __SerdeContext): any => {
  return {
    ...(input.Beneficiary !== undefined && { Beneficiary: input.Beneficiary }),
    ...(input.CheckoutType !== undefined && { CheckoutType: input.CheckoutType }),
    ...(input.ClientToken !== undefined && { ClientToken: input.ClientToken }),
    ...(input.Entitlements !== undefined && {
      Entitlements: serializeAws_json1_1EntitlementDataList(input.Entitlements, context),
    }),
    ...(input.KeyFingerprint !== undefined && { KeyFingerprint: input.KeyFingerprint }),
    ...(input.NodeId !== undefined && { NodeId: input.NodeId }),
    ...(input.ProductSKU !== undefined && { ProductSKU: input.ProductSKU }),
  };
};

const serializeAws_json1_1ConsumptionConfiguration = (
  input: ConsumptionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.BorrowConfiguration !== undefined && {
      BorrowConfiguration: serializeAws_json1_1BorrowConfiguration(input.BorrowConfiguration, context),
    }),
    ...(input.ProvisionalConfiguration !== undefined && {
      ProvisionalConfiguration: serializeAws_json1_1ProvisionalConfiguration(input.ProvisionalConfiguration, context),
    }),
    ...(input.RenewType !== undefined && { RenewType: input.RenewType }),
  };
};

const serializeAws_json1_1CreateGrantRequest = (input: CreateGrantRequest, context: __SerdeContext): any => {
  return {
    ...(input.AllowedOperations !== undefined && {
      AllowedOperations: serializeAws_json1_1AllowedOperationList(input.AllowedOperations, context),
    }),
    ...(input.ClientToken !== undefined && { ClientToken: input.ClientToken }),
    ...(input.GrantName !== undefined && { GrantName: input.GrantName }),
    ...(input.HomeRegion !== undefined && { HomeRegion: input.HomeRegion }),
    ...(input.LicenseArn !== undefined && { LicenseArn: input.LicenseArn }),
    ...(input.Principals !== undefined && {
      Principals: serializeAws_json1_1PrincipalArnList(input.Principals, context),
    }),
  };
};

const serializeAws_json1_1CreateGrantVersionRequest = (
  input: CreateGrantVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllowedOperations !== undefined && {
      AllowedOperations: serializeAws_json1_1AllowedOperationList(input.AllowedOperations, context),
    }),
    ...(input.ClientToken !== undefined && { ClientToken: input.ClientToken }),
    ...(input.GrantArn !== undefined && { GrantArn: input.GrantArn }),
    ...(input.GrantName !== undefined && { GrantName: input.GrantName }),
    ...(input.SourceVersion !== undefined && { SourceVersion: input.SourceVersion }),
    ...(input.Status !== undefined && { Status: input.Status }),
  };
};

const serializeAws_json1_1CreateLicenseConfigurationRequest = (
  input: CreateLicenseConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.DisassociateWhenNotFound !== undefined && { DisassociateWhenNotFound: input.DisassociateWhenNotFound }),
    ...(input.LicenseCount !== undefined && { LicenseCount: input.LicenseCount }),
    ...(input.LicenseCountHardLimit !== undefined && { LicenseCountHardLimit: input.LicenseCountHardLimit }),
    ...(input.LicenseCountingType !== undefined && { LicenseCountingType: input.LicenseCountingType }),
    ...(input.LicenseRules !== undefined && {
      LicenseRules: serializeAws_json1_1StringList(input.LicenseRules, context),
    }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.ProductInformationList !== undefined && {
      ProductInformationList: serializeAws_json1_1ProductInformationList(input.ProductInformationList, context),
    }),
    ...(input.Tags !== undefined && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateLicenseRequest = (input: CreateLicenseRequest, context: __SerdeContext): any => {
  return {
    ...(input.Beneficiary !== undefined && { Beneficiary: input.Beneficiary }),
    ...(input.ClientToken !== undefined && { ClientToken: input.ClientToken }),
    ...(input.ConsumptionConfiguration !== undefined && {
      ConsumptionConfiguration: serializeAws_json1_1ConsumptionConfiguration(input.ConsumptionConfiguration, context),
    }),
    ...(input.Entitlements !== undefined && {
      Entitlements: serializeAws_json1_1EntitlementList(input.Entitlements, context),
    }),
    ...(input.HomeRegion !== undefined && { HomeRegion: input.HomeRegion }),
    ...(input.Issuer !== undefined && { Issuer: serializeAws_json1_1Issuer(input.Issuer, context) }),
    ...(input.LicenseMetadata !== undefined && {
      LicenseMetadata: serializeAws_json1_1MetadataList(input.LicenseMetadata, context),
    }),
    ...(input.LicenseName !== undefined && { LicenseName: input.LicenseName }),
    ...(input.ProductName !== undefined && { ProductName: input.ProductName }),
    ...(input.ProductSKU !== undefined && { ProductSKU: input.ProductSKU }),
    ...(input.Validity !== undefined && { Validity: serializeAws_json1_1DatetimeRange(input.Validity, context) }),
  };
};

const serializeAws_json1_1CreateLicenseVersionRequest = (
  input: CreateLicenseVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientToken !== undefined && { ClientToken: input.ClientToken }),
    ...(input.ConsumptionConfiguration !== undefined && {
      ConsumptionConfiguration: serializeAws_json1_1ConsumptionConfiguration(input.ConsumptionConfiguration, context),
    }),
    ...(input.Entitlements !== undefined && {
      Entitlements: serializeAws_json1_1EntitlementList(input.Entitlements, context),
    }),
    ...(input.HomeRegion !== undefined && { HomeRegion: input.HomeRegion }),
    ...(input.Issuer !== undefined && { Issuer: serializeAws_json1_1Issuer(input.Issuer, context) }),
    ...(input.LicenseArn !== undefined && { LicenseArn: input.LicenseArn }),
    ...(input.LicenseMetadata !== undefined && {
      LicenseMetadata: serializeAws_json1_1MetadataList(input.LicenseMetadata, context),
    }),
    ...(input.LicenseName !== undefined && { LicenseName: input.LicenseName }),
    ...(input.ProductName !== undefined && { ProductName: input.ProductName }),
    ...(input.SourceVersion !== undefined && { SourceVersion: input.SourceVersion }),
    ...(input.Status !== undefined && { Status: input.Status }),
    ...(input.Validity !== undefined && { Validity: serializeAws_json1_1DatetimeRange(input.Validity, context) }),
  };
};

const serializeAws_json1_1CreateTokenRequest = (input: CreateTokenRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientToken !== undefined && { ClientToken: input.ClientToken }),
    ...(input.ExpirationInDays !== undefined && { ExpirationInDays: input.ExpirationInDays }),
    ...(input.LicenseArn !== undefined && { LicenseArn: input.LicenseArn }),
    ...(input.RoleArns !== undefined && { RoleArns: serializeAws_json1_1ArnList(input.RoleArns, context) }),
    ...(input.TokenProperties !== undefined && {
      TokenProperties: serializeAws_json1_1MaxSize3StringList(input.TokenProperties, context),
    }),
  };
};

const serializeAws_json1_1DatetimeRange = (input: DatetimeRange, context: __SerdeContext): any => {
  return {
    ...(input.Begin !== undefined && { Begin: input.Begin }),
    ...(input.End !== undefined && { End: input.End }),
  };
};

const serializeAws_json1_1DeleteGrantRequest = (input: DeleteGrantRequest, context: __SerdeContext): any => {
  return {
    ...(input.GrantArn !== undefined && { GrantArn: input.GrantArn }),
    ...(input.Version !== undefined && { Version: input.Version }),
  };
};

const serializeAws_json1_1DeleteLicenseConfigurationRequest = (
  input: DeleteLicenseConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LicenseConfigurationArn !== undefined && { LicenseConfigurationArn: input.LicenseConfigurationArn }),
  };
};

const serializeAws_json1_1DeleteLicenseRequest = (input: DeleteLicenseRequest, context: __SerdeContext): any => {
  return {
    ...(input.LicenseArn !== undefined && { LicenseArn: input.LicenseArn }),
    ...(input.SourceVersion !== undefined && { SourceVersion: input.SourceVersion }),
  };
};

const serializeAws_json1_1DeleteTokenRequest = (input: DeleteTokenRequest, context: __SerdeContext): any => {
  return {
    ...(input.TokenId !== undefined && { TokenId: input.TokenId }),
  };
};

const serializeAws_json1_1Entitlement = (input: Entitlement, context: __SerdeContext): any => {
  return {
    ...(input.AllowCheckIn !== undefined && { AllowCheckIn: input.AllowCheckIn }),
    ...(input.MaxCount !== undefined && { MaxCount: input.MaxCount }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Overage !== undefined && { Overage: input.Overage }),
    ...(input.Unit !== undefined && { Unit: input.Unit }),
    ...(input.Value !== undefined && { Value: input.Value }),
  };
};

const serializeAws_json1_1EntitlementData = (input: EntitlementData, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Unit !== undefined && { Unit: input.Unit }),
    ...(input.Value !== undefined && { Value: input.Value }),
  };
};

const serializeAws_json1_1EntitlementDataList = (input: EntitlementData[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1EntitlementData(entry, context));
};

const serializeAws_json1_1EntitlementList = (input: Entitlement[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1Entitlement(entry, context));
};

const serializeAws_json1_1ExtendLicenseConsumptionRequest = (
  input: ExtendLicenseConsumptionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DryRun !== undefined && { DryRun: input.DryRun }),
    ...(input.LicenseConsumptionToken !== undefined && { LicenseConsumptionToken: input.LicenseConsumptionToken }),
  };
};

const serializeAws_json1_1Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Values !== undefined && { Values: serializeAws_json1_1FilterValues(input.Values, context) }),
  };
};

const serializeAws_json1_1FilterList = (input: Filter[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1Filter(entry, context));
};

const serializeAws_json1_1Filters = (input: Filter[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1Filter(entry, context));
};

const serializeAws_json1_1FilterValues = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1GetAccessTokenRequest = (input: GetAccessTokenRequest, context: __SerdeContext): any => {
  return {
    ...(input.Token !== undefined && { Token: input.Token }),
    ...(input.TokenProperties !== undefined && {
      TokenProperties: serializeAws_json1_1MaxSize3StringList(input.TokenProperties, context),
    }),
  };
};

const serializeAws_json1_1GetGrantRequest = (input: GetGrantRequest, context: __SerdeContext): any => {
  return {
    ...(input.GrantArn !== undefined && { GrantArn: input.GrantArn }),
    ...(input.Version !== undefined && { Version: input.Version }),
  };
};

const serializeAws_json1_1GetLicenseConfigurationRequest = (
  input: GetLicenseConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LicenseConfigurationArn !== undefined && { LicenseConfigurationArn: input.LicenseConfigurationArn }),
  };
};

const serializeAws_json1_1GetLicenseRequest = (input: GetLicenseRequest, context: __SerdeContext): any => {
  return {
    ...(input.LicenseArn !== undefined && { LicenseArn: input.LicenseArn }),
    ...(input.Version !== undefined && { Version: input.Version }),
  };
};

const serializeAws_json1_1GetLicenseUsageRequest = (input: GetLicenseUsageRequest, context: __SerdeContext): any => {
  return {
    ...(input.LicenseArn !== undefined && { LicenseArn: input.LicenseArn }),
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
    ...(input.Condition !== undefined && { Condition: input.Condition }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Value !== undefined && { Value: input.Value }),
  };
};

const serializeAws_json1_1InventoryFilterList = (input: InventoryFilter[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1InventoryFilter(entry, context));
};

const serializeAws_json1_1Issuer = (input: Issuer, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.SignKey !== undefined && { SignKey: input.SignKey }),
  };
};

const serializeAws_json1_1LicenseSpecification = (input: LicenseSpecification, context: __SerdeContext): any => {
  return {
    ...(input.AmiAssociationScope !== undefined && { AmiAssociationScope: input.AmiAssociationScope }),
    ...(input.LicenseConfigurationArn !== undefined && { LicenseConfigurationArn: input.LicenseConfigurationArn }),
  };
};

const serializeAws_json1_1LicenseSpecifications = (input: LicenseSpecification[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1LicenseSpecification(entry, context));
};

const serializeAws_json1_1ListAssociationsForLicenseConfigurationRequest = (
  input: ListAssociationsForLicenseConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LicenseConfigurationArn !== undefined && { LicenseConfigurationArn: input.LicenseConfigurationArn }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListDistributedGrantsRequest = (
  input: ListDistributedGrantsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters !== undefined && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.GrantArns !== undefined && { GrantArns: serializeAws_json1_1ArnList(input.GrantArns, context) }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListFailuresForLicenseConfigurationOperationsRequest = (
  input: ListFailuresForLicenseConfigurationOperationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LicenseConfigurationArn !== undefined && { LicenseConfigurationArn: input.LicenseConfigurationArn }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListLicenseConfigurationsRequest = (
  input: ListLicenseConfigurationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters !== undefined && { Filters: serializeAws_json1_1Filters(input.Filters, context) }),
    ...(input.LicenseConfigurationArns !== undefined && {
      LicenseConfigurationArns: serializeAws_json1_1StringList(input.LicenseConfigurationArns, context),
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListLicenseSpecificationsForResourceRequest = (
  input: ListLicenseSpecificationsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1ListLicensesRequest = (input: ListLicensesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters !== undefined && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.LicenseArns !== undefined && { LicenseArns: serializeAws_json1_1ArnList(input.LicenseArns, context) }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListLicenseVersionsRequest = (
  input: ListLicenseVersionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LicenseArn !== undefined && { LicenseArn: input.LicenseArn }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListReceivedGrantsRequest = (
  input: ListReceivedGrantsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters !== undefined && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.GrantArns !== undefined && { GrantArns: serializeAws_json1_1ArnList(input.GrantArns, context) }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListReceivedLicensesRequest = (
  input: ListReceivedLicensesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters !== undefined && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.LicenseArns !== undefined && { LicenseArns: serializeAws_json1_1ArnList(input.LicenseArns, context) }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListResourceInventoryRequest = (
  input: ListResourceInventoryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters !== undefined && { Filters: serializeAws_json1_1InventoryFilterList(input.Filters, context) }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1ListTokensRequest = (input: ListTokensRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters !== undefined && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.TokenIds !== undefined && { TokenIds: serializeAws_json1_1StringList(input.TokenIds, context) }),
  };
};

const serializeAws_json1_1ListUsageForLicenseConfigurationRequest = (
  input: ListUsageForLicenseConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters !== undefined && { Filters: serializeAws_json1_1Filters(input.Filters, context) }),
    ...(input.LicenseConfigurationArn !== undefined && { LicenseConfigurationArn: input.LicenseConfigurationArn }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1MaxSize3StringList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1Metadata = (input: Metadata, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Value !== undefined && { Value: input.Value }),
  };
};

const serializeAws_json1_1MetadataList = (input: Metadata[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1Metadata(entry, context));
};

const serializeAws_json1_1OrganizationConfiguration = (
  input: OrganizationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.EnableIntegration !== undefined && { EnableIntegration: input.EnableIntegration }),
  };
};

const serializeAws_json1_1PrincipalArnList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1ProductInformation = (input: ProductInformation, context: __SerdeContext): any => {
  return {
    ...(input.ProductInformationFilterList !== undefined && {
      ProductInformationFilterList: serializeAws_json1_1ProductInformationFilterList(
        input.ProductInformationFilterList,
        context
      ),
    }),
    ...(input.ResourceType !== undefined && { ResourceType: input.ResourceType }),
  };
};

const serializeAws_json1_1ProductInformationFilter = (
  input: ProductInformationFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.ProductInformationFilterComparator !== undefined && {
      ProductInformationFilterComparator: input.ProductInformationFilterComparator,
    }),
    ...(input.ProductInformationFilterName !== undefined && {
      ProductInformationFilterName: input.ProductInformationFilterName,
    }),
    ...(input.ProductInformationFilterValue !== undefined && {
      ProductInformationFilterValue: serializeAws_json1_1StringList(input.ProductInformationFilterValue, context),
    }),
  };
};

const serializeAws_json1_1ProductInformationFilterList = (
  input: ProductInformationFilter[],
  context: __SerdeContext
): any => {
  return input.map((entry) => serializeAws_json1_1ProductInformationFilter(entry, context));
};

const serializeAws_json1_1ProductInformationList = (input: ProductInformation[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1ProductInformation(entry, context));
};

const serializeAws_json1_1ProvisionalConfiguration = (
  input: ProvisionalConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxTimeToLiveInMinutes !== undefined && { MaxTimeToLiveInMinutes: input.MaxTimeToLiveInMinutes }),
  };
};

const serializeAws_json1_1RejectGrantRequest = (input: RejectGrantRequest, context: __SerdeContext): any => {
  return {
    ...(input.GrantArn !== undefined && { GrantArn: input.GrantArn }),
  };
};

const serializeAws_json1_1StringList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Value !== undefined && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn }),
    ...(input.Tags !== undefined && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys !== undefined && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateLicenseConfigurationRequest = (
  input: UpdateLicenseConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.DisassociateWhenNotFound !== undefined && { DisassociateWhenNotFound: input.DisassociateWhenNotFound }),
    ...(input.LicenseConfigurationArn !== undefined && { LicenseConfigurationArn: input.LicenseConfigurationArn }),
    ...(input.LicenseConfigurationStatus !== undefined && {
      LicenseConfigurationStatus: input.LicenseConfigurationStatus,
    }),
    ...(input.LicenseCount !== undefined && { LicenseCount: input.LicenseCount }),
    ...(input.LicenseCountHardLimit !== undefined && { LicenseCountHardLimit: input.LicenseCountHardLimit }),
    ...(input.LicenseRules !== undefined && {
      LicenseRules: serializeAws_json1_1StringList(input.LicenseRules, context),
    }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.ProductInformationList !== undefined && {
      ProductInformationList: serializeAws_json1_1ProductInformationList(input.ProductInformationList, context),
    }),
  };
};

const serializeAws_json1_1UpdateLicenseSpecificationsForResourceRequest = (
  input: UpdateLicenseSpecificationsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AddLicenseSpecifications !== undefined && {
      AddLicenseSpecifications: serializeAws_json1_1LicenseSpecifications(input.AddLicenseSpecifications, context),
    }),
    ...(input.RemoveLicenseSpecifications !== undefined && {
      RemoveLicenseSpecifications: serializeAws_json1_1LicenseSpecifications(
        input.RemoveLicenseSpecifications,
        context
      ),
    }),
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1UpdateServiceSettingsRequest = (
  input: UpdateServiceSettingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EnableCrossAccountsDiscovery !== undefined && {
      EnableCrossAccountsDiscovery: input.EnableCrossAccountsDiscovery,
    }),
    ...(input.OrganizationConfiguration !== undefined && {
      OrganizationConfiguration: serializeAws_json1_1OrganizationConfiguration(
        input.OrganizationConfiguration,
        context
      ),
    }),
    ...(input.S3BucketArn !== undefined && { S3BucketArn: input.S3BucketArn }),
    ...(input.SnsTopicArn !== undefined && { SnsTopicArn: input.SnsTopicArn }),
  };
};

const deserializeAws_json1_1AcceptGrantResponse = (output: any, context: __SerdeContext): AcceptGrantResponse => {
  return {
    GrantArn: output.GrantArn !== undefined && output.GrantArn !== null ? output.GrantArn : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
  } as any;
};

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1AllowedOperationList = (
  output: any,
  context: __SerdeContext
): (AllowedOperation | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ArnList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1AuthorizationException = (output: any, context: __SerdeContext): AuthorizationException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1AutomatedDiscoveryInformation = (
  output: any,
  context: __SerdeContext
): AutomatedDiscoveryInformation => {
  return {
    LastRunTime:
      output.LastRunTime !== undefined && output.LastRunTime !== null
        ? new Date(Math.round(output.LastRunTime * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1BorrowConfiguration = (output: any, context: __SerdeContext): BorrowConfiguration => {
  return {
    AllowEarlyCheckIn:
      output.AllowEarlyCheckIn !== undefined && output.AllowEarlyCheckIn !== null
        ? output.AllowEarlyCheckIn
        : undefined,
    MaxTimeToLiveInMinutes:
      output.MaxTimeToLiveInMinutes !== undefined && output.MaxTimeToLiveInMinutes !== null
        ? output.MaxTimeToLiveInMinutes
        : undefined,
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
      output.CheckoutMetadata !== undefined && output.CheckoutMetadata !== null
        ? deserializeAws_json1_1MetadataList(output.CheckoutMetadata, context)
        : undefined,
    EntitlementsAllowed:
      output.EntitlementsAllowed !== undefined && output.EntitlementsAllowed !== null
        ? deserializeAws_json1_1EntitlementDataList(output.EntitlementsAllowed, context)
        : undefined,
    Expiration: output.Expiration !== undefined && output.Expiration !== null ? output.Expiration : undefined,
    IssuedAt: output.IssuedAt !== undefined && output.IssuedAt !== null ? output.IssuedAt : undefined,
    LicenseArn: output.LicenseArn !== undefined && output.LicenseArn !== null ? output.LicenseArn : undefined,
    LicenseConsumptionToken:
      output.LicenseConsumptionToken !== undefined && output.LicenseConsumptionToken !== null
        ? output.LicenseConsumptionToken
        : undefined,
    NodeId: output.NodeId !== undefined && output.NodeId !== null ? output.NodeId : undefined,
    SignedToken: output.SignedToken !== undefined && output.SignedToken !== null ? output.SignedToken : undefined,
  } as any;
};

const deserializeAws_json1_1CheckoutLicenseResponse = (
  output: any,
  context: __SerdeContext
): CheckoutLicenseResponse => {
  return {
    CheckoutType: output.CheckoutType !== undefined && output.CheckoutType !== null ? output.CheckoutType : undefined,
    EntitlementsAllowed:
      output.EntitlementsAllowed !== undefined && output.EntitlementsAllowed !== null
        ? deserializeAws_json1_1EntitlementDataList(output.EntitlementsAllowed, context)
        : undefined,
    Expiration: output.Expiration !== undefined && output.Expiration !== null ? output.Expiration : undefined,
    IssuedAt: output.IssuedAt !== undefined && output.IssuedAt !== null ? output.IssuedAt : undefined,
    LicenseConsumptionToken:
      output.LicenseConsumptionToken !== undefined && output.LicenseConsumptionToken !== null
        ? output.LicenseConsumptionToken
        : undefined,
    NodeId: output.NodeId !== undefined && output.NodeId !== null ? output.NodeId : undefined,
    SignedToken: output.SignedToken !== undefined && output.SignedToken !== null ? output.SignedToken : undefined,
  } as any;
};

const deserializeAws_json1_1ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1ConsumedLicenseSummary = (output: any, context: __SerdeContext): ConsumedLicenseSummary => {
  return {
    ConsumedLicenses:
      output.ConsumedLicenses !== undefined && output.ConsumedLicenses !== null ? output.ConsumedLicenses : undefined,
    ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
  } as any;
};

const deserializeAws_json1_1ConsumedLicenseSummaryList = (
  output: any,
  context: __SerdeContext
): ConsumedLicenseSummary[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1ConsumedLicenseSummary(entry, context));
};

const deserializeAws_json1_1ConsumptionConfiguration = (
  output: any,
  context: __SerdeContext
): ConsumptionConfiguration => {
  return {
    BorrowConfiguration:
      output.BorrowConfiguration !== undefined && output.BorrowConfiguration !== null
        ? deserializeAws_json1_1BorrowConfiguration(output.BorrowConfiguration, context)
        : undefined,
    ProvisionalConfiguration:
      output.ProvisionalConfiguration !== undefined && output.ProvisionalConfiguration !== null
        ? deserializeAws_json1_1ProvisionalConfiguration(output.ProvisionalConfiguration, context)
        : undefined,
    RenewType: output.RenewType !== undefined && output.RenewType !== null ? output.RenewType : undefined,
  } as any;
};

const deserializeAws_json1_1CreateGrantResponse = (output: any, context: __SerdeContext): CreateGrantResponse => {
  return {
    GrantArn: output.GrantArn !== undefined && output.GrantArn !== null ? output.GrantArn : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
  } as any;
};

const deserializeAws_json1_1CreateGrantVersionResponse = (
  output: any,
  context: __SerdeContext
): CreateGrantVersionResponse => {
  return {
    GrantArn: output.GrantArn !== undefined && output.GrantArn !== null ? output.GrantArn : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
  } as any;
};

const deserializeAws_json1_1CreateLicenseConfigurationResponse = (
  output: any,
  context: __SerdeContext
): CreateLicenseConfigurationResponse => {
  return {
    LicenseConfigurationArn:
      output.LicenseConfigurationArn !== undefined && output.LicenseConfigurationArn !== null
        ? output.LicenseConfigurationArn
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateLicenseResponse = (output: any, context: __SerdeContext): CreateLicenseResponse => {
  return {
    LicenseArn: output.LicenseArn !== undefined && output.LicenseArn !== null ? output.LicenseArn : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
  } as any;
};

const deserializeAws_json1_1CreateLicenseVersionResponse = (
  output: any,
  context: __SerdeContext
): CreateLicenseVersionResponse => {
  return {
    LicenseArn: output.LicenseArn !== undefined && output.LicenseArn !== null ? output.LicenseArn : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
  } as any;
};

const deserializeAws_json1_1CreateTokenResponse = (output: any, context: __SerdeContext): CreateTokenResponse => {
  return {
    Token: output.Token !== undefined && output.Token !== null ? output.Token : undefined,
    TokenId: output.TokenId !== undefined && output.TokenId !== null ? output.TokenId : undefined,
    TokenType: output.TokenType !== undefined && output.TokenType !== null ? output.TokenType : undefined,
  } as any;
};

const deserializeAws_json1_1DatetimeRange = (output: any, context: __SerdeContext): DatetimeRange => {
  return {
    Begin: output.Begin !== undefined && output.Begin !== null ? output.Begin : undefined,
    End: output.End !== undefined && output.End !== null ? output.End : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteGrantResponse = (output: any, context: __SerdeContext): DeleteGrantResponse => {
  return {
    GrantArn: output.GrantArn !== undefined && output.GrantArn !== null ? output.GrantArn : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteLicenseConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteLicenseConfigurationResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteLicenseResponse = (output: any, context: __SerdeContext): DeleteLicenseResponse => {
  return {
    DeletionDate: output.DeletionDate !== undefined && output.DeletionDate !== null ? output.DeletionDate : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteTokenResponse = (output: any, context: __SerdeContext): DeleteTokenResponse => {
  return {} as any;
};

const deserializeAws_json1_1Entitlement = (output: any, context: __SerdeContext): Entitlement => {
  return {
    AllowCheckIn: output.AllowCheckIn !== undefined && output.AllowCheckIn !== null ? output.AllowCheckIn : undefined,
    MaxCount: output.MaxCount !== undefined && output.MaxCount !== null ? output.MaxCount : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Overage: output.Overage !== undefined && output.Overage !== null ? output.Overage : undefined,
    Unit: output.Unit !== undefined && output.Unit !== null ? output.Unit : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_json1_1EntitlementData = (output: any, context: __SerdeContext): EntitlementData => {
  return {
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Unit: output.Unit !== undefined && output.Unit !== null ? output.Unit : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_json1_1EntitlementDataList = (output: any, context: __SerdeContext): EntitlementData[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1EntitlementData(entry, context));
};

const deserializeAws_json1_1EntitlementList = (output: any, context: __SerdeContext): Entitlement[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Entitlement(entry, context));
};

const deserializeAws_json1_1EntitlementNotAllowedException = (
  output: any,
  context: __SerdeContext
): EntitlementNotAllowedException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1EntitlementUsage = (output: any, context: __SerdeContext): EntitlementUsage => {
  return {
    ConsumedValue:
      output.ConsumedValue !== undefined && output.ConsumedValue !== null ? output.ConsumedValue : undefined,
    MaxCount: output.MaxCount !== undefined && output.MaxCount !== null ? output.MaxCount : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Unit: output.Unit !== undefined && output.Unit !== null ? output.Unit : undefined,
  } as any;
};

const deserializeAws_json1_1EntitlementUsageList = (output: any, context: __SerdeContext): EntitlementUsage[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1EntitlementUsage(entry, context));
};

const deserializeAws_json1_1ExtendLicenseConsumptionResponse = (
  output: any,
  context: __SerdeContext
): ExtendLicenseConsumptionResponse => {
  return {
    Expiration: output.Expiration !== undefined && output.Expiration !== null ? output.Expiration : undefined,
    LicenseConsumptionToken:
      output.LicenseConsumptionToken !== undefined && output.LicenseConsumptionToken !== null
        ? output.LicenseConsumptionToken
        : undefined,
  } as any;
};

const deserializeAws_json1_1FailedDependencyException = (
  output: any,
  context: __SerdeContext
): FailedDependencyException => {
  return {
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1FilterLimitExceededException = (
  output: any,
  context: __SerdeContext
): FilterLimitExceededException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1GetAccessTokenResponse = (output: any, context: __SerdeContext): GetAccessTokenResponse => {
  return {
    AccessToken: output.AccessToken !== undefined && output.AccessToken !== null ? output.AccessToken : undefined,
  } as any;
};

const deserializeAws_json1_1GetGrantResponse = (output: any, context: __SerdeContext): GetGrantResponse => {
  return {
    Grant:
      output.Grant !== undefined && output.Grant !== null
        ? deserializeAws_json1_1Grant(output.Grant, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetLicenseConfigurationResponse = (
  output: any,
  context: __SerdeContext
): GetLicenseConfigurationResponse => {
  return {
    AutomatedDiscoveryInformation:
      output.AutomatedDiscoveryInformation !== undefined && output.AutomatedDiscoveryInformation !== null
        ? deserializeAws_json1_1AutomatedDiscoveryInformation(output.AutomatedDiscoveryInformation, context)
        : undefined,
    ConsumedLicenseSummaryList:
      output.ConsumedLicenseSummaryList !== undefined && output.ConsumedLicenseSummaryList !== null
        ? deserializeAws_json1_1ConsumedLicenseSummaryList(output.ConsumedLicenseSummaryList, context)
        : undefined,
    ConsumedLicenses:
      output.ConsumedLicenses !== undefined && output.ConsumedLicenses !== null ? output.ConsumedLicenses : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    DisassociateWhenNotFound:
      output.DisassociateWhenNotFound !== undefined && output.DisassociateWhenNotFound !== null
        ? output.DisassociateWhenNotFound
        : undefined,
    LicenseConfigurationArn:
      output.LicenseConfigurationArn !== undefined && output.LicenseConfigurationArn !== null
        ? output.LicenseConfigurationArn
        : undefined,
    LicenseConfigurationId:
      output.LicenseConfigurationId !== undefined && output.LicenseConfigurationId !== null
        ? output.LicenseConfigurationId
        : undefined,
    LicenseCount: output.LicenseCount !== undefined && output.LicenseCount !== null ? output.LicenseCount : undefined,
    LicenseCountHardLimit:
      output.LicenseCountHardLimit !== undefined && output.LicenseCountHardLimit !== null
        ? output.LicenseCountHardLimit
        : undefined,
    LicenseCountingType:
      output.LicenseCountingType !== undefined && output.LicenseCountingType !== null
        ? output.LicenseCountingType
        : undefined,
    LicenseRules:
      output.LicenseRules !== undefined && output.LicenseRules !== null
        ? deserializeAws_json1_1StringList(output.LicenseRules, context)
        : undefined,
    ManagedResourceSummaryList:
      output.ManagedResourceSummaryList !== undefined && output.ManagedResourceSummaryList !== null
        ? deserializeAws_json1_1ManagedResourceSummaryList(output.ManagedResourceSummaryList, context)
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    OwnerAccountId:
      output.OwnerAccountId !== undefined && output.OwnerAccountId !== null ? output.OwnerAccountId : undefined,
    ProductInformationList:
      output.ProductInformationList !== undefined && output.ProductInformationList !== null
        ? deserializeAws_json1_1ProductInformationList(output.ProductInformationList, context)
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetLicenseResponse = (output: any, context: __SerdeContext): GetLicenseResponse => {
  return {
    License:
      output.License !== undefined && output.License !== null
        ? deserializeAws_json1_1License(output.License, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetLicenseUsageResponse = (
  output: any,
  context: __SerdeContext
): GetLicenseUsageResponse => {
  return {
    LicenseUsage:
      output.LicenseUsage !== undefined && output.LicenseUsage !== null
        ? deserializeAws_json1_1LicenseUsage(output.LicenseUsage, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetServiceSettingsResponse = (
  output: any,
  context: __SerdeContext
): GetServiceSettingsResponse => {
  return {
    EnableCrossAccountsDiscovery:
      output.EnableCrossAccountsDiscovery !== undefined && output.EnableCrossAccountsDiscovery !== null
        ? output.EnableCrossAccountsDiscovery
        : undefined,
    LicenseManagerResourceShareArn:
      output.LicenseManagerResourceShareArn !== undefined && output.LicenseManagerResourceShareArn !== null
        ? output.LicenseManagerResourceShareArn
        : undefined,
    OrganizationConfiguration:
      output.OrganizationConfiguration !== undefined && output.OrganizationConfiguration !== null
        ? deserializeAws_json1_1OrganizationConfiguration(output.OrganizationConfiguration, context)
        : undefined,
    S3BucketArn: output.S3BucketArn !== undefined && output.S3BucketArn !== null ? output.S3BucketArn : undefined,
    SnsTopicArn: output.SnsTopicArn !== undefined && output.SnsTopicArn !== null ? output.SnsTopicArn : undefined,
  } as any;
};

const deserializeAws_json1_1Grant = (output: any, context: __SerdeContext): Grant => {
  return {
    GrantArn: output.GrantArn !== undefined && output.GrantArn !== null ? output.GrantArn : undefined,
    GrantName: output.GrantName !== undefined && output.GrantName !== null ? output.GrantName : undefined,
    GrantStatus: output.GrantStatus !== undefined && output.GrantStatus !== null ? output.GrantStatus : undefined,
    GrantedOperations:
      output.GrantedOperations !== undefined && output.GrantedOperations !== null
        ? deserializeAws_json1_1AllowedOperationList(output.GrantedOperations, context)
        : undefined,
    GranteePrincipalArn:
      output.GranteePrincipalArn !== undefined && output.GranteePrincipalArn !== null
        ? output.GranteePrincipalArn
        : undefined,
    HomeRegion: output.HomeRegion !== undefined && output.HomeRegion !== null ? output.HomeRegion : undefined,
    LicenseArn: output.LicenseArn !== undefined && output.LicenseArn !== null ? output.LicenseArn : undefined,
    ParentArn: output.ParentArn !== undefined && output.ParentArn !== null ? output.ParentArn : undefined,
    StatusReason: output.StatusReason !== undefined && output.StatusReason !== null ? output.StatusReason : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
  } as any;
};

const deserializeAws_json1_1GrantedLicense = (output: any, context: __SerdeContext): GrantedLicense => {
  return {
    Beneficiary: output.Beneficiary !== undefined && output.Beneficiary !== null ? output.Beneficiary : undefined,
    ConsumptionConfiguration:
      output.ConsumptionConfiguration !== undefined && output.ConsumptionConfiguration !== null
        ? deserializeAws_json1_1ConsumptionConfiguration(output.ConsumptionConfiguration, context)
        : undefined,
    CreateTime: output.CreateTime !== undefined && output.CreateTime !== null ? output.CreateTime : undefined,
    Entitlements:
      output.Entitlements !== undefined && output.Entitlements !== null
        ? deserializeAws_json1_1EntitlementList(output.Entitlements, context)
        : undefined,
    HomeRegion: output.HomeRegion !== undefined && output.HomeRegion !== null ? output.HomeRegion : undefined,
    Issuer:
      output.Issuer !== undefined && output.Issuer !== null
        ? deserializeAws_json1_1IssuerDetails(output.Issuer, context)
        : undefined,
    LicenseArn: output.LicenseArn !== undefined && output.LicenseArn !== null ? output.LicenseArn : undefined,
    LicenseMetadata:
      output.LicenseMetadata !== undefined && output.LicenseMetadata !== null
        ? deserializeAws_json1_1MetadataList(output.LicenseMetadata, context)
        : undefined,
    LicenseName: output.LicenseName !== undefined && output.LicenseName !== null ? output.LicenseName : undefined,
    ProductName: output.ProductName !== undefined && output.ProductName !== null ? output.ProductName : undefined,
    ProductSKU: output.ProductSKU !== undefined && output.ProductSKU !== null ? output.ProductSKU : undefined,
    ReceivedMetadata:
      output.ReceivedMetadata !== undefined && output.ReceivedMetadata !== null
        ? deserializeAws_json1_1ReceivedMetadata(output.ReceivedMetadata, context)
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    Validity:
      output.Validity !== undefined && output.Validity !== null
        ? deserializeAws_json1_1DatetimeRange(output.Validity, context)
        : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
  } as any;
};

const deserializeAws_json1_1GrantedLicenseList = (output: any, context: __SerdeContext): GrantedLicense[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1GrantedLicense(entry, context));
};

const deserializeAws_json1_1GrantList = (output: any, context: __SerdeContext): Grant[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Grant(entry, context));
};

const deserializeAws_json1_1InvalidParameterValueException = (
  output: any,
  context: __SerdeContext
): InvalidParameterValueException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidResourceStateException = (
  output: any,
  context: __SerdeContext
): InvalidResourceStateException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1IssuerDetails = (output: any, context: __SerdeContext): IssuerDetails => {
  return {
    KeyFingerprint:
      output.KeyFingerprint !== undefined && output.KeyFingerprint !== null ? output.KeyFingerprint : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    SignKey: output.SignKey !== undefined && output.SignKey !== null ? output.SignKey : undefined,
  } as any;
};

const deserializeAws_json1_1License = (output: any, context: __SerdeContext): License => {
  return {
    Beneficiary: output.Beneficiary !== undefined && output.Beneficiary !== null ? output.Beneficiary : undefined,
    ConsumptionConfiguration:
      output.ConsumptionConfiguration !== undefined && output.ConsumptionConfiguration !== null
        ? deserializeAws_json1_1ConsumptionConfiguration(output.ConsumptionConfiguration, context)
        : undefined,
    CreateTime: output.CreateTime !== undefined && output.CreateTime !== null ? output.CreateTime : undefined,
    Entitlements:
      output.Entitlements !== undefined && output.Entitlements !== null
        ? deserializeAws_json1_1EntitlementList(output.Entitlements, context)
        : undefined,
    HomeRegion: output.HomeRegion !== undefined && output.HomeRegion !== null ? output.HomeRegion : undefined,
    Issuer:
      output.Issuer !== undefined && output.Issuer !== null
        ? deserializeAws_json1_1IssuerDetails(output.Issuer, context)
        : undefined,
    LicenseArn: output.LicenseArn !== undefined && output.LicenseArn !== null ? output.LicenseArn : undefined,
    LicenseMetadata:
      output.LicenseMetadata !== undefined && output.LicenseMetadata !== null
        ? deserializeAws_json1_1MetadataList(output.LicenseMetadata, context)
        : undefined,
    LicenseName: output.LicenseName !== undefined && output.LicenseName !== null ? output.LicenseName : undefined,
    ProductName: output.ProductName !== undefined && output.ProductName !== null ? output.ProductName : undefined,
    ProductSKU: output.ProductSKU !== undefined && output.ProductSKU !== null ? output.ProductSKU : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    Validity:
      output.Validity !== undefined && output.Validity !== null
        ? deserializeAws_json1_1DatetimeRange(output.Validity, context)
        : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
  } as any;
};

const deserializeAws_json1_1LicenseConfiguration = (output: any, context: __SerdeContext): LicenseConfiguration => {
  return {
    AutomatedDiscoveryInformation:
      output.AutomatedDiscoveryInformation !== undefined && output.AutomatedDiscoveryInformation !== null
        ? deserializeAws_json1_1AutomatedDiscoveryInformation(output.AutomatedDiscoveryInformation, context)
        : undefined,
    ConsumedLicenseSummaryList:
      output.ConsumedLicenseSummaryList !== undefined && output.ConsumedLicenseSummaryList !== null
        ? deserializeAws_json1_1ConsumedLicenseSummaryList(output.ConsumedLicenseSummaryList, context)
        : undefined,
    ConsumedLicenses:
      output.ConsumedLicenses !== undefined && output.ConsumedLicenses !== null ? output.ConsumedLicenses : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    DisassociateWhenNotFound:
      output.DisassociateWhenNotFound !== undefined && output.DisassociateWhenNotFound !== null
        ? output.DisassociateWhenNotFound
        : undefined,
    LicenseConfigurationArn:
      output.LicenseConfigurationArn !== undefined && output.LicenseConfigurationArn !== null
        ? output.LicenseConfigurationArn
        : undefined,
    LicenseConfigurationId:
      output.LicenseConfigurationId !== undefined && output.LicenseConfigurationId !== null
        ? output.LicenseConfigurationId
        : undefined,
    LicenseCount: output.LicenseCount !== undefined && output.LicenseCount !== null ? output.LicenseCount : undefined,
    LicenseCountHardLimit:
      output.LicenseCountHardLimit !== undefined && output.LicenseCountHardLimit !== null
        ? output.LicenseCountHardLimit
        : undefined,
    LicenseCountingType:
      output.LicenseCountingType !== undefined && output.LicenseCountingType !== null
        ? output.LicenseCountingType
        : undefined,
    LicenseRules:
      output.LicenseRules !== undefined && output.LicenseRules !== null
        ? deserializeAws_json1_1StringList(output.LicenseRules, context)
        : undefined,
    ManagedResourceSummaryList:
      output.ManagedResourceSummaryList !== undefined && output.ManagedResourceSummaryList !== null
        ? deserializeAws_json1_1ManagedResourceSummaryList(output.ManagedResourceSummaryList, context)
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    OwnerAccountId:
      output.OwnerAccountId !== undefined && output.OwnerAccountId !== null ? output.OwnerAccountId : undefined,
    ProductInformationList:
      output.ProductInformationList !== undefined && output.ProductInformationList !== null
        ? deserializeAws_json1_1ProductInformationList(output.ProductInformationList, context)
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  } as any;
};

const deserializeAws_json1_1LicenseConfigurationAssociation = (
  output: any,
  context: __SerdeContext
): LicenseConfigurationAssociation => {
  return {
    AmiAssociationScope:
      output.AmiAssociationScope !== undefined && output.AmiAssociationScope !== null
        ? output.AmiAssociationScope
        : undefined,
    AssociationTime:
      output.AssociationTime !== undefined && output.AssociationTime !== null
        ? new Date(Math.round(output.AssociationTime * 1000))
        : undefined,
    ResourceArn: output.ResourceArn !== undefined && output.ResourceArn !== null ? output.ResourceArn : undefined,
    ResourceOwnerId:
      output.ResourceOwnerId !== undefined && output.ResourceOwnerId !== null ? output.ResourceOwnerId : undefined,
    ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
  } as any;
};

const deserializeAws_json1_1LicenseConfigurationAssociations = (
  output: any,
  context: __SerdeContext
): LicenseConfigurationAssociation[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1LicenseConfigurationAssociation(entry, context));
};

const deserializeAws_json1_1LicenseConfigurations = (output: any, context: __SerdeContext): LicenseConfiguration[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1LicenseConfiguration(entry, context));
};

const deserializeAws_json1_1LicenseConfigurationUsage = (
  output: any,
  context: __SerdeContext
): LicenseConfigurationUsage => {
  return {
    AssociationTime:
      output.AssociationTime !== undefined && output.AssociationTime !== null
        ? new Date(Math.round(output.AssociationTime * 1000))
        : undefined,
    ConsumedLicenses:
      output.ConsumedLicenses !== undefined && output.ConsumedLicenses !== null ? output.ConsumedLicenses : undefined,
    ResourceArn: output.ResourceArn !== undefined && output.ResourceArn !== null ? output.ResourceArn : undefined,
    ResourceOwnerId:
      output.ResourceOwnerId !== undefined && output.ResourceOwnerId !== null ? output.ResourceOwnerId : undefined,
    ResourceStatus:
      output.ResourceStatus !== undefined && output.ResourceStatus !== null ? output.ResourceStatus : undefined,
    ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
  } as any;
};

const deserializeAws_json1_1LicenseConfigurationUsageList = (
  output: any,
  context: __SerdeContext
): LicenseConfigurationUsage[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1LicenseConfigurationUsage(entry, context));
};

const deserializeAws_json1_1LicenseList = (output: any, context: __SerdeContext): License[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1License(entry, context));
};

const deserializeAws_json1_1LicenseOperationFailure = (
  output: any,
  context: __SerdeContext
): LicenseOperationFailure => {
  return {
    ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
    FailureTime:
      output.FailureTime !== undefined && output.FailureTime !== null
        ? new Date(Math.round(output.FailureTime * 1000))
        : undefined,
    MetadataList:
      output.MetadataList !== undefined && output.MetadataList !== null
        ? deserializeAws_json1_1MetadataList(output.MetadataList, context)
        : undefined,
    OperationName:
      output.OperationName !== undefined && output.OperationName !== null ? output.OperationName : undefined,
    OperationRequestedBy:
      output.OperationRequestedBy !== undefined && output.OperationRequestedBy !== null
        ? output.OperationRequestedBy
        : undefined,
    ResourceArn: output.ResourceArn !== undefined && output.ResourceArn !== null ? output.ResourceArn : undefined,
    ResourceOwnerId:
      output.ResourceOwnerId !== undefined && output.ResourceOwnerId !== null ? output.ResourceOwnerId : undefined,
    ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
  } as any;
};

const deserializeAws_json1_1LicenseOperationFailureList = (
  output: any,
  context: __SerdeContext
): LicenseOperationFailure[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1LicenseOperationFailure(entry, context));
};

const deserializeAws_json1_1LicenseSpecification = (output: any, context: __SerdeContext): LicenseSpecification => {
  return {
    AmiAssociationScope:
      output.AmiAssociationScope !== undefined && output.AmiAssociationScope !== null
        ? output.AmiAssociationScope
        : undefined,
    LicenseConfigurationArn:
      output.LicenseConfigurationArn !== undefined && output.LicenseConfigurationArn !== null
        ? output.LicenseConfigurationArn
        : undefined,
  } as any;
};

const deserializeAws_json1_1LicenseSpecifications = (output: any, context: __SerdeContext): LicenseSpecification[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1LicenseSpecification(entry, context));
};

const deserializeAws_json1_1LicenseUsage = (output: any, context: __SerdeContext): LicenseUsage => {
  return {
    EntitlementUsages:
      output.EntitlementUsages !== undefined && output.EntitlementUsages !== null
        ? deserializeAws_json1_1EntitlementUsageList(output.EntitlementUsages, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1LicenseUsageException = (output: any, context: __SerdeContext): LicenseUsageException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1ListAssociationsForLicenseConfigurationResponse = (
  output: any,
  context: __SerdeContext
): ListAssociationsForLicenseConfigurationResponse => {
  return {
    LicenseConfigurationAssociations:
      output.LicenseConfigurationAssociations !== undefined && output.LicenseConfigurationAssociations !== null
        ? deserializeAws_json1_1LicenseConfigurationAssociations(output.LicenseConfigurationAssociations, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1ListDistributedGrantsResponse = (
  output: any,
  context: __SerdeContext
): ListDistributedGrantsResponse => {
  return {
    Grants:
      output.Grants !== undefined && output.Grants !== null
        ? deserializeAws_json1_1GrantList(output.Grants, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1ListFailuresForLicenseConfigurationOperationsResponse = (
  output: any,
  context: __SerdeContext
): ListFailuresForLicenseConfigurationOperationsResponse => {
  return {
    LicenseOperationFailureList:
      output.LicenseOperationFailureList !== undefined && output.LicenseOperationFailureList !== null
        ? deserializeAws_json1_1LicenseOperationFailureList(output.LicenseOperationFailureList, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1ListLicenseConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): ListLicenseConfigurationsResponse => {
  return {
    LicenseConfigurations:
      output.LicenseConfigurations !== undefined && output.LicenseConfigurations !== null
        ? deserializeAws_json1_1LicenseConfigurations(output.LicenseConfigurations, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1ListLicenseSpecificationsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListLicenseSpecificationsForResourceResponse => {
  return {
    LicenseSpecifications:
      output.LicenseSpecifications !== undefined && output.LicenseSpecifications !== null
        ? deserializeAws_json1_1LicenseSpecifications(output.LicenseSpecifications, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1ListLicensesResponse = (output: any, context: __SerdeContext): ListLicensesResponse => {
  return {
    Licenses:
      output.Licenses !== undefined && output.Licenses !== null
        ? deserializeAws_json1_1LicenseList(output.Licenses, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1ListLicenseVersionsResponse = (
  output: any,
  context: __SerdeContext
): ListLicenseVersionsResponse => {
  return {
    Licenses:
      output.Licenses !== undefined && output.Licenses !== null
        ? deserializeAws_json1_1LicenseList(output.Licenses, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1ListReceivedGrantsResponse = (
  output: any,
  context: __SerdeContext
): ListReceivedGrantsResponse => {
  return {
    Grants:
      output.Grants !== undefined && output.Grants !== null
        ? deserializeAws_json1_1GrantList(output.Grants, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1ListReceivedLicensesResponse = (
  output: any,
  context: __SerdeContext
): ListReceivedLicensesResponse => {
  return {
    Licenses:
      output.Licenses !== undefined && output.Licenses !== null
        ? deserializeAws_json1_1GrantedLicenseList(output.Licenses, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1ListResourceInventoryResponse = (
  output: any,
  context: __SerdeContext
): ListResourceInventoryResponse => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    ResourceInventoryList:
      output.ResourceInventoryList !== undefined && output.ResourceInventoryList !== null
        ? deserializeAws_json1_1ResourceInventoryList(output.ResourceInventoryList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTokensResponse = (output: any, context: __SerdeContext): ListTokensResponse => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Tokens:
      output.Tokens !== undefined && output.Tokens !== null
        ? deserializeAws_json1_1TokenList(output.Tokens, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListUsageForLicenseConfigurationResponse = (
  output: any,
  context: __SerdeContext
): ListUsageForLicenseConfigurationResponse => {
  return {
    LicenseConfigurationUsageList:
      output.LicenseConfigurationUsageList !== undefined && output.LicenseConfigurationUsageList !== null
        ? deserializeAws_json1_1LicenseConfigurationUsageList(output.LicenseConfigurationUsageList, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1ManagedResourceSummary = (output: any, context: __SerdeContext): ManagedResourceSummary => {
  return {
    AssociationCount:
      output.AssociationCount !== undefined && output.AssociationCount !== null ? output.AssociationCount : undefined,
    ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
  } as any;
};

const deserializeAws_json1_1ManagedResourceSummaryList = (
  output: any,
  context: __SerdeContext
): ManagedResourceSummary[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1ManagedResourceSummary(entry, context));
};

const deserializeAws_json1_1MaxSize3StringList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Metadata = (output: any, context: __SerdeContext): Metadata => {
  return {
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_json1_1MetadataList = (output: any, context: __SerdeContext): Metadata[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Metadata(entry, context));
};

const deserializeAws_json1_1NoEntitlementsAllowedException = (
  output: any,
  context: __SerdeContext
): NoEntitlementsAllowedException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1OrganizationConfiguration = (
  output: any,
  context: __SerdeContext
): OrganizationConfiguration => {
  return {
    EnableIntegration:
      output.EnableIntegration !== undefined && output.EnableIntegration !== null
        ? output.EnableIntegration
        : undefined,
  } as any;
};

const deserializeAws_json1_1ProductInformation = (output: any, context: __SerdeContext): ProductInformation => {
  return {
    ProductInformationFilterList:
      output.ProductInformationFilterList !== undefined && output.ProductInformationFilterList !== null
        ? deserializeAws_json1_1ProductInformationFilterList(output.ProductInformationFilterList, context)
        : undefined,
    ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
  } as any;
};

const deserializeAws_json1_1ProductInformationFilter = (
  output: any,
  context: __SerdeContext
): ProductInformationFilter => {
  return {
    ProductInformationFilterComparator:
      output.ProductInformationFilterComparator !== undefined && output.ProductInformationFilterComparator !== null
        ? output.ProductInformationFilterComparator
        : undefined,
    ProductInformationFilterName:
      output.ProductInformationFilterName !== undefined && output.ProductInformationFilterName !== null
        ? output.ProductInformationFilterName
        : undefined,
    ProductInformationFilterValue:
      output.ProductInformationFilterValue !== undefined && output.ProductInformationFilterValue !== null
        ? deserializeAws_json1_1StringList(output.ProductInformationFilterValue, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ProductInformationFilterList = (
  output: any,
  context: __SerdeContext
): ProductInformationFilter[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1ProductInformationFilter(entry, context));
};

const deserializeAws_json1_1ProductInformationList = (output: any, context: __SerdeContext): ProductInformation[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1ProductInformation(entry, context));
};

const deserializeAws_json1_1ProvisionalConfiguration = (
  output: any,
  context: __SerdeContext
): ProvisionalConfiguration => {
  return {
    MaxTimeToLiveInMinutes:
      output.MaxTimeToLiveInMinutes !== undefined && output.MaxTimeToLiveInMinutes !== null
        ? output.MaxTimeToLiveInMinutes
        : undefined,
  } as any;
};

const deserializeAws_json1_1RateLimitExceededException = (
  output: any,
  context: __SerdeContext
): RateLimitExceededException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1ReceivedMetadata = (output: any, context: __SerdeContext): ReceivedMetadata => {
  return {
    AllowedOperations:
      output.AllowedOperations !== undefined && output.AllowedOperations !== null
        ? deserializeAws_json1_1AllowedOperationList(output.AllowedOperations, context)
        : undefined,
    ReceivedStatus:
      output.ReceivedStatus !== undefined && output.ReceivedStatus !== null ? output.ReceivedStatus : undefined,
  } as any;
};

const deserializeAws_json1_1RedirectException = (output: any, context: __SerdeContext): RedirectException => {
  return {
    Location: output.Location !== undefined && output.Location !== null ? output.Location : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1RejectGrantResponse = (output: any, context: __SerdeContext): RejectGrantResponse => {
  return {
    GrantArn: output.GrantArn !== undefined && output.GrantArn !== null ? output.GrantArn : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceInventory = (output: any, context: __SerdeContext): ResourceInventory => {
  return {
    Platform: output.Platform !== undefined && output.Platform !== null ? output.Platform : undefined,
    PlatformVersion:
      output.PlatformVersion !== undefined && output.PlatformVersion !== null ? output.PlatformVersion : undefined,
    ResourceArn: output.ResourceArn !== undefined && output.ResourceArn !== null ? output.ResourceArn : undefined,
    ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
    ResourceOwningAccountId:
      output.ResourceOwningAccountId !== undefined && output.ResourceOwningAccountId !== null
        ? output.ResourceOwningAccountId
        : undefined,
    ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceInventoryList = (output: any, context: __SerdeContext): ResourceInventory[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1ResourceInventory(entry, context));
};

const deserializeAws_json1_1ResourceLimitExceededException = (
  output: any,
  context: __SerdeContext
): ResourceLimitExceededException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1ServerInternalException = (
  output: any,
  context: __SerdeContext
): ServerInternalException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1StringList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Tag(entry, context));
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1TokenData = (output: any, context: __SerdeContext): TokenData => {
  return {
    ExpirationTime:
      output.ExpirationTime !== undefined && output.ExpirationTime !== null ? output.ExpirationTime : undefined,
    LicenseArn: output.LicenseArn !== undefined && output.LicenseArn !== null ? output.LicenseArn : undefined,
    RoleArns:
      output.RoleArns !== undefined && output.RoleArns !== null
        ? deserializeAws_json1_1ArnList(output.RoleArns, context)
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    TokenId: output.TokenId !== undefined && output.TokenId !== null ? output.TokenId : undefined,
    TokenProperties:
      output.TokenProperties !== undefined && output.TokenProperties !== null
        ? deserializeAws_json1_1MaxSize3StringList(output.TokenProperties, context)
        : undefined,
    TokenType: output.TokenType !== undefined && output.TokenType !== null ? output.TokenType : undefined,
  } as any;
};

const deserializeAws_json1_1TokenList = (output: any, context: __SerdeContext): TokenData[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1TokenData(entry, context));
};

const deserializeAws_json1_1UnsupportedDigitalSignatureMethodException = (
  output: any,
  context: __SerdeContext
): UnsupportedDigitalSignatureMethodException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
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
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"],
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
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
