import {
  CreateLicenseConfigurationCommandInput,
  CreateLicenseConfigurationCommandOutput
} from "../commands/CreateLicenseConfigurationCommand";
import {
  DeleteLicenseConfigurationCommandInput,
  DeleteLicenseConfigurationCommandOutput
} from "../commands/DeleteLicenseConfigurationCommand";
import {
  GetLicenseConfigurationCommandInput,
  GetLicenseConfigurationCommandOutput
} from "../commands/GetLicenseConfigurationCommand";
import {
  GetServiceSettingsCommandInput,
  GetServiceSettingsCommandOutput
} from "../commands/GetServiceSettingsCommand";
import {
  ListAssociationsForLicenseConfigurationCommandInput,
  ListAssociationsForLicenseConfigurationCommandOutput
} from "../commands/ListAssociationsForLicenseConfigurationCommand";
import {
  ListFailuresForLicenseConfigurationOperationsCommandInput,
  ListFailuresForLicenseConfigurationOperationsCommandOutput
} from "../commands/ListFailuresForLicenseConfigurationOperationsCommand";
import {
  ListLicenseConfigurationsCommandInput,
  ListLicenseConfigurationsCommandOutput
} from "../commands/ListLicenseConfigurationsCommand";
import {
  ListLicenseSpecificationsForResourceCommandInput,
  ListLicenseSpecificationsForResourceCommandOutput
} from "../commands/ListLicenseSpecificationsForResourceCommand";
import {
  ListResourceInventoryCommandInput,
  ListResourceInventoryCommandOutput
} from "../commands/ListResourceInventoryCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  ListUsageForLicenseConfigurationCommandInput,
  ListUsageForLicenseConfigurationCommandOutput
} from "../commands/ListUsageForLicenseConfigurationCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateLicenseConfigurationCommandInput,
  UpdateLicenseConfigurationCommandOutput
} from "../commands/UpdateLicenseConfigurationCommand";
import {
  UpdateLicenseSpecificationsForResourceCommandInput,
  UpdateLicenseSpecificationsForResourceCommandOutput
} from "../commands/UpdateLicenseSpecificationsForResourceCommand";
import {
  UpdateServiceSettingsCommandInput,
  UpdateServiceSettingsCommandOutput
} from "../commands/UpdateServiceSettingsCommand";
import {
  AccessDeniedException,
  AuthorizationException,
  AutomatedDiscoveryInformation,
  ConsumedLicenseSummary,
  CreateLicenseConfigurationRequest,
  CreateLicenseConfigurationResponse,
  DeleteLicenseConfigurationRequest,
  DeleteLicenseConfigurationResponse,
  FailedDependencyException,
  Filter,
  FilterLimitExceededException,
  GetLicenseConfigurationRequest,
  GetLicenseConfigurationResponse,
  GetServiceSettingsRequest,
  GetServiceSettingsResponse,
  InvalidParameterValueException,
  InvalidResourceStateException,
  InventoryFilter,
  LicenseConfiguration,
  LicenseConfigurationAssociation,
  LicenseConfigurationUsage,
  LicenseOperationFailure,
  LicenseSpecification,
  LicenseUsageException,
  ListAssociationsForLicenseConfigurationRequest,
  ListAssociationsForLicenseConfigurationResponse,
  ListFailuresForLicenseConfigurationOperationsRequest,
  ListFailuresForLicenseConfigurationOperationsResponse,
  ListLicenseConfigurationsRequest,
  ListLicenseConfigurationsResponse,
  ListLicenseSpecificationsForResourceRequest,
  ListLicenseSpecificationsForResourceResponse,
  ListResourceInventoryRequest,
  ListResourceInventoryResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListUsageForLicenseConfigurationRequest,
  ListUsageForLicenseConfigurationResponse,
  ManagedResourceSummary,
  Metadata,
  OrganizationConfiguration,
  ProductInformation,
  ProductInformationFilter,
  RateLimitExceededException,
  ResourceInventory,
  ResourceLimitExceededException,
  ServerInternalException,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateLicenseConfigurationRequest,
  UpdateLicenseConfigurationResponse,
  UpdateLicenseSpecificationsForResourceRequest,
  UpdateLicenseSpecificationsForResourceResponse,
  UpdateServiceSettingsRequest,
  UpdateServiceSettingsResponse
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export const serializeAws_json1_1CreateLicenseConfigurationCommand = async (
  input: CreateLicenseConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.CreateLicenseConfiguration"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateLicenseConfigurationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteLicenseConfigurationCommand = async (
  input: DeleteLicenseConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.DeleteLicenseConfiguration"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteLicenseConfigurationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetLicenseConfigurationCommand = async (
  input: GetLicenseConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.GetLicenseConfiguration"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetLicenseConfigurationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetServiceSettingsCommand = async (
  input: GetServiceSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.GetServiceSettings"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetServiceSettingsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAssociationsForLicenseConfigurationCommand = async (
  input: ListAssociationsForLicenseConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.ListAssociationsForLicenseConfiguration"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListAssociationsForLicenseConfigurationRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommand = async (
  input: ListFailuresForLicenseConfigurationOperationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "AWSLicenseManager.ListFailuresForLicenseConfigurationOperations"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListFailuresForLicenseConfigurationOperationsRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListLicenseConfigurationsCommand = async (
  input: ListLicenseConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.ListLicenseConfigurations"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListLicenseConfigurationsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListLicenseSpecificationsForResourceCommand = async (
  input: ListLicenseSpecificationsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.ListLicenseSpecificationsForResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListLicenseSpecificationsForResourceRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListResourceInventoryCommand = async (
  input: ListResourceInventoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.ListResourceInventory"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListResourceInventoryRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.ListTagsForResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTagsForResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListUsageForLicenseConfigurationCommand = async (
  input: ListUsageForLicenseConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.ListUsageForLicenseConfiguration"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListUsageForLicenseConfigurationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.TagResource"
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
    "X-Amz-Target": "AWSLicenseManager.UntagResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UntagResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateLicenseConfigurationCommand = async (
  input: UpdateLicenseConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.UpdateLicenseConfiguration"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateLicenseConfigurationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateLicenseSpecificationsForResourceCommand = async (
  input: UpdateLicenseSpecificationsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.UpdateLicenseSpecificationsForResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateLicenseSpecificationsForResourceRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateServiceSettingsCommand = async (
  input: UpdateServiceSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLicenseManager.UpdateServiceSettings"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateServiceSettingsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CreateLicenseConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLicenseConfigurationCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateLicenseConfigurationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateLicenseConfigurationResponse(
    data,
    context
  );
  const response: CreateLicenseConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateLicenseConfigurationResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateLicenseConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLicenseConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.licensemanager#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteLicenseConfigurationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteLicenseConfigurationResponse(
    data,
    context
  );
  const response: DeleteLicenseConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteLicenseConfigurationResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteLicenseConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLicenseConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetLicenseConfigurationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLicenseConfigurationResponse(
    data,
    context
  );
  const response: GetLicenseConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetLicenseConfigurationResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetLicenseConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLicenseConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetServiceSettingsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetServiceSettingsResponse(data, context);
  const response: GetServiceSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetServiceSettingsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetServiceSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListAssociationsForLicenseConfigurationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAssociationsForLicenseConfigurationResponse(
    data,
    context
  );
  const response: ListAssociationsForLicenseConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAssociationsForLicenseConfigurationResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAssociationsForLicenseConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociationsForLicenseConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FilterLimitExceededException":
    case "com.amazonaws.licensemanager#FilterLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1FilterLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListFailuresForLicenseConfigurationOperationsResponse(
    data,
    context
  );
  const response: ListFailuresForLicenseConfigurationOperationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListFailuresForLicenseConfigurationOperationsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFailuresForLicenseConfigurationOperationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListLicenseConfigurationsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListLicenseConfigurationsResponse(
    data,
    context
  );
  const response: ListLicenseConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListLicenseConfigurationsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListLicenseConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLicenseConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FilterLimitExceededException":
    case "com.amazonaws.licensemanager#FilterLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1FilterLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListLicenseSpecificationsForResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListLicenseSpecificationsForResourceResponse(
    data,
    context
  );
  const response: ListLicenseSpecificationsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListLicenseSpecificationsForResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListLicenseSpecificationsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLicenseSpecificationsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListResourceInventoryCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListResourceInventoryResponse(data, context);
  const response: ListResourceInventoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListResourceInventoryResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListResourceInventoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceInventoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FailedDependencyException":
    case "com.amazonaws.licensemanager#FailedDependencyException":
      response = {
        ...(await deserializeAws_json1_1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FilterLimitExceededException":
    case "com.amazonaws.licensemanager#FilterLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1FilterLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListUsageForLicenseConfigurationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListUsageForLicenseConfigurationResponse(
    data,
    context
  );
  const response: ListUsageForLicenseConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListUsageForLicenseConfigurationResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListUsageForLicenseConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsageForLicenseConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FilterLimitExceededException":
    case "com.amazonaws.licensemanager#FilterLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1FilterLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateLicenseConfigurationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateLicenseConfigurationResponse(
    data,
    context
  );
  const response: UpdateLicenseConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateLicenseConfigurationResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateLicenseConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLicenseConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateLicenseSpecificationsForResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateLicenseSpecificationsForResourceResponse(
    data,
    context
  );
  const response: UpdateLicenseSpecificationsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateLicenseSpecificationsForResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateLicenseSpecificationsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLicenseSpecificationsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.licensemanager#InvalidResourceStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LicenseUsageException":
    case "com.amazonaws.licensemanager#LicenseUsageException":
      response = {
        ...(await deserializeAws_json1_1LicenseUsageExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateServiceSettingsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateServiceSettingsResponse(data, context);
  const response: UpdateServiceSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateServiceSettingsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateServiceSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.licensemanager#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.licensemanager#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.licensemanager#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.licensemanager#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(
    body,
    context
  );
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1AuthorizationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AuthorizationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AuthorizationException(
    body,
    context
  );
  const contents: AuthorizationException = {
    name: "AuthorizationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1FailedDependencyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FailedDependencyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FailedDependencyException(
    body,
    context
  );
  const contents: FailedDependencyException = {
    name: "FailedDependencyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1FilterLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FilterLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FilterLimitExceededException(
    body,
    context
  );
  const contents: FilterLimitExceededException = {
    name: "FilterLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterValueExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterValueException(
    body,
    context
  );
  const contents: InvalidParameterValueException = {
    name: "InvalidParameterValueException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidResourceStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResourceStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidResourceStateException(
    body,
    context
  );
  const contents: InvalidResourceStateException = {
    name: "InvalidResourceStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LicenseUsageExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LicenseUsageException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LicenseUsageException(
    body,
    context
  );
  const contents: LicenseUsageException = {
    name: "LicenseUsageException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1RateLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RateLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RateLimitExceededException(
    body,
    context
  );
  const contents: RateLimitExceededException = {
    name: "RateLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceLimitExceededException(
    body,
    context
  );
  const contents: ResourceLimitExceededException = {
    name: "ResourceLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ServerInternalExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServerInternalException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServerInternalException(
    body,
    context
  );
  const contents: ServerInternalException = {
    name: "ServerInternalException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1CreateLicenseConfigurationRequest = (
  input: CreateLicenseConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.LicenseCount !== undefined && {
      LicenseCount: input.LicenseCount
    }),
    ...(input.LicenseCountHardLimit !== undefined && {
      LicenseCountHardLimit: input.LicenseCountHardLimit
    }),
    ...(input.LicenseCountingType !== undefined && {
      LicenseCountingType: input.LicenseCountingType
    }),
    ...(input.LicenseRules !== undefined && {
      LicenseRules: serializeAws_json1_1StringList(input.LicenseRules, context)
    }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.ProductInformationList !== undefined && {
      ProductInformationList: serializeAws_json1_1ProductInformationList(
        input.ProductInformationList,
        context
      )
    }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1TagList(input.Tags, context)
    })
  };
};

