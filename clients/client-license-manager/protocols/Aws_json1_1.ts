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

export async function serializeAws_json1_1CreateLicenseConfigurationCommand(
  input: CreateLicenseConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSLicenseManager.CreateLicenseConfiguration";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateLicenseConfigurationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteLicenseConfigurationCommand(
  input: DeleteLicenseConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSLicenseManager.DeleteLicenseConfiguration";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteLicenseConfigurationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetLicenseConfigurationCommand(
  input: GetLicenseConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSLicenseManager.GetLicenseConfiguration";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetLicenseConfigurationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetServiceSettingsCommand(
  input: GetServiceSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSLicenseManager.GetServiceSettings";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetServiceSettingsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListAssociationsForLicenseConfigurationCommand(
  input: ListAssociationsForLicenseConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSLicenseManager.ListAssociationsForLicenseConfiguration";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListAssociationsForLicenseConfigurationRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommand(
  input: ListFailuresForLicenseConfigurationOperationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSLicenseManager.ListFailuresForLicenseConfigurationOperations";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListFailuresForLicenseConfigurationOperationsRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListLicenseConfigurationsCommand(
  input: ListLicenseConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSLicenseManager.ListLicenseConfigurations";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListLicenseConfigurationsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListLicenseSpecificationsForResourceCommand(
  input: ListLicenseSpecificationsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSLicenseManager.ListLicenseSpecificationsForResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListLicenseSpecificationsForResourceRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListResourceInventoryCommand(
  input: ListResourceInventoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSLicenseManager.ListResourceInventory";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListResourceInventoryRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSLicenseManager.ListTagsForResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTagsForResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListUsageForLicenseConfigurationCommand(
  input: ListUsageForLicenseConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSLicenseManager.ListUsageForLicenseConfiguration";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListUsageForLicenseConfigurationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSLicenseManager.TagResource";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSLicenseManager.UntagResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UntagResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateLicenseConfigurationCommand(
  input: UpdateLicenseConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSLicenseManager.UpdateLicenseConfiguration";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateLicenseConfigurationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateLicenseSpecificationsForResourceCommand(
  input: UpdateLicenseSpecificationsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSLicenseManager.UpdateLicenseSpecificationsForResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateLicenseSpecificationsForResourceRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateServiceSettingsCommand(
  input: UpdateServiceSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSLicenseManager.UpdateServiceSettings";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateServiceSettingsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1CreateLicenseConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLicenseConfigurationCommandOutput> {
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
}

async function deserializeAws_json1_1CreateLicenseConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLicenseConfigurationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.license.manager.V2018_08_01#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.license.manager.V2018_08_01#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.license.manager.V2018_08_01#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.license.manager.V2018_08_01#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.license.manager.V2018_08_01#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.license.manager.V2018_08_01#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteLicenseConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLicenseConfigurationCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteLicenseConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLicenseConfigurationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.license.manager.V2018_08_01#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.license.manager.V2018_08_01#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.license.manager.V2018_08_01#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.license.manager.V2018_08_01#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.license.manager.V2018_08_01#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetLicenseConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLicenseConfigurationCommandOutput> {
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
}

async function deserializeAws_json1_1GetLicenseConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLicenseConfigurationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.license.manager.V2018_08_01#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.license.manager.V2018_08_01#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.license.manager.V2018_08_01#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.license.manager.V2018_08_01#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.license.manager.V2018_08_01#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetServiceSettingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceSettingsCommandOutput> {
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
}

async function deserializeAws_json1_1GetServiceSettingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceSettingsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.license.manager.V2018_08_01#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.license.manager.V2018_08_01#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.license.manager.V2018_08_01#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.license.manager.V2018_08_01#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListAssociationsForLicenseConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociationsForLicenseConfigurationCommandOutput> {
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
}

async function deserializeAws_json1_1ListAssociationsForLicenseConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociationsForLicenseConfigurationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.license.manager.V2018_08_01#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.license.manager.V2018_08_01#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FilterLimitExceededException":
    case "com.amazonaws.license.manager.V2018_08_01#FilterLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1FilterLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.license.manager.V2018_08_01#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.license.manager.V2018_08_01#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.license.manager.V2018_08_01#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFailuresForLicenseConfigurationOperationsCommandOutput> {
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
}

async function deserializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFailuresForLicenseConfigurationOperationsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.license.manager.V2018_08_01#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.license.manager.V2018_08_01#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.license.manager.V2018_08_01#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.license.manager.V2018_08_01#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.license.manager.V2018_08_01#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListLicenseConfigurationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLicenseConfigurationsCommandOutput> {
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
}

async function deserializeAws_json1_1ListLicenseConfigurationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLicenseConfigurationsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.license.manager.V2018_08_01#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.license.manager.V2018_08_01#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FilterLimitExceededException":
    case "com.amazonaws.license.manager.V2018_08_01#FilterLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1FilterLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.license.manager.V2018_08_01#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.license.manager.V2018_08_01#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.license.manager.V2018_08_01#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListLicenseSpecificationsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLicenseSpecificationsForResourceCommandOutput> {
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
}

async function deserializeAws_json1_1ListLicenseSpecificationsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLicenseSpecificationsForResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.license.manager.V2018_08_01#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.license.manager.V2018_08_01#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.license.manager.V2018_08_01#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.license.manager.V2018_08_01#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.license.manager.V2018_08_01#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListResourceInventoryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceInventoryCommandOutput> {
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
}

