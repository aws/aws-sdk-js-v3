import {
  CreateAcceleratorCommandInput,
  CreateAcceleratorCommandOutput
} from "../commands/CreateAcceleratorCommand";
import {
  CreateEndpointGroupCommandInput,
  CreateEndpointGroupCommandOutput
} from "../commands/CreateEndpointGroupCommand";
import {
  CreateListenerCommandInput,
  CreateListenerCommandOutput
} from "../commands/CreateListenerCommand";
import {
  DeleteAcceleratorCommandInput,
  DeleteAcceleratorCommandOutput
} from "../commands/DeleteAcceleratorCommand";
import {
  DeleteEndpointGroupCommandInput,
  DeleteEndpointGroupCommandOutput
} from "../commands/DeleteEndpointGroupCommand";
import {
  DeleteListenerCommandInput,
  DeleteListenerCommandOutput
} from "../commands/DeleteListenerCommand";
import {
  DescribeAcceleratorAttributesCommandInput,
  DescribeAcceleratorAttributesCommandOutput
} from "../commands/DescribeAcceleratorAttributesCommand";
import {
  DescribeAcceleratorCommandInput,
  DescribeAcceleratorCommandOutput
} from "../commands/DescribeAcceleratorCommand";
import {
  DescribeEndpointGroupCommandInput,
  DescribeEndpointGroupCommandOutput
} from "../commands/DescribeEndpointGroupCommand";
import {
  DescribeListenerCommandInput,
  DescribeListenerCommandOutput
} from "../commands/DescribeListenerCommand";
import {
  ListAcceleratorsCommandInput,
  ListAcceleratorsCommandOutput
} from "../commands/ListAcceleratorsCommand";
import {
  ListEndpointGroupsCommandInput,
  ListEndpointGroupsCommandOutput
} from "../commands/ListEndpointGroupsCommand";
import {
  ListListenersCommandInput,
  ListListenersCommandOutput
} from "../commands/ListListenersCommand";
import {
  UpdateAcceleratorAttributesCommandInput,
  UpdateAcceleratorAttributesCommandOutput
} from "../commands/UpdateAcceleratorAttributesCommand";
import {
  UpdateAcceleratorCommandInput,
  UpdateAcceleratorCommandOutput
} from "../commands/UpdateAcceleratorCommand";
import {
  UpdateEndpointGroupCommandInput,
  UpdateEndpointGroupCommandOutput
} from "../commands/UpdateEndpointGroupCommand";
import {
  UpdateListenerCommandInput,
  UpdateListenerCommandOutput
} from "../commands/UpdateListenerCommand";
import {
  Accelerator,
  AcceleratorAttributes,
  AcceleratorNotDisabledException,
  AcceleratorNotFoundException,
  AccessDeniedException,
  AssociatedEndpointGroupFoundException,
  AssociatedListenerFoundException,
  CreateAcceleratorRequest,
  CreateAcceleratorResponse,
  CreateEndpointGroupRequest,
  CreateEndpointGroupResponse,
  CreateListenerRequest,
  CreateListenerResponse,
  DeleteAcceleratorRequest,
  DeleteEndpointGroupRequest,
  DeleteListenerRequest,
  DescribeAcceleratorAttributesRequest,
  DescribeAcceleratorAttributesResponse,
  DescribeAcceleratorRequest,
  DescribeAcceleratorResponse,
  DescribeEndpointGroupRequest,
  DescribeEndpointGroupResponse,
  DescribeListenerRequest,
  DescribeListenerResponse,
  EndpointConfiguration,
  EndpointDescription,
  EndpointGroup,
  EndpointGroupAlreadyExistsException,
  EndpointGroupNotFoundException,
  InternalServiceErrorException,
  InvalidArgumentException,
  InvalidNextTokenException,
  InvalidPortRangeException,
  IpSet,
  LimitExceededException,
  ListAcceleratorsRequest,
  ListAcceleratorsResponse,
  ListEndpointGroupsRequest,
  ListEndpointGroupsResponse,
  ListListenersRequest,
  ListListenersResponse,
  Listener,
  ListenerNotFoundException,
  PortRange,
  UpdateAcceleratorAttributesRequest,
  UpdateAcceleratorAttributesResponse,
  UpdateAcceleratorRequest,
  UpdateAcceleratorResponse,
  UpdateEndpointGroupRequest,
  UpdateEndpointGroupResponse,
  UpdateListenerRequest,
  UpdateListenerResponse
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

export async function serializeAws_json1_1CreateAcceleratorCommand(
  input: CreateAcceleratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "GlobalAccelerator_V20180706.CreateAccelerator";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateAcceleratorRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateEndpointGroupCommand(
  input: CreateEndpointGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "GlobalAccelerator_V20180706.CreateEndpointGroup";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateEndpointGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateListenerCommand(
  input: CreateListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "GlobalAccelerator_V20180706.CreateListener";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateListenerRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteAcceleratorCommand(
  input: DeleteAcceleratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "GlobalAccelerator_V20180706.DeleteAccelerator";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteAcceleratorRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteEndpointGroupCommand(
  input: DeleteEndpointGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "GlobalAccelerator_V20180706.DeleteEndpointGroup";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteEndpointGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteListenerCommand(
  input: DeleteListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "GlobalAccelerator_V20180706.DeleteListener";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteListenerRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeAcceleratorCommand(
  input: DescribeAcceleratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "GlobalAccelerator_V20180706.DescribeAccelerator";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeAcceleratorRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeAcceleratorAttributesCommand(
  input: DescribeAcceleratorAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "GlobalAccelerator_V20180706.DescribeAcceleratorAttributes";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeAcceleratorAttributesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeEndpointGroupCommand(
  input: DescribeEndpointGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "GlobalAccelerator_V20180706.DescribeEndpointGroup";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeEndpointGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeListenerCommand(
  input: DescribeListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "GlobalAccelerator_V20180706.DescribeListener";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeListenerRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListAcceleratorsCommand(
  input: ListAcceleratorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "GlobalAccelerator_V20180706.ListAccelerators";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListAcceleratorsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListEndpointGroupsCommand(
  input: ListEndpointGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "GlobalAccelerator_V20180706.ListEndpointGroups";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListEndpointGroupsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListListenersCommand(
  input: ListListenersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "GlobalAccelerator_V20180706.ListListeners";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListListenersRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateAcceleratorCommand(
  input: UpdateAcceleratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "GlobalAccelerator_V20180706.UpdateAccelerator";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateAcceleratorRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateAcceleratorAttributesCommand(
  input: UpdateAcceleratorAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "GlobalAccelerator_V20180706.UpdateAcceleratorAttributes";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateAcceleratorAttributesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateEndpointGroupCommand(
  input: UpdateEndpointGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "GlobalAccelerator_V20180706.UpdateEndpointGroup";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateEndpointGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateListenerCommand(
  input: UpdateListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "GlobalAccelerator_V20180706.UpdateListener";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateListenerRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1CreateAcceleratorCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAcceleratorCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateAcceleratorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateAcceleratorResponse(data, context);
  const response: CreateAcceleratorCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateAcceleratorResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateAcceleratorCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAcceleratorCommandOutput> {
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
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator.v20180706#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator.v20180706#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.globalaccelerator.v20180706#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
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

export async function deserializeAws_json1_1CreateEndpointGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEndpointGroupCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateEndpointGroupCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateEndpointGroupResponse(data, context);
  const response: CreateEndpointGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateEndpointGroupResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateEndpointGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEndpointGroupCommandOutput> {
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
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator.v20180706#AcceleratorNotFoundException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AccessDeniedException":
    case "com.amazonaws.globalaccelerator.v20180706#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EndpointGroupAlreadyExistsException":
    case "com.amazonaws.globalaccelerator.v20180706#EndpointGroupAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1EndpointGroupAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator.v20180706#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator.v20180706#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.globalaccelerator.v20180706#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ListenerNotFoundException":
    case "com.amazonaws.globalaccelerator.v20180706#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ListenerNotFoundExceptionResponse(
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

export async function deserializeAws_json1_1CreateListenerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateListenerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateListenerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateListenerResponse(data, context);
  const response: CreateListenerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateListenerResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateListenerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateListenerCommandOutput> {
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
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator.v20180706#AcceleratorNotFoundException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator.v20180706#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator.v20180706#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPortRangeException":
    case "com.amazonaws.globalaccelerator.v20180706#InvalidPortRangeException":
      response = {
        ...(await deserializeAws_json1_1InvalidPortRangeExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.globalaccelerator.v20180706#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
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

export async function deserializeAws_json1_1DeleteAcceleratorCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAcceleratorCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteAcceleratorCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAcceleratorCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteAcceleratorCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAcceleratorCommandOutput> {
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
    case "AcceleratorNotDisabledException":
    case "com.amazonaws.globalaccelerator.v20180706#AcceleratorNotDisabledException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotDisabledExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator.v20180706#AcceleratorNotFoundException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AssociatedListenerFoundException":
    case "com.amazonaws.globalaccelerator.v20180706#AssociatedListenerFoundException":
      response = {
        ...(await deserializeAws_json1_1AssociatedListenerFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator.v20180706#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator.v20180706#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
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

export async function deserializeAws_json1_1DeleteEndpointGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointGroupCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteEndpointGroupCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DeleteEndpointGroupCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteEndpointGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointGroupCommandOutput> {
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
    case "EndpointGroupNotFoundException":
    case "com.amazonaws.globalaccelerator.v20180706#EndpointGroupNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EndpointGroupNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator.v20180706#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator.v20180706#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
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

export async function deserializeAws_json1_1DeleteListenerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteListenerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteListenerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteListenerCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteListenerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteListenerCommandOutput> {
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
    case "AssociatedEndpointGroupFoundException":
    case "com.amazonaws.globalaccelerator.v20180706#AssociatedEndpointGroupFoundException":
      response = {
        ...(await deserializeAws_json1_1AssociatedEndpointGroupFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator.v20180706#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator.v20180706#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ListenerNotFoundException":
    case "com.amazonaws.globalaccelerator.v20180706#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ListenerNotFoundExceptionResponse(
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

export async function deserializeAws_json1_1DescribeAcceleratorCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAcceleratorCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeAcceleratorCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAcceleratorResponse(data, context);
  const response: DescribeAcceleratorCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeAcceleratorResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeAcceleratorCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAcceleratorCommandOutput> {
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
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator.v20180706#AcceleratorNotFoundException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator.v20180706#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator.v20180706#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
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

export async function deserializeAws_json1_1DescribeAcceleratorAttributesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAcceleratorAttributesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeAcceleratorAttributesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAcceleratorAttributesResponse(
    data,
    context
  );
  const response: DescribeAcceleratorAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeAcceleratorAttributesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeAcceleratorAttributesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAcceleratorAttributesCommandOutput> {
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
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator.v20180706#AcceleratorNotFoundException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator.v20180706#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator.v20180706#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
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

export async function deserializeAws_json1_1DescribeEndpointGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointGroupCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeEndpointGroupCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEndpointGroupResponse(data, context);
  const response: DescribeEndpointGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeEndpointGroupResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeEndpointGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointGroupCommandOutput> {
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
    case "EndpointGroupNotFoundException":
    case "com.amazonaws.globalaccelerator.v20180706#EndpointGroupNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EndpointGroupNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator.v20180706#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator.v20180706#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
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

export async function deserializeAws_json1_1DescribeListenerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeListenerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeListenerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeListenerResponse(data, context);
  const response: DescribeListenerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeListenerResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeListenerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeListenerCommandOutput> {
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
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator.v20180706#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator.v20180706#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ListenerNotFoundException":
    case "com.amazonaws.globalaccelerator.v20180706#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ListenerNotFoundExceptionResponse(
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

export async function deserializeAws_json1_1ListAcceleratorsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAcceleratorsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListAcceleratorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAcceleratorsResponse(data, context);
  const response: ListAcceleratorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAcceleratorsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListAcceleratorsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAcceleratorsCommandOutput> {
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
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator.v20180706#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator.v20180706#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.globalaccelerator.v20180706#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
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

export async function deserializeAws_json1_1ListEndpointGroupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEndpointGroupsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListEndpointGroupsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListEndpointGroupsResponse(data, context);
  const response: ListEndpointGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListEndpointGroupsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListEndpointGroupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEndpointGroupsCommandOutput> {
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
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator.v20180706#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator.v20180706#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.globalaccelerator.v20180706#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ListenerNotFoundException":
    case "com.amazonaws.globalaccelerator.v20180706#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ListenerNotFoundExceptionResponse(
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

export async function deserializeAws_json1_1ListListenersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListListenersCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListListenersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListListenersResponse(data, context);
  const response: ListListenersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListListenersResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListListenersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListListenersCommandOutput> {
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
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator.v20180706#AcceleratorNotFoundException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator.v20180706#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator.v20180706#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.globalaccelerator.v20180706#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
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

export async function deserializeAws_json1_1UpdateAcceleratorCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAcceleratorCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateAcceleratorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateAcceleratorResponse(data, context);
  const response: UpdateAcceleratorCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateAcceleratorResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateAcceleratorCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAcceleratorCommandOutput> {
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
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator.v20180706#AcceleratorNotFoundException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator.v20180706#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator.v20180706#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
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

export async function deserializeAws_json1_1UpdateAcceleratorAttributesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAcceleratorAttributesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateAcceleratorAttributesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateAcceleratorAttributesResponse(
    data,
    context
  );
  const response: UpdateAcceleratorAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateAcceleratorAttributesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateAcceleratorAttributesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAcceleratorAttributesCommandOutput> {
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
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator.v20180706#AcceleratorNotFoundException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AccessDeniedException":
    case "com.amazonaws.globalaccelerator.v20180706#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator.v20180706#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator.v20180706#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
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

export async function deserializeAws_json1_1UpdateEndpointGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEndpointGroupCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateEndpointGroupCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateEndpointGroupResponse(data, context);
  const response: UpdateEndpointGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateEndpointGroupResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateEndpointGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEndpointGroupCommandOutput> {
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
    case "com.amazonaws.globalaccelerator.v20180706#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EndpointGroupNotFoundException":
    case "com.amazonaws.globalaccelerator.v20180706#EndpointGroupNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EndpointGroupNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator.v20180706#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator.v20180706#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.globalaccelerator.v20180706#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
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

export async function deserializeAws_json1_1UpdateListenerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateListenerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateListenerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateListenerResponse(data, context);
  const response: UpdateListenerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateListenerResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateListenerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateListenerCommandOutput> {
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
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator.v20180706#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator.v20180706#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPortRangeException":
    case "com.amazonaws.globalaccelerator.v20180706#InvalidPortRangeException":
      response = {
        ...(await deserializeAws_json1_1InvalidPortRangeExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.globalaccelerator.v20180706#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ListenerNotFoundException":
    case "com.amazonaws.globalaccelerator.v20180706#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ListenerNotFoundExceptionResponse(
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

const deserializeAws_json1_1AcceleratorNotDisabledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AcceleratorNotDisabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AcceleratorNotDisabledException(
    body,
    context
  );
  const contents: AcceleratorNotDisabledException = {
    name: "AcceleratorNotDisabledException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1AcceleratorNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AcceleratorNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AcceleratorNotFoundException(
    body,
    context
  );
  const contents: AcceleratorNotFoundException = {
    name: "AcceleratorNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
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

const deserializeAws_json1_1AssociatedEndpointGroupFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AssociatedEndpointGroupFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AssociatedEndpointGroupFoundException(
    body,
    context
  );
  const contents: AssociatedEndpointGroupFoundException = {
    name: "AssociatedEndpointGroupFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1AssociatedListenerFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AssociatedListenerFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AssociatedListenerFoundException(
    body,
    context
  );
  const contents: AssociatedListenerFoundException = {
    name: "AssociatedListenerFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1EndpointGroupAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EndpointGroupAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EndpointGroupAlreadyExistsException(
    body,
    context
  );
  const contents: EndpointGroupAlreadyExistsException = {
    name: "EndpointGroupAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1EndpointGroupNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EndpointGroupNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EndpointGroupNotFoundException(
    body,
    context
  );
  const contents: EndpointGroupNotFoundException = {
    name: "EndpointGroupNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InternalServiceErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServiceErrorException(
    body,
    context
  );
  const contents: InternalServiceErrorException = {
    name: "InternalServiceErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidArgumentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArgumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidArgumentException(
    body,
    context
  );
  const contents: InvalidArgumentException = {
    name: "InvalidArgumentException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidNextTokenException(
    body,
    context
  );
  const contents: InvalidNextTokenException = {
    name: "InvalidNextTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidPortRangeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPortRangeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidPortRangeException(
    body,
    context
  );
  const contents: InvalidPortRangeException = {
    name: "InvalidPortRangeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(
    body,
    context
  );
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ListenerNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ListenerNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ListenerNotFoundException(
    body,
    context
  );
  const contents: ListenerNotFoundException = {
    name: "ListenerNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1CreateAcceleratorRequest = (
  input: CreateAcceleratorRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Enabled !== undefined) {
    bodyParams["Enabled"] = input.Enabled;
  }
  if (input.IdempotencyToken !== undefined) {
    bodyParams["IdempotencyToken"] = input.IdempotencyToken;
  }
  if (input.IpAddressType !== undefined) {
    bodyParams["IpAddressType"] = input.IpAddressType;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateEndpointGroupRequest = (
  input: CreateEndpointGroupRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EndpointConfigurations !== undefined) {
    bodyParams[
      "EndpointConfigurations"
    ] = serializeAws_json1_1EndpointConfigurations(
      input.EndpointConfigurations,
      context
    );
  }
  if (input.EndpointGroupRegion !== undefined) {
    bodyParams["EndpointGroupRegion"] = input.EndpointGroupRegion;
  }
  if (input.HealthCheckIntervalSeconds !== undefined) {
    bodyParams["HealthCheckIntervalSeconds"] = input.HealthCheckIntervalSeconds;
  }
  if (input.HealthCheckPath !== undefined) {
    bodyParams["HealthCheckPath"] = input.HealthCheckPath;
  }
  if (input.HealthCheckPort !== undefined) {
    bodyParams["HealthCheckPort"] = input.HealthCheckPort;
  }
  if (input.HealthCheckProtocol !== undefined) {
    bodyParams["HealthCheckProtocol"] = input.HealthCheckProtocol;
  }
  if (input.IdempotencyToken !== undefined) {
    bodyParams["IdempotencyToken"] = input.IdempotencyToken;
  }
  if (input.ListenerArn !== undefined) {
    bodyParams["ListenerArn"] = input.ListenerArn;
  }
  if (input.ThresholdCount !== undefined) {
    bodyParams["ThresholdCount"] = input.ThresholdCount;
  }
  if (input.TrafficDialPercentage !== undefined) {
    bodyParams["TrafficDialPercentage"] = input.TrafficDialPercentage;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateListenerRequest = (
  input: CreateListenerRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AcceleratorArn !== undefined) {
    bodyParams["AcceleratorArn"] = input.AcceleratorArn;
  }
  if (input.ClientAffinity !== undefined) {
    bodyParams["ClientAffinity"] = input.ClientAffinity;
  }
  if (input.IdempotencyToken !== undefined) {
    bodyParams["IdempotencyToken"] = input.IdempotencyToken;
  }
  if (input.PortRanges !== undefined) {
    bodyParams["PortRanges"] = serializeAws_json1_1PortRanges(
      input.PortRanges,
      context
    );
  }
  if (input.Protocol !== undefined) {
    bodyParams["Protocol"] = input.Protocol;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteAcceleratorRequest = (
  input: DeleteAcceleratorRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AcceleratorArn !== undefined) {
    bodyParams["AcceleratorArn"] = input.AcceleratorArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteEndpointGroupRequest = (
  input: DeleteEndpointGroupRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EndpointGroupArn !== undefined) {
    bodyParams["EndpointGroupArn"] = input.EndpointGroupArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteListenerRequest = (
  input: DeleteListenerRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ListenerArn !== undefined) {
    bodyParams["ListenerArn"] = input.ListenerArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeAcceleratorAttributesRequest = (
  input: DescribeAcceleratorAttributesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AcceleratorArn !== undefined) {
    bodyParams["AcceleratorArn"] = input.AcceleratorArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeAcceleratorRequest = (
  input: DescribeAcceleratorRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AcceleratorArn !== undefined) {
    bodyParams["AcceleratorArn"] = input.AcceleratorArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeEndpointGroupRequest = (
  input: DescribeEndpointGroupRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EndpointGroupArn !== undefined) {
    bodyParams["EndpointGroupArn"] = input.EndpointGroupArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeListenerRequest = (
  input: DescribeListenerRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ListenerArn !== undefined) {
    bodyParams["ListenerArn"] = input.ListenerArn;
  }
  return bodyParams;
};

const serializeAws_json1_1EndpointConfiguration = (
  input: EndpointConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ClientIPPreservationEnabled !== undefined) {
    bodyParams["ClientIPPreservationEnabled"] =
      input.ClientIPPreservationEnabled;
  }
  if (input.EndpointId !== undefined) {
    bodyParams["EndpointId"] = input.EndpointId;
  }
  if (input.Weight !== undefined) {
    bodyParams["Weight"] = input.Weight;
  }
  return bodyParams;
};

const serializeAws_json1_1EndpointConfigurations = (
  input: Array<EndpointConfiguration>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1EndpointConfiguration(entry, context));
  }
  return contents;
};

const serializeAws_json1_1ListAcceleratorsRequest = (
  input: ListAcceleratorsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListEndpointGroupsRequest = (
  input: ListEndpointGroupsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ListenerArn !== undefined) {
    bodyParams["ListenerArn"] = input.ListenerArn;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListListenersRequest = (
  input: ListListenersRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AcceleratorArn !== undefined) {
    bodyParams["AcceleratorArn"] = input.AcceleratorArn;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1PortRange = (
  input: PortRange,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.FromPort !== undefined) {
    bodyParams["FromPort"] = input.FromPort;
  }
  if (input.ToPort !== undefined) {
    bodyParams["ToPort"] = input.ToPort;
  }
  return bodyParams;
};

const serializeAws_json1_1PortRanges = (
  input: Array<PortRange>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1PortRange(entry, context));
  }
  return contents;
};

const serializeAws_json1_1UpdateAcceleratorAttributesRequest = (
  input: UpdateAcceleratorAttributesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AcceleratorArn !== undefined) {
    bodyParams["AcceleratorArn"] = input.AcceleratorArn;
  }
  if (input.FlowLogsEnabled !== undefined) {
    bodyParams["FlowLogsEnabled"] = input.FlowLogsEnabled;
  }
  if (input.FlowLogsS3Bucket !== undefined) {
    bodyParams["FlowLogsS3Bucket"] = input.FlowLogsS3Bucket;
  }
  if (input.FlowLogsS3Prefix !== undefined) {
    bodyParams["FlowLogsS3Prefix"] = input.FlowLogsS3Prefix;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateAcceleratorRequest = (
  input: UpdateAcceleratorRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AcceleratorArn !== undefined) {
    bodyParams["AcceleratorArn"] = input.AcceleratorArn;
  }
  if (input.Enabled !== undefined) {
    bodyParams["Enabled"] = input.Enabled;
  }
  if (input.IpAddressType !== undefined) {
    bodyParams["IpAddressType"] = input.IpAddressType;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateEndpointGroupRequest = (
  input: UpdateEndpointGroupRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EndpointConfigurations !== undefined) {
    bodyParams[
      "EndpointConfigurations"
    ] = serializeAws_json1_1EndpointConfigurations(
      input.EndpointConfigurations,
      context
    );
  }
  if (input.EndpointGroupArn !== undefined) {
    bodyParams["EndpointGroupArn"] = input.EndpointGroupArn;
  }
  if (input.HealthCheckIntervalSeconds !== undefined) {
    bodyParams["HealthCheckIntervalSeconds"] = input.HealthCheckIntervalSeconds;
  }
  if (input.HealthCheckPath !== undefined) {
    bodyParams["HealthCheckPath"] = input.HealthCheckPath;
  }
  if (input.HealthCheckPort !== undefined) {
    bodyParams["HealthCheckPort"] = input.HealthCheckPort;
  }
  if (input.HealthCheckProtocol !== undefined) {
    bodyParams["HealthCheckProtocol"] = input.HealthCheckProtocol;
  }
  if (input.ThresholdCount !== undefined) {
    bodyParams["ThresholdCount"] = input.ThresholdCount;
  }
  if (input.TrafficDialPercentage !== undefined) {
    bodyParams["TrafficDialPercentage"] = input.TrafficDialPercentage;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateListenerRequest = (
  input: UpdateListenerRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ClientAffinity !== undefined) {
    bodyParams["ClientAffinity"] = input.ClientAffinity;
  }
  if (input.ListenerArn !== undefined) {
    bodyParams["ListenerArn"] = input.ListenerArn;
  }
  if (input.PortRanges !== undefined) {
    bodyParams["PortRanges"] = serializeAws_json1_1PortRanges(
      input.PortRanges,
      context
    );
  }
  if (input.Protocol !== undefined) {
    bodyParams["Protocol"] = input.Protocol;
  }
  return bodyParams;
};

const deserializeAws_json1_1Accelerator = (
  output: any,
  context: __SerdeContext
): Accelerator => {
  let contents: any = {
    __type: "Accelerator",
    AcceleratorArn: undefined,
    CreatedTime: undefined,
    DnsName: undefined,
    Enabled: undefined,
    IpAddressType: undefined,
    IpSets: undefined,
    LastModifiedTime: undefined,
    Name: undefined,
    Status: undefined
  };
  if (output.AcceleratorArn !== undefined && output.AcceleratorArn !== null) {
    contents.AcceleratorArn = output.AcceleratorArn;
  }
  if (output.CreatedTime !== undefined && output.CreatedTime !== null) {
    contents.CreatedTime = new Date(Math.round(output.CreatedTime * 1000));
  }
  if (output.DnsName !== undefined && output.DnsName !== null) {
    contents.DnsName = output.DnsName;
  }
  if (output.Enabled !== undefined && output.Enabled !== null) {
    contents.Enabled = output.Enabled;
  }
  if (output.IpAddressType !== undefined && output.IpAddressType !== null) {
    contents.IpAddressType = output.IpAddressType;
  }
  if (output.IpSets !== undefined && output.IpSets !== null) {
    contents.IpSets = deserializeAws_json1_1IpSets(output.IpSets, context);
  }
  if (
    output.LastModifiedTime !== undefined &&
    output.LastModifiedTime !== null
  ) {
    contents.LastModifiedTime = new Date(
      Math.round(output.LastModifiedTime * 1000)
    );
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_json1_1AcceleratorAttributes = (
  output: any,
  context: __SerdeContext
): AcceleratorAttributes => {
  let contents: any = {
    __type: "AcceleratorAttributes",
    FlowLogsEnabled: undefined,
    FlowLogsS3Bucket: undefined,
    FlowLogsS3Prefix: undefined
  };
  if (output.FlowLogsEnabled !== undefined && output.FlowLogsEnabled !== null) {
    contents.FlowLogsEnabled = output.FlowLogsEnabled;
  }
  if (
    output.FlowLogsS3Bucket !== undefined &&
    output.FlowLogsS3Bucket !== null
  ) {
    contents.FlowLogsS3Bucket = output.FlowLogsS3Bucket;
  }
  if (
    output.FlowLogsS3Prefix !== undefined &&
    output.FlowLogsS3Prefix !== null
  ) {
    contents.FlowLogsS3Prefix = output.FlowLogsS3Prefix;
  }
  return contents;
};

const deserializeAws_json1_1AcceleratorNotDisabledException = (
  output: any,
  context: __SerdeContext
): AcceleratorNotDisabledException => {
  let contents: any = {
    __type: "AcceleratorNotDisabledException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1AcceleratorNotFoundException = (
  output: any,
  context: __SerdeContext
): AcceleratorNotFoundException => {
  let contents: any = {
    __type: "AcceleratorNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1Accelerators = (
  output: any,
  context: __SerdeContext
): Array<Accelerator> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Accelerator(entry, context)
  );
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

const deserializeAws_json1_1AssociatedEndpointGroupFoundException = (
  output: any,
  context: __SerdeContext
): AssociatedEndpointGroupFoundException => {
  let contents: any = {
    __type: "AssociatedEndpointGroupFoundException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1AssociatedListenerFoundException = (
  output: any,
  context: __SerdeContext
): AssociatedListenerFoundException => {
  let contents: any = {
    __type: "AssociatedListenerFoundException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1CreateAcceleratorResponse = (
  output: any,
  context: __SerdeContext
): CreateAcceleratorResponse => {
  let contents: any = {
    __type: "CreateAcceleratorResponse",
    Accelerator: undefined
  };
  if (output.Accelerator !== undefined && output.Accelerator !== null) {
    contents.Accelerator = deserializeAws_json1_1Accelerator(
      output.Accelerator,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateEndpointGroupResponse = (
  output: any,
  context: __SerdeContext
): CreateEndpointGroupResponse => {
  let contents: any = {
    __type: "CreateEndpointGroupResponse",
    EndpointGroup: undefined
  };
  if (output.EndpointGroup !== undefined && output.EndpointGroup !== null) {
    contents.EndpointGroup = deserializeAws_json1_1EndpointGroup(
      output.EndpointGroup,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateListenerResponse = (
  output: any,
  context: __SerdeContext
): CreateListenerResponse => {
  let contents: any = {
    __type: "CreateListenerResponse",
    Listener: undefined
  };
  if (output.Listener !== undefined && output.Listener !== null) {
    contents.Listener = deserializeAws_json1_1Listener(
      output.Listener,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeAcceleratorAttributesResponse = (
  output: any,
  context: __SerdeContext
): DescribeAcceleratorAttributesResponse => {
  let contents: any = {
    __type: "DescribeAcceleratorAttributesResponse",
    AcceleratorAttributes: undefined
  };
  if (
    output.AcceleratorAttributes !== undefined &&
    output.AcceleratorAttributes !== null
  ) {
    contents.AcceleratorAttributes = deserializeAws_json1_1AcceleratorAttributes(
      output.AcceleratorAttributes,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeAcceleratorResponse = (
  output: any,
  context: __SerdeContext
): DescribeAcceleratorResponse => {
  let contents: any = {
    __type: "DescribeAcceleratorResponse",
    Accelerator: undefined
  };
  if (output.Accelerator !== undefined && output.Accelerator !== null) {
    contents.Accelerator = deserializeAws_json1_1Accelerator(
      output.Accelerator,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeEndpointGroupResponse = (
  output: any,
  context: __SerdeContext
): DescribeEndpointGroupResponse => {
  let contents: any = {
    __type: "DescribeEndpointGroupResponse",
    EndpointGroup: undefined
  };
  if (output.EndpointGroup !== undefined && output.EndpointGroup !== null) {
    contents.EndpointGroup = deserializeAws_json1_1EndpointGroup(
      output.EndpointGroup,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeListenerResponse = (
  output: any,
  context: __SerdeContext
): DescribeListenerResponse => {
  let contents: any = {
    __type: "DescribeListenerResponse",
    Listener: undefined
  };
  if (output.Listener !== undefined && output.Listener !== null) {
    contents.Listener = deserializeAws_json1_1Listener(
      output.Listener,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1EndpointDescription = (
  output: any,
  context: __SerdeContext
): EndpointDescription => {
  let contents: any = {
    __type: "EndpointDescription",
    ClientIPPreservationEnabled: undefined,
    EndpointId: undefined,
    HealthReason: undefined,
    HealthState: undefined,
    Weight: undefined
  };
  if (
    output.ClientIPPreservationEnabled !== undefined &&
    output.ClientIPPreservationEnabled !== null
  ) {
    contents.ClientIPPreservationEnabled = output.ClientIPPreservationEnabled;
  }
  if (output.EndpointId !== undefined && output.EndpointId !== null) {
    contents.EndpointId = output.EndpointId;
  }
  if (output.HealthReason !== undefined && output.HealthReason !== null) {
    contents.HealthReason = output.HealthReason;
  }
  if (output.HealthState !== undefined && output.HealthState !== null) {
    contents.HealthState = output.HealthState;
  }
  if (output.Weight !== undefined && output.Weight !== null) {
    contents.Weight = output.Weight;
  }
  return contents;
};

const deserializeAws_json1_1EndpointDescriptions = (
  output: any,
  context: __SerdeContext
): Array<EndpointDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EndpointDescription(entry, context)
  );
};

const deserializeAws_json1_1EndpointGroup = (
  output: any,
  context: __SerdeContext
): EndpointGroup => {
  let contents: any = {
    __type: "EndpointGroup",
    EndpointDescriptions: undefined,
    EndpointGroupArn: undefined,
    EndpointGroupRegion: undefined,
    HealthCheckIntervalSeconds: undefined,
    HealthCheckPath: undefined,
    HealthCheckPort: undefined,
    HealthCheckProtocol: undefined,
    ThresholdCount: undefined,
    TrafficDialPercentage: undefined
  };
  if (
    output.EndpointDescriptions !== undefined &&
    output.EndpointDescriptions !== null
  ) {
    contents.EndpointDescriptions = deserializeAws_json1_1EndpointDescriptions(
      output.EndpointDescriptions,
      context
    );
  }
  if (
    output.EndpointGroupArn !== undefined &&
    output.EndpointGroupArn !== null
  ) {
    contents.EndpointGroupArn = output.EndpointGroupArn;
  }
  if (
    output.EndpointGroupRegion !== undefined &&
    output.EndpointGroupRegion !== null
  ) {
    contents.EndpointGroupRegion = output.EndpointGroupRegion;
  }
  if (
    output.HealthCheckIntervalSeconds !== undefined &&
    output.HealthCheckIntervalSeconds !== null
  ) {
    contents.HealthCheckIntervalSeconds = output.HealthCheckIntervalSeconds;
  }
  if (output.HealthCheckPath !== undefined && output.HealthCheckPath !== null) {
    contents.HealthCheckPath = output.HealthCheckPath;
  }
  if (output.HealthCheckPort !== undefined && output.HealthCheckPort !== null) {
    contents.HealthCheckPort = output.HealthCheckPort;
  }
  if (
    output.HealthCheckProtocol !== undefined &&
    output.HealthCheckProtocol !== null
  ) {
    contents.HealthCheckProtocol = output.HealthCheckProtocol;
  }
  if (output.ThresholdCount !== undefined && output.ThresholdCount !== null) {
    contents.ThresholdCount = output.ThresholdCount;
  }
  if (
    output.TrafficDialPercentage !== undefined &&
    output.TrafficDialPercentage !== null
  ) {
    contents.TrafficDialPercentage = output.TrafficDialPercentage;
  }
  return contents;
};

const deserializeAws_json1_1EndpointGroupAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): EndpointGroupAlreadyExistsException => {
  let contents: any = {
    __type: "EndpointGroupAlreadyExistsException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1EndpointGroupNotFoundException = (
  output: any,
  context: __SerdeContext
): EndpointGroupNotFoundException => {
  let contents: any = {
    __type: "EndpointGroupNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1EndpointGroups = (
  output: any,
  context: __SerdeContext
): Array<EndpointGroup> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EndpointGroup(entry, context)
  );
};

const deserializeAws_json1_1InternalServiceErrorException = (
  output: any,
  context: __SerdeContext
): InternalServiceErrorException => {
  let contents: any = {
    __type: "InternalServiceErrorException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidArgumentException = (
  output: any,
  context: __SerdeContext
): InvalidArgumentException => {
  let contents: any = {
    __type: "InvalidArgumentException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  let contents: any = {
    __type: "InvalidNextTokenException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidPortRangeException = (
  output: any,
  context: __SerdeContext
): InvalidPortRangeException => {
  let contents: any = {
    __type: "InvalidPortRangeException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1IpAddresses = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1IpSet = (
  output: any,
  context: __SerdeContext
): IpSet => {
  let contents: any = {
    __type: "IpSet",
    IpAddresses: undefined,
    IpFamily: undefined
  };
  if (output.IpAddresses !== undefined && output.IpAddresses !== null) {
    contents.IpAddresses = deserializeAws_json1_1IpAddresses(
      output.IpAddresses,
      context
    );
  }
  if (output.IpFamily !== undefined && output.IpFamily !== null) {
    contents.IpFamily = output.IpFamily;
  }
  return contents;
};

const deserializeAws_json1_1IpSets = (
  output: any,
  context: __SerdeContext
): Array<IpSet> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1IpSet(entry, context)
  );
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ListAcceleratorsResponse = (
  output: any,
  context: __SerdeContext
): ListAcceleratorsResponse => {
  let contents: any = {
    __type: "ListAcceleratorsResponse",
    Accelerators: undefined,
    NextToken: undefined
  };
  if (output.Accelerators !== undefined && output.Accelerators !== null) {
    contents.Accelerators = deserializeAws_json1_1Accelerators(
      output.Accelerators,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListEndpointGroupsResponse = (
  output: any,
  context: __SerdeContext
): ListEndpointGroupsResponse => {
  let contents: any = {
    __type: "ListEndpointGroupsResponse",
    EndpointGroups: undefined,
    NextToken: undefined
  };
  if (output.EndpointGroups !== undefined && output.EndpointGroups !== null) {
    contents.EndpointGroups = deserializeAws_json1_1EndpointGroups(
      output.EndpointGroups,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListListenersResponse = (
  output: any,
  context: __SerdeContext
): ListListenersResponse => {
  let contents: any = {
    __type: "ListListenersResponse",
    Listeners: undefined,
    NextToken: undefined
  };
  if (output.Listeners !== undefined && output.Listeners !== null) {
    contents.Listeners = deserializeAws_json1_1Listeners(
      output.Listeners,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1Listener = (
  output: any,
  context: __SerdeContext
): Listener => {
  let contents: any = {
    __type: "Listener",
    ClientAffinity: undefined,
    ListenerArn: undefined,
    PortRanges: undefined,
    Protocol: undefined
  };
  if (output.ClientAffinity !== undefined && output.ClientAffinity !== null) {
    contents.ClientAffinity = output.ClientAffinity;
  }
  if (output.ListenerArn !== undefined && output.ListenerArn !== null) {
    contents.ListenerArn = output.ListenerArn;
  }
  if (output.PortRanges !== undefined && output.PortRanges !== null) {
    contents.PortRanges = deserializeAws_json1_1PortRanges(
      output.PortRanges,
      context
    );
  }
  if (output.Protocol !== undefined && output.Protocol !== null) {
    contents.Protocol = output.Protocol;
  }
  return contents;
};

const deserializeAws_json1_1ListenerNotFoundException = (
  output: any,
  context: __SerdeContext
): ListenerNotFoundException => {
  let contents: any = {
    __type: "ListenerNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1Listeners = (
  output: any,
  context: __SerdeContext
): Array<Listener> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Listener(entry, context)
  );
};

const deserializeAws_json1_1PortRange = (
  output: any,
  context: __SerdeContext
): PortRange => {
  let contents: any = {
    __type: "PortRange",
    FromPort: undefined,
    ToPort: undefined
  };
  if (output.FromPort !== undefined && output.FromPort !== null) {
    contents.FromPort = output.FromPort;
  }
  if (output.ToPort !== undefined && output.ToPort !== null) {
    contents.ToPort = output.ToPort;
  }
  return contents;
};

const deserializeAws_json1_1PortRanges = (
  output: any,
  context: __SerdeContext
): Array<PortRange> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PortRange(entry, context)
  );
};

const deserializeAws_json1_1UpdateAcceleratorAttributesResponse = (
  output: any,
  context: __SerdeContext
): UpdateAcceleratorAttributesResponse => {
  let contents: any = {
    __type: "UpdateAcceleratorAttributesResponse",
    AcceleratorAttributes: undefined
  };
  if (
    output.AcceleratorAttributes !== undefined &&
    output.AcceleratorAttributes !== null
  ) {
    contents.AcceleratorAttributes = deserializeAws_json1_1AcceleratorAttributes(
      output.AcceleratorAttributes,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1UpdateAcceleratorResponse = (
  output: any,
  context: __SerdeContext
): UpdateAcceleratorResponse => {
  let contents: any = {
    __type: "UpdateAcceleratorResponse",
    Accelerator: undefined
  };
  if (output.Accelerator !== undefined && output.Accelerator !== null) {
    contents.Accelerator = deserializeAws_json1_1Accelerator(
      output.Accelerator,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1UpdateEndpointGroupResponse = (
  output: any,
  context: __SerdeContext
): UpdateEndpointGroupResponse => {
  let contents: any = {
    __type: "UpdateEndpointGroupResponse",
    EndpointGroup: undefined
  };
  if (output.EndpointGroup !== undefined && output.EndpointGroup !== null) {
    contents.EndpointGroup = deserializeAws_json1_1EndpointGroup(
      output.EndpointGroup,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1UpdateListenerResponse = (
  output: any,
  context: __SerdeContext
): UpdateListenerResponse => {
  let contents: any = {
    __type: "UpdateListenerResponse",
    Listener: undefined
  };
  if (output.Listener !== undefined && output.Listener !== null) {
    contents.Listener = deserializeAws_json1_1Listener(
      output.Listener,
      context
    );
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