const serializeAws_json1_1DeleteLicenseConfigurationRequest = (
  input: DeleteLicenseConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LicenseConfigurationArn !== undefined && {
      LicenseConfigurationArn: input.LicenseConfigurationArn
    })
  };
};

const serializeAws_json1_1Filter = (
  input: Filter,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Values !== undefined && {
      Values: serializeAws_json1_1FilterValues(input.Values, context)
    })
  };
};

const serializeAws_json1_1Filters = (
  input: Filter[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Filter(entry, context));
};

const serializeAws_json1_1FilterValues = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1GetLicenseConfigurationRequest = (
  input: GetLicenseConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LicenseConfigurationArn !== undefined && {
      LicenseConfigurationArn: input.LicenseConfigurationArn
    })
  };
};

const serializeAws_json1_1GetServiceSettingsRequest = (
  input: GetServiceSettingsRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1InventoryFilter = (
  input: InventoryFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.Condition !== undefined && { Condition: input.Condition }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_json1_1InventoryFilterList = (
  input: InventoryFilter[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1InventoryFilter(entry, context)
  );
};

const serializeAws_json1_1LicenseSpecification = (
  input: LicenseSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.LicenseConfigurationArn !== undefined && {
      LicenseConfigurationArn: input.LicenseConfigurationArn
    })
  };
};