async function deserializeAws_json1_1ListResourceInventoryCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceInventoryCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.license.manager.V2018_08_01#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.license.manager.V2018_08_01#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FailedDependencyException":
    case "com.amazonaws.license.manager.V2018_08_01#FailedDependencyException":
      response = {
        ...(await deserializeAws_json1_1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FilterLimitExceededException":
    case "com.amazonaws.license.manager.V2018_08_01#FilterLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1FilterLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.license.manager.V2018_08_01#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.license.manager.V2018_08_01#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.license.manager.V2018_08_01#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
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
}

async function deserializeAws_json1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.license.manager.V2018_08_01#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.license.manager.V2018_08_01#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.license.manager.V2018_08_01#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.license.manager.V2018_08_01#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.license.manager.V2018_08_01#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListUsageForLicenseConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsageForLicenseConfigurationCommandOutput> {
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
}

async function deserializeAws_json1_1ListUsageForLicenseConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsageForLicenseConfigurationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.license.manager.V2018_08_01#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.license.manager.V2018_08_01#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FilterLimitExceededException":
    case "com.amazonaws.license.manager.V2018_08_01#FilterLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1FilterLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.license.manager.V2018_08_01#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.license.manager.V2018_08_01#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.license.manager.V2018_08_01#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
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
}

async function deserializeAws_json1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.license.manager.V2018_08_01#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.license.manager.V2018_08_01#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.license.manager.V2018_08_01#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.license.manager.V2018_08_01#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.license.manager.V2018_08_01#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
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
}

async function deserializeAws_json1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.license.manager.V2018_08_01#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.license.manager.V2018_08_01#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.license.manager.V2018_08_01#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.license.manager.V2018_08_01#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.license.manager.V2018_08_01#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdateLicenseConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLicenseConfigurationCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateLicenseConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLicenseConfigurationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.license.manager.V2018_08_01#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.license.manager.V2018_08_01#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.license.manager.V2018_08_01#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.license.manager.V2018_08_01#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.license.manager.V2018_08_01#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdateLicenseSpecificationsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLicenseSpecificationsForResourceCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateLicenseSpecificationsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLicenseSpecificationsForResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.license.manager.V2018_08_01#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.license.manager.V2018_08_01#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.license.manager.V2018_08_01#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.license.manager.V2018_08_01#InvalidResourceStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LicenseUsageException":
    case "com.amazonaws.license.manager.V2018_08_01#LicenseUsageException":
      response = {
        ...(await deserializeAws_json1_1LicenseUsageExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.license.manager.V2018_08_01#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.license.manager.V2018_08_01#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdateServiceSettingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceSettingsCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateServiceSettingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceSettingsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.license.manager.V2018_08_01#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AuthorizationException":
    case "com.amazonaws.license.manager.V2018_08_01#AuthorizationException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.license.manager.V2018_08_01#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RateLimitExceededException":
    case "com.amazonaws.license.manager.V2018_08_01#RateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.license.manager.V2018_08_01#ServerInternalException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
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
}

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
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.LicenseCount !== undefined) {
    bodyParams["LicenseCount"] = input.LicenseCount;
  }
  if (input.LicenseCountHardLimit !== undefined) {
    bodyParams["LicenseCountHardLimit"] = input.LicenseCountHardLimit;
  }
  if (input.LicenseCountingType !== undefined) {
    bodyParams["LicenseCountingType"] = input.LicenseCountingType;
  }
  if (input.LicenseRules !== undefined) {
    bodyParams["LicenseRules"] = serializeAws_json1_1StringList(
      input.LicenseRules,
      context
    );
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.ProductInformationList !== undefined) {
    bodyParams[
      "ProductInformationList"
    ] = serializeAws_json1_1ProductInformationList(
      input.ProductInformationList,
      context
    );
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteLicenseConfigurationRequest = (
  input: DeleteLicenseConfigurationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.LicenseConfigurationArn !== undefined) {
    bodyParams["LicenseConfigurationArn"] = input.LicenseConfigurationArn;
  }
  return bodyParams;
};

const serializeAws_json1_1Filter = (
  input: Filter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Values !== undefined) {
    bodyParams["Values"] = serializeAws_json1_1FilterValues(
      input.Values,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1FilterValues = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1Filters = (
  input: Array<Filter>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Filter(entry, context));
  }
  return contents;
};

const serializeAws_json1_1GetLicenseConfigurationRequest = (
  input: GetLicenseConfigurationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.LicenseConfigurationArn !== undefined) {
    bodyParams["LicenseConfigurationArn"] = input.LicenseConfigurationArn;
  }
  return bodyParams;
};

const serializeAws_json1_1GetServiceSettingsRequest = (
  input: GetServiceSettingsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1InventoryFilter = (
  input: InventoryFilter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Condition !== undefined) {
    bodyParams["Condition"] = input.Condition;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1InventoryFilterList = (
  input: Array<InventoryFilter>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1InventoryFilter(entry, context));
  }
  return contents;
};

const serializeAws_json1_1LicenseSpecification = (
  input: LicenseSpecification,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.LicenseConfigurationArn !== undefined) {
    bodyParams["LicenseConfigurationArn"] = input.LicenseConfigurationArn;
  }
  return bodyParams;
};

const serializeAws_json1_1LicenseSpecifications = (
  input: Array<LicenseSpecification>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1LicenseSpecification(entry, context));
  }
  return contents;
};

