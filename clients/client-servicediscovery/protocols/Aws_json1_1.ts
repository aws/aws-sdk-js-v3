import {
  CreateHttpNamespaceCommandInput,
  CreateHttpNamespaceCommandOutput
} from "../commands/CreateHttpNamespaceCommand";
import {
  CreatePrivateDnsNamespaceCommandInput,
  CreatePrivateDnsNamespaceCommandOutput
} from "../commands/CreatePrivateDnsNamespaceCommand";
import {
  CreatePublicDnsNamespaceCommandInput,
  CreatePublicDnsNamespaceCommandOutput
} from "../commands/CreatePublicDnsNamespaceCommand";
import {
  CreateServiceCommandInput,
  CreateServiceCommandOutput
} from "../commands/CreateServiceCommand";
import {
  DeleteNamespaceCommandInput,
  DeleteNamespaceCommandOutput
} from "../commands/DeleteNamespaceCommand";
import {
  DeleteServiceCommandInput,
  DeleteServiceCommandOutput
} from "../commands/DeleteServiceCommand";
import {
  DeregisterInstanceCommandInput,
  DeregisterInstanceCommandOutput
} from "../commands/DeregisterInstanceCommand";
import {
  DiscoverInstancesCommandInput,
  DiscoverInstancesCommandOutput
} from "../commands/DiscoverInstancesCommand";
import {
  GetInstanceCommandInput,
  GetInstanceCommandOutput
} from "../commands/GetInstanceCommand";
import {
  GetInstancesHealthStatusCommandInput,
  GetInstancesHealthStatusCommandOutput
} from "../commands/GetInstancesHealthStatusCommand";
import {
  GetNamespaceCommandInput,
  GetNamespaceCommandOutput
} from "../commands/GetNamespaceCommand";
import {
  GetOperationCommandInput,
  GetOperationCommandOutput
} from "../commands/GetOperationCommand";
import {
  GetServiceCommandInput,
  GetServiceCommandOutput
} from "../commands/GetServiceCommand";
import {
  ListInstancesCommandInput,
  ListInstancesCommandOutput
} from "../commands/ListInstancesCommand";
import {
  ListNamespacesCommandInput,
  ListNamespacesCommandOutput
} from "../commands/ListNamespacesCommand";
import {
  ListOperationsCommandInput,
  ListOperationsCommandOutput
} from "../commands/ListOperationsCommand";
import {
  ListServicesCommandInput,
  ListServicesCommandOutput
} from "../commands/ListServicesCommand";
import {
  RegisterInstanceCommandInput,
  RegisterInstanceCommandOutput
} from "../commands/RegisterInstanceCommand";
import {
  UpdateInstanceCustomHealthStatusCommandInput,
  UpdateInstanceCustomHealthStatusCommandOutput
} from "../commands/UpdateInstanceCustomHealthStatusCommand";
import {
  UpdateServiceCommandInput,
  UpdateServiceCommandOutput
} from "../commands/UpdateServiceCommand";
import {
  CreateHttpNamespaceRequest,
  CreateHttpNamespaceResponse,
  CreatePrivateDnsNamespaceRequest,
  CreatePrivateDnsNamespaceResponse,
  CreatePublicDnsNamespaceRequest,
  CreatePublicDnsNamespaceResponse,
  CreateServiceRequest,
  CreateServiceResponse,
  CustomHealthNotFound,
  DeleteNamespaceRequest,
  DeleteNamespaceResponse,
  DeleteServiceRequest,
  DeleteServiceResponse,
  DeregisterInstanceRequest,
  DeregisterInstanceResponse,
  DiscoverInstancesRequest,
  DiscoverInstancesResponse,
  DnsConfig,
  DnsConfigChange,
  DnsProperties,
  DnsRecord,
  DuplicateRequest,
  GetInstanceRequest,
  GetInstanceResponse,
  GetInstancesHealthStatusRequest,
  GetInstancesHealthStatusResponse,
  GetNamespaceRequest,
  GetNamespaceResponse,
  GetOperationRequest,
  GetOperationResponse,
  GetServiceRequest,
  GetServiceResponse,
  HealthCheckConfig,
  HealthCheckCustomConfig,
  HealthStatus,
  HttpInstanceSummary,
  HttpProperties,
  Instance,
  InstanceNotFound,
  InstanceSummary,
  InvalidInput,
  ListInstancesRequest,
  ListInstancesResponse,
  ListNamespacesRequest,
  ListNamespacesResponse,
  ListOperationsRequest,
  ListOperationsResponse,
  ListServicesRequest,
  ListServicesResponse,
  Namespace,
  NamespaceAlreadyExists,
  NamespaceFilter,
  NamespaceNotFound,
  NamespaceProperties,
  NamespaceSummary,
  Operation,
  OperationFilter,
  OperationNotFound,
  OperationSummary,
  RegisterInstanceRequest,
  RegisterInstanceResponse,
  ResourceInUse,
  ResourceLimitExceeded,
  Service,
  ServiceAlreadyExists,
  ServiceChange,
  ServiceFilter,
  ServiceNotFound,
  ServiceSummary,
  UpdateInstanceCustomHealthStatusRequest,
  UpdateServiceRequest,
  UpdateServiceResponse
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

export async function serializeAws_json1_1CreateHttpNamespaceCommand(
  input: CreateHttpNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53AutoNaming_v20170314.CreateHttpNamespace";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateHttpNamespaceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreatePrivateDnsNamespaceCommand(
  input: CreatePrivateDnsNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "Route53AutoNaming_v20170314.CreatePrivateDnsNamespace";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreatePrivateDnsNamespaceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreatePublicDnsNamespaceCommand(
  input: CreatePublicDnsNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "Route53AutoNaming_v20170314.CreatePublicDnsNamespace";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreatePublicDnsNamespaceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateServiceCommand(
  input: CreateServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53AutoNaming_v20170314.CreateService";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateServiceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteNamespaceCommand(
  input: DeleteNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53AutoNaming_v20170314.DeleteNamespace";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteNamespaceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteServiceCommand(
  input: DeleteServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53AutoNaming_v20170314.DeleteService";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteServiceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeregisterInstanceCommand(
  input: DeregisterInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53AutoNaming_v20170314.DeregisterInstance";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeregisterInstanceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DiscoverInstancesCommand(
  input: DiscoverInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53AutoNaming_v20170314.DiscoverInstances";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DiscoverInstancesRequest(input, context)
  );
  let resolvedHostname = (context.endpoint as any).hostname;
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "data-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error(
        "ValidationError: prefixed hostname must be hostname compatible."
      );
    }
  }
  return buildHttpRpcRequest(context, headers, "/", resolvedHostname, body);
}