const serializeAws_json1_1LicenseSpecifications = (
  input: LicenseSpecification[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1LicenseSpecification(entry, context)
  );
};

const serializeAws_json1_1ListAssociationsForLicenseConfigurationRequest = (
  input: ListAssociationsForLicenseConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LicenseConfigurationArn !== undefined && {
      LicenseConfigurationArn: input.LicenseConfigurationArn
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListFailuresForLicenseConfigurationOperationsRequest = (
  input: ListFailuresForLicenseConfigurationOperationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LicenseConfigurationArn !== undefined && {
      LicenseConfigurationArn: input.LicenseConfigurationArn
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListLicenseConfigurationsRequest = (
  input: ListLicenseConfigurationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters !== undefined && {
      Filters: serializeAws_json1_1Filters(input.Filters, context)
    }),
    ...(input.LicenseConfigurationArns !== undefined && {
      LicenseConfigurationArns: serializeAws_json1_1StringList(
        input.LicenseConfigurationArns,
        context
      )
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListLicenseSpecificationsForResourceRequest = (
  input: ListLicenseSpecificationsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn })
  };
};

const serializeAws_json1_1ListResourceInventoryRequest = (
  input: ListResourceInventoryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters !== undefined && {
      Filters: serializeAws_json1_1InventoryFilterList(input.Filters, context)
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn })
  };
};

const serializeAws_json1_1ListUsageForLicenseConfigurationRequest = (
  input: ListUsageForLicenseConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters !== undefined && {
      Filters: serializeAws_json1_1Filters(input.Filters, context)
    }),
    ...(input.LicenseConfigurationArn !== undefined && {
      LicenseConfigurationArn: input.LicenseConfigurationArn
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1OrganizationConfiguration = (
  input: OrganizationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.EnableIntegration !== undefined && {
      EnableIntegration: input.EnableIntegration
    })
  };
};

const serializeAws_json1_1ProductInformation = (
  input: ProductInformation,
  context: __SerdeContext
): any => {
  return {
    ...(input.ProductInformationFilterList !== undefined && {
      ProductInformationFilterList: serializeAws_json1_1ProductInformationFilterList(
        input.ProductInformationFilterList,
        context
      )
    }),
    ...(input.ResourceType !== undefined && {
      ResourceType: input.ResourceType
    })
  };
};

const serializeAws_json1_1ProductInformationFilter = (
  input: ProductInformationFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.ProductInformationFilterComparator !== undefined && {
      ProductInformationFilterComparator:
        input.ProductInformationFilterComparator
    }),
    ...(input.ProductInformationFilterName !== undefined && {
      ProductInformationFilterName: input.ProductInformationFilterName
    }),
    ...(input.ProductInformationFilterValue !== undefined && {
      ProductInformationFilterValue: serializeAws_json1_1StringList(
        input.ProductInformationFilterValue,
        context
      )
    })
  };
};