const serializeAws_json1_1ListAssociationsForLicenseConfigurationRequest = (
  input: ListAssociationsForLicenseConfigurationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.LicenseConfigurationArn !== undefined) {
    bodyParams["LicenseConfigurationArn"] = input.LicenseConfigurationArn;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListFailuresForLicenseConfigurationOperationsRequest = (
  input: ListFailuresForLicenseConfigurationOperationsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.LicenseConfigurationArn !== undefined) {
    bodyParams["LicenseConfigurationArn"] = input.LicenseConfigurationArn;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListLicenseConfigurationsRequest = (
  input: ListLicenseConfigurationsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Filters !== undefined) {
    bodyParams["Filters"] = serializeAws_json1_1Filters(input.Filters, context);
  }
  if (input.LicenseConfigurationArns !== undefined) {
    bodyParams["LicenseConfigurationArns"] = serializeAws_json1_1StringList(
      input.LicenseConfigurationArns,
      context
    );
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListLicenseSpecificationsForResourceRequest = (
  input: ListLicenseSpecificationsForResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ResourceArn !== undefined) {
    bodyParams["ResourceArn"] = input.ResourceArn;
  }
  return bodyParams;
};

const serializeAws_json1_1ListResourceInventoryRequest = (
  input: ListResourceInventoryRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Filters !== undefined) {
    bodyParams["Filters"] = serializeAws_json1_1InventoryFilterList(
      input.Filters,
      context
    );
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceArn !== undefined) {
    bodyParams["ResourceArn"] = input.ResourceArn;
  }
  return bodyParams;
};

const serializeAws_json1_1ListUsageForLicenseConfigurationRequest = (
  input: ListUsageForLicenseConfigurationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Filters !== undefined) {
    bodyParams["Filters"] = serializeAws_json1_1Filters(input.Filters, context);
  }
  if (input.LicenseConfigurationArn !== undefined) {
    bodyParams["LicenseConfigurationArn"] = input.LicenseConfigurationArn;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1OrganizationConfiguration = (
  input: OrganizationConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EnableIntegration !== undefined) {
    bodyParams["EnableIntegration"] = input.EnableIntegration;
  }
  return bodyParams;
};

const serializeAws_json1_1ProductInformation = (
  input: ProductInformation,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ProductInformationFilterList !== undefined) {
    bodyParams[
      "ProductInformationFilterList"
    ] = serializeAws_json1_1ProductInformationFilterList(
      input.ProductInformationFilterList,
      context
    );
  }
  if (input.ResourceType !== undefined) {
    bodyParams["ResourceType"] = input.ResourceType;
  }
  return bodyParams;
};

const serializeAws_json1_1ProductInformationFilter = (
  input: ProductInformationFilter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ProductInformationFilterComparator !== undefined) {
    bodyParams["ProductInformationFilterComparator"] =
      input.ProductInformationFilterComparator;
  }
  if (input.ProductInformationFilterName !== undefined) {
    bodyParams["ProductInformationFilterName"] =
      input.ProductInformationFilterName;
  }
  if (input.ProductInformationFilterValue !== undefined) {
    bodyParams[
      "ProductInformationFilterValue"
    ] = serializeAws_json1_1StringList(
      input.ProductInformationFilterValue,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ProductInformationFilterList = (
  input: Array<ProductInformationFilter>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1ProductInformationFilter(entry, context));
  }
  return contents;
};

const serializeAws_json1_1ProductInformationList = (
  input: Array<ProductInformation>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1ProductInformation(entry, context));
  }
  return contents;
};

const serializeAws_json1_1StringList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  const bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1TagKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1TagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Tag(entry, context));
  }
  return contents;
};