export async function serializeAws_json1_1GetInstanceCommand(
  input: GetInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53AutoNaming_v20170314.GetInstance";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetInstancesHealthStatusCommand(
  input: GetInstancesHealthStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "Route53AutoNaming_v20170314.GetInstancesHealthStatus";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetInstancesHealthStatusRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetNamespaceCommand(
  input: GetNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53AutoNaming_v20170314.GetNamespace";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetNamespaceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetOperationCommand(
  input: GetOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53AutoNaming_v20170314.GetOperation";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetOperationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetServiceCommand(
  input: GetServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53AutoNaming_v20170314.GetService";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListInstancesCommand(
  input: ListInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53AutoNaming_v20170314.ListInstances";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListInstancesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListNamespacesCommand(
  input: ListNamespacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53AutoNaming_v20170314.ListNamespaces";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListNamespacesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListOperationsCommand(
  input: ListOperationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53AutoNaming_v20170314.ListOperations";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListOperationsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListServicesCommand(
  input: ListServicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53AutoNaming_v20170314.ListServices";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListServicesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RegisterInstanceCommand(
  input: RegisterInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53AutoNaming_v20170314.RegisterInstance";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RegisterInstanceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateInstanceCustomHealthStatusCommand(
  input: UpdateInstanceCustomHealthStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateInstanceCustomHealthStatusRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateServiceCommand(
  input: UpdateServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53AutoNaming_v20170314.UpdateService";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateServiceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1CreateHttpNamespaceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHttpNamespaceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateHttpNamespaceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateHttpNamespaceResponse(data, context);
  const response: CreateHttpNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateHttpNamespaceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateHttpNamespaceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHttpNamespaceCommandOutput> {
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
    case "DuplicateRequest":
    case "com.amazonaws.route53.autonaming.v20170314#DuplicateRequest":
      response = {
        ...(await deserializeAws_json1_1DuplicateRequestResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NamespaceAlreadyExists":
    case "com.amazonaws.route53.autonaming.v20170314#NamespaceAlreadyExists":
      response = {
        ...(await deserializeAws_json1_1NamespaceAlreadyExistsResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceLimitExceeded":
    case "com.amazonaws.route53.autonaming.v20170314#ResourceLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededResponse(
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

export async function deserializeAws_json1_1CreatePrivateDnsNamespaceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePrivateDnsNamespaceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreatePrivateDnsNamespaceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreatePrivateDnsNamespaceResponse(
    data,
    context
  );
  const response: CreatePrivateDnsNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreatePrivateDnsNamespaceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreatePrivateDnsNamespaceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePrivateDnsNamespaceCommandOutput> {
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
    case "DuplicateRequest":
    case "com.amazonaws.route53.autonaming.v20170314#DuplicateRequest":
      response = {
        ...(await deserializeAws_json1_1DuplicateRequestResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NamespaceAlreadyExists":
    case "com.amazonaws.route53.autonaming.v20170314#NamespaceAlreadyExists":
      response = {
        ...(await deserializeAws_json1_1NamespaceAlreadyExistsResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceLimitExceeded":
    case "com.amazonaws.route53.autonaming.v20170314#ResourceLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededResponse(
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

export async function deserializeAws_json1_1CreatePublicDnsNamespaceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePublicDnsNamespaceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreatePublicDnsNamespaceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreatePublicDnsNamespaceResponse(
    data,
    context
  );
  const response: CreatePublicDnsNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreatePublicDnsNamespaceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreatePublicDnsNamespaceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePublicDnsNamespaceCommandOutput> {
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
    case "DuplicateRequest":
    case "com.amazonaws.route53.autonaming.v20170314#DuplicateRequest":
      response = {
        ...(await deserializeAws_json1_1DuplicateRequestResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NamespaceAlreadyExists":
    case "com.amazonaws.route53.autonaming.v20170314#NamespaceAlreadyExists":
      response = {
        ...(await deserializeAws_json1_1NamespaceAlreadyExistsResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceLimitExceeded":
    case "com.amazonaws.route53.autonaming.v20170314#ResourceLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededResponse(
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

export async function deserializeAws_json1_1CreateServiceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateServiceResponse(data, context);
  const response: CreateServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateServiceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateServiceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceCommandOutput> {
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
    case "InvalidInput":
    case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NamespaceNotFound":
    case "com.amazonaws.route53.autonaming.v20170314#NamespaceNotFound":
      response = {
        ...(await deserializeAws_json1_1NamespaceNotFoundResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceLimitExceeded":
    case "com.amazonaws.route53.autonaming.v20170314#ResourceLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAlreadyExists":
    case "com.amazonaws.route53.autonaming.v20170314#ServiceAlreadyExists":
      response = {
        ...(await deserializeAws_json1_1ServiceAlreadyExistsResponse(
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

export async function deserializeAws_json1_1DeleteNamespaceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNamespaceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteNamespaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteNamespaceResponse(data, context);
  const response: DeleteNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteNamespaceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteNamespaceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNamespaceCommandOutput> {
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
    case "DuplicateRequest":
    case "com.amazonaws.route53.autonaming.v20170314#DuplicateRequest":
      response = {
        ...(await deserializeAws_json1_1DuplicateRequestResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NamespaceNotFound":
    case "com.amazonaws.route53.autonaming.v20170314#NamespaceNotFound":
      response = {
        ...(await deserializeAws_json1_1NamespaceNotFoundResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUse":
    case "com.amazonaws.route53.autonaming.v20170314#ResourceInUse":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseResponse(
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

export async function deserializeAws_json1_1DeleteServiceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteServiceResponse(data, context);
  const response: DeleteServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteServiceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteServiceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceCommandOutput> {
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
    case "InvalidInput":
    case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUse":
    case "com.amazonaws.route53.autonaming.v20170314#ResourceInUse":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceNotFound":
    case "com.amazonaws.route53.autonaming.v20170314#ServiceNotFound":
      response = {
        ...(await deserializeAws_json1_1ServiceNotFoundResponse(
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

export async function deserializeAws_json1_1DeregisterInstanceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterInstanceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeregisterInstanceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeregisterInstanceResponse(data, context);
  const response: DeregisterInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeregisterInstanceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeregisterInstanceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterInstanceCommandOutput> {
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
    case "DuplicateRequest":
    case "com.amazonaws.route53.autonaming.v20170314#DuplicateRequest":
      response = {
        ...(await deserializeAws_json1_1DuplicateRequestResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InstanceNotFound":
    case "com.amazonaws.route53.autonaming.v20170314#InstanceNotFound":
      response = {
        ...(await deserializeAws_json1_1InstanceNotFoundResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUse":
    case "com.amazonaws.route53.autonaming.v20170314#ResourceInUse":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceNotFound":
    case "com.amazonaws.route53.autonaming.v20170314#ServiceNotFound":
      response = {
        ...(await deserializeAws_json1_1ServiceNotFoundResponse(
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

export async function deserializeAws_json1_1DiscoverInstancesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DiscoverInstancesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DiscoverInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DiscoverInstancesResponse(data, context);
  const response: DiscoverInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DiscoverInstancesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DiscoverInstancesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DiscoverInstancesCommandOutput> {
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
    case "InvalidInput":
    case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NamespaceNotFound":
    case "com.amazonaws.route53.autonaming.v20170314#NamespaceNotFound":
      response = {
        ...(await deserializeAws_json1_1NamespaceNotFoundResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceNotFound":
    case "com.amazonaws.route53.autonaming.v20170314#ServiceNotFound":
      response = {
        ...(await deserializeAws_json1_1ServiceNotFoundResponse(
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

export async function deserializeAws_json1_1GetInstanceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetInstanceResponse(data, context);
  const response: GetInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetInstanceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetInstanceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceCommandOutput> {
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
    case "InstanceNotFound":
    case "com.amazonaws.route53.autonaming.v20170314#InstanceNotFound":
      response = {
        ...(await deserializeAws_json1_1InstanceNotFoundResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceNotFound":
    case "com.amazonaws.route53.autonaming.v20170314#ServiceNotFound":
      response = {
        ...(await deserializeAws_json1_1ServiceNotFoundResponse(
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

export async function deserializeAws_json1_1GetInstancesHealthStatusCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstancesHealthStatusCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetInstancesHealthStatusCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetInstancesHealthStatusResponse(
    data,
    context
  );
  const response: GetInstancesHealthStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetInstancesHealthStatusResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetInstancesHealthStatusCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstancesHealthStatusCommandOutput> {
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
    case "InstanceNotFound":
    case "com.amazonaws.route53.autonaming.v20170314#InstanceNotFound":
      response = {
        ...(await deserializeAws_json1_1InstanceNotFoundResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceNotFound":
    case "com.amazonaws.route53.autonaming.v20170314#ServiceNotFound":
      response = {
        ...(await deserializeAws_json1_1ServiceNotFoundResponse(
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

export async function deserializeAws_json1_1GetNamespaceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNamespaceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetNamespaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetNamespaceResponse(data, context);
  const response: GetNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetNamespaceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetNamespaceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNamespaceCommandOutput> {
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
    case "InvalidInput":
    case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NamespaceNotFound":
    case "com.amazonaws.route53.autonaming.v20170314#NamespaceNotFound":
      response = {
        ...(await deserializeAws_json1_1NamespaceNotFoundResponse(
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

export async function deserializeAws_json1_1GetOperationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOperationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetOperationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetOperationResponse(data, context);
  const response: GetOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetOperationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetOperationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOperationCommandOutput> {
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
    case "InvalidInput":
    case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotFound":
    case "com.amazonaws.route53.autonaming.v20170314#OperationNotFound":
      response = {
        ...(await deserializeAws_json1_1OperationNotFoundResponse(
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

export async function deserializeAws_json1_1GetServiceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetServiceResponse(data, context);
  const response: GetServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetServiceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetServiceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceCommandOutput> {
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
    case "InvalidInput":
    case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceNotFound":
    case "com.amazonaws.route53.autonaming.v20170314#ServiceNotFound":
      response = {
        ...(await deserializeAws_json1_1ServiceNotFoundResponse(
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

export async function deserializeAws_json1_1ListInstancesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstancesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListInstancesResponse(data, context);
  const response: ListInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListInstancesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListInstancesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstancesCommandOutput> {
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
    case "InvalidInput":
    case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceNotFound":
    case "com.amazonaws.route53.autonaming.v20170314#ServiceNotFound":
      response = {
        ...(await deserializeAws_json1_1ServiceNotFoundResponse(
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

export async function deserializeAws_json1_1ListNamespacesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNamespacesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListNamespacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListNamespacesResponse(data, context);
  const response: ListNamespacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListNamespacesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListNamespacesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNamespacesCommandOutput> {
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
    case "InvalidInput":
    case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
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

export async function deserializeAws_json1_1ListOperationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOperationsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListOperationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListOperationsResponse(data, context);
  const response: ListOperationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListOperationsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListOperationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOperationsCommandOutput> {
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
    case "InvalidInput":
    case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
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

export async function deserializeAws_json1_1ListServicesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListServicesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListServicesResponse(data, context);
  const response: ListServicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListServicesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListServicesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicesCommandOutput> {
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
    case "InvalidInput":
    case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
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

export async function deserializeAws_json1_1RegisterInstanceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterInstanceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RegisterInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterInstanceResponse(data, context);
  const response: RegisterInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RegisterInstanceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RegisterInstanceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterInstanceCommandOutput> {
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
    case "DuplicateRequest":
    case "com.amazonaws.route53.autonaming.v20170314#DuplicateRequest":
      response = {
        ...(await deserializeAws_json1_1DuplicateRequestResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUse":
    case "com.amazonaws.route53.autonaming.v20170314#ResourceInUse":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceLimitExceeded":
    case "com.amazonaws.route53.autonaming.v20170314#ResourceLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceNotFound":
    case "com.amazonaws.route53.autonaming.v20170314#ServiceNotFound":
      response = {
        ...(await deserializeAws_json1_1ServiceNotFoundResponse(
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

export async function deserializeAws_json1_1UpdateInstanceCustomHealthStatusCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInstanceCustomHealthStatusCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateInstanceCustomHealthStatusCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: UpdateInstanceCustomHealthStatusCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateInstanceCustomHealthStatusCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInstanceCustomHealthStatusCommandOutput> {
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
    case "CustomHealthNotFound":
    case "com.amazonaws.route53.autonaming.v20170314#CustomHealthNotFound":
      response = {
        ...(await deserializeAws_json1_1CustomHealthNotFoundResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InstanceNotFound":
    case "com.amazonaws.route53.autonaming.v20170314#InstanceNotFound":
      response = {
        ...(await deserializeAws_json1_1InstanceNotFoundResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceNotFound":
    case "com.amazonaws.route53.autonaming.v20170314#ServiceNotFound":
      response = {
        ...(await deserializeAws_json1_1ServiceNotFoundResponse(
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

export async function deserializeAws_json1_1UpdateServiceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateServiceResponse(data, context);
  const response: UpdateServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateServiceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateServiceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceCommandOutput> {
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
    case "DuplicateRequest":
    case "com.amazonaws.route53.autonaming.v20170314#DuplicateRequest":
      response = {
        ...(await deserializeAws_json1_1DuplicateRequestResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53.autonaming.v20170314#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceNotFound":
    case "com.amazonaws.route53.autonaming.v20170314#ServiceNotFound":
      response = {
        ...(await deserializeAws_json1_1ServiceNotFoundResponse(
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

const deserializeAws_json1_1CustomHealthNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomHealthNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CustomHealthNotFound(
    body,
    context
  );
  const contents: CustomHealthNotFound = {
    name: "CustomHealthNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DuplicateRequestResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateRequest> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DuplicateRequest(
    body,
    context
  );
  const contents: DuplicateRequest = {
    name: "DuplicateRequest",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InstanceNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InstanceNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InstanceNotFound(
    body,
    context
  );
  const contents: InstanceNotFound = {
    name: "InstanceNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidInputResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInput> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInput(body, context);
  const contents: InvalidInput = {
    name: "InvalidInput",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1NamespaceAlreadyExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NamespaceAlreadyExists> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NamespaceAlreadyExists(
    body,
    context
  );
  const contents: NamespaceAlreadyExists = {
    name: "NamespaceAlreadyExists",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1NamespaceNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NamespaceNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NamespaceNotFound(
    body,
    context
  );
  const contents: NamespaceNotFound = {
    name: "NamespaceNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1OperationNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OperationNotFound(
    body,
    context
  );
  const contents: OperationNotFound = {
    name: "OperationNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceInUseResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUse> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceInUse(body, context);
  const contents: ResourceInUse = {
    name: "ResourceInUse",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceLimitExceeded(
    body,
    context
  );
  const contents: ResourceLimitExceeded = {
    name: "ResourceLimitExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ServiceAlreadyExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceAlreadyExists> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceAlreadyExists(
    body,
    context
  );
  const contents: ServiceAlreadyExists = {
    name: "ServiceAlreadyExists",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ServiceNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceNotFound(
    body,
    context
  );
  const contents: ServiceNotFound = {
    name: "ServiceNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1Attributes = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1CreateHttpNamespaceRequest = (
  input: CreateHttpNamespaceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CreatorRequestId === undefined) {
    input.CreatorRequestId = generateIdempotencyToken();
  }
  if (input.CreatorRequestId !== undefined) {
    bodyParams["CreatorRequestId"] = input.CreatorRequestId;
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1CreatePrivateDnsNamespaceRequest = (
  input: CreatePrivateDnsNamespaceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CreatorRequestId === undefined) {
    input.CreatorRequestId = generateIdempotencyToken();
  }
  if (input.CreatorRequestId !== undefined) {
    bodyParams["CreatorRequestId"] = input.CreatorRequestId;
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Vpc !== undefined) {
    bodyParams["Vpc"] = input.Vpc;
  }
  return bodyParams;
};

const serializeAws_json1_1CreatePublicDnsNamespaceRequest = (
  input: CreatePublicDnsNamespaceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CreatorRequestId === undefined) {
    input.CreatorRequestId = generateIdempotencyToken();
  }
  if (input.CreatorRequestId !== undefined) {
    bodyParams["CreatorRequestId"] = input.CreatorRequestId;
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateServiceRequest = (
  input: CreateServiceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CreatorRequestId === undefined) {
    input.CreatorRequestId = generateIdempotencyToken();
  }
  if (input.CreatorRequestId !== undefined) {
    bodyParams["CreatorRequestId"] = input.CreatorRequestId;
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.DnsConfig !== undefined) {
    bodyParams["DnsConfig"] = serializeAws_json1_1DnsConfig(
      input.DnsConfig,
      context
    );
  }
  if (input.HealthCheckConfig !== undefined) {
    bodyParams["HealthCheckConfig"] = serializeAws_json1_1HealthCheckConfig(
      input.HealthCheckConfig,
      context
    );
  }
  if (input.HealthCheckCustomConfig !== undefined) {
    bodyParams[
      "HealthCheckCustomConfig"
    ] = serializeAws_json1_1HealthCheckCustomConfig(
      input.HealthCheckCustomConfig,
      context
    );
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.NamespaceId !== undefined) {
    bodyParams["NamespaceId"] = input.NamespaceId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteNamespaceRequest = (
  input: DeleteNamespaceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteServiceRequest = (
  input: DeleteServiceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  return bodyParams;
};

const serializeAws_json1_1DeregisterInstanceRequest = (
  input: DeregisterInstanceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.InstanceId !== undefined) {
    bodyParams["InstanceId"] = input.InstanceId;
  }
  if (input.ServiceId !== undefined) {
    bodyParams["ServiceId"] = input.ServiceId;
  }
  return bodyParams;
};

const serializeAws_json1_1DiscoverInstancesRequest = (
  input: DiscoverInstancesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.HealthStatus !== undefined) {
    bodyParams["HealthStatus"] = input.HealthStatus;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NamespaceName !== undefined) {
    bodyParams["NamespaceName"] = input.NamespaceName;
  }
  if (input.QueryParameters !== undefined) {
    bodyParams["QueryParameters"] = serializeAws_json1_1Attributes(
      input.QueryParameters,
      context
    );
  }
  if (input.ServiceName !== undefined) {
    bodyParams["ServiceName"] = input.ServiceName;
  }
  return bodyParams;
};

const serializeAws_json1_1DnsConfig = (
  input: DnsConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DnsRecords !== undefined) {
    bodyParams["DnsRecords"] = serializeAws_json1_1DnsRecordList(
      input.DnsRecords,
      context
    );
  }
  if (input.NamespaceId !== undefined) {
    bodyParams["NamespaceId"] = input.NamespaceId;
  }
  if (input.RoutingPolicy !== undefined) {
    bodyParams["RoutingPolicy"] = input.RoutingPolicy;
  }
  return bodyParams;
};

const serializeAws_json1_1DnsConfigChange = (
  input: DnsConfigChange,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DnsRecords !== undefined) {
    bodyParams["DnsRecords"] = serializeAws_json1_1DnsRecordList(
      input.DnsRecords,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DnsRecord = (
  input: DnsRecord,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.TTL !== undefined) {
    bodyParams["TTL"] = input.TTL;
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  return bodyParams;
};

const serializeAws_json1_1DnsRecordList = (
  input: Array<DnsRecord>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1DnsRecord(entry, context));
  }
  return contents;
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

const serializeAws_json1_1GetInstanceRequest = (
  input: GetInstanceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.InstanceId !== undefined) {
    bodyParams["InstanceId"] = input.InstanceId;
  }
  if (input.ServiceId !== undefined) {
    bodyParams["ServiceId"] = input.ServiceId;
  }
  return bodyParams;
};

const serializeAws_json1_1GetInstancesHealthStatusRequest = (
  input: GetInstancesHealthStatusRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Instances !== undefined) {
    bodyParams["Instances"] = serializeAws_json1_1InstanceIdList(
      input.Instances,
      context
    );
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ServiceId !== undefined) {
    bodyParams["ServiceId"] = input.ServiceId;
  }
  return bodyParams;
};

const serializeAws_json1_1GetNamespaceRequest = (
  input: GetNamespaceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  return bodyParams;
};

const serializeAws_json1_1GetOperationRequest = (
  input: GetOperationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.OperationId !== undefined) {
    bodyParams["OperationId"] = input.OperationId;
  }
  return bodyParams;
};

const serializeAws_json1_1GetServiceRequest = (
  input: GetServiceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  return bodyParams;
};

const serializeAws_json1_1HealthCheckConfig = (
  input: HealthCheckConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.FailureThreshold !== undefined) {
    bodyParams["FailureThreshold"] = input.FailureThreshold;
  }
  if (input.ResourcePath !== undefined) {
    bodyParams["ResourcePath"] = input.ResourcePath;
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  return bodyParams;
};

const serializeAws_json1_1HealthCheckCustomConfig = (
  input: HealthCheckCustomConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.FailureThreshold !== undefined) {
    bodyParams["FailureThreshold"] = input.FailureThreshold;
  }
  return bodyParams;
};

const serializeAws_json1_1InstanceIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1ListInstancesRequest = (
  input: ListInstancesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ServiceId !== undefined) {
    bodyParams["ServiceId"] = input.ServiceId;
  }
  return bodyParams;
};

const serializeAws_json1_1ListNamespacesRequest = (
  input: ListNamespacesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Filters !== undefined) {
    bodyParams["Filters"] = serializeAws_json1_1NamespaceFilters(
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

const serializeAws_json1_1ListOperationsRequest = (
  input: ListOperationsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Filters !== undefined) {
    bodyParams["Filters"] = serializeAws_json1_1OperationFilters(
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

const serializeAws_json1_1ListServicesRequest = (
  input: ListServicesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Filters !== undefined) {
    bodyParams["Filters"] = serializeAws_json1_1ServiceFilters(
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

const serializeAws_json1_1NamespaceFilter = (
  input: NamespaceFilter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Condition !== undefined) {
    bodyParams["Condition"] = input.Condition;
  }
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

const serializeAws_json1_1NamespaceFilters = (
  input: Array<NamespaceFilter>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1NamespaceFilter(entry, context));
  }
  return contents;
};

const serializeAws_json1_1OperationFilter = (
  input: OperationFilter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Condition !== undefined) {
    bodyParams["Condition"] = input.Condition;
  }
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

const serializeAws_json1_1OperationFilters = (
  input: Array<OperationFilter>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1OperationFilter(entry, context));
  }
  return contents;
};

const serializeAws_json1_1RegisterInstanceRequest = (
  input: RegisterInstanceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Attributes !== undefined) {
    bodyParams["Attributes"] = serializeAws_json1_1Attributes(
      input.Attributes,
      context
    );
  }
  if (input.CreatorRequestId === undefined) {
    input.CreatorRequestId = generateIdempotencyToken();
  }
  if (input.CreatorRequestId !== undefined) {
    bodyParams["CreatorRequestId"] = input.CreatorRequestId;
  }
  if (input.InstanceId !== undefined) {
    bodyParams["InstanceId"] = input.InstanceId;
  }
  if (input.ServiceId !== undefined) {
    bodyParams["ServiceId"] = input.ServiceId;
  }
  return bodyParams;
};

const serializeAws_json1_1ServiceChange = (
  input: ServiceChange,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.DnsConfig !== undefined) {
    bodyParams["DnsConfig"] = serializeAws_json1_1DnsConfigChange(
      input.DnsConfig,
      context
    );
  }
  if (input.HealthCheckConfig !== undefined) {
    bodyParams["HealthCheckConfig"] = serializeAws_json1_1HealthCheckConfig(
      input.HealthCheckConfig,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ServiceFilter = (
  input: ServiceFilter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Condition !== undefined) {
    bodyParams["Condition"] = input.Condition;
  }
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

const serializeAws_json1_1ServiceFilters = (
  input: Array<ServiceFilter>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1ServiceFilter(entry, context));
  }
  return contents;
};

const serializeAws_json1_1UpdateInstanceCustomHealthStatusRequest = (
  input: UpdateInstanceCustomHealthStatusRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.InstanceId !== undefined) {
    bodyParams["InstanceId"] = input.InstanceId;
  }
  if (input.ServiceId !== undefined) {
    bodyParams["ServiceId"] = input.ServiceId;
  }
  if (input.Status !== undefined) {
    bodyParams["Status"] = input.Status;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateServiceRequest = (
  input: UpdateServiceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  if (input.Service !== undefined) {
    bodyParams["Service"] = serializeAws_json1_1ServiceChange(
      input.Service,
      context
    );
  }
  return bodyParams;
};

const deserializeAws_json1_1Attributes = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1CreateHttpNamespaceResponse = (
  output: any,
  context: __SerdeContext
): CreateHttpNamespaceResponse => {
  let contents: any = {
    __type: "CreateHttpNamespaceResponse",
    OperationId: undefined
  };
  if (output.OperationId !== undefined && output.OperationId !== null) {
    contents.OperationId = output.OperationId;
  }
  return contents;
};

const deserializeAws_json1_1CreatePrivateDnsNamespaceResponse = (
  output: any,
  context: __SerdeContext
): CreatePrivateDnsNamespaceResponse => {
  let contents: any = {
    __type: "CreatePrivateDnsNamespaceResponse",
    OperationId: undefined
  };
  if (output.OperationId !== undefined && output.OperationId !== null) {
    contents.OperationId = output.OperationId;
  }
  return contents;
};

const deserializeAws_json1_1CreatePublicDnsNamespaceResponse = (
  output: any,
  context: __SerdeContext
): CreatePublicDnsNamespaceResponse => {
  let contents: any = {
    __type: "CreatePublicDnsNamespaceResponse",
    OperationId: undefined
  };
  if (output.OperationId !== undefined && output.OperationId !== null) {
    contents.OperationId = output.OperationId;
  }
  return contents;
};

const deserializeAws_json1_1CreateServiceResponse = (
  output: any,
  context: __SerdeContext
): CreateServiceResponse => {
  let contents: any = {
    __type: "CreateServiceResponse",
    Service: undefined
  };
  if (output.Service !== undefined && output.Service !== null) {
    contents.Service = deserializeAws_json1_1Service(output.Service, context);
  }
  return contents;
};

const deserializeAws_json1_1CustomHealthNotFound = (
  output: any,
  context: __SerdeContext
): CustomHealthNotFound => {
  let contents: any = {
    __type: "CustomHealthNotFound",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1DeleteNamespaceResponse = (
  output: any,
  context: __SerdeContext
): DeleteNamespaceResponse => {
  let contents: any = {
    __type: "DeleteNamespaceResponse",
    OperationId: undefined
  };
  if (output.OperationId !== undefined && output.OperationId !== null) {
    contents.OperationId = output.OperationId;
  }
  return contents;
};

const deserializeAws_json1_1DeleteServiceResponse = (
  output: any,
  context: __SerdeContext
): DeleteServiceResponse => {
  let contents: any = {
    __type: "DeleteServiceResponse"
  };
  return contents;
};

const deserializeAws_json1_1DeregisterInstanceResponse = (
  output: any,
  context: __SerdeContext
): DeregisterInstanceResponse => {
  let contents: any = {
    __type: "DeregisterInstanceResponse",
    OperationId: undefined
  };
  if (output.OperationId !== undefined && output.OperationId !== null) {
    contents.OperationId = output.OperationId;
  }
  return contents;
};

const deserializeAws_json1_1DiscoverInstancesResponse = (
  output: any,
  context: __SerdeContext
): DiscoverInstancesResponse => {
  let contents: any = {
    __type: "DiscoverInstancesResponse",
    Instances: undefined
  };
  if (output.Instances !== undefined && output.Instances !== null) {
    contents.Instances = deserializeAws_json1_1HttpInstanceSummaryList(
      output.Instances,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DnsConfig = (
  output: any,
  context: __SerdeContext
): DnsConfig => {
  let contents: any = {
    __type: "DnsConfig",
    DnsRecords: undefined,
    NamespaceId: undefined,
    RoutingPolicy: undefined
  };
  if (output.DnsRecords !== undefined && output.DnsRecords !== null) {
    contents.DnsRecords = deserializeAws_json1_1DnsRecordList(
      output.DnsRecords,
      context
    );
  }
  if (output.NamespaceId !== undefined && output.NamespaceId !== null) {
    contents.NamespaceId = output.NamespaceId;
  }
  if (output.RoutingPolicy !== undefined && output.RoutingPolicy !== null) {
    contents.RoutingPolicy = output.RoutingPolicy;
  }
  return contents;
};

const deserializeAws_json1_1DnsProperties = (
  output: any,
  context: __SerdeContext
): DnsProperties => {
  let contents: any = {
    __type: "DnsProperties",
    HostedZoneId: undefined
  };
  if (output.HostedZoneId !== undefined && output.HostedZoneId !== null) {
    contents.HostedZoneId = output.HostedZoneId;
  }
  return contents;
};

const deserializeAws_json1_1DnsRecord = (
  output: any,
  context: __SerdeContext
): DnsRecord => {
  let contents: any = {
    __type: "DnsRecord",
    TTL: undefined,
    Type: undefined
  };
  if (output.TTL !== undefined && output.TTL !== null) {
    contents.TTL = output.TTL;
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1DnsRecordList = (
  output: any,
  context: __SerdeContext
): Array<DnsRecord> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DnsRecord(entry, context)
  );
};

const deserializeAws_json1_1DuplicateRequest = (
  output: any,
  context: __SerdeContext
): DuplicateRequest => {
  let contents: any = {
    __type: "DuplicateRequest",
    DuplicateOperationId: undefined,
    Message: undefined
  };
  if (
    output.DuplicateOperationId !== undefined &&
    output.DuplicateOperationId !== null
  ) {
    contents.DuplicateOperationId = output.DuplicateOperationId;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1GetInstanceResponse = (
  output: any,
  context: __SerdeContext
): GetInstanceResponse => {
  let contents: any = {
    __type: "GetInstanceResponse",
    Instance: undefined
  };
  if (output.Instance !== undefined && output.Instance !== null) {
    contents.Instance = deserializeAws_json1_1Instance(
      output.Instance,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetInstancesHealthStatusResponse = (
  output: any,
  context: __SerdeContext
): GetInstancesHealthStatusResponse => {
  let contents: any = {
    __type: "GetInstancesHealthStatusResponse",
    NextToken: undefined,
    Status: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = deserializeAws_json1_1InstanceHealthStatusMap(
      output.Status,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetNamespaceResponse = (
  output: any,
  context: __SerdeContext
): GetNamespaceResponse => {
  let contents: any = {
    __type: "GetNamespaceResponse",
    Namespace: undefined
  };
  if (output.Namespace !== undefined && output.Namespace !== null) {
    contents.Namespace = deserializeAws_json1_1Namespace(
      output.Namespace,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetOperationResponse = (
  output: any,
  context: __SerdeContext
): GetOperationResponse => {
  let contents: any = {
    __type: "GetOperationResponse",
    Operation: undefined
  };
  if (output.Operation !== undefined && output.Operation !== null) {
    contents.Operation = deserializeAws_json1_1Operation(
      output.Operation,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetServiceResponse = (
  output: any,
  context: __SerdeContext
): GetServiceResponse => {
  let contents: any = {
    __type: "GetServiceResponse",
    Service: undefined
  };
  if (output.Service !== undefined && output.Service !== null) {
    contents.Service = deserializeAws_json1_1Service(output.Service, context);
  }
  return contents;
};

const deserializeAws_json1_1HealthCheckConfig = (
  output: any,
  context: __SerdeContext
): HealthCheckConfig => {
  let contents: any = {
    __type: "HealthCheckConfig",
    FailureThreshold: undefined,
    ResourcePath: undefined,
    Type: undefined
  };
  if (
    output.FailureThreshold !== undefined &&
    output.FailureThreshold !== null
  ) {
    contents.FailureThreshold = output.FailureThreshold;
  }
  if (output.ResourcePath !== undefined && output.ResourcePath !== null) {
    contents.ResourcePath = output.ResourcePath;
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1HealthCheckCustomConfig = (
  output: any,
  context: __SerdeContext
): HealthCheckCustomConfig => {
  let contents: any = {
    __type: "HealthCheckCustomConfig",
    FailureThreshold: undefined
  };
  if (
    output.FailureThreshold !== undefined &&
    output.FailureThreshold !== null
  ) {
    contents.FailureThreshold = output.FailureThreshold;
  }
  return contents;
};

const deserializeAws_json1_1HttpInstanceSummary = (
  output: any,
  context: __SerdeContext
): HttpInstanceSummary => {
  let contents: any = {
    __type: "HttpInstanceSummary",
    Attributes: undefined,
    HealthStatus: undefined,
    InstanceId: undefined,
    NamespaceName: undefined,
    ServiceName: undefined
  };
  if (output.Attributes !== undefined && output.Attributes !== null) {
    contents.Attributes = deserializeAws_json1_1Attributes(
      output.Attributes,
      context
    );
  }
  if (output.HealthStatus !== undefined && output.HealthStatus !== null) {
    contents.HealthStatus = output.HealthStatus;
  }
  if (output.InstanceId !== undefined && output.InstanceId !== null) {
    contents.InstanceId = output.InstanceId;
  }
  if (output.NamespaceName !== undefined && output.NamespaceName !== null) {
    contents.NamespaceName = output.NamespaceName;
  }
  if (output.ServiceName !== undefined && output.ServiceName !== null) {
    contents.ServiceName = output.ServiceName;
  }
  return contents;
};

const deserializeAws_json1_1HttpInstanceSummaryList = (
  output: any,
  context: __SerdeContext
): Array<HttpInstanceSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1HttpInstanceSummary(entry, context)
  );
};

const deserializeAws_json1_1HttpProperties = (
  output: any,
  context: __SerdeContext
): HttpProperties => {
  let contents: any = {
    __type: "HttpProperties",
    HttpName: undefined
  };
  if (output.HttpName !== undefined && output.HttpName !== null) {
    contents.HttpName = output.HttpName;
  }
  return contents;
};

const deserializeAws_json1_1Instance = (
  output: any,
  context: __SerdeContext
): Instance => {
  let contents: any = {
    __type: "Instance",
    Attributes: undefined,
    CreatorRequestId: undefined,
    Id: undefined
  };
  if (output.Attributes !== undefined && output.Attributes !== null) {
    contents.Attributes = deserializeAws_json1_1Attributes(
      output.Attributes,
      context
    );
  }
  if (
    output.CreatorRequestId !== undefined &&
    output.CreatorRequestId !== null
  ) {
    contents.CreatorRequestId = output.CreatorRequestId;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  return contents;
};

const deserializeAws_json1_1InstanceHealthStatusMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: HealthStatus | string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1InstanceNotFound = (
  output: any,
  context: __SerdeContext
): InstanceNotFound => {
  let contents: any = {
    __type: "InstanceNotFound",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InstanceSummary = (
  output: any,
  context: __SerdeContext
): InstanceSummary => {
  let contents: any = {
    __type: "InstanceSummary",
    Attributes: undefined,
    Id: undefined
  };
  if (output.Attributes !== undefined && output.Attributes !== null) {
    contents.Attributes = deserializeAws_json1_1Attributes(
      output.Attributes,
      context
    );
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  return contents;
};

const deserializeAws_json1_1InstanceSummaryList = (
  output: any,
  context: __SerdeContext
): Array<InstanceSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1InstanceSummary(entry, context)
  );
};

const deserializeAws_json1_1InvalidInput = (
  output: any,
  context: __SerdeContext
): InvalidInput => {
  let contents: any = {
    __type: "InvalidInput",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ListInstancesResponse = (
  output: any,
  context: __SerdeContext
): ListInstancesResponse => {
  let contents: any = {
    __type: "ListInstancesResponse",
    Instances: undefined,
    NextToken: undefined
  };
  if (output.Instances !== undefined && output.Instances !== null) {
    contents.Instances = deserializeAws_json1_1InstanceSummaryList(
      output.Instances,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListNamespacesResponse = (
  output: any,
  context: __SerdeContext
): ListNamespacesResponse => {
  let contents: any = {
    __type: "ListNamespacesResponse",
    Namespaces: undefined,
    NextToken: undefined
  };
  if (output.Namespaces !== undefined && output.Namespaces !== null) {
    contents.Namespaces = deserializeAws_json1_1NamespaceSummariesList(
      output.Namespaces,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListOperationsResponse = (
  output: any,
  context: __SerdeContext
): ListOperationsResponse => {
  let contents: any = {
    __type: "ListOperationsResponse",
    NextToken: undefined,
    Operations: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.Operations !== undefined && output.Operations !== null) {
    contents.Operations = deserializeAws_json1_1OperationSummaryList(
      output.Operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListServicesResponse = (
  output: any,
  context: __SerdeContext
): ListServicesResponse => {
  let contents: any = {
    __type: "ListServicesResponse",
    NextToken: undefined,
    Services: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.Services !== undefined && output.Services !== null) {
    contents.Services = deserializeAws_json1_1ServiceSummariesList(
      output.Services,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1Namespace = (
  output: any,
  context: __SerdeContext
): Namespace => {
  let contents: any = {
    __type: "Namespace",
    Arn: undefined,
    CreateDate: undefined,
    CreatorRequestId: undefined,
    Description: undefined,
    Id: undefined,
    Name: undefined,
    Properties: undefined,
    ServiceCount: undefined,
    Type: undefined
  };
  if (output.Arn !== undefined && output.Arn !== null) {
    contents.Arn = output.Arn;
  }
  if (output.CreateDate !== undefined && output.CreateDate !== null) {
    contents.CreateDate = new Date(Math.round(output.CreateDate * 1000));
  }
  if (
    output.CreatorRequestId !== undefined &&
    output.CreatorRequestId !== null
  ) {
    contents.CreatorRequestId = output.CreatorRequestId;
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Properties !== undefined && output.Properties !== null) {
    contents.Properties = deserializeAws_json1_1NamespaceProperties(
      output.Properties,
      context
    );
  }
  if (output.ServiceCount !== undefined && output.ServiceCount !== null) {
    contents.ServiceCount = output.ServiceCount;
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1NamespaceAlreadyExists = (
  output: any,
  context: __SerdeContext
): NamespaceAlreadyExists => {
  let contents: any = {
    __type: "NamespaceAlreadyExists",
    CreatorRequestId: undefined,
    Message: undefined,
    NamespaceId: undefined
  };
  if (
    output.CreatorRequestId !== undefined &&
    output.CreatorRequestId !== null
  ) {
    contents.CreatorRequestId = output.CreatorRequestId;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  if (output.NamespaceId !== undefined && output.NamespaceId !== null) {
    contents.NamespaceId = output.NamespaceId;
  }
  return contents;
};

const deserializeAws_json1_1NamespaceNotFound = (
  output: any,
  context: __SerdeContext
): NamespaceNotFound => {
  let contents: any = {
    __type: "NamespaceNotFound",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1NamespaceProperties = (
  output: any,
  context: __SerdeContext
): NamespaceProperties => {
  let contents: any = {
    __type: "NamespaceProperties",
    DnsProperties: undefined,
    HttpProperties: undefined
  };
  if (output.DnsProperties !== undefined && output.DnsProperties !== null) {
    contents.DnsProperties = deserializeAws_json1_1DnsProperties(
      output.DnsProperties,
      context
    );
  }
  if (output.HttpProperties !== undefined && output.HttpProperties !== null) {
    contents.HttpProperties = deserializeAws_json1_1HttpProperties(
      output.HttpProperties,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1NamespaceSummariesList = (
  output: any,
  context: __SerdeContext
): Array<NamespaceSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1NamespaceSummary(entry, context)
  );
};

const deserializeAws_json1_1NamespaceSummary = (
  output: any,
  context: __SerdeContext
): NamespaceSummary => {
  let contents: any = {
    __type: "NamespaceSummary",
    Arn: undefined,
    CreateDate: undefined,
    Description: undefined,
    Id: undefined,
    Name: undefined,
    Properties: undefined,
    ServiceCount: undefined,
    Type: undefined
  };
  if (output.Arn !== undefined && output.Arn !== null) {
    contents.Arn = output.Arn;
  }
  if (output.CreateDate !== undefined && output.CreateDate !== null) {
    contents.CreateDate = new Date(Math.round(output.CreateDate * 1000));
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Properties !== undefined && output.Properties !== null) {
    contents.Properties = deserializeAws_json1_1NamespaceProperties(
      output.Properties,
      context
    );
  }
  if (output.ServiceCount !== undefined && output.ServiceCount !== null) {
    contents.ServiceCount = output.ServiceCount;
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1Operation = (
  output: any,
  context: __SerdeContext
): Operation => {
  let contents: any = {
    __type: "Operation",
    CreateDate: undefined,
    ErrorCode: undefined,
    ErrorMessage: undefined,
    Id: undefined,
    Status: undefined,
    Targets: undefined,
    Type: undefined,
    UpdateDate: undefined
  };
  if (output.CreateDate !== undefined && output.CreateDate !== null) {
    contents.CreateDate = new Date(Math.round(output.CreateDate * 1000));
  }
  if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.Targets !== undefined && output.Targets !== null) {
    contents.Targets = deserializeAws_json1_1OperationTargetsMap(
      output.Targets,
      context
    );
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  if (output.UpdateDate !== undefined && output.UpdateDate !== null) {
    contents.UpdateDate = new Date(Math.round(output.UpdateDate * 1000));
  }
  return contents;
};

const deserializeAws_json1_1OperationNotFound = (
  output: any,
  context: __SerdeContext
): OperationNotFound => {
  let contents: any = {
    __type: "OperationNotFound",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1OperationSummary = (
  output: any,
  context: __SerdeContext
): OperationSummary => {
  let contents: any = {
    __type: "OperationSummary",
    Id: undefined,
    Status: undefined
  };
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_json1_1OperationSummaryList = (
  output: any,
  context: __SerdeContext
): Array<OperationSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1OperationSummary(entry, context)
  );
};

const deserializeAws_json1_1OperationTargetsMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1RegisterInstanceResponse = (
  output: any,
  context: __SerdeContext
): RegisterInstanceResponse => {
  let contents: any = {
    __type: "RegisterInstanceResponse",
    OperationId: undefined
  };
  if (output.OperationId !== undefined && output.OperationId !== null) {
    contents.OperationId = output.OperationId;
  }
  return contents;
};

const deserializeAws_json1_1ResourceInUse = (
  output: any,
  context: __SerdeContext
): ResourceInUse => {
  let contents: any = {
    __type: "ResourceInUse",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceLimitExceeded = (
  output: any,
  context: __SerdeContext
): ResourceLimitExceeded => {
  let contents: any = {
    __type: "ResourceLimitExceeded",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1Service = (
  output: any,
  context: __SerdeContext
): Service => {
  let contents: any = {
    __type: "Service",
    Arn: undefined,
    CreateDate: undefined,
    CreatorRequestId: undefined,
    Description: undefined,
    DnsConfig: undefined,
    HealthCheckConfig: undefined,
    HealthCheckCustomConfig: undefined,
    Id: undefined,
    InstanceCount: undefined,
    Name: undefined,
    NamespaceId: undefined
  };
  if (output.Arn !== undefined && output.Arn !== null) {
    contents.Arn = output.Arn;
  }
  if (output.CreateDate !== undefined && output.CreateDate !== null) {
    contents.CreateDate = new Date(Math.round(output.CreateDate * 1000));
  }
  if (
    output.CreatorRequestId !== undefined &&
    output.CreatorRequestId !== null
  ) {
    contents.CreatorRequestId = output.CreatorRequestId;
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.DnsConfig !== undefined && output.DnsConfig !== null) {
    contents.DnsConfig = deserializeAws_json1_1DnsConfig(
      output.DnsConfig,
      context
    );
  }
  if (
    output.HealthCheckConfig !== undefined &&
    output.HealthCheckConfig !== null
  ) {
    contents.HealthCheckConfig = deserializeAws_json1_1HealthCheckConfig(
      output.HealthCheckConfig,
      context
    );
  }
  if (
    output.HealthCheckCustomConfig !== undefined &&
    output.HealthCheckCustomConfig !== null
  ) {
    contents.HealthCheckCustomConfig = deserializeAws_json1_1HealthCheckCustomConfig(
      output.HealthCheckCustomConfig,
      context
    );
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.InstanceCount !== undefined && output.InstanceCount !== null) {
    contents.InstanceCount = output.InstanceCount;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.NamespaceId !== undefined && output.NamespaceId !== null) {
    contents.NamespaceId = output.NamespaceId;
  }
  return contents;
};

const deserializeAws_json1_1ServiceAlreadyExists = (
  output: any,
  context: __SerdeContext
): ServiceAlreadyExists => {
  let contents: any = {
    __type: "ServiceAlreadyExists",
    CreatorRequestId: undefined,
    Message: undefined,
    ServiceId: undefined
  };
  if (
    output.CreatorRequestId !== undefined &&
    output.CreatorRequestId !== null
  ) {
    contents.CreatorRequestId = output.CreatorRequestId;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  if (output.ServiceId !== undefined && output.ServiceId !== null) {
    contents.ServiceId = output.ServiceId;
  }
  return contents;
};

const deserializeAws_json1_1ServiceNotFound = (
  output: any,
  context: __SerdeContext
): ServiceNotFound => {
  let contents: any = {
    __type: "ServiceNotFound",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ServiceSummariesList = (
  output: any,
  context: __SerdeContext
): Array<ServiceSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ServiceSummary(entry, context)
  );
};

const deserializeAws_json1_1ServiceSummary = (
  output: any,
  context: __SerdeContext
): ServiceSummary => {
  let contents: any = {
    __type: "ServiceSummary",
    Arn: undefined,
    CreateDate: undefined,
    Description: undefined,
    DnsConfig: undefined,
    HealthCheckConfig: undefined,
    HealthCheckCustomConfig: undefined,
    Id: undefined,
    InstanceCount: undefined,
    Name: undefined
  };
  if (output.Arn !== undefined && output.Arn !== null) {
    contents.Arn = output.Arn;
  }
  if (output.CreateDate !== undefined && output.CreateDate !== null) {
    contents.CreateDate = new Date(Math.round(output.CreateDate * 1000));
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.DnsConfig !== undefined && output.DnsConfig !== null) {
    contents.DnsConfig = deserializeAws_json1_1DnsConfig(
      output.DnsConfig,
      context
    );
  }
  if (
    output.HealthCheckConfig !== undefined &&
    output.HealthCheckConfig !== null
  ) {
    contents.HealthCheckConfig = deserializeAws_json1_1HealthCheckConfig(
      output.HealthCheckConfig,
      context
    );
  }
  if (
    output.HealthCheckCustomConfig !== undefined &&
    output.HealthCheckCustomConfig !== null
  ) {
    contents.HealthCheckCustomConfig = deserializeAws_json1_1HealthCheckCustomConfig(
      output.HealthCheckCustomConfig,
      context
    );
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.InstanceCount !== undefined && output.InstanceCount !== null) {
    contents.InstanceCount = output.InstanceCount;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_json1_1UpdateServiceResponse = (
  output: any,
  context: __SerdeContext
): UpdateServiceResponse => {
  let contents: any = {
    __type: "UpdateServiceResponse",
    OperationId: undefined
  };
  if (output.OperationId !== undefined && output.OperationId !== null) {
    contents.OperationId = output.OperationId;
  }
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