const serializeAws_json1_1ProductInformationFilterList = (
  input: ProductInformationFilter[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1ProductInformationFilter(entry, context)
  );
};

const serializeAws_json1_1ProductInformationList = (
  input: ProductInformation[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1ProductInformation(entry, context)
  );
};

const serializeAws_json1_1StringList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_json1_1TagKeyList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1TagList = (
  input: Tag[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1TagResourceRequest = (
  input: TagResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1TagList(input.Tags, context)
    })
  };
};

const serializeAws_json1_1UntagResourceRequest = (
  input: UntagResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys !== undefined && {
      TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context)
    })
  };
};

const serializeAws_json1_1UpdateLicenseConfigurationRequest = (
  input: UpdateLicenseConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.LicenseConfigurationArn !== undefined && {
      LicenseConfigurationArn: input.LicenseConfigurationArn
    }),
    ...(input.LicenseConfigurationStatus !== undefined && {
      LicenseConfigurationStatus: input.LicenseConfigurationStatus
    }),
    ...(input.LicenseCount !== undefined && {
      LicenseCount: input.LicenseCount
    }),
    ...(input.LicenseCountHardLimit !== undefined && {
      LicenseCountHardLimit: input.LicenseCountHardLimit
    }),
    ...(input.LicenseRules !== undefined && {
      LicenseRules: serializeAws_json1_1StringList(input.LicenseRules, context)
    }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.ProductInformationList !== undefined && {
      ProductInformationList: serializeAws_json1_1ProductInformationList(
        input.ProductInformationList,
        context
      )
    })
  };
};

const serializeAws_json1_1UpdateLicenseSpecificationsForResourceRequest = (
  input: UpdateLicenseSpecificationsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AddLicenseSpecifications !== undefined && {
      AddLicenseSpecifications: serializeAws_json1_1LicenseSpecifications(
        input.AddLicenseSpecifications,
        context
      )
    }),
    ...(input.RemoveLicenseSpecifications !== undefined && {
      RemoveLicenseSpecifications: serializeAws_json1_1LicenseSpecifications(
        input.RemoveLicenseSpecifications,
        context
      )
    }),
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn })
  };
};

const serializeAws_json1_1UpdateServiceSettingsRequest = (
  input: UpdateServiceSettingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EnableCrossAccountsDiscovery !== undefined && {
      EnableCrossAccountsDiscovery: input.EnableCrossAccountsDiscovery
    }),
    ...(input.OrganizationConfiguration !== undefined && {
      OrganizationConfiguration: serializeAws_json1_1OrganizationConfiguration(
        input.OrganizationConfiguration,
        context
      )
    }),
    ...(input.S3BucketArn !== undefined && { S3BucketArn: input.S3BucketArn }),
    ...(input.SnsTopicArn !== undefined && { SnsTopicArn: input.SnsTopicArn })
  };
};

const deserializeAws_json1_1AccessDeniedException = (
  output: any,
  context: __SerdeContext
): AccessDeniedException => {
  return {
    __type: "AccessDeniedException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1AuthorizationException = (
  output: any,
  context: __SerdeContext
): AuthorizationException => {
  return {
    __type: "AuthorizationException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1AutomatedDiscoveryInformation = (
  output: any,
  context: __SerdeContext
): AutomatedDiscoveryInformation => {
  return {
    __type: "AutomatedDiscoveryInformation",
    LastRunTime:
      output.LastRunTime !== undefined && output.LastRunTime !== null
        ? new Date(Math.round(output.LastRunTime * 1000))
        : undefined
  } as any;
};

const deserializeAws_json1_1ConsumedLicenseSummary = (
  output: any,
  context: __SerdeContext
): ConsumedLicenseSummary => {
  return {
    __type: "ConsumedLicenseSummary",
    ConsumedLicenses:
      output.ConsumedLicenses !== undefined && output.ConsumedLicenses !== null
        ? output.ConsumedLicenses
        : undefined,
    ResourceType:
      output.ResourceType !== undefined && output.ResourceType !== null
        ? output.ResourceType
        : undefined
  } as any;
};

const deserializeAws_json1_1ConsumedLicenseSummaryList = (
  output: any,
  context: __SerdeContext
): ConsumedLicenseSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ConsumedLicenseSummary(entry, context)
  );
};

