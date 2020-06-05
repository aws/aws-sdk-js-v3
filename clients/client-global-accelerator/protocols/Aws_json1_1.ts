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

export const serializeAws_json1_1CreateAcceleratorCommand = async (
  input: CreateAcceleratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "GlobalAccelerator_V20180706.CreateAccelerator"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateAcceleratorRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateEndpointGroupCommand = async (
  input: CreateEndpointGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "GlobalAccelerator_V20180706.CreateEndpointGroup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateEndpointGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateListenerCommand = async (
  input: CreateListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "GlobalAccelerator_V20180706.CreateListener"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateListenerRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteAcceleratorCommand = async (
  input: DeleteAcceleratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "GlobalAccelerator_V20180706.DeleteAccelerator"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteAcceleratorRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteEndpointGroupCommand = async (
  input: DeleteEndpointGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "GlobalAccelerator_V20180706.DeleteEndpointGroup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteEndpointGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteListenerCommand = async (
  input: DeleteListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "GlobalAccelerator_V20180706.DeleteListener"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteListenerRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAcceleratorCommand = async (
  input: DescribeAcceleratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "GlobalAccelerator_V20180706.DescribeAccelerator"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeAcceleratorRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAcceleratorAttributesCommand = async (
  input: DescribeAcceleratorAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "GlobalAccelerator_V20180706.DescribeAcceleratorAttributes"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeAcceleratorAttributesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEndpointGroupCommand = async (
  input: DescribeEndpointGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "GlobalAccelerator_V20180706.DescribeEndpointGroup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeEndpointGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeListenerCommand = async (
  input: DescribeListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "GlobalAccelerator_V20180706.DescribeListener"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeListenerRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAcceleratorsCommand = async (
  input: ListAcceleratorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "GlobalAccelerator_V20180706.ListAccelerators"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListAcceleratorsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListEndpointGroupsCommand = async (
  input: ListEndpointGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "GlobalAccelerator_V20180706.ListEndpointGroups"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListEndpointGroupsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListListenersCommand = async (
  input: ListListenersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "GlobalAccelerator_V20180706.ListListeners"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListListenersRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateAcceleratorCommand = async (
  input: UpdateAcceleratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "GlobalAccelerator_V20180706.UpdateAccelerator"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateAcceleratorRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateAcceleratorAttributesCommand = async (
  input: UpdateAcceleratorAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "GlobalAccelerator_V20180706.UpdateAcceleratorAttributes"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateAcceleratorAttributesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateEndpointGroupCommand = async (
  input: UpdateEndpointGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "GlobalAccelerator_V20180706.UpdateEndpointGroup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateEndpointGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateListenerCommand = async (
  input: UpdateListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "GlobalAccelerator_V20180706.UpdateListener"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateListenerRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CreateAcceleratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAcceleratorCommandOutput> => {
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
};

const deserializeAws_json1_1CreateAcceleratorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAcceleratorCommandOutput> => {
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
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.globalaccelerator#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
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

export const deserializeAws_json1_1CreateEndpointGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEndpointGroupCommandOutput> => {
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
};

const deserializeAws_json1_1CreateEndpointGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEndpointGroupCommandOutput> => {
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
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AccessDeniedException":
    case "com.amazonaws.globalaccelerator#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EndpointGroupAlreadyExistsException":
    case "com.amazonaws.globalaccelerator#EndpointGroupAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1EndpointGroupAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.globalaccelerator#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ListenerNotFoundException":
    case "com.amazonaws.globalaccelerator#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ListenerNotFoundExceptionResponse(
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

export const deserializeAws_json1_1CreateListenerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateListenerCommandOutput> => {
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
};

const deserializeAws_json1_1CreateListenerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateListenerCommandOutput> => {
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
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPortRangeException":
    case "com.amazonaws.globalaccelerator#InvalidPortRangeException":
      response = {
        ...(await deserializeAws_json1_1InvalidPortRangeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.globalaccelerator#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
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

export const deserializeAws_json1_1DeleteAcceleratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAcceleratorCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteAcceleratorCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAcceleratorCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteAcceleratorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAcceleratorCommandOutput> => {
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
    case "AcceleratorNotDisabledException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotDisabledException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotDisabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AssociatedListenerFoundException":
    case "com.amazonaws.globalaccelerator#AssociatedListenerFoundException":
      response = {
        ...(await deserializeAws_json1_1AssociatedListenerFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
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

export const deserializeAws_json1_1DeleteEndpointGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointGroupCommandOutput> => {
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
};

const deserializeAws_json1_1DeleteEndpointGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointGroupCommandOutput> => {
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
    case "EndpointGroupNotFoundException":
    case "com.amazonaws.globalaccelerator#EndpointGroupNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EndpointGroupNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
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

export const deserializeAws_json1_1DeleteListenerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteListenerCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteListenerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteListenerCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteListenerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteListenerCommandOutput> => {
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
    case "AssociatedEndpointGroupFoundException":
    case "com.amazonaws.globalaccelerator#AssociatedEndpointGroupFoundException":
      response = {
        ...(await deserializeAws_json1_1AssociatedEndpointGroupFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ListenerNotFoundException":
    case "com.amazonaws.globalaccelerator#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ListenerNotFoundExceptionResponse(
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

export const deserializeAws_json1_1DescribeAcceleratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAcceleratorCommandOutput> => {
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
};

const deserializeAws_json1_1DescribeAcceleratorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAcceleratorCommandOutput> => {
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
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
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

export const deserializeAws_json1_1DescribeAcceleratorAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAcceleratorAttributesCommandOutput> => {
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
};

const deserializeAws_json1_1DescribeAcceleratorAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAcceleratorAttributesCommandOutput> => {
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
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
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

export const deserializeAws_json1_1DescribeEndpointGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointGroupCommandOutput> => {
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
};

const deserializeAws_json1_1DescribeEndpointGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointGroupCommandOutput> => {
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
    case "EndpointGroupNotFoundException":
    case "com.amazonaws.globalaccelerator#EndpointGroupNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EndpointGroupNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
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

export const deserializeAws_json1_1DescribeListenerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeListenerCommandOutput> => {
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
};

const deserializeAws_json1_1DescribeListenerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeListenerCommandOutput> => {
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
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ListenerNotFoundException":
    case "com.amazonaws.globalaccelerator#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ListenerNotFoundExceptionResponse(
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

export const deserializeAws_json1_1ListAcceleratorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAcceleratorsCommandOutput> => {
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
};

const deserializeAws_json1_1ListAcceleratorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAcceleratorsCommandOutput> => {
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
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.globalaccelerator#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
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

export const deserializeAws_json1_1ListEndpointGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEndpointGroupsCommandOutput> => {
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
};

const deserializeAws_json1_1ListEndpointGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEndpointGroupsCommandOutput> => {
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
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.globalaccelerator#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ListenerNotFoundException":
    case "com.amazonaws.globalaccelerator#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ListenerNotFoundExceptionResponse(
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

export const deserializeAws_json1_1ListListenersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListListenersCommandOutput> => {
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
};

const deserializeAws_json1_1ListListenersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListListenersCommandOutput> => {
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
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.globalaccelerator#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
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

export const deserializeAws_json1_1UpdateAcceleratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAcceleratorCommandOutput> => {
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
};

const deserializeAws_json1_1UpdateAcceleratorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAcceleratorCommandOutput> => {
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
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
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

export const deserializeAws_json1_1UpdateAcceleratorAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAcceleratorAttributesCommandOutput> => {
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
};

const deserializeAws_json1_1UpdateAcceleratorAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAcceleratorAttributesCommandOutput> => {
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
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AccessDeniedException":
    case "com.amazonaws.globalaccelerator#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
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

export const deserializeAws_json1_1UpdateEndpointGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEndpointGroupCommandOutput> => {
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
};

const deserializeAws_json1_1UpdateEndpointGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEndpointGroupCommandOutput> => {
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
    case "com.amazonaws.globalaccelerator#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EndpointGroupNotFoundException":
    case "com.amazonaws.globalaccelerator#EndpointGroupNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EndpointGroupNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.globalaccelerator#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
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

export const deserializeAws_json1_1UpdateListenerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateListenerCommandOutput> => {
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
};

const deserializeAws_json1_1UpdateListenerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateListenerCommandOutput> => {
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
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPortRangeException":
    case "com.amazonaws.globalaccelerator#InvalidPortRangeException":
      response = {
        ...(await deserializeAws_json1_1InvalidPortRangeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.globalaccelerator#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ListenerNotFoundException":
    case "com.amazonaws.globalaccelerator#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ListenerNotFoundExceptionResponse(
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
  return {
    ...(input.Enabled !== undefined && { Enabled: input.Enabled }),
    ...(input.IdempotencyToken !== undefined && {
      IdempotencyToken: input.IdempotencyToken
    }),
    ...(input.IpAddressType !== undefined && {
      IpAddressType: input.IpAddressType
    }),
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_json1_1CreateEndpointGroupRequest = (
  input: CreateEndpointGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndpointConfigurations !== undefined && {
      EndpointConfigurations: serializeAws_json1_1EndpointConfigurations(
        input.EndpointConfigurations,
        context
      )
    }),
    ...(input.EndpointGroupRegion !== undefined && {
      EndpointGroupRegion: input.EndpointGroupRegion
    }),
    ...(input.HealthCheckIntervalSeconds !== undefined && {
      HealthCheckIntervalSeconds: input.HealthCheckIntervalSeconds
    }),
    ...(input.HealthCheckPath !== undefined && {
      HealthCheckPath: input.HealthCheckPath
    }),
    ...(input.HealthCheckPort !== undefined && {
      HealthCheckPort: input.HealthCheckPort
    }),
    ...(input.HealthCheckProtocol !== undefined && {
      HealthCheckProtocol: input.HealthCheckProtocol
    }),
    ...(input.IdempotencyToken !== undefined && {
      IdempotencyToken: input.IdempotencyToken
    }),
    ...(input.ListenerArn !== undefined && { ListenerArn: input.ListenerArn }),
    ...(input.ThresholdCount !== undefined && {
      ThresholdCount: input.ThresholdCount
    }),
    ...(input.TrafficDialPercentage !== undefined && {
      TrafficDialPercentage: input.TrafficDialPercentage
    })
  };
};

const serializeAws_json1_1CreateListenerRequest = (
  input: CreateListenerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceleratorArn !== undefined && {
      AcceleratorArn: input.AcceleratorArn
    }),
    ...(input.ClientAffinity !== undefined && {
      ClientAffinity: input.ClientAffinity
    }),
    ...(input.IdempotencyToken !== undefined && {
      IdempotencyToken: input.IdempotencyToken
    }),
    ...(input.PortRanges !== undefined && {
      PortRanges: serializeAws_json1_1PortRanges(input.PortRanges, context)
    }),
    ...(input.Protocol !== undefined && { Protocol: input.Protocol })
  };
};

const serializeAws_json1_1DeleteAcceleratorRequest = (
  input: DeleteAcceleratorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceleratorArn !== undefined && {
      AcceleratorArn: input.AcceleratorArn
    })
  };
};

const serializeAws_json1_1DeleteEndpointGroupRequest = (
  input: DeleteEndpointGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndpointGroupArn !== undefined && {
      EndpointGroupArn: input.EndpointGroupArn
    })
  };
};

const serializeAws_json1_1DeleteListenerRequest = (
  input: DeleteListenerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ListenerArn !== undefined && { ListenerArn: input.ListenerArn })
  };
};

const serializeAws_json1_1DescribeAcceleratorAttributesRequest = (
  input: DescribeAcceleratorAttributesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceleratorArn !== undefined && {
      AcceleratorArn: input.AcceleratorArn
    })
  };
};

const serializeAws_json1_1DescribeAcceleratorRequest = (
  input: DescribeAcceleratorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceleratorArn !== undefined && {
      AcceleratorArn: input.AcceleratorArn
    })
  };
};

const serializeAws_json1_1DescribeEndpointGroupRequest = (
  input: DescribeEndpointGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndpointGroupArn !== undefined && {
      EndpointGroupArn: input.EndpointGroupArn
    })
  };
};

const serializeAws_json1_1DescribeListenerRequest = (
  input: DescribeListenerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ListenerArn !== undefined && { ListenerArn: input.ListenerArn })
  };
};

const serializeAws_json1_1EndpointConfiguration = (
  input: EndpointConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientIPPreservationEnabled !== undefined && {
      ClientIPPreservationEnabled: input.ClientIPPreservationEnabled
    }),
    ...(input.EndpointId !== undefined && { EndpointId: input.EndpointId }),
    ...(input.Weight !== undefined && { Weight: input.Weight })
  };
};

const serializeAws_json1_1EndpointConfigurations = (
  input: EndpointConfiguration[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1EndpointConfiguration(entry, context)
  );
};

const serializeAws_json1_1ListAcceleratorsRequest = (
  input: ListAcceleratorsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListEndpointGroupsRequest = (
  input: ListEndpointGroupsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ListenerArn !== undefined && { ListenerArn: input.ListenerArn }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListListenersRequest = (
  input: ListListenersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceleratorArn !== undefined && {
      AcceleratorArn: input.AcceleratorArn
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1PortRange = (
  input: PortRange,
  context: __SerdeContext
): any => {
  return {
    ...(input.FromPort !== undefined && { FromPort: input.FromPort }),
    ...(input.ToPort !== undefined && { ToPort: input.ToPort })
  };
};

const serializeAws_json1_1PortRanges = (
  input: PortRange[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1PortRange(entry, context));
};

const serializeAws_json1_1UpdateAcceleratorAttributesRequest = (
  input: UpdateAcceleratorAttributesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceleratorArn !== undefined && {
      AcceleratorArn: input.AcceleratorArn
    }),
    ...(input.FlowLogsEnabled !== undefined && {
      FlowLogsEnabled: input.FlowLogsEnabled
    }),
    ...(input.FlowLogsS3Bucket !== undefined && {
      FlowLogsS3Bucket: input.FlowLogsS3Bucket
    }),
    ...(input.FlowLogsS3Prefix !== undefined && {
      FlowLogsS3Prefix: input.FlowLogsS3Prefix
    })
  };
};

const serializeAws_json1_1UpdateAcceleratorRequest = (
  input: UpdateAcceleratorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceleratorArn !== undefined && {
      AcceleratorArn: input.AcceleratorArn
    }),
    ...(input.Enabled !== undefined && { Enabled: input.Enabled }),
    ...(input.IpAddressType !== undefined && {
      IpAddressType: input.IpAddressType
    }),
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_json1_1UpdateEndpointGroupRequest = (
  input: UpdateEndpointGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndpointConfigurations !== undefined && {
      EndpointConfigurations: serializeAws_json1_1EndpointConfigurations(
        input.EndpointConfigurations,
        context
      )
    }),
    ...(input.EndpointGroupArn !== undefined && {
      EndpointGroupArn: input.EndpointGroupArn
    }),
    ...(input.HealthCheckIntervalSeconds !== undefined && {
      HealthCheckIntervalSeconds: input.HealthCheckIntervalSeconds
    }),
    ...(input.HealthCheckPath !== undefined && {
      HealthCheckPath: input.HealthCheckPath
    }),
    ...(input.HealthCheckPort !== undefined && {
      HealthCheckPort: input.HealthCheckPort
    }),
    ...(input.HealthCheckProtocol !== undefined && {
      HealthCheckProtocol: input.HealthCheckProtocol
    }),
    ...(input.ThresholdCount !== undefined && {
      ThresholdCount: input.ThresholdCount
    }),
    ...(input.TrafficDialPercentage !== undefined && {
      TrafficDialPercentage: input.TrafficDialPercentage
    })
  };
};

const serializeAws_json1_1UpdateListenerRequest = (
  input: UpdateListenerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientAffinity !== undefined && {
      ClientAffinity: input.ClientAffinity
    }),
    ...(input.ListenerArn !== undefined && { ListenerArn: input.ListenerArn }),
    ...(input.PortRanges !== undefined && {
      PortRanges: serializeAws_json1_1PortRanges(input.PortRanges, context)
    }),
    ...(input.Protocol !== undefined && { Protocol: input.Protocol })
  };
};

const deserializeAws_json1_1Accelerator = (
  output: any,
  context: __SerdeContext
): Accelerator => {
  return {
    __type: "Accelerator",
    AcceleratorArn:
      output.AcceleratorArn !== undefined && output.AcceleratorArn !== null
        ? output.AcceleratorArn
        : undefined,
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? new Date(Math.round(output.CreatedTime * 1000))
        : undefined,
    DnsName:
      output.DnsName !== undefined && output.DnsName !== null
        ? output.DnsName
        : undefined,
    Enabled:
      output.Enabled !== undefined && output.Enabled !== null
        ? output.Enabled
        : undefined,
    IpAddressType:
      output.IpAddressType !== undefined && output.IpAddressType !== null
        ? output.IpAddressType
        : undefined,
    IpSets:
      output.IpSets !== undefined && output.IpSets !== null
        ? deserializeAws_json1_1IpSets(output.IpSets, context)
        : undefined,
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? new Date(Math.round(output.LastModifiedTime * 1000))
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined
  } as any;
};

const deserializeAws_json1_1AcceleratorAttributes = (
  output: any,
  context: __SerdeContext
): AcceleratorAttributes => {
  return {
    __type: "AcceleratorAttributes",
    FlowLogsEnabled:
      output.FlowLogsEnabled !== undefined && output.FlowLogsEnabled !== null
        ? output.FlowLogsEnabled
        : undefined,
    FlowLogsS3Bucket:
      output.FlowLogsS3Bucket !== undefined && output.FlowLogsS3Bucket !== null
        ? output.FlowLogsS3Bucket
        : undefined,
    FlowLogsS3Prefix:
      output.FlowLogsS3Prefix !== undefined && output.FlowLogsS3Prefix !== null
        ? output.FlowLogsS3Prefix
        : undefined
  } as any;
};

const deserializeAws_json1_1AcceleratorNotDisabledException = (
  output: any,
  context: __SerdeContext
): AcceleratorNotDisabledException => {
  return {
    __type: "AcceleratorNotDisabledException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1AcceleratorNotFoundException = (
  output: any,
  context: __SerdeContext
): AcceleratorNotFoundException => {
  return {
    __type: "AcceleratorNotFoundException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1Accelerators = (
  output: any,
  context: __SerdeContext
): Accelerator[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Accelerator(entry, context)
  );
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

const deserializeAws_json1_1AssociatedEndpointGroupFoundException = (
  output: any,
  context: __SerdeContext
): AssociatedEndpointGroupFoundException => {
  return {
    __type: "AssociatedEndpointGroupFoundException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1AssociatedListenerFoundException = (
  output: any,
  context: __SerdeContext
): AssociatedListenerFoundException => {
  return {
    __type: "AssociatedListenerFoundException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateAcceleratorResponse = (
  output: any,
  context: __SerdeContext
): CreateAcceleratorResponse => {
  return {
    __type: "CreateAcceleratorResponse",
    Accelerator:
      output.Accelerator !== undefined && output.Accelerator !== null
        ? deserializeAws_json1_1Accelerator(output.Accelerator, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateEndpointGroupResponse = (
  output: any,
  context: __SerdeContext
): CreateEndpointGroupResponse => {
  return {
    __type: "CreateEndpointGroupResponse",
    EndpointGroup:
      output.EndpointGroup !== undefined && output.EndpointGroup !== null
        ? deserializeAws_json1_1EndpointGroup(output.EndpointGroup, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateListenerResponse = (
  output: any,
  context: __SerdeContext
): CreateListenerResponse => {
  return {
    __type: "CreateListenerResponse",
    Listener:
      output.Listener !== undefined && output.Listener !== null
        ? deserializeAws_json1_1Listener(output.Listener, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeAcceleratorAttributesResponse = (
  output: any,
  context: __SerdeContext
): DescribeAcceleratorAttributesResponse => {
  return {
    __type: "DescribeAcceleratorAttributesResponse",
    AcceleratorAttributes:
      output.AcceleratorAttributes !== undefined &&
      output.AcceleratorAttributes !== null
        ? deserializeAws_json1_1AcceleratorAttributes(
            output.AcceleratorAttributes,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeAcceleratorResponse = (
  output: any,
  context: __SerdeContext
): DescribeAcceleratorResponse => {
  return {
    __type: "DescribeAcceleratorResponse",
    Accelerator:
      output.Accelerator !== undefined && output.Accelerator !== null
        ? deserializeAws_json1_1Accelerator(output.Accelerator, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeEndpointGroupResponse = (
  output: any,
  context: __SerdeContext
): DescribeEndpointGroupResponse => {
  return {
    __type: "DescribeEndpointGroupResponse",
    EndpointGroup:
      output.EndpointGroup !== undefined && output.EndpointGroup !== null
        ? deserializeAws_json1_1EndpointGroup(output.EndpointGroup, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeListenerResponse = (
  output: any,
  context: __SerdeContext
): DescribeListenerResponse => {
  return {
    __type: "DescribeListenerResponse",
    Listener:
      output.Listener !== undefined && output.Listener !== null
        ? deserializeAws_json1_1Listener(output.Listener, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1EndpointDescription = (
  output: any,
  context: __SerdeContext
): EndpointDescription => {
  return {
    __type: "EndpointDescription",
    ClientIPPreservationEnabled:
      output.ClientIPPreservationEnabled !== undefined &&
      output.ClientIPPreservationEnabled !== null
        ? output.ClientIPPreservationEnabled
        : undefined,
    EndpointId:
      output.EndpointId !== undefined && output.EndpointId !== null
        ? output.EndpointId
        : undefined,
    HealthReason:
      output.HealthReason !== undefined && output.HealthReason !== null
        ? output.HealthReason
        : undefined,
    HealthState:
      output.HealthState !== undefined && output.HealthState !== null
        ? output.HealthState
        : undefined,
    Weight:
      output.Weight !== undefined && output.Weight !== null
        ? output.Weight
        : undefined
  } as any;
};

const deserializeAws_json1_1EndpointDescriptions = (
  output: any,
  context: __SerdeContext
): EndpointDescription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EndpointDescription(entry, context)
  );
};

const deserializeAws_json1_1EndpointGroup = (
  output: any,
  context: __SerdeContext
): EndpointGroup => {
  return {
    __type: "EndpointGroup",
    EndpointDescriptions:
      output.EndpointDescriptions !== undefined &&
      output.EndpointDescriptions !== null
        ? deserializeAws_json1_1EndpointDescriptions(
            output.EndpointDescriptions,
            context
          )
        : undefined,
    EndpointGroupArn:
      output.EndpointGroupArn !== undefined && output.EndpointGroupArn !== null
        ? output.EndpointGroupArn
        : undefined,
    EndpointGroupRegion:
      output.EndpointGroupRegion !== undefined &&
      output.EndpointGroupRegion !== null
        ? output.EndpointGroupRegion
        : undefined,
    HealthCheckIntervalSeconds:
      output.HealthCheckIntervalSeconds !== undefined &&
      output.HealthCheckIntervalSeconds !== null
        ? output.HealthCheckIntervalSeconds
        : undefined,
    HealthCheckPath:
      output.HealthCheckPath !== undefined && output.HealthCheckPath !== null
        ? output.HealthCheckPath
        : undefined,
    HealthCheckPort:
      output.HealthCheckPort !== undefined && output.HealthCheckPort !== null
        ? output.HealthCheckPort
        : undefined,
    HealthCheckProtocol:
      output.HealthCheckProtocol !== undefined &&
      output.HealthCheckProtocol !== null
        ? output.HealthCheckProtocol
        : undefined,
    ThresholdCount:
      output.ThresholdCount !== undefined && output.ThresholdCount !== null
        ? output.ThresholdCount
        : undefined,
    TrafficDialPercentage:
      output.TrafficDialPercentage !== undefined &&
      output.TrafficDialPercentage !== null
        ? output.TrafficDialPercentage
        : undefined
  } as any;
};

const deserializeAws_json1_1EndpointGroupAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): EndpointGroupAlreadyExistsException => {
  return {
    __type: "EndpointGroupAlreadyExistsException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1EndpointGroupNotFoundException = (
  output: any,
  context: __SerdeContext
): EndpointGroupNotFoundException => {
  return {
    __type: "EndpointGroupNotFoundException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1EndpointGroups = (
  output: any,
  context: __SerdeContext
): EndpointGroup[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EndpointGroup(entry, context)
  );
};

const deserializeAws_json1_1InternalServiceErrorException = (
  output: any,
  context: __SerdeContext
): InternalServiceErrorException => {
  return {
    __type: "InternalServiceErrorException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidArgumentException = (
  output: any,
  context: __SerdeContext
): InvalidArgumentException => {
  return {
    __type: "InvalidArgumentException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  return {
    __type: "InvalidNextTokenException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidPortRangeException = (
  output: any,
  context: __SerdeContext
): InvalidPortRangeException => {
  return {
    __type: "InvalidPortRangeException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1IpAddresses = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1IpSet = (
  output: any,
  context: __SerdeContext
): IpSet => {
  return {
    __type: "IpSet",
    IpAddresses:
      output.IpAddresses !== undefined && output.IpAddresses !== null
        ? deserializeAws_json1_1IpAddresses(output.IpAddresses, context)
        : undefined,
    IpFamily:
      output.IpFamily !== undefined && output.IpFamily !== null
        ? output.IpFamily
        : undefined
  } as any;
};

const deserializeAws_json1_1IpSets = (
  output: any,
  context: __SerdeContext
): IpSet[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1IpSet(entry, context)
  );
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  return {
    __type: "LimitExceededException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1ListAcceleratorsResponse = (
  output: any,
  context: __SerdeContext
): ListAcceleratorsResponse => {
  return {
    __type: "ListAcceleratorsResponse",
    Accelerators:
      output.Accelerators !== undefined && output.Accelerators !== null
        ? deserializeAws_json1_1Accelerators(output.Accelerators, context)
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListEndpointGroupsResponse = (
  output: any,
  context: __SerdeContext
): ListEndpointGroupsResponse => {
  return {
    __type: "ListEndpointGroupsResponse",
    EndpointGroups:
      output.EndpointGroups !== undefined && output.EndpointGroups !== null
        ? deserializeAws_json1_1EndpointGroups(output.EndpointGroups, context)
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1Listener = (
  output: any,
  context: __SerdeContext
): Listener => {
  return {
    __type: "Listener",
    ClientAffinity:
      output.ClientAffinity !== undefined && output.ClientAffinity !== null
        ? output.ClientAffinity
        : undefined,
    ListenerArn:
      output.ListenerArn !== undefined && output.ListenerArn !== null
        ? output.ListenerArn
        : undefined,
    PortRanges:
      output.PortRanges !== undefined && output.PortRanges !== null
        ? deserializeAws_json1_1PortRanges(output.PortRanges, context)
        : undefined,
    Protocol:
      output.Protocol !== undefined && output.Protocol !== null
        ? output.Protocol
        : undefined
  } as any;
};

const deserializeAws_json1_1ListenerNotFoundException = (
  output: any,
  context: __SerdeContext
): ListenerNotFoundException => {
  return {
    __type: "ListenerNotFoundException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1Listeners = (
  output: any,
  context: __SerdeContext
): Listener[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Listener(entry, context)
  );
};

const deserializeAws_json1_1ListListenersResponse = (
  output: any,
  context: __SerdeContext
): ListListenersResponse => {
  return {
    __type: "ListListenersResponse",
    Listeners:
      output.Listeners !== undefined && output.Listeners !== null
        ? deserializeAws_json1_1Listeners(output.Listeners, context)
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1PortRange = (
  output: any,
  context: __SerdeContext
): PortRange => {
  return {
    __type: "PortRange",
    FromPort:
      output.FromPort !== undefined && output.FromPort !== null
        ? output.FromPort
        : undefined,
    ToPort:
      output.ToPort !== undefined && output.ToPort !== null
        ? output.ToPort
        : undefined
  } as any;
};

const deserializeAws_json1_1PortRanges = (
  output: any,
  context: __SerdeContext
): PortRange[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PortRange(entry, context)
  );
};

const deserializeAws_json1_1UpdateAcceleratorAttributesResponse = (
  output: any,
  context: __SerdeContext
): UpdateAcceleratorAttributesResponse => {
  return {
    __type: "UpdateAcceleratorAttributesResponse",
    AcceleratorAttributes:
      output.AcceleratorAttributes !== undefined &&
      output.AcceleratorAttributes !== null
        ? deserializeAws_json1_1AcceleratorAttributes(
            output.AcceleratorAttributes,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateAcceleratorResponse = (
  output: any,
  context: __SerdeContext
): UpdateAcceleratorResponse => {
  return {
    __type: "UpdateAcceleratorResponse",
    Accelerator:
      output.Accelerator !== undefined && output.Accelerator !== null
        ? deserializeAws_json1_1Accelerator(output.Accelerator, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateEndpointGroupResponse = (
  output: any,
  context: __SerdeContext
): UpdateEndpointGroupResponse => {
  return {
    __type: "UpdateEndpointGroupResponse",
    EndpointGroup:
      output.EndpointGroup !== undefined && output.EndpointGroup !== null
        ? deserializeAws_json1_1EndpointGroup(output.EndpointGroup, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateListenerResponse = (
  output: any,
  context: __SerdeContext
): UpdateListenerResponse => {
  return {
    __type: "UpdateListenerResponse",
    Listener:
      output.Listener !== undefined && output.Listener !== null
        ? deserializeAws_json1_1Listener(output.Listener, context)
        : undefined
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