const serializeAws_json1_1TagResourceRequest = (
  input: TagResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceArn !== undefined) {
    bodyParams["ResourceArn"] = input.ResourceArn;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1UntagResourceRequest = (
  input: UntagResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceArn !== undefined) {
    bodyParams["ResourceArn"] = input.ResourceArn;
  }
  if (input.TagKeys !== undefined) {
    bodyParams["TagKeys"] = serializeAws_json1_1TagKeyList(
      input.TagKeys,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateLicenseConfigurationRequest = (
  input: UpdateLicenseConfigurationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.LicenseConfigurationArn !== undefined) {
    bodyParams["LicenseConfigurationArn"] = input.LicenseConfigurationArn;
  }
  if (input.LicenseConfigurationStatus !== undefined) {
    bodyParams["LicenseConfigurationStatus"] = input.LicenseConfigurationStatus;
  }
  if (input.LicenseCount !== undefined) {
    bodyParams["LicenseCount"] = input.LicenseCount;
  }
  if (input.LicenseCountHardLimit !== undefined) {
    bodyParams["LicenseCountHardLimit"] = input.LicenseCountHardLimit;
  }
  if (input.LicenseRules !== undefined) {
    bodyParams["LicenseRules"] = serializeAws_json1_1StringList(
      input.LicenseRules,
      context
    );
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.ProductInformationList !== undefined) {
    bodyParams[
      "ProductInformationList"
    ] = serializeAws_json1_1ProductInformationList(
      input.ProductInformationList,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateLicenseSpecificationsForResourceRequest = (
  input: UpdateLicenseSpecificationsForResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AddLicenseSpecifications !== undefined) {
    bodyParams[
      "AddLicenseSpecifications"
    ] = serializeAws_json1_1LicenseSpecifications(
      input.AddLicenseSpecifications,
      context
    );
  }
  if (input.RemoveLicenseSpecifications !== undefined) {
    bodyParams[
      "RemoveLicenseSpecifications"
    ] = serializeAws_json1_1LicenseSpecifications(
      input.RemoveLicenseSpecifications,
      context
    );
  }
  if (input.ResourceArn !== undefined) {
    bodyParams["ResourceArn"] = input.ResourceArn;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateServiceSettingsRequest = (
  input: UpdateServiceSettingsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EnableCrossAccountsDiscovery !== undefined) {
    bodyParams["EnableCrossAccountsDiscovery"] =
      input.EnableCrossAccountsDiscovery;
  }
  if (input.OrganizationConfiguration !== undefined) {
    bodyParams[
      "OrganizationConfiguration"
    ] = serializeAws_json1_1OrganizationConfiguration(
      input.OrganizationConfiguration,
      context
    );
  }
  if (input.S3BucketArn !== undefined) {
    bodyParams["S3BucketArn"] = input.S3BucketArn;
  }
  if (input.SnsTopicArn !== undefined) {
    bodyParams["SnsTopicArn"] = input.SnsTopicArn;
  }
  return bodyParams;
};

const deserializeAws_json1_1AccessDeniedException = (
  output: any,
  context: __SerdeContext
): AccessDeniedException => {
  let contents: any = {
    __type: "AccessDeniedException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1AuthorizationException = (
  output: any,
  context: __SerdeContext
): AuthorizationException => {
  let contents: any = {
    __type: "AuthorizationException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1AutomatedDiscoveryInformation = (
  output: any,
  context: __SerdeContext
): AutomatedDiscoveryInformation => {
  let contents: any = {
    __type: "AutomatedDiscoveryInformation",
    LastRunTime: undefined
  };
  if (output.LastRunTime !== undefined && output.LastRunTime !== null) {
    contents.LastRunTime = new Date(Math.round(output.LastRunTime * 1000));
  }
  return contents;
};

const deserializeAws_json1_1ConsumedLicenseSummary = (
  output: any,
  context: __SerdeContext
): ConsumedLicenseSummary => {
  let contents: any = {
    __type: "ConsumedLicenseSummary",
    ConsumedLicenses: undefined,
    ResourceType: undefined
  };
  if (
    output.ConsumedLicenses !== undefined &&
    output.ConsumedLicenses !== null
  ) {
    contents.ConsumedLicenses = output.ConsumedLicenses;
  }
  if (output.ResourceType !== undefined && output.ResourceType !== null) {
    contents.ResourceType = output.ResourceType;
  }
  return contents;
};

const deserializeAws_json1_1ConsumedLicenseSummaryList = (
  output: any,
  context: __SerdeContext
): Array<ConsumedLicenseSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ConsumedLicenseSummary(entry, context)
  );
};

const deserializeAws_json1_1CreateLicenseConfigurationResponse = (
  output: any,
  context: __SerdeContext
): CreateLicenseConfigurationResponse => {
  let contents: any = {
    __type: "CreateLicenseConfigurationResponse",
    LicenseConfigurationArn: undefined
  };
  if (
    output.LicenseConfigurationArn !== undefined &&
    output.LicenseConfigurationArn !== null
  ) {
    contents.LicenseConfigurationArn = output.LicenseConfigurationArn;
  }
  return contents;
};

const deserializeAws_json1_1DeleteLicenseConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteLicenseConfigurationResponse => {
  let contents: any = {
    __type: "DeleteLicenseConfigurationResponse"
  };
  return contents;
};

const deserializeAws_json1_1FailedDependencyException = (
  output: any,
  context: __SerdeContext
): FailedDependencyException => {
  let contents: any = {
    __type: "FailedDependencyException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1FilterLimitExceededException = (
  output: any,
  context: __SerdeContext
): FilterLimitExceededException => {
  let contents: any = {
    __type: "FilterLimitExceededException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1GetLicenseConfigurationResponse = (
  output: any,
  context: __SerdeContext
): GetLicenseConfigurationResponse => {
  let contents: any = {
    __type: "GetLicenseConfigurationResponse",
    AutomatedDiscoveryInformation: undefined,
    ConsumedLicenseSummaryList: undefined,
    ConsumedLicenses: undefined,
    Description: undefined,
    LicenseConfigurationArn: undefined,
    LicenseConfigurationId: undefined,
    LicenseCount: undefined,
    LicenseCountHardLimit: undefined,
    LicenseCountingType: undefined,
    LicenseRules: undefined,
    ManagedResourceSummaryList: undefined,
    Name: undefined,
    OwnerAccountId: undefined,
    ProductInformationList: undefined,
    Status: undefined,
    Tags: undefined
  };
  if (
    output.AutomatedDiscoveryInformation !== undefined &&
    output.AutomatedDiscoveryInformation !== null
  ) {
    contents.AutomatedDiscoveryInformation = deserializeAws_json1_1AutomatedDiscoveryInformation(
      output.AutomatedDiscoveryInformation,
      context
    );
  }
  if (
    output.ConsumedLicenseSummaryList !== undefined &&
    output.ConsumedLicenseSummaryList !== null
  ) {
    contents.ConsumedLicenseSummaryList = deserializeAws_json1_1ConsumedLicenseSummaryList(
      output.ConsumedLicenseSummaryList,
      context
    );
  }
  if (
    output.ConsumedLicenses !== undefined &&
    output.ConsumedLicenses !== null
  ) {
    contents.ConsumedLicenses = output.ConsumedLicenses;
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (
    output.LicenseConfigurationArn !== undefined &&
    output.LicenseConfigurationArn !== null
  ) {
    contents.LicenseConfigurationArn = output.LicenseConfigurationArn;
  }
  if (
    output.LicenseConfigurationId !== undefined &&
    output.LicenseConfigurationId !== null
  ) {
    contents.LicenseConfigurationId = output.LicenseConfigurationId;
  }
  if (output.LicenseCount !== undefined && output.LicenseCount !== null) {
    contents.LicenseCount = output.LicenseCount;
  }
  if (
    output.LicenseCountHardLimit !== undefined &&
    output.LicenseCountHardLimit !== null
  ) {
    contents.LicenseCountHardLimit = output.LicenseCountHardLimit;
  }
  if (
    output.LicenseCountingType !== undefined &&
    output.LicenseCountingType !== null
  ) {
    contents.LicenseCountingType = output.LicenseCountingType;
  }
  if (output.LicenseRules !== undefined && output.LicenseRules !== null) {
    contents.LicenseRules = deserializeAws_json1_1StringList(
      output.LicenseRules,
      context
    );
  }
  if (
    output.ManagedResourceSummaryList !== undefined &&
    output.ManagedResourceSummaryList !== null
  ) {
    contents.ManagedResourceSummaryList = deserializeAws_json1_1ManagedResourceSummaryList(
      output.ManagedResourceSummaryList,
      context
    );
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.OwnerAccountId !== undefined && output.OwnerAccountId !== null) {
    contents.OwnerAccountId = output.OwnerAccountId;
  }
  if (
    output.ProductInformationList !== undefined &&
    output.ProductInformationList !== null
  ) {
    contents.ProductInformationList = deserializeAws_json1_1ProductInformationList(
      output.ProductInformationList,
      context
    );
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.Tags !== undefined && output.Tags !== null) {
    contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
  }
  return contents;
};

const deserializeAws_json1_1GetServiceSettingsResponse = (
  output: any,
  context: __SerdeContext
): GetServiceSettingsResponse => {
  let contents: any = {
    __type: "GetServiceSettingsResponse",
    EnableCrossAccountsDiscovery: undefined,
    LicenseManagerResourceShareArn: undefined,
    OrganizationConfiguration: undefined,
    S3BucketArn: undefined,
    SnsTopicArn: undefined
  };
  if (
    output.EnableCrossAccountsDiscovery !== undefined &&
    output.EnableCrossAccountsDiscovery !== null
  ) {
    contents.EnableCrossAccountsDiscovery = output.EnableCrossAccountsDiscovery;
  }
  if (
    output.LicenseManagerResourceShareArn !== undefined &&
    output.LicenseManagerResourceShareArn !== null
  ) {
    contents.LicenseManagerResourceShareArn =
      output.LicenseManagerResourceShareArn;
  }
  if (
    output.OrganizationConfiguration !== undefined &&
    output.OrganizationConfiguration !== null
  ) {
    contents.OrganizationConfiguration = deserializeAws_json1_1OrganizationConfiguration(
      output.OrganizationConfiguration,
      context
    );
  }
  if (output.S3BucketArn !== undefined && output.S3BucketArn !== null) {
    contents.S3BucketArn = output.S3BucketArn;
  }
  if (output.SnsTopicArn !== undefined && output.SnsTopicArn !== null) {
    contents.SnsTopicArn = output.SnsTopicArn;
  }
  return contents;
};

const deserializeAws_json1_1InvalidParameterValueException = (
  output: any,
  context: __SerdeContext
): InvalidParameterValueException => {
  let contents: any = {
    __type: "InvalidParameterValueException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidResourceStateException = (
  output: any,
  context: __SerdeContext
): InvalidResourceStateException => {
  let contents: any = {
    __type: "InvalidResourceStateException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1LicenseConfiguration = (
  output: any,
  context: __SerdeContext
): LicenseConfiguration => {
  let contents: any = {
    __type: "LicenseConfiguration",
    AutomatedDiscoveryInformation: undefined,
    ConsumedLicenseSummaryList: undefined,
    ConsumedLicenses: undefined,
    Description: undefined,
    LicenseConfigurationArn: undefined,
    LicenseConfigurationId: undefined,
    LicenseCount: undefined,
    LicenseCountHardLimit: undefined,
    LicenseCountingType: undefined,
    LicenseRules: undefined,
    ManagedResourceSummaryList: undefined,
    Name: undefined,
    OwnerAccountId: undefined,
    ProductInformationList: undefined,
    Status: undefined
  };
  if (
    output.AutomatedDiscoveryInformation !== undefined &&
    output.AutomatedDiscoveryInformation !== null
  ) {
    contents.AutomatedDiscoveryInformation = deserializeAws_json1_1AutomatedDiscoveryInformation(
      output.AutomatedDiscoveryInformation,
      context
    );
  }
  if (
    output.ConsumedLicenseSummaryList !== undefined &&
    output.ConsumedLicenseSummaryList !== null
  ) {
    contents.ConsumedLicenseSummaryList = deserializeAws_json1_1ConsumedLicenseSummaryList(
      output.ConsumedLicenseSummaryList,
      context
    );
  }
  if (
    output.ConsumedLicenses !== undefined &&
    output.ConsumedLicenses !== null
  ) {
    contents.ConsumedLicenses = output.ConsumedLicenses;
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (
    output.LicenseConfigurationArn !== undefined &&
    output.LicenseConfigurationArn !== null
  ) {
    contents.LicenseConfigurationArn = output.LicenseConfigurationArn;
  }
  if (
    output.LicenseConfigurationId !== undefined &&
    output.LicenseConfigurationId !== null
  ) {
    contents.LicenseConfigurationId = output.LicenseConfigurationId;
  }
  if (output.LicenseCount !== undefined && output.LicenseCount !== null) {
    contents.LicenseCount = output.LicenseCount;
  }
  if (
    output.LicenseCountHardLimit !== undefined &&
    output.LicenseCountHardLimit !== null
  ) {
    contents.LicenseCountHardLimit = output.LicenseCountHardLimit;
  }
  if (
    output.LicenseCountingType !== undefined &&
    output.LicenseCountingType !== null
  ) {
    contents.LicenseCountingType = output.LicenseCountingType;
  }
  if (output.LicenseRules !== undefined && output.LicenseRules !== null) {
    contents.LicenseRules = deserializeAws_json1_1StringList(
      output.LicenseRules,
      context
    );
  }
  if (
    output.ManagedResourceSummaryList !== undefined &&
    output.ManagedResourceSummaryList !== null
  ) {
    contents.ManagedResourceSummaryList = deserializeAws_json1_1ManagedResourceSummaryList(
      output.ManagedResourceSummaryList,
      context
    );
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.OwnerAccountId !== undefined && output.OwnerAccountId !== null) {
    contents.OwnerAccountId = output.OwnerAccountId;
  }
  if (
    output.ProductInformationList !== undefined &&
    output.ProductInformationList !== null
  ) {
    contents.ProductInformationList = deserializeAws_json1_1ProductInformationList(
      output.ProductInformationList,
      context
    );
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_json1_1LicenseConfigurationAssociation = (
  output: any,
  context: __SerdeContext
): LicenseConfigurationAssociation => {
  let contents: any = {
    __type: "LicenseConfigurationAssociation",
    AssociationTime: undefined,
    ResourceArn: undefined,
    ResourceOwnerId: undefined,
    ResourceType: undefined
  };
  if (output.AssociationTime !== undefined && output.AssociationTime !== null) {
    contents.AssociationTime = new Date(
      Math.round(output.AssociationTime * 1000)
    );
  }
  if (output.ResourceArn !== undefined && output.ResourceArn !== null) {
    contents.ResourceArn = output.ResourceArn;
  }
  if (output.ResourceOwnerId !== undefined && output.ResourceOwnerId !== null) {
    contents.ResourceOwnerId = output.ResourceOwnerId;
  }
  if (output.ResourceType !== undefined && output.ResourceType !== null) {
    contents.ResourceType = output.ResourceType;
  }
  return contents;
};

const deserializeAws_json1_1LicenseConfigurationAssociations = (
  output: any,
  context: __SerdeContext
): Array<LicenseConfigurationAssociation> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LicenseConfigurationAssociation(entry, context)
  );
};

const deserializeAws_json1_1LicenseConfigurationUsage = (
  output: any,
  context: __SerdeContext
): LicenseConfigurationUsage => {
  let contents: any = {
    __type: "LicenseConfigurationUsage",
    AssociationTime: undefined,
    ConsumedLicenses: undefined,
    ResourceArn: undefined,
    ResourceOwnerId: undefined,
    ResourceStatus: undefined,
    ResourceType: undefined
  };
  if (output.AssociationTime !== undefined && output.AssociationTime !== null) {
    contents.AssociationTime = new Date(
      Math.round(output.AssociationTime * 1000)
    );
  }
  if (
    output.ConsumedLicenses !== undefined &&
    output.ConsumedLicenses !== null
  ) {
    contents.ConsumedLicenses = output.ConsumedLicenses;
  }
  if (output.ResourceArn !== undefined && output.ResourceArn !== null) {
    contents.ResourceArn = output.ResourceArn;
  }
  if (output.ResourceOwnerId !== undefined && output.ResourceOwnerId !== null) {
    contents.ResourceOwnerId = output.ResourceOwnerId;
  }
  if (output.ResourceStatus !== undefined && output.ResourceStatus !== null) {
    contents.ResourceStatus = output.ResourceStatus;
  }
  if (output.ResourceType !== undefined && output.ResourceType !== null) {
    contents.ResourceType = output.ResourceType;
  }
  return contents;
};

const deserializeAws_json1_1LicenseConfigurationUsageList = (
  output: any,
  context: __SerdeContext
): Array<LicenseConfigurationUsage> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LicenseConfigurationUsage(entry, context)
  );
};

const deserializeAws_json1_1LicenseConfigurations = (
  output: any,
  context: __SerdeContext
): Array<LicenseConfiguration> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LicenseConfiguration(entry, context)
  );
};

const deserializeAws_json1_1LicenseOperationFailure = (
  output: any,
  context: __SerdeContext
): LicenseOperationFailure => {
  let contents: any = {
    __type: "LicenseOperationFailure",
    ErrorMessage: undefined,
    FailureTime: undefined,
    MetadataList: undefined,
    OperationName: undefined,
    OperationRequestedBy: undefined,
    ResourceArn: undefined,
    ResourceOwnerId: undefined,
    ResourceType: undefined
  };
  if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  if (output.FailureTime !== undefined && output.FailureTime !== null) {
    contents.FailureTime = new Date(Math.round(output.FailureTime * 1000));
  }
  if (output.MetadataList !== undefined && output.MetadataList !== null) {
    contents.MetadataList = deserializeAws_json1_1MetadataList(
      output.MetadataList,
      context
    );
  }
  if (output.OperationName !== undefined && output.OperationName !== null) {
    contents.OperationName = output.OperationName;
  }
  if (
    output.OperationRequestedBy !== undefined &&
    output.OperationRequestedBy !== null
  ) {
    contents.OperationRequestedBy = output.OperationRequestedBy;
  }
  if (output.ResourceArn !== undefined && output.ResourceArn !== null) {
    contents.ResourceArn = output.ResourceArn;
  }
  if (output.ResourceOwnerId !== undefined && output.ResourceOwnerId !== null) {
    contents.ResourceOwnerId = output.ResourceOwnerId;
  }
  if (output.ResourceType !== undefined && output.ResourceType !== null) {
    contents.ResourceType = output.ResourceType;
  }
  return contents;
};

const deserializeAws_json1_1LicenseOperationFailureList = (
  output: any,
  context: __SerdeContext
): Array<LicenseOperationFailure> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LicenseOperationFailure(entry, context)
  );
};

const deserializeAws_json1_1LicenseSpecification = (
  output: any,
  context: __SerdeContext
): LicenseSpecification => {
  let contents: any = {
    __type: "LicenseSpecification",
    LicenseConfigurationArn: undefined
  };
  if (
    output.LicenseConfigurationArn !== undefined &&
    output.LicenseConfigurationArn !== null
  ) {
    contents.LicenseConfigurationArn = output.LicenseConfigurationArn;
  }
  return contents;
};

const deserializeAws_json1_1LicenseSpecifications = (
  output: any,
  context: __SerdeContext
): Array<LicenseSpecification> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LicenseSpecification(entry, context)
  );
};

const deserializeAws_json1_1LicenseUsageException = (
  output: any,
  context: __SerdeContext
): LicenseUsageException => {
  let contents: any = {
    __type: "LicenseUsageException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ListAssociationsForLicenseConfigurationResponse = (
  output: any,
  context: __SerdeContext
): ListAssociationsForLicenseConfigurationResponse => {
  let contents: any = {
    __type: "ListAssociationsForLicenseConfigurationResponse",
    LicenseConfigurationAssociations: undefined,
    NextToken: undefined
  };
  if (
    output.LicenseConfigurationAssociations !== undefined &&
    output.LicenseConfigurationAssociations !== null
  ) {
    contents.LicenseConfigurationAssociations = deserializeAws_json1_1LicenseConfigurationAssociations(
      output.LicenseConfigurationAssociations,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListFailuresForLicenseConfigurationOperationsResponse = (
  output: any,
  context: __SerdeContext
): ListFailuresForLicenseConfigurationOperationsResponse => {
  let contents: any = {
    __type: "ListFailuresForLicenseConfigurationOperationsResponse",
    LicenseOperationFailureList: undefined,
    NextToken: undefined
  };
  if (
    output.LicenseOperationFailureList !== undefined &&
    output.LicenseOperationFailureList !== null
  ) {
    contents.LicenseOperationFailureList = deserializeAws_json1_1LicenseOperationFailureList(
      output.LicenseOperationFailureList,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListLicenseConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): ListLicenseConfigurationsResponse => {
  let contents: any = {
    __type: "ListLicenseConfigurationsResponse",
    LicenseConfigurations: undefined,
    NextToken: undefined
  };
  if (
    output.LicenseConfigurations !== undefined &&
    output.LicenseConfigurations !== null
  ) {
    contents.LicenseConfigurations = deserializeAws_json1_1LicenseConfigurations(
      output.LicenseConfigurations,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListLicenseSpecificationsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListLicenseSpecificationsForResourceResponse => {
  let contents: any = {
    __type: "ListLicenseSpecificationsForResourceResponse",
    LicenseSpecifications: undefined,
    NextToken: undefined
  };
  if (
    output.LicenseSpecifications !== undefined &&
    output.LicenseSpecifications !== null
  ) {
    contents.LicenseSpecifications = deserializeAws_json1_1LicenseSpecifications(
      output.LicenseSpecifications,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListResourceInventoryResponse = (
  output: any,
  context: __SerdeContext
): ListResourceInventoryResponse => {
  let contents: any = {
    __type: "ListResourceInventoryResponse",
    NextToken: undefined,
    ResourceInventoryList: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (
    output.ResourceInventoryList !== undefined &&
    output.ResourceInventoryList !== null
  ) {
    contents.ResourceInventoryList = deserializeAws_json1_1ResourceInventoryList(
      output.ResourceInventoryList,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  let contents: any = {
    __type: "ListTagsForResourceResponse",
    Tags: undefined
  };
  if (output.Tags !== undefined && output.Tags !== null) {
    contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
  }
  return contents;
};

const deserializeAws_json1_1ListUsageForLicenseConfigurationResponse = (
  output: any,
  context: __SerdeContext
): ListUsageForLicenseConfigurationResponse => {
  let contents: any = {
    __type: "ListUsageForLicenseConfigurationResponse",
    LicenseConfigurationUsageList: undefined,
    NextToken: undefined
  };
  if (
    output.LicenseConfigurationUsageList !== undefined &&
    output.LicenseConfigurationUsageList !== null
  ) {
    contents.LicenseConfigurationUsageList = deserializeAws_json1_1LicenseConfigurationUsageList(
      output.LicenseConfigurationUsageList,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ManagedResourceSummary = (
  output: any,
  context: __SerdeContext
): ManagedResourceSummary => {
  let contents: any = {
    __type: "ManagedResourceSummary",
    AssociationCount: undefined,
    ResourceType: undefined
  };
  if (
    output.AssociationCount !== undefined &&
    output.AssociationCount !== null
  ) {
    contents.AssociationCount = output.AssociationCount;
  }
  if (output.ResourceType !== undefined && output.ResourceType !== null) {
    contents.ResourceType = output.ResourceType;
  }
  return contents;
};

const deserializeAws_json1_1ManagedResourceSummaryList = (
  output: any,
  context: __SerdeContext
): Array<ManagedResourceSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ManagedResourceSummary(entry, context)
  );
};

const deserializeAws_json1_1Metadata = (
  output: any,
  context: __SerdeContext
): Metadata => {
  let contents: any = {
    __type: "Metadata",
    Name: undefined,
    Value: undefined
  };
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1MetadataList = (
  output: any,
  context: __SerdeContext
): Array<Metadata> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Metadata(entry, context)
  );
};

const deserializeAws_json1_1OrganizationConfiguration = (
  output: any,
  context: __SerdeContext
): OrganizationConfiguration => {
  let contents: any = {
    __type: "OrganizationConfiguration",
    EnableIntegration: undefined
  };
  if (
    output.EnableIntegration !== undefined &&
    output.EnableIntegration !== null
  ) {
    contents.EnableIntegration = output.EnableIntegration;
  }
  return contents;
};

const deserializeAws_json1_1ProductInformation = (
  output: any,
  context: __SerdeContext
): ProductInformation => {
  let contents: any = {
    __type: "ProductInformation",
    ProductInformationFilterList: undefined,
    ResourceType: undefined
  };
  if (
    output.ProductInformationFilterList !== undefined &&
    output.ProductInformationFilterList !== null
  ) {
    contents.ProductInformationFilterList = deserializeAws_json1_1ProductInformationFilterList(
      output.ProductInformationFilterList,
      context
    );
  }
  if (output.ResourceType !== undefined && output.ResourceType !== null) {
    contents.ResourceType = output.ResourceType;
  }
  return contents;
};

const deserializeAws_json1_1ProductInformationFilter = (
  output: any,
  context: __SerdeContext
): ProductInformationFilter => {
  let contents: any = {
    __type: "ProductInformationFilter",
    ProductInformationFilterComparator: undefined,
    ProductInformationFilterName: undefined,
    ProductInformationFilterValue: undefined
  };
  if (
    output.ProductInformationFilterComparator !== undefined &&
    output.ProductInformationFilterComparator !== null
  ) {
    contents.ProductInformationFilterComparator =
      output.ProductInformationFilterComparator;
  }
  if (
    output.ProductInformationFilterName !== undefined &&
    output.ProductInformationFilterName !== null
  ) {
    contents.ProductInformationFilterName = output.ProductInformationFilterName;
  }
  if (
    output.ProductInformationFilterValue !== undefined &&
    output.ProductInformationFilterValue !== null
  ) {
    contents.ProductInformationFilterValue = deserializeAws_json1_1StringList(
      output.ProductInformationFilterValue,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ProductInformationFilterList = (
  output: any,
  context: __SerdeContext
): Array<ProductInformationFilter> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ProductInformationFilter(entry, context)
  );
};

const deserializeAws_json1_1ProductInformationList = (
  output: any,
  context: __SerdeContext
): Array<ProductInformation> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ProductInformation(entry, context)
  );
};

const deserializeAws_json1_1RateLimitExceededException = (
  output: any,
  context: __SerdeContext
): RateLimitExceededException => {
  let contents: any = {
    __type: "RateLimitExceededException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceInventory = (
  output: any,
  context: __SerdeContext
): ResourceInventory => {
  let contents: any = {
    __type: "ResourceInventory",
    Platform: undefined,
    PlatformVersion: undefined,
    ResourceArn: undefined,
    ResourceId: undefined,
    ResourceOwningAccountId: undefined,
    ResourceType: undefined
  };
  if (output.Platform !== undefined && output.Platform !== null) {
    contents.Platform = output.Platform;
  }
  if (output.PlatformVersion !== undefined && output.PlatformVersion !== null) {
    contents.PlatformVersion = output.PlatformVersion;
  }
  if (output.ResourceArn !== undefined && output.ResourceArn !== null) {
    contents.ResourceArn = output.ResourceArn;
  }
  if (output.ResourceId !== undefined && output.ResourceId !== null) {
    contents.ResourceId = output.ResourceId;
  }
  if (
    output.ResourceOwningAccountId !== undefined &&
    output.ResourceOwningAccountId !== null
  ) {
    contents.ResourceOwningAccountId = output.ResourceOwningAccountId;
  }
  if (output.ResourceType !== undefined && output.ResourceType !== null) {
    contents.ResourceType = output.ResourceType;
  }
  return contents;
};

const deserializeAws_json1_1ResourceInventoryList = (
  output: any,
  context: __SerdeContext
): Array<ResourceInventory> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ResourceInventory(entry, context)
  );
};

const deserializeAws_json1_1ResourceLimitExceededException = (
  output: any,
  context: __SerdeContext
): ResourceLimitExceededException => {
  let contents: any = {
    __type: "ResourceLimitExceededException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ServerInternalException = (
  output: any,
  context: __SerdeContext
): ServerInternalException => {
  let contents: any = {
    __type: "ServerInternalException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1StringList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined
  };
  if (output.Key !== undefined && output.Key !== null) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1TagResourceResponse = (
  output: any,
  context: __SerdeContext
): TagResourceResponse => {
  let contents: any = {
    __type: "TagResourceResponse"
  };
  return contents;
};

const deserializeAws_json1_1UntagResourceResponse = (
  output: any,
  context: __SerdeContext
): UntagResourceResponse => {
  let contents: any = {
    __type: "UntagResourceResponse"
  };
  return contents;
};

const deserializeAws_json1_1UpdateLicenseConfigurationResponse = (
  output: any,
  context: __SerdeContext
): UpdateLicenseConfigurationResponse => {
  let contents: any = {
    __type: "UpdateLicenseConfigurationResponse"
  };
  return contents;
};

const deserializeAws_json1_1UpdateLicenseSpecificationsForResourceResponse = (
  output: any,
  context: __SerdeContext
): UpdateLicenseSpecificationsForResourceResponse => {
  let contents: any = {
    __type: "UpdateLicenseSpecificationsForResourceResponse"
  };
  return contents;
};

const deserializeAws_json1_1UpdateServiceSettingsResponse = (
  output: any,
  context: __SerdeContext
): UpdateServiceSettingsResponse => {
  let contents: any = {
    __type: "UpdateServiceSettingsResponse"
  };
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
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
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const buildHttpRpcRequest = (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): __HttpRequest => {
  const contents: any = {
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: path,
    headers: headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