const deserializeAws_json1_1CreateLicenseConfigurationResponse = (
  output: any,
  context: __SerdeContext
): CreateLicenseConfigurationResponse => {
  return {
    __type: "CreateLicenseConfigurationResponse",
    LicenseConfigurationArn:
      output.LicenseConfigurationArn !== undefined &&
      output.LicenseConfigurationArn !== null
        ? output.LicenseConfigurationArn
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteLicenseConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteLicenseConfigurationResponse => {
  return {
    __type: "DeleteLicenseConfigurationResponse"
  } as any;
};

const deserializeAws_json1_1FailedDependencyException = (
  output: any,
  context: __SerdeContext
): FailedDependencyException => {
  return {
    __type: "FailedDependencyException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1FilterLimitExceededException = (
  output: any,
  context: __SerdeContext
): FilterLimitExceededException => {
  return {
    __type: "FilterLimitExceededException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1GetLicenseConfigurationResponse = (
  output: any,
  context: __SerdeContext
): GetLicenseConfigurationResponse => {
  return {
    __type: "GetLicenseConfigurationResponse",
    AutomatedDiscoveryInformation:
      output.AutomatedDiscoveryInformation !== undefined &&
      output.AutomatedDiscoveryInformation !== null
        ? deserializeAws_json1_1AutomatedDiscoveryInformation(
            output.AutomatedDiscoveryInformation,
            context
          )
        : undefined,
    ConsumedLicenseSummaryList:
      output.ConsumedLicenseSummaryList !== undefined &&
      output.ConsumedLicenseSummaryList !== null
        ? deserializeAws_json1_1ConsumedLicenseSummaryList(
            output.ConsumedLicenseSummaryList,
            context
          )
        : undefined,
    ConsumedLicenses:
      output.ConsumedLicenses !== undefined && output.ConsumedLicenses !== null
        ? output.ConsumedLicenses
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    LicenseConfigurationArn:
      output.LicenseConfigurationArn !== undefined &&
      output.LicenseConfigurationArn !== null
        ? output.LicenseConfigurationArn
        : undefined,
    LicenseConfigurationId:
      output.LicenseConfigurationId !== undefined &&
      output.LicenseConfigurationId !== null
        ? output.LicenseConfigurationId
        : undefined,
    LicenseCount:
      output.LicenseCount !== undefined && output.LicenseCount !== null
        ? output.LicenseCount
        : undefined,
    LicenseCountHardLimit:
      output.LicenseCountHardLimit !== undefined &&
      output.LicenseCountHardLimit !== null
        ? output.LicenseCountHardLimit
        : undefined,
    LicenseCountingType:
      output.LicenseCountingType !== undefined &&
      output.LicenseCountingType !== null
        ? output.LicenseCountingType
        : undefined,
    LicenseRules:
      output.LicenseRules !== undefined && output.LicenseRules !== null
        ? deserializeAws_json1_1StringList(output.LicenseRules, context)
        : undefined,
    ManagedResourceSummaryList:
      output.ManagedResourceSummaryList !== undefined &&
      output.ManagedResourceSummaryList !== null
        ? deserializeAws_json1_1ManagedResourceSummaryList(
            output.ManagedResourceSummaryList,
            context
          )
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    OwnerAccountId:
      output.OwnerAccountId !== undefined && output.OwnerAccountId !== null
        ? output.OwnerAccountId
        : undefined,
    ProductInformationList:
      output.ProductInformationList !== undefined &&
      output.ProductInformationList !== null
        ? deserializeAws_json1_1ProductInformationList(
            output.ProductInformationList,
            context
          )
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1GetServiceSettingsResponse = (
  output: any,
  context: __SerdeContext
): GetServiceSettingsResponse => {
  return {
    __type: "GetServiceSettingsResponse",
    EnableCrossAccountsDiscovery:
      output.EnableCrossAccountsDiscovery !== undefined &&
      output.EnableCrossAccountsDiscovery !== null
        ? output.EnableCrossAccountsDiscovery
        : undefined,
    LicenseManagerResourceShareArn:
      output.LicenseManagerResourceShareArn !== undefined &&
      output.LicenseManagerResourceShareArn !== null
        ? output.LicenseManagerResourceShareArn
        : undefined,
    OrganizationConfiguration:
      output.OrganizationConfiguration !== undefined &&
      output.OrganizationConfiguration !== null
        ? deserializeAws_json1_1OrganizationConfiguration(
            output.OrganizationConfiguration,
            context
          )
        : undefined,
    S3BucketArn:
      output.S3BucketArn !== undefined && output.S3BucketArn !== null
        ? output.S3BucketArn
        : undefined,
    SnsTopicArn:
      output.SnsTopicArn !== undefined && output.SnsTopicArn !== null
        ? output.SnsTopicArn
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidParameterValueException = (
  output: any,
  context: __SerdeContext
): InvalidParameterValueException => {
  return {
    __type: "InvalidParameterValueException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidResourceStateException = (
  output: any,
  context: __SerdeContext
): InvalidResourceStateException => {
  return {
    __type: "InvalidResourceStateException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1LicenseConfiguration = (
  output: any,
  context: __SerdeContext
): LicenseConfiguration => {
  return {
    __type: "LicenseConfiguration",
    AutomatedDiscoveryInformation:
      output.AutomatedDiscoveryInformation !== undefined &&
      output.AutomatedDiscoveryInformation !== null
        ? deserializeAws_json1_1AutomatedDiscoveryInformation(
            output.AutomatedDiscoveryInformation,
            context
          )
        : undefined,
    ConsumedLicenseSummaryList:
      output.ConsumedLicenseSummaryList !== undefined &&
      output.ConsumedLicenseSummaryList !== null
        ? deserializeAws_json1_1ConsumedLicenseSummaryList(
            output.ConsumedLicenseSummaryList,
            context
          )
        : undefined,
    ConsumedLicenses:
      output.ConsumedLicenses !== undefined && output.ConsumedLicenses !== null
        ? output.ConsumedLicenses
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    LicenseConfigurationArn:
      output.LicenseConfigurationArn !== undefined &&
      output.LicenseConfigurationArn !== null
        ? output.LicenseConfigurationArn
        : undefined,
    LicenseConfigurationId:
      output.LicenseConfigurationId !== undefined &&
      output.LicenseConfigurationId !== null
        ? output.LicenseConfigurationId
        : undefined,
    LicenseCount:
      output.LicenseCount !== undefined && output.LicenseCount !== null
        ? output.LicenseCount
        : undefined,
    LicenseCountHardLimit:
      output.LicenseCountHardLimit !== undefined &&
      output.LicenseCountHardLimit !== null
        ? output.LicenseCountHardLimit
        : undefined,
    LicenseCountingType:
      output.LicenseCountingType !== undefined &&
      output.LicenseCountingType !== null
        ? output.LicenseCountingType
        : undefined,
    LicenseRules:
      output.LicenseRules !== undefined && output.LicenseRules !== null
        ? deserializeAws_json1_1StringList(output.LicenseRules, context)
        : undefined,
    ManagedResourceSummaryList:
      output.ManagedResourceSummaryList !== undefined &&
      output.ManagedResourceSummaryList !== null
        ? deserializeAws_json1_1ManagedResourceSummaryList(
            output.ManagedResourceSummaryList,
            context
          )
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    OwnerAccountId:
      output.OwnerAccountId !== undefined && output.OwnerAccountId !== null
        ? output.OwnerAccountId
        : undefined,
    ProductInformationList:
      output.ProductInformationList !== undefined &&
      output.ProductInformationList !== null
        ? deserializeAws_json1_1ProductInformationList(
            output.ProductInformationList,
            context
          )
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined
  } as any;
};

const deserializeAws_json1_1LicenseConfigurationAssociation = (
  output: any,
  context: __SerdeContext
): LicenseConfigurationAssociation => {
  return {
    __type: "LicenseConfigurationAssociation",
    AssociationTime:
      output.AssociationTime !== undefined && output.AssociationTime !== null
        ? new Date(Math.round(output.AssociationTime * 1000))
        : undefined,
    ResourceArn:
      output.ResourceArn !== undefined && output.ResourceArn !== null
        ? output.ResourceArn
        : undefined,
    ResourceOwnerId:
      output.ResourceOwnerId !== undefined && output.ResourceOwnerId !== null
        ? output.ResourceOwnerId
        : undefined,
    ResourceType:
      output.ResourceType !== undefined && output.ResourceType !== null
        ? output.ResourceType
        : undefined
  } as any;
};

const deserializeAws_json1_1LicenseConfigurationAssociations = (
  output: any,
  context: __SerdeContext
): LicenseConfigurationAssociation[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LicenseConfigurationAssociation(entry, context)
  );
};

const deserializeAws_json1_1LicenseConfigurations = (
  output: any,
  context: __SerdeContext
): LicenseConfiguration[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LicenseConfiguration(entry, context)
  );
};

const deserializeAws_json1_1LicenseConfigurationUsage = (
  output: any,
  context: __SerdeContext
): LicenseConfigurationUsage => {
  return {
    __type: "LicenseConfigurationUsage",
    AssociationTime:
      output.AssociationTime !== undefined && output.AssociationTime !== null
        ? new Date(Math.round(output.AssociationTime * 1000))
        : undefined,
    ConsumedLicenses:
      output.ConsumedLicenses !== undefined && output.ConsumedLicenses !== null
        ? output.ConsumedLicenses
        : undefined,
    ResourceArn:
      output.ResourceArn !== undefined && output.ResourceArn !== null
        ? output.ResourceArn
        : undefined,
    ResourceOwnerId:
      output.ResourceOwnerId !== undefined && output.ResourceOwnerId !== null
        ? output.ResourceOwnerId
        : undefined,
    ResourceStatus:
      output.ResourceStatus !== undefined && output.ResourceStatus !== null
        ? output.ResourceStatus
        : undefined,
    ResourceType:
      output.ResourceType !== undefined && output.ResourceType !== null
        ? output.ResourceType
        : undefined
  } as any;
};

const deserializeAws_json1_1LicenseConfigurationUsageList = (
  output: any,
  context: __SerdeContext
): LicenseConfigurationUsage[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LicenseConfigurationUsage(entry, context)
  );
};

const deserializeAws_json1_1LicenseOperationFailure = (
  output: any,
  context: __SerdeContext
): LicenseOperationFailure => {
  return {
    __type: "LicenseOperationFailure",
    ErrorMessage:
      output.ErrorMessage !== undefined && output.ErrorMessage !== null
        ? output.ErrorMessage
        : undefined,
    FailureTime:
      output.FailureTime !== undefined && output.FailureTime !== null
        ? new Date(Math.round(output.FailureTime * 1000))
        : undefined,
    MetadataList:
      output.MetadataList !== undefined && output.MetadataList !== null
        ? deserializeAws_json1_1MetadataList(output.MetadataList, context)
        : undefined,
    OperationName:
      output.OperationName !== undefined && output.OperationName !== null
        ? output.OperationName
        : undefined,
    OperationRequestedBy:
      output.OperationRequestedBy !== undefined &&
      output.OperationRequestedBy !== null
        ? output.OperationRequestedBy
        : undefined,
    ResourceArn:
      output.ResourceArn !== undefined && output.ResourceArn !== null
        ? output.ResourceArn
        : undefined,
    ResourceOwnerId:
      output.ResourceOwnerId !== undefined && output.ResourceOwnerId !== null
        ? output.ResourceOwnerId
        : undefined,
    ResourceType:
      output.ResourceType !== undefined && output.ResourceType !== null
        ? output.ResourceType
        : undefined
  } as any;
};

const deserializeAws_json1_1LicenseOperationFailureList = (
  output: any,
  context: __SerdeContext
): LicenseOperationFailure[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LicenseOperationFailure(entry, context)
  );
};

const deserializeAws_json1_1LicenseSpecification = (
  output: any,
  context: __SerdeContext
): LicenseSpecification => {
  return {
    __type: "LicenseSpecification",
    LicenseConfigurationArn:
      output.LicenseConfigurationArn !== undefined &&
      output.LicenseConfigurationArn !== null
        ? output.LicenseConfigurationArn
        : undefined
  } as any;
};

const deserializeAws_json1_1LicenseSpecifications = (
  output: any,
  context: __SerdeContext
): LicenseSpecification[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LicenseSpecification(entry, context)
  );
};

const deserializeAws_json1_1LicenseUsageException = (
  output: any,
  context: __SerdeContext
): LicenseUsageException => {
  return {
    __type: "LicenseUsageException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1ListAssociationsForLicenseConfigurationResponse = (
  output: any,
  context: __SerdeContext
): ListAssociationsForLicenseConfigurationResponse => {
  return {
    __type: "ListAssociationsForLicenseConfigurationResponse",
    LicenseConfigurationAssociations:
      output.LicenseConfigurationAssociations !== undefined &&
      output.LicenseConfigurationAssociations !== null
        ? deserializeAws_json1_1LicenseConfigurationAssociations(
            output.LicenseConfigurationAssociations,
            context
          )
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListFailuresForLicenseConfigurationOperationsResponse = (
  output: any,
  context: __SerdeContext
): ListFailuresForLicenseConfigurationOperationsResponse => {
  return {
    __type: "ListFailuresForLicenseConfigurationOperationsResponse",
    LicenseOperationFailureList:
      output.LicenseOperationFailureList !== undefined &&
      output.LicenseOperationFailureList !== null
        ? deserializeAws_json1_1LicenseOperationFailureList(
            output.LicenseOperationFailureList,
            context
          )
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListLicenseConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): ListLicenseConfigurationsResponse => {
  return {
    __type: "ListLicenseConfigurationsResponse",
    LicenseConfigurations:
      output.LicenseConfigurations !== undefined &&
      output.LicenseConfigurations !== null
        ? deserializeAws_json1_1LicenseConfigurations(
            output.LicenseConfigurations,
            context
          )
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListLicenseSpecificationsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListLicenseSpecificationsForResourceResponse => {
  return {
    __type: "ListLicenseSpecificationsForResourceResponse",
    LicenseSpecifications:
      output.LicenseSpecifications !== undefined &&
      output.LicenseSpecifications !== null
        ? deserializeAws_json1_1LicenseSpecifications(
            output.LicenseSpecifications,
            context
          )
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListResourceInventoryResponse = (
  output: any,
  context: __SerdeContext
): ListResourceInventoryResponse => {
  return {
    __type: "ListResourceInventoryResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    ResourceInventoryList:
      output.ResourceInventoryList !== undefined &&
      output.ResourceInventoryList !== null
        ? deserializeAws_json1_1ResourceInventoryList(
            output.ResourceInventoryList,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    __type: "ListTagsForResourceResponse",
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ListUsageForLicenseConfigurationResponse = (
  output: any,
  context: __SerdeContext
): ListUsageForLicenseConfigurationResponse => {
  return {
    __type: "ListUsageForLicenseConfigurationResponse",
    LicenseConfigurationUsageList:
      output.LicenseConfigurationUsageList !== undefined &&
      output.LicenseConfigurationUsageList !== null
        ? deserializeAws_json1_1LicenseConfigurationUsageList(
            output.LicenseConfigurationUsageList,
            context
          )
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ManagedResourceSummary = (
  output: any,
  context: __SerdeContext
): ManagedResourceSummary => {
  return {
    __type: "ManagedResourceSummary",
    AssociationCount:
      output.AssociationCount !== undefined && output.AssociationCount !== null
        ? output.AssociationCount
        : undefined,
    ResourceType:
      output.ResourceType !== undefined && output.ResourceType !== null
        ? output.ResourceType
        : undefined
  } as any;
};

const deserializeAws_json1_1ManagedResourceSummaryList = (
  output: any,
  context: __SerdeContext
): ManagedResourceSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ManagedResourceSummary(entry, context)
  );
};

const deserializeAws_json1_1Metadata = (
  output: any,
  context: __SerdeContext
): Metadata => {
  return {
    __type: "Metadata",
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_json1_1MetadataList = (
  output: any,
  context: __SerdeContext
): Metadata[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Metadata(entry, context)
  );
};

const deserializeAws_json1_1OrganizationConfiguration = (
  output: any,
  context: __SerdeContext
): OrganizationConfiguration => {
  return {
    __type: "OrganizationConfiguration",
    EnableIntegration:
      output.EnableIntegration !== undefined &&
      output.EnableIntegration !== null
        ? output.EnableIntegration
        : undefined
  } as any;
};

const deserializeAws_json1_1ProductInformation = (
  output: any,
  context: __SerdeContext
): ProductInformation => {
  return {
    __type: "ProductInformation",
    ProductInformationFilterList:
      output.ProductInformationFilterList !== undefined &&
      output.ProductInformationFilterList !== null
        ? deserializeAws_json1_1ProductInformationFilterList(
            output.ProductInformationFilterList,
            context
          )
        : undefined,
    ResourceType:
      output.ResourceType !== undefined && output.ResourceType !== null
        ? output.ResourceType
        : undefined
  } as any;
};

const deserializeAws_json1_1ProductInformationFilter = (
  output: any,
  context: __SerdeContext
): ProductInformationFilter => {
  return {
    __type: "ProductInformationFilter",
    ProductInformationFilterComparator:
      output.ProductInformationFilterComparator !== undefined &&
      output.ProductInformationFilterComparator !== null
        ? output.ProductInformationFilterComparator
        : undefined,
    ProductInformationFilterName:
      output.ProductInformationFilterName !== undefined &&
      output.ProductInformationFilterName !== null
        ? output.ProductInformationFilterName
        : undefined,
    ProductInformationFilterValue:
      output.ProductInformationFilterValue !== undefined &&
      output.ProductInformationFilterValue !== null
        ? deserializeAws_json1_1StringList(
            output.ProductInformationFilterValue,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ProductInformationFilterList = (
  output: any,
  context: __SerdeContext
): ProductInformationFilter[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ProductInformationFilter(entry, context)
  );
};

const deserializeAws_json1_1ProductInformationList = (
  output: any,
  context: __SerdeContext
): ProductInformation[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ProductInformation(entry, context)
  );
};

const deserializeAws_json1_1RateLimitExceededException = (
  output: any,
  context: __SerdeContext
): RateLimitExceededException => {
  return {
    __type: "RateLimitExceededException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1ResourceInventory = (
  output: any,
  context: __SerdeContext
): ResourceInventory => {
  return {
    __type: "ResourceInventory",
    Platform:
      output.Platform !== undefined && output.Platform !== null
        ? output.Platform
        : undefined,
    PlatformVersion:
      output.PlatformVersion !== undefined && output.PlatformVersion !== null
        ? output.PlatformVersion
        : undefined,
    ResourceArn:
      output.ResourceArn !== undefined && output.ResourceArn !== null
        ? output.ResourceArn
        : undefined,
    ResourceId:
      output.ResourceId !== undefined && output.ResourceId !== null
        ? output.ResourceId
        : undefined,
    ResourceOwningAccountId:
      output.ResourceOwningAccountId !== undefined &&
      output.ResourceOwningAccountId !== null
        ? output.ResourceOwningAccountId
        : undefined,
    ResourceType:
      output.ResourceType !== undefined && output.ResourceType !== null
        ? output.ResourceType
        : undefined
  } as any;
};

const deserializeAws_json1_1ResourceInventoryList = (
  output: any,
  context: __SerdeContext
): ResourceInventory[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ResourceInventory(entry, context)
  );
};

const deserializeAws_json1_1ResourceLimitExceededException = (
  output: any,
  context: __SerdeContext
): ResourceLimitExceededException => {
  return {
    __type: "ResourceLimitExceededException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1ServerInternalException = (
  output: any,
  context: __SerdeContext
): ServerInternalException => {
  return {
    __type: "ServerInternalException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1StringList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  return {
    __type: "Tag",
    Key:
      output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): Tag[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1TagResourceResponse = (
  output: any,
  context: __SerdeContext
): TagResourceResponse => {
  return {
    __type: "TagResourceResponse"
  } as any;
};

const deserializeAws_json1_1UntagResourceResponse = (
  output: any,
  context: __SerdeContext
): UntagResourceResponse => {
  return {
    __type: "UntagResourceResponse"
  } as any;
};

const deserializeAws_json1_1UpdateLicenseConfigurationResponse = (
  output: any,
  context: __SerdeContext
): UpdateLicenseConfigurationResponse => {
  return {
    __type: "UpdateLicenseConfigurationResponse"
  } as any;
};

const deserializeAws_json1_1UpdateLicenseSpecificationsForResourceResponse = (
  output: any,
  context: __SerdeContext
): UpdateLicenseSpecificationsForResourceResponse => {
  return {
    __type: "UpdateLicenseSpecificationsForResourceResponse"
  } as any;
};

const deserializeAws_json1_1UpdateServiceSettingsResponse = (
  output: any,
  context: __SerdeContext
): UpdateServiceSettingsResponse => {
  return {
    __type: "UpdateServiceSettingsResponse"
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
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
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

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
    headers
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
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
